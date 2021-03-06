// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"21c8X":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "062e9a7565ca912a5f7d6b832142d36c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] ???? Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ??? Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
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
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
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
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3L8AI":[function(require,module,exports) {
var _cursor = require("./cursor");
var _item = require("./item");
var _dataJson = require("./data.json");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _dataJsonDefault = _parcelHelpers.interopDefault(_dataJson);
// vue instance
var app = new Vue({
  el: "#app",
  data: {
    data: _dataJsonDefault.default,
    search: "",
    length: 5
  },
  computed: {
    sortArray() {
      return this.data.sort((a, b) => a.Fullname.localeCompare(b.Fullname));
    },
    filteredList() {
      return this.sortArray.filter(post => {
        return post.Fullname.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  mounted() {
    // initialize custom cursor
    const cursor = new _cursor.Cursor(document.querySelector(".cursor"));
    // items/images elems
    [...document.querySelectorAll(".item")].forEach(item => new _item.Item(item));
    // mouse effects on all links
    [...document.querySelectorAll("a, .distort__img")].forEach(link => {
      link.addEventListener("mouseenter", () => cursor.enter());
      link.addEventListener("mouseleave", () => cursor.leave());
    });
    // Scroll Event
    this.$nextTick(function () {
      window.addEventListener("scroll", this.onScroll);
      this.onScroll();
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      var itemList = this.$refs["itemList"];
      if (itemList) {
        var marginTopUsers = itemList.getBoundingClientRect().top;
        var innerHeight = window.innerHeight;
        if (marginTopUsers - innerHeight < -50) {
          this.getItemList();
        }
      }
    },
    getItemList() {},
    reformLink(url) {
      url ? url = new URL(url) : "";
      const imageId = new URLSearchParams(url.search).get("id");
      return `https://drive.google.com/uc?export=view&id=${imageId}`;
    }
  }
});

},{"./cursor":"6m6MU","./item":"2s5BT","./data.json":"53c5a","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6m6MU":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Cursor", function () {
  return Cursor;
});
var _gsap = require('gsap');
var _utils = require('./utils');
// Track the mouse position
let mouse = {
  x: 0,
  y: 0
};
window.addEventListener('mousemove', ev => mouse = _utils.getMousePos(ev));
class Cursor {
  constructor(el) {
    this.DOM = {
      el: el
    };
    this.DOM.el.style.opacity = 0;
    this.bounds = this.DOM.el.getBoundingClientRect();
    this.renderedStyles = {
      tx: {
        previous: 0,
        current: 0,
        amt: 0.15
      },
      ty: {
        previous: 0,
        current: 0,
        amt: 0.15
      },
      scale: {
        previous: 1,
        current: 1,
        amt: 0.15
      },
      opacity: {
        previous: 1,
        current: 1,
        amt: 0.1
      }
    };
    this.onMouseMoveEv = () => {
      this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2;
      this.renderedStyles.ty.previous = this.renderedStyles.ty.previous = mouse.y - this.bounds.height / 2;
      _gsap.gsap.to(this.DOM.el, {
        duration: 0.9,
        ease: 'Power3.easeOut',
        opacity: 1
      });
      requestAnimationFrame(() => this.render());
      window.removeEventListener('mousemove', this.onMouseMoveEv);
    };
    window.addEventListener('mousemove', this.onMouseMoveEv);
  }
  enter() {
    this.renderedStyles['scale'].current = 1.8;
    this.renderedStyles['opacity'].current = 0.8;
  }
  leave() {
    this.renderedStyles['scale'].current = 1;
    this.renderedStyles['opacity'].current = 1;
  }
  render() {
    this.renderedStyles['tx'].current = mouse.x - this.bounds.width / 2;
    this.renderedStyles['ty'].current = mouse.y - this.bounds.height / 2;
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].previous = _utils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
    }
    this.DOM.el.style.transform = `translateX(${this.renderedStyles['tx'].previous}px) translateY(${this.renderedStyles['ty'].previous}px) scale(${this.renderedStyles['scale'].previous})`;
    this.DOM.el.style.opacity = this.renderedStyles['opacity'].previous;
    requestAnimationFrame(() => this.render());
  }
}

},{"gsap":"1iecp","./utils":"3Oysh","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"1iecp":[function(require,module,exports) {
var define;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = global || self, factory(global.window = global.window || ({})));
})(this, function (exports) {
  "use strict";
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }
  /*!
  * GSAP 3.7.1
  * https://greensock.com
  *
  * @license Copyright 2008-2021, GreenSock. All rights reserved.
  * Subject to the terms at https://greensock.com/standard-license or for
  * Club GreenSock members, the agreement issued with that membership.
  * @author: Jack Doyle, jack@greensock.com
  */
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  }, _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
  }, _suppressOverwrites, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
    return typeof value === "string";
  }, _isFunction = function _isFunction(value) {
    return typeof value === "function";
  }, _isNumber = function _isNumber(value) {
    return typeof value === "number";
  }, _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
  }, _isObject = function _isObject(value) {
    return typeof value === "object";
  }, _isNotFalse = function _isNotFalse(value) {
    return value !== false;
  }, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
  }, _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
  }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || (function () {}), _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  }, _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  }, _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
  }, _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
  }, _emptyFunc = function _emptyFunc() {
    return 0;
  }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || ({})).harness)) {
      i = _harnessPlugins.length;
      while (i-- && !_harnessPlugins[i].targetTest(target)) {}
      harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
      targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
  }, _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  }, _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  }, _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  }, _round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
  }, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {}
    return i < l;
  }, _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
      tween = a[i];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  }, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender();
  }, _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  }, _passThrough = function _passThrough(p) {
    return p;
  }, _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
      (p in obj) || (obj[p] = defaults[p]);
    }
    return obj;
  }, _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
    for (var p in defaults) {
      (p in obj) || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
    }
  }, _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
      base[p] = toMerge[p];
    }
    return base;
  }, _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
      p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    }
    return base;
  }, _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
      (p in excluding) || (copy[p] = obj[p]);
    }
    return copy;
  }, _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  }, _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) {}
    return i < 0;
  }, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
      t = child[sortBy];
      while (prev && prev[sortBy] > t) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  }, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  }, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
  }, _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  }, _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  }, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
  }, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  }, _animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  }, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  }, _setEnd = function _setEnd(animation) {
    return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  }, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  }, _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
      t = _parentToChildTotalTime(timeline.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
        child.render(t, true);
      }
    }
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
      if (timeline._dur < timeline.duration()) {
        t = timeline;
        while (t._dp) {
          t.rawTime() >= 0 && t.totalTime(t._tTime);
          t = t._dp;
        }
      }
      timeline._zTime = -_tinyNum;
    }
  }, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _round((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
  }, _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  }, _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [totalTime, suppressEvents];
      return 1;
    }
  }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
  }, _isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  }, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      prevIteration = _animationCycle(tween._tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== prevIteration) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  }, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (!child._dur && child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (!child._dur && child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  }, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _round(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  }, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  }, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  }, _parsePosition = function _parsePosition(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || (position in labels))) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i < 0) {
        (position in labels) || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  }, _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
      irVars = vars;
      parent = timeline;
      while (parent && !(("immediateRender" in irVars))) {
        irVars = parent.vars.defaults || ({});
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  }, _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
  }, _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
  }, getUnit = function getUnit(value) {
    if (typeof value !== "string") {
      return "";
    }
    var v = _unitExp.exec(value);
    return v ? value.substr(v.index + v[0].length) : "";
  }, clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
      return _clamp(min, max, v);
    });
  }, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && ("length" in value) && (!nonEmpty && !value.length || (value.length - 1 in value) && _isObject(value[0])) && !value.nodeType && value !== _win;
  }, _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function (value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  }, toArray = function toArray(value, scope, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  }, selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || ({});
    return function (v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  }, shuffle = function shuffle(a) {
    return a.sort(function () {
      return .5 - Math.random();
    });
  }, distribute = function distribute(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = ({
        center: .5,
        edges: .5,
        end: 1
      })[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function (i, target, a) {
      var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}
          wrapAt--;
        }
        distances = cache[l] = [];
        originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
        originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l; j++) {
          x = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
          d > max && (max = d);
          d < min && (min = d);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l < 0 ? base - l : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l < 0 ? _invertEase(ease) : ease;
      }
      l = (distances[i] - distances.min) / distances.max || 0;
      return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
    };
  }, _roundModifier = function _roundModifier(v) {
    var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1;
    return function (raw) {
      var n = Math.round(parseFloat(raw) / v) * v * p;
      return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  }, snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
      var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
      while (i--) {
        if (is2D) {
          dx = snapTo[i].x - x;
          dy = snapTo[i].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i] - x);
        }
        if (dx < min) {
          min = dx;
          closest = i;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  }, random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  }, pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function (value) {
      return functions.reduce(function (v, f) {
        return f(v);
      }, value);
    };
  }, unitize = function unitize(func, unit) {
    return function (value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  }, normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  }, _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
      return a[~~wrapper(index)];
    });
  }, wrap = function wrap(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
      return (range + (value - min) % range) % range + min;
    });
  }, wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
      value = (total + (value - min) % total) % total || 0;
      return min + (value > range ? total - value : value);
    });
  }, _replaceRandom = function _replaceRandom(value) {
    var prev = 0, s = "", i, nums, end, isArray;
    while (~(i = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i);
      isArray = value.charAt(i + 7) === "[";
      nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
  }, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
      return outMin + ((value - inMin) / inRange * outRange || 0);
    });
  }, interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
      return (1 - p) * start + p * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p, i, interpolators, l, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l = start.length;
        il = l - 2;
        for (i = 1; i < l; i++) {
          interpolators.push(interpolate(start[i - 1], start[i]));
        }
        l--;
        func = function func(p) {
          p *= l;
          var i = Math.min(il, ~~p);
          return interpolators[i](p - i);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p in end) {
          _addPropTween.call(master, start, p, "get", end[p]);
        }
        func = function func(p) {
          return _renderPropTweens(p, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  }, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    var labels = timeline.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
      distance = labels[p] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p;
        min = distance;
      }
    }
    return label;
  }, _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], params, scope;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    return params ? callback.apply(scope, params) : callback.call(scope);
  }, _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(false);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  }, _quickTween, _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config;
    var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config, instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    }, statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };
    _wake();
    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }
      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics));
      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics)));
      _plugins[Plugin.prop = name] = Plugin;
      if (config.targetTest) {
        _harnessPlugins.push(Plugin);
        _reservedProps[name] = 1;
      }
      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
    }
    _addGlobal(name, Plugin);
    config.register && config.register(gsap, Plugin, PropTween);
  }, _255 = 255, _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  }, _hue = function _hue(h, m1, m2) {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
  }, splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s = +a[1] / 100;
          l = +a[2] / 100;
          g = l <= .5 ? l * (s + 1) : l + s - l * s;
          r = l * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        h = s = 0;
      } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
        h *= 60;
      }
      a[0] = ~~(h + .5);
      a[1] = ~~(s * 100 + .5);
      a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  }, _colorOrderData = function _colorOrderData(v) {
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function (v) {
      var a = v.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
  }, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
      return s;
    }
    colors = colors.map(function (color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d = _colorOrderData(s);
      c = orderMatchData.c;
      if (c.join(result) !== d.c.join(result)) {
        shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
        l = shell.length - 1;
        for (; i < l; i++) {
          result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s.split(_colorExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + colors[i];
      }
    }
    return result + shell[l];
  }, _colorExp = (function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
    for (p in _colorLookup) {
      s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
  })(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  }, _tickerActive, _ticker = (function () {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
      var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1000;
        _self.time = time = time / 1000;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id = _req(_tick));
      if (dispatch) {
        for (_i = 0; _i < _listeners.length; _i++) {
          _listeners[_i](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1000 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || ({});
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || ({}));
            _raf = _win.requestAnimationFrame;
          }
          _id && _self.sleep();
          _req = _raf || (function (f) {
            return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
          });
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || 1 / _tinyNum;
        _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
      },
      fps: function fps(_fps) {
        _gap = 1000 / (_fps || 240);
        _nextTime = _self.time * 1000 + _gap;
      },
      add: function add(callback) {
        _listeners.indexOf(callback) < 0 && _listeners.push(callback);
        _wake();
      },
      remove: function remove(callback) {
        var i;
        ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
      },
      _listeners: _listeners
    };
    return _self;
  })(), _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
  }, _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for (; i < l; i++) {
      val = split[i];
      index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  }, _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  }, _configEaseFromString = function _configEaseFromString(name) {
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
  }, _invertEase = function _invertEase(ease) {
    return function (p) {
      return 1 - ease(1 - p);
    };
  }, _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  }, _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  }, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
      };
    }
    var ease = {
      easeIn: easeIn,
      easeOut: easeOut,
      easeInOut: easeInOut
    }, lowercaseName;
    _forEachName(names, function (name) {
      _easeMap[name] = _globals[name] = ease;
      _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
      for (var p in ease) {
        _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
      }
    });
    return ease;
  }, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
      return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
  }, _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
      return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function (amplitude, period) {
      return _configElastic(type, amplitude, period);
    };
    return ease;
  }, _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut(p) {
      return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function (p) {
      return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function (overshoot) {
      return _configBack(type, overshoot);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function (p) {
      return Math.pow(p, power);
    } : function (p) {
      return p;
    }, function (p) {
      return 1 - Math.pow(1 - p, power);
    }, function (p) {
      return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function (n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
      return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    _insertEase("Bounce", function (p) {
      return 1 - easeOut(1 - p);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function (p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
  });
  _insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
  });
  _insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function (p) {
        return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
    return _callbackNames += name + "," + name + "Params,";
  });
  var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = (function () {
    function Animation(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (animation._ts || 1);
        animation = animation._dp;
      }
      return time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self = this;
      return new Promise(function (resolve) {
        var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
          var _then = self.then;
          self.then = null;
          _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
          resolve(f);
          self.then = _then;
        };
        if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
          _resolve();
        } else {
          self._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation;
  })();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = (function (_Animation) {
    _inheritsLoose(Timeline, _Animation);
    function Timeline(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _round(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : dur;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -0.0001;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
          (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function (obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById(id) {
      var animations = this.getChildren(1, 1, 1), i = animations.length;
      while (i--) {
        if (animations[i].vars.id === id) {
          return animations[i];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t = Tween.delayedCall(0, callback || _emptyFunc, params);
      t.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
      while (i--) {
        _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || ({});
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && ("time" in startAt) ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && ("time" in startAt) ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p in labels) {
          if (labels[p] >= ignoreBeforeTime) {
            labels[p] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate() {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate();
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
      }
      if (self._dirty) {
        parent = self.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self._sort && child._ts && !self._lock) {
            self._lock = 1;
            _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self._dp || parent && parent.smoothChildTiming) {
              self._start += start / self._ts;
              self._time -= start;
              self._tTime -= start;
            }
            self.shiftChildren(-start, false, -1e999);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
        self._dirty = 0;
      }
      return self._tDur;
    };
    Timeline.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }
          child || _ticker.sleep();
        }
      }
    };
    return Timeline;
  })(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  }, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (parsedStart !== end) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !((prop in target)) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  }, _processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
      copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
  }, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i = plugin._props.length;
        while (i--) {
          ptLookup[plugin._props[i]] = pt;
        }
      }
    }
    return plugin;
  }, _overwritingTween, _initTween = function _initTween(tween, time) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      prevStartAt && prevStartAt.render(-1, true).kill();
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent: parent,
          immediateRender: true,
          lazy: _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate,
          onUpdateParams: onUpdateParams,
          callbackScope: callbackScope,
          stagger: 0
        }, startAt)));
        time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true);
        if (immediateRender) {
          time > 0 && !autoRevert && (tween._startAt = 0);
          if (dur && time <= 0) {
            time && (tween._zTime = time);
            return;
          }
        } else if (autoRevert === false) {
          tween._startAt = 0;
        }
      } else if (runBackwards && dur) {
        if (prevStartAt) {
          !autoRevert && (tween._startAt = 0);
        } else {
          time && (immediateRender = false);
          p = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            lazy: immediateRender && _isNotFalse(lazy),
            immediateRender: immediateRender,
            stagger: 0,
            parent: parent
          }, cleanVars);
          harnessVars && (p[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p));
          time < 0 && tween._startAt.render(-1, true);
          if (!immediateRender) {
            _initTween(tween._startAt, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i = 0; i < targets.length; i++) {
        target = targets[i];
        gsData = target._gsap || _harness(targets)[i]._gsap;
        tween._ptLookup[i] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function (name) {
            ptLookup[name] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p in cleanVars) {
            if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
  }, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
      if ((p in copy)) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while (i--) {
          copy[aliases[i]] = copy[p];
        }
      }
    }
    return copy;
  }, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
  var Tween = (function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);
    function Tween(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : ("length" in vars)) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults || ({})
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (keyframes) {
          _setDefaults(tl.vars.defaults, {
            ease: "none"
          });
          stagger ? parsedTargets.forEach(function (t, i) {
            return keyframes.forEach(function (frame, j) {
              return tl.to(t, frame, j ? ">" : i * stagger);
            });
          }) : keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
        } else {
          l = parsedTargets.length;
          staggerFunc = stagger ? distribute(stagger) : _emptyFunc;
          if (_isObject(stagger)) {
            for (p in stagger) {
              if (~_staggerTweenProps.indexOf(p)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p] = stagger[p];
              }
            }
          }
          for (i = 0; i < l; i++) {
            copy = {};
            for (p in vars) {
              if (_staggerPropsToSkip.indexOf(p) < 0) {
                copy[p] = vars[p];
              }
            }
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay));
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
        time = tTime;
        timeline = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _round(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted) {
            return this;
          }
          if (iteration !== prevIteration) {
            timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
              this._lock = force = 1;
              this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
            this._tTime = 0;
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate() {
      this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate();
      return _Animation2.prototype.invalidate.call(this);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p = {};
          _forEachName(vars, function (name) {
            return p[name] = 1;
          });
          vars = p;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i = parsedTargets.length;
      while (i--) {
        if (~killingTargets.indexOf(parsedTargets[i])) {
          curLookup = propTweenLookup[i];
          if (vars === "all") {
            overwrittenProps[i] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || ({});
            props = vars;
          }
          for (p in props) {
            pt = curLookup && curLookup[p];
            if (pt) {
              if (!(("kill" in pt.d)) || pt.d.kill(p) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween.to = function to(targets, vars) {
      return new Tween(targets, vars, arguments[2]);
    };
    Tween.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay: delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween(targets, vars);
    };
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween;
  })(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
  }, _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
  }, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
  }, _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
  }, _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  }, _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
  }, _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  }, _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
      s = data.b;
    } else if (ratio === 1 && data.e) {
      s = data.e;
    } else {
      while (pt) {
        s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s;
        pt = pt._next;
      }
      s += data.c;
    }
    data.set(data.t, data.p, s, data);
  }, _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  }, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  }, _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  }, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  }, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = (function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween;
  })();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function (config) {
        return _createPlugin(config);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || ({})).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function (property, unit, uncache) {
        return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function (t) {
          return gsap.quickSetter(t, property, unit);
        }), l = setters.length;
        return function (value) {
          var i = l;
          while (i--) {
            setters[i](value);
          }
        };
      }
      target = target[0] || ({});
      var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || ({}))[property] || property, setter = Plugin ? function (value) {
        var p = new Plugin();
        _quickTween._pt = 0;
        p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p.render(1, p);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p);
      return Plugin ? setter : function (value) {
        return setter(target, p, unit ? value + unit : value, cache, 1);
      };
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || ({}));
    },
    config: function config(value) {
      return _mergeDeep(_config, value || ({}));
    },
    registerEffect: function registerEffect(_ref3) {
      var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function (pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
      });
      _effects[name] = function (targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || ({}), defaults), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name] = function (targets, vars, position) {
          return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && ({}), this), position);
        };
      }
    },
    registerEase: function registerEase(name, ease) {
      _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    utils: {
      wrap: wrap,
      wrapYoyo: wrapYoyo,
      distribute: distribute,
      random: random,
      snap: snap,
      normalize: normalize,
      getUnit: getUnit,
      clamp: clamp,
      splitColor: splitColor,
      toArray: toArray,
      selector: selector,
      mapRange: mapRange,
      pipe: pipe,
      unitize: unitize,
      interpolate: interpolate,
      shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween: PropTween,
      globals: _addGlobal,
      Tween: Tween,
      Timeline: Timeline,
      Animation: Animation,
      getCache: _getCache,
      _removeLinkedListItem: _removeLinkedListItem,
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return _gsap[name] = Tween[name];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  }, _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
      i = targets.length;
      while (i--) {
        pt = tween._ptLookup[i][p];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p);
          }
          pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
        }
      }
    }
  }, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
      name: name,
      rawVars: 1,
      init: function init(target, vars, tween) {
        tween._onInit = function (tween) {
          var temp, p;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function (name) {
              return temp[name] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p in vars) {
              temp[p] = modifier(vars[p]);
            }
            vars = temp;
          }
          _addModifiers(tween, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p, pt;
      for (p in vars) {
        pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
        pt && (pt.op = p);
        this._props.push(p);
      }
    }
  }, {
    name: "endArray",
    init: function init(target, value) {
      var i = value.length;
      while (i--) {
        this.add(target, i, target[i] || 0, value[i]);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.7.1";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
  var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists$1 = function _windowExists() {
    return typeof window !== "undefined";
  }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  }, _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  }, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
  }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
  }, _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
  }, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  }, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
  }, _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
  }, _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
  }, _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  }, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  }, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type);
    return e.style ? e : _doc$1.createElement(type);
  }, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || "";
  }, _prefixes = ("O,Moz,ms,Ms,Webkit").split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if ((property in s) && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !((_prefixes[i] + property in s))) {}
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
  }, _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
      _win$1 = window;
      _doc$1 = _win$1.document;
      _docElement = _doc$1.documentElement;
      _tempDiv = _createElement("div") || ({
        style: {}
      });
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _pluginInitted = 1;
    }
  }, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack;
      } catch (e) {}
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  }, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
      if (target.hasAttribute(attributesArray[i])) {
        return target.getAttribute(attributesArray[i]);
      }
    }
  }, _getBBox = function _getBBox(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  }, _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
  }, _removeProperty = function _removeProperty(target, property) {
    if (property) {
      var style = target.style;
      if ((property in _transformProps) && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  }, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  }, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  }, _convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || ({})).parentNode;
    }
    if (!parent || parent === _doc$1 || !parent.appendChild) {
      parent = _doc$1.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
      return _round(curValue / cache.width * amount);
    } else {
      (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static");
      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  }, _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if ((property in _propertyAliases) && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  }, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    if (!start || start === "none") {
      var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
      if (s && s !== start) {
        prop = p;
        start = s;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      target.style[prop] = start;
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
          if (relative) {
            endValue = endValue.substr(2);
          }
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            s: startNum,
            c: relative ? relative * endNum : endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  }, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
      value = x;
      x = y;
      y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  }, _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i = props.length;
        while (--i > -1) {
          prop = props[i];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
        }
      }
    }
  }, _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
  }, _identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  }, _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  }, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
      x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  }, _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if (("x" in cache) && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin");
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c = matrix[2];
      d = matrix[3];
      x = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d * d + c * c);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x -= xOrigin - (xOrigin * a + yOrigin * c);
          y -= yOrigin - (xOrigin * b + yOrigin * d);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c * cos - a33 * sin;
          a43 = d * sin + a43 * cos;
          a = t1;
          b = t2;
          c = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c * c));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  }, _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  }, _addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  }, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  }, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  }, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  }, _assign = function _assign(target, source) {
    for (var p in source) {
      target[p] = source[p];
    }
    return target;
  }, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p in _transformProps) {
      startValue = startCache[p];
      endValue = endCache[p];
      if (startValue !== endValue && exclude.indexOf(p) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function (name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
      return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function (prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function (prop, i) {
        return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
      _pluginInitted || _initCore();
      for (p in vars) {
        if (p === "autoRound") {
          continue;
        }
        endValue = vars[p];
        if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
        } else if (p.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
          props.push(p);
        } else if (type !== "undefined") {
          if (startAt && (p in startAt)) {
            startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
            (p in _config.units) && !getUnit(startValue) && (startValue += _config.units[p]);
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p));
          } else {
            startValue = _get(target, p);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if ((p in _propertyAliases)) {
            if (p === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p !== "scale" && p !== "transform") {
              p = _propertyAliases[p];
              ~p.indexOf(",") && (p = p.split(",")[0]);
            }
          }
          isTransformRelated = (p in _transformProps);
          if (isTransformRelated) {
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? relative * endNum : endNum - cache.scaleY) || 0);
              props.push("scaleY", p);
              p += "X";
            } else if (p === "transformOrigin") {
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if ((p in _rotationalProperties)) {
              _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
              continue;
            } else if (p === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p === "force3D") {
              cache[p] = endValue;
              continue;
            } else if (p === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!((p in style))) {
            p = _checkPropPrefix(p) || p;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && (p in style)) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || ((p in _config.units) ? _config.units[p] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit) {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!((p in style))) {
            if ((p in target)) {
              this.add(target, p, startValue || target[p], endValue, index, targets);
            } else {
              _missingPlugin(p, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p, startValue, endValue);
          }
          props.push(p);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p = _propertyAliases[property];
      p && p.indexOf(",") < 0 && (property = p);
      return (property in _transformProps) && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || ({})) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty: _removeProperty,
      _getMatrix: _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  (function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
      _transformProps[name] = 1;
    });
    _forEachName(rotation, function (name) {
      _config.units[name] = "deg";
      _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function (name) {
      var split = name.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _config.units[name] = "px";
  });
  gsap.registerPlugin(CSSPlugin);
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap, TweenMaxWithCSS = gsapWithCSS.core.Tween;
  exports.Back = Back;
  exports.Bounce = Bounce;
  exports.CSSPlugin = CSSPlugin;
  exports.Circ = Circ;
  exports.Cubic = Cubic;
  exports.Elastic = Elastic;
  exports.Expo = Expo;
  exports.Linear = Linear;
  exports.Power0 = Power0;
  exports.Power1 = Power1;
  exports.Power2 = Power2;
  exports.Power3 = Power3;
  exports.Power4 = Power4;
  exports.Quad = Quad;
  exports.Quart = Quart;
  exports.Quint = Quint;
  exports.Sine = Sine;
  exports.SteppedEase = SteppedEase;
  exports.Strong = Strong;
  exports.TimelineLite = Timeline;
  exports.TimelineMax = Timeline;
  exports.TweenLite = Tween;
  exports.TweenMax = TweenMaxWithCSS;
  exports.default = gsapWithCSS;
  exports.gsap = gsapWithCSS;
  if (typeof window === 'undefined' || window !== exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
  } else {
    delete window.default;
  }
});

},{}],"3Oysh":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "lerp", function () {
  return lerp;
});
_parcelHelpers.export(exports, "getMousePos", function () {
  return getMousePos;
});
// Linear interpolation
const lerp = (a, b, n) => (1 - n) * a + n * b;
// Gets the mouse position
const getMousePos = e => {
  return {
    x: e.clientX,
    y: e.clientY
  };
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"2s5BT":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "Item", function () {
  return Item;
});
var _gsap = require('gsap');
class Item {
  constructor(el) {
    this.DOM = {
      el: el
    };
    this.DOM.thumb = this.DOM.el.querySelector('.thumb');
    this.DOM.thumbSVG = this.DOM.thumb.querySelector('.distort');
    this.DOM.SVGFilter = this.DOM.thumbSVG.querySelector('filter');
    this.DOM.SVGImage = this.DOM.thumbSVG.querySelector('image.distort__img');
    _gsap.gsap.set(this.DOM.SVGImage, {
      transformOrigin: '50% 50%'
    });
    // we will either animate the feTurbulence's baseFrequency value or the feDisplacementMap's scale value
    this.filterType = this.DOM.SVGFilter.dataset.type;
    // the feTurbulence elements per filter
    this.DOM.feTurbulence = this.DOM.SVGFilter.querySelector('feTurbulence');
    this.DOM.feDisplacementMap = this.DOM.SVGFilter.querySelector('feDisplacementMap');
    // (turbulence) baseFrequency or (displacementMap) scale current value
    this.primitiveValues = this.filterType === 'turbulence' ? {
      baseFrequency: 0
    } : {
      scale: 0
    };
    this.DOM.caption = this.DOM.thumb.querySelector('.thumb__caption');
    this.DOM.captionTitle = this.DOM.caption.querySelector('.thumb__caption-title');
    this.DOM.captionLink = this.DOM.caption.querySelector('.thumb__caption-link');
    this.DOM.meta = this.DOM.el.querySelector('.item__meta');
    this.DOM.metaCounter = this.DOM.meta.querySelector('.item__meta-counter');
    this.DOM.metaTitle = this.DOM.meta.querySelector('.item__meta-title');
    this.DOM.metaDetail = [...this.DOM.meta.querySelectorAll('.item__meta-detail')];
    this.createHoverTimeline();
    this.initEvents();
  }
  initEvents() {
    this.onMouseEnterFn = () => this.mouseEnter();
    this.DOM.thumb.addEventListener('mouseenter', this.onMouseEnterFn);
    this.onMouseLeaveFn = () => this.mouseLeave();
    this.DOM.thumb.addEventListener('mouseleave', this.onMouseLeaveFn);
  }
  updateFilterValues() {
    this[this.filterType === 'turbulence' ? 'updateTurbulenceBaseFrequency' : 'updateDisplacementMapScale']();
  }
  updateTurbulenceBaseFrequency(val = this.primitiveValues.baseFrequency) {
    this.DOM.feTurbulence.setAttribute('baseFrequency', val);
  }
  updateDisplacementMapScale(val = this.primitiveValues.scale) {
    this.DOM.feDisplacementMap.setAttribute('scale', val);
  }
  createHoverTimeline() {
    this.tl = _gsap.gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.7,
        ease: 'power2'
      },
      onUpdate: () => this.updateFilterValues(),
      onReverseComplete: () => {
        if (this.filterType === 'turbulence') {
          this.primitiveValues.baseFrequency = 0;
          this.updateFilterValues();
        }
      }
    });
    if (this.filterType === 'turbulence') {
      this.tl.to(this.primitiveValues, {
        // (turbulence) baseFrequency
        startAt: {
          baseFrequency: 0.09
        },
        // animate to 0
        baseFrequency: 0
      }, 0);
    } else {
      this.tl.to(this.primitiveValues, {
        // (displacementMap) scale start value
        startAt: {
          scale: 0
        },
        scale: 150
      }, 0);
    }
    this.tl.to(this.DOM.caption, {
      y: '0%'
    }, 0).to([this.DOM.captionTitle, this.DOM.captionLink], {
      y: 0,
      startAt: {
        y: 100,
        opacity: 0
      },
      opacity: 1,
      stagger: 0.1
    }, 0).to([this.DOM.metaCounter, this.DOM.metaTitle, this.DOM.metaDetail], {
      duration: 0.1,
      x: i => i % 2 == 0 ? '-5%' : '5%',
      opacity: 0,
      stagger: 0.05
    }, 0).to([this.DOM.metaCounter, this.DOM.metaTitle, this.DOM.metaDetail], {
      duration: 0.5,
      ease: 'power3',
      startAt: {
        x: i => i % 2 == 0 ? '15%' : '-15%'
      },
      x: '0%',
      opacity: 1,
      stagger: 0.08
    }, 0.1);
    if (navigator.userAgent.indexOf('Firefox') == -1) {
      this.tl.to(this.DOM.SVGImage, {
        scale: 1.2
      }, 0);
    }
  }
  mouseEnter() {
    this.tl.restart();
  }
  mouseLeave() {
    this.tl.reverse();
  }
}

},{"gsap":"1iecp","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"53c5a":[function(require,module,exports) {
module.exports = JSON.parse("[{\"Timestamp\":\"17/07/2021 23:54:23\",\"Fullname\":\"Ayantokun Sodiq Adeyemi\",\"Nickname\":\"General Bugatti\",\"DisplayImage\":\"https://drive.google.com/open?id=1f0kVMhIrceo_JO6R5ejnqlloRLTKXbQd\",\"FavouriteQuote\":\"It can only get better\",\"InstagramUsername\":\"General_buga101\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"17/07/2021 23:56:09\",\"Fullname\":\"Afolabi Abimbola Abigeal\",\"Nickname\":\"Beamthy\",\"DisplayImage\":\"https://drive.google.com/open?id=19UlbyoSo4ePNpW_YUOUCtv1kZgTJsQ_l\",\"FavouriteQuote\":\"There's love in sharing buh there's peace in having your own??????\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"@abigealafolabi\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"17/07/2021 23:56:13\",\"Fullname\":\"Fayomade Oluwaseyi\",\"Nickname\":\"Willie\",\"DisplayImage\":\"https://drive.google.com/open?id=1cEG5x8VX91j_EOeSYUEp7P2Mt9xNMc0e\",\"FavouriteQuote\":\"Do good, Success awaits you.\",\"InstagramUsername\":\"Willie_technology_solutions\",\"TwitterUsername\":\"@EngSeyifunmi\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"17/07/2021 23:57:26\",\"Fullname\":\"Akinwunmi Bukola\",\"Nickname\":\"Bukky\",\"DisplayImage\":\"https://drive.google.com/open?id=1HymZosi91e2WSzW3pX8nPqQYHNwGz2vn\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"@b_glamsignatures\",\"TwitterUsername\":\"Bukolamayos\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"17/07/2021 23:59:33\",\"Fullname\":\"Adeniran Opeyemi\",\"Nickname\":\"Horpey\",\"DisplayImage\":\"https://drive.google.com/open?id=1dF_DgrdJMy_1wm-qPRo8bIoqfJdf2z7z\",\"FavouriteQuote\":\"Sometimes the place you are used to is not the place you belong\",\"InstagramUsername\":\"tha_ui_guy\",\"TwitterUsername\":\"thauiguy\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"17/07/2021 23:59:36\",\"Fullname\":\"Ajisebutu David\",\"Nickname\":\"Davidjay\",\"DisplayImage\":\"https://drive.google.com/open?id=1Tm5PswuoxLe4nK44z9Ka6lTyeBVl5veH\",\"FavouriteQuote\":\"What people don't know they can't ruin\",\"InstagramUsername\":\"Mrindeed\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 00:02:23\",\"Fullname\":\"Akindele Adebari Uthman\",\"Nickname\":\"Dele\",\"DisplayImage\":\"https://drive.google.com/open?id=10x_wFjb5exFJdc7arVMFFdptj7xpvgui\",\"FavouriteQuote\":\"Mio ya ju sin yio\",\"InstagramUsername\":\"valiant_des\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 00:02:49\",\"Fullname\":\"Balogun Hammed\",\"Nickname\":\"Bhallo\",\"DisplayImage\":\"https://drive.google.com/open?id=19VpBRpAQaV_I-QbGVvTniawGrn52k3Cb\",\"FavouriteQuote\":\"My heart is that ease knowing what is meant for me will never misses me and that what misses me wasn't meant for me\",\"InstagramUsername\":\"Oriyomi360\",\"TwitterUsername\":\"Blackdude360\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 00:07:02\",\"Fullname\":\"Ebenezer Arobadi\",\"Nickname\":\"Eben\",\"DisplayImage\":\"https://drive.google.com/open?id=13s_HobJosWfCHFJOiov5hkc1d4mJIzed\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"@ebene_arobz\",\"TwitterUsername\":\"@ebene_arobs\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 00:09:20\",\"Fullname\":\"Abdulraheem Ibrahim akorede\",\"Nickname\":\"Rico Sahin\",\"DisplayImage\":\"https://drive.google.com/open?id=1WFfp7LH4MYe547wA-Xmrsfh1wSkz1aUo\",\"FavouriteQuote\":\"In Allah I believe \\nMuslim is my religion \\nProphet Muhammad is messenger of Allah \\nQuran is the book sent from Allah \\nThere is No God except Allah\\nI was born as a Muslim \\nI will die as a Muslim\",\"InstagramUsername\":\"Rico eleniyan\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 00:10:01\",\"Fullname\":\"Bashorun sulaimon\",\"Nickname\":\"BASH khalifa\",\"DisplayImage\":\"https://drive.google.com/open?id=1Wx734vePEsD92u-YyDbDgpdomb7qe9J0\",\"FavouriteQuote\":\"???The computer was born to solve problems that did not exist before.???\\n???Computer Science is no more about computers than astronomy is about telescopes.??? ...\",\"InstagramUsername\":\"Bash_khalifa\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 00:11:58\",\"Fullname\":\"Christian Justina U.\",\"Nickname\":\"KarMAriah\",\"DisplayImage\":\"https://drive.google.com/open?id=1DDTvTl1muMiOBPe8l78MpUAl7zVUdb9e\",\"FavouriteQuote\":\"Pray as you may, you can never outpray God's will.\",\"InstagramUsername\":\"KarMAriahVique\",\"TwitterUsername\":\"KarMAriah\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 00:24:21\",\"Fullname\":\"Tajudeen Ambali\",\"Nickname\":\"El-nino\",\"DisplayImage\":\"https://drive.google.com/open?id=1AXd4K0MVIjXoQaMxWqC2ra8O3egmptrE\",\"FavouriteQuote\":\"Best before doesn't mean worst after.\",\"InstagramUsername\":\"Nay!\",\"TwitterUsername\":\"Nay!\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 00:54:56\",\"Fullname\":\"Okorie Cornelius Nkem\",\"Nickname\":\"Cornexx\",\"DisplayImage\":\"https://drive.google.com/open?id=1m-AuMafzbNnrsKUF6Bx8Y7_Pd338X2j6\",\"FavouriteQuote\":\"It is what it is\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 02:45:33\",\"Fullname\":\"Taoreed Sodiq Olamilekan\",\"Nickname\":\"Kenab\",\"DisplayImage\":\"https://drive.google.com/open?id=1G3K8_0PvQdh28M7OYAeAPgfIgebEyEhI\",\"FavouriteQuote\":\"What will be will definitely be\",\"InstagramUsername\":\"kenab_prints\",\"TwitterUsername\":\"the_lakesyde\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 02:48:31\",\"Fullname\":\"Ilochi Gabriel C.\",\"Nickname\":\"Gblend\",\"DisplayImage\":\"https://drive.google.com/open?id=1m--z0A-wP0K_scgbiocQAM60dbSQqihT\",\"FavouriteQuote\":\"If you have to do it, do it right.\",\"InstagramUsername\":\"_gblend\",\"TwitterUsername\":\"_gblend\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 02:58:46\",\"Fullname\":\"Idiape oluwakemi folashade\",\"Nickname\":\"Browniesbroww\",\"DisplayImage\":\"https://drive.google.com/open?id=1ZUPrZrLgS-lUZ0DJYtdnaJVBvdk5k83i\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"Browniesbroww\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 03:00:05\",\"Fullname\":\"Oreoluwa Michael O.\",\"Nickname\":\"Mike\",\"DisplayImage\":\"https://drive.google.com/open?id=1QJGt_NzfvG0onQ5YNmPYXvg0KPDcNfg4\",\"FavouriteQuote\":\"We are helped Of God, Imparted with knowledge, driven by vision & accelerated by grace\",\"InstagramUsername\":\"Oreoluwamichael10\",\"TwitterUsername\":\"@OreoluwaMichael\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 03:00:26\",\"Fullname\":\"Oyedun Titilope\",\"Nickname\":\"Sweet in the middle\",\"DisplayImage\":\"https://drive.google.com/open?id=1OJpHZ7tH3uk7OvFpUXs6mq8Erj40YpjQ\",\"FavouriteQuote\":\"Don???t wait live goes faster than you think\",\"InstagramUsername\":\"quiteangel_t\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 03:08:15\",\"Fullname\":\"Titilayo Adebayo\",\"Nickname\":\"ALAYO\",\"DisplayImage\":\"https://drive.google.com/open?id=1mJAxF0ZI-mBS2WIjEsgu1g0REIOO2zmb\",\"FavouriteQuote\":\"What goes around comes around\",\"InstagramUsername\":\"titialayo_13\",\"TwitterUsername\":\"Tee_02\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 03:32:35\",\"Fullname\":\"Isaac Ernest ifeanyichukwu\",\"Nickname\":\"Ragnar\",\"DisplayImage\":\"https://drive.google.com/open?id=16LR_4c0iQZqymke27lyxDCMkrvTclaQq\",\"FavouriteQuote\":\"Shit happens\",\"InstagramUsername\":\"ernestizic\",\"TwitterUsername\":\"ernestizic\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 03:41:58\",\"Fullname\":\"Ajayi O. Johnson\",\"Nickname\":\"Jayxin Nakel\",\"DisplayImage\":\"https://drive.google.com/open?id=1yJicBmlm3jVHnmORkceg7iR-2MaTGrha\",\"FavouriteQuote\":\"For every LIFE there's a depth to pay which is DEATH -Jayxin Nakel\",\"InstagramUsername\":\"Jayxin Nakel\",\"TwitterUsername\":\"Jayxin_Nakel\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 04:02:44\",\"Fullname\":\"damilola ayodele\",\"Nickname\":\"Fp\",\"DisplayImage\":\"https://drive.google.com/open?id=1hGxOeHB5aDSuFgxrrytB2VrEkEUbExIL\",\"FavouriteQuote\":\"Seek discomfort! \\\"Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes ... the ones who see things differently -- they're not fond of rules, and they have no respect for the status quo. ... You can quote them, disagree with them, glorify or vilify them, but the only thing you can't do is ignore them because they change things. ... They push the human race forward, and while some may , because the people who are crazy enough to think that they can change the world, are the ones who do.\\\"  ~ cheers class of 2020!\",\"InstagramUsername\":\"Trayne.xx\",\"TwitterUsername\":\"Trayne_xx\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 05:18:18\",\"Fullname\":\"Elusoji Omotola Ruth\",\"Nickname\":\"LadyReo\",\"DisplayImage\":\"https://drive.google.com/open?id=1Oy4UIDr1lNu3pwDPfTOowJaWBtz7ygqU\",\"FavouriteQuote\":\"'A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.''\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"@simplyreo\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 05:44:18\",\"Fullname\":\"Okoro Rosemary\",\"Nickname\":\"Rosita\",\"DisplayImage\":\"https://drive.google.com/open?id=1Drz6LGUaTaCe-QOXuxfeig7WMzGYY55c\",\"FavouriteQuote\":\"Do to others what you want done to you\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"@June_rosee\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 05:46:57\",\"Fullname\":\"Adehino Akinwale Omoniyi\",\"Nickname\":\"Neyo Smith\",\"DisplayImage\":\"https://drive.google.com/open?id=1bbVElKGrYqYT4fYofsVpgi3GE38nZJNF\",\"FavouriteQuote\":\"Education is a provision for old age.\",\"InstagramUsername\":\"neyosmith\",\"TwitterUsername\":\"Neyosmith\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 06:03:31\",\"Fullname\":\"Umoh David Akaninyene\",\"Nickname\":\"davirez\",\"DisplayImage\":\"https://drive.google.com/open?id=1eyZSx9dpBOIcmDv9Jc5QErsc_orCjCAv\",\"FavouriteQuote\":\"Keep Hope Alive\",\"InstagramUsername\":\"da.virez\",\"TwitterUsername\":\"@davirezDox\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 06:04:26\",\"Fullname\":\"Olaniyan omolara damilola\",\"Nickname\":\"Largem\",\"DisplayImage\":\"https://drive.google.com/open?id=1cv9uUo6JJTEwx-3F_VIcaFhn5Fai1lp4\",\"FavouriteQuote\":\"God is a able\",\"InstagramUsername\":\"Largem Signature\",\"TwitterUsername\":\"Olaniyan omolara\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 06:09:03\",\"Fullname\":\"Zannu Rita Senami\",\"Nickname\":\"African Pearl\",\"DisplayImage\":\"https://drive.google.com/open?id=1ynEVK6Vj5KvjFaxej5JQPxmuedlNRTdw\",\"FavouriteQuote\":\"The brightest never stop learning\",\"InstagramUsername\":\"africanpearl__\",\"TwitterUsername\":\"@iyam_pearl\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 06:09:50\",\"Fullname\":\"Olaniyan omolara damilola\",\"Nickname\":\"Laragem\",\"DisplayImage\":\"https://drive.google.com/open?id=1IJkxnm1m4UsGZqEsHj0XcpMh0BMr-G1h\",\"FavouriteQuote\":\"In life don't underestimate your ability just be focus no Matter the situation life direct you\",\"InstagramUsername\":\"Largem Signature\",\"TwitterUsername\":\"Olaniyan omolara\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 06:09:51\",\"Fullname\":\"BALOGUN\",\"Nickname\":\"Baloo\",\"DisplayImage\":\"https://drive.google.com/open?id=1ob1-f6IzXTRAsAAS9p0gtWovHceCRz5m\",\"FavouriteQuote\":\"The best of me  is yet to be seen\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 06:14:45\",\"Fullname\":\"Olaniyan Ajarat Ololade\",\"Nickname\":\"Ronkygold\",\"DisplayImage\":\"https://drive.google.com/open?id=1UVb3cbfbucXA7wyUa42ae2UUEYK9DD00\",\"FavouriteQuote\":\"Who ever strive  shall  succeed\",\"InstagramUsername\":\"loladejumoke\",\"TwitterUsername\":\"Loladejumoke\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 06:23:10\",\"Fullname\":\"ADEBOMI ANUOLUWAPO TEMITOPE\",\"Nickname\":\"Komosoftinc et Errdox\",\"DisplayImage\":\"https://drive.google.com/open?id=12GdVxarDcxswJLhx-8mu1bXdSJ4EnrTJ\",\"FavouriteQuote\":\"The best way to treat obstacles is to use them as stepping-stones. Laugh at them, tread on them, and let them lead you to something better.??? ??? Mr Galliano???s Circus\",\"InstagramUsername\":\"@adebomianuolwapo\",\"TwitterUsername\":\"@komosoftinc\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 06:25:57\",\"Fullname\":\"Ezekiel Adewole Anthony\",\"Nickname\":\"Ezeborbor\",\"DisplayImage\":\"https://drive.google.com/open?id=1yOI1VZJrZEaao0e-v018ZRe0Jm8kSjsY\",\"FavouriteQuote\":\"After all, life???s better when we???re happy, healthy, and successful.\",\"InstagramUsername\":\"Ezeborbor\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 06:39:27\",\"Fullname\":\"SANNI TOBI ISIAK\",\"Nickname\":\"ALLAH'S Slave\",\"DisplayImage\":\"https://drive.google.com/open?id=1zajIm52u4bYjc49x56FhohXFtyy5MAcz\",\"FavouriteQuote\":\"Do not feel intimidated to ask questions because he who ask is a fool for just 5 seconds while he who do not ask is a fool for ever\",\"InstagramUsername\":\"Tobsun4u\",\"TwitterUsername\":\"Sannitobi2\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 06:52:47\",\"Fullname\":\"Asunmo Temitope\",\"Nickname\":\"DeFinest\",\"DisplayImage\":\"https://drive.google.com/open?id=1bJL3SjV4-6MWWLTK5bMGsD9-DGGr3jnR\",\"FavouriteQuote\":\"Positivity  and Love is the key to success\",\"InstagramUsername\":\"Official_definest\",\"TwitterUsername\":\"DeFinest94\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 07:10:14\",\"Fullname\":\"Fasoranti Oluwamuyiwa David\",\"Nickname\":\"Fash Muyhee\",\"DisplayImage\":\"https://drive.google.com/open?id=1UlKSh3-U7wpbl-ws84yK9NuinLvQOifL\",\"FavouriteQuote\":\"Failure to Plan , Ready to Fail\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"@FashMuyhee\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 07:47:03\",\"Fullname\":\"Timi .O paul\",\"Nickname\":\"SOFT\",\"DisplayImage\":\"https://drive.google.com/open?id=1PFdqHOeeJhNTAR1ovHHcxPvse7174lcd\",\"FavouriteQuote\":\"Have I now become  your enemy by telling you the truth \\nGal 4:16\",\"InstagramUsername\":\"Soft_timi\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 07:51:46\",\"Fullname\":\"Sanni Azeez\",\"Nickname\":\"Ghost\",\"DisplayImage\":\"https://drive.google.com/open?id=1UJc1KmNcGPSnA9sihkZ_0DLNLGCM48cj\",\"FavouriteQuote\":\"It is what it is\",\"InstagramUsername\":\"@sanni_azeez\",\"TwitterUsername\":\"@damilareeeey\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 07:59:06\",\"Fullname\":\"Abraham ijeoma faith\",\"Nickname\":\"Firstlady\",\"DisplayImage\":\"https://drive.google.com/open?id=12UqNv7-E8SPdDwc7oEToTBDEaBrH_VWw\",\"FavouriteQuote\":\"Believe you can and you're halfway there.\",\"InstagramUsername\":\"ije_black\",\"TwitterUsername\":\"@Ije_ladydev\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 08:15:54\",\"Fullname\":\"Aleh Anita\",\"Nickname\":\"Berry\",\"DisplayImage\":\"https://drive.google.com/open?id=1axacQoSrlQhrunvdKZ-fppRBvaNoe5Kc\",\"FavouriteQuote\":\"Live nd let others live\",\"InstagramUsername\":\"Aniberychristopa\",\"TwitterUsername\":\"Anitaaleh\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 08:55:20\",\"Fullname\":\"Patience Chizoba Mba\",\"Nickname\":\"Chizzy\",\"DisplayImage\":\"https://drive.google.com/open?id=1_bDSflWYtZCYbKw7Df9agKua5kwPp2q-\",\"FavouriteQuote\":\"If you fail to plan, you plan to fail\",\"InstagramUsername\":\"Patchizzy\",\"TwitterUsername\":\"Patchizzy1\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 09:06:54\",\"Fullname\":\"Etor Esther Etor\",\"Nickname\":\"Queenhessy\",\"DisplayImage\":\"https://drive.google.com/open?id=16EgsJhLxdJ2HR1MUoy9gDbjdKGq-yyiW\",\"FavouriteQuote\":\"The Lord is my shepherd I shall not want\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"@etorestheretor\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 09:07:06\",\"Fullname\":\"Kenneth Samuel Akpan\",\"Nickname\":\"KAS\",\"DisplayImage\":\"https://drive.google.com/open?id=1ZYjfwqy0WBBKl8zFWvVhNMFdlUKRPSFd\",\"FavouriteQuote\":\"Follow your heart, listen to your inner voice, stop caring about what others think.\",\"InstagramUsername\":\"Blaqkas\",\"TwitterUsername\":\"@Blac_Kas\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 09:21:16\",\"Fullname\":\"Abdulsalam Abisola Hiqmat\",\"Nickname\":\"Hikki Hikki\",\"DisplayImage\":\"https://drive.google.com/open?id=1jT3z60puJOIHJunyWUv2Ig7GbABkAn4j\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 09:24:06\",\"Fullname\":\"Michael Sanni\",\"Nickname\":\"tomiwa\",\"DisplayImage\":\"https://drive.google.com/open?id=1NCCtogYQ1A8RE14-pZ28k5NHnel_0i-b\",\"FavouriteQuote\":\"Build a Clock, dont tell the time\",\"InstagramUsername\":\"https://www.instagram.com/sannimichaelse/\",\"TwitterUsername\":\"https://twitter.com/sannimichaelse\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 10:15:00\",\"Fullname\":\"Ologunloluwa Anuoluwapo\",\"Nickname\":\"Mercytin\",\"DisplayImage\":\"https://drive.google.com/open?id=1hGvrkQzLAmdT6A5KbmMYZkBz0HtrkzT2\",\"FavouriteQuote\":\"I'm glad for the experiences that shaped me this way.\",\"InstagramUsername\":\"Ola_mercy\",\"TwitterUsername\":\"Ologun_Vandame\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 10:44:26\",\"Fullname\":\"Tochi Kingsley\",\"Nickname\":\"Khingslee\",\"DisplayImage\":\"https://drive.google.com/open?id=17LA5SzR5M1TTnNpBitzK2YW2i_EhPYwA\",\"FavouriteQuote\":\"Sometimes you have to accept the things that you can't Change.\",\"InstagramUsername\":\"Khingsleetochi\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 10:48:40\",\"Fullname\":\"Victory Ndukwu\",\"Nickname\":\"Lion\",\"DisplayImage\":\"https://drive.google.com/open?id=1H9ViiflNWf-_5XO9YGbF8sS2z39hl4GN\",\"FavouriteQuote\":\"He not busy being born, is busy dying\\\" - Bob Dylan (It's Alright, Ma).\",\"InstagramUsername\":\"Victory ndukwu\",\"TwitterUsername\":\"@n__victory\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 11:42:04\",\"Fullname\":\"Enyioha success\",\"Nickname\":\"Ceejay\",\"DisplayImage\":\"https://drive.google.com/open?id=1sMJc8coMPXY7jSaMhMnwa_RMxxFemrFq\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"Itz_ceejay\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 11:46:22\",\"Fullname\":\"Alasi Olanrewaju\",\"Nickname\":\"Polar\",\"DisplayImage\":\"https://drive.google.com/open?id=1JG3jV0As5wj7NaHHj6dwiiW7UvnaA7LB\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"Polar\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 11:50:44\",\"Fullname\":\"Sodiq Babatunde Abdulrazak\",\"Nickname\":\"Chipolee\",\"DisplayImage\":\"https://drive.google.com/open?id=1lVSDfZurMpt2EEXIZf_DmlGcP3pcI5bk\",\"FavouriteQuote\":\"Memories don't leave like people do.\",\"InstagramUsername\":\"hayindesodiq\",\"TwitterUsername\":\"@HayindeSodiq\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 11:50:58\",\"Fullname\":\"Emmanuel Godwin A.\",\"Nickname\":\"YabatechLogic | GoddySeems\",\"DisplayImage\":\"https://drive.google.com/open?id=1hETcTiy9mYEvBKeh16YnDwoXfhIbK3ET\",\"FavouriteQuote\":\"To be a safe player you need to know how to play\",\"InstagramUsername\":\"Goddy_Seems\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 11:54:46\",\"Fullname\":\"Akinsanya Morenikeji fatimah\",\"Nickname\":\"Keji\",\"DisplayImage\":\"https://drive.google.com/open?id=1Jw4CucNgTWBE8tz9rCvuHS0N-K--Pw0j\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"Kheji_Smallz\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 11:56:40\",\"Fullname\":\"Banke Aluko\",\"Nickname\":\"Billionaire Banke\",\"DisplayImage\":\"https://drive.google.com/open?id=1ROYvBmKd1hIWFuJ-pdvp_ibFX0tS_3Mm\",\"FavouriteQuote\":\"All things are possible to those who believe and when there???s life there???s hope. Believe, trust and have Faith in God!\",\"InstagramUsername\":\"Bameekeh\",\"TwitterUsername\":\"Bameekeh\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 11:59:31\",\"Fullname\":\"Sogunro Mariam Olaide\",\"Nickname\":\"Mayreeham\",\"DisplayImage\":\"https://drive.google.com/open?id=1O3rhMWzBvRzX6hdvaTc16z4wblk-yOK6\",\"FavouriteQuote\":\"Always Pray, Educate yourself, Glow up, Dress up and Make Money!\",\"InstagramUsername\":\"mariamsogunro\",\"TwitterUsername\":\"Nil\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 12:00:40\",\"Fullname\":\"Aigbedion Esther\",\"Nickname\":\"Hessyberry\",\"DisplayImage\":\"https://drive.google.com/open?id=1knPuFmPZMAWJibbUFLNQnHcUT0_cy-6U\",\"FavouriteQuote\":\"Forward ever, backward never\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 12:05:46\",\"Fullname\":\"Hassan Aisha Ayo\",\"Nickname\":\"Ayilove\",\"DisplayImage\":\"https://drive.google.com/open?id=144X4F5KOF-2WvRIlqd5bBYBocxOk15TE\",\"FavouriteQuote\":\"After hardship comes easy.\",\"InstagramUsername\":\"Aisha_ayobami\",\"TwitterUsername\":\"Sir Ayobami\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 12:17:16\",\"Fullname\":\"Benjamin Philip\",\"Nickname\":\"Double B\",\"DisplayImage\":\"https://drive.google.com/open?id=1iAXqe3cZQnDjljFVeeO_hnesWunLZtjG\",\"FavouriteQuote\":\"Simple is Best\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 12:31:25\",\"Fullname\":\"Ojo Harborserdey Elizabeth\",\"Nickname\":\"Queen B\",\"DisplayImage\":\"https://drive.google.com/open?id=10zfW6TvpymsUPjTndS74uFNqwJI_5Kvt\",\"FavouriteQuote\":\"Don't wait for the PERFECT MOMENT, take the moment and MAKE IT PERFECT\",\"InstagramUsername\":\"lizdaqueen_empire\",\"TwitterUsername\":\"@OjoHarborserdey\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 12:38:12\",\"Fullname\":\"Hassan Rosenje\",\"Nickname\":\"H-FILMS\",\"DisplayImage\":\"https://drive.google.com/open?id=1LsylIgh59-WjeED94SiIhUucMN45Ot4_\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"Iamhfilms\",\"TwitterUsername\":\"@hfilms4\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 12:39:44\",\"Fullname\":\"Abeeb Ayinla\",\"Nickname\":\"Hay bee\",\"DisplayImage\":\"https://drive.google.com/open?id=1w66TcxDduDmMogvbyg3RYTdT4pU3QSej\",\"FavouriteQuote\":\"Whatever you are, be a good one.\",\"InstagramUsername\":\"official_haybeetech\",\"TwitterUsername\":\"@haybeetech\",\"LinkedInURL\":\"https://www.linkedin.com/in/abeeb-ayinla-b63b3315a\"},{\"Timestamp\":\"18/07/2021 12:40:34\",\"Fullname\":\"AFINJUOMO AYOOLA\",\"Nickname\":\"PalaceBabe\",\"DisplayImage\":\"https://drive.google.com/open?id=1yV3A4JfZU9bSQA699yJ9748dehJTYpbF\",\"FavouriteQuote\":\"Don???t compete with others, we all have different timing....BE FOCUSED\",\"InstagramUsername\":\"@PalaceBabe Stores\",\"TwitterUsername\":\"@PalaceBae\",\"LinkedInURL\":\"@PalaceBabe\"},{\"Timestamp\":\"18/07/2021 12:58:00\",\"Fullname\":\"Bright Nwachukwu\",\"Nickname\":\"macbright\",\"DisplayImage\":\"https://drive.google.com/open?id=1IaLWtDA05OiYE5fynxgTrxhPhuXhhyvu\",\"FavouriteQuote\":\"Man know thyself and Learn to Learn...\",\"InstagramUsername\":\"leomac42\",\"TwitterUsername\":\"@Macbrightc\",\"LinkedInURL\":\"https://www.linkedin.com/in/bright-nwachukwu-928476187\"},{\"Timestamp\":\"18/07/2021 13:03:17\",\"Fullname\":\"Adeyemi Abiodun\",\"Nickname\":\"A Cube\",\"DisplayImage\":\"https://drive.google.com/open?id=16NZFYl1DpxX2TPl-axujQGbodu1vFan6\",\"FavouriteQuote\":\". . . Life is but a dream\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 13:26:31\",\"Fullname\":\"Isaac Oluwatoyin Adepitan\",\"Nickname\":\"1zyik\",\"DisplayImage\":\"https://drive.google.com/open?id=1OIu2JXxmqo6tQpGGsaE95tM39kwzV4yS\",\"FavouriteQuote\":\"Stay Hungry, Stay Foolish - Steve Jobs\",\"InstagramUsername\":\"https://www.instagram.com/isaac_adepitan/\",\"TwitterUsername\":\"https://www.twitter.com/isaac-adepitan/\",\"LinkedInURL\":\"https://www.linkedin.com/in/isaac-adepitan/\"},{\"Timestamp\":\"18/07/2021 13:33:55\",\"Fullname\":\"OMOTOYE ADEBOWALE EMMANUEL\",\"Nickname\":\"SHATTA RANKS\",\"DisplayImage\":\"https://drive.google.com/open?id=1ZMkMjLw6oeSvk_VF575_k8dUVoWxoeWv\",\"FavouriteQuote\":\"I am all that I choose to be. Without the Grace of God as my anchor, I WILL SINK.\",\"InstagramUsername\":\"iam_shattaranks\",\"TwitterUsername\":\"iam_shattaranks\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 13:34:43\",\"Fullname\":\"Ogunmola Modupe Julianah\",\"Nickname\":\"DOT OG\",\"DisplayImage\":\"https://drive.google.com/open?id=1kOkStBqMJll-PrMNeZtY6md5qsZ_Q9iJ\",\"FavouriteQuote\":\"Destiny can never be denied,it can only be delayed.\",\"InstagramUsername\":\"dot.og.54,  jullydupsy\",\"TwitterUsername\":\"Ogunmola Modupe\",\"LinkedInURL\":\"www.jul20.com\"},{\"Timestamp\":\"18/07/2021 14:43:14\",\"Fullname\":\"Olusanya Temitope Damilola\",\"Nickname\":\"Becca\",\"DisplayImage\":\"https://drive.google.com/open?id=1qz9bhjhcN1smpZnWChdkwL9uLG5K-xuX\",\"FavouriteQuote\":\"Just believe !\",\"InstagramUsername\":\"Rebecca Olusanya\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 14:53:04\",\"Fullname\":\"Anugwo Evans\",\"Nickname\":\"Evalove\",\"DisplayImage\":\"https://drive.google.com/open?id=1GCLBcsNSouERfnTcexsZp2aOP7BsJsRi\",\"FavouriteQuote\":\"As a man thinket so he is'\",\"InstagramUsername\":\"Evans Anugwo\",\"TwitterUsername\":\"Happy @AnugwoNnenna\",\"LinkedInURL\":\"Evalove\"},{\"Timestamp\":\"18/07/2021 15:09:12\",\"Fullname\":\"Olalere suliyat tunrayo\",\"Nickname\":\"motunstitches\",\"DisplayImage\":\"https://drive.google.com/open?id=1d3ozj4Iovet-c1UpRJnOEir-TAJ8ESIp\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"motunstitches1@gmail.com\",\"TwitterUsername\":\"motunstitches1@gmail.com\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 17:42:22\",\"Fullname\":\"Fuad Yakub Olamilekan\",\"Nickname\":\"FUAD THE GOAT\",\"DisplayImage\":\"https://drive.google.com/open?id=1x5n05NJnkHuIkAtwwT1GY8ZyIikgQNyP\",\"FavouriteQuote\":\"No Pain No Gain\",\"InstagramUsername\":\"@six_double_three\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 19:00:30\",\"Fullname\":\"Ogunrinola ajibola rilwan\",\"Nickname\":\"#watimagbo\",\"DisplayImage\":\"https://drive.google.com/open?id=1BQTJbWQIQw_9W9kUAt1iZHTYWF_pfzAN\",\"FavouriteQuote\":\"He who fails to plan ,plans to play.\",\"InstagramUsername\":\"Trustnone\",\"TwitterUsername\":\"Y u need am\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 19:01:38\",\"Fullname\":\"Durosakin AbdulGaniu Olatunji\",\"Nickname\":\"FoodWire\",\"DisplayImage\":\"https://drive.google.com/open?id=1pqzHIJcyH6DfjMalhKQMUZGGCXClvWac\",\"FavouriteQuote\":\"Alhamdulilla For Everything\",\"InstagramUsername\":\"Food_wire\",\"TwitterUsername\":\"Food_wire1\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"18/07/2021 19:46:42\",\"Fullname\":\"Akintola Stephen Iyanu\",\"Nickname\":\"Panumy\",\"DisplayImage\":\"https://drive.google.com/open?id=1Ahxt8M4sMqjPA1-E-WfKk6LBBFLWvepl\",\"FavouriteQuote\":\"Treat others like you'll treat yourself\",\"InstagramUsername\":\"@harkintolar_stepheb\",\"TwitterUsername\":\"@Iyanu_steve\",\"LinkedInURL\":\"https://www.linkedin.com/mwlite/in/akintola-stephen-38baa916b\"},{\"Timestamp\":\"19/07/2021 03:39:24\",\"Fullname\":\"Ogene Uche Fabian\",\"Nickname\":\"John-Wick!\",\"DisplayImage\":\"https://drive.google.com/open?id=14PYTlVbdIqDBVt9l11-jWTpjpVkXSAtg\",\"FavouriteQuote\":\"The best is yet to come!\",\"InstagramUsername\":\"@ogeneuchefabiano1\",\"TwitterUsername\":\"@ogeneuchefabian\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"19/07/2021 03:41:55\",\"Fullname\":\"Ogene Uche Fabian\",\"Nickname\":\"John-Wick!\",\"DisplayImage\":\"https://drive.google.com/open?id=1iszRIh2fldO3jf_c9kYU3YuSgDbyK7AN\",\"FavouriteQuote\":\"The best is yet to come!\",\"InstagramUsername\":\"@ogeneuchefabiano1\",\"TwitterUsername\":\"@ogeneuchefabiano\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"19/07/2021 04:13:55\",\"Fullname\":\"OLUGBODI OLUBUKOLA ADEBAYO\",\"Nickname\":\"BUKEDINHO\",\"DisplayImage\":\"https://drive.google.com/open?id=1EIUH3ZQ1uitb7nnqteCN53Mi3kgdxgE2\",\"FavouriteQuote\":\"Time does not change people, time reveals the real face of people!\",\"InstagramUsername\":\"oluwabukolaolugbodi@gmail.com\",\"TwitterUsername\":\"BUKEDINHO\",\"LinkedInURL\":\"oluwabukolaolugbodi@gmail.com\"},{\"Timestamp\":\"19/07/2021 05:44:35\",\"Fullname\":\"Oni Ayoleyi Priscilla\",\"Nickname\":\"Sunshine\",\"DisplayImage\":\"https://drive.google.com/open?id=19XqW6Oqafe9dBeSqeNFP5bzYMOQqZFm3\",\"FavouriteQuote\":\"I am able to do all things through Christ that strengthens me.\",\"InstagramUsername\":\"Ayoleyilee\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"19/07/2021 17:14:17\",\"Fullname\":\"Nwoke Onyebuchi Lawrence\",\"Nickname\":\"Buchi\",\"DisplayImage\":\"https://drive.google.com/open?id=1jwVb8-VoXQ3gf9IqE4FMksKedqNxY6ke\",\"FavouriteQuote\":\"Jesus is the answer\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"19/07/2021 19:47:16\",\"Fullname\":\"Aiwerioba Cynthia Osayomor\",\"Nickname\":\"Cynthia Osas\",\"DisplayImage\":\"https://drive.google.com/open?id=1ZZNOQF_9xkVhJYnozwuqzNTSJWKNn7vR\",\"FavouriteQuote\":\"Love is God, God is love and it's pays to serve God\",\"InstagramUsername\":\"Cynthia Osas\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"19/07/2021 20:46:31\",\"Fullname\":\"Taiwo Dorcas Olubukola\",\"Nickname\":\"dorcastywo\",\"DisplayImage\":\"https://drive.google.com/open?id=1SiwyROhYQzYOPWVe6p6fxSx02sCApZO5\",\"FavouriteQuote\":\"On God\",\"InstagramUsername\":\"dorcastywo\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"19/07/2021 21:34:24\",\"Fullname\":\"Tella Aminat Damilola\",\"Nickname\":\"Tella\",\"DisplayImage\":\"https://drive.google.com/open?id=1blf6C4f49uztdj3YGtVOaZ-WUIIvcTT1\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"tella_aminat\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"19/07/2021 22:40:04\",\"Fullname\":\"Alabi Veronica seun\",\"Nickname\":\"Dammytee\",\"DisplayImage\":\"https://drive.google.com/open?id=1EnK5EEjZWkEuU_itIuLYEaz3sMD0Ujgb\",\"FavouriteQuote\":\"Nobody can make me unhappy\",\"InstagramUsername\":\"Damilolaa _tee\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"19/07/2021 23:49:49\",\"Fullname\":\"Opadele kehinde B.\",\"Nickname\":\"Mhizkennyart\",\"DisplayImage\":\"https://drive.google.com/open?id=1Hfw8OYHdvwwZ2N-vjvWpAMTPIXyM8kj7\",\"FavouriteQuote\":\"What God says about me is far important than what man says\",\"InstagramUsername\":\"@mhizkennyart\",\"TwitterUsername\":\"@mhizkennyart\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"20/07/2021 00:59:34\",\"Fullname\":\"Nwokedike Ugonna Emmanuel\",\"Nickname\":\"UMT\",\"DisplayImage\":\"https://drive.google.com/open?id=1ZGiiQ5iEPR9UU7pzvmogb6Qe5-YHEehw\",\"FavouriteQuote\":\"Grace lifts\",\"InstagramUsername\":\"Ugo_g_eagle\",\"TwitterUsername\":\"UgonnaEmm\",\"LinkedInURL\":\"Www.linkedin.com/Nwokedikeugonna\"},{\"Timestamp\":\"20/07/2021 01:35:10\",\"Fullname\":\"Afuwajomo Oluwabunmi Agnes\",\"Nickname\":\"Bumzzy\",\"DisplayImage\":\"https://drive.google.com/open?id=1R0-YSgDtkzmCO8ihqSXtrw9ejmviQ5yX\",\"FavouriteQuote\":\"Every day may not be good... but there's something good in every.\",\"InstagramUsername\":\"Afuwajomo Oluwabunmi\",\"TwitterUsername\":\"Afuwajomo Oluwabunmi\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"20/07/2021 06:58:38\",\"Fullname\":\"Babalola Damilola Ebenezer\",\"Nickname\":\"Daddy Yo\",\"DisplayImage\":\"https://drive.google.com/open?id=14lWle_-Yfwg1GcqXMk9jK1KSuHnvwaoG\",\"FavouriteQuote\":\"You shall know the truth and the truth shall set you free\",\"InstagramUsername\":\"Trulydami\",\"TwitterUsername\":\"Trulydami\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"20/07/2021 07:42:39\",\"Fullname\":\"Odeniran Blessing Omotola\",\"Nickname\":\"Hordeniran\",\"DisplayImage\":\"https://drive.google.com/open?id=1jfiWLUGs5eaU4Z3nJuaw1eRzXLK9USeg\",\"FavouriteQuote\":\"Anything that doesn't add value to one's life is not worth giving the time or attention to.\",\"InstagramUsername\":\"De_blelas couture\",\"TwitterUsername\":\"@Omotola\",\"LinkedInURL\":\".\"},{\"Timestamp\":\"20/07/2021 08:13:16\",\"Fullname\":\"Eather williams\",\"Nickname\":\"Brownnie\",\"DisplayImage\":\"https://drive.google.com/open?id=16MqChoFPpPcA6E-PXTn8b8LaeH7XrpAj\",\"FavouriteQuote\":\"Not of he that runner but if God who shower mercy\",\"InstagramUsername\":\"_brownnshuga\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"21/07/2021 06:33:39\",\"Fullname\":\"Deborah Ehru\",\"Nickname\":\"Debby\",\"DisplayImage\":\"https://drive.google.com/open?id=1IXcyUqtvxVgNhjFkUj0-q4-ufzs09ZzS\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"@deborahehru\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"21/07/2021 16:10:21\",\"Fullname\":\"Wright Bilikis Omolara\",\"Nickname\":\"DAMZYWRIGHT\",\"DisplayImage\":\"https://drive.google.com/open?id=1krzklaGPUrAHzYd7A2K0E_7bAS03BLnC\",\"FavouriteQuote\":\"If you don't value what you have, you will value it when you loose it\",\"InstagramUsername\":\"damzywright\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"21/07/2021 21:05:12\",\"Fullname\":\"Akpuru Joseph Ogbonnaya\",\"Nickname\":\"Dj Joe\",\"DisplayImage\":\"https://drive.google.com/open?id=13L2colXv5eTL5Tx3pfu0L7J7lmKvaUKT\",\"FavouriteQuote\":\"Every hustler get him pay day\",\"InstagramUsername\":\"@dj_Joe95\",\"TwitterUsername\":\"@Joe95dj\",\"LinkedInURL\":\"https://www.linkedin.com/in/joseph-akpuru-1b025720a\"},{\"Timestamp\":\"21/07/2021 21:19:57\",\"Fullname\":\"Yibala daniels\",\"Nickname\":\"Malone\",\"DisplayImage\":\"https://drive.google.com/open?id=1VYTluxm5ZdH-Ck1OdEu9lgtp5vjtXH5S\",\"FavouriteQuote\":\"Bimb a butterfly make a king\",\"InstagramUsername\":\"Yibala_daniels\",\"TwitterUsername\":\"Yibala_daniels\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"22/07/2021 09:40:19\",\"Fullname\":\"Olalere Suliat Tunrayo\",\"Nickname\":\"Iya pomo\",\"DisplayImage\":\"https://drive.google.com/open?id=1FsWPzdLzZlaSsavr99oYUDsqoCWUc8Ow\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"Motun stitches\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 14:18:14\",\"Fullname\":\"Soneye Emmanuel Babatunde\",\"Nickname\":\"Guap\",\"DisplayImage\":\"https://drive.google.com/open?id=1Arm_6pL0kXAewyTAeFGT0aTTkFEUUgir\",\"FavouriteQuote\":\"Hardwork + Dream + Dedication = Success\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 14:22:31\",\"Fullname\":\"Ajibola Dammy\",\"Nickname\":\"Tiaraoluwa\",\"DisplayImage\":\"https://drive.google.com/open?id=1rJ4gzEpRUWDw3yOUWEKNz-hQ8akrUmnT\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"barqueenjoymi\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 14:26:12\",\"Fullname\":\"EZEKIEL DANIEL FEMI\",\"Nickname\":\"DANNY F\",\"DisplayImage\":\"https://drive.google.com/open?id=1z9JEFSTZ-JXxIDqUNorwtFksbzdmv5o6\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 14:32:20\",\"Fullname\":\"Ajibola Dammy\",\"Nickname\":\"Tiaraoluwa\",\"DisplayImage\":\"https://drive.google.com/open?id=1wwFLemfTRCumY7vrB-lwyITkvzWWwzpi\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 14:32:37\",\"Fullname\":\"Ojigiri gbemileke precious\",\"Nickname\":\"Gbemiprecious\",\"DisplayImage\":\"https://drive.google.com/open?id=12kmBFy0-cL8YQZ5J5KQE63uGEsw0IIco\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"@gbemiprecious\",\"TwitterUsername\":\"gbemiprecious\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 15:31:50\",\"Fullname\":\"Olajide sodiq olayinka\",\"Nickname\":\"SD\",\"DisplayImage\":\"https://drive.google.com/open?id=11ejQXfIby5wOGko_p9soIzu148KBx35o\",\"FavouriteQuote\":\"Time is like a river,u can never touch same water twice bcos the flow that has passed will never pass again. Enjoy every moment of ur life ????????\",\"InstagramUsername\":\"Horlarjideyhorlaryenkharsd\",\"TwitterUsername\":\"Olayink44070950\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 15:36:21\",\"Fullname\":\"John Ekunola\",\"Nickname\":\"John Java\",\"DisplayImage\":\"https://drive.google.com/open?id=1lRU_lCZH6FDBCRe60ob8iI7H_VVaUksu\",\"FavouriteQuote\":\"Dread it, Run from it, destiny arrives all the same\",\"InstagramUsername\":\"@johnekunola\",\"TwitterUsername\":\"@johnekunola\",\"LinkedInURL\":\"https://www.linkedin.com/in/john-ekunola-18283b162/\"},{\"Timestamp\":\"23/07/2021 15:41:50\",\"Fullname\":\"Ogunye Joseph\",\"Nickname\":\"Pajos\",\"DisplayImage\":\"https://drive.google.com/open?id=1Vy7QiXLieJtvY8-CnuKbMfd8lP_K65yf\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 15:48:06\",\"Fullname\":\"Ogunye David Adeyemi\",\"Nickname\":\"BIGG Bishop\",\"DisplayImage\":\"https://drive.google.com/open?id=1kRbDEvggVsKdQ4bKVYfMFjeEq3uWDugb\",\"FavouriteQuote\":\"Believe\",\"InstagramUsername\":\"Official_fmtech\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 16:03:55\",\"Fullname\":\"TAIWO ELIJAH OLATUNDE\",\"Nickname\":\"ELIJAY\",\"DisplayImage\":\"https://drive.google.com/open?id=1AKE6isxL2A8c5u8hZJS3UX2M5qiRzPMm\",\"FavouriteQuote\":\"One Day, I Really Want To Say \\\"I MADE IT\",\"InstagramUsername\":\"@elijaydesigns\",\"TwitterUsername\":\"@elijaydesigns\",\"LinkedInURL\":\"https://www.google.com/search?q=elijaydesigns&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiwyNylu_nxAhVj0uAKHZvXCB8Q_AUoAXoECAEQAw&biw=1326&bih=637\"},{\"Timestamp\":\"23/07/2021 16:33:30\",\"Fullname\":\"Ehru Deborah\",\"Nickname\":\"Debby\",\"DisplayImage\":\"https://drive.google.com/open?id=1OR1sER0j8CXEYxG9pMOPTo7wJj9XaPPa\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"@deborahehru\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 17:04:55\",\"Fullname\":\"Ogunrinola ajibola rilwan\",\"Nickname\":\"Watimagbo\",\"DisplayImage\":\"https://drive.google.com/open?id=1kvLUC3WwYQ1ddl62z9FSvvY30LwMDdjH\",\"FavouriteQuote\":\"He who fails to plan,plan to play.\",\"InstagramUsername\":\"Trustnone\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 17:37:22\",\"Fullname\":\"ADEDOKUN JOSHUA A\",\"Nickname\":\"DjBigJosh\",\"DisplayImage\":\"https://drive.google.com/open?id=1fSq52CGh3FOYigOrefaO_ECGSyOJUTvt\",\"FavouriteQuote\":\"We are pencils in the hand of the creator.\",\"InstagramUsername\":\"Iam_deejayfatjoe\",\"TwitterUsername\":\"adesojionline\",\"LinkedInURL\":\"https://www.linkedin.com/in/adedokun-joshua-adesoji-62049784\"},{\"Timestamp\":\"23/07/2021 17:54:21\",\"Fullname\":\"Ogunbanwo Abimbola Mojisola\",\"Nickname\":\"Queen harbimbolar\",\"DisplayImage\":\"https://drive.google.com/open?id=1jQBTSxFcVGnHs23MfRatXRSkvcusmaX-\",\"FavouriteQuote\":\"\",\"InstagramUsername\":\"\",\"TwitterUsername\":\"\",\"LinkedInURL\":\"\"},{\"Timestamp\":\"23/07/2021 18:25:15\",\"Fullname\":\"Akinboboye Stella oyindamola\",\"Nickname\":\"Hoyindamola\",\"DisplayImage\":\"https://drive.google.com/open?id=1OcNgy-51bG8NZ5HRyxvgND6PVA4I-Clb\",\"FavouriteQuote\":\"Never judge a book by its cover\",\"InstagramUsername\":\"Mhz_oyin\",\"TwitterUsername\":\"Hoyinda\",\"LinkedInURL\":\"\"}]");
},{}]},["21c8X","3L8AI"], "3L8AI", "parcelRequire7566")

//# sourceMappingURL=index.2142d36c.js.map
