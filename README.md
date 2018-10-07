# DOMMY

Custom Element rendering for dummies.

# Motivation

I wanted a convenience function for rendering in custom elements, without importing a library like Polymer that completely redefines how I create custom elements. I just want to render stuff without losing functionality, and with the same "diff/patch" virtual DOM efficiency libraries like React gives me.

This library uses [morphdom](https://github.com/patrick-steele-idem/morphdom) under the hood as the diffing engine, similar to [yo-yo](https://github.com/maxogden/yo-yo). But unlike **yo-yo**, uses a **createElement** function instead of ES6 template tags in favor of supporting JSX.

# API

_DOMMY_ has two functions. Only one of which you will use directly.   

**createElement**  
This is just for using JSX. With `babel-plugin-transform-react-jsx` or any other source transform that lets you use a custom jsx pragma, simply do:
```
/** @jsx createElement */
import { createElement } from '@abradley2/dommy'
```
Kewl. Now you can use JSX with _DOMMY_ just as you would with React.

**render**  
This is the only function of _DOMMY_ you'll actually use.
```
/** @jsx createElement */
import { createElement, render } from '@abradley2/dommy'

var count = 0

const update = () => 
  render(
    this,
    <div>
      <button
        onclick={() => {
          count += 1
          update()
        }}
      >
        {`Clicked ${count} times`}
      </button>
    </div>
  )

update() // initial render
```

# Guide: Usage With Custom Elements

This is the main motivation behind _DOMMY_ and if it's not what you're using it for there's 100% definitely a better solution for you out there. 

Let's start with a simple counter element like in the original example. Hardly anything changes here.

```
class MyCounter extends HTMLElement {
  connectedCallback () {
    var count = 0

    this.update = () => {
      render(
        this,
        <div>
          <button
            onclick={() => {
              count += 1
              this.update()
            }}
          >
            {`Clicked ${count} times`}
          </button>
        </div>
      )
    }

    this.update()
  }
}
```

Ok. Kewl. Now let's allow the application to pass in an attribute called "buttontitle" to our custom element and use it in the render function. Really, we're just doing what we normally do with custom elements: using `this.getAttribute` to handle data passed in from the parent.

```
this.update = () => {
  render(
    this,
    <div>
      <h3>{this.getAttribute("buttontitle")}</h3>
      <button
        onclick={() => {
          count += 1
          this.update()
        }}
      >
        {`Clicked ${count} times`}
      </button>
    </div>
  )
}
```

Awesome. But `buttontitle` might not always be the same as it was when the component was mounted. Once again, the solution is just doing what we normally do with web components.

```
class MyCounter extends HTMLElement {
  static get observedAttributes () {
    return ['buttontitle']
  }

  attributeChangedCallback() {
    if (this.update) this.update()
  }
```



