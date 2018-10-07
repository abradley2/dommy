// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"dist/index.js":[function(require,module,exports) {
var define;
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

parcelRequire = function (e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
      o = "function" == typeof require && require;

  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && "string" == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      p.resolve = function (r) {
        return e[n][1][r] || r;
      }, p.cache = {};
      var l = r[n] = new u.Module(n);
      e[n][0].call(l.exports, p, l, l.exports, this);
    }

    return r[n].exports;

    function p(e) {
      return u(p.resolve(e));
    }
  }

  u.isParcelRequire = !0, u.Module = function (e) {
    this.id = e, this.bundle = u, this.exports = {};
  }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
    e[r] = [function (e, r) {
      r.exports = n;
    }, {}];
  };

  for (var f = 0; f < n.length; f++) {
    u(n[f]);
  }

  if (n.length) {
    var c = u(n[n.length - 1]);
    "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
      return c;
    }) : t && (this[t] = c);
  }

  return u;
}({
  "hAtP": [function (require, module, exports) {
    "use strict";

    var e,
        t,
        n = "http://www.w3.org/1999/xhtml",
        r = "undefined" == typeof document ? void 0 : document,
        i = r ? r.body || r.createElement("div") : {},
        a = t = i.hasAttributeNS ? function (e, t, n) {
      return e.hasAttributeNS(t, n);
    } : i.hasAttribute ? function (e, t, n) {
      return e.hasAttribute(n);
    } : function (e, t, n) {
      return null != e.getAttributeNode(t, n);
    };

    function o(t) {
      var n;
      return !e && r.createRange && (e = r.createRange()).selectNode(r.body), e && e.createContextualFragment ? n = e.createContextualFragment(t) : (n = r.createElement("body")).innerHTML = t, n.childNodes[0];
    }

    function d(e, t) {
      var n = e.nodeName,
          r = t.nodeName;
      return n === r || !!(t.actualize && n.charCodeAt(0) < 91 && r.charCodeAt(0) > 90) && n === r.toUpperCase();
    }

    function l(e, t) {
      return t && t !== n ? r.createElementNS(t, e) : r.createElement(e);
    }

    function u(e, t) {
      for (var n = e.firstChild; n;) {
        var r = n.nextSibling;
        t.appendChild(n), n = r;
      }

      return t;
    }

    function f(e, t) {
      var n,
          r,
          i,
          o,
          d,
          l = t.attributes;

      for (n = l.length - 1; n >= 0; --n) {
        i = (r = l[n]).name, o = r.namespaceURI, d = r.value, o ? (i = r.localName || i, e.getAttributeNS(o, i) !== d && e.setAttributeNS(o, i, d)) : e.getAttribute(i) !== d && e.setAttribute(i, d);
      }

      for (n = (l = e.attributes).length - 1; n >= 0; --n) {
        !1 !== (r = l[n]).specified && (i = r.name, (o = r.namespaceURI) ? (i = r.localName || i, a(t, o, i) || e.removeAttributeNS(o, i)) : a(t, null, i) || e.removeAttribute(i));
      }
    }

    function c(e, t, n) {
      e[n] !== t[n] && (e[n] = t[n], e[n] ? e.setAttribute(n, "") : e.removeAttribute(n, ""));
    }

    var v = {
      OPTION: function OPTION(e, t) {
        c(e, t, "selected");
      },
      INPUT: function INPUT(e, t) {
        c(e, t, "checked"), c(e, t, "disabled"), e.value !== t.value && (e.value = t.value), a(t, null, "value") || e.removeAttribute("value");
      },
      TEXTAREA: function TEXTAREA(e, t) {
        var n = t.value;
        e.value !== n && (e.value = n);
        var r = e.firstChild;

        if (r) {
          var i = r.nodeValue;
          if (i == n || !n && i == e.placeholder) return;
          r.nodeValue = n;
        }
      },
      SELECT: function SELECT(e, t) {
        if (!a(t, null, "multiple")) {
          for (var n = 0, r = t.firstChild; r;) {
            var i = r.nodeName;

            if (i && "OPTION" === i.toUpperCase()) {
              if (a(r, null, "selected")) {
                n;
                break;
              }

              n++;
            }

            r = r.nextSibling;
          }

          e.selectedIndex = n;
        }
      }
    },
        s = 1,
        m = 3,
        p = 8;

    function N() {}

    function h(e) {
      return e.id;
    }

    function b(e) {
      return function (t, n, i) {
        if (i || (i = {}), "string" == typeof n) if ("#document" === t.nodeName || "HTML" === t.nodeName) {
          var a = n;
          (n = r.createElement("html")).innerHTML = a;
        } else n = o(n);
        var f,
            c = i.getNodeKey || h,
            b = i.onBeforeNodeAdded || N,
            g = i.onNodeAdded || N,
            C = i.onBeforeElUpdated || N,
            A = i.onElUpdated || N,
            S = i.onBeforeNodeDiscarded || N,
            T = i.onNodeDiscarded || N,
            x = i.onBeforeElChildrenUpdated || N,
            E = !0 === i.childrenOnly,
            y = {};

        function V(e) {
          f ? f.push(e) : f = [e];
        }

        function U(e, t, n) {
          !1 !== S(e) && (t && t.removeChild(e), T(e), function e(t, n) {
            if (t.nodeType === s) for (var r = t.firstChild; r;) {
              var i = void 0;
              n && (i = c(r)) ? V(i) : (T(r), r.firstChild && e(r, n)), r = r.nextSibling;
            }
          }(e, n));
        }

        function I(e) {
          g(e);

          for (var t = e.firstChild; t;) {
            var n = t.nextSibling,
                r = c(t);

            if (r) {
              var i = y[r];
              i && d(t, i) && (t.parentNode.replaceChild(i, t), R(i, t));
            }

            I(t), t = n;
          }
        }

        function R(i, a, o) {
          var l,
              u = c(a);

          if (u && delete y[u], !n.isSameNode || !n.isSameNode(t)) {
            if (!o) {
              if (!1 === C(i, a)) return;
              if (e(i, a), A(i), !1 === x(i, a)) return;
            }

            if ("TEXTAREA" !== i.nodeName) {
              var f,
                  N,
                  h,
                  g,
                  S = a.firstChild,
                  T = i.firstChild;

              e: for (; S;) {
                for (h = S.nextSibling, f = c(S); T;) {
                  if (N = T.nextSibling, S.isSameNode && S.isSameNode(T)) {
                    S = h, T = N;
                    continue e;
                  }

                  l = c(T);
                  var E = T.nodeType,
                      w = void 0;

                  if (E === S.nodeType && (E === s ? (f ? f !== l && ((g = y[f]) ? T.nextSibling === g ? w = !1 : (i.insertBefore(g, T), N = T.nextSibling, l ? V(l) : U(T, i, !0), T = g) : w = !1) : l && (w = !1), (w = !1 !== w && d(T, S)) && R(T, S)) : E !== m && E != p || (w = !0, T.nodeValue !== S.nodeValue && (T.nodeValue = S.nodeValue))), w) {
                    S = h, T = N;
                    continue e;
                  }

                  l ? V(l) : U(T, i, !0), T = N;
                }

                if (f && (g = y[f]) && d(g, S)) i.appendChild(g), R(g, S);else {
                  var z = b(S);
                  !1 !== z && (z && (S = z), S.actualize && (S = S.actualize(i.ownerDocument || r)), i.appendChild(S), I(S));
                }
                S = h, T = N;
              }

              for (; T;) {
                N = T.nextSibling, (l = c(T)) ? V(l) : U(T, i, !0), T = N;
              }
            }

            var B = v[i.nodeName];
            B && B(i, a);
          }
        }

        !function e(t) {
          if (t.nodeType === s) for (var n = t.firstChild; n;) {
            var r = c(n);
            r && (y[r] = n), e(n), n = n.nextSibling;
          }
        }(t);
        var w = t,
            z = w.nodeType,
            B = n.nodeType;
        if (!E) if (z === s) B === s ? d(t, n) || (T(t), w = u(t, l(n.nodeName, n.namespaceURI))) : w = n;else if (z === m || z === p) {
          if (B === z) return w.nodeValue !== n.nodeValue && (w.nodeValue = n.nodeValue), w;
          w = n;
        }
        if (w === n) T(t);else if (R(w, n, E), f) for (var O = 0, D = f.length; O < D; O++) {
          var L = y[f[O]];
          L && U(L, L.parentNode, !1);
        }
        return !E && w !== t && t.parentNode && (w.actualize && (w = w.actualize(t.ownerDocument || r)), t.parentNode.replaceChild(w, t)), w;
      };
    }

    var g = b(f);
    module.exports = g;
  }, {}],
  "Focm": [function (require, module, exports) {
    var e = require("morphdom"),
        t = ["className", "id"];

    exports.createElement = function (e, r) {
      var n = document.createElement(e);
      r && Object.keys(r).forEach(function (e) {
        var o = r[e];
        o && o.constructor === Function ? n[e] = o : -1 === t.indexOf(e) ? n.setAttribute(e, o) : n[e] = o;
      });

      for (var o = arguments.length, c = new Array(o > 2 ? o - 2 : 0), i = 2; i < o; i++) {
        c[i - 2] = arguments[i];
      }

      return c.forEach(function e(t) {
        if (t && t.constructor === String) {
          var r = document.createTextNode(t);
          n.appendChild(r);
        } else Array.isArray(t) ? t.forEach(e) : n.appendChild(t);
      }), n;
    }, exports.render = function (t, r) {
      0 === t.children.length && t.appendChild(r);
      var n = t.children[0];
      e(n, r, {
        onNodeAdded: function onNodeAdded(e) {
          var r = e.getAttribute && e.getAttribute("ref");
          r && (t[r] = e);
        },
        onNodeDiscarded: function onNodeDiscarded(e) {
          var r = e.getAttribute && e.getAttribute("ref");
          r && (t[r] = null);
        }
      });
    };
  }, {
    "morphdom": "hAtP"
  }]
}, {}, ["Focm"], null);
},{}],"node_modules/defined/index.js":[function(require,module,exports) {
module.exports = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined) return arguments[i];
    }
};

},{}],"node_modules/node-libs-browser/node_modules/events/events.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}

module.exports = EventEmitter; // Backwards-compat with node 0.10.x

EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

EventEmitter.defaultMaxListeners = 10; // Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.

EventEmitter.prototype.setMaxListeners = function (n) {
  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function (type) {
  var er, handler, len, args, i, listeners;
  if (!this._events) this._events = {}; // If there is no 'error' event listener then throw.

  if (type === 'error') {
    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
      er = arguments[1];

      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];
  if (isUndefined(handler)) return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;

      case 2:
        handler.call(this, arguments[1]);
        break;

      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower

      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;

    for (i = 0; i < len; i++) listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function (type, listener) {
  var m;
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  if (!this._events) this._events = {}; // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".

  if (this._events.newListener) this.emit('newListener', type, isFunction(listener.listener) ? listener.listener : listener);
  if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;else if (isObject(this._events[type])) // If we've already got an array, just append.
    this._events[type].push(listener);else // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener]; // Check for listener leak

  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' + 'leak detected. %d listeners added. ' + 'Use emitter.setMaxListeners() to increase limit.', this._events[type].length);

      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function (type, listener) {
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);
  return this;
}; // emits a 'removeListener' event iff the listener was removed


EventEmitter.prototype.removeListener = function (type, listener) {
  var list, position, length, i;
  if (!isFunction(listener)) throw TypeError('listener must be a function');
  if (!this._events || !this._events[type]) return this;
  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener || isFunction(list.listener) && list.listener === listener) {
    delete this._events[type];
    if (this._events.removeListener) this.emit('removeListener', type, listener);
  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
        position = i;
        break;
      }
    }

    if (position < 0) return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener) this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function (type) {
  var key, listeners;
  if (!this._events) return this; // not listening for removeListener, no need to emit

  if (!this._events.removeListener) {
    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
    return this;
  } // emit removeListener for all listeners on all events


  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }

    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
  }

  delete this._events[type];
  return this;
};

EventEmitter.prototype.listeners = function (type) {
  var ret;
  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function (type) {
  if (this._events) {
    var evlistener = this._events[type];
    if (isFunction(evlistener)) return 1;else if (evlistener) return evlistener.length;
  }

  return 0;
};

EventEmitter.listenerCount = function (emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}
},{}],"node_modules/inherits/inherits_browser.js":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],"node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"node_modules/process-nextick-args/index.js":[function(require,module,exports) {
var process = require("process");
'use strict';

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


},{"process":"node_modules/process/browser.js"}],"node_modules/isarray/index.js":[function(require,module,exports) {
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],"node_modules/readable-stream/lib/internal/streams/stream-browser.js":[function(require,module,exports) {
module.exports = require('events').EventEmitter;

},{"events":"node_modules/node-libs-browser/node_modules/events/events.js"}],"node_modules/base64-js/index.js":[function(require,module,exports) {
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],"node_modules/ieee754/index.js":[function(require,module,exports) {
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],"node_modules/node-libs-browser/node_modules/buffer/index.js":[function(require,module,exports) {

var global = arguments[3];
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')
var isArray = require('isarray')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

},{"base64-js":"node_modules/base64-js/index.js","ieee754":"node_modules/ieee754/index.js","isarray":"node_modules/isarray/index.js","buffer":"node_modules/node-libs-browser/node_modules/buffer/index.js"}],"node_modules/safe-buffer/index.js":[function(require,module,exports) {

/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":"node_modules/node-libs-browser/node_modules/buffer/index.js"}],"node_modules/core-util-is/lib/util.js":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

},{"buffer":"node_modules/node-libs-browser/node_modules/buffer/index.js"}],"node_modules/parcel-bundler/src/builtins/_empty.js":[function(require,module,exports) {

},{}],"node_modules/readable-stream/lib/internal/streams/BufferList.js":[function(require,module,exports) {

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = require('safe-buffer').Buffer;
var util = require('util');

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}
},{"safe-buffer":"node_modules/safe-buffer/index.js","util":"node_modules/parcel-bundler/src/builtins/_empty.js"}],"node_modules/readable-stream/lib/internal/streams/destroy.js":[function(require,module,exports) {
'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};
},{"process-nextick-args":"node_modules/process-nextick-args/index.js"}],"node_modules/util-deprecate/browser.js":[function(require,module,exports) {
var global = arguments[3];

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

},{}],"node_modules/readable-stream/lib/_stream_writable.js":[function(require,module,exports) {
var process = require("process");

var global = arguments[3];
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = require('./internal/streams/destroy');

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
},{"process-nextick-args":"node_modules/process-nextick-args/index.js","core-util-is":"node_modules/core-util-is/lib/util.js","inherits":"node_modules/inherits/inherits_browser.js","util-deprecate":"node_modules/util-deprecate/browser.js","./internal/streams/stream":"node_modules/readable-stream/lib/internal/streams/stream-browser.js","safe-buffer":"node_modules/safe-buffer/index.js","./internal/streams/destroy":"node_modules/readable-stream/lib/internal/streams/destroy.js","./_stream_duplex":"node_modules/readable-stream/lib/_stream_duplex.js","process":"node_modules/process/browser.js"}],"node_modules/readable-stream/lib/_stream_duplex.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};
},{"process-nextick-args":"node_modules/process-nextick-args/index.js","core-util-is":"node_modules/core-util-is/lib/util.js","inherits":"node_modules/inherits/inherits_browser.js","./_stream_readable":"node_modules/readable-stream/lib/_stream_readable.js","./_stream_writable":"node_modules/readable-stream/lib/_stream_writable.js"}],"node_modules/string_decoder/lib/string_decoder.js":[function(require,module,exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}
},{"safe-buffer":"node_modules/safe-buffer/index.js"}],"node_modules/readable-stream/lib/_stream_readable.js":[function(require,module,exports) {

var global = arguments[3];
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = require('events').EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = require('util');
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = require('./internal/streams/BufferList');
var destroyImpl = require('./internal/streams/destroy');
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
},{"process-nextick-args":"node_modules/process-nextick-args/index.js","isarray":"node_modules/isarray/index.js","events":"node_modules/node-libs-browser/node_modules/events/events.js","./internal/streams/stream":"node_modules/readable-stream/lib/internal/streams/stream-browser.js","safe-buffer":"node_modules/safe-buffer/index.js","core-util-is":"node_modules/core-util-is/lib/util.js","inherits":"node_modules/inherits/inherits_browser.js","util":"node_modules/parcel-bundler/src/builtins/_empty.js","./internal/streams/BufferList":"node_modules/readable-stream/lib/internal/streams/BufferList.js","./internal/streams/destroy":"node_modules/readable-stream/lib/internal/streams/destroy.js","./_stream_duplex":"node_modules/readable-stream/lib/_stream_duplex.js","string_decoder/":"node_modules/string_decoder/lib/string_decoder.js","process":"node_modules/process/browser.js"}],"node_modules/readable-stream/lib/_stream_transform.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":"node_modules/readable-stream/lib/_stream_duplex.js","core-util-is":"node_modules/core-util-is/lib/util.js","inherits":"node_modules/inherits/inherits_browser.js"}],"node_modules/readable-stream/lib/_stream_passthrough.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = require('core-util-is');
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":"node_modules/readable-stream/lib/_stream_transform.js","core-util-is":"node_modules/core-util-is/lib/util.js","inherits":"node_modules/inherits/inherits_browser.js"}],"node_modules/readable-stream/readable-browser.js":[function(require,module,exports) {
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_readable.js":"node_modules/readable-stream/lib/_stream_readable.js","./lib/_stream_writable.js":"node_modules/readable-stream/lib/_stream_writable.js","./lib/_stream_duplex.js":"node_modules/readable-stream/lib/_stream_duplex.js","./lib/_stream_transform.js":"node_modules/readable-stream/lib/_stream_transform.js","./lib/_stream_passthrough.js":"node_modules/readable-stream/lib/_stream_passthrough.js"}],"node_modules/readable-stream/writable-browser.js":[function(require,module,exports) {
module.exports = require('./lib/_stream_writable.js');

},{"./lib/_stream_writable.js":"node_modules/readable-stream/lib/_stream_writable.js"}],"node_modules/readable-stream/duplex-browser.js":[function(require,module,exports) {
module.exports = require('./lib/_stream_duplex.js');

},{"./lib/_stream_duplex.js":"node_modules/readable-stream/lib/_stream_duplex.js"}],"node_modules/readable-stream/transform.js":[function(require,module,exports) {
module.exports = require('./readable').Transform

},{"./readable":"node_modules/readable-stream/readable-browser.js"}],"node_modules/readable-stream/passthrough.js":[function(require,module,exports) {
module.exports = require('./readable').PassThrough

},{"./readable":"node_modules/readable-stream/readable-browser.js"}],"node_modules/stream-browserify/index.js":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = require('events').EventEmitter;
var inherits = require('inherits');

