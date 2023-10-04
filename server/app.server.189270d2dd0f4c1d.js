/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/component/bookCard/bookCard.less":
/***/ (() => {



/***/ }),

/***/ "./app/component/bookList/bookList.less":
/***/ (() => {



/***/ }),

/***/ "./app/component/pageFooter/pageFooter.less":
/***/ (() => {



/***/ }),

/***/ "./app/component/pageHeader/pageHeader.less":
/***/ (() => {



/***/ }),

/***/ "./app/component/searchForm/searchForm.less":
/***/ (() => {



/***/ }),

/***/ "./app/component/searchResults/searchResults.less":
/***/ (() => {



/***/ }),

/***/ "./app/less/app.less":
/***/ (() => {



/***/ }),

/***/ "./app/page/error/errorView.less":
/***/ (() => {



/***/ }),

/***/ "./app/page/home/homeView.less":
/***/ (() => {



/***/ }),

/***/ "./app/page/notFound/notFoundView.less":
/***/ (() => {



/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/clone/clone.js":
/***/ ((module) => {

var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if ( true && module.exports) {
  module.exports = clone;
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__("react"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ }),

/***/ "react":
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/static/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

(() => {
    const publicPathOverride = typeof window !== 'undefined'
        ? window?.$IMA.$PublicPath
        : process?.env?.IMA_PUBLIC_PATH;
    if (publicPathOverride) {
        __webpack_require__.p = publicPathOverride;
    }
})();

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  getInitialAppConfigFunctions: () => (/* binding */ getInitialAppConfigFunctions),
  ima: () => (/* reexport */ server_namespaceObject)
});

// NAMESPACE OBJECT: ./node_modules/@ima/helpers/dist/esm/index.js
var esm_namespaceObject = {};
__webpack_require__.r(esm_namespaceObject);
__webpack_require__.d(esm_namespaceObject, {
  allPromiseHash: () => (allPromiseHash),
  assignRecursively: () => (assignRecursively),
  assignRecursivelyWithTracking: () => (assignRecursivelyWithTracking),
  clone: () => ((clone_default())),
  deepFreeze: () => (deepFreeze),
  escapeRegExp: () => (escapeRegExp),
  resolveEnvironmentSetting: () => (resolveEnvironmentSetting)
});

// NAMESPACE OBJECT: ./node_modules/@ima/core/dist/esm/server/index.js
var server_namespaceObject = {};
__webpack_require__.r(server_namespaceObject);
__webpack_require__.d(server_namespaceObject, {
  AbstractController: () => (AbstractController),
  AbstractExecution: () => (AbstractExecution),
  AbstractExtension: () => (AbstractExtension),
  AbstractPageManager: () => (AbstractPageManager),
  AbstractRoute: () => (AbstractRoute),
  AbstractRouter: () => (AbstractRouter),
  ActionTypes: () => (ActionTypes),
  BindingState: () => (BindingState),
  Bootstrap: () => (Bootstrap),
  Cache: () => (Cache),
  CacheEntry: () => (CacheEntry),
  CacheFactory: () => (CacheFactory),
  CacheImpl: () => (CacheImpl),
  CancelError: () => (CancelError),
  ClientPageManager: () => (ClientPageManager),
  ClientRouter: () => (ClientRouter),
  ClientWindow: () => (ClientWindow),
  ComponentUtils: () => (ComponentUtils),
  Controller: () => (Controller),
  ControllerDecorator: () => (ControllerDecorator),
  CookieStorage: () => (CookieStorage),
  Dictionary: () => (Dictionary),
  Dispatcher: () => (Dispatcher),
  DispatcherImpl: () => (DispatcherImpl),
  DynamicRoute: () => (DynamicRoute),
  Entry: () => (Entry),
  Error: () => (IMAError),
  EventBus: () => (EventBus),
  EventBusImpl: () => (EventBusImpl),
  Execution: () => (Execution),
  Extension: () => (Extension),
  GenericError: () => (GenericError),
  HttpAgent: () => (HttpAgent),
  HttpAgentImpl: () => (HttpAgentImpl),
  HttpProxy: () => (HttpProxy),
  HttpStatusCode: () => (HttpStatusCode),
  MapStorage: () => (MapStorage),
  MessageFormatDictionary: () => (MessageFormatDictionary),
  MetaManager: () => (MetaManager),
  MetaManagerImpl: () => (MetaManagerImpl),
  Namespace: () => (Namespace),
  ObjectContainer: () => (ObjectContainer),
  PageFactory: () => (PageFactory),
  PageHandler: () => (PageHandler),
  PageHandlerRegistry: () => (PageHandlerRegistry),
  PageManager: () => (PageManager),
  PageMetaHandler: () => (PageMetaHandler),
  PageNavigationHandler: () => (PageNavigationHandler),
  PageRenderer: () => (PageRenderer),
  PageStateManager: () => (PageStateManager),
  PageStateManagerDecorator: () => (PageStateManagerDecorator),
  PageStateManagerImpl: () => (PageStateManagerImpl),
  PluginLoader: () => (PluginLoader),
  RendererEvents: () => (RendererEvents),
  RendererTypes: () => (RendererTypes),
  Request: () => (Request),
  Response: () => (Response),
  RouteFactory: () => (RouteFactory),
  RouteNames: () => (RouteNames),
  Router: () => (Router),
  RouterEvents: () => (RouterEvents),
  SerialBatch: () => (SerialBatch),
  ServerPageManager: () => (ServerPageManager),
  ServerRouter: () => (ServerRouter),
  ServerWindow: () => (ServerWindow),
  SessionMapStorage: () => (SessionMapStorage),
  SessionStorage: () => (SessionStorage),
  StateEvents: () => (StateEvents),
  StaticRoute: () => (StaticRoute),
  Storage: () => (Storage),
  UrlTransformer: () => (UrlTransformer),
  WeakMapStorage: () => (WeakMapStorage),
  Window: () => (Window),
  bootClientApp: () => (bootClientApp),
  createImaApp: () => (createImaApp),
  getClientBootConfig: () => (getClientBootConfig),
  getInitialImaConfigFunctions: () => (getInitialImaConfigFunctions),
  getInitialPluginConfig: () => (getInitialPluginConfig),
  getNamespace: () => (getNamespace),
  ns: () => (ns),
  onLoad: () => (onLoad),
  pluginLoader: () => (pluginLoader),
  reviveClientApp: () => (reviveClientApp),
  routeClientApp: () => (routeClientApp)
});

// EXTERNAL MODULE: ./app/less/app.less
var app = __webpack_require__("./app/less/app.less");
;// CONCATENATED MODULE: ./node_modules/@esmj/task/dist/index.mjs
// src/index.ts
var __yield_time__ = null;
var enabled = true;
var DEADLINE = 45;
var FRAME = 0;
var NEXT_FRAME = 16;
function nextFrameYield() {
  return forceYield(NEXT_FRAME);
}
function forceYield(frame) {
  return new Promise((resolve) => {
    setTimeout(() => {
      __yield_time__ = performance.now() + DEADLINE;
      resolve(void 0);
    }, frame ?? FRAME);
  });
}
async function autoYield() {
  if (!enabled || __yield_time__ !== null && !shouldYieldWork(__yield_time__)) {
    return;
  }
  return forceYield();
}
function autoYieldReset() {
  __yield_time__ = null;
}
function autoYieldToggle(state) {
  enabled = state;
}
function shouldYieldWork(deadline) {
  const currentTime = performance.now();
  return typeof navigator !== "undefined" && navigator?.scheduling?.isInputPending?.() || currentTime > deadline;
}


// EXTERNAL MODULE: ./node_modules/clone/clone.js
var clone = __webpack_require__("./node_modules/clone/clone.js");
var clone_default = /*#__PURE__*/__webpack_require__.n(clone);
;// CONCATENATED MODULE: ./node_modules/@ima/helpers/dist/esm/index.js

function esm_assign(target, source, parentField = null, ignoreMeta = true) {
    let fieldList = [];
    for (const field of Object.keys(source)){
        if (ignoreMeta && field === '__meta__') {
            continue;
        }
        const value = source[field];
        const fieldPath = parentField ? parentField + '.' + field : field;
        fieldList.push(fieldPath);
        if (value instanceof Array) {
            target[field] = value.slice();
        } else if (value instanceof Object && !(value instanceof Function) && !(value instanceof RegExp)) {
            if (!(target[field] instanceof Object)) {
                target[field] = {};
            }
            fieldList = fieldList.concat(esm_assign(target[field], value, fieldPath));
        } else {
            target[field] = value;
        }
    }
    return fieldList;
}
function assignRecursively(target, ...sources) {
    for (let source of sources){
        esm_assign(target, source);
    }
    return target;
}
function assignRecursivelyWithTracking(referrer) {
    return function(target, ...sources) {
        let fieldsList = [];
        for (const source of sources){
            fieldsList = fieldsList.concat(esm_assign(target, source));
        }
        if (!(target.__meta__ instanceof Object)) {
            target.__meta__ = {};
        }
        for (const field of fieldsList){
            target.__meta__[field] = referrer;
        }
        return target;
    };
}
function deepFreeze(object) {
    if (!(object instanceof Object)) {
        return object;
    }
    for (let property of Object.keys(object)){
        deepFreeze(object[property]);
    }
    return Object.freeze(object);
}
const PRODUCTION_ENV_LONG = 'production';
const PRODUCTION_ENV_SHORT = 'prod';
function resolveEnvironmentSetting(settings = {}, currentEnv = PRODUCTION_ENV_LONG) {
    let baseSetting = settings[PRODUCTION_ENV_SHORT] || settings[PRODUCTION_ENV_LONG] || {};
    let currentSetting = settings[currentEnv];
    if (currentEnv !== PRODUCTION_ENV_SHORT && currentEnv !== PRODUCTION_ENV_LONG && currentSetting) {
        assignRecursively(baseSetting, currentSetting);
    }
    return baseSetting;
}
function allPromiseHash(hash) {
    let keys = Object.keys(hash);
    let loadPromises = keys.map((key)=>Promise.resolve(hash[key]));
    return Promise.all(loadPromises).then((resolvedValues)=>{
        let result = {};
        for (let key of keys){
            result[key] = resolvedValues.shift();
        }
        return result;
    });
}
function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1');
}


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/Namespace.js
/**
 * Namespace creation, manipulation and traversal utility. This utility is used
 * to create semi-global shared namespaces for registering references to
 * interfaces, classes and constants of the application to provide access to
 * each other more easily than by using the ES6 import/export mechanism.
 */ class Namespace {
    /**
   * Initializes the namespace provider.
   *
   * This is a private constructor, you should use the exported `ns`
   * instance to create and use namespaces (see the examples).
   *
   * @private
   * @example
   *        import { ns } from '@ima/core';
   *        ns.namespace('ima.core');
   *        ns.has('ima.core');
   */ /**
   * Verifies that the specified path in namespace exists, creates it if it
   * does not, and returns the value at the specified path in the namespace.
   *
   * The method recursively creates all path parts in the namespaces as empty
   * plain objects for all path parts that do not exist yet, including the
   * last one. This means, that if called with a non-existing namespace path
   * as an argument, the return value will be the last created namespace
   * object.
   *
   * @param path The namespace path.
   * @return The value at the specified path in the namespace.
   */ namespace(path) {
        const levels = this.#resolvePathLevels(path);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let self = this;
        for (const levelName of levels){
            if (!Object.prototype.hasOwnProperty.call(self, levelName)) {
                self[levelName] = {};
            }
            self = self[levelName];
        }
        return self;
    }
    /**
   * Verifies that the specified namespace path point to an existing
   * namespace or terminal value.
   *
   * @param path The namespace path to test.
   * @return `true` if the namespace or terminal value exists
   *         at the specified path.
   */ has(path) {
        let hasPath;
        try {
            hasPath = this.get(path) !== undefined;
        } catch (e) {
            hasPath = false;
        }
        return hasPath;
    }
    /**
   * Return value for the specified namespace path point or undefined if path is not type of string
   *
   * @param path The namespace path to get.
   * @return The value at the specified path in the namespace or undefined for any non-string path
   */ get(path) {
        const levels = this.#resolvePathLevels(path);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let self = this;
        for (const level of levels){
            if (!self[level]) {
                return undefined;
            }
            self = self[level];
        }
        return self;
    }
    /**
   * Set value for the specified namespace path point.
   *
   * @param path The namespace path to set.
   * @param value
   */ set(path, value) {
        const levels = this.#resolvePathLevels(path);
        const lastKey = levels.pop();
        const namespace = this.namespace(levels.join('.'));
        namespace[lastKey] = value;
    }
    /**
   * Resolve path levels from string
   *
   * @param path The namespace path.
   * @param array of levels or undefined for not valid path
   */ #resolvePathLevels(path) {
        if (!path || typeof path !== 'string') {
            throw Error('namespace.get: path is not type of string');
        }
        return path.split('.');
    }
}
const ns = new Namespace();
function getNamespace() {
    return ns;
}

//# sourceMappingURL=Namespace.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/oc/BindingState.js
var BindingState;
(function(BindingState) {
    BindingState[/**
   * Constant for plugin binding state.
   *
   * When the object container is in plugin binding state, it is impossible
   * to register new aliases using the {@link bind()} method and register
   * new constant using the {@link constant()} method, or override the
   * default class dependencies of any already-configured class using the
   * {@link inject()} method (classes that were not configured yet may be
   * configured using the {@link inject()} method or {@link provide()}
   * method).
   *
   * This prevents the unprivileged code (e.g. 3rd party plugins) from
   * overriding the default dependency configuration provided by ima, or
   * overriding the configuration of a 3rd party plugin by another 3rd party
   * plugin.
   *
   * The application itself has always access to the unlocked object
   * container.
   */ "Plugin"] = 'plugin';
    BindingState[/**
   * Constant for IMA binding state.
   *
   * When the object container is in ima binding state, it is possible
   * to register new aliases using the {@link bind()} method and register
   * new constant using the {@link constant()} method, or override the
   * default class dependencies of any already-configured class using the
   * {@link inject()} method (classes that were not configured yet may be
   * configured using the {@link inject()} method or {@link provide()}
   * method).
   *
   * @return The IMA binding state.
   */ "IMA"] = 'ima.core';
    BindingState[/**
   * Constant for app binding state.
   *
   * When the object container is in app binding state, it is possible
   * to register new aliases using the {@link bind()} method and register
   * new constant using the {@link constant()} method, or override the
   * default class dependencies of any already-configured class using the
   * {@link inject()} method (classes that were not configured yet may be
   * configured using the {@link inject()} method or {@link provide()}
   * method).
   */ "App"] = 'app';
})(BindingState || (BindingState = {}));

//# sourceMappingURL=BindingState.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/error/Error.js
/**
 * The IMA application error extends the native `Error` with additional details
 * that lead to the error and the HTTP status code to send to the client.
 */ class IMAError extends Error {
    constructor(message, params){
        super(message, {
            cause: params?.cause
        });
    }
    /**
   * Returns the HTTP status to send to the client.
   *
   * If the error has occurred at the client-side, the status code is used to
   * determine the error page to show to the user.
   *
   * This method is a shorthand for the following code snippet:
   * `this.getParams().status || 500`.
   *
   * @return The HTTP status to send to the client.
   * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
   */ getHttpStatus() {
        return 500;
    }
    /**
   * Returns the error parameters providing additional details about the
   * error. The structure of the returned object is always
   * situation-dependent, but the returned object usually contains the
   * `status: number` field which represents the HTTP status to send to
   * the client.
   *
   * @return The route parameters of the route at which
   *         the error has occurred.
   * @see Error#getHttpStatus
   */ getParams() {
        return {};
    }
    /**
   * Tests, whether the specified error was caused by the
   * client's action (for example wrong URL or request encoding).
   *
   * @return `true` if the error was caused the action of the
   *         client.
   */ isClientError() {
        return false;
    }
    /**
   * Tests, whether the specified error should lead to a redirect.
   *
   * @return `true` if the error should cause a redirect.
   */ isRedirection() {
        return false;
    }
}

//# sourceMappingURL=Error.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/error/GenericError.js

/**
 * Implementation of the {@link Error} interface, providing more advanced
 * error API.
 *
 * @extends Error
 */ class GenericError extends IMAError {
    _params;
    /**
   * Initializes the generic IMA error.
   *
   * @param message The message describing the cause of the error.
   * @param params A data map providing additional
   *        details related to the error. It is recommended to set the
   *        `status` field to the HTTP response code that should be sent
   *        to the client.
   */ constructor(message, params){
        super(message, params);
        /**
     * The data providing additional details related to this error.
     */ this._params = params ?? {};
    }
    /**
   * @inheritDoc
   */ getHttpStatus() {
        return this._params.status || super.getHttpStatus();
    }
    /**
   * @inheritDoc
   */ getParams() {
        return this._params;
    }
    /**
   * @inheritDoc
   */ isClientError() {
        return this.getHttpStatus() >= 400 && this.getHttpStatus() < 500;
    }
    /**
   * @inheritDoc
   */ isRedirection() {
        return this.getHttpStatus() >= 300 && this.getHttpStatus() < 400;
    }
}

//# sourceMappingURL=GenericError.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/Router.js

/**
 * The router manages the application's routing configuration and dispatches
 * controllers and views according to the current URL and the route it matches.
 */ class Router {
    /**
   * Initializes the router with the provided configuration.
   *
   * @param config Router configuration.
   *        The `$Protocol` field must be the current protocol used to
   *        access the application, terminated by a colon (for example
   *        `https:`).
   *        The `$Root` field must specify the URL path pointing to the
   *        application's root.
   *        The `$LanguagePartPath` field must be the URL path fragment
   *        used as a suffix to the `$Root` field that specifies the
   *        current language.
   *        The `$Host` field must be the application's domain (and the
   *        port number if other than the default is used) in the following
   *        form: ``${protocol}//${host}``.
   */ init(config) {
        return;
    }
    /**
   * Adds a new route to router.
   *
   * @param name The unique name of this route, identifying it among
   *        the rest of the routes in the application.
   * @param pathExpression A path expression specifying the URL path
   *        part matching this route (must not contain a query string),
   *        optionally containing named parameter placeholders specified as
   *        `:parameterName`. The name of the parameter is terminated
   *        by a forward slash (`/`) or the end of the path expression
   *        string.
   *        The path expression may also contain optional parameters, which
   *        are specified as `:?parameterName`. It is recommended to
   *        specify the optional parameters at the end of the path
   *        expression.
   * @param controller The full name of Object Container alias
   *        identifying the controller associated with this route.
   * @param view The full name or Object Container alias identifying
   *        the view class associated with this route.
   * @param options
   *        Additional route options, specified how the navigation to the
   *        route will be handled.
   *        The `onlyUpdate` can be either a flag signalling whether
   *        the current controller and view instances should be kept if they
   *        match the ones used by the previous route; or a callback function
   *        that will receive the previous controller and view identifiers
   *        used in the previously matching route, and returns a
   *        `boolean` representing the value of the flag. This flag is
   *        disabled by default.
   *        The `autoScroll` flag signals whether the page should be
   *        scrolled to the top when the navigation takes place. This flag is
   *        enabled by default.
   * @return This router.
   * @throws Thrown if a route with the same name already exists.
   */ add(name, pathExpression, controller, view, options) {
        return this;
    }
    /**
   * Adds a new middleware to router.
   *
   * @param middleware Middleware
   *        function accepting routeParams as a first argument, which can be mutated
   *        and `locals` object as second argument. This can be used to pass data
   *        between middlewares.
   * @return This router.
   * @throws Thrown if a middleware with the same name already exists.
   */ use(middleware) {
        return this;
    }
    /**
   * Removes the specified route from the router's known routes.
   *
   * @param name The route's unique name, identifying the route to remove.
   * @return This router.
   */ remove(name) {
        return this;
    }
    /**
   * Returns specified handler from registered route handlers.
   *
   * @param name The route's unique name.
   * @return Route with given name or undefined.
   */ getRouteHandler(name) {
        return undefined;
    }
    /**
   * Returns the current path part of the current URL, including the query
   * string (if any).
   *
   * @return The path and query parts of the current URL.
   */ getPath() {
        return '';
    }
    /**
   * Returns the current absolute URL (including protocol, host, query, etc).
   *
   * @return The current absolute URL.
   */ getUrl() {
        return '';
    }
    /**
   * Returns the application's absolute base URL, pointing to the public root
   * of the application.
   *
   * @return The application's base URL.
   */ getBaseUrl() {
        return '';
    }
    /**
   * Returns the application's domain in the following form
   * ``${protocol}//${host}``.
   *
   * @return The current application's domain.
   */ getDomain() {
        return '';
    }
    /**
   * Returns application's host (domain and, if necessary, the port number).
   *
   * @return The current application's host.
   */ getHost() {
        return '';
    }
    /**
   * Returns the current protocol used to access the application, terminated
   * by a colon (for example `https:`).
   *
   * @return The current application protocol used to access the
   *         application.
   */ getProtocol() {
        return '';
    }
    /**
   * Returns the information about the currently active route.
   * @throws Thrown if a route is not define for current path.
   */ getCurrentRouteInfo() {
        throw new GenericError('ima.core.router.Router.getCurrentRouteInfo: Method is not implemented.');
    }
    /**
   * Registers event listeners at the client side window object allowing the
   * router to capture user's history (history pop state - going "back") and
   * page (clicking links) navigation.
   *
   * The router will start processing the navigation internally, handling the
   * user's navigation to display the page related to the URL resulting from
   * the user's action.
   *
   * Note that the router will not prevent forms from being submitted to the
   * server.
   *
   * The effects of this method can be reverted with `unlisten`. This
   * method has no effect at the server side.
   *
   * @return This router.
   */ listen() {
        return this;
    }
    /**
   * Unregisters event listeners at the client side window object allowing the
   * router to capture user's history (history pop state - going "back") and
   * page (clicking links) navigation.
   *
   * The router will stop processing the navigation internally, handling the
   * user's navigation to display the page related to the URL resulting from
   * the user's action.
   *
   * Note that the router will not prevent forms from being submitted to the
   * server.
   *
   * The effects of this method can be reverted with `unlisten`. This method has no effect
   * at the server side.
   *
   * @return This router.
   */ unlisten() {
        return this;
    }
    /**
   * Redirects the client to the specified location.
   *
   * At the server side the method results in responding to the client with a
   * redirect HTTP status code and the `Location` header.
   *
   * At the client side the method updates the current URL by manipulating
   * the browser history (if the target URL is at the same domain and
   * protocol as the current one) or performs a hard redirect (if the target
   * URL points to a different protocol or domain).
   *
   * The method will result in the router handling the new URL and routing
   * the client to the related page if the URL is set at the client side and
   * points to the same domain and protocol.
   *
   * @param url The URL to which the client should be redirected.
   * @param options The options overrides route options defined in
   *        the `routes.js` configuration file.
   * @param action An action object describing what triggered this routing.
   * @param locals The locals param is used to pass local data
   *        between middlewares.
   */ redirect(url, options, action, locals) {
        return;
    }
    /**
   * Generates an absolute URL (including protocol, domain, etc) for the
   * specified route by substituting the route's parameter placeholders with
   * the provided parameter values.
   *
   * @param routeName The unique name of the route, identifying the
   *        route to use.
   * @param params Parameter values for the route's
   *        parameter placeholders. Extraneous parameters will be added as
   *        URL query.
   * @return An absolute URL for the specified route and parameters.
   */ link(routeName, params) {
        return '';
    }
    /**
   * Routes the application to the route matching the providing path, renders
   * the route page and sends the result to the client.
   *
   * @param path The URL path part received from the client, with
   *        optional query.
   * @param options The options overrides route options defined in
   *        the `routes.js` configuration file.
   * @param action An action object describing what triggered this routing.
   * @param locals The locals param is used to pass local data
   *        between middlewares.
   * @return A promise resolved
   *         when the error has been handled and the response has been sent
   *         to the client, or displayed if used at the client side.
   */ route(path, options, action, locals) {
        return Promise.reject();
    }
    /**
   * Handles an internal server error by responding with the appropriate
   * "internal server error" error page.
   *
   * @param params Parameters extracted from
   *        the current URL path and query.
   * @param options The options overrides route options defined in
   *        the `routes.js` configuration file.
   * @param locals The locals param is used to pass local data
   *        between middlewares.
   * @return A promise resolved when the error
   *         has been handled and the response has been sent to the client,
   *         or displayed if used at the client side.
   */ handleError(params, options, locals) {
        return Promise.reject();
    }
    /**
   * Handles a "not found" error by responding with the appropriate "not
   * found" error page.
   *
   * @param params Parameters extracted from
   *        the current URL path and query.
   * @param options The options overrides route options defined in
   *        the `routes.js` configuration file.
   * @param locals The locals param is used to pass local data
   *        between middlewares.
   * @return A promise resolved
   *         when the error has been handled and the response has been sent
   *         to the client, or displayed if used at the client side.
   */ handleNotFound(params, options, locals) {
        return Promise.reject();
    }
    /**
   * Tests, if possible, whether the specified error was caused by the
   * client's action (for example wrong URL or request encoding) or by a
   * failure at the server side.
   *
   * @param reason The encountered error.
   * @return `true` if the error was caused the action of the
   *         client.
   */ isClientError(reason) {
        return false;
    }
    /**
   * Tests, if possible, whether the specified error lead to redirection.
   *
   * @param reason The encountered error.
   * @return `true` if the error was caused the action of the
   *         redirection.
   */ isRedirection(reason) {
        return false;
    }
}

//# sourceMappingURL=Router.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/Bootstrap.js




/**
 * Application bootstrap used to initialize the environment and the application
 * itself.
 */ class Bootstrap {
    _oc;
    _config;
    /**
   * Initializes the bootstrap.
   *
   * @param oc The application's object container to use
   *        for managing dependencies.
   */ constructor(oc){
        /**
     * The object container used to manage dependencies.
     */ this._oc = oc;
    }
    /**
   * Initializes the application by running the bootstrap sequence. The
   * sequence initializes the components of the application in the following
   * order:
   * - application settings
   * - constants, service providers and class dependencies configuration
   * - services
   * - UI components
   * - routing
   *
   * @param config The application environment
   *        configuration for the current environment.
   */ run(config) {
        this._config = config;
        this._initSettings();
        this._bindDependencies();
        this._initServices();
        this._initRoutes();
    }
    /**
   * Initializes dynamically loaded plugin. This is explicitly called from
   * within the Plugin Loader instance.
   *
   * @param name Plugin name.
   * @param plugin Plugin interface (object with init functions).
   */ initPlugin(name, plugin) {
        if (!plugin) {
            return;
        }
        this._initPluginSettings(name, plugin);
        this._bindPluginDependencies(name, plugin);
        this._initPluginServices(plugin);
    }
    /**
   * Initializes the application settings. The method loads the settings for
   * all environments and then picks the settings for the current environment.
   *
   * The method also handles using the values in the production environment
   * as default values for configuration items in other environments.
   */ _initSettings() {
        const currentApplicationSettings = {};
        const plugins = this._config.plugins.concat([
            {
                name: BindingState.App,
                plugin: this._config
            }
        ]);
        plugins.filter(({ plugin })=>typeof plugin.initSettings === 'function').forEach(({ name, plugin })=>{
            const allPluginSettings = plugin.initSettings(ns, this._oc, this._config.settings, false);
            assignRecursivelyWithTracking(name)(currentApplicationSettings, resolveEnvironmentSetting(allPluginSettings, this._config.settings.$Env));
        });
        this._config.bind = {
            ...this._config.bind,
            ...currentApplicationSettings,
            ...this._config.settings
        };
    }
    /**
   * Initializes dynamically loaded plugin settings (if the init
   * function is provided). The settings are merged into the application
   * the same way as with non-dynamic import, meaning the app setting overrides
   * are prioritized over the default plugin settings.
   *
   * @param name Plugin name.
   * @param plugin Plugin interface (object with init functions).
   */ _initPluginSettings(name, plugin) {
        if (typeof plugin?.initSettings !== 'function') {
            return;
        }
        const newApplicationSettings = {};
        const allPluginSettings = plugin.initSettings(ns, this._oc, this._config.settings, true // Indicating static dynamic bootstraping
        );
        assignRecursivelyWithTracking(name)(newApplicationSettings, resolveEnvironmentSetting(allPluginSettings, this._config.settings.$Env));
        assignRecursivelyWithTracking(BindingState.App)(newApplicationSettings, this._config.bind);
        this._config.bind = {
            ...this._config.bind,
            ...newApplicationSettings
        };
    }
    /**
   * Binds the constants, service providers and class dependencies to the
   * object container.
   */ _bindDependencies() {
        this._oc.setBindingState(BindingState.IMA);
        this._config.initBindIma(ns, this._oc, this._config.bind, BindingState.IMA);
        this._config.plugins.filter(({ plugin })=>typeof plugin.initBind === 'function').forEach(({ name, plugin })=>{
            this._oc.setBindingState(BindingState.Plugin, name);
            plugin.initBind(ns, this._oc, this._config.bind, false);
        });
        this._oc.setBindingState(BindingState.App);
        this._config.initBindApp(ns, this._oc, this._config.bind, BindingState.App);
    }
    /**
   * Binds the constants, service providers and class dependencies to the
   * object container for dynamically imported plugins.
   *
   * @param name Plugin name.
   * @param plugin Plugin interface (object with init functions).
   */ _bindPluginDependencies(name, plugin) {
        if (typeof plugin.initBind !== 'function') {
            return;
        }
        this._oc.setBindingState(BindingState.Plugin, name);
        plugin.initBind(ns, this._oc, this._config.bind, true, name);
        this._oc.setBindingState(BindingState.App);
    }
    /**
   * Initializes the routes.
   */ _initRoutes() {
        const router = this._oc.get(Router);
        this._config.initRoutes(ns, this._oc, this._config.routes, router);
    }
    /**
   * Initializes the basic application services.
   */ _initServices() {
        this._config.initServicesIma(ns, this._oc, this._config.services);
        this._config.plugins.filter(({ plugin })=>typeof plugin.initServices === 'function').forEach(({ plugin })=>{
            plugin.initServices(ns, this._oc, this._config.services, false);
        });
        this._config.initServicesApp(ns, this._oc, this._config.services);
    }
    /**
   * Service initialization for the dynamically loaded plugins.
   *
   * @param plugin Plugin interface (object with init functions).
   */ _initPluginServices(plugin) {
        if (typeof plugin.initServices !== 'function') {
            return;
        }
        plugin.initServices(ns, this._oc, this._config.services, true);
    }
}
ns.set('ns.ima.core.Bootstrap', Bootstrap);

//# sourceMappingURL=Bootstrap.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/cache/Cache.js
/**
 * The cache provides a temporary storage for expirable information. The
 * primary use of a cache is caching information obtained via costly means
 * (CPU-heavy computation or networking) to speed up the application's
 * performance when the same information needs to be retrieved multiple times.
 */ class Cache {
    /**
   * Clears the cache by deleting all entries.
   */ clear() {
        return;
    }
    /**
   * Tests whether the cache contains a fresh entry for the specified key. A
   * cache entry is fresh if the has not expired its TTL (time to live).
   *
   * The method always returns `false` if the cache is currently disabled.
   *
   * @param key The identifier of the cache entry.
   * @return `true` if the cache is enabled, the entry exists and has
   *         not expired yet.
   */ has(key) {
        return false;
    }
    /**
   * Returns the value of the entry identified by the specified key.
   *
   * The method returns `null` if the specified entry does not exist, has
   * already expired, or the cache is currently disabled.
   *
   * @param key The identifier of the cache entry.
   * @return The value of the specified cache entry, or `null` if the entry
   *         is not available.
   */ get(key) {
        return null;
    }
    /**
   * Sets the cache entry identified by the specified key to the provided
   * value. The entry is created if it does not exist yet.
   *
   * The method has no effect if the cache is currently disabled.
   *
   * @param key The identifier of the cache entry.
   * @param value The cache entry value.
   * @param ttl Cache entry time to live in milliseconds. The
   *        entry will expire after the specified amount of milliseconds. Use
   *        `null` or omit the parameter to use the default TTL of this cache.
   */ set(key, value, ttl) {
        return;
    }
    /**
   * Deletes the specified cache entry. The method has no effect if the entry
   * does not exist.
   *
   * @param key The identifier of the cache entry.
   */ delete(key) {
        return;
    }
    /**
   * Disables the cache, preventing the retrieval of any cached entries and
   * reporting all cache entries as non-existing. Disabling the cache does
   * not however prevent modifying the existing or creating new cache
   * entries.
   *
   * Disabling the cache also clears all of its current entries.
   *
   * The method has no effect if the cache is already disabled.
   */ disable() {
        return;
    }
    /**
   * Enables the cache, allowing the retrieval of cache entries.
   *
   * The method has no effect if the cache is already enabled.
   */ enable() {
        return;
    }
    /**
   * Exports the state of this cache to an HTML-safe JSON string. The data
   * obtained by parsing the result of this method are compatible with the
   * {@link Cache#deserialize} method.
   *
   * @return A JSON string containing an object representing of the
   *         current state of this cache.
   */ serialize() {
        return '';
    }
    /**
   * Loads the provided serialized cache data into this cache. Entries
   * present in this cache but not specified in the provided data will remain
   * in this cache intact.
   *
   * @param serializedData An
   *        object representing the state of the cache to load, obtained by
   *        parsing the JSON string returned by the {@link Cache#serialize}
   *        method.
   */ deserialize(serializedData) {
        return;
    }
}

//# sourceMappingURL=Cache.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/cache/CacheEntry.js
/**
 * The cache entry is a typed container of cache data used to track the
 * creation and expiration of cache entries.
 */ class CacheEntry {
    /**
   * Cache entry value.
   */ _value;
    /**
   * The time to live in milliseconds. The cache entry is considered
   * expired after this time.
   */ _ttl;
    /**
   * The timestamp of creation of this cache entry.
   */ _created = Date.now();
    /**
   * Initializes the cache entry.
   *
   * @param value The cache entry value.
   * @param ttl The time to live in milliseconds.
   */ constructor(value, ttl){
        this._value = value;
        this._ttl = ttl;
    }
    /**
   * Returns `true` if this entry has expired.
   *
   * @return `true` if this entry has expired.
   */ isExpired() {
        const now = Date.now();
        return now > this._created + this._ttl;
    }
    /**
   * Exports this cache entry into a JSON-serializable object.
   *
   * This entry exported to a
   *         JSON-serializable object.
   */ serialize() {
        return {
            value: this._value,
            ttl: this._ttl
        };
    }
    /**
   * Returns the entry value.
   */ getValue() {
        return this._value;
    }
}

//# sourceMappingURL=CacheEntry.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/cache/CacheFactory.js

/**
 * Factory for creating instances of {@link CacheEntry}.
 */ class CacheFactory {
    static get $dependencies() {
        return [];
    }
    /**
   * Create a new instance of {@link CacheEntry} with value and ttl.
   *
   * @param value The cache entry value.
   * @param ttl Cache entry time to live in milliseconds. The
   *        entry will expire after the specified amount of milliseconds.
   * @param created Cache entry created time in milliseconds.
   * @return The created cache entry.
   */ createCacheEntry(value, ttl) {
        return new CacheEntry(value, ttl);
    }
}

//# sourceMappingURL=CacheFactory.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/cache/CacheImpl.js


/**
 * Configurable generic implementation of the {@link Cache} interface.
 *
 * @example
 * if (cache.has('model.articles')) {
 *   return cache.get('model.articles');
 * } else {
 *   let articles = getArticlesFromStorage();
 *   // cache for an hour
 *   cache.set('model.articles', articles, 60 * 60 * 1000);
 * }
 */ class CacheImpl extends Cache {
    _cache;
    _factory;
    _Helper;
    _ttl;
    _enabled;
    /**
   * Initializes the cache.
   *
   * @param cacheStorage The cache entry storage to use.
   * @param factory Which create new instance of cache entry.
   * @param Helper The IMA.js helper methods.
   * @param config The cache configuration.
   */ constructor(cacheStorage, factory, Helper, { ttl = 30000, enabled = false }){
        super();
        this._cache = cacheStorage;
        this._factory = factory;
        /**
     * Tha IMA.js helper methods.
     */ this._Helper = Helper;
        /**
     * Default cache entry time to live in milliseconds.
     */ this._ttl = ttl;
        /**
     * Flag signalling whether the cache is currently enabled.
     */ this._enabled = enabled;
    }
    /**
   * @inheritDoc
   */ clear() {
        this._cache.clear();
    }
    /**
   * @inheritDoc
   */ has(key) {
        if (!this._enabled || !this._cache.has(key)) {
            return false;
        }
        const cacheEntry = this._cache.get(key);
        if (cacheEntry && !cacheEntry.isExpired()) {
            return true;
        }
        this.delete(key);
        return false;
    }
    /**
   * @inheritDoc
   */ get(key) {
        if (this.has(key)) {
            const cacheEntryItem = this._cache.get(key);
            const value = cacheEntryItem.getValue();
            return this._clone(value);
        }
        return null;
    }
    /**
   * @inheritDoc
   */ set(key, value, ttl = 0) {
        if (!this._enabled) {
            return;
        }
        const cacheEntry = this._factory.createCacheEntry(this._clone(value), ttl || this._ttl);
        this._cache.set(key, cacheEntry);
    }
    /**
   * @inheritDoc
   */ delete(key) {
        this._cache.delete(key);
    }
    /**
   * @inheritDoc
   */ disable() {
        this._enabled = false;
        this.clear();
    }
    /**
   * @inheritDoc
   */ enable() {
        this._enabled = true;
    }
    /**
   * @inheritDoc
   */ serialize() {
        const dataToSerialize = {};
        for (const key of this._cache.keys()){
            const currentValue = this._cache.get(key);
            if (currentValue instanceof CacheEntry) {
                const serializeEntry = currentValue.serialize();
                if (serializeEntry.ttl === Infinity) {
                    serializeEntry.ttl = 'Infinity';
                }
                if ($Debug) {
                    if (!this._canSerializeValue(serializeEntry.value)) {
                        throw new Error(`ima.core.cache.CacheImpl:serialize An ` + `attempt to serialize ` + `${serializeEntry.toString()}, stored ` + `using the key ${key}, was made, but the value ` + `cannot be serialized. Remove this entry from ` + `the cache or change its type so that can be ` + `serialized using JSON.stringify().`);
                    }
                }
                dataToSerialize[key] = serializeEntry;
            }
        }
        return JSON.stringify(dataToSerialize).replace(/<\/script/gi, '<\\/script');
    }
    /**
   * @inheritDoc
   */ deserialize(serializedData) {
        for (const key of Object.keys(serializedData)){
            const cacheEntryItem = serializedData[key];
            if (cacheEntryItem.ttl === 'Infinity') {
                cacheEntryItem.ttl = Infinity;
            }
            this.set(key, cacheEntryItem.value, cacheEntryItem.ttl);
        }
    }
    /**
   * Tests whether the provided value can be serialized into JSON.
   *
   * @param value The value to test whether or not it can be serialized.
   * @return `true` if the provided value can be serialized into JSON,
   *         `false` otherwise.
   */ _canSerializeValue(value) {
        if (value instanceof Date || value instanceof RegExp || value instanceof Promise || typeof value === 'function') {
            console.warn('The provided value is not serializable: ', value);
            return false;
        }
        if (!value) {
            return true;
        }
        if (value.constructor === Array) {
            for (const element of value){
                if (!this._canSerializeValue(element)) {
                    console.warn('The provided array is not serializable: ', value);
                    return false;
                }
            }
        }
        if (typeof value === 'object') {
            for (const propertyName of Object.keys(value)){
                if (!this._canSerializeValue(value[propertyName])) {
                    console.warn('The provided object is not serializable due to the ' + 'following property: ', propertyName, value);
                    return false;
                }
            }
        }
        return true;
    }
    /**
   * Attempts to clone the provided value, if possible. Values that cannot be
   * cloned (e.g. promises) will be simply returned.
   *
   * @param value The value to clone.
   * @return The created clone, or the provided value if the value cannot be
   *         cloned.
   */ _clone(value) {
        if (value !== null && typeof value === 'object' && !(value instanceof Promise)) {
            return this._Helper.clone(value);
        }
        return value;
    }
}

//# sourceMappingURL=CacheImpl.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/controller/Controller.js

/**
 * Interface defining the common API of page controllers. A page controller is
 * used to manage the overall state and view of a single application page, and
 * updates the page state according to the events submitted to it by components
 * on the page (or other input).
 */ class Controller {
    static $name;
    static $dependencies;
    static $extensions;
    /**
   * Callback for initializing the controller after the route parameters have
   * been set on this controller.
   */ init() {
        return;
    }
    /**
   * Finalization callback, called when the controller is being discarded by
   * the application. This usually happens when the user navigates to a
   * different URL.
   *
   * This method is the lifecycle counterpart of the {@link Controller#init}
   * method.
   *
   * The controller should release all resources obtained in the
   * {@link Controller#init} method. The controller must release any resources
   * that might not be released automatically when the controller's instance
   * is destroyed by the garbage collector.
   */ destroy() {
        return;
    }
    /**
   * Callback for activating the controller in the UI. This is the last
   * method invoked during controller initialization, called after all the
   * promises returned from the {@link Controller#load} method have been
   * resolved and the controller has configured the meta manager.
   *
   * The controller may register any React and DOM event listeners in this
   * method. The controller may start receiving event bus event after this
   * method completes.
   */ activate() {
        return;
    }
    /**
   * Callback for deactivating the controller in the UI. This is the first
   * method invoked during controller deinitialization. This usually happens
   * when the user navigates to a different URL.
   *
   * This method is the lifecycle counterpart of the
   * {@link Controller#activate} method.
   *
   * The controller should deregister listeners registered and release all
   * resources obtained in the {@link Controller#activate} method.
   */ deactivate() {
        return;
    }
    /**
   * Callback the controller uses to request the resources it needs to render
   * its view. This method is invoked after the {@link Controller#init}
   * method.
   *
   * The controller should request all resources it needs in this method, and
   * represent each resource request as a promise that will resolve once the
   * resource is ready for use (these can be data fetched over HTTP(S),
   * database connections, etc).
   *
   * The method must return a plain flat object. The field names of the
   * object identify the resources being fetched and prepared, each value
   * must be either the resource (e.g. view configuration or a value
   * retrieved synchronously) or a Promise that will resolve to the resource.
   *
   * The IMA will use the object to set the state of the controller.
   *
   * If at the server side, the IMA will wait for all the promises to
   * resolve, replaces the promises with the resolved values and sets the
   * resulting object as the controller's state.
   *
   * If at the client side, the IMA will first set the controller's state to
   * an object containing only the fields of the returned object that were
   * not promises. IMA will then update the controller's state every time a
   * promise of the returned object resolves. IMA will update the state by
   * adding the resolved resource to the controller's state.
   *
   * Any returned promise that gets rejected will redirect the application to
   * the error page. The error page that will be used depends on the status
   * code of the error.
   *
   * @return A map object of promises resolved when all resources the controller
   *         requires are ready. The resolved values will be pushed to the
   *         controller's state.
   */ load() {
        return {};
    }
    /**
   * Callback for updating the controller after a route update. This method
   * is invoked if the current route has the `onlyUpdate` flag set to `true` and
   * the current controller and view match those used by the previously active
   * route, or, the `onlyUpdate` option of the current route is a callback and
   * returned `true`.
   *
   * The method must return an object with the same semantics as the result
   * of the {@link Controller#load} method. The controller's state will only
   * be patched by the returned object instead of replacing it completely.
   *
   * The other controller lifecycle callbacks ({@link Controller#init},
   * {@link Controller#load}, {@link Controller#activate},
   * {@link Controller#deactivate}, {@link Controller#deinit}) are not call
   * in case this method is used.
   *
   * @param prevParams Previous route
   *         parameters.
   * @return A map object of promises resolved when all resources the controller
   *         requires are ready. The resolved values will be pushed to the
   *         controller's state.
   */ update(prevParams = {}) {
        return {};
    }
    /**
   * Patches the state of this controller using the provided object by
   * copying the provided patch object fields to the controller's state
   * object.
   *
   * You can use this method to modify the state partially or add new fields
   * to the state object.
   *
   * Note that the state is not patched recursively but by replacing the
   * values of the top-level fields of the state object.
   *
   * Once the promises returned by the {@link Controller#load} method are
   * resolved, this method is called with the an object containing the
   * resolved values. The field names of the passed object will match the
   * field names in the object returned from the {@link Controller#load}
   * method.
   *
   * @param statePatch Patch of the controller's state to
   *        apply.
   */ setState(statePatch) {
        return;
    }
    /**
   * Returns the controller's current state.
   *
   * @return The current state of this controller.
   */ getState() {
        return {};
    }
    /**
   * Starts queueing state patches off the controller state. While the transaction
   * is active every `setState` call has no effect on the current state.
   *
   * Note that call to `getState` after the transaction has begun will
   * return state as it was before the transaction.
   */ beginStateTransaction() {
        return;
    }
    /**
   * Applies queued state patches to the controller state. All patches are squashed
   * and applied with one `setState` call.
   */ commitStateTransaction() {
        return;
    }
    /**
   * Cancels ongoing state transaction. Uncommitted state changes are lost.
   */ cancelStateTransaction() {
        return;
    }
    /**
   * Adds the provided extension to this controller. All extensions should be
   * added to the controller before the {@link Controller#init} method is
   * invoked.
   */ addExtension(extension, extensionInstance) {
        return;
    }
    /**
   * Returns extension instance defined by it's class constructor
   * from controller's extension intance map.
   */ getExtension(extension) {
        throw new GenericError('The ima.core.controller.Controller.getExtension method is abstract ' + 'and must be overridden.');
    }
    /**
   * Returns the controller's extensions.
   *
   * @return {Extension[]} The extensions added to this controller.
   */ getExtensions() {
        return [];
    }
    /**
   * Callback used to configure the meta attribute manager. The method is
   * called after the the controller's state has been patched with the all
   * loaded resources and the view has been rendered.
   *
   * @param loadedResources A plain object representing a
   *        map of resource names to resources loaded by the
   *        {@link Controller#load} method. This is the same object as the one
   *        passed to the {@link Controller#setState} method.
   * @param metaManager Meta attributes manager to configure.
   * @param router The current application router.
   * @param dictionary The current localization dictionary.
   * @param settings The application settings for the
   *        current application environment.
   */ setMetaParams(loadedResources, metaManager, router, dictionary, settings) {
        return;
    }
    /**
   * Sets the current route parameters. This method is invoked before the
   * {@link Controller#init} method.
   *
   * @param params The current route parameters.
   */ setRouteParams(params = {}) {
        return;
    }
    /**
   * Returns the current route parameters.
   *
   * @return The current route parameters.
   */ getRouteParams() {
        return {};
    }
    /**
   * Sets the page state manager. The page state manager manages the
   * controller's state. The state manager can be set to `null` if this
   * controller loses the right to modify the state of the current page (e.g.
   * the user has navigated to a different route using a different
   * controller).
   *
   * @param pageStateManager The current state manager to
   *        use.
   */ setPageStateManager(pageStateManager) {
        return;
    }
    /**
   * Returns the HTTP status code to send to the client, should the
   * controller be used at the server-side.
   *
   * @return The HTTP status code to send to the client.
   */ getHttpStatus() {
        return 200;
    }
}

//# sourceMappingURL=Controller.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/controller/ControllerDecorator.js

/**
 * Decorator for page controllers. The decorator manages references to the meta
 * attributes manager and other utilities so these can be easily provided to
 * the decorated page controller when needed.
 */ class ControllerDecorator extends Controller {
    /**
   * The controller being decorated.
   */ _controller;
    /**
   * The meta page attributes manager.
   */ _metaManager;
    /**
   * The application router.
   */ _router;
    /**
   * Localization phrases dictionary.
   */ _dictionary;
    /**
   * Application settings for the current application environment.
   */ _settings;
    /**
   * Initializes the controller decorator.
   *
   * @param controller The controller being decorated.
   * @param metaManager The meta page attributes manager.
   * @param router The application router.
   * @param dictionary Localization phrases dictionary.
   * @param settings  Application settings for the
   *        current application environment.
   */ constructor(controller, metaManager, router, dictionary, settings){
        super();
        this._controller = controller;
        this._metaManager = metaManager;
        this._router = router;
        this._dictionary = dictionary;
        this._settings = settings;
    }
    /**
   * @inheritDoc
   */ init() {
        this._controller.init();
    }
    /**
   * @inheritDoc
   */ destroy() {
        this._controller.destroy();
    }
    /**
   * @inheritDoc
   */ activate() {
        this._controller.activate();
    }
    /**
   * @inheritDoc
   */ deactivate() {
        this._controller.deactivate();
    }
    /**
   * @inheritDoc
   */ load() {
        return this._controller.load();
    }
    /**
   * @inheritDoc
   */ update(prevParams = {}) {
        return this._controller.update(prevParams);
    }
    /**
   * @inheritDoc
   */ setState(statePatch) {
        this._controller.setState(statePatch);
    }
    /**
   * @inheritDoc
   */ getState() {
        return this._controller.getState();
    }
    /**
   * @inheritDoc
   */ beginStateTransaction() {
        this._controller.beginStateTransaction();
    }
    /**
   * @inheritDoc
   */ commitStateTransaction() {
        this._controller.commitStateTransaction();
    }
    /**
   * @inheritDoc
   */ cancelStateTransaction() {
        this._controller.cancelStateTransaction();
    }
    /**
   * @inheritDoc
   */ addExtension(extension, extensionInstance) {
        this._controller.addExtension(extension, extensionInstance);
    }
    /**
   * @inheritDoc
   */ getExtension(extension) {
        return this._controller.get(extension);
    }
    /**
   * @inheritDoc
   */ getExtensions() {
        return this._controller.getExtensions();
    }
    /**
   * @inheritDoc
   */ setMetaParams(loadedResources) {
        this._controller.setMetaParams(loadedResources, this._metaManager, this._router, this._dictionary, this._settings);
    }
    /**
   * @inheritDoc
   */ setRouteParams(params = {}) {
        this._controller.setRouteParams(params);
    }
    /**
   * @inheritDoc
   */ getRouteParams() {
        return this._controller.getRouteParams();
    }
    /**
   * @inheritDoc
   */ setPageStateManager(pageStateManager) {
        this._controller.setPageStateManager(pageStateManager);
    }
    /**
   * @inheritDoc
   */ getHttpStatus() {
        return this._controller.getHttpStatus();
    }
    /**
   * Returns the meta attributes manager configured by the decorated
   * controller.
   *
   * @return The Meta attributes manager configured by the
   *         decorated controller.
   */ getMetaManager() {
        return this._metaManager;
    }
}

//# sourceMappingURL=ControllerDecorator.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/dictionary/Dictionary.js
/**
 * The Dictionary is a manager and preprocessor of localization phrases for a
 * single language. The format of the localization phrases depends on the
 * implementation of this interface.
 */ class Dictionary {
    /**
   * Initializes this dictionary with the provided language and localization
   * phrases.
   *
   * @param config The dictionary configuration.
   * @param config.$Language The language property is an ISO 639-1
   *        language code specifying the language of the provided phrases.
   * @param config.dictionary The dictionary property contains the
   *        localization phrases organized in an implementation-specific way.
   */ init(config) {
        return;
    }
    /**
   * Returns the ISO 639-1 language code of the language this dictionary was
   * initialized with.
   *
   * @return The language code representing the language of the
   *         localization phrases in this dictionary.
   */ getLanguage() {
        return '';
    }
    /**
   * Retrieves the localization phrase identified by the specified key,
   * evaluates the phrase's placeholder expressions using the provided
   * parameters and returns the result.
   *
   * @param key The key identifying the localization phrase.
   * @param parameters The
   *        map of parameter names to the parameter values to use.
   *        Defaults to an empty plain object.
   * @return The specified localization phrase with its placeholders
   *         evaluated using the provided parameters.
   */ get(key, parameters) {
        return '';
    }
    /**
   * Tests whether the specified localization phrase exists in the
   * dictionary.
   *
   * @param key The key identifying the localization phrase.
   * @return`true` if the key exists and denotes a single
   *         localization phrase, otherwise `false`.
   */ has(key) {
        return false;
    }
}

//# sourceMappingURL=Dictionary.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/dictionary/MessageFormatDictionary.js


/**
 * Implementation of the {@link Dictionary} interface that relies on
 * compiled MessageFormat localization messages for its dictionary.
 *
 * @extends Dictionary
 */ class MessageFormatDictionary extends Dictionary {
    _language;
    _dictionary;
    static get $dependencies() {
        return [];
    }
    /**
   * Initializes the dictionary.
   *
   * @example
   * dictionary.get('home.hello', {GENDER: 'UNSPECIFIED'});
   */ constructor(){
        super();
        /**
     * The language of the phrases in the dictionary, represented as a
     * ISO 639-1 language code.
     */ this._language = '';
        /**
     * Stored dictionary.
     */ this._dictionary = {};
    }
    /**
   * Initializes this dictionary with the provided language and localization
   * phrases.
   *
   * @param config The dictionary configuration.
   * @param config.$Language The language property is an ISO 639-1
   *        language code specifying the language of the provided phrases.
   * @param config.dictionary
   *        The dictionary field contains the localization phrases organized
   *        in a deep plain object map. The top-level key is the name of the
   *        phrase group, the bottom-level key is the phrase key. The
   *        bottom-level value is the localization phrase generator that
   *        takes the phrase placeholder values map as an argument and
   *        produces the localization phrase with its placeholders evaluated
   *        using the provided placeholder values.
   */ init(config) {
        this._language = config.$Language;
        this._dictionary = config.dictionary;
    }
    /**
   * @inheritDoc
   */ getLanguage() {
        return this._language;
    }
    /**
   * Retrieves the localization phrase identified by the specified key,
   * evaluates the phrase's placeholder expressions using the provided
   * parameters and returns the result.
   *
   * @param key The key identifying the localization phrase. The key
   *        consists of at least two parts separated by dots. The first part
   *        denotes the name of the source JSON localization file, while the
   *        rest denote a field path within the localization object within
   *        the given localization file.
   * @param parameters The
   *        map of parameter names to the parameter values to use.
   *        Defaults to an empty plain object.
   * @return The specified localization phrase with its placeholders
   *         evaluated using the provided parameters.
   */ get(key, parameters) {
        const scope = this._getScope(key);
        if (!scope) {
            throw new GenericError(`ima.core.dictionary.MessageFormatDictionary.get: The ` + `localization phrase '${key}' does not exists`, {
                key,
                parameters,
                dictionary: this._dictionary
            });
        }
        return scope(parameters ?? {});
    }
    /**
   * Tests whether the specified localization phrase exists in the
   * dictionary.
   *
   * @param key The key identifying the localization phrase. The key
   *        consists of at least two parts separated by dots. The first part
   *        denotes the name of the source JSON localization file, while the
   *        rest denote a field path within the localization object within
   *        the given localization file.
   * @return `true` if the key exists and denotes a single
   *                   localization phrase, otherwise `false`.
   */ has(key) {
        if (!/^[^.]+(\.[^.]+)+$/.test(key)) {
            throw new Error(`The provided key (${key}) is not a valid localization ` + `phrase key, expecting a "file_name.identifier" notation`);
        }
        return !!this._getScope(key);
    }
    /**
   * Retrieves the localization scope denoted by the provided partial key.
   * This may be either an object representing a sub-group of location phrase
   * generators, or a single generator if the provided keys denotes a single
   * localization phrase
   *
   * @private
   * @param key The key identifying the localization phrase. The key
   *        consists of at least two parts separated by dots. The first part
   *        denotes the name of the source JSON localization file, while the
   *        rest denote a field path within the localization object within
   *        the given localization file.
   * @return The requested localization scope, or `null` if the specified
   *         scope does not exist.
   */ _getScope(key) {
        const path = key.split('.');
        let scope = this._dictionary;
        for (const scopeKey of path){
            if (!scope[scopeKey]) {
                return null;
            }
            scope = scope[scopeKey];
        }
        return scope;
    }
}

//# sourceMappingURL=MessageFormatDictionary.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/event/Dispatcher.js
/**
 * A Dispatcher is a utility that manager event listeners registered for events
 * and allows distributing (firing) events to the listeners registered for the
 * given event.
 *
 * The dispatcher provides a single-node event bus and is usually used to
 * propagate events from controllers to UI components when modifying/passing
 * the state is impractical for any reason.
 */ class Dispatcher {
    /**
   * Deregisters all event listeners currently registered with this
   * dispatcher.
   */ clear() {
        return this;
    }
    listen(event, listener, scope) {
        return this;
    }
    unlisten(event, listener, scope) {
        return this;
    }
    fire(event, data, imaInternalEvent) {
        return this;
    }
}

//# sourceMappingURL=Dispatcher.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/event/DispatcherImpl.js


/**
 * An empty immutable map of event listener to scopes, used for a mismatch in
 * the {@link _eventListeners} map.
 */ const EMPTY_MAP = Object.freeze(new Map());
/**
 * An empty immutable set of event listener scopes, used for a mismatch in the
 * {@link _eventListeners} map.
 */ const EMPTY_SET = Object.freeze(new Set());
/**
 * Default implementation of the {@link Dispatcher} interface.
 */ class DispatcherImpl extends Dispatcher {
    _eventListeners;
    static $dependencies = [];
    /**
   * Initializes the dispatcher.
   */ constructor(){
        super();
        /**
     * Map of event names to a map of event listeners to a set of scopes to
     * which the event listener should be bound when being executed due to
     * the event.
     */ this._eventListeners = new Map();
    }
    /**
   * @inheritDoc
   */ clear() {
        this._eventListeners.clear();
        return this;
    }
    /**
   * @inheritDoc
   */ listen(event, listener, scope) {
        if ($Debug) {
            if (typeof listener !== 'function') {
                throw new GenericError(`The listener must be a function, ${listener} provided.`);
            }
        }
        if (!this._eventListeners.has(event)) {
            this._createNewEvent(event);
        }
        const listeners = this._getListenersOf(event);
        if (!listeners.has(listener)) {
            this._createNewListener(event, listener);
        }
        this._getScopesOf(event, listener).add(scope);
        return this;
    }
    /**
   * @inheritDoc
   */ unlisten(event, listener, scope) {
        const scopes = this._getScopesOf(event, listener);
        if ($Debug) {
            if (!scopes.has(scope)) {
                console.warn('ima.core.event.DispatcherImpl.unlisten(): the provided ' + `listener '${listener}' is not registered for the ` + `specified event '${event}' and scope '${scope}'. Check ` + `your workflow.`, {
                    event: event,
                    listener: listener,
                    scope: scope
                });
            }
        }
        scopes.delete(scope);
        if (!scopes.size) {
            const listeners = this._getListenersOf(event);
            listeners.delete(listener);
            if (!listeners.size) {
                this._eventListeners.delete(event);
            }
        }
        return this;
    }
    /**
   * @inheritDoc
   */ fire(event, data, imaInternalEvent = false) {
        const listeners = this._getListenersOf(event);
        if (!listeners?.size && !imaInternalEvent) {
            console.warn(`There are no event listeners registered for the ${event} ` + `event`, {
                event: event,
                data: data
            });
        }
        for (const [listener, scopes] of listeners){
            for (const scope of scopes){
                listener.bind(scope)(data);
            }
        }
        return this;
    }
    /**
   * Create new Map storage of listeners for the specified event.
   *
   * @param event The name of the event.
   */ _createNewEvent(event) {
        const listeners = new Map();
        this._eventListeners.set(event, listeners);
    }
    /**
   * Create new Set storage of scopes for the specified event and listener.
   *
   * @param event The name of the event.
   * @param listener The event listener.
   */ _createNewListener(event, listener) {
        const scopes = new Set();
        const listeners = this._eventListeners.get(event);
        if (listeners) {
            listeners.set(listener, scopes);
        }
    }
    /**
   * Retrieves the scopes in which the specified event listener should be
   * executed for the specified event.
   *
   * @param event The name of the event.
   * @param listener The event listener.
   * @return The scopes in which the specified listeners
   *         should be executed in case of the specified event. The returned
   *         set is an unmodifiable empty set if no listeners are registered
   *         for the event.
   */ _getScopesOf(event, listener) {
        const listenersToScopes = this._getListenersOf(event);
        if (listenersToScopes.has(listener)) {
            return listenersToScopes.get(listener);
        }
        return EMPTY_SET;
    }
    /**
   * Retrieves the map of event listeners to scopes they are bound to.
   *
   * @param event The name of the event.
   * @return A map of event listeners to the
   *         scopes in which they should be executed. The returned map is an
   *         unmodifiable empty map if no listeners are registered for the
   *         event.
   */ _getListenersOf(event) {
        if (this._eventListeners.has(event)) {
            return this._eventListeners.get(event);
        }
        return EMPTY_MAP;
    }
}

//# sourceMappingURL=DispatcherImpl.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/event/EventBus.js
/**
 * Utility for sending and intercepting wrapped custom DOM events on the DOM or
 * propagating them to the current controller.
 *
 * As with native events, the event fired by this event bus always propagate up
 * the DOM tree until they reach the window.
 *
 * Note that the events fired by this event bus are wrapped in custom DOM
 * events which always bear an obscure name set by the implementation of this
 * interface, preventing custom event name collisions, and allowing observation
 * and capture of all fired events. The actual event name is always consistent
 * by the implementation.
 */ class EventBus {
    /**
   * Fires a new custom event of the specified name, carrying the provided
   * data.
   *
   * Note that this method does not prevent the event listeners to modify the
   * data in any way. The order in which the event listeners will be executed
   * is unspecified and should not be relied upon.
   *
   * Note that the default options are
   * `{ bubbles: true, cancelable: true }`, which is different from the
   * default values used in the native custom events
   * (`{ bubbles: false, cancelable: false }`).
   *
   * @param eventTarget The event target at which the event
   *        will be  dispatched (e.g. element/document/window).
   * @param eventName The name of the event to fire.
   * @param data The data to pass to the event listeners.
   * @param options The
   *        override of the default options passed to the constructor of the
   *        custom event fired by this event bus.
   *        The default options passed to the custom event constructor are
   *        `{ bubbles: true, cancelable: true }`.
   * @return This custom event bus.
   * @throws Thrown if the provided event target cannot be used to
   *         fire the event.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/Event
   */ fire(eventTarget, eventName, data, options) {
        return this;
    }
    /**
   * Registers the provided event listener to be executed when any custom
   * event is fired using the same implementation of the event bus and passes
   * through the specified event target.
   *
   * When the specified event is fired, the event listener will be executed
   * with the event passed as the first argument.
   *
   * The order in which the event listeners will be executed is unspecified
   * and should not be relied upon.
   *
   * @param eventTarget The event target at which the listener
   *        should listen for all event bus events.
   * @param listener The event listener to
   *        register.
   * @return This event bus.
   */ listenAll(eventTarget, listener) {
        return this;
    }
    /**
   * Registers the provided event listener to be executed when the specific
   * custom event is fired by the same implementation of the event bus and
   * passes through the specified event target.
   *
   * When the specified event is fired, the event listener will be executed
   * with the event passed as the first argument.
   *
   * The order in which the event listeners will be executed is unspecified
   * and should not be relied upon.
   *
   * @param eventTarget The event target at which the listener
   *        should listen for the specified event.
   * @param eventName The name of the event to listen for.
   * @param listener The event listener to
   *        register.
   * @return This event bus.
   */ listen(eventTarget, eventName, listener) {
        return this;
    }
    /**
   * Removes the provided event listener from the set of event listeners
   * executed when the any custom event fired by the same implementation
   * passes through the specified event target.
   *
   * The method has no effect if the listener is not registered at the
   * specified event target.
   *
   * @param eventTarget The event target at which the event
   *        listener listens for events.
   * @param listener The event listener to
   *        deregister.
   * @return This event bus.
   */ unlistenAll(eventTarget, listener) {
        return this;
    }
    /**
   * Removes the provided event listener from the set of event listeners
   * executed when the specified custom event fired by the same
   * implementation passes through the specified event target.
   *
   * The method has no effect if the listener is not registered for the
   * specified event at the specified event target.
   *
   * @param eventTarget The event target at which the listener
   *        is listening for the event.
   * @param eventName The name of the event listened for.
   * @param listener The event listener to
   *        deregister.
   * @return This event bus.
   */ unlisten(eventTarget, eventName, listener) {
        return this;
    }
}

//# sourceMappingURL=EventBus.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/window/Window.js
// eslint-disable-next-line @typescript-eslint/no-empty-interface
/**
 * The {@link Window} interface defines various utility API for easier
 * cross-environment usage of various low-level client-side JavaScript APIs
 * available through various global objects.
 */ class Window {
    /**
   * @return `true` if invoked at the client side.
   */ isClient() {
        return false;
    }
    /**
   * Returns `true` if the cookies are set and processed with every
   * HTTP request and response automatically by the environment.
   *
   * @return `true` if cookies are handled automatically by
   *         the environment.
   */ isCookieEnabled() {
        return false;
    }
    /**
   * Returns `true` if the session storage is supported.
   *
   * @return `true` if the session storage is supported.
   */ hasSessionStorage() {
        return false;
    }
    /**
   * Sets the new page title of the document.
   *
   * @param title The new page title.
   */ setTitle(title) {
        return;
    }
    /**
   * Returns the native `window` object representing the global context
   * at the client-side. The method returns `undefined` if used at the
   * server-side.
   *
   * @return The `window` object at the
   *         client-side, or `undefined` at the server-side.
   */ getWindow() {
        return;
    }
    /**
   * Returns the native `document` object representing any web page loaded
   * in the browser and serves as an entry point into the web page's content
   * which is the DOM tree at the client-side. The method returns `undefined`
   * if used at the server-side.
   *
   * @return The `document` object at the
   *         client-side, or `undefined` at the server-side.
   */ getDocument() {
        return;
    }
    /**
   * Returns the number of pixels the viewport is scrolled horizontally.
   *
   * @return The number of pixels the viewport is scrolled
   *         horizontally.
   */ getScrollX() {
        return 0;
    }
    /**
   * Returns the number of pixels the document is scrolled vertically.
   *
   * @return The number of pixels the document is scrolled
   *         vertically.
   */ getScrollY() {
        return 0;
    }
    /**
   * Scrolls the viewport to the specified location (if possible).
   *
   * @param x Horizontal scroll offset in pixels.
   * @param y Vertical scroll offset in pixels.
   */ scrollTo(x, y) {
        return;
    }
    /**
   * Returns the domain of the current document's URL as
   * ``${protocol}://${host}``.
   *
   * @return The current domain.
   */ getDomain() {
        return '';
    }
    /**
   * @return The current host.
   */ getHost() {
        return '';
    }
    /**
   * Returns the path part of the current URL, including the query string.
   *
   * @return The path and query string parts of the current URL.
   */ getPath() {
        return '';
    }
    /**
   * @return The current document's URL.
   */ getUrl() {
        return '';
    }
    /**
   * Returns the document's body element. The method returns
   * `undefined` if invoked at the server-side.
   *
   * @return The document's body element, or
   *         `undefined` if invoked at the server side.
   */ getBody() {
        return;
    }
    /**
   * Returns the HTML element with the specified `id` attribute value.
   *
   * @param id The value of the `id` attribute to look for.
   * @return The element with the specified id, or
   *         `null` if no such element exists.
   */ getElementById(id) {
        return null;
    }
    /**
   * Returns the history state.
   *
   * @return The current history state
   */ getHistoryState() {
        return {};
    }
    /**
   * Returns the first element matching the specified CSS 3 selector.
   *
   * @param selector The CSS selector.
   * @return The first element matching the CSS selector or
   *         `null` if no such element exists.
   */ querySelector(selector) {
        return null;
    }
    /**
   * Returns a node list of all elements matching the specified CSS 3
   * selector.
   *
   * @param selector The CSS selector.
   * @return A node list containing all elements matching the
   *         specified CSS selector.
   */ querySelectorAll(selector) {
        return Object.create(NodeList);
    }
    /**
   * Performs a hard redirect (discarding the current JavaScript state) to
   * the specified URL.
   *
   * @param url The URL to which the browser will be redirected.
   */ redirect(url) {
        return;
    }
    /**
   * Pushes a new state to the browser history. The method has no effect if
   * the current browser does not support the history API (IE9).
   *
   * @param state A state object associated with the
   *        history item, preferably representing the page state.
   * @param title The page title related to the state. Note that
   *        this parameter is ignored by some browsers.
   * @param url The new URL at which the state is available.
   */ pushState(state, title, url) {
        return;
    }
    /**
   * Replaces the current history entry. The method has no effect if the
   * current browser does not support the history API (IE9).
   *
   * @param state A state object associated with the
   *        history item, preferably representing the page state.
   * @param title The page title related to the state. Note that
   *        this parameter is ignored by some browsers.
   * @param url The new URL at which the state is available.
   */ replaceState(state, title, url) {
        return;
    }
    /**
   * Create new instance of CustomEvent of the specified name and using the
   * provided options.
   *
   * @param name Custom event's name (sometimes referred to as the
   *        event's type).
   * @param options The custom event's options.
   * @return The created custom event.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
   */ createCustomEvent(name, options) {
        return new CustomEvent('');
    }
    bindEventListener() {
        return;
    }
    unbindEventListener() {
        return;
    }
}

//# sourceMappingURL=Window.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/event/EventBusImpl.js



/**
 * Global name of IMA.js custom event.
 */ const IMA_EVENT = '$IMA.CustomEvent';
/**
 * Helper for custom events.
 *
 * It offers public methods for firing custom events and two methods for
 * catching events (e.g. inside view components).
 */ class EventBusImpl extends EventBus {
    _window;
    /**
   * Map of listeners provided to the public API of this event bus to a
   * map of event targets to a map of event names to actual listeners
   * bound to the native API.
   *
   * The "listen all" event listeners are not registered in this map.
   */ _listeners = new WeakMap();
    /**
   * Map of event targets to listeners executed on all IMA.js event bus
   * events.
   */ _allListenersTargets = new WeakMap();
    static get $dependencies() {
        return [
            Window
        ];
    }
    /**
   * Initializes the custom event helper.
   *
   * @param window The IMA window helper.
   */ constructor(window){
        super();
        /**
     * The IMA window helper.
     */ this._window = window;
    }
    /**
   * @inheritDoc
   */ fire(eventTarget, eventName, data, options = {}) {
        const eventInitialization = {};
        const params = {
            detail: {
                eventName,
                data
            }
        };
        const defaultOptions = {
            bubbles: true,
            cancelable: true
        };
        Object.assign(eventInitialization, defaultOptions, options, params);
        const event = this._window.createCustomEvent(IMA_EVENT, eventInitialization);
        if (eventTarget && typeof eventTarget.dispatchEvent !== 'undefined') {
            eventTarget.dispatchEvent(event);
        } else {
            throw new GenericError(`ima.core.event.EventBusImpl.fire: The EventSource ` + `${eventTarget} is not defined or can not dispatch event ` + `'${eventName}' (data: ${data}).`, {
                eventTarget,
                eventName,
                data,
                eventInitialization
            });
        }
        return this;
    }
    /**
   * @inheritDoc
   */ listenAll(eventTarget, listener) {
        if (!this._allListenersTargets.has(eventTarget)) {
            this._allListenersTargets.set(eventTarget, new WeakMap());
        }
        const nativeListener = (event)=>{
            if (event.type === IMA_EVENT && event.detail && event.detail.eventName) {
                listener(event);
            }
        };
        this._allListenersTargets.get(eventTarget).set(listener, nativeListener);
        this._window.bindEventListener(eventTarget, IMA_EVENT, nativeListener);
        return this;
    }
    /**
   * @inheritDoc
   */ listen(eventTarget, eventName, listener) {
        if (!eventTarget) {
            if ($Debug) {
                console.warn(`The eventTarget is not defined for event '${eventName}'.`);
            }
            return this;
        }
        if (!this._listeners.has(listener)) {
            this._listeners.set(listener, new WeakMap());
        }
        const targetToEventName = this._listeners.get(listener);
        if (!targetToEventName.has(eventTarget)) {
            targetToEventName.set(eventTarget, new Map());
        }
        const eventNameToNativeListener = targetToEventName.get(eventTarget);
        const nativeListener = (event)=>{
            if (event.type === IMA_EVENT && event.detail && event.detail.eventName === eventName) {
                listener(event);
            }
        };
        eventNameToNativeListener.set(eventName, nativeListener);
        this._window.bindEventListener(eventTarget, IMA_EVENT, nativeListener);
        return this;
    }
    /**
   * @inheritDoc
   */ unlistenAll(eventTarget, listener) {
        if (!this._allListenersTargets.has(eventTarget)) {
            if ($Debug) {
                console.warn('The provided listener is not registered on the ' + 'specified event target');
            }
            return this;
        }
        const listeners = this._allListenersTargets.get(eventTarget);
        if (!listeners.has(listener)) {
            if ($Debug) {
                console.warn('The provided listener is not registered on the ' + 'specified event target');
            }
            return this;
        }
        const nativeListener = listeners.get(listener);
        this._window.unbindEventListener(eventTarget, IMA_EVENT, nativeListener);
        listeners.delete(listener);
        return this;
    }
    /**
   * @inheritDoc
   */ unlisten(eventTarget, eventName, listener) {
        if (!this._listeners.has(listener)) {
            if ($Debug) {
                console.warn('The provided listener is not bound to listen for the ' + 'specified event on the specified event target.');
            }
            return this;
        }
        const targets = this._listeners.get(listener);
        if (!targets.has(eventTarget)) {
            if ($Debug) {
                console.warn('The provided listener is not bound to listen for the ' + 'specified event on the specified event target.');
            }
            return this;
        }
        const eventNameToNativeListener = targets.get(eventTarget);
        if (!eventNameToNativeListener.has(eventName)) {
            if ($Debug) {
                console.warn('The provided listener is not bound to listen for the ' + 'specified event on the specified event target.');
            }
            return this;
        }
        const nativeListener = eventNameToNativeListener.get(eventName);
        this._window.unbindEventListener(eventTarget, IMA_EVENT, nativeListener);
        eventNameToNativeListener.delete(eventName);
        if (eventNameToNativeListener.size) {
            return this;
        }
        targets.delete(eventTarget);
        return this;
    }
}

//# sourceMappingURL=EventBusImpl.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/http/HttpAgent.js
/**
 * The {@link HttpAgent} defines unifying API for sending HTTP requests at
 * both client-side and server-side.
 */ class HttpAgent {
    /**
   * Sends an HTTP GET request to the specified URL, sending the provided
   * data as query parameters.
   *
   * @param url The URL to which the request should be made.
   * @param data The data to send
   *        to the server as query parameters.
   * @param options Optional request options.
   * @return A promise that resolves to the
   *         response.
   */ get(url, data, options) {
        return Promise.reject();
    }
    /**
   * Sends an HTTP POST request to the specified URL, sending the provided
   * data as the request body. If an object is provided as the request data,
   * the data will be JSON-encoded. Sending other primitive non-string values
   * as the request body is not supported.
   *
   * @param url The URL to which the request should be made.
   * @param data The data to send to the server
   *        as the request body.
   * @param options Optional request options.
   * @return A promise that resolves to the
   *         response.
   */ post(url, data, options) {
        return Promise.reject();
    }
    /**
   * Sends an HTTP PUT request to the specified URL, sending the provided
   * data as the request body. If an object is provided as the request data,
   * the data will be JSON-encoded. Sending other primitive non-string values
   * as the request body is not supported.
   *
   * @param url The URL to which the request should be made.
   * @param data The data to send to the server
   *        as the request body.
   * @param options Optional request options.
   * @return A promise that resolves to the
   *         response.
   */ put(url, data, options) {
        return Promise.reject();
    }
    /**
   * Sends an HTTP PATCH request to the specified URL, sending the provided
   * data as the request body. If an object is provided as the request data,
   * the data will be JSON-encoded. Sending other primitive non-string values
   * as the request body is not supported.
   *
   * @param url The URL to which the request should be made.
   * @param data The data to send to the server
   *        as the request body.
   * @param options Optional request options.
   * @return A promise that resolves to the
   *         response.
   */ patch(url, data, options) {
        return Promise.reject();
    }
    /**
   * Sends an HTTP DELETE request to the specified URL, sending the provided
   * data as the request body. If an object is provided as the request data,
   * the data will be JSON-encoded. Sending other primitive non-string values
   * as the request body is not supported.
   *
   * @param url The URL to which the request should be made.
   * @param data The data to send to the server
   *        as the request body.
   * @param options Optional request options.
   * @return A promise that resolves to the
   *         response.
   */ delete(url, data, options) {
        return Promise.reject();
    }
    /**
   * Generates a cache key to use for identifying a request to the specified
   * URL using the specified HTTP method, submitting the provided data.
   *
   * @param method The HTTP method used by the request.
   * @param url The URL to which the request is sent.
   * @param data The data associated with the
   *        request. These can be either the query parameters or request body
   *        data.
   * @return The key to use for identifying such a request in the
   *         cache.
   */ getCacheKey(method, url, data) {
        return '';
    }
    /**
   * Method invalidate cache for given params
   */ invalidateCache(method, url, data) {
        return;
    }
    /**
   * Sets the specified header to be sent with every subsequent HTTP request,
   * unless explicitly overridden by request options.
   *
   * @param header The name of the header.
   * @param value The header value. To provide multiple values,
   *        separate them with commas
   *        (see http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2).
   * @return This HTTP agent.
   */ setDefaultHeader(header, value) {
        return this;
    }
    /**
   * Clears all configured default headers.
   *
   * @return This HTTP agent.
   */ clearDefaultHeaders() {
        return this;
    }
}

//# sourceMappingURL=HttpAgent.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/http/HttpAgentImpl.js


/**
 * Implementation of the {@link HttpAgent} interface with internal caching
 * of completed and ongoing HTTP requests and cookie storage.
 */ class HttpAgentImpl extends HttpAgent {
    _proxy;
    _cache;
    _cookie;
    _cacheOptions;
    _defaultRequestOptions;
    _Helper;
    _internalCacheOfPromises = new Map();
    /**
   * Initializes the HTTP handler.
   *
   * @param proxy The low-level HTTP proxy for sending the HTTP
   *        requests.
   * @param cache Cache to use for caching ongoing and completed
   *        requests.
   * @param cookie The cookie storage to use internally.
   * @param Helper The IMA.js helper methods.
   * @param config Configuration of the HTTP handler for
   *        the current application environment, specifying the various
   *        default request option values and cache option values.
   * @example
   *      http
   *          .get('url', { data: data }, {
   *              ttl: 2000,
   *              repeatRequest: 1,
   *              withCredentials: true,
   *              timeout: 2000,
   *              accept: 'application/json',
   *              language: 'en'
   *          })
   *          .then((response) => {
   *              //resolve
   *          }
   *          .catch((error) => {
   *             //catch
   *          });
   * @example
   *      http
   *          .setDefaultHeader('Accept-Language', 'en')
   *          .clearDefaultHeaders();
   */ constructor(proxy, cache, cookie, config, Helper){
        super();
        /**
     * HTTP proxy, used to execute the HTTP requests.
     */ this._proxy = proxy;
        /**
     * Internal request cache, used to cache completed request results.
     */ this._cache = cache;
        /**
     * Cookie storage, used to keep track of cookies received from the
     * server and send them with the subsequent requests to the server.
     */ this._cookie = cookie;
        this._cacheOptions = config.cacheOptions;
        this._defaultRequestOptions = config.defaultRequestOptions;
        /**
     * Tha IMA.js helper methods.
     */ this._Helper = Helper;
    }
    /**
   * @inheritDoc
   */ get(url, data, options) {
        return this._requestWithCheckCache('get', url, data, options);
    }
    /**
   * @inheritDoc
   */ post(url, data, options) {
        return this._requestWithCheckCache('post', url, data, Object.assign({
            cache: false
        }, options));
    }
    /**
   * @inheritDoc
   */ put(url, data, options) {
        return this._requestWithCheckCache('put', url, data, Object.assign({
            cache: false
        }, options));
    }
    /**
   * @inheritDoc
   */ patch(url, data, options) {
        return this._requestWithCheckCache('patch', url, data, Object.assign({
            cache: false
        }, options));
    }
    /**
   * @inheritDoc
   */ delete(url, data, options) {
        return this._requestWithCheckCache('delete', url, data, Object.assign({
            cache: false
        }, options));
    }
    /**
   * @inheritDoc
   */ getCacheKey(method, url, data) {
        return this._cacheOptions.prefix + this._getCacheKeySuffix(method, url, data);
    }
    /**
   * @inheritDoc
   */ invalidateCache(method, url, data) {
        const cacheKey = this.getCacheKey(method, url, data);
        this._cache.delete(cacheKey);
    }
    /**
   * @inheritDoc
   */ setDefaultHeader(header, value) {
        this._proxy.setDefaultHeader(header, value);
        return this;
    }
    /**
   * @inheritDoc
   */ clearDefaultHeaders() {
        this._proxy.clearDefaultHeaders();
        return this;
    }
    /**
   * Attempts to clone the provided value, if possible. Values that cannot be
   * cloned (e.g. promises) will be simply returned.
   *
   * @param value The value to clone.
   * @return The created clone, or the provided value if the value cannot be
   *         cloned.
   */ _clone(value) {
        if (value !== null && typeof value === 'object' && !(value instanceof Promise)) {
            return this._Helper.clone(value);
        }
        return value;
    }
    /**
   * Check cache and if data isn’t available then make real request.
   *
   * @param method The HTTP method to use.
   * @param url The URL to which the request should be sent.
   * @param data The data to send with the request.
   * @param options Optional request options.
   * @return A promise that resolves to the response
   *         with body parsed as JSON.
   */ _requestWithCheckCache(method, url, data, options) {
        const optionsWithDefault = this._prepareOptions(options);
        if (optionsWithDefault.cache) {
            const cachedData = this._getCachedData(method, url, data);
            if (cachedData) {
                return cachedData;
            }
        }
        return this._request(method, url, data, optionsWithDefault);
    }
    /**
   * Tests whether an ongoing or completed HTTP request for the specified URL
   * and data is present in the internal cache and, if it is, the method
   * returns a promise that resolves to the response body parsed as JSON.
   *
   * The method returns `null` if no such request is present in the
   * cache.
   *
   * @param method The HTTP method used by the request.
   * @param url The URL to which the request was made.
   * @param data The data sent
   *        to the server with the request.
   * @return {?Promise<HttpAgent~Response>} A promise that will resolve to the
   *         server response with the body parsed as JSON, or `null` if
   *         no such request is present in the cache.
   */ _getCachedData(method, url, data) {
        const cacheKey = this.getCacheKey(method, url, data);
        if (this._internalCacheOfPromises.has(cacheKey)) {
            return this._internalCacheOfPromises.get(cacheKey).then((data)=>this._clone(data));
        }
        if (this._cache.has(cacheKey)) {
            const cacheData = this._cache.get(cacheKey);
            return Promise.resolve(cacheData);
        }
        return null;
    }
    /**
   * Sends a new HTTP request using the specified method to the specified
   * url. The request will carry the provided data as query parameters if the
   * HTTP method is GET, but the data will be sent as request body for any
   * other request method.
   *
   * @param method HTTP method to use.
   * @param url The URL to which the request is sent.
   * @param data The data sent
   *        with the request.
   * @param options Optional request options.
   * @return {Promise<HttpAgent~Response>} A promise that resolves to the response
   *         with the body parsed as JSON.
   */ _request(method, url, data, options) {
        const cacheKey = this.getCacheKey(method, url, data);
        const cachePromise = this._proxy.request(method, url, data, options).then((response)=>this._proxyResolved(response), (error)=>this._proxyRejected(error));
        this._internalCacheOfPromises.set(cacheKey, cachePromise);
        return cachePromise;
    }
    /**
   * Handles successful completion of an HTTP request by the HTTP proxy.
   *
   * The method also updates the internal cookie storage with the cookies
   * received from the server.
   *
   * @param {HttpAgent~Response} response Server response.
   * @return {HttpAgent~Response} The post-processed server response.
   */ _proxyResolved(response) {
        let agentResponse = {
            status: response.status,
            body: response.body,
            params: response.params,
            headers: response.headers,
            headersRaw: response.headersRaw,
            cached: false
        };
        const cacheKey = this.getCacheKey(agentResponse.params.method, agentResponse.params.url, agentResponse.params.data);
        this._internalCacheOfPromises.delete(cacheKey);
        if (this._proxy.haveToSetCookiesManually()) {
            this._setCookiesFromResponse(agentResponse);
        }
        const { postProcessors, cache } = agentResponse.params.options;
        if (Array.isArray(postProcessors)) {
            for (const postProcessor of postProcessors){
                agentResponse = postProcessor(agentResponse);
            }
        }
        const pureResponse = this._cleanResponse(agentResponse);
        if (cache) {
            this._saveAgentResponseToCache(pureResponse);
        }
        return pureResponse;
    }
    /**
   * Handles rejection of the HTTP request by the HTTP proxy. The method
   * tests whether there are any remaining tries for the request, and if
   * there are any, it attempts re-send the request.
   *
   * The method rejects the internal request promise if there are no tries
   * left.
   *
   * @param error The error provided by the HttpProxy,
   *        carrying the error parameters, such as the request url, data,
   *        method, options and other useful data.
   * @return {Promise<HttpAgent~Response>} A promise that will either resolve to a
   *         server's response (with the body parsed as JSON) if there are
   *         any tries left and the re-tried request succeeds, or rejects
   *         with an error containing details of the cause of the request's
   *         failure.
   */ _proxyRejected(error) {
        const errorParams = error.getParams();
        const method = errorParams.method;
        const url = errorParams.url;
        const data = errorParams.data;
        const options = errorParams.options;
        const isAborted = options.fetchOptions?.signal?.aborted || options.abortController?.signal.aborted;
        if (!isAborted && options.repeatRequest > 0) {
            options.repeatRequest--;
            return this._request(method, url, data, options);
        } else {
            const cacheKey = this.getCacheKey(method, url, data);
            this._internalCacheOfPromises.delete(cacheKey);
            const errorName = errorParams.errorName;
            const errorMessage = `${errorName}: ima.core.http.Agent:_proxyRejected: ${error.message}`;
            const agentError = new GenericError(errorMessage, errorParams);
            return Promise.reject(agentError);
        }
    }
    /**
   * Prepares the provided request options object by filling in missing
   * options with default values and adding extra options used internally.
   *
   * @param options Optional request options.
   * @return Request options with set filled-in
   *         default values for missing fields, and extra options used
   *         internally.
   */ _prepareOptions(options = {}) {
        const composedOptions = {
            ...this._defaultRequestOptions,
            ...options,
            postProcessors: [
                ...this._defaultRequestOptions?.postProcessors || [],
                ...options?.postProcessors || []
            ],
            fetchOptions: {
                ...this._defaultRequestOptions?.fetchOptions,
                ...options?.fetchOptions,
                headers: {
                    ...this._defaultRequestOptions?.fetchOptions?.headers,
                    ...options?.fetchOptions?.headers
                }
            }
        };
        if (composedOptions.fetchOptions?.credentials === 'include') {
            // mock default browser behavior for server-side (sending cookie with a fetch request)
            composedOptions.fetchOptions.headers.Cookie = this._cookie.getCookiesStringForCookieHeader();
        }
        return composedOptions;
    }
    /**
   * Generates cache key suffix for an HTTP request to the specified URL with
   * the specified data.
   *
   * @param method The HTTP method used by the request.
   * @param url The URL to which the request is sent.
   * @param data The data sent
   *        with the request.
   * @return The suffix of a cache key to use for a request to the
   *         specified URL, carrying the specified data.
   */ _getCacheKeySuffix(method, url, data) {
        let dataQuery = '';
        if (data) {
            try {
                dataQuery = JSON.stringify(data).replace(/<\/script/gi, '<\\/script');
            } catch (error) {
                console.warn('The provided data does not have valid JSON format', data);
            }
        }
        return `${method}:${url}?${dataQuery}`;
    }
    /**
   * Sets all cookies from the `Set-Cookie` response header to the
   * cookie storage.
   *
   * @param agentResponse The response of the server.
   */ _setCookiesFromResponse(agentResponse) {
        if (agentResponse.headersRaw) {
            const receivedCookies = agentResponse.headersRaw.get('set-cookie');
            if (receivedCookies) {
                this._cookie.parseFromSetCookieHeader(receivedCookies);
            }
        }
    }
    /**
   * Saves the server response to the cache to be used as the result of the
   * next request of the same properties.
   *
   * @param agentResponse The response of the server.
   */ _saveAgentResponseToCache(agentResponse) {
        const cacheKey = this.getCacheKey(agentResponse.params.method, agentResponse.params.url, agentResponse.params.data);
        agentResponse.cached = true;
        this._cache.set(cacheKey, agentResponse, agentResponse.params.options.ttl);
        agentResponse.cached = false;
    }
    /**
   * Cleans cache response from data (abort controller, postProcessors), that cannot be persisted,
   * before saving the data to the cache.
   */ _cleanResponse(response) {
        /**
     * Create copy of agentResponse without AbortController and AbortController signal and postProcessors.
     * Setting agentResponse with AbortController or signal or postProcessors into cache would result in crash.
     */ const { signal, ...fetchOptions } = response.params.options.fetchOptions || {};
        const { abortController, postProcessors, ...options } = response.params.options || {};
        options.fetchOptions = fetchOptions;
        const pureResponse = {
            ...response,
            params: {
                ...response.params,
                options: {
                    ...options
                }
            }
        };
        if (pureResponse.params.options.keepSensitiveHeaders !== true) {
            pureResponse.headers = {};
            pureResponse.params.options.fetchOptions.headers = {};
            delete pureResponse.headersRaw;
        }
        return pureResponse;
    }
}

//# sourceMappingURL=HttpAgentImpl.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/http/HttpStatusCode.js
/**
 * HTTP status code constants, representing the HTTP status codes recognized
 * and processed by this proxy.
 *
 * @enum {number}
 * @const
 * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
 */ const HttpStatusCode = Object.freeze({
    OK: 200,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    TIMEOUT: 408,
    SERVER_ERROR: 500
});

//# sourceMappingURL=HttpStatusCode.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/http/HttpProxy.js


/**
 * Middleware proxy between {@link HttpAgent} implementations and the
 * {@link https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API Fetch API},
 * providing a Promise-oriented API for sending requests.
 */ class HttpProxy {
    _transformer;
    _window;
    _defaultHeaders;
    /**
   * Initializes the HTTP proxy.
   *
   * @param transformer A transformer of URLs to which
   *        requests are made.
   * @param window Helper for manipulating the global object `window`
   *        regardless of the client/server-side environment.
   */ constructor(transformer, window){
        /**
     * A transformer of URLs to which requests are made.
     */ this._transformer = transformer;
        /**
     * Helper for manipulating the global object `window` regardless of the
     * client/server-side environment.
     */ this._window = window;
        /**
     * The default HTTP headers to include with the HTTP requests, unless
     * overridden.
     */ this._defaultHeaders = new Map();
    }
    /**
   * Executes a HTTP request to the specified URL using the specified HTTP
   * method, carrying the provided data.
   *
   * @param method The HTTP method to use.
   * @param url The URL to which the request should be made.
   * @param data The data to
   *        be send to the server. The data will be included as query
   *        parameters if the request method is `GET` or `HEAD`, and as
   *        a request body for any other request method.
   * @param options Optional request options.
   * @return A promise that resolves to the server
   *         response.
   */ request(method, url, data, options) {
        const requestParams = this._composeRequestParams(method, url, data, options);
        // Track request timeout status
        let requestTimeoutId = null;
        let isTimeoutAbortDefined = false;
        if (options.timeout && !options.abortController && !options.fetchOptions?.signal) {
            isTimeoutAbortDefined = true;
            options.abortController = new AbortController();
        }
        return new Promise((resolve, reject)=>{
            if (options.timeout) {
                requestTimeoutId = setTimeout(()=>{
                    options.abortController?.abort();
                    // Reset timeout abort controller for another attempt
                    if (isTimeoutAbortDefined && options.repeatRequest > 0) {
                        options.abortController = new AbortController();
                        options.fetchOptions.signal = options.abortController?.signal;
                    }
                    return reject(new GenericError('The HTTP request timed out', {
                        status: HttpStatusCode.TIMEOUT
                    }));
                }, options.timeout);
            }
            fetch(this._composeRequestUrl(url, !this._shouldRequestHaveBody(method, data) ? data : {}), this._composeRequestInit(method, data, options)).then((response)=>{
                if (requestTimeoutId) {
                    clearTimeout(requestTimeoutId);
                    requestTimeoutId = null;
                }
                const contentType = response.headers.get('content-type');
                if (response.status === HttpStatusCode.NO_CONTENT) {
                    return Promise.resolve([
                        response,
                        null
                    ]);
                } else if (contentType && contentType.includes('application/json')) {
                    return response.json().then((body)=>[
                            response,
                            body
                        ]);
                } else {
                    return response.text().then((body)=>[
                            response,
                            body
                        ]);
                }
            }).then(([response, responseBody])=>this._processResponse(requestParams, response, responseBody)).then(resolve, reject);
        }).catch((fetchError)=>{
            throw this._processError(fetchError, requestParams);
        });
    }
    /**
   * Sets the specified default HTTP header. The header will be sent with all
   * subsequent HTTP requests unless reconfigured using this method,
   * overridden by request options, or cleared by
   * {@link HttpProxy#clearDefaultHeaders} method.
   *
   * @param header A header name.
   * @param value A header value.
   * @returns this
   */ setDefaultHeader(header, value) {
        this._defaultHeaders.set(header, value);
        return this;
    }
    /**
   * Clears all defaults headers sent with all requests.
   *
   * @returns this
   */ clearDefaultHeaders() {
        this._defaultHeaders.clear();
        return this;
    }
    /**
   * Gets an object that describes a failed HTTP request, providing
   * information about both the failure reported by the server and how the
   * request has been sent to the server.
   *
   * @param method The HTTP method used to make the request.
   * @param url The URL to which the request has been made.
   * @param data The data sent
   *        with the request.
   * @param options Optional request options.
   * @param status The HTTP response status code send by the server.
   * @param body The body of HTTP error response (detailed
   *        information).
   * @param cause The low-level cause error.
   * @return An object containing both the details of
   *         the error and the request that lead to it.
   */ getErrorParams(method, url, data, options, status, body, cause) {
        let errorName = '';
        const params = this._composeRequestParams(method, url, data, options);
        if (typeof body === 'undefined') {
            body = {};
        }
        switch(status){
            case HttpStatusCode.TIMEOUT:
                errorName = 'Timeout';
                break;
            case HttpStatusCode.BAD_REQUEST:
                errorName = 'Bad Request';
                break;
            case HttpStatusCode.UNAUTHORIZED:
                errorName = 'Unauthorized';
                break;
            case HttpStatusCode.FORBIDDEN:
                errorName = 'Forbidden';
                break;
            case HttpStatusCode.NOT_FOUND:
                errorName = 'Not Found';
                break;
            case HttpStatusCode.SERVER_ERROR:
                errorName = 'Internal Server Error';
                break;
            default:
                errorName = 'Unknown';
                break;
        }
        return {
            errorName,
            status,
            body,
            cause,
            ...params
        };
    }
    /**
   * Returns `true` if cookies have to be processed manually by setting
   * `Cookie` HTTP header on requests and parsing the `Set-Cookie` HTTP
   * response header.
   *
   * The result of this method depends on the current application
   * environment, the client-side usually handles cookie processing
   * automatically, leading this method returning `false`.
   *
   * At the client-side, the method tests whether the client has cookies
   * enabled (which results in cookies being automatically processed by the
   * browser), and returns `true` or `false` accordingly.
   *
   * `true` if cookies are not processed automatically by
   *         the environment and have to be handled manually by parsing
   *         response headers and setting request headers, otherwise `false`.
   */ haveToSetCookiesManually() {
        return !this._window.isClient();
    }
    /**
   * Processes the response received from the server.
   *
   * @param requestParams The original request's
   *        parameters.
   * @param response The Fetch API's `Response` object representing
   *        the server's response.
   * @param responseBody The server's response body.
   * @return The server's response along with all related
   *         metadata.
   */ _processResponse(requestParams, response, responseBody) {
        if (response.ok) {
            return {
                status: response.status,
                body: responseBody,
                params: requestParams,
                headers: this._headersToPlainObject(response.headers),
                headersRaw: response.headers,
                cached: false
            };
        }
        throw new GenericError('The request failed', {
            status: response.status,
            body: responseBody
        });
    }
    /**
   * Converts the provided Fetch API's `Headers` object to a plain object.
   *
   * @param headers The headers to convert.
   * @return Converted headers.
   */ _headersToPlainObject(headers) {
        const plainHeaders = {};
        for (const [key, value] of headers){
            plainHeaders[key] = value;
        }
        return plainHeaders;
    }
    /**
   * Processes the provided Fetch API or internal error and creates an error
   * to expose to the calling API.
   *
   * @param fetchError The internal error to process.
   * @param requestParams An object representing the
   *        complete request parameters used to create and send the HTTP
   *        request.
   * @return The error to provide to the calling API.
   */ _processError(fetchError, requestParams) {
        const errorParams = fetchError instanceof GenericError ? fetchError.getParams() : {};
        return this._createError(fetchError, requestParams, errorParams.status || HttpStatusCode.SERVER_ERROR, errorParams.body || null);
    }
    /**
   * Creates an error that represents a failed HTTP request.
   *
   * @param cause The error's message.
   * @param requestParams An object representing the
   *        complete request parameters used to create and send the HTTP
   *        request.
   * @param status Server's response HTTP status code.
   * @param responseBody The body of the server's response, if any.
   * @return The error representing a failed HTTP request.
   */ _createError(cause, requestParams, status, responseBody = null) {
        return new GenericError(cause.message, this.getErrorParams(requestParams.method, requestParams.url, requestParams.data, requestParams.options, status, responseBody, cause));
    }
    /**
   * Composes an object representing the HTTP request parameters from the
   * provided arguments.
   *
   * @param method The HTTP method to use.
   * @param url The URL to which the request should be sent.
   * @param data The data to
   *        send with the request.
   * @param options Optional request options.
   * @return An object representing the complete request parameters used to create and
   *         send the HTTP request.
   */ _composeRequestParams(method, url, data, options) {
        return {
            method,
            url,
            transformedUrl: this._transformer.transform(url),
            data,
            options
        };
    }
    /**
   * Composes an init object, which can be used as a second argument of
   * `window.fetch` method.
   *
   * @param method The HTTP method to use.
   * @param data The data to
   *        be send with a request.
   * @param options Options provided by the HTTP
   *        agent.
   * @return {ImaRequestInit} An `ImaRequestInit` object (extended from `RequestInit` of the Fetch API).
   */ _composeRequestInit(method, data, options) {
        const requestInit = {
            method: method.toUpperCase(),
            redirect: 'follow',
            headers: options.fetchOptions?.headers || {}
        };
        const contentType = this._getContentType(method, data, requestInit.headers);
        if (contentType) {
            requestInit.headers['Content-Type'] = contentType;
        }
        for (const [headerName, headerValue] of this._defaultHeaders){
            requestInit.headers[headerName] = headerValue;
        }
        if (this._shouldRequestHaveBody(method, data)) {
            requestInit.body = this._transformRequestBody(data, requestInit.headers);
        }
        // Re-assign signal from abort controller to fetch options
        if (!options.fetchOptions?.signal && options.abortController?.signal) {
            options.fetchOptions = {
                ...options.fetchOptions,
                signal: options.abortController.signal
            };
        }
        Object.assign(requestInit, options.fetchOptions || {});
        return requestInit;
    }
    /**
   * Gets a `Content-Type` header value for defined method, data and options.
   *
   * @param method The HTTP method to use.
   * @param data The data to
   *        be send with a request.
   * @param options Options provided by the HTTP
   *        agent.
   * @return A `Content-Type` header value, null for requests
   *        with no body.
   */ _getContentType(method, data, headers) {
        if (headers['Content-Type'] && typeof headers['Content-Type'] === 'string') {
            return headers['Content-Type'];
        }
        if (this._shouldRequestHaveBody(method, data)) {
            return 'application/json';
        }
        return null;
    }
    /**
   * Transforms the provided URL using the current URL transformer and adds
   * the provided data to the URL's query string.
   *
   * @param url The URL to prepare for use with the fetch API.
   * @param data The data to be attached to the query string.
   * @return The transformed URL with the provided data attached to
   *         its query string.
   */ _composeRequestUrl(url, data) {
        const transformedUrl = this._transformer.transform(url);
        const queryString = this._convertObjectToQueryString(data || {});
        const delimiter = queryString ? transformedUrl.includes('?') ? '&' : '?' : '';
        return `${transformedUrl}${delimiter}${queryString}`;
    }
    /**
   * Checks if a request should have a body (`GET` and `HEAD` requests don't
   * have a body).
   *
   * @param method The HTTP method.
   * @param data The data to
   *        be send with a request.
   * @return `true` if a request has a body, otherwise `false`.
   */ _shouldRequestHaveBody(method, data) {
        return !!(method && data && ![
            'get',
            'head'
        ].includes(method.toLowerCase()));
    }
    /**
   * Formats request body according to request headers.
   *
   * @param data The data to
   *        be send with a request.
   * @param headers Headers object from options provided by the HTTP
   *        agent.
   * @private
   */ _transformRequestBody(data, headers) {
        switch(headers['Content-Type']){
            case 'application/json':
                return JSON.stringify(data);
            case 'application/x-www-form-urlencoded':
                return this._convertObjectToQueryString(data);
            case 'multipart/form-data':
                return this._convertObjectToFormData(data);
            default:
                return data;
        }
    }
    /**
   * Returns query string representation of the data parameter.
   * (Returned string does not contain ? at the beginning)
   *
   * @param object The object to be converted
   * @returns Query string representation of the given object
   * @private
   */ _convertObjectToQueryString(object) {
        if (!object) {
            return undefined;
        }
        return Object.keys(object).map((key)=>[
                key,
                object[key]
            ].map((value)=>{
                return encodeURIComponent(value);
            }).join('=')).join('&');
    }
    /**
   * Converts given data to FormData object.
   * If FormData object is not supported by the browser the original object is returned.
   *
   * @param object The object to be converted
   * @returns
   * @private
   */ _convertObjectToFormData(object) {
        if (!object) {
            return undefined;
        }
        const window = this._window.getWindow();
        if (!window || !FormData) {
            return object;
        }
        const formDataObject = new FormData();
        Object.keys(object).forEach((key)=>formDataObject.append(key, object[key]));
        return formDataObject;
    }
}

//# sourceMappingURL=HttpProxy.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/http/UrlTransformer.js
/**
 * Utility for transforming URLs according to the configured replacement rules.
 */ class UrlTransformer {
    _rules;
    static get $dependencies() {
        return [];
    }
    /**
   * Initializes the URL transformer.
   */ constructor(){
        this._rules = {};
    }
    /**
   * Adds the provided replacement rule to the rules used by this URL
   * transformer.
   *
   * @param pattern Regexp patter to look for (must be escaped as if
   *        for use in the {@link Regexp} constructor).
   * @param replacement The replacement of the matched patter in any
   *        matched URL.
   * @return This transformer.
   */ addRule(pattern, replacement) {
        this._rules[pattern] = replacement;
        return this;
    }
    /**
   * Clears all rules.
   */ clear() {
        this._rules = {};
        return this;
    }
    /**
   * Applies all rules registered with this URL transformer to the provided
   * URL and returns the result. The rules will be applied in the order they
   * were registered.
   *
   * @param url The URL for transformation.
   * @return Transformed URL.
   */ transform(url) {
        const rulesKey = Object.keys(this._rules);
        if (rulesKey.length === 0) {
            return url;
        }
        const reg = new RegExp(rulesKey.join('|'), 'g');
        return url.replace(reg, (ruleKey)=>this._rules[ruleKey]);
    }
}

//# sourceMappingURL=UrlTransformer.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/meta/MetaManager.js
/**
 * The Meta manager is a utility for managing various page attributes related
 * to the SEO (search engine optimization) and social network integration.
 *
 * The Meta manager is used to manage the following:
 * - page title, set using the contents of the `&lt;title&gt;` element
 * - page links, linking related documents and meta-information, added to the
 *   using `&lt;link&gt;` elements
 * - page meta information:
 *   - the generic named meta information added to the page via
 *     `&lt;meta&gt;} elements with the `name` attribute, for
 *     example the `keywords`.
 *   - specialized meta information added to the page via `&lt;meta&gt;`
 *     elements with the `property` attribute, for example the OG meta
 *     tags (`og:type`, `og:image`, etc.).
 */ class MetaManager {
    /**
   * Sets the page title.
   *
   * @param title The new page title.
   */ setTitle(title) {
        return this;
    }
    /**
   * Returns the page title. The method returns an empty string if no page
   * title has been set yet.
   *
   * Note that the page title is cached internally by the meta manager and
   * may therefore differ from the current document title if it has been
   * modified by a 3rd party code.
   *
   * @return The current page title.
   */ getTitle() {
        return '';
    }
    /**
   * Set the specified named meta information property.
   *
   * @param name Meta information property name, for example
   *        `keywords`.
   * @param content The meta information content.
   * @parram attr Additional optional meta attributes.
   */ setMetaName(name, content, attr) {
        return this;
    }
    /**
   * Returns the value of the specified named meta information property. The
   * method returns an empty string for missing meta information (to make the
   * returned value React-friendly).
   *
   * @param name The name of the named meta information property.
   * @return The value of the generic meta information, or an empty string.
   */ getMetaName(name) {
        return {
            content: ''
        };
    }
    /**
   * Returns the names of the currently specified named meta information
   * properties.
   *
   * @return The names of the currently specified named meta
   *         information properties.
   */ getMetaNames() {
        return [];
    }
    /**
   * Return [key, value] pairs of named meta information.
   *
   * @return [key, value] pairs of named meta information.
   */ getMetaNamesIterator() {
        return [];
    }
    /**
   * Sets the specified specialized meta information property.
   *
   * @param name Name of the specialized meta information property.
   * @param property The value of the meta information property.
   * @parram attr Additional optional meta attributes.
   */ setMetaProperty(property, content, attr) {
        return this;
    }
    /**
   * Returns the value of the specified specialized meta information
   * property. The method returns an empty string for missing meta
   * information (to make the returned value React-friendly).
   *
   * @param name The name of the specialized meta information
   *        property.
   * @return The value of the specified meta information, or an
   *         empty string.
   */ getMetaProperty(property) {
        return {
            content: ''
        };
    }
    /**
   * Returns the names of the currently specified specialized meta
   * information properties.
   *
   * @return The names of the currently specified specialized meta
   *         information properties.
   */ getMetaProperties() {
        return [];
    }
    /**
   * Return [key, value] pairs of meta information properties.
   *
   * @return [key, value] pairs of meta information properties.
   */ getMetaPropertiesIterator() {
        return [];
    }
    /**
   * Sets the specified specialized link information.
   *
   * @param relation The relation of the link target to the current
   *        page.
   * @param href The reference to the location of the related
   *        document, e.g. a URL.
   * @parram attr Additional optional link attributes.
   */ setLink(relation, href, attr) {
        return this;
    }
    /**
   * Return the reference to the specified related linked document. The
   * method returns an empty string for missing meta information (to make the
   * returned value React-friendly).
   *
   * @param relation The relation of the link target to the current
   *        page.
   * @return The reference to the location of the related document,
   *         e.g. a URL.
   */ getLink(relation) {
        return {
            href: ''
        };
    }
    /**
   * Returns the relations of the currently set related documents linked to
   * the current page.
   */ getLinks() {
        return [];
    }
    /**
   * Return [key, value] pairs of currently set links.
   *
   * @return [key, value] pairs of currently set links.
   */ getLinksIterator() {
        return [];
    }
    /**
   * Resets the stored meta names, properties and links.
   */ clearMetaAttributes() {
        return;
    }
}

//# sourceMappingURL=MetaManager.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/meta/MetaManagerImpl.js

/**
 * Default implementation of the {@link MetaManager} interface.
 */ class MetaManagerImpl extends MetaManager {
    _title;
    _metaName;
    _metaProperty;
    _link;
    static get $dependencies() {
        return [];
    }
    /**
   * Initializes the meta page attributes manager.
   */ constructor(){
        super();
        /**
     * The page title.
     */ this._title = '';
        /**
     * Storage of generic meta information.
     */ this._metaName = new Map();
        /**
     * Storage of specialized meta information.
     */ this._metaProperty = new Map();
        /**
     * Storage of generic link information.
     */ this._link = new Map();
    }
    /**
   * @inheritDoc
   */ setTitle(title) {
        this._title = title;
        return this;
    }
    /**
   * @inheritDoc
   */ getTitle() {
        return this._title;
    }
    /**
   * @inheritDoc
   */ setMetaName(name, content, attr) {
        this._metaName.set(name, {
            content,
            ...attr
        });
        return this;
    }
    /**
   * @inheritDoc
   */ getMetaName(name) {
        return this._metaName.get(name) || super.getMetaName(name);
    }
    /**
   * @inheritDoc
   */ getMetaNames() {
        return Array.from(this._metaName.keys());
    }
    /**
   * @inheritDoc
   */ getMetaNamesIterator() {
        return this._metaName.entries();
    }
    /**
   * @inheritDoc
   */ setMetaProperty(property, content, attr) {
        this._metaProperty.set(property, {
            content,
            ...attr
        });
        return this;
    }
    /**
   * @inheritDoc
   */ getMetaProperty(property) {
        return this._metaProperty.get(property) || super.getMetaProperty(property);
    }
    /**
   * @inheritDoc
   */ getMetaProperties() {
        return Array.from(this._metaProperty.keys());
    }
    /**
   * @inheritDoc
   */ getMetaPropertiesIterator() {
        return this._metaProperty.entries();
    }
    /**
   * @inheritDoc
   */ setLink(relation, href, attr) {
        this._link.set(relation, {
            href,
            ...attr
        });
        return this;
    }
    /**
   * @inheritDoc
   */ getLink(relation) {
        return this._link.get(relation) || super.getLink(relation);
    }
    /**
   * @inheritDoc
   */ getLinks() {
        return Array.from(this._link.keys());
    }
    /**
   * @inheritDoc
   */ getLinksIterator() {
        return this._link.entries();
    }
    /**
   * @inheritdoc
   */ clearMetaAttributes() {
        this._title = '';
        this._metaProperty.clear();
        this._metaName.clear();
        this._link.clear();
    }
}

//# sourceMappingURL=MetaManagerImpl.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/handler/PageHandler.js
class PageHandler {
    /**
   * Initializes the page handler.
   */ init() {
        return;
    }
    /**
   * Called before a PageManager starts to transition from previous page to
   * a new one.
   *
   * @param managedPage The currently managed page - soon-to-be
   *        previously managed page.
   * @param nextManagedPage The data of the page that's about to
   *        be managed.
   * @param action An action object describing what triggered the routing.
   */ handlePreManagedState(managedPage, nextManagedPage, action) {
        return;
    }
    /**
   * Called after a PageManager finishes transition from previous page to
   * a new one.
   *
   * @param managedPage The currently managed page.
   * @param previousManagedPage The data of the page that was
   *        previously managed.
   * @param action An action object describing what triggered the routing.
   */ handlePostManagedState(managedPage, previousManagedPage, action) {
        return;
    }
    /**
   * Finalization callback, called when the page manager is being discarded.
   * This usually happens when the page is hot-reloaded at the client side.
   */ destroy() {
        return;
    }
}

//# sourceMappingURL=PageHandler.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/execution/Execution.js
/**
 * Execution is an abstract class that defines a standard for executing jobs.
 * The execution can be either done in serial or in parallel way.
 *
 * When executing jobs in parallel an option should define how to deal with
 * a result of each individual job execution. One option would be to return the
 * result of a job that completes first. Second option is to return result of
 * all jobs once they're all complete.
 *
 * For serial execution you should define an option that affects how arguments
 * passed to the `execute` method are distributed. They could be either
 * supplied to each job individually (thus meaning one job's mutation won't
 * affect another job) or they could be supplied to the first job and then
 * piped through other jobs.
 */ class Execution {
    /**
   * Adds a new job to be executed. The job is appended at the end of the
   * list of current jobs therefore is executed last.
   *
   * @param jobs The jobs to be executed.
   */ append(jobs) {
        return;
    }
    /**
   * Start executing collected jobs. In the end a `Promise` is returned
   * with a resulting value. On the returned `Promise` a `catch`
   * method can be called to prevent any unwanted interruption.
   *
   * @param args Arguments to be passed when executing jobs
   */ execute(...args) {
        return Promise.reject();
    }
}

//# sourceMappingURL=Execution.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/execution/AbstractExecution.js


const CLASS_REGEX = /^\s*class\b/;
/**
 * Basic implementation of the {@link Execution} interface. Provides the basic
 * functionality for appending and validating jobs.
 */ class AbstractExecution extends Execution {
    _jobs;
    constructor(jobs = []){
        super();
        this._jobs = jobs.filter(this._validateJob);
    }
    /**
   * @inheritDoc
   */ append(jobs) {
        if (!Array.isArray(jobs)) {
            jobs = [
                jobs
            ];
        }
        this._jobs = this._jobs.concat(jobs.filter(this._validateJob));
    }
    /**
   * @inheritDoc
   */ execute(...args) {
        throw new GenericError('The ima.core.execution.AbstractExecution.execute method is abstract ' + 'and must be overridden', {
            ...args
        });
    }
    /**
   * Return `true` if the given job can be executed
   */ _validateJob(job) {
        if (typeof job === 'function') {
            if (!CLASS_REGEX.test(job.toString())) {
                return true;
            }
        }
        if ($Debug) {
            console.warn('ima.core.execution.AbstractExecution: Given job is not a callable ' + 'function therefore it will be excluded from execution.', {
                job
            });
        }
        return false;
    }
}

//# sourceMappingURL=AbstractExecution.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/execution/SerialBatch.js

class SerialBatch extends AbstractExecution {
    /**
   * @inheritDoc
   */ execute(...args) {
        const zeroStage = Promise.resolve([]);
        return this._jobs.reduce((lastStage, currentStage)=>lastStage.then((results)=>this._executeJob(currentStage, args).then(Array.prototype.concat.bind(results))), zeroStage);
    }
    _executeJob(stage, args) {
        const result = stage(...args);
        return result instanceof Promise ? result : Promise.resolve(result);
    }
}

//# sourceMappingURL=SerialBatch.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/handler/PageHandlerRegistry.js



class PageHandlerRegistry extends PageHandler {
    _pageHandlers;
    _preManageHandlers;
    _postManageHandlers;
    static ExecutionMethod = SerialBatch;
    /**
   * Creates an instance of HandlerRegistry and creates `SerialBatch`
   * instance for pre-handlers and post-handlers.
   * @memberof HandlerRegistry
   */ constructor(...pageHandlers){
        super();
        this._pageHandlers = pageHandlers;
    }
    /**
   * @inheritDoc
   */ init() {
        this._pageHandlers.forEach((handler)=>handler.init());
        this._preManageHandlers = Reflect.construct(PageHandlerRegistry.ExecutionMethod, [
            this._pageHandlers.map((handler)=>handler.handlePreManagedState.bind(handler))
        ]);
        this._postManageHandlers = Reflect.construct(PageHandlerRegistry.ExecutionMethod, [
            this._pageHandlers.map((handler)=>handler.handlePostManagedState.bind(handler))
        ]);
    }
    /**
   * Executes the pre-manage handlers with given arguments
   */ handlePreManagedState(managedPage, nextManagedPage, action) {
        if (!this._preManageHandlers) {
            throw new GenericError('You must call init first.');
        }
        return this._preManageHandlers.execute(managedPage, nextManagedPage, action);
    }
    /**
   * Executes the post-manage handlers with given arguments
   */ handlePostManagedState(managedPage, previousManagedPage, action) {
        return this?._postManageHandlers?.execute(managedPage, previousManagedPage, action);
    }
    /**
   * @inheritDoc
   */ destroy() {
        this._pageHandlers.forEach((handler)=>handler.destroy());
        this._preManageHandlers = undefined;
        this._postManageHandlers = undefined;
        this._pageHandlers = [];
    }
}

//# sourceMappingURL=PageHandlerRegistry.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/handler/PageMetaHandler.js



const IMA_META_DATA_ATTR = 'data-ima-meta';
class PageMetaHandler extends PageHandler {
    #window;
    #metaManager;
    #managed = false;
    static get $dependencies() {
        return [
            Window,
            MetaManager
        ];
    }
    constructor(window, metaManager){
        super();
        this.#window = window;
        this.#metaManager = metaManager;
    }
    /**
   * @inheritDoc
   */ handlePreManagedState() {
        this.#metaManager.clearMetaAttributes();
    }
    /**
   * @inheritDoc
   */ handlePostManagedState() {
        // Skip first manage state after SSR, so we don't
        if (!this.#window.getWindow()?.$IMA?.SPA && !this.#managed && this.#selectMetaTags().length) {
            this.#managed = true;
            return;
        }
        this.#updateMetaAttributes();
    }
    /**
   * Update specified meta or link tags in DOM.
   *
   * @param metaManager meta attributes storage providing the
   *        new values for page meta elements and title.
   */ #updateMetaAttributes() {
        this.#window.setTitle(this.#metaManager.getTitle());
        // Remove IMA managed meta tags
        this.#selectMetaTags().forEach((el)=>el?.remove());
        // Set title
        this.#window.setTitle(this.#metaManager.getTitle());
        // Update meta tags
        this.#updateMetaTag(this.#metaManager.getLinksIterator(), 'link', 'rel');
        this.#updateMetaTag(this.#metaManager.getMetaNamesIterator(), 'meta', 'name');
        this.#updateMetaTag(this.#metaManager.getMetaPropertiesIterator(), 'meta', 'property');
    }
    /**
   * Helper to update specific meta tags in page document.
   *
   * @param iterator Collection of meta records to update.
   * @param tagName Tag name for the given collection.
   * @param valueName Name of the main value for given meta collection.
   */ #updateMetaTag(iterator, tagName, keyName) {
        const document = this.#window.getDocument();
        for (const [key, value] of iterator){
            const attributes = {
                [keyName]: key,
                ...value
            };
            const metaTag = document.createElement(tagName);
            metaTag.setAttribute(IMA_META_DATA_ATTR, '');
            for (const [attrName, attrValue] of Object.entries(attributes)){
                const sanitizedAttrValue = this.#sanitizeValue(attrValue);
                // Skip empty values
                if (sanitizedAttrValue === null) {
                    continue;
                }
                metaTag.setAttribute(attrName, sanitizedAttrValue);
            }
            document?.head?.appendChild(metaTag);
        }
    }
    #sanitizeValue(value) {
        return value === undefined || value === null ? null : value.toString();
    }
    #selectMetaTags() {
        return this.#window.querySelectorAll(`[${IMA_META_DATA_ATTR}]`);
    }
}

//# sourceMappingURL=PageMetaHandler.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/ActionTypes.js
/**
 * Name of actions that can trigger routing
 */ var ActionTypes;
(function(ActionTypes) {
    ActionTypes["REDIRECT"] = 'redirect';
    ActionTypes["CLICK"] = 'click';
    ActionTypes["POP_STATE"] = 'popstate';
    ActionTypes["ERROR"] = 'error';
})(ActionTypes || (ActionTypes = {}));

//# sourceMappingURL=ActionTypes.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/handler/PageNavigationHandler.js



class PageNavigationHandler extends PageHandler {
    _window;
    #preManaged = false;
    static $dependencies = [
        Window
    ];
    /**
   * @param window The utility for manipulating the global context
   *        and global client-side-specific APIs.
   */ constructor(window){
        super();
        /**
     * The utility for manipulating the global context and global
     * client-side-specific APIs.
     */ this._window = window;
    }
    /**
   * @inheritDoc
   */ init() {
        // Setup history object to leave the scrolling to us and to not interfere
        const browserWindow = this._window.getWindow();
        if (browserWindow && 'scrollRestoration' in browserWindow.history) {
            browserWindow.history.scrollRestoration = 'manual';
        }
    }
    /**
   * @inheritDoc
   */ handlePreManagedState(managedPage, nextManagedPage, action) {
        const { options } = nextManagedPage;
        /**
     * Ignore first preManaged call, because this behavior
     * is already set correctly by the browser.
     */ if (!this.#preManaged) {
            this.#preManaged = true;
            return;
        }
        if (managedPage && action && action.type !== ActionTypes.POP_STATE && action.type !== ActionTypes.ERROR) {
            const isRedirection = action.type === ActionTypes.REDIRECT;
            if (!isRedirection) {
                this._saveScrollHistory();
            }
            this._setAddressBar(action.url, isRedirection);
        }
        // FIXME autoscroll will probably always be defined
        if (options?.autoScroll) {
            this._scrollTo({
                x: 0,
                y: 0
            });
        }
    }
    /**
   * @inheritDoc
   */ handlePostManagedState(managedPage, previousManagedPage, action) {
        const { event } = action;
        const { options } = managedPage;
        // FIXME autoscroll will probably always be defined
        if (event?.state?.scroll && options?.autoScroll) {
            this._scrollTo(event?.state.scroll);
        }
    }
    /**
   * Save user's scroll state to history.
   *
   * Replace scroll values in current state for actual scroll values in
   * document.
   */ _saveScrollHistory() {
        const url = this._window.getUrl();
        const scroll = {
            x: this._window.getScrollX(),
            y: this._window.getScrollY()
        };
        const state = {
            url,
            scroll
        };
        const oldState = this._window.getHistoryState();
        const newState = Object.assign({}, oldState, state);
        this._window.replaceState(newState, '', url);
    }
    /**
   * Scrolls to give coordinates on a page.
   */ _scrollTo({ x = 0, y = 0 }) {
        setTimeout(()=>{
            this._window.scrollTo(x, y);
        }, 0);
    }
    /**
   * Sets the provided URL to the browser's address bar by pushing or replacing a new
   * state to the history.
   *
   * The state object pushed to or replaced in the history will be an object with the
   * following structure: `{url: string}`. The `url` field will
   * be set to the provided URL.
   *
   * @param url The URL.
   * @param isRedirection If replaceState should be used instead of pushState.
   */ _setAddressBar(url, isRedirection) {
        const scroll = {
            x: 0,
            y: 0
        };
        const state = {
            url,
            scroll
        };
        if (isRedirection) {
            this._window.replaceState(state, '', url);
        } else {
            this._window.pushState(state, '', url);
        }
    }
}

//# sourceMappingURL=PageNavigationHandler.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/manager/ClientPageManager.js
class ClientPageManager {
}

//# sourceMappingURL=ClientPageManager.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/manager/PageManager.js
/**
 * The page manager is a utility for managing the current controller and its
 * view.
 */ class PageManager {
    /**
   * Initializes the page manager.
   */ init() {
        return;
    }
    /**
   * Pre manage handler, should be called and awaited before tryint to handle
   * new route handler. This pre manage takes care of canceling any currently
   * executed route handlers and returns promise which is resolved when previous
   * page finished loading (even if it got canceled).
   */ async preManage() {
        return Promise.resolve();
    }
    /**
   * Starts to manage the provided controller and its view. The manager
   * stops the management of any previously managed controller and view.
   *
   * The controller and view will be initialized and rendered either into the
   * UI (at the client-side) or to the response to send to the client (at the
   * server-side).
   *
   * @param route A route instance that holds information about the
   *        page we should manage.
   * @param options The current route options.
   * @param params The route parameters of the
   *        current route.
   * @param action An action object describing what triggered the routing.
   * @return A promise that will resolve to information about the rendered page.
   *         The `status` will contain the HTTP status code to send to the
   *         client (at the server side) or determine the type of error page
   *         to navigate to (at the client side).
   */ manage(args) {
        return Promise.reject();
    }
    /**
   * Called by router after currently managed route is resolved.
   */ postManage() {
        return;
    }
    /**
   * Finalization callback, called when the page manager is being discarded.
   * This usually happens when the page is hot-reloaded at the client side.
   */ destroy() {
        return Promise.reject();
    }
}

//# sourceMappingURL=PageManager.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/error/CancelError.js

/**
 * Extension of GenericError which is used in route handling ot cancel
 * currently managed route before proceeding with execution with new one.
 */ class CancelError extends GenericError {
    constructor(message = 'Canceled'){
        super(message, {
            status: 409
        });
    }
}

//# sourceMappingURL=CancelError.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/RouterEvents.js
/**
 * Events constants, which is firing to app.
 */ var RouterEvents;
(function(RouterEvents) {
    RouterEvents[/**
   * Router fire event `$IMA.$Router.beforeHandleRoute` before page
   * manager handle the route. Event's data contain
   * `{ params: Object<string, string>`, route: ima.core.router.AbstractRoute,
   * path: string, options: Object<string, *>}}. The `path` is current
   * path, the `params` are params extracted from path, the
   * `route` is handle route for path and the `options` is route
   * additional options.
   */ "BEFORE_HANDLE_ROUTE"] = '$IMA.$Router.beforeHandleRoute';
    RouterEvents[/**
   * Router fire event `$IMA.$Router.afterHandleRoute` after page
   * manager handle the route. Event's data contain
   * `{response: Object<string, *>, params: Object<string, string>`,
   * route: ima.core.router.AbstractRoute, path: string, options: Object<string, *>}}.
   * The `response` is page render result. The `path` is current
   * path, the `params` are params extracted from path, the
   * `route` is handle route for path and the `options` is route
   * additional options.
   */ "AFTER_HANDLE_ROUTE"] = '$IMA.$Router.afterHandleRoute';
    RouterEvents[/**
   * Fired right before loading view and controller when either
   * view or controller is async (or both).
   */ "BEFORE_LOADING_ASYNC_ROUTE"] = '$IMA.$Router.beforeLoadingAsyncRoute';
    RouterEvents[/**
   * Event fired when router finishes loading of async view
   * and controller. If both are sync this is never fired.
   */ "AFTER_LOADING_ASYNC_ROUTE"] = '$IMA.$Router.afterLoadingAsyncRoute';
})(RouterEvents || (RouterEvents = {}));

//# sourceMappingURL=RouterEvents.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/manager/AbstractPageManager.js




function createDeferred(resolveValue, rejectedValue) {
    return (()=>{
        let resolve, reject;
        const promise = new Promise((res, rej)=>{
            resolve = ()=>res(resolveValue);
            reject = ()=>rej(rejectedValue);
        });
        return {
            resolve: resolve,
            reject: reject,
            promise
        };
    })();
}
/**
 * Page manager for controller.
 */ class AbstractPageManager extends PageManager {
    /**
   * Snapshot of the previously managed page before it was replaced with
   * a new one
   */ _previousManagedPage = {};
    /**
   * Factory used by the page manager to create instances of the
   * controller for the current route, and decorate the controllers and
   * page state managers.
   */ _pageFactory;
    /**
   * Details of the currently managed page.
   */ _managedPage = {};
    /**
   * The current renderer of the page.
   */ _pageRenderer;
    /**
   * The current page state manager.
   */ _pageStateManager;
    /**
   * A registry that holds a list of pre-manage and post-manage handlers.
   */ _pageHandlerRegistry;
    _dispatcher;
    /**
   * Initializes the page manager.
   *
   * @param pageFactory Factory used by the page manager to
   *        create instances of the controller for the current route, and
   *        decorate the controllers and page state managers.
   * @param pageRenderer The current renderer of the page.
   * @param pageStateManager The current page state
   *        manager.
   * @param pageHandlerRegistry Instance of HandlerRegistry that
   *        holds a list of pre-manage and post-manage handlers.
   */ constructor(pageFactory, pageRenderer, pageStateManager, pageHandlerRegistry, dispatcher){
        super();
        this._pageFactory = pageFactory;
        this._pageRenderer = pageRenderer;
        this._pageStateManager = pageStateManager;
        this._pageHandlerRegistry = pageHandlerRegistry;
        this._dispatcher = dispatcher;
    }
    /**
   * @inheritDoc
   */ init() {
        this._managedPage = this._getInitialManagedPage();
        this._previousManagedPage = this._getInitialManagedPage();
        this._pageHandlerRegistry.init();
    }
    /**
   * @inheritDoc
   */ async preManage() {
        this._managedPage.state.cancelled = true;
        this._previousManagedPage.state.abort?.reject();
        return this._managedPage.state.page.promise;
    }
    /**
   * @inheritDoc
   */ async manage({ route, options, params = {}, action = {} }) {
        this._storeManagedPageSnapshot();
        let controller, view;
        const isControllerViewResolved = route.isControllerResolved() && route.isViewResolved();
        try {
            await autoYield();
            if (!isControllerViewResolved) {
                this._dispatcher.fire(RouterEvents.BEFORE_LOADING_ASYNC_ROUTE, {
                    route
                }, true);
            }
            await autoYield();
            const data = await this.getViewController(route);
            controller = data.controller;
            view = data.view;
        } catch (error) {
            if (!(error instanceof CancelError)) {
                throw error;
            }
            return {
                status: 409
            };
        } finally{
            if (!isControllerViewResolved) {
                this._dispatcher.fire(RouterEvents.AFTER_LOADING_ASYNC_ROUTE, {
                    route
                }, true);
            }
        }
        if (this._hasOnlyUpdate(controller, view, options) && this._managedPage.state.mounted) {
            this._managedPage.params = params;
            this._managedPage.state.cancelled = false;
            this._managedPage.state.executed = false;
            await this._runPreManageHandlers(this._managedPage, action);
            const response = await this._updatePageSource();
            await this._runPostManageHandlers(this._previousManagedPage, action);
            return response;
        }
        // Construct new managedPage value
        const controllerInstance = this._pageFactory.createController(controller, options);
        const decoratedController = this._pageFactory.decorateController(controllerInstance);
        // @ts-expect-error fixme in the future
        const viewInstance = this._pageFactory.createView(view);
        const actualManagedPage = this._managedPage;
        this._managedPage = this._constructManagedPageValue(controller, view, route, options, params, controllerInstance, decoratedController, viewInstance);
        // Run pre-manage handlers before affecting anything
        await this._runPreManageHandlers(actualManagedPage, action);
        // Deactivate the old instances and clearing state
        await this._deactivatePageSource();
        await this._destroyPageSource();
        this._pageStateManager.clear();
        this._clearComponentState(options);
        // Initialize controllers and extensions
        await this._initPageSource();
        const response = await this._loadPageSource();
        await this._runPostManageHandlers(this._previousManagedPage, action);
        this._previousManagedPage = this._getInitialManagedPage();
        return response;
    }
    postManage() {
        setTimeout(()=>{
            this._managedPage.state.page.resolve();
        }, 0);
    }
    /**
   * @inheritDoc
   */ async destroy() {
        this._pageHandlerRegistry.destroy();
        this._pageStateManager.onChange = undefined;
        await this._deactivatePageSource();
        await this._destroyPageSource();
        this._pageStateManager.clear();
        this._managedPage = this._getInitialManagedPage();
        this._previousManagedPage = this._getInitialManagedPage();
    }
    _constructManagedPageValue(controller, view, route, options, params, controllerInstance, decoratedController, viewInstance) {
        return {
            controller,
            controllerInstance,
            decoratedController,
            view,
            viewInstance,
            route,
            options,
            params,
            state: {
                activated: false,
                initialized: false,
                cancelled: false,
                executed: false,
                mounted: false,
                page: createDeferred()
            }
        };
    }
    /**
   * Creates a cloned version of currently managed page and stores it in
   * a helper property.
   * Snapshot is used in manager handlers to easily determine differences
   * between the current and the previous state.
   */ _storeManagedPageSnapshot() {
        this._previousManagedPage = {
            ...this._managedPage
        };
        /**
     * Create new abort promise used for aborting raced promises
     * in canceled handlers.
     */ this._previousManagedPage.state.abort = createDeferred(undefined, new CancelError());
        /**
     * Reseted managed state promise.
     */ this._managedPage.state.page = createDeferred();
    }
    /**
   * Clear value from managed page.
   */ _getInitialManagedPage() {
        return {
            controller: undefined,
            controllerInstance: undefined,
            decoratedController: undefined,
            view: undefined,
            viewInstance: undefined,
            route: undefined,
            options: undefined,
            params: undefined,
            state: {
                activated: false,
                initialized: false,
                cancelled: false,
                executed: false,
                mounted: false,
                page: {
                    promise: Promise.resolve(),
                    reject: ()=>undefined,
                    resolve: ()=>undefined
                }
            }
        };
    }
    /**
   * Removes properties we do not want to propagate outside of the page manager
   *
   * @param value The managed page object to strip down
   */ _stripManagedPageValueForPublic(value) {
        const { controller, view, route, options, params } = value;
        return {
            controller,
            view,
            route,
            options,
            params
        };
    }
    /**
   * Set page state manager to extension which has restricted rights to set
   * global state.
   */ _setRestrictedPageStateManager(extension, extensionState) {
        const stateKeys = Object.keys(extensionState);
        const allowedKey = extension.getAllowedStateKeys();
        const allAllowedStateKeys = stateKeys.concat(allowedKey);
        const pageFactory = this._pageFactory;
        const decoratedPageStateManager = pageFactory.decoratePageStateManager(this._pageStateManager, allAllowedStateKeys);
        extension.setPageStateManager(decoratedPageStateManager);
    }
    /**
   * For defined extension switches to pageStageManager and clears partial state
   * after extension state is loaded.
   */ _switchToPageStateManagerAfterLoaded(extension, extensionState) {
        const stateValues = Object.values(extensionState);
        Promise.all(stateValues).then(()=>{
            extension.switchToStateManager();
            extension.clearPartialState();
        }).catch(()=>{
            extension.clearPartialState();
        });
    }
    /**
   * Initialize page source so call init method on controller and his
   * extensions.
   */ async _initPageSource() {
        try {
            await this.#cancelable(this._initController());
            await this.#cancelable(this._initExtensions());
            this._managedPage.state.initialized = true;
        } catch (error) {
            if (!(error instanceof CancelError)) {
                throw error;
            }
        }
    }
    /**
   * Initializes managed instance of controller with the provided parameters.
   */ async _initController() {
        if (this._managedPage.state.cancelled) {
            throw new CancelError();
        }
        const controller = this._managedPage.controllerInstance;
        controller.setRouteParams(this._managedPage.params);
        await controller.init();
    }
    /**
   * Initialize extensions for managed instance of controller with the
   * provided parameters.
   */ async _initExtensions() {
        const controller = this._managedPage.controllerInstance;
        for (const extension of controller.getExtensions()){
            if (this._managedPage.state.cancelled) {
                throw new CancelError();
            }
            extension.setRouteParams(this._managedPage.params);
            await extension.init();
        }
    }
    /**
   * Iterates over extensions of current controller and switches each one to
   * pageStateManager and clears their partial state.
   */ _switchToPageStateManager() {
        const controller = this._managedPage.controllerInstance;
        for (const extension of controller.getExtensions()){
            extension.switchToStateManager();
            extension.clearPartialState();
        }
    }
    /**
   * Load page source so call load method on controller and his extensions.
   * Merge loaded state and render it.
   */ async _loadPageSource() {
        try {
            const controllerState = await this.#cancelable(this._getLoadedControllerState());
            const extensionsState = await this.#cancelable(this._getLoadedExtensionsState(controllerState));
            const loadedPageState = Object.assign({}, extensionsState, controllerState);
            if (this._managedPage.state.cancelled) {
                throw new CancelError();
            }
            const response = await this.#cancelable(this._pageRenderer.mount(this._managedPage.decoratedController, this._managedPage.viewInstance, loadedPageState, this._managedPage.options));
            this._managedPage.state.mounted = true;
            return response;
        } catch (error) {
            if (error instanceof CancelError) {
                return {
                    status: 409
                };
            }
            throw error;
        }
    }
    /**
   * Load controller state from managed instance of controller.
   */ async _getLoadedControllerState() {
        if (this._managedPage.state.cancelled) {
            throw new CancelError();
        }
        const controller = this._managedPage.controllerInstance;
        const controllerState = await controller.load();
        controller.setPageStateManager(this._pageStateManager);
        return controllerState;
    }
    /**
   * Load extensions state from managed instance of controller.
   */ async _getLoadedExtensionsState(controllerState) {
        const controller = this._managedPage.controllerInstance;
        const extensionsState = Object.assign({}, controllerState);
        for (const extension of controller.getExtensions()){
            if (this._managedPage.state.cancelled) {
                throw new CancelError();
            }
            extension.setPartialState(extensionsState);
            extension.switchToPartialState();
            const extensionState = await extension.load();
            this._switchToPageStateManagerAfterLoaded(extension, extensionState);
            this._setRestrictedPageStateManager(extension, extensionState);
            Object.assign(extensionsState, extensionState);
        }
        return extensionsState;
    }
    /**
   * Activate page source so call activate method on controller and his
   * extensions.
   */ async _activatePageSource() {
        try {
            const controller = this._managedPage.controllerInstance;
            const isNotActivated = !this._managedPage.state.activated;
            if (controller && isNotActivated) {
                await this._activateController();
                await this._activateExtensions();
                this._managedPage.state.activated = true;
            }
        } catch (error) {
            if (!(error instanceof CancelError)) {
                throw error;
            }
        }
    }
    /**
   * Activate managed instance of controller.
   */ async _activateController() {
        if (this._managedPage.state.cancelled) {
            throw new CancelError();
        }
        const controller = this._managedPage.controllerInstance;
        await autoYield();
        await controller.activate();
    }
    /**
   * Activate extensions for managed instance of controller.
   */ async _activateExtensions() {
        const controller = this._managedPage.controllerInstance;
        for (const extension of controller.getExtensions()){
            if (this._managedPage.state.cancelled) {
                throw new CancelError();
            }
            await autoYield();
            await extension.activate();
        }
    }
    /**
   * Update page source so call update method on controller and his
   * extensions. Merge updated state and render it.
   */ async _updatePageSource() {
        try {
            const updatedControllerState = await this.#cancelable(this._getUpdatedControllerState());
            const updatedExtensionState = await this.#cancelable(this._getUpdatedExtensionsState(updatedControllerState));
            const updatedPageState = Object.assign({}, updatedExtensionState, updatedControllerState);
            if (this._managedPage.state.cancelled) {
                throw new CancelError();
            }
            const response = await this.#cancelable(this._pageRenderer.update(this._managedPage.decoratedController, this._managedPage.viewInstance, updatedPageState, this._managedPage.options));
            return response;
        } catch (error) {
            if (error instanceof CancelError) {
                return {
                    status: 409
                };
            }
            throw error;
        }
    }
    /**
   * Return updated controller state for current page controller.
   */ _getUpdatedControllerState() {
        if (this._managedPage.state.cancelled) {
            throw new CancelError();
        }
        const controller = this._managedPage.controllerInstance;
        const lastRouteParams = controller.getRouteParams();
        controller.setRouteParams(this._managedPage.params);
        return controller.update(lastRouteParams);
    }
    /**
   * Return updated extensions state for current page controller.
   */ async _getUpdatedExtensionsState(controllerState) {
        const controller = this._managedPage.controllerInstance;
        const extensionsState = Object.assign({}, controllerState);
        const extensionsPartialState = Object.assign({}, this._pageStateManager.getState(), controllerState);
        for (const extension of controller.getExtensions()){
            if (this._managedPage.state.cancelled) {
                throw new CancelError();
            }
            const lastRouteParams = extension.getRouteParams();
            extension.setRouteParams(this._managedPage.params);
            extension.setPartialState(extensionsPartialState);
            extension.switchToPartialState();
            const extensionReturnedState = await extension.update(lastRouteParams);
            this._switchToPageStateManagerAfterLoaded(extension, extensionReturnedState);
            this._setRestrictedPageStateManager(extension, extensionReturnedState);
            Object.assign(extensionsState, extensionReturnedState);
            Object.assign(extensionsPartialState, extensionReturnedState);
        }
        return extensionsState;
    }
    /**
   * Deactivate page source so call deactivate method on controller and his
   * extensions.
   */ async _deactivatePageSource() {
        const controller = this._previousManagedPage.controllerInstance;
        const isActivated = this._previousManagedPage.state.activated;
        if (controller && isActivated) {
            await this._deactivateExtensions();
            await this._deactivateController();
        }
    }
    /**
   * Deactivate last managed instance of controller only If controller was
   * activated.
   */ async _deactivateController() {
        const controller = this._previousManagedPage.controllerInstance;
        await controller.deactivate();
    }
    /**
   * Deactivate extensions for last managed instance of controller only if
   * they were activated.

   */ async _deactivateExtensions() {
        const controller = this._previousManagedPage.controllerInstance;
        for (const extension of controller.getExtensions()){
            await extension.deactivate();
        }
    }
    /**
   * Destroy page source so call destroy method on controller and his
   * extensions.
   */ async _destroyPageSource() {
        const controller = this._previousManagedPage.controllerInstance;
        if (controller && this._previousManagedPage.state.initialized) {
            await this._destroyExtensions();
            await this._destroyController();
        }
    }
    /**
   * Destroy last managed instance of controller.
   */ async _destroyController() {
        const controller = this._previousManagedPage.controllerInstance;
        await controller.destroy();
        controller.setPageStateManager();
    }
    /**
   * Destroy extensions for last managed instance of controller.
   *
   * @protected
   * @return {Promise<undefined>}
   */ async _destroyExtensions() {
        const controller = this._previousManagedPage.controllerInstance;
        for (const extension of controller.getExtensions()){
            await extension.destroy();
            extension.setPageStateManager();
        }
    }
    /**
   * The method clear state on current rendered component to DOM.
   *
   * @param options The current route options.
   */ _clearComponentState(options) {
        const managedOptions = this._previousManagedPage.options;
        if (!managedOptions || managedOptions.documentView !== options.documentView || managedOptions.managedRootView !== options.managedRootView || managedOptions.viewAdapter !== options.viewAdapter) {
            this._pageRenderer.unmount();
        }
    }
    /**
   * Return true if manager has to update last managed controller and view.
   */ _hasOnlyUpdate(controller, view, options) {
        if (typeof options.onlyUpdate === 'function') {
            return options.onlyUpdate(this._managedPage.controller, this._managedPage.view);
        }
        return !!(options.onlyUpdate && this._managedPage.controller === controller && this._managedPage.view === view);
    }
    async _runPreManageHandlers(actualManagedPage, action) {
        await autoYield();
        const result = this._pageHandlerRegistry.handlePreManagedState(actualManagedPage.controller ? this._stripManagedPageValueForPublic(actualManagedPage) : null, this._stripManagedPageValueForPublic(this._managedPage) || null, action);
        this._managedPage.state.executed = true;
        return result;
    }
    async _runPostManageHandlers(previousManagedPage, action) {
        // Has to be called for first managed page too (previous is empty)
        if (previousManagedPage.controller && !previousManagedPage.state.executed) {
            previousManagedPage.state.executed = false;
            return;
        }
        await autoYield();
        return this._pageHandlerRegistry.handlePostManagedState(this._managedPage.controller ? this._stripManagedPageValueForPublic(this._managedPage) : null, this._stripManagedPageValueForPublic(previousManagedPage) || null, action);
    }
    async getViewController(route) {
        // @ts-expect-error ignore state.abort.promise value
        const [controller, view] = await Promise.race([
            this._previousManagedPage.state.abort?.promise,
            Promise.all([
                route.getController(),
                route.getView()
            ])
        ]);
        return {
            controller,
            view
        };
    }
    #cancelable(promise) {
        return autoYield().then(()=>Promise.race([
                this._previousManagedPage.state.abort?.promise,
                promise
            ]));
    }
}

//# sourceMappingURL=AbstractPageManager.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/PageFactory.js

/**
 * Factory for page.
 */ class PageFactory {
    /**
   * The current application object container.
   */ _oc;
    /**
   * Factory used by page management classes.
   */ constructor(oc){
        this._oc = oc;
    }
    /**
   * Create new instance of {@link Controller}.
   */ createController(controller, options) {
        const { extensions = [] } = options;
        let mergedExtensions = [
            ...extensions
        ];
        if (Array.isArray(controller?.$extensions) && controller.$extensions?.length) {
            // @ts-expect-error can't check static properties
            mergedExtensions = mergedExtensions.concat(controller.$extensions);
        }
        const controllerInstance = this._oc.create(controller);
        for (const extension of mergedExtensions){
            const loadedExtension = this._oc.get(extension);
            // Optional extension handling
            if (!loadedExtension) {
                continue;
            }
            // Spread support handling
            if (Array.isArray(loadedExtension)) {
                for (const extensionInstance of loadedExtension){
                    controllerInstance.addExtension(extensionInstance.constructor, extensionInstance);
                }
            } else {
                controllerInstance.addExtension(extension, loadedExtension);
            }
        }
        return controllerInstance;
    }
    /**
   * Retrieves the specified react component class.
   *
   * @param view The namespace
   *        referring to a react component class, or a react component class
   *        constructor.
   * @return The react component class
   *         constructor.
   */ createView(view) {
        if (typeof view === 'function') {
            return view;
        }
        const classConstructor = this._oc.getConstructorOf(view);
        if (classConstructor) {
            return classConstructor;
        } else {
            throw new GenericError(`ima.core.page.Factory:createView hasn't name of view "${view}".`);
        }
    }
    /**
   * Returns decorated controller for ease setting seo params in controller.
   */ decorateController(controller) {
        const metaManager = this._oc.get('$MetaManager');
        const router = this._oc.get('$Router');
        const dictionary = this._oc.get('$Dictionary');
        const settings = this._oc.get('$Settings');
        const decoratedController = this._oc.create('$ControllerDecorator', [
            controller,
            metaManager,
            router,
            dictionary,
            settings
        ]);
        return decoratedController;
    }
    /**
   * Returns decorated page state manager for extension.
   */ decoratePageStateManager(pageStateManager, allowedStateKeys) {
        const decoratedPageStateManager = this._oc.create('$PageStateManagerDecorator', [
            pageStateManager,
            allowedStateKeys
        ]);
        return decoratedPageStateManager;
    }
}

//# sourceMappingURL=PageFactory.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/renderer/PageRenderer.js
/**
 * The page renderer is a utility for rendering the page at either the
 * client-side or the server-side, handling the differences in the environment.
 */ class PageRenderer {
    /**
   * Renders the page using the provided controller and view. The actual
   * behavior of this method differs at the client-side and the at
   * server-side in the following way:
   *
   * At the server, the method first waits for all the resources to load, and
   * then renders the page to a string containing HTML markup to send to the
   * client.
   *
   * At the client, the method uses the already available resources to render
   * the page into DOM, re-using the DOM created from the HTML markup send by
   * the server if possible. After this the method will re-render the page
   * every time another resource being loaded finishes its loading and
   * becomes available.
   *
   * Note that the method renders the page at the client-side only after all
   * resources have been loaded if this is the first time this method is
   * invoked at the client.
   *
   * @param controller The current page controller.
   * @param view The page's view.
   * @param pageResources The resources for
   *        the view loaded by the controller.
   * @param routeOptions The current route options.
   * @return A promise that will resolve to information about the
   *         rendered page. The `status` will contain the HTTP status
   *         code to send to the client (at the server side) or determine the
   *         type of error page to navigate to (at the client side).
   */ mount(controller, view, pageResources, routeOptions) {
        return Promise.reject();
    }
    /**
   * Handles update of the current route that does not replace the current
   * controller and view.
   *
   * The method will use the already available resource to update the
   * controller's state and the view immediately. After that, the method will
   * update the controller's state and view with every resource that becomes
   * resolved.
   *
   * @param controller The current page controller.
   * @param view The page's view.
   * @param resourcesUpdate The resources
   *        that represent the update the of current state according to the
   *        current route and its parameters.
   * @param routeOptions The current route options.
   * @return A promise that will resolve to information about the
   *         rendered page. The `status` will contain the HTTP status
   *         code to send to the client (at the server side) or determine the
   *         type of error page to navigate to (at the client side).
   *         The `content` field will contain the rendered markup of
   *         the page at the server-side, or `null` at the client-side.
   */ update(controller, view, resourcesUpdate, routeOptions) {
        return Promise.reject();
    }
    /**
   * Unmounts the view from the DOM.
   *
   * This method has no effect at the server-side.
   */ unmount() {
        return;
    }
    /**
   * Sets the provided state to the currently rendered view.
   *
   * This method has no effect at the server-side.
   *
   * @param state The state to set to the currently
   *        rendered view.
   */ setState(state) {
        return Promise.reject();
    }
}

//# sourceMappingURL=PageRenderer.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/state/PageStateManager.js
/**
 * Manager of the current page state and state history.
 */ class PageStateManager {
    onChange;
    /**
   * Clears the state history.
   */ clear() {
        return;
    }
    /**
   * Sets a new page state by applying the provided patch to the current
   * state.
   *
   * @param statePatch The patch of the current state.
   */ setState(patchState) {
        return;
    }
    /**
   * Returns the current page state.
   *
   * @return The current page state.
   */ getState() {
        return {};
    }
    /**
   * Returns the recorded history of page states. The states will be
   * chronologically sorted from the oldest to the newest.
   *
   * Note that the implementation may limit the size of the recorded history,
   * therefore the complete history may not be available.
   *
   * @return The recorded history of page states.
   */ getAllStates() {
        return [];
    }
    /**
   * Returns queueing state patches off the main state from the begin of transaction.
   *
   * @return State patches from the begin of transaction.
   */ getTransactionStatePatches() {
        return [];
    }
    /**
   * Starts queueing state patches off the main state. While the transaction
   * is active every `setState` call has no effect on the current state.
   *
   * Note that call to `getState` after the transaction has begun will
   * return state as it was before the transaction.
   */ beginTransaction() {
        return;
    }
    /**
   * Applies queued state patches to the main state. All patches are squashed
   * and applied with one `setState` call.
   */ commitTransaction() {
        return;
    }
    /**
   * Cancels ongoing transaction. Uncommitted state changes are lost.
   */ cancelTransaction() {
        return;
    }
}

//# sourceMappingURL=PageStateManager.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/manager/ServerPageManager.js





/**
 * Page manager for controller on the server side.
 */ class ServerPageManager extends AbstractPageManager {
    static get $dependencies() {
        return [
            PageFactory,
            PageRenderer,
            PageStateManager,
            '$PageHandlerRegistry',
            Dispatcher
        ];
    }
}

//# sourceMappingURL=ServerPageManager.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/renderer/ComponentUtils.js
class ComponentUtils {
    /**
   * The application's dependency injector - the object container.
   */ _oc;
    /**
   * Map of registered utilities.
   */ _utilityClasses = {};
    /**
   * Map of instantiated utilities
   */ _utilities;
    /**
   * Map of referrers to utilities
   */ _utilityReferrers = {};
    /**
   * Initializes the registry used for managing component utils.
   *
   * @param oc The application's dependency injector - the
   *        object container.
   */ constructor(oc){
        this._oc = oc;
    }
    /**
   * Registers single utility class or multiple classes in alias->class mapping.
   */ register(name, componentUtilityClass, referrer) {
        if (typeof componentUtilityClass === 'function' || typeof componentUtilityClass === 'string') {
            const alias = String(name);
            this._utilityClasses[alias] = componentUtilityClass;
            if (referrer && typeof referrer === 'string') {
                this._utilityReferrers[alias] = referrer;
            }
            if (this._utilities) {
                this._createUtilityInstance(alias, componentUtilityClass);
            }
        } else if (name && typeof name === 'object' && name.constructor === Object) {
            const utilityClasses = name;
            // @ts-expect-error
            referrer = componentUtilityClass;
            for (const alias of Object.keys(utilityClasses)){
                if (!Object.prototype.hasOwnProperty.call(utilityClasses, alias)) {
                    continue;
                }
                // @ts-expect-error
                this.register(alias, utilityClasses[alias], referrer);
            }
        }
    }
    /**
   * Returns object containing all registered utilities
   */ getUtils() {
        if (this._utilities) {
            return this._utilities;
        }
        this._utilities = {};
        // create instance of each utility class
        for (const alias of Object.keys(this._utilityClasses)){
            this._createUtilityInstance(alias, this._utilityClasses[alias]);
        }
        if (this._oc.has('$Utils')) {
            // fallback for backward compatibility
            Object.assign(this._utilities, this._oc.get('$Utils'));
        }
        return this._utilities;
    }
    getReferrers() {
        return this._utilityReferrers;
    }
    _createUtilityInstance(alias, utilityClass) {
        // @ts-expect-error No way to handle this with current OC typing setup
        return this._utilities[alias] = this._oc.get(utilityClass);
    }
}

//# sourceMappingURL=ComponentUtils.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/state/PageStateManagerDecorator.js


/**
 * Decorator for page state manager, which add logic for limiting Extension
 * competence.
 */ class PageStateManagerDecorator extends PageStateManager {
    /**
   * The current page state manager.
   */ _pageStateManager;
    /**
   * Array of access keys for state.
   */ _allowedStateKeys;
    /**
   * Initializes the page state manager decorator.
   *
   * @param {PageStateManager} pageStateManager
   * @param {string[]} allowedStateKeys
   */ constructor(pageStateManager, allowedStateKeys){
        super();
        /**
     * The current page state manager.
     */ this._pageStateManager = pageStateManager;
        this._allowedStateKeys = allowedStateKeys;
    }
    /**
   * @inheritDoc
   */ clear() {
        this._pageStateManager.clear();
    }
    /**
   * @inheritDoc
   */ setState(statePatch) {
        if ($Debug) {
            const patchKeys = Object.keys(statePatch);
            const deniedKeys = patchKeys.filter((patchKey)=>{
                return this._allowedStateKeys.indexOf(patchKey) === -1;
            });
            if (deniedKeys.length > 0) {
                throw new GenericError(`Extension can not set state for keys ` + `${deniedKeys.join()}. Check your extension or add keys ` + `${deniedKeys.join()} to getAllowedStateKeys.`);
            }
        }
        this._pageStateManager.setState(statePatch);
    }
    /**
   * @inheritDoc
   */ getState() {
        return this._pageStateManager.getState();
    }
    /**
   * @inheritDoc
   */ getAllStates() {
        return this._pageStateManager.getAllStates();
    }
    /**
   * @inheritDoc
   */ getTransactionStatePatches() {
        return this._pageStateManager.getTransactionStatePatches();
    }
    /**
   * @inheritDoc
   */ beginTransaction() {
        return this._pageStateManager.beginTransaction();
    }
    /**
   * @inheritDoc
   */ commitTransaction() {
        return this._pageStateManager.commitTransaction();
    }
    /**
   * @inheritDoc
   */ cancelTransaction() {
        return this._pageStateManager.cancelTransaction();
    }
}

//# sourceMappingURL=PageStateManagerDecorator.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/state/StateEvents.js
/**
 * Events constants, which is firing to app.
 */ var StateEvents;
(function(StateEvents) {
    StateEvents[/**
   * PateStateManager fire event `$IMA.$PageStateManager.beforeChangeState` before
   * state is patched. Event's data contain
   * `{ oldState: Object<string, *>, newState: Object<string, *>,
   * pathState:  Object<string, *> }`.
   */ "BEFORE_CHANGE_STATE"] = '$IMA.$PageStateManager.beforeChangeState';
    StateEvents[/**
   * PateStateManager fire event `$IMA.$PageStateManager.afterChangeState` after state
   * is patched. Event's data contain `{newState: Object<string, *>}`.
   */ "AFTER_CHANGE_STATE"] = '$IMA.$PageStateManager.afterChangeState';
})(StateEvents || (StateEvents = {}));

//# sourceMappingURL=StateEvents.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/state/PageStateManagerImpl.js



const MAX_HISTORY_LIMIT = 10;
/**
 * The implementation of the {@link PageStateManager} interface.
 */ class PageStateManagerImpl extends PageStateManager {
    _cursor = -1;
    _dispatcher;
    _ongoingTransaction = false;
    _statePatchQueue = [];
    _states = [];
    static get $dependencies() {
        return [
            Dispatcher
        ];
    }
    /**
   * Initializes the page state manager.
   *
   * @param {Dispatcher} dispatcher Dispatcher fires events to app.
   */ constructor(dispatcher){
        super();
        this._dispatcher = dispatcher;
    }
    /**
   * @inheritDoc
   */ clear() {
        this._states = [];
        this._cursor = -1;
        this.cancelTransaction();
    }
    /**
   * @inheritDoc
   */ setState(patchState) {
        if (this._ongoingTransaction) {
            return this._statePatchQueue.push(patchState);
        }
        const oldState = this.getState();
        const newState = Object.assign({}, this.getState(), patchState);
        if (this._dispatcher) {
            this._dispatcher.fire(StateEvents.BEFORE_CHANGE_STATE, {
                newState,
                oldState,
                patchState
            }, true);
        }
        this._eraseExcessHistory();
        this._pushToHistory(newState);
        this._callOnChangeCallback(newState);
    }
    /**
   * @inheritDoc
   */ getState() {
        return this._states[this._cursor] || {};
    }
    /**
   * @inheritDoc
   */ getAllStates() {
        return this._states;
    }
    /**
   * @inheritDoc
   */ getTransactionStatePatches() {
        return this._statePatchQueue;
    }
    /**
   * @inheritDoc
   */ beginTransaction() {
        if ($Debug && this._ongoingTransaction) {
            console.warn('ima.core.page.state.PageStateManagerImpl.beginTransaction():' + 'Another state transaction is already in progress. Check you workflow.' + 'These uncommitted state changes will be lost:', this._statePatchQueue);
        }
        this._ongoingTransaction = true;
        this._statePatchQueue = [];
    }
    /**
   * @inheritDoc
   */ commitTransaction() {
        if ($Debug && !this._ongoingTransaction) {
            console.warn('ima.core.page.state.PageStateManagerImpl.commitTransaction():' + 'No transaction is in progress. Check you workflow.');
        }
        if (this._statePatchQueue.length === 0) {
            this._ongoingTransaction = false;
            return;
        }
        const finalPatch = Object.assign({}, ...this._statePatchQueue);
        this._ongoingTransaction = false;
        this._statePatchQueue = [];
        this.setState(finalPatch);
    }
    /**
   * @inheritDoc
   */ cancelTransaction() {
        this._ongoingTransaction = false;
        this._statePatchQueue = [];
    }
    /**
   * Erase the oldest state from storage only if it exceed max
   * defined size of history.
   */ _eraseExcessHistory() {
        if (this._states.length > MAX_HISTORY_LIMIT) {
            this._states.shift();
            this._cursor -= 1;
        }
    }
    /**
   * Push new state to history storage.
   */ _pushToHistory(newState) {
        this._states.push(newState);
        this._cursor += 1;
    }
    /**
   * Call registered callback function on (@link onChange) with newState.
   */ _callOnChangeCallback(newState) {
        if (this.onChange && typeof this.onChange === 'function') {
            this.onChange(newState);
        }
        if (this._dispatcher) {
            this._dispatcher.fire(StateEvents.AFTER_CHANGE_STATE, {
                newState
            }, true);
        }
    }
}

//# sourceMappingURL=PageStateManagerImpl.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/ClientRouter.js
class ClientRouter {
}

//# sourceMappingURL=ClientRouter.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/Request.js
/**
 * Wrapper for the ExpressJS request, exposing only the necessary minimum.
 */ class Request {
    /**
   * The current ExpressJS request object, or `null` if running at
   * the client side.
   */ _request;
    static get $dependencies() {
        return [];
    }
    /**
   * Initializes the request using the provided ExpressJS request object.
   *
   * @param request The ExpressJS request object
   *        representing the current request. Use `null` at the client
   *        side.
   */ init(request) {
        this._request = request;
    }
    /**
   * Returns the path part of the URL to which the request was made.
   *
   * @return The path to which the request was made.
   */ getPath() {
        return this._request ? this._request.originalUrl : '';
    }
    /**
   * Returns the `Cookie` HTTP header value.
   *
   * @return The value of the `Cookie` header.
   */ getCookieHeader() {
        return this._request ? this._request.get('Cookie') : '';
    }
    /**
   * Returns uploaded file to server and meta information.
   */ getFile() {
        // @ts-expect-error missing type fore 'file'
        return this._request ? this._request.file : null;
    }
    /**
   * Returns uploaded files to server with their meta information.
   */ getFiles() {
        // @ts-expect-error missing type fore 'files'
        return this._request ? this._request.files : null;
    }
    /**
   * Returns body of request.
   */ getBody() {
        return this._request ? this._request.body || null : null;
    }
    /**
   * Returns the specified HTTP request header.
   */ getHeader(header) {
        return this._request ? this._request.get(header) || null : null;
    }
    /**
   * Returns the remote IP address of the request.
   */ getIP() {
        return this._request ? this._request.ip : null;
    }
    /**
   * Returns array of IP addresses specified in the “X-Forwarded-For”
   * request header.
   */ getIPs() {
        return this._request ? this._request.ips || [] : [];
    }
}

//# sourceMappingURL=Request.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/Response.js

/**
 * Wrapper for the ExpressJS response, exposing only the necessary minimum.
 */ class Response {
    /**
   * The ExpressJS response object, or `undefined` if running at the
   * client side.
   */ _response;
    /**
   * Internal cookie storage for Set-Cookie header.
   */ _internalCookieStorage = new Map();
    _internalHeadersStorage = {};
    /**
   * Transform function for cookie value.
   */ _cookieTransformFunction = {
        encode: (value)=>value,
        decode: (value)=>value
    };
    static get $dependencies() {
        return [];
    }
    /**
   * Initializes this response wrapper with the provided ExpressJS response
   * object.
   *
   * @param response The ExpressJS response, or
   *        `null` if the code is running at the client side.
   * @param cookieTransformFunction
   * @return This response.
   */ init(response, cookieTransformFunction = {}) {
        this._cookieTransformFunction = Object.assign(this._cookieTransformFunction, cookieTransformFunction);
        this._response = response;
        this._internalCookieStorage.clear();
        this._internalHeadersStorage = {};
        return this;
    }
    /**
   * Redirects the client to the specified location, with the specified
   * redirect HTTP response code.
   *
   * For full list of HTTP response status codes see
   * http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
   *
   * Use this method only at the server side.
   *
   * @param url The URL to which the client should be redirected.
   * @param[status=302] The HTTP status code to send to the
   *        client.
   * @param headers Custom headers to be used on the response.
   * @return This response.
   */ redirect(url, options = {
        httpStatus: 302,
        headers: {}
    }) {
        if ($Debug) {
            if (this._response && this._response.headersSent) {
                throw new GenericError('ima.core.router.Response:redirect The response has already ' + 'been sent. Check your workflow.', {
                    url,
                    options
                });
            }
        }
        this._internalHeadersStorage = {
            ...this._internalHeadersStorage,
            ...options?.headers
        };
        throw new GenericError('IMA internal redirect', {
            url,
            status: options.httpStatus
        });
    }
    /**
   * Sets a cookie, which will be sent to the client with the response.
   *
   * @param name The cookie name.
   * @param value The cookie value, will be
   *        converted to string.
   * @param options Cookie attributes. Only the attributes listed in the type
   *        annotation of this field are supported. For documentation and full
   *        list of cookie attributes
   *        see http://tools.ietf.org/html/rfc2965#page-5
   * @return This response.
   */ setCookie(name, value, options = {}) {
        if ($Debug) {
            if (this._response && this._response.headersSent) {
                throw new GenericError('ima.core.router.Response:setCookie The response has already ' + 'been sent. Check your workflow.', {
                    name,
                    value,
                    options
                });
            }
        }
        const advancedOptions = Object.assign({}, this._cookieTransformFunction, options);
        this._internalCookieStorage.set(name, {
            value: value,
            options: advancedOptions
        });
        return this;
    }
    /**
   * Sets a header, which will be sent to the client with the response.
   *
   * @param name The header name.
   * @param value The header value, will be
   * @return This response.
   */ setHeader(name, value) {
        if ($Debug) {
            if (this._response && this._response.headersSent) {
                throw new GenericError('ima.core.router.Response:setHeader The response has already ' + 'been sent. Check your workflow.', {
                    name,
                    value
                });
            }
        }
        this._internalHeadersStorage[name] = value;
        return this;
    }
    /**
   * Return object which contains response headers and cookie.
   */ getResponseParams() {
        return {
            cookie: this._internalCookieStorage,
            headers: this._internalHeadersStorage
        };
    }
}

//# sourceMappingURL=Response.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/AbstractRoute.js

/**
 * Regular expression used to match and remove the starting and trailing
 * forward slashes from a path expression or a URL path.
 *
 * @const
 * @type {RegExp}
 */ const LOOSE_SLASHES_REGEXP = /^\/|\/$/g;
/**
 * Utility for representing and manipulating a single route in the router's
 * configuration.
 */ class AbstractRoute {
    /**
   * The unique name of this route, identifying it among the rest of the
   * routes in the application.
   */ _name;
    /**
   * Path expression used in route matching, to generate valid path with
   * provided params and parsing params from current path.
   */ _pathExpression;
    /**
   * The full name of Object Container alias identifying the controller
   * associated with this route.
   */ _controller;
    /**
   * The full name or Object Container alias identifying the view class
   * associated with this route.
   */ _view;
    /**
   * The route additional options.
   */ _options;
    /**
   * Initializes the route.
   *
   * @param name The unique name of this route, identifying it among
   *        the rest of the routes in the application.
   * @param pathExpression Path expression used in route matching, to generate
   *        valid path with provided params and parsing params from current path.
   * @param controller The full name of Object Container alias
   *        identifying the controller associated with this route.
   * @param view The full name or Object Container alias identifying
   *        the view class associated with this route.
   * @param options The route additional options.
   */ constructor(name, pathExpression, controller, view, options){
        this._name = name;
        this._pathExpression = pathExpression;
        this._controller = {
            resolved: !this.isAsync(controller),
            controller: controller,
            cached: null
        };
        this._view = {
            resolved: !this.isAsync(view),
            view: view,
            cached: null
        };
        /**
     * Init options with defaults.
     */ this._options = {
            ...{
                autoScroll: true,
                documentView: null,
                managedRootView: null,
                onlyUpdate: false,
                viewAdapter: null,
                middlewares: []
            },
            ...options
        };
    }
    /**
   * Returns the unique identifying name of this route.
   *
   * @return The name of the route, identifying it.
   */ getName() {
        return this._name;
    }
    /**
   * Checks if given argument is an async handler.
   */ isAsync(module) {
        return module?.constructor.name === 'AsyncFunction' || module instanceof Promise;
    }
    /**
   * Returns Controller class/alias/constant associated with this route.
   * Internally caches async calls for dynamically imported controllers,
   * meaning that once they're loaded, you get the same promise for
   * subsequent calls.
   *
   * @return The Controller class/alias/constant.
   */ getController() {
        if (!this._controller.cached) {
            this._controller.cached = !this._controller.resolved ? this._controller.controller().then((module)=>{
                this._controller.resolved = true;
                return module.default ?? module;
            }) : this._controller.controller;
        }
        return this._controller.cached;
    }
    /**
   * Returns true for resolved controller. This is always true
   * for sync route views.
   */ isControllerResolved() {
        return this._controller.resolved;
    }
    /**
   * Returns View class/alias/constant associated with this route.
   * Internally caches async calls for dynamically imported views,
   * meaning that once they're loaded, you get the same promise for
   * subsequent calls.
   *
   * @return The View class/alias/constant.
   */ getView() {
        if (!this._view.cached) {
            this._view.cached = !this._view.resolved ? this._view.view().then((module)=>{
                this._view.resolved = true;
                return module.default ?? module;
            }) : this._view.view;
        }
        return this._view.cached;
    }
    /**
   * Returns true for resolved view. This is always true
   * for sync route views.
   */ isViewResolved() {
        return this._view.resolved;
    }
    /**
   * Return route additional options.
   */ getOptions() {
        return this._options;
    }
    /**
   * Path expression used in route matching, to generate valid path with
   * provided params and parsing params from current path.
   *
   * @return The path expression.
   */ getPathExpression() {
        return this._pathExpression;
    }
    /**
   * Trims the trailing forward slash from the provided URL path.
   *
   * @param path The path to trim.
   * @return Trimmed path.
   */ getTrimmedPath(path) {
        return `/${path.replace(LOOSE_SLASHES_REGEXP, '')}`;
    }
    /**
   * Preloads dynamically imported view and controller.
   *
   * @return Promise.All resolving to [view, controller] tuple.
   */ async preload() {
        return Promise.all([
            this.getController(),
            this.getView()
        ]);
    }
    /**
   * Creates the URL and query parts of a URL by substituting the route's
   * parameter placeholders by the provided parameter value.
   *
   * The extraneous parameters that do not match any of the route's
   * placeholders will be appended as the query string.
   *
   * @param params The route
   *        parameter values.
   * @return Path and, if necessary, query parts of the URL
   *         representing this route with its parameters replaced by the
   *         provided parameter values.
   */ toPath(params) {
        throw new GenericError('The ima.core.router.AbstractRoute.toPath method is abstract ' + 'and must be overridden', {
            params
        });
    }
    /**
   * Tests whether the provided URL path matches this route. The provided
   * path may contain the query.
   *
   * @param path The URL path.
   * @return `true` if the provided path matches this route.
   */ matches(path) {
        throw new GenericError('The ima.core.router.AbstractRoute.matches method is abstract ' + 'and must be overridden', {
            path
        });
    }
    /**
   * Extracts the parameter values from the provided path. The method
   * extracts both the in-path parameters and parses the query, allowing the
   * query parameters to override the in-path parameters.
   *
   * The method returns an empty hash object if the path does not match this
   * route.
   *
   * @param path Currently routed path.
   * @param baseUrl Currently routed baseUrl.
   * @return Map of parameter names to parameter
   *         values.
   */ extractParameters(path, baseUrl) {
        throw new GenericError('The ima.core.router.AbstractRoute.extractParameters method is abstract ' + 'and must be overridden', {
            path,
            baseUrl
        });
    }
}

//# sourceMappingURL=AbstractRoute.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/DynamicRoute.js


/**
 * Utility for representing and manipulating a single dynamic route in the
 * router's configuration. Dynamic route is defined by regExp used for route
 * matching and overrides for toPath and extractParameters functions to generate
 * and put together valid path.
 *
 * @extends AbstractRoute
 */ class DynamicRoute extends AbstractRoute {
    /**
   * Initializes the route.
   *
   * @param pathExpression Path expression used in route matching,
   *        to generate valid path with provided params and parsing params from current path.
   */ constructor(name, pathExpression, controller, view, options){
        super(name, pathExpression, controller, view, options);
        if (!pathExpression || typeof pathExpression !== 'object') {
            throw new GenericError(`The pathExpression must be object, '${typeof pathExpression}' was given.`);
        }
        this._pathExpression = pathExpression;
        const { matcher, toPath, extractParameters } = this._pathExpression;
        if (!matcher || !(matcher instanceof RegExp)) {
            throw new GenericError(`The pathExpression.matcher must be a RegExp.`, {
                matcher
            });
        }
        if (!toPath || typeof toPath !== 'function') {
            throw new GenericError(`The pathExpression.toPath is not a function, '${typeof toPath}' was given.`);
        }
        if (!extractParameters || typeof extractParameters !== 'function') {
            throw new GenericError(`The pathExpression.extractParameters is not a function, '${typeof extractParameters}' was given.`);
        }
    }
    /**
   * @inheritDoc
   */ toPath(params = {}) {
        return this.getTrimmedPath(this._pathExpression.toPath(params));
    }
    /**
   * @inheritDoc
   */ matches(path) {
        return this._pathExpression.matcher.test(this.getTrimmedPath(path));
    }
    /**
   * @inheritDoc
   */ extractParameters(path, baseUrl) {
        const parsedUrl = new URL(`${baseUrl}${path}`);
        return this._pathExpression.extractParameters(this.getTrimmedPath(parsedUrl.pathname), {
            path,
            query: Object.fromEntries(parsedUrl.searchParams)
        });
    }
}

//# sourceMappingURL=DynamicRoute.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/StaticRoute.js

/**
 * Regular expression matching all control characters used in regular
 * expressions. The regular expression is used to match these characters in
 * path expressions and replace them appropriately so the path expression can
 * be compiled to a regular expression.
 */ const CONTROL_CHARACTERS_REGEXP = /[\\.+*?^$[\](){}/'#]/g;
/**
 * Regular expression used to match the parameter names from a path expression.
 */ const PARAMS_REGEXP_UNIVERSAL = /:\??([\w-]+)/g;
/**
 * Regular expression used to match the required parameter names from a path expression.
 */ const PARAMS_REGEXP_REQUIRED = /(?:^|\\\/):([a-z0-9]+)(?=\\\/|$)/gi;
/**
 * Regular expression used to separate a camelCase parameter name
 */ const PARAMS_REGEXP_CORE_NAME = /[a-z0-9]+/i;
/**
 * Regular expression used to match start of parameter names from a path expression.
 */ const PARAMS_START_PATTERN = '(^|/|[_-])';
/**
 * Regular expression used to match end of parameter names from a path expression.
 */ const PARAMS_END_PATTERN = '[/?_-]|$';
/**
 * Regular expression used to never match the parameter names from a path expression.
 * It's used for wrong parameters order (optional vs. required ones)
 */ const PARAMS_NEVER_MATCH_REGEXP = /$a/;
/**
 * Regular expression used to match all main parameter names from a path expression.
 */ const PARAMS_MAIN_REGEXP = /(?:\\\/|^):\\\?([a-z0-9]+)(?=\\\/|$)|(?:^|\\\/):([a-z0-9]+)(?=\\\/|$)/gi;
/**
 * Regular expression used to match the required subparameter names from a path expression.
 * (e.g. for path '/:paramA-:paramB/:nextParam' are subparameters 'paramA' and 'paramB')
 */ const SUBPARAMS_REQUIRED_REGEXP = {
    LAST: /([_-]{1})((\w-)?:[a-z0-9]+)(?=\\\/|$)/gi,
    OTHERS: /(:[a-z0-9]+)(?=[_-]{1})/gi
};
/**
 * Regular expression used to match the optional parameter names from a path expression.
 */ const SUBPARAMS_OPT_REGEXP = {
    LAST: /([_-]{1}(\w-)?:\\\?[a-z0-9]+)(?=\\\/|$)/gi,
    OTHERS: /(:\\\?[a-z0-9]+)(?=[_-]{1}(\w-)?)/gi
};
/**
 * Regular expression used to match the parameter names from a path expression.
 */ const PARAMS_REGEXP_OPT = /(?:^:\\\?([a-z0-9]+)(?=\\\/|$))|(?:(\\\/):\\\?([a-z0-9]+)(?=\\\/|$))/gi; // last part: |(?::\\\?([a-z0-9]+)(?=\\\/|$))
/**
 * Utility for representing and manipulating a single static route in the
 * router's configuration using string representation of the path expression
 * with special param fields identified by `:paramName` prefix.
 */ class StaticRoute extends AbstractRoute {
    _trimmedPathExpression;
    _parameterNames;
    _hasParameters;
    _matcher;
    /**
   * @inheritDoc
   * @param pathExpression A path expression specifying the URL path
   *        part matching this route (must not contain a query string),
   *        optionally containing named parameter placeholders specified as
   *        `:parameterName`.
   */ constructor(name, pathExpression, controller, view, options){
        super(name, pathExpression, controller, view, options);
        /**
     * The path expression with the trailing slashes trimmed.
     */ this._trimmedPathExpression = this.getTrimmedPath(pathExpression);
        /**
     * The names of the parameters in this route.
     */ this._parameterNames = this._getParameterNames(pathExpression);
        /**
     * Set to `true` if this route contains parameters in its path.

     */ this._hasParameters = !!this._parameterNames.length;
        /**
     * A regexp used to match URL path against this route and extract the
     * parameter values from the matched URL paths.
     */ this._matcher = this._compileToRegExp(this._trimmedPathExpression);
    }
    /**
   * @inheritDoc
   */ toPath(params = {}) {
        let path = this._pathExpression;
        const queryParams = {};
        for (const paramName of Object.keys(params)){
            if (this._isRequiredParamInPath(path, paramName)) {
                path = this._substituteRequiredParamInPath(path, paramName, params[paramName]);
            } else if (this._isOptionalParamInPath(path, paramName)) {
                path = this._substituteOptionalParamInPath(path, paramName, params[paramName]);
            } else {
                queryParams[paramName] = params[paramName];
            }
        }
        path = this._cleanUnusedOptionalParams(path);
        if (Object.keys(queryParams).length) {
            path += `?${new URLSearchParams(queryParams).toString()}`;
        }
        return this.getTrimmedPath(path);
    }
    /**
   * @inheritDoc
   */ matches(path) {
        const trimmedPath = this.getTrimmedPath(path);
        return this._matcher.test(trimmedPath);
    }
    /**
   * @inheritDoc
   */ extractParameters(path, baseUrl) {
        const trimmedPath = this.getTrimmedPath(path);
        const parameters = this._getParameters(trimmedPath);
        return {
            ...parameters,
            ...Object.fromEntries(new URL(`${baseUrl}${path}`).searchParams)
        };
    }
    /**
   * Replace required parameter placeholder in path with parameter value.
   */ _substituteRequiredParamInPath(path, paramName, paramValue) {
        return path.replace(new RegExp(`${PARAMS_START_PATTERN}:${paramName}(${PARAMS_END_PATTERN})`), paramValue ? '$1' + encodeURIComponent(paramValue) + '$2' : '');
    }
    /**
   * Replace optional param placeholder in path with parameter value.
   */ _substituteOptionalParamInPath(path, paramName, paramValue) {
        const paramRegexp = `${PARAMS_START_PATTERN}:\\?${paramName}(${PARAMS_END_PATTERN})`;
        return path.replace(new RegExp(paramRegexp), paramValue ? '$1' + encodeURIComponent(paramValue) + '$2' : '/');
    }
    /**
   * Remove unused optional param placeholders in path.
   */ _cleanUnusedOptionalParams(path) {
        let replacedPath = path;
        // remove last subparameters
        replacedPath = replacedPath.replace(/([_-])(:\?([a-z0-9]+))(?=\/)/gi, '$1');
        // remove parameters
        replacedPath = replacedPath.replace(/(\/:\?([a-z0-9]+))|(:\?([a-z0-9]+)\/?)/gi, '');
        return replacedPath;
    }
    /**
   * Returns true, if paramName is placed in path.
   */ _isOptionalParamInPath(path, paramName) {
        const paramRegexp = `${PARAMS_START_PATTERN}:\\?${paramName}(?:${PARAMS_END_PATTERN})`;
        const regexp = new RegExp(paramRegexp);
        return regexp.test(path);
    }
    /**
   * Returns true, if paramName is placed in path and it's required.
   */ _isRequiredParamInPath(path, paramName) {
        const regexp = new RegExp(`:${paramName}`);
        return regexp.test(path);
    }
    /**
   * Extract clear parameter name, e.q. '?name' or 'name'
   */ _getClearParamName(rawParam) {
        const regExpr = /\??[a-z0-9]+/i;
        const paramMatches = rawParam.match(regExpr);
        const param = paramMatches ? paramMatches[0] : '';
        return param;
    }
    /**
   * Get pattern for subparameter.
   */ _getSubparamPattern(delimiter) {
        const pattern = `([^${delimiter}?/]+)`;
        return pattern;
    }
    /**
   * Check if all optional params are below required ones
   */ _checkOptionalParamsOrder(allMainParams) {
        let optionalLastId = -1;
        const count = allMainParams.length;
        for(let idx = 0; idx < count; idx++){
            const item = allMainParams[idx];
            if (item.substr(0, 1) === '?') {
                optionalLastId = idx;
            } else {
                if (optionalLastId > -1 && idx > optionalLastId) {
                    return false;
                }
            }
        }
        return true;
    }
    /**
   * Check if main parameters have correct order.
   * It means that required param cannot follow optional one.
   *
   * @param clearedPathExpr The cleared URL path (removed first and last slash, ...).
   * @return Returns TRUE if order is correct.
   */ _checkParametersOrder(clearedPathExpr) {
        const mainParamsMatches = clearedPathExpr.match(PARAMS_MAIN_REGEXP) || [];
        const allMainParamsCleared = mainParamsMatches.map((paramExpr)=>this._getClearParamName(paramExpr));
        const isCorrectParamOrder = this._checkOptionalParamsOrder(allMainParamsCleared);
        return isCorrectParamOrder;
    }
    /**
   * Convert main optional parameters to capture sequences
   *
   * @param path The URL path.
   * @param optionalParams List of main optimal parameter expressions
   * @return RegExp pattern.
   */ _replaceOptionalParametersInPath(path, optionalParams) {
        const pattern = optionalParams.reduce((path, paramExpr, idx, matches)=>{
            const lastIdx = matches.length - 1;
            const hasSlash = paramExpr.substr(0, 2) === '\\/';
            let separator = '';
            if (idx === 0) {
                separator = '(?:' + (hasSlash ? '/' : '');
            } else {
                separator = hasSlash ? '/?' : '';
            }
            let regExpr = separator + `([^/?]+)?(?=/|$)?`;
            if (idx === lastIdx) {
                regExpr += ')?';
            }
            return path.replace(paramExpr, regExpr);
        }, path);
        return pattern;
    }
    /**
   * Convert required subparameters to capture sequences
   *
   * @param path The URL path (route definition).
   * @param clearedPathExpr The original cleared URL path.
   * @return RegExp pattern.
   */ _replaceRequiredSubParametersInPath(path, clearedPathExpr) {
        const requiredSubparamsOthers = clearedPathExpr.match(SUBPARAMS_REQUIRED_REGEXP.OTHERS) || [];
        const requiredSubparamsLast = clearedPathExpr.match(SUBPARAMS_REQUIRED_REGEXP.LAST) || [];
        path = requiredSubparamsOthers.reduce((pattern, paramExpr)=>{
            const paramIdx = pattern.indexOf(paramExpr) + paramExpr.length;
            const delimiter = pattern.substr(paramIdx, 1);
            const regExpr = this._getSubparamPattern(delimiter);
            return pattern.replace(paramExpr, regExpr);
        }, path);
        path = requiredSubparamsLast.reduce((pattern, rawParamExpr)=>{
            const paramExpr = rawParamExpr.substr(1);
            const regExpr = '([^/?]+)';
            return pattern.replace(paramExpr, regExpr);
        }, path);
        return path;
    }
    /**
   * Convert optional subparameters to capture sequences
   *
   * @param path The URL path (route definition).
   * @param optionalSubparamsOthers List of all subparam. expressions but last ones
   * @param optionalSubparamsLast List of last subparam. expressions
   * @return RegExp pattern.
   */ _replaceOptionalSubParametersInPath(path, optionalSubparamsOthers, optionalSubparamsLast) {
        path = optionalSubparamsOthers.reduce((pattern, paramExpr)=>{
            const paramIdx = pattern.indexOf(paramExpr) + paramExpr.length;
            const delimiter = pattern.substr(paramIdx, 1);
            const paramPattern = this._getSubparamPattern(delimiter);
            const regExpr = paramPattern + '?';
            return pattern.replace(paramExpr, regExpr);
        }, path);
        path = optionalSubparamsLast.reduce((pattern, rawParamExpr)=>{
            const paramExpr = rawParamExpr.substr(1);
            const regExpr = '([^/?]+)?';
            return pattern.replace(paramExpr, regExpr);
        }, path);
        return path;
    }
    /**
   * Compiles the path expression to a regular expression that can be used
   * for easier matching of URL paths against this route, and extracting the
   * path parameter values from the URL path.
   *
   * @param pathExpression The path expression to compile.
   * @return The compiled regular expression.
   */ _compileToRegExp(pathExpression) {
        const clearedPathExpr = pathExpression.replace(LOOSE_SLASHES_REGEXP, '').replace(CONTROL_CHARACTERS_REGEXP, '\\$&');
        const requiredMatches = clearedPathExpr.match(PARAMS_REGEXP_REQUIRED) || [];
        const optionalMatches = clearedPathExpr.match(PARAMS_REGEXP_OPT) || [];
        const optionalSubparamsLast = clearedPathExpr.match(SUBPARAMS_OPT_REGEXP.LAST) || [];
        const optionalSubparamsOthers = clearedPathExpr.match(SUBPARAMS_OPT_REGEXP.OTHERS) || [];
        const optionalSubparams = [
            ...optionalSubparamsOthers,
            ...optionalSubparamsLast
        ];
        const optionalSubparamsCleanNames = optionalSubparams.map((paramExpr)=>{
            return this._getClearParamName(paramExpr);
        });
        const optionalParams = optionalMatches.filter((paramExpr)=>{
            const param = this._getClearParamName(paramExpr);
            return !optionalSubparamsCleanNames.includes(param);
        });
        if (!!requiredMatches.length && !!optionalParams.length) {
            const isCorrectParamOrder = this._checkParametersOrder(clearedPathExpr);
            if (!isCorrectParamOrder) {
                return PARAMS_NEVER_MATCH_REGEXP;
            }
        }
        // convert required parameters to capture sequences
        let pattern = requiredMatches.reduce((pattern, rawParamExpr)=>{
            const paramExpr = ':' + this._getClearParamName(rawParamExpr);
            const regExpr = '([^/?#]+)';
            return pattern.replace(paramExpr, regExpr);
        }, clearedPathExpr);
        pattern = this._replaceOptionalParametersInPath(pattern, optionalParams);
        pattern = this._replaceRequiredSubParametersInPath(pattern, clearedPathExpr);
        pattern = this._replaceOptionalSubParametersInPath(pattern, optionalSubparamsOthers, optionalSubparamsLast);
        // add path root
        pattern = '^\\/' + pattern;
        // add query parameters matcher
        const pairPattern = '[^=&;]*(?:=[^&;]*)?';
        pattern += `(?:[\\?\\#](?:${pairPattern})(?:[&;]${pairPattern})*)?$`;
        return new RegExp(pattern);
    }
    /**
   * Parses the provided path and extract the in-path parameters. The method
   * decodes the parameters and returns them in a hash object.
   */ _getParameters(path) {
        if (!this._hasParameters) {
            return {};
        }
        const parameterValues = path.match(this._matcher);
        if (!parameterValues) {
            return {};
        }
        parameterValues.shift(); // remove the match on whole path, and other parts
        return this._extractParameters(parameterValues);
    }
    /**
   * Extract parameters from given path.
   */ _extractParameters(parameterValues) {
        const parameters = {};
        const parametersCount = this._parameterNames.length;
        // Cycle for names and values from last to 0
        for(let i = parametersCount - 1; i >= 0; i--){
            const [rawName, rawValue] = [
                this._parameterNames[i],
                parameterValues[i]
            ];
            const cleanParamName = this._cleanOptParamName(rawName);
            const matchesName = cleanParamName.match(PARAMS_REGEXP_CORE_NAME);
            const currentCoreName = matchesName ? matchesName[0] : '';
            if (currentCoreName) {
                let value;
                try {
                    value = decodeURIComponent(rawValue);
                } catch  {
                    value = '';
                }
                parameters[currentCoreName] = rawValue ? value : rawValue;
            }
        }
        return parameters;
    }
    /**
   * Returns optional param name without "?"
   *
   * @param paramName Full param name with "?"
   * @return Strict param name without "?"
   */ _cleanOptParamName(paramName) {
        return paramName.replace('?', '');
    }
    /**
   * Checks if parameter is optional or not.
   *
   * @param paramName
   * @return return true if is optional, otherwise false
   */ _isParamOptional(paramName) {
        return /\?.+/.test(paramName);
    }
    /**
   * Extracts the parameter names from the provided path expression.
   *
   * @param pathExpression The path expression.
   * @return The names of the parameters defined in the provided
   *         path expression.
   */ _getParameterNames(pathExpression) {
        const rawNames = pathExpression.match(PARAMS_REGEXP_UNIVERSAL) || [];
        return rawNames.map((rawParameterName)=>{
            return rawParameterName.substring(1).replace('?', '');
        });
    }
}

//# sourceMappingURL=StaticRoute.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/RouteFactory.js


/**
 * Utility factory used by router to create routes.
 */ class RouteFactory {
    static get $dependencies() {
        return [];
    }
    /**
   * Create new instance of ima.core.router.AbstractRoute.
   *
   * @param name The unique name of this route, identifying it among
   *        the rest of the routes in the application.
   * @param pathExpression A path expression
   *        specifying either the URL path part matching this route (must not\
   *        contain a query string) with optionally containing named parameter
   *        placeholders specified as `:parameterName`. Or object defining
   *        matcher in form of regular expression and toPath and extractParameters
   *        function overrides.
   * @param controller The full name of Object Container alias
   *        identifying the controller associated with this route.
   * @param view The full name or Object Container alias identifying
   *        the view class associated with this route.
   * @param options The route additional options.
   * @return The constructed route.
   */ createRoute(name, pathExpression, controller, view, options) {
        return Reflect.construct(typeof pathExpression === 'string' ? StaticRoute : DynamicRoute, [
            name,
            pathExpression,
            controller,
            view,
            options
        ]);
    }
}

//# sourceMappingURL=RouteFactory.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/RouteNames.js
/**
 * HTTP status code constants, representing the HTTP status codes recognized
 * and processed by this proxy.
 */ var RouteNames;
(function(RouteNames) {
    RouteNames[/**
   * The internal route name used for the "not found" error page (the 4XX
   * HTTP status code error page).
   */ "NOT_FOUND"] = 'notFound';
    RouteNames[/**
   * The internal route name used for the error page (the 5XX HTTP status
   * code error page).
   */ "ERROR"] = 'error';
})(RouteNames || (RouteNames = {}));

//# sourceMappingURL=RouteNames.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/AbstractRouter.js









/**
 * The basic implementation of the {@link Router} interface, providing the
 * common or default functionality for parts of the API.
 */ class AbstractRouter extends Router {
    /**
   * The page manager handling UI rendering, and transitions between
   * pages if at the client side.
   */ _pageManager;
    /**
   * Factory for routes.
   */ _factory;
    /**
   * Dispatcher fires events to app.
   */ _dispatcher;
    /**
   * The current protocol used to access the application, terminated by a
   * colon (for example `https:`).
   */ _protocol = '';
    /**
   * The application's host.
   */ _host = '';
    /**
   * The URL path pointing to the application's root.
   */ _root = '';
    /**
   * The URL path fragment used as a suffix to the `_root` field
   * that specifies the current language.
   */ _languagePartPath = '';
    /**
   * Storage of all known routes and middlewares. The key are their names.
   */ _routeHandlers = new Map();
    /**
   * Middleware ID counter which is used to auto-generate unique middleware
   * names when adding them to routeHandlers map.
   */ _currentMiddlewareId = 0;
    _currentlyRoutedPath = '';
    _middlewareTimeout;
    /**
   * Initializes the router.
   *
   * @param pageManager The page manager handling UI rendering,
   *        and transitions between pages if at the client side.
   * @param factory Factory for routes.
   * @param dispatcher Dispatcher fires events to app.
   * @example
   *      router.link('article', {articleId: 1});
   * @example
   *      router.redirect('http://www.example.com/web');
   * @example
   *      router.add(
   *        'home',
   *        '/',
   *        ns.app.page.home.Controller,
   *        ns.app.page.home.View,
   *        {
   *          onlyUpdate: false,
   *          autoScroll: true,
   *          documentView: null,
   *          managedRootView: null,
   *          viewAdapter: null
   *        }
   *      );
   */ constructor(pageManager, factory, dispatcher, middlewareTimeout){
        super();
        this._pageManager = pageManager;
        this._factory = factory;
        this._dispatcher = dispatcher;
        this._middlewareTimeout = middlewareTimeout ?? 30000;
    }
    /**
   * @inheritDoc
   */ init(config) {
        this._protocol = config.$Protocol || '';
        this._root = config.$Root || '';
        this._languagePartPath = config.$LanguagePartPath || '';
        this._host = config.$Host;
        this._currentlyRoutedPath = this.getPath();
    }
    /**
   * @inheritDoc
   */ add(name, pathExpression, controller, view, options) {
        if (this._routeHandlers.has(name)) {
            throw new GenericError(`ima.core.router.AbstractRouter.add: The route with name ${name} ` + `is already defined`, {
                name,
                pathExpression,
                options
            });
        }
        const factory = this._factory;
        const route = factory.createRoute(name, pathExpression, controller, view, options);
        this._routeHandlers.set(name, route);
        return this;
    }
    /**
   * @inheritDoc
   */ use(middleware) {
        this._routeHandlers.set(`middleware-${this._currentMiddlewareId++}`, middleware);
        return this;
    }
    /**
   * @inheritDoc
   */ remove(name) {
        this._routeHandlers.delete(name);
        return this;
    }
    /**
   * @inheritDoc
   */ getRouteHandler(name) {
        return this._routeHandlers.get(name);
    }
    /**
   * @inheritDoc
   */ getPath() {
        throw new GenericError('The getPath() method is abstract and must be overridden.');
    }
    /**
   * @inheritDoc
   */ getUrl() {
        return this.getBaseUrl() + this.getPath();
    }
    /**
   * @inheritDoc
   */ getBaseUrl() {
        return this.getDomain() + this._root + this._languagePartPath;
    }
    /**
   * @inheritDoc
   */ getDomain() {
        return this._protocol + '//' + this._host;
    }
    /**
   * @inheritDoc
   */ getHost() {
        return this._host;
    }
    /**
   * @inheritDoc
   */ getProtocol() {
        return this._protocol;
    }
    /**
   * @inheritDoc
   */ getCurrentRouteInfo() {
        const path = this.getPath();
        let { route } = this.getRouteHandlersByPath(path);
        if (!route) {
            const notFoundRoute = this._routeHandlers.get(RouteNames.NOT_FOUND);
            if (!notFoundRoute || !(notFoundRoute instanceof AbstractRoute)) {
                throw new GenericError(`ima.core.router.AbstractRouter.getCurrentRouteInfo: The route ` + `for path ${path} is not defined, or it's not instance of AbstractRoute.`, {
                    route: notFoundRoute,
                    path
                });
            }
            route = notFoundRoute;
        }
        const params = route.extractParameters(path, this.getBaseUrl());
        return {
            route,
            params,
            path
        };
    }
    /**
   * @inheritDoc
   */ getRouteHandlers() {
        return this._routeHandlers;
    }
    /**
   * @inheritDoc
   * @abstract
   */ listen() {
        throw new GenericError('The listen() method is abstract and must be overridden.');
    }
    /**
   * @inheritDoc
   */ unlisten() {
        throw new GenericError('The unlisten() method is abstract and must be overridden.');
    }
    /**
   * @inheritDoc
   */ redirect(url, options, action, locals) {
        throw new GenericError('The redirect() method is abstract and must be overridden.', {
            url,
            options,
            action,
            locals
        });
    }
    /**
   * @inheritDoc
   */ link(routeName, params) {
        const route = this._routeHandlers.get(routeName);
        if (!route) {
            throw new GenericError(`ima.core.router.AbstractRouter:link has undefined route with ` + `name ${routeName}. Add new route with that name.`, {
                routeName,
                params
            });
        }
        if (!(route instanceof AbstractRoute)) {
            throw new GenericError(`ima.core.router.AbstractRouter:link Unable to create link to ${routeName}, ` + `since it's likely a middleware.`, {
                routeName,
                params,
                route
            });
        }
        return this.getBaseUrl() + route.toPath(params);
    }
    /**
   * @inheritDoc
   */ async route(path, options, action, locals) {
        this._currentlyRoutedPath = path;
        let params = {};
        const { route, middlewares } = this.getRouteHandlersByPath(path);
        locals = {
            ...locals,
            action,
            route
        };
        if (!route) {
            params.error = new GenericError(`Route for path '${path}' is not configured.`, {
                status: 404
            });
            return this.handleNotFound(params, {}, locals);
        }
        await this._runMiddlewares(middlewares, params, locals);
        params = {
            ...params,
            ...route.extractParameters(path, this.getBaseUrl())
        };
        await this._runMiddlewares(route.getOptions().middlewares, params, locals);
        return this._handle(route, params, options, action);
    }
    /**
   * @inheritDoc
   */ async handleError(params, options, locals) {
        const errorRoute = this._routeHandlers.get(RouteNames.ERROR);
        if (!errorRoute) {
            throw new GenericError(`ima.core.router.AbstractRouter:handleError cannot process the ` + `error because no error page route has been configured. Add ` + `a new route named '${RouteNames.ERROR}'.`, params);
        }
        if (!(errorRoute instanceof AbstractRoute)) {
            throw new GenericError(`ima.core.router.AbstractRouter:handleError '${RouteNames.ERROR}' is,` + ` not instance of AbstractRoute, please check your configuration.`, {
                errorRoute,
                params,
                options,
                locals
            });
        }
        params = this.#addParamsFromOriginalRoute(params);
        const action = {
            url: this.getUrl(),
            type: ActionTypes.ERROR
        };
        locals = {
            ...locals,
            action,
            route: errorRoute
        };
        await this._runMiddlewares([
            ...this._getMiddlewaresForRoute(RouteNames.ERROR),
            ...errorRoute.getOptions().middlewares
        ], params, locals);
        return this._handle(errorRoute, params, options, action);
    }
    /**
   * @inheritDoc
   */ async handleNotFound(params, options, locals) {
        const notFoundRoute = this._routeHandlers.get(RouteNames.NOT_FOUND);
        if (!notFoundRoute) {
            throw new GenericError(`ima.core.router.AbstractRouter:handleNotFound cannot processes ` + `a non-matching route because no not found page route has ` + `been configured. Add new route named ` + `'${RouteNames.NOT_FOUND}'.`, {
                ...params,
                status: HttpStatusCode.TIMEOUT
            });
        }
        if (!(notFoundRoute instanceof AbstractRoute)) {
            throw new GenericError(`ima.core.router.AbstractRouter:handleNotFound '${RouteNames.NOT_FOUND}' is,` + ` not instance of AbstractRoute, please check your configuration.`, {
                notFoundRoute,
                params,
                options,
                locals
            });
        }
        params = this.#addParamsFromOriginalRoute(params);
        const action = {
            url: this.getBaseUrl() + this._getCurrentlyRoutedPath(),
            type: ActionTypes.ERROR
        };
        locals = {
            ...locals,
            action,
            route: notFoundRoute
        };
        await this._runMiddlewares([
            ...this._getMiddlewaresForRoute(RouteNames.NOT_FOUND),
            ...notFoundRoute.getOptions().middlewares
        ], params, locals);
        return this._handle(notFoundRoute, params, options, action);
    }
    /**
   * @inheritDoc
   */ isClientError(reason) {
        return reason instanceof IMAError && reason.isClientError();
    }
    /**
   * @inheritDoc
   */ isRedirection(reason) {
        return reason instanceof IMAError && reason.isRedirection();
    }
    /**
   * Strips the URL path part that points to the application's root (base
   * URL) from the provided path.
   *
   * @protected
   * @param path Relative or absolute URL path.
   * @return URL path relative to the application's base URL.
   */ _extractRoutePath(path) {
        return path.replace(this._root + this._languagePartPath, '');
    }
    /**
   * Handles the provided route and parameters by initializing the route's
   * controller and rendering its state via the route's view.
   *
   * The result is then sent to the client if used at the server side, or
   * displayed if used as the client side.
   *
   * @param route The route that should have its
   *        associated controller rendered via the associated view.
   * @param params Parameters extracted from
   *        the URL path and query.
   * @param options The options overrides route options defined in the
   *        `routes.js` configuration file.
   * @param action An action
   *        object describing what triggered this routing.
   * @return A promise that resolves when the
   *         page is rendered and the result is sent to the client, or
   *         displayed if used at the client side.
   */ async _handle(route, params, options, action) {
        const routeOptions = Object.assign({}, route.getOptions(), options);
        const eventData = {
            route,
            params,
            path: this._getCurrentlyRoutedPath(),
            options: routeOptions,
            action
        };
        await autoYield();
        /**
     * Call pre-manage to cancel/property kill previously managed
     * route handler.
     */ await this._pageManager.preManage();
        this._dispatcher.fire(RouterEvents.BEFORE_HANDLE_ROUTE, eventData, true);
        return this._pageManager.manage({
            route,
            options: routeOptions,
            params,
            action
        }).then(async (response)=>{
            response = response || {};
            if (params?.error instanceof Error) {
                response.error = params.error;
            }
            await autoYield();
            this._dispatcher.fire(RouterEvents.AFTER_HANDLE_ROUTE, {
                ...eventData,
                response
            }, true);
            return response;
        }).finally(async ()=>{
            await autoYield();
            return this._pageManager.postManage();
        });
    }
    /**
   * Returns the route matching the provided URL path part (the path may
   * contain a query) and all middlewares preceding this route definition.
   *
   * @param path The URL path.
   * @return The route
   *         matching the path and middlewares preceding it or `{}`
   *         (empty object) if no such route exists.
   */ getRouteHandlersByPath(path) {
        const middlewares = [];
        for (const routeHandler of this._routeHandlers.values()){
            if (!(routeHandler instanceof AbstractRoute)) {
                middlewares.push(routeHandler);
                continue;
            }
            if (routeHandler.matches(path)) {
                return {
                    route: routeHandler,
                    middlewares
                };
            }
        }
        return {
            middlewares
        };
    }
    /**
   * Returns middlewares preceding given route name.
   */ _getMiddlewaresForRoute(routeName) {
        const middlewares = [];
        for (const routeHandler of this._routeHandlers.values()){
            if (!(routeHandler instanceof AbstractRoute)) {
                middlewares.push(routeHandler);
                continue;
            }
            if (routeHandler.getName() === routeName) {
                return middlewares;
            }
        }
        return middlewares;
    }
    /**
   * Returns path that is stored in private property when a `route`
   * method is called.
   */ _getCurrentlyRoutedPath() {
        return this._currentlyRoutedPath;
    }
    /**
   * Runs provided middlewares in sequence.
   *
   * @param middlewares Array of middlewares.
   * @param params Router params that can be
   *        mutated by middlewares.
   * @param locals The locals param is used to pass local data
   *        between middlewares.
   */ async _runMiddlewares(middlewares, params, locals) {
        if (!Array.isArray(middlewares)) {
            return;
        }
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject)=>{
            const rejectTimeout = setTimeout(()=>{
                reject(new GenericError('Middleware execution timeout, check your middlewares for any unresolved time consuming promises.' + ` All middlewares should finish execution within ${this._middlewareTimeout}ms timeframe.`));
            }, this._middlewareTimeout);
            for (const middleware of middlewares){
                try {
                    await autoYield();
                    /**
           * When middleware uses next() function we await in indefinitely
           * until the function is called. Otherwise we just await the middleware
           * async function.
           */ const result = await (middleware.length === 3 ? new Promise((resolve)=>middleware(params, locals, resolve)) : middleware(params, locals));
                    locals = {
                        ...locals,
                        ...result
                    };
                } catch (error) {
                    reject(error);
                }
            }
            clearTimeout(rejectTimeout);
            resolve();
        });
    }
    /**
   * Obtains original route that was handled before not-found / error route
   * and assigns its params to current params
   *
   * @param params Route params for not-found or
   *        error page
   * @returns Provided params merged with params
   *        from original route
   */ #addParamsFromOriginalRoute(params) {
        const originalPath = this._getCurrentlyRoutedPath();
        const { route } = this.getRouteHandlersByPath(originalPath);
        if (!route) {
            // try to at least extract query string params from path
            return {
                ...Object.fromEntries(new URL(this.getUrl()).searchParams),
                ...params
            };
        }
        return {
            ...route.extractParameters(originalPath, this.getUrl()),
            ...params
        };
    }
}

//# sourceMappingURL=AbstractRouter.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/router/ServerRouter.js






/**
 * The server-side implementation of the {@link Router} interface.
 */ class ServerRouter extends AbstractRouter {
    #request;
    #response;
    static get $dependencies() {
        return [
            PageManager,
            RouteFactory,
            Dispatcher,
            Request,
            Response,
            // @ts-expect-error `FIXME`
            '?$Settings.$Router.middlewareTimeout'
        ];
    }
    /**
   * Initializes the router.
   *
   * @param pageManager The current page manager.
   * @param factory The router factory used to create routes.
   * @param dispatcher Dispatcher fires events to app.
   * @param request The current HTTP request.
   * @param response The current HTTP response.
   * @param middlewareTimeout Middleware timeout value in ms.
   */ constructor(pageManager, factory, dispatcher, request, response, middlewareTimeout){
        super(pageManager, factory, dispatcher, middlewareTimeout);
        this.#request = request;
        this.#response = response;
    }
    /**
   * @inheritDoc
   */ getPath() {
        return this._extractRoutePath(this.#request.getPath());
    }
    /**
   * @inheritDoc
   */ listen() {
        return this;
    }
    /**
   * @inheritDoc
   */ unlisten() {
        return this;
    }
    /**
   * @inheritDoc
   */ redirect(url = '/', options) {
        this.#response.redirect(url, {
            httpStatus: 302,
            ...options
        });
    }
}

//# sourceMappingURL=ServerRouter.js.map
;// CONCATENATED MODULE: ./node_modules/memoize-one/dist/memoize-one.esm.js
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this,
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}



;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/storage/Storage.js
/**
 * The {@link Storage} is an unordered collection of named values of any
 * type. Values in the storage are named using `string` keys. The storage
 * can be therefore thought of as a `Map<string, *>`.....
 */ class Storage {
    /**
   * This method is used to finalize the initialization of the storage after
   * the dependencies provided through the constructor have been prepared for
   * use.
   *
   * This method must be invoked only once and it must be the first method
   * invoked on this instance.
   *
   * @return This storage.
   */ init() {
        return this;
    }
    /**
   * Returns `true` if the entry identified by the specified key exists
   * in this storage.
   *
   * @param key The key identifying the storage entry.
   * @return `true` if the storage entry exists.
   */ has(key) {
        return false;
    }
    /**
   * Retrieves the value of the entry identified by the specified . The
   * method returns `undefined` if the entry does not exists.
   *
   * Entries set to the `undefined` value can be tested for existence
   * using the `link has` method.
   *
   * @param key The key identifying the storage entry.
   * @return The value of the storage entry.
   */ get(key) {
        return undefined;
    }
    /**
   * Sets the storage entry identified by the specified key to the provided
   * value. The method creates the entry if it does not exist already.
   *
   * @param key The key identifying the storage entry.
   * @param value The storage entry value.
   * @return This storage.
   */ set(key, value) {
        return this;
    }
    /**
   * Deletes the entry identified by the specified key from this storage.
   *
   * @param key The key identifying the storage entry.
   * @return This storage.
   */ delete(key) {
        return this;
    }
    /**
   * Clears the storage of all entries.
   *
   * @return This storage.
   */ clear() {
        return this;
    }
    /**
   * Returns an iterator for traversing the keys in this storage. The order
   * in which the keys are traversed is undefined.
   *
   * @return An iterator for traversing the keys in this
   *         storage. The iterator also implements the iterable protocol,
   *         returning itself as its own iterator, allowing it to be used in
   *         a `for..of` loop.
   */ keys() {
        return [];
    }
    /**
   * Returns the number of entries in this storage.
   *
   * @return The number of entries in this storage.
   */ size() {
        return 0;
    }
}

//# sourceMappingURL=Storage.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/storage/CookieStorage.js






/**
 * Implementation note: This is the largest possible safe value that has been
 * tested, used to represent "infinity".
 */ const MAX_EXPIRE_DATE = new Date('Fri, 31 Dec 9999 23:59:59 UTC');
/**
 * Separator used to separate cookie declarations in the `Cookie` HTTP
 * header or the return value of the `document.cookie` property.
 */ const COOKIE_SEPARATOR = '; ';
/**
 * Storage of cookies, mirroring the cookies to the current request / response
 * at the server side and the `document.cookie` property at the client
 * side. The storage caches the cookies internally.
 */ class CookieStorage extends Storage {
    /**
   * The window utility used to determine whether the IMA is being run
   * at the client or at the server.
   */ _window;
    /**
   * The current HTTP request. This field is used at the server side.
   */ _request;
    /**
   * The current HTTP response. This field is used at the server side.
   */ _response;
    /**
   * The internal storage of entries.
   */ _storage = new Map();
    /**
   * The overriding cookie attribute values.
   */ _options = {
        path: '/',
        expires: undefined,
        maxAge: undefined,
        secure: false,
        httpOnly: false,
        domain: '',
        sameSite: 'Lax'
    };
    /**
   * Transform encode and decode functions for cookie value.
   */ _transformFunction = {
        encode: (value)=>value,
        decode: (value)=>value
    };
    /**
   * Memoized function of private parseRawCookies function
   */ #memoParseRawCookies = memoizeOne(this.#parseRawCookies);
    static get $dependencies() {
        return [
            Window,
            Request,
            Response
        ];
    }
    /**
   * Initializes the cookie storage.
   *
   * @param window The window utility.
   * @param request The current HTTP request.
   * @param response The current HTTP response.
   * @example
   *      cookie.set('cookie', 'value', { expires: 10 }); // cookie expires
   *                                                      // after 10s
   *      cookie.set('cookie'); // delete cookie
   *
   */ constructor(window, request, response){
        super();
        this._window = window;
        this._request = request;
        this._response = response;
    }
    /**
   * @inheritDoc
   */ init(options = {}, transformFunction = {}) {
        this._transformFunction = Object.assign(this._transformFunction, transformFunction);
        this._options = Object.assign(this._options, options);
        this.parse();
        return this;
    }
    /**
   * @inheritDoc
   */ has(name) {
        this.parse();
        return this._storage.has(name);
    }
    /**
   * @inheritDoc
   */ get(name) {
        this.parse();
        return this._storage.has(name) ? this._storage.get(name).value : undefined;
    }
    /**
   * @inheritDoc
   * @param name The key identifying the storage entry.
   * @param value The storage entry value.
   * @param options The cookie options. The `maxAge` is the maximum
   *        age in seconds of the cookie before it will be deleted, the
   *        `expires` is an alternative to that, specifying the moment
   *        at which the cookie will be discarded. The `domain` and
   *        `path` specify the cookie's domain and path. The
   *        `httpOnly` and `secure` flags set the flags of the
   *        same name of the cookie.
   */ set(name, value, options = {}) {
        options = Object.assign({}, this._options, options);
        if (value === undefined) {
            // Deletes the cookie
            options.maxAge = 0;
            options.expires = this.getExpirationAsDate(-1);
        } else {
            this.recomputeCookieMaxAgeAndExpires(options);
        }
        value = this.sanitizeCookieValue(value + '');
        if (this._window.isClient()) {
            document.cookie = this.#generateCookieString(name, value, options);
        } else {
            this._response.setCookie(name, value, options);
        }
        this._storage.set(name, {
            value,
            options
        });
        return this;
    }
    /**
   * Deletes the cookie identified by the specified name.
   *
   * @param name Name identifying the cookie.
   * @param options The cookie options. The `domain` and
   *        `path` specify the cookie's domain and path. The
   *        `httpOnly` and `secure` flags set the flags of the
   *        same name of the cookie.
   * @return This storage.
   */ delete(name, options = {}) {
        if (this._storage.has(name)) {
            this.set(name, undefined, options);
            this._storage.delete(name);
        }
        return this;
    }
    /**
   * @inheritDoc
   */ clear() {
        for (const cookieName of this._storage.keys()){
            this.delete(cookieName);
        }
        this._storage.clear();
        return this;
    }
    /**
   * @inheritDoc
   */ keys() {
        this.parse();
        return this._storage.keys();
    }
    /**
   * @inheritDoc
   */ size() {
        this.parse();
        return this._storage.size;
    }
    /**
   * Returns all cookies in this storage serialized to a string compatible
   * with the `Cookie` HTTP header.
   *
   * @return All cookies in this storage serialized to a string
   *         compatible with the `Cookie` HTTP header.
   */ getCookiesStringForCookieHeader() {
        const cookieStrings = [];
        for (const cookieName of this._storage.keys()){
            const cookieItem = this._storage.get(cookieName);
            cookieStrings.push(this.#generateCookieString(cookieName, cookieItem.value, {}));
        }
        return cookieStrings.join(COOKIE_SEPARATOR);
    }
    /**
   * Parses cookies from the provided `Set-Cookie` HTTP header value.
   *
   * The parsed cookies will be set to the internal storage, and the current
   * HTTP response (via the `Set-Cookie` HTTP header) if at the server
   * side, or the browser (via the `document.cookie` property).
   *
   * @param setCookieHeader The value of the `Set-Cookie` HTTP
   *        header.
   */ parseFromSetCookieHeader(setCookieHeader) {
        const cookie = this.#extractCookie(setCookieHeader);
        if (typeof cookie.name === 'string') {
            this.set(cookie.name, cookie.value, cookie.options);
        }
    }
    /**
   * Parses cookies from a cookie string and sets the parsed cookies to the
   * internal storage.
   *
   * The method obtains the cookie string from the request's `Cookie`
   * HTTP header when used at the server side, and the `document.cookie`
   * property at the client side.
   */ parse() {
        const cookiesNames = this.#memoParseRawCookies(this._window.isClient() ? document.cookie : this._request.getCookieHeader());
        // remove cookies from storage, which were not parsed
        for (const storageCookieName of this._storage.keys()){
            const index = cookiesNames.indexOf(storageCookieName);
            if (index === -1) {
                this._storage.delete(storageCookieName);
            }
        }
    }
    /**
   * Sanitize cookie value by rules in
   * (@see http://tools.ietf.org/html/rfc6265#section-4r.1.1). Erase all
   * invalid characters from cookie value.
   *
   * @param value Cookie value
   * @return Sanitized value
   */ sanitizeCookieValue(value) {
        let sanitizedValue = '';
        if (typeof value !== 'string') {
            return sanitizedValue;
        }
        for(let keyChar = 0; keyChar < value.length; keyChar++){
            const charCode = value.charCodeAt(keyChar);
            const char = value[keyChar];
            const isValid = charCode >= 33 && charCode <= 126 && char !== '"' && char !== ';' && char !== '\\';
            if (isValid) {
                sanitizedValue += char;
            } else {
                if ($Debug) {
                    throw new GenericError(`Invalid char ${char} code ${charCode} in ${value}. ` + `Dropping the invalid character from the cookie's ` + `value.`, {
                        value,
                        charCode,
                        char
                    });
                }
            }
        }
        return sanitizedValue;
    }
    /**
   * Recomputes cookie's attributes maxAge and expires between each other.
   *
   * @param options Cookie attributes. Only the attributes listed in the
   *        type annotation of this field are supported. For documentation
   *        and full list of cookie attributes see
   *        http://tools.ietf.org/html/rfc2965#page-5
   */ recomputeCookieMaxAgeAndExpires(options) {
        if (options.maxAge || options.expires) {
            options.expires = this.getExpirationAsDate(options.maxAge || options.expires);
        }
        if (!options.maxAge && options.expires) {
            options.maxAge = Math.floor((options.expires.valueOf() - Date.now()) / 1000);
        }
    }
    /**
   * Converts the provided cookie expiration to a `Date` instance.
   *
   * @param expiration Cookie expiration in seconds
   *        from now, or as a string compatible with the `Date`
   *        constructor.
   * @return Cookie expiration as a `Date` instance.
   */ getExpirationAsDate(expiration) {
        if (expiration instanceof Date) {
            return expiration;
        }
        if (typeof expiration === 'number') {
            return expiration === Infinity ? MAX_EXPIRE_DATE : new Date(Date.now() + expiration * 1000);
        }
        return expiration ? new Date(expiration) : MAX_EXPIRE_DATE;
    }
    #parseRawCookies(rawCookies) {
        const cookiesArray = rawCookies ? rawCookies.split(COOKIE_SEPARATOR) : [];
        const cookiesNames = [];
        for(let i = 0; i < cookiesArray.length; i++){
            const cookie = this.#extractCookie(cookiesArray[i]);
            if (typeof cookie.name === 'string') {
                // if cookie already exists in storage get its old options
                let oldCookieOptions = {};
                if (this._storage.has(cookie.name)) {
                    oldCookieOptions = this._storage.get(cookie.name).options;
                }
                cookie.options = Object.assign({}, this._options, oldCookieOptions, cookie.options // new cookie options (if any)
                );
                cookiesNames.push(cookie.name);
                // add new cookie or update existing one
                this._storage.set(cookie.name, {
                    value: this.sanitizeCookieValue(cookie.value),
                    options: cookie.options
                });
            }
        }
        return cookiesNames;
    }
    /**
   * Creates a copy of the provided word (or text) that has its first
   * character converted to lower case.
   *
   * @param word The word (or any text) that should have its first
   *        character converted to lower case.
   * @return A copy of the provided string with its first character
   *         converted to lower case.
   */ #firstLetterToLowerCase(word) {
        return word.charAt(0).toLowerCase() + word.substring(1);
    }
    /**
   * Generates a string representing the specified cookie, usable either
   * with the `document.cookie` property or the `Set-Cookie` HTTP
   * header.
   *
   * (Note that the `Cookie` HTTP header uses a slightly different
   * syntax.)
   *
   * @param name The cookie name.
   * @param value The cookie value, will be
   *        converted to string.
   * @param options Cookie attributes. Only the attributes listed in the
   *        type annotation of this field are supported. For documentation
   *        and full list of cookie attributes see
   *        http://tools.ietf.org/html/rfc2965#page-5
   * @return A string representing the cookie. Setting this string
   *         to the `document.cookie` property will set the cookie to
   *         the browser's cookie storage.
   */ #generateCookieString(name, value, options) {
        let cookieString = name + '=' + this._transformFunction.encode(value);
        cookieString += options.domain ? ';Domain=' + options.domain : '';
        cookieString += options.path ? ';Path=' + options.path : '';
        cookieString += options.expires ? ';Expires=' + options.expires.toUTCString() : '';
        cookieString += options.maxAge ? ';Max-Age=' + options.maxAge : '';
        cookieString += options.httpOnly ? ';HttpOnly' : '';
        cookieString += options.secure ? ';Secure' : '';
        cookieString += options.sameSite ? ';SameSite=' + options.sameSite : '';
        return cookieString;
    }
    /**
   * Extract cookie name, value and options from cookie string.
   *
   * @param cookieString The value of the `Set-Cookie` HTTP
   *        header.
   */ #extractCookie(cookieString) {
        const cookieOptions = {};
        let cookieName;
        let cookieValue;
        cookieString.split(COOKIE_SEPARATOR.trim()).forEach((pair, index)=>{
            const [name, value] = this.#extractNameAndValue(pair, index);
            if (!name) {
                return;
            }
            if (index === 0) {
                cookieName = name;
                cookieValue = value;
            } else {
                Object.assign(cookieOptions, {
                    [name]: value
                });
            }
        });
        return {
            name: cookieName,
            value: cookieValue,
            options: cookieOptions
        };
    }
    /**
   * Extract name and value for defined pair and pair index.
   */ #extractNameAndValue(pair, pairIndex) {
        const separatorIndexEqual = pair.indexOf('=');
        let name = '';
        let value = null;
        if (pairIndex === 0 && separatorIndexEqual < 0) {
            return [
                null,
                null
            ];
        }
        if (separatorIndexEqual < 0) {
            name = pair.trim();
            value = true;
        } else {
            name = pair.substring(0, separatorIndexEqual).trim();
            value = this._transformFunction.decode(pair.substring(separatorIndexEqual + 1).trim());
            // erase quoted values
            if ('"' === value[0]) {
                value = value.slice(1, -1);
            }
            if (name === 'Expires') {
                value = this.getExpirationAsDate(value);
            }
            if (name === 'Max-Age') {
                name = 'maxAge';
                value = parseInt(value, 10);
            }
        }
        if (pairIndex !== 0) {
            name = this.#firstLetterToLowerCase(name);
        }
        return [
            name,
            value
        ];
    }
}

//# sourceMappingURL=CookieStorage.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/storage/MapStorage.js

/**
 * Implementation of the `link Storage` interface that relies on the
 * native `Map` for storage.
 */ class MapStorage extends Storage {
    /**
   * The internal storage of entries.
   */ _storage = new Map();
    static get $dependencies() {
        return [];
    }
    /**
   * @inheritDoc
   */ init() {
        return this;
    }
    /**
   * @inheritDoc
   */ has(key) {
        return this._storage.has(key);
    }
    /**
   * @inheritDoc
   */ get(key) {
        return this._storage.get(key);
    }
    /**
   * @inheritDoc
   */ set(key, value) {
        this._storage.set(key, value);
        return this;
    }
    /**
   * @inheritDoc
   */ delete(key) {
        this._storage.delete(key);
        return this;
    }
    /**
   * @inheritDoc
   */ clear() {
        this._storage.clear();
        return this;
    }
    /**
   * @inheritDoc
   */ keys() {
        return this._storage.keys();
    }
    /**
   * @override
   */ size() {
        return this._storage.size;
    }
}

//# sourceMappingURL=MapStorage.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/storage/SessionStorage.js



/**
 * Implementation of the `link Storage` interface that relies on the
 * native `sessionStorage` DOM storage for storing its entries.
 */ class SessionStorage extends Storage {
    /**
   * The DOM storage providing the actual storage of the entries.
   */ _storage;
    static get $dependencies() {
        return [
            Window
        ];
    }
    /**
   * Initializes the session storage.
   */ constructor(window){
        super();
        this._storage = window.getWindow().sessionStorage;
    }
    /**
   * @inheritDoc
   */ init() {
        return this;
    }
    /**
   * @inheritDoc
   */ has(key) {
        return !!this._storage.getItem(key);
    }
    /**
   * @inheritDoc
   */ get(key) {
        try {
            return JSON.parse(this._storage.getItem(key))?.value;
        } catch (error) {
            throw new GenericError('ima.storage.SessionStorage.get: Failed to parse a session ' + `storage item value identified by the key ${key}: ` + error.message);
        }
    }
    /**
   * @inheritDoc
   */ set(key, value) {
        try {
            this._storage.setItem(key, JSON.stringify({
                created: Date.now(),
                value
            }));
        } catch (error) {
            const storage = this._storage;
            const isItemTooBig = storage.length === 0 || storage.length === 1 && storage.key(0) === key;
            if (isItemTooBig) {
                throw error;
            }
            this._deleteOldestEntry();
            this.set(key, value);
        }
        return this;
    }
    /**
   * @inheritDoc
   */ delete(key) {
        this._storage.removeItem(key);
        return this;
    }
    /**
   * @inheritDoc
   */ clear() {
        this._storage.clear();
        return this;
    }
    /**
   * @inheritDoc
   */ keys() {
        return new StorageIterator(this._storage);
    }
    /**
   * @override
   */ size() {
        return this._storage.length;
    }
    /**
   * Deletes the oldest entry in this storage.
   */ _deleteOldestEntry() {
        let oldestEntry = {
            created: Date.now() + 1
        };
        for (const key of this.keys()){
            const value = JSON.parse(this._storage.getItem(key));
            if (value.created < oldestEntry.created) {
                oldestEntry = {
                    key,
                    created: value.created
                };
            }
        }
        if (typeof oldestEntry.key === 'string') {
            this.delete(oldestEntry.key);
        }
    }
}
/**
 * Implementation of the iterator protocol and the iterable protocol for DOM
 * storage keys.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
 */ class StorageIterator {
    /**
   * The DOM storage being iterated.
   */ _storage;
    /**
   * The current index of the DOM storage key this iterator will return
   * next.
   */ _currentKeyIndex = 0;
    /**
   * Initializes the DOM storage iterator.
   *
   * @param storage The DOM storage to iterate through.
   */ constructor(storage){
        this._storage = storage;
    }
    /**
   * Iterates to the next item. This method implements the iterator protocol.
   *
   * @return The next value in
   *         the sequence and whether the iterator is done iterating through
   *         the values.
   */ next() {
        // We are sure there is always a value so it can be safely cast to string
        const key = this._storage.key(this._currentKeyIndex);
        return {
            done: this._currentKeyIndex++ === this._storage.length,
            value: key
        };
    }
    /**
   * Returns the iterator for this object (this iterator). This method
   * implements the iterable protocol and provides compatibility with the
   * `for..of` loops.
   *
   * @return This iterator.
   */ [Symbol.iterator]() {
        return this;
    }
}

//# sourceMappingURL=SessionStorage.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/storage/SessionMapStorage.js




/**
 * The `link SessionMap` storage is an implementation of the
 * `link Storage` interface acting as a synchronization proxy between
 * the underlying map storage and the `sessionStorage` DOM storage.
 */ class SessionMapStorage extends Storage {
    /**
   * The map storage, synced with the session storage.
   */ _map;
    /**
   * The session storage, synced with the map storage.
   */ _session;
    static get $dependencies() {
        return [
            MapStorage,
            SessionStorage
        ];
    }
    /**
   * Initializes the storage.
   *
   * @param map The map storage to use.
   * @param session The session storage to use.
   */ constructor(map, session){
        super();
        this._map = map;
        this._session = session;
    }
    /**
   * @inheritDoc
   */ init() {
        this._map.clear();
        for (const key of this._session.keys()){
            if (!key) {
                continue;
            }
            const sessionValue = this._session.get(key);
            if (sessionValue) {
                this._map.set(key, sessionValue);
            }
        }
        return this;
    }
    /**
   * @inheritDoc
   */ has(key) {
        return this._map.has(key);
    }
    /**
   * @inheritDoc
   */ get(key) {
        return this._map.get(key);
    }
    /**
   * @inheritDoc
   */ set(key, value) {
        const canBeSerializedToJSON = !(value instanceof Promise) && (!(value instanceof CacheEntry) || !(value.getValue() instanceof Promise));
        if (canBeSerializedToJSON) {
            this._session.set(key, value);
        }
        this._map.set(key, value);
        return this;
    }
    /**
   * @inheritDoc
   */ delete(key) {
        this._session.delete(key);
        this._map.delete(key);
        return this;
    }
    /**
   * @inheritDoc
   */ clear() {
        this._session.clear();
        this._map.clear();
        return this;
    }
    /**
   * @inheritDoc
   */ keys() {
        return this._map.keys();
    }
    /**
   * @override
   */ size() {
        return this._map.size();
    }
}

//# sourceMappingURL=SessionMapStorage.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/storage/WeakMapStorage.js

/**
 * A specialization of the `link MapStorage` storage mimicking the native
 * `WeakMap` using its internal garbage collector used once the size of
 * the storage reaches the configured threshold.
 */ class WeakMapStorage extends Storage {
    /**
   * The time-to-live of a storage entry in milliseconds.
   */ _entryTtl;
    /**
   * The internal storage of entries.
   */ _storage = new Map();
    /**
   * Initializes the storage.
   *
   * @param config Weak map storage configuration. The
   *        fields have the following meaning:
   *        - entryTtl The time-to-live of a storage entry in milliseconds.
   */ constructor(config){
        super();
        this._entryTtl = config.entryTtl;
    }
    /**
   * @inheritDoc
   */ has(key) {
        this._discardExpiredEntries();
        return this._storage.has(key);
    }
    /**
   * @inheritDoc
   */ get(key) {
        this._discardExpiredEntries();
        if (!this._storage.has(key)) {
            return undefined;
        }
        return this._storage.get(key)?.target ?? undefined;
    }
    /**
   * @inheritDoc
   */ set(key, value) {
        this._discardExpiredEntries();
        this._storage.set(key, new WeakRef(value, this._entryTtl));
        return this;
    }
    /**
   * @inheritDoc
   */ delete(key) {
        this._discardExpiredEntries();
        this._storage.delete(key);
        return this;
    }
    clear() {
        this._storage.clear();
        return this;
    }
    /**
   * @inheritDoc
   */ keys() {
        this._discardExpiredEntries();
        return this._storage.keys();
    }
    /**
   * @inheritDoc
   */ size() {
        this._discardExpiredEntries();
        return this._storage.size;
    }
    /**
   * Deletes all expired entries from this storage.
   */ _discardExpiredEntries() {
        for (const key of this._storage.keys()){
            const targetReference = this._storage.get(key);
            if (!targetReference.target) {
                // the reference has died
                this._storage.delete(key);
            }
        }
    }
}
/**
 * A simple reference wrapper that emulates a weak reference. We seem to have
 * no other option, since WeakMap and WeakSet are not enumerable (so what is
 * the point of WeakMap and WeakSet if you still need to manage the keys?!) and
 * there is no native way to create a weak reference.
 */ class WeakRef {
    /**
   * The actual target reference, or `null` if the reference has
   * been already discarded.
   */ _reference;
    /**
   * The UNIX timestamp with millisecond precision marking the moment at
   * or after which the reference will be discarded.
   */ _expiration;
    /**
   * Initializes the weak reference to the target reference.
   *
   * @param target The target reference that should be referenced by
   *        this weak reference.
   * @param ttl The maximum number of milliseconds the weak
   *        reference should be kept. The reference will be discarded once
   *        ACCESSED after the specified timeout.
   */ constructor(target, ttl){
        if ($Debug) {
            if (!(target instanceof Object)) {
                throw new TypeError('The target reference must point to an object, ' + 'primitive values are not allowed');
            }
            if (ttl <= 0) {
                throw new Error('The time-to-live must be positive');
            }
        }
        this._reference = target;
        this._expiration = Date.now() + ttl;
    }
    /**
   * Returns the target reference, provided that the target reference is
   * still alive. Returns `null` if the reference has been discarded.
   *
   * @return The target reference, or `null` if the reference
   *         has been discarded by the garbage collector.
   */ get target() {
        if (this._reference && Date.now() >= this._expiration) {
            this._reference = null; // let the GC do its job
        }
        return this._reference;
    }
}

//# sourceMappingURL=WeakMapStorage.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/window/ClientWindow.js
class ClientWindow {
}

//# sourceMappingURL=ClientWindow.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/window/ServerWindow.js


/**
 * Server-side implementation of the `Window` utility API.
 */ class ServerWindow extends Window {
    static get $dependencies() {
        return [];
    }
    /**
   * @inheritDoc
   */ isClient() {
        return false;
    }
    /**
   * @inheritDoc
   */ isCookieEnabled() {
        return false;
    }
    /**
   * @inheritDoc
   */ hasSessionStorage() {
        return false;
    }
    /**
   * @inheritDoc
   */ setTitle() {
        throw new GenericError('The setTitle() is denied on server side.');
    }
    /**
   * @inheritDoc
   */ getWindow() {
        return undefined;
    }
    /**
   * @inheritDoc
   */ getDocument() {
        return undefined;
    }
    /**
   * @inheritDoc
   */ getScrollX() {
        return 0;
    }
    /**
   * @inheritDoc
   */ getScrollY() {
        return 0;
    }
    /**
   * @inheritDoc
   */ scrollTo() {
        return;
    }
    /**
   * @inheritDoc
   */ getDomain() {
        return '';
    }
    /**
   * @inheritDoc
   */ getHost() {
        return '';
    }
    /**
   * @inheritDoc
   */ getPath() {
        return '';
    }
    /**
   * @inheritDoc
   */ getUrl() {
        return '';
    }
    /**
   * @inheritDoc
   */ getBody() {
        return undefined;
    }
    /**
   * @inheritDoc
   */ getElementById() {
        return null;
    }
    /**
   * @inheritDoc
   */ getHistoryState() {
        return;
    }
    /**
   * @inheritDoc
   */ querySelector() {
        return null;
    }
    /**
   * @inheritDoc
   */ querySelectorAll(selector) {
        class DummyNodeList extends NodeList {
            length;
            constructor(){
                super();
                this.length = 0;
            }
            item() {
                return null;
            }
        }
        return new DummyNodeList();
    }
    /**
   * @inheritDoc
   */ redirect() {
        return;
    }
    /**
   * @inheritDoc
   */ pushState() {
        return;
    }
    /**
   * @inheritDoc
   */ replaceState() {
        return;
    }
    /**
   * @inheritDoc
   */ createCustomEvent(name, options) {
        const dummyCustomEvent = {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            initCustomEvent: ()=>{},
            detail: {}
        };
        return Object.assign(dummyCustomEvent, options);
    }
    /**
   * @inheritDoc
   */ bindEventListener() {
        return;
    }
    /**
   * @inheritDoc
   */ unbindEventListener() {
        return;
    }
}

//# sourceMappingURL=ServerWindow.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/config/bind.js














































const initBind = (ns, oc, config)=>{
    oc.constant('$Helper', esm_namespaceObject);
    oc.constant('$oc', oc);
    oc.constant('$Settings', config);
    oc.constant('$Env', config.$Env);
    oc.constant('$Protocol', config.$Protocol);
    oc.constant('$Secure', config.$Protocol === 'https:');
    // Request & Response
    oc.bind('$Request', Request);
    oc.bind('$Response', Response);
    // Window helper
    if (typeof window !== 'undefined' && window !== null) {
        oc.provide(Window, ClientWindow);
    } else {
        oc.provide(Window, ServerWindow);
    }
    oc.bind('$Window', Window);
    oc.bind('$Error', GenericError);
    // Dictionary
    oc.provide(Dictionary, MessageFormatDictionary);
    oc.bind('$Dictionary', Dictionary);
    // Storage
    oc.constant('$CookieTransformFunction', {
        encode: (s)=>s,
        decode: (s)=>s
    });
    oc.bind('$CookieStorage', CookieStorage);
    if (oc.get(Window).hasSessionStorage()) {
        oc.bind('$SessionStorage', SessionStorage);
    } else {
        oc.bind('$SessionStorage', MapStorage);
    }
    oc.bind('$MapStorage', MapStorage);
    oc.inject(WeakMapStorage, [
        {
            entryTtl: 30 * 60 * 1000,
            maxEntries: 1000,
            gcInterval: 60 * 1000,
            gcEntryCountTreshold: 16
        }
    ]);
    oc.bind('$WeakMapStorage', WeakMapStorage);
    oc.bind('$SessionMapStorage', SessionMapStorage);
    // Dispatcher
    oc.provide(Dispatcher, DispatcherImpl);
    oc.bind('$Dispatcher', Dispatcher);
    // Custom Event Bus
    oc.provide(EventBus, EventBusImpl);
    oc.bind('$EventBus', EventBus);
    // Cache
    oc.constant('$CacheStorage', oc.get(MapStorage));
    oc.bind('$CacheFactory', CacheFactory);
    oc.provide(Cache, CacheImpl, [
        '$CacheStorage',
        CacheFactory,
        '$Helper',
        config.$Cache || {}
    ]);
    oc.bind('$Cache', Cache);
    // SEO
    oc.provide(MetaManager, MetaManagerImpl);
    oc.bind('$MetaManager', MetaManager);
    oc.bind('$ControllerDecorator', ControllerDecorator);
    oc.bind('$PageStateManagerDecorator', PageStateManagerDecorator);
    // Page
    oc.provide(PageStateManager, PageStateManagerImpl);
    oc.bind('$PageStateManager', PageStateManager);
    oc.inject(PageFactory, [
        oc
    ]);
    oc.bind('$PageFactory', PageFactory);
    oc.inject(ComponentUtils, [
        oc
    ]);
    oc.bind('$ComponentUtils', ComponentUtils);
    oc.get(ComponentUtils).register({
        $Dictionary: Dictionary,
        $Dispatcher: Dispatcher,
        $EventBus: EventBus,
        $Helper: '$Helper',
        $Http: HttpAgent,
        $PageStateManager: PageStateManager,
        $Router: Router,
        $Settings: '$Settings',
        $Window: Window
    });
    if (oc.get(Window).isClient()) {
        oc.bind('$PageHandlerRegistry', PageHandlerRegistry, [
            PageNavigationHandler,
            PageMetaHandler
        ]);
        oc.provide(PageManager, ClientPageManager);
    } else {
        oc.bind('$PageHandlerRegistry', PageHandlerRegistry, []);
        oc.provide(PageManager, ServerPageManager);
    }
    oc.bind('$PageManager', PageManager);
    // Router
    oc.bind('$RouteFactory', RouteFactory);
    if (oc.get(Window).isClient()) {
        oc.provide(Router, ClientRouter);
    } else {
        oc.provide(Router, ServerRouter);
    }
    oc.bind('$Router', Router);
    oc.constant('$RouteNames', RouteNames);
    oc.constant('$RouterEvents', RouterEvents);
    // Http agent
    oc.bind('$HttpUrlTransformer', UrlTransformer);
    oc.bind('$HttpAgentProxy', HttpProxy, [
        '$HttpUrlTransformer',
        '$Window'
    ]);
    oc.provide(HttpAgent, HttpAgentImpl, [
        '$HttpAgentProxy',
        '$Cache',
        CookieStorage,
        config.$Http,
        '$Helper'
    ]);
    oc.bind('$Http', HttpAgent);
    oc.constant('$HttpStatusCode', HttpStatusCode);
};

//# sourceMappingURL=bind.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/config/services.js
const initServices = (ns, oc, config)=>{
    oc.get('$Dictionary').init(config.dictionary);
    oc.get('$Dispatcher').clear();
    if (!oc.get('$Window').isClient()) {
        oc.get('$Request').init(config.request);
        oc.get('$Response').init(config.response, oc.get('$CookieTransformFunction'));
        oc.get('$CookieStorage').clear();
        oc.get('$SessionStorage').clear();
        oc.get('$CacheStorage').clear();
    }
    oc.get('$CookieStorage').init({
        secure: oc.get('$Secure')
    }, oc.get('$CookieTransformFunction'));
    oc.get('$SessionStorage').init();
    oc.get('$CacheStorage').init();
    oc.get('$Router').init(config.router);
    oc.get('$PageManager').init();
    oc.get('$PageStateManager').clear();
    oc.get('$HttpUrlTransformer').clear();
    /**
   * HMR event handler to destroy existing application
   * before creating new one.
   */ if ($Debug && typeof window !== 'undefined') {
        window.__IMA_HMR?.emitter?.once('destroy', async ()=>{
            oc.get('$Dispatcher').clear();
            oc.get('$Router').unlisten();
            oc.get('$PageRenderer').unmount();
            await oc.get('$PageManager').destroy();
        });
    }
    /**
   * HMR event handler to handle HMR ima app updates
   */ if ($Debug && typeof window !== 'undefined') {
        window.__IMA_HMR?.emitter?.on('update', ({ type })=>{
            if (type === 'languages') {
                oc.get('$Dictionary').init({
                    ...config.dictionary,
                    dictionary: window.$IMA.i18n
                });
                oc.get('$Router').route(window.location.pathname);
            }
        });
    }
};

//# sourceMappingURL=services.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/oc/Entry.js
/**
 * Object container entry, representing either a class, interface, constant or
 * an alias.
 */ class Entry {
    /**
   * The constructor of the class represented by this entry, or the
   * getter of the value of the constant represented by this entry.
   */ classConstructor;
    /**
   * The shared instance of the class represented by this entry.
   */ sharedInstance = null;
    /**
   * Dependencies of the class constructor of the class represented by
   * this entry.
   */ #dependencies;
    /**
   * The Entry options.
   */ #options;
    /**
   * The override counter
   */ #overrideCounter = 0;
    /**
   * Reference to part of application that created
   * this entry.
   */ #referrer;
    /**
   * Initializes the entry.
   *
   * @param classConstructor The
   *        class constructor or constant value getter.
   * @param dependencies The dependencies to pass into the
   *        constructor function.
   * @param referrer Reference to part of application that created
   *        this entry.
   * @param options The Entry options.
   */ constructor(classConstructor, dependencies, referrer, options){
        this.classConstructor = classConstructor;
        this.#referrer = referrer;
        this.#dependencies = dependencies || [];
        this.#options = options || {
            writeable: true
        };
    }
    set dependencies(dependencies) {
        if ($Debug) {
            if (!this.writeable) {
                throw new Error(`The entry is constant and you ` + `can't redefined their dependencies ${dependencies}.`);
            }
            if (this.#overrideCounter >= 1) {
                throw new Error(`The dependencies entry can't be overridden more than once.` + `Fix your bind.js file for classConstructor ${this.classConstructor.name}.`);
            }
        }
        this.#dependencies = dependencies;
        this.#overrideCounter++;
    }
    get dependencies() {
        return this.#dependencies;
    }
    get referrer() {
        return this.#referrer;
    }
    get writeable() {
        return this.#options.writeable;
    }
    get options() {
        return this.#options;
    }
    static from(entry) {
        return new Entry(entry.classConstructor, entry.dependencies, entry.referrer, entry.options);
    }
}

//# sourceMappingURL=Entry.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/oc/ObjectContainer.js




const SPREAD_RE = /^\.../;
const OPTIONAL_RE = /^(...)?\?/;
/**
 * The Object Container is an enhanced dependency injector with support for
 * aliases and constants, and allowing to reference classes in the application
 * namespace by specifying their fully qualified names.
 */ class ObjectContainer {
    /**
   * The current binding state.
   *
   * The {@link setBindingState()} method may be called for changing
   * object container binding state only by the bootstrap script.
   */ _bindingState;
    /**
   * The current plugin binding to OC.
   *
   * The {@link setBindingState()} method may be called for changing
   * object container binding state only by the bootstrap script.
   */ _bindingPlugin;
    _entries = new Map();
    /**
   * The namespace container, used to access classes and values using
   * their fully qualified names.
   */ _namespace;
    /**
   * Initializes the object container.
   *
   * @param namespace The namespace container, used to
   *        access classes and values using their fully qualified names.
   */ constructor(namespace){
        this._namespace = namespace;
    }
    /**
   * Binds the specified class or factory function and dependencies to the
   * specified alias. Binding a class or factory function to an alias allows
   * the class or function to be specified as a dependency by specifying the
   * alias and creating new instances by referring to the class or function
   * by the alias.
   *
   * Also note that the same class or function may be bound to several
   * aliases and each may use different dependencies.
   *
   * The alias will use the default dependencies bound for the class if no
   * dependencies are provided.
   *
   * @param name Alias name.
   * @param classConstructor The
   *        class constructor or a factory function.
   * @param dependencies The dependencies to pass into the
   *        constructor or factory function.
   * @return This object container.
   */ bind(name, classConstructor, dependencies) {
        if ($Debug) {
            if (this._bindingState === BindingState.Plugin && typeof name === 'string' && name[0] !== '$') {
                throw new GenericError(`ima.core.ObjectContainer:bind Object container ` + `is locked. You do not have the permission to ` + `create a new alias named ${name}.`, {
                    name,
                    classConstructor: classConstructor?.toString(),
                    dependencies: dependencies?.toString()
                });
            }
            if (typeof classConstructor !== 'function') {
                throw new GenericError(`ima.core.ObjectContainer:bind The second ` + `argument has to be a class constructor function, ` + `but ${this.#getDebugName(classConstructor)} was provided. Fix alias ` + `${this.#getDebugName(name)} for your bind.js file.`, {
                    name,
                    classConstructor: classConstructor,
                    dependencies: dependencies?.toString()
                });
            }
        }
        const classConstructorEntry = this._entries.get(classConstructor);
        const nameEntry = this._entries.get(name);
        const entry = classConstructorEntry || nameEntry;
        /**
     * Create instance using class constructor and dependencies and bind
     * it given name.
     */ if (classConstructorEntry && !nameEntry && dependencies) {
            const entry = this._createEntry(classConstructor, dependencies);
            this._entries.set(name, entry);
            return this;
        }
        if (entry) {
            // Update/set existing instance to new entry name
            this._entries.set(name, entry);
            // Update dependencies of existing oc entry
            if (dependencies) {
                this._updateEntryValues(entry, classConstructor, dependencies);
            }
        } else {
            /**
       * If neither name entry or class constructor entry exist,
       * we'll create both of them and add them to oc.
       */ const entry = this._createEntry(classConstructor, dependencies);
            this._entries.set(classConstructor, entry);
            this._entries.set(name, entry);
        }
        return this;
    }
    /**
   * Defines a new constant registered with this object container. Note that
   * this is the only way of passing `string` values to constructors
   * because the object container treats strings as class, interface, alias
   * or constant names.
   *
   * @param name The constant name.
   * @param value The constant value.
   * @return This object container.
   */ constant(name, value) {
        if ($Debug) {
            if (this._entries.has(name) || !!this._getEntryFromConstant(name)) {
                throw new GenericError(`ima.core.ObjectContainer:constant The ${this.#getDebugName(name)} ` + `constant has already been declared and cannot be ` + `redefined.`, {
                    name,
                    value: value?.toString()
                });
            }
            if (this._bindingState === BindingState.Plugin) {
                throw new GenericError(`ima.core.ObjectContainer:constant The ${this.#getDebugName(name)} ` + `constant can't be declared in plugin. ` + `The constant must be define in app/config/bind.js file.`, {
                    name,
                    value: value?.toString()
                });
            }
        }
        const constantEntry = this._createEntry(()=>value, [], {
            writeable: false
        });
        constantEntry.sharedInstance = value;
        this._entries.set(name, constantEntry);
        return this;
    }
    /**
   * Configures the object loader with the specified default dependencies for
   * the specified class.
   *
   * New instances of the class created by this object container will receive
   * the provided dependencies into constructor unless custom dependencies
   * are provided.
   *
   * @param classConstructor The class constructor.
   * @param dependencies The dependencies to pass into the
   *        constructor function.
   * @return This object container.
   */ inject(classConstructor, dependencies) {
        if ($Debug) {
            if (typeof classConstructor !== 'function') {
                throw new GenericError(`ima.core.ObjectContainer:inject The first ` + `argument has to be a class constructor function, ` + `but ${this.#getDebugName(classConstructor)} was provided. Fix your ` + `bind.js file.`, {
                    classConstructor: classConstructor,
                    dependencies: dependencies?.toString()
                });
            }
            if (this._entries.has(classConstructor) && this._bindingState === BindingState.Plugin) {
                throw new GenericError(`ima.core.ObjectContainer:inject The ` + `${this.#getDebugName(classConstructor.name)} has already had its ` + `default dependencies configured, and the object ` + `container is currently locked, therefore the ` + `dependency configuration cannot be override. The ` + `dependencies of the provided class must be ` + `overridden from the application's bind.js ` + `configuration file.`, {
                    classConstructor: classConstructor?.toString(),
                    dependencies: dependencies?.toString()
                });
            }
        }
        let classConstructorEntry = this._entries.get(classConstructor);
        if (classConstructorEntry) {
            if (dependencies) {
                this._updateEntryValues(classConstructorEntry, classConstructor, dependencies);
            }
        } else {
            classConstructorEntry = this._createEntry(classConstructor, dependencies);
            this._entries.set(classConstructor, classConstructorEntry);
        }
        return this;
    }
    /**
   * Configures the default implementation of the specified interface to use
   * when an implementation provider of the specified interface is requested
   * from this object container.
   *
   * The implementation constructor will obtain the provided default
   * dependencies or the dependencies provided to the {@link create()}
   * method.
   *
   * @param interfaceConstructor The constructor
   *        of the interface representing the service.
   * @param implementationConstructor
   *        The constructor of the class implementing the service interface.
   * @param dependencies The dependencies to pass into the
   *        constructor function.
   * @return This object container.
   */ provide(interfaceConstructor, implementationConstructor, dependencies) {
        if ($Debug) {
            if (this._entries.has(interfaceConstructor) && this._bindingState === BindingState.Plugin) {
                throw new GenericError('ima.core.ObjectContainer:provide The ' + 'implementation of the provided interface ' + `(${this.#getDebugName(interfaceConstructor.name)}) has already been ` + `configured and cannot be overridden.`, {
                    interfaceConstructor: interfaceConstructor?.toString(),
                    implementationConstructor: implementationConstructor?.toString(),
                    dependencies: dependencies?.toString()
                });
            }
            // check that implementation really extends interface
            const prototype = implementationConstructor.prototype;
            if (!(prototype instanceof interfaceConstructor)) {
                throw new GenericError('ima.core.ObjectContainer:provide The specified ' + `class (${this.#getDebugName(implementationConstructor.name)}) does not ` + `implement the ${this.#getDebugName(interfaceConstructor.name)} ` + `interface.`, {
                    interfaceConstructor: interfaceConstructor?.toString(),
                    implementationConstructor: implementationConstructor?.toString(),
                    dependencies: dependencies?.toString()
                });
            }
        }
        let classConstructorEntry = this._entries.get(implementationConstructor);
        if (classConstructorEntry) {
            this._entries.set(interfaceConstructor, classConstructorEntry);
            if (dependencies) {
                this._updateEntryValues(classConstructorEntry, implementationConstructor, dependencies);
            }
        } else {
            classConstructorEntry = this._createEntry(implementationConstructor, dependencies);
            this._entries.set(implementationConstructor, classConstructorEntry);
            this._entries.set(interfaceConstructor, classConstructorEntry);
        }
        return this;
    }
    /**
   * Retrieves the shared instance or value of the specified constant, alias,
   * class or factory function, interface, or fully qualified namespace path
   * (the method checks these in this order in case of a name clash).
   *
   * The instance or value is created lazily the first time it is requested.
   *
   * @param name The name
   *        of the alias, class, interface, or the class, interface or a
   *        factory function.
   * @return The shared instance or value.
   */ get(name) {
        const entry = this._getEntry(name);
        if (entry?.sharedInstance === null) {
            entry.sharedInstance = this._createInstanceFromEntry(entry);
        }
        // Optional entries can be null if they are not found in the OC
        return entry?.sharedInstance;
    }
    /**
   * Returns the class constructor function of the specified class.
   *
   * @param name The name by which the class
   *        is registered with this object container.
   * @return The constructor function.
   */ getConstructorOf(name) {
        const entry = this._getEntry(name);
        if (!entry) {
            return null;
        }
        return entry.classConstructor;
    }
    /**
   * Returns `true` if the specified object, class or resource is
   * registered with this object container.
   *
   * @param name The resource name.
   * @return `true` if the specified object, class or
   *         resource is registered with this object container.
   */ has(name) {
        return this._entries.has(name) || !!this._getEntryFromConstant(name) || !!this._getEntryFromNamespace(name) || !!this._getEntryFromClassConstructor(name);
    }
    /**
   * Creates a new instance of the class or retrieves the value generated by
   * the factory function identified by the provided name, class, interface,
   * or factory function, passing in the provided dependencies.
   *
   * The method uses the dependencies specified when the class, interface or
   * factory function has been registered with the object container if no
   * custom dependencies are provided.
   *
   * @param name The name
   *        of the alias, class, interface, or the class, interface or a
   *        factory function to use.
   * @param dependencies The dependencies to pass into the
   *        constructor or factory function.
   * @return Created instance or generated value.
   */ create(name, dependencies = []) {
        const entry = this._getEntry(name);
        if (!entry) {
            throw new Error('ima.core.ObjectContainer:create unable to create ' + `entry with ${name}, as it is null`);
        }
        return this._createInstanceFromEntry(entry, dependencies);
    }
    /**
   * Clears all entries from this object container and resets the locking
   * mechanism of this object container.
   *
   * @return This object container.
   */ clear() {
        this._entries.clear();
        this._bindingState = undefined;
        this._bindingPlugin = undefined;
        return this;
    }
    setBindingState(bindingState, bindingPluginName) {
        if (this._bindingState === BindingState.App && bindingState !== BindingState.Plugin) {
            throw new GenericError(`ima.core.ObjectContainer:setBindingState The setBindingState() ` + `method  has to be called only by the bootstrap script. Other ` + `calls are not allowed.`, {
                bindingState,
                bindingPluginName
            });
        }
        this._bindingState = bindingState;
        this._bindingPlugin = bindingState === BindingState.Plugin ? bindingPluginName : undefined;
    }
    /**
   * Retrieves the entry for the specified constant, alias, class or factory
   * function, interface, or fully qualified namespace path (the method
   * checks these in this order in case of a name clash).
   *
   * The method retrieves an existing entry even if a qualified namespace
   * path is provided (if the target class or interface has been configured
   * in this object container).
   *
   * The method throws an {@link Error} if no such constant, alias,
   * registry, interface implementation is known to this object container and
   * the provided identifier is not a valid namespace path specifying an
   * existing class, interface or value.
   *
   * @param  name Name of a constant or alias,
   *        factory function, class or interface constructor, or a fully
   *        qualified namespace path.
   * @return The retrieved entry.
   * @throws If no such constant, alias, registry, interface
   *         implementation is known to this object container.
   */ _getEntry(name) {
        let entryName = Array.isArray(name) ? name[0] : name;
        // Remove all meta symbols from the start of the alias
        if (typeof entryName === 'string') {
            entryName = entryName.replace(SPREAD_RE, '');
            entryName = entryName.replace(OPTIONAL_RE, '');
        }
        const entry = this._entries.get(entryName) || this._getEntryFromConstant(entryName) || this._getEntryFromNamespace(entryName) || this._getEntryFromClassConstructor(entryName);
        if ($Debug && !entry && !this._isOptional(name)) {
            throw new Error(`ima.core.ObjectContainer:_getEntry There is no constant, ` + `alias, registered class, registered interface with ` + `configured implementation or namespace entry ` + `identified as: <strong>${this.#getDebugName(name)}</strong>
           Check your bind.js file for ` + `typos or register given entry with the object container.`);
        }
        if (this._isSpread(name)) {
            if (entry && Array.isArray(entry.sharedInstance)) {
                const spreadEntry = Entry.from(entry);
                spreadEntry.sharedInstance = entry.sharedInstance.map((sharedInstance)=>this.get(sharedInstance));
                return spreadEntry;
            }
            if ($Debug && !this._isOptional(name)) {
                throw new Error(`ima.core.ObjectContainer:_getEntry Invalid use of spread entry identified as: <strong>${this.#getDebugName(name)}</strong> Check your bind.js file for ` + `typos or register given entry with the object container.`);
            }
        }
        return entry;
    }
    /**
   * Checks whether the name is marked as optional.
   *
   * @param name Name of a constant or alias,
   *        factory function, class or interface constructor, or a fully
   *        qualified namespace path.
   */ _isOptional(name) {
        return Array.isArray(name) && name[1]?.optional || typeof name === 'string' && OPTIONAL_RE.test(name);
    }
    /**
   * Checks whether the name is marked as spread.
   *
   * @param name Name of a constant or alias,
   *        factory function, class or interface constructor, or a fully
   *        qualified namespace path.
   */ _isSpread(name) {
        const normalizedName = Array.isArray(name) ? name[0] : name;
        return typeof normalizedName === 'string' && SPREAD_RE.test(normalizedName);
    }
    /**
   * The method update classConstructor and dependencies for defined entry.
   * The entry throw Error for constants and if you try override dependencies
   * more than once.
   *
   * @param classConstructor The
   *        class constructor or factory function.
   * @param entry The entry representing the class that should
   *        have its instance created or factory faction to use to create a
   *        value.
   * @param dependencies The dependencies to pass into the
   *        constructor or factory function.
   */ _updateEntryValues(entry, classConstructor, dependencies) {
        entry.classConstructor = classConstructor;
        entry.dependencies = dependencies;
    }
    /**
   * Creates a new entry for the provided class or factory function, the
   * provided dependencies and entry options.
   *
   * @template T
   * @param classConstructor The
   *        class constructor or factory function.
   * @param dependencies The dependencies to pass into the
   *        constructor or factory function.
   * @param options
   * @return Created instance or generated value.
   */ _createEntry(classConstructor, dependencies, options) {
        if ((!dependencies || dependencies.length === 0) && // @ts-expect-error fixme, () => T fails
        Array.isArray(classConstructor.$dependencies)) {
            // @ts-expect-error fixme, () => T fails
            dependencies = classConstructor.$dependencies;
        }
        return new Entry(classConstructor, dependencies, this._bindingState === BindingState.Plugin ? this._bindingPlugin : this._bindingState?.toString(), options);
    }
    /**
   * Creates a new instance of the class or retrieves the value generated by
   * the factory function represented by the provided entry, passing in the
   * provided dependencies.
   *
   * The method uses the dependencies specified by the entry if no custom
   * dependencies are provided.
   *
   * @param entry The entry representing the class that should
   *        have its instance created or factory faction to use to create a
   *        value.
   * @param dependencies The dependencies to pass into the
   *        constructor or factory function.
   * @return Created instance or generated value.
   */ _createInstanceFromEntry(entry, dependencies = []) {
        if (dependencies.length === 0) {
            dependencies = [];
            for (const dependency of entry.dependencies){
                if ($Debug && dependency === undefined) {
                    throw new GenericError(`ima.core.ObjectContainer:_createInstanceFromEntry The dependency ` + `of class constructor function ${this.#getDebugName(entry.classConstructor)} is undefined. Fix class constructor $dependencies.`, {
                        classConstructor: entry.classConstructor,
                        referrer: entry.referrer,
                        dependencies: entry.dependencies?.toString()
                    });
                }
                // Optional and spread dependency handling
                if ([
                    'function',
                    'string'
                ].indexOf(typeof dependency) !== -1 || Array.isArray(dependency)) {
                    const retrievedDependency = this.get(dependency);
                    if (Array.isArray(retrievedDependency) && this._isSpread(dependency)) {
                        dependencies.push(...retrievedDependency);
                    } else {
                        dependencies.push(retrievedDependency);
                    }
                } else {
                    dependencies.push(dependency);
                }
            }
        }
        return new entry.classConstructor(...dependencies);
    }
    /**
   * Retrieves the constant value denoted by the provided fully qualified
   * composition name.
   *
   * The method returns the entry for the constant if the constant is registered
   * with this object container, otherwise return `null`.
   *
   * Finally, if the constant composition name does not resolve to value,
   * the method return `null`.
   *
   * @param compositionName
   * @return An entry representing the value at the specified
   *         composition name in the constants. The method returns `null`
   *         if the specified composition name does not exist in the constants.
   */ _getEntryFromConstant(compositionName) {
        if (typeof compositionName !== 'string') {
            return null;
        }
        const objectProperties = compositionName.split('.');
        let constantValue = this._entries.has(objectProperties[0]) ? this._entries.get(objectProperties[0]).sharedInstance : null;
        for(let i = 1; i < objectProperties.length && constantValue; i++){
            constantValue = constantValue[objectProperties[i]];
        }
        if (constantValue !== undefined && constantValue !== null) {
            const entry = this._createEntry(()=>constantValue, [], {
                writeable: false
            });
            entry.sharedInstance = constantValue;
            return entry;
        }
        return null;
    }
    /**
   * Retrieves the class denoted by the provided fully qualified name within
   * the application namespace.
   *
   * The method then checks whether there are dependencies configured for the
   * class, no matter whether the class is an implementation class or an
   * "interface" class.
   *
   * The method returns the entry for the class if the class is registered
   * with this object container, otherwise an unregistered entry is created
   * and returned.
   *
   * Finally, if the namespace path does not resolve to a class, the method
   * return an unregistered entry resolved to the value denoted by the
   * namespace path.
   *
   * Alternatively, if a constructor function is passed in instead of a
   * namespace path, the method returns `null`.
   *
   * @param path Namespace path pointing to
   *        a class or a value in the application namespace, or a constructor
   *        function.
   * @return An entry representing the value or class at the
   *         specified path in the namespace. The method returns `null`
   *         if the specified path does not exist in the namespace.
   */ _getEntryFromNamespace(path) {
        if (typeof path !== 'string' || !this._namespace.has(path)) {
            return null;
        }
        const namespaceValue = this._namespace.get(path);
        if (typeof namespaceValue === 'function') {
            if (this._entries.has(namespaceValue)) {
                return this._entries.get(namespaceValue);
            }
            return this._createEntry(namespaceValue);
        }
        const entry = this._createEntry(()=>namespaceValue);
        entry.sharedInstance = namespaceValue;
        return entry;
    }
    /**
   * Retrieves the class denoted by the provided class constructor.
   *
   * The method then checks whether there are defined `$dependencies`
   * property for class. Then the class is registered to this object
   * container.
   *
   * The method returns the entry for the class if the specified class
   * does not have defined `$dependencies` property return
   * `null`.
   *
   * @param classConstructor
   * @return An entry representing the value at the specified
   *         classConstructor. The method returns `null`
   *         if the specified classConstructor does not have defined
   *         `$dependencies`.
   */ _getEntryFromClassConstructor(classConstructor) {
        if (typeof classConstructor !== 'function') {
            return null;
        }
        if (!Array.isArray(classConstructor.$dependencies)) {
            if ($Debug) {
                throw new Error(`The class constructor identified as: ${this.#getDebugName(classConstructor)} is missing <b>static get $dependencies() {}</b> definition.`);
            }
            return null;
        }
        const entry = this._createEntry(classConstructor, classConstructor.$dependencies);
        this._entries.set(classConstructor, entry);
        return entry;
    }
    /**
   * Formats name, function, class constructor to more compact
   * name/message to allow for cleaner debug Error messages.
   */ #getDebugName(name) {
        return `<strong>${name?.toString().split('\n').slice(0, 5).join('\n') ?? name}</strong>`;
    }
}
ns.set('ns.ima.core.ObjectContainer', ObjectContainer);

//# sourceMappingURL=ObjectContainer.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/pluginLoader.js

/**
 * Plugin loader utility used to register external IMA.js plugins. This
 * adds ability for external packages to automatically hook into several
 * IMA.js application parts and automatically bootstrap certain settings.
 */ class PluginLoader {
    _plugins;
    _bootstrap;
    /**
   * Initializes the plugin loader.
   *
   * This is private constructor and should not be used outside of this file.
   * You should use the exported instance to register ima.js plugins.
   *
   * @example
   * import { pluginLoader } from '@ima/core';
   *
   * @private
   */ constructor(){
        this._plugins = {};
    }
    /**
   * Initializes the plugin loader with bootstrap instance. Which is later used
   * to handle dynamically loaded IMA.js plugins.
   *
   * @param bootstrap App bootstrap instance.
   */ init(bootstrap) {
        this._bootstrap = bootstrap;
    }
    /**
   * Registers plugin into IMA.js bootstrap sequence.
   *
   * @example
   * pluginLoader.register('@ima/plugin-logger', ns => {
   *   ns.set('ima.plugin.logger', logger);
   *
   *   return {
   *     initSettings,
   *     initServices,
   *     initBind,
   *   };
   * });
   *
   * @param {string} name Plugin name.
   * @param {function} registerFn Plugin initialization function.
   */ register(name, registerFn) {
        if (typeof name !== 'string') {
            throw new Error(`ima.core.pluginLoader:register moduleName is not a string, '${typeof name}' was given.`);
        }
        if (typeof registerFn !== 'function') {
            throw new Error(`ima.core.pluginLoader:register registerFn is not a function, '${typeof registerFn}' was given.`);
        }
        const plugin = registerFn(ns);
        // Bootstrap plugin if imported dynamically (only if it's not already loaded)
        if (this._bootstrap && !this._plugins[name]) {
            this._bootstrap.initPlugin(name, plugin ?? undefined);
        }
        this._plugins[name] = {
            name,
            plugin: plugin || {}
        };
    }
    /**
   * Returns array of registered IMA.js plugins.
   *
   * @returns {Array} Array of IMA.js plugins.
   */ getPlugins() {
        return Object.values(this._plugins);
    }
}
const pluginLoader = new PluginLoader();

//# sourceMappingURL=pluginLoader.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/boot.js








function getInitialImaConfigFunctions() {
    return {
        initBindIma: initBind,
        initServicesIma: initServices
    };
}
function getInitialPluginConfig() {
    return {
        plugins: pluginLoader.getPlugins()
    };
}
function _getRoot() {
    return _isClient() ? window : global;
}
function _isClient() {
    return typeof window !== 'undefined' && window !== null;
}
function createImaApp() {
    const oc = new ObjectContainer(ns);
    const bootstrap = new Bootstrap(oc);
    pluginLoader.init(bootstrap);
    return {
        oc,
        bootstrap
    };
}
function getClientBootConfig(initialAppConfigFunctions) {
    const root = _getRoot();
    if ($Debug && _isClient() && !$IMA?.Test) {
        if ($IMA.$Protocol !== root.location.protocol) {
            throw new GenericError(`Your client's protocol is not same as server's protocol. ` + `For right setting protocol on the server site set ` + `'X-Forwarded-Proto' header.`);
        }
        if ($IMA.$Host !== root.location.host) {
            throw new GenericError(`Your client's host is not same as server's host. For right ` + `setting host on the server site set 'X-Forwarded-Host' ` + `header.`);
        }
    }
    const bootConfig = {
        services: {
            response: null,
            request: null,
            $IMA: $IMA,
            dictionary: {
                $Language: $IMA.$Language,
                dictionary: $IMA.i18n
            },
            router: {
                $Protocol: $IMA.$Protocol,
                $Host: $IMA.$Host,
                $Path: $IMA.$Path,
                $Root: $IMA.$Root,
                $LanguagePartPath: $IMA.$LanguagePartPath
            }
        },
        settings: {
            $Debug: $IMA.$Debug,
            $Env: $IMA.$Env,
            $Version: $IMA.$Version,
            $App: $IMA.$App,
            // @ts-expect-error This is intentional for integration testing.
            $Resources: $IMA.$Resources,
            $Protocol: $IMA.$Protocol,
            $Language: $IMA.$Language,
            $Host: $IMA.$Host,
            $Path: $IMA.$Path,
            $Root: $IMA.$Root,
            $LanguagePartPath: $IMA.$LanguagePartPath
        }
    };
    return {
        ...bootConfig,
        ...initialAppConfigFunctions,
        ...getInitialPluginConfig(),
        ...getInitialImaConfigFunctions()
    };
}
function bootClientApp(app, bootConfig) {
    app.bootstrap.run(bootConfig);
    const cache = app.oc.get('$Cache');
    cache.deserialize($IMA.Cache || {});
    return app;
}
function routeClientApp(app) {
    const router = app.oc.get('$Router');
    return router.listen().route(router.getPath()).catch((error)=>{
        if (typeof $IMA.fatalErrorHandler === 'function') {
            $IMA.fatalErrorHandler(error);
        } else {
            console.warn('Define function config.$IMA.fatalErrorHandler in ' + 'services.js.');
        }
    });
}
async function reviveClientApp(initialAppConfigFunctions) {
    await autoYield();
    const root = _getRoot();
    root.$Debug = !!root.$IMA.$Debug;
    let app = createImaApp();
    await autoYield();
    const bootConfig = getClientBootConfig(initialAppConfigFunctions);
    await autoYield();
    app = bootClientApp(app, bootConfig);
    await autoYield();
    return routeClientApp(app).then((pageInfo)=>{
        return Object.assign({}, pageInfo || {}, {
            app,
            bootConfig
        });
    });
}
function onLoad() {
    if (!_isClient()) {
        return Promise.reject(null);
    }
    if (document.readyState !== 'loading') {
        return nextFrameYield();
    }
    return new Promise((resolve)=>{
        document.addEventListener('DOMContentLoaded', ()=>{
            return autoYield().then(resolve);
        }, {
            once: true
        });
    });
}

//# sourceMappingURL=boot.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/controller/AbstractController.js

/**
 * Basic implementation of the {@link Controller} interface, providing the
 * default implementation of the most of the API.
 */ class AbstractController extends Controller {
    _pageStateManager;
    _extensions = new Map();
    /**
   * The HTTP response code to send to the client.
   */ status = 200;
    /**
   * The route parameters extracted from the current route. This field is
   * set externally by IMA right before the {@link Controller#init} or the
   * {@link Controller#update} method is called.
   */ params = {};
    static $name;
    static $dependencies;
    static $extensions;
    constructor(){
        super();
    }
    /**
   * @inheritDoc
   */ setState(statePatch) {
        if (this._pageStateManager) {
            this._pageStateManager.setState(statePatch);
        }
    }
    /**
   * @inheritDoc
   */ getState() {
        if (this._pageStateManager) {
            return this._pageStateManager.getState();
        } else {
            return {};
        }
    }
    /**
   * @inheritDoc
   */ beginStateTransaction() {
        if (this._pageStateManager) {
            this._pageStateManager.beginTransaction();
        }
    }
    /**
   * @inheritDoc
   */ commitStateTransaction() {
        if (this._pageStateManager) {
            this._pageStateManager.commitTransaction();
        }
    }
    /**
   * @inheritDoc
   */ cancelStateTransaction() {
        if (this._pageStateManager) {
            this._pageStateManager.cancelTransaction();
        }
    }
    /**
   * @inheritDoc
   */ addExtension(extension, extensionInstance) {
        // FIXME IMA@20, remove backwards compatibility
        if (!extensionInstance && typeof extension !== 'object' || extensionInstance && typeof extensionInstance !== 'object') {
            throw new Error(`ima.core.AbstractController:addExtension: Expected instance of an extension, got ${typeof extension}.`);
        }
        if (extensionInstance) {
            this._extensions.set(extension, extensionInstance);
        } else {
            this._extensions.set((extension?.constructor) ?? extension, extension);
        }
    }
    /**
   * @inheritDoc
   */ getExtension(extension) {
        return this._extensions.get(extension);
    }
    /**
   * @inheritDoc
   */ getExtensions() {
        return Array.from(this._extensions.values());
    }
    /**
   * @inheritDoc
   */ setRouteParams(params = {}) {
        this.params = params;
    }
    /**
   * @inheritDoc
   */ getRouteParams() {
        return this.params;
    }
    /**
   * @inheritDoc
   */ setPageStateManager(pageStateManager) {
        this._pageStateManager = pageStateManager;
    }
    /**
   * @inheritDoc
   */ getHttpStatus() {
        return this.status;
    }
}

//# sourceMappingURL=AbstractController.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/extension/Extension.js
/**
 * Extensions provide means of extending the page controllers with additional
 * managed state and logic.
 *
 * An extension has access to the current route parameters, specify the
 * resources to load when the page is loading or being updated, may intercept
 * event bus events and modify the state of the page just like an ordinary
 * controller, except that the modifications are restricted to the state fields
 * which the extension explicitly specifies using its
 * {@link Extension#getAllowedStateKeys} method.
 *
 * All extensions to be used on a page must be added to the current controller
 * before the controller is initialized. After that, the extensions will go
 * through the same lifecycle as the controller.
 */ class Extension {
    static $name;
    static $dependencies;
    /**
   * Callback for initializing the controller extension after the route
   * parameters have been set on this extension.
   */ init() {
        return;
    }
    /**
   * Finalization callback, called when the controller is being discarded by
   * the application. This usually happens when the user navigates to a
   * different URL.
   *
   * This method is the lifecycle counterpart of the {@link Extension#init}
   * method.
   *
   * The extension should release all resources obtained in the
   * {@link Extension#init} method. The extension must release any resources
   * that might not be released automatically when the extensions's instance
   * is destroyed by the garbage collector.
   */ destroy() {
        return;
    }
    /**
   * Callback for activating the extension in the UI. This is the last
   * method invoked during controller (and extensions) initialization, called
   * after all the promises returned from the {@link Extension#load} method have
   * been resolved and the controller has configured the meta manager.
   *
   * The extension may register any React and DOM event listeners in this
   * method. The extension may start receiving event bus event after this
   * method completes.
   */ activate() {
        return;
    }
    /**
   * Callback for deactivating the extension in the UI. This is the first
   * method invoked during extension deinitialization. This usually happens
   * when the user navigates to a different URL.
   *
   * This method is the lifecycle counterpart of the {@link Extension#activate}
   * method.
   *
   * The extension should deregister listeners registered and release all
   * resources obtained in the {@link Extension#activate} method.
   */ deactivate() {
        return;
    }
    /**
   * Callback the extension uses to request the resources it needs to render
   * its related parts of the view. This method is invoked after the
   * {@link Extension#init} method.
   *
   * The extension should request all resources it needs in this method, and
   * represent each resource request as a promise that will resolve once the
   * resource is ready for use (these can be data fetched over HTTP(S),
   * database connections, etc).
   *
   * The method must return a plain flat object. The field names of the
   * object identify the resources being fetched and prepared, each value
   * must be either the resource (e.g. view configuration or a value
   * retrieved synchronously) or a Promise that will resolve to the resource.
   *
   * The IMA will use the object to set the state of the controller.
   *
   * Any returned promise that gets rejected will redirect the application to
   * the error page. The error page that will be used depends on the status
   * code of the error.
   *
   * @return A map object of promises resolved when all resources the controller
   *         requires are ready. The resolved values will be pushed to the
   *         controller's state.
   */ load() {
        return {};
    }
    /**
   * Callback for updating the extension after a route update. This method
   * is invoked if the current route has the `onlyUpdate` flag set to `true` and
   * the current controller and view match those used by the previously active
   * route, or, the `onlyUpdate` option of the current route is a callback and
   * returned `true`.
   *
   * The method must return an object with the same semantics as the result
   * of the {@link Extension#load} method. The controller's state will then be
   * patched by the returned object.
   *
   * The other extension lifecycle callbacks ({@link Extension#init},
   * {@link Extension#load}, {@link Extension#activate},
   * {@link Extension#deactivate}, {@link Extension#deinit}) are not call in
   * case this method is used.
   *
   * @param prevParams Previous route
   *         parameters.
   * @return A map object of promises resolved when all resources the controller
   *         requires are ready. The resolved values will be pushed to the
   *         controller's state.
   */ update(prevParams = {}) {
        return {};
    }
    /**
   * Patches the state of the controller using this extension by using the
   * provided object by copying the provided patch object fields to the
   * controller's state object.
   *
   * Note that the state is not patched recursively but by replacing the
   * values of the top-level fields of the state object.
   *
   * Note that the extension may modify only the fields of the state that it
   * has specified by its {@link Extension#getAllowedStateKeys} method.
   *
   * @param statePatch Patch of the controller's state to apply.
   */ setState(statePatch) {
        return;
    }
    /**
   * Returns the current state of the controller using this extension.
   *
   * @return The current state of the controller.
   */ getState() {
        return {};
    }
    /**
   * Starts queueing state patches off the controller state. While the transaction
   * is active every `setState` call has no effect on the current state.
   *
   * Note that call to `getState` after the transaction has begun will
   * return state as it was before the transaction.
   */ beginStateTransaction() {
        return;
    }
    /**
   * Applies queued state patches to the controller state. All patches are squashed
   * and applied with one `setState` call.
   */ commitStateTransaction() {
        return;
    }
    /**
   * Cancels ongoing state transaction. Uncommitted state changes are lost.
   */ cancelStateTransaction() {
        return;
    }
    /**
   * Patches the partial state of the extension. The extension is able
   * during its load and update phase receive state from active controller
   * using this extension and from previously loaded/updated extensions.
   *
   * @param partialStatePatch Patch of the controller's state to apply.
   */ setPartialState(partialStatePatch) {
        return;
    }
    /**
   * Returns the current partial state of the extension.
   *
   * @return The current partial state of the extension.
   */ getPartialState() {
        return {};
    }
    /**
   * Clears the current partial state of the extension and sets it value to empty object.
   */ clearPartialState() {
        return;
    }
    /**
   * Sets the state manager used to manage the controller's state..
   *
   * @param pageStateManager The current state manager to
   *        use.
   */ setPageStateManager(pageStateManager) {
        return;
    }
    /**
   * Enables using PageStateManager for getting state.
   */ switchToStateManager() {
        return;
    }
    /**
   * Disables using PageStateManager for getting state.
   */ switchToPartialState() {
        return;
    }
    /**
   * Sets the current route parameters. This method is invoked before the
   * {@link Extension#init} method.
   *
   * @param params The current route parameters.
   */ setRouteParams(params) {
        return;
    }
    /**
   * Returns the current route parameters.
   *
   * @return The current route parameters.
   */ getRouteParams() {
        return {};
    }
    /**
   * Returns the names of the state fields that may be manipulated by this
   * extension. Manipulations of other fields of the state will be ignored.
   *
   * @return The names of the state fields that may be manipulated
   *         by this extension.
   */ getAllowedStateKeys() {
        return [];
    }
}

//# sourceMappingURL=Extension.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/extension/AbstractExtension.js


/**
 * Abstract extension
 */ class AbstractExtension extends Extension {
    static $name;
    static $dependencies;
    /**
   * State manager.
   */ _pageStateManager;
    /**
   * Flag indicating whether the PageStateManager should be used instead
   * of partial state.
   */ _usingStateManager = false;
    _partialStateSymbol = Symbol('partialState');
    /**
   * The HTTP response code to send to the client.
   */ status = 200;
    /**
   * The route parameters extracted from the current route.
   */ params = {};
    /**
   * @inheritDoc
   */ init() {
        return;
    }
    /**
   * @inheritDoc
   */ destroy() {
        return;
    }
    /**
   * @inheritDoc
   */ activate() {
        return;
    }
    /**
   * @inheritDoc
   */ deactivate() {
        return;
    }
    /**
   * @inheritDoc
   */ load() {
        throw new GenericError('The ima.core.extension.AbstractExtension.load method is abstract ' + 'and must be overridden');
    }
    /**
   * @inheritDoc
   */ update(prevParams = {}) {
        return {};
    }
    /**
   * @inheritDoc
   */ setState(statePatch) {
        if (this._pageStateManager) {
            this._pageStateManager.setState(statePatch);
        }
    }
    /**
   * @inheritDoc
   */ getState() {
        if (this._usingStateManager && this._pageStateManager) {
            return this._pageStateManager.getState();
        } else {
            return this.getPartialState();
        }
    }
    /**
   * @inheritDoc
   */ beginStateTransaction() {
        if (this._pageStateManager) {
            this._pageStateManager.beginTransaction();
        }
    }
    /**
   * @inheritDoc
   */ commitStateTransaction() {
        if (this._pageStateManager) {
            this._pageStateManager.commitTransaction();
        }
    }
    /**
   * @inheritDoc
   */ cancelStateTransaction() {
        if (this._pageStateManager) {
            this._pageStateManager.cancelTransaction();
        }
    }
    /**
   * @inheritDoc
   */ setPartialState(partialStatePatch) {
        const newPartialState = Object.assign({}, this[this._partialStateSymbol], partialStatePatch);
        this[this._partialStateSymbol] = newPartialState;
    }
    /**
   * @inheritDoc
   */ getPartialState() {
        return this[this._partialStateSymbol] || {};
    }
    /**
   * @inheritDoc
   */ clearPartialState() {
        this[this._partialStateSymbol] = {};
    }
    /**
   * @inheritDoc
   */ setRouteParams(params = {}) {
        this.params = params;
    }
    /**
   * @inheritDoc
   */ getRouteParams() {
        return this.params;
    }
    /**
   * @inheritDoc
   */ setPageStateManager(pageStateManager) {
        this._pageStateManager = pageStateManager;
    }
    /**
   * @inheritDoc
   */ switchToStateManager() {
        this._usingStateManager = true;
    }
    /**
   * @inheritDoc
   */ switchToPartialState() {
        this._usingStateManager = false;
    }
    /**
   * @inheritDoc
   */ getHttpStatus() {
        return this.status;
    }
    /**
   * Returns array of allowed state keys for extension.
   */ getAllowedStateKeys() {
        return [];
    }
}

//# sourceMappingURL=AbstractExtension.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/renderer/RendererEvents.js
/**
 * Events constants, which is firing to app.
 */ var RendererEvents;
(function(RendererEvents) {
    RendererEvents[/**
   * PageRenderer fires event `$IMA.$PageRenderer.mounted` after
   * current page view is mounted to the DOM. Event's data contain
   * `{type: string}`.
   */ "MOUNTED"] = '$IMA.$PageRenderer.mounted';
    RendererEvents[/**
   * PageRenderer fires event `$IMA.$PageRenderer.updated` after
   * current state is updated in the DOM. Event's data contain
   * `{state: Object<string, *>}`.
   */ "UPDATED"] = '$IMA.$PageRenderer.updated';
    RendererEvents[/**
   * PageRenderer fires event `$IMA.$PageRenderer.unmounted` after current view is
   * unmounted from the DOM. Event's data contain
   * `{type: string}`.
   */ "UNMOUNTED"] = '$IMA.$PageRenderer.unmounted';
    RendererEvents[/**
   * PageRenderer fires event `$IMA.$PageRenderer.error` when there is
   * no _viewContainer in _renderToDOM method. Event's data contain
   * `{message: string}`.
   */ "ERROR"] = '$IMA.$PageRenderer.error';
    RendererEvents[/**
   * Fired when problem occurs during hydratation.
   */ "HYDRATE_ERROR"] = '$IMA.$PageRenderer.hydrateError';
})(RendererEvents || (RendererEvents = {}));

//# sourceMappingURL=RendererEvents.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/page/renderer/RendererTypes.js
/**
 * Events constants, which is firing to app.
 */ var RendererTypes;
(function(RendererTypes) {
    RendererTypes[/**
   * The RENDER type is set if mounting use React.render method.
   */ "RENDER"] = '$IMA.$PageRenderer.type.render';
    RendererTypes[/**
   * The HYDRATE type is set if mounting use React.hydrate method.
   */ "HYDRATE"] = '$IMA.$PageRenderer.type.hydrate';
    RendererTypes[/**
   * The UNMOUNT type is set if unmounting use React.unmountComponentAtNode method.
   */ "UNMOUNT"] = '$IMA.$PageRenderer.type.unmount';
})(RendererTypes || (RendererTypes = {}));

//# sourceMappingURL=RendererTypes.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/core/dist/esm/server/index.js











































































//# sourceMappingURL=index.js.map
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("react");
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__("./node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/componentHelpers.js


/**
 * Retrieves the view utilities from the component's current context or
 * properties (preferring the context).
 *
 * @param props The component's current properties.
 * @param context The component's current context.
 * @return The retrieved view utilities.
 * @throws Error Throw if the view utils cannot be located in the provided
 *         properties nor context.
 */ function getUtils(props, context) {
    const utils = context ? context.$Utils || props.$Utils : props.$Utils;
    if ($Debug && !utils) {
        throw new Error('The component cannot access the view utils because they were ' + 'not passed in the initial props or context as $Utils.');
    }
    return utils;
}
/**
 * Returns the localized phrase identified by the specified key. The
 * placeholders in the localization phrase will be replaced by the provided
 * values.
 *
 * @param component The component
 *        requiring the localization.
 * @param key Localization key.
 * @param params Values for replacing the
 *        placeholders in the localization phrase.
 * @return Localized phrase.
 */ function localize(component, key, params) {
    return component.utils.$Dictionary.get(key, params);
}
/**
 * Generates an absolute URL using the provided route name (see the
 * <code>app/config/routes.js</code> file). The provided parameters will
 * replace the placeholders in the route pattern, while the extraneous
 * parameters will be appended to the generated URL's query string.
 *
 * @param component The component
 *        requiring the generating of the URL.
 * @param name The route name.
 * @param params Router parameters and
 *        extraneous parameters to add to the URL as a query string.
 * @return The generated URL.
 */ function componentHelpers_link(component, name, params) {
    return component.utils.$Router.link(name, params);
}
/**
 * Generate a string of CSS classes from the properties of the passed-in
 * object that resolve to `true`.
 *
 * @example
 *        this.cssClasses('my-class my-class-modifier', true);
 * @example
 *        this.cssClasses({
 *            'my-class': true,
 *            'my-class-modifier': this.props.modifier
 *        }, true);
 * @param component The component
 *        requiring the composition of the CSS class names.
 * @param classRules CSS classes in a
 *        string separated by whitespace, or a map of CSS class names to
 *        boolean values. The CSS class name will be included in the result
 *        only if the value is `true`.
 * @param includeComponentClassName
 * @return String of CSS classes that had their property resolved
 *         to `true`.
 */ function cssClasses(component, classRules, includeComponentClassName) {
    return component.utils.$CssClasses(classRules, includeComponentClassName ? component : '');
}
/**
 * Generate a string of CSS classes from the properties of the passed-in
 * object that resolve to `true`.
 *
 * @param classRules CSS classes in a
 *        string separated by whitespace, or a map of CSS class names to
 *        boolean values. The CSS class name will be included in the result
 *        only if the value is `true`.
 * @param component The component
 *        requiring the composition of the CSS class names, if it has the
 *        `className` property set and requires its inclusion this time.
 * @return String of CSS classes that had their property resolved
 *         to `true`.
 */ function defaultCssClasses(classRules, component) {
    let extraClasses = typeof component === 'string' ? component : null;
    const isComponent = component instanceof external_react_.Component;
    const isPureComponent = component instanceof external_react_.PureComponent;
    if (!extraClasses && (isComponent || isPureComponent)) {
        extraClasses = component.props.className;
    }
    return classnames_default()(classRules, extraClasses);
}
/**
 * Creates and sends a new IMA.js DOM custom event from the provided component.
 *
 * @param component The component
 *        at which's root element the event will originate.
 * @param eventName The name of the event.
 * @param data Data to send within the event.
 */ function fire(component, eventTarget, eventName, data = null) {
    return component.utils.$EventBus.fire(eventTarget, eventName, data);
}
/**
 * Registers the provided event listener for execution whenever an IMA.js
 * DOM custom event of the specified name occurs at the specified event
 * target.
 *
 * @param component The component
 *        requesting the registration of the event listener.
 * @param eventTarget The react component or
 *        event target at which the listener should listen for the event.
 * @param eventName The name of the event for which to listen.
 * @param listener The listener for event to register.
 */ function listen(component, eventTarget, eventName, listener) {
    return component.utils.$EventBus.listen(eventTarget, eventName, listener);
}
/**
 * Deregisters the provided event listener for an IMA.js DOM custom event
 * of the specified name at the specified event target.
 *
 * @param component The component
 *        that requested the registration of the event listener.
 * @param eventTarget The react component or
 *        event target at which the listener should listen for the event.
 * @param eventName The name of the event for which to listen.
 * @param listener The listener for event to register.
 */ function unlisten(component, eventTarget, eventName, listener) {
    return component.utils.$EventBus.unlisten(eventTarget, eventName, listener);
}

//# sourceMappingURL=componentHelpers.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/PageContext.js

const PageContext_PageContext = /*#__PURE__*/ (0,external_react_.createContext)({});

//# sourceMappingURL=PageContext.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/component/AbstractComponent.js



/**
 * The base class for all view components.
 */ class AbstractComponent extends (/* unused pure expression or super */ null && (Component)) {
    static contextType = (/* unused pure expression or super */ null && (PageContext));
    _utils;
    /**
   * Returns the utilities for the view components. The returned value is the
   * value bound to the `$Utils` object container constant.
   *
   * @return The utilities for the view components.
   */ get utils() {
        if (!this._utils) {
            this._utils = helpers.getUtils(this.props, this.context);
        }
        return this._utils;
    }
    /**
   * Returns the localized phrase identified by the specified key. The
   * placeholders in the localization phrase will be replaced by the provided
   * values.
   *
   * @param key Localization key.
   * @param params Values for replacing
   *        the placeholders in the localization phrase.
   * @return Localized phrase.
   */ localize(key, params = {}) {
        return helpers.localize(this, key, params);
    }
    /**
   * Generates an absolute URL using the provided route name (see the
   * <code>app/config/routes.js</code> file). The provided parameters will
   * replace the placeholders in the route pattern, while the extraneous
   * parameters will be appended to the generated URL's query string.
   *
   * @param name The route name.
   * @param params Router parameters and
   *        extraneous parameters to add to the URL as a query string.
   * @return The generated URL.
   */ link(name, params = {}) {
        return helpers.link(this, name, params);
    }
    /**
   * Generate a string of CSS classes from the properties of the passed-in
   * object that resolve to true.
   *
   * @example
   *        this.cssClasses('my-class my-class-modifier', true);
   * @example
   *        this.cssClasses({
   *            'my-class': true,
   *            'my-class-modifier': this.props.modifier
   *        }, true);
   *
   * @param classRules CSS classes in a
   *        string separated by whitespace, or a map of CSS class names to
   *        boolean values. The CSS class name will be included in the result
   *        only if the value is `true`.
   * @param includeComponentClassName
   * @return String of CSS classes that had their property resolved
   *         to `true`.
   */ cssClasses(classRules, includeComponentClassName = false) {
        return helpers.cssClasses(this, classRules, includeComponentClassName);
    }
    /**
   * Creates and sends a new IMA.js DOM custom event from this component.
   *
   * @param eventName The name of the event.
   * @param eventTarget EventTarget compatible node.
   * @param data Data to send within the event.
   */ fire(eventTarget, eventName, data) {
        helpers.fire(this, eventTarget, eventName, data);
    }
    /**
   * Registers the provided event listener for execution whenever an IMA.js
   * DOM custom event of the specified name occurs at the specified event
   * target.
   *
   * @param eventTarget The react component or
   *        event target at which the listener should listen for the event.
   * @param eventName The name of the event for which to listen.
   * @param listener The listener for event to register.
   */ listen(eventTarget, eventName, listener) {
        helpers.listen(this, eventTarget, eventName, listener);
    }
    /**
   * Deregisters the provided event listener for an IMA.js DOM custom event
   * of the specified name at the specified event target.
   *
   * @param eventTarget The react component or
   *        event target at which the listener should listen for the event.
   * @param eventName The name of the event for which to listen.
   * @param listener The listener for event to register.
   */ unlisten(eventTarget, eventName, listener) {
        helpers.unlisten(this, eventTarget, eventName, listener);
    }
}

//# sourceMappingURL=AbstractComponent.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/component/AbstractPureComponent.js



/**
 * The base class for all view components.
 */ class AbstractPureComponent extends (/* unused pure expression or super */ null && (PureComponent)) {
    static contextType = (/* unused pure expression or super */ null && (PageContext));
    _utils;
    /**
   * Returns the utilities for the view components. The returned value is the
   * value bound to the `$Utils` object container constant.
   *
   * @return The utilities for the view components.
   */ get utils() {
        if (!this._utils) {
            this._utils = helpers.getUtils(this.props, this.context);
        }
        return this._utils;
    }
    /**
   * Returns the localized phrase identified by the specified key. The
   * placeholders in the localization phrase will be replaced by the provided
   * values.
   *
   * @param key Localization key.
   * @param params Values for replacing
   *        the placeholders in the localization phrase.
   * @return Localized phrase.
   */ localize(key, params = {}) {
        return helpers.localize(this, key, params);
    }
    /**
   * Generates an absolute URL using the provided route name (see the
   * <code>app/config/routes.js</code> file). The provided parameters will
   * replace the placeholders in the route pattern, while the extraneous
   * parameters will be appended to the generated URL's query string.
   *
   * @param name The route name.
   * @param params Router parameters and
   *        extraneous parameters to add to the URL as a query string.
   * @return The generated URL.
   */ link(name, params = {}) {
        return helpers.link(this, name, params);
    }
    /**
   * Generate a string of CSS classes from the properties of the passed-in
   * object that resolve to true.
   *
   * @example
   *        this.cssClasses('my-class my-class-modifier', true);
   * @example
   *        this.cssClasses({
   *            'my-class': true,
   *            'my-class-modifier': this.props.modifier
   *        }, true);
   *
   * @param classRules CSS classes in a
   *        string separated by whitespace, or a map of CSS class names to
   *        boolean values. The CSS class name will be included in the result
   *        only if the value is `true`.
   * @param includeComponentClassName
   * @return String of CSS classes that had their property resolved
   *         to `true`.
   */ cssClasses(classRules, includeComponentClassName = false) {
        return helpers.cssClasses(this, classRules, includeComponentClassName);
    }
    /**
   * Creates and sends a new IMA.js DOM custom event from this component.
   *
   * @param eventName The name of the event.
   * @param eventTarget EventTarget compatible node.
   * @param data Data to send within the event.
   */ fire(eventTarget, eventName, data) {
        helpers.fire(this, eventTarget, eventName, data);
    }
    /**
   * Registers the provided event listener for execution whenever an IMA.js
   * DOM custom event of the specified name occurs at the specified event
   * target.
   *
   * @param eventTarget The react component or
   *        event target at which the listener should listen for the event.
   * @param eventName The name of the event for which to listen.
   * @param listener The listener for event to register.
   */ listen(eventTarget, eventName, listener) {
        helpers.listen(this, eventTarget, eventName, listener);
    }
    /**
   * Deregisters the provided event listener for an IMA.js DOM custom event
   * of the specified name at the specified event target.
   *
   * @param eventTarget The react component or
   *        event target at which the listener should listen for the event.
   * @param eventName The name of the event for which to listen.
   * @param listener The listener for event to register.
   */ unlisten(eventTarget, eventName, listener) {
        helpers.unlisten(this, eventTarget, eventName, listener);
    }
}

//# sourceMappingURL=AbstractPureComponent.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/component/BlankManagedRootView.js

/**
 * Blank managed root view does not nothing except for rendering the current
 * page view.
 *
 * This is the default managed root view.
 */ class BlankManagedRootView extends external_react_.Component {
    static get defaultProps() {
        return {
            pageView: null
        };
    }
    /**
   * @inheritDoc
   */ render() {
        const { pageView, ...restProps } = this.props;
        if (!pageView) {
            return null;
        }
        return /*#__PURE__*/ (0,external_react_.createElement)(pageView, restProps);
    }
}

//# sourceMappingURL=BlankManagedRootView.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/component/ErrorBoundary.js

/**
 * Error boundary wrapper which connects the IMA application to the
 * dev HMR api and handles error reporting.
 */ class ErrorBoundary extends external_react_.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidMount() {
        // Clear reported errors
        if (typeof window !== 'undefined' && window?.__IMA_HMR?.emitter) {
            window.__IMA_HMR.emitter.emit('clear');
        }
    }
    componentDidCatch(error) {
        // Report errors to overlay
        if (typeof window !== 'undefined' && window?.__IMA_HMR?.emitter) {
            window.__IMA_HMR.emitter.emit('error', {
                error
            });
        }
    }
    render() {
        return this.state.hasError ? null : this.props.children;
    }
}

//# sourceMappingURL=ErrorBoundary.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/component/ViewAdapter.js




/**
 * An adapter component providing the current page controller's state to the
 * page view component through its properties.
 */ class ViewAdapter extends external_react_.Component {
    _managedRootView;
    _getContextValue;
    createContext;
    contextSelectors = [
        (props)=>props.$Utils
    ];
    /**
   * Initializes the adapter component.
   *
   * @param props Component properties, containing the actual page view
   *        and the initial page state to pass to the view.
   */ constructor(props){
        super(props);
        this.state = {};
        /**
     * The actual page view to render.
     */ this._managedRootView = props.managedRootView;
        /**
     * The memoized context value.
     */ this._getContextValue = memoizeOne((props, state)=>this.getContextValue(props, state));
        /**
     * The function for creating context.
     */ this.createContext = memoizeOne(($Utils, ...values)=>{
            return {
                $Utils,
                ...values
            };
        });
    }
    static getDerivedStateFromProps(props, state) {
        if (!state) {
            return props.state;
        }
        return {
            ...Object.keys(state).reduce((acc, cur)=>{
                acc[cur] = undefined;
                return acc;
            }, {}),
            ...props.state
        };
    }
    getContextValue(props, state) {
        return this.createContext(// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-return
        ...this.contextSelectors.map((selector)=>selector(props, state)));
    }
    /**
   * @inheritDoc
   */ render() {
        const viewElement = /*#__PURE__*/ (0,external_react_.createElement)(PageContext_PageContext.Provider, {
            value: this._getContextValue(this.props, this.state)
        }, /*#__PURE__*/ (0,external_react_.createElement)(this._managedRootView, Object.assign({}, this.state, {
            pageView: this.props.pageView,
            ref: (element)=>{
                if (element && this.props.refCallback) {
                    this.props.refCallback();
                }
            }
        })));
        // Wrap view with ErrorBoundary in $Debug env
        return $Debug ? /*#__PURE__*/ (0,external_react_.createElement)(ErrorBoundary, null, viewElement) : viewElement;
    }
}

//# sourceMappingURL=ViewAdapter.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/renderer/PageRendererFactory.js

/**
 * Factory for page render.
 */ class PageRendererFactory {
    _componentUtils;
    /**
   * Initializes the factory used by the page renderer.
   *
   * @param componentUtils The registry of component utilities.
   */ constructor(componentUtils){
        /**
     * The registry of component utilities.
     */ this._componentUtils = componentUtils;
    }
    /**
   * Return object of services which are defined for alias $Utils.
   */ getUtils() {
        return this._componentUtils.getUtils();
    }
    /**
   * Returns the class constructor of the specified document view component.
   * Document view may be specified as a namespace path or as a class
   * constructor.
   *
   * @param documentView The
   *        namespace path pointing to the document view component, or the
   *        constructor of the document view component.
   * @return The constructor of the document
   *         view component.
   */ getDocumentView(documentView) {
        if ($Debug) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const componentPrototype = documentView.prototype;
            if (!(componentPrototype instanceof external_react_.PureComponent || this._isFunctionalComponent(documentView))) {
                throw new Error('The document view component must extend React.PureComponent or be a functional component.');
            }
        }
        return documentView;
    }
    /**
   * Returns the class constructor of the specified managed root view
   * component. Managed root view may be specified as a namespace
   * path or as a class constructor.
   *
   * @param managedRootView The
   *        namespace path pointing to the managed root view component, or
   *        the constructor of the React component.
   * @return The constructor of the managed
   *         root view component.
   */ getManagedRootView(managedRootView) {
        if ($Debug) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const componentPrototype = managedRootView.prototype;
            if (!(componentPrototype instanceof external_react_.Component || this._isFunctionalComponent(managedRootView))) {
                throw new Error('The managed root view component must extend React.Component or be a functional component.');
            }
        }
        return managedRootView;
    }
    _isFunctionalComponent(component) {
        return typeof component === 'function' && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        !(component.prototype && component.prototype.isReactComponent);
    }
}

//# sourceMappingURL=PageRendererFactory.js.map
;// CONCATENATED MODULE: external "react-dom/server"
const external_react_dom_server_namespaceObject = require("react-dom/server");
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/renderer/AbstractPageRenderer.js




/**
 * Base class for implementations of the {@linkcode PageRenderer} interface.
 */ class AbstractPageRenderer extends PageRenderer {
    _dispatcher;
    _factory;
    _helpers;
    _settings;
    _viewAdapter;
    _viewAdapterProps = {};
    /**
   * Initializes the abstract page renderer.
   *
   * @param factory Factory for receive $Utils to view.
   * @param helpers The IMA.js helper methods.
   *        to render the page.
   * @param dispatcher Dispatcher fires events to app.
   * @param settings Application settings for the current
   *        application environment.
   */ constructor(factory, helpers, dispatcher, settings){
        super();
        /**
     * Factory for receive $Utils to view.
     */ this._factory = factory;
        /**
     * The IMA.js helper methods.
     */ this._helpers = helpers;
        /**
     * Dispatcher fires events to app.
     */ this._dispatcher = dispatcher;
        /**
     * Application setting for the current application environment.
     */ this._settings = settings;
    }
    /**
   * @inheritDoc
   */ _getViewAdapterElement(props = {}) {
        if (this._viewAdapter) {
            this._viewAdapterProps = Object.assign(this._viewAdapterProps, props);
            return /*#__PURE__*/ (0,external_react_.createElement)(this._viewAdapter, this._viewAdapterProps);
        }
    }
    /**
   * Generate properties for view from state.
   *
   * @param view The page view React component to wrap.
   */ _generateViewAdapterProps(managedRootView, pageView, state = {}) {
        const props = {
            $Utils: this._factory.getUtils(),
            managedRootView,
            pageView,
            state
        };
        return props;
    }
    /**
   * Returns wrapped page view component with managed root view and view adapter.
   *
   * @param routeOptions The current route options.
   */ _prepareViewAdapter(controller, pageView, routeOptions) {
        const managedRootView = this._factory.getManagedRootView(routeOptions.managedRootView || this._settings.$Page.$Render.managedRootView || BlankManagedRootView);
        const props = this._generateViewAdapterProps(managedRootView, pageView, Object.assign({}, controller.getState()));
        this._viewAdapter = routeOptions.viewAdapter || this._settings.$Page.$Render.viewAdapter || ViewAdapter;
        this._viewAdapterProps = Object.assign(this._viewAdapterProps, props);
    }
    /**
   * Returns the class constructor of the specified document view component.
   *
   * @param routeOptions The current route options.
   * @return The constructor of the document view component.
   */ _getDocumentView(routeOptions) {
        return this._factory.getDocumentView(routeOptions.documentView || this._settings.$Page.$Render.documentView);
    }
}

//# sourceMappingURL=AbstractPageRenderer.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/renderer/ServerPageRenderer.js




/**
 * Server-side page renderer. The renderer renders the page into the HTML
 * markup and sends it to the client.
 */ class ServerPageRenderer extends AbstractPageRenderer {
    /**
   * Initializes the server-side page renderer.
   *
   * @param factory Factory for receive $Utils to view.
   * @param helpers The IMA.js helper methods.
   * @param dispatcher Dispatcher fires events to app.
   * @param settings Application setting for the current
   *        application environment.
   * @param cache Resource cache caching the results of HTTP requests
   *        made by services used by the rendered page.
   */ constructor(factory, helpers, dispatcher, settings){
        super(factory, helpers, dispatcher, settings);
    }
    /**
   * @inheritDoc
   */ mount(controller, pageView, pageResources, routeOptions) {
        return this._helpers.allPromiseHash(pageResources).then((pageState)=>{
            controller.setState(pageState);
            controller.setMetaParams(pageState);
            this._prepareViewAdapter(controller, pageView, routeOptions);
            return {
                documentView: this._getDocumentView(routeOptions),
                documentViewProps: {
                    $Utils: this._factory.getUtils(),
                    metaManager: controller.getMetaManager()
                },
                react: external_react_,
                reactDOM: external_react_dom_server_namespaceObject,
                status: controller.getHttpStatus(),
                viewAdapter: this._getViewAdapterElement()
            };
        });
    }
    setState() {
        return Promise.resolve();
    }
    /**
   * @inheritDoc
   */ update() {
        return Promise.reject(new GenericError('The update() is denied on server side.'));
    }
    /**
   * @inheritDoc
   */ unmount() {
    // nothing to do
    }
}

//# sourceMappingURL=ServerPageRenderer.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/hooks/pageContext.js



/**
 * Provides direct access to IMA Page context.
 *
 * @example
 * const pageContext = usePageContext();
 *
 * @returns App page context.
 */ function pageContext_usePageContext() {
    const context = (0,external_react_.useContext)(PageContext_PageContext);
    if (typeof context === 'undefined') {
        throw new GenericError('The usePageContext hook must be used within PageContext.Provider.');
    }
    return context;
}

//# sourceMappingURL=pageContext.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/hooks/component.js


/**
 * "Constructor" like hook, which makes sure, that provided callback
 * is called only once during component's lifecycle.
 *
 * @example
 * useOnce(() => {
 * 	oneTimeAction();
 * });
 *
 * @param {Function} callback
 */ function useOnce(callback) {
    const called = useRef(false);
    if (called.current) {
        return;
    }
    callback && callback();
    called.current = true;
}
/**
 * Base hook you can use to initialize your component.
 *
 * Returns object, which gives you access to the same features you would
 * get in your class component:
 *  - Utility methods: cssClasses, localize, link, fire, listen, unlisten.
 *  - Objects: utils (=== ComponentUtils).
 *
 * @example
 * const { utils, cssClasses } = useComponent();
 *
 * @returns Object containing context data and utility methods.
 */ function useComponent() {
    const { $Utils } = usePageContext();
    return useMemo(()=>({
            utils: $Utils,
            cssClasses: (...params)=>$Utils.$CssClasses(...params),
            localize: (...params)=>$Utils.$Dictionary.get(...params),
            link: (...params)=>$Utils.$Router.link(...params),
            fire: (...params)=>$Utils.$EventBus.fire(...params),
            listen: (...params)=>$Utils.$EventBus.listen(...params),
            unlisten: (...params)=>$Utils.$EventBus.unlisten(...params)
        }), [
        $Utils
    ]);
}

//# sourceMappingURL=component.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/hooks/componentUtils.js

/**
 * Provides direct access to ComponentUtils.
 *
 * @example
 * const utils = useComponentUtils();
 *
 * @returns Component utils.
 */ function componentUtils_useComponentUtils() {
    const pageContext = pageContext_usePageContext();
    return pageContext.$Utils ?? {};
}

//# sourceMappingURL=componentUtils.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/hooks/cssClasses.js


/**
 * Provides direct access to CssClasses.
 *
 * @example
 * const cssClasses = useCssClasses();
 *
 * @returns CssClasses function.
 */ function useCssClasses() {
    const { $CssClasses } = componentUtils_useComponentUtils();
    return (0,external_react_.useCallback)((...params)=>$CssClasses(...params), [
        $CssClasses
    ]);
}


//# sourceMappingURL=cssClasses.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/hooks/dispatcher.js
/* eslint-disable @typescript-eslint/no-unsafe-argument */ 

function useDispatcher(event, listener) {
    const { $Dispatcher } = useComponentUtils();
    useEffect(()=>{
        if (event && listener) {
            $Dispatcher.listen(event, listener);
        }
        return ()=>{
            if (event && listener) {
                $Dispatcher.unlisten(event, listener);
            }
        };
    }, [
        $Dispatcher,
        event,
        listener
    ]);
    return useMemo(()=>({
            fire: (...params)=>$Dispatcher.fire(...params)
        }), [
        $Dispatcher
    ]);
}

//# sourceMappingURL=dispatcher.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/hooks/link.js


/**
 * Provides direct access to Router link function.
 *
 * @example
 * const link = useLink();
 *
 * @returns URL to linked path.
 */ function useLink() {
    const { $Router } = useComponentUtils();
    return useCallback((...params)=>$Router.link(...params), [
        $Router
    ]);
}

//# sourceMappingURL=link.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/hooks/localize.js


/**
 * Provides direct access to Dictionary.get function.
 *
 * @example
 * const localize = useLocalize();
 *
 * @returns Localized string.
 */ function useLocalize() {
    const { $Dictionary } = useComponentUtils();
    return useCallback((...params)=>$Dictionary.get(...params), [
        $Dictionary
    ]);
}

//# sourceMappingURL=localize.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/hooks/settings.js


/**
 * IMA $Settings access provider with optional selector.
 *
 * @example
 * const settings = useSettings();
 * console.log(settings.$Cache.enabled);
 *
 * // Using settings selector
 * const { scripts, documentView } = useSettings('$Page.$Render');
 * const esScripts = useSettings('$Page.$Render.esScripts');
 *
 * @param selector Optional path selector.
 * @returns Settings value or undefined.
 */ function useSettings(selector) {
    const { $Settings } = useComponentUtils();
    if (!selector) {
        return $Settings;
    }
    return useMemo(()=>{
        let segment;
        let curSettings = $Settings;
        const segments = selector.split('.');
        while(segment = segments.shift()){
            if (!(segment in curSettings)) {
                return undefined;
            }
            curSettings = curSettings[segment];
        }
        return curSettings;
    }, [
        $Settings
    ]);
}

//# sourceMappingURL=settings.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/hooks/eventBus.js


/**
 * Hook to register listeners for dispatcher events. Returns
 * decorated dispatcher fire function. Omitting hook params
 * doesn't register any events to the dispatcher but provides
 * access to the dispatcher's fire method.
 *
 * @example
 * const { fire } = useEventBus(
 * 	componentRef.current,
 * 	'event',
 *  () => {}
 * );
 *
 * @param event Event name.
 * @param callback Callback to register to dispatcher.
 * @returns Dispatcher `fire` method.
 */ function useEventBus(eventTarget, eventName, listener) {
    const { $EventBus } = useComponentUtils();
    const memoListener = useCallback((...args)=>{
        listener?.(...args);
    }, [
        listener
    ]);
    useEffect(()=>{
        if (!eventTarget || !eventName || !memoListener) {
            return;
        }
        $EventBus.listen(eventTarget, eventName, memoListener);
        return ()=>{
            $EventBus.unlisten(eventTarget, eventName, memoListener);
        };
    }, [
        $EventBus,
        eventName,
        eventTarget,
        memoListener
    ]);
    return useMemo(()=>({
            fire: (...params)=>$EventBus.fire(...params)
        }), [
        $EventBus
    ]);
}

//# sourceMappingURL=eventBus.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/hooks/windowEvent.js


function useWindowEvent(eventTarget, event, listener, useCapture) {
    const { $Window } = useComponentUtils();
    const window = $Window.getWindow();
    useEffect(()=>{
        if (eventTarget && event && listener) {
            $Window.bindEventListener(eventTarget, event, listener, useCapture);
        }
        return ()=>{
            if (eventTarget && event && listener) {
                $Window.unbindEventListener(eventTarget, event, listener, useCapture);
            }
        };
    }, [
        $Window,
        eventTarget,
        event,
        listener,
        useCapture
    ]);
    return useMemo(()=>({
            window,
            dispatchEvent: (event)=>window?.dispatchEvent(event),
            createCustomEvent: (name, options)=>$Window.createCustomEvent(name, options)
        }), [
        $Window
    ]);
}

//# sourceMappingURL=windowEvent.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/index.js



















// eslint-disable-next-line import/export


//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ./node_modules/@ima/react-page-renderer/dist/esm/server/renderer/ClientPageRenderer.js
class ClientPageRenderer {
}

//# sourceMappingURL=ClientPageRenderer.js.map
;// CONCATENATED MODULE: ./app/model/bookApi.js

class BookApi {
    static get $dependencies() {
        return [
            HttpAgent,
            '$Settings.$App.bookApi'
        ];
    }
    constructor(httpAgent, settings){
        this._httpAgent = httpAgent;
        this._settings = settings;
    }
    /**
   * Get book detail
   * @param {any} uid
   * @returns {any}
   */ getBookDetail(uid) {
        return this.#apiRequest(this._settings.detailPath + uid);
    }
    /**
   * search books
   * @param {any} uid
   * @returns {any}
   */ searchBooks(name) {
        return this.#apiRequest(this._settings.searchPath + name);
    }
    recommendBooks(inputBooks, { keepGenres, excludeAuthors, minimalRange }) {
        let url = this._settings.recommendPath;
        Object.keys(inputBooks).forEach((bookUid, index)=>{
            url += (index > 0 ? ',' : '') + bookUid;
        });
        let pathVariables = '';
        if (keepGenres) {
            pathVariables += 'keep_genres';
        }
        if (excludeAuthors) {
            pathVariables += (pathVariables.length > 0 ? '&' : '') + 'exclude_authors';
        }
        if (minimalRange) {
            pathVariables += (pathVariables.length > 0 ? '&' : '') + 'thres_rating=' + minimalRange;
        }
        return this.#apiRequest(url + '?' + pathVariables);
    }
    /**
   * Api request
   *
   * @returns {Object}
   */ async #apiRequest(path) {
        return await this._httpAgent.get(`${this._settings.baseUrl}${path}`).then((response)=>{
            if (response.status === 200) {
                return response.body;
            } else {
                return {
                    error: 'Error',
                    status: response.status
                };
            }
        }).catch((error)=>{
            return {
                error: error.message,
                status: 500
            };
        });
    }
}

;// CONCATENATED MODULE: ./app/config/bind.js




/**
 * @type import('@ima/core').InitBindFunction
 */ // eslint-disable-next-line no-unused-vars
const initBindApp = (ns, oc, config)=>{
    // UI components
    oc.bind('$CssClasses', function() {
        return defaultCssClasses;
    });
    oc.bind('BookApi', BookApi);
    // You can set own Component utils here
    oc.get(ComponentUtils).register({
        $CssClasses: '$CssClasses',
        BookApi: 'BookApi'
    });
    oc.inject(PageRendererFactory, [
        ComponentUtils
    ]);
    oc.bind('$PageRendererFactory', PageRendererFactory);
    if (oc.get(Window).isClient()) {
        oc.provide(PageRenderer, ClientPageRenderer, [
            PageRendererFactory,
            '$Helper',
            '$Dispatcher',
            '$Settings',
            Window
        ]);
    } else {
        oc.provide(PageRenderer, ServerPageRenderer, [
            PageRendererFactory,
            '$Helper',
            '$Dispatcher',
            '$Settings'
        ]);
    }
    oc.bind('$PageRenderer', PageRenderer);
};

;// CONCATENATED MODULE: ./app/page/error/ErrorController.js

class ErrorController extends AbstractController {
    static get $dependencies() {
        return [];
    }
    constructor(){
        super();
        this.status = 500;
    }
    load() {
        return {
            status: this.status,
            error: this.params.error
        };
    }
    setMetaParams(loadedResources, metaManager) {
        metaManager.setTitle(`Error ${this.status} - IMA.js`);
        metaManager.setMetaName('description', 'Server error');
        metaManager.setMetaName('robots', 'noindex, nofollow');
    }
}

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
// EXTERNAL MODULE: ./app/page/error/errorView.less
var errorView = __webpack_require__("./app/page/error/errorView.less");
;// CONCATENATED MODULE: ./app/page/error/ErrorView.jsx


function ErrorView({ error }) {
    const message = error.message || '';
    const stack = error.stack || '';
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "page-error",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                children: "500 – Error"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                className: "message",
                children: message
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("pre", {
                children: stack
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/public/imajs-share.png
const imajs_share_namespaceObject = __webpack_require__.p + "static/media/imajs-share.c6709b9d35f763f0.png";
;// CONCATENATED MODULE: ./app/page/home/HomeController.js


class HomeController extends AbstractController {
    static get $dependencies() {
        return [
            HttpAgent
        ];
    }
    /**
   * @param {HttpAgent} httpAgent
   */ constructor(httpAgent){
        super();
        this._httpAgent = httpAgent;
    }
    /**
   * Callback the controller uses to request the resources it needs to render
   * its view. This method is invoked after the {@link init()} method.
   *
   * The controller should request all resources it needs in this method, and
   * represent each resource request as a promise that will resolve once the
   * resource is ready for use (these can be data fetch over HTTP(S), database
   * connections, etc).
   *
   * The controller must return a map object. The field names of the object
   * identify the resources being fetched and prepared, the values must be the
   * Promises that resolve when the resources are ready to be used.
   *
   * The returned map object may also contain fields that have non-Promise
   * value. These can be used to represent static data, or initial value of
   * controller's state that will change due to user interaction, or resource
   * that has been immediately available (for example fetched from the DOM
   * storage).
   *
   * The system will wait for all promises to resolve, and then push them to
   * the controller's state using the field names used in the returned map
   * object.
   *
   * @override
   * @return {Record<string, Promise<any> | any} A map object of promises
   *         resolved when all resources the controller requires are ready. The
   *         resolved values will be pushed to the controller's state.
   */ load() {
        /**
     * Fetch cards data from static JSON file using IMA HttpAgent.
     * HttpAgent is implementation based on native fetch api with some
     * additional features. It handles fetching data on client but also
     * on server isomorphically.
     */ return {};
    }
    /**
   * Callback used to configure the meta attribute manager. The method is called
   * after the the controller's state has been patched with the loaded
   * resources, the view has been rendered and (if at the client-side) the
   * controller has been provided with the rendered view.
   *
   * @override
   * @param {import('@ima/core').UnknownParameters} _loadedResources Map of resource names to
   *        resources loaded by the {@link load} method. This is the same
   *        object as the one passed to the {@link setState} method when
   *        the Promises returned by the {@link load} method were resolved.
   * @param {import('@ima/core').MetaManager} metaManager Meta attributes manager to configure.
   * @param {import('@ima/core').Router} router The current application router.
   * @param {import('@ima/core').Dictionary} dictionary The current localization dictionary.
   * @param {import('@ima/core').UnknownParameters} settings The application settings for the
   *        current application environment.
   */ // eslint-disable-next-line no-unused-vars
    setMetaParams(_loadedResources, metaManager, router, dictionary, settings) {
        let title = 'Nahoď knihu!';
        let description = 'Nahoď knihu! Aplikace, která umožní lidem snadno a rychle získat knihu, kterou chtějí přečíst.';
        metaManager.setTitle(title);
        metaManager.setMetaName('description', description);
    }
}

// EXTERNAL MODULE: ./app/page/home/homeView.less
var homeView = __webpack_require__("./app/page/home/homeView.less");
;// CONCATENATED MODULE: ./app/page/home/HomeContext.js

const HomeContext = /*#__PURE__*/ (0,external_react_.createContext)({});

// EXTERNAL MODULE: ./app/component/pageHeader/pageHeader.less
var pageHeader = __webpack_require__("./app/component/pageHeader/pageHeader.less");
;// CONCATENATED MODULE: ./app/component/pageHeader/PageHeader.jsx



const CSS_CLASS = 'page-header';
function PageHeader() {
    const cssClasses = useCssClasses();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: cssClasses(CSS_CLASS),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: cssClasses(`page-container`),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                    className: cssClasses(`${CSS_CLASS}__title`),
                    children: "NAHOĎ KNIHU!"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: cssClasses(`${CSS_CLASS}__moto`),
                    children: "Zadej svoje obl\xedben\xe9 knihy a nech si doporučit podobn\xe9"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: cssClasses(`${CSS_CLASS}__right`),
                    children: "m\xe1 tu b\xfdt něco?"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./app/component/searchForm/searchForm.less
var searchForm = __webpack_require__("./app/component/searchForm/searchForm.less");
// EXTERNAL MODULE: ./app/component/bookList/bookList.less
var bookList = __webpack_require__("./app/component/bookList/bookList.less");
// EXTERNAL MODULE: ./app/component/bookCard/bookCard.less
var bookCard = __webpack_require__("./app/component/bookCard/bookCard.less");
;// CONCATENATED MODULE: ./app/component/icons/IconBook.jsx


const IconBook_CSS_CLASS = 'icon-book';
function IconBook() {
    const cssClasses = useCssClasses();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        className: cssClasses(IconBook_CSS_CLASS),
        height: "348.298px",
        width: "251px",
        version: "1.1",
        viewBox: "0 -0.888 327.612 453.595",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                transform: "matrix(1, 0, 0, 1, -62.57233, -0.581178)",
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                    d: "m379.771,0h-262.655c-29.875,0-54.18,24.305-54.18,54.18v344.346c0,29.875 24.305,54.181 54.18,54.181h262.654c5.523,0 10-4.477 10-10v-432.707c0.001-5.523-4.476-10-9.999-10zm-10,344.346h-242.655v-324.346h242.654v324.346zm-262.654-322.85v323.791c-9.048,1.696-17.311,5.639-24.18,11.24v-302.347c0-15.368 10.197-28.398 24.18-32.684zm10,411.211c-18.847,0-34.18-15.333-34.18-34.181 0-18.847 15.333-34.18 34.18-34.18h252.654v10.18h-230.654c-5.523,0-10,4.477-10,10s4.477,10 10,10h230.655v8h-60.655c-5.523,0-10,4.477-10,10s4.477,10 10,10h60.655v10.181h-252.655z"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/component/bookCard/BookCard.jsx






const BookCard_CSS_CLASS = 'book-card';
function BookCard({ bookUid, bookData: { title, authors, genres, rating }, mode }) {
    const cssClasses = useCssClasses();
    const { inputBooks, addInputBookFactory, removeInputBookFactory } = (0,external_react_.useContext)(HomeContext);
    const handleBookClick = mode === 'selector' ? inputBooks[bookUid] ? removeInputBookFactory(bookUid) : addInputBookFactory(bookUid) : removeInputBookFactory(bookUid);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cssClasses({
            [BookCard_CSS_CLASS]: true,
            [`${BookCard_CSS_CLASS}--${mode}`]: true,
            [`${BookCard_CSS_CLASS}--selected`]: !!inputBooks[bookUid]
        }, true),
        onClick: handleBookClick,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("h3", {
                className: cssClasses(`${BookCard_CSS_CLASS}__title`),
                children: title
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: cssClasses(`${BookCard_CSS_CLASS}__authors`),
                children: authors
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                className: cssClasses(`${BookCard_CSS_CLASS}__genres`),
                children: !!genres && genres.map((genre, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: genre
                    }, index))
            }),
            mode === 'tags' && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: cssClasses(`${BookCard_CSS_CLASS}__background`),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(IconBook, {})
                    }),
                    !!rating && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: cssClasses(`${BookCard_CSS_CLASS}__rating`),
                        children: rating
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/component/bookList/BookList.jsx




const BookList_CSS_CLASS = 'book-list';
function BookList({ list, mode }) {
    const cssClasses = useCssClasses();
    if (list === {}) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: cssClasses({
            [BookList_CSS_CLASS]: true,
            [`${BookList_CSS_CLASS}--${mode}`]: true
        }, true),
        children: Object.keys(list).map((bookUid)=>{
            return /*#__PURE__*/ (0,jsx_runtime.jsx)(BookCard, {
                bookUid: bookUid,
                bookData: list[bookUid],
                mode: mode
            }, bookUid);
        })
    });
}

;// CONCATENATED MODULE: ./app/component/searchForm/SearchForm.jsx






const SearchForm_CSS_CLASS = 'search-form';
function SearchForm({ inputBooks }) {
    const cssClasses = useCssClasses();
    const { BookApi } = componentUtils_useComponentUtils();
    const { searchPhase, setSearchPhase, searchResults, setSearchResults, searchRecommendBooks, keepGenres, setKeepGenres, excludeAuthors, setExcludeAuthors, minimalRange, onChangeMinimalRange } = (0,external_react_.useContext)(HomeContext);
    (0,external_react_.useEffect)(()=>{
        if (searchPhase.length > 2) {
            /* eslint-disable no-inner-declarations */ async function searchBooks() {
                try {
                    const searchResults = await BookApi.searchBooks(searchPhase);
                    setSearchResults(searchResults);
                } catch (error) {
                    setSearchResults(error);
                }
            }
            /* eslint-enable no-inner-declarations */ searchBooks();
        } else {
            setSearchResults({});
        }
        return ()=>{};
    }, [
        searchPhase
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: cssClasses(SearchForm_CSS_CLASS, `page-container`),
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                name: SearchForm_CSS_CLASS,
                className: cssClasses(`${SearchForm_CSS_CLASS}__form`),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                        className: cssClasses(`${SearchForm_CSS_CLASS}__label`),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                className: cssClasses(`${SearchForm_CSS_CLASS}__label__text`),
                                children: "Zadej knihy, ze kter\xfdch chceš vygenerovat podobn\xe9:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                className: cssClasses(`${SearchForm_CSS_CLASS}__input`),
                                onChange: (event)=>setSearchPhase(event.target.value),
                                value: searchPhase,
                                placeholder: "n\xe1zev knihy nebo jeho č\xe1st"
                            })
                        ]
                    }),
                    !!Object.keys(searchResults).length && /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        className: cssClasses(`${SearchForm_CSS_CLASS}__results`),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(BookList, {
                            list: searchResults,
                            mode: "selector"
                        })
                    })
                ]
            }),
            !!Object.keys(inputBooks).length && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: cssClasses(`${SearchForm_CSS_CLASS}__input-books`),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                                className: cssClasses(`${SearchForm_CSS_CLASS}__input-books__title`),
                                children: "Vybran\xe9 knihy:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(BookList, {
                                list: inputBooks,
                                mode: "tags"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("fieldset", {
                        className: cssClasses(`${SearchForm_CSS_CLASS}__options`),
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                className: cssClasses(`${SearchForm_CSS_CLASS}__checkbox-label`),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "checkbox",
                                        name: "exclude_authors",
                                        className: cssClasses({
                                            [`${SearchForm_CSS_CLASS}__checkbox`]: true,
                                            [`${SearchForm_CSS_CLASS}__checkbox--checked`]: !!excludeAuthors
                                        }),
                                        checked: !!excludeAuthors,
                                        onChange: ()=>setExcludeAuthors(!excludeAuthors)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: cssClasses(`${SearchForm_CSS_CLASS}__checkbox-text`),
                                        children: "Vynechat původn\xed autory"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                className: cssClasses(`${SearchForm_CSS_CLASS}__checkbox-label`),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "checkbox",
                                        name: "keep_genres",
                                        className: cssClasses({
                                            [`${SearchForm_CSS_CLASS}__checkbox`]: true,
                                            [`${SearchForm_CSS_CLASS}__checkbox--checked`]: !!keepGenres
                                        }),
                                        checked: !!keepGenres,
                                        onChange: ()=>setKeepGenres(!keepGenres)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        className: cssClasses(`${SearchForm_CSS_CLASS}__checkbox-text`),
                                        children: "Stejn\xe9 ž\xe1nry"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("label", {
                                className: cssClasses(`${SearchForm_CSS_CLASS}__checkbox-label`),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                                        type: "range",
                                        min: "0",
                                        max: "90",
                                        name: "minimal_range",
                                        className: cssClasses({
                                            [`${SearchForm_CSS_CLASS}__range`]: true
                                        }),
                                        value: minimalRange,
                                        onChange: onChangeMinimalRange
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: cssClasses(`${SearchForm_CSS_CLASS}__checkbox-text`),
                                        children: [
                                            "Minim\xe1ln\xed rating doporučovan\xfdch knih:",
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                                className: cssClasses(`${SearchForm_CSS_CLASS}__recommend-value`),
                                                children: minimalRange || 50
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("fieldset", {
                        className: cssClasses(`${SearchForm_CSS_CLASS}__confirm`),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: searchRecommendBooks,
                            className: cssClasses(`${SearchForm_CSS_CLASS}__confirm__button`),
                            children: "Hledat"
                        })
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./app/component/searchResults/searchResults.less
var searchResults = __webpack_require__("./app/component/searchResults/searchResults.less");
;// CONCATENATED MODULE: ./app/component/searchResults/SearchResults.jsx






const SearchResults_CSS_CLASS = 'search-results';
function SearchResults() {
    const cssClasses = useCssClasses();
    const { recommendResults, recommendResultsRef } = (0,external_react_.useContext)(HomeContext);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        ref: recommendResultsRef,
        className: cssClasses(SearchResults_CSS_CLASS, `page-container`),
        children: !!Object.keys(recommendResults).length && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("h2", {
                    className: cssClasses(`${SearchResults_CSS_CLASS}__title`),
                    children: "Doporučen\xe9 knihy:"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(BookList, {
                    list: recommendResults,
                    mode: "tags"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./app/component/pageFooter/pageFooter.less
var pageFooter = __webpack_require__("./app/component/pageFooter/pageFooter.less");
;// CONCATENATED MODULE: ./app/component/pageFooter/PageFooter.jsx



const PageFooter_CSS_CLASS = 'page-footer';
function PageFooter() {
    const cssClasses = useCssClasses();
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: cssClasses(PageFooter_CSS_CLASS),
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: cssClasses(`page-container`),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
                    className: cssClasses(`${PageFooter_CSS_CLASS}__title`),
                    children: "NAHOĎ KNIHU!"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: cssClasses(`${PageFooter_CSS_CLASS}__moto`),
                    children: "Nějak\xfd footer"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                    className: cssClasses(`${PageFooter_CSS_CLASS}__right`),
                    children: "m\xe1 tu b\xfdt něco?"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/page/home/HomeView.jsx









const HomeView_CSS_CLASS = 'home-view';
/**
 * The `load` method in HomeController.js passes entries
 * in the returned object as props to this component view. The
 * data are passed all at once, as soon as all promises resolve
 * (in case of SSR) or one by one as the promises are being resolved.
 */ function HomeView() {
    const { BookApi } = componentUtils_useComponentUtils();
    const cssClasses = useCssClasses();
    const [searchPhase, setSearchPhase] = (0,external_react_.useState)('kniha');
    const [searchResults, setSearchResults] = (0,external_react_.useState)({});
    const [inputBooks, setInputBooks] = (0,external_react_.useState)({});
    const [recommendResults, setRecomendResults] = (0,external_react_.useState)({});
    const [keepGenres, setKeepGenres] = (0,external_react_.useState)(false);
    const [excludeAuthors, setExcludeAuthors] = (0,external_react_.useState)(false);
    const [minimalRange, setMinimalRange] = (0,external_react_.useState)(50);
    const recommendResultsRef = (0,external_react_.useRef)(null);
    const onChangeMinimalRange = async (event)=>{
        setMinimalRange(event.target.value);
    };
    const searchRecommendBooks = async (event)=>{
        if (Object.keys(inputBooks).length > 0) {
            setRecomendResults(await BookApi.recommendBooks(inputBooks, {
                keepGenres,
                excludeAuthors,
                minimalRange
            }));
            setTimeout(()=>{
                recommendResultsRef.current.scrollIntoView({
                    block: 'end',
                    behavior: 'smooth'
                });
            }, 500);
        }
        event.stopPropagation();
    };
    const addInputBookFactory = (bookUid)=>{
        return (event)=>{
            if (!inputBooks[bookUid]) {
                async function getBookDetail() {
                    const newInputBooks = {
                        ...inputBooks,
                        [bookUid]: await BookApi.getBookDetail(bookUid)
                    };
                    setInputBooks(newInputBooks);
                    setRecomendResults({});
                }
                getBookDetail();
            }
            event.stopPropagation();
        };
    };
    const removeInputBookFactory = (bookUid)=>{
        return (event)=>{
            if (inputBooks[bookUid]) {
                const newInputBooks = {
                    ...inputBooks
                };
                delete newInputBooks[bookUid];
                setInputBooks(newInputBooks);
                setRecomendResults({});
            }
            event.stopPropagation();
        };
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(HomeContext.Provider, {
        value: {
            searchPhase,
            setSearchPhase,
            searchResults,
            setSearchResults,
            inputBooks,
            setInputBooks,
            addInputBookFactory,
            removeInputBookFactory,
            recommendResults,
            searchRecommendBooks,
            recommendResultsRef,
            keepGenres,
            setKeepGenres,
            excludeAuthors,
            setExcludeAuthors,
            minimalRange,
            setMinimalRange,
            onChangeMinimalRange
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: cssClasses(HomeView_CSS_CLASS),
            onClick: ()=>setSearchPhase(''),
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PageHeader, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchForm, {
                    inputBooks: inputBooks
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchResults, {}),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(PageFooter, {})
            ]
        })
    });
}

;// CONCATENATED MODULE: ./app/page/notFound/NotFoundController.js

class NotFoundController extends AbstractController {
    static get $dependencies() {
        return [];
    }
    constructor(){
        super();
        this.status = 404;
    }
    load() {
        return {
            status: this.status
        };
    }
    setMetaParams(loadedResources, metaManager) {
        metaManager.setTitle(`Error ${this.status} - IMA.js`);
        metaManager.setMetaName('description', 'Not Found');
        metaManager.setMetaName('robots', 'noindex, nofollow');
    }
}

// EXTERNAL MODULE: ./app/page/notFound/notFoundView.less
var notFoundView = __webpack_require__("./app/page/notFound/notFoundView.less");
;// CONCATENATED MODULE: ./app/page/notFound/NotFoundView.jsx


function NotFoundView() {
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        className: "page-not-found",
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("h1", {
            children: "404 – Not Found"
        })
    });
}

;// CONCATENATED MODULE: ./app/config/routes.js







/**
 * @type import('@ima/core').InitRoutesFunction
 */ const initRoutes = (ns, oc, routesConfig, router)=>router.add('home', '/', HomeController, HomeView).add(RouteNames.ERROR, '/error', ErrorController, ErrorView).add(RouteNames.NOT_FOUND, '/not-found', NotFoundController, NotFoundView);

;// CONCATENATED MODULE: ./app/config/services.js

/**
 * @type import('@ima/core').InitServicesFunction
 */ const initServicesApp = (ns, oc, config)=>{
    let $window = oc.get(Window);
    let $router = oc.get(Router);
    config.$IMA.fatalErrorHandler = (error)=>{
        console.error('FATAL ERROR HANDLER:', error);
    };
    $window.bindEventListener($window.getWindow(), 'error', (event)=>{
        let error = event.error;
        $router.handleError({
            error
        }).catch((fatalError)=>{
            config.$IMA.fatalErrorHandler(fatalError);
        });
    });
};

;// CONCATENATED MODULE: ./app/document/DocumentView.jsx

function DocumentView({ page, $Utils }) {
    /**
   * #{...} Represents variables that are injected before sending the response
   * to client from server. These are defined in event.response.content.contentVariables.
   *
   * You can use Event.CreateContentVariables server hook to customize/extend set of these variables.
   */ return /*#__PURE__*/ (0,jsx_runtime.jsxs)("html", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("head", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    '#{meta}',
                    '#{styles}',
                    '#{revivalSettings}',
                    '#{runner}'
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        id: $Utils.$Settings.$Page.$Render.masterElementId,
                        dangerouslySetInnerHTML: {
                            __html: page
                        }
                    }),
                    '#{revivalCache}'
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/config/settings.js

/**
 * @type import('@ima/core').InitSettingsFunction
 */ const initSettings = (ns, oc, config)=>{
    return {
        prod: {
            $Version: config.$Version,
            $Http: {
                defaultRequestOptions: {
                    timeout: 7000,
                    repeatRequest: 1,
                    ttl: 60000,
                    fetchOptions: {
                        mode: 'cors',
                        headers: {
                            // Set default request headers
                            Accept: 'application/json',
                            'Accept-Language': config.$Language
                        }
                    },
                    cache: true
                },
                cacheOptions: {
                    prefix: 'http.'
                }
            },
            $Router: {
                /**
         * Middleware execution timeout, see https://imajs.io/basic-features/routing/middlewares#execution-timeout
         * for more information.
         */ middlewareTimeout: 30000
            },
            $Cache: {
                enabled: true,
                ttl: 60000
            },
            $Page: {
                $Render: {
                    documentView: DocumentView,
                    masterElementId: 'page'
                }
            },
            links: {
                documentation: 'https://imajs.io/introduction/getting-started',
                tutorial: 'https://imajs.io/tutorial/introduction',
                plugins: 'https://github.com/seznam/IMA.js-plugins',
                api: 'https://imajs.io/api'
            }
        },
        dev: {
            $Http: {
                defaultRequestOptions: {
                    timeout: 2000
                }
            }
        }
    };
};

;// CONCATENATED MODULE: ./app/main.js






let getInitialAppConfigFunctions = ()=>{
    return {
        initBindApp: initBindApp,
        initRoutes: initRoutes,
        initServicesApp: initServicesApp,
        initSettings: initSettings
    };
};
if (!$IMA.Test) {
    onLoad().then(()=>{
        reviveClientApp(getInitialAppConfigFunctions());
    }).catch((error)=>{
        if ($Debug && typeof window !== 'undefined') {
            window.__IMA_HMR?.emitter?.emit('error', {
                error
            });
            console.error(error);
        }
    });
}
if (false) {}


})();

module.exports = __webpack_exports__;
/******/ })()
;