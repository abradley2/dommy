/** @jsx createElement */
import { createElement, render } from '../dist/index.js'

import { test } from 'tape'
import '@webcomponents/webcomponentsjs/webcomponents-bundle.js'

class MyCounter extends HTMLElement {
  connectedCallback () {
    var count = 0
    this.render = () => {
      const view = (
        <div>
          <button
            onclick={() => {
              count += 1
              this.render()
            }}
          >
            {count.toString()}
          </button>
        </div>
      )
      render(this, view)
    }

    this.render()
  }
}

customElements.define('my-counter', MyCounter)

var testNode
function setup () {
  testNode = document.createElement('div')
  document.body.appendChild(testNode)
}

function reset () {
  document.body.removeChild(testNode)
  testNode = null
}

test.onFailure(() => {
  reset()
})

test('increment button', t => {
  t.plan(1)
  setup()

  const counterEl = document.createElement('my-counter')

  testNode.appendChild(counterEl)

  const btn = testNode.querySelector('button')
  const startVal = parseInt(btn.innerText, 10)
  btn.click()
  const endVal = parseInt(btn.innerText, 10)

  t.equal(endVal, startVal + 1)
  t.end()
})
