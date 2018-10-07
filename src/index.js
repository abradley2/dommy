var morphdom = require('morphdom')

var specials = ['className', 'id']

exports.createElement = function (tag, attributes, ...children) {
  var el = document.createElement(tag)
  if (attributes) {
    Object.keys(attributes).forEach(function (name) {
      var val = attributes[name]
      if (val && val.constructor === Function) {
        el[name] = val
        return
      }
      if (specials.indexOf(name) !== -1) {
        el[name] = val
        return
      }
      el.setAttribute(name, val)
    })
  }
  children.forEach(function appendChild (child) {
    if (child && child.constructor === String) {
      var textNode = document.createTextNode(child)
      el.appendChild(textNode)
      return
    }
    if (Array.isArray(child)) {
      child.forEach(appendChild)
      return
    }
    el.appendChild(child)
  })

  return el
}

exports.render = function (target, elementTree) {
  if (target.children.length === 0) {
    target.appendChild(elementTree)
  }
  var treeRoot = target.children[0]
  morphdom(treeRoot, elementTree, {
    onNodeAdded: function (node) {
      var ref = node.getAttribute && node.getAttribute('ref')
      if (ref) target[ref] = node
    },
    onNodeDiscarded: function (node) {
      var ref = node.getAttribute && node.getAttribute('ref')
      if (ref) target[ref] = null
    }
  })
}