inherits(Stream, EE);
Stream.Readable = require('readable-stream/readable.js');
Stream.Writable = require('readable-stream/writable.js');
Stream.Duplex = require('readable-stream/duplex.js');
Stream.Transform = require('readable-stream/transform.js');
Stream.PassThrough = require('readable-stream/passthrough.js');

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};

},{"events":"node_modules/node-libs-browser/node_modules/events/events.js","inherits":"node_modules/inherits/inherits_browser.js","readable-stream/readable.js":"node_modules/readable-stream/readable-browser.js","readable-stream/writable.js":"node_modules/readable-stream/writable-browser.js","readable-stream/duplex.js":"node_modules/readable-stream/duplex-browser.js","readable-stream/transform.js":"node_modules/readable-stream/transform.js","readable-stream/passthrough.js":"node_modules/readable-stream/passthrough.js"}],"node_modules/through/index.js":[function(require,module,exports) {
var process = require("process");
var Stream = require('stream')

// through
//
// a stream that does nothing but re-emit the input.
// useful for aggregating a series of changing but not ending streams into one stream)

exports = module.exports = through
through.through = through

//create a readable writable stream.

function through (write, end, opts) {
  write = write || function (data) { this.queue(data) }
  end = end || function () { this.queue(null) }

  var ended = false, destroyed = false, buffer = [], _ended = false
  var stream = new Stream()
  stream.readable = stream.writable = true
  stream.paused = false

//  stream.autoPause   = !(opts && opts.autoPause   === false)
  stream.autoDestroy = !(opts && opts.autoDestroy === false)

  stream.write = function (data) {
    write.call(this, data)
    return !stream.paused
  }

  function drain() {
    while(buffer.length && !stream.paused) {
      var data = buffer.shift()
      if(null === data)
        return stream.emit('end')
      else
        stream.emit('data', data)
    }
  }

  stream.queue = stream.push = function (data) {
//    console.error(ended)
    if(_ended) return stream
    if(data === null) _ended = true
    buffer.push(data)
    drain()
    return stream
  }

  //this will be registered as the first 'end' listener
  //must call destroy next tick, to make sure we're after any
  //stream piped from here.
  //this is only a problem if end is not emitted synchronously.
  //a nicer way to do this is to make sure this is the last listener for 'end'

  stream.on('end', function () {
    stream.readable = false
    if(!stream.writable && stream.autoDestroy)
      process.nextTick(function () {
        stream.destroy()
      })
  })

  function _end () {
    stream.writable = false
    end.call(stream)
    if(!stream.readable && stream.autoDestroy)
      stream.destroy()
  }

  stream.end = function (data) {
    if(ended) return
    ended = true
    if(arguments.length) stream.write(data)
    _end() // will emit or queue
    return stream
  }

  stream.destroy = function () {
    if(destroyed) return
    destroyed = true
    ended = true
    buffer.length = 0
    stream.writable = stream.readable = false
    stream.emit('close')
    return stream
  }

  stream.pause = function () {
    if(stream.paused) return
    stream.paused = true
    return stream
  }

  stream.resume = function () {
    if(stream.paused) {
      stream.paused = false
      stream.emit('resume')
    }
    drain()
    //may have become paused again,
    //as drain emits 'data'.
    if(!stream.paused)
      stream.emit('drain')
    return stream
  }
  return stream
}


},{"stream":"node_modules/stream-browserify/index.js","process":"node_modules/process/browser.js"}],"node_modules/tape/lib/default_stream.js":[function(require,module,exports) {
var process = require("process");
var through = require('through');
var fs = require('fs');

module.exports = function () {
    var line = '';
    var stream = through(write, flush);
    return stream;

    function write (buf) {
        for (var i = 0; i < buf.length; i++) {
            var c = typeof buf === 'string'
                ? buf.charAt(i)
                : String.fromCharCode(buf[i])
            ;
            if (c === '\n') flush();
            else line += c;
        }
    }

    function flush () {
        if (fs.writeSync && /^win/.test(process.platform)) {
            try { fs.writeSync(1, line + '\n'); }
            catch (e) { stream.emit('error', e) }
        } else {
            try { console.log(line) }
            catch (e) { stream.emit('error', e) }
        }
        line = '';
    }
};

},{"through":"node_modules/through/index.js","fs":"node_modules/parcel-bundler/src/builtins/_empty.js","process":"node_modules/process/browser.js"}],"node_modules/deep-equal/lib/keys.js":[function(require,module,exports) {
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],"node_modules/deep-equal/lib/is_arguments.js":[function(require,module,exports) {
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],"node_modules/deep-equal/index.js":[function(require,module,exports) {
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/keys.js":"node_modules/deep-equal/lib/keys.js","./lib/is_arguments.js":"node_modules/deep-equal/lib/is_arguments.js"}],"node_modules/node-libs-browser/node_modules/path-browserify/index.js":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

},{"process":"node_modules/process/browser.js"}],"node_modules/function-bind/implementation.js":[function(require,module,exports) {
'use strict';

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],"node_modules/function-bind/index.js":[function(require,module,exports) {
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":"node_modules/function-bind/implementation.js"}],"node_modules/has/src/index.js":[function(require,module,exports) {
'use strict';

var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
},{"function-bind":"node_modules/function-bind/index.js"}],"node_modules/object-keys/isArguments.js":[function(require,module,exports) {
'use strict';

var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
  var str = toStr.call(value);
  var isArgs = str === '[object Arguments]';

  if (!isArgs) {
    isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
  }

  return isArgs;
};
},{}],"node_modules/object-keys/index.js":[function(require,module,exports) {
'use strict'; // modified from https://github.com/es-shims/es5-shim

var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;

var isArgs = require('./isArguments');

var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({
  toString: null
}, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];

var equalsConstructorPrototype = function (o) {
  var ctor = o.constructor;
  return ctor && ctor.prototype === o;
};

var excludedKeys = {
  $applicationCache: true,
  $console: true,
  $external: true,
  $frame: true,
  $frameElement: true,
  $frames: true,
  $innerHeight: true,
  $innerWidth: true,
  $outerHeight: true,
  $outerWidth: true,
  $pageXOffset: true,
  $pageYOffset: true,
  $parent: true,
  $scrollLeft: true,
  $scrollTop: true,
  $scrollX: true,
  $scrollY: true,
  $self: true,
  $webkitIndexedDB: true,
  $webkitStorageInfo: true,
  $window: true
};

var hasAutomationEqualityBug = function () {
  /* global window */
  if (typeof window === 'undefined') {
    return false;
  }

  for (var k in window) {
    try {
      if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
        try {
          equalsConstructorPrototype(window[k]);
        } catch (e) {
          return true;
        }
      }
    } catch (e) {
      return true;
    }
  }

  return false;
}();

var equalsConstructorPrototypeIfNotBuggy = function (o) {
  /* global window */
  if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
    return equalsConstructorPrototype(o);
  }

  try {
    return equalsConstructorPrototype(o);
  } catch (e) {
    return false;
  }
};

var keysShim = function keys(object) {
  var isObject = object !== null && typeof object === 'object';
  var isFunction = toStr.call(object) === '[object Function]';
  var isArguments = isArgs(object);
  var isString = isObject && toStr.call(object) === '[object String]';
  var theKeys = [];

  if (!isObject && !isFunction && !isArguments) {
    throw new TypeError('Object.keys called on a non-object');
  }

  var skipProto = hasProtoEnumBug && isFunction;

  if (isString && object.length > 0 && !has.call(object, 0)) {
    for (var i = 0; i < object.length; ++i) {
      theKeys.push(String(i));
    }
  }

  if (isArguments && object.length > 0) {
    for (var j = 0; j < object.length; ++j) {
      theKeys.push(String(j));
    }
  } else {
    for (var name in object) {
      if (!(skipProto && name === 'prototype') && has.call(object, name)) {
        theKeys.push(String(name));
      }
    }
  }

  if (hasDontEnumBug) {
    var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

    for (var k = 0; k < dontEnums.length; ++k) {
      if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
        theKeys.push(dontEnums[k]);
      }
    }
  }

  return theKeys;
};

keysShim.shim = function shimObjectKeys() {
  if (Object.keys) {
    var keysWorksWithArguments = function () {
      // Safari 5.0 bug
      return (Object.keys(arguments) || '').length === 2;
    }(1, 2);

    if (!keysWorksWithArguments) {
      var originalKeys = Object.keys;

      Object.keys = function keys(object) {
        // eslint-disable-line func-name-matching
        if (isArgs(object)) {
          return originalKeys(slice.call(object));
        } else {
          return originalKeys(object);
        }
      };
    }
  } else {
    Object.keys = keysShim;
  }

  return Object.keys || keysShim;
};

module.exports = keysShim;
},{"./isArguments":"node_modules/object-keys/isArguments.js"}],"node_modules/define-properties/index.js":[function(require,module,exports) {
'use strict';

var keys = require('object-keys');

var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
  return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
  var obj = {};

  try {
    origDefineProperty(obj, 'x', {
      enumerable: false,
      value: obj
    }); // eslint-disable-next-line no-unused-vars, no-restricted-syntax

    for (var _ in obj) {
      // jscs:ignore disallowUnusedVariables
      return false;
    }

    return obj.x === obj;
  } catch (e) {
    /* this is IE 8. */
    return false;
  }
};

var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
  if (name in object && (!isFunction(predicate) || !predicate())) {
    return;
  }

  if (supportsDescriptors) {
    origDefineProperty(object, name, {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    });
  } else {
    object[name] = value;
  }
};

var defineProperties = function (object, map) {
  var predicates = arguments.length > 2 ? arguments[2] : {};
  var props = keys(map);

  if (hasSymbols) {
    props = concat.call(props, Object.getOwnPropertySymbols(map));
  }

  for (var i = 0; i < props.length; i += 1) {
    defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
  }
};

defineProperties.supportsDescriptors = !!supportsDescriptors;
module.exports = defineProperties;
},{"object-keys":"node_modules/object-keys/index.js"}],"node_modules/es-abstract/GetIntrinsic.js":[function(require,module,exports) {
'use strict';
/* globals
	Set,
	Map,
	WeakSet,
	WeakMap,

	Promise,

	Symbol,
	Proxy,

	Atomics,
	SharedArrayBuffer,

	ArrayBuffer,
	DataView,
	Uint8Array,
	Float32Array,
	Float64Array,
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8ClampedArray,
	Uint16Array,
	Uint32Array,
*/

var undefined; // eslint-disable-line no-shadow-restricted-names

var ThrowTypeError = Object.getOwnPropertyDescriptor ? function () {
  return Object.getOwnPropertyDescriptor(arguments, 'callee').get;
}() : function () {
  throw new TypeError();
};
var hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';

var getProto = Object.getPrototypeOf || function (x) {
  return x.__proto__;
}; // eslint-disable-line no-proto


var generator; // = function * () {};

var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};

var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};

var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;
var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);
var INTRINSICS = {
  '$ %Array%': Array,
  '$ %ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
  '$ %ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
  '$ %ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
  '$ %ArrayPrototype%': Array.prototype,
  '$ %ArrayProto_entries%': Array.prototype.entries,
  '$ %ArrayProto_forEach%': Array.prototype.forEach,
  '$ %ArrayProto_keys%': Array.prototype.keys,
  '$ %ArrayProto_values%': Array.prototype.values,
  '$ %AsyncFromSyncIteratorPrototype%': undefined,
  '$ %AsyncFunction%': asyncFunction,
  '$ %AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
  '$ %AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
  '$ %AsyncGeneratorFunction%': asyncGenFunction,
  '$ %AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
  '$ %AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
  '$ %Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
  '$ %Boolean%': Boolean,
  '$ %BooleanPrototype%': Boolean.prototype,
  '$ %DataView%': typeof DataView === 'undefined' ? undefined : DataView,
  '$ %DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
  '$ %Date%': Date,
  '$ %DatePrototype%': Date.prototype,
  '$ %decodeURI%': decodeURI,
  '$ %decodeURIComponent%': decodeURIComponent,
  '$ %encodeURI%': encodeURI,
  '$ %encodeURIComponent%': encodeURIComponent,
  '$ %Error%': Error,
  '$ %ErrorPrototype%': Error.prototype,
  '$ %eval%': eval,
  // eslint-disable-line no-eval
  '$ %EvalError%': EvalError,
  '$ %EvalErrorPrototype%': EvalError.prototype,
  '$ %Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
  '$ %Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
  '$ %Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
  '$ %Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
  '$ %Function%': Function,
  '$ %FunctionPrototype%': Function.prototype,
  '$ %Generator%': generator ? getProto(generator()) : undefined,
  '$ %GeneratorFunction%': generatorFunction,
  '$ %GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
  '$ %Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
  '$ %Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
  '$ %Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
  '$ %Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
  '$ %Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
  '$ %Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
  '$ %isFinite%': isFinite,
  '$ %isNaN%': isNaN,
  '$ %IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
  '$ %JSON%': JSON,
  '$ %JSONParse%': JSON.parse,
  '$ %Map%': typeof Map === 'undefined' ? undefined : Map,
  '$ %MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
  '$ %MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
  '$ %Math%': Math,
  '$ %Number%': Number,
  '$ %NumberPrototype%': Number.prototype,
  '$ %Object%': Object,
  '$ %ObjectPrototype%': Object.prototype,
  '$ %ObjProto_toString%': Object.prototype.toString,
  '$ %ObjProto_valueOf%': Object.prototype.valueOf,
  '$ %parseFloat%': parseFloat,
  '$ %parseInt%': parseInt,
  '$ %Promise%': typeof Promise === 'undefined' ? undefined : Promise,
  '$ %PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
  '$ %PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
  '$ %Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
  '$ %Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
  '$ %Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
  '$ %Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
  '$ %RangeError%': RangeError,
  '$ %RangeErrorPrototype%': RangeError.prototype,
  '$ %ReferenceError%': ReferenceError,
  '$ %ReferenceErrorPrototype%': ReferenceError.prototype,
  '$ %Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
  '$ %RegExp%': RegExp,
  '$ %RegExpPrototype%': RegExp.prototype,
  '$ %Set%': typeof Set === 'undefined' ? undefined : Set,
  '$ %SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
  '$ %SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
  '$ %SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
  '$ %SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
  '$ %String%': String,
  '$ %StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
  '$ %StringPrototype%': String.prototype,
  '$ %Symbol%': hasSymbols ? Symbol : undefined,
  '$ %SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
  '$ %SyntaxError%': SyntaxError,
  '$ %SyntaxErrorPrototype%': SyntaxError.prototype,
  '$ %ThrowTypeError%': ThrowTypeError,
  '$ %TypedArray%': TypedArray,
  '$ %TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
  '$ %TypeError%': TypeError,
  '$ %TypeErrorPrototype%': TypeError.prototype,
  '$ %Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
  '$ %Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
  '$ %Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
  '$ %Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
  '$ %Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
  '$ %Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
  '$ %Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
  '$ %Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
  '$ %URIError%': URIError,
  '$ %URIErrorPrototype%': URIError.prototype,
  '$ %WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
  '$ %WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
  '$ %WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
  '$ %WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

module.exports = function GetIntrinsic(name, allowMissing) {
  if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
    throw new TypeError('"allowMissing" argument must be a boolean');
  }

  var key = '$ ' + name;

  if (!(key in INTRINSICS)) {
    throw new SyntaxError('intrinsic ' + name + ' does not exist!');
  } // istanbul ignore if // hopefully this is impossible to test :-)


  if (typeof INTRINSICS[key] === 'undefined' && !allowMissing) {
    throw new TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
  }

  return INTRINSICS[key];
};
},{}],"node_modules/es-abstract/helpers/isNaN.js":[function(require,module,exports) {
module.exports = Number.isNaN || function isNaN(a) {
  return a !== a;
};
},{}],"node_modules/es-abstract/helpers/isFinite.js":[function(require,module,exports) {
var $isNaN = Number.isNaN || function (a) {
  return a !== a;
};

module.exports = Number.isFinite || function (x) {
  return typeof x === 'number' && !$isNaN(x) && x !== Infinity && x !== -Infinity;
};
},{}],"node_modules/es-abstract/helpers/sign.js":[function(require,module,exports) {
module.exports = function sign(number) {
  return number >= 0 ? 1 : -1;
};
},{}],"node_modules/es-abstract/helpers/mod.js":[function(require,module,exports) {
module.exports = function mod(number, modulo) {
  var remain = number % modulo;
  return Math.floor(remain >= 0 ? remain : remain + modulo);
};
},{}],"node_modules/is-callable/index.js":[function(require,module,exports) {
'use strict';

var fnToStr = Function.prototype.toString;
var constructorRegex = /^\s*class\b/;

var isES6ClassFn = function isES6ClassFunction(value) {
  try {
    var fnStr = fnToStr.call(value);
    return constructorRegex.test(fnStr);
  } catch (e) {
    return false; // not a function
  }
};

var tryFunctionObject = function tryFunctionToStr(value) {
  try {
    if (isES6ClassFn(value)) {
      return false;
    }

    fnToStr.call(value);
    return true;
  } catch (e) {
    return false;
  }
};

var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
  if (!value) {
    return false;
  }

  if (typeof value !== 'function' && typeof value !== 'object') {
    return false;
  }

  if (typeof value === 'function' && !value.prototype) {
    return true;
  }

  if (hasToStringTag) {
    return tryFunctionObject(value);
  }

  if (isES6ClassFn(value)) {
    return false;
  }

  var strClass = toStr.call(value);
  return strClass === fnClass || strClass === genClass;
};
},{}],"node_modules/es-to-primitive/helpers/isPrimitive.js":[function(require,module,exports) {
module.exports = function isPrimitive(value) {
  return value === null || typeof value !== 'function' && typeof value !== 'object';
};
},{}],"node_modules/es-to-primitive/es5.js":[function(require,module,exports) {
'use strict';

var toStr = Object.prototype.toString;

var isPrimitive = require('./helpers/isPrimitive');

var isCallable = require('is-callable'); // http://ecma-international.org/ecma-262/5.1/#sec-8.12.8


var ES5internalSlots = {
  '[[DefaultValue]]': function (O) {
    var actualHint;

    if (arguments.length > 1) {
      actualHint = arguments[1];
    } else {
      actualHint = toStr.call(O) === '[object Date]' ? String : Number;
    }

    if (actualHint === String || actualHint === Number) {
      var methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];
      var value, i;

      for (i = 0; i < methods.length; ++i) {
        if (isCallable(O[methods[i]])) {
          value = O[methods[i]]();

          if (isPrimitive(value)) {
            return value;
          }
        }
      }

      throw new TypeError('No default value');
    }

    throw new TypeError('invalid [[DefaultValue]] hint supplied');
  }
}; // http://ecma-international.org/ecma-262/5.1/#sec-9.1

module.exports = function ToPrimitive(input) {
  if (isPrimitive(input)) {
    return input;
  }

  if (arguments.length > 1) {
    return ES5internalSlots['[[DefaultValue]]'](input, arguments[1]);
  }

  return ES5internalSlots['[[DefaultValue]]'](input);
};
},{"./helpers/isPrimitive":"node_modules/es-to-primitive/helpers/isPrimitive.js","is-callable":"node_modules/is-callable/index.js"}],"node_modules/es-abstract/es5.js":[function(require,module,exports) {
'use strict';

var GetIntrinsic = require('./GetIntrinsic');

var $Object = GetIntrinsic('%Object%');
var $TypeError = GetIntrinsic('%TypeError%');
var $String = GetIntrinsic('%String%');

var $isNaN = require('./helpers/isNaN');

var $isFinite = require('./helpers/isFinite');

var sign = require('./helpers/sign');

var mod = require('./helpers/mod');

var IsCallable = require('is-callable');

var toPrimitive = require('es-to-primitive/es5');

var has = require('has'); // https://es5.github.io/#x9


var ES5 = {
  ToPrimitive: toPrimitive,
  ToBoolean: function ToBoolean(value) {
    return !!value;
  },
  ToNumber: function ToNumber(value) {
    return +value; // eslint-disable-line no-implicit-coercion
  },
  ToInteger: function ToInteger(value) {
    var number = this.ToNumber(value);

    if ($isNaN(number)) {
      return 0;
    }

    if (number === 0 || !$isFinite(number)) {
      return number;
    }

    return sign(number) * Math.floor(Math.abs(number));
  },
  ToInt32: function ToInt32(x) {
    return this.ToNumber(x) >> 0;
  },
  ToUint32: function ToUint32(x) {
    return this.ToNumber(x) >>> 0;
  },
  ToUint16: function ToUint16(value) {
    var number = this.ToNumber(value);

    if ($isNaN(number) || number === 0 || !$isFinite(number)) {
      return 0;
    }

    var posInt = sign(number) * Math.floor(Math.abs(number));
    return mod(posInt, 0x10000);
  },
  ToString: function ToString(value) {
    return $String(value);
  },
  ToObject: function ToObject(value) {
    this.CheckObjectCoercible(value);
    return $Object(value);
  },
  CheckObjectCoercible: function CheckObjectCoercible(value, optMessage) {
    /* jshint eqnull:true */
    if (value == null) {
      throw new $TypeError(optMessage || 'Cannot call method on ' + value);
    }

    return value;
  },
  IsCallable: IsCallable,
  SameValue: function SameValue(x, y) {
    if (x === y) {
      // 0 === -0, but they are not identical.
      if (x === 0) {
        return 1 / x === 1 / y;
      }

      return true;
    }

    return $isNaN(x) && $isNaN(y);
  },
  // https://www.ecma-international.org/ecma-262/5.1/#sec-8
  Type: function Type(x) {
    if (x === null) {
      return 'Null';
    }

    if (typeof x === 'undefined') {
      return 'Undefined';
    }

    if (typeof x === 'function' || typeof x === 'object') {
      return 'Object';
    }

    if (typeof x === 'number') {
      return 'Number';
    }

    if (typeof x === 'boolean') {
      return 'Boolean';
    }

    if (typeof x === 'string') {
      return 'String';
    }
  },
  // https://ecma-international.org/ecma-262/6.0/#sec-property-descriptor-specification-type
  IsPropertyDescriptor: function IsPropertyDescriptor(Desc) {
    if (this.Type(Desc) !== 'Object') {
      return false;
    }

    var allowed = {
      '[[Configurable]]': true,
      '[[Enumerable]]': true,
      '[[Get]]': true,
      '[[Set]]': true,
      '[[Value]]': true,
      '[[Writable]]': true
    }; // jscs:disable

    for (var key in Desc) {
      // eslint-disable-line
      if (has(Desc, key) && !allowed[key]) {
        return false;
      }
    } // jscs:enable


    var isData = has(Desc, '[[Value]]');
    var IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');

    if (isData && IsAccessor) {
      throw new $TypeError('Property Descriptors may not be both accessor and data descriptors');
    }

    return true;
  },
  // https://ecma-international.org/ecma-262/5.1/#sec-8.10.1
  IsAccessorDescriptor: function IsAccessorDescriptor(Desc) {
    if (typeof Desc === 'undefined') {
      return false;
    }

    if (!this.IsPropertyDescriptor(Desc)) {
      throw new $TypeError('Desc must be a Property Descriptor');
    }

    if (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {
      return false;
    }

    return true;
  },
  // https://ecma-international.org/ecma-262/5.1/#sec-8.10.2
  IsDataDescriptor: function IsDataDescriptor(Desc) {
    if (typeof Desc === 'undefined') {
      return false;
    }

    if (!this.IsPropertyDescriptor(Desc)) {
      throw new $TypeError('Desc must be a Property Descriptor');
    }

    if (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {
      return false;
    }

    return true;
  },
  // https://ecma-international.org/ecma-262/5.1/#sec-8.10.3
  IsGenericDescriptor: function IsGenericDescriptor(Desc) {
    if (typeof Desc === 'undefined') {
      return false;
    }

    if (!this.IsPropertyDescriptor(Desc)) {
      throw new $TypeError('Desc must be a Property Descriptor');
    }

    if (!this.IsAccessorDescriptor(Desc) && !this.IsDataDescriptor(Desc)) {
      return true;
    }

    return false;
  },
  // https://ecma-international.org/ecma-262/5.1/#sec-8.10.4
  FromPropertyDescriptor: function FromPropertyDescriptor(Desc) {
    if (typeof Desc === 'undefined') {
      return Desc;
    }

    if (!this.IsPropertyDescriptor(Desc)) {
      throw new $TypeError('Desc must be a Property Descriptor');
    }

    if (this.IsDataDescriptor(Desc)) {
      return {
        value: Desc['[[Value]]'],
        writable: !!Desc['[[Writable]]'],
        enumerable: !!Desc['[[Enumerable]]'],
        configurable: !!Desc['[[Configurable]]']
      };
    } else if (this.IsAccessorDescriptor(Desc)) {
      return {
        get: Desc['[[Get]]'],
        set: Desc['[[Set]]'],
        enumerable: !!Desc['[[Enumerable]]'],
        configurable: !!Desc['[[Configurable]]']
      };
    } else {
      throw new $TypeError('FromPropertyDescriptor must be called with a fully populated Property Descriptor');
    }
  },
  // https://ecma-international.org/ecma-262/5.1/#sec-8.10.5
  ToPropertyDescriptor: function ToPropertyDescriptor(Obj) {
    if (this.Type(Obj) !== 'Object') {
      throw new $TypeError('ToPropertyDescriptor requires an object');
    }

    var desc = {};

    if (has(Obj, 'enumerable')) {
      desc['[[Enumerable]]'] = this.ToBoolean(Obj.enumerable);
    }

    if (has(Obj, 'configurable')) {
      desc['[[Configurable]]'] = this.ToBoolean(Obj.configurable);
    }

    if (has(Obj, 'value')) {
      desc['[[Value]]'] = Obj.value;
    }

    if (has(Obj, 'writable')) {
      desc['[[Writable]]'] = this.ToBoolean(Obj.writable);
    }

    if (has(Obj, 'get')) {
      var getter = Obj.get;

      if (typeof getter !== 'undefined' && !this.IsCallable(getter)) {
        throw new TypeError('getter must be a function');
      }

      desc['[[Get]]'] = getter;
    }

    if (has(Obj, 'set')) {
      var setter = Obj.set;

      if (typeof setter !== 'undefined' && !this.IsCallable(setter)) {
        throw new $TypeError('setter must be a function');
      }

      desc['[[Set]]'] = setter;
    }

    if ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {
      throw new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
    }

    return desc;
  }
};
module.exports = ES5;
},{"./GetIntrinsic":"node_modules/es-abstract/GetIntrinsic.js","./helpers/isNaN":"node_modules/es-abstract/helpers/isNaN.js","./helpers/isFinite":"node_modules/es-abstract/helpers/isFinite.js","./helpers/sign":"node_modules/es-abstract/helpers/sign.js","./helpers/mod":"node_modules/es-abstract/helpers/mod.js","is-callable":"node_modules/is-callable/index.js","es-to-primitive/es5":"node_modules/es-to-primitive/es5.js","has":"node_modules/has/src/index.js"}],"node_modules/string.prototype.trim/implementation.js":[function(require,module,exports) {
'use strict';

var bind = require('function-bind');

var ES = require('es-abstract/es5');

var replace = bind.call(Function.call, String.prototype.replace);
var leftWhitespace = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
var rightWhitespace = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;

module.exports = function trim() {
  var S = ES.ToString(ES.CheckObjectCoercible(this));
  return replace(replace(S, leftWhitespace, ''), rightWhitespace, '');
};
},{"function-bind":"node_modules/function-bind/index.js","es-abstract/es5":"node_modules/es-abstract/es5.js"}],"node_modules/string.prototype.trim/polyfill.js":[function(require,module,exports) {
'use strict';

var implementation = require('./implementation');

var zeroWidthSpace = '\u200b';

module.exports = function getPolyfill() {
  if (String.prototype.trim && zeroWidthSpace.trim() === zeroWidthSpace) {
    return String.prototype.trim;
  }

  return implementation;
};
},{"./implementation":"node_modules/string.prototype.trim/implementation.js"}],"node_modules/string.prototype.trim/shim.js":[function(require,module,exports) {

'use strict';

var define = require('define-properties');

var getPolyfill = require('./polyfill');

module.exports = function shimStringTrim() {
  var polyfill = getPolyfill();
  define(String.prototype, {
    trim: polyfill
  }, {
    trim: function () {
      return String.prototype.trim !== polyfill;
    }
  });
  return polyfill;
};
},{"define-properties":"node_modules/define-properties/index.js","./polyfill":"node_modules/string.prototype.trim/polyfill.js"}],"node_modules/string.prototype.trim/index.js":[function(require,module,exports) {

'use strict';

var bind = require('function-bind');

var define = require('define-properties');

var implementation = require('./implementation');

var getPolyfill = require('./polyfill');

var shim = require('./shim');

var boundTrim = bind.call(Function.call, getPolyfill());
define(boundTrim, {
  getPolyfill: getPolyfill,
  implementation: implementation,
  shim: shim
});
module.exports = boundTrim;
},{"function-bind":"node_modules/function-bind/index.js","define-properties":"node_modules/define-properties/index.js","./implementation":"node_modules/string.prototype.trim/implementation.js","./polyfill":"node_modules/string.prototype.trim/polyfill.js","./shim":"node_modules/string.prototype.trim/shim.js"}],"node_modules/for-each/index.js":[function(require,module,exports) {
'use strict';

var isCallable = require('is-callable');

var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
                iterator(array[i], i, array);
            } else {
                iterator.call(receiver, array[i], i, array);
            }
        }
    }
};

var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        if (receiver == null) {
            iterator(string.charAt(i), i, string);
        } else {
            iterator.call(receiver, string.charAt(i), i, string);
        }
    }
};

var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
                iterator(object[k], k, object);
            } else {
                iterator.call(receiver, object[k], k, object);
            }
        }
    }
};

var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
        throw new TypeError('iterator must be a function');
    }

    var receiver;
    if (arguments.length >= 3) {
        receiver = thisArg;
    }

    if (toStr.call(list) === '[object Array]') {
        forEachArray(list, iterator, receiver);
    } else if (typeof list === 'string') {
        forEachString(list, iterator, receiver);
    } else {
        forEachObject(list, iterator, receiver);
    }
};

module.exports = forEach;

},{"is-callable":"node_modules/is-callable/index.js"}],"node_modules/tape/lib/test.js":[function(require,module,exports) {
var process = require("process");
var __dirname = "/home/tony/Desktop/git/dommy/node_modules/tape/lib";
var deepEqual = require('deep-equal');

var defined = require('defined');

var path = require('path');

var inherits = require('inherits');

var EventEmitter = require('events').EventEmitter;

var has = require('has');

var trim = require('string.prototype.trim');

var bind = require('function-bind');

var forEach = require('for-each');

var isEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var toLowerCase = bind.call(Function.call, String.prototype.toLowerCase);
module.exports = Test;
var nextTick = typeof setImmediate !== 'undefined' ? setImmediate : process.nextTick;
var safeSetTimeout = setTimeout;
var safeClearTimeout = clearTimeout;
inherits(Test, EventEmitter);

var getTestArgs = function (name_, opts_, cb_) {
  var name = '(anonymous)';
  var opts = {};
  var cb;

  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i];
    var t = typeof arg;

    if (t === 'string') {
      name = arg;
    } else if (t === 'object') {
      opts = arg || opts;
    } else if (t === 'function') {
      cb = arg;
    }
  }

  return {
    name: name,
    opts: opts,
    cb: cb
  };
};

function Test(name_, opts_, cb_) {
  if (!(this instanceof Test)) {
    return new Test(name_, opts_, cb_);
  }

  var args = getTestArgs(name_, opts_, cb_);
  this.readable = true;
  this.name = args.name || '(anonymous)';
  this.assertCount = 0;
  this.pendingCount = 0;
  this._skip = args.opts.skip || false;
  this._timeout = args.opts.timeout;
  this._plan = undefined;
  this._cb = args.cb;
  this._progeny = [];
  this._ok = true;
  var depthEnvVar = undefined;

  if (args.opts.objectPrintDepth) {
    this._objectPrintDepth = args.opts.objectPrintDepth;
  } else if (depthEnvVar) {
    if (toLowerCase(depthEnvVar) === 'infinity') {
      this._objectPrintDepth = Infinity;
    } else {
      this._objectPrintDepth = depthEnvVar;
    }
  } else {
    this._objectPrintDepth = 5;
  }

  for (var prop in this) {
    this[prop] = function bind(self, val) {
      if (typeof val === 'function') {
        return function bound() {
          return val.apply(self, arguments);
        };
      }

      return val;
    }(this, this[prop]);
  }
}

Test.prototype.run = function () {
  if (this._skip) {
    this.comment('SKIP ' + this.name);
  }

  if (!this._cb || this._skip) {
    return this._end();
  }

  if (this._timeout != null) {
    this.timeoutAfter(this._timeout);
  }

  this.emit('prerun');

  this._cb(this);

  this.emit('run');
};

Test.prototype.test = function (name, opts, cb) {
  var self = this;
  var t = new Test(name, opts, cb);

  this._progeny.push(t);

  this.pendingCount++;
  this.emit('test', t);
  t.on('prerun', function () {
    self.assertCount++;
  });

  if (!self._pendingAsserts()) {
    nextTick(function () {
      self._end();
    });
  }

  nextTick(function () {
    if (!self._plan && self.pendingCount == self._progeny.length) {
      self._end();
    }
  });
};

Test.prototype.comment = function (msg) {
  var that = this;
  forEach(trim(msg).split('\n'), function (aMsg) {
    that.emit('result', trim(aMsg).replace(/^#\s*/, ''));
  });
};

Test.prototype.plan = function (n) {
  this._plan = n;
  this.emit('plan', n);
};

Test.prototype.timeoutAfter = function (ms) {
  if (!ms) throw new Error('timeoutAfter requires a timespan');
  var self = this;
  var timeout = safeSetTimeout(function () {
    self.fail('test timed out after ' + ms + 'ms');
    self.end();
  }, ms);
  this.once('end', function () {
    safeClearTimeout(timeout);
  });
};

Test.prototype.end = function (err) {
  var self = this;

  if (arguments.length >= 1 && !!err) {
    this.ifError(err);
  }

  if (this.calledEnd) {
    this.fail('.end() called twice');
  }

  this.calledEnd = true;

  this._end();
};

Test.prototype._end = function (err) {
  var self = this;

  if (this._progeny.length) {
    var t = this._progeny.shift();

    t.on('end', function () {
      self._end();
    });
    t.run();
    return;
  }

  if (!this.ended) this.emit('end');

  var pendingAsserts = this._pendingAsserts();

  if (!this._planError && this._plan !== undefined && pendingAsserts) {
    this._planError = true;
    this.fail('plan != count', {
      expected: this._plan,
      actual: this.assertCount
    });
  }

  this.ended = true;
};

Test.prototype._exit = function () {
  if (this._plan !== undefined && !this._planError && this.assertCount !== this._plan) {
    this._planError = true;
    this.fail('plan != count', {
      expected: this._plan,
      actual: this.assertCount,
      exiting: true
    });
  } else if (!this.ended) {
    this.fail('test exited without ending', {
      exiting: true
    });
  }
};

Test.prototype._pendingAsserts = function () {
  if (this._plan === undefined) {
    return 1;
  }

  return this._plan - (this._progeny.length + this.assertCount);
};

Test.prototype._assert = function assert(ok, opts) {
  var self = this;
  var extra = opts.extra || {};
  var res = {
    id: self.assertCount++,
    ok: Boolean(ok),
    skip: defined(extra.skip, opts.skip),
    name: defined(extra.message, opts.message, '(unnamed assert)'),
    operator: defined(extra.operator, opts.operator),
    objectPrintDepth: self._objectPrintDepth
  };

  if (has(opts, 'actual') || has(extra, 'actual')) {
    res.actual = defined(extra.actual, opts.actual);
  }

  if (has(opts, 'expected') || has(extra, 'expected')) {
    res.expected = defined(extra.expected, opts.expected);
  }

  this._ok = Boolean(this._ok && ok);

  if (!ok) {
    res.error = defined(extra.error, opts.error, new Error(res.name));
  }

  if (!ok) {
    var e = new Error('exception');
    var err = (e.stack || '').split('\n');
    var dir = __dirname + path.sep;

    for (var i = 0; i < err.length; i++) {
      /*
          Stack trace lines may resemble one of the following. We need
          to should correctly extract a function name (if any) and
          path / line no. for each line.
               at myFunction (/path/to/file.js:123:45)
              at myFunction (/path/to/file.other-ext:123:45)
              at myFunction (/path to/file.js:123:45)
              at myFunction (C:\path\to\file.js:123:45)
              at myFunction (/path/to/file.js:123)
              at Test.<anonymous> (/path/to/file.js:123:45)
              at Test.bound [as run] (/path/to/file.js:123:45)
              at /path/to/file.js:123:45
           Regex has three parts. First is non-capturing group for 'at '
          (plus anything preceding it).
               /^(?:[^\s]*\s*\bat\s+)/
           Second captures function call description (optional). This is
          not necessarily a valid JS function name, but just what the
          stack trace is using to represent a function call. It may look
          like `<anonymous>` or 'Test.bound [as run]'.
           For our purposes, we assume that, if there is a function
          name, it's everything leading up to the first open
          parentheses (trimmed) before our pathname.
               /(?:(.*)\s+\()?/
           Last part captures file path plus line no (and optional
          column no).
               /((?:\/|[A-Z]:\\)[^:\)]+:(\d+)(?::(\d+))?)/
      */
      var re = /^(?:[^\s]*\s*\bat\s+)(?:(.*)\s+\()?((?:\/|[A-Z]:\\)[^:\)]+:(\d+)(?::(\d+))?)/;
      var m = re.exec(err[i]);

      if (!m) {
        continue;
      }

      var callDescription = m[1] || '<anonymous>';
      var filePath = m[2];

      if (filePath.slice(0, dir.length) === dir) {
        continue;
      } // Function call description may not (just) be a function name.
      // Try to extract function name by looking at first "word" only.


      res.functionName = callDescription.split(/\s+/)[0];
      res.file = filePath;
      res.line = Number(m[3]);
      if (m[4]) res.column = Number(m[4]);
      res.at = callDescription + ' (' + filePath + ')';
      break;
    }
  }

  self.emit('result', res);

  var pendingAsserts = self._pendingAsserts();

  if (!pendingAsserts) {
    if (extra.exiting) {
      self._end();
    } else {
      nextTick(function () {
        self._end();
      });
    }
  }

  if (!self._planError && pendingAsserts < 0) {
    self._planError = true;
    self.fail('plan != count', {
      expected: self._plan,
      actual: self._plan - pendingAsserts
    });
  }
};

Test.prototype.fail = function (msg, extra) {
  this._assert(false, {
    message: msg,
    operator: 'fail',
    extra: extra
  });
};

Test.prototype.pass = function (msg, extra) {
  this._assert(true, {
    message: msg,
    operator: 'pass',
    extra: extra
  });
};

Test.prototype.skip = function (msg, extra) {
  this._assert(true, {
    message: msg,
    operator: 'skip',
    skip: true,
    extra: extra
  });
};

function assert(value, msg, extra) {
  this._assert(value, {
    message: defined(msg, 'should be truthy'),
    operator: 'ok',
    expected: true,
    actual: value,
    extra: extra
  });
}

Test.prototype.ok = Test.prototype['true'] = Test.prototype.assert = assert;

function notOK(value, msg, extra) {
  this._assert(!value, {
    message: defined(msg, 'should be falsy'),
    operator: 'notOk',
    expected: false,
    actual: value,
    extra: extra
  });
}

Test.prototype.notOk = Test.prototype['false'] = Test.prototype.notok = notOK;

function error(err, msg, extra) {
  this._assert(!err, {
    message: defined(msg, String(err)),
    operator: 'error',
    actual: err,
    extra: extra
  });
}

Test.prototype.error = Test.prototype.ifError = Test.prototype.ifErr = Test.prototype.iferror = error;

function equal(a, b, msg, extra) {
  this._assert(a === b, {
    message: defined(msg, 'should be equal'),
    operator: 'equal',
    actual: a,
    expected: b,
    extra: extra
  });
}

Test.prototype.equal = Test.prototype.equals = Test.prototype.isEqual = Test.prototype.is = Test.prototype.strictEqual = Test.prototype.strictEquals = equal;

function notEqual(a, b, msg, extra) {
  this._assert(a !== b, {
    message: defined(msg, 'should not be equal'),
    operator: 'notEqual',
    actual: a,
    notExpected: b,
    extra: extra
  });
}

Test.prototype.notEqual = Test.prototype.notEquals = Test.prototype.notStrictEqual = Test.prototype.notStrictEquals = Test.prototype.isNotEqual = Test.prototype.isNot = Test.prototype.not = Test.prototype.doesNotEqual = Test.prototype.isInequal = notEqual;

function tapeDeepEqual(a, b, msg, extra) {
  this._assert(deepEqual(a, b, {
    strict: true
  }), {
    message: defined(msg, 'should be equivalent'),
    operator: 'deepEqual',
    actual: a,
    expected: b,
    extra: extra
  });
}

Test.prototype.deepEqual = Test.prototype.deepEquals = Test.prototype.isEquivalent = Test.prototype.same = tapeDeepEqual;

function deepLooseEqual(a, b, msg, extra) {
  this._assert(deepEqual(a, b), {
    message: defined(msg, 'should be equivalent'),
    operator: 'deepLooseEqual',
    actual: a,
    expected: b,
    extra: extra
  });
}

Test.prototype.deepLooseEqual = Test.prototype.looseEqual = Test.prototype.looseEquals = deepLooseEqual;

function notDeepEqual(a, b, msg, extra) {
  this._assert(!deepEqual(a, b, {
    strict: true
  }), {
    message: defined(msg, 'should not be equivalent'),
    operator: 'notDeepEqual',
    actual: a,
    notExpected: b,
    extra: extra
  });
}

Test.prototype.notDeepEqual = Test.prototype.notEquivalent = Test.prototype.notDeeply = Test.prototype.notSame = Test.prototype.isNotDeepEqual = Test.prototype.isNotDeeply = Test.prototype.isNotEquivalent = Test.prototype.isInequivalent = notDeepEqual;

function notDeepLooseEqual(a, b, msg, extra) {
  this._assert(!deepEqual(a, b), {
    message: defined(msg, 'should be equivalent'),
    operator: 'notDeepLooseEqual',
    actual: a,
    expected: b,
    extra: extra
  });
}

Test.prototype.notDeepLooseEqual = Test.prototype.notLooseEqual = Test.prototype.notLooseEquals = notDeepLooseEqual;

Test.prototype['throws'] = function (fn, expected, msg, extra) {
  if (typeof expected === 'string') {
    msg = expected;
    expected = undefined;
  }

  var caught = undefined;

  try {
    fn();
  } catch (err) {
    caught = {
      error: err
    };

    if (err != null && (!isEnumerable(err, 'message') || !has(err, 'message'))) {
      var message = err.message;
      delete err.message;
      err.message = message;
    }
  }

  var passed = caught;

  if (expected instanceof RegExp) {
    passed = expected.test(caught && caught.error);
    expected = String(expected);
  }

  if (typeof expected === 'function' && caught) {
    passed = caught.error instanceof expected;
    caught.error = caught.error.constructor;
  }

  this._assert(typeof fn === 'function' && passed, {
    message: defined(msg, 'should throw'),
    operator: 'throws',
    actual: caught && caught.error,
    expected: expected,
    error: !passed && caught && caught.error,
    extra: extra
  });
};

Test.prototype.doesNotThrow = function (fn, expected, msg, extra) {
  if (typeof expected === 'string') {
    msg = expected;
    expected = undefined;
  }

  var caught = undefined;

  try {
    fn();
  } catch (err) {
    caught = {
      error: err
    };
  }

  this._assert(!caught, {
    message: defined(msg, 'should not throw'),
    operator: 'throws',
    actual: caught && caught.error,
    expected: expected,
    error: caught && caught.error,
    extra: extra
  });
};

Test.skip = function (name_, _opts, _cb) {
  var args = getTestArgs.apply(null, arguments);
  args.opts.skip = true;
  return Test(args.name, args.opts, args.cb);
}; // vim: set softtabstop=4 shiftwidth=4:
},{"deep-equal":"node_modules/deep-equal/index.js","defined":"node_modules/defined/index.js","path":"node_modules/node-libs-browser/node_modules/path-browserify/index.js","inherits":"node_modules/inherits/inherits_browser.js","events":"node_modules/node-libs-browser/node_modules/events/events.js","has":"node_modules/has/src/index.js","string.prototype.trim":"node_modules/string.prototype.trim/index.js","function-bind":"node_modules/function-bind/index.js","for-each":"node_modules/for-each/index.js","process":"node_modules/process/browser.js"}],"node_modules/resumer/index.js":[function(require,module,exports) {
var process = require("process");
var through = require('through');
var nextTick = typeof setImmediate !== 'undefined'
    ? setImmediate
    : process.nextTick
;

module.exports = function (write, end) {
    var tr = through(write, end);
    tr.pause();
    var resume = tr.resume;
    var pause = tr.pause;
    var paused = false;
    
    tr.pause = function () {
        paused = true;
        return pause.apply(this, arguments);
    };
    
    tr.resume = function () {
        paused = false;
        return resume.apply(this, arguments);
    };
    
    nextTick(function () {
        if (!paused) tr.resume();
    });
    
    return tr;
};

},{"through":"node_modules/through/index.js","process":"node_modules/process/browser.js"}],"node_modules/object-inspect/index.js":[function(require,module,exports) {
var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;

var inspectCustom = require('./util.inspect').custom;
var inspectSymbol = (inspectCustom && isSymbol(inspectCustom)) ? inspectCustom : null;

module.exports = function inspect_ (obj, opts, depth, seen) {
    if (!opts) opts = {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
      if (obj === 0) {
        return Infinity / obj > 0 ? '0' : '-0';
      }
      return String(obj);
    }
    if (typeof obj === 'bigint') {
      return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') depth = 0;
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return '[Object]';
    }

    if (typeof seen === 'undefined') seen = [];
    else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect (value, from) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : '') + ']';
    }
    if (isSymbol(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) s += '...';
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) return '[]';
        return '[ ' + arrObjKeys(obj, inspect).join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) return '[' + String(obj) + ']';
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object') {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var parts = [];
        mapForEach.call(obj, function (value, key) {
            parts.push(inspect(key, obj) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), parts);
    }
    if (isSet(obj)) {
        var parts = [];
        setForEach.call(obj, function (value ) {
            parts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), parts);
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var xs = arrObjKeys(obj, inspect);
        if (xs.length === 0) return '{}';
        return '{ ' + xs.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes (s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote (s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray (obj) { return toStr(obj) === '[object Array]'; }
function isDate (obj) { return toStr(obj) === '[object Date]'; }
function isRegExp (obj) { return toStr(obj) === '[object RegExp]'; }
function isError (obj) { return toStr(obj) === '[object Error]'; }
function isSymbol (obj) { return toStr(obj) === '[object Symbol]'; }
function isString (obj) { return toStr(obj) === '[object String]'; }
function isNumber (obj) { return toStr(obj) === '[object Number]'; }
function isBigInt (obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean (obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has (obj, key) {
    return hasOwn.call(obj, key);
}

function toStr (obj) {
    return objectToString.call(obj);
}

function nameOf (f) {
    if (f.name) return f.name;
    var m = String(f).match(/^function\s*([\w$]+)/);
    if (m) return m[1];
}

function indexOf (xs, x) {
    if (xs.indexOf) return xs.indexOf(x);
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
    }
    return -1;
}

function isMap (x) {
    if (!mapSize) {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet (x) {
    if (!setSize) {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement (x) {
    if (!x || typeof x !== 'object') return false;
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string'
        && typeof x.getAttribute === 'function'
    ;
}

function inspectString (str, opts) {
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte (c) {
    var n = c.charCodeAt(0);
    var x = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[n];
    if (x) return '\\' + x;
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
}

function markBoxed (str) {
    return 'Object(' + str + ')';
}

function collectionOf (type, size, entries) {
    return type + ' (' + size + ') {' + entries.join(', ') + '}';
}

function arrObjKeys (obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) {
        if (!has(obj, key)) continue;
        if (isArr && String(Number(key)) === key && key < obj.length) continue;
        if (/[^\w$]/.test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    return xs;
}

},{"./util.inspect":"node_modules/parcel-bundler/src/builtins/_empty.js"}],"node_modules/tape/lib/results.js":[function(require,module,exports) {
var process = require("process");
var defined = require('defined');
var EventEmitter = require('events').EventEmitter;
var inherits = require('inherits');
var through = require('through');
var resumer = require('resumer');
var inspect = require('object-inspect');
var bind = require('function-bind');
var has = require('has');
var regexpTest = bind.call(Function.call, RegExp.prototype.test);
var yamlIndicators = /\:|\-|\?/;
var nextTick = typeof setImmediate !== 'undefined'
    ? setImmediate
    : process.nextTick
;

module.exports = Results;
inherits(Results, EventEmitter);

function Results () {
    if (!(this instanceof Results)) return new Results;
    this.count = 0;
    this.fail = 0;
    this.pass = 0;
    this._stream = through();
    this.tests = [];
    this._only = null;
}

Results.prototype.createStream = function (opts) {
    if (!opts) opts = {};
    var self = this;
    var output, testId = 0;
    if (opts.objectMode) {
        output = through();
        self.on('_push', function ontest (t, extra) {
            if (!extra) extra = {};
            var id = testId++;
            t.once('prerun', function () {
                var row = {
                    type: 'test',
                    name: t.name,
                    id: id
                };
                if (has(extra, 'parent')) {
                    row.parent = extra.parent;
                }
                output.queue(row);
            });
            t.on('test', function (st) {
                ontest(st, { parent: id });
            });
            t.on('result', function (res) {
                res.test = id;
                res.type = 'assert';
                output.queue(res);
            });
            t.on('end', function () {
                output.queue({ type: 'end', test: id });
            });
        });
        self.on('done', function () { output.queue(null) });
    } else {
        output = resumer();
        output.queue('TAP version 13\n');
        self._stream.pipe(output);
    }

    nextTick(function next() {
        var t;
        while (t = getNextTest(self)) {
            t.run();
            if (!t.ended) return t.once('end', function(){ nextTick(next); });
        }
        self.emit('done');
    });

    return output;
};

Results.prototype.push = function (t) {
    var self = this;
    self.tests.push(t);
    self._watch(t);
    self.emit('_push', t);
};

Results.prototype.only = function (t) {
    this._only = t;
};

Results.prototype._watch = function (t) {
    var self = this;
    var write = function (s) { self._stream.queue(s) };
    t.once('prerun', function () {
        write('# ' + t.name + '\n');
    });

    t.on('result', function (res) {
        if (typeof res === 'string') {
            write('# ' + res + '\n');
            return;
        }
        write(encodeResult(res, self.count + 1));
        self.count ++;

        if (res.ok) self.pass ++
        else {
            self.fail ++;
            self.emit('fail');
        }
    });

    t.on('test', function (st) { self._watch(st) });
};

Results.prototype.close = function () {
    var self = this;
    if (self.closed) self._stream.emit('error', new Error('ALREADY CLOSED'));
    self.closed = true;
    var write = function (s) { self._stream.queue(s) };

    write('\n1..' + self.count + '\n');
    write('# tests ' + self.count + '\n');
    write('# pass  ' + self.pass + '\n');
    if (self.fail) write('# fail  ' + self.fail + '\n')
    else write('\n# ok\n')

    self._stream.queue(null);
};

function encodeResult (res, count) {
    var output = '';
    output += (res.ok ? 'ok ' : 'not ok ') + count;
    output += res.name ? ' ' + res.name.toString().replace(/\s+/g, ' ') : '';

    if (res.skip) output += ' # SKIP';
    else if (res.todo) output += ' # TODO';

    output += '\n';
    if (res.ok) return output;

    var outer = '  ';
    var inner = outer + '  ';
    output += outer + '---\n';
    output += inner + 'operator: ' + res.operator + '\n';

    if (has(res, 'expected') || has(res, 'actual')) {
        var ex = inspect(res.expected, {depth: res.objectPrintDepth});
        var ac = inspect(res.actual, {depth: res.objectPrintDepth});

        if (Math.max(ex.length, ac.length) > 65 || invalidYaml(ex) || invalidYaml(ac)) {
            output += inner + 'expected: |-\n' + inner + '  ' + ex + '\n';
            output += inner + 'actual: |-\n' + inner + '  ' + ac + '\n';
        } else {
            output += inner + 'expected: ' + ex + '\n';
            output += inner + 'actual:   ' + ac + '\n';
        }
    }
    if (res.at) {
        output += inner + 'at: ' + res.at + '\n';
    }

    var actualStack = res.actual && (typeof res.actual === 'object' || typeof res.actual === 'function') ? res.actual.stack : undefined;
    var errorStack = res.error && res.error.stack;
    var stack = defined(actualStack, errorStack);
    if (stack) {
        var lines = String(stack).split('\n');
        output += inner + 'stack: |-\n';
        for (var i = 0; i < lines.length; i++) {
            output += inner + '  ' + lines[i] + '\n';
        }
    }

    output += outer + '...\n';
    return output;
}

function getNextTest (results) {
    if (!results._only) {
        return results.tests.shift();
    }

    do {
        var t = results.tests.shift();
        if (!t) continue;
        if (results._only === t) {
            return t;
        }
    } while (results.tests.length !== 0)
}

function invalidYaml (str) {
    return regexpTest(yamlIndicators, str);
}

},{"defined":"node_modules/defined/index.js","events":"node_modules/node-libs-browser/node_modules/events/events.js","inherits":"node_modules/inherits/inherits_browser.js","through":"node_modules/through/index.js","resumer":"node_modules/resumer/index.js","object-inspect":"node_modules/object-inspect/index.js","function-bind":"node_modules/function-bind/index.js","has":"node_modules/has/src/index.js","process":"node_modules/process/browser.js"}],"node_modules/tape/index.js":[function(require,module,exports) {
var process = require("process");
var defined = require('defined');
var createDefaultStream = require('./lib/default_stream');
var Test = require('./lib/test');
var createResult = require('./lib/results');
var through = require('through');

var canEmitExit = typeof process !== 'undefined' && process
    && typeof process.on === 'function' && process.browser !== true
;
var canExit = typeof process !== 'undefined' && process
    && typeof process.exit === 'function'
;

var nextTick = typeof setImmediate !== 'undefined'
    ? setImmediate
    : process.nextTick
;

exports = module.exports = (function () {
    var harness;
    var lazyLoad = function () {
        return getHarness().apply(this, arguments);
    };

    lazyLoad.only = function () {
        return getHarness().only.apply(this, arguments);
    };

    lazyLoad.createStream = function (opts) {
        if (!opts) opts = {};
        if (!harness) {
            var output = through();
            getHarness({ stream: output, objectMode: opts.objectMode });
            return output;
        }
        return harness.createStream(opts);
    };

    lazyLoad.onFinish = function () {
        return getHarness().onFinish.apply(this, arguments);
    };

    lazyLoad.onFailure = function() {
        return getHarness().onFailure.apply(this, arguments);
    };

    lazyLoad.getHarness = getHarness

    return lazyLoad

    function getHarness (opts) {
        if (!opts) opts = {};
        opts.autoclose = !canEmitExit;
        if (!harness) harness = createExitHarness(opts);
        return harness;
    }
})();

function createExitHarness (conf) {
    if (!conf) conf = {};
    var harness = createHarness({
        autoclose: defined(conf.autoclose, false)
    });

    var stream = harness.createStream({ objectMode: conf.objectMode });
    var es = stream.pipe(conf.stream || createDefaultStream());
    if (canEmitExit) {
        es.on('error', function (err) { harness._exitCode = 1 });
    }

    var ended = false;
    stream.on('end', function () { ended = true });

    if (conf.exit === false) return harness;
    if (!canEmitExit || !canExit) return harness;

    var inErrorState = false;

    process.on('exit', function (code) {
        // let the process exit cleanly.
        if (code !== 0) {
            return
        }

        if (!ended) {
            var only = harness._results._only;
            for (var i = 0; i < harness._tests.length; i++) {
                var t = harness._tests[i];
                if (only && t !== only) continue;
                t._exit();
            }
        }
        harness.close();
        process.exit(code || harness._exitCode);
    });

    return harness;
}

exports.createHarness = createHarness;
exports.Test = Test;
exports.test = exports; // tap compat
exports.test.skip = Test.skip;

var exitInterval;

function createHarness (conf_) {
    if (!conf_) conf_ = {};
    var results = createResult();
    if (conf_.autoclose !== false) {
        results.once('done', function () { results.close() });
    }

    var test = function (name, conf, cb) {
        var t = new Test(name, conf, cb);
        test._tests.push(t);

        (function inspectCode (st) {
            st.on('test', function sub (st_) {
                inspectCode(st_);
            });
            st.on('result', function (r) {
                if (!r.ok && typeof r !== 'string') test._exitCode = 1
            });
        })(t);

        results.push(t);
        return t;
    };
    test._results = results;

    test._tests = [];

    test.createStream = function (opts) {
        return results.createStream(opts);
    };

    test.onFinish = function (cb) {
        results.on('done', cb);
    };

    test.onFailure = function (cb) {
        results.on('fail', cb);
    };

    var only = false;
    test.only = function () {
        if (only) throw new Error('there can only be one only test');
        only = true;
        var t = test.apply(null, arguments);
        results.only(t);
        return t;
    };
    test._exitCode = 0;

    test.close = function () { results.close() };

    return test;
}

},{"defined":"node_modules/defined/index.js","./lib/default_stream":"node_modules/tape/lib/default_stream.js","./lib/test":"node_modules/tape/lib/test.js","./lib/results":"node_modules/tape/lib/results.js","through":"node_modules/through/index.js","process":"node_modules/process/browser.js"}],"node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js":[function(require,module,exports) {
var global = arguments[3];
var define;
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var r,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},fa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ha(){ha=function(){};fa.Symbol||(fa.Symbol=ia)}var ia=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function ja(){ha();var a=fa.Symbol.iterator;a||(a=fa.Symbol.iterator=fa.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ka(this)}});ja=function(){}}function ka(a){var b=0;return la(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function la(a){ja();a={next:a};a[fa.Symbol.iterator]=function(){return this};return a}function ma(a){ja();var b=a[Symbol.iterator];return b?b.call(a):ka(a)}
function na(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var oa;if("function"==typeof Object.setPrototypeOf)oa=Object.setPrototypeOf;else{var pa;a:{var qa={Na:!0},ra={};try{ra.__proto__=qa;pa=ra.Na;break a}catch(a){}pa=!1}oa=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=oa;function ta(){this.f=!1;this.b=null;this.fa=void 0;this.a=1;this.G=0;this.c=null}
function ua(a){if(a.f)throw new TypeError("Generator is already running");a.f=!0}ta.prototype.m=function(a){this.fa=a};function va(a,b){a.c={Qa:b,Ua:!0};a.a=a.G}ta.prototype.return=function(a){this.c={return:a};this.a=this.G};function wa(a,b){a.a=3;return{value:b}}function xa(a){this.a=new ta;this.b=a}function ya(a,b){ua(a.a);var c=a.a.b;if(c)return Ba(a,"return"in c?c["return"]:function(a){return{value:a,done:!0}},b,a.a.return);a.a.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.a.b,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.f=!1,e;var f=e.value}catch(g){return a.a.b=null,va(a.a,g),Ca(a)}a.a.b=null;d.call(a.a,f);return Ca(a)}function Ca(a){for(;a.a.a;)try{var b=a.b(a.a);if(b)return a.a.f=!1,{value:b.value,done:!1}}catch(c){a.a.fa=void 0,va(a.a,c)}a.a.f=!1;if(a.a.c){b=a.a.c;a.a.c=null;if(b.Ua)throw b.Qa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.a);a.a.b?b=Ba(a,a.a.b.next,b,a.a.m):(a.a.m(b),b=Ca(a));return b};this.throw=function(b){ua(a.a);a.a.b?b=Ba(a,a.a.b["throw"],b,a.a.m):(va(a.a,b),b=Ca(a));return b};this.return=function(b){return ya(a,b)};ja();this[Symbol.iterator]=function(){return this}}function Ea(a,b){b=new Da(new xa(b));sa&&sa(b,a.prototype);return b}
(function(){if(!function(){var a=document.createEvent("Event");a.initEvent("foo",!0,!0);a.preventDefault();return a.defaultPrevented}()){var a=Event.prototype.preventDefault;Event.prototype.preventDefault=function(){this.cancelable&&(a.call(this),Object.defineProperty(this,"defaultPrevented",{get:function(){return!0},configurable:!0}))}}var b=/Trident/.test(navigator.userAgent);if(!window.CustomEvent||b&&"function"!==typeof window.CustomEvent)window.CustomEvent=function(a,b){b=b||{};var c=document.createEvent("CustomEvent");
c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c},window.CustomEvent.prototype=window.Event.prototype;if(!window.Event||b&&"function"!==typeof window.Event){var c=window.Event;window.Event=function(a,b){b=b||{};var c=document.createEvent("Event");c.initEvent(a,!!b.bubbles,!!b.cancelable);return c};if(c)for(var d in c)window.Event[d]=c[d];window.Event.prototype=c.prototype}if(!window.MouseEvent||b&&"function"!==typeof window.MouseEvent){b=window.MouseEvent;window.MouseEvent=function(a,
b){b=b||{};var c=document.createEvent("MouseEvent");c.initMouseEvent(a,!!b.bubbles,!!b.cancelable,b.view||window,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget);return c};if(b)for(d in b)window.MouseEvent[d]=b[d];window.MouseEvent.prototype=b.prototype}Array.from||(Array.from=function(a){return[].slice.call(a)});Object.assign||(Object.assign=function(a,b){for(var c=[].slice.call(arguments,1),d=0,e;d<c.length;d++)if(e=c[d])for(var f=
a,n=e,p=Object.getOwnPropertyNames(n),G=0;G<p.length;G++)e=p[G],f[e]=n[e];return a})})(window.WebComponents);(function(){function a(){}function b(a,b){if(!a.childNodes.length)return[];switch(a.nodeType){case Node.DOCUMENT_NODE:return R.call(a,b);case Node.DOCUMENT_FRAGMENT_NODE:return yb.call(a,b);default:return w.call(a,b)}}var c="undefined"===typeof HTMLTemplateElement,d=!(document.createDocumentFragment().cloneNode()instanceof DocumentFragment),e=!1;/Trident/.test(navigator.userAgent)&&function(){function a(a,b){if(a instanceof DocumentFragment)for(var d;d=a.firstChild;)c.call(this,d,b);else c.call(this,
a,b);return a}e=!0;var b=Node.prototype.cloneNode;Node.prototype.cloneNode=function(a){a=b.call(this,a);this instanceof DocumentFragment&&(a.__proto__=DocumentFragment.prototype);return a};DocumentFragment.prototype.querySelectorAll=HTMLElement.prototype.querySelectorAll;DocumentFragment.prototype.querySelector=HTMLElement.prototype.querySelector;Object.defineProperties(DocumentFragment.prototype,{nodeType:{get:function(){return Node.DOCUMENT_FRAGMENT_NODE},configurable:!0},localName:{get:function(){},
configurable:!0},nodeName:{get:function(){return"#document-fragment"},configurable:!0}});var c=Node.prototype.insertBefore;Node.prototype.insertBefore=a;var d=Node.prototype.appendChild;Node.prototype.appendChild=function(b){b instanceof DocumentFragment?a.call(this,b,null):d.call(this,b);return b};var f=Node.prototype.removeChild,g=Node.prototype.replaceChild;Node.prototype.replaceChild=function(b,c){b instanceof DocumentFragment?(a.call(this,b,c),f.call(this,c)):g.call(this,b,c);return c};Document.prototype.createDocumentFragment=
function(){var a=this.createElement("df");a.__proto__=DocumentFragment.prototype;return a};var h=Document.prototype.importNode;Document.prototype.importNode=function(a,b){b=h.call(this,a,b||!1);a instanceof DocumentFragment&&(b.__proto__=DocumentFragment.prototype);return b}}();var f=Node.prototype.cloneNode,g=Document.prototype.createElement,h=Document.prototype.importNode,k=Node.prototype.removeChild,l=Node.prototype.appendChild,n=Node.prototype.replaceChild,p=DOMParser.prototype.parseFromString,
G=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML")||{get:function(){return this.innerHTML},set:function(a){this.innerHTML=a}},u=Object.getOwnPropertyDescriptor(window.Node.prototype,"childNodes")||{get:function(){return this.childNodes}},w=Element.prototype.querySelectorAll,R=Document.prototype.querySelectorAll,yb=DocumentFragment.prototype.querySelectorAll,zb=function(){if(!c){var a=document.createElement("template"),b=document.createElement("template");b.content.appendChild(document.createElement("div"));
a.content.appendChild(b);a=a.cloneNode(!0);return 0===a.content.childNodes.length||0===a.content.firstChild.content.childNodes.length||d}}();if(c){var U=document.implementation.createHTMLDocument("template"),Ma=!0,q=document.createElement("style");q.textContent="template{display:none;}";var za=document.head;za.insertBefore(q,za.firstElementChild);a.prototype=Object.create(HTMLElement.prototype);var da=!document.createElement("div").hasOwnProperty("innerHTML");a.R=function(b){if(!b.content&&b.namespaceURI===
document.documentElement.namespaceURI){b.content=U.createDocumentFragment();for(var c;c=b.firstChild;)l.call(b.content,c);if(da)b.__proto__=a.prototype;else if(b.cloneNode=function(b){return a.b(this,b)},Ma)try{m(b),y(b)}catch(Hh){Ma=!1}a.a(b.content)}};var ba={option:["select"],thead:["table"],col:["colgroup","table"],tr:["tbody","table"],th:["tr","tbody","table"],td:["tr","tbody","table"]},m=function(b){Object.defineProperty(b,"innerHTML",{get:function(){return ea(this)},set:function(b){var c=ba[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(b)||
["",""])[1].toLowerCase()];if(c)for(var d=0;d<c.length;d++)b="<"+c[d]+">"+b+"</"+c[d]+">";U.body.innerHTML=b;for(a.a(U);this.content.firstChild;)k.call(this.content,this.content.firstChild);b=U.body;if(c)for(d=0;d<c.length;d++)b=b.lastChild;for(;b.firstChild;)l.call(this.content,b.firstChild)},configurable:!0})},y=function(a){Object.defineProperty(a,"outerHTML",{get:function(){return"<template>"+this.innerHTML+"</template>"},set:function(a){if(this.parentNode){U.body.innerHTML=a;for(a=this.ownerDocument.createDocumentFragment();U.body.firstChild;)l.call(a,
U.body.firstChild);n.call(this.parentNode,a,this)}else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");},configurable:!0})};m(a.prototype);y(a.prototype);a.a=function(c){c=b(c,"template");for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)a.R(f)};document.addEventListener("DOMContentLoaded",function(){a.a(document)});Document.prototype.createElement=function(){var b=g.apply(this,arguments);"template"===b.localName&&a.R(b);return b};DOMParser.prototype.parseFromString=
function(){var b=p.apply(this,arguments);a.a(b);return b};Object.defineProperty(HTMLElement.prototype,"innerHTML",{get:function(){return ea(this)},set:function(b){G.set.call(this,b);a.a(this)},configurable:!0,enumerable:!0});var ca=/[&\u00A0"]/g,Ab=/[&\u00A0<>]/g,Na=function(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}};q=function(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b};var Aa=q("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
Oa=q("style script xmp iframe noembed noframes plaintext noscript".split(" ")),ea=function(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):u.get.call(a),e=0,f=d.length,g;e<f&&(g=d[e]);e++){a:{var h=g;var k=a;var l=b;switch(h.nodeType){case Node.ELEMENT_NODE:for(var n=h.localName,m="<"+n,p=h.attributes,w=0;k=p[w];w++)m+=" "+k.name+'="'+k.value.replace(ca,Na)+'"';m+=">";h=Aa[n]?m:m+ea(h,l)+"</"+n+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&Oa[k.localName]?h:h.replace(Ab,Na);break a;
case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),Error("not implemented");}}c+=h}return c}}if(c||zb){a.b=function(a,b){var c=f.call(a,!1);this.R&&this.R(c);b&&(l.call(c.content,f.call(a.content,!0)),Pa(c.content,a.content));return c};var Pa=function(c,d){if(d.querySelectorAll&&(d=b(d,"template"),0!==d.length)){c=b(c,"template");for(var e=0,f=c.length,g,h;e<f;e++)h=d[e],g=c[e],a&&a.R&&a.R(h),n.call(g.parentNode,tf.call(h,!0),g)}},tf=Node.prototype.cloneNode=
function(b){if(!e&&d&&this instanceof DocumentFragment)if(b)var c=uf.call(this.ownerDocument,this,!0);else return this.ownerDocument.createDocumentFragment();else this.nodeType===Node.ELEMENT_NODE&&"template"===this.localName&&this.namespaceURI==document.documentElement.namespaceURI?c=a.b(this,b):c=f.call(this,b);b&&Pa(c,this);return c},uf=Document.prototype.importNode=function(c,d){d=d||!1;if("template"===c.localName)return a.b(c,d);var e=h.call(this,c,d);if(d){Pa(e,c);c=b(e,'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
for(var f,k=0;k<c.length;k++){f=c[k];d=g.call(document,"script");d.textContent=f.textContent;for(var l=f.attributes,m=0,p;m<l.length;m++)p=l[m],d.setAttribute(p.name,p.value);n.call(f.parentNode,d,f)}}return e}}c&&(window.HTMLTemplateElement=a)})();var Fa=setTimeout;function Ga(){}function Ha(a,b){return function(){a.apply(b,arguments)}}function t(a){if(!(this instanceof t))throw new TypeError("Promises must be constructed via new");if("function"!==typeof a)throw new TypeError("not a function");this.J=0;this.wa=!1;this.A=void 0;this.U=[];Ia(a,this)}
function Ja(a,b){for(;3===a.J;)a=a.A;0===a.J?a.U.push(b):(a.wa=!0,Ka(function(){var c=1===a.J?b.Wa:b.Xa;if(null===c)(1===a.J?La:Qa)(b.ra,a.A);else{try{var d=c(a.A)}catch(e){Qa(b.ra,e);return}La(b.ra,d)}}))}function La(a,b){try{if(b===a)throw new TypeError("A promise cannot be resolved with itself.");if(b&&("object"===typeof b||"function"===typeof b)){var c=b.then;if(b instanceof t){a.J=3;a.A=b;Ra(a);return}if("function"===typeof c){Ia(Ha(c,b),a);return}}a.J=1;a.A=b;Ra(a)}catch(d){Qa(a,d)}}
function Qa(a,b){a.J=2;a.A=b;Ra(a)}function Ra(a){2===a.J&&0===a.U.length&&Ka(function(){a.wa||"undefined"!==typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",a.A)});for(var b=0,c=a.U.length;b<c;b++)Ja(a,a.U[b]);a.U=null}function Sa(a,b,c){this.Wa="function"===typeof a?a:null;this.Xa="function"===typeof b?b:null;this.ra=c}function Ia(a,b){var c=!1;try{a(function(a){c||(c=!0,La(b,a))},function(a){c||(c=!0,Qa(b,a))})}catch(d){c||(c=!0,Qa(b,d))}}
t.prototype["catch"]=function(a){return this.then(null,a)};t.prototype.then=function(a,b){var c=new this.constructor(Ga);Ja(this,new Sa(a,b,c));return c};t.prototype["finally"]=function(a){var b=this.constructor;return this.then(function(c){return b.resolve(a()).then(function(){return c})},function(c){return b.resolve(a()).then(function(){return b.reject(c)})})};
function Ta(a){return new t(function(b,c){function d(a,g){try{if(g&&("object"===typeof g||"function"===typeof g)){var h=g.then;if("function"===typeof h){h.call(g,function(b){d(a,b)},c);return}}e[a]=g;0===--f&&b(e)}catch(n){c(n)}}if(!a||"undefined"===typeof a.length)throw new TypeError("Promise.all accepts an array");var e=Array.prototype.slice.call(a);if(0===e.length)return b([]);for(var f=e.length,g=0;g<e.length;g++)d(g,e[g])})}
function Ua(a){return a&&"object"===typeof a&&a.constructor===t?a:new t(function(b){b(a)})}function Va(a){return new t(function(b,c){c(a)})}function Wa(a){return new t(function(b,c){for(var d=0,e=a.length;d<e;d++)a[d].then(b,c)})}var Ka="function"===typeof setImmediate&&function(a){setImmediate(a)}||function(a){Fa(a,0)};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
if(!window.Promise){window.Promise=t;t.prototype.then=t.prototype.then;t.all=Ta;t.race=Wa;t.resolve=Ua;t.reject=Va;var Xa=document.createTextNode(""),Ya=[];(new MutationObserver(function(){for(var a=Ya.length,b=0;b<a;b++)Ya[b]();Ya.splice(0,a)})).observe(Xa,{characterData:!0});Ka=function(a){Ya.push(a);Xa.textContent=0<Xa.textContent.length?"":"a"}};/*
 Copyright (C) 2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(a,b){if(!(b in a)){var c=typeof global===typeof c?window:global,d=0,e=""+Math.random(),f="__\u0001symbol@@"+e,g=a.getOwnPropertyNames,h=a.getOwnPropertyDescriptor,k=a.create,l=a.keys,n=a.freeze||a,p=a.defineProperty,G=a.defineProperties,u=h(a,"getOwnPropertyNames"),w=a.prototype,R=w.hasOwnProperty,yb=w.propertyIsEnumerable,zb=w.toString,U=function(a,b,c){R.call(a,f)||p(a,f,{enumerable:!1,configurable:!1,writable:!1,value:{}});a[f]["@@"+b]=c},Ma=function(a,b){var c=k(a);g(b).forEach(function(a){ba.call(b,
a)&&Aa(c,a,b[a])});return c},q=function(){},za=function(a){return a!=f&&!R.call(ca,a)},da=function(a){return a!=f&&R.call(ca,a)},ba=function(a){var b=""+a;return da(b)?R.call(this,b)&&this[f]["@@"+b]:yb.call(this,a)},m=function(b){p(w,b,{enumerable:!1,configurable:!0,get:q,set:function(a){ea(this,b,{enumerable:!1,configurable:!0,writable:!0,value:a});U(this,b,!0)}});return n(ca[b]=p(a(b),"constructor",Ab))},y=function(a){if(this&&this!==c)throw new TypeError("Symbol is not a constructor");return m("__\u0001symbol:".concat(a||
"",e,++d))},ca=k(null),Ab={value:y},Na=function(a){return ca[a]},Aa=function(a,b,c){var d=""+b;if(da(d)){b=ea;if(c.enumerable){var e=k(c);e.enumerable=!1}else e=c;b(a,d,e);U(a,d,!!c.enumerable)}else p(a,b,c);return a},Oa=function(a){return g(a).filter(da).map(Na)};u.value=Aa;p(a,"defineProperty",u);u.value=Oa;p(a,b,u);u.value=function(a){return g(a).filter(za)};p(a,"getOwnPropertyNames",u);u.value=function(a,b){var c=Oa(b);c.length?l(b).concat(c).forEach(function(c){ba.call(b,c)&&Aa(a,c,b[c])}):G(a,
b);return a};p(a,"defineProperties",u);u.value=ba;p(w,"propertyIsEnumerable",u);u.value=y;p(c,"Symbol",u);u.value=function(a){a="__\u0001symbol:".concat("__\u0001symbol:",a,e);return a in w?ca[a]:m(a)};p(y,"for",u);u.value=function(a){if(za(a))throw new TypeError(a+" is not a symbol");return R.call(ca,a)?a.slice(20,-e.length):void 0};p(y,"keyFor",u);u.value=function(a,b){var c=h(a,b);c&&da(b)&&(c.enumerable=ba.call(a,b));return c};p(a,"getOwnPropertyDescriptor",u);u.value=function(a,b){return 1===
arguments.length?k(a):Ma(a,b)};p(a,"create",u);u.value=function(){var a=zb.call(this);return"[object String]"===a&&da(this)?"[object Symbol]":a};p(w,"toString",u);try{var ea=k(p({},"__\u0001symbol:",{get:function(){return p(this,"__\u0001symbol:",{value:!1})["__\u0001symbol:"]}}))["__\u0001symbol:"]||p}catch(Pa){ea=function(a,b,c){var d=h(w,b);delete w[b];p(a,b,c);p(w,b,d)}}}})(Object,"getOwnPropertySymbols");
(function(a){var b=a.defineProperty,c=a.prototype,d=c.toString,e;"iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f){if(!(f in Symbol))switch(b(Symbol,f,{value:Symbol(f)}),f){case "toStringTag":e=a.getOwnPropertyDescriptor(c,"toString"),e.value=function(){var a=d.call(this),b=this[Symbol.toStringTag];return"undefined"===typeof b?a:"[object "+b+"]"},b(c,"toString",e)}})})(Object,Symbol);
(function(a,b,c){function d(){return this}b[a]||(b[a]=function(){var b=0,c=this,g={next:function(){var a=c.length<=b;return a?{done:a}:{done:a,value:c[b++]}}};g[a]=d;return g});c[a]||(c[a]=function(){var b=String.fromCodePoint,c=this,g=0,h=c.length,k={next:function(){var a=h<=g,d=a?"":b(c.codePointAt(g));g+=d.length;return a?{done:a}:{done:a,value:d}}};k[a]=d;return k})})(Symbol.iterator,Array.prototype,String.prototype);/*

Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
Object.keys=function(a){return Object.getOwnPropertyNames(a).filter(function(b){return(b=Object.getOwnPropertyDescriptor(a,b))&&b.enumerable})};var Za=window.Symbol.iterator;String.prototype[Za]&&String.prototype.codePointAt||(String.prototype[Za]=function $a(){var b,c=this;return Ea($a,function(d){1==d.a&&(b=0);if(3!=d.a)return b<c.length?d=wa(d,c[b]):(d.a=0,d=void 0),d;b++;d.a=2})});
Set.prototype[Za]||(Set.prototype[Za]=function ab(){var b,c=this,d;return Ea(ab,function(e){1==e.a&&(b=[],c.forEach(function(c){b.push(c)}),d=0);if(3!=e.a)return d<b.length?e=wa(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});Map.prototype[Za]||(Map.prototype[Za]=function bb(){var b,c=this,d;return Ea(bb,function(e){1==e.a&&(b=[],c.forEach(function(c,d){b.push([d,c])}),d=0);if(3!=e.a)return d<b.length?e=wa(e,b[d]):(e.a=0,e=void 0),e;d++;e.a=2})});/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
window.WebComponents=window.WebComponents||{flags:{}};var cb=document.querySelector('script[src*="webcomponents-bundle"]'),db=/wc-(.+)/,v={};if(!v.noOpts){location.search.slice(1).split("&").forEach(function(a){a=a.split("=");var b;a[0]&&(b=a[0].match(db))&&(v[b[1]]=a[1]||!0)});if(cb)for(var eb=0,fb=void 0;fb=cb.attributes[eb];eb++)"src"!==fb.name&&(v[fb.name]=fb.value||!0);if(v.log&&v.log.split){var gb=v.log.split(",");v.log={};gb.forEach(function(a){v.log[a]=!0})}else v.log={}}
window.WebComponents.flags=v;var hb=v.shadydom;hb&&(window.ShadyDOM=window.ShadyDOM||{},window.ShadyDOM.force=hb);var ib=v.register||v.ce;ib&&window.customElements&&(window.customElements.forcePolyfill=ib);/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function jb(){this.za=this.root=null;this.ea=!1;this.N=this.$=this.oa=this.assignedSlot=this.assignedNodes=this.S=null;this.childNodes=this.nextSibling=this.previousSibling=this.lastChild=this.firstChild=this.parentNode=this.V=void 0;this.Ea=this.ua=!1;this.Z={}}jb.prototype.toJSON=function(){return{}};function x(a){a.ma||(a.ma=new jb);return a.ma}function z(a){return a&&a.ma};var A=window.ShadyDOM||{};A.Sa=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var kb=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");A.K=!!(kb&&kb.configurable&&kb.get);A.qa=A.force||!A.Sa;var lb=navigator.userAgent.match("Trident"),mb=navigator.userAgent.match("Edge");void 0===A.Ba&&(A.Ba=A.K&&(lb||mb));function nb(a){return(a=z(a))&&void 0!==a.firstChild}function B(a){return"ShadyRoot"===a.Ja}function ob(a){a=a.getRootNode();if(B(a))return a}
var pb=Element.prototype,qb=pb.matches||pb.matchesSelector||pb.mozMatchesSelector||pb.msMatchesSelector||pb.oMatchesSelector||pb.webkitMatchesSelector;function rb(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e=void 0;d<c.length&&(e=c[d]);d++){var f=e,g=a,h=Object.getOwnPropertyDescriptor(b,f);h&&Object.defineProperty(g,f,h)}}function sb(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)rb(a,c[d]);return a}
function tb(a,b){for(var c in b)a[c]=b[c]}var ub=document.createTextNode(""),vb=0,wb=[];(new MutationObserver(function(){for(;wb.length;)try{wb.shift()()}catch(a){throw ub.textContent=vb++,a;}})).observe(ub,{characterData:!0});function xb(a){wb.push(a);ub.textContent=vb++}var Bb=!!document.contains;function Cb(a,b){for(;b;){if(b==a)return!0;b=b.parentNode}return!1}
function Db(a){for(var b=a.length-1;0<=b;b--){var c=a[b],d=c.getAttribute("id")||c.getAttribute("name");d&&"length"!==d&&isNaN(d)&&(a[d]=c)}a.item=function(b){return a[b]};a.namedItem=function(b){if("length"!==b&&isNaN(b)&&a[b])return a[b];for(var c=ma(a),d=c.next();!d.done;d=c.next())if(d=d.value,(d.getAttribute("id")||d.getAttribute("name"))==b)return d;return null};return a};var Eb=[],Fb;function Gb(a){Fb||(Fb=!0,xb(Hb));Eb.push(a)}function Hb(){Fb=!1;for(var a=!!Eb.length;Eb.length;)Eb.shift()();return a}Hb.list=Eb;function Ib(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.ca=new Set}function Jb(a){a.a||(a.a=!0,xb(function(){a.flush()}))}Ib.prototype.flush=function(){if(this.a){this.a=!1;var a=this.takeRecords();a.length&&this.ca.forEach(function(b){b(a)})}};Ib.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Kb(a,b){var c=x(a);c.S||(c.S=new Ib);c.S.ca.add(b);var d=c.S;return{Ia:b,P:d,Ka:a,takeRecords:function(){return d.takeRecords()}}}function Lb(a){var b=a&&a.P;b&&(b.ca.delete(a.Ia),b.ca.size||(x(a.Ka).S=null))}
function Mb(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var Nb=Element.prototype.insertBefore,Ob=Element.prototype.replaceChild,Pb=Element.prototype.removeChild,Qb=Element.prototype.setAttribute,Rb=Element.prototype.removeAttribute,Sb=Element.prototype.cloneNode,Tb=Document.prototype.importNode,Ub=Element.prototype.addEventListener,Vb=Element.prototype.removeEventListener,Wb=Window.prototype.addEventListener,Xb=Window.prototype.removeEventListener,Yb=Element.prototype.dispatchEvent,Zb=Node.prototype.contains||HTMLElement.prototype.contains,$b=Document.prototype.getElementById,
ac=Element.prototype.querySelector,bc=DocumentFragment.prototype.querySelector,cc=Document.prototype.querySelector,dc=Element.prototype.querySelectorAll,ec=DocumentFragment.prototype.querySelectorAll,fc=Document.prototype.querySelectorAll,C={};C.appendChild=Element.prototype.appendChild;C.insertBefore=Nb;C.replaceChild=Ob;C.removeChild=Pb;C.setAttribute=Qb;C.removeAttribute=Rb;C.cloneNode=Sb;C.importNode=Tb;C.addEventListener=Ub;C.removeEventListener=Vb;C.gb=Wb;C.hb=Xb;C.dispatchEvent=Yb;
C.contains=Zb;C.getElementById=$b;C.pb=ac;C.tb=bc;C.nb=cc;C.querySelector=function(a){switch(this.nodeType){case Node.ELEMENT_NODE:return ac.call(this,a);case Node.DOCUMENT_NODE:return cc.call(this,a);default:return bc.call(this,a)}};C.qb=dc;C.ub=ec;C.ob=fc;C.querySelectorAll=function(a){switch(this.nodeType){case Node.ELEMENT_NODE:return dc.call(this,a);case Node.DOCUMENT_NODE:return fc.call(this,a);default:return ec.call(this,a)}};var gc=/[&\u00A0"]/g,hc=/[&\u00A0<>]/g;function ic(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function jc(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var kc=jc("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),lc=jc("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function mc(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,g=void 0;e<f&&(g=d[e]);e++){a:{var h=g;var k=a,l=b;switch(h.nodeType){case Node.ELEMENT_NODE:k=h.localName;for(var n="<"+k,p=h.attributes,G=0,u;u=p[G];G++)n+=" "+u.name+'="'+u.value.replace(gc,ic)+'"';n+=">";h=kc[k]?n:n+mc(h,l)+"</"+k+">";break a;case Node.TEXT_NODE:h=h.data;h=k&&lc[k.localName]?h:h.replace(hc,ic);break a;case Node.COMMENT_NODE:h="\x3c!--"+h.data+"--\x3e";break a;default:throw window.console.error(h),
Error("not implemented");}}c+=h}return c};var D=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),E=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function nc(a){var b=[];D.currentNode=a;for(a=D.firstChild();a;)b.push(a),a=D.nextSibling();return b}
var F={parentNode:function(a){D.currentNode=a;return D.parentNode()},firstChild:function(a){D.currentNode=a;return D.firstChild()},lastChild:function(a){D.currentNode=a;return D.lastChild()},previousSibling:function(a){D.currentNode=a;return D.previousSibling()},nextSibling:function(a){D.currentNode=a;return D.nextSibling()}};F.childNodes=nc;F.parentElement=function(a){E.currentNode=a;return E.parentNode()};F.firstElementChild=function(a){E.currentNode=a;return E.firstChild()};
F.lastElementChild=function(a){E.currentNode=a;return E.lastChild()};F.previousElementSibling=function(a){E.currentNode=a;return E.previousSibling()};F.nextElementSibling=function(a){E.currentNode=a;return E.nextSibling()};F.children=function(a){var b=[];E.currentNode=a;for(a=E.firstChild();a;)b.push(a),a=E.nextSibling();return Db(b)};F.innerHTML=function(a){return mc(a,function(a){return nc(a)})};
F.textContent=function(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}};var oc=A.K,pc=[Node.prototype,Element.prototype,HTMLElement.prototype];function H(a){var b;a:{for(b=0;b<pc.length;b++){var c=pc[b];if(c.hasOwnProperty(a)){b=c;break a}}b=void 0}if(!b)throw Error("Could not find descriptor for "+a);return Object.getOwnPropertyDescriptor(b,a)}
var I=oc?{parentNode:H("parentNode"),firstChild:H("firstChild"),lastChild:H("lastChild"),previousSibling:H("previousSibling"),nextSibling:H("nextSibling"),childNodes:H("childNodes"),parentElement:H("parentElement"),previousElementSibling:H("previousElementSibling"),nextElementSibling:H("nextElementSibling"),innerHTML:H("innerHTML"),textContent:H("textContent"),firstElementChild:H("firstElementChild"),lastElementChild:H("lastElementChild"),children:H("children")}:{},qc=oc?{firstElementChild:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,
"firstElementChild"),lastElementChild:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,"lastElementChild"),children:Object.getOwnPropertyDescriptor(DocumentFragment.prototype,"children")}:{},rc=oc?{firstElementChild:Object.getOwnPropertyDescriptor(Document.prototype,"firstElementChild"),lastElementChild:Object.getOwnPropertyDescriptor(Document.prototype,"lastElementChild"),children:Object.getOwnPropertyDescriptor(Document.prototype,"children")}:{},sc={ya:I,sb:qc,mb:rc,parentNode:function(a){return I.parentNode.get.call(a)},
firstChild:function(a){return I.firstChild.get.call(a)},lastChild:function(a){return I.lastChild.get.call(a)},previousSibling:function(a){return I.previousSibling.get.call(a)},nextSibling:function(a){return I.nextSibling.get.call(a)},childNodes:function(a){return Array.prototype.slice.call(I.childNodes.get.call(a))},parentElement:function(a){return I.parentElement.get.call(a)},previousElementSibling:function(a){return I.previousElementSibling.get.call(a)},nextElementSibling:function(a){return I.nextElementSibling.get.call(a)},
innerHTML:function(a){return I.innerHTML.get.call(a)},textContent:function(a){return I.textContent.get.call(a)},children:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.children.get.call(a);case Node.DOCUMENT_NODE:return rc.children.get.call(a);default:return I.children.get.call(a)}},firstElementChild:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.firstElementChild.get.call(a);case Node.DOCUMENT_NODE:return rc.firstElementChild.get.call(a);default:return I.firstElementChild.get.call(a)}},
lastElementChild:function(a){switch(a.nodeType){case Node.DOCUMENT_FRAGMENT_NODE:return qc.lastElementChild.get.call(a);case Node.DOCUMENT_NODE:return rc.lastElementChild.get.call(a);default:return I.lastElementChild.get.call(a)}}};var J=A.Ba?sc:F;function tc(a){for(;a.firstChild;)a.removeChild(a.firstChild)}
var uc=A.K,vc=document.implementation.createHTMLDocument("inert"),wc=Object.getOwnPropertyDescriptor(Node.prototype,"isConnected"),xc=wc&&wc.get,yc=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),zc={parentElement:{get:function(){var a=z(this);(a=a&&a.parentNode)&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:J.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=z(this);a=a&&a.parentNode;return void 0!==a?a:J.parentNode(this)},configurable:!0},
nextSibling:{get:function(){var a=z(this);a=a&&a.nextSibling;return void 0!==a?a:J.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=z(this);a=a&&a.previousSibling;return void 0!==a?a:J.previousSibling(this)},configurable:!0},nextElementSibling:{get:function(){var a=z(this);if(a&&void 0!==a.nextSibling){for(a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return J.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){var a=
z(this);if(a&&void 0!==a.previousSibling){for(a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return J.previousElementSibling(this)},configurable:!0}},Ac={className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0}},Bc={childNodes:{get:function(){if(nb(this)){var a=z(this);if(!a.childNodes){a.childNodes=[];for(var b=this.firstChild;b;b=b.nextSibling)a.childNodes.push(b)}var c=a.childNodes}else c=
J.childNodes(this);c.item=function(a){return c[a]};return c},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=z(this);a=a&&a.firstChild;return void 0!==a?a:J.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=z(this);a=a&&a.lastChild;return void 0!==a?a:J.lastChild(this)},configurable:!0},textContent:{get:function(){if(nb(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&
a.push(d.textContent);return a.join("")}return J.textContent(this)},set:function(a){if("undefined"===typeof a||null===a)a="";switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:if(!nb(this)&&uc){var b=this.firstChild;(b!=this.lastChild||b&&b.nodeType!=Node.TEXT_NODE)&&tc(this);sc.ya.textContent.set.call(this,a)}else tc(this),(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){var a=
z(this);if(a&&void 0!==a.firstChild){for(a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return J.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){var a=z(this);if(a&&void 0!==a.lastChild){for(a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return J.lastElementChild(this)},configurable:!0},children:{get:function(){return nb(this)?Db(Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===Node.ELEMENT_NODE})):
J.children(this)},configurable:!0},innerHTML:{get:function(){return nb(this)?mc("template"===this.localName?this.content:this):J.innerHTML(this)},set:function(a){var b="template"===this.localName?this.content:this;tc(b);var c=this.localName||"div";c=this.namespaceURI&&this.namespaceURI!==vc.namespaceURI?vc.createElementNS(this.namespaceURI,c):vc.createElement(c);uc?sc.ya.innerHTML.set.call(c,a):c.innerHTML=a;for(a="template"===this.localName?c.content:c;a.firstChild;)b.appendChild(a.firstChild)},
configurable:!0}},Cc={shadowRoot:{get:function(){var a=z(this);return a&&a.za||null},configurable:!0}},Dc={activeElement:{get:function(){var a=yc&&yc.get?yc.get.call(document):A.K?void 0:document.activeElement;if(a&&a.nodeType){var b=!!B(this);if(this===document||b&&this.host!==a&&C.contains.call(this.host,a)){for(b=ob(a);b&&b!==this;)a=b.host,b=ob(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function K(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function Ec(a){K(a,zc);K(a,Ac);K(a,Bc);K(a,Dc)}
function Fc(){var a=Gc.prototype;a.__proto__=DocumentFragment.prototype;K(a,zc,!0);K(a,Bc,!0);K(a,Dc,!0);Object.defineProperties(a,{nodeType:{value:Node.DOCUMENT_FRAGMENT_NODE,configurable:!0},nodeName:{value:"#document-fragment",configurable:!0},nodeValue:{value:null,configurable:!0}});["localName","namespaceURI","prefix"].forEach(function(b){Object.defineProperty(a,b,{value:void 0,configurable:!0})});["ownerDocument","baseURI","isConnected"].forEach(function(b){Object.defineProperty(a,b,{get:function(){return this.host[b]},
configurable:!0})})}var Hc=A.K?function(){}:function(a){var b=x(a);b.ua||(b.ua=!0,K(a,zc,!0),K(a,Ac,!0))},Ic=A.K?function(){}:function(a){x(a).Ea||(K(a,Bc,!0),K(a,Cc,!0))};var Jc=J.childNodes;function Kc(a,b,c){Ic(b);var d=x(b);void 0!==d.firstChild&&(d.childNodes=null);if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){d=a.childNodes;for(var e=0;e<d.length;e++)Lc(d[e],b,c);a=x(a);b=void 0!==a.firstChild?null:void 0;a.firstChild=a.lastChild=b;a.childNodes=b}else Lc(a,b,c)}
function Lc(a,b,c){Hc(a);c=c||null;var d=x(a),e=x(b),f=c?x(c):null;d.previousSibling=c?f.previousSibling:b.lastChild;if(f=z(d.previousSibling))f.nextSibling=a;if(f=z(d.nextSibling=c))f.previousSibling=a;d.parentNode=b;c?c===e.firstChild&&(e.firstChild=a):(e.lastChild=a,e.firstChild||(e.firstChild=a));e.childNodes=null}
function Mc(a,b){var c=x(a);b=x(b);a===b.firstChild&&(b.firstChild=c.nextSibling);a===b.lastChild&&(b.lastChild=c.previousSibling);a=c.previousSibling;var d=c.nextSibling;a&&(x(a).nextSibling=d);d&&(x(d).previousSibling=a);c.parentNode=c.previousSibling=c.nextSibling=void 0;void 0!==b.childNodes&&(b.childNodes=null)}
function Nc(a){var b=x(a);if(void 0===b.firstChild){b.childNodes=null;var c=Jc(a);b.firstChild=c[0]||null;b.lastChild=c[c.length-1]||null;Ic(a);for(b=0;b<c.length;b++){var d=c[b],e=x(d);e.parentNode=a;e.nextSibling=c[b+1]||null;e.previousSibling=c[b-1]||null;Hc(d)}}};var Oc=J.parentNode;
function Pc(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=z(c);d=d&&d.parentNode;if(void 0!==d&&d!==a||void 0===d&&Oc(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;var e=[],f=Qc,g=ob(a),h=g?g.host.localName:"";if(b.parentNode){var k=Rc(b);Sc(b.parentNode,b,!!g||!(b.getRootNode()instanceof ShadowRoot));
f=function(a,b){Tc()&&(Uc(a,k),Qc(a,b))}}d=!0;var l=!Vc(b,h);!g||b.__noInsertionPoint&&!l||Wc(b,function(a){"slot"===a.localName&&e.push(a);l&&f(a,h)});e.length&&Xc(g,e);("slot"===a.localName||e.length)&&g&&Yc(g);nb(a)&&(Kc(b,a,c),g=z(a),Zc(a)?(Yc(g.root),d=!1):g.root&&(d=!1));d?(d=B(a)?a.host:a,c?(c=$c(c),C.insertBefore.call(d,b,c)):C.appendChild.call(d,b)):b.ownerDocument!==a.ownerDocument&&a.ownerDocument.adoptNode(b);ad(a,b);return b}
function Sc(a,b,c){c=void 0===c?!1:c;if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+b);var d=ob(b),e=z(a);if(nb(a)&&(Mc(b,a),Zc(a))){Yc(e.root);var f=!0}if(Tc()&&!c&&d){var g=Rc(b);Wc(b,function(a){Uc(a,g)})}bd(b);if(d){var h=a&&"slot"===a.localName;h&&(f=!0);((c=cd(d,b))||h)&&Yc(d)}f||(f=B(a)?a.host:a,(!e.root&&"slot"!==b.localName||f===Oc(b))&&C.removeChild.call(f,b));ad(a,null,b);return b}
function bd(a){var b=z(a);if(b&&void 0!==b.V){b=a.childNodes;for(var c=0,d=b.length,e=void 0;c<d&&(e=b[c]);c++)bd(e)}if(a=z(a))a.V=void 0}function $c(a){var b=a;a&&"slot"===a.localName&&(b=(b=(b=z(a))&&b.N)&&b.length?b[0]:$c(a.nextSibling));return b}function Zc(a){return(a=(a=z(a))&&a.root)&&dd(a)}
function ed(a,b){if("slot"===b)a=a.parentNode,Zc(a)&&Yc(z(a).root);else if("slot"===a.localName&&"name"===b&&(b=ob(a))){if(b.o){fd(b);var c=a.Ha,d=gd(a);if(d!==c){c=b.w[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.w[d]||(b.w[d]=[]);c.push(a);1<c.length&&(b.w[d]=hd(c))}}Yc(b)}}function ad(a,b,c){if(a=(a=z(a))&&a.S)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Jb(a)}
function id(a){if(a&&a.nodeType){var b=x(a),c=b.V;void 0===c&&(B(a)?(c=a,b.V=c):(c=(c=a.parentNode)?id(c):a,C.contains.call(document.documentElement,a)&&(b.V=c)));return c}}function jd(a,b,c){var d=[];kd(a.childNodes,b,c,d);return d}function kd(a,b,c,d){for(var e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++){var h;if(h=g.nodeType===Node.ELEMENT_NODE){h=g;var k=b,l=c,n=d,p=k(h);p&&n.push(h);l&&l(p)?h=p:(kd(h.childNodes,k,l,n),h=void 0)}if(h)break}}var ld=null;
function Tc(){ld||(ld=window.ShadyCSS&&window.ShadyCSS.ScopingShim);return ld||null}function md(a,b,c){var d=Tc();d&&"class"===b?d.setElementClass(a,c):(C.setAttribute.call(a,b,c),ed(a,b))}function nd(a,b){if(a.ownerDocument!==document||"template"===a.localName)return C.importNode.call(document,a,b);var c=C.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=nd(a[b],!0),c.appendChild(d)}return c}function Qc(a,b){var c=Tc();c&&c.scopeNode(a,b)}
function Uc(a,b){var c=Tc();c&&c.unscopeNode(a,b)}function Vc(a,b){var c=Tc();if(!c)return!0;if(a.nodeType===Node.DOCUMENT_FRAGMENT_NODE){c=!0;for(var d=0;c&&d<a.childNodes.length;d++)c=c&&Vc(a.childNodes[d],b);return c}return a.nodeType!==Node.ELEMENT_NODE?!0:c.currentScopeForNode(a)===b}function Rc(a){if(a.nodeType!==Node.ELEMENT_NODE)return"";var b=Tc();return b?b.currentScopeForNode(a):""}
function Wc(a,b){if(a){a.nodeType===Node.ELEMENT_NODE&&b(a);for(var c=0,d;c<a.childNodes.length;c++)d=a.childNodes[c],d.nodeType===Node.ELEMENT_NODE&&Wc(d,b)}};var od="__eventWrappers"+Date.now(),pd=function(){var a=Object.getOwnPropertyDescriptor(Event.prototype,"composed");return a?function(b){return a.get.call(b)}:null}(),qd={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,
pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0},rd={DOMAttrModified:!0,DOMAttributeNameChanged:!0,DOMCharacterDataModified:!0,DOMElementNameChanged:!0,DOMNodeInserted:!0,DOMNodeInsertedIntoDocument:!0,DOMNodeRemoved:!0,DOMNodeRemovedFromDocument:!0,DOMSubtreeModified:!0};
function sd(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}function td(a,b){if(!B)return a;a=sd(a,!0);for(var c=0,d,e=void 0,f,g=void 0;c<b.length;c++)if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(g=a.indexOf(f),e=f),!B(f)||-1<g)return d}
var ud={get composed(){void 0===this.Y&&(pd?this.Y="focusin"===this.type||"focusout"===this.type||pd(this):!1!==this.isTrusted&&(this.Y=qd[this.type]));return this.Y||!1},composedPath:function(){this.ta||(this.ta=sd(this.__target,this.composed));return this.ta},get target(){return td(this.currentTarget||this.__previousCurrentTarget,this.composedPath())},get relatedTarget(){if(!this.la)return null;this.va||(this.va=sd(this.la,!0));return td(this.currentTarget||this.__previousCurrentTarget,this.va)},
stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.ka=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);this.ka=this.Da=!0}};function vd(a){function b(b,d){b=new a(b,d);b.Y=d&&!!d.composed;return b}tb(b,a);b.prototype=a.prototype;return b}var wd={focus:!0,blur:!0};function xd(a){return a.__target!==a.target||a.la!==a.relatedTarget}
function yd(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&(!xd(a)||a.target!==a.relatedTarget)&&(e.call(b,a),!a.Da);d++);}
function zd(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];yd(a,d,"capture");if(a.ka)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=z(d);f=f&&f.root;if(0===c||f&&f===e)if(yd(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.ka)break}}
function Ad(a,b,c,d,e,f){for(var g=0;g<a.length;g++){var h=a[g],k=h.type,l=h.capture,n=h.once,p=h.passive;if(b===h.node&&c===k&&d===l&&e===n&&f===p)return g}return-1}
function Bd(a,b,c){if(b){var d=typeof b;if("function"===d||"object"===d)if("object"!==d||b.handleEvent&&"function"===typeof b.handleEvent){var e=this instanceof Window?C.gb:C.addEventListener;if(rd[a])return e.call(this,a,b,c);if(c&&"object"===typeof c){var f=!!c.capture;var g=!!c.once;var h=!!c.passive}else f=!!c,h=g=!1;var k=c&&c.na||this,l=b[od];if(l){if(-1<Ad(l,k,a,f,g,h))return}else b[od]=[];l=function(e){g&&this.removeEventListener(a,b,c);e.__target||Cd(e);if(k!==this){var f=Object.getOwnPropertyDescriptor(e,
"currentTarget");Object.defineProperty(e,"currentTarget",{get:function(){return k},configurable:!0})}e.__previousCurrentTarget=e.currentTarget;if(!B(k)||-1!=e.composedPath().indexOf(k))if(e.composed||-1<e.composedPath().indexOf(k))if(xd(e)&&e.target===e.relatedTarget)e.eventPhase===Event.BUBBLING_PHASE&&e.stopImmediatePropagation();else if(e.eventPhase===Event.CAPTURING_PHASE||e.bubbles||e.target===k||k instanceof Window){var h="function"===d?b.call(k,e):b.handleEvent&&b.handleEvent(e);k!==this&&
(f?(Object.defineProperty(e,"currentTarget",f),f=null):delete e.currentTarget);return h}};b[od].push({node:k,type:a,capture:f,once:g,passive:h,ib:l});wd[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][f?"capture":"bubble"].push(l)):e.call(this,a,l,c)}}}
function Dd(a,b,c){if(b){var d=this instanceof Window?C.hb:C.removeEventListener;if(rd[a])return d.call(this,a,b,c);if(c&&"object"===typeof c){var e=!!c.capture;var f=!!c.once;var g=!!c.passive}else e=!!c,g=f=!1;var h=c&&c.na||this,k=void 0;var l=null;try{l=b[od]}catch(n){}l&&(f=Ad(l,h,a,e,f,g),-1<f&&(k=l.splice(f,1)[0].ib,l.length||(b[od]=void 0)));d.call(this,a,k||b,c);k&&wd[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][e?"capture":"bubble"],k=a.indexOf(k),-1<k&&a.splice(k,1))}}
function Ed(){for(var a in wd)window.addEventListener(a,function(a){a.__target||(Cd(a),zd(a))},!0)}function Cd(a){a.__target=a.target;a.la=a.relatedTarget;if(A.K){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.jb=b;rb(c,ud);b.__patchProto=c}a.__proto__=b.__patchProto}else rb(a,ud)}var Fd=vd(window.Event),Gd=vd(window.CustomEvent),Hd=vd(window.MouseEvent);
function Id(){window.Event=Fd;window.CustomEvent=Gd;window.MouseEvent=Hd;Ed();if(!pd&&Object.getOwnPropertyDescriptor(Event.prototype,"isTrusted")){var a=function(){var a=new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(a)};Element.prototype.click?Element.prototype.click=a:HTMLElement.prototype.click&&(HTMLElement.prototype.click=a)}};function Jd(a,b){return{index:a,W:[],ba:b}}
function Kd(a,b,c,d){var e=0,f=0,g=0,h=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(g=0;g<k;g++)if(a[g]!==c[g])break a;g=k}if(b==a.length&&d==c.length){h=a.length;for(var l=c.length,n=0;n<k-g&&Ld(a[--h],c[--l]);)n++;h=n}e+=g;f+=g;b-=h;d-=h;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Jd(e,0);f<d;)b.W.push(c[f++]);return[b]}if(f==d)return[Jd(e,b-e)];k=e;g=f;d=d-g+1;h=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(h),b[l][0]=l;for(l=0;l<h;l++)b[0][l]=l;for(l=1;l<d;l++)for(n=1;n<h;n++)if(a[k+n-1]===c[g+l-1])b[l][n]=
b[l-1][n-1];else{var p=b[l-1][n]+1,G=b[l][n-1]+1;b[l][n]=p<G?p:G}k=b.length-1;g=b[0].length-1;d=b[k][g];for(a=[];0<k||0<g;)0==k?(a.push(2),g--):0==g?(a.push(3),k--):(h=b[k-1][g-1],l=b[k-1][g],n=b[k][g-1],p=l<n?l<h?l:h:n<h?n:h,p==h?(h==d?a.push(0):(a.push(1),d=h),k--,g--):p==l?(a.push(3),k--,d=l):(a.push(2),g--,d=n));a.reverse();b=void 0;k=[];for(g=0;g<a.length;g++)switch(a[g]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Jd(e,0));b.ba++;e++;b.W.push(c[f]);f++;break;case 2:b||(b=Jd(e,
0));b.ba++;e++;break;case 3:b||(b=Jd(e,0)),b.W.push(c[f]),f++}b&&k.push(b);return k}function Ld(a,b){return a===b};var Md=J.parentNode,Nd=J.childNodes,Od={},Pd=A.deferConnectionCallbacks&&"loading"===document.readyState,Qd;function Rd(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}
function Gc(a,b,c){if(a!==Od)throw new TypeError("Illegal constructor");this.Ja="ShadyRoot";this.host=b;this.c=c&&c.mode;Nc(b);a=x(b);a.root=this;a.za="closed"!==this.c?this:null;a=x(this);a.firstChild=a.lastChild=a.parentNode=a.nextSibling=a.previousSibling=null;a.childNodes=[];this.b=this.aa=!1;this.a=this.w=this.o=null;Yc(this)}function Yc(a){a.aa||(a.aa=!0,Gb(function(){return Sd(a)}))}
function Sd(a){for(var b;a;){a.aa&&(b=a);a:{var c=a;a=c.host.getRootNode();if(B(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],"slot"==c.localName)break a;a=void 0}}b&&b._renderRoot()}
Gc.prototype._renderRoot=function(){var a=Pd;Pd=!0;this.aa=!1;if(this.o){fd(this);for(var b=0,c;b<this.o.length;b++){c=this.o[b];var d=z(c),e=d.assignedNodes;d.assignedNodes=[];d.N=[];if(d.oa=e)for(d=0;d<e.length;d++){var f=z(e[d]);f.$=f.assignedSlot;f.assignedSlot===c&&(f.assignedSlot=null)}}for(b=this.host.firstChild;b;b=b.nextSibling)Td(this,b);for(b=0;b<this.o.length;b++){c=this.o[b];e=z(c);if(!e.assignedNodes.length)for(d=c.firstChild;d;d=d.nextSibling)Td(this,d,c);(d=(d=z(c.parentNode))&&d.root)&&
dd(d)&&d._renderRoot();Ud(this,e.N,e.assignedNodes);if(d=e.oa){for(f=0;f<d.length;f++)z(d[f]).$=null;e.oa=null;d.length>e.assignedNodes.length&&(e.ea=!0)}e.ea&&(e.ea=!1,Vd(this,c))}c=this.o;b=[];for(e=0;e<c.length;e++)d=c[e].parentNode,(f=z(d))&&f.root||!(0>b.indexOf(d))||b.push(d);for(c=0;c<b.length;c++){f=b[c];e=f===this?this.host:f;d=[];f=f.childNodes;for(var g=0;g<f.length;g++){var h=f[g];if("slot"==h.localName){h=z(h).N;for(var k=0;k<h.length;k++)d.push(h[k])}else d.push(h)}f=Nd(e);g=Kd(d,d.length,
f,f.length);k=h=0;for(var l=void 0;h<g.length&&(l=g[h]);h++){for(var n=0,p=void 0;n<l.W.length&&(p=l.W[n]);n++)Md(p)===e&&C.removeChild.call(e,p),f.splice(l.index+k,1);k-=l.ba}k=0;for(l=void 0;k<g.length&&(l=g[k]);k++)for(h=f[l.index],n=l.index;n<l.index+l.ba;n++)p=d[n],C.insertBefore.call(e,p,h),f.splice(n,0,p)}}if(!this.b)for(b=this.host.childNodes,c=0,e=b.length;c<e;c++)d=b[c],f=z(d),Md(d)!==this.host||"slot"!==d.localName&&f.assignedSlot||C.removeChild.call(this.host,d);this.b=!0;Pd=a;Qd&&Qd()};
function Td(a,b,c){var d=x(b),e=d.$;d.$=null;c||(c=(a=a.w[b.slot||"__catchall"])&&a[0]);c?(x(c).assignedNodes.push(b),d.assignedSlot=c):d.assignedSlot=void 0;e!==d.assignedSlot&&d.assignedSlot&&(x(d.assignedSlot).ea=!0)}function Ud(a,b,c){for(var d=0,e=void 0;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=z(e).assignedNodes;f&&f.length&&Ud(a,b,f)}else b.push(c[d])}function Vd(a,b){C.dispatchEvent.call(b,new Event("slotchange"));b=z(b);b.assignedSlot&&Vd(a,b.assignedSlot)}
function Xc(a,b){a.a=a.a||[];a.o=a.o||[];a.w=a.w||{};a.a.push.apply(a.a,b instanceof Array?b:na(ma(b)))}function fd(a){if(a.a&&a.a.length){for(var b=a.a,c,d=0;d<b.length;d++){var e=b[d];Nc(e);Nc(e.parentNode);var f=gd(e);a.w[f]?(c=c||{},c[f]=!0,a.w[f].push(e)):a.w[f]=[e];a.o.push(e)}if(c)for(var g in c)a.w[g]=hd(a.w[g]);a.a=[]}}function gd(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.Ha=b}
function hd(a){return a.sort(function(a,c){a=Rd(a);for(var b=Rd(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(f)}})}function cd(a,b){if(a.o){fd(a);var c=a.w,d;for(d in c)for(var e=c[d],f=0;f<e.length;f++){var g=e[f];if(Cb(b,g)){e.splice(f,1);var h=a.o.indexOf(g);0<=h&&a.o.splice(h,1);f--;g=z(g);if(h=g.N)for(var k=0;k<h.length;k++){var l=h[k],n=Md(l);n&&C.removeChild.call(n,l)}g.N=[];g.assignedNodes=[];h=!0}}return h}}
function dd(a){fd(a);return!(!a.o||!a.o.length)}
if(window.customElements&&A.qa){var Wd=new Map;Qd=function(){var a=Array.from(Wd);Wd.clear();a=ma(a);for(var b=a.next();!b.done;b=a.next()){b=ma(b.value);var c=b.next().value;b.next().value?c.Fa():c.Ga()}};Pd&&document.addEventListener("readystatechange",function(){Pd=!1;Qd()},{once:!0});var Xd=function(a,b,c){var d=0,e="__isConnected"+d++;if(b||c)a.prototype.connectedCallback=a.prototype.Fa=function(){Pd?Wd.set(this,!0):this[e]||(this[e]=!0,b&&b.call(this))},a.prototype.disconnectedCallback=a.prototype.Ga=
function(){Pd?this.isConnected||Wd.set(this,!1):this[e]&&(this[e]=!1,c&&c.call(this))};return a},define=window.customElements.define;Object.defineProperty(window.CustomElementRegistry.prototype,"define",{value:function(a,b){var c=b.prototype.connectedCallback,d=b.prototype.disconnectedCallback;define.call(window.customElements,a,Xd(b,c,d));b.prototype.connectedCallback=c;b.prototype.disconnectedCallback=d}})};function Yd(a){var b=a.getRootNode();B(b)&&Sd(b);return(a=z(a))&&a.assignedSlot||null}
var Zd={addEventListener:Bd.bind(window),removeEventListener:Dd.bind(window)},$d={addEventListener:Bd,removeEventListener:Dd,appendChild:function(a){return Pc(this,a)},insertBefore:function(a,b){return Pc(this,a,b)},removeChild:function(a){return Sc(this,a)},replaceChild:function(a,b){Pc(this,a,b);Sc(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=C.cloneNode.call(this,a);else if(b=C.cloneNode.call(this,!1),a&&b.nodeType!==Node.ATTRIBUTE_NODE){a=this.childNodes;for(var c=
0,d;c<a.length;c++)d=a[c].cloneNode(!0),b.appendChild(d)}return b},getRootNode:function(){return id(this)},contains:function(a){return Cb(this,a)},dispatchEvent:function(a){Hb();return C.dispatchEvent.call(this,a)}};
Object.defineProperties($d,{isConnected:{get:function(){if(xc&&xc.call(this))return!0;if(this.nodeType==Node.DOCUMENT_FRAGMENT_NODE)return!1;var a=this.ownerDocument;if(Bb){if(C.contains.call(a,this))return!0}else if(a.documentElement&&C.contains.call(a.documentElement,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(B(a)?a.host:void 0);return!!(a&&a instanceof Document)},configurable:!0}});
var ae={get assignedSlot(){return Yd(this)}},be={querySelector:function(a){return jd(this,function(b){return qb.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a,b){if(b){b=Array.prototype.slice.call(C.querySelectorAll.call(this,a));var c=this.getRootNode();return b.filter(function(a){return a.getRootNode()==c})}return jd(this,function(b){return qb.call(b,a)})}},ce={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();B(b)&&Sd(b);return(b=z(this))?
(a&&a.flatten?b.N:b.assignedNodes)||[]:[]}}},de=sb({setAttribute:function(a,b){md(this,a,b)},removeAttribute:function(a){C.removeAttribute.call(this,a);ed(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";if(!a)throw"Not enough arguments.";return new Gc(Od,this,a)},get slot(){return this.getAttribute("slot")},set slot(a){md(this,"slot",a)},get assignedSlot(){return Yd(this)}},be,ce);Object.defineProperties(de,Cc);
var ee=sb({importNode:function(a,b){return nd(a,b)},getElementById:function(a){return jd(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},be);Object.defineProperties(ee,{_activeElement:Dc.activeElement});
for(var fe=HTMLElement.prototype.blur,ge={blur:function(){var a=z(this);(a=(a=a&&a.root)&&a.activeElement)?a.blur():fe.call(this)}},he={},ie=ma(Object.getOwnPropertyNames(Document.prototype)),je=ie.next();!je.done;he={H:he.H},je=ie.next())he.H=je.value,"on"===he.H.substring(0,2)&&Object.defineProperty(ge,he.H,{set:function(a){return function(b){var c=x(this),d=a.H.substring(2);c.Z[a.H]&&this.removeEventListener(d,c.Z[a.H]);this.addEventListener(d,b,{});c.Z[a.H]=b}}(he),get:function(a){return function(){var b=
z(this);return b&&b.Z[a.H]}}(he),configurable:!0});var ke={addEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.na=this;this.host.addEventListener(a,b,c)},removeEventListener:function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.na=this;this.host.removeEventListener(a,b,c)},getElementById:function(a){return jd(this,function(b){return b.id==a},function(a){return!!a})[0]||null}};
function L(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f)}};if(A.qa){var ShadyDOM={inUse:A.qa,patch:function(a){Ic(a);Hc(a);return a},isShadyRoot:B,enqueue:Gb,flush:Hb,settings:A,filterMutations:Mb,observeChildren:Kb,unobserveChildren:Lb,nativeMethods:C,nativeTree:J,deferConnectionCallbacks:A.deferConnectionCallbacks,handlesDynamicScoping:!0};window.ShadyDOM=ShadyDOM;Id();var le=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;L(Gc.prototype,ke);L(window.Node.prototype,$d);L(window.Window.prototype,Zd);L(window.Text.prototype,ae);
L(window.DocumentFragment.prototype,be);L(window.Element.prototype,de);L(window.Document.prototype,ee);window.HTMLSlotElement&&L(window.HTMLSlotElement.prototype,ce);L(le.prototype,ge);A.K&&(Ec(window.Node.prototype),Ec(window.Text.prototype),Ec(window.DocumentFragment.prototype),Ec(window.Element.prototype),Ec(le.prototype),Ec(window.Document.prototype),window.HTMLSlotElement&&Ec(window.HTMLSlotElement.prototype));Fc();window.ShadowRoot=Gc};var me=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function ne(a){var b=me.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function M(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function oe(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function pe(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)pe(d,b,c);d=oe(a,e);continue}else if("template"===f){d=oe(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)pe(e,b,c)}d=d.firstChild?d.firstChild:oe(a,d)}}function N(a,b,c){a[b]=c};function qe(){this.a=new Map;this.m=new Map;this.f=[];this.c=!1}function re(a,b,c){a.a.set(b,c);a.m.set(c.constructor,c)}function se(a,b){a.c=!0;a.f.push(b)}function te(a,b){a.c&&pe(b,function(b){return a.b(b)})}qe.prototype.b=function(a){if(this.c&&!a.__CE_patched){a.__CE_patched=!0;for(var b=0;b<this.f.length;b++)this.f[b](a)}};function O(a,b){var c=[];pe(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):ue(a,d)}}
function P(a,b){var c=[];pe(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function Q(a,b,c){c=void 0===c?{}:c;var d=c.fb||new Set,e=c.ia||function(b){return ue(a,b)},f=[];pe(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);Q(a,c,{fb:f,ia:e})}})}else f.push(b)},d);
if(a.c)for(b=0;b<f.length;b++)a.b(f[b]);for(b=0;b<f.length;b++)e(f[b])}
function ue(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructor;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(g){throw b.__CE_state=2,g;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}M(b)&&a.connectedCallback(b)}}}qe.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};qe.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
qe.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function ve(a){var b=document;this.b=a;this.a=b;this.P=void 0;Q(this.b,this.a);"loading"===this.a.readyState&&(this.P=new MutationObserver(this.c.bind(this)),this.P.observe(this.a,{childList:!0,subtree:!0}))}function we(a){a.P&&a.P.disconnect()}ve.prototype.c=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||we(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)Q(this.b,c[d])};function xe(){var a=this;this.a=this.A=void 0;this.b=new Promise(function(b){a.a=b;a.A&&b(a.A)})}xe.prototype.resolve=function(a){if(this.A)throw Error("Already resolved.");this.A=a;this.a&&this.a(a)};function S(a){this.c=!1;this.a=a;this.G=new Map;this.f=function(a){return a()};this.b=!1;this.m=[];this.fa=new ve(a)}r=S.prototype;
r.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!ne(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.a.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var g=d("disconnectedCallback");var h=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[]}catch(n){return}finally{this.c=!1}b={localName:a,constructor:b,connectedCallback:f,disconnectedCallback:g,adoptedCallback:h,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};re(this.a,a,b);this.m.push(b);
this.b||(this.b=!0,this.f(function(){return ye(c)}))};r.ia=function(a){Q(this.a,a)};function ye(a){if(!1!==a.b){a.b=!1;for(var b=a.m,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);Q(a.a,document,{ia:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.a.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)ue(a.a,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var g=0;g<f.length;g++)ue(a.a,f[g]);(e=a.G.get(e))&&e.resolve(void 0)}}}
r.get=function(a){if(a=this.a.a.get(a))return a.constructor};r.Ca=function(a){if(!ne(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.G.get(a);if(b)return b.b;b=new xe;this.G.set(a,b);this.a.a.get(a)&&!this.m.some(function(b){return b.localName===a})&&b.resolve(void 0);return b.b};r.Ya=function(a){we(this.fa);var b=this.f;this.f=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=S;S.prototype.define=S.prototype.define;
S.prototype.upgrade=S.prototype.ia;S.prototype.get=S.prototype.get;S.prototype.whenDefined=S.prototype.Ca;S.prototype.polyfillWrapFlushCallback=S.prototype.Ya;var ze=window.Document.prototype.createElement,Ae=window.Document.prototype.createElementNS,Be=window.Document.prototype.importNode,Ce=window.Document.prototype.prepend,De=window.Document.prototype.append,Ee=window.DocumentFragment.prototype.prepend,Fe=window.DocumentFragment.prototype.append,Ge=window.Node.prototype.cloneNode,He=window.Node.prototype.appendChild,Ie=window.Node.prototype.insertBefore,Je=window.Node.prototype.removeChild,Ke=window.Node.prototype.replaceChild,Le=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Me=window.Element.prototype.attachShadow,Ne=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Oe=window.Element.prototype.getAttribute,Pe=window.Element.prototype.setAttribute,Qe=window.Element.prototype.removeAttribute,Re=window.Element.prototype.getAttributeNS,Se=window.Element.prototype.setAttributeNS,Te=window.Element.prototype.removeAttributeNS,Ue=window.Element.prototype.insertAdjacentElement,Ve=window.Element.prototype.insertAdjacentHTML,We=window.Element.prototype.prepend,
Xe=window.Element.prototype.append,Ye=window.Element.prototype.before,Ze=window.Element.prototype.after,$e=window.Element.prototype.replaceWith,af=window.Element.prototype.remove,bf=window.HTMLElement,cf=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),df=window.HTMLElement.prototype.insertAdjacentElement,ef=window.HTMLElement.prototype.insertAdjacentHTML;var ff=new function(){};function gf(){var a=hf;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.m.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=ze.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,a.b(e),e;d=e.length-1;var f=e[d];if(f===ff)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=ff;Object.setPrototypeOf(f,b.prototype);a.b(f);return f}b.prototype=bf.prototype;Object.defineProperty(b.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:b});return b}()};function jf(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var n=d[l];n instanceof Element&&M(n)&&f.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)e.push(n);else e.push(n)}b.apply(this,d);for(d=0;d<f.length;d++)P(a,f[d]);if(M(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&O(a,f)}}void 0!==c.ha&&(b.prepend=d(c.ha));void 0!==c.append&&(b.append=d(c.append))};function kf(){var a=hf;N(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructor}b=ze.call(this,b);a.b(b);return b});N(Document.prototype,"importNode",function(b,c){b=Be.call(this,b,c);this.__CE_hasRegistry?Q(a,b):te(a,b);return b});N(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructor}b=Ae.call(this,b,c);a.b(b);return b});
jf(a,Document.prototype,{ha:Ce,append:De})};function lf(){function a(a,d){Object.defineProperty(a,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,a);else{var c=void 0;if(this.firstChild){var e=this.childNodes,h=e.length;if(0<h&&M(this)){c=Array(h);for(var k=0;k<h;k++)c[k]=e[k]}}d.set.call(this,a);if(c)for(a=0;a<c.length;a++)P(b,c[a])}}})}var b=hf;N(Node.prototype,"insertBefore",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);
a=Ie.call(this,a,d);if(M(this))for(d=0;d<c.length;d++)O(b,c[d]);return a}c=M(a);d=Ie.call(this,a,d);c&&P(b,a);M(this)&&O(b,a);return d});N(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=He.call(this,a);if(M(this))for(var e=0;e<c.length;e++)O(b,c[e]);return a}c=M(a);e=He.call(this,a);c&&P(b,a);M(this)&&O(b,a);return e});N(Node.prototype,"cloneNode",function(a){a=Ge.call(this,a);this.ownerDocument.__CE_hasRegistry?Q(b,a):
te(b,a);return a});N(Node.prototype,"removeChild",function(a){var c=M(a),e=Je.call(this,a);c&&P(b,a);return e});N(Node.prototype,"replaceChild",function(a,d){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=Ke.call(this,a,d);if(M(this))for(P(b,d),d=0;d<c.length;d++)O(b,c[d]);return a}c=M(a);var f=Ke.call(this,a,d),g=M(this);g&&P(b,d);c&&P(b,a);g&&O(b,a);return f});Le&&Le.get?a(Node.prototype,Le):se(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)Je.call(this,this.firstChild);He.call(this,document.createTextNode(a))}})})};function mf(a){function b(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e]=arguments[e];e=[];for(var h=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&M(l)&&h.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l)}b.apply(this,d);for(d=0;d<h.length;d++)P(a,h[d]);if(M(this))for(d=0;d<e.length;d++)h=e[d],h instanceof Element&&O(a,h)}}var c=Element.prototype;void 0!==Ye&&(c.before=b(Ye));void 0!==Ye&&(c.after=b(Ze));void 0!==$e&&
N(c,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var g=[],h=0;h<c.length;h++){var k=c[h];k instanceof Element&&M(k)&&g.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k)}h=M(this);$e.apply(this,c);for(c=0;c<g.length;c++)P(a,g[c]);if(h)for(P(a,this),c=0;c<d.length;c++)g=d[c],g instanceof Element&&O(a,g)});void 0!==af&&N(c,"remove",function(){var b=M(this);af.call(this);b&&P(a,this)})};function nf(){function a(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var c=this,e=void 0;M(this)&&(e=[],pe(this,function(a){a!==c&&e.push(a)}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var g=e[f];1===g.__CE_state&&d.disconnectedCallback(g)}this.ownerDocument.__CE_hasRegistry?Q(d,this):te(d,this);return a}})}function b(a,b){N(a,"insertAdjacentElement",function(a,c){var e=M(c);a=b.call(this,a,c);e&&P(d,c);M(a)&&O(d,c);return a})}
function c(a,b){function c(a,b){for(var c=[];a!==b;a=a.nextSibling)c.push(a);for(b=0;b<c.length;b++)Q(d,c[b])}N(a,"insertAdjacentHTML",function(a,d){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,d);c(e||this.parentNode.firstChild,this)}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,d),c(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,d),c(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,d),c(this.nextSibling,
e);else throw new SyntaxError("The value provided ("+String(a)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");})}var d=hf;Me&&N(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=Me.call(this,a)});Ne&&Ne.get?a(Element.prototype,Ne):cf&&cf.get?a(HTMLElement.prototype,cf):se(d,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return Ge.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=Ae.call(document,
this.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)Je.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)He.call(c,a.childNodes[0])}})});N(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return Pe.call(this,a,b);var c=Oe.call(this,a);Pe.call(this,a,b);b=Oe.call(this,a);d.attributeChangedCallback(this,a,c,b,null)});N(Element.prototype,"setAttributeNS",function(a,b,c){if(1!==this.__CE_state)return Se.call(this,a,b,c);var e=Re.call(this,a,
b);Se.call(this,a,b,c);c=Re.call(this,a,b);d.attributeChangedCallback(this,b,e,c,a)});N(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return Qe.call(this,a);var b=Oe.call(this,a);Qe.call(this,a);null!==b&&d.attributeChangedCallback(this,a,b,null,null)});N(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return Te.call(this,a,b);var c=Re.call(this,a,b);Te.call(this,a,b);var e=Re.call(this,a,b);c!==e&&d.attributeChangedCallback(this,b,c,e,a)});df?b(HTMLElement.prototype,
df):Ue?b(Element.prototype,Ue):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");ef?c(HTMLElement.prototype,ef):Ve?c(Element.prototype,Ve):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");jf(d,Element.prototype,{ha:We,append:Xe});mf(d)};var of=window.customElements;if(!of||of.forcePolyfill||"function"!=typeof of.define||"function"!=typeof of.get){var hf=new qe;gf();kf();jf(hf,DocumentFragment.prototype,{ha:Ee,append:Fe});lf();nf();document.__CE_hasRegistry=!0;var customElements=new S(hf);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};function pf(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function qf(a){a=a.replace(rf,"").replace(sf,"");var b=vf,c=a,d=new pf;d.start=0;d.end=c.length;for(var e=d,f=0,g=c.length;f<g;f++)if("{"===c[f]){e.rules||(e.rules=[]);var h=e,k=h.rules[h.rules.length-1]||null;e=new pf;e.start=f+1;e.parent=h;e.previous=k;h.rules.push(e)}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
function vf(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=wf(c),c=c.replace(xf," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=yf:c.match(zf)&&(a.type=Af,a.keyframesName=a.selector.split(xf).pop()):a.type=0===c.indexOf("--")?Bf:Cf);if(c=a.rules)for(var d=0,e=c.length,f=void 0;d<e&&(f=c[d]);d++)vf(f,
b);return a}function wf(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}
function Df(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var g=e.length,h=void 0;f<g&&(h=e[f]);f++)d=Df(h,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(Ef,"").replace(Ff,""),b=b.replace(Gf,"").replace(Hf,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var Cf=1,Af=7,yf=4,Bf=1E3,rf=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,sf=/@import[^;]*;/gim,Ef=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Ff=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Gf=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Hf=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,zf=/^@[^\s]*keyframes/,xf=/\s+/g;var T=!(window.ShadyDOM&&window.ShadyDOM.inUse),If;function Jf(a){If=a&&a.shimcssproperties?!1:T||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?If=window.ShadyCSS.nativeCss:window.ShadyCSS?(Jf(window.ShadyCSS),window.ShadyCSS=void 0):Jf(window.WebComponents&&window.WebComponents.flags);var V=If;var Kf=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Lf=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Mf=/(--[\w-]+)\s*([:,;)]|$)/gi,Nf=/(animation\s*:)|(animation-name\s*:)/,Of=/@media\s(.*)/,Pf=/\{[^}]*\}/g;var Qf=new Set;function Rf(a,b){if(!a)return"";"string"===typeof a&&(a=qf(a));b&&Sf(a,b);return Df(a,V)}function Tf(a){!a.__cssRules&&a.textContent&&(a.__cssRules=qf(a.textContent));return a.__cssRules||null}function Uf(a){return!!a.parent&&a.parent.type===Af}function Sf(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===yf){var g=a.selector.match(Of);g&&(window.matchMedia(g[1]).matches||(e=!0))}f===Cf?b(a):c&&f===Af?c(a):f===Bf&&(e=!0);if((a=a.rules)&&!e)for(e=0,f=a.length,g=void 0;e<f&&(g=a[e]);e++)Sf(g,b,c,d)}}
function Vf(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Wf(e,c,d);return e}var Xf=null;function Yf(a){a=document.createComment(" Shady DOM styles for "+a+" ");var b=document.head;b.insertBefore(a,(Xf?Xf.nextSibling:null)||b.firstChild);return Xf=a}function Wf(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);Xf?a.compareDocumentPosition(Xf)===Node.DOCUMENT_POSITION_PRECEDING&&(Xf=a):Xf=a}
function Zf(a,b){for(var c=0,d=a.length;b<d;b++)if("("===a[b])c++;else if(")"===a[b]&&0===--c)return b;return-1}function $f(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");var d=Zf(a,c+3),e=a.substring(c+4,d);c=a.substring(0,c);a=$f(a.substring(d+1),b);d=e.indexOf(",");return-1===d?b(c,e.trim(),"",a):b(c,e.substring(0,d).trim(),e.substring(d+1).trim(),a)}function ag(a,b){T?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
function bg(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,X:c}}function cg(a){for(var b=[],c="",d=0;0<=d&&d<a.length;d++)if("("===a[d]){var e=Zf(a,d);c+=a.slice(d,e+1);d=e}else","===a[d]?(b.push(c),c=""):c+=a[d];c&&b.push(c);return b}
function dg(a){if(void 0===a.ja){var b=a.getAttribute("css-build");if(b)a.ja=b;else{a:{b="template"===a.localName?a.content.firstChild:a.firstChild;if(b instanceof Comment&&(b=b.textContent.trim().split(":"),"css-build"===b[0])){b=b[1];break a}b=""}if(""!==b){var c="template"===a.localName?a.content.firstChild:a.firstChild;c.parentNode.removeChild(c)}a.ja=b}}return a.ja||""};function eg(){}function fg(a,b){gg(W,a,function(a){hg(a,b||"")})}function gg(a,b,c){b.nodeType===Node.ELEMENT_NODE&&c(b);if(b="template"===b.localName?(b.content||b.kb||b).childNodes:b.children||b.childNodes)for(var d=0;d<b.length;d++)gg(a,b[d],c)}
function hg(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute(ig);c?d&&(b=d.replace("style-scope","").replace(b,""),ag(a,b)):ag(a,(d?d+" ":"")+"style-scope "+b)}}function jg(a,b,c){gg(W,a,function(a){hg(a,b,!0);hg(a,c)})}function kg(a,b){gg(W,a,function(a){hg(a,b||"",!0)})}
function lg(a,b,c,d){var e=W;T||"shady"===(void 0===d?"":d)?b=Rf(b,c):(a=bg(a),b=mg(e,b,a.is,a.X,c)+"\n\n");return b.trim()}function mg(a,b,c,d,e){var f=ng(c,d);c=c?og+c:"";return Rf(b,function(b){b.c||(b.selector=b.F=pg(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f)})}function ng(a,b){return b?"[is="+a+"]":a}function pg(a,b,c,d,e){var f=cg(b.selector);if(!Uf(b)){b=0;for(var g=f.length,h=void 0;b<g&&(h=f[b]);b++)f[b]=c.call(a,h,d,e)}return f.filter(function(a){return!!a}).join(qg)}
function rg(a){return a.replace(sg,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}function tg(a){for(var b=[],c;c=a.match(ug);){var d=c.index,e=Zf(a,d);if(-1===e)throw Error(c.input+" selector missing ')'");c=a.slice(d,e+1);a=a.replace(c,"\ue000");b.push(c)}return{sa:a,matches:b}}function vg(a,b){var c=a.split("\ue000");return b.reduce(function(a,b,f){return a+b+c[f+1]},c[0])}
eg.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=sg.test(a);e&&(a=a.replace(sg,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"}),a=rg(a));var f=ug.test(a);if(f){var g=tg(a);a=g.sa;g=g.matches}a=a.replace(wg,xg+" $1");a=a.replace(yg,function(a,e,f){d||(a=zg(f,e,b,c),d=d||a.stop,e=a.Oa,f=a.value);return e+f});f&&(a=vg(a,g));e&&(a=rg(a));return a};
function zg(a,b,c,d){var e=a.indexOf(Ag);0<=a.indexOf(xg)?a=Bg(a,d):0!==e&&(a=c?Cg(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(Dg,function(a,b){return" > "+b}))}a=a.replace(Eg,function(a,b,c){return'[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]'});return{value:a,Oa:b,stop:f}}function Cg(a,b){a=a.split(Fg);a[0]+=b;return a.join(Fg)}
function Bg(a,b){var c=a.match(Gg);return(c=c&&c[2].trim()||"")?c[0].match(Hg)?a.replace(Gg,function(a,c,f){return b+f}):c.split(Hg)[0]===b?c:Ig:a.replace(xg,b)}function Jg(a){a.selector===Kg&&(a.selector="html")}eg.prototype.c=function(a){return a.match(xg)?"":a.match(Ag)?this.b(a,Lg):Cg(a.trim(),Lg)};fa.Object.defineProperties(eg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var sg=/:(nth[-\w]+)\(([^)]+)\)/,Lg=":not(.style-scope)",qg=",",yg=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,Hg=/[[.:#*]/,xg=":host",Kg=":root",Ag="::slotted",wg=new RegExp("^("+Ag+")"),Gg=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Dg=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,Eg=/(.*):dir\((?:(ltr|rtl))\)/,og=".",Fg=":",ig="class",Ig="should_not_match",ug=/:(?:matches|any|-(?:webkit|moz)-any)/,W=new eg;function Mg(a,b,c,d,e){this.M=a||null;this.b=b||null;this.c=c||[];this.T=null;this.da=e||"";this.X=d||"";this.a=this.I=this.O=null}function X(a){return a?a.__styleInfo:null}function Ng(a,b){return a.__styleInfo=b}Mg.prototype.f=function(){return this.M};Mg.prototype._getStyleRules=Mg.prototype.f;function Og(a){var b=this.matches||this.matchesSelector||this.mozMatchesSelector||this.msMatchesSelector||this.oMatchesSelector||this.webkitMatchesSelector;return b&&b.call(this,a)}var Pg=navigator.userAgent.match("Trident");function Qg(){}function Rg(a){var b={},c=[],d=0;Sf(a,function(a){Sg(a);a.index=d++;a=a.B.cssText;for(var c;c=Mf.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0)}},function(a){c.push(a)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function Sg(a){if(!a.B){var b={},c={};Tg(a,c)&&(b.L=c,a.rules=null);b.cssText=a.parsedCssText.replace(Pf,"").replace(Kf,"");a.B=b}}function Tg(a,b){var c=a.B;if(c){if(c.L)return Object.assign(b,c.L),!0}else{c=a.parsedCssText;for(var d;a=Kf.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function Ug(a,b,c){b&&(b=0<=b.indexOf(";")?Vg(a,b,c):$f(b,function(b,e,f,g){if(!e)return b+g;(e=Ug(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Ug(a,c[f]||f,c)||f;return b+(e||"")+g}));return b&&b.trim()||""}
function Vg(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Lf.lastIndex=0;if(f=Lf.exec(e))e=Ug(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var g=e.substring(f);g=g.trim();g=Ug(a,g,c)||g;e=e.substring(0,f)+g}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function Wg(a,b){var c={},d=[];Sf(a,function(a){a.B||Sg(a);var e=a.F||a.parsedSelector;b&&a.B.L&&e&&Og.call(b,e)&&(Tg(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32)},null,!0);return{L:c,key:d}}
function Xg(a,b,c,d){b.B||Sg(b);if(b.B.L){var e=bg(a);a=e.is;e=e.X;e=a?ng(a,e):"html";var f=b.parsedSelector,g=":host > *"===f||"html"===f,h=0===f.indexOf(":host")&&!g;"shady"===c&&(g=f===e+" > *."+e||-1!==f.indexOf("html"),h=!g&&0===f.indexOf(e));if(g||h)c=e,h&&(b.F||(b.F=pg(W,b,W.b,a?og+a:"",e)),c=b.F||e),d({sa:c,Va:h,vb:g})}}function Yg(a,b,c){var d={},e={};Sf(b,function(b){Xg(a,b,c,function(c){Og.call(a.lb||a,c.sa)&&(c.Va?Tg(b,d):Tg(b,e))})},null,!0);return{Za:e,Ta:d}}
function Zg(a,b,c,d){var e=bg(b),f=ng(e.is,e.X),g=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])"),h=X(b);e=h.M;h=h.da;var k=$g(e,d);return lg(b,e,function(b){var e="";b.B||Sg(b);b.B.cssText&&(e=Vg(a,b.B.cssText,c));b.cssText=e;if(!T&&!Uf(b)&&b.cssText){var h=e=b.cssText;null==b.xa&&(b.xa=Nf.test(e));if(b.xa)if(null==b.ga){b.ga=[];for(var l in k)h=k[l],h=h(e),e!==h&&(e=h,b.ga.push(l))}else{for(l=0;l<b.ga.length;++l)h=k[b.ga[l]],e=h(e);h=e}b.cssText=h;b.F=b.F||b.selector;
e="."+d;l=cg(b.F);h=0;for(var u=l.length,w=void 0;h<u&&(w=l[h]);h++)l[h]=w.match(g)?w.replace(f,e):e+" "+w;b.selector=l.join(",")}},h)}function $g(a,b){a=a.b;var c={};if(!T&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,g=b;f.f=new RegExp("\\b"+f.keyframesName+"(?!\\B|-)","g");f.a=f.keyframesName+"-"+g;f.F=f.F||f.selector;f.selector=f.F.replace(f.keyframesName,f.a);c[e.keyframesName]=ah(e)}return c}function ah(a){return function(b){return b.replace(a.f,a.a)}}
function bh(a,b){var c=ch,d=Tf(a);a.textContent=Rf(d,function(a){var d=a.cssText=a.parsedCssText;a.B&&a.B.cssText&&(d=d.replace(Ef,"").replace(Ff,""),a.cssText=Vg(c,d,b))})}fa.Object.defineProperties(Qg.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var ch=new Qg;var dh={},eh=window.customElements;if(eh&&!T){var fh=eh.define;eh.define=function(a,b,c){dh[a]||(dh[a]=Yf(a));fh.call(eh,a,b,c)}};function gh(){this.cache={}}gh.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({L:b,styleElement:c,I:d});100<e.length&&e.shift();this.cache[a]=e};gh.prototype.fetch=function(a,b,c){if(a=this.cache[a])for(var d=a.length-1;0<=d;d--){var e=a[d],f;a:{for(f=0;f<c.length;f++){var g=c[f];if(e.L[g]!==b[g]){f=!1;break a}}f=!0}if(f)return e}};function hh(){}function ih(a){var b=[];a.classList?b=Array.from(a.classList):a instanceof window.SVGElement&&a.hasAttribute("class")&&(b=a.getAttribute("class").split(/\s+/));a=b;b=a.indexOf(W.a);return-1<b?a[b+1]:""}function jh(a){var b=a.getRootNode();return b===a||b===a.ownerDocument?"":(a=b.host)?bg(a).is:""}
function kh(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode(),g=ih(e);if(g&&f===e.ownerDocument&&("style"!==e.localName&&"template"!==e.localName||""===dg(e)))kg(e,g);else if(f instanceof ShadowRoot)for(f=jh(e),f!==g&&jg(e,g,f),e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+W.a+")"),g=0;g<e.length;g++){f=e[g];
var h=jh(f);h&&hg(f,h)}}}}}
if(!(T||window.ShadyDOM&&window.ShadyDOM.handlesDynamicScoping)){var lh=new MutationObserver(kh),mh=function(a){lh.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)mh(document);else{var nh=function(){mh(document.body)};window.HTMLImports?window.HTMLImports.whenReady(nh):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){nh();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",
a)}else nh()})}hh=function(){kh(lh.takeRecords())}}var oh=hh;var ph={};var qh=Promise.resolve();function rh(a){if(a=ph[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function sh(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function th(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a.b||(a.b=!0,qh.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a.b=!1}))};var uh=new gh;function Y(){this.G={};this.c=document.documentElement;var a=new pf;a.rules=[];this.f=Ng(this.c,new Mg(a));this.m=!1;this.b=this.a=null}r=Y.prototype;r.flush=function(){oh()};r.Ra=function(a){return Tf(a)};r.cb=function(a){return Rf(a)};r.prepareTemplate=function(a,b,c){this.prepareTemplateDom(a,b);this.prepareTemplateStyles(a,b,c)};
r.prepareTemplateStyles=function(a,b,c){if(!a.m){T||dh[b]||(dh[b]=Yf(b));a.m=!0;a.name=b;a.extends=c;ph[b]=a;var d=dg(a);var e=[];for(var f=a.content.querySelectorAll("style"),g=0;g<f.length;g++){var h=f[g];if(h.hasAttribute("shady-unscoped")){if(!T){var k=h.textContent;Qf.has(k)||(Qf.add(k),k=h.cloneNode(!0),document.head.appendChild(k));h.parentNode.removeChild(h)}}else e.push(h.textContent),h.parentNode.removeChild(h)}e=e.join("").trim();c={is:b,extends:c};vh(this);if(f=""===dg(a))f=Lf.test(e)||
Kf.test(e),Lf.lastIndex=0,Kf.lastIndex=0;e=qf(e);f&&V&&this.a&&this.a.transformRules(e,b);a._styleAst=e;e=[];V||(e=Rg(a._styleAst));if(!e.length||V)f=T?a.content:null,b=dh[b]||null,d=lg(c,a._styleAst,null,d),d=d.length?Vf(d,c.is,f,b):void 0,a.a=d;a.f=e}};r.prepareTemplateDom=function(a,b){var c=dg(a);T||"shady"===c||a.c||(a.c=!0,fg(a.content,b))};
function wh(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.Aa(b)},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.m)&&a.flushCustomStyles()})})}function vh(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=rh);wh(a)}
r.flushCustomStyles=function(){vh(this);if(this.b){var a=this.b.processStyles();if(this.b.enqueued){if(V)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&V&&this.a){var d=Tf(c);vh(this);this.a.transformRules(d);c.textContent=Rf(d)}}else for(xh(this,this.c,this.f),b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&bh(c,this.f.O);this.b.enqueued=!1;this.m&&!V&&this.styleDocument()}}};
r.styleElement=function(a,b){var c=X(a);if(!c){var d=bg(a);c=d.is;d=d.X;var e=dh[c]||null;c=ph[c];if(c){var f=c._styleAst;var g=c.f;var h=dg(c)}f=new Mg(f,e,g,d,h);c&&Ng(a,f);c=f}a!==this.c&&(this.m=!0);b&&(c.T=c.T||{},Object.assign(c.T,b));if(V){b=c;f=bg(a).is;if(b.T){g=b.T;for(var k in g)null===k?a.style.removeProperty(k):a.style.setProperty(k,g[k])}if(!(!(k=ph[f])&&a!==this.c||k&&""!==dg(k))&&k&&k.a&&!sh(k)){if(sh(k)||k._applyShimValidatingVersion!==k._applyShimNextVersion)vh(this),this.a&&this.a.transformRules(k._styleAst,
f),k.a.textContent=lg(a,b.M),th(k);T&&(f=a.shadowRoot)&&(f=f.querySelector("style"))&&(f.textContent=lg(a,b.M));b.M=k._styleAst}}else if(k=c,this.flush(),xh(this,a,k),k.c&&k.c.length){b=bg(a).is;c=(f=uh.fetch(b,k.O,k.c))?f.styleElement:null;g=k.I;(h=f&&f.I)||(h=this.G[b]=(this.G[b]||0)+1,h=b+"-"+h);k.I=h;h=k.I;d=ch;d=c?c.textContent||"":Zg(d,a,k.O,h);e=X(a);var l=e.a;l&&!T&&l!==c&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));T?e.a?(e.a.textContent=d,c=e.a):d&&(c=Vf(d,
h,a.shadowRoot,e.b)):c?c.parentNode||(Pg&&-1<d.indexOf("@media")&&(c.textContent=d),Wf(c,null,e.b)):d&&(c=Vf(d,h,null,e.b));c&&(c._useCount=c._useCount||0,e.a!=c&&c._useCount++,e.a=c);h=c;T||(c=k.I,e=d=a.getAttribute("class")||"",g&&(e=d.replace(new RegExp("\\s*x-scope\\s*"+g+"\\s*","g")," ")),e+=(e?" ":"")+"x-scope "+c,d!==e&&ag(a,e));f||uh.store(b,k.O,h,k.I)}};function yh(a,b){return(b=b.getRootNode().host)?X(b)?b:yh(a,b):a.c}
function xh(a,b,c){a=yh(a,b);var d=X(a);a=Object.create(d.O||null);var e=Yg(b,c.M,c.da);b=Wg(d.M,b).L;Object.assign(a,e.Ta,b,e.Za);b=c.T;for(var f in b)if((e=b[f])||0===e)a[f]=e;f=ch;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Ug(f,a[d],a);c.O=a}r.styleDocument=function(a){this.styleSubtree(this.c,a)};
r.styleSubtree=function(a,b){var c=a.shadowRoot;(c||a===this.c)&&this.styleElement(a,b);if(b=c&&(c.children||c.childNodes))for(a=0;a<b.length;a++)this.styleSubtree(b[a]);else if(a=a.children||a.childNodes)for(b=0;b<a.length;b++)this.styleSubtree(a[b])};
r.Aa=function(a){var b=this,c=Tf(a),d=dg(a);d!==this.f.da&&(this.f.da=d);Sf(c,function(a){if(T)Jg(a);else{var c=W;a.selector=a.parsedSelector;Jg(a);a.selector=a.F=pg(c,a,c.c,void 0,void 0)}V&&""===d&&(vh(b),b.a&&b.a.transformRule(a))});V?a.textContent=Rf(c):this.f.M.rules.push(c)};r.getComputedStyleValue=function(a,b){var c;V||(c=(X(a)||X(yh(this,a))).O[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};
r.bb=function(a,b){var c=a.getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===W.a){c=d[e+1];break}}}c&&b.push(W.a,c);V||(c=X(a))&&c.I&&b.push(ch.a,c.I);ag(a,b.join(" "))};r.La=function(a){return X(a)};r.ab=function(a,b){hg(a,b)};r.eb=function(a,b){hg(a,b,!0)};r.$a=function(a){return jh(a)};r.Pa=function(a){return ih(a)};Y.prototype.flush=Y.prototype.flush;Y.prototype.prepareTemplate=Y.prototype.prepareTemplate;
Y.prototype.styleElement=Y.prototype.styleElement;Y.prototype.styleDocument=Y.prototype.styleDocument;Y.prototype.styleSubtree=Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue=Y.prototype.getComputedStyleValue;Y.prototype.setElementClass=Y.prototype.bb;Y.prototype._styleInfoForNode=Y.prototype.La;Y.prototype.transformCustomStyleForDocument=Y.prototype.Aa;Y.prototype.getStyleAst=Y.prototype.Ra;Y.prototype.styleAstToString=Y.prototype.cb;Y.prototype.flushCustomStyles=Y.prototype.flushCustomStyles;
Y.prototype.scopeNode=Y.prototype.ab;Y.prototype.unscopeNode=Y.prototype.eb;Y.prototype.scopeForNode=Y.prototype.$a;Y.prototype.currentScopeForNode=Y.prototype.Pa;Object.defineProperties(Y.prototype,{nativeShadow:{get:function(){return T}},nativeCss:{get:function(){return V}}});var Z=new Y,zh,Ah;window.ShadyCSS&&(zh=window.ShadyCSS.ApplyShim,Ah=window.ShadyCSS.CustomStyleInterface);
window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplate(a,b,c)},prepareTemplateDom:function(a,b){Z.prepareTemplateDom(a,b)},prepareTemplateStyles:function(a,b,c){Z.flushCustomStyles();Z.prepareTemplateStyles(a,b,c)},styleSubtree:function(a,b){Z.flushCustomStyles();Z.styleSubtree(a,b)},styleElement:function(a){Z.flushCustomStyles();Z.styleElement(a)},styleDocument:function(a){Z.flushCustomStyles();Z.styleDocument(a)},flushCustomStyles:function(){Z.flushCustomStyles()},
getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:V,nativeShadow:T};zh&&(window.ShadyCSS.ApplyShim=zh);Ah&&(window.ShadyCSS.CustomStyleInterface=Ah);(function(a){function b(a){""==a&&(f.call(this),this.i=!0);return a.toLowerCase()}function c(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,63,96].indexOf(b)?a:encodeURIComponent(a)}function d(a){var b=a.charCodeAt(0);return 32<b&&127>b&&-1==[34,35,60,62,96].indexOf(b)?a:encodeURIComponent(a)}function e(a,e,g){function h(a){ba.push(a)}var k=e||"scheme start",w=0,q="",u=!1,R=!1,ba=[];a:for(;(void 0!=a[w-1]||0==w)&&!this.i;){var m=a[w];switch(k){case "scheme start":if(m&&p.test(m))q+=
m.toLowerCase(),k="scheme";else if(e){h("Invalid scheme.");break a}else{q="";k="no scheme";continue}break;case "scheme":if(m&&G.test(m))q+=m.toLowerCase();else if(":"==m){this.h=q;q="";if(e)break a;void 0!==l[this.h]&&(this.D=!0);k="file"==this.h?"relative":this.D&&g&&g.h==this.h?"relative or authority":this.D?"authority first slash":"scheme data"}else if(e){void 0!=m&&h("Code point not allowed in scheme: "+m);break a}else{q="";w=0;k="no scheme";continue}break;case "scheme data":"?"==m?(this.u="?",
k="query"):"#"==m?(this.C="#",k="fragment"):void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.pa+=c(m));break;case "no scheme":if(g&&void 0!==l[g.h]){k="relative";continue}else h("Missing scheme."),f.call(this),this.i=!0;break;case "relative or authority":if("/"==m&&"/"==a[w+1])k="authority ignore slashes";else{h("Expected /, got: "+m);k="relative";continue}break;case "relative":this.D=!0;"file"!=this.h&&(this.h=g.h);if(void 0==m){this.j=g.j;this.s=g.s;this.l=g.l.slice();this.u=g.u;this.v=g.v;this.g=g.g;
break a}else if("/"==m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="relative slash";else if("?"==m)this.j=g.j,this.s=g.s,this.l=g.l.slice(),this.u="?",this.v=g.v,this.g=g.g,k="query";else if("#"==m)this.j=g.j,this.s=g.s,this.l=g.l.slice(),this.u=g.u,this.C="#",this.v=g.v,this.g=g.g,k="fragment";else{k=a[w+1];var y=a[w+2];if("file"!=this.h||!p.test(m)||":"!=k&&"|"!=k||void 0!=y&&"/"!=y&&"\\"!=y&&"?"!=y&&"#"!=y)this.j=g.j,this.s=g.s,this.v=g.v,this.g=g.g,this.l=g.l.slice(),this.l.pop();k=
"relative path";continue}break;case "relative slash":if("/"==m||"\\"==m)"\\"==m&&h("\\ is an invalid code point."),k="file"==this.h?"file host":"authority ignore slashes";else{"file"!=this.h&&(this.j=g.j,this.s=g.s,this.v=g.v,this.g=g.g);k="relative path";continue}break;case "authority first slash":if("/"==m)k="authority second slash";else{h("Expected '/', got: "+m);k="authority ignore slashes";continue}break;case "authority second slash":k="authority ignore slashes";if("/"!=m){h("Expected '/', got: "+
m);continue}break;case "authority ignore slashes":if("/"!=m&&"\\"!=m){k="authority";continue}else h("Expected authority, got: "+m);break;case "authority":if("@"==m){u&&(h("@ already seen."),q+="%40");u=!0;for(m=0;m<q.length;m++)y=q[m],"\t"==y||"\n"==y||"\r"==y?h("Invalid whitespace in authority."):":"==y&&null===this.g?this.g="":(y=c(y),null!==this.g?this.g+=y:this.v+=y);q=""}else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){w-=q.length;q="";k="host";continue}else q+=m;break;case "file host":if(void 0==
m||"/"==m||"\\"==m||"?"==m||"#"==m){2!=q.length||!p.test(q[0])||":"!=q[1]&&"|"!=q[1]?(0!=q.length&&(this.j=b.call(this,q),q=""),k="relative path start"):k="relative path";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid whitespace in file host."):q+=m;break;case "host":case "hostname":if(":"!=m||R)if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m){this.j=b.call(this,q);q="";k="relative path start";if(e)break a;continue}else"\t"!=m&&"\n"!=m&&"\r"!=m?("["==m?R=!0:"]"==m&&(R=!1),q+=m):h("Invalid code point in host/hostname: "+
m);else if(this.j=b.call(this,q),q="",k="port","hostname"==e)break a;break;case "port":if(/[0-9]/.test(m))q+=m;else if(void 0==m||"/"==m||"\\"==m||"?"==m||"#"==m||e){""!=q&&(q=parseInt(q,10),q!=l[this.h]&&(this.s=q+""),q="");if(e)break a;k="relative path start";continue}else"\t"==m||"\n"==m||"\r"==m?h("Invalid code point in port: "+m):(f.call(this),this.i=!0);break;case "relative path start":"\\"==m&&h("'\\' not allowed in path.");k="relative path";if("/"!=m&&"\\"!=m)continue;break;case "relative path":if(void 0!=
m&&"/"!=m&&"\\"!=m&&(e||"?"!=m&&"#"!=m))"\t"!=m&&"\n"!=m&&"\r"!=m&&(q+=c(m));else{"\\"==m&&h("\\ not allowed in relative path.");if(y=n[q.toLowerCase()])q=y;".."==q?(this.l.pop(),"/"!=m&&"\\"!=m&&this.l.push("")):"."==q&&"/"!=m&&"\\"!=m?this.l.push(""):"."!=q&&("file"==this.h&&0==this.l.length&&2==q.length&&p.test(q[0])&&"|"==q[1]&&(q=q[0]+":"),this.l.push(q));q="";"?"==m?(this.u="?",k="query"):"#"==m&&(this.C="#",k="fragment")}break;case "query":e||"#"!=m?void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.u+=
d(m)):(this.C="#",k="fragment");break;case "fragment":void 0!=m&&"\t"!=m&&"\n"!=m&&"\r"!=m&&(this.C+=m)}w++}}function f(){this.v=this.pa=this.h="";this.g=null;this.s=this.j="";this.l=[];this.C=this.u="";this.D=this.i=!1}function g(a,b){void 0===b||b instanceof g||(b=new g(String(b)));this.Ma=a;f.call(this);a=a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g,"");e.call(this,a,null,b)}var h=!1;if(!a.rb)try{var k=new URL("b","http://a");k.pathname="c%20d";h="http://a/c%20d"===k.href}catch(w){}if(!h){var l=Object.create(null);
l.ftp=21;l.file=0;l.gopher=70;l.http=80;l.https=443;l.ws=80;l.wss=443;var n=Object.create(null);n["%2e"]=".";n[".%2e"]="..";n["%2e."]="..";n["%2e%2e"]="..";var p=/[a-zA-Z]/,G=/[a-zA-Z0-9\+\-\.]/;g.prototype={toString:function(){return this.href},get href(){if(this.i)return this.Ma;var a="";if(""!=this.v||null!=this.g)a=this.v+(null!=this.g?":"+this.g:"")+"@";return this.protocol+(this.D?"//"+a+this.host:"")+this.pathname+this.u+this.C},set href(a){f.call(this);e.call(this,a)},get protocol(){return this.h+
":"},set protocol(a){this.i||e.call(this,a+":","scheme start")},get host(){return this.i?"":this.s?this.j+":"+this.s:this.j},set host(a){!this.i&&this.D&&e.call(this,a,"host")},get hostname(){return this.j},set hostname(a){!this.i&&this.D&&e.call(this,a,"hostname")},get port(){return this.s},set port(a){!this.i&&this.D&&e.call(this,a,"port")},get pathname(){return this.i?"":this.D?"/"+this.l.join("/"):this.pa},set pathname(a){!this.i&&this.D&&(this.l=[],e.call(this,a,"relative path start"))},get search(){return this.i||
!this.u||"?"==this.u?"":this.u},set search(a){!this.i&&this.D&&(this.u="?","?"==a[0]&&(a=a.slice(1)),e.call(this,a,"query"))},get hash(){return this.i||!this.C||"#"==this.C?"":this.C},set hash(a){this.i||(this.C="#","#"==a[0]&&(a=a.slice(1)),e.call(this,a,"fragment"))},get origin(){var a;if(this.i||!this.h)return"";switch(this.h){case "data":case "file":case "javascript":case "mailto":return"null"}return(a=this.host)?this.h+"://"+a:""}};var u=a.URL;u&&(g.createObjectURL=function(a){return u.createObjectURL.apply(u,
arguments)},g.revokeObjectURL=function(a){u.revokeObjectURL(a)});a.URL=g}})(window);Object.getOwnPropertyDescriptor(Node.prototype,"baseURI")||Object.defineProperty(Node.prototype,"baseURI",{get:function(){var a=(this.ownerDocument||this).querySelector("base[href]");return a&&a.href||window.location.href},configurable:!0,enumerable:!0});var Bh=document.createElement("style");Bh.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var Ch=document.querySelector("head");Ch.insertBefore(Bh,Ch.firstChild);var Dh=window.customElements,Eh=!1,Fh=null;Dh.polyfillWrapFlushCallback&&Dh.polyfillWrapFlushCallback(function(a){Fh=a;Eh&&a()});function Gh(){window.HTMLTemplateElement.bootstrap&&window.HTMLTemplateElement.bootstrap(window.document);Fh&&Fh();Eh=!0;window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}
"complete"!==document.readyState?(window.addEventListener("load",Gh),window.addEventListener("DOMContentLoaded",function(){window.removeEventListener("load",Gh);Gh()})):Gh();}).call(this);



},{}],"test.js":[function(require,module,exports) {
"use strict";

var _index = require("./dist/index.js");

var _tape = require("tape");

require("@webcomponents/webcomponentsjs/webcomponents-bundle.js");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MyCounter =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(MyCounter, _HTMLElement);

  function MyCounter() {
    _classCallCheck(this, MyCounter);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyCounter).apply(this, arguments));
  }

  _createClass(MyCounter, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      var count = 0;

      this.render = function () {
        var view = (0, _index.createElement)("div", null, (0, _index.createElement)("button", {
          onclick: function onclick() {
            count += 1;

            _this.render();
          }
        }, count.toString()));
        (0, _index.render)(_this, view);
      };

      this.render();
    }
  }]);

  return MyCounter;
}(_wrapNativeSuper(HTMLElement));

customElements.define('my-counter', MyCounter);
var testNode;

function setup() {
  testNode = document.createElement('div');
  document.body.appendChild(testNode);
}

function reset() {
  document.body.removeChild(testNode);
  testNode = null;
}

_tape.test.onFailure(function () {
  reset();
});

(0, _tape.test)('increment button', function (t) {
  t.plan(1);
  setup();
  var counterEl = document.createElement('my-counter');
  testNode.appendChild(counterEl);
  var btn = testNode.querySelector('button');
  var startVal = parseInt(btn.innerText, 10);
  btn.click();
  var endVal = parseInt(btn.innerText, 10);
  t.equal(endVal, startVal + 1);
  t.end();
});
},{"./dist/index.js":"dist/index.js","tape":"node_modules/tape/index.js","@webcomponents/webcomponentsjs/webcomponents-bundle.js":"node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40153" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.map