const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ConnectWalletButton-GnPObxF3.js","assets/common-DRPlBVDz.js","assets/ConnectWalletList-B_be24F3.js"])))=>i.map(i=>d[i]);
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: () => e[k]
          });
        }
      }
    } }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }));
}

true              &&(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

const scriptRel = 'modulepreload';const assetsURL = function(dep) { return "/"+dep };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (true               && deps && deps.length > 0) {
    let allSettled2 = function(promises) {
      return Promise.all(
        promises.map(
          (p) => Promise.resolve(p).then(
            (value) => ({ status: "fulfilled", value }),
            (reason) => ({ status: "rejected", reason })
          )
        )
      );
    };
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = allSettled2(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			if (this instanceof a) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var jsxRuntime$2 = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	"use strict";
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var jsxRuntime$1 = jsxRuntime$2.exports;

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime$2.exports;
	hasRequiredJsxRuntime = 1;
	"use strict";
	if (true) {
	  jsxRuntime$2.exports = requireReactJsxRuntime_production();
	} else {
	  module.exports = require("./cjs/react-jsx-runtime.development.js");
	}
	return jsxRuntime$2.exports;
}

var jsxRuntimeExports = requireJsxRuntime();
const jsxRuntime = /*@__PURE__*/getDefaultExportFromCjs(jsxRuntimeExports);

/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const __pw_hooks_before_mount = [];
const __pw_hooks_after_mount = [];

window.__pw_hooks_before_mount = __pw_hooks_before_mount;
window.__pw_hooks_after_mount = __pw_hooks_after_mount;

const beforeMount = callback => {
  __pw_hooks_before_mount.push(callback);
};

const afterMount = callback => {
  __pw_hooks_after_mount.push(callback);
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

// eslint-disable-next-line no-undef
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

var react$1 = {exports: {}};

var react_production = {};

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production;

function requireReact_production () {
	if (hasRequiredReact_production) return react_production;
	hasRequiredReact_production = 1;
	"use strict";
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
	    isMounted: function () {
	      return !1;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  assign = Object.assign,
	  emptyObject = {};
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function (partialState, callback) {
	  if (
	    "object" !== typeof partialState &&
	    "function" !== typeof partialState &&
	    null != partialState
	  )
	    throw Error(
	      "takes an object of state variables to update or a function which returns an object of state variables."
	    );
	  this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = !0;
	var isArrayImpl = Array.isArray;
	function noop() {}
	var ReactSharedInternals = { H: null, A: null, T: null, S: null },
	  hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, props) {
	  var refProp = props.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== refProp ? refProp : null,
	    props: props
	  };
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  return ReactElement(oldElement.type, newKey, oldElement.props);
	}
	function isValidElement(object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	}
	function escape(key) {
	  var escaperLookup = { "=": "=0", ":": "=2" };
	  return (
	    "$" +
	    key.replace(/[=:]/g, function (match) {
	      return escaperLookup[match];
	    })
	  );
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
	  return "object" === typeof element && null !== element && null != element.key
	    ? escape("" + element.key)
	    : index.toString(36);
	}
	function resolveThenable(thenable) {
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw thenable.reason;
	    default:
	      switch (
	        ("string" === typeof thenable.status
	          ? thenable.then(noop, noop)
	          : ((thenable.status = "pending"),
	            thenable.then(
	              function (fulfilledValue) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "fulfilled"),
	                  (thenable.value = fulfilledValue));
	              },
	              function (error) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "rejected"), (thenable.reason = error));
	              }
	            )),
	        thenable.status)
	      ) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw thenable.reason;
	      }
	  }
	  throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	  var type = typeof children;
	  if ("undefined" === type || "boolean" === type) children = null;
	  var invokeCallback = !1;
	  if (null === children) invokeCallback = !0;
	  else
	    switch (type) {
	      case "bigint":
	      case "string":
	      case "number":
	        invokeCallback = !0;
	        break;
	      case "object":
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = !0;
	            break;
	          case REACT_LAZY_TYPE:
	            return (
	              (invokeCallback = children._init),
	              mapIntoArray(
	                invokeCallback(children._payload),
	                array,
	                escapedPrefix,
	                nameSoFar,
	                callback
	              )
	            );
	        }
	    }
	  if (invokeCallback)
	    return (
	      (callback = callback(children)),
	      (invokeCallback =
	        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
	      isArrayImpl(callback)
	        ? ((escapedPrefix = ""),
	          null != invokeCallback &&
	            (escapedPrefix =
	              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
	          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
	            return c;
	          }))
	        : null != callback &&
	          (isValidElement(callback) &&
	            (callback = cloneAndReplaceKey(
	              callback,
	              escapedPrefix +
	                (null == callback.key ||
	                (children && children.key === callback.key)
	                  ? ""
	                  : ("" + callback.key).replace(
	                      userProvidedKeyEscapeRegex,
	                      "$&/"
	                    ) + "/") +
	                invokeCallback
	            )),
	          array.push(callback)),
	      1
	    );
	  invokeCallback = 0;
	  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
	  if (isArrayImpl(children))
	    for (var i = 0; i < children.length; i++)
	      (nameSoFar = children[i]),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if (((i = getIteratorFn(children)), "function" === typeof i))
	    for (
	      children = i.call(children), i = 0;
	      !(nameSoFar = children.next()).done;

	    )
	      (nameSoFar = nameSoFar.value),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if ("object" === type) {
	    if ("function" === typeof children.then)
	      return mapIntoArray(
	        resolveThenable(children),
	        array,
	        escapedPrefix,
	        nameSoFar,
	        callback
	      );
	    array = String(children);
	    throw Error(
	      "Objects are not valid as a React child (found: " +
	        ("[object Object]" === array
	          ? "object with keys {" + Object.keys(children).join(", ") + "}"
	          : array) +
	        "). If you meant to render a collection of children, use an array instead."
	    );
	  }
	  return invokeCallback;
	}
	function mapChildren(children, func, context) {
	  if (null == children) return children;
	  var result = [],
	    count = 0;
	  mapIntoArray(children, result, "", "", function (child) {
	    return func.call(context, child, count++);
	  });
	  return result;
	}
	function lazyInitializer(payload) {
	  if (-1 === payload._status) {
	    var ctor = payload._result;
	    ctor = ctor();
	    ctor.then(
	      function (moduleObject) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 1), (payload._result = moduleObject);
	      },
	      function (error) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 2), (payload._result = error);
	      }
	    );
	    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
	  }
	  if (1 === payload._status) return payload._result.default;
	  throw payload._result;
	}
	var reportGlobalError =
	    "function" === typeof reportError
	      ? reportError
	      : function (error) {
	          if (
	            "object" === typeof window &&
	            "function" === typeof window.ErrorEvent
	          ) {
	            var event = new window.ErrorEvent("error", {
	              bubbles: !0,
	              cancelable: !0,
	              message:
	                "object" === typeof error &&
	                null !== error &&
	                "string" === typeof error.message
	                  ? String(error.message)
	                  : String(error),
	              error: error
	            });
	            if (!window.dispatchEvent(event)) return;
	          } else if (
	            "object" === typeof process &&
	            "function" === typeof process.emit
	          ) {
	            process.emit("uncaughtException", error);
	            return;
	          }
	          console.error(error);
	        },
	  Children = {
	    map: mapChildren,
	    forEach: function (children, forEachFunc, forEachContext) {
	      mapChildren(
	        children,
	        function () {
	          forEachFunc.apply(this, arguments);
	        },
	        forEachContext
	      );
	    },
	    count: function (children) {
	      var n = 0;
	      mapChildren(children, function () {
	        n++;
	      });
	      return n;
	    },
	    toArray: function (children) {
	      return (
	        mapChildren(children, function (child) {
	          return child;
	        }) || []
	      );
	    },
	    only: function (children) {
	      if (!isValidElement(children))
	        throw Error(
	          "React.Children.only expected to receive a single React element child."
	        );
	      return children;
	    }
	  };
	react_production.Activity = REACT_ACTIVITY_TYPE;
	react_production.Children = Children;
	react_production.Component = Component;
	react_production.Fragment = REACT_FRAGMENT_TYPE;
	react_production.Profiler = REACT_PROFILER_TYPE;
	react_production.PureComponent = PureComponent;
	react_production.StrictMode = REACT_STRICT_MODE_TYPE;
	react_production.Suspense = REACT_SUSPENSE_TYPE;
	react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  ReactSharedInternals;
	react_production.__COMPILER_RUNTIME = {
	  __proto__: null,
	  c: function (size) {
	    return ReactSharedInternals.H.useMemoCache(size);
	  }
	};
	react_production.cache = function (fn) {
	  return function () {
	    return fn.apply(null, arguments);
	  };
	};
	react_production.cacheSignal = function () {
	  return null;
	};
	react_production.cloneElement = function (element, config, children) {
	  if (null === element || void 0 === element)
	    throw Error(
	      "The argument must be a React element, but you passed " + element + "."
	    );
	  var props = assign({}, element.props),
	    key = element.key;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      !hasOwnProperty.call(config, propName) ||
	        "key" === propName ||
	        "__self" === propName ||
	        "__source" === propName ||
	        ("ref" === propName && void 0 === config.ref) ||
	        (props[propName] = config[propName]);
	  var propName = arguments.length - 2;
	  if (1 === propName) props.children = children;
	  else if (1 < propName) {
	    for (var childArray = Array(propName), i = 0; i < propName; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  return ReactElement(element.type, key, props);
	};
	react_production.createContext = function (defaultValue) {
	  defaultValue = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  defaultValue.Provider = defaultValue;
	  defaultValue.Consumer = {
	    $$typeof: REACT_CONSUMER_TYPE,
	    _context: defaultValue
	  };
	  return defaultValue;
	};
	react_production.createElement = function (type, config, children) {
	  var propName,
	    props = {},
	    key = null;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      hasOwnProperty.call(config, propName) &&
	        "key" !== propName &&
	        "__self" !== propName &&
	        "__source" !== propName &&
	        (props[propName] = config[propName]);
	  var childrenLength = arguments.length - 2;
	  if (1 === childrenLength) props.children = children;
	  else if (1 < childrenLength) {
	    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  if (type && type.defaultProps)
	    for (propName in ((childrenLength = type.defaultProps), childrenLength))
	      void 0 === props[propName] &&
	        (props[propName] = childrenLength[propName]);
	  return ReactElement(type, key, props);
	};
	react_production.createRef = function () {
	  return { current: null };
	};
	react_production.forwardRef = function (render) {
	  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
	};
	react_production.isValidElement = isValidElement;
	react_production.lazy = function (ctor) {
	  return {
	    $$typeof: REACT_LAZY_TYPE,
	    _payload: { _status: -1, _result: ctor },
	    _init: lazyInitializer
	  };
	};
	react_production.memo = function (type, compare) {
	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: void 0 === compare ? null : compare
	  };
	};
	react_production.startTransition = function (scope) {
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  try {
	    var returnValue = scope(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    "object" === typeof returnValue &&
	      null !== returnValue &&
	      "function" === typeof returnValue.then &&
	      returnValue.then(noop, reportGlobalError);
	  } catch (error) {
	    reportGlobalError(error);
	  } finally {
	    null !== prevTransition &&
	      null !== currentTransition.types &&
	      (prevTransition.types = currentTransition.types),
	      (ReactSharedInternals.T = prevTransition);
	  }
	};
	react_production.unstable_useCacheRefresh = function () {
	  return ReactSharedInternals.H.useCacheRefresh();
	};
	react_production.use = function (usable) {
	  return ReactSharedInternals.H.use(usable);
	};
	react_production.useActionState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	react_production.useCallback = function (callback, deps) {
	  return ReactSharedInternals.H.useCallback(callback, deps);
	};
	react_production.useContext = function (Context) {
	  return ReactSharedInternals.H.useContext(Context);
	};
	react_production.useDebugValue = function () {};
	react_production.useDeferredValue = function (value, initialValue) {
	  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	react_production.useEffect = function (create, deps) {
	  return ReactSharedInternals.H.useEffect(create, deps);
	};
	react_production.useEffectEvent = function (callback) {
	  return ReactSharedInternals.H.useEffectEvent(callback);
	};
	react_production.useId = function () {
	  return ReactSharedInternals.H.useId();
	};
	react_production.useImperativeHandle = function (ref, create, deps) {
	  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	react_production.useInsertionEffect = function (create, deps) {
	  return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	react_production.useLayoutEffect = function (create, deps) {
	  return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	react_production.useMemo = function (create, deps) {
	  return ReactSharedInternals.H.useMemo(create, deps);
	};
	react_production.useOptimistic = function (passthrough, reducer) {
	  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	react_production.useReducer = function (reducer, initialArg, init) {
	  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	react_production.useRef = function (initialValue) {
	  return ReactSharedInternals.H.useRef(initialValue);
	};
	react_production.useState = function (initialState) {
	  return ReactSharedInternals.H.useState(initialState);
	};
	react_production.useSyncExternalStore = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot
	) {
	  return ReactSharedInternals.H.useSyncExternalStore(
	    subscribe,
	    getSnapshot,
	    getServerSnapshot
	  );
	};
	react_production.useTransition = function () {
	  return ReactSharedInternals.H.useTransition();
	};
	react_production.version = "19.2.5";
	return react_production;
}

var react = react$1.exports;

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react$1.exports;
	hasRequiredReact = 1;
	"use strict";
	if (true) {
	  react$1.exports = requireReact_production();
	} else {
	  module.exports = require("./cjs/react.development.js");
	}
	return react$1.exports;
}

var reactExports = requireReact();
const React2 = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

const React = /*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  default: React2
}, [reactExports]);

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';

var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';

var PAGE = '@page';
var MEDIA = '@media';
var IMPORT = '@import';
var CHARSET = '@charset';
var VIEWPORT = '@viewport';
var SUPPORTS = '@supports';
var DOCUMENT = '@document';
var NAMESPACE = '@namespace';
var KEYFRAMES = '@keyframes';
var FONT_FACE = '@font-face';
var COUNTER_STYLE = '@counter-style';
var FONT_FEATURE_VALUES = '@font-feature-values';
var LAYER = '@layer';
var SCOPE = '@scope';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode;

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign;

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @param {number} position
 * @return {number}
 */
function indexof (value, search, position) {
	return value.indexOf(search, position)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}

/**
 * @param {string[]} array
 * @param {RegExp} pattern
 * @return {string[]}
 */
function filter (array, pattern) {
	return array.filter(function (value) { return !match(value, pattern) })
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {object[]} siblings
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length, siblings) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: '', siblings: siblings}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return assign(node('', null, null, '', null, null, 0, root.siblings), root, {length: -root.length}, props)
}

/**
 * @param {object} root
 */
function lift (root) {
	while (root.root)
		root = copy(root.root, {children: [root]});

	append(root, root.siblings);
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? charat(characters, --position) : 0;

	if (column--, character === 10)
		column = 1, line--;

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? charat(characters, position++) : 0;

	if (column++, character === 10)
		column = 1, line++;

	return character
}

/**
 * @return {number}
 */
function peek () {
	return charat(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice$1 (begin, end) {
	return substr(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc$1 (value) {
	return line = column = 1, length = strlen(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return trim(slice$1(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc$1(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next();
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: append(identifier(position - 1), children);
				break
			case 2: append(delimit(character), children);
				break
			default: append(from(character), children);
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice$1(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character);
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type);
				break
			// \
			case 92:
				next();
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice$1(index, position - 1) + '*' + from(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next();

	return slice$1(index, position)
}

/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return dealloc(parse('', null, null, null, [''], value = alloc$1(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0;
	var offset = 0;
	var length = pseudo;
	var atrule = 0;
	var property = 0;
	var previous = 0;
	var variable = 1;
	var scanning = 1;
	var ampersand = 1;
	var character = 0;
	var type = '';
	var props = rules;
	var children = rulesets;
	var reference = rule;
	var characters = type;

	while (scanning)
		switch (previous = character, character = next()) {
			// (
			case 40:
				if (previous != 108 && charat(characters, length - 1) == 58) {
					if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f', abs(index ? points[index - 1] : 0)) != -1)
						ampersand = -1;
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += delimit(character);
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += whitespace(previous);
				break
			// \
			case 92:
				characters += escaping(caret() - 1, 7);
				continue
			// /
			case 47:
				switch (peek()) {
					case 42: case 47:
						append(comment(commenter(next(), caret()), root, parent, declarations), declarations);
						if ((token(previous || 1) == 5 || token(peek() || 1) == 5) && strlen(characters) && substr(characters, -1, void 0) !== ' ') characters += ' ';
						break
					default:
						characters += '/';
				}
				break
			// {
			case 123 * variable:
				points[index++] = strlen(characters) * ampersand;
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0;
					// ;
					case 59 + offset: if (ampersand == -1) characters = replace(characters, /\f/g, '');
						if (property > 0 && (strlen(characters) - length || (variable === 0 && previous === 47)))
							append(property > 32 ? declaration(characters + ';', rule, parent, length - 1, declarations) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2, declarations), declarations);
						break
					// @ ;
					case 59: characters += ';';
					// { rule/at-rule
					default:
						append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length, rulesets), rulesets);

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children);
							else {
								switch (atrule) {
									// c(ontainer)
									case 99:
										if (charat(characters, 3) === 110) break
									// l(ayer)
									case 108:
										if (charat(characters, 2) === 97) break
									default:
										offset = 0;
									// d(ocument) m(edia) s(upports)
									case 100: case 109: case 115:
								}
								if (offset) parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length, children), children), rules, children, length, points, rule ? props : children);
								else parse(characters, reference, reference, reference, [''], children, 0, points, children);
							}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
				break
			// :
			case 58:
				length = 1 + strlen(characters), property = previous;
			default:
				if (variable < 1)
					if (character == 123)
						--variable;
					else if (character == 125 && variable++ == 0 && prev() == 125)
						continue

				switch (characters += from(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1);
						break
					// ,
					case 44:
						points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
						break
					// @
					case 64:
						// -
						if (peek() === 45)
							characters += delimit(next());

						atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
						break
					// -
					case 45:
						if (previous === 45 && strlen(characters) == 2)
							variable = 0;
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length, siblings) {
	var post = offset - 1;
	var rule = offset === 0 ? rules : [''];
	var size = sizeof(rule);

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
			if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x])))
				props[k++] = z;

	return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length, siblings)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @param {object[]} siblings
 * @return {object}
 */
function comment (value, root, parent, siblings) {
	return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0, siblings)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @param {object[]} siblings
 * @return {object}
 */
function declaration (value, root, parent, length, siblings) {
	return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length, siblings)
}

/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch (hash(value, length)) {
		// color-adjust
		case 5103:
			return WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position
		case 6391: case 5879: case 5623: case 6135: case 4599:
			return WEBKIT + value + value
		// mask-composite
		case 4855:
			return WEBKIT + value.replace('add', 'source-over').replace('substract', 'source-out').replace('intersect', 'source-in').replace('exclude', 'xor') + value
		// tab-size
		case 4789:
			return MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return WEBKIT + value + MOZ + value + MS + value + value
		// writing-mode
		case 5936:
			switch (charat(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return WEBKIT + value + MS + value + value
		// order
		case 6165:
			return WEBKIT + value + MS + 'flex-' + value + value
		// align-items
		case 5187:
			return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/g, '') + (!match(value, /flex-|baseline/) ? MS + 'grid-row-' + replace(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value
		// cursor
		case 6187:
			return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /space-between/, 'justify') + WEBKIT + value + value
		// justify-self
		case 4200:
			if (!match(value, /flex-|baseline/)) return MS + 'grid-column-align' + substr(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return MS + replace(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, match(element.props, /grid-\w+-end/) })) {
				return ~indexof(value + (children = children[length].value), 'span', 0) ? value : (MS + replace(value, '-start', '') + value + MS + 'grid-row-span:' + (~indexof(children, 'span', 0) ? match(children, /\d+/) : +match(children, /\d+/) - +match(value, /\d+/)) + ';')
			}
			return MS + replace(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return match(element.props, /grid-\w+-start/) })) ? value : MS + replace(replace(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if (strlen(value) - 1 - length > 6)
				switch (charat(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if (charat(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~indexof(value, 'stretch', 0) ? prefix(replace(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return replace(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (MS + a + ':' + b + f) + (c ? (MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if (charat(value, length + 6) === 121)
				return replace(value, ':', ':' + WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch (charat(value, charat(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return replace(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return replace(value, ':', ':' + MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return replace(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = '';

	for (var i = 0; i < children.length; i++)
		output += callback(children[i], i, children, callback) || '';

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case LAYER: if (element.children.length) break
		case IMPORT: case NAMESPACE: case DECLARATION: return element.return = element.return || element.value
		case COMMENT: return ''
		case KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case RULESET: if (!strlen(element.value = element.props.join(','))) return ''
	}

	return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}

/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = sizeof(collection);

	return function (element, index, children, callback) {
		var output = '';

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || '';

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element);
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case DECLARATION: element.return = prefix(element.value, element.length, children);
					return
				case KEYFRAMES:
					return serialize([copy(element, {value: replace(element.value, '@', '@' + WEBKIT)})], callback)
				case RULESET:
					if (element.length)
						return combine(children = element.props, function (value) {
							switch (match(value, callback = /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									lift(copy(element, {props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]}));
									lift(copy(element, {props: [value]}));
									assign(element, {props: filter(children, callback)});
									break
								// :placeholder
								case '::placeholder':
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]}));
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]}));
									lift(copy(element, {props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]}));
									lift(copy(element, {props: [value]}));
									assign(element, {props: filter(children, callback)});
									break
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case RULESET:
			element.props = element.props.map(function (value) {
				return combine(tokenize(value), function (value, index, children) {
					switch (charat(value, 0)) {
						// \f
						case 12:
							return substr(value, 1, strlen(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + substr(children[index], index = 1, -1);
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value;
									return sizeof(children) > 1 ? '' : value
								case index = sizeof(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			});
	}
}

var define_process_env_default = {};
var r, i;
const c = "undefined" != typeof process && void 0 !== define_process_env_default && (define_process_env_default.REACT_APP_SC_ATTR || define_process_env_default.SC_ATTR) || "data-styled", a = "active", l = "data-styled-version", u = "6.4.1", h = "/*!sc*/\n", d = "undefined" != typeof window && "undefined" != typeof document;
function p(e2) {
  if ("undefined" != typeof process && void 0 !== define_process_env_default) {
    const t2 = define_process_env_default[e2];
    if (void 0 !== t2 && "" !== t2) return "false" !== t2;
  }
}
const f = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : null !== (i = null !== (r = p("REACT_APP_SC_DISABLE_SPEEDY")) && void 0 !== r ? r : p("SC_DISABLE_SPEEDY")) && void 0 !== i ? i : "undefined" == typeof process || void 0 === define_process_env_default || false), m = "sc-keyframes-", y = {}, g = false ? { 1: "Cannot create styled-component for component: %s.\n\n", 2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n", 3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n", 4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n", 5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n", 6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n", 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: 'ThemeProvider: Please make your "theme" prop an object.\n\n', 9: "Missing document `<head>`\n\n", 10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n", 11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n", 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://styled-components.com/docs/api#css\n\n", 13: "%s is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n", 14: 'ThemeProvider: "theme" prop is required.\n\n', 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n", 17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n\n", 18: "Accessing `useTheme` hook outside of a `<ThemeProvider>` element.\n\n```jsx\nimport { useTheme } from 'styled-components';\nexport function StyledCompoent({ children }) {\n  const theme = useTheme();\n  return <div style={{ width: theme.sizes.full }}>{children}</div>;\n}\n\nimport { StyledComponent } from './StyledComponent';\nimport { theme } from './theme';\nexport function App() {\n  return (\n    <ThemeProvider theme={theme}>\n      <StyledComponent />\n    </ThemeProvider>\n  );\n}\n```\n\nIf you need access to the theme in an uncertain composition scenario, `React.useContext(ThemeContext)` will not emit an error if there is no `ThemeProvider` ancestor.\n" } : {};
function v(e2, ...t2) {
  return true ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e2} for more information.${t2.length > 0 ? ` Args: ${t2.join(", ")}` : ""}`) : new Error((function(...e3) {
    let t3 = e3[0];
    const n2 = [];
    for (let t4 = 1, o2 = e3.length; t4 < o2; t4 += 1) n2.push(e3[t4]);
    return n2.forEach((e4) => {
      t3 = t3.replace(/%[a-z]/, e4);
    }), t3;
  })(g[e2], ...t2).trim());
}
const S = 1 << 30;
let b = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map(), N = 1;
const C = (e2) => {
  if (b.has(e2)) return b.get(e2);
  for (; w.has(N); ) N++;
  const t2 = N++;
  if (false) throw v(16, `${t2}`);
  return b.set(e2, t2), w.set(t2, e2), t2;
}, O = (e2) => w.get(e2), E = (e2, t2) => {
  N = t2 + 1, b.set(e2, t2), w.set(t2, e2);
}, A = /invalid hook call/i, P = /* @__PURE__ */ new Set(), _ = (e2, n2) => {
  if (false) {
    const o2 = `The component ${e2}${n2 ? ` with the id of "${n2}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, s2 = console.error;
    try {
      let e3 = true;
      console.error = (t2, ...n3) => {
        A.test(t2) ? (e3 = false, P.delete(o2)) : s2(t2, ...n3);
      }, "function" == typeof React2.useState && React2.useState(null), e3 && !P.has(o2) && (console.warn(o2), P.add(o2));
    } catch (e3) {
      A.test(e3.message) && P.delete(o2);
    } finally {
      console.error = s2;
    }
  }
}, I = Object.freeze([]), $ = Object.freeze({});
function R(e2, t2, n2 = $) {
  return e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
}
const j = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, x = /(^-|-$)/g;
function T(e2) {
  return e2.replace(j, "-").replace(x, "");
}
const k = /(a)(d)/gi, D = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
function V(e2) {
  let t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0) n2 = D(t2 % 52) + n2;
  return (D(t2 % 52) + n2).replace(k, "$1-$2");
}
const M = 5381, G = (e2, t2) => {
  let n2 = t2.length;
  for (; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
}, F = (e2) => G(M, e2);
function z(e2) {
  return V(F(e2) >>> 0);
}
function W(e2) {
  return e2.displayName || e2.name || "Component";
}
function L(e2) {
  return "string" == typeof e2 && true;
}
function B(e2) {
  return L(e2) ? `styled.${e2}` : `Styled(${W(e2)})`;
}
const q = Symbol.for("react.memo"), H = Symbol.for("react.forward_ref"), Y = { contextType: true, defaultProps: true, displayName: true, getDerivedStateFromError: true, getDerivedStateFromProps: true, propTypes: true, type: true }, U = { name: true, length: true, prototype: true, caller: true, callee: true, arguments: true, arity: true }, J = { $$typeof: true, compare: true, defaultProps: true, displayName: true, propTypes: true, type: true }, X = { [H]: { $$typeof: true, render: true, defaultProps: true, displayName: true, propTypes: true }, [q]: J };
function K(e2) {
  return ("type" in (t2 = e2) && t2.type.$$typeof) === q ? J : "$$typeof" in e2 ? X[e2.$$typeof] : Y;
  var t2;
}
const Q = Object.defineProperty, Z = Object.getOwnPropertyNames, ee = Object.getOwnPropertySymbols, te = Object.getOwnPropertyDescriptor, ne = Object.getPrototypeOf, oe = Object.prototype;
function se(e2, t2, n2) {
  if ("string" != typeof t2) {
    const o2 = ne(t2);
    o2 && o2 !== oe && se(e2, o2, n2);
    const s2 = Z(t2).concat(ee(t2)), r2 = K(e2), i2 = K(t2);
    for (let o3 = 0; o3 < s2.length; ++o3) {
      const c2 = s2[o3];
      if (!(c2 in U || n2 && n2[c2] || i2 && c2 in i2 || r2 && c2 in r2)) {
        const n3 = te(t2, c2);
        try {
          Q(e2, c2, n3);
        } catch (e3) {
        }
      }
    }
  }
  return e2;
}
function re(e2) {
  return "function" == typeof e2;
}
function ie(e2) {
  return "object" == typeof e2 && "styledComponentId" in e2;
}
function ce(e2, t2) {
  return e2 && t2 ? e2 + " " + t2 : e2 || t2 || "";
}
function ae(e2, t2) {
  return e2.join(t2 || "");
}
function le(e2) {
  return null !== e2 && "object" == typeof e2 && e2.constructor.name === Object.name && !("props" in e2 && e2.$$typeof);
}
function ue(e2, t2, n2 = false) {
  if (!n2 && !le(e2) && !Array.isArray(e2)) return t2;
  if (Array.isArray(t2)) for (let n3 = 0; n3 < t2.length; n3++) e2[n3] = ue(e2[n3], t2[n3]);
  else if (le(t2)) for (const n3 in t2) e2[n3] = ue(e2[n3], t2[n3]);
  return e2;
}
function he(e2, t2) {
  Object.defineProperty(e2, "toString", { value: t2 });
}
const de = class {
  constructor(e2) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e2, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(e2) {
    if (e2 === this._cGroup) return this._cIndex;
    let t2 = this._cIndex;
    if (e2 > this._cGroup) for (let n2 = this._cGroup; n2 < e2; n2++) t2 += this.groupSizes[n2];
    else for (let n2 = this._cGroup - 1; n2 >= e2; n2--) t2 -= this.groupSizes[n2];
    return this._cGroup = e2, this._cIndex = t2, t2;
  }
  insertRules(e2, t2) {
    if (e2 >= this.groupSizes.length) {
      const t3 = this.groupSizes, n3 = t3.length;
      let o3 = n3;
      for (; e2 >= o3; ) if (o3 <<= 1, o3 < 0) throw v(16, `${e2}`);
      this.groupSizes = new Uint32Array(o3), this.groupSizes.set(t3), this.length = o3;
      for (let e3 = n3; e3 < o3; e3++) this.groupSizes[e3] = 0;
    }
    let n2 = this.indexOfGroup(e2 + 1), o2 = 0;
    for (let s2 = 0, r2 = t2.length; s2 < r2; s2++) this.tag.insertRule(n2, t2[s2]) && (this.groupSizes[e2]++, n2++, o2++);
    o2 > 0 && this._cGroup > e2 && (this._cIndex += o2);
  }
  clearGroup(e2) {
    if (e2 < this.length) {
      const t2 = this.groupSizes[e2], n2 = this.indexOfGroup(e2), o2 = n2 + t2;
      this.groupSizes[e2] = 0;
      for (let e3 = n2; e3 < o2; e3++) this.tag.deleteRule(n2);
      t2 > 0 && this._cGroup > e2 && (this._cIndex -= t2);
    }
  }
  getGroup(e2) {
    let t2 = "";
    if (e2 >= this.length || 0 === this.groupSizes[e2]) return t2;
    const n2 = this.groupSizes[e2], o2 = this.indexOfGroup(e2), s2 = o2 + n2;
    for (let e3 = o2; e3 < s2; e3++) t2 += this.tag.getRule(e3) + h;
    return t2;
  }
}, pe = `style[${c}][${l}="${u}"]`, fe = new RegExp(`^${c}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), me = (e2) => "undefined" != typeof ShadowRoot && e2 instanceof ShadowRoot || "host" in e2 && 11 === e2.nodeType, ye = (e2) => {
  if (!e2) return document;
  if (me(e2)) return e2;
  if ("getRootNode" in e2) {
    const t2 = e2.getRootNode();
    if (me(t2)) return t2;
  }
  return document;
}, ge = (e2, t2, n2) => {
  const o2 = n2.split(",");
  let s2;
  for (let n3 = 0, r2 = o2.length; n3 < r2; n3++) (s2 = o2[n3]) && e2.registerName(t2, s2);
}, ve = (e2, t2) => {
  var n2;
  const o2 = (null !== (n2 = t2.textContent) && void 0 !== n2 ? n2 : "").split(h), s2 = [];
  for (let t3 = 0, n3 = o2.length; t3 < n3; t3++) {
    const n4 = o2[t3].trim();
    if (!n4) continue;
    const r2 = n4.match(fe);
    if (r2) {
      const t4 = 0 | parseInt(r2[1], 10), n5 = r2[2];
      0 !== t4 && (E(n5, t4), ge(e2, n5, r2[3]), e2.getTag().insertRules(t4, s2)), s2.length = 0;
    } else s2.push(n4);
  }
}, Se = (e2) => {
  const t2 = ye(e2.options.target).querySelectorAll(pe);
  for (let n2 = 0, o2 = t2.length; n2 < o2; n2++) {
    const o3 = t2[n2];
    o3 && o3.getAttribute(c) !== a && (ve(e2, o3), o3.parentNode && o3.parentNode.removeChild(o3));
  }
};
let be = false;
function we() {
  if (false !== be) return be;
  if ("undefined" != typeof document) {
    const e2 = document.head.querySelector('meta[property="csp-nonce"]');
    if (e2) return be = e2.nonce || e2.getAttribute("content") || void 0;
    const t2 = document.head.querySelector('meta[name="sc-nonce"]');
    if (t2) return be = t2.getAttribute("content") || void 0;
  }
  return be = "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
}
const Ne = (e2, t2) => {
  const n2 = document.head, o2 = e2 || n2, s2 = document.createElement("style"), r2 = ((e3) => {
    const t3 = Array.from(e3.querySelectorAll(`style[${c}]`));
    return t3[t3.length - 1];
  })(o2), i2 = void 0 !== r2 ? r2.nextSibling : null;
  s2.setAttribute(c, a), s2.setAttribute(l, u);
  const h2 = t2 || we();
  return h2 && s2.setAttribute("nonce", h2), o2.insertBefore(s2, i2), s2;
}, Ce = class {
  constructor(e2, t2) {
    this.element = Ne(e2, t2), this.element.appendChild(document.createTextNode("")), this.sheet = ((e3) => {
      var t3;
      if (e3.sheet) return e3.sheet;
      const n2 = null !== (t3 = e3.getRootNode().styleSheets) && void 0 !== t3 ? t3 : document.styleSheets;
      for (let t4 = 0, o2 = n2.length; t4 < o2; t4++) {
        const o3 = n2[t4];
        if (o3.ownerNode === e3) return o3;
      }
      throw v(17);
    })(this.element), this.length = 0;
  }
  insertRule(e2, t2) {
    try {
      return this.sheet.insertRule(t2, e2), this.length++, true;
    } catch (e3) {
      return false;
    }
  }
  deleteRule(e2) {
    this.sheet.deleteRule(e2), this.length--;
  }
  getRule(e2) {
    const t2 = this.sheet.cssRules[e2];
    return t2 && t2.cssText ? t2.cssText : "";
  }
}, Oe = class {
  constructor(e2, t2) {
    this.element = Ne(e2, t2), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(e2, t2) {
    if (e2 <= this.length && e2 >= 0) {
      const n2 = document.createTextNode(t2);
      return this.element.insertBefore(n2, this.nodes[e2] || null), this.length++, true;
    }
    return false;
  }
  deleteRule(e2) {
    this.element.removeChild(this.nodes[e2]), this.length--;
  }
  getRule(e2) {
    return e2 < this.length ? this.nodes[e2].textContent : "";
  }
};
let Ee = d;
const Ae = { isServer: !d, useCSSOMInjection: !f };
class Pe {
  static registerId(e2) {
    return C(e2);
  }
  constructor(e2 = $, t2 = {}, n2) {
    this.options = Object.assign(Object.assign({}, Ae), e2), this.gs = t2, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(n2), this.server = !!e2.isServer, !this.server && d && Ee && (Ee = false, Se(this)), he(this, () => ((e3) => {
      const t3 = e3.getTag(), { length: n3 } = t3;
      let o2 = "";
      for (let s2 = 0; s2 < n3; s2++) {
        const n4 = O(s2);
        if (void 0 === n4) continue;
        const r2 = e3.names.get(n4);
        if (void 0 === r2 || !r2.size) continue;
        const i2 = t3.getGroup(s2);
        if (0 === i2.length) continue;
        const a2 = c + ".g" + s2 + '[id="' + n4 + '"]';
        let l2 = "";
        for (const e4 of r2) e4.length > 0 && (l2 += e4 + ",");
        o2 += i2 + a2 + '{content:"' + l2 + '"}' + h;
      }
      return o2;
    })(this));
  }
  rehydrate() {
    !this.server && d && Se(this);
  }
  reconstructWithOptions(e2, t2 = true) {
    const n2 = new Pe(Object.assign(Object.assign({}, this.options), e2), this.gs, t2 && this.names || void 0);
    return n2.keyframeIds = new Set(this.keyframeIds), !this.server && d && e2.target !== this.options.target && ye(this.options.target) !== ye(e2.target) && Se(n2), n2;
  }
  allocateGSInstance(e2) {
    return this.gs[e2] = (this.gs[e2] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (e2 = (({ useCSSOMInjection: e3, target: t2, nonce: n2 }) => e3 ? new Ce(t2, n2) : new Oe(t2, n2))(this.options), new de(e2)));
    var e2;
  }
  hasNameForId(e2, t2) {
    var n2, o2;
    return null !== (o2 = null === (n2 = this.names.get(e2)) || void 0 === n2 ? void 0 : n2.has(t2)) && void 0 !== o2 && o2;
  }
  registerName(e2, t2) {
    C(e2), e2.startsWith(m) && this.keyframeIds.add(e2);
    const n2 = this.names.get(e2);
    n2 ? n2.add(t2) : this.names.set(e2, /* @__PURE__ */ new Set([t2]));
  }
  insertRules(e2, t2, n2) {
    this.registerName(e2, t2), this.getTag().insertRules(C(e2), n2);
  }
  clearNames(e2) {
    this.names.has(e2) && this.names.get(e2).clear();
  }
  clearRules(e2) {
    this.getTag().clearGroup(C(e2)), this.clearNames(e2);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const _e = /* @__PURE__ */ new WeakSet(), Ie = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function $e(e2, t2) {
  return null == t2 || "boolean" == typeof t2 || "" === t2 ? "" : "number" != typeof t2 || 0 === t2 || e2 in Ie || e2.startsWith("--") ? String(t2).trim() : t2 + "px";
}
const Re = 47;
function je(e2) {
  if (45 === e2.charCodeAt(0) && 45 === e2.charCodeAt(1)) return e2;
  let t2 = "";
  for (let n2 = 0; n2 < e2.length; n2++) {
    const o2 = e2.charCodeAt(n2);
    t2 += o2 >= 65 && o2 <= 90 ? "-" + String.fromCharCode(o2 + 32) : e2[n2];
  }
  return t2.startsWith("ms-") ? "-" + t2 : t2;
}
const xe = Symbol.for("sc-keyframes");
function Te(e2) {
  return "object" == typeof e2 && null !== e2 && xe in e2;
}
function ke(e2) {
  return re(e2) && !(e2.prototype && e2.prototype.isReactComponent);
}
const De = (e2) => null == e2 || false === e2 || "" === e2, Ve = Symbol.for("react.client.reference");
function Me(e2) {
  return e2.$$typeof === Ve;
}
function Ge(e2) {
  const t2 = e2.$$id, n2 = (t2 && t2.includes("#") ? t2.split("#").pop() : t2) || e2.name || "unknown";
  console.warn(`Interpolating a client component (${n2}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function Fe(e2, t2) {
  for (const n2 in e2) {
    const o2 = e2[n2];
    e2.hasOwnProperty(n2) && !De(o2) && (Array.isArray(o2) && _e.has(o2) || re(o2) ? t2.push(je(n2) + ":", o2, ";") : le(o2) ? (t2.push(n2 + " {"), Fe(o2, t2), t2.push("}")) : t2.push(je(n2) + ": " + $e(n2, o2) + ";"));
  }
}
function ze(e2, t2, n2, o2, s2 = []) {
  if (De(e2)) return s2;
  const r2 = typeof e2;
  if ("string" === r2) return s2.push(e2), s2;
  if ("function" === r2) {
    if (Me(e2)) return false, s2;
    if (ke(e2) && t2) {
      const r3 = e2(t2);
      return true, ze(r3, t2, n2, o2, s2);
    }
    return s2.push(e2), s2;
  }
  if (Array.isArray(e2)) {
    for (let r3 = 0; r3 < e2.length; r3++) ze(e2[r3], t2, n2, o2, s2);
    return s2;
  }
  return ie(e2) ? (s2.push(`.${e2.styledComponentId}`), s2) : Te(e2) ? (n2 ? (e2.inject(n2, o2), s2.push(e2.getName(o2))) : s2.push(e2), s2) : Me(e2) ? (false, s2) : le(e2) ? (Fe(e2, s2), s2) : (s2.push(e2.toString()), s2);
}
const We = F(u);
class Le {
  constructor(e2, t2, n2) {
    this.rules = e2, this.componentId = t2, this.baseHash = G(We, t2), this.baseStyle = n2, Pe.registerId(t2);
  }
  generateAndInjectStyles(e2, t2, n2) {
    let o2 = this.baseStyle ? this.baseStyle.generateAndInjectStyles(e2, t2, n2) : "";
    {
      let s2 = "";
      for (let o3 = 0; o3 < this.rules.length; o3++) {
        const r2 = this.rules[o3];
        if ("string" == typeof r2) s2 += r2;
        else if (r2) if (ke(r2)) {
          const o4 = r2(e2);
          "string" == typeof o4 ? s2 += o4 : null != o4 && false !== o4 && (true, s2 += ae(ze(o4, e2, t2, n2)));
        } else s2 += ae(ze(r2, e2, t2, n2));
      }
      if (s2) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const e3 = n2.hash ? n2.hash + s2 : s2;
        let r2 = this.dynamicNameCache.get(e3);
        if (!r2) {
          if (r2 = V(G(G(this.baseHash, n2.hash), s2) >>> 0), this.dynamicNameCache.size >= 200) {
            const e4 = this.dynamicNameCache.keys().next().value;
            void 0 !== e4 && this.dynamicNameCache.delete(e4);
          }
          this.dynamicNameCache.set(e3, r2);
        }
        if (!t2.hasNameForId(this.componentId, r2)) {
          const e4 = n2(s2, "." + r2, void 0, this.componentId);
          t2.insertRules(this.componentId, r2, e4);
        }
        o2 = ce(o2, r2);
      }
    }
    return o2;
  }
}
const Be = /&/g;
function qe(e2, t2) {
  let n2 = 0;
  for (; --t2 >= 0 && 92 === e2.charCodeAt(t2); ) n2++;
  return !(1 & ~n2);
}
function He(e2) {
  const t2 = e2.length;
  let n2 = "", o2 = 0, s2 = 0, r2 = 0, i2 = false, c2 = false;
  for (let a2 = 0; a2 < t2; a2++) {
    const l2 = e2.charCodeAt(a2);
    if (0 !== r2 || i2 || l2 !== Re || 42 !== e2.charCodeAt(a2 + 1)) if (i2) 42 === l2 && e2.charCodeAt(a2 + 1) === Re && (i2 = false, a2++);
    else if (34 !== l2 && 39 !== l2 || qe(e2, a2)) {
      if (0 === r2) if (123 === l2) s2++;
      else if (125 === l2) {
        if (s2--, s2 < 0) {
          c2 = true;
          let n3 = a2 + 1;
          for (; n3 < t2; ) {
            const t3 = e2.charCodeAt(n3);
            if (59 === t3 || 10 === t3) break;
            n3++;
          }
          n3 < t2 && 59 === e2.charCodeAt(n3) && n3++, s2 = 0, a2 = n3 - 1, o2 = n3;
          continue;
        }
        0 === s2 && (n2 += e2.substring(o2, a2 + 1), o2 = a2 + 1);
      } else 59 === l2 && 0 === s2 && (n2 += e2.substring(o2, a2 + 1), o2 = a2 + 1);
    } else 0 === r2 ? r2 = l2 : r2 === l2 && (r2 = 0);
    else i2 = true, a2++;
  }
  return c2 || 0 !== s2 || 0 !== r2 ? (o2 < t2 && 0 === s2 && 0 === r2 && (n2 += e2.substring(o2)), n2) : e2;
}
function Ye(e2, t2) {
  const n2 = t2 + " ", o2 = "," + n2;
  for (let s2 = 0; s2 < e2.length; s2++) {
    const r2 = e2[s2];
    if ("rule" === r2.type) {
      r2.value = (n2 + r2.value).replaceAll(",", o2);
      const e3 = r2.props, t3 = [];
      for (let o3 = 0; o3 < e3.length; o3++) t3[o3] = n2 + e3[o3];
      r2.props = t3;
    }
    Array.isArray(r2.children) && "@keyframes" !== r2.type && Ye(r2.children, t2);
  }
  return e2;
}
function Ue({ options: e2 = $, plugins: t2 = I } = $) {
  let n2, s2, r2;
  const i2 = (e3, t3, o2) => o2.startsWith(s2) && o2.endsWith(s2) && o2.replaceAll(s2, "").length > 0 ? `.${n2}` : e3, c2 = t2.slice();
  c2.push((e3) => {
    e3.type === RULESET && e3.value.includes("&") && (r2 || (r2 = new RegExp(`\\${s2}\\b`, "g")), e3.props[0] = e3.props[0].replace(Be, s2).replace(r2, i2));
  }), e2.prefix && c2.push(prefixer), c2.push(stringify);
  let a2 = [];
  const l2 = middleware(c2.concat(rulesheet((e3) => a2.push(e3)))), u2 = (t3, i3 = "", c3 = "", u3 = "&") => {
    n2 = u3, s2 = i3, r2 = void 0;
    const h3 = (function(e3) {
      const t4 = -1 !== e3.indexOf("//"), n3 = -1 !== e3.indexOf("}");
      if (!t4 && !n3) return e3;
      if (!t4) return He(e3);
      const o2 = e3.length;
      let s3 = "", r3 = 0, i4 = 0, c4 = 0, a3 = 0, l3 = 0, u4 = false;
      for (; i4 < o2; ) {
        const t5 = e3.charCodeAt(i4);
        if (34 !== t5 && 39 !== t5 || qe(e3, i4)) if (0 === c4) if (t5 === Re && i4 + 1 < o2 && 42 === e3.charCodeAt(i4 + 1)) {
          for (i4 += 2; i4 + 1 < o2 && (42 !== e3.charCodeAt(i4) || e3.charCodeAt(i4 + 1) !== Re); ) i4++;
          i4 += 2;
        } else if (40 !== t5) if (41 !== t5) if (a3 > 0) i4++;
        else if (42 === t5 && i4 + 1 < o2 && e3.charCodeAt(i4 + 1) === Re) s3 += e3.substring(r3, i4), i4 += 2, r3 = i4, u4 = true;
        else if (t5 === Re && i4 + 1 < o2 && e3.charCodeAt(i4 + 1) === Re) {
          for (s3 += e3.substring(r3, i4); i4 < o2 && 10 !== e3.charCodeAt(i4); ) i4++;
          r3 = i4, u4 = true;
        } else 123 === t5 ? l3++ : 125 === t5 && l3--, i4++;
        else a3 > 0 && a3--, i4++;
        else a3++, i4++;
        else i4++;
        else 0 === c4 ? c4 = t5 : c4 === t5 && (c4 = 0), i4++;
      }
      return u4 ? (r3 < o2 && (s3 += e3.substring(r3)), 0 === l3 ? s3 : He(s3)) : 0 === l3 ? e3 : He(e3);
    })(t3);
    let d3 = compile(c3 || i3 ? c3 + " " + i3 + " { " + h3 + " }" : h3);
    return e2.namespace && (d3 = Ye(d3, e2.namespace)), a2 = [], serialize(d3, l2), a2;
  }, h2 = e2;
  let d2 = M;
  for (let e3 = 0; e3 < t2.length; e3++) t2[e3].name || v(15), d2 = G(d2, t2[e3].name);
  return (null == h2 ? void 0 : h2.namespace) && (d2 = G(d2, h2.namespace)), (null == h2 ? void 0 : h2.prefix) && (d2 = G(d2, "p")), u2.hash = d2 !== M ? d2.toString() : "", u2;
}
const Je = new Pe(), Xe = Ue(), Ke = React2.createContext({ shouldForwardProp: void 0, styleSheet: Je, stylis: Xe, stylisPlugins: void 0 }), Qe = Ke.Consumer;
function Ze() {
  return React2.useContext(Ke);
}
function et(e2) {
  var n2;
  const o2 = Ze(), { styleSheet: s2 } = o2, r2 = React2.useMemo(() => {
    let t2 = s2;
    return e2.sheet ? t2 = e2.sheet : e2.target ? t2 = t2.reconstructWithOptions(void 0 !== e2.nonce ? { target: e2.target, nonce: e2.nonce } : { target: e2.target }, false) : void 0 !== e2.nonce && (t2 = t2.reconstructWithOptions({ nonce: e2.nonce })), e2.disableCSSOMInjection && (t2 = t2.reconstructWithOptions({ useCSSOMInjection: false })), t2;
  }, [e2.disableCSSOMInjection, e2.nonce, e2.sheet, e2.target, s2]), i2 = React2.useMemo(() => {
    var t2;
    return void 0 === e2.stylisPlugins && void 0 === e2.namespace && void 0 === e2.enableVendorPrefixes ? o2.stylis : Ue({ options: { namespace: e2.namespace, prefix: e2.enableVendorPrefixes }, plugins: null !== (t2 = e2.stylisPlugins) && void 0 !== t2 ? t2 : o2.stylisPlugins });
  }, [e2.enableVendorPrefixes, e2.namespace, e2.stylisPlugins, o2.stylis, o2.stylisPlugins]), c2 = "shouldForwardProp" in e2 ? e2.shouldForwardProp : o2.shouldForwardProp, a2 = null !== (n2 = e2.stylisPlugins) && void 0 !== n2 ? n2 : o2.stylisPlugins, l2 = React2.useMemo(() => ({ shouldForwardProp: c2, styleSheet: r2, stylis: i2, stylisPlugins: a2 }), [c2, r2, i2, a2]);
  return React2.createElement(Ke.Provider, { value: l2 }, e2.children);
}
const tt = React2.createContext(void 0), nt = tt.Consumer;
function ot() {
  const e2 = React2.useContext(tt);
  if (!e2) throw v(18);
  return e2;
}
function st(e2) {
  const n2 = React2.useContext(tt), o2 = React2.useMemo(() => (function(e3, t2) {
    if (!e3) throw v(14);
    if (re(e3)) {
      const n3 = e3(t2);
      if (false) throw v(7);
      return n3;
    }
    if (Array.isArray(e3) || "object" != typeof e3) throw v(8);
    return t2 ? Object.assign(Object.assign({}, t2), e3) : e3;
  })(e2.theme, n2), [e2.theme, n2]);
  return e2.children ? React2.createElement(tt.Provider, { value: o2 }, e2.children) : null;
}
const rt = Object.prototype.hasOwnProperty, it = {};
function ct(e2, t2) {
  const n2 = "string" != typeof e2 ? "sc" : T(e2);
  it[n2] = (it[n2] || 0) + 1;
  const o2 = n2 + "-" + z(u + n2 + it[n2]);
  return t2 ? t2 + "-" + o2 : o2;
}
let at;
function lt(o2, s2, r2) {
  const i2 = ie(o2), c2 = o2, a2 = !L(o2), { attrs: l2 = I, componentId: u2 = ct(s2.displayName, s2.parentComponentId), displayName: h2 = B(o2) } = s2, d2 = s2.displayName && s2.componentId ? T(s2.displayName) + "-" + s2.componentId : s2.componentId || u2, p2 = i2 && c2.attrs ? c2.attrs.concat(l2).filter(Boolean) : l2;
  let { shouldForwardProp: f2 } = s2;
  if (i2 && c2.shouldForwardProp) {
    const e2 = c2.shouldForwardProp;
    if (s2.shouldForwardProp) {
      const t2 = s2.shouldForwardProp;
      f2 = (n2, o3) => e2(n2, o3) && t2(n2, o3);
    } else f2 = e2;
  }
  const m2 = new Le(r2, d2, i2 ? c2.componentStyle : void 0);
  function y2(o3, s3) {
    return (function(o4, s4, r3) {
      const { attrs: i3, componentStyle: c3, defaultProps: a3, foldedComponentIds: l3, styledComponentId: u3, target: h3 } = o4, d3 = React2.useContext(tt), p3 = Ze(), f3 = o4.shouldForwardProp || p3.shouldForwardProp;
      const m3 = R(s4, d3, a3) || $;
      let y3, g3;
      {
        const e2 = React2.useRef(null), n2 = e2.current;
        if (null !== n2 && n2[1] === m3 && n2[2] === p3.styleSheet && n2[3] === p3.stylis && n2[7] === c3 && (function(e3, t2, n3) {
          const o5 = e3, s5 = t2;
          let r4 = 0;
          for (const e4 in s5) if (rt.call(s5, e4) && (r4++, o5[e4] !== s5[e4])) return false;
          return r4 === n3;
        })(n2[0], s4, n2[4])) y3 = n2[5], g3 = n2[6];
        else {
          y3 = (function(e3, t2, n4) {
            const o5 = Object.assign(Object.assign({}, t2), { className: void 0, theme: n4 }), s5 = e3.length > 1;
            for (let n5 = 0; n5 < e3.length; n5++) {
              const r4 = e3[n5], i4 = re(r4) ? r4(s5 ? Object.assign({}, o5) : o5) : r4;
              for (const e4 in i4) "className" === e4 ? o5.className = ce(o5.className, i4[e4]) : "style" === e4 ? o5.style = Object.assign(Object.assign({}, o5.style), i4[e4]) : e4 in t2 && void 0 === t2[e4] || (o5[e4] = i4[e4]);
            }
            return "className" in t2 && "string" == typeof t2.className && (o5.className = ce(o5.className, t2.className)), o5;
          })(i3, s4, m3), g3 = (function(e3, n4, o5, s5) {
            const r4 = e3.generateAndInjectStyles(n4, o5, s5);
            return false, r4;
          })(c3, y3, p3.styleSheet, p3.stylis);
          let n3 = 0;
          for (const e3 in s4) rt.call(s4, e3) && n3++;
          e2.current = [s4, m3, p3.styleSheet, p3.stylis, n3, y3, g3, c3];
        }
      }
      const v2 = y3.as || h3, S2 = (function(t2, n2, o5, s5) {
        const r4 = {};
        for (const i4 in t2) void 0 === t2[i4] || "$" === i4[0] || "as" === i4 || "theme" === i4 && t2.theme === o5 || ("forwardedAs" === i4 ? r4.as = t2.forwardedAs : s5 && !s5(i4, n2) || (r4[i4] = t2[i4], s5 || true));
        return r4;
      })(y3, v2, m3, f3);
      let b2 = ce(l3, u3);
      return g3 && (b2 += " " + g3), y3.className && (b2 += " " + y3.className), S2[L(v2) && v2.includes("-") ? "class" : "className"] = b2, r3 && (S2.ref = r3), reactExports.createElement(v2, S2);
    })(g2, o3, s3);
  }
  y2.displayName = h2;
  let g2 = React2.forwardRef(y2);
  return g2.attrs = p2, g2.componentStyle = m2, g2.displayName = h2, g2.shouldForwardProp = f2, g2.foldedComponentIds = i2 ? ce(c2.foldedComponentIds, c2.styledComponentId) : "", g2.styledComponentId = d2, g2.target = i2 ? c2.target : o2, Object.defineProperty(g2, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(e2) {
    this._foldedDefaultProps = i2 ? (function(e3, ...t2) {
      for (const n2 of t2) ue(e3, n2, true);
      return e3;
    })({}, c2.defaultProps, e2) : e2;
  } }), false, he(g2, () => `.${g2.styledComponentId}`), a2 && se(g2, o2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true }), g2;
}
var ut = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function ht(e2, t2) {
  const n2 = [e2[0]];
  for (let o2 = 0, s2 = t2.length; o2 < s2; o2 += 1) n2.push(t2[o2], e2[o2 + 1]);
  return n2;
}
const dt = (e2) => (_e.add(e2), e2);
function pt(e2, ...t2) {
  if (re(e2) || le(e2)) return dt(ze(ht(I, [e2, ...t2])));
  const n2 = e2;
  return 0 === t2.length && 1 === n2.length && "string" == typeof n2[0] ? ze(n2) : dt(ze(ht(n2, t2)));
}
function ft(e2, t2, n2 = $) {
  if (!t2) throw v(1, t2);
  const o2 = (o3, ...s2) => e2(t2, n2, pt(o3, ...s2));
  return o2.attrs = (o3) => ft(e2, t2, Object.assign(Object.assign({}, n2), { attrs: Array.prototype.concat(n2.attrs, o3).filter(Boolean) })), o2.withConfig = (o3) => ft(e2, t2, Object.assign(Object.assign({}, n2), o3)), o2;
}
const mt = (e2) => ft(lt, e2), yt = mt;
ut.forEach((e2) => {
  yt[e2] = mt(e2);
});
class gt {
  constructor(e2, t2) {
    this.instanceRules = /* @__PURE__ */ new Map(), this.rules = e2, this.componentId = t2, this.isStatic = (function(e3) {
      for (let t3 = 0; t3 < e3.length; t3 += 1) {
        const n2 = e3[t3];
        if (re(n2) && !ie(n2)) return false;
      }
      return true;
    })(e2), Pe.registerId(this.componentId);
  }
  removeStyles(e2, t2) {
    this.instanceRules.delete(e2), this.rebuildGroup(t2);
  }
  renderStyles(e2, t2, n2, o2) {
    const s2 = this.componentId;
    if (this.isStatic) {
      if (n2.hasNameForId(s2, s2 + e2)) this.instanceRules.has(e2) || this.computeRules(e2, t2, n2, o2);
      else {
        const r3 = this.computeRules(e2, t2, n2, o2);
        n2.insertRules(s2, r3.name, r3.rules);
      }
      return;
    }
    const r2 = this.instanceRules.get(e2);
    if (this.computeRules(e2, t2, n2, o2), !n2.server && r2) {
      const t3 = r2.rules, n3 = this.instanceRules.get(e2).rules;
      if (t3.length === n3.length) {
        let e3 = true;
        for (let o3 = 0; o3 < t3.length; o3++) if (t3[o3] !== n3[o3]) {
          e3 = false;
          break;
        }
        if (e3) return;
      }
    }
    this.rebuildGroup(n2);
  }
  computeRules(e2, t2, n2, o2) {
    const s2 = ae(ze(this.rules, t2, n2, o2)), r2 = { name: this.componentId + e2, rules: o2(s2, "") };
    return this.instanceRules.set(e2, r2), r2;
  }
  rebuildGroup(e2) {
    const t2 = this.componentId;
    e2.clearRules(t2);
    for (const n2 of this.instanceRules.values()) e2.insertRules(t2, n2.name, n2.rules);
  }
}
function vt(e2, ...n2) {
  const o2 = pt(e2, ...n2), s2 = `sc-global-${z(JSON.stringify(o2))}`, r2 = new gt(o2, s2);
  const i2 = (e3) => {
    const n3 = Ze(), i3 = React2.useContext(tt);
    let a2;
    {
      const e4 = React2.useRef(null);
      null === e4.current && (e4.current = n3.styleSheet.allocateGSInstance(s2)), a2 = e4.current;
    }
    false, false, n3.styleSheet.server && c2(a2, e3, n3.styleSheet, i3, n3.stylis);
    {
      const o3 = r2.isStatic ? [a2, n3.styleSheet, r2] : [a2, e3, n3.styleSheet, i3, n3.stylis, r2], l2 = React2.useRef(r2);
      React2.useLayoutEffect(() => {
        n3.styleSheet.server || (l2.current !== r2 && (n3.styleSheet.clearRules(s2), l2.current = r2), c2(a2, e3, n3.styleSheet, i3, n3.stylis));
      }, o3), React2.useLayoutEffect(() => () => {
        n3.styleSheet.server || r2.removeStyles(a2, n3.styleSheet);
      }, [a2, n3.styleSheet, r2]);
    }
    return n3.styleSheet.server && r2.instanceRules.delete(a2), null;
  };
  function c2(e3, t2, n3, o3, s3) {
    if (r2.isStatic) r2.renderStyles(e3, y, n3, s3);
    else {
      const c3 = Object.assign(Object.assign({}, t2), { theme: R(t2, o3, i2.defaultProps) });
      r2.renderStyles(e3, c3, n3, s3);
    }
  }
  return React2.memo(i2);
}
function St(e2, t2, n2, o2, s2) {
  for (const r2 in e2) {
    const i2 = e2[r2], c2 = s2 ? s2 + "-" + r2 : r2;
    if ("object" == typeof i2 && null !== i2) {
      const e3 = {};
      St(i2, t2, e3, o2, c2), n2[r2] = e3;
    } else n2[r2] = o2(c2, i2, r2);
  }
}
function bt(e2, t2, n2, o2) {
  let s2 = "";
  for (const r2 in e2) {
    const i2 = e2[r2], c2 = t2[r2], a2 = o2 ? o2 + "-" + r2 : r2;
    "object" == typeof i2 && null !== i2 ? "object" == typeof c2 && null !== c2 && (s2 += bt(i2, c2, n2, a2)) : void 0 !== c2 && "function" != typeof c2 && (s2 += "--" + n2 + a2 + ":" + c2 + ";");
  }
  return s2;
}
function wt(e2, t2) {
  var n2, o2;
  const s2 = (null !== (n2 = null == t2 ? void 0 : t2.prefix) && void 0 !== n2 ? n2 : "sc") + "-", r2 = null !== (o2 = null == t2 ? void 0 : t2.selector) && void 0 !== o2 ? o2 : ":root", i2 = (function(e3, t3) {
    const n3 = {};
    return St(e3, t3, n3, (e4) => "--" + t3 + e4), n3;
  })(e2, s2), c2 = (function(e3, t3) {
    const n3 = {};
    return St(e3, t3, n3, (e4, n4) => {
      if (false) {
        const t4 = String(n4);
        let o3 = 0;
        for (let e5 = 0; e5 < t4.length && (40 === t4.charCodeAt(e5) ? o3++ : 41 === t4.charCodeAt(e5) && o3--, !(o3 < 0)); e5++) ;
        0 !== o3 && console.warn(`createTheme: value "${t4}" at "${e4}" contains unbalanced parentheses and may break the var() fallback`);
      }
      return "var(--" + t3 + e4 + ", " + n4 + ")";
    }), n3;
  })(e2, s2), a2 = vt`
    ${r2} {
      ${(t3) => bt(e2, t3.theme, s2)}
    }
  `;
  return Object.assign(c2, { GlobalStyle: a2, raw: e2, vars: i2, resolve(t3) {
    if (!d) throw new Error("createTheme.resolve() is client-only");
    const n3 = null != t3 ? t3 : document.documentElement;
    return (function(e3, t4, n4) {
      const o3 = {};
      return St(e3, t4, o3, (e4, o4) => n4.getPropertyValue("--" + t4 + e4).trim() || o4), o3;
    })(e2, s2, getComputedStyle(n3));
  } });
}
var Nt;
class Ct {
  constructor(e2, t2) {
    this[Nt] = true, this.inject = (e3, t3 = Xe) => {
      const n2 = this.getName(t3);
      if (!e3.hasNameForId(this.id, n2)) {
        const o2 = t3(this.rules, n2, "@keyframes");
        e3.insertRules(this.id, n2, o2);
      }
    }, this.name = e2, this.id = m + e2, this.rules = t2, C(this.id), he(this, () => {
      throw v(12, String(this.name));
    });
  }
  getName(e2 = Xe) {
    return e2.hash ? this.name + V(+e2.hash >>> 0) : this.name;
  }
}
function Ot(e2, ...t2) {
  const n2 = ae(pt(e2, ...t2)), o2 = z(n2);
  return new Ct(o2, n2);
}
function Et(e2) {
  const n2 = React2.forwardRef((n3, o2) => {
    const s2 = R(n3, React2.useContext(tt), e2.defaultProps);
    return false, React2.createElement(e2, Object.assign(Object.assign({}, n3), { theme: s2, ref: o2 }));
  });
  return n2.displayName = `WithTheme(${W(e2)})`, se(n2, e2);
}
Nt = xe;
class At {
  constructor({ nonce: e2 } = {}) {
    this._emitSheetCSS = () => {
      const e3 = this.instance.toString();
      if (!e3) return "";
      const t2 = this.instance.options.nonce || we();
      return `<style ${ae([t2 && `nonce="${t2}"`, `${c}="true"`, `${l}="${u}"`].filter(Boolean), " ")}>${e3}</style>`;
    }, this.getStyleTags = () => {
      if (this.sealed) throw v(2);
      return this._emitSheetCSS();
    }, this.getStyleElement = () => {
      if (this.sealed) throw v(2);
      const e3 = this.instance.toString();
      if (!e3) return [];
      const n2 = { [c]: "", [l]: u, dangerouslySetInnerHTML: { __html: e3 } }, o2 = this.instance.options.nonce || we();
      return o2 && (n2.nonce = o2), [React2.createElement("style", Object.assign({}, n2, { key: "sc-0-0" }))];
    }, this.seal = () => {
      this.sealed = true;
    }, this.instance = new Pe({ isServer: true, nonce: e2 }), this.sealed = false;
  }
  collectStyles(e2) {
    if (this.sealed) throw v(2);
    return React2.createElement(et, { sheet: this.instance }, e2);
  }
  interleaveWithNodeStream(e2) {
    throw v(3);
  }
}
const Pt = { StyleSheet: Pe, mainSheet: Je };
const _t = `__sc-${c}__`;
const It = /:(?:(first)-child|(last)-child|(only)-child|(nth-child)\(([^()]+)\)|(nth-last-child)\(([^()]+)\))/g, $t = `:not(style[${c}])`, Rt = `style[${c}]`;
function jt(e2) {
  return -1 === e2.indexOf("-child") ? e2 : (It.lastIndex = 0, e2.replace(It, (e3, t2, n2, o2, s2, r2, i2, c2) => t2 ? `:nth-child(1 of ${$t})` : n2 ? `:nth-last-child(1 of ${$t})` : o2 ? `:nth-child(1 of ${$t}):nth-last-child(1 of ${$t})` : s2 ? -1 !== r2.indexOf(" of ") ? e3 : `:nth-child(${r2} of ${$t})` : -1 !== c2.indexOf(" of ") ? e3 : `:nth-last-child(${c2} of ${$t})`));
}
function xt(e2, t2) {
  if (-1 === e2.indexOf("+")) return;
  let n2 = 0, o2 = 0;
  for (let s2 = 0; s2 < e2.length; s2++) {
    const r2 = e2.charCodeAt(s2);
    if (40 === r2) n2++;
    else if (41 === r2) n2--;
    else if (91 === r2) o2++;
    else if (93 === r2) o2--;
    else if (43 === r2 && 0 === n2 && 0 === o2 && !qe(e2, s2)) {
      const n3 = e2.substring(0, s2), o3 = e2.substring(s2 + 1);
      t2.push(n3 + "+" + Rt + "+" + o3), t2.push(n3 + "+" + Rt + "+" + Rt + "+" + o3);
    }
  }
}
function Tt(e2) {
  if (e2.type === RULESET) {
    const t2 = e2.props, n2 = [];
    for (let e3 = 0; e3 < t2.length; e3++) {
      const o2 = jt(t2[e3]);
      n2.push(o2), xt(o2, n2);
    }
    e2.props = n2;
  }
}

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
class WalletConnectError extends Error {
  constructor(walletName, errorMessage) {
    const message = `There was an error while connecting to the wallet. 
    Please ensure that you have created a wallet inside of your ${walletName} app and that your network or account has a proper configuration. 
    The error coming from this wallet is: ${errorMessage}.`;
    super(message);
    this.name = "WalletConnectError";
  }
}
class WrongNetworkTypeError extends Error {
  constructor(targetNetwork, currentNetwork) {
    const message = `You have tried to call functions on ${capitalize(
      currentNetwork
    )}, while the network type is limited to ${capitalize(targetNetwork)}.`;
    super(message);
    this.name = "WrongNetworkTypeError";
  }
}
class WalletNotCip30CompatibleError extends Error {
  constructor(walletname) {
    const message = `It seems that the API of ${capitalize(
      walletname
    )} is not cip30 compatible.`;
    super(message);
    this.name = "WalletNotCip30CompatibleError";
  }
}
class ExtensionNotInjectedError extends Error {
  constructor(walletname) {
    const message = `It seems that the API of ${capitalize(
      walletname
    )} is not injected and window.cardano.${walletname} is not available.`;
    super(message);
    this.name = "ExtensionNotInjectedError";
  }
}
class WalletNotInstalledError extends Error {
  constructor(walletName) {
    super(`The wallet ${walletName} is not installed.`);
    this.name = "WalletNotInstalledError";
  }
}
class WalletExtensionNotFoundError extends Error {
  constructor(walletname) {
    const message = `${capitalize(
      walletname
    )} was not found. Please check if it is installed correctly.`;
    super(message);
    this.name = "WalletExtensionNotFoundError";
  }
}
class EnablementFailedError extends Error {
  constructor(walletname) {
    const message = `Enablement of ${capitalize(
      walletname
    )} failed. Please check your setup.`;
    super(message);
    this.name = "EnablementFailedError";
  }
}

var dist = {};

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	'use strict';
	Object.defineProperty(dist, "__esModule", { value: true });
	dist.bech32m = dist.bech32 = void 0;
	const ALPHABET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l';
	const ALPHABET_MAP = {};
	for (let z = 0; z < ALPHABET.length; z++) {
	    const x = ALPHABET.charAt(z);
	    ALPHABET_MAP[x] = z;
	}
	function polymodStep(pre) {
	    const b = pre >> 25;
	    return (((pre & 0x1ffffff) << 5) ^
	        (-((b >> 0) & 1) & 0x3b6a57b2) ^
	        (-((b >> 1) & 1) & 0x26508e6d) ^
	        (-((b >> 2) & 1) & 0x1ea119fa) ^
	        (-((b >> 3) & 1) & 0x3d4233dd) ^
	        (-((b >> 4) & 1) & 0x2a1462b3));
	}
	function prefixChk(prefix) {
	    let chk = 1;
	    for (let i = 0; i < prefix.length; ++i) {
	        const c = prefix.charCodeAt(i);
	        if (c < 33 || c > 126)
	            return 'Invalid prefix (' + prefix + ')';
	        chk = polymodStep(chk) ^ (c >> 5);
	    }
	    chk = polymodStep(chk);
	    for (let i = 0; i < prefix.length; ++i) {
	        const v = prefix.charCodeAt(i);
	        chk = polymodStep(chk) ^ (v & 0x1f);
	    }
	    return chk;
	}
	function convert(data, inBits, outBits, pad) {
	    let value = 0;
	    let bits = 0;
	    const maxV = (1 << outBits) - 1;
	    const result = [];
	    for (let i = 0; i < data.length; ++i) {
	        value = (value << inBits) | data[i];
	        bits += inBits;
	        while (bits >= outBits) {
	            bits -= outBits;
	            result.push((value >> bits) & maxV);
	        }
	    }
	    if (pad) {
	        if (bits > 0) {
	            result.push((value << (outBits - bits)) & maxV);
	        }
	    }
	    else {
	        if (bits >= inBits)
	            return 'Excess padding';
	        if ((value << (outBits - bits)) & maxV)
	            return 'Non-zero padding';
	    }
	    return result;
	}
	function toWords(bytes) {
	    return convert(bytes, 8, 5, true);
	}
	function fromWordsUnsafe(words) {
	    const res = convert(words, 5, 8, false);
	    if (Array.isArray(res))
	        return res;
	}
	function fromWords(words) {
	    const res = convert(words, 5, 8, false);
	    if (Array.isArray(res))
	        return res;
	    throw new Error(res);
	}
	function getLibraryFromEncoding(encoding) {
	    let ENCODING_CONST;
	    if (encoding === 'bech32') {
	        ENCODING_CONST = 1;
	    }
	    else {
	        ENCODING_CONST = 0x2bc830a3;
	    }
	    function encode(prefix, words, LIMIT) {
	        LIMIT = LIMIT || 90;
	        if (prefix.length + 7 + words.length > LIMIT)
	            throw new TypeError('Exceeds length limit');
	        prefix = prefix.toLowerCase();
	        // determine chk mod
	        let chk = prefixChk(prefix);
	        if (typeof chk === 'string')
	            throw new Error(chk);
	        let result = prefix + '1';
	        for (let i = 0; i < words.length; ++i) {
	            const x = words[i];
	            if (x >> 5 !== 0)
	                throw new Error('Non 5-bit word');
	            chk = polymodStep(chk) ^ x;
	            result += ALPHABET.charAt(x);
	        }
	        for (let i = 0; i < 6; ++i) {
	            chk = polymodStep(chk);
	        }
	        chk ^= ENCODING_CONST;
	        for (let i = 0; i < 6; ++i) {
	            const v = (chk >> ((5 - i) * 5)) & 0x1f;
	            result += ALPHABET.charAt(v);
	        }
	        return result;
	    }
	    function __decode(str, LIMIT) {
	        LIMIT = LIMIT || 90;
	        if (str.length < 8)
	            return str + ' too short';
	        if (str.length > LIMIT)
	            return 'Exceeds length limit';
	        // don't allow mixed case
	        const lowered = str.toLowerCase();
	        const uppered = str.toUpperCase();
	        if (str !== lowered && str !== uppered)
	            return 'Mixed-case string ' + str;
	        str = lowered;
	        const split = str.lastIndexOf('1');
	        if (split === -1)
	            return 'No separator character for ' + str;
	        if (split === 0)
	            return 'Missing prefix for ' + str;
	        const prefix = str.slice(0, split);
	        const wordChars = str.slice(split + 1);
	        if (wordChars.length < 6)
	            return 'Data too short';
	        let chk = prefixChk(prefix);
	        if (typeof chk === 'string')
	            return chk;
	        const words = [];
	        for (let i = 0; i < wordChars.length; ++i) {
	            const c = wordChars.charAt(i);
	            const v = ALPHABET_MAP[c];
	            if (v === undefined)
	                return 'Unknown character ' + c;
	            chk = polymodStep(chk) ^ v;
	            // not in the checksum?
	            if (i + 6 >= wordChars.length)
	                continue;
	            words.push(v);
	        }
	        if (chk !== ENCODING_CONST)
	            return 'Invalid checksum for ' + str;
	        return { prefix, words };
	    }
	    function decodeUnsafe(str, LIMIT) {
	        const res = __decode(str, LIMIT);
	        if (typeof res === 'object')
	            return res;
	    }
	    function decode(str, LIMIT) {
	        const res = __decode(str, LIMIT);
	        if (typeof res === 'object')
	            return res;
	        throw new Error(res);
	    }
	    return {
	        decodeUnsafe,
	        decode,
	        encode,
	        toWords,
	        fromWordsUnsafe,
	        fromWords,
	    };
	}
	dist.bech32 = getLibraryFromEncoding('bech32');
	dist.bech32m = getLibraryFromEncoding('bech32m');
	return dist;
}

var distExports = requireDist();
const index$1 = /*@__PURE__*/getDefaultExportFromCjs(distExports);

var buffer$1 = {};

var base64Js = {};

var hasRequiredBase64Js;

function requireBase64Js () {
	if (hasRequiredBase64Js) return base64Js;
	hasRequiredBase64Js = 1;
	'use strict';

	base64Js.byteLength = byteLength;
	base64Js.toByteArray = toByteArray;
	base64Js.fromByteArray = fromByteArray;

	var lookup = [];
	var revLookup = [];
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i];
	  revLookup[code.charCodeAt(i)] = i;
	}

	// Support decoding URL-safe base64 strings, as Node.js does.
	// See: https://en.wikipedia.org/wiki/Base64#URL_applications
	revLookup['-'.charCodeAt(0)] = 62;
	revLookup['_'.charCodeAt(0)] = 63;

	function getLens (b64) {
	  var len = b64.length;

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // Trim off extra bytes after placeholder bytes are found
	  // See: https://github.com/beatgammit/base64-js/issues/42
	  var validLen = b64.indexOf('=');
	  if (validLen === -1) validLen = len;

	  var placeHoldersLen = validLen === len
	    ? 0
	    : 4 - (validLen % 4);

	  return [validLen, placeHoldersLen]
	}

	// base64 is 4/3 + up to two characters of the original data
	function byteLength (b64) {
	  var lens = getLens(b64);
	  var validLen = lens[0];
	  var placeHoldersLen = lens[1];
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function _byteLength (b64, validLen, placeHoldersLen) {
	  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
	}

	function toByteArray (b64) {
	  var tmp;
	  var lens = getLens(b64);
	  var validLen = lens[0];
	  var placeHoldersLen = lens[1];

	  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

	  var curByte = 0;

	  // if there are placeholders, only get up to the last complete 4 chars
	  var len = placeHoldersLen > 0
	    ? validLen - 4
	    : validLen;

	  var i;
	  for (i = 0; i < len; i += 4) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 18) |
	      (revLookup[b64.charCodeAt(i + 1)] << 12) |
	      (revLookup[b64.charCodeAt(i + 2)] << 6) |
	      revLookup[b64.charCodeAt(i + 3)];
	    arr[curByte++] = (tmp >> 16) & 0xFF;
	    arr[curByte++] = (tmp >> 8) & 0xFF;
	    arr[curByte++] = tmp & 0xFF;
	  }

	  if (placeHoldersLen === 2) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 2) |
	      (revLookup[b64.charCodeAt(i + 1)] >> 4);
	    arr[curByte++] = tmp & 0xFF;
	  }

	  if (placeHoldersLen === 1) {
	    tmp =
	      (revLookup[b64.charCodeAt(i)] << 10) |
	      (revLookup[b64.charCodeAt(i + 1)] << 4) |
	      (revLookup[b64.charCodeAt(i + 2)] >> 2);
	    arr[curByte++] = (tmp >> 8) & 0xFF;
	    arr[curByte++] = tmp & 0xFF;
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
	  var tmp;
	  var output = [];
	  for (var i = start; i < end; i += 3) {
	    tmp =
	      ((uint8[i] << 16) & 0xFF0000) +
	      ((uint8[i + 1] << 8) & 0xFF00) +
	      (uint8[i + 2] & 0xFF);
	    output.push(tripletToBase64(tmp));
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp;
	  var len = uint8.length;
	  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
	  var parts = [];
	  var maxChunkLength = 16383; // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1];
	    parts.push(
	      lookup[tmp >> 2] +
	      lookup[(tmp << 4) & 0x3F] +
	      '=='
	    );
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
	    parts.push(
	      lookup[tmp >> 10] +
	      lookup[(tmp >> 4) & 0x3F] +
	      lookup[(tmp << 2) & 0x3F] +
	      '='
	    );
	  }

	  return parts.join('')
	}
	return base64Js;
}

var ieee754 = {};

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */

var hasRequiredIeee754;

function requireIeee754 () {
	if (hasRequiredIeee754) return ieee754;
	hasRequiredIeee754 = 1;
	ieee754.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = (nBytes * 8) - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	};

	ieee754.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c;
	  var eLen = (nBytes * 8) - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
	  var i = isLE ? 0 : (nBytes - 1);
	  var d = isLE ? 1 : -1;
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

	  value = Math.abs(value);

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0;
	    e = eMax;
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2);
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--;
	      c *= 2;
	    }
	    if (e + eBias >= 1) {
	      value += rt / c;
	    } else {
	      value += rt * Math.pow(2, 1 - eBias);
	    }
	    if (value * c >= 2) {
	      e++;
	      c /= 2;
	    }

	    if (e + eBias >= eMax) {
	      m = 0;
	      e = eMax;
	    } else if (e + eBias >= 1) {
	      m = ((value * c) - 1) * Math.pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
	      e = 0;
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m;
	  eLen += mLen;
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128;
	};
	return ieee754;
}

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

var hasRequiredBuffer;

function requireBuffer () {
	if (hasRequiredBuffer) return buffer$1;
	hasRequiredBuffer = 1;
	(function (exports) {
		/* eslint-disable no-proto */

		'use strict';

		const base64 = requireBase64Js();
		const ieee754 = requireIeee754();
		const customInspectSymbol =
		  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
		    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
		    : null;

		exports.Buffer = Buffer;
		exports.SlowBuffer = SlowBuffer;
		exports.INSPECT_MAX_BYTES = 50;

		const K_MAX_LENGTH = 0x7fffffff;
		exports.kMaxLength = K_MAX_LENGTH;

		/**
		 * If `Buffer.TYPED_ARRAY_SUPPORT`:
		 *   === true    Use Uint8Array implementation (fastest)
		 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
		 *               implementation (most compatible, even IE6)
		 *
		 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
		 * Opera 11.6+, iOS 4.2+.
		 *
		 * We report that the browser does not support typed arrays if the are not subclassable
		 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
		 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
		 * for __proto__ and has a buggy typed array implementation.
		 */
		Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();

		if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
		    typeof console.error === 'function') {
		  console.error(
		    'This browser lacks typed array (Uint8Array) support which is required by ' +
		    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
		  );
		}

		function typedArraySupport () {
		  // Can typed array instances can be augmented?
		  try {
		    const arr = new Uint8Array(1);
		    const proto = { foo: function () { return 42 } };
		    Object.setPrototypeOf(proto, Uint8Array.prototype);
		    Object.setPrototypeOf(arr, proto);
		    return arr.foo() === 42
		  } catch (e) {
		    return false
		  }
		}

		Object.defineProperty(Buffer.prototype, 'parent', {
		  enumerable: true,
		  get: function () {
		    if (!Buffer.isBuffer(this)) return undefined
		    return this.buffer
		  }
		});

		Object.defineProperty(Buffer.prototype, 'offset', {
		  enumerable: true,
		  get: function () {
		    if (!Buffer.isBuffer(this)) return undefined
		    return this.byteOffset
		  }
		});

		function createBuffer (length) {
		  if (length > K_MAX_LENGTH) {
		    throw new RangeError('The value "' + length + '" is invalid for option "size"')
		  }
		  // Return an augmented `Uint8Array` instance
		  const buf = new Uint8Array(length);
		  Object.setPrototypeOf(buf, Buffer.prototype);
		  return buf
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
		  // Common case.
		  if (typeof arg === 'number') {
		    if (typeof encodingOrOffset === 'string') {
		      throw new TypeError(
		        'The "string" argument must be of type string. Received type number'
		      )
		    }
		    return allocUnsafe(arg)
		  }
		  return from(arg, encodingOrOffset, length)
		}

		Buffer.poolSize = 8192; // not used by this implementation

		function from (value, encodingOrOffset, length) {
		  if (typeof value === 'string') {
		    return fromString(value, encodingOrOffset)
		  }

		  if (ArrayBuffer.isView(value)) {
		    return fromArrayView(value)
		  }

		  if (value == null) {
		    throw new TypeError(
		      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
		      'or Array-like Object. Received type ' + (typeof value)
		    )
		  }

		  if (isInstance(value, ArrayBuffer) ||
		      (value && isInstance(value.buffer, ArrayBuffer))) {
		    return fromArrayBuffer(value, encodingOrOffset, length)
		  }

		  if (typeof SharedArrayBuffer !== 'undefined' &&
		      (isInstance(value, SharedArrayBuffer) ||
		      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
		    return fromArrayBuffer(value, encodingOrOffset, length)
		  }

		  if (typeof value === 'number') {
		    throw new TypeError(
		      'The "value" argument must not be of type number. Received type number'
		    )
		  }

		  const valueOf = value.valueOf && value.valueOf();
		  if (valueOf != null && valueOf !== value) {
		    return Buffer.from(valueOf, encodingOrOffset, length)
		  }

		  const b = fromObject(value);
		  if (b) return b

		  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
		      typeof value[Symbol.toPrimitive] === 'function') {
		    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
		  }

		  throw new TypeError(
		    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
		    'or Array-like Object. Received type ' + (typeof value)
		  )
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
		  return from(value, encodingOrOffset, length)
		};

		// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
		// https://github.com/feross/buffer/pull/148
		Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
		Object.setPrototypeOf(Buffer, Uint8Array);

		function assertSize (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('"size" argument must be of type number')
		  } else if (size < 0) {
		    throw new RangeError('The value "' + size + '" is invalid for option "size"')
		  }
		}

		function alloc (size, fill, encoding) {
		  assertSize(size);
		  if (size <= 0) {
		    return createBuffer(size)
		  }
		  if (fill !== undefined) {
		    // Only pay attention to encoding if it's a string. This
		    // prevents accidentally sending in a number that would
		    // be interpreted as a start offset.
		    return typeof encoding === 'string'
		      ? createBuffer(size).fill(fill, encoding)
		      : createBuffer(size).fill(fill)
		  }
		  return createBuffer(size)
		}

		/**
		 * Creates a new filled Buffer instance.
		 * alloc(size[, fill[, encoding]])
		 **/
		Buffer.alloc = function (size, fill, encoding) {
		  return alloc(size, fill, encoding)
		};

		function allocUnsafe (size) {
		  assertSize(size);
		  return createBuffer(size < 0 ? 0 : checked(size) | 0)
		}

		/**
		 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
		 * */
		Buffer.allocUnsafe = function (size) {
		  return allocUnsafe(size)
		};
		/**
		 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
		 */
		Buffer.allocUnsafeSlow = function (size) {
		  return allocUnsafe(size)
		};

		function fromString (string, encoding) {
		  if (typeof encoding !== 'string' || encoding === '') {
		    encoding = 'utf8';
		  }

		  if (!Buffer.isEncoding(encoding)) {
		    throw new TypeError('Unknown encoding: ' + encoding)
		  }

		  const length = byteLength(string, encoding) | 0;
		  let buf = createBuffer(length);

		  const actual = buf.write(string, encoding);

		  if (actual !== length) {
		    // Writing a hex string, for example, that contains invalid characters will
		    // cause everything after the first invalid character to be ignored. (e.g.
		    // 'abxxcd' will be treated as 'ab')
		    buf = buf.slice(0, actual);
		  }

		  return buf
		}

		function fromArrayLike (array) {
		  const length = array.length < 0 ? 0 : checked(array.length) | 0;
		  const buf = createBuffer(length);
		  for (let i = 0; i < length; i += 1) {
		    buf[i] = array[i] & 255;
		  }
		  return buf
		}

		function fromArrayView (arrayView) {
		  if (isInstance(arrayView, Uint8Array)) {
		    const copy = new Uint8Array(arrayView);
		    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
		  }
		  return fromArrayLike(arrayView)
		}

		function fromArrayBuffer (array, byteOffset, length) {
		  if (byteOffset < 0 || array.byteLength < byteOffset) {
		    throw new RangeError('"offset" is outside of buffer bounds')
		  }

		  if (array.byteLength < byteOffset + (length || 0)) {
		    throw new RangeError('"length" is outside of buffer bounds')
		  }

		  let buf;
		  if (byteOffset === undefined && length === undefined) {
		    buf = new Uint8Array(array);
		  } else if (length === undefined) {
		    buf = new Uint8Array(array, byteOffset);
		  } else {
		    buf = new Uint8Array(array, byteOffset, length);
		  }

		  // Return an augmented `Uint8Array` instance
		  Object.setPrototypeOf(buf, Buffer.prototype);

		  return buf
		}

		function fromObject (obj) {
		  if (Buffer.isBuffer(obj)) {
		    const len = checked(obj.length) | 0;
		    const buf = createBuffer(len);

		    if (buf.length === 0) {
		      return buf
		    }

		    obj.copy(buf, 0, 0, len);
		    return buf
		  }

		  if (obj.length !== undefined) {
		    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
		      return createBuffer(0)
		    }
		    return fromArrayLike(obj)
		  }

		  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
		    return fromArrayLike(obj.data)
		  }
		}

		function checked (length) {
		  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
		  // length is NaN (which is otherwise coerced to zero.)
		  if (length >= K_MAX_LENGTH) {
		    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
		                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
		  }
		  return length | 0
		}

		function SlowBuffer (length) {
		  if (+length != length) { // eslint-disable-line eqeqeq
		    length = 0;
		  }
		  return Buffer.alloc(+length)
		}

		Buffer.isBuffer = function isBuffer (b) {
		  return b != null && b._isBuffer === true &&
		    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
		};

		Buffer.compare = function compare (a, b) {
		  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
		  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
		  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		    throw new TypeError(
		      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
		    )
		  }

		  if (a === b) return 0

		  let x = a.length;
		  let y = b.length;

		  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
		    if (a[i] !== b[i]) {
		      x = a[i];
		      y = b[i];
		      break
		    }
		  }

		  if (x < y) return -1
		  if (y < x) return 1
		  return 0
		};

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
		};

		Buffer.concat = function concat (list, length) {
		  if (!Array.isArray(list)) {
		    throw new TypeError('"list" argument must be an Array of Buffers')
		  }

		  if (list.length === 0) {
		    return Buffer.alloc(0)
		  }

		  let i;
		  if (length === undefined) {
		    length = 0;
		    for (i = 0; i < list.length; ++i) {
		      length += list[i].length;
		    }
		  }

		  const buffer = Buffer.allocUnsafe(length);
		  let pos = 0;
		  for (i = 0; i < list.length; ++i) {
		    let buf = list[i];
		    if (isInstance(buf, Uint8Array)) {
		      if (pos + buf.length > buffer.length) {
		        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf);
		        buf.copy(buffer, pos);
		      } else {
		        Uint8Array.prototype.set.call(
		          buffer,
		          buf,
		          pos
		        );
		      }
		    } else if (!Buffer.isBuffer(buf)) {
		      throw new TypeError('"list" argument must be an Array of Buffers')
		    } else {
		      buf.copy(buffer, pos);
		    }
		    pos += buf.length;
		  }
		  return buffer
		};

		function byteLength (string, encoding) {
		  if (Buffer.isBuffer(string)) {
		    return string.length
		  }
		  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
		    return string.byteLength
		  }
		  if (typeof string !== 'string') {
		    throw new TypeError(
		      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
		      'Received type ' + typeof string
		    )
		  }

		  const len = string.length;
		  const mustMatch = (arguments.length > 2 && arguments[2] === true);
		  if (!mustMatch && len === 0) return 0

		  // Use a for loop to avoid recursion
		  let loweredCase = false;
		  for (;;) {
		    switch (encoding) {
		      case 'ascii':
		      case 'latin1':
		      case 'binary':
		        return len
		      case 'utf8':
		      case 'utf-8':
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
		        if (loweredCase) {
		          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
		        }
		        encoding = ('' + encoding).toLowerCase();
		        loweredCase = true;
		    }
		  }
		}
		Buffer.byteLength = byteLength;

		function slowToString (encoding, start, end) {
		  let loweredCase = false;

		  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
		  // property of a typed array.

		  // This behaves neither like String nor Uint8Array in that we set start/end
		  // to their upper/lower bounds if the value passed is out of range.
		  // undefined is handled specially as per ECMA-262 6th Edition,
		  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
		  if (start === undefined || start < 0) {
		    start = 0;
		  }
		  // Return early if start > this.length. Done here to prevent potential uint32
		  // coercion fail below.
		  if (start > this.length) {
		    return ''
		  }

		  if (end === undefined || end > this.length) {
		    end = this.length;
		  }

		  if (end <= 0) {
		    return ''
		  }

		  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
		  end >>>= 0;
		  start >>>= 0;

		  if (end <= start) {
		    return ''
		  }

		  if (!encoding) encoding = 'utf8';

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
		        encoding = (encoding + '').toLowerCase();
		        loweredCase = true;
		    }
		  }
		}

		// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
		// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
		// reliably in a browserify context because there could be multiple different
		// copies of the 'buffer' package in use. This method works even for Buffer
		// instances that were created from another copy of the `buffer` package.
		// See: https://github.com/feross/buffer/issues/154
		Buffer.prototype._isBuffer = true;

		function swap (b, n, m) {
		  const i = b[n];
		  b[n] = b[m];
		  b[m] = i;
		}

		Buffer.prototype.swap16 = function swap16 () {
		  const len = this.length;
		  if (len % 2 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 16-bits')
		  }
		  for (let i = 0; i < len; i += 2) {
		    swap(this, i, i + 1);
		  }
		  return this
		};

		Buffer.prototype.swap32 = function swap32 () {
		  const len = this.length;
		  if (len % 4 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 32-bits')
		  }
		  for (let i = 0; i < len; i += 4) {
		    swap(this, i, i + 3);
		    swap(this, i + 1, i + 2);
		  }
		  return this
		};

		Buffer.prototype.swap64 = function swap64 () {
		  const len = this.length;
		  if (len % 8 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 64-bits')
		  }
		  for (let i = 0; i < len; i += 8) {
		    swap(this, i, i + 7);
		    swap(this, i + 1, i + 6);
		    swap(this, i + 2, i + 5);
		    swap(this, i + 3, i + 4);
		  }
		  return this
		};

		Buffer.prototype.toString = function toString () {
		  const length = this.length;
		  if (length === 0) return ''
		  if (arguments.length === 0) return utf8Slice(this, 0, length)
		  return slowToString.apply(this, arguments)
		};

		Buffer.prototype.toLocaleString = Buffer.prototype.toString;

		Buffer.prototype.equals = function equals (b) {
		  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
		  if (this === b) return true
		  return Buffer.compare(this, b) === 0
		};

		Buffer.prototype.inspect = function inspect () {
		  let str = '';
		  const max = exports.INSPECT_MAX_BYTES;
		  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
		  if (this.length > max) str += ' ... ';
		  return '<Buffer ' + str + '>'
		};
		if (customInspectSymbol) {
		  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
		}

		Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
		  if (isInstance(target, Uint8Array)) {
		    target = Buffer.from(target, target.offset, target.byteLength);
		  }
		  if (!Buffer.isBuffer(target)) {
		    throw new TypeError(
		      'The "target" argument must be one of type Buffer or Uint8Array. ' +
		      'Received type ' + (typeof target)
		    )
		  }

		  if (start === undefined) {
		    start = 0;
		  }
		  if (end === undefined) {
		    end = target ? target.length : 0;
		  }
		  if (thisStart === undefined) {
		    thisStart = 0;
		  }
		  if (thisEnd === undefined) {
		    thisEnd = this.length;
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

		  start >>>= 0;
		  end >>>= 0;
		  thisStart >>>= 0;
		  thisEnd >>>= 0;

		  if (this === target) return 0

		  let x = thisEnd - thisStart;
		  let y = end - start;
		  const len = Math.min(x, y);

		  const thisCopy = this.slice(thisStart, thisEnd);
		  const targetCopy = target.slice(start, end);

		  for (let i = 0; i < len; ++i) {
		    if (thisCopy[i] !== targetCopy[i]) {
		      x = thisCopy[i];
		      y = targetCopy[i];
		      break
		    }
		  }

		  if (x < y) return -1
		  if (y < x) return 1
		  return 0
		};

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
		    encoding = byteOffset;
		    byteOffset = 0;
		  } else if (byteOffset > 0x7fffffff) {
		    byteOffset = 0x7fffffff;
		  } else if (byteOffset < -0x80000000) {
		    byteOffset = -0x80000000;
		  }
		  byteOffset = +byteOffset; // Coerce to Number.
		  if (numberIsNaN(byteOffset)) {
		    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
		    byteOffset = dir ? 0 : (buffer.length - 1);
		  }

		  // Normalize byteOffset: negative offsets start from the end of the buffer
		  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
		  if (byteOffset >= buffer.length) {
		    if (dir) return -1
		    else byteOffset = buffer.length - 1;
		  } else if (byteOffset < 0) {
		    if (dir) byteOffset = 0;
		    else return -1
		  }

		  // Normalize val
		  if (typeof val === 'string') {
		    val = Buffer.from(val, encoding);
		  }

		  // Finally, search either indexOf (if dir is true) or lastIndexOf
		  if (Buffer.isBuffer(val)) {
		    // Special case: looking for empty string/buffer always fails
		    if (val.length === 0) {
		      return -1
		    }
		    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
		  } else if (typeof val === 'number') {
		    val = val & 0xFF; // Search for a byte value [0-255]
		    if (typeof Uint8Array.prototype.indexOf === 'function') {
		      if (dir) {
		        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
		      } else {
		        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
		      }
		    }
		    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
		  }

		  throw new TypeError('val must be string, number or Buffer')
		}

		function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
		  let indexSize = 1;
		  let arrLength = arr.length;
		  let valLength = val.length;

		  if (encoding !== undefined) {
		    encoding = String(encoding).toLowerCase();
		    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
		        encoding === 'utf16le' || encoding === 'utf-16le') {
		      if (arr.length < 2 || val.length < 2) {
		        return -1
		      }
		      indexSize = 2;
		      arrLength /= 2;
		      valLength /= 2;
		      byteOffset /= 2;
		    }
		  }

		  function read (buf, i) {
		    if (indexSize === 1) {
		      return buf[i]
		    } else {
		      return buf.readUInt16BE(i * indexSize)
		    }
		  }

		  let i;
		  if (dir) {
		    let foundIndex = -1;
		    for (i = byteOffset; i < arrLength; i++) {
		      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
		        if (foundIndex === -1) foundIndex = i;
		        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
		      } else {
		        if (foundIndex !== -1) i -= i - foundIndex;
		        foundIndex = -1;
		      }
		    }
		  } else {
		    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
		    for (i = byteOffset; i >= 0; i--) {
		      let found = true;
		      for (let j = 0; j < valLength; j++) {
		        if (read(arr, i + j) !== read(val, j)) {
		          found = false;
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
		};

		Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
		  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
		};

		Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
		  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
		};

		function hexWrite (buf, string, offset, length) {
		  offset = Number(offset) || 0;
		  const remaining = buf.length - offset;
		  if (!length) {
		    length = remaining;
		  } else {
		    length = Number(length);
		    if (length > remaining) {
		      length = remaining;
		    }
		  }

		  const strLen = string.length;

		  if (length > strLen / 2) {
		    length = strLen / 2;
		  }
		  let i;
		  for (i = 0; i < length; ++i) {
		    const parsed = parseInt(string.substr(i * 2, 2), 16);
		    if (numberIsNaN(parsed)) return i
		    buf[offset + i] = parsed;
		  }
		  return i
		}

		function utf8Write (buf, string, offset, length) {
		  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
		}

		function asciiWrite (buf, string, offset, length) {
		  return blitBuffer(asciiToBytes(string), buf, offset, length)
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
		    encoding = 'utf8';
		    length = this.length;
		    offset = 0;
		  // Buffer#write(string, encoding)
		  } else if (length === undefined && typeof offset === 'string') {
		    encoding = offset;
		    length = this.length;
		    offset = 0;
		  // Buffer#write(string, offset[, length][, encoding])
		  } else if (isFinite(offset)) {
		    offset = offset >>> 0;
		    if (isFinite(length)) {
		      length = length >>> 0;
		      if (encoding === undefined) encoding = 'utf8';
		    } else {
		      encoding = length;
		      length = undefined;
		    }
		  } else {
		    throw new Error(
		      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
		    )
		  }

		  const remaining = this.length - offset;
		  if (length === undefined || length > remaining) length = remaining;

		  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
		    throw new RangeError('Attempt to write outside buffer bounds')
		  }

		  if (!encoding) encoding = 'utf8';

		  let loweredCase = false;
		  for (;;) {
		    switch (encoding) {
		      case 'hex':
		        return hexWrite(this, string, offset, length)

		      case 'utf8':
		      case 'utf-8':
		        return utf8Write(this, string, offset, length)

		      case 'ascii':
		      case 'latin1':
		      case 'binary':
		        return asciiWrite(this, string, offset, length)

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
		        encoding = ('' + encoding).toLowerCase();
		        loweredCase = true;
		    }
		  }
		};

		Buffer.prototype.toJSON = function toJSON () {
		  return {
		    type: 'Buffer',
		    data: Array.prototype.slice.call(this._arr || this, 0)
		  }
		};

		function base64Slice (buf, start, end) {
		  if (start === 0 && end === buf.length) {
		    return base64.fromByteArray(buf)
		  } else {
		    return base64.fromByteArray(buf.slice(start, end))
		  }
		}

		function utf8Slice (buf, start, end) {
		  end = Math.min(buf.length, end);
		  const res = [];

		  let i = start;
		  while (i < end) {
		    const firstByte = buf[i];
		    let codePoint = null;
		    let bytesPerSequence = (firstByte > 0xEF)
		      ? 4
		      : (firstByte > 0xDF)
		          ? 3
		          : (firstByte > 0xBF)
		              ? 2
		              : 1;

		    if (i + bytesPerSequence <= end) {
		      let secondByte, thirdByte, fourthByte, tempCodePoint;

		      switch (bytesPerSequence) {
		        case 1:
		          if (firstByte < 0x80) {
		            codePoint = firstByte;
		          }
		          break
		        case 2:
		          secondByte = buf[i + 1];
		          if ((secondByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
		            if (tempCodePoint > 0x7F) {
		              codePoint = tempCodePoint;
		            }
		          }
		          break
		        case 3:
		          secondByte = buf[i + 1];
		          thirdByte = buf[i + 2];
		          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
		            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
		              codePoint = tempCodePoint;
		            }
		          }
		          break
		        case 4:
		          secondByte = buf[i + 1];
		          thirdByte = buf[i + 2];
		          fourthByte = buf[i + 3];
		          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
		            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
		              codePoint = tempCodePoint;
		            }
		          }
		      }
		    }

		    if (codePoint === null) {
		      // we did not generate a valid codePoint so insert a
		      // replacement char (U+FFFD) and advance only 1 byte
		      codePoint = 0xFFFD;
		      bytesPerSequence = 1;
		    } else if (codePoint > 0xFFFF) {
		      // encode to utf16 (surrogate pair dance)
		      codePoint -= 0x10000;
		      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
		      codePoint = 0xDC00 | codePoint & 0x3FF;
		    }

		    res.push(codePoint);
		    i += bytesPerSequence;
		  }

		  return decodeCodePointsArray(res)
		}

		// Based on http://stackoverflow.com/a/22747272/680742, the browser with
		// the lowest limit is Chrome, with 0x10000 args.
		// We go 1 magnitude less, for safety
		const MAX_ARGUMENTS_LENGTH = 0x1000;

		function decodeCodePointsArray (codePoints) {
		  const len = codePoints.length;
		  if (len <= MAX_ARGUMENTS_LENGTH) {
		    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
		  }

		  // Decode in chunks to avoid "call stack size exceeded".
		  let res = '';
		  let i = 0;
		  while (i < len) {
		    res += String.fromCharCode.apply(
		      String,
		      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
		    );
		  }
		  return res
		}

		function asciiSlice (buf, start, end) {
		  let ret = '';
		  end = Math.min(buf.length, end);

		  for (let i = start; i < end; ++i) {
		    ret += String.fromCharCode(buf[i] & 0x7F);
		  }
		  return ret
		}

		function latin1Slice (buf, start, end) {
		  let ret = '';
		  end = Math.min(buf.length, end);

		  for (let i = start; i < end; ++i) {
		    ret += String.fromCharCode(buf[i]);
		  }
		  return ret
		}

		function hexSlice (buf, start, end) {
		  const len = buf.length;

		  if (!start || start < 0) start = 0;
		  if (!end || end < 0 || end > len) end = len;

		  let out = '';
		  for (let i = start; i < end; ++i) {
		    out += hexSliceLookupTable[buf[i]];
		  }
		  return out
		}

		function utf16leSlice (buf, start, end) {
		  const bytes = buf.slice(start, end);
		  let res = '';
		  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
		  for (let i = 0; i < bytes.length - 1; i += 2) {
		    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256));
		  }
		  return res
		}

		Buffer.prototype.slice = function slice (start, end) {
		  const len = this.length;
		  start = ~~start;
		  end = end === undefined ? len : ~~end;

		  if (start < 0) {
		    start += len;
		    if (start < 0) start = 0;
		  } else if (start > len) {
		    start = len;
		  }

		  if (end < 0) {
		    end += len;
		    if (end < 0) end = 0;
		  } else if (end > len) {
		    end = len;
		  }

		  if (end < start) end = start;

		  const newBuf = this.subarray(start, end);
		  // Return an augmented `Uint8Array` instance
		  Object.setPrototypeOf(newBuf, Buffer.prototype);

		  return newBuf
		};

		/*
		 * Need to make sure that buffer isn't trying to write out of bounds.
		 */
		function checkOffset (offset, ext, length) {
		  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
		  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
		}

		Buffer.prototype.readUintLE =
		Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) checkOffset(offset, byteLength, this.length);

		  let val = this[offset];
		  let mul = 1;
		  let i = 0;
		  while (++i < byteLength && (mul *= 0x100)) {
		    val += this[offset + i] * mul;
		  }

		  return val
		};

		Buffer.prototype.readUintBE =
		Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) {
		    checkOffset(offset, byteLength, this.length);
		  }

		  let val = this[offset + --byteLength];
		  let mul = 1;
		  while (byteLength > 0 && (mul *= 0x100)) {
		    val += this[offset + --byteLength] * mul;
		  }

		  return val
		};

		Buffer.prototype.readUint8 =
		Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 1, this.length);
		  return this[offset]
		};

		Buffer.prototype.readUint16LE =
		Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 2, this.length);
		  return this[offset] | (this[offset + 1] << 8)
		};

		Buffer.prototype.readUint16BE =
		Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 2, this.length);
		  return (this[offset] << 8) | this[offset + 1]
		};

		Buffer.prototype.readUint32LE =
		Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);

		  return ((this[offset]) |
		      (this[offset + 1] << 8) |
		      (this[offset + 2] << 16)) +
		      (this[offset + 3] * 0x1000000)
		};

		Buffer.prototype.readUint32BE =
		Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);

		  return (this[offset] * 0x1000000) +
		    ((this[offset + 1] << 16) |
		    (this[offset + 2] << 8) |
		    this[offset + 3])
		};

		Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
		  offset = offset >>> 0;
		  validateNumber(offset, 'offset');
		  const first = this[offset];
		  const last = this[offset + 7];
		  if (first === undefined || last === undefined) {
		    boundsError(offset, this.length - 8);
		  }

		  const lo = first +
		    this[++offset] * 2 ** 8 +
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 24;

		  const hi = this[++offset] +
		    this[++offset] * 2 ** 8 +
		    this[++offset] * 2 ** 16 +
		    last * 2 ** 24;

		  return BigInt(lo) + (BigInt(hi) << BigInt(32))
		});

		Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
		  offset = offset >>> 0;
		  validateNumber(offset, 'offset');
		  const first = this[offset];
		  const last = this[offset + 7];
		  if (first === undefined || last === undefined) {
		    boundsError(offset, this.length - 8);
		  }

		  const hi = first * 2 ** 24 +
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 8 +
		    this[++offset];

		  const lo = this[++offset] * 2 ** 24 +
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 8 +
		    last;

		  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
		});

		Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) checkOffset(offset, byteLength, this.length);

		  let val = this[offset];
		  let mul = 1;
		  let i = 0;
		  while (++i < byteLength && (mul *= 0x100)) {
		    val += this[offset + i] * mul;
		  }
		  mul *= 0x80;

		  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

		  return val
		};

		Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) checkOffset(offset, byteLength, this.length);

		  let i = byteLength;
		  let mul = 1;
		  let val = this[offset + --i];
		  while (i > 0 && (mul *= 0x100)) {
		    val += this[offset + --i] * mul;
		  }
		  mul *= 0x80;

		  if (val >= mul) val -= Math.pow(2, 8 * byteLength);

		  return val
		};

		Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 1, this.length);
		  if (!(this[offset] & 0x80)) return (this[offset])
		  return ((0xff - this[offset] + 1) * -1)
		};

		Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 2, this.length);
		  const val = this[offset] | (this[offset + 1] << 8);
		  return (val & 0x8000) ? val | 0xFFFF0000 : val
		};

		Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 2, this.length);
		  const val = this[offset + 1] | (this[offset] << 8);
		  return (val & 0x8000) ? val | 0xFFFF0000 : val
		};

		Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);

		  return (this[offset]) |
		    (this[offset + 1] << 8) |
		    (this[offset + 2] << 16) |
		    (this[offset + 3] << 24)
		};

		Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);

		  return (this[offset] << 24) |
		    (this[offset + 1] << 16) |
		    (this[offset + 2] << 8) |
		    (this[offset + 3])
		};

		Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
		  offset = offset >>> 0;
		  validateNumber(offset, 'offset');
		  const first = this[offset];
		  const last = this[offset + 7];
		  if (first === undefined || last === undefined) {
		    boundsError(offset, this.length - 8);
		  }

		  const val = this[offset + 4] +
		    this[offset + 5] * 2 ** 8 +
		    this[offset + 6] * 2 ** 16 +
		    (last << 24); // Overflow

		  return (BigInt(val) << BigInt(32)) +
		    BigInt(first +
		    this[++offset] * 2 ** 8 +
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 24)
		});

		Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
		  offset = offset >>> 0;
		  validateNumber(offset, 'offset');
		  const first = this[offset];
		  const last = this[offset + 7];
		  if (first === undefined || last === undefined) {
		    boundsError(offset, this.length - 8);
		  }

		  const val = (first << 24) + // Overflow
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 8 +
		    this[++offset];

		  return (BigInt(val) << BigInt(32)) +
		    BigInt(this[++offset] * 2 ** 24 +
		    this[++offset] * 2 ** 16 +
		    this[++offset] * 2 ** 8 +
		    last)
		});

		Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);
		  return ieee754.read(this, offset, true, 23, 4)
		};

		Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 4, this.length);
		  return ieee754.read(this, offset, false, 23, 4)
		};

		Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 8, this.length);
		  return ieee754.read(this, offset, true, 52, 8)
		};

		Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
		  offset = offset >>> 0;
		  if (!noAssert) checkOffset(offset, 8, this.length);
		  return ieee754.read(this, offset, false, 52, 8)
		};

		function checkInt (buf, value, offset, ext, max, min) {
		  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
		  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
		  if (offset + ext > buf.length) throw new RangeError('Index out of range')
		}

		Buffer.prototype.writeUintLE =
		Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) {
		    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
		    checkInt(this, value, offset, byteLength, maxBytes, 0);
		  }

		  let mul = 1;
		  let i = 0;
		  this[offset] = value & 0xFF;
		  while (++i < byteLength && (mul *= 0x100)) {
		    this[offset + i] = (value / mul) & 0xFF;
		  }

		  return offset + byteLength
		};

		Buffer.prototype.writeUintBE =
		Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  byteLength = byteLength >>> 0;
		  if (!noAssert) {
		    const maxBytes = Math.pow(2, 8 * byteLength) - 1;
		    checkInt(this, value, offset, byteLength, maxBytes, 0);
		  }

		  let i = byteLength - 1;
		  let mul = 1;
		  this[offset + i] = value & 0xFF;
		  while (--i >= 0 && (mul *= 0x100)) {
		    this[offset + i] = (value / mul) & 0xFF;
		  }

		  return offset + byteLength
		};

		Buffer.prototype.writeUint8 =
		Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
		  this[offset] = (value & 0xff);
		  return offset + 1
		};

		Buffer.prototype.writeUint16LE =
		Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
		  this[offset] = (value & 0xff);
		  this[offset + 1] = (value >>> 8);
		  return offset + 2
		};

		Buffer.prototype.writeUint16BE =
		Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);
		  this[offset] = (value >>> 8);
		  this[offset + 1] = (value & 0xff);
		  return offset + 2
		};

		Buffer.prototype.writeUint32LE =
		Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
		  this[offset + 3] = (value >>> 24);
		  this[offset + 2] = (value >>> 16);
		  this[offset + 1] = (value >>> 8);
		  this[offset] = (value & 0xff);
		  return offset + 4
		};

		Buffer.prototype.writeUint32BE =
		Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);
		  this[offset] = (value >>> 24);
		  this[offset + 1] = (value >>> 16);
		  this[offset + 2] = (value >>> 8);
		  this[offset + 3] = (value & 0xff);
		  return offset + 4
		};

		function wrtBigUInt64LE (buf, value, offset, min, max) {
		  checkIntBI(value, min, max, buf, offset, 7);

		  let lo = Number(value & BigInt(0xffffffff));
		  buf[offset++] = lo;
		  lo = lo >> 8;
		  buf[offset++] = lo;
		  lo = lo >> 8;
		  buf[offset++] = lo;
		  lo = lo >> 8;
		  buf[offset++] = lo;
		  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
		  buf[offset++] = hi;
		  hi = hi >> 8;
		  buf[offset++] = hi;
		  hi = hi >> 8;
		  buf[offset++] = hi;
		  hi = hi >> 8;
		  buf[offset++] = hi;
		  return offset
		}

		function wrtBigUInt64BE (buf, value, offset, min, max) {
		  checkIntBI(value, min, max, buf, offset, 7);

		  let lo = Number(value & BigInt(0xffffffff));
		  buf[offset + 7] = lo;
		  lo = lo >> 8;
		  buf[offset + 6] = lo;
		  lo = lo >> 8;
		  buf[offset + 5] = lo;
		  lo = lo >> 8;
		  buf[offset + 4] = lo;
		  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
		  buf[offset + 3] = hi;
		  hi = hi >> 8;
		  buf[offset + 2] = hi;
		  hi = hi >> 8;
		  buf[offset + 1] = hi;
		  hi = hi >> 8;
		  buf[offset] = hi;
		  return offset + 8
		}

		Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
		  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
		});

		Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
		  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
		});

		Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) {
		    const limit = Math.pow(2, (8 * byteLength) - 1);

		    checkInt(this, value, offset, byteLength, limit - 1, -limit);
		  }

		  let i = 0;
		  let mul = 1;
		  let sub = 0;
		  this[offset] = value & 0xFF;
		  while (++i < byteLength && (mul *= 0x100)) {
		    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
		      sub = 1;
		    }
		    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
		  }

		  return offset + byteLength
		};

		Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) {
		    const limit = Math.pow(2, (8 * byteLength) - 1);

		    checkInt(this, value, offset, byteLength, limit - 1, -limit);
		  }

		  let i = byteLength - 1;
		  let mul = 1;
		  let sub = 0;
		  this[offset + i] = value & 0xFF;
		  while (--i >= 0 && (mul *= 0x100)) {
		    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
		      sub = 1;
		    }
		    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
		  }

		  return offset + byteLength
		};

		Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
		  if (value < 0) value = 0xff + value + 1;
		  this[offset] = (value & 0xff);
		  return offset + 1
		};

		Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
		  this[offset] = (value & 0xff);
		  this[offset + 1] = (value >>> 8);
		  return offset + 2
		};

		Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);
		  this[offset] = (value >>> 8);
		  this[offset + 1] = (value & 0xff);
		  return offset + 2
		};

		Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
		  this[offset] = (value & 0xff);
		  this[offset + 1] = (value >>> 8);
		  this[offset + 2] = (value >>> 16);
		  this[offset + 3] = (value >>> 24);
		  return offset + 4
		};

		Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
		  if (value < 0) value = 0xffffffff + value + 1;
		  this[offset] = (value >>> 24);
		  this[offset + 1] = (value >>> 16);
		  this[offset + 2] = (value >>> 8);
		  this[offset + 3] = (value & 0xff);
		  return offset + 4
		};

		Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
		  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
		});

		Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
		  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
		});

		function checkIEEE754 (buf, value, offset, ext, max, min) {
		  if (offset + ext > buf.length) throw new RangeError('Index out of range')
		  if (offset < 0) throw new RangeError('Index out of range')
		}

		function writeFloat (buf, value, offset, littleEndian, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) {
		    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
		  }
		  ieee754.write(buf, value, offset, littleEndian, 23, 4);
		  return offset + 4
		}

		Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
		  return writeFloat(this, value, offset, true, noAssert)
		};

		Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
		  return writeFloat(this, value, offset, false, noAssert)
		};

		function writeDouble (buf, value, offset, littleEndian, noAssert) {
		  value = +value;
		  offset = offset >>> 0;
		  if (!noAssert) {
		    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
		  }
		  ieee754.write(buf, value, offset, littleEndian, 52, 8);
		  return offset + 8
		}

		Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
		  return writeDouble(this, value, offset, true, noAssert)
		};

		Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
		  return writeDouble(this, value, offset, false, noAssert)
		};

		// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
		Buffer.prototype.copy = function copy (target, targetStart, start, end) {
		  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
		  if (!start) start = 0;
		  if (!end && end !== 0) end = this.length;
		  if (targetStart >= target.length) targetStart = target.length;
		  if (!targetStart) targetStart = 0;
		  if (end > 0 && end < start) end = start;

		  // Copy 0 bytes; we're done
		  if (end === start) return 0
		  if (target.length === 0 || this.length === 0) return 0

		  // Fatal error conditions
		  if (targetStart < 0) {
		    throw new RangeError('targetStart out of bounds')
		  }
		  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
		  if (end < 0) throw new RangeError('sourceEnd out of bounds')

		  // Are we oob?
		  if (end > this.length) end = this.length;
		  if (target.length - targetStart < end - start) {
		    end = target.length - targetStart + start;
		  }

		  const len = end - start;

		  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
		    // Use built-in when available, missing from IE11
		    this.copyWithin(targetStart, start, end);
		  } else {
		    Uint8Array.prototype.set.call(
		      target,
		      this.subarray(start, end),
		      targetStart
		    );
		  }

		  return len
		};

		// Usage:
		//    buffer.fill(number[, offset[, end]])
		//    buffer.fill(buffer[, offset[, end]])
		//    buffer.fill(string[, offset[, end]][, encoding])
		Buffer.prototype.fill = function fill (val, start, end, encoding) {
		  // Handle string cases:
		  if (typeof val === 'string') {
		    if (typeof start === 'string') {
		      encoding = start;
		      start = 0;
		      end = this.length;
		    } else if (typeof end === 'string') {
		      encoding = end;
		      end = this.length;
		    }
		    if (encoding !== undefined && typeof encoding !== 'string') {
		      throw new TypeError('encoding must be a string')
		    }
		    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
		      throw new TypeError('Unknown encoding: ' + encoding)
		    }
		    if (val.length === 1) {
		      const code = val.charCodeAt(0);
		      if ((encoding === 'utf8' && code < 128) ||
		          encoding === 'latin1') {
		        // Fast path: If `val` fits into a single byte, use that numeric value.
		        val = code;
		      }
		    }
		  } else if (typeof val === 'number') {
		    val = val & 255;
		  } else if (typeof val === 'boolean') {
		    val = Number(val);
		  }

		  // Invalid ranges are not set to a default, so can range check early.
		  if (start < 0 || this.length < start || this.length < end) {
		    throw new RangeError('Out of range index')
		  }

		  if (end <= start) {
		    return this
		  }

		  start = start >>> 0;
		  end = end === undefined ? this.length : end >>> 0;

		  if (!val) val = 0;

		  let i;
		  if (typeof val === 'number') {
		    for (i = start; i < end; ++i) {
		      this[i] = val;
		    }
		  } else {
		    const bytes = Buffer.isBuffer(val)
		      ? val
		      : Buffer.from(val, encoding);
		    const len = bytes.length;
		    if (len === 0) {
		      throw new TypeError('The value "' + val +
		        '" is invalid for argument "value"')
		    }
		    for (i = 0; i < end - start; ++i) {
		      this[i + start] = bytes[i % len];
		    }
		  }

		  return this
		};

		// CUSTOM ERRORS
		// =============

		// Simplified versions from Node, changed for Buffer-only usage
		const errors = {};
		function E (sym, getMessage, Base) {
		  errors[sym] = class NodeError extends Base {
		    constructor () {
		      super();

		      Object.defineProperty(this, 'message', {
		        value: getMessage.apply(this, arguments),
		        writable: true,
		        configurable: true
		      });

		      // Add the error code to the name to include it in the stack trace.
		      this.name = `${this.name} [${sym}]`;
		      // Access the stack to generate the error message including the error code
		      // from the name.
		      this.stack; // eslint-disable-line no-unused-expressions
		      // Reset the name to the actual name.
		      delete this.name;
		    }

		    get code () {
		      return sym
		    }

		    set code (value) {
		      Object.defineProperty(this, 'code', {
		        configurable: true,
		        enumerable: true,
		        value,
		        writable: true
		      });
		    }

		    toString () {
		      return `${this.name} [${sym}]: ${this.message}`
		    }
		  };
		}

		E('ERR_BUFFER_OUT_OF_BOUNDS',
		  function (name) {
		    if (name) {
		      return `${name} is outside of buffer bounds`
		    }

		    return 'Attempt to access memory outside buffer bounds'
		  }, RangeError);
		E('ERR_INVALID_ARG_TYPE',
		  function (name, actual) {
		    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
		  }, TypeError);
		E('ERR_OUT_OF_RANGE',
		  function (str, range, input) {
		    let msg = `The value of "${str}" is out of range.`;
		    let received = input;
		    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
		      received = addNumericalSeparator(String(input));
		    } else if (typeof input === 'bigint') {
		      received = String(input);
		      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
		        received = addNumericalSeparator(received);
		      }
		      received += 'n';
		    }
		    msg += ` It must be ${range}. Received ${received}`;
		    return msg
		  }, RangeError);

		function addNumericalSeparator (val) {
		  let res = '';
		  let i = val.length;
		  const start = val[0] === '-' ? 1 : 0;
		  for (; i >= start + 4; i -= 3) {
		    res = `_${val.slice(i - 3, i)}${res}`;
		  }
		  return `${val.slice(0, i)}${res}`
		}

		// CHECK FUNCTIONS
		// ===============

		function checkBounds (buf, offset, byteLength) {
		  validateNumber(offset, 'offset');
		  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
		    boundsError(offset, buf.length - (byteLength + 1));
		  }
		}

		function checkIntBI (value, min, max, buf, offset, byteLength) {
		  if (value > max || value < min) {
		    const n = typeof min === 'bigint' ? 'n' : '';
		    let range;
		    if (byteLength > 3) {
		      if (min === 0 || min === BigInt(0)) {
		        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`;
		      } else {
		        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
		                `${(byteLength + 1) * 8 - 1}${n}`;
		      }
		    } else {
		      range = `>= ${min}${n} and <= ${max}${n}`;
		    }
		    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
		  }
		  checkBounds(buf, offset, byteLength);
		}

		function validateNumber (value, name) {
		  if (typeof value !== 'number') {
		    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
		  }
		}

		function boundsError (value, length, type) {
		  if (Math.floor(value) !== value) {
		    validateNumber(value, type);
		    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
		  }

		  if (length < 0) {
		    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
		  }

		  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
		                                    `>= ${type ? 1 : 0} and <= ${length}`,
		                                    value)
		}

		// HELPER FUNCTIONS
		// ================

		const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;

		function base64clean (str) {
		  // Node takes equal signs as end of the Base64 encoding
		  str = str.split('=')[0];
		  // Node strips out invalid characters like \n and \t from the string, base64-js does not
		  str = str.trim().replace(INVALID_BASE64_RE, '');
		  // Node converts strings with length < 2 to ''
		  if (str.length < 2) return ''
		  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
		  while (str.length % 4 !== 0) {
		    str = str + '=';
		  }
		  return str
		}

		function utf8ToBytes (string, units) {
		  units = units || Infinity;
		  let codePoint;
		  const length = string.length;
		  let leadSurrogate = null;
		  const bytes = [];

		  for (let i = 0; i < length; ++i) {
		    codePoint = string.charCodeAt(i);

		    // is surrogate component
		    if (codePoint > 0xD7FF && codePoint < 0xE000) {
		      // last char was a lead
		      if (!leadSurrogate) {
		        // no lead yet
		        if (codePoint > 0xDBFF) {
		          // unexpected trail
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
		          continue
		        } else if (i + 1 === length) {
		          // unpaired lead
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
		          continue
		        }

		        // valid lead
		        leadSurrogate = codePoint;

		        continue
		      }

		      // 2 leads in a row
		      if (codePoint < 0xDC00) {
		        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
		        leadSurrogate = codePoint;
		        continue
		      }

		      // valid surrogate pair
		      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
		    } else if (leadSurrogate) {
		      // valid bmp char, but last char was a lead
		      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
		    }

		    leadSurrogate = null;

		    // encode utf8
		    if (codePoint < 0x80) {
		      if ((units -= 1) < 0) break
		      bytes.push(codePoint);
		    } else if (codePoint < 0x800) {
		      if ((units -= 2) < 0) break
		      bytes.push(
		        codePoint >> 0x6 | 0xC0,
		        codePoint & 0x3F | 0x80
		      );
		    } else if (codePoint < 0x10000) {
		      if ((units -= 3) < 0) break
		      bytes.push(
		        codePoint >> 0xC | 0xE0,
		        codePoint >> 0x6 & 0x3F | 0x80,
		        codePoint & 0x3F | 0x80
		      );
		    } else if (codePoint < 0x110000) {
		      if ((units -= 4) < 0) break
		      bytes.push(
		        codePoint >> 0x12 | 0xF0,
		        codePoint >> 0xC & 0x3F | 0x80,
		        codePoint >> 0x6 & 0x3F | 0x80,
		        codePoint & 0x3F | 0x80
		      );
		    } else {
		      throw new Error('Invalid code point')
		    }
		  }

		  return bytes
		}

		function asciiToBytes (str) {
		  const byteArray = [];
		  for (let i = 0; i < str.length; ++i) {
		    // Node's code seems to be doing this and not & 0x7F..
		    byteArray.push(str.charCodeAt(i) & 0xFF);
		  }
		  return byteArray
		}

		function utf16leToBytes (str, units) {
		  let c, hi, lo;
		  const byteArray = [];
		  for (let i = 0; i < str.length; ++i) {
		    if ((units -= 2) < 0) break

		    c = str.charCodeAt(i);
		    hi = c >> 8;
		    lo = c % 256;
		    byteArray.push(lo);
		    byteArray.push(hi);
		  }

		  return byteArray
		}

		function base64ToBytes (str) {
		  return base64.toByteArray(base64clean(str))
		}

		function blitBuffer (src, dst, offset, length) {
		  let i;
		  for (i = 0; i < length; ++i) {
		    if ((i + offset >= dst.length) || (i >= src.length)) break
		    dst[i + offset] = src[i];
		  }
		  return i
		}

		// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
		// the `instanceof` check but they should be treated as of that type.
		// See: https://github.com/feross/buffer/issues/166
		function isInstance (obj, type) {
		  return obj instanceof type ||
		    (obj != null && obj.constructor != null && obj.constructor.name != null &&
		      obj.constructor.name === type.name)
		}
		function numberIsNaN (obj) {
		  // For IE11 support
		  return obj !== obj // eslint-disable-line no-self-compare
		}

		// Create lookup table for `toString('hex')`
		// See: https://github.com/feross/buffer/issues/219
		const hexSliceLookupTable = (function () {
		  const alphabet = '0123456789abcdef';
		  const table = new Array(256);
		  for (let i = 0; i < 16; ++i) {
		    const i16 = i * 16;
		    for (let j = 0; j < 16; ++j) {
		      table[i16 + j] = alphabet[i] + alphabet[j];
		    }
		  }
		  return table
		})();

		// Return not function with Error if BigInt not supported
		function defineBigIntMethod (fn) {
		  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
		}

		function BufferBigIntNotDefined () {
		  throw new Error('BigInt not supported')
		} 
	} (buffer$1));
	return buffer$1;
}

var bufferExports = requireBuffer();
const index = /*@__PURE__*/getDefaultExportFromCjs(bufferExports);

const genericWalletIcon = `data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20version%3D%221.1%22%20id%3D%22Layer_1%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20122.88%20101.33%22%20style%3D%22enable-background%3Anew%200%200%20122.88%20101.33%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cpath%20class%3D%22st0%22%20d%3D%22M90.62%2C33.32h18.4v-2.79c-2.88-10.73-10.2-10.66-19.25-10.57c-1.49%2C0.02-2.84%2C0.03-2.92%2C0.03H18.07%20c-1.58%2C0-2.86-1.28-2.86-2.86c0-1.58%2C1.28-2.86%2C2.86-2.86h68.78c2.03%2C0%2C2.46%2C0%2C2.87-0.01c7.74-0.08%2C14.5-0.15%2C19.3%2C4.38v-1.31%20c0-3.2-1.31-6.1-3.42-8.21c-2.11-2.11-5.02-3.42-8.21-3.42H17.34c-3.2%2C0-6.1%2C1.31-8.21%2C3.42c-2.11%2C2.11-3.42%2C5.02-3.42%2C8.21v66.64%20c0%2C3.2%2C1.31%2C6.1%2C3.42%2C8.21c2.11%2C2.11%2C5.02%2C3.42%2C8.21%2C3.42h80.04c3.2%2C0%2C6.1-1.31%2C8.21-3.42c2.11-2.11%2C3.42-5.02%2C3.42-8.21v-9.46%20h-18.4c-5.55%2C0-10.6-2.27-14.25-5.92c-3.65-3.65-5.92-8.7-5.92-14.25v-0.87c0-5.55%2C2.27-10.6%2C5.92-14.25%20C80.02%2C35.59%2C85.06%2C33.32%2C90.62%2C33.32L90.62%2C33.32z%20M114.73%2C33.43c2.07%2C0.31%2C3.92%2C1.29%2C5.33%2C2.71c1.74%2C1.74%2C2.81%2C4.14%2C2.81%2C6.78%20v21.6c0%2C2.76-1.12%2C5.26-2.93%2C7.07c-1.39%2C1.39-3.2%2C2.38-5.21%2C2.76v9.63c0%2C4.77-1.95%2C9.11-5.09%2C12.25%20c-3.14%2C3.14-7.48%2C5.09-12.25%2C5.09H17.34c-4.77%2C0-9.11-1.95-12.25-5.09C1.95%2C93.1%2C0%2C88.76%2C0%2C83.99V17.34%20c0-4.77%2C1.95-9.11%2C5.09-12.25C8.23%2C1.95%2C12.57%2C0%2C17.34%2C0h80.04c4.77%2C0%2C9.11%2C1.95%2C12.25%2C5.09c3.14%2C3.14%2C5.09%2C7.48%2C5.09%2C12.25V33.43%20L114.73%2C33.43z%20M88.14%2C46.11c4.05%2C0%2C7.33%2C3.28%2C7.33%2C7.33c0%2C4.05-3.28%2C7.33-7.33%2C7.33c-4.05%2C0-7.33-3.28-7.33-7.33%20C80.81%2C49.39%2C84.09%2C46.11%2C88.14%2C46.11L88.14%2C46.11z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E`;
const flintIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkwIiBoZWlnaHQ9IjE5MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIj4KIDxnPgogIDx0aXRsZT5MYXllciAxPC90aXRsZT4KICA8cGF0aCBkPSJtNTYuMDExLDU5LjM4NWw0My40NjIyLC00NC4wODMzYzIuOTcwOCwtMy4yNTM0IDQuMDMxOCwtMi45MzY1IDUuMDQ0OCwwLjc4NzJsMC4zODgsMzEuNDg4MWMtMC4xMDgsNC45MTM2IC0wLjQ2NSw3LjAzMjYgLTEuOTQsOS4wNTI4bC0yNi4zODgxLDI3LjE1ODVjLTMuNDUwNCw0LjI2NjcgLTIuOTc2OSw1Ljk2OTggLTMuMTA0NCw3Ljg3MmMtMC4xMjc2LDEuOTAyMiAzLjM1NzQsNy40NDg0IDkuMzEzMyw3Ljg3MjFjMCwwIDE2LjE1MDUsMC4wMDMzIDE3Ljg1MDIsMGMxLjcsLTAuMDAzNCAyLjg5MSwyLjczNDYgMCw1LjUxMDZsLTM2LjQ3NjksMzYuNjA1Yy00LjUxNDMsNC4yNTIgLTcuMDY4LDQuMjQgLTExLjY0MTYsMi43NTVjLTcuMDE5NiwtMy45MzUgLTcuMTQ1LC03LjU2NyAtNy4zNjM4LC0xMy45MDFsLTAuMDA5MywtMC4yNjlsMCwtNDAuMTQ3MWMtMC4yNDMxLC0xMi43OTgzIDEuNTg2NiwtMTkuNjE4MSAxMC44NjU2LC0zMC43MDA5eiIgZmlsbD0iI0ZGNjEwMCIgaWQ9InN2Z18xIi8+CiAgPHBhdGggZD0ibTEzNC43MSwxMzEuNTlsLTQ0Ljc3ODgsNDQuMDgzYy0zLjA2MTEsMy4yNTQgLTQuMTU0LDIuOTM3IC01LjE5NzYsLTAuNzg3bC0wLjM5OTgsLTMxLjQ4OGMwLjExMDcsLTQuOTEzIC0wLjA3NTMsLTIuOTk4NTcgNi4zNTAyNiwtMTAuOTI0MjRsMjIuODM1OTQsLTI1LjI4Njc2YzMuNTU1LC00LjI2NyAzLjA2NywtNS45NyAzLjE5OSwtNy44NzIyYzAuMTMxLC0xLjkwMjIgLTMuNDU5LC03LjQ0ODQgLTkuNTk2LC03Ljg3MjFjMCwwIC0xNi42Mzk3LC0wLjAwMzMgLTE4LjM5MTMsMGMtMS43NTE1LDAuMDAzNCAtMi45Nzg3LC0yLjczNSAwLC01LjUxMDRsMzcuNTgyMywtMzYuNjA1YzQuNjUxLC00LjI1MjMgNy4yODMsLTQuMjQwNSAxMS45OTUsLTIuNzU1MmM3LjIzMiwzLjkzNSA3LjM2MSw3LjU2NzQgNy41ODcsMTMuOTAxM2wwLjAwOSwwLjI2ODRsMCw0MC4xNDcyYzAuMjUxLDEyLjc5OSAtMS42MzQsMTkuNjE4IC0xMS4xOTUsMzAuNzAxeiIgZmlsbD0iI0ZGNjEwMCIgaWQ9InN2Z18yIi8+CiA8L2c+Cgo8L3N2Zz4=`;
const yoroiIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNjMiIHZpZXdCb3g9IjAgMCA3MiA2MyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExODRfODQyNDApIj4KPHBhdGggZD0iTTU1LjYyNzEgNDguOTEzNkw0OS45MjEgNTIuODcxMkw3LjkwMjMyIDIzLjg2MjNDNy45MDIzMiAyMy44MDU2IDcuOTAyMzIgMjMuNzQ4OCA3Ljg4NTYgMjMuNjkyVjIxLjEwMzdDNy44ODU2IDIwLjI2NDMgNy44ODU2IDE5LjQyNjEgNy44ODU2IDE4LjU4ODlWMTUuOTUzOUw1NS42MjcxIDQ4LjkxMzZaTTQzLjkwMDYgMTEuNDc1M0M0MS4zNjM1IDEzLjIxMTkgMzguODAyOSAxNC45MTUyIDM2LjI2NTggMTYuNjUxOUMzNi4xMzk2IDE2Ljc2NjYgMzUuOTc1MSAxNi44MzAyIDM1LjgwNDQgMTYuODMwMkMzNS42MzM4IDE2LjgzMDIgMzUuNDY5MyAxNi43NjY2IDM1LjM0MzEgMTYuNjUxOUMzMi4yMDc2IDE0LjQ3MSAyOS4wNTU0IDEyLjMxMDIgMjUuOTE2NSAxMC4xNDYxQzIyLjYxMzkgNy44NTUwMyAxOS4zMTM0IDUuNTU3MyAxNi4wMTUyIDMuMjUyODlMMTEuMzMyIDBIMEMwLjYwMTY5OSAwLjQyMDgwNSAxLjA5NjQzIDAuNzc0ODE2IDEuNTk0NSAxLjExODgxTDEwLjQ3NjMgNy4yNzA1OEMxMy40MDQ1IDkuMzA1NTkgMTYuMzMxNyAxMS4zNDA2IDE5LjI1NzcgMTMuMzc1NkMyMi4wMTIyIDE1LjI4OTMgMjQuNzU5OSAxNy4yMTI5IDI3LjUxNzcgMTkuMTIzM0MzMC4xMzUxIDIwLjkzNjcgMzIuNzU5MiAyMi43MzAyIDM1LjM3NjYgMjQuNTQ3QzM1LjQ4MjMgMjQuNjQyNyAzNS42MTk5IDI0LjY5NTggMzUuNzYyNyAyNC42OTU4QzM1LjkwNTQgMjQuNjk1OCAzNi4wNDMgMjQuNjQyNyAzNi4xNDg4IDI0LjU0N0MzOC4yNjE0IDIzLjEwMDkgNDAuMzk3NCAyMS42NzgyIDQyLjUgMjAuMjMyMUM0Ny43MzI2IDE2LjY0OTYgNTIuOTYwNyAxMy4wNjE3IDU4LjE4NDMgOS40NjgxMkw2OS42MDMyIDEuNjY5ODZDNzAuMzkyMSAxLjEzMjE3IDcxLjE3NzcgMC41ODQ0NTIgNzIgMEg2MC42MzQ2QzU1LjA1NDQgMy44MjI4NyA0OS40NzY0IDcuNjQ3OTcgNDMuOTAwNiAxMS40NzUzWk03Ljk0NTc3IDM1LjI0NzRDNy45MjA5NyAzNS4yOTU1IDcuOTAwODIgMzUuMzQ1OCA3Ljg4NTYgMzUuMzk3N1Y0MC4xNTM1QzcuODg1NiA0MS4xMDIgNy44ODU2IDQyLjA1MDUgNy44ODU2IDQyLjk5NTZDNy44ODgxNCA0My4wNTMzIDcuOTAxNzYgNDMuMTEgNy45MjU3MiA0My4xNjI2TDM1Ljk3MTYgNjIuNTMzSDM1Ljk5ODNMNDEuNzA0NCA1OC41Nzg4TDcuOTQ1NzcgMzUuMjQ3NFpNNjMuOTc0IDE1Ljk3MDZMNDMuMTAxNyAzMC4zOTE1QzQzLjE2NzYgMzAuNDgwNCA0My4yNDE1IDMwLjU2MzEgNDMuMzIyMyAzMC42Mzg2QzQ1LjA4NzMgMzEuODg3NyA0Ni44NTM0IDMzLjEzMTIgNDguNjIwNiAzNC4zNjkxQzQ4LjY3ODkgMzQuNDAwNCA0OC43NDU3IDM0LjQxMjEgNDguODExMiAzNC40MDI1TDYzLjkyMzkgMjMuOTQ5MkM2My45NDY2IDIzLjkwNDggNjMuOTYzNCAyMy44NTc2IDYzLjk3NCAyMy44MDg5VjE1Ljk3MDZaTTYzLjk5MDcgMzUuNTUxNEM2MS42MjA3IDM3LjE4NDUgNTkuMzM0MiAzOC43NjQyIDU3LjAyMSA0MC4zNjM5TDYyLjQ0MyA0NC4yMDQ2TDYzLjk5MDcgNDMuMTMyNVYzNS41NTE0WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyXzExODRfODQyNDApIi8+CjwvZz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xMTg0Xzg0MjQwIiB4MT0iOS4xNTU4NiIgeTE9IjQ0LjM4NDkiIHgyPSI2Mi43NDE3IiB5Mj0iLTkuMjQ5ODQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFBNDRCNyIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0NzYwRkYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTg0Xzg0MjQwIj4KPHJlY3Qgd2lkdGg9IjcyIiBoZWlnaHQ9IjYyLjUyNjMiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==`;
const eternlIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZmU4ODM0My1iMjExLTQ2YWEtYmE3MS0xZWFiZmZkNWZjMzEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NURCQTYwMDhBMTI1MTFFQzhBMjdGRTQzMjI4NjJBRDIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NURCQTYwMDdBMTI1MTFFQzhBMjdGRTQzMjI4NjJBRDIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YzY1MGU0NC04MzE3LTQxMjMtOGFlNy03ZWQyZTVlYmVhMTciIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo0N2NhMTg2Yy04YThlLThkNDYtYWE3OS0zODY4MWRiMTljMTUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4LskKgAABHJElEQVR42ux9CbxkZXFv1em+yywMAzPDMmzDiDI4g6I4bApIBCGCqCDxGY0mEJe4+zSJCb+8aHwvap4kLsS8GFGjJBFwixBEgqjINogg6gCOwwz7MMy+z723+9Q7+/m++uo73ffePkPfoWp+Pd19+vTpc7tP/etfy1eFRAQqKirPTgn0K1BRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUVEAUFFRUQBQUVFRAFBRUUmk2a8nRkTJrfbPaYcQjo4BjbXKL2XWDMAgUJDcOyRMf2iAsZ1bgcJ2+qM2BiAYGARsNKJnWL+lDQIFgK5/sTCE8847D1avXl0PsETK3t49CogIg3P3hX0WHTF/3+OOOnq/pccsaUyf8dx9jn3O/Mb0afMohFkIOEzRfkAYXUOYXCz5vbkt3R4AFZgRPSd7//h1+zhB+V6yt6X7BOk9lcfNt8cbKMMmpPQCj2+YXeyYYSey7eI24X2djuH9LH4c8/z4PsbnAwjnKH0O2ufgPWb5fDR6tD16vGHLqtVP7d68YcWmFT97cNvjK5dvfujXj+zasCYMx0ahEYFBMDicXBO9lviY1113HSxcuLDvdA33hJWdCAAcddRRtQBAIvvPHD7wlUtPPPCVLzlz9tJFZ8xYeMji5vSZs3PFC9ttSL8WQyG5gpKhoNb2IP7F2eu5IucgkW1z9gmKffLtxWMyQcbcL1WAQkmJKWXIlFhS+KrtJkgIz00F9L3H+Xzwg44ILFX789c82xP4bJa2vj3S2rXr6cd+u/G399z29C9+euMTt197y8hTqzbWdU3ff//9cMwxxygAdAsAixcvhgcffLCXMAwHv2rp8xe89Zw3HXDm0guG95uzKL4c2tCCkCKFD6FUZrKteqJsiIbSGcoY74uCcoO9vwUQGdDY2wwwsZ4bQEAGABjMACei2NQlMFQ97/CaY/k9rKPTvlVKXck6PPtllwPErDzyBJL70W1ja9bcfeN1D93wr197ctkNt47t3NZT+r98+XJYtGiRugB7HuIQDr3wpScd/aGLPjjvpBeeH/0cw62IFbbC7ZYyxvc5uyxZJhZXXPwqYaqKJWaSsXP6ANM9snuwnpH1CdlrlH8uMV/UOBOyaanJgh3C6sPzbnGexvE+Yq+TS88t5QNhf5AVF6VzoA5uQhfKbwJQGIN+K9veGDj48NPOfdvhp577tq2PrrrlgW9+7vMrr//Kt8Z2bqW9WT326gDXIa85cfFZt//DVade87Hb5p205PdatGu4Fe4sAkGYmQ0EcpxR9F7R9jaUrlLxlu/PP4vkKxaZxguuKU3WXfVc2gjdKz0yBUT/V1Ue19xfsuAd3lMFCtDB8vv+zogEwthOgNYugH3mLzzt5A9/5przr7j3lmMueP85iIECwFSSGQsOmHbK1R/52Gnf/eiyuSctjhU/aIe7ITXdYamESM4VjUnQuNyOhtJiGnkrwAHZFYgGbzCvWBRMHzoKJW8rz4uMd5NrWSeq9OTfBYUgHnRSSMmSe3x877FAZhJAnmN0YggCOKFwvHxbezQCg20JELzslD/9zPfPvuymK+cuOvFwBYApIIe+5sSlr7zzslsWXvSK/xXC2Iw27YoDHV5LzO9Nc4Tilee+D+MAAoIT1kZ2hZbvMYAAwYmCIQrsgqCCdYxD+dG1gChYW6AOSs2VqUqZfW6Axx3AThRfekz+czJjJBagkScbkd3HQDAaAcH8pWe86dzLb79zyRs+8kbYy9jA3vPXBAjHX/7Hf/Ly7/6vH007cPZLxmhbZPBda+5c3USGRSfLkoPBBpApcWmLsxhBDDJEHg5KwpXJwaEDW0CBtkq61IVb0Clu0NEF8LgESBVK76P0JHwlIO8HLlaKsQb0xCK834Xx06DATFo7kwvs4JPe94l/P+fvbvrc0D5zBhUA+kiG5szEV9z00c8ufvfrvtCGkRkhjdrKiqZVZRY6+9VRUvQkwC9wUCwtuesGcDABT2yAawYJ12sVX6fulZYfhcap4FJQrttTI9n6Y8VnYKdgIdlhEeQxCPDHB9DjRqBLAK1tcbAwZgOHnXTGe1/19z++bu7zTpinANAHMjhnn2lnXH/pVYeesfR9Y7Az+r3aHmofuj66+Tq6Spr6/JSBgAEOZF+l6OOSwFmB7VRbbILsOEK1+cx2QY/edlBw7KT8XcQJxOBflfX3kB8pGAhSMZLvHCvuHevOY6rU5XdgAM7odoA5z1ty1tmfvP6HEQg8RwHgmQz27Tc87Ywb/vIbB5yw5KJR2MoCfCD64og+d4AKhULB57dNh/m+UIgrmNSd+//kUH0UzCQS2G5GEQqgag0nPx3ALpQdPffW11qhNOiz/kLFn4SXlVF/cmMRnaoHveTLk33wuQHme1o7AKbNnnPs2Z+4/vsRCBylAPAMyNx9Ibj5stbXPvjc+87fBq2sOIYMyxgW9xbdJzcmgBYTsKk7ssCbGzxkyo+Sf+9JjiNZ0X0UEuvoBL08Zh/H4fMLF3dHVgCdK/Sq3AisCAZKgFBZJATy1+ml/R6f3xd/AMG14Mdt7U5A4Lln/+31sTtwsALAHpZv/i3+/QlLW68/+9ffgDc9fiWMwGCmLiH48u5F3h9LJpDfSHAZXIYgZw5QMDXIPtNKGxIJfjQDgipN6cZ3H494qHBVDr1jloA8qcAuAEHwlhxWYhKzqmxBVTARfV8vgVzLwI4Xg8D02XOOfuXfXP/NGXMPm64AsIfk8g/iO04/Fd8P29KKnQsf+Ra8+fGvRyAwlDGBsLTqCCLd56m+bB+SXAEUg3cGX2QKjkVg0WABxpVcvC5xYMnkFlWGncLsdnEQdop+ux4Dif58FcD4fHSfla7wscHHKHzKCV0eo6o+wK4BIAc4pHM39olBYOYBc075nb+85guNgWEFgLrl1afAi9/95uAfYHt2tSdF3QAXFCAwaJTcUpqeQxKVGYvgYJg/RznfD04akBcHSQBD5nMS4guW1QejArFTVE6g7sje3yUjQLBOH70WT7LyOZhJ/r1kVfkxSA7WgWd9gqPknlw+dxmq0ogokTz2eWJcw/iMOE14yItOfOvJ77z8HVOtanBKne0hc2H4iksbX4pc/mkQYmnyiIPAUOkOYEa5fSCAUpFO6GENIfhKfXl1IBJPKUr7MzeFfPuAkE7sTONpHCDQFWOoqor2WX+PG4CeCr9u0oRVhUEi4+imTqHKJfDEJsxzjrMDL7jwkk8vee2HFikA1CQf/+PGR+bND14EI7mhRoO0BgITCEolJynwJ1H90KDyKU23wAE5aICcWRBMHwrldihe4eCvH0A7g+Bw9gqKDFChOFWU10PHfesAkPwBRqxI81X1FfAt6OHJGZ+rIFp+ELIJ5A8WIshuQL7P6A6YefybPnr5zHlHBAoAPZZzTwqO+aPXNf4sof5FQw7j8sofxyDwsAkCpTLb1R2GVUfJQrPy3A4BQQA5FlAyg1BwK+wrU1b6akuPDpc3XuPLBn3hBqr28bHaG+kIOpLS+VYROtlWny9P1cBWtcgIK+g8dyG86UqBGYStODMw/RUnXnzZmxQAenmS0bf7sT8KPhp9y9OMtHsJArkbkK/jb3AmAFBdHGTECswrglKlxegE8ltgPE5vkG5v8O3263GLseQWaSVm+8Z/WOwzWu9vpPtCvn8jcJ4Xj4OU9WDagyQtU8+f548b2Wvm68Jj5I+FW5C/D8tj5tuCQHiev4d9RrEPluvyi89Hdi5YHpvvw49j3fJ9JX+ePJRfiDFIrovPVYjv4xWFC0+94G/mHvWSfaaCbk2JfgDnvzRYevxxjdfDLha6Lu6NXyUPg0e/VAwCsVx56B/AUAQF6KzIN1bwZ2v+MdKYAIcgQZFIQ9rQolZrlOyGH2i05oq3hVaTjjA5UlDuT0HRyCNt7BFajT3K7UHZZCTZ1ii2g/X+/D2NrKeBJ1QBbuiiKIXIgdS8d0sl5ORJni+JboERvkB7iUUZfoHyMS+SRDJ+D/M44B4LzJ+a7FiH+Z6iSUqEHAPTE3woVvnFVhpCWfmhIhPhTWWybfG5DAzjguNef+nFN33ydZ9VAJikxAbv0jc3/xTCCNNDymA9b5JBZeibDFTI83iBCQJvjkBgLFXd3HugsuFHM3oVo/+3PfHUfZt+sfonT//0V3ePPLV19e51GzfueOipkJNusnAEhfo7m5SS7Y263j4V9X/oO0Z5vaEcxvPl0X31gTnuVaT3KtKBNo6CkKWUj1tRq5i+1pNlzvHFPTgMsxe+cJ+B4RmHHbjktOPmHr309FmHLjyxOQxD8br/fBGn6E5UdBfqFFCMj73wlPM/OO85J1yx7qG7tisATEJOfn7wvJcsCc6H3TnlZ4pO7DrMt4kgwJlACA0cjB4P0NN3/upbK7944z8+8Z07bx3dvL0FKnuFbHzoF/Hdz35z7Re+HefpIxBY/PzXve8PF5x64SXNIdyvtVvOLPgyA91kE+LLb3BGcMTzX/Wu1/3k83d9XWMAk5BLXtX8AxiIOLkZ8ffeCzcnMDiUxfkpOezI05vvvuOST//OTaf8+UWrv3LTj1X5915pj+2Gtb/+6fIfffyiP73hw69Yun7FfVcPTmdWn2cUGDPoZq1DzgIWnPDaPx6aNS/pcakAME4ZGSPYfyYMve5ljTfALo/SdwIFEwgaJQiMwmBEfWbA2jt+9aUbTvzwy1d9+eYf92NzVJX6ZM0vf/TQde8/5Q3Lv/MvH4g8hbao1CAED6ECIIxEU9x1bua8fU859IXnLFYGMAHZPQrwyuPhxH3nNZ4LLY/SA1PyKhDI6wQiEHjHtqtgxZev/+QPz/zY23Y8vG6HqsOzU1ojO+G2z779sz+74mNvHJoJYyh0RUIhXSqtkJRWb0dUs7nwpNefrwAwAYld+HNeAr/rKLMxlKN4brkAHdyEmQBzr/6PK379zi/8RXvnqGqBCvzymk9d88Tdy949MA38lYPkKRiq6IwcZx0OeN4JZw9N3xcobCkAdO2rRS7TnFkIS58XnJ7MdSmUH7qg/h5GED9vImxaj/dccCm8d8eYXvgquaLugps/cdG/7Fy/6UuNpqv84uIg8PdsKdKesRsw56Dj5yw4dn57bEQBoFsZjZRz8eHBQQsPbiyOiJlh6VnVX6e4ABjvjaWJrQ/9A7zv0bVFRYGKSiI71j8Gd37xQ38WNOFxsVKQ+/5CMJCzgzjN2ByEmQcvOv1FYVsZQPcAECHn4gWNY4an4ay0UEWy8MDcAAMgOBjEtyGEu++hb33lerpNL3cVSX5781c2rbnvrssipXX7DFSUDYsrHnOzE12/8448/kUYNBUAuheCJUcEz7dq/k2lB7D9f4IOLkByo09eCZ/Xy1ylSh64/gtfbTTgKcun91h8vg9rD5FWH0aGf7/Djnnh4LSZCgDjkUPnBkfbSi9Ye1PBHZfAYAiR77/2SVh+w7LwTr3EVarkkWXf3bzliaevDRqur8/9fvQFA83HYTx/cHhBY2BIAaBbmTUNYfHhjUNgjFt6gQV4XYKgfN8Awj2/oZt37DbyvSoqkvu5cwusX/nzH8TBQLEPrKD4VWwgDgTuM3fBAdFtugJAlxJRMJg2hHNtROXUnwcEUfb9s6VrN99Ld+nlrdKNrPnVzb8KEMYKug+uZceK5crC+oJ9oo2zFADGIyHOckp6TcUWrT+AGDCMHq/fDA/rpa3Sjezeun5tdNWskwJ8wiS3EhDMbXZAMK4w6EsG0K+LgWJgGrYsv7XyD8oVgfy5xcXSlYO0E+ihJ2mTXtoq3QHAuh3tMdpuxpOw08Qkz4rCrMI8HiU2oAAwHjGtO2bPRSU3fgZrWbCx1yjRUxtI/X+VrmTLkyvC1i4KgyaWS4bBpvnW5ZdvR3fdtcEKUAFgXGKW/RoWHQTr7z1ECRiNAHFyzfNVni2CQaNop4adFF+IAUjAAH168fUxAwBW3MOoPVf04itmTIFA9V5lQtcflhTea/UtKy9Y/n6/9PrcBTCoPyBrBca6AuX7STEBBQCVCSi/qNzEmq16pgZx26QAMFE3wFz661B/0/FigJBLSAKL2FNUMmlLHlSRHLQuHXrGXEVxUhDvKNzPOks97rphdpOXXIBOQ5rIcQEUAMbPADwuQNo5rtotsK7qPXf1zjnx6IMOee1Lz5vz0sWnD83d73kh0SyzAajVILR4nDX/TLY12OsNtr1RbDe3xd9TkZuOA1dZ8ArDclvewBNDsOrb0bPN7JiOnmHJZvoLPRN9nOeGEnUc4SVMBObKRW2iGz9+3nnb1q5a1VMI6GZSe8VglPFOaVIAkACgaPxhBgHBdgdMGOZZgj1k/WcsmLfPcX938Z8dduGpb28EMw4IoZ012m1kjcgzRS4U3lD04nnDeR4m74vuKd/WzBQ/fS3uIFz4qWGpyEFYKrZ1I/aYPc+VPpAAIKwGjcrHHjDo9jUTEKxtmFbbNQaGeltrKw969roFXqVXF2AShNQs/DGbfVpZAXObAARERpFQPTLvjMXPP+0/PnzljAMPftEo7IYx2pIobaKcuVIXrb0NC25YeW7RcyU378MCAILkPixebybMwlTwkCs8VYAAu4+/q5AzgrBkD4XV74Yh5PuZVjwULLswDEQECaZccc/vsB2dbY97uqE52nEiis+DhAoAkwkCVlh6a7oleo5Tn/YfffJBi46/+a//G2Bo/hhsSxUR0lkBmE0qzk0VUT4hCLPZAOl2pHyYaDpRwBouas42zPcrUlRkGRrsENjqON2H7YfuMGVrmSuSXC+PQmNNruCWFQ/9Ft6n/FhzoE0EHJ9S+9ux9z0D6NvlwIXyglDuG1b1BAD5voaf4oiDYOZP/nr9VW98+pr5uxL1hWzScDZx2DSp8bbC9OX7ULF/+ro0nkwaRFpO9rDnFlYoNr+AyTM1hwEGSp1vpQk6HhDwTGUv3xe6/r50juLCnDpTvOQfBiKuDQDGhgCmRAq6vxlAsciHlwHzi9vIDvD4QLkoqOdM7LL3BH9+4MHtF5y34hoYHQ2TuQODOJYqdXHeoelWZgoPBQso6xYyBpAwhWy+FWHGIojZepJCTW7OWrBa0tw8blmRtbZyAoae1tlV2x0G0CkWAC4LkRhAPdBuYauX4mMFm7KyKhoEnAgBk7IAFUQXK6htDS7A0YfhAa87PXg37EjNWNxtOJYEBJIJRO3yIinODTNcyEeXmyAQuwKYJQJzqm/Tf8rvi0OWVyiB3LvOcQE8DS58VtoBBSnAF/qzAtKwT9Hfr1ByHzjUFWhDYCDWDfX3gC929M0UAKov1qK6j//QQvBPAghrQVHv5C3n4GuCGbgfxE3Fk0mUKQjEH/dvORPI/PxU5zF5ns2RLS81EwSymEE+dzCn+sWYczAjU+XzIhaA4NauC8Bg+uXc2otKDkIsoBNohK4rMa5sAFQH/7CTFe7ldVgVa+iSEfSrKzCF6gDYHEA0gnvSiLAcMWoIAsYfd8aLGi9PG5bmG1MQuDACAcyZALYMECgLwhGZm5Pbc2yntB+pGCBaBP/ybfE0YTJdApOvojznXqKoVQrMp6eDS/9FHx4qAn8V9F8a5S3FBMAzrYd6rWDG3+orBcZu4ixgDEdVBjAJAEAhn19oEnXnBvSYIs6dFRyVDCyx3PHAdQcyEMjpfzKLmEoGgMWkQszUN0ysf0r3w4wV2JY/L1NLswpUvMoDgWIU31OzzhUYyb/GHYU0Hw8k+gJ8DogAdJ3yQzPzW6dFxfIr9yo+dWAC/JwVACYBApKCW0yg4hhhLRQsaLfiDi9mnULO4n0g0Bb+DkxdA6OjUWzhY0uPkI8IzzMGgUH3+axudmFWFEVWBeaA5fxBCgAyf99Sfg8QVLkAALLVR8nqc9eiippPnvpjN5+D5Cmf9n33CgATUH4eCHQoPwu5mqBgxhF6fX5hkFXcMMBxmMBbWEwADdcFCyBIo/7tYntRF4BhwhpEECAbCKqDocwCgxzdl6L+Yn98TxlwpdJDddEPCgDg+P1Vy297HAgUv1MOStQZcBUAJqJgkvJb4R8qnSzw9AeoKwATV/aJaxVyaUTn0zYCgykIBJEih1AuAsoVPw75hZg3M00DgUndANlKX97nwUUS/2aHhgqWS5p0K95Cmx10KgXuVARUBQ5VAT8pS1DEAHofACQTDAnkxiAEsks1FZS/zwGAsQArDmD4AdavIAQCawOAPEYRgFzxkvnvVmDwLYk7kIBARv0DShWfCA1rX8YDcheg0BgjIJhnAhJQYIyIhICcqIihf+gFmBRf2heq1wF0dAFAiAcIgMAVS3oNe3/9oRUjqWAKXsaF6gJMjoR5LWyH9ammT041LQhKXAAhBpBn82JgCPLMBWcCKQiQGbsvaH+7eJ7Q/kjr0hLgsrowzwKYpcCcEGFVgIoHBIW6f+zC90dP5V/VYiBvHKBTEBDcQZxIbhy4p1cf2ezCqkOjigxC3ezzWZcFEMOt+c8RgLgOs9itprUAufUPhcS7me5PACFe0ddOmAAYIBAHBtMLuG3gVsoC0nhAHgBsQ14XQFn5MAqZAdHceMppuR/vVPyFntiAtEgIPC7AeNJ/AOJkXrHnPmMwNbkAYgyA11MQ+VOtVUFZBYBuXQAeE3BTAf5vuM6abO4CkHHVB9nzfE1tmIEAth13IMkOZNWBWBQFtYsYQM4C0vsIMLKYgOkSoPTHefrZcYUHvhyY/JRfjA+AAAw5CII8Y89H/TH0BNbIHwSs6/dFYv6UJ+Dni/5bzqoGASfhAoToln0RVjtdeyIIGLIsAHoYQJABRNyZKEhftLMDWZ1ApNxpPCAvBmobawFS+k/F4qHS98dsdWBeIixasYooPF+Y45T15v0FeD+AUM4sSCXBvgKfbst/oSoIiLXVBJRBQF9wWSCdKHQKwj4Ggf5fDmzN+qPuOgGZ+9WaBmTFSoUWYdl+J8y2JXocFObXBIGBWPkhDgyG0X2QFv/mCk3ZKkNKtyWYkh82CxZizkTQrdorbsZaqeT0srBDkD03t1nlweZz4zGw/cxvGJFd/Px18x5ZDACZ0pkKjnYxUP73BinK9pz+WzESmSXIbECDgDXFACoDPqajZvj95P8Be3J+YcCuhNzig10cVABBUPDdC1anIPD1Q98KgzQWaXe0E2VRf2rauf4CEIqnxTonys6FaCAJJ/BbTCbAfBxmj8Ns7UC+rVyZXBb5hHY2gFgsgMxUmXBvKlRx/mDsx6k8sNQe2ZaVuHuTNwSpKQvg7f1fsQqQQB4ZrgAwkRgAYZfRFON1cclwzUFARNvkmnGAXPkxA4cACvN1wSPfihSPwnf9yaPn7X5ozWpidpKs9ELyPL0MCa3XyJih0LHPHvgDbJXboeI77ab7DVXnc7C790gVYLR13erVvXYAkKC6xgL8wUFtCtqLGABUFdqwij9ftL+uxhGJ/8/rAIRERRLAN7g5hGWKENNf4MJHvw0fuRcefHoNrAaVfrnysLL193iMiwYBJ8sAusil8F1MX7EuFyDMqb1wC/njTOkLJz5zB8KUwg8MtIdU9foIBCQGQNW2CEi4FNUF6EEMoJtij0TRUM7J1xEElLIA3A0Q2+hkDm5Q8knK6v51gknfEQHvT4KdVgNqHUAPvn9ig0GoytwHYM9iYpDcc4AKyjgA8XC7BwByxS8mHWXgEari9yEDpY7LjrtY+WeUZOtw0AkxAJCW+zptgit8AKixFNisBESjDjf0AEG+PsAAg3Ze/KPSZy4AWOushFWB2AXdN6faKQCMOwYAHUqBO8QBwFDMXkvhAoDQCC+wC9UDgx2QMbWjKPsFI9ah0j/XHsgDQM16hS6OlV0eOh14QgzA8uuryn6xdAFMixzUtCKQghIEkCk4L7LngUIzEV6Z6VB5BhkAYtV1Q35W4HEV1AWYUAwA+CQgZFUhVeCANRcCpd17rEpAq0SOSgYALE4QlEt6dYR53/KA6gU/Eu3ny1TsFs4KAOOi2FYa0Fj1R8KMAJOTmY5biDVlAaLzaQdlxR/xsTdGHMCKDeTnGKbspFjboCygL2MAZJcidzMx2QIN0rkAk2MAJFWT+4MuFi1D9O/XkxhA5gIAW5ViDSgxgcFgCgGWdbQhKgPo5zgAu97EMt9uXAEFgPH+AGYMwAO5vtRg3W2ZilJgabZW/LzBWuQKtQC5iVEG0LcMYELVftLQFQWAiSgYT+Oh7GtxCObBmdqCgEYloLVKxVwml8cBAJyG8/n7SBlAf1LQzsqOXYKJAsBEGQAF1dpLbGkY/5GMAb09jwEUdQDGyiNf61oSWt7GMYFG5k4oA+i364+sFYuS4aEur2OtBJxMDKACZ/M5ew4IkAsktcQAAmvKl+MkogcUij5aWRVhkk1Qnesn098xgEcdqINRANTPbQGmYE9A4xcgIz7giwXUtRaAzEIgsF0A81xEYAjsfSlUBtBn7NMq65jkcYz5rQoA4wMAqJgMhP7psMiZRB2VgIGfAQC4LoHFAIx9A+gAdCrPiOQzWSoi/d27suoCTAwAeJVcp9HQaNBzk4fVEgNgLoAXBDzbi/6GGZioC9B3boCJ35R7br7V6ZIRItA6gEkrWTAOy0h5wRC4Y8VrywIwa5/15quuEjHYQN52S12A/nMDwD8duOP1NEUAvc8rAYNxNATJfes99GNIDKBrTsjcmpB6f45BEFSRkr1OX6nHfQHNvocVOO7gunRZ9rEb0OdZABhHkQxWL9yooxS4qAScqBXI2vC2e5srwkj7Lz7/uuv2n3/kkaPZKRZYKhRXer+ebssTPAWawiA3mKxL7VTcxX9fSHT1l887b/OGVat6fPWVoRsEb+//4qcUxlX0O6+bwi3BKltJ2qsCw5omA7UD+9hUoR0kxTjyK7i3DCA+8pHBokUHDB555I6B6DSjWxj90mGD9TExsNXKuErzWKr+HOysrBOKcXqnb3IAiC7k5lBPW6qhOYIRWW+ATmDPC9A0BjBBBSuuykCwHdjZ4ubrAWprCpoVAjlaIQUuzawFM8Eh9DgLQDC8c9PIwMYjoRmrRXyLQIAa6S35OrOblW1FgRH4mjJ1ARKiWR0P2UFGpVGYCZX0U4k4QNjjVE82cMnJ4k7ElaD+ZQL9nwWwOCtOgGrXVGZrpQGZdnCNIEGbiqWiQc9dgFiGaTtMGwthJDrHZBxBO7o1MyYQ+NmABQbZqSPaMVX+tSJ3KaSyBnNsA8lAUhku8bTfrmU8ePrbUKXhqAoCyORUC4HG74Vli4GAmaSuQaDG1YDEgoCOkoNf6U1tS2IAvT/HQRqB4XAnDIXD0Sc1UyvUjodoZCAQGrEBxgQc7JWWZUjaaIIEmQvqyz8/L3vAamWx67o6eBl1pNk6NgThGEUlUwFjG2kh0EQtLKTK38CKRp/YGUQm7IB2Oj8PAJDwuea98zgDgB4biCaNRsx/FwzFY8hbMyBedBBf0G1zgllQZjPBAwTI7w0sQ+FPdpiBMCDDXDsl/qxgjw1ztI2Nh8R6pgOTZNShAzChJ5agMYBJMwDm+3t/GcEk1VFqm5vOUHBbzHmExKJsxM1qDQwgxk1qQzMcjV1/aEcmn1rDmZYbAJC5Acl96LoE3C2wXAG045jE+uSRQNqIRe9Fqg8dhjoJ47qpBh+brwVA+eMLkCPJFZgCMoW7AkOHHLyxEqOOSjteCmwqPHFAYFbfAoMg7QzcyysmWX0cAQC0YCC2+tEjiseKt4ZsAKUsKEhld/N8bVWxEBPKmaY5CIA5rgFL2u+4BwTVlXNY7TYjya4BshU2NTEAMXjsDDbtVCikDGAyQUBgDIBdIpUdgUwGUFMa0KwDcAAAXX+fOAhkprYGBhCPEW9QK7oRNHEUwkjT49nD1B60qGmY9S6JYwJJliD7usI89ZUPOhbiA4X1F8IzKGQT3Il+tlvQTcxWigj1WsGKCcvQwZp3k73t81Rgn7sAQXWOyZdTCj1OaS/PzZwMBNzCg+zrh8Z9sT3IAKDHDIDChAU0knhAK/pKxlIAiM65xX72vIKaoGQCpq9dsAEWC+DW31R6YiO+OWCTp0iGiPn/5BI6B/vrUrAuyn7RE76ZKsWXU2g6MP92q2oBhDx7XUFASdk5G6BAtv6hAQA9h6hI3amdMIBGAgSR2kemnmA0AgGEtBOJ7Zsn65Ky2SVBYH/NSP7AoGXhsQz4keQC8PHaQlhHaunAXQI0K+3qyQJYJbyVhU9VE4Kov8MB/e0CJBdjJ3j1FN14SWOP0MlcDNQt7Q8lAGjUshgormIJEpsf63PkCkT/cjcgxCABgXiPvGFSck+l4hMZvUrQIGTE3ACzAWpgRPjRAwLEPDQSfiI2TYdnEwoPURh53msAyMExQDc1KZJWaXWqxgAm7InZ8QBfnMAXAKyNAaAdA3AsvpBUD9m2YrFTUFMMgKILOGYBlLgC+S1mA2EECBSDADUTlwAMEKAMCPJFlUhsBKKk/Lmyh3YAsAgakpE2RDeQJ1l4Mz4AfF/egLmeQqAygMemAIkJKGlSkL0cWAuBxkexBUpdFRYigf7XWQpcpAFDlv5Dt4zZp/w5A2jX8QVS4gZgYuXzeEAredSIYwHUSvZqhQNJ54ucAQBnAXnZcDbGgHIrbwACSWzAvEeBvWG1/kmr6hzKv6cW2zCr7rgfQjq6I1tQAOjSyvIQM/l8fZDr7usavWUVAnmUX6qsySsILSDofRAQiTI3oJ0GBDFM7mMGQAkDSDgCNJLzaGZQwQYpmQ1VDUpv5f+BKboU9WdBRWSxB2QDoEzLT0JDPWd9UA0xHszWAvCVhyQFBkliYLY7AVoJOBkAQPcLR0FpfCVptQ0HRTfAZ7oHBQNgYJAvJTZdgF5/e4UbED8OMxBoJ3wg+UcZE4iBIDonCptiAKtwBYykRa50oVEXACBYfCN9aFrNnF0E7CfCDjl/8FDuWlgAX8fPipywKjCocwF6pGA8C0Cs2aeP7ls/QjDOJWjjcAFCjwsQevx+Cmz6L1UT9ip8kjEAzFyBILHx6X3OCChhB2U4vx02CsNfEJhQaMuQPQ4k+l8BBKaiI9ipQqzo6yp5DxZghHW4eGxeM8lhZWJByq6WSSsAdBuIqQAAKeIfSi4A1OcCUJULgEL034gHmCtxwt6fY6n8aTYgzJQ/NJhAXB3YiFcImVDBAKmg4EH5HVtswGAJXsWXgoIopPo9QUCpwQgvBKqhFBilKj7uefI0JPIyFWUAk3EBJKWveu55rQ4LIQX3fL6/lP4LjcL7sPfgGSAG0S2x0g3TnUXOce0rvp0FA8kYilGkBDk25xSf3AWPRRERyBF/qgr4QQXVBqEPLAZBDQaIrOm+gsKLsWlyiJj2A5jYDyBkAKoAgDMCMqh6LTEAKGcD+iw/L/nl1n/CfQU7Y2eb2u0wbMWtMqKPweQ007BF9BwouY9H31Bi0sNkrXBcMgQYXxKNNC5grhFgi4UglBcNAcjrnQBYOMcz9Y2vqibPT2+uSAx73Q8QyuXA5qpFRAF8BIZgNS6h/nYIppALgH4llwDCLGOrpUw0sBuXdqL+DgCYz3ubqQiJwg/c+RfnDjQGh1LrnHLv1KBhRvnBuk8eZ4FVQicUiN6v0Q3cUbp3F3EKweJ3HeOwP5U2bl69uoYr0HYBBLfEaVEG4NQMaD+ACUeyqmYDMEX3ggHW2BAEPW6Ah/6bgGFlAnp/ek/sXLMaVCZq/Z1KQG9nIoLKejWE/u7M3OelwEI/gG6svtiRpw4XxQwCVig+L/6x7oN61iqo9ICB2opurlUgwe8XM4FaCDQpAuYqfZUbUAkAvW4L3oX1d6y+BAI6GrxPWQDyfoPSEGipWZXDEDQLMJkgYEVKz9e+lhgBq6UUmK2OqVJ80+8nqQ6AFAT60QSR2+vfKfpjSCDVAWhDkInGAIjTekH5veW/4K8Y7ClABeOMAwRu8K8OhqIyWfXHIgbAO/+YnYz4OgHzEFoH0CMG0EnR+WNePPRMBQEl+i8yAlX+PnQByqbGQvtvqxrQs+y3joXoz64YQFUaUPL3xX1rqgMo+mlT9YIfXyYAPC6OSr/wTzcQyJY2FysUySWuBWlQBjAZF6ATADDFd6pIzF+qxz8DZwB5Ty1vbQCn/kY6kBQB+tEAWS6AcQWhuTBISBM6ll8BYLIuQAXN91UKWmVpQe+ZmNUEJOjODQDuBmAJGir9pfxmuz9i4SQe7Zf6zpqAgAoAE1Qwj0/vbPMpPghN6nvMAKBL5SdfvCBdUaMcoI8ZAAjdi017xN0EAzS0DqAXLkCnaZVVAEF1pgE71QIE5WdX7Ef1rWpXmVQMqlR4sfS3Q/8/K0WolYAT+QHQ7997LT8HiTorAcdTAux5vajHV+kz82MPLPEsC+aVgg4Y6GCQHsYARBDw1P4/UwAQ8o7AjM2ErHkoKgD0qQGypwN7AoHu0mQQW5orAEzUBRBpPXMBqoZx4jPEAKgDA8gacMSd+DQC0JcAgIXlN5VdWhQktQw3YwbKACbpAlT6+FJcQBrUsQcAIGQrGMnXMMT2/Qk1BtB35sf0/5nVdwgpm2ZkNUoFLQSauIIVilZh8b2rAdkM6zoYSij79I7FBxcEkhZcGGgMoL+dAHuQiWDdpcVApitAvJhIAWACVtZr6QWFl8Chhsk7jm8PrAWOx+qn+wVJp77c+pOuBeo357NsC24wAhCAwBsENKYWKQOYFMWWqH3FNistiF0NeOxdDAD8Vt84t7JDT0n94y4+qnp9yEGZYiN5LicOBlWDDBQAxmP9sVrxfasG92gWwIxZgKdJCBRrAPKZPWkQMDU0DQyaQdl717Yk2JmMVDXR7Gzv9gJt7XVfQHM8GLKiHhTKAaTpQdD/Vd597gJA9yzASgs+EwDgWb3IApnJiG6rDXd8gQXBt1588XUjIY3ELkE8vyfMYgT5iM8we0zZ4xDK1yh53nBfKx43svenx6Zse74fFfuh/Tn54BD2OJ80QBhYzcfzaUPE/kYnoeNrDoqud+UE3Nj70qagRP/8/fPO3bB11epeXXd5U9BciZ0FQdznB3ngaT+3A5sCQUD0l/5KV0RlhqAuEIDqSkAwK/5Kv7/oxZ8pzdEzDjySsFEqpvE4RFO5G8W29PVGAQDFtuK5sX8BAmw7BgwUGgUIhBY4CM8LQCgBhLK6BnNosvXzYIfnIHQS9vy8+biydnSAgcbQcA3mRx5awpkWLxM204ZaCNQDBesU9OOVgTwL8IzVAYA1VofYDYz73WE7bdWdK3XSujtXurBgBSGGmbKF2evtDCzahtIH1mOu9ISuohfgYCh5yNhBehy0mANlM4cKq4/Gc7TZgKXEgUzYREvvifPmr8VtwSMSQD1Xf+O6cpaU8BmG7DUAGTgUACai/CT1//PRfw841OKesCuUPDUAAKXiZzki0/qT0QE5qz8xCE++j33lE5tA4+spkl645ZWMxTNKBohSPrs6OUb2R2XTLDArh8Psf8hmDQbZbAFI3l+OFS2Oa/5YBn+OZw3kKTUkOXZhsWhz/b1EEKk+ip0PMTKVmz/3VQlaIKFZgEn8BB3TgFVsAPdADCCwx+IAlFOIWMEPQTlJk2cBTOrsMAXL85EKhrAyvEdiTLE0b/kZkDE1oFT6EiRKYh8Ur9vKnj0mYppinwGRPVOPCvAx8uroj27m7R1Mi1zTcFCygoA+vx49MQIJGBQAxuuBSQE18Fj5DvdUw/Q4pujuOJz8M4NCwQvFJgMECjAIDKAAx00ovwp+fL8La/IIs+S4ZAbWWUEx14PyKFgKAukM7kamsJT1zKKsVJYKjlCMDCoc3/R5OgswBxBWRANlsQ236MSDbCYIYH2ltnwykNgFGIQsDV8r0OdZgKB/AUCKsJvMwBeEy56HUG/PPV4IxD+rqPgLsnHYzPdHBHJdTWabWXiD9TUQO6QLPeqRAQFYc4GIda4hNjfIrIgpE5gWaJCZ2MzeRyYVClPQyN9jFskYhAH5l2EG1szX2RdWU5BNngxEdrsw5+8QgoX9zAAC6HfxuQDc2rKAm5NHqjUDwO+D4jxzeg9mQKxwBQKL8gOLBZRrBMw1A+74eTsUzbcLw+mIFyBnZ4BUKCqHISQGBMTYQ6HgoQUO1o1KlsH/CN5H36zFRxaMMxWxtl+YyhgfkgAE4AIBP29dDjzpIBv6S4B9iWGqchtqiFEAD0vbwTtbwSXLjnagz6wQJHTbH4pqjY7vX/ry6Kw2NN1qi8kaY7vRcg+yo5GRHGfMoHQzsNwurKJJj+EGBU1/26T73EWwfHJDQXv9G6MwHVgqB7bq/pGdE8izQpQBjMfHlnx5QsEV8CSW63MBsCoFSEL03iqasYKBZjiOEx6+YrAMJjqKjxUxJzLpvHFj20tLzt9j5yNMVlBAluUK+G6h9T7TQkqTy01qLTGBWuk1FesCQFoXIICG2xpclwNPNgYwjloAZzBIbaAbBhDschYDsXNIF/rIvj9P75leNVfuTssZyNRx7C4j4AYDS80r039YBMSt9KERlicqI3GY/27GIno7NQg2QwCbCVjYz1bhITt0EQSsw8c2KD5JDUDQDWLyeQHkbutLGOjvIKAYyUfZPSBhLX5dsYDo83aFrUfE+lXDwgMby00sFAdc6dG1/gS+Jqj+K6qbvza1wrklN5SUWLCQWHSCyIEuZMzCfgwsXhBa8QCU/hjJ2lKHgGAtDM8+JyI3wOdjIugyBXUBJhcHABboqwrEgbtAp5fmPzrgsk1r7oCg6bgg5KhE1jnYSPeREOQz1EWg92aT6jIY6EuCy9VnhsIb4Wm3qsB2XJC5CXbe31b2wMoKkL3sidz35/sFBvjwDAFUZAqQREXrfRaAbKW2lF5yE9g5lkXFCgDjdwEcd6Aq5+4px60BfL+3duV3IaRRt+uwSfUN9bAKf8Dy483nZeIMhPz/xAyK5EzY27g15hBmoypa6ULKlFUsYxJiBCSwhtBiII6vz/wgBDfS3uPok52FEBQcwT03ZDGL2paiP2sYgG8FCHhcAGn1INQTCLxh/arf/HzDo9dAYxCc9J0Tj8+bfhi2laR6PDmqT4arIQOBnBDDjqNpjBClOMfKjfhzUChYBdo1BnYFTLFG2gYSBgyWbyPQfSRZsWqqBHQZB7hW3hkDzm/Q36XAfcwAQM75d3IBTCZgtubq8a/QphA+8OBNfwVhuBGMfD6wGv+inBftfD4hAE+42UpusgPXbnfg+8YmEuGCK6ibi2C0n5jfTxwMTM5C/qVPJNUG8FiCoGyemADugUwAV3iUcv8+WO7zLECfpwHRUwAEcs9AJzAkbeud3Lr5sdXvvf+/LobmtDbka+ORW3FJFbzedrFqTgQC5iqAJ9EhlaCbaT2x1hA5/JgrD+zlSsCqCdFwA9CpELRdDP4t8HiAlR4E0ZfeI4U1CKwQiIGSRPfRlzaE/i0G6m8GAADehT7eqUE88l8vAbv8sZ//50fuv+73IWhuDWJ3gNxL3qH0vDDImQ3gqoiJCiYZl0bWEFNaf1yAWCTbCNIRVMQLoKD86DOVHhCwyoPBBQybdXQBAnVZWLKbgnaqXAQhHtDvk4GnDgMQG2uCkBb0jQWrFwQ+9cjtV7/mnitPW7lj/U2NgelxcwpoRowgSG4Yd/xJboFxHxjPk+kA5jZI35e+Hj9D+zmWz8vjZM/BPD5mxzJukJ8TFo/t42Hcnqx4nN8axXlk24G9lt+sv8U4LqSf2cjOoQHSceLt+XlBeoPyHvPnAEVuJb0FAfa+ErBQZJLovpAdEOMDnHD1mfR5KTB0GA5S9foe6AlgZgXW/ea+H216+KwLD1zyyrfOf/Ebl+wz/+SZjeFD2kDT09XzaROP8h6MZTX2a6HlWZfsIHSep2YqJMoacJjPMX0er90PKWsgkiXdKMgajlBWqERFgxEiLJt9EBbNR8ptYdn4w0p7BmUTEGJtwvJuSGSnQIv9KCi+B7uAKrVRVc1CMGsIUosJorLgCHgZMBrgwJYJ8yKgfi4E6u9+ANCFclcqPZ/wVq9sa43AV5/4+Y3xbf7QrIFZzeGDInWZAa7HDSBm4MFxFcpdPS5Bua9VB0ievgEkugsA7mKiTufnnI9Th0gVDog7uBn9XmAH4xnD2Ibtq1f32AC5X5LUeVXoY1AAgfYDmCwDQL/Sd2wK4uknuIfkyZGtY9HtMVCZsoLkafbDSoLFxUJgjxdXAJgQAwAQ6/pJGALqU34duaUyiRgA+NYCmFZe6AgEbD8NAk6EAXDld8p90QUKEPr069gdlXFfe+CP9letDJR6G4ACwMQYQAhur2he2ktY3Tcg29YmRQGVbvU/LNVcWAosdQRyQKDuhiXPGgZgITKv9+dsQVgNGP8QQRMPGpqhvoBKVzLYmBErBnotfUUHIzEdqS7AuCWG4FHX8nvAoGrNQHQkbAzgUTNmz9RLW6Ubmb//sdOGB4JpfLJvNyXA3IXI3t+C9KYAMA4XYLtL/z3KbsUIQFgzADDUaByml7ZKNzLUnLF/dOXM8RX9iFWB1fvsjv7frQAwPhdgozgUpKogyNmW/xwIp8059Di9tFW6kaMOPHVRdO3M8NJ9Dxvw7kOwLfp/mwJAl7J1bBTu27TxyYi7CwwAQGYGPtcgumu34cTZB5/RxECvbpVqhQiasGDuiWe02szKd+HHSz0CmtElt2n7oxs3bntkuwJAlxJH7He0xlbJFr+K/nsGybVDWDhz7tIz5x5+tF7iKlVyxNwTBg6afeRrI5vhbwbazRoAAxR2jmx8ZLS1I1QAGIfcu2nDcu+iHikgKAYLjToAbAy9/YgXvlMvcZUqOWvxh88eCPAYX9txaRWis9zXyAzEDOCpTfcvHxntSwLQnwDQDAL4xab197fa7REnztpxnCzINQOtMXjNwUdf8rL9Dlmgl7mKJPtOn99YfMhZfzXWMqi/RPWltl/gthHL37920wP39q3L048nNdQI4L7N6x99Ysf2lUkcQBr2IaUGuUtgAQXF/t0+/+/Ysz89FDT0aldx5PzjPv6eWUMzT4jXFqJvaS+4DIDPMjSZwWgLRleu+fE9QZ9ec/3JAKLTemr3ztY9m9bfAvkXJ3YIRv/UYGmfiAUsnj3/wmte9Nr3DaOCgEopL33uJaecsejiT4y0BJ/fsObo6fSDZvQ/2z8isrB5+1MPPrHhV6uajSEFgPHIGIVw89rHb0hO0en643ku9Q/g+7RG4dWHHnvZ5UvOvmh60NQrXwWOP+KiY950wuVXR5Z/GvGGnlK3n6pJQQYQDESX7iPr7vrhrpEt7QCbCgDjcgMiy3/tUw/f0hodeTrut9f1KHDLRfAMFxnd1bzkiKX/dtMJv//2BdNmqQY8S2WwOR3ecvIXX/aBM6++caAxfEirLfv3WNXyCzzxAko7Gf1i9Te/08/fQV8DwCOjuzYvW//UtckAjm6UX1w/4GEHYyMDJ8858p+XnXzJP11yyAvnoS4bflbJogPOaFx69u3/88xFb/vBrhE4tB2Cv+8/eIChAgTi6P/TW55e/suHv3MnogLA+E8s+9a+tHr5V5M4QJWyQxexABDWCoyNwgGDM9/5pRdccNcdJ178rosOfP7+s5vDqh17qURWHl4w/9yhd516zUV/etYPbztizgsv2zUK081JyeJQj4rlwehhCIORzbpn1VVfG2ltH8M+LkDreyf4208+dNvfbNlw+2EzZp8CSXlWj0EgjI5J4YITZx/+j1cfd8SlT+7a/F/3blt74y2bH/nl2tGdax/asWH7urEd1oiHqik9Zceo6nZY3u1YdUwAtxWYuw28n1/RCqxqO1b97b7X3ONWfy/Vr1mfgVD5t+Uyc3AeHjTrqOFGY9rco+eefvSCOUtfPn/2wlcHASzZ3QJot8Bp4GENWM1HkYNg5dGI+LO2YLG6j4yFW+5Y8dWv97t+9T0AbB0bpctW3Pvpzxx/1reTpX0StXeeV4EAsG15ufBYvP/8+cP7vm3+tDlvO/fAY8eiX39dtH37SNZ0kiDAsnF1kM/6o3wuTmiN/A74HMBsv6B4T3KPyXspTJ7zseEBxTsUg0YwsEdqYID51KD8echGkNvzCI3P5ucon3PZqLM8Z2tfKI4XsHboQfaVB9lXHCTqRNaxIDlnKJ8DmHMTKf1+2GiRfDYikdGcPO+JaPzN1AgGcKgJ06Ifb2704vRW9GAsxvu229KLDIV3Gnvm21BANBME0pOC4QGAO1d+7yuPb7hnjQJAD+SKh3/9vQ8ddfxdEQs4IYFtR6F9FYISCKALAubIi0TXx6KXxgaii2h+3KS6aSteeoGROQEoVZIA+egLrmB8YlA5UQjz/dEcsxkU48TLx4E9aycILKULLAU13ycpeOCO63C2Bc75F3+Xda7o/K3l3w/Z3ybOCrIGpYb5vsVMxPw74aPX0AE45/UIVneOUrGPybKcll7cooPBBgQr7zCEbJ8YzkZbtOWG+/7P308F3ZoSq2O2t8ba/3fF3ZcWwUCuvNY6AN8aAckFADZq2559m1+Q8dqENsXtpyFpuZ08hvx5vq28hdmt2AbltvJmvy95HLfmTraH2T5hessac1vbKN9mPs/+mdsolG/GfpTfQNq37eyXbIvPNrT3JefWzm75cdJbvl16Dux9RC3jcbodhM8B4zjmfoju/GXP+ENx+k9VGzB0fZjE+v981bc/8+j6ux9TAOihfGH1fTf9fN2j3yiHcYJ/+q+vG7A0V5AN9kyvmIqW2ohObMj1k41wEnp860o/FqF6tDzaPVFBYkSdl68h97rJ5+WTG7kg8xjkjAzz/XXIHjN7DuBMEcqV0022l5OH7G3WcyLnmMiCeEIAxAsC0jBQNFb+bdy24bff+tmHLpsqejVlACC2kh/41Y8/HLbb6wCDcQT/WG0AUzSunMTUw5yKx+kmeGb+2QDhzgIklCcIi8BiXKK+VGU+xUq+krsJGcr7caW1FQkqw5zOSHHPY+tbJ/e47nxCeUoxD3Haii2PN7MsOvkVH6u+WqNWYCiy/tfe+7H3bdz+yDYFgBrk1g1PPnHp8p+8N2UBkvKDf3YADxQSsMsKwTduTiQZ1QHobHun1uRYEVd37LOj5iV0jL+KobzoqSImTxXnRyDNEOQUW7L6IrgQFHQdmJInob1kU+hOELYU3GYAtsUX2IFP4ckduuxrAJKfw/Tokly28trP3/LgF26YSjo15Tpk/N3Ku6/6yVMr/xHi2moHjYVgoOP/+1JiOa1G1y3ILyeSXi8RQhoISh3TWihO+CavLXfm6goMoJr2yxafBD7STaLOVaxcmzifAvKxAGKvMy5W4ZqY3xQKFt4CAedc/ZYeSV7/z2MB8dPBSIs2bN+w7Bt3vufPkziGAkB9Ege2LvrZtR96bPvGH0E2jbdyhiDz18zXSPBEQfJmc8qOKCQZZHUhUUVcuu+yDHT0XZwvSTZbwAqgcJe1VkSxyK9okpMiWnwioziGxQ/ID4XA4gkouQ4kDVbP3AeS3APpRxH+Fg/idqr+i+v9R1u7n/zcf5/7xo07Ht011fRpSvbIWje6a+T1P/vuGzbs3rEcGgOdB4iC2zOALAsvBdXQ3adCeSWfnkQPutsQGXgZi/3UR9TdqAB2iBOg8DnFX0MVfj5WHZMq4wNYOT6XHLrusAopCUhS5CXMKg1cNoAMKCtbgBv7N4Ik7bfjyjvec9HD65etnoq6NGWb5N21+al1r1p29Ws2jOxcmYIACFTf1y5csOQ+5UY/USYjOOjE1NE1LrZFR28AkBxMYBYePdYZ/aEIrI71gZ8uQRW3MHxw/m3mEXjhmBLl5iyAyKnJx8L5JicrYAEDknVOZmwidycK1sCDgp4FQPz1Bia3XV++9R3/47aVV9w+VfVoSnfJvGvzmodeteyq390wsuMBaA75LaZvibBg/R3FFFgxgUMo5Pg5+uxsdXwAK2ICbtwQwV9e3Cky0Kn4Vmh4V5GnqEpickVG8rAAc64eehScuIvAAod59Z6YbSAGAm7coErxc+VvImz/8m3v+L1bf/vF66ayDk35NrkRCKyMQOAVD2/f+FPImy5UTgVG95IgFAly4eMjt9ZFOaoTS7Bfc9OF3ZhViR1Y1yqOR8k9bj36gnjSIckTxTeUl7gSuaVVUjwAxV+GuwmGkpKU8rOVH4wMhZgRsECAspV+1ZmBHJwGGkl52JNX3PaO353qyr9XAEACAlvWrDnptq+cc8eGR74CA9Oy+kw5LkDAM8qmJWeKh05822Pb2GvkJ9Hki2OTl2BXvB+9gUFbSeUDIXqUHD2cgir+Et8UTSJvzNG00k7Un1w2YTENkqy26+MDBzcIXfaD5LIiofIvTvVt2bn29k/deObpt6784q17g+7sNY3y147u3Hnmsn+7+FMrfvIuwMYWKy5AfsvqZgKE+aM8QOerBhTfCxKndZUXAcTVetS1J95tDZ/LKKxtxJbEyWlB5y8hyacHkIt0TB+8IhZApUWXSrfcQB8wC2/7/K6LQg4bkEAgDvbNiBf4rP7Pz/3v75901oq1P1q5t+jNXjUpY2fYgo/85uZ/eu3dV73svi1rfpCygcAf+EPup6NYGCRdnnK032YNjvqQZJOrPs+j9oRd038zMt4ZQuQqg6qch9/BIqdqT3QRCKBTRkCu+qMy9Uc+iy/FMEA8NwkE4oU905oAu8e2PnjlXR959eU/ee37N+x4eOfepDN75aic/1y34tenLPvyOZ9c+eM/3Do2ugLiJh8mEKCryORZK0+eEl3qSO2FYF81W3cUUq5ARKPsBwVK7TmilEUc19RaAnnJlA0UBN1mHKiM6ouxAGMfkn1+GxykCI99PPS4RMhcgnhV57SBeHVnuOm2Vd/82F9f/+KTvv/Ap67bG3Vlr+2KubPdgr9Y8cN//ZfHfv7t9x1+4iV/NP/F75o1POu5GG0PwzbI+XwUqDo4tf8u8ZS1rCvQwArbiuAGAyvyfXItAApBQ3QCAeg5J550YP0z7NfYmnkEu3zZfm/53dlNN8zWIciaoZD9vuTomC3dJeu7yT+7OBKRUbhVvMs6nwAbMBRpxK5We+Mdq7/9tesfuOzzqzYsWwV7sSBR/w0vj5eZLl68GB588MGeHXPhtP1mXHTQkgvffPBxb12yz8GnQdBoxt2A2hQmC40s+o/oVJWDs9a9al27uU4erGMC8MYZ5iKj8jWQ1t8n7D8oehFI5cfeNfdGjwCw1vmD2dzDOidzbX6n76D8OwMryMp7KNgNSgCA9QNwq/mRfX/S+kG+D4j7klDu3QgGEx8//viNuzb88t4nvvfvP/ztP/97pPg9W84bBAEsX74cFi1apADQLQAcc8wxsGLFip4fO54GcNb+R73gwgOXnHfqfgteuWDa/scNNYf3hSwoFZcaj8aWgUBQbnYxeRTW1+zCfC20LlqmlMLxOit44FzsrHORB3Tk8+2s8NnfgR4w9AIl2N8H2WlTkhp8ENiAiG4lZwEoFUARBOlS8mbcVyJu3NFujWzY+fjyhzf+4ua7H//Odb9c84Pbt46uHavjmn7ggQf6EgD61gVoNpsJcvZaYot/w8aVv4xv05qDf7toxrz5J+172HEv2fewFy+cPufYA4ZmPeeQodlzh5rNWdGFF0cRB81qv5IfB65nKdQLJOQS3XLiZFtyYQcGrQ2yIwaGUgQZXTXcjyyegUIA0vlsA4DQjEtgTItTUEPm5mChSGC/JztvHkQySXt5PGMsI5TLNdDw0tGMHBjW29xurook9DR9yvYlK7aTOwDQip7vjm7b1u18aMNYOPro41vuX/7Ipvvu+c2G23/x2OZf/3b77o1UWmv/UqjJMAB1AcYpq1evhpGRkVo/I+7UMxa5AaNhuoJremMAhiLrcPi0/aYPBY19YwCIaz9s9xWdWjwCy7n0+Ofoc6vNsBd7zXL4iSrj956K+hQByBdUhLIznqlQeaMs+ZqRX7PeU9E8tPgbnX1SpCRhOUIap6dOuilmUuJu/7uiI2xbt+PRra1wFHaPbUu6D8WjwAciVlD30I74zzryyCNhcHBQAUBFRaV/JNCvQEVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFRQFARUVFAUBFRUUBQEVFJZH/L8AA77oA1TSEQoUAAAAASUVORK5CYII=`;
const laceIcon = `data:image/svg+xml,%3Csvg width='45' height='45' viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.20581 19.7194C6.97849 20.2972 6.78249 20.8867 6.61867 21.4856C5.89494 24.1253 5.77235 26.8937 6.25994 29.5871C6.28266 29.721 6.30896 29.855 6.33766 29.9877C6.4405 30.4971 6.56725 31.0065 6.71553 31.5052C6.87936 32.06 7.07427 32.6185 7.29789 33.1637C8.7964 36.8437 11.4627 39.9293 14.8864 41.9457C15.6873 42.4187 16.5242 42.8281 17.3892 43.1702C20.6506 44.4602 24.2155 44.7792 27.6541 44.0885C31.0927 43.3979 34.258 41.7272 36.7683 39.2778C38.3477 37.7378 39.6295 35.9197 40.5494 33.9147C40.3927 34.0797 40.2313 34.2435 40.0711 34.4038C37.4141 37.0117 34.0672 38.8061 30.4246 39.5756C30.2596 39.6569 30.0922 39.7311 29.9235 39.8052C27.3481 40.9225 24.5061 41.2775 21.735 40.8279C18.9638 40.3784 16.3798 39.1432 14.2897 37.2689C14.0505 37.0561 13.8182 36.8336 13.5926 36.6017L13.4909 36.4952C11.4347 34.3597 10.0778 31.6485 9.60099 28.7226C9.55794 28.4603 9.52167 28.1964 9.49217 27.9309C9.43497 27.4039 9.40583 26.8742 9.40488 26.3441C9.39359 23.459 10.2366 20.6351 11.8276 18.2282C12.2275 17.62 12.6732 17.0431 13.1609 16.5027C13.3666 16.2743 13.5818 16.0471 13.8066 15.8283C16.4992 13.1837 20.1109 11.6838 23.8848 11.643C23.9434 11.643 24.0115 11.643 24.0785 11.643H24.2339C27.4415 11.6683 30.5515 12.7496 33.0828 14.7198C32.9951 14.3953 32.8959 14.0741 32.7851 13.756C32.6954 13.5049 32.6009 13.2597 32.4969 13.017C31.9158 11.6256 31.0986 10.3452 30.0814 9.23227L30.0228 9.18803C29.1693 8.89153 28.2941 8.66125 27.4052 8.49925C25.1046 8.07597 22.7442 8.09749 20.4516 8.56263C19.3778 8.77909 18.3263 9.09412 17.3103 9.50372C16.8212 9.69983 16.3453 9.91507 15.8957 10.1447C14.904 10.6473 13.9608 11.2406 13.0784 11.9168L12.9994 11.9766C12.4412 12.4128 11.9078 12.8799 11.4019 13.3757C10.2717 14.4804 9.29155 15.7287 8.48651 17.0887C8.02665 17.8674 7.62689 18.6801 7.29071 19.5197L7.28114 19.7182L7.20581 19.7194ZM18.1521 5.9534C17.0596 5.95245 15.9692 6.05172 14.8948 6.24996C14.7537 6.27268 14.6174 6.29899 14.481 6.33008C13.9788 6.43292 13.473 6.56086 12.9719 6.71153C12.6802 6.79644 12.3896 6.89091 12.1014 6.99135C11.8132 7.0918 11.5477 7.19464 11.2739 7.30585C7.5843 8.79264 4.49573 11.4672 2.49676 14.9063C2.24206 15.3392 1.99931 15.7948 1.77929 16.26C1.60231 16.6295 1.43609 17.0061 1.28662 17.3828C-0.413844 21.6522 -0.429267 26.4081 1.24347 30.6884C2.91621 34.9687 6.15224 38.4539 10.2969 40.439L10.5481 40.5585C10.3806 40.3995 10.2144 40.2369 10.053 40.0719C7.44279 37.411 5.64753 34.0595 4.87879 30.4122C4.81063 30.2926 4.72334 30.1001 4.63963 29.9064C4.5069 29.6015 4.38732 29.2906 4.27491 28.9725C3.6319 27.1539 3.35445 25.2262 3.45849 23.3001C3.56253 21.374 4.04602 19.4875 4.88118 17.7487C5.16523 17.1562 5.48717 16.5827 5.84499 16.0316C6.24791 15.4151 6.69723 14.8303 7.18907 14.2821C7.4354 14.0059 7.69011 13.7404 7.95796 13.4857C8.45652 13.0044 8.99012 12.5607 9.55435 12.1584C10.4163 11.5414 11.343 11.0202 12.3178 10.6039C14.603 8.86233 17.2524 7.66007 20.0678 7.08702C21.112 6.8698 22.1722 6.73862 23.2379 6.6948L22.9987 6.62544C21.4217 6.1797 19.7909 5.95356 18.1521 5.9534V5.9534ZM21.2325 37.7616L21.4717 37.8273C24.1094 38.5547 26.8767 38.6805 29.5696 38.1957L29.6437 38.1825C29.7633 38.1598 29.8829 38.1383 30.0025 38.1119C30.4975 38.0127 30.9866 37.8883 31.5056 37.7341C32.0246 37.5798 32.5411 37.404 33.0601 37.196L33.2371 37.4351L33.1295 37.1673C35.3219 36.2836 37.3184 34.976 39.0044 33.3192C40.1359 32.2115 41.1179 30.9609 41.9258 29.5991C42.3923 28.8074 42.7973 27.9811 43.1371 27.1274C44.4487 23.8612 44.7818 20.2839 44.0958 16.8317C43.4098 13.3795 41.7342 10.2015 39.2735 7.68491V7.68491C37.7389 6.11162 35.9283 4.83362 33.9319 3.91457C36.1679 6.04959 37.8668 8.68359 38.8896 11.6011C39.1754 12.4129 39.4091 13.2421 39.5892 14.0836C39.6537 14.2032 39.7386 14.3897 39.8188 14.5751C40.2832 15.6624 40.6144 16.8019 40.8053 17.9688C40.9355 18.7637 41.0011 19.5679 41.0014 20.3735C41.007 23.2506 40.1648 26.0655 38.5799 28.4667C38.1801 29.0749 37.734 29.6514 37.2454 30.191C37.0397 30.4206 36.8245 30.6478 36.5997 30.8666L36.4956 30.9647C35.226 32.1895 33.7442 33.1733 32.1226 33.8681C30.5316 35.063 28.7658 36.0052 26.8874 36.6614C26.0713 36.9493 25.2372 37.1838 24.3906 37.3634C23.3504 37.5813 22.2942 37.7149 21.2325 37.7628V37.7616ZM14.3973 35.2504C15.2548 35.5521 16.1343 35.7867 17.0281 35.9523C19.3407 36.3904 21.7171 36.368 24.0211 35.8866C24.8231 35.719 25.6132 35.4989 26.3864 35.2277C26.659 35.132 26.9281 35.0292 27.1912 34.9228C27.6539 34.7362 28.1047 34.5305 28.534 34.3129C31.6453 32.7525 34.2367 30.3223 35.9934 27.3175C36.2457 26.8918 36.4873 26.4362 36.7109 25.9615C36.8807 25.6027 37.0349 25.2512 37.1808 24.8924L37.2012 24.8362C38.4673 21.6854 38.8136 18.2401 38.1997 14.9003V14.892C38.1793 14.7616 38.153 14.6337 38.1243 14.5045C38.0239 14.0071 37.8959 13.4953 37.7417 12.9799C37.6544 12.6869 37.5623 12.3964 37.4595 12.1058C37.365 11.8403 37.2669 11.5784 37.1605 11.3201C35.6856 7.63287 33.0272 4.54032 29.6031 2.52864C29.1415 2.2548 28.668 2.00369 28.1968 1.77888C27.8488 1.61266 27.4985 1.45601 27.1421 1.31491C22.8673 -0.40841 18.0966 -0.438843 13.8002 1.2298C9.50371 2.89845 6.00412 6.14088 4.01303 10.2977C3.97596 10.3755 3.93889 10.4532 3.90302 10.5369C6.03985 8.29653 8.67675 6.59391 11.598 5.56835C12.404 5.28601 13.2267 5.05359 14.0613 4.8724C14.194 4.79946 14.3937 4.70858 14.597 4.62368C14.8852 4.5041 15.1806 4.38452 15.4807 4.28048C16.2996 3.9932 17.1418 3.77716 17.9979 3.63475C21.6437 3.04462 25.3781 3.84571 28.4611 5.87926C29.0651 6.27329 29.6379 6.71304 30.1747 7.19464C30.4425 7.4338 30.7016 7.68212 30.9519 7.93962C32.1751 9.21219 33.1575 10.6958 33.8517 12.3186C33.9821 12.6247 34.1029 12.9333 34.2105 13.2502C34.498 14.0619 34.7133 14.8974 34.8538 15.747C34.9004 16.0112 34.9351 16.2803 34.965 16.5482C35.2664 19.2655 34.7947 22.0127 33.6042 24.4739C33.0016 25.7325 32.2247 26.8999 31.2963 27.9417C29.9367 29.4529 28.2794 30.6668 26.4284 31.5072C24.5774 32.3476 22.5728 32.7964 20.5401 32.8253C19.8147 32.8353 19.0896 32.7901 18.371 32.6902C16.8586 32.4808 15.388 32.037 14.0123 31.3748C13.077 30.9268 12.1909 30.3826 11.3684 29.7509C11.9155 31.8031 12.9543 33.691 14.3949 35.2516L14.3973 35.2504ZM10.963 27.3582C12.0346 28.4496 13.2893 29.3449 14.67 30.0033C14.9777 30.1507 15.2894 30.2859 15.6051 30.4086C13.3915 28.0523 12.0214 25.0287 11.7092 21.8109C11.0674 23.5868 10.813 25.4794 10.963 27.3617V27.3582ZM28.839 14.0382C31.0416 16.3937 32.4128 19.4053 32.7432 22.6132C33.3848 20.8547 33.6417 18.9789 33.4966 17.1126V17.1066C32.1808 15.7632 30.5926 14.7169 28.839 14.0382V14.0382Z' fill='url(%23paint0_radial_7152_190498)'/%3E%3Cdefs%3E%3CradialGradient id='paint0_radial_7152_190498' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(22.219 22.2222) scale(22.2239)'%3E%3Cstop stop-color='%23FDC300'/%3E%3Cstop offset='0.11' stop-color='%23FDC205'/%3E%3Cstop offset='0.25' stop-color='%23FDBF13'/%3E%3Cstop offset='0.39' stop-color='%23FDB92B'/%3E%3Cstop offset='0.54' stop-color='%23FEB24C'/%3E%3Cstop offset='0.7' stop-color='%23FEA977'/%3E%3Cstop offset='0.86' stop-color='%23FF9DAA'/%3E%3Cstop offset='1' stop-color='%23FF92DE'/%3E%3C/radialGradient%3E%3C/defs%3E%3C/svg%3E%0A`;
const namiIcon = laceIcon;
const peer_connectIcon = `data:image/svg+xml,%3Csvg%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%2033%2033%22%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%20%20%20%20%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22m22%2028h-2v1h2zm4%201v-1h2v1h1v-5h-1v-1h-1v3h-3v1h-1v1h2v-1h1v1h-1v1zm-7%200v-2h-1v1h-2v1zm-6-1h-1v1h3v-1h-1v-1h-1zm-2%201h-7v-7h7zm-6-6v5h5v-5zm4%204h-3v-3h3zm4-8h-2v1h-1v1h1v-1h1v6h2v1h1v-2h-2v-2h1v1h1v-1h1v-1h1v-1h-2v1h-2v-1h2v-1h-2zm8-1v-2h1v1h2v-1h4v1h1v-3h-1v1h-2v-1h2v-1h1v-1h-3v1h-1v-1h-1v1h-1v1h-1v-2h-1v2h-1v-2h-1v1h-2v-1h-1v1h-2v1h-1v2h1v-1h1v2h2v-2h1v-1h1v1h1v2h-2v2h3v1h-1v3h-1v-2h-1v2h-2v2h1v-1h1v2h-2v1h2v-1h1v1h1v-2h1v2h1v-1h1v-1h2v-5h-1v-1h1v1h1v2h2v-2h-1v-1h1v1h1v-2h-1v-1h-1v1h-2v-1h-1v2h-1v-1zm0%203v3h3v-3zm2%201h-1v1h1zm6%200h-1v1h1zm-22-2v-1h-1v2h2v-1zm11%200h-1v1h1zm-13-2v-2h-1v5h1v-2h1v-1zm5%201h-2v1h2zm7-1h-2v2h1v-1h1zm-6%200h-1v1h1zm4-1h-2v1h2zm-4-3v-1h-2v1zm1%203h-1v1h1zm-1-1h-1v1h1zm-4%200h-1v1h1zm-1-1h-1v1h1zm1-1h-1v1h1zm17%200v1h1v-1zm-19%200h-1v1h1zm1-1h-1v1h1zm-1-1h-1v1h1zm14%200v-3h-1v2h-1v1zm-1-4v-2h-4v1h-1v1h-1v1h2v2h-1v1h2v-4h1v-1h1v1zm-5%202h-1v1h1zm4%200h-1v1h1zm4%201v-6h-1v1h-1v1h1v4zm-10%200h-7v-7h7zm18%200h-7v-7h7zm-6-6v5h5v-5zm-18%200v5h5v-5zm12%203h-1v1h1zm10%201h-3v-3h3zm-18%200h-3v-3h3zm9-5h-6v3h1v-2h5zm1%201h-1v1h1zm-12%207v2h1v4h1v-2h1v-1h1v1h1v-2h1v-2z%22%2F%3E%0A%3C%2Fsvg%3E`;
const beginIcon = `data:image/svg+xml,%3Csvg width='27' height='26' viewBox='0 0 27 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M23.7342 14.908C22.3376 16.3087 20.5093 17.1974 18.545 17.4301C18.5664 15.527 18.027 13.6597 16.9941 12.0611C17.5167 12.1382 18.05 12.0935 18.5524 11.9304C19.0548 11.7673 19.5127 11.4903 19.8903 11.121C21.2557 9.78667 21.2371 7.55941 19.8875 6.20976L17.4933 3.81562L21.3072 0L23.7328 2.42594C26.3191 5.01233 26.9648 8.80436 25.6695 11.9932C25.2261 13.0846 24.568 14.0758 23.7342 14.908Z' fill='%233414FC'/%3E%3Cpath d='M8.82646 22.1847L5.01263 26.0004L2.58704 23.5744C0.000656735 20.988 -0.645046 17.196 0.65029 14.0071C1.24517 12.548 2.21944 11.2744 3.47213 10.3185C4.72483 9.3625 6.21037 8.75894 7.77482 8.5703C7.75338 10.4734 8.29275 12.3407 9.32565 13.9392C8.8031 13.8621 8.26979 13.9068 7.76738 14.0699C7.26498 14.233 6.80708 14.5101 6.42946 14.8794C5.06408 16.2137 5.08266 18.4409 6.43232 19.7906L8.82646 22.1847Z' fill='%233414FC'/%3E%3Cpath d='M15.0677 23.5744L12.6418 26.0004L8.82652 22.1847L11.2521 19.7592C11.8954 19.1158 12.2568 18.2433 12.2568 17.3336C12.2568 16.4238 11.8954 15.5513 11.2521 14.908C9.59688 13.2528 8.66699 11.0078 8.66699 8.66696C8.66699 6.32613 9.59688 4.08117 11.2521 2.42594L13.678 0L17.4933 3.81562L15.0677 6.2412C14.4244 6.88452 14.0631 7.75702 14.0631 8.66679C14.0631 9.57655 14.4244 10.449 15.0677 11.0924C16.7229 12.7476 17.6528 14.9926 17.6528 17.3334C17.6528 19.6742 16.7229 21.9192 15.0677 23.5744Z' fill='%233414FC'/%3E%3C/svg%3E%0A`;
const vesprIcon = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCA2NDAgNjQwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJyZ2JhKDksIDE0LCAyMiwgMSkiIHJ4PSIxMDAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJtNDU1LjUxOCAxNzguMDQwOC0xMzUuMjQzNiAxODIuNzV2LS43Mzk2TDE4NC45NjIgMTc3LjE4MDhINzAuOTI2bDM1LjE3NCA0Ny41NThoMzMuOTE4NEwzMjAuMjA1NiA0NjIuMTE2di45NjMybDE4MC4yNTYtMjM3LjQ5NzZINTM0LjM4bDM1LjE3NC00Ny41NDA4SDQ1NS41MTh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgZD0iTTMwMC45OTkgMTAyaC4wMDIiLz48L3N2Zz4=`;

const walletRegistry = [
  {
    key: "nami",
    displayName: "Nami",
    icon: namiIcon,
    chromeExtensionId: "lpfcbjknijpeeillifnkikgncikgfhdo",
    chromeExtensionName: "nami"
  },
  {
    key: "typhoncip30",
    displayName: "Typhon",
    chromeExtensionId: "kfdniefadaanbjodldohaedphafoffoh",
    chromeExtensionName: "typhon-wallet"
  },
  {
    key: "gerowallet",
    displayName: "GeroWallet",
    chromeExtensionId: "bgpipimickeadkjlklgciifhnalhdjhe",
    chromeExtensionName: "gerowallet"
  },
  {
    key: "nufi",
    displayName: "NuFi",
    chromeExtensionId: "gpnihlnnodeiiaakbikldcihojploeca",
    chromeExtensionName: "gerowallet"
  },
  {
    key: "lace",
    displayName: "Lace",
    icon: laceIcon,
    chromeExtensionId: "gafhhkghbfjjkeiendhlofajokpaflmk",
    chromeExtensionName: "lace"
  },
  {
    key: "eternl",
    displayName: "Eternl",
    icon: eternlIcon,
    chromeExtensionId: "kmhcihpebfmpgmihbkipmjlmmioameka",
    chromeExtensionName: "eternl",
    playStoreUrl: "https://play.google.com/store/apps/details?id=io.ccvault.v1.main",
    appStoreUrl: "https://apps.apple.com/de/app/eternl-by-tastenkunst/id1603854385",
    hasCIP158Support: true
  },
  {
    key: "vespr",
    displayName: "Vespr",
    icon: vesprIcon,
    chromeExtensionId: "bedogdpgdnifilpgeianmmdabklhfkcn",
    chromeExtensionName: "vespr",
    playStoreUrl: "https://play.google.com/store/apps/details?id=art.nft_craze.gallery.main&utm_source=vespr_website",
    appStoreUrl: "https://apps.apple.com/us/app/vespr-cardano-wallet/id1565749376",
    hasCIP158Support: true
  },
  {
    key: "begin",
    displayName: "Begin",
    icon: beginIcon,
    chromeExtensionId: "nhbicdelgedinnbcidconlnfeionhbml",
    chromeExtensionName: "begin",
    playStoreUrl: "https://play.google.com/store/apps/details?id=is.begin.app",
    appStoreUrl: "https://apps.apple.com/us/app/begin-bitcoin-cardano-wallet/id1642488837",
    hasCIP158Support: false
  },
  {
    key: "yoroi",
    displayName: "Yoroi",
    icon: yoroiIcon,
    chromeExtensionId: "ffnbelfdoeiohenkjibnmadjiehjhajb",
    chromeExtensionName: "yoroi",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.emurgo",
    appStoreUrl: "https://apps.apple.com/us/app/emurgos-yoroi-cardano-wallet/id1447326389",
    hasCIP158Support: false
  },
  {
    key: "flint",
    displayName: "Flint",
    icon: flintIcon,
    chromeExtensionId: "hnhobjmcibchnmglfbldbfabcgaknlkj",
    chromeExtensionName: "flint-wallet",
    mobileDeepLinkPrefix: "https://flint-wallet.app.link/browse?dappUrl="
  },
  {
    key: "peer-connect",
    displayName: "P2P Wallet",
    icon: peer_connectIcon
  }
];
const getWalletConfig = (key) => walletRegistry.find((w) => w.key === key.toLowerCase());

const isWalletInstalled = (walletName) => {
  const cardano = window.cardano;
  if (typeof cardano === "undefined") {
    return false;
  } else {
    return Object.keys(cardano).includes(walletName);
  }
};
const decodeHexAddress = (hexAddress) => {
  hexAddress = hexAddress.toLowerCase();
  const addressType = hexAddress.charAt(0);
  const networkId = Number(hexAddress.charAt(1));
  const addressBytes = bufferExports.Buffer.from(hexAddress, "hex");
  const words = distExports.bech32.toWords(addressBytes);
  let prefix;
  if (["e", "f"].includes(addressType)) {
    if (networkId === 1 /* MAINNET */) {
      prefix = "stake";
    } else if (networkId === 0 /* TESTNET */) {
      prefix = "stake_test";
    } else {
      throw new TypeError("Unsupported network type");
    }
    return distExports.bech32.encode(prefix, words, 1e3);
  } else {
    if (networkId === 1 /* MAINNET */) {
      prefix = "addr";
    } else if (networkId === 0 /* TESTNET */) {
      prefix = "addr_test";
    } else {
      throw new TypeError("Unsupported network type");
    }
    return distExports.bech32.encode(prefix, words, 1e3);
  }
};
var NetworkId = /* @__PURE__ */ ((NetworkId2) => {
  NetworkId2[NetworkId2["MAINNET"] = 1] = "MAINNET";
  NetworkId2[NetworkId2["TESTNET"] = 0] = "TESTNET";
  return NetworkId2;
})(NetworkId || {});
const mobileWallets = walletRegistry.filter(
  (w) => w.playStoreUrl || w.appStoreUrl || w.mobileDeepLinkPrefix
).map((w) => w.key);
const flintDeepLink = getWalletConfig("flint")?.mobileDeepLinkPrefix ?? "";
const chromeStoreUrl = "https://chrome.google.com/webstore/detail/";
const nativeWallets = walletRegistry.filter((w) => w.playStoreUrl || w.appStoreUrl).reduce((acc, w) => {
  acc[w.key] = {
    playStoreUrl: w.playStoreUrl ?? "",
    appStoreUrl: w.appStoreUrl ?? "",
    walletName: w.displayName,
    hasCIP158Support: w.hasCIP158Support ?? false
  };
  return acc;
}, {});
const chromeWalletExtensions = walletRegistry.filter((w) => w.chromeExtensionId && w.chromeExtensionName).reduce((acc, w) => {
  const key = w.key.toUpperCase().replace("CIP30", "").replace("-", "");
  acc[key] = { id: w.chromeExtensionId, name: w.chromeExtensionName };
  return acc;
}, {});
const generateCip158DeepLink = (pageUrl) => {
  const target = pageUrl ?? window.location.href;
  return `web+cardano://browse/v1?uri=${encodeURIComponent(target)}`;
};
const getWalletIcon = (walletName) => {
  const cardano = window.cardano || {};
  const config = getWalletConfig(walletName);
  if (config?.icon) {
    return config.icon;
  }
  if (cardano[walletName.toLowerCase()]?.icon) {
    return cardano[walletName.toLowerCase()].icon;
  }
  return genericWalletIcon;
};

class Observable {
  constructor(value) {
    this.observers = new Array();
    this.value = value;
  }
  subscribe(subscriber) {
    this.observers.push(subscriber);
  }
  unsubscribe(subscriber) {
    this.observers = this.observers.filter(
      (observer) => observer !== subscriber
    );
  }
  get() {
    return this.value;
  }
  set(value) {
    if (this.value === value) return;
    this.value = value;
    for (const observer of this.observers) {
      observer(this.value);
    }
  }
}

var NetworkType = /* @__PURE__ */ ((NetworkType2) => {
  NetworkType2["MAINNET"] = "mainnet";
  NetworkType2["TESTNET"] = "testnet";
  return NetworkType2;
})(NetworkType || {});
var UnavailableWalletVisibility = /* @__PURE__ */ ((UnavailableWalletVisibility2) => {
  UnavailableWalletVisibility2[UnavailableWalletVisibility2["SHOW_UNAVAILABLE"] = 0] = "SHOW_UNAVAILABLE";
  UnavailableWalletVisibility2[UnavailableWalletVisibility2["HIDE_UNAVAILABLE"] = 1] = "HIDE_UNAVAILABLE";
  UnavailableWalletVisibility2[UnavailableWalletVisibility2["SHOW_UNAVAILABLE_ON_MOBILE"] = 2] = "SHOW_UNAVAILABLE_ON_MOBILE";
  return UnavailableWalletVisibility2;
})(UnavailableWalletVisibility || {});

const formatSupportedWallets = (supportedWallets) => {
  if (supportedWallets.length > 1) {
    return `${supportedWallets.slice(0, -1).join(", ")} or ${supportedWallets.slice(-1)[0]}`;
  } else {
    return supportedWallets[0];
  }
};
const checkIsMobile = () => typeof navigator === "undefined" ? false : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);
const estimateAvailableWallets = (supportedWallets, showUnavailableWallets, alwaysVisibleWallets, installedExtensions) => {
  let availableWallets = [];
  const { HIDE_UNAVAILABLE, SHOW_UNAVAILABLE } = UnavailableWalletVisibility;
  if (showUnavailableWallets === HIDE_UNAVAILABLE) {
    availableWallets = installedExtensions.filter(
      (extension) => supportedWallets.map((supportedExtension) => supportedExtension.toLowerCase()).includes(extension)
    );
  } else if (showUnavailableWallets === SHOW_UNAVAILABLE) {
    availableWallets = supportedWallets;
  } else {
    if (checkIsMobile()) {
      availableWallets = supportedWallets;
    } else {
      availableWallets = installedExtensions.filter(
        (extension) => supportedWallets.map((supportedExtension) => supportedExtension.toLowerCase()).includes(extension)
      );
    }
  }
  availableWallets = Array.from(
    /* @__PURE__ */ new Set([
      ...alwaysVisibleWallets.map((wallet) => wallet.toLowerCase()),
      ...availableWallets
    ])
  );
  return availableWallets;
};
class InjectWalletListener {
  constructor(onChangeCallback) {
    this.interval = 20;
    this.timeoutId = null;
    this.onChangeCallback = onChangeCallback;
    this.wallets = [];
  }
  checkWallets() {
    if (typeof window.cardano === "undefined") {
      if (this.wallets.length > 0) {
        this.wallets = [];
        this.onChangeCallback(this.wallets);
      }
      return;
    }
    const injectedWallets = Object.keys(window.cardano).sort();
    if (JSON.stringify(this.wallets) !== JSON.stringify(injectedWallets)) {
      this.wallets = injectedWallets;
      this.onChangeCallback(this.wallets);
    }
  }
  start() {
    this.timeoutId = setTimeout(() => {
      this.checkWallets();
      if (this.interval < 1e4) {
        this.interval = this.interval * 1.5;
      }
      this.start();
    }, this.interval);
  }
  stop() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}

// This is an unfortunate replacement for @sindresorhus/is that we need to
// re-implement for performance purposes. In particular the is.observable()
// check is expensive, and unnecessary for our purposes. The values returned
// are compatible with @sindresorhus/is, however.

// Types that reach getObjectType() - excludes types with fast-paths above:
// primitives (typeof), Array (isArray), Uint8Array (instanceof), plain Object (constructor)
const objectTypeNames = [
  'Object', // for Object.create(null) and other non-plain objects
  'RegExp',
  'Date',
  'Error',
  'Map',
  'Set',
  'WeakMap',
  'WeakSet',
  'ArrayBuffer',
  'SharedArrayBuffer',
  'DataView',
  'Promise',
  'URL',
  'HTMLElement',
  'Int8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array',
  'BigInt64Array',
  'BigUint64Array',
  'Tagged'
];

/**
 * @param {any} value
 * @returns {string}
 */
function is (value) {
  if (value === null) {
    return 'null'
  }
  if (value === undefined) {
    return 'undefined'
  }
  if (value === true || value === false) {
    return 'boolean'
  }
  const typeOf = typeof value;
  if (typeOf === 'string' || typeOf === 'number' || typeOf === 'bigint' || typeOf === 'symbol') {
    return typeOf
  }
  /* c8 ignore next 3 */
  if (typeOf === 'function') {
    return 'Function'
  }
  if (Array.isArray(value)) {
    return 'Array'
  }
  // Also catches Node.js Buffer which extends Uint8Array
  if (value instanceof Uint8Array) {
    return 'Uint8Array'
  }
  // Fast path for plain objects (most common case after primitives/arrays/bytes)
  if (value.constructor === Object) {
    return 'Object'
  }
  const objectType = getObjectType(value);
  if (objectType) {
    return objectType
  }
  /* c8 ignore next */
  return 'Object'
}

/**
 * @param {any} value
 * @returns {string|undefined}
 */
function getObjectType (value) {
  const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
  if (objectTypeNames.includes(objectTypeName)) {
    return objectTypeName
  }
  /* c8 ignore next */
  return undefined
}

class Type {
  /**
   * @param {number} major
   * @param {string} name
   * @param {boolean} terminal
   */
  constructor (major, name, terminal) {
    this.major = major;
    this.majorEncoded = major << 5;
    this.name = name;
    this.terminal = terminal;
  }

  /* c8 ignore next 3 */
  toString () {
    return `Type[${this.major}].${this.name}`
  }

  /**
   * @param {Type} typ
   * @returns {number}
   */
  compare (typ) {
    /* c8 ignore next 1 */
    return this.major < typ.major ? -1 : this.major > typ.major ? 1 : 0
  }

  /**
   * Check equality between two Type instances. Safe to use across different
   * copies of the Type class (e.g., when bundlers duplicate the module).
   * (major, name) uniquely identifies a Type; terminal is implied by these.
   * @param {Type} a
   * @param {Type} b
   * @returns {boolean}
   */
  static equals (a, b) {
    return a === b || (a.major === b.major && a.name === b.name)
  }
}

// convert to static fields when better supported
Type.uint = new Type(0, 'uint', true);
Type.negint = new Type(1, 'negint', true);
Type.bytes = new Type(2, 'bytes', true);
Type.string = new Type(3, 'string', true);
Type.array = new Type(4, 'array', false);
Type.map = new Type(5, 'map', false);
Type.tag = new Type(6, 'tag', false); // terminal?
Type.float = new Type(7, 'float', true);
Type.false = new Type(7, 'false', true);
Type.true = new Type(7, 'true', true);
Type.null = new Type(7, 'null', true);
Type.undefined = new Type(7, 'undefined', true);
Type.break = new Type(7, 'break', true);
// Type.indefiniteLength = new Type(0, 'indefiniteLength', true)

class Token {
  /**
   * @param {Type} type
   * @param {any} [value]
   * @param {number} [encodedLength]
   */
  constructor (type, value, encodedLength) {
    this.type = type;
    this.value = value;
    this.encodedLength = encodedLength;
    /** @type {Uint8Array|undefined} */
    this.encodedBytes = undefined;
    /** @type {Uint8Array|undefined} */
    this.byteValue = undefined;
  }

  /* c8 ignore next 3 */
  toString () {
    return `Token[${this.type}].${this.value}`
  }
}

// Use Uint8Array directly in the browser, use Buffer in Node.js but don't
// speak its name directly to avoid bundlers pulling in the `Buffer` polyfill

// @ts-ignore
const useBuffer = globalThis.process &&
  // @ts-ignore
  !globalThis.process.browser &&
  // @ts-ignore
  globalThis.Buffer &&
  // @ts-ignore
  typeof globalThis.Buffer.isBuffer === 'function';

const textEncoder = new TextEncoder();

/**
 * @param {Uint8Array} buf
 * @returns {boolean}
 */
function isBuffer (buf) {
  // @ts-ignore
  return useBuffer && globalThis.Buffer.isBuffer(buf)
}

/**
 * @param {Uint8Array|number[]} buf
 * @returns {Uint8Array}
 */
function asU8A (buf) {
  /* c8 ignore next */
  if (!(buf instanceof Uint8Array)) {
    return Uint8Array.from(buf)
  }
  return isBuffer(buf) ? new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength) : buf
}

// Threshold for manual UTF-8 encoding vs native methods.
// Node.js Buffer.from: crossover ~24 chars
// Browser TextEncoder: crossover ~200 chars
const FROM_STRING_THRESHOLD_BUFFER = 24;
const FROM_STRING_THRESHOLD_TEXTENCODER = 200;

const fromString = useBuffer
  ? // eslint-disable-line operator-linebreak
    /**
     * @param {string} string
     */
    (string) => {
      return string.length >= FROM_STRING_THRESHOLD_BUFFER
        ? // eslint-disable-line operator-linebreak
      // @ts-ignore
        globalThis.Buffer.from(string)
        : utf8ToBytes(string)
    }
  /* c8 ignore next 7 */
  : // eslint-disable-line operator-linebreak
    /**
     * @param {string} string
     */
    (string) => {
      return string.length >= FROM_STRING_THRESHOLD_TEXTENCODER ? textEncoder.encode(string) : utf8ToBytes(string)
    };

/**
 * Buffer variant not fast enough for what we need
 * @param {number[]} arr
 * @returns {Uint8Array}
 */
const fromArray = (arr) => {
  return Uint8Array.from(arr)
};

const slice = useBuffer
  ? // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array} bytes
     * @param {number} start
     * @param {number} end
     */
    // Buffer.slice() returns a view, not a copy, so we need special handling
    (bytes, start, end) => {
      if (isBuffer(bytes)) {
        return new Uint8Array(bytes.subarray(start, end))
      }
      return bytes.slice(start, end)
    }
  /* c8 ignore next 9 */
  : // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array} bytes
     * @param {number} start
     * @param {number} end
     */
    (bytes, start, end) => {
      return bytes.slice(start, end)
    };

const concat = useBuffer
  ? // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array[]} chunks
     * @param {number} length
     * @returns {Uint8Array}
     */
    (chunks, length) => {
      // might get a stray plain Array here
      /* c8 ignore next 1 */
      chunks = chunks.map((c) => c instanceof Uint8Array
        ? c
        // this case is occasionally missed during test runs so becomes coverage-flaky
        /* c8 ignore next 4 */
        : // eslint-disable-line operator-linebreak
        // @ts-ignore
        globalThis.Buffer.from(c));
      // @ts-ignore
      return asU8A(globalThis.Buffer.concat(chunks, length))
    }
  /* c8 ignore next 19 */
  : // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array[]} chunks
     * @param {number} length
     * @returns {Uint8Array}
     */
    (chunks, length) => {
      const out = new Uint8Array(length);
      let off = 0;
      for (let b of chunks) {
        if (off + b.length > out.length) {
          // final chunk that's bigger than we need
          b = b.subarray(0, out.length - off);
        }
        out.set(b, off);
        off += b.length;
      }
      return out
    };

const alloc = useBuffer
  ? // eslint-disable-line operator-linebreak
    /**
     * @param {number} size
     * @returns {Uint8Array}
     */
    (size) => {
      // we always write over the contents we expose so this should be safe
      // @ts-ignore
      return globalThis.Buffer.allocUnsafe(size)
    }
  /* c8 ignore next 8 */
  : // eslint-disable-line operator-linebreak
    /**
     * @param {number} size
     * @returns {Uint8Array}
     */
    (size) => {
      return new Uint8Array(size)
    };

const toHex = useBuffer
  ? // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array} d
     * @returns {string}
     */
    (d) => {
      if (typeof d === 'string') {
        return d
      }
      // @ts-ignore
      return globalThis.Buffer.from(toBytes(d)).toString('hex')
    }
  /* c8 ignore next 12 */
  : // eslint-disable-line operator-linebreak
    /**
     * @param {Uint8Array} d
     * @returns {string}
     */
    (d) => {
      if (typeof d === 'string') {
        return d
      }
      // @ts-ignore not smart enough to figure this out
      return Array.prototype.reduce.call(toBytes(d), (p, c) => `${p}${c.toString(16).padStart(2, '0')}`, '')
    };

const fromHex = useBuffer
  ? // eslint-disable-line operator-linebreak
  /**
   * @param {string|Uint8Array} hex
   * @returns {Uint8Array}
   */
    (hex) => {
      if (hex instanceof Uint8Array) {
        return hex
      }
      // @ts-ignore
      return globalThis.Buffer.from(hex, 'hex')
    }
  /* c8 ignore next 17 */
  : // eslint-disable-line operator-linebreak
  /**
   * @param {string|Uint8Array} hex
   * @returns {Uint8Array}
   */
    (hex) => {
      if (hex instanceof Uint8Array) {
        return hex
      }
      if (!hex.length) {
        return new Uint8Array(0)
      }
      return new Uint8Array(hex.split('')
        .map((/** @type {string} */ c, /** @type {number} */ i, /** @type {string[]} */ d) => i % 2 === 0 ? `0x${c}${d[i + 1]}` : '')
        .filter(Boolean)
        .map((/** @type {string} */ e) => parseInt(e, 16)))
    };

/**
 * @param {Uint8Array|ArrayBuffer|ArrayBufferView} obj
 * @returns {Uint8Array}
 */
function toBytes (obj) {
  if (obj instanceof Uint8Array && obj.constructor.name === 'Uint8Array') {
    return obj
  }
  if (obj instanceof ArrayBuffer) {
    return new Uint8Array(obj)
  }
  if (ArrayBuffer.isView(obj)) {
    return new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength)
  }
  /* c8 ignore next */
  throw new Error('Unknown type, must be binary type')
}

/**
 * @param {Uint8Array} b1
 * @param {Uint8Array} b2
 * @returns {number}
 */
function compare (b1, b2) {
  /* c8 ignore next 5 */
  if (isBuffer(b1) && isBuffer(b2)) {
    // probably not possible to get here in the current API
    // @ts-ignore Buffer
    return b1.compare(b2)
  }
  for (let i = 0; i < b1.length; i++) {
    if (b1[i] === b2[i]) {
      continue
    }
    return b1[i] < b2[i] ? -1 : 1
  } /* c8 ignore next 3 */
  return 0
}

// The below code is taken from https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt.js#L117-L143
// Licensed Apache-2.0.

/**
 * @param {string} str
 * @returns {number[]}
 */
function utf8ToBytes (str) {
  const out = [];
  let p = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str.charCodeAt(i);
    if (c < 128) {
      out[p++] = c;
    } else if (c < 2048) {
      out[p++] = (c >> 6) | 192;
      out[p++] = (c & 63) | 128;
    } else if (
      ((c & 0xFC00) === 0xD800) && (i + 1) < str.length &&
      ((str.charCodeAt(i + 1) & 0xFC00) === 0xDC00)) {
      // Surrogate Pair
      c = 0x10000 + ((c & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
      out[p++] = (c >> 18) | 240;
      out[p++] = ((c >> 12) & 63) | 128;
      out[p++] = ((c >> 6) & 63) | 128;
      out[p++] = (c & 63) | 128;
    } else {
      if ((c >= 0xD800) && (c <= 0xDFFF)) {
        c = 0xFFFD; // Unpaired Surrogate
      }
      out[p++] = (c >> 12) | 224;
      out[p++] = ((c >> 6) & 63) | 128;
      out[p++] = (c & 63) | 128;
    }
  }
  return out
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000;

/**
 * @param {number[]} codePoints
 * @returns {string}
 */
function decodeCodePointsArray (codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }
  /* c8 ignore next 10 */
  // Decode in chunks to avoid "call stack size exceeded".
  let res = '';
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    );
  }
  return res
}

/**
 * Bl is a list of byte chunks, similar to https://github.com/rvagg/bl but for
 * writing rather than reading.
 * A Bl object accepts set() operations for individual bytes and copyTo() for
 * inserting byte arrays. These write operations don't automatically increment
 * the internal cursor so its "length" won't be changed. Instead, increment()
 * must be called to extend its length to cover the inserted data.
 * The toBytes() call will convert all internal memory to a single Uint8Array of
 * the correct length, truncating any data that is stored but hasn't been
 * included by an increment().
 * get() can retrieve a single byte.
 * All operations (except toBytes()) take an "offset" argument that will perform
 * the write at the offset _from the current cursor_. For most operations this
 * will be `0` to write at the current cursor position but it can be ahead of
 * the current cursor. Negative offsets probably work but are untested.
 */


// the ts-ignores in this file are almost all for the `Uint8Array|number[]` duality that exists
// for perf reasons. Consider better approaches to this or removing it entirely, it is quite
// risky because of some assumptions about small chunks === number[] and everything else === Uint8Array.

const defaultChunkSize = 256;

class Bl {
  /**
   * @param {number} [chunkSize]
   */
  constructor (chunkSize = defaultChunkSize) {
    this.chunkSize = chunkSize;
    /** @type {number} */
    this.cursor = 0;
    /** @type {number} */
    this.maxCursor = -1;
    /** @type {(Uint8Array|number[])[]} */
    this.chunks = [];
    // keep the first chunk around if we can to save allocations for future encodes
    /** @type {Uint8Array|number[]|null} */
    this._initReuseChunk = null;
  }

  reset () {
    this.cursor = 0;
    this.maxCursor = -1;
    if (this.chunks.length) {
      this.chunks = [];
    }
    if (this._initReuseChunk !== null) {
      this.chunks.push(this._initReuseChunk);
      this.maxCursor = this._initReuseChunk.length - 1;
    }
  }

  /**
   * @param {Uint8Array|number[]} bytes
   */
  push (bytes) {
    let topChunk = this.chunks[this.chunks.length - 1];
    const newMax = this.cursor + bytes.length;
    if (newMax <= this.maxCursor + 1) {
      // we have at least one chunk and we can fit these bytes into that chunk
      const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
      // @ts-ignore
      topChunk.set(bytes, chunkPos);
    } else {
      // can't fit it in
      if (topChunk) {
        // trip the last chunk to `cursor` if we need to
        const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
        if (chunkPos < topChunk.length) {
          // @ts-ignore
          this.chunks[this.chunks.length - 1] = topChunk.subarray(0, chunkPos);
          this.maxCursor = this.cursor - 1;
        }
      }
      if (bytes.length < 64 && bytes.length < this.chunkSize) {
        // make a new chunk and copy the new one into it
        topChunk = alloc(this.chunkSize);
        this.chunks.push(topChunk);
        this.maxCursor += topChunk.length;
        if (this._initReuseChunk === null) {
          this._initReuseChunk = topChunk;
        }
        // @ts-ignore
        topChunk.set(bytes, 0);
      } else {
        // push the new bytes in as its own chunk
        this.chunks.push(bytes);
        this.maxCursor += bytes.length;
      }
    }
    this.cursor += bytes.length;
  }

  /**
   * @param {boolean} [reset]
   * @returns {Uint8Array}
   */
  toBytes (reset = false) {
    let byts;
    if (this.chunks.length === 1) {
      const chunk = this.chunks[0];
      if (reset && this.cursor > chunk.length / 2) {
        /* c8 ignore next 2 */
        // @ts-ignore
        byts = this.cursor === chunk.length ? chunk : chunk.subarray(0, this.cursor);
        this._initReuseChunk = null;
        this.chunks = [];
      } else {
        // @ts-ignore
        byts = slice(chunk, 0, this.cursor);
      }
    } else {
      // @ts-ignore
      byts = concat(this.chunks, this.cursor);
    }
    if (reset) {
      this.reset();
    }
    return byts
  }
}

/**
 * U8Bl is a buffer list that writes directly to a user-provided Uint8Array.
 * It provides the same interface as Bl but writes to a fixed destination.
 */
class U8Bl {
  /**
   * @param {Uint8Array} dest
   */
  constructor (dest) {
    this.dest = dest;
    /** @type {number} */
    this.cursor = 0;
    // chunks is for interface compatibility with Bl - encode.js checks chunks.length
    // as a sanity check for pre-calculated sizes. For U8Bl this is always [dest].
    /** @type {Uint8Array[]} */
    this.chunks = [dest];
  }

  reset () {
    this.cursor = 0;
  }

  /**
   * @param {Uint8Array|number[]} bytes
   */
  push (bytes) {
    if (this.cursor + bytes.length > this.dest.length) {
      throw new Error('write out of bounds, destination buffer is too small')
    }
    this.dest.set(bytes, this.cursor);
    this.cursor += bytes.length;
  }

  /**
   * @param {boolean} [reset]
   * @returns {Uint8Array}
   */
  toBytes (reset = false) {
    const byts = this.dest.subarray(0, this.cursor);
    if (reset) {
      this.reset();
    }
    return byts
  }
}

const decodeErrPrefix = 'CBOR decode error:';
const encodeErrPrefix = 'CBOR encode error:';

const uintMinorPrefixBytes = [];
uintMinorPrefixBytes[23] = 1;
uintMinorPrefixBytes[24] = 2;
uintMinorPrefixBytes[25] = 3;
uintMinorPrefixBytes[26] = 5;
uintMinorPrefixBytes[27] = 9;

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} need
 */
function assertEnoughData (data, pos, need) {
  if (data.length - pos < need) {
    throw new Error(`${decodeErrPrefix} not enough data for type`)
  }
}

/* globals BigInt */


const uintBoundaries = [24, 256, 65536, 4294967296, BigInt('18446744073709551616')];

/**
 * @typedef {import('../interface.js').ByteWriter} ByteWriter
 * @typedef {import('../interface.js').DecodeOptions} DecodeOptions
 */

/**
 * @param {Uint8Array} data
 * @param {number} offset
 * @param {DecodeOptions} options
 * @returns {number}
 */
function readUint8 (data, offset, options) {
  assertEnoughData(data, offset, 1);
  const value = data[offset];
  if (options.strict === true && value < uintBoundaries[0]) {
    throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`)
  }
  return value
}

/**
 * @param {Uint8Array} data
 * @param {number} offset
 * @param {DecodeOptions} options
 * @returns {number}
 */
function readUint16 (data, offset, options) {
  assertEnoughData(data, offset, 2);
  const value = (data[offset] << 8) | data[offset + 1];
  if (options.strict === true && value < uintBoundaries[1]) {
    throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`)
  }
  return value
}

/**
 * @param {Uint8Array} data
 * @param {number} offset
 * @param {DecodeOptions} options
 * @returns {number}
 */
function readUint32 (data, offset, options) {
  assertEnoughData(data, offset, 4);
  const value = (data[offset] * 16777216 /* 2 ** 24 */) + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  if (options.strict === true && value < uintBoundaries[2]) {
    throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`)
  }
  return value
}

/**
 * @param {Uint8Array} data
 * @param {number} offset
 * @param {DecodeOptions} options
 * @returns {number|bigint}
 */
function readUint64 (data, offset, options) {
  // assume BigInt, convert back to Number if within safe range
  assertEnoughData(data, offset, 8);
  const hi = (data[offset] * 16777216 /* 2 ** 24 */) + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  const lo = (data[offset + 4] * 16777216 /* 2 ** 24 */) + (data[offset + 5] << 16) + (data[offset + 6] << 8) + data[offset + 7];
  const value = (BigInt(hi) << BigInt(32)) + BigInt(lo);
  if (options.strict === true && value < uintBoundaries[3]) {
    throw new Error(`${decodeErrPrefix} integer encoded in more bytes than necessary (strict decode)`)
  }
  if (value <= Number.MAX_SAFE_INTEGER) {
    return Number(value)
  }
  if (options.allowBigInt === true) {
    return value
  }
  throw new Error(`${decodeErrPrefix} integers outside of the safe integer range are not supported`)
}

/* not required thanks to quick[] list
const oneByteTokens = new Array(24).fill(0).map((v, i) => new Token(Type.uint, i, 1))
export function decodeUintCompact (data, pos, minor, options) {
  return oneByteTokens[minor]
}
*/

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeUint8 (data, pos, _minor, options) {
  return new Token(Type.uint, readUint8(data, pos + 1, options), 2)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeUint16 (data, pos, _minor, options) {
  return new Token(Type.uint, readUint16(data, pos + 1, options), 3)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeUint32 (data, pos, _minor, options) {
  return new Token(Type.uint, readUint32(data, pos + 1, options), 5)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeUint64 (data, pos, _minor, options) {
  return new Token(Type.uint, readUint64(data, pos + 1, options), 9)
}

/**
 * @param {ByteWriter} writer
 * @param {Token} token
 */
function encodeUint (writer, token) {
  return encodeUintValue(writer, 0, token.value)
}

/**
 * @param {ByteWriter} writer
 * @param {number} major
 * @param {number|bigint} uint
 */
function encodeUintValue (writer, major, uint) {
  if (uint < uintBoundaries[0]) {
    const nuint = Number(uint);
    // pack into one byte, minor=0, additional=value
    writer.push([major | nuint]);
  } else if (uint < uintBoundaries[1]) {
    const nuint = Number(uint);
    // pack into two byte, minor=0, additional=24
    writer.push([major | 24, nuint]);
  } else if (uint < uintBoundaries[2]) {
    const nuint = Number(uint);
    // pack into three byte, minor=0, additional=25
    writer.push([major | 25, nuint >>> 8, nuint & 0xff]);
  } else if (uint < uintBoundaries[3]) {
    const nuint = Number(uint);
    // pack into five byte, minor=0, additional=26
    writer.push([major | 26, (nuint >>> 24) & 0xff, (nuint >>> 16) & 0xff, (nuint >>> 8) & 0xff, nuint & 0xff]);
  } else {
    const buint = BigInt(uint);
    if (buint < uintBoundaries[4]) {
      // pack into nine byte, minor=0, additional=27
      const set = [major | 27, 0, 0, 0, 0, 0, 0, 0];
      // simulate bitwise above 32 bits
      let lo = Number(buint & BigInt(0xffffffff));
      let hi = Number(buint >> BigInt(32) & BigInt(0xffffffff));
      set[8] = lo & 0xff;
      lo = lo >> 8;
      set[7] = lo & 0xff;
      lo = lo >> 8;
      set[6] = lo & 0xff;
      lo = lo >> 8;
      set[5] = lo & 0xff;
      set[4] = hi & 0xff;
      hi = hi >> 8;
      set[3] = hi & 0xff;
      hi = hi >> 8;
      set[2] = hi & 0xff;
      hi = hi >> 8;
      set[1] = hi & 0xff;
      writer.push(set);
    } else {
      throw new Error(`${decodeErrPrefix} encountered BigInt larger than allowable range`)
    }
  }
}

/**
 * @param {Token} token
 * @returns {number}
 */
encodeUint.encodedSize = function encodedSize (token) {
  return encodeUintValue.encodedSize(token.value)
};

/**
 * @param {number} uint
 * @returns {number}
 */
encodeUintValue.encodedSize = function encodedSize (uint) {
  if (uint < uintBoundaries[0]) {
    return 1
  }
  if (uint < uintBoundaries[1]) {
    return 2
  }
  if (uint < uintBoundaries[2]) {
    return 3
  }
  if (uint < uintBoundaries[3]) {
    return 5
  }
  return 9
};

/**
 * @param {Token} tok1
 * @param {Token} tok2
 * @returns {number}
 */
encodeUint.compareTokens = function compareTokens (tok1, tok2) {
  return tok1.value < tok2.value ? -1 : tok1.value > tok2.value ? 1 : /* c8 ignore next */ 0
};

/* eslint-env es2020 */


/**
 * @typedef {import('../interface.js').ByteWriter} ByteWriter
 * @typedef {import('../interface.js').DecodeOptions} DecodeOptions
 */

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeNegint8 (data, pos, _minor, options) {
  return new Token(Type.negint, -1 - readUint8(data, pos + 1, options), 2)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeNegint16 (data, pos, _minor, options) {
  return new Token(Type.negint, -1 - readUint16(data, pos + 1, options), 3)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeNegint32 (data, pos, _minor, options) {
  return new Token(Type.negint, -1 - readUint32(data, pos + 1, options), 5)
}

const neg1b$1 = BigInt(-1);
const pos1b$1 = BigInt(1);

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeNegint64 (data, pos, _minor, options) {
  const int = readUint64(data, pos + 1, options);
  if (typeof int !== 'bigint') {
    const value = -1 - int;
    if (value >= Number.MIN_SAFE_INTEGER) {
      return new Token(Type.negint, value, 9)
    }
  }
  if (options.allowBigInt !== true) {
    throw new Error(`${decodeErrPrefix} integers outside of the safe integer range are not supported`)
  }
  return new Token(Type.negint, neg1b$1 - BigInt(int), 9)
}

/**
 * @param {ByteWriter} writer
 * @param {Token} token
 */
function encodeNegint (writer, token) {
  const negint = token.value;
  const unsigned = (typeof negint === 'bigint' ? (negint * neg1b$1 - pos1b$1) : (negint * -1 - 1));
  encodeUintValue(writer, token.type.majorEncoded, unsigned);
}

/**
 * @param {Token} token
 * @returns {number}
 */
encodeNegint.encodedSize = function encodedSize (token) {
  const negint = token.value;
  const unsigned = (typeof negint === 'bigint' ? (negint * neg1b$1 - pos1b$1) : (negint * -1 - 1));
  /* c8 ignore next 4 */
  // handled by quickEncode, we shouldn't get here but it's included for completeness
  if (unsigned < uintBoundaries[0]) {
    return 1
  }
  if (unsigned < uintBoundaries[1]) {
    return 2
  }
  if (unsigned < uintBoundaries[2]) {
    return 3
  }
  if (unsigned < uintBoundaries[3]) {
    return 5
  }
  return 9
};

/**
 * @param {Token} tok1
 * @param {Token} tok2
 * @returns {number}
 */
encodeNegint.compareTokens = function compareTokens (tok1, tok2) {
  // opposite of the uint comparison since we store the uint version in bytes
  return tok1.value < tok2.value ? 1 : tok1.value > tok2.value ? -1 : /* c8 ignore next */ 0
};

/**
 * @typedef {import('../interface.js').ByteWriter} ByteWriter
 * @typedef {import('../interface.js').DecodeOptions} DecodeOptions
 */

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} prefix
 * @param {number} length
 * @returns {Token}
 */
function toToken$3 (data, pos, prefix, length) {
  assertEnoughData(data, pos, prefix + length);
  const buf = data.slice(pos + prefix, pos + prefix + length);
  return new Token(Type.bytes, buf, prefix + length)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} minor
 * @param {DecodeOptions} _options
 * @returns {Token}
 */
function decodeBytesCompact (data, pos, minor, _options) {
  return toToken$3(data, pos, 1, minor)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeBytes8 (data, pos, _minor, options) {
  return toToken$3(data, pos, 2, readUint8(data, pos + 1, options))
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeBytes16 (data, pos, _minor, options) {
  return toToken$3(data, pos, 3, readUint16(data, pos + 1, options))
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeBytes32 (data, pos, _minor, options) {
  return toToken$3(data, pos, 5, readUint32(data, pos + 1, options))
}

// TODO: maybe we shouldn't support this ..
/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeBytes64 (data, pos, _minor, options) {
  const l = readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${decodeErrPrefix} 64-bit integer bytes lengths not supported`)
  }
  return toToken$3(data, pos, 9, l)
}

/**
 * `encodedBytes` allows for caching when we do a byte version of a string
 * for key sorting purposes
 * @param {Token} token
 * @returns {Uint8Array}
 */
function tokenBytes (token) {
  if (token.encodedBytes === undefined) {
    token.encodedBytes = Type.equals(token.type, Type.string) ? fromString(token.value) : token.value;
  }
  // @ts-ignore c'mon
  return token.encodedBytes
}

/**
 * @param {ByteWriter} writer
 * @param {Token} token
 */
function encodeBytes (writer, token) {
  const bytes = tokenBytes(token);
  encodeUintValue(writer, token.type.majorEncoded, bytes.length);
  writer.push(bytes);
}

/**
 * @param {Token} token
 * @returns {number}
 */
encodeBytes.encodedSize = function encodedSize (token) {
  const bytes = tokenBytes(token);
  return encodeUintValue.encodedSize(bytes.length) + bytes.length
};

/**
 * @param {Token} tok1
 * @param {Token} tok2
 * @returns {number}
 */
encodeBytes.compareTokens = function compareTokens (tok1, tok2) {
  return compareBytes(tokenBytes(tok1), tokenBytes(tok2))
};

/**
 * @param {Uint8Array} b1
 * @param {Uint8Array} b2
 * @returns {number}
 */
function compareBytes (b1, b2) {
  return b1.length < b2.length ? -1 : b1.length > b2.length ? 1 : compare(b1, b2)
}

const textDecoder = new TextDecoder();

// Threshold for ASCII fast-path vs TextDecoder. Short ASCII strings (common for
// map keys) are faster to decode with a simple loop than TextDecoder overhead.
const ASCII_THRESHOLD = 32;

/**
 * @typedef {import('../interface.js').ByteWriter} ByteWriter
 * @typedef {import('../interface.js').DecodeOptions} DecodeOptions
 */

/**
 * Decode UTF-8 bytes to string. For short ASCII strings (common case for map keys),
 * a simple loop is faster than TextDecoder.
 * @param {Uint8Array} bytes
 * @param {number} start
 * @param {number} end
 * @returns {string}
 */
function toStr (bytes, start, end) {
  const len = end - start;
  if (len < ASCII_THRESHOLD) {
    let str = '';
    for (let i = start; i < end; i++) {
      const c = bytes[i];
      if (c & 0x80) { // non-ASCII, fall back to TextDecoder
        return textDecoder.decode(bytes.subarray(start, end))
      }
      str += String.fromCharCode(c);
    }
    return str
  }
  return textDecoder.decode(bytes.subarray(start, end))
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} prefix
 * @param {number} length
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function toToken$2 (data, pos, prefix, length, options) {
  const totLength = prefix + length;
  assertEnoughData(data, pos, totLength);
  const tok = new Token(Type.string, toStr(data, pos + prefix, pos + totLength), totLength);
  if (options.retainStringBytes === true) {
    tok.byteValue = data.slice(pos + prefix, pos + totLength);
  }
  return tok
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeStringCompact (data, pos, minor, options) {
  return toToken$2(data, pos, 1, minor, options)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeString8 (data, pos, _minor, options) {
  return toToken$2(data, pos, 2, readUint8(data, pos + 1, options), options)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeString16 (data, pos, _minor, options) {
  return toToken$2(data, pos, 3, readUint16(data, pos + 1, options), options)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeString32 (data, pos, _minor, options) {
  return toToken$2(data, pos, 5, readUint32(data, pos + 1, options), options)
}

// TODO: maybe we shouldn't support this ..
/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeString64 (data, pos, _minor, options) {
  const l = readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${decodeErrPrefix} 64-bit integer string lengths not supported`)
  }
  return toToken$2(data, pos, 9, l, options)
}

const encodeString = encodeBytes;

/**
 * @typedef {import('../interface.js').ByteWriter} ByteWriter
 * @typedef {import('../interface.js').DecodeOptions} DecodeOptions
 */

/**
 * @param {Uint8Array} _data
 * @param {number} _pos
 * @param {number} prefix
 * @param {number} length
 * @returns {Token}
 */
function toToken$1 (_data, _pos, prefix, length) {
  return new Token(Type.array, length, prefix)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} minor
 * @param {DecodeOptions} _options
 * @returns {Token}
 */
function decodeArrayCompact (data, pos, minor, _options) {
  return toToken$1(data, pos, 1, minor)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeArray8 (data, pos, _minor, options) {
  return toToken$1(data, pos, 2, readUint8(data, pos + 1, options))
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeArray16 (data, pos, _minor, options) {
  return toToken$1(data, pos, 3, readUint16(data, pos + 1, options))
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeArray32 (data, pos, _minor, options) {
  return toToken$1(data, pos, 5, readUint32(data, pos + 1, options))
}

// TODO: maybe we shouldn't support this ..
/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeArray64 (data, pos, _minor, options) {
  const l = readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${decodeErrPrefix} 64-bit integer array lengths not supported`)
  }
  return toToken$1(data, pos, 9, l)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeArrayIndefinite (data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${decodeErrPrefix} indefinite length items not allowed`)
  }
  return toToken$1(data, pos, 1, Infinity)
}

/**
 * @param {ByteWriter} writer
 * @param {Token} token
 */
function encodeArray (writer, token) {
  encodeUintValue(writer, Type.array.majorEncoded, token.value);
}

// using an array as a map key, are you sure about this? we can only sort
// by map length here, it's up to the encoder to decide to look deeper
encodeArray.compareTokens = encodeUint.compareTokens;

/**
 * @param {Token} token
 * @returns {number}
 */
encodeArray.encodedSize = function encodedSize (token) {
  return encodeUintValue.encodedSize(token.value)
};

/**
 * @typedef {import('../interface.js').ByteWriter} ByteWriter
 * @typedef {import('../interface.js').DecodeOptions} DecodeOptions
 */

/**
 * @param {Uint8Array} _data
 * @param {number} _pos
 * @param {number} prefix
 * @param {number} length
 * @returns {Token}
 */
function toToken (_data, _pos, prefix, length) {
  return new Token(Type.map, length, prefix)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} minor
 * @param {DecodeOptions} _options
 * @returns {Token}
 */
function decodeMapCompact (data, pos, minor, _options) {
  return toToken(data, pos, 1, minor)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeMap8 (data, pos, _minor, options) {
  return toToken(data, pos, 2, readUint8(data, pos + 1, options))
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeMap16 (data, pos, _minor, options) {
  return toToken(data, pos, 3, readUint16(data, pos + 1, options))
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeMap32 (data, pos, _minor, options) {
  return toToken(data, pos, 5, readUint32(data, pos + 1, options))
}

// TODO: maybe we shouldn't support this ..
/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeMap64 (data, pos, _minor, options) {
  const l = readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${decodeErrPrefix} 64-bit integer map lengths not supported`)
  }
  return toToken(data, pos, 9, l)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeMapIndefinite (data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${decodeErrPrefix} indefinite length items not allowed`)
  }
  return toToken(data, pos, 1, Infinity)
}

/**
 * @param {ByteWriter} writer
 * @param {Token} token
 */
function encodeMap (writer, token) {
  encodeUintValue(writer, Type.map.majorEncoded, token.value);
}

// using a map as a map key, are you sure about this? we can only sort
// by map length here, it's up to the encoder to decide to look deeper
encodeMap.compareTokens = encodeUint.compareTokens;

/**
 * @param {Token} token
 * @returns {number}
 */
encodeMap.encodedSize = function encodedSize (token) {
  return encodeUintValue.encodedSize(token.value)
};

/**
 * @typedef {import('../interface.js').ByteWriter} ByteWriter
 * @typedef {import('../interface.js').DecodeOptions} DecodeOptions
 */

/**
 * @param {Uint8Array} _data
 * @param {number} _pos
 * @param {number} minor
 * @param {DecodeOptions} _options
 * @returns {Token}
 */
function decodeTagCompact (_data, _pos, minor, _options) {
  return new Token(Type.tag, minor, 1)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeTag8 (data, pos, _minor, options) {
  return new Token(Type.tag, readUint8(data, pos + 1, options), 2)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeTag16 (data, pos, _minor, options) {
  return new Token(Type.tag, readUint16(data, pos + 1, options), 3)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeTag32 (data, pos, _minor, options) {
  return new Token(Type.tag, readUint32(data, pos + 1, options), 5)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeTag64 (data, pos, _minor, options) {
  return new Token(Type.tag, readUint64(data, pos + 1, options), 9)
}

/**
 * @param {ByteWriter} writer
 * @param {Token} token
 */
function encodeTag (writer, token) {
  encodeUintValue(writer, Type.tag.majorEncoded, token.value);
}

encodeTag.compareTokens = encodeUint.compareTokens;

/**
 * @param {Token} token
 * @returns {number}
 */
encodeTag.encodedSize = function encodedSize (token) {
  return encodeUintValue.encodedSize(token.value)
};

// TODO: shift some of the bytes logic to bytes-utils so we can use Buffer
// where possible


/**
 * @typedef {import('../interface.js').ByteWriter} ByteWriter
 * @typedef {import('../interface.js').DecodeOptions} DecodeOptions
 * @typedef {import('../interface.js').EncodeOptions} EncodeOptions
 */

const MINOR_FALSE = 20;
const MINOR_TRUE = 21;
const MINOR_NULL = 22;
const MINOR_UNDEFINED = 23;

/**
 * @param {Uint8Array} _data
 * @param {number} _pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeUndefined (_data, _pos, _minor, options) {
  if (options.allowUndefined === false) {
    throw new Error(`${decodeErrPrefix} undefined values are not supported`)
  } else if (options.coerceUndefinedToNull === true) {
    return new Token(Type.null, null, 1)
  }
  return new Token(Type.undefined, undefined, 1)
}

/**
 * @param {Uint8Array} _data
 * @param {number} _pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeBreak (_data, _pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${decodeErrPrefix} indefinite length items not allowed`)
  }
  return new Token(Type.break, undefined, 1)
}

/**
 * @param {number} value
 * @param {number} bytes
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function createToken (value, bytes, options) {
  if (options) {
    if (options.allowNaN === false && Number.isNaN(value)) {
      throw new Error(`${decodeErrPrefix} NaN values are not supported`)
    }
    if (options.allowInfinity === false && (value === Infinity || value === -Infinity)) {
      throw new Error(`${decodeErrPrefix} Infinity values are not supported`)
    }
  }
  return new Token(Type.float, value, bytes)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeFloat16 (data, pos, _minor, options) {
  return createToken(readFloat16(data, pos + 1), 3, options)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeFloat32 (data, pos, _minor, options) {
  return createToken(readFloat32(data, pos + 1), 5, options)
}

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} _minor
 * @param {DecodeOptions} options
 * @returns {Token}
 */
function decodeFloat64 (data, pos, _minor, options) {
  return createToken(readFloat64(data, pos + 1), 9, options)
}

/**
 * @param {ByteWriter} writer
 * @param {Token} token
 * @param {EncodeOptions} options
 */
function encodeFloat (writer, token, options) {
  const float = token.value;

  if (float === false) {
    writer.push([Type.float.majorEncoded | MINOR_FALSE]);
  } else if (float === true) {
    writer.push([Type.float.majorEncoded | MINOR_TRUE]);
  } else if (float === null) {
    writer.push([Type.float.majorEncoded | MINOR_NULL]);
  } else if (float === undefined) {
    writer.push([Type.float.majorEncoded | MINOR_UNDEFINED]);
  } else {
    let decoded;
    let success = false;
    if (!options || options.float64 !== true) {
      encodeFloat16(float);
      decoded = readFloat16(ui8a, 1);
      if (float === decoded || Number.isNaN(float)) {
        ui8a[0] = 0xf9;
        writer.push(ui8a.slice(0, 3));
        success = true;
      } else {
        encodeFloat32(float);
        decoded = readFloat32(ui8a, 1);
        if (float === decoded) {
          ui8a[0] = 0xfa;
          writer.push(ui8a.slice(0, 5));
          success = true;
        }
      }
    }
    if (!success) {
      encodeFloat64(float);
      decoded = readFloat64(ui8a, 1);
      ui8a[0] = 0xfb;
      writer.push(ui8a.slice(0, 9));
    }
  }
}

/**
 * @param {Token} token
 * @param {EncodeOptions} options
 * @returns {number}
 */
encodeFloat.encodedSize = function encodedSize (token, options) {
  const float = token.value;

  if (float === false || float === true || float === null || float === undefined) {
    return 1
  }

  if (!options || options.float64 !== true) {
    encodeFloat16(float);
    let decoded = readFloat16(ui8a, 1);
    if (float === decoded || Number.isNaN(float)) {
      return 3
    }
    encodeFloat32(float);
    decoded = readFloat32(ui8a, 1);
    if (float === decoded) {
      return 5
    }
  }
  return 9
};

const buffer = new ArrayBuffer(9);
const dataView = new DataView(buffer, 1);
const ui8a = new Uint8Array(buffer, 0);

/**
 * @param {number} inp
 */
function encodeFloat16 (inp) {
  if (inp === Infinity) {
    dataView.setUint16(0, 0x7c00, false);
  } else if (inp === -Infinity) {
    dataView.setUint16(0, 0xfc00, false);
  } else if (Number.isNaN(inp)) {
    dataView.setUint16(0, 0x7e00, false);
  } else {
    dataView.setFloat32(0, inp);
    const valu32 = dataView.getUint32(0);
    const exponent = (valu32 & 0x7f800000) >> 23;
    const mantissa = valu32 & 0x7fffff;

    /* c8 ignore next 6 */
    if (exponent === 0xff) {
      // too big, Infinity, but this should be hard (impossible?) to trigger
      dataView.setUint16(0, 0x7c00, false);
    } else if (exponent === 0x00) {
      // 0.0, -0.0 and subnormals, shouldn't be possible to get here because 0.0 should be counted as an int
      // Use valu32 for sign bit since bitwise ops on floats lose -0 sign
      dataView.setUint16(0, ((valu32 & 0x80000000) >> 16) | (mantissa >> 13), false);
    } else { // standard numbers
      // chunks of logic here borrowed from https://github.com/PJK/libcbor/blob/c78f437182533e3efa8d963ff4b945bb635c2284/src/cbor/encoding.c#L127
      const logicalExponent = exponent - 127;
      // Now we know that 2^exponent <= 0 logically
      /* c8 ignore next 6 */
      if (logicalExponent < -24) {
        /* No unambiguous representation exists, this float is not a half float
          and is too small to be represented using a half, round off to zero.
          Consistent with the reference implementation. */
        // should be difficult (impossible?) to get here in JS
        dataView.setUint16(0, 0);
      } else if (logicalExponent < -14) {
        /* Offset the remaining decimal places by shifting the significand, the
          value is lost. This is an implementation decision that works around the
          absence of standard half-float in the language. */
        dataView.setUint16(0, ((valu32 & 0x80000000) >> 16) | /* sign bit */ (1 << (24 + logicalExponent)), false);
      } else {
        dataView.setUint16(0, ((valu32 & 0x80000000) >> 16) | ((logicalExponent + 15) << 10) | (mantissa >> 13), false);
      }
    }
  }
}

/**
 * @param {Uint8Array} ui8a
 * @param {number} pos
 * @returns {number}
 */
function readFloat16 (ui8a, pos) {
  if (ui8a.length - pos < 2) {
    throw new Error(`${decodeErrPrefix} not enough data for float16`)
  }

  const half = (ui8a[pos] << 8) + ui8a[pos + 1];
  if (half === 0x7c00) {
    return Infinity
  }
  if (half === 0xfc00) {
    return -Infinity
  }
  if (half === 0x7e00) {
    return NaN
  }
  const exp = (half >> 10) & 0x1f;
  const mant = half & 0x3ff;
  let val;
  if (exp === 0) {
    val = mant * (2 ** -24);
  } else if (exp !== 31) {
    val = (mant + 1024) * (2 ** (exp - 25));
  /* c8 ignore next 4 */
  } else {
    // may not be possible to get here
    val = mant === 0 ? Infinity : NaN;
  }
  return (half & 0x8000) ? -val : val
}

/**
 * @param {number} inp
 */
function encodeFloat32 (inp) {
  dataView.setFloat32(0, inp, false);
}

/**
 * @param {Uint8Array} ui8a
 * @param {number} pos
 * @returns {number}
 */
function readFloat32 (ui8a, pos) {
  if (ui8a.length - pos < 4) {
    throw new Error(`${decodeErrPrefix} not enough data for float32`)
  }
  const offset = (ui8a.byteOffset || 0) + pos;
  return new DataView(ui8a.buffer, offset, 4).getFloat32(0, false)
}

/**
 * @param {number} inp
 */
function encodeFloat64 (inp) {
  dataView.setFloat64(0, inp, false);
}

/**
 * @param {Uint8Array} ui8a
 * @param {number} pos
 * @returns {number}
 */
function readFloat64 (ui8a, pos) {
  if (ui8a.length - pos < 8) {
    throw new Error(`${decodeErrPrefix} not enough data for float64`)
  }
  const offset = (ui8a.byteOffset || 0) + pos;
  return new DataView(ui8a.buffer, offset, 8).getFloat64(0, false)
}

/**
 * @param {Token} _tok1
 * @param {Token} _tok2
 * @returns {number}
 */
encodeFloat.compareTokens = encodeUint.compareTokens;
/*
encodeFloat.compareTokens = function compareTokens (_tok1, _tok2) {
  return _tok1
  throw new Error(`${encodeErrPrefix} cannot use floats as map keys`)
}
*/

/**
 * @typedef {import('../interface.js').DecodeOptions} DecodeOptions
 */

/**
 * @param {Uint8Array} data
 * @param {number} pos
 * @param {number} minor
 */
function invalidMinor (data, pos, minor) {
  throw new Error(`${decodeErrPrefix} encountered invalid minor (${minor}) for major ${data[pos] >>> 5}`)
}

/**
 * @param {string} msg
 * @returns {()=>any}
 */
function errorer (msg) {
  return () => { throw new Error(`${decodeErrPrefix} ${msg}`) }
}

/** @type {((data:Uint8Array, pos:number, minor:number, options?:DecodeOptions) => any)[]} */
const jump = [];

// unsigned integer, 0x00..0x17 (0..23)
for (let i = 0; i <= 0x17; i++) {
  jump[i] = invalidMinor; // uint.decodeUintCompact, handled by quick[]
}
jump[0x18] = decodeUint8; // unsigned integer, one-byte uint8_t follows
jump[0x19] = decodeUint16; // unsigned integer, two-byte uint16_t follows
jump[0x1a] = decodeUint32; // unsigned integer, four-byte uint32_t follows
jump[0x1b] = decodeUint64; // unsigned integer, eight-byte uint64_t follows
jump[0x1c] = invalidMinor;
jump[0x1d] = invalidMinor;
jump[0x1e] = invalidMinor;
jump[0x1f] = invalidMinor;
// negative integer, -1-0x00..-1-0x17 (-1..-24)
for (let i = 0x20; i <= 0x37; i++) {
  jump[i] = invalidMinor; // negintDecode, handled by quick[]
}
jump[0x38] = decodeNegint8; // negative integer, -1-n one-byte uint8_t for n follows
jump[0x39] = decodeNegint16; // negative integer, -1-n two-byte uint16_t for n follows
jump[0x3a] = decodeNegint32; // negative integer, -1-n four-byte uint32_t for follows
jump[0x3b] = decodeNegint64; // negative integer, -1-n eight-byte uint64_t for follows
jump[0x3c] = invalidMinor;
jump[0x3d] = invalidMinor;
jump[0x3e] = invalidMinor;
jump[0x3f] = invalidMinor;
// byte string, 0x00..0x17 bytes follow
for (let i = 0x40; i <= 0x57; i++) {
  jump[i] = decodeBytesCompact;
}
jump[0x58] = decodeBytes8; // byte string, one-byte uint8_t for n, and then n bytes follow
jump[0x59] = decodeBytes16; // byte string, two-byte uint16_t for n, and then n bytes follow
jump[0x5a] = decodeBytes32; // byte string, four-byte uint32_t for n, and then n bytes follow
jump[0x5b] = decodeBytes64; // byte string, eight-byte uint64_t for n, and then n bytes follow
jump[0x5c] = invalidMinor;
jump[0x5d] = invalidMinor;
jump[0x5e] = invalidMinor;
jump[0x5f] = errorer('indefinite length bytes/strings are not supported'); // byte string, byte strings follow, terminated by "break"
// UTF-8 string 0x00..0x17 bytes follow
for (let i = 0x60; i <= 0x77; i++) {
  jump[i] = decodeStringCompact;
}
jump[0x78] = decodeString8; // UTF-8 string, one-byte uint8_t for n, and then n bytes follow
jump[0x79] = decodeString16; // UTF-8 string, two-byte uint16_t for n, and then n bytes follow
jump[0x7a] = decodeString32; // UTF-8 string, four-byte uint32_t for n, and then n bytes follow
jump[0x7b] = decodeString64; // UTF-8 string, eight-byte uint64_t for n, and then n bytes follow
jump[0x7c] = invalidMinor;
jump[0x7d] = invalidMinor;
jump[0x7e] = invalidMinor;
jump[0x7f] = errorer('indefinite length bytes/strings are not supported'); // UTF-8 strings follow, terminated by "break"
// array, 0x00..0x17 data items follow
for (let i = 0x80; i <= 0x97; i++) {
  jump[i] = decodeArrayCompact;
}
jump[0x98] = decodeArray8; // array, one-byte uint8_t for n, and then n data items follow
jump[0x99] = decodeArray16; // array, two-byte uint16_t for n, and then n data items follow
jump[0x9a] = decodeArray32; // array, four-byte uint32_t for n, and then n data items follow
jump[0x9b] = decodeArray64; // array, eight-byte uint64_t for n, and then n data items follow
jump[0x9c] = invalidMinor;
jump[0x9d] = invalidMinor;
jump[0x9e] = invalidMinor;
jump[0x9f] = decodeArrayIndefinite; // array, data items follow, terminated by "break"
// map, 0x00..0x17 pairs of data items follow
for (let i = 0xa0; i <= 0xb7; i++) {
  jump[i] = decodeMapCompact;
}
jump[0xb8] = decodeMap8; // map, one-byte uint8_t for n, and then n pairs of data items follow
jump[0xb9] = decodeMap16; // map, two-byte uint16_t for n, and then n pairs of data items follow
jump[0xba] = decodeMap32; // map, four-byte uint32_t for n, and then n pairs of data items follow
jump[0xbb] = decodeMap64; // map, eight-byte uint64_t for n, and then n pairs of data items follow
jump[0xbc] = invalidMinor;
jump[0xbd] = invalidMinor;
jump[0xbe] = invalidMinor;
jump[0xbf] = decodeMapIndefinite; // map, pairs of data items follow, terminated by "break"
// tags
for (let i = 0xc0; i <= 0xd7; i++) {
  jump[i] = decodeTagCompact;
}
jump[0xd8] = decodeTag8;
jump[0xd9] = decodeTag16;
jump[0xda] = decodeTag32;
jump[0xdb] = decodeTag64;
jump[0xdc] = invalidMinor;
jump[0xdd] = invalidMinor;
jump[0xde] = invalidMinor;
jump[0xdf] = invalidMinor;
// 0xe0..0xf3 simple values, unsupported
for (let i = 0xe0; i <= 0xf3; i++) {
  jump[i] = errorer('simple values are not supported');
}
jump[0xf4] = invalidMinor; // false, handled by quick[]
jump[0xf5] = invalidMinor; // true, handled by quick[]
jump[0xf6] = invalidMinor; // null, handled by quick[]
jump[0xf7] = decodeUndefined; // undefined
jump[0xf8] = errorer('simple values are not supported'); // simple value, one byte follows, unsupported
jump[0xf9] = decodeFloat16; // half-precision float (two-byte IEEE 754)
jump[0xfa] = decodeFloat32; // single-precision float (four-byte IEEE 754)
jump[0xfb] = decodeFloat64; // double-precision float (eight-byte IEEE 754)
jump[0xfc] = invalidMinor;
jump[0xfd] = invalidMinor;
jump[0xfe] = invalidMinor;
jump[0xff] = decodeBreak; // "break" stop code

/** @type {Token[]} */
const quick = [];
// ints <24
for (let i = 0; i < 24; i++) {
  quick[i] = new Token(Type.uint, i, 1);
}
// negints >= -24
for (let i = -1; i >= -24; i--) {
  quick[31 - i] = new Token(Type.negint, i, 1);
}
// empty bytes
quick[0x40] = new Token(Type.bytes, new Uint8Array(0), 1);
// empty string
quick[0x60] = new Token(Type.string, '', 1);
// empty list
quick[0x80] = new Token(Type.array, 0, 1);
// empty map
quick[0xa0] = new Token(Type.map, 0, 1);
// false
quick[0xf4] = new Token(Type.false, false, 1);
// true
quick[0xf5] = new Token(Type.true, true, 1);
// null
quick[0xf6] = new Token(Type.null, null, 1);

/**
 * @param {Token} token
 * @returns {Uint8Array|undefined}
 */
function quickEncodeToken (token) {
  switch (token.type) {
    case Type.false:
      return fromArray([0xf4])
    case Type.true:
      return fromArray([0xf5])
    case Type.null:
      return fromArray([0xf6])
    case Type.bytes:
      if (!token.value.length) {
        return fromArray([0x40])
      }
      return
    case Type.string:
      if (token.value === '') {
        return fromArray([0x60])
      }
      return
    case Type.array:
      if (token.value === 0) {
        return fromArray([0x80])
      }
      /* c8 ignore next 2 */
      // shouldn't be possible if this were called when there was only one token
      return
    case Type.map:
      if (token.value === 0) {
        return fromArray([0xa0])
      }
      /* c8 ignore next 2 */
      // shouldn't be possible if this were called when there was only one token
      return
    case Type.uint:
      if (token.value < 24) {
        return fromArray([Number(token.value)])
      }
      return
    case Type.negint:
      if (token.value >= -24) {
        return fromArray([31 - Number(token.value)])
      }
  }
}

/**
 * @typedef {import('../interface.js').EncodeOptions} EncodeOptions
 * @typedef {import('../interface.js').OptionalTypeEncoder} OptionalTypeEncoder
 * @typedef {import('../interface.js').Reference} Reference
 * @typedef {import('../interface.js').StrictTypeEncoder} StrictTypeEncoder
 * @typedef {import('../interface.js').TokenTypeEncoder} TokenTypeEncoder
 * @typedef {import('../interface.js').TokenOrNestedTokens} TokenOrNestedTokens
 * @typedef {import('../interface.js').ByteWriter} ByteWriter
 */

/** @type {EncodeOptions} */
const defaultEncodeOptions = {
  float64: false,
  mapSorter,
  quickEncodeToken
};

/** @type {EncodeOptions} */
const rfc8949EncodeOptions = Object.freeze({
  float64: true,
  mapSorter: rfc8949MapSorter,
  quickEncodeToken
});

/** @returns {TokenTypeEncoder[]} */
function makeCborEncoders () {
  const encoders = [];
  encoders[Type.uint.major] = encodeUint;
  encoders[Type.negint.major] = encodeNegint;
  encoders[Type.bytes.major] = encodeBytes;
  encoders[Type.string.major] = encodeString;
  encoders[Type.array.major] = encodeArray;
  encoders[Type.map.major] = encodeMap;
  encoders[Type.tag.major] = encodeTag;
  encoders[Type.float.major] = encodeFloat;
  return encoders
}

const cborEncoders = makeCborEncoders();

const defaultWriter = new Bl();

/** @implements {Reference} */
class Ref {
  /**
   * @param {object|any[]} obj
   * @param {Reference|undefined} parent
   */
  constructor (obj, parent) {
    this.obj = obj;
    this.parent = parent;
  }

  /**
   * @param {object|any[]} obj
   * @returns {boolean}
   */
  includes (obj) {
    /** @type {Reference|undefined} */
    let p = this;
    do {
      if (p.obj === obj) {
        return true
      }
    } while (p = p.parent) // eslint-disable-line
    return false
  }

  /**
   * @param {Reference|undefined} stack
   * @param {object|any[]} obj
   * @returns {Reference}
   */
  static createCheck (stack, obj) {
    if (stack && stack.includes(obj)) {
      throw new Error(`${encodeErrPrefix} object contains circular references`)
    }
    return new Ref(obj, stack)
  }
}

const simpleTokens = {
  null: new Token(Type.null, null),
  undefined: new Token(Type.undefined, undefined),
  true: new Token(Type.true, true),
  false: new Token(Type.false, false),
  emptyArray: new Token(Type.array, 0),
  emptyMap: new Token(Type.map, 0)
};

/** @type {{[typeName: string]: StrictTypeEncoder}} */
const typeEncoders = {
  /**
   * @param {any} obj
   * @param {string} _typ
   * @param {EncodeOptions} _options
   * @param {Reference} [_refStack]
   * @returns {TokenOrNestedTokens}
   */
  number (obj, _typ, _options, _refStack) {
    if (!Number.isInteger(obj) || !Number.isSafeInteger(obj)) {
      return new Token(Type.float, obj)
    } else if (obj >= 0) {
      return new Token(Type.uint, obj)
    } else {
      return new Token(Type.negint, obj)
    }
  },

  /**
   * @param {any} obj
   * @param {string} _typ
   * @param {EncodeOptions} _options
   * @param {Reference} [_refStack]
   * @returns {TokenOrNestedTokens}
   */
  bigint (obj, _typ, _options, _refStack) {
    if (obj >= BigInt(0)) {
      return new Token(Type.uint, obj)
    } else {
      return new Token(Type.negint, obj)
    }
  },

  /**
   * @param {any} obj
   * @param {string} _typ
   * @param {EncodeOptions} _options
   * @param {Reference} [_refStack]
   * @returns {TokenOrNestedTokens}
   */
  Uint8Array (obj, _typ, _options, _refStack) {
    return new Token(Type.bytes, obj)
  },

  /**
   * @param {any} obj
   * @param {string} _typ
   * @param {EncodeOptions} _options
   * @param {Reference} [_refStack]
   * @returns {TokenOrNestedTokens}
   */
  string (obj, _typ, _options, _refStack) {
    return new Token(Type.string, obj)
  },

  /**
   * @param {any} obj
   * @param {string} _typ
   * @param {EncodeOptions} _options
   * @param {Reference} [_refStack]
   * @returns {TokenOrNestedTokens}
   */
  boolean (obj, _typ, _options, _refStack) {
    return obj ? simpleTokens.true : simpleTokens.false
  },

  /**
   * @param {any} _obj
   * @param {string} _typ
   * @param {EncodeOptions} _options
   * @param {Reference} [_refStack]
   * @returns {TokenOrNestedTokens}
   */
  null (_obj, _typ, _options, _refStack) {
    return simpleTokens.null
  },

  /**
   * @param {any} _obj
   * @param {string} _typ
   * @param {EncodeOptions} _options
   * @param {Reference} [_refStack]
   * @returns {TokenOrNestedTokens}
   */
  undefined (_obj, _typ, _options, _refStack) {
    return simpleTokens.undefined
  },

  /**
   * @param {any} obj
   * @param {string} _typ
   * @param {EncodeOptions} _options
   * @param {Reference} [_refStack]
   * @returns {TokenOrNestedTokens}
   */
  ArrayBuffer (obj, _typ, _options, _refStack) {
    return new Token(Type.bytes, new Uint8Array(obj))
  },

  /**
   * @param {any} obj
   * @param {string} _typ
   * @param {EncodeOptions} _options
   * @param {Reference} [_refStack]
   * @returns {TokenOrNestedTokens}
   */
  DataView (obj, _typ, _options, _refStack) {
    return new Token(Type.bytes, new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength))
  },

  /**
   * @param {any} obj
   * @param {string} _typ
   * @param {EncodeOptions} options
   * @param {Reference} [refStack]
   * @returns {TokenOrNestedTokens}
   */
  Array (obj, _typ, options, refStack) {
    if (!obj.length) {
      if (options.addBreakTokens === true) {
        return [simpleTokens.emptyArray, new Token(Type.break)]
      }
      return simpleTokens.emptyArray
    }
    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;
    for (const e of obj) {
      entries[i++] = objectToTokens(e, options, refStack);
    }
    if (options.addBreakTokens) {
      return [new Token(Type.array, obj.length), entries, new Token(Type.break)]
    }
    return [new Token(Type.array, obj.length), entries]
  },

  /**
   * @param {any} obj
   * @param {string} typ
   * @param {EncodeOptions} options
   * @param {Reference} [refStack]
   * @returns {TokenOrNestedTokens}
   */
  Object (obj, typ, options, refStack) {
    // could be an Object or a Map
    const isMap = typ !== 'Object';
    // it's slightly quicker to use Object.keys() than Object.entries()
    const keys = isMap ? obj.keys() : Object.keys(obj);
    const maxLength = isMap ? obj.size : keys.length;

    /** @type {undefined | [TokenOrNestedTokens, TokenOrNestedTokens][]} */
    let entries;

    if (maxLength) {
      // Pre-allocate the array with the expected size
      entries = new Array(maxLength);
      refStack = Ref.createCheck(refStack, obj);
      const skipUndefined = !isMap && options.ignoreUndefinedProperties;

      let i = 0;
      for (const key of keys) {
        const value = isMap ? obj.get(key) : obj[key];
        if (skipUndefined && value === undefined) {
          continue
        }
        entries[i++] = [
          objectToTokens(key, options, refStack),
          objectToTokens(value, options, refStack)
        ];
      }

      // Truncate only if properties were skipped
      if (i < maxLength) {
        entries.length = i;
      }
    }

    if (!entries?.length) {
      if (options.addBreakTokens === true) {
        return [simpleTokens.emptyMap, new Token(Type.break)]
      }
      return simpleTokens.emptyMap
    }

    sortMapEntries(entries, options);
    if (options.addBreakTokens) {
      return [new Token(Type.map, entries.length), entries, new Token(Type.break)]
    }
    return [new Token(Type.map, entries.length), entries]
  },

  /**
   * Encode a `Tagged` wrapper as a CBOR tag header followed by the encoded
   * form of the wrapped value. The value is recursively tokenised through
   * `objectToTokens()` so any registered `typeEncoders` apply to it.
   *
   * @param {any} obj
   * @param {string} _typ
   * @param {EncodeOptions} options
   * @param {Reference} [refStack]
   * @returns {TokenOrNestedTokens}
   */
  Tagged (obj, _typ, options, refStack) {
    return [
      new Token(Type.tag, obj.tag),
      objectToTokens(obj.value, options, refStack)
    ]
  }
};

typeEncoders.Map = typeEncoders.Object;
typeEncoders.Buffer = typeEncoders.Uint8Array;
for (const typ of 'Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64'.split(' ')) {
  typeEncoders[`${typ}Array`] = typeEncoders.DataView;
}

/**
 * @param {any} obj
 * @param {EncodeOptions} [options]
 * @param {Reference} [refStack]
 * @returns {TokenOrNestedTokens}
 */
function objectToTokens (obj, options = {}, refStack) {
  const typ = is(obj);
  const customTypeEncoder = (options && options.typeEncoders && /** @type {OptionalTypeEncoder} */ options.typeEncoders[typ]) || typeEncoders[typ];
  if (typeof customTypeEncoder === 'function') {
    const tokens = customTypeEncoder(obj, typ, options, refStack);
    if (tokens != null) {
      return tokens
    }
  }
  const typeEncoder = typeEncoders[typ];
  if (!typeEncoder) {
    throw new Error(`${encodeErrPrefix} unsupported type: ${typ}`)
  }
  return typeEncoder(obj, typ, options, refStack)
}

/*
CBOR key sorting is a mess.

The canonicalisation recommendation from https://tools.ietf.org/html/rfc7049#section-3.9
includes the wording:

> The keys in every map must be sorted lowest value to highest.
> Sorting is performed on the bytes of the representation of the key
> data items without paying attention to the 3/5 bit splitting for
> major types.
> ...
>  *  If two keys have different lengths, the shorter one sorts
      earlier;
>  *  If two keys have the same length, the one with the lower value
      in (byte-wise) lexical order sorts earlier.

1. It is not clear what "bytes of the representation of the key" means: is it
   the CBOR representation, or the binary representation of the object itself?
   Consider the int and uint difference here.
2. It is not clear what "without paying attention to" means: do we include it
   and compare on that? Or do we omit the special prefix byte, (mostly) treating
   the key in its plain binary representation form.

The FIDO 2.0: Client To Authenticator Protocol spec takes the original CBOR
wording and clarifies it according to their understanding.
https://fidoalliance.org/specs/fido-v2.0-rd-20170927/fido-client-to-authenticator-protocol-v2.0-rd-20170927.html#message-encoding

> The keys in every map must be sorted lowest value to highest. Sorting is
> performed on the bytes of the representation of the key data items without
> paying attention to the 3/5 bit splitting for major types. The sorting rules
> are:
>  * If the major types are different, the one with the lower value in numerical
>    order sorts earlier.
>  * If two keys have different lengths, the shorter one sorts earlier;
>  * If two keys have the same length, the one with the lower value in
>    (byte-wise) lexical order sorts earlier.

Some other implementations, such as borc, do a full encode then do a
length-first, byte-wise-second comparison:
https://github.com/dignifiedquire/borc/blob/b6bae8b0bcde7c3976b0f0f0957208095c392a36/src/encoder.js#L358
https://github.com/dignifiedquire/borc/blob/b6bae8b0bcde7c3976b0f0f0957208095c392a36/src/utils.js#L143-L151

This has the benefit of being able to easily handle arbitrary keys, including
complex types (maps and arrays).

We'll opt for the FIDO approach, since it affords some efficies since we don't
need a full encode of each key to determine order and can defer to the types
to determine how to most efficiently order their values (i.e. int and uint
ordering can be done on the numbers, no need for byte-wise, for example).

Recommendation: stick to single key types or you'll get into trouble, and prefer
string keys because it's much simpler that way.
*/

/**
 * @param {TokenOrNestedTokens[]} entries
 * @param {EncodeOptions} options
 */
function sortMapEntries (entries, options) {
  if (options.mapSorter) {
    entries.sort(options.mapSorter);
  }
}

/**
 * @param {(Token|Token[])[]} e1
 * @param {(Token|Token[])[]} e2
 * @returns {number}
 */
function mapSorter (e1, e2) {
  // the key position ([0]) could have a single token or an array
  // almost always it'll be a single token but complex key might get involved
  /* c8 ignore next 2 */
  const keyToken1 = Array.isArray(e1[0]) ? e1[0][0] : e1[0];
  const keyToken2 = Array.isArray(e2[0]) ? e2[0][0] : e2[0];

  // different key types
  if (keyToken1.type !== keyToken2.type) {
    return keyToken1.type.compare(keyToken2.type)
  }

  const major = keyToken1.type.major;
  // TODO: handle case where cmp === 0 but there are more keyToken e. complex type)
  const tcmp = cborEncoders[major].compareTokens(keyToken1, keyToken2);
  /* c8 ignore next 5 */
  if (tcmp === 0) {
    // duplicate key or complex type where the first token matched,
    // i.e. a map or array and we're only comparing the opening token
    console.warn('WARNING: complex key types used, CBOR key sorting guarantees are gone');
  }
  return tcmp
}

/**
 * @typedef {Token & { _keyBytes?: Uint8Array }} TokenEx
 *
 * @param {(Token|Token[])[]} e1
 * @param {(Token|Token[])[]} e2
 * @returns {number}
 */
function rfc8949MapSorter (e1, e2) {
  if (e1[0] instanceof Token && e2[0] instanceof Token) {
    const t1 = /** @type {TokenEx} */ (e1[0]);
    const t2 = /** @type {TokenEx} */ (e2[0]);

    if (!t1._keyBytes) {
      t1._keyBytes = encodeRfc8949(t1.value);
    }

    if (!t2._keyBytes) {
      t2._keyBytes = encodeRfc8949(t2.value);
    }

    return compare(t1._keyBytes, t2._keyBytes)
  }

  throw new Error('rfc8949MapSorter: complex key types are not supported yet')
}

/**
 * @param {any} data
 * @returns {Uint8Array}
 */
function encodeRfc8949 (data) {
  return encodeCustom(data, cborEncoders, rfc8949EncodeOptions)
}

/**
 * @param {ByteWriter} writer
 * @param {TokenOrNestedTokens} tokens
 * @param {TokenTypeEncoder[]} encoders
 * @param {EncodeOptions} options
 */
function tokensToEncoded (writer, tokens, encoders, options) {
  if (Array.isArray(tokens)) {
    for (const token of tokens) {
      tokensToEncoded(writer, token, encoders, options);
    }
  } else {
    encoders[tokens.type.major](writer, tokens, options);
  }
}

// CBOR major type prefixes, cached from Type for hot path performance
const MAJOR_UINT = Type.uint.majorEncoded;
const MAJOR_NEGINT = Type.negint.majorEncoded;
const MAJOR_BYTES = Type.bytes.majorEncoded;
const MAJOR_STRING = Type.string.majorEncoded;
const MAJOR_ARRAY = Type.array.majorEncoded;

// Simple value bytes (CBOR major type 7 + minor value)
const SIMPLE_FALSE = Type.float.majorEncoded | MINOR_FALSE;
const SIMPLE_TRUE = Type.float.majorEncoded | MINOR_TRUE;
const SIMPLE_NULL = Type.float.majorEncoded | MINOR_NULL;
const SIMPLE_UNDEFINED = Type.float.majorEncoded | MINOR_UNDEFINED;

const neg1b = BigInt(-1);
const pos1b = BigInt(1);

/**
 * Check if direct encoding can be used for the given options.
 * Direct encoding bypasses token creation for most values.
 * @param {EncodeOptions} options
 * @returns {boolean}
 */
function canDirectEncode (options) {
  // Cannot use direct encode with addBreakTokens (needs special break token handling).
  // Direct encode checks typeEncoders per-value, falling back to tokens as needed.
  // Maps fall back to token-based encoding for efficient key sorting.
  return options.addBreakTokens !== true
}

/**
 * Direct encode a value to the writer, bypassing token creation for most types.
 * Falls back to token-based encoding for custom type encoders.
 * @param {ByteWriter} writer
 * @param {any} data
 * @param {EncodeOptions} options
 * @param {Reference|undefined} refStack
 */
function directEncode (writer, data, options, refStack) {
  const typ = is(data);

  // Check for custom encoder for THIS specific type
  const customEncoder = options.typeEncoders && options.typeEncoders[typ];
  if (customEncoder) {
    const tokens = customEncoder(data, typ, options, refStack);
    if (tokens != null) {
      // Custom encoder returned tokens, serialize immediately
      tokensToEncoded(writer, tokens, cborEncoders, options);
      return
    }
    // Custom encoder returned null, fall through to default handling
  }

  // Direct encode based on type
  switch (typ) {
    case 'null':
      writer.push([SIMPLE_NULL]);
      return

    case 'undefined':
      writer.push([SIMPLE_UNDEFINED]);
      return

    case 'boolean':
      writer.push([data ? SIMPLE_TRUE : SIMPLE_FALSE]);
      return

    case 'number':
      if (!Number.isInteger(data) || !Number.isSafeInteger(data)) {
        // Float, use token encoder for complex float encoding
        encodeFloat(writer, new Token(Type.float, data), options);
      } else if (data >= 0) {
        encodeUintValue(writer, MAJOR_UINT, data);
      } else {
        // Negative integer
        encodeUintValue(writer, MAJOR_NEGINT, data * -1 - 1);
      }
      return

    case 'bigint':
      if (data >= BigInt(0)) {
        encodeUintValue(writer, MAJOR_UINT, data);
      } else {
        encodeUintValue(writer, MAJOR_NEGINT, data * neg1b - pos1b);
      }
      return

    case 'string': {
      const bytes = fromString(data);
      encodeUintValue(writer, MAJOR_STRING, bytes.length);
      writer.push(bytes);
      return
    }

    case 'Uint8Array':
      encodeUintValue(writer, MAJOR_BYTES, data.length);
      writer.push(data);
      return

    case 'Array':
      if (!data.length) {
        writer.push([MAJOR_ARRAY]); // Empty array: 0x80
        return
      }
      refStack = Ref.createCheck(refStack, data);
      encodeUintValue(writer, MAJOR_ARRAY, data.length);
      for (const elem of data) {
        directEncode(writer, elem, options, refStack);
      }
      return

    case 'Object':
    case 'Map':
      // Maps require key sorting, use token-based encoding for efficiency
      // (pre-encoding all keys for sorting is expensive)
      {
        const tokens = typeEncoders.Object(data, typ, options, refStack);
        tokensToEncoded(writer, tokens, cborEncoders, options);
      }
      return

    default:
    // Fall back to token-based encoding for other types (DataView, TypedArrays, etc.)
    {
      const typeEncoder = typeEncoders[typ];
      if (!typeEncoder) {
        throw new Error(`${encodeErrPrefix} unsupported type: ${typ}`)
      }
      const tokens = typeEncoder(data, typ, options, refStack);
      tokensToEncoded(writer, tokens, cborEncoders, options);
    }
  }
}

/**
 * @param {any} data
 * @param {TokenTypeEncoder[]} encoders
 * @param {EncodeOptions} options
 * @param {Uint8Array} [destination]
 * @returns {Uint8Array}
 */
function encodeCustom (data, encoders, options, destination) {
  // arg ordering is different to encodeInto for backward compatibility
  const hasDest = destination instanceof Uint8Array;
  let writeTo = hasDest ? new U8Bl(destination) : defaultWriter;

  const tokens = objectToTokens(data, options);
  if (!Array.isArray(tokens) && options.quickEncodeToken) {
    const quickBytes = options.quickEncodeToken(tokens);
    if (quickBytes) {
      if (hasDest) {
        // Copy quick bytes into destination buffer
        writeTo.push(quickBytes);
        return writeTo.toBytes()
      }
      return quickBytes
    }
    const encoder = encoders[tokens.type.major];
    if (encoder.encodedSize) {
      const size = encoder.encodedSize(tokens, options);
      if (!hasDest) {
        writeTo = new Bl(size);
      }
      encoder(writeTo, tokens, options);
      /* c8 ignore next 4 */
      // this would be a problem with encodedSize() functions
      if (writeTo.chunks.length !== 1) {
        throw new Error(`Unexpected error: pre-calculated length for ${tokens} was wrong`)
      }
      return hasDest ? writeTo.toBytes() : asU8A(writeTo.chunks[0])
    }
  }
  writeTo.reset();
  tokensToEncoded(writeTo, tokens, encoders, options);
  return writeTo.toBytes(true)
}

/**
 * @param {any} data
 * @param {EncodeOptions} [options]
 * @returns {Uint8Array}
 */
function encode (data, options) {
  options = Object.assign({}, defaultEncodeOptions, options);

  // Use direct encode path when possible
  if (canDirectEncode(options)) {
    defaultWriter.reset();
    directEncode(defaultWriter, data, options, undefined);
    return defaultWriter.toBytes(true)
  }

  return encodeCustom(data, cborEncoders, options)
}

/**
 * @param {any} data
 * @param {Uint8Array} destination
 * @param {EncodeOptions} [options]
 * @returns {{ written: number }}
 */
function encodeInto (data, destination, options) {
  options = Object.assign({}, defaultEncodeOptions, options);

  // Use direct encode path when possible
  if (canDirectEncode(options)) {
    const writer = new U8Bl(destination);
    directEncode(writer, data, options, undefined);
    return { written: writer.toBytes().length }
  }

  const result = encodeCustom(data, cborEncoders, options, destination);
  return { written: result.length }
}

/**
 * @typedef {import('./token.js').Token} Token
 * @typedef {import('../interface.js').DecodeOptions} DecodeOptions
 * @typedef {import('../interface.js').DecodeTokenizer} DecodeTokenizer
 * @typedef {import('../interface.js').TagDecodeControl} TagDecodeControl
 */

const defaultDecodeOptions = {
  strict: false,
  allowIndefinite: true,
  allowUndefined: true,
  allowBigInt: true
};

/**
 * @implements {DecodeTokenizer}
 */
class Tokeniser {
  /**
   * @param {Uint8Array} data
   * @param {DecodeOptions} options
   */
  constructor (data, options = {}) {
    this._pos = 0;
    this.data = data;
    this.options = options;
  }

  pos () {
    return this._pos
  }

  done () {
    return this._pos >= this.data.length
  }

  next () {
    const byt = this.data[this._pos];
    let token = quick[byt];
    if (token === undefined) {
      const decoder = jump[byt];
      /* c8 ignore next 4 */
      // if we're here then there's something wrong with our jump or quick lists!
      if (!decoder) {
        throw new Error(`${decodeErrPrefix} no decoder for major type ${byt >>> 5} (byte 0x${byt.toString(16).padStart(2, '0')})`)
      }
      const minor = byt & 31;
      token = decoder(this.data, this._pos, minor, this.options);
    }
    // @ts-ignore we get to assume encodedLength is set (crossing fingers slightly)
    this._pos += token.encodedLength;
    return token
  }
}

const DONE = Symbol.for('DONE');
const BREAK = Symbol.for('BREAK');

/**
 * @param {Token} token
 * @param {DecodeTokenizer} tokeniser
 * @param {DecodeOptions} options
 * @returns {any|BREAK|DONE}
 */
function tokenToArray (token, tokeniser, options) {
  const arr = [];
  for (let i = 0; i < token.value; i++) {
    const value = tokensToObject(tokeniser, options);
    if (value === BREAK) {
      if (token.value === Infinity) {
        // normal end to indefinite length array
        break
      }
      throw new Error(`${decodeErrPrefix} got unexpected break to lengthed array`)
    }
    if (value === DONE) {
      throw new Error(`${decodeErrPrefix} found array but not enough entries (got ${i}, expected ${token.value})`)
    }
    arr[i] = value;
  }
  return arr
}

/**
 * @param {Token} token
 * @param {DecodeTokenizer} tokeniser
 * @param {DecodeOptions} options
 * @returns {any|BREAK|DONE}
 */
function tokenToMap (token, tokeniser, options) {
  const useMaps = options.useMaps === true;
  const rejectDuplicateMapKeys = options.rejectDuplicateMapKeys === true;
  const obj = useMaps ? undefined : {};
  const m = useMaps ? new Map() : undefined;
  for (let i = 0; i < token.value; i++) {
    const key = tokensToObject(tokeniser, options);
    if (key === BREAK) {
      if (token.value === Infinity) {
        // normal end to indefinite length map
        break
      }
      throw new Error(`${decodeErrPrefix} got unexpected break to lengthed map`)
    }
    if (key === DONE) {
      throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${i} [no key], expected ${token.value})`)
    }
    if (!useMaps && typeof key !== 'string') {
      throw new Error(`${decodeErrPrefix} non-string keys not supported (got ${typeof key})`)
    }
    if (rejectDuplicateMapKeys) {
      // @ts-ignore
      if ((useMaps && m.has(key)) || (!useMaps && Object.hasOwn(obj, key))) {
        throw new Error(`${decodeErrPrefix} found repeat map key "${key}"`)
      }
    }
    const value = tokensToObject(tokeniser, options);
    if (value === DONE) {
      throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${i} [no value], expected ${token.value})`)
    }
    if (useMaps) {
      // @ts-ignore TODO reconsider this .. maybe needs to be strict about key types
      m.set(key, value);
    } else {
      // @ts-ignore TODO reconsider this .. maybe needs to be strict about key types
      obj[key] = value;
    }
  }
  // @ts-ignore c'mon man
  return useMaps ? m : obj
}

/**
 * Generator that yields [key, value] entries from a CBOR map token.
 * Used by tag decoders that need to preserve key types (e.g., Tag 259 Map).
 * @param {Token} token - The map token
 * @param {DecodeTokenizer} tokeniser
 * @param {DecodeOptions} options
 * @returns {Generator<[any, any], void, unknown>}
 */
function * tokenToMapEntries (token, tokeniser, options) {
  for (let i = 0; i < token.value; i++) {
    const key = tokensToObject(tokeniser, options);
    if (key === BREAK) {
      if (token.value === Infinity) {
        // normal end to indefinite length map
        break
      }
      throw new Error(`${decodeErrPrefix} got unexpected break to lengthed map`)
    }
    if (key === DONE) {
      throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${i} [no key], expected ${token.value})`)
    }
    const value = tokensToObject(tokeniser, options);
    if (value === DONE) {
      throw new Error(`${decodeErrPrefix} found map but not enough entries (got ${i} [no value], expected ${token.value})`)
    }
    yield [key, value];
  }
}

/**
 * Creates a TagDecodeControl object for tag decoders.
 * @param {DecodeTokenizer} tokeniser
 * @param {DecodeOptions} options
 * @returns {TagDecodeControl}
 */
function createTagDecodeControl (tokeniser, options) {
  let called = false;

  /**
   * @type {TagDecodeControl}
   */
  const decode = function () {
    if (called) {
      throw new Error(`${decodeErrPrefix} tag decode() may only be called once`)
    }
    called = true;
    const value = tokensToObject(tokeniser, options);
    if (value === DONE) {
      throw new Error(`${decodeErrPrefix} tag content missing`)
    }
    if (value === BREAK) {
      throw new Error(`${decodeErrPrefix} got unexpected break in tag content`)
    }
    return value
  };

  decode.entries = function () {
    if (called) {
      throw new Error(`${decodeErrPrefix} tag decode() may only be called once`)
    }
    called = true;

    // Get the next token and ensure it's a map
    const token = tokeniser.next();
    if (!Type.equals(token.type, Type.map)) {
      throw new Error(`${decodeErrPrefix} entries() requires map content, got ${token.type.name}`)
    }

    // Collect all entries into an array (ensures full content consumption)
    const entries = [];
    for (const entry of tokenToMapEntries(token, tokeniser, options)) {
      entries.push(entry);
    }
    return entries
  };

  // For internal tracking
  Object.defineProperty(decode, '_called', {
    get () { return called },
    enumerable: false
  });

  return decode
}

/**
 * @param {DecodeTokenizer} tokeniser
 * @param {DecodeOptions} options
 * @returns {any|BREAK|DONE}
 */
function tokensToObject (tokeniser, options) {
  // should we support array as an argument?
  // check for tokenIter[Symbol.iterator] and replace tokenIter with what that returns?
  if (tokeniser.done()) {
    return DONE
  }

  const token = tokeniser.next();

  if (Type.equals(token.type, Type.break)) {
    return BREAK
  }

  if (token.type.terminal) {
    return token.value
  }

  if (Type.equals(token.type, Type.array)) {
    return tokenToArray(token, tokeniser, options)
  }

  if (Type.equals(token.type, Type.map)) {
    return tokenToMap(token, tokeniser, options)
  }

  if (Type.equals(token.type, Type.tag)) {
    if (options.tags && typeof options.tags[token.value] === 'function') {
      const decodeControl = createTagDecodeControl(tokeniser, options);
      const result = options.tags[token.value](decodeControl);
      if (!decodeControl._called) {
        throw new Error(`${decodeErrPrefix} tag decoder must call decode() or entries()`)
      }
      return result
    }
    throw new Error(`${decodeErrPrefix} tag not supported (${token.value})`)
  }
  /* c8 ignore next */
  throw new Error('unsupported')
}

/**
 * @param {Uint8Array} data
 * @param {DecodeOptions} [options]
 * @returns {[any, Uint8Array]}
 */
function decodeFirst (data, options) {
  if (!(data instanceof Uint8Array)) {
    throw new Error(`${decodeErrPrefix} data to decode must be a Uint8Array`)
  }
  options = Object.assign({}, defaultDecodeOptions, options);
  // Convert Buffer to plain Uint8Array for faster slicing in decode path
  const u8aData = asU8A(data);
  const tokeniser = options.tokenizer || new Tokeniser(u8aData, options);
  const decoded = tokensToObject(tokeniser, options);
  if (decoded === DONE) {
    throw new Error(`${decodeErrPrefix} did not find any content to decode`)
  }
  if (decoded === BREAK) {
    throw new Error(`${decodeErrPrefix} got unexpected break`)
  }
  return [decoded, data.subarray(tokeniser.pos())]
}

/**
 * @param {Uint8Array} data
 * @param {DecodeOptions} [options]
 * @returns {any}
 */
function decode (data, options) {
  const [decoded, remainder] = decodeFirst(data, options);
  if (remainder.length > 0) {
    throw new Error(`${decodeErrPrefix} too many terminals, data makes no sense`)
  }
  return decoded
}

/**
 * @typedef {import('../interface.js').TagDecodeControl} TagDecodeControl
 * @typedef {(decode: TagDecodeControl) => Tagged} TaggedTagDecoder
 */

/**
 * A wrapper class for representing a CBOR tag with an arbitrary nested value.
 *
 * `Tagged` is a symmetric primitive: it can be passed to `encode()` to emit
 * a CBOR tag header followed by the encoded form of `value`, and it can be
 * returned from a tag decoder (via `Tagged.decoder(tag)` or `Tagged.preserve()`)
 * to round-trip a tag through decode without losing the tag number.
 *
 * Use `Tagged` for one-off tag handling where defining a dedicated
 * `typeEncoders` entry and tag decoder pair would be heavyweight, e.g. when
 * wrapping a structure in a single application-specific tag (COSE, dCBOR
 * envelopes, etc.).
 *
 * For systematic mapping of a JS type to a tag (e.g. CID -> tag 42), prefer
 * a dedicated `typeEncoders` entry instead.
 */
class Tagged {
  /**
   * @param {number} tag - CBOR tag number, a non-negative integer
   * @param {any} value - The value to be tagged; encoded recursively
   */
  constructor (tag, value) {
    if (typeof tag !== 'number' || !Number.isInteger(tag) || tag < 0) {
      throw new TypeError('Tagged: tag must be a non-negative integer')
    }
    this.tag = tag;
    this.value = value;
  }

  /**
   * Build a tag decoder for use in `decode()`'s `tags` option that returns the
   * decoded content wrapped in a `Tagged` instance, preserving the tag number
   * for the caller to inspect.
   *
   * @param {number} tag - The CBOR tag number this decoder will be registered for
   * @returns {TaggedTagDecoder}
   *
   * @example
   * import { decode, Tagged } from 'cborg'
   * const value = decode(bytes, { tags: { 16: Tagged.decoder(16) } })
   * // value instanceof Tagged; value.tag === 16
   */
  static decoder (tag) {
    return (decode) => new Tagged(tag, decode())
  }

  /**
   * Build a `tags` option for `decode()` that wraps each listed tag number in
   * a `Tagged` instance, preserving those tags through decode without
   * registering a dedicated decoder per tag.
   *
   * @param {...number} tagNumbers - One or more CBOR tag numbers to preserve
   * @returns {{[tagNumber: number]: TaggedTagDecoder}}
   *
   * @example
   * import { decode, Tagged } from 'cborg'
   * const value = decode(bytes, { tags: Tagged.preserve(16, 96) })
   */
  static preserve (...tagNumbers) {
    /** @type {{[tagNumber: number]: TaggedTagDecoder}} */
    const tags = {};
    for (const tag of tagNumbers) {
      tags[tag] = Tagged.decoder(tag);
    }
    return tags
  }
}

// Symbol.toStringTag so the internal `is()` type detection returns 'Tagged'
// for instances, allowing the default Tagged typeEncoder to match.
Object.defineProperty(Tagged.prototype, Symbol.toStringTag, {
  value: 'Tagged'
});

class Wallet {
  static {
    this.isConnecting = new Observable(
      Boolean(window.localStorage.getItem("cf-wallet-connected"))
    );
  }
  static {
    this.lastConnectedWallet = new Observable(
      window.localStorage.getItem("cf-last-connected-wallet") || ""
    );
  }
  static {
    this.isConnected = new Observable(false);
  }
  static {
    this.enabledObserver = new Observable(false);
  }
  static {
    this.isConnectingObserver = new Observable(false);
  }
  static {
    this.enabledWalletObserver = new Observable(null);
  }
  static {
    this.stakeAddressObserver = new Observable(null);
  }
  static {
    this.installedWalletExtensionsObserver = new Observable([]);
  }
  static {
    this.usedAddressesObserver = new Observable([]);
  }
  static {
    this.unusedAddressesObserver = new Observable([]);
  }
  static {
    this.accountBalanceObserver = new Observable(0);
  }
  static {
    this.peerConnectAddressObserver = new Observable("");
  }
  static {
    this.supportedExtensionsObserver = new Observable([]);
  }
  static {
    this.enabledExtensionsObserver = new Observable([]);
  }
  constructor() {
  }
  static disconnect() {
    this.enabledObserver.set(false);
    this.enabledWalletObserver.set(null);
    this.stakeAddressObserver.set(null);
    this.usedAddressesObserver.set([]);
    this.unusedAddressesObserver.set([]);
    this.accountBalanceObserver.set(0);
    this.isConnected.set(false);
    this.lastConnectedWallet.set("");
    this.peerConnectAddressObserver.set("");
    this.enabledExtensionsObserver.set([]);
    this.supportedExtensionsObserver.set([]);
    window.dispatchEvent(new Event("storage"));
    this.clearLocalStorage();
  }
  static clearLocalStorage() {
    window.localStorage.removeItem("cf-wallet-connected");
    window.localStorage.removeItem("cf-last-connected-wallet");
    window.localStorage.removeItem("cf-requested-extensions");
  }
  static addEventListener(event, callback) {
    if (![
      "enabled",
      "connecting",
      "enabledWallet",
      "stakeAddress",
      "usedAddresses",
      "unusedAddresses",
      "accountBalance",
      "connected",
      "lastConnectedWallet",
      "peerConnectAddress",
      "installedWalletExtensions",
      "enabledExtensions",
      "supportedExtensions"
    ].includes(event)) {
      throw new Error(
        `The Event ${event} is not supported. Please use one of the following events: enabled, connecting, enabledWallet, stakeAddress, usedAddresses, unusedAddresses, accountBalance, connected, lastConnectedWallet, peerConnectAddress, installedWalletExtensions, enabledExtensions, supportedExtensions`
      );
    }
    if (event === "enabled") {
      this.enabledObserver.subscribe(callback);
    } else if (event === "connecting") {
      this.isConnectingObserver.subscribe(callback);
    } else if (event === "enabledWallet") {
      this.enabledWalletObserver.subscribe(callback);
    } else if (event === "stakeAddress") {
      this.stakeAddressObserver.subscribe(callback);
    } else if (event === "usedAddresses") {
      this.usedAddressesObserver.subscribe(callback);
    } else if (event === "unusedAddresses") {
      this.unusedAddressesObserver.subscribe(callback);
    } else if (event === "installedWalletExtensions") {
      this.installedWalletExtensionsObserver.subscribe(callback);
    } else if (event === "accountBalance") {
      this.accountBalanceObserver.subscribe(callback);
    } else if (event === "connected") {
      this.isConnected.subscribe(callback);
    } else if (event === "lastConnectedWallet") {
      this.lastConnectedWallet.subscribe(callback);
    } else if (event === "peerConnectAddress") {
      this.peerConnectAddressObserver.subscribe(callback);
    } else if (event === "enabledExtensions") {
      this.enabledExtensionsObserver.subscribe(callback);
    } else if (event === "supportedExtensions") {
      this.supportedExtensionsObserver.subscribe(callback);
    }
  }
  static removeEventListener(event, callback) {
    if (![
      "enabled",
      "connecting",
      "enabledWallet",
      "stakeAddress",
      "usedAddresses",
      "unusedAddresses",
      "accountBalance",
      "connected",
      "lastConnectedWallet",
      "peerConnectAddress",
      "installedWalletExtensions",
      "enabledExtensions",
      "supportedExtensions"
    ].includes(event)) {
      throw new Error(
        `The Event ${event} is not supported. Please use one of the following events: enabled, connecting, enabledWallet, stakeAddress, usedAddresses, unusedAddresses, accountBalance, connected, lastConnectedWallet, peerConnectAddress, installedWalletExtensions, enabledExtensions, supportedExtensions`
      );
    }
    if (event === "enabled") {
      this.enabledObserver.unsubscribe(callback);
    } else if (event === "connecting") {
      this.isConnectingObserver.unsubscribe(callback);
    } else if (event === "enabledWallet") {
      this.enabledWalletObserver.unsubscribe(callback);
    } else if (event === "stakeAddress") {
      this.stakeAddressObserver.unsubscribe(callback);
    } else if (event === "usedAddresses") {
      this.usedAddressesObserver.unsubscribe(callback);
    } else if (event === "unusedAddresses") {
      this.unusedAddressesObserver.unsubscribe(callback);
    } else if (event === "installedWalletExtensions") {
      this.installedWalletExtensionsObserver.unsubscribe(callback);
    } else if (event === "accountBalance") {
      this.accountBalanceObserver.unsubscribe(callback);
    } else if (event === "connected") {
      this.isConnected.unsubscribe(callback);
    } else if (event === "lastConnectedWallet") {
      this.lastConnectedWallet.unsubscribe(callback);
    } else if (event === "peerConnectAddress") {
      this.peerConnectAddressObserver.unsubscribe(callback);
    } else if (event === "enabledExtensions") {
      this.enabledExtensionsObserver.unsubscribe(callback);
    } else if (event === "supportedExtensions") {
      this.supportedExtensionsObserver.unsubscribe(callback);
    }
  }
  static subscribeToObservables(setIsEnabled, setIsConnecting, setEnabledWallet, setStakeAddress, setUsedAddresses, setUnusedAddresses, setInstalledExtensions, setAccountBalance, setIsConnected, setLastConnectedWallet, setPeerConnectAddress, setEnabledExtensions, setSupportedExtensions) {
    this.enabledObserver.subscribe(setIsEnabled);
    this.isConnectingObserver.subscribe(setIsConnecting);
    this.enabledWalletObserver.subscribe(setEnabledWallet);
    this.stakeAddressObserver.subscribe(setStakeAddress);
    this.usedAddressesObserver.subscribe(setUsedAddresses);
    this.unusedAddressesObserver.subscribe(setUnusedAddresses);
    this.installedWalletExtensionsObserver.subscribe(setInstalledExtensions);
    this.accountBalanceObserver.subscribe(setAccountBalance);
    this.isConnected.subscribe(setIsConnected);
    this.lastConnectedWallet.subscribe(setLastConnectedWallet);
    this.peerConnectAddressObserver.subscribe(setPeerConnectAddress);
    if (setEnabledExtensions) {
      this.enabledExtensionsObserver.subscribe(setEnabledExtensions);
    }
    if (setSupportedExtensions) {
      this.supportedExtensionsObserver.subscribe(setSupportedExtensions);
    }
  }
  static unsubscribeFromObservables(setIsEnabled, setIsConnecting, setEnabledWallet, setStakeAddress, setUsedAddresses, setUnusedAddresses, setInstalledExtensions, setAccountBalance, setIsConnected, setLastConnectedWallet, setPeerConnectAddress, setEnabledExtensions, setSupportedExtensions) {
    this.enabledObserver.unsubscribe(setIsEnabled);
    this.isConnectingObserver.unsubscribe(setIsConnecting);
    this.enabledWalletObserver.unsubscribe(setEnabledWallet);
    this.stakeAddressObserver.unsubscribe(setStakeAddress);
    this.usedAddressesObserver.unsubscribe(setUsedAddresses);
    this.unusedAddressesObserver.unsubscribe(setUnusedAddresses);
    this.installedWalletExtensionsObserver.unsubscribe(setInstalledExtensions);
    this.accountBalanceObserver.unsubscribe(setAccountBalance);
    this.isConnected.unsubscribe(setIsConnected);
    this.lastConnectedWallet.unsubscribe(setLastConnectedWallet);
    this.peerConnectAddressObserver.unsubscribe(setPeerConnectAddress);
    if (setEnabledExtensions) {
      this.enabledExtensionsObserver.unsubscribe(setEnabledExtensions);
    }
    if (setSupportedExtensions) {
      this.supportedExtensionsObserver.unsubscribe(setSupportedExtensions);
    }
  }
  static startInjectWalletListener() {
    this.injectWalletListener = new InjectWalletListener(() => {
      this.installedWalletExtensionsObserver.set(
        this.getInstalledWalletExtensions()
      );
    });
    this.injectWalletListener.start();
  }
  static stopInjectWalletListener() {
    if (this.injectWalletListener) {
      this.injectWalletListener.stop();
    }
  }
  static async unwrapApi() {
    const cardano = window.cardano;
    const walletKey = this.lastConnectedWallet.get() === "typhon" ? "typhoncip30" : this.lastConnectedWallet.get();
    const saved = window.localStorage.getItem("cf-requested-extensions");
    const extensions = saved ? JSON.parse(saved) : [];
    return extensions.length > 0 ? await cardano[walletKey].enable({ extensions }) : await cardano[walletKey].enable();
  }
  static async checkEnabled(network) {
    const cardano = window.cardano;
    if (typeof cardano === "undefined") {
      return;
    }
    const saved = window.localStorage.getItem("cf-requested-extensions");
    const extensions = saved ? JSON.parse(saved) : [];
    if (Wallet.lastConnectedWallet.get() !== "") {
      if (Wallet.lastConnectedWallet.get() === "typhon") {
        try {
          await this.connectToWallet("typhoncip30", network, extensions);
        } catch (error) {
          throw error;
        }
        await this.connectToWallet("typhoncip30", network, extensions);
      } else {
        try {
          await this.connectToWallet(
            this.lastConnectedWallet.get(),
            network,
            extensions
          );
        } catch (error) {
          throw error;
        }
      }
    }
  }
  static async connectToWallet(walletName, networkType, extensions = [], retries = 20, retryIntervalInMs = 25) {
    const checkWalletAvailable = (walletName2, retries2, retryIntervalInMs2) => new Promise((resolve, reject) => {
      const cardano = window.cardano;
      if (typeof cardano === "undefined" || typeof cardano[walletName2] === "undefined") {
        if (retries2 > 0) {
          setTimeout(
            () => resolve(
              checkWalletAvailable(
                walletName2,
                retries2 - 1,
                retryIntervalInMs2
              )
            ),
            retryIntervalInMs2
          );
        } else {
          reject();
        }
      } else {
        resolve();
      }
    });
    const establishConnection = async (limitNetwork) => {
      try {
        await checkWalletAvailable(walletName, retries, retryIntervalInMs);
      } catch (error) {
        throw new ExtensionNotInjectedError(walletName);
      }
      const cardano = window.cardano;
      if (typeof cardano[walletName] !== "undefined" && typeof cardano[walletName].enable === "function") {
        let api = {};
        if (Array.isArray(cardano[walletName].supportedExtensions)) {
          this.supportedExtensionsObserver.set(
            cardano[walletName].supportedExtensions
          );
        }
        try {
          api = extensions.length > 0 ? await cardano[walletName].enable({ extensions }) : await cardano[walletName].enable();
        } catch (error) {
          throw new WalletConnectError(walletName, error.message);
        }
        if (typeof api.getExtensions === "function") {
          const enabled = await api.getExtensions();
          this.enabledExtensionsObserver.set(enabled);
        }
        if (typeof api.getRewardAddresses === "function") {
          const hexAddresses = await api.getRewardAddresses();
          if (hexAddresses && hexAddresses.length > 0) {
            try {
              const bech32Address = decodeHexAddress(hexAddresses[0]);
              let networkType2 = NetworkType.MAINNET;
              if (bech32Address.startsWith("stake_test")) {
                networkType2 = NetworkType.TESTNET;
              }
              if (limitNetwork && limitNetwork !== networkType2) {
                throw new WrongNetworkTypeError(limitNetwork, networkType2);
              }
              const setValuesAsync = async () => {
                if (typeof api.getUsedAddresses === "function") {
                  const usedAddresses = await api.getUsedAddresses();
                  this.usedAddressesObserver.set(
                    usedAddresses.map(
                      (address) => decodeHexAddress(address)
                    )
                  );
                }
                if (typeof api.getUnusedAddresses === "function") {
                  const unusedAddresses = await api.getUnusedAddresses();
                  this.unusedAddressesObserver.set(
                    unusedAddresses.map(
                      (address) => decodeHexAddress(address)
                    )
                  );
                }
                if (typeof api.getBalance === "function") {
                  const cborBalance = await api.getBalance();
                  const balance = decode(bufferExports.Buffer.from(cborBalance, "hex"), {
                    useMaps: true
                  });
                  this.accountBalanceObserver.set(
                    Array.isArray(balance) ? balance[0] / 1e6 : balance / 1e6
                  );
                }
              };
              setValuesAsync();
              this.stakeAddressObserver.set(bech32Address);
              this.enabledWalletObserver.set(walletName);
              this.enabledObserver.set(true);
              this.isConnected.set(true);
              if (walletName === "typhoncip30") {
                window.localStorage.setItem(
                  "cf-last-connected-wallet",
                  "typhon"
                );
                this.lastConnectedWallet.set("typhon");
              } else {
                window.localStorage.setItem(
                  "cf-last-connected-wallet",
                  walletName
                );
                this.lastConnectedWallet.set(walletName);
              }
              window.localStorage.setItem("cf-wallet-connected", String(true));
              window.dispatchEvent(new Event("storage"));
            } catch (error) {
              throw error;
            }
          }
        } else {
          throw new WalletNotCip30CompatibleError(walletName);
        }
      }
    };
    try {
      await establishConnection(networkType);
    } catch (error) {
      throw error;
    }
  }
  static async connect(walletName, network, onConnect, onError, extensions = []) {
    this.isConnecting.set(true);
    const cardano = window.cardano;
    walletName = walletName.toLowerCase();
    if (typeof cardano !== "undefined") {
      if (typeof cardano[walletName] !== "undefined") {
        try {
          if (walletName === "typhon") {
            walletName = "typhoncip30";
          }
          if (extensions.length > 0) {
            window.localStorage.setItem(
              "cf-requested-extensions",
              JSON.stringify(extensions)
            );
          } else {
            window.localStorage.removeItem("cf-requested-extensions");
          }
          await this.connectToWallet(walletName, network, extensions);
          if (typeof onConnect === "function") {
            onConnect();
          }
        } catch (error) {
          if (typeof onError === "function") {
            onError(error);
          }
        } finally {
          this.isConnecting.set(false);
        }
      } else {
        this.isConnecting.set(false);
        if (typeof onError === "function") {
          onError(new WalletNotInstalledError(walletName));
        }
      }
    } else {
      this.isConnecting.set(false);
      if (typeof onError === "function") {
        onError(new ExtensionNotInjectedError(walletName));
      }
    }
  }
  static getInstalledWalletExtensions(supportedWallets) {
    const cardano = window.cardano;
    if (typeof cardano === "undefined") {
      return [];
    }
    if (supportedWallets) {
      return Object.keys(cardano).map((walletExtension) => walletExtension.toLowerCase()).filter(
        (walletExtension) => supportedWallets.map((walletName) => walletName.toLowerCase()).includes(walletExtension)
      );
    } else {
      return Object.keys(cardano).filter(
        (walletExtension) => typeof cardano[walletExtension].enable === "function"
      ).map((walletExtension) => walletExtension.toLowerCase());
    }
  }
  static async getRewardAddresses() {
    const api = await this.unwrapApi();
    if (typeof api.getRewardAddresses === "function") {
      const hexAddresses = await api.getRewardAddresses();
      if (hexAddresses && hexAddresses.length > 0) {
        return hexAddresses.map(
          (hexAddress) => decodeHexAddress(hexAddress)
        );
      } else {
        return [];
      }
    }
  }
  static async signMessage(message, onSignMessage, onSignError, limitNetwork) {
    if (!this.enabledObserver.get() || !this.enabledWalletObserver.get()) {
      return;
    }
    if (typeof message === "undefined") {
      return;
    }
    const api = await Wallet.unwrapApi();
    const hexAddresses = await api.getRewardAddresses();
    if (hexAddresses.length > 0) {
      let networkType = NetworkType.MAINNET;
      if (hexAddresses[0] && decodeHexAddress(hexAddresses[0]).startsWith("stake_test")) {
        networkType = NetworkType.TESTNET;
      }
      if (limitNetwork && limitNetwork !== networkType) {
        const error = new WrongNetworkTypeError(limitNetwork, networkType);
        if (typeof onSignError === "function") {
          onSignError(error);
        } else {
          console.warn(error);
        }
        return;
      }
      if (hexAddresses.length > 0) {
        const hexAddress = hexAddresses[0];
        let hexMessage = "";
        for (var i = 0, l = message.length; i < l; i++) {
          hexMessage += message.charCodeAt(i).toString(16);
        }
        try {
          const dataSignature = await api.signData(hexAddress, hexMessage);
          if (typeof onSignMessage === "function") {
            const { signature, key } = dataSignature;
            onSignMessage(signature, key);
          }
        } catch (error) {
          if (typeof onSignError === "function") {
            onSignError(error);
          } else {
            console.warn(error);
          }
        }
      }
    }
  }
}

var client$2 = {exports: {}};

var reactDomClient_production = {};

var scheduler$1 = {exports: {}};

var scheduler_production = {};

/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredScheduler_production;

function requireScheduler_production () {
	if (hasRequiredScheduler_production) return scheduler_production;
	hasRequiredScheduler_production = 1;
	(function (exports) {
		"use strict";
		function push(heap, node) {
		  var index = heap.length;
		  heap.push(node);
		  a: for (; 0 < index; ) {
		    var parentIndex = (index - 1) >>> 1,
		      parent = heap[parentIndex];
		    if (0 < compare(parent, node))
		      (heap[parentIndex] = node), (heap[index] = parent), (index = parentIndex);
		    else break a;
		  }
		}
		function peek(heap) {
		  return 0 === heap.length ? null : heap[0];
		}
		function pop(heap) {
		  if (0 === heap.length) return null;
		  var first = heap[0],
		    last = heap.pop();
		  if (last !== first) {
		    heap[0] = last;
		    a: for (
		      var index = 0, length = heap.length, halfLength = length >>> 1;
		      index < halfLength;

		    ) {
		      var leftIndex = 2 * (index + 1) - 1,
		        left = heap[leftIndex],
		        rightIndex = leftIndex + 1,
		        right = heap[rightIndex];
		      if (0 > compare(left, last))
		        rightIndex < length && 0 > compare(right, left)
		          ? ((heap[index] = right),
		            (heap[rightIndex] = last),
		            (index = rightIndex))
		          : ((heap[index] = left),
		            (heap[leftIndex] = last),
		            (index = leftIndex));
		      else if (rightIndex < length && 0 > compare(right, last))
		        (heap[index] = right), (heap[rightIndex] = last), (index = rightIndex);
		      else break a;
		    }
		  }
		  return first;
		}
		function compare(a, b) {
		  var diff = a.sortIndex - b.sortIndex;
		  return 0 !== diff ? diff : a.id - b.id;
		}
		exports.unstable_now = void 0;
		if ("object" === typeof performance && "function" === typeof performance.now) {
		  var localPerformance = performance;
		  exports.unstable_now = function () {
		    return localPerformance.now();
		  };
		} else {
		  var localDate = Date,
		    initialTime = localDate.now();
		  exports.unstable_now = function () {
		    return localDate.now() - initialTime;
		  };
		}
		var taskQueue = [],
		  timerQueue = [],
		  taskIdCounter = 1,
		  currentTask = null,
		  currentPriorityLevel = 3,
		  isPerformingWork = !1,
		  isHostCallbackScheduled = !1,
		  isHostTimeoutScheduled = !1,
		  needsPaint = !1,
		  localSetTimeout = "function" === typeof setTimeout ? setTimeout : null,
		  localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null,
		  localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
		function advanceTimers(currentTime) {
		  for (var timer = peek(timerQueue); null !== timer; ) {
		    if (null === timer.callback) pop(timerQueue);
		    else if (timer.startTime <= currentTime)
		      pop(timerQueue),
		        (timer.sortIndex = timer.expirationTime),
		        push(taskQueue, timer);
		    else break;
		    timer = peek(timerQueue);
		  }
		}
		function handleTimeout(currentTime) {
		  isHostTimeoutScheduled = !1;
		  advanceTimers(currentTime);
		  if (!isHostCallbackScheduled)
		    if (null !== peek(taskQueue))
		      (isHostCallbackScheduled = !0),
		        isMessageLoopRunning ||
		          ((isMessageLoopRunning = !0), schedulePerformWorkUntilDeadline());
		    else {
		      var firstTimer = peek(timerQueue);
		      null !== firstTimer &&
		        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		    }
		}
		var isMessageLoopRunning = !1,
		  taskTimeoutID = -1,
		  frameInterval = 5,
		  startTime = -1;
		function shouldYieldToHost() {
		  return needsPaint
		    ? !0
		    : exports.unstable_now() - startTime < frameInterval
		      ? !1
		      : !0;
		}
		function performWorkUntilDeadline() {
		  needsPaint = !1;
		  if (isMessageLoopRunning) {
		    var currentTime = exports.unstable_now();
		    startTime = currentTime;
		    var hasMoreWork = !0;
		    try {
		      a: {
		        isHostCallbackScheduled = !1;
		        isHostTimeoutScheduled &&
		          ((isHostTimeoutScheduled = !1),
		          localClearTimeout(taskTimeoutID),
		          (taskTimeoutID = -1));
		        isPerformingWork = !0;
		        var previousPriorityLevel = currentPriorityLevel;
		        try {
		          b: {
		            advanceTimers(currentTime);
		            for (
		              currentTask = peek(taskQueue);
		              null !== currentTask &&
		              !(
		                currentTask.expirationTime > currentTime && shouldYieldToHost()
		              );

		            ) {
		              var callback = currentTask.callback;
		              if ("function" === typeof callback) {
		                currentTask.callback = null;
		                currentPriorityLevel = currentTask.priorityLevel;
		                var continuationCallback = callback(
		                  currentTask.expirationTime <= currentTime
		                );
		                currentTime = exports.unstable_now();
		                if ("function" === typeof continuationCallback) {
		                  currentTask.callback = continuationCallback;
		                  advanceTimers(currentTime);
		                  hasMoreWork = !0;
		                  break b;
		                }
		                currentTask === peek(taskQueue) && pop(taskQueue);
		                advanceTimers(currentTime);
		              } else pop(taskQueue);
		              currentTask = peek(taskQueue);
		            }
		            if (null !== currentTask) hasMoreWork = !0;
		            else {
		              var firstTimer = peek(timerQueue);
		              null !== firstTimer &&
		                requestHostTimeout(
		                  handleTimeout,
		                  firstTimer.startTime - currentTime
		                );
		              hasMoreWork = !1;
		            }
		          }
		          break a;
		        } finally {
		          (currentTask = null),
		            (currentPriorityLevel = previousPriorityLevel),
		            (isPerformingWork = !1);
		        }
		        hasMoreWork = void 0;
		      }
		    } finally {
		      hasMoreWork
		        ? schedulePerformWorkUntilDeadline()
		        : (isMessageLoopRunning = !1);
		    }
		  }
		}
		var schedulePerformWorkUntilDeadline;
		if ("function" === typeof localSetImmediate)
		  schedulePerformWorkUntilDeadline = function () {
		    localSetImmediate(performWorkUntilDeadline);
		  };
		else if ("undefined" !== typeof MessageChannel) {
		  var channel = new MessageChannel(),
		    port = channel.port2;
		  channel.port1.onmessage = performWorkUntilDeadline;
		  schedulePerformWorkUntilDeadline = function () {
		    port.postMessage(null);
		  };
		} else
		  schedulePerformWorkUntilDeadline = function () {
		    localSetTimeout(performWorkUntilDeadline, 0);
		  };
		function requestHostTimeout(callback, ms) {
		  taskTimeoutID = localSetTimeout(function () {
		    callback(exports.unstable_now());
		  }, ms);
		}
		exports.unstable_IdlePriority = 5;
		exports.unstable_ImmediatePriority = 1;
		exports.unstable_LowPriority = 4;
		exports.unstable_NormalPriority = 3;
		exports.unstable_Profiling = null;
		exports.unstable_UserBlockingPriority = 2;
		exports.unstable_cancelCallback = function (task) {
		  task.callback = null;
		};
		exports.unstable_forceFrameRate = function (fps) {
		  0 > fps || 125 < fps
		    ? console.error(
		        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
		      )
		    : (frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5);
		};
		exports.unstable_getCurrentPriorityLevel = function () {
		  return currentPriorityLevel;
		};
		exports.unstable_next = function (eventHandler) {
		  switch (currentPriorityLevel) {
		    case 1:
		    case 2:
		    case 3:
		      var priorityLevel = 3;
		      break;
		    default:
		      priorityLevel = currentPriorityLevel;
		  }
		  var previousPriorityLevel = currentPriorityLevel;
		  currentPriorityLevel = priorityLevel;
		  try {
		    return eventHandler();
		  } finally {
		    currentPriorityLevel = previousPriorityLevel;
		  }
		};
		exports.unstable_requestPaint = function () {
		  needsPaint = !0;
		};
		exports.unstable_runWithPriority = function (priorityLevel, eventHandler) {
		  switch (priorityLevel) {
		    case 1:
		    case 2:
		    case 3:
		    case 4:
		    case 5:
		      break;
		    default:
		      priorityLevel = 3;
		  }
		  var previousPriorityLevel = currentPriorityLevel;
		  currentPriorityLevel = priorityLevel;
		  try {
		    return eventHandler();
		  } finally {
		    currentPriorityLevel = previousPriorityLevel;
		  }
		};
		exports.unstable_scheduleCallback = function (
		  priorityLevel,
		  callback,
		  options
		) {
		  var currentTime = exports.unstable_now();
		  "object" === typeof options && null !== options
		    ? ((options = options.delay),
		      (options =
		        "number" === typeof options && 0 < options
		          ? currentTime + options
		          : currentTime))
		    : (options = currentTime);
		  switch (priorityLevel) {
		    case 1:
		      var timeout = -1;
		      break;
		    case 2:
		      timeout = 250;
		      break;
		    case 5:
		      timeout = 1073741823;
		      break;
		    case 4:
		      timeout = 1e4;
		      break;
		    default:
		      timeout = 5e3;
		  }
		  timeout = options + timeout;
		  priorityLevel = {
		    id: taskIdCounter++,
		    callback: callback,
		    priorityLevel: priorityLevel,
		    startTime: options,
		    expirationTime: timeout,
		    sortIndex: -1
		  };
		  options > currentTime
		    ? ((priorityLevel.sortIndex = options),
		      push(timerQueue, priorityLevel),
		      null === peek(taskQueue) &&
		        priorityLevel === peek(timerQueue) &&
		        (isHostTimeoutScheduled
		          ? (localClearTimeout(taskTimeoutID), (taskTimeoutID = -1))
		          : (isHostTimeoutScheduled = !0),
		        requestHostTimeout(handleTimeout, options - currentTime)))
		    : ((priorityLevel.sortIndex = timeout),
		      push(taskQueue, priorityLevel),
		      isHostCallbackScheduled ||
		        isPerformingWork ||
		        ((isHostCallbackScheduled = !0),
		        isMessageLoopRunning ||
		          ((isMessageLoopRunning = !0), schedulePerformWorkUntilDeadline())));
		  return priorityLevel;
		};
		exports.unstable_shouldYield = shouldYieldToHost;
		exports.unstable_wrapCallback = function (callback) {
		  var parentPriorityLevel = currentPriorityLevel;
		  return function () {
		    var previousPriorityLevel = currentPriorityLevel;
		    currentPriorityLevel = parentPriorityLevel;
		    try {
		      return callback.apply(this, arguments);
		    } finally {
		      currentPriorityLevel = previousPriorityLevel;
		    }
		  };
		}; 
	} (scheduler_production));
	return scheduler_production;
}

var scheduler = scheduler$1.exports;

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler$1.exports;
	hasRequiredScheduler = 1;
	"use strict";
	if (true) {
	  scheduler$1.exports = requireScheduler_production();
	} else {
	  module.exports = require("./cjs/scheduler.development.js");
	}
	return scheduler$1.exports;
}

var reactDom$1 = {exports: {}};

var reactDom_production = {};

/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDom_production;

function requireReactDom_production () {
	if (hasRequiredReactDom_production) return reactDom_production;
	hasRequiredReactDom_production = 1;
	"use strict";
	var React = requireReact();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	function noop() {}
	var Internals = {
	    d: {
	      f: noop,
	      r: function () {
	        throw Error(formatProdErrorMessage(522));
	      },
	      D: noop,
	      C: noop,
	      L: noop,
	      m: noop,
	      X: noop,
	      S: noop,
	      M: noop
	    },
	    p: 0,
	    findDOMNode: null
	  },
	  REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
	  var key =
	    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: REACT_PORTAL_TYPE,
	    key: null == key ? null : "" + key,
	    children: children,
	    containerInfo: containerInfo,
	    implementation: implementation
	  };
	}
	var ReactSharedInternals =
	  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
	  if ("font" === as) return "";
	  if ("string" === typeof input)
	    return "use-credentials" === input ? input : "";
	}
	reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  Internals;
	reactDom_production.createPortal = function (children, container) {
	  var key =
	    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (
	    !container ||
	    (1 !== container.nodeType &&
	      9 !== container.nodeType &&
	      11 !== container.nodeType)
	  )
	    throw Error(formatProdErrorMessage(299));
	  return createPortal$1(children, container, null, key);
	};
	reactDom_production.flushSync = function (fn) {
	  var previousTransition = ReactSharedInternals.T,
	    previousUpdatePriority = Internals.p;
	  try {
	    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
	  } finally {
	    (ReactSharedInternals.T = previousTransition),
	      (Internals.p = previousUpdatePriority),
	      Internals.d.f();
	  }
	};
	reactDom_production.preconnect = function (href, options) {
	  "string" === typeof href &&
	    (options
	      ? ((options = options.crossOrigin),
	        (options =
	          "string" === typeof options
	            ? "use-credentials" === options
	              ? options
	              : ""
	            : void 0))
	      : (options = null),
	    Internals.d.C(href, options));
	};
	reactDom_production.prefetchDNS = function (href) {
	  "string" === typeof href && Internals.d.D(href);
	};
	reactDom_production.preinit = function (href, options) {
	  if ("string" === typeof href && options && "string" === typeof options.as) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
	      integrity =
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      fetchPriority =
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0;
	    "style" === as
	      ? Internals.d.S(
	          href,
	          "string" === typeof options.precedence ? options.precedence : void 0,
	          {
	            crossOrigin: crossOrigin,
	            integrity: integrity,
	            fetchPriority: fetchPriority
	          }
	        )
	      : "script" === as &&
	        Internals.d.X(href, {
	          crossOrigin: crossOrigin,
	          integrity: integrity,
	          fetchPriority: fetchPriority,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	  }
	};
	reactDom_production.preinitModule = function (href, options) {
	  if ("string" === typeof href)
	    if ("object" === typeof options && null !== options) {
	      if (null == options.as || "script" === options.as) {
	        var crossOrigin = getCrossOriginStringAs(
	          options.as,
	          options.crossOrigin
	        );
	        Internals.d.M(href, {
	          crossOrigin: crossOrigin,
	          integrity:
	            "string" === typeof options.integrity ? options.integrity : void 0,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	      }
	    } else null == options && Internals.d.M(href);
	};
	reactDom_production.preload = function (href, options) {
	  if (
	    "string" === typeof href &&
	    "object" === typeof options &&
	    null !== options &&
	    "string" === typeof options.as
	  ) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
	    Internals.d.L(href, as, {
	      crossOrigin: crossOrigin,
	      integrity:
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
	      type: "string" === typeof options.type ? options.type : void 0,
	      fetchPriority:
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0,
	      referrerPolicy:
	        "string" === typeof options.referrerPolicy
	          ? options.referrerPolicy
	          : void 0,
	      imageSrcSet:
	        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
	      imageSizes:
	        "string" === typeof options.imageSizes ? options.imageSizes : void 0,
	      media: "string" === typeof options.media ? options.media : void 0
	    });
	  }
	};
	reactDom_production.preloadModule = function (href, options) {
	  if ("string" === typeof href)
	    if (options) {
	      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
	      Internals.d.m(href, {
	        as:
	          "string" === typeof options.as && "script" !== options.as
	            ? options.as
	            : void 0,
	        crossOrigin: crossOrigin,
	        integrity:
	          "string" === typeof options.integrity ? options.integrity : void 0
	      });
	    } else Internals.d.m(href);
	};
	reactDom_production.requestFormReset = function (form) {
	  Internals.d.r(form);
	};
	reactDom_production.unstable_batchedUpdates = function (fn, a) {
	  return fn(a);
	};
	reactDom_production.useFormState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	reactDom_production.useFormStatus = function () {
	  return ReactSharedInternals.H.useHostTransitionStatus();
	};
	reactDom_production.version = "19.2.5";
	return reactDom_production;
}

var reactDom = reactDom$1.exports;

var hasRequiredReactDom;

function requireReactDom () {
	if (hasRequiredReactDom) return reactDom$1.exports;
	hasRequiredReactDom = 1;
	"use strict";
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  if (false) {
	    throw new Error("^_^");
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	if (true) {
	  checkDCE();
	  reactDom$1.exports = requireReactDom_production();
	} else {
	  module.exports = require("./cjs/react-dom.development.js");
	}
	return reactDom$1.exports;
}

/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDomClient_production;

function requireReactDomClient_production () {
	if (hasRequiredReactDomClient_production) return reactDomClient_production;
	hasRequiredReactDomClient_production = 1;
	/*
	 Modernizr 3.0.0pre (Custom Build) | MIT
	*/
	"use strict";
	var Scheduler = requireScheduler(),
	  React = requireReact(),
	  ReactDOM = requireReactDom();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	function isValidContainer(node) {
	  return !(
	    !node ||
	    (1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType)
	  );
	}
	function getNearestMountedFiber(fiber) {
	  var node = fiber,
	    nearestMounted = fiber;
	  if (fiber.alternate) for (; node.return; ) node = node.return;
	  else {
	    fiber = node;
	    do
	      (node = fiber),
	        0 !== (node.flags & 4098) && (nearestMounted = node.return),
	        (fiber = node.return);
	    while (fiber);
	  }
	  return 3 === node.tag ? nearestMounted : null;
	}
	function getSuspenseInstanceFromFiber(fiber) {
	  if (13 === fiber.tag) {
	    var suspenseState = fiber.memoizedState;
	    null === suspenseState &&
	      ((fiber = fiber.alternate),
	      null !== fiber && (suspenseState = fiber.memoizedState));
	    if (null !== suspenseState) return suspenseState.dehydrated;
	  }
	  return null;
	}
	function getActivityInstanceFromFiber(fiber) {
	  if (31 === fiber.tag) {
	    var activityState = fiber.memoizedState;
	    null === activityState &&
	      ((fiber = fiber.alternate),
	      null !== fiber && (activityState = fiber.memoizedState));
	    if (null !== activityState) return activityState.dehydrated;
	  }
	  return null;
	}
	function assertIsMounted(fiber) {
	  if (getNearestMountedFiber(fiber) !== fiber)
	    throw Error(formatProdErrorMessage(188));
	}
	function findCurrentFiberUsingSlowPath(fiber) {
	  var alternate = fiber.alternate;
	  if (!alternate) {
	    alternate = getNearestMountedFiber(fiber);
	    if (null === alternate) throw Error(formatProdErrorMessage(188));
	    return alternate !== fiber ? null : fiber;
	  }
	  for (var a = fiber, b = alternate; ; ) {
	    var parentA = a.return;
	    if (null === parentA) break;
	    var parentB = parentA.alternate;
	    if (null === parentB) {
	      b = parentA.return;
	      if (null !== b) {
	        a = b;
	        continue;
	      }
	      break;
	    }
	    if (parentA.child === parentB.child) {
	      for (parentB = parentA.child; parentB; ) {
	        if (parentB === a) return assertIsMounted(parentA), fiber;
	        if (parentB === b) return assertIsMounted(parentA), alternate;
	        parentB = parentB.sibling;
	      }
	      throw Error(formatProdErrorMessage(188));
	    }
	    if (a.return !== b.return) (a = parentA), (b = parentB);
	    else {
	      for (var didFindChild = !1, child$0 = parentA.child; child$0; ) {
	        if (child$0 === a) {
	          didFindChild = !0;
	          a = parentA;
	          b = parentB;
	          break;
	        }
	        if (child$0 === b) {
	          didFindChild = !0;
	          b = parentA;
	          a = parentB;
	          break;
	        }
	        child$0 = child$0.sibling;
	      }
	      if (!didFindChild) {
	        for (child$0 = parentB.child; child$0; ) {
	          if (child$0 === a) {
	            didFindChild = !0;
	            a = parentB;
	            b = parentA;
	            break;
	          }
	          if (child$0 === b) {
	            didFindChild = !0;
	            b = parentB;
	            a = parentA;
	            break;
	          }
	          child$0 = child$0.sibling;
	        }
	        if (!didFindChild) throw Error(formatProdErrorMessage(189));
	      }
	    }
	    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
	  }
	  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
	  return a.stateNode.current === a ? fiber : alternate;
	}
	function findCurrentHostFiberImpl(node) {
	  var tag = node.tag;
	  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
	  for (node = node.child; null !== node; ) {
	    tag = findCurrentHostFiberImpl(node);
	    if (null !== tag) return tag;
	    node = node.sibling;
	  }
	  return null;
	}
	var assign = Object.assign,
	  REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"),
	  REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy");
	Symbol.for("react.scope");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	Symbol.for("react.legacy_hidden");
	Symbol.for("react.tracing_marker");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	Symbol.for("react.view_transition");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
	  if (null == type) return null;
	  if ("function" === typeof type)
	    return type.$$typeof === REACT_CLIENT_REFERENCE
	      ? null
	      : type.displayName || type.name || null;
	  if ("string" === typeof type) return type;
	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return "Fragment";
	    case REACT_PROFILER_TYPE:
	      return "Profiler";
	    case REACT_STRICT_MODE_TYPE:
	      return "StrictMode";
	    case REACT_SUSPENSE_TYPE:
	      return "Suspense";
	    case REACT_SUSPENSE_LIST_TYPE:
	      return "SuspenseList";
	    case REACT_ACTIVITY_TYPE:
	      return "Activity";
	  }
	  if ("object" === typeof type)
	    switch (type.$$typeof) {
	      case REACT_PORTAL_TYPE:
	        return "Portal";
	      case REACT_CONTEXT_TYPE:
	        return type.displayName || "Context";
	      case REACT_CONSUMER_TYPE:
	        return (type._context.displayName || "Context") + ".Consumer";
	      case REACT_FORWARD_REF_TYPE:
	        var innerType = type.render;
	        type = type.displayName;
	        type ||
	          ((type = innerType.displayName || innerType.name || ""),
	          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	        return type;
	      case REACT_MEMO_TYPE:
	        return (
	          (innerType = type.displayName || null),
	          null !== innerType
	            ? innerType
	            : getComponentNameFromType(type.type) || "Memo"
	        );
	      case REACT_LAZY_TYPE:
	        innerType = type._payload;
	        type = type._init;
	        try {
	          return getComponentNameFromType(type(innerType));
	        } catch (x) {}
	    }
	  return null;
	}
	var isArrayImpl = Array.isArray,
	  ReactSharedInternals =
	    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  ReactDOMSharedInternals =
	    ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  sharedNotPendingObject = {
	    pending: !1,
	    data: null,
	    method: null,
	    action: null
	  },
	  valueStack = [],
	  index = -1;
	function createCursor(defaultValue) {
	  return { current: defaultValue };
	}
	function pop(cursor) {
	  0 > index ||
	    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
	}
	function push(cursor, value) {
	  index++;
	  valueStack[index] = cursor.current;
	  cursor.current = value;
	}
	var contextStackCursor = createCursor(null),
	  contextFiberStackCursor = createCursor(null),
	  rootInstanceStackCursor = createCursor(null),
	  hostTransitionProviderCursor = createCursor(null);
	function pushHostContainer(fiber, nextRootInstance) {
	  push(rootInstanceStackCursor, nextRootInstance);
	  push(contextFiberStackCursor, fiber);
	  push(contextStackCursor, null);
	  switch (nextRootInstance.nodeType) {
	    case 9:
	    case 11:
	      fiber = (fiber = nextRootInstance.documentElement)
	        ? (fiber = fiber.namespaceURI)
	          ? getOwnHostContext(fiber)
	          : 0
	        : 0;
	      break;
	    default:
	      if (
	        ((fiber = nextRootInstance.tagName),
	        (nextRootInstance = nextRootInstance.namespaceURI))
	      )
	        (nextRootInstance = getOwnHostContext(nextRootInstance)),
	          (fiber = getChildHostContextProd(nextRootInstance, fiber));
	      else
	        switch (fiber) {
	          case "svg":
	            fiber = 1;
	            break;
	          case "math":
	            fiber = 2;
	            break;
	          default:
	            fiber = 0;
	        }
	  }
	  pop(contextStackCursor);
	  push(contextStackCursor, fiber);
	}
	function popHostContainer() {
	  pop(contextStackCursor);
	  pop(contextFiberStackCursor);
	  pop(rootInstanceStackCursor);
	}
	function pushHostContext(fiber) {
	  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
	  var context = contextStackCursor.current;
	  var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
	  context !== JSCompiler_inline_result &&
	    (push(contextFiberStackCursor, fiber),
	    push(contextStackCursor, JSCompiler_inline_result));
	}
	function popHostContext(fiber) {
	  contextFiberStackCursor.current === fiber &&
	    (pop(contextStackCursor), pop(contextFiberStackCursor));
	  hostTransitionProviderCursor.current === fiber &&
	    (pop(hostTransitionProviderCursor),
	    (HostTransitionContext._currentValue = sharedNotPendingObject));
	}
	var prefix, suffix;
	function describeBuiltInComponentFrame(name) {
	  if (void 0 === prefix)
	    try {
	      throw Error();
	    } catch (x) {
	      var match = x.stack.trim().match(/\n( *(at )?)/);
	      prefix = (match && match[1]) || "";
	      suffix =
	        -1 < x.stack.indexOf("\n    at")
	          ? " (<anonymous>)"
	          : -1 < x.stack.indexOf("@")
	            ? "@unknown:0:0"
	            : "";
	    }
	  return "\n" + prefix + name + suffix;
	}
	var reentry = !1;
	function describeNativeComponentFrame(fn, construct) {
	  if (!fn || reentry) return "";
	  reentry = !0;
	  var previousPrepareStackTrace = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    var RunInRootFrame = {
	      DetermineComponentFrameRoot: function () {
	        try {
	          if (construct) {
	            var Fake = function () {
	              throw Error();
	            };
	            Object.defineProperty(Fake.prototype, "props", {
	              set: function () {
	                throw Error();
	              }
	            });
	            if ("object" === typeof Reflect && Reflect.construct) {
	              try {
	                Reflect.construct(Fake, []);
	              } catch (x) {
	                var control = x;
	              }
	              Reflect.construct(fn, [], Fake);
	            } else {
	              try {
	                Fake.call();
	              } catch (x$1) {
	                control = x$1;
	              }
	              fn.call(Fake.prototype);
	            }
	          } else {
	            try {
	              throw Error();
	            } catch (x$2) {
	              control = x$2;
	            }
	            (Fake = fn()) &&
	              "function" === typeof Fake.catch &&
	              Fake.catch(function () {});
	          }
	        } catch (sample) {
	          if (sample && control && "string" === typeof sample.stack)
	            return [sample.stack, control.stack];
	        }
	        return [null, null];
	      }
	    };
	    RunInRootFrame.DetermineComponentFrameRoot.displayName =
	      "DetermineComponentFrameRoot";
	    var namePropDescriptor = Object.getOwnPropertyDescriptor(
	      RunInRootFrame.DetermineComponentFrameRoot,
	      "name"
	    );
	    namePropDescriptor &&
	      namePropDescriptor.configurable &&
	      Object.defineProperty(
	        RunInRootFrame.DetermineComponentFrameRoot,
	        "name",
	        { value: "DetermineComponentFrameRoot" }
	      );
	    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
	      sampleStack = _RunInRootFrame$Deter[0],
	      controlStack = _RunInRootFrame$Deter[1];
	    if (sampleStack && controlStack) {
	      var sampleLines = sampleStack.split("\n"),
	        controlLines = controlStack.split("\n");
	      for (
	        namePropDescriptor = RunInRootFrame = 0;
	        RunInRootFrame < sampleLines.length &&
	        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

	      )
	        RunInRootFrame++;
	      for (
	        ;
	        namePropDescriptor < controlLines.length &&
	        !controlLines[namePropDescriptor].includes(
	          "DetermineComponentFrameRoot"
	        );

	      )
	        namePropDescriptor++;
	      if (
	        RunInRootFrame === sampleLines.length ||
	        namePropDescriptor === controlLines.length
	      )
	        for (
	          RunInRootFrame = sampleLines.length - 1,
	            namePropDescriptor = controlLines.length - 1;
	          1 <= RunInRootFrame &&
	          0 <= namePropDescriptor &&
	          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

	        )
	          namePropDescriptor--;
	      for (
	        ;
	        1 <= RunInRootFrame && 0 <= namePropDescriptor;
	        RunInRootFrame--, namePropDescriptor--
	      )
	        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
	          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
	            do
	              if (
	                (RunInRootFrame--,
	                namePropDescriptor--,
	                0 > namePropDescriptor ||
	                  sampleLines[RunInRootFrame] !==
	                    controlLines[namePropDescriptor])
	              ) {
	                var frame =
	                  "\n" +
	                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
	                fn.displayName &&
	                  frame.includes("<anonymous>") &&
	                  (frame = frame.replace("<anonymous>", fn.displayName));
	                return frame;
	              }
	            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
	          }
	          break;
	        }
	    }
	  } finally {
	    (reentry = !1), (Error.prepareStackTrace = previousPrepareStackTrace);
	  }
	  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
	    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
	    : "";
	}
	function describeFiber(fiber, childFiber) {
	  switch (fiber.tag) {
	    case 26:
	    case 27:
	    case 5:
	      return describeBuiltInComponentFrame(fiber.type);
	    case 16:
	      return describeBuiltInComponentFrame("Lazy");
	    case 13:
	      return fiber.child !== childFiber && null !== childFiber
	        ? describeBuiltInComponentFrame("Suspense Fallback")
	        : describeBuiltInComponentFrame("Suspense");
	    case 19:
	      return describeBuiltInComponentFrame("SuspenseList");
	    case 0:
	    case 15:
	      return describeNativeComponentFrame(fiber.type, !1);
	    case 11:
	      return describeNativeComponentFrame(fiber.type.render, !1);
	    case 1:
	      return describeNativeComponentFrame(fiber.type, !0);
	    case 31:
	      return describeBuiltInComponentFrame("Activity");
	    default:
	      return "";
	  }
	}
	function getStackByFiberInDevAndProd(workInProgress) {
	  try {
	    var info = "",
	      previous = null;
	    do
	      (info += describeFiber(workInProgress, previous)),
	        (previous = workInProgress),
	        (workInProgress = workInProgress.return);
	    while (workInProgress);
	    return info;
	  } catch (x) {
	    return "\nError generating stack: " + x.message + "\n" + x.stack;
	  }
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty,
	  scheduleCallback$3 = Scheduler.unstable_scheduleCallback,
	  cancelCallback$1 = Scheduler.unstable_cancelCallback,
	  shouldYield = Scheduler.unstable_shouldYield,
	  requestPaint = Scheduler.unstable_requestPaint,
	  now = Scheduler.unstable_now,
	  getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
	  ImmediatePriority = Scheduler.unstable_ImmediatePriority,
	  UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
	  NormalPriority$1 = Scheduler.unstable_NormalPriority,
	  LowPriority = Scheduler.unstable_LowPriority,
	  IdlePriority = Scheduler.unstable_IdlePriority,
	  log$1 = Scheduler.log,
	  unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue,
	  rendererID = null,
	  injectedHook = null;
	function setIsStrictModeForDevtools(newIsStrictMode) {
	  "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
	  if (injectedHook && "function" === typeof injectedHook.setStrictMode)
	    try {
	      injectedHook.setStrictMode(rendererID, newIsStrictMode);
	    } catch (err) {}
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
	  log = Math.log,
	  LN2 = Math.LN2;
	function clz32Fallback(x) {
	  x >>>= 0;
	  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
	}
	var nextTransitionUpdateLane = 256,
	  nextTransitionDeferredLane = 262144,
	  nextRetryLane = 4194304;
	function getHighestPriorityLanes(lanes) {
	  var pendingSyncLanes = lanes & 42;
	  if (0 !== pendingSyncLanes) return pendingSyncLanes;
	  switch (lanes & -lanes) {
	    case 1:
	      return 1;
	    case 2:
	      return 2;
	    case 4:
	      return 4;
	    case 8:
	      return 8;
	    case 16:
	      return 16;
	    case 32:
	      return 32;
	    case 64:
	      return 64;
	    case 128:
	      return 128;
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	      return lanes & 261888;
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return lanes & 3932160;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      return lanes & 62914560;
	    case 67108864:
	      return 67108864;
	    case 134217728:
	      return 134217728;
	    case 268435456:
	      return 268435456;
	    case 536870912:
	      return 536870912;
	    case 1073741824:
	      return 0;
	    default:
	      return lanes;
	  }
	}
	function getNextLanes(root, wipLanes, rootHasPendingCommit) {
	  var pendingLanes = root.pendingLanes;
	  if (0 === pendingLanes) return 0;
	  var nextLanes = 0,
	    suspendedLanes = root.suspendedLanes,
	    pingedLanes = root.pingedLanes;
	  root = root.warmLanes;
	  var nonIdlePendingLanes = pendingLanes & 134217727;
	  0 !== nonIdlePendingLanes
	    ? ((pendingLanes = nonIdlePendingLanes & ~suspendedLanes),
	      0 !== pendingLanes
	        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
	        : ((pingedLanes &= nonIdlePendingLanes),
	          0 !== pingedLanes
	            ? (nextLanes = getHighestPriorityLanes(pingedLanes))
	            : rootHasPendingCommit ||
	              ((rootHasPendingCommit = nonIdlePendingLanes & ~root),
	              0 !== rootHasPendingCommit &&
	                (nextLanes = getHighestPriorityLanes(rootHasPendingCommit)))))
	    : ((nonIdlePendingLanes = pendingLanes & ~suspendedLanes),
	      0 !== nonIdlePendingLanes
	        ? (nextLanes = getHighestPriorityLanes(nonIdlePendingLanes))
	        : 0 !== pingedLanes
	          ? (nextLanes = getHighestPriorityLanes(pingedLanes))
	          : rootHasPendingCommit ||
	            ((rootHasPendingCommit = pendingLanes & ~root),
	            0 !== rootHasPendingCommit &&
	              (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
	  return 0 === nextLanes
	    ? 0
	    : 0 !== wipLanes &&
	        wipLanes !== nextLanes &&
	        0 === (wipLanes & suspendedLanes) &&
	        ((suspendedLanes = nextLanes & -nextLanes),
	        (rootHasPendingCommit = wipLanes & -wipLanes),
	        suspendedLanes >= rootHasPendingCommit ||
	          (32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)))
	      ? wipLanes
	      : nextLanes;
	}
	function checkIfRootIsPrerendering(root, renderLanes) {
	  return (
	    0 ===
	    (root.pendingLanes &
	      ~(root.suspendedLanes & ~root.pingedLanes) &
	      renderLanes)
	  );
	}
	function computeExpirationTime(lane, currentTime) {
	  switch (lane) {
	    case 1:
	    case 2:
	    case 4:
	    case 8:
	    case 64:
	      return currentTime + 250;
	    case 16:
	    case 32:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return currentTime + 5e3;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      return -1;
	    case 67108864:
	    case 134217728:
	    case 268435456:
	    case 536870912:
	    case 1073741824:
	      return -1;
	    default:
	      return -1;
	  }
	}
	function claimNextRetryLane() {
	  var lane = nextRetryLane;
	  nextRetryLane <<= 1;
	  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
	  return lane;
	}
	function createLaneMap(initial) {
	  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
	  return laneMap;
	}
	function markRootUpdated$1(root, updateLane) {
	  root.pendingLanes |= updateLane;
	  268435456 !== updateLane &&
	    ((root.suspendedLanes = 0), (root.pingedLanes = 0), (root.warmLanes = 0));
	}
	function markRootFinished(
	  root,
	  finishedLanes,
	  remainingLanes,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes
	) {
	  var previouslyPendingLanes = root.pendingLanes;
	  root.pendingLanes = remainingLanes;
	  root.suspendedLanes = 0;
	  root.pingedLanes = 0;
	  root.warmLanes = 0;
	  root.expiredLanes &= remainingLanes;
	  root.entangledLanes &= remainingLanes;
	  root.errorRecoveryDisabledLanes &= remainingLanes;
	  root.shellSuspendCounter = 0;
	  var entanglements = root.entanglements,
	    expirationTimes = root.expirationTimes,
	    hiddenUpdates = root.hiddenUpdates;
	  for (
	    remainingLanes = previouslyPendingLanes & ~remainingLanes;
	    0 < remainingLanes;

	  ) {
	    var index$7 = 31 - clz32(remainingLanes),
	      lane = 1 << index$7;
	    entanglements[index$7] = 0;
	    expirationTimes[index$7] = -1;
	    var hiddenUpdatesForLane = hiddenUpdates[index$7];
	    if (null !== hiddenUpdatesForLane)
	      for (
	        hiddenUpdates[index$7] = null, index$7 = 0;
	        index$7 < hiddenUpdatesForLane.length;
	        index$7++
	      ) {
	        var update = hiddenUpdatesForLane[index$7];
	        null !== update && (update.lane &= -536870913);
	      }
	    remainingLanes &= ~lane;
	  }
	  0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
	  0 !== suspendedRetryLanes &&
	    0 === updatedLanes &&
	    0 !== root.tag &&
	    (root.suspendedLanes |=
	      suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
	}
	function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
	  root.pendingLanes |= spawnedLane;
	  root.suspendedLanes &= ~spawnedLane;
	  var spawnedLaneIndex = 31 - clz32(spawnedLane);
	  root.entangledLanes |= spawnedLane;
	  root.entanglements[spawnedLaneIndex] =
	    root.entanglements[spawnedLaneIndex] |
	    1073741824 |
	    (entangledLanes & 261930);
	}
	function markRootEntangled(root, entangledLanes) {
	  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
	  for (root = root.entanglements; rootEntangledLanes; ) {
	    var index$8 = 31 - clz32(rootEntangledLanes),
	      lane = 1 << index$8;
	    (lane & entangledLanes) | (root[index$8] & entangledLanes) &&
	      (root[index$8] |= entangledLanes);
	    rootEntangledLanes &= ~lane;
	  }
	}
	function getBumpedLaneForHydration(root, renderLanes) {
	  var renderLane = renderLanes & -renderLanes;
	  renderLane =
	    0 !== (renderLane & 42) ? 1 : getBumpedLaneForHydrationByLane(renderLane);
	  return 0 !== (renderLane & (root.suspendedLanes | renderLanes))
	    ? 0
	    : renderLane;
	}
	function getBumpedLaneForHydrationByLane(lane) {
	  switch (lane) {
	    case 2:
	      lane = 1;
	      break;
	    case 8:
	      lane = 4;
	      break;
	    case 32:
	      lane = 16;
	      break;
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      lane = 128;
	      break;
	    case 268435456:
	      lane = 134217728;
	      break;
	    default:
	      lane = 0;
	  }
	  return lane;
	}
	function lanesToEventPriority(lanes) {
	  lanes &= -lanes;
	  return 2 < lanes
	    ? 8 < lanes
	      ? 0 !== (lanes & 134217727)
	        ? 32
	        : 268435456
	      : 8
	    : 2;
	}
	function resolveUpdatePriority() {
	  var updatePriority = ReactDOMSharedInternals.p;
	  if (0 !== updatePriority) return updatePriority;
	  updatePriority = window.event;
	  return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
	}
	function runWithPriority(priority, fn) {
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    return (ReactDOMSharedInternals.p = priority), fn();
	  } finally {
	    ReactDOMSharedInternals.p = previousPriority;
	  }
	}
	var randomKey = Math.random().toString(36).slice(2),
	  internalInstanceKey = "__reactFiber$" + randomKey,
	  internalPropsKey = "__reactProps$" + randomKey,
	  internalContainerInstanceKey = "__reactContainer$" + randomKey,
	  internalEventHandlersKey = "__reactEvents$" + randomKey,
	  internalEventHandlerListenersKey = "__reactListeners$" + randomKey,
	  internalEventHandlesSetKey = "__reactHandles$" + randomKey,
	  internalRootNodeResourcesKey = "__reactResources$" + randomKey,
	  internalHoistableMarker = "__reactMarker$" + randomKey;
	function detachDeletedInstance(node) {
	  delete node[internalInstanceKey];
	  delete node[internalPropsKey];
	  delete node[internalEventHandlersKey];
	  delete node[internalEventHandlerListenersKey];
	  delete node[internalEventHandlesSetKey];
	}
	function getClosestInstanceFromNode(targetNode) {
	  var targetInst = targetNode[internalInstanceKey];
	  if (targetInst) return targetInst;
	  for (var parentNode = targetNode.parentNode; parentNode; ) {
	    if (
	      (targetInst =
	        parentNode[internalContainerInstanceKey] ||
	        parentNode[internalInstanceKey])
	    ) {
	      parentNode = targetInst.alternate;
	      if (
	        null !== targetInst.child ||
	        (null !== parentNode && null !== parentNode.child)
	      )
	        for (
	          targetNode = getParentHydrationBoundary(targetNode);
	          null !== targetNode;

	        ) {
	          if ((parentNode = targetNode[internalInstanceKey])) return parentNode;
	          targetNode = getParentHydrationBoundary(targetNode);
	        }
	      return targetInst;
	    }
	    targetNode = parentNode;
	    parentNode = targetNode.parentNode;
	  }
	  return null;
	}
	function getInstanceFromNode(node) {
	  if (
	    (node = node[internalInstanceKey] || node[internalContainerInstanceKey])
	  ) {
	    var tag = node.tag;
	    if (
	      5 === tag ||
	      6 === tag ||
	      13 === tag ||
	      31 === tag ||
	      26 === tag ||
	      27 === tag ||
	      3 === tag
	    )
	      return node;
	  }
	  return null;
	}
	function getNodeFromInstance(inst) {
	  var tag = inst.tag;
	  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
	  throw Error(formatProdErrorMessage(33));
	}
	function getResourcesFromRoot(root) {
	  var resources = root[internalRootNodeResourcesKey];
	  resources ||
	    (resources = root[internalRootNodeResourcesKey] =
	      { hoistableStyles: new Map(), hoistableScripts: new Map() });
	  return resources;
	}
	function markNodeAsHoistable(node) {
	  node[internalHoistableMarker] = !0;
	}
	var allNativeEvents = new Set(),
	  registrationNameDependencies = {};
	function registerTwoPhaseEvent(registrationName, dependencies) {
	  registerDirectEvent(registrationName, dependencies);
	  registerDirectEvent(registrationName + "Capture", dependencies);
	}
	function registerDirectEvent(registrationName, dependencies) {
	  registrationNameDependencies[registrationName] = dependencies;
	  for (
	    registrationName = 0;
	    registrationName < dependencies.length;
	    registrationName++
	  )
	    allNativeEvents.add(dependencies[registrationName]);
	}
	var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
	    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
	  ),
	  illegalAttributeNameCache = {},
	  validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
	    return !0;
	  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return !1;
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
	    return (validatedAttributeNameCache[attributeName] = !0);
	  illegalAttributeNameCache[attributeName] = !0;
	  return !1;
	}
	function setValueForAttribute(node, name, value) {
	  if (isAttributeNameSafe(name))
	    if (null === value) node.removeAttribute(name);
	    else {
	      switch (typeof value) {
	        case "undefined":
	        case "function":
	        case "symbol":
	          node.removeAttribute(name);
	          return;
	        case "boolean":
	          var prefix$10 = name.toLowerCase().slice(0, 5);
	          if ("data-" !== prefix$10 && "aria-" !== prefix$10) {
	            node.removeAttribute(name);
	            return;
	          }
	      }
	      node.setAttribute(name, "" + value);
	    }
	}
	function setValueForKnownAttribute(node, name, value) {
	  if (null === value) node.removeAttribute(name);
	  else {
	    switch (typeof value) {
	      case "undefined":
	      case "function":
	      case "symbol":
	      case "boolean":
	        node.removeAttribute(name);
	        return;
	    }
	    node.setAttribute(name, "" + value);
	  }
	}
	function setValueForNamespacedAttribute(node, namespace, name, value) {
	  if (null === value) node.removeAttribute(name);
	  else {
	    switch (typeof value) {
	      case "undefined":
	      case "function":
	      case "symbol":
	      case "boolean":
	        node.removeAttribute(name);
	        return;
	    }
	    node.setAttributeNS(namespace, name, "" + value);
	  }
	}
	function getToStringValue(value) {
	  switch (typeof value) {
	    case "bigint":
	    case "boolean":
	    case "number":
	    case "string":
	    case "undefined":
	      return value;
	    case "object":
	      return value;
	    default:
	      return "";
	  }
	}
	function isCheckable(elem) {
	  var type = elem.type;
	  return (
	    (elem = elem.nodeName) &&
	    "input" === elem.toLowerCase() &&
	    ("checkbox" === type || "radio" === type)
	  );
	}
	function trackValueOnNode(node, valueField, currentValue) {
	  var descriptor = Object.getOwnPropertyDescriptor(
	    node.constructor.prototype,
	    valueField
	  );
	  if (
	    !node.hasOwnProperty(valueField) &&
	    "undefined" !== typeof descriptor &&
	    "function" === typeof descriptor.get &&
	    "function" === typeof descriptor.set
	  ) {
	    var get = descriptor.get,
	      set = descriptor.set;
	    Object.defineProperty(node, valueField, {
	      configurable: !0,
	      get: function () {
	        return get.call(this);
	      },
	      set: function (value) {
	        currentValue = "" + value;
	        set.call(this, value);
	      }
	    });
	    Object.defineProperty(node, valueField, {
	      enumerable: descriptor.enumerable
	    });
	    return {
	      getValue: function () {
	        return currentValue;
	      },
	      setValue: function (value) {
	        currentValue = "" + value;
	      },
	      stopTracking: function () {
	        node._valueTracker = null;
	        delete node[valueField];
	      }
	    };
	  }
	}
	function track(node) {
	  if (!node._valueTracker) {
	    var valueField = isCheckable(node) ? "checked" : "value";
	    node._valueTracker = trackValueOnNode(
	      node,
	      valueField,
	      "" + node[valueField]
	    );
	  }
	}
	function updateValueIfChanged(node) {
	  if (!node) return !1;
	  var tracker = node._valueTracker;
	  if (!tracker) return !0;
	  var lastValue = tracker.getValue();
	  var value = "";
	  node &&
	    (value = isCheckable(node)
	      ? node.checked
	        ? "true"
	        : "false"
	      : node.value);
	  node = value;
	  return node !== lastValue ? (tracker.setValue(node), !0) : !1;
	}
	function getActiveElement(doc) {
	  doc = doc || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof doc) return null;
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}
	var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
	function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
	  return value.replace(
	    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
	    function (ch) {
	      return "\\" + ch.charCodeAt(0).toString(16) + " ";
	    }
	  );
	}
	function updateInput(
	  element,
	  value,
	  defaultValue,
	  lastDefaultValue,
	  checked,
	  defaultChecked,
	  type,
	  name
	) {
	  element.name = "";
	  null != type &&
	  "function" !== typeof type &&
	  "symbol" !== typeof type &&
	  "boolean" !== typeof type
	    ? (element.type = type)
	    : element.removeAttribute("type");
	  if (null != value)
	    if ("number" === type) {
	      if ((0 === value && "" === element.value) || element.value != value)
	        element.value = "" + getToStringValue(value);
	    } else
	      element.value !== "" + getToStringValue(value) &&
	        (element.value = "" + getToStringValue(value));
	  else
	    ("submit" !== type && "reset" !== type) || element.removeAttribute("value");
	  null != value
	    ? setDefaultValue(element, type, getToStringValue(value))
	    : null != defaultValue
	      ? setDefaultValue(element, type, getToStringValue(defaultValue))
	      : null != lastDefaultValue && element.removeAttribute("value");
	  null == checked &&
	    null != defaultChecked &&
	    (element.defaultChecked = !!defaultChecked);
	  null != checked &&
	    (element.checked =
	      checked && "function" !== typeof checked && "symbol" !== typeof checked);
	  null != name &&
	  "function" !== typeof name &&
	  "symbol" !== typeof name &&
	  "boolean" !== typeof name
	    ? (element.name = "" + getToStringValue(name))
	    : element.removeAttribute("name");
	}
	function initInput(
	  element,
	  value,
	  defaultValue,
	  checked,
	  defaultChecked,
	  type,
	  name,
	  isHydrating
	) {
	  null != type &&
	    "function" !== typeof type &&
	    "symbol" !== typeof type &&
	    "boolean" !== typeof type &&
	    (element.type = type);
	  if (null != value || null != defaultValue) {
	    if (
	      !(
	        ("submit" !== type && "reset" !== type) ||
	        (void 0 !== value && null !== value)
	      )
	    ) {
	      track(element);
	      return;
	    }
	    defaultValue =
	      null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	    value = null != value ? "" + getToStringValue(value) : defaultValue;
	    isHydrating || value === element.value || (element.value = value);
	    element.defaultValue = value;
	  }
	  checked = null != checked ? checked : defaultChecked;
	  checked =
	    "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
	  element.checked = isHydrating ? element.checked : !!checked;
	  element.defaultChecked = !!checked;
	  null != name &&
	    "function" !== typeof name &&
	    "symbol" !== typeof name &&
	    "boolean" !== typeof name &&
	    (element.name = name);
	  track(element);
	}
	function setDefaultValue(node, type, value) {
	  ("number" === type && getActiveElement(node.ownerDocument) === node) ||
	    node.defaultValue === "" + value ||
	    (node.defaultValue = "" + value);
	}
	function updateOptions(node, multiple, propValue, setDefaultSelected) {
	  node = node.options;
	  if (multiple) {
	    multiple = {};
	    for (var i = 0; i < propValue.length; i++)
	      multiple["$" + propValue[i]] = !0;
	    for (propValue = 0; propValue < node.length; propValue++)
	      (i = multiple.hasOwnProperty("$" + node[propValue].value)),
	        node[propValue].selected !== i && (node[propValue].selected = i),
	        i && setDefaultSelected && (node[propValue].defaultSelected = !0);
	  } else {
	    propValue = "" + getToStringValue(propValue);
	    multiple = null;
	    for (i = 0; i < node.length; i++) {
	      if (node[i].value === propValue) {
	        node[i].selected = !0;
	        setDefaultSelected && (node[i].defaultSelected = !0);
	        return;
	      }
	      null !== multiple || node[i].disabled || (multiple = node[i]);
	    }
	    null !== multiple && (multiple.selected = !0);
	  }
	}
	function updateTextarea(element, value, defaultValue) {
	  if (
	    null != value &&
	    ((value = "" + getToStringValue(value)),
	    value !== element.value && (element.value = value),
	    null == defaultValue)
	  ) {
	    element.defaultValue !== value && (element.defaultValue = value);
	    return;
	  }
	  element.defaultValue =
	    null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	}
	function initTextarea(element, value, defaultValue, children) {
	  if (null == value) {
	    if (null != children) {
	      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
	      if (isArrayImpl(children)) {
	        if (1 < children.length) throw Error(formatProdErrorMessage(93));
	        children = children[0];
	      }
	      defaultValue = children;
	    }
	    null == defaultValue && (defaultValue = "");
	    value = defaultValue;
	  }
	  defaultValue = getToStringValue(value);
	  element.defaultValue = defaultValue;
	  children = element.textContent;
	  children === defaultValue &&
	    "" !== children &&
	    null !== children &&
	    (element.value = children);
	  track(element);
	}
	function setTextContent(node, text) {
	  if (text) {
	    var firstChild = node.firstChild;
	    if (
	      firstChild &&
	      firstChild === node.lastChild &&
	      3 === firstChild.nodeType
	    ) {
	      firstChild.nodeValue = text;
	      return;
	    }
	  }
	  node.textContent = text;
	}
	var unitlessNumbers = new Set(
	  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
	    " "
	  )
	);
	function setValueForStyle(style, styleName, value) {
	  var isCustomProperty = 0 === styleName.indexOf("--");
	  null == value || "boolean" === typeof value || "" === value
	    ? isCustomProperty
	      ? style.setProperty(styleName, "")
	      : "float" === styleName
	        ? (style.cssFloat = "")
	        : (style[styleName] = "")
	    : isCustomProperty
	      ? style.setProperty(styleName, value)
	      : "number" !== typeof value ||
	          0 === value ||
	          unitlessNumbers.has(styleName)
	        ? "float" === styleName
	          ? (style.cssFloat = value)
	          : (style[styleName] = ("" + value).trim())
	        : (style[styleName] = value + "px");
	}
	function setValueForStyles(node, styles, prevStyles) {
	  if (null != styles && "object" !== typeof styles)
	    throw Error(formatProdErrorMessage(62));
	  node = node.style;
	  if (null != prevStyles) {
	    for (var styleName in prevStyles)
	      !prevStyles.hasOwnProperty(styleName) ||
	        (null != styles && styles.hasOwnProperty(styleName)) ||
	        (0 === styleName.indexOf("--")
	          ? node.setProperty(styleName, "")
	          : "float" === styleName
	            ? (node.cssFloat = "")
	            : (node[styleName] = ""));
	    for (var styleName$16 in styles)
	      (styleName = styles[styleName$16]),
	        styles.hasOwnProperty(styleName$16) &&
	          prevStyles[styleName$16] !== styleName &&
	          setValueForStyle(node, styleName$16, styleName);
	  } else
	    for (var styleName$17 in styles)
	      styles.hasOwnProperty(styleName$17) &&
	        setValueForStyle(node, styleName$17, styles[styleName$17]);
	}
	function isCustomElement(tagName) {
	  if (-1 === tagName.indexOf("-")) return !1;
	  switch (tagName) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return !1;
	    default:
	      return !0;
	  }
	}
	var aliases = new Map([
	    ["acceptCharset", "accept-charset"],
	    ["htmlFor", "for"],
	    ["httpEquiv", "http-equiv"],
	    ["crossOrigin", "crossorigin"],
	    ["accentHeight", "accent-height"],
	    ["alignmentBaseline", "alignment-baseline"],
	    ["arabicForm", "arabic-form"],
	    ["baselineShift", "baseline-shift"],
	    ["capHeight", "cap-height"],
	    ["clipPath", "clip-path"],
	    ["clipRule", "clip-rule"],
	    ["colorInterpolation", "color-interpolation"],
	    ["colorInterpolationFilters", "color-interpolation-filters"],
	    ["colorProfile", "color-profile"],
	    ["colorRendering", "color-rendering"],
	    ["dominantBaseline", "dominant-baseline"],
	    ["enableBackground", "enable-background"],
	    ["fillOpacity", "fill-opacity"],
	    ["fillRule", "fill-rule"],
	    ["floodColor", "flood-color"],
	    ["floodOpacity", "flood-opacity"],
	    ["fontFamily", "font-family"],
	    ["fontSize", "font-size"],
	    ["fontSizeAdjust", "font-size-adjust"],
	    ["fontStretch", "font-stretch"],
	    ["fontStyle", "font-style"],
	    ["fontVariant", "font-variant"],
	    ["fontWeight", "font-weight"],
	    ["glyphName", "glyph-name"],
	    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
	    ["glyphOrientationVertical", "glyph-orientation-vertical"],
	    ["horizAdvX", "horiz-adv-x"],
	    ["horizOriginX", "horiz-origin-x"],
	    ["imageRendering", "image-rendering"],
	    ["letterSpacing", "letter-spacing"],
	    ["lightingColor", "lighting-color"],
	    ["markerEnd", "marker-end"],
	    ["markerMid", "marker-mid"],
	    ["markerStart", "marker-start"],
	    ["overlinePosition", "overline-position"],
	    ["overlineThickness", "overline-thickness"],
	    ["paintOrder", "paint-order"],
	    ["panose-1", "panose-1"],
	    ["pointerEvents", "pointer-events"],
	    ["renderingIntent", "rendering-intent"],
	    ["shapeRendering", "shape-rendering"],
	    ["stopColor", "stop-color"],
	    ["stopOpacity", "stop-opacity"],
	    ["strikethroughPosition", "strikethrough-position"],
	    ["strikethroughThickness", "strikethrough-thickness"],
	    ["strokeDasharray", "stroke-dasharray"],
	    ["strokeDashoffset", "stroke-dashoffset"],
	    ["strokeLinecap", "stroke-linecap"],
	    ["strokeLinejoin", "stroke-linejoin"],
	    ["strokeMiterlimit", "stroke-miterlimit"],
	    ["strokeOpacity", "stroke-opacity"],
	    ["strokeWidth", "stroke-width"],
	    ["textAnchor", "text-anchor"],
	    ["textDecoration", "text-decoration"],
	    ["textRendering", "text-rendering"],
	    ["transformOrigin", "transform-origin"],
	    ["underlinePosition", "underline-position"],
	    ["underlineThickness", "underline-thickness"],
	    ["unicodeBidi", "unicode-bidi"],
	    ["unicodeRange", "unicode-range"],
	    ["unitsPerEm", "units-per-em"],
	    ["vAlphabetic", "v-alphabetic"],
	    ["vHanging", "v-hanging"],
	    ["vIdeographic", "v-ideographic"],
	    ["vMathematical", "v-mathematical"],
	    ["vectorEffect", "vector-effect"],
	    ["vertAdvY", "vert-adv-y"],
	    ["vertOriginX", "vert-origin-x"],
	    ["vertOriginY", "vert-origin-y"],
	    ["wordSpacing", "word-spacing"],
	    ["writingMode", "writing-mode"],
	    ["xmlnsXlink", "xmlns:xlink"],
	    ["xHeight", "x-height"]
	  ]),
	  isJavaScriptProtocol =
	    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
	  return isJavaScriptProtocol.test("" + url)
	    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
	    : url;
	}
	function noop$1() {}
	var currentReplayingEvent = null;
	function getEventTarget(nativeEvent) {
	  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
	  nativeEvent.correspondingUseElement &&
	    (nativeEvent = nativeEvent.correspondingUseElement);
	  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
	}
	var restoreTarget = null,
	  restoreQueue = null;
	function restoreStateOfTarget(target) {
	  var internalInstance = getInstanceFromNode(target);
	  if (internalInstance && (target = internalInstance.stateNode)) {
	    var props = target[internalPropsKey] || null;
	    a: switch (((target = internalInstance.stateNode), internalInstance.type)) {
	      case "input":
	        updateInput(
	          target,
	          props.value,
	          props.defaultValue,
	          props.defaultValue,
	          props.checked,
	          props.defaultChecked,
	          props.type,
	          props.name
	        );
	        internalInstance = props.name;
	        if ("radio" === props.type && null != internalInstance) {
	          for (props = target; props.parentNode; ) props = props.parentNode;
	          props = props.querySelectorAll(
	            'input[name="' +
	              escapeSelectorAttributeValueInsideDoubleQuotes(
	                "" + internalInstance
	              ) +
	              '"][type="radio"]'
	          );
	          for (
	            internalInstance = 0;
	            internalInstance < props.length;
	            internalInstance++
	          ) {
	            var otherNode = props[internalInstance];
	            if (otherNode !== target && otherNode.form === target.form) {
	              var otherProps = otherNode[internalPropsKey] || null;
	              if (!otherProps) throw Error(formatProdErrorMessage(90));
	              updateInput(
	                otherNode,
	                otherProps.value,
	                otherProps.defaultValue,
	                otherProps.defaultValue,
	                otherProps.checked,
	                otherProps.defaultChecked,
	                otherProps.type,
	                otherProps.name
	              );
	            }
	          }
	          for (
	            internalInstance = 0;
	            internalInstance < props.length;
	            internalInstance++
	          )
	            (otherNode = props[internalInstance]),
	              otherNode.form === target.form && updateValueIfChanged(otherNode);
	        }
	        break a;
	      case "textarea":
	        updateTextarea(target, props.value, props.defaultValue);
	        break a;
	      case "select":
	        (internalInstance = props.value),
	          null != internalInstance &&
	            updateOptions(target, !!props.multiple, internalInstance, !1);
	    }
	  }
	}
	var isInsideEventHandler = !1;
	function batchedUpdates$1(fn, a, b) {
	  if (isInsideEventHandler) return fn(a, b);
	  isInsideEventHandler = !0;
	  try {
	    var JSCompiler_inline_result = fn(a);
	    return JSCompiler_inline_result;
	  } finally {
	    if (
	      ((isInsideEventHandler = !1),
	      null !== restoreTarget || null !== restoreQueue)
	    )
	      if (
	        (flushSyncWork$1(),
	        restoreTarget &&
	          ((a = restoreTarget),
	          (fn = restoreQueue),
	          (restoreQueue = restoreTarget = null),
	          restoreStateOfTarget(a),
	          fn))
	      )
	        for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
	  }
	}
	function getListener(inst, registrationName) {
	  var stateNode = inst.stateNode;
	  if (null === stateNode) return null;
	  var props = stateNode[internalPropsKey] || null;
	  if (null === props) return null;
	  stateNode = props[registrationName];
	  a: switch (registrationName) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (props = !props.disabled) ||
	        ((inst = inst.type),
	        (props = !(
	          "button" === inst ||
	          "input" === inst ||
	          "select" === inst ||
	          "textarea" === inst
	        )));
	      inst = !props;
	      break a;
	    default:
	      inst = !1;
	  }
	  if (inst) return null;
	  if (stateNode && "function" !== typeof stateNode)
	    throw Error(
	      formatProdErrorMessage(231, registrationName, typeof stateNode)
	    );
	  return stateNode;
	}
	var canUseDOM = !(
	    "undefined" === typeof window ||
	    "undefined" === typeof window.document ||
	    "undefined" === typeof window.document.createElement
	  ),
	  passiveBrowserEventsSupported = !1;
	if (canUseDOM)
	  try {
	    var options = {};
	    Object.defineProperty(options, "passive", {
	      get: function () {
	        passiveBrowserEventsSupported = !0;
	      }
	    });
	    window.addEventListener("test", options, options);
	    window.removeEventListener("test", options, options);
	  } catch (e) {
	    passiveBrowserEventsSupported = !1;
	  }
	var root = null,
	  startText = null,
	  fallbackText = null;
	function getData() {
	  if (fallbackText) return fallbackText;
	  var start,
	    startValue = startText,
	    startLength = startValue.length,
	    end,
	    endValue = "value" in root ? root.value : root.textContent,
	    endLength = endValue.length;
	  for (
	    start = 0;
	    start < startLength && startValue[start] === endValue[start];
	    start++
	  );
	  var minEnd = startLength - start;
	  for (
	    end = 1;
	    end <= minEnd &&
	    startValue[startLength - end] === endValue[endLength - end];
	    end++
	  );
	  return (fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0));
	}
	function getEventCharCode(nativeEvent) {
	  var keyCode = nativeEvent.keyCode;
	  "charCode" in nativeEvent
	    ? ((nativeEvent = nativeEvent.charCode),
	      0 === nativeEvent && 13 === keyCode && (nativeEvent = 13))
	    : (nativeEvent = keyCode);
	  10 === nativeEvent && (nativeEvent = 13);
	  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
	}
	function functionThatReturnsTrue() {
	  return !0;
	}
	function functionThatReturnsFalse() {
	  return !1;
	}
	function createSyntheticEvent(Interface) {
	  function SyntheticBaseEvent(
	    reactName,
	    reactEventType,
	    targetInst,
	    nativeEvent,
	    nativeEventTarget
	  ) {
	    this._reactName = reactName;
	    this._targetInst = targetInst;
	    this.type = reactEventType;
	    this.nativeEvent = nativeEvent;
	    this.target = nativeEventTarget;
	    this.currentTarget = null;
	    for (var propName in Interface)
	      Interface.hasOwnProperty(propName) &&
	        ((reactName = Interface[propName]),
	        (this[propName] = reactName
	          ? reactName(nativeEvent)
	          : nativeEvent[propName]));
	    this.isDefaultPrevented = (
	      null != nativeEvent.defaultPrevented
	        ? nativeEvent.defaultPrevented
	        : !1 === nativeEvent.returnValue
	    )
	      ? functionThatReturnsTrue
	      : functionThatReturnsFalse;
	    this.isPropagationStopped = functionThatReturnsFalse;
	    return this;
	  }
	  assign(SyntheticBaseEvent.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = !0;
	      var event = this.nativeEvent;
	      event &&
	        (event.preventDefault
	          ? event.preventDefault()
	          : "unknown" !== typeof event.returnValue && (event.returnValue = !1),
	        (this.isDefaultPrevented = functionThatReturnsTrue));
	    },
	    stopPropagation: function () {
	      var event = this.nativeEvent;
	      event &&
	        (event.stopPropagation
	          ? event.stopPropagation()
	          : "unknown" !== typeof event.cancelBubble &&
	            (event.cancelBubble = !0),
	        (this.isPropagationStopped = functionThatReturnsTrue));
	    },
	    persist: function () {},
	    isPersistent: functionThatReturnsTrue
	  });
	  return SyntheticBaseEvent;
	}
	var EventInterface = {
	    eventPhase: 0,
	    bubbles: 0,
	    cancelable: 0,
	    timeStamp: function (event) {
	      return event.timeStamp || Date.now();
	    },
	    defaultPrevented: 0,
	    isTrusted: 0
	  },
	  SyntheticEvent = createSyntheticEvent(EventInterface),
	  UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }),
	  SyntheticUIEvent = createSyntheticEvent(UIEventInterface),
	  lastMovementX,
	  lastMovementY,
	  lastMouseEvent,
	  MouseEventInterface = assign({}, UIEventInterface, {
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    getModifierState: getEventModifierState,
	    button: 0,
	    buttons: 0,
	    relatedTarget: function (event) {
	      return void 0 === event.relatedTarget
	        ? event.fromElement === event.srcElement
	          ? event.toElement
	          : event.fromElement
	        : event.relatedTarget;
	    },
	    movementX: function (event) {
	      if ("movementX" in event) return event.movementX;
	      event !== lastMouseEvent &&
	        (lastMouseEvent && "mousemove" === event.type
	          ? ((lastMovementX = event.screenX - lastMouseEvent.screenX),
	            (lastMovementY = event.screenY - lastMouseEvent.screenY))
	          : (lastMovementY = lastMovementX = 0),
	        (lastMouseEvent = event));
	      return lastMovementX;
	    },
	    movementY: function (event) {
	      return "movementY" in event ? event.movementY : lastMovementY;
	    }
	  }),
	  SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface),
	  DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }),
	  SyntheticDragEvent = createSyntheticEvent(DragEventInterface),
	  FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }),
	  SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface),
	  AnimationEventInterface = assign({}, EventInterface, {
	    animationName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface),
	  ClipboardEventInterface = assign({}, EventInterface, {
	    clipboardData: function (event) {
	      return "clipboardData" in event
	        ? event.clipboardData
	        : window.clipboardData;
	    }
	  }),
	  SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface),
	  CompositionEventInterface = assign({}, EventInterface, { data: 0 }),
	  SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface),
	  normalizeKey = {
	    Esc: "Escape",
	    Spacebar: " ",
	    Left: "ArrowLeft",
	    Up: "ArrowUp",
	    Right: "ArrowRight",
	    Down: "ArrowDown",
	    Del: "Delete",
	    Win: "OS",
	    Menu: "ContextMenu",
	    Apps: "ContextMenu",
	    Scroll: "ScrollLock",
	    MozPrintableKey: "Unidentified"
	  },
	  translateToKey = {
	    8: "Backspace",
	    9: "Tab",
	    12: "Clear",
	    13: "Enter",
	    16: "Shift",
	    17: "Control",
	    18: "Alt",
	    19: "Pause",
	    20: "CapsLock",
	    27: "Escape",
	    32: " ",
	    33: "PageUp",
	    34: "PageDown",
	    35: "End",
	    36: "Home",
	    37: "ArrowLeft",
	    38: "ArrowUp",
	    39: "ArrowRight",
	    40: "ArrowDown",
	    45: "Insert",
	    46: "Delete",
	    112: "F1",
	    113: "F2",
	    114: "F3",
	    115: "F4",
	    116: "F5",
	    117: "F6",
	    118: "F7",
	    119: "F8",
	    120: "F9",
	    121: "F10",
	    122: "F11",
	    123: "F12",
	    144: "NumLock",
	    145: "ScrollLock",
	    224: "Meta"
	  },
	  modifierKeyToProp = {
	    Alt: "altKey",
	    Control: "ctrlKey",
	    Meta: "metaKey",
	    Shift: "shiftKey"
	  };
	function modifierStateGetter(keyArg) {
	  var nativeEvent = this.nativeEvent;
	  return nativeEvent.getModifierState
	    ? nativeEvent.getModifierState(keyArg)
	    : (keyArg = modifierKeyToProp[keyArg])
	      ? !!nativeEvent[keyArg]
	      : !1;
	}
	function getEventModifierState() {
	  return modifierStateGetter;
	}
	var KeyboardEventInterface = assign({}, UIEventInterface, {
	    key: function (nativeEvent) {
	      if (nativeEvent.key) {
	        var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	        if ("Unidentified" !== key) return key;
	      }
	      return "keypress" === nativeEvent.type
	        ? ((nativeEvent = getEventCharCode(nativeEvent)),
	          13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent))
	        : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type
	          ? translateToKey[nativeEvent.keyCode] || "Unidentified"
	          : "";
	    },
	    code: 0,
	    location: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    repeat: 0,
	    locale: 0,
	    getModifierState: getEventModifierState,
	    charCode: function (event) {
	      return "keypress" === event.type ? getEventCharCode(event) : 0;
	    },
	    keyCode: function (event) {
	      return "keydown" === event.type || "keyup" === event.type
	        ? event.keyCode
	        : 0;
	    },
	    which: function (event) {
	      return "keypress" === event.type
	        ? getEventCharCode(event)
	        : "keydown" === event.type || "keyup" === event.type
	          ? event.keyCode
	          : 0;
	    }
	  }),
	  SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface),
	  PointerEventInterface = assign({}, MouseEventInterface, {
	    pointerId: 0,
	    width: 0,
	    height: 0,
	    pressure: 0,
	    tangentialPressure: 0,
	    tiltX: 0,
	    tiltY: 0,
	    twist: 0,
	    pointerType: 0,
	    isPrimary: 0
	  }),
	  SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface),
	  TouchEventInterface = assign({}, UIEventInterface, {
	    touches: 0,
	    targetTouches: 0,
	    changedTouches: 0,
	    altKey: 0,
	    metaKey: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    getModifierState: getEventModifierState
	  }),
	  SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface),
	  TransitionEventInterface = assign({}, EventInterface, {
	    propertyName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface),
	  WheelEventInterface = assign({}, MouseEventInterface, {
	    deltaX: function (event) {
	      return "deltaX" in event
	        ? event.deltaX
	        : "wheelDeltaX" in event
	          ? -event.wheelDeltaX
	          : 0;
	    },
	    deltaY: function (event) {
	      return "deltaY" in event
	        ? event.deltaY
	        : "wheelDeltaY" in event
	          ? -event.wheelDeltaY
	          : "wheelDelta" in event
	            ? -event.wheelDelta
	            : 0;
	    },
	    deltaZ: 0,
	    deltaMode: 0
	  }),
	  SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface),
	  ToggleEventInterface = assign({}, EventInterface, {
	    newState: 0,
	    oldState: 0
	  }),
	  SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface),
	  END_KEYCODES = [9, 13, 27, 32],
	  canUseCompositionEvent = canUseDOM && "CompositionEvent" in window,
	  documentMode = null;
	canUseDOM &&
	  "documentMode" in document &&
	  (documentMode = document.documentMode);
	var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode,
	  useFallbackCompositionData =
	    canUseDOM &&
	    (!canUseCompositionEvent ||
	      (documentMode && 8 < documentMode && 11 >= documentMode)),
	  SPACEBAR_CHAR = String.fromCharCode(32),
	  hasSpaceKeypress = !1;
	function isFallbackCompositionEnd(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "keyup":
	      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
	    case "keydown":
	      return 229 !== nativeEvent.keyCode;
	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return !0;
	    default:
	      return !1;
	  }
	}
	function getDataFromCustomEvent(nativeEvent) {
	  nativeEvent = nativeEvent.detail;
	  return "object" === typeof nativeEvent && "data" in nativeEvent
	    ? nativeEvent.data
	    : null;
	}
	var isComposing = !1;
	function getNativeBeforeInputChars(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "compositionend":
	      return getDataFromCustomEvent(nativeEvent);
	    case "keypress":
	      if (32 !== nativeEvent.which) return null;
	      hasSpaceKeypress = !0;
	      return SPACEBAR_CHAR;
	    case "textInput":
	      return (
	        (domEventName = nativeEvent.data),
	        domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName
	      );
	    default:
	      return null;
	  }
	}
	function getFallbackBeforeInputChars(domEventName, nativeEvent) {
	  if (isComposing)
	    return "compositionend" === domEventName ||
	      (!canUseCompositionEvent &&
	        isFallbackCompositionEnd(domEventName, nativeEvent))
	      ? ((domEventName = getData()),
	        (fallbackText = startText = root = null),
	        (isComposing = !1),
	        domEventName)
	      : null;
	  switch (domEventName) {
	    case "paste":
	      return null;
	    case "keypress":
	      if (
	        !(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) ||
	        (nativeEvent.ctrlKey && nativeEvent.altKey)
	      ) {
	        if (nativeEvent.char && 1 < nativeEvent.char.length)
	          return nativeEvent.char;
	        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case "compositionend":
	      return useFallbackCompositionData && "ko" !== nativeEvent.locale
	        ? null
	        : nativeEvent.data;
	    default:
	      return null;
	  }
	}
	var supportedInputTypes = {
	  color: !0,
	  date: !0,
	  datetime: !0,
	  "datetime-local": !0,
	  email: !0,
	  month: !0,
	  number: !0,
	  password: !0,
	  range: !0,
	  search: !0,
	  tel: !0,
	  text: !0,
	  time: !0,
	  url: !0,
	  week: !0
	};
	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return "input" === nodeName
	    ? !!supportedInputTypes[elem.type]
	    : "textarea" === nodeName
	      ? !0
	      : !1;
	}
	function createAndAccumulateChangeEvent(
	  dispatchQueue,
	  inst,
	  nativeEvent,
	  target
	) {
	  restoreTarget
	    ? restoreQueue
	      ? restoreQueue.push(target)
	      : (restoreQueue = [target])
	    : (restoreTarget = target);
	  inst = accumulateTwoPhaseListeners(inst, "onChange");
	  0 < inst.length &&
	    ((nativeEvent = new SyntheticEvent(
	      "onChange",
	      "change",
	      null,
	      nativeEvent,
	      target
	    )),
	    dispatchQueue.push({ event: nativeEvent, listeners: inst }));
	}
	var activeElement$1 = null,
	  activeElementInst$1 = null;
	function runEventInBatch(dispatchQueue) {
	  processDispatchQueue(dispatchQueue, 0);
	}
	function getInstIfValueChanged(targetInst) {
	  var targetNode = getNodeFromInstance(targetInst);
	  if (updateValueIfChanged(targetNode)) return targetInst;
	}
	function getTargetInstForChangeEvent(domEventName, targetInst) {
	  if ("change" === domEventName) return targetInst;
	}
	var isInputEventSupported = !1;
	if (canUseDOM) {
	  var JSCompiler_inline_result$jscomp$286;
	  if (canUseDOM) {
	    var isSupported$jscomp$inline_427 = "oninput" in document;
	    if (!isSupported$jscomp$inline_427) {
	      var element$jscomp$inline_428 = document.createElement("div");
	      element$jscomp$inline_428.setAttribute("oninput", "return;");
	      isSupported$jscomp$inline_427 =
	        "function" === typeof element$jscomp$inline_428.oninput;
	    }
	    JSCompiler_inline_result$jscomp$286 = isSupported$jscomp$inline_427;
	  } else JSCompiler_inline_result$jscomp$286 = !1;
	  isInputEventSupported =
	    JSCompiler_inline_result$jscomp$286 &&
	    (!document.documentMode || 9 < document.documentMode);
	}
	function stopWatchingForValueChange() {
	  activeElement$1 &&
	    (activeElement$1.detachEvent("onpropertychange", handlePropertyChange),
	    (activeElementInst$1 = activeElement$1 = null));
	}
	function handlePropertyChange(nativeEvent) {
	  if (
	    "value" === nativeEvent.propertyName &&
	    getInstIfValueChanged(activeElementInst$1)
	  ) {
	    var dispatchQueue = [];
	    createAndAccumulateChangeEvent(
	      dispatchQueue,
	      activeElementInst$1,
	      nativeEvent,
	      getEventTarget(nativeEvent)
	    );
	    batchedUpdates$1(runEventInBatch, dispatchQueue);
	  }
	}
	function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
	  "focusin" === domEventName
	    ? (stopWatchingForValueChange(),
	      (activeElement$1 = target),
	      (activeElementInst$1 = targetInst),
	      activeElement$1.attachEvent("onpropertychange", handlePropertyChange))
	    : "focusout" === domEventName && stopWatchingForValueChange();
	}
	function getTargetInstForInputEventPolyfill(domEventName) {
	  if (
	    "selectionchange" === domEventName ||
	    "keyup" === domEventName ||
	    "keydown" === domEventName
	  )
	    return getInstIfValueChanged(activeElementInst$1);
	}
	function getTargetInstForClickEvent(domEventName, targetInst) {
	  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
	  if ("input" === domEventName || "change" === domEventName)
	    return getInstIfValueChanged(targetInst);
	}
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	function shallowEqual(objA, objB) {
	  if (objectIs(objA, objB)) return !0;
	  if (
	    "object" !== typeof objA ||
	    null === objA ||
	    "object" !== typeof objB ||
	    null === objB
	  )
	    return !1;
	  var keysA = Object.keys(objA),
	    keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return !1;
	  for (keysB = 0; keysB < keysA.length; keysB++) {
	    var currentKey = keysA[keysB];
	    if (
	      !hasOwnProperty.call(objB, currentKey) ||
	      !objectIs(objA[currentKey], objB[currentKey])
	    )
	      return !1;
	  }
	  return !0;
	}
	function getLeafNode(node) {
	  for (; node && node.firstChild; ) node = node.firstChild;
	  return node;
	}
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  root = 0;
	  for (var nodeEnd; node; ) {
	    if (3 === node.nodeType) {
	      nodeEnd = root + node.textContent.length;
	      if (root <= offset && nodeEnd >= offset)
	        return { node: node, offset: offset - root };
	      root = nodeEnd;
	    }
	    a: {
	      for (; node; ) {
	        if (node.nextSibling) {
	          node = node.nextSibling;
	          break a;
	        }
	        node = node.parentNode;
	      }
	      node = void 0;
	    }
	    node = getLeafNode(node);
	  }
	}
	function containsNode(outerNode, innerNode) {
	  return outerNode && innerNode
	    ? outerNode === innerNode
	      ? !0
	      : outerNode && 3 === outerNode.nodeType
	        ? !1
	        : innerNode && 3 === innerNode.nodeType
	          ? containsNode(outerNode, innerNode.parentNode)
	          : "contains" in outerNode
	            ? outerNode.contains(innerNode)
	            : outerNode.compareDocumentPosition
	              ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
	              : !1
	    : !1;
	}
	function getActiveElementDeep(containerInfo) {
	  containerInfo =
	    null != containerInfo &&
	    null != containerInfo.ownerDocument &&
	    null != containerInfo.ownerDocument.defaultView
	      ? containerInfo.ownerDocument.defaultView
	      : window;
	  for (
	    var element = getActiveElement(containerInfo.document);
	    element instanceof containerInfo.HTMLIFrameElement;

	  ) {
	    try {
	      var JSCompiler_inline_result =
	        "string" === typeof element.contentWindow.location.href;
	    } catch (err) {
	      JSCompiler_inline_result = !1;
	    }
	    if (JSCompiler_inline_result) containerInfo = element.contentWindow;
	    else break;
	    element = getActiveElement(containerInfo.document);
	  }
	  return element;
	}
	function hasSelectionCapabilities(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return (
	    nodeName &&
	    (("input" === nodeName &&
	      ("text" === elem.type ||
	        "search" === elem.type ||
	        "tel" === elem.type ||
	        "url" === elem.type ||
	        "password" === elem.type)) ||
	      "textarea" === nodeName ||
	      "true" === elem.contentEditable)
	  );
	}
	var skipSelectionChangeEvent =
	    canUseDOM && "documentMode" in document && 11 >= document.documentMode,
	  activeElement = null,
	  activeElementInst = null,
	  lastSelection = null,
	  mouseDown = !1;
	function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
	  var doc =
	    nativeEventTarget.window === nativeEventTarget
	      ? nativeEventTarget.document
	      : 9 === nativeEventTarget.nodeType
	        ? nativeEventTarget
	        : nativeEventTarget.ownerDocument;
	  mouseDown ||
	    null == activeElement ||
	    activeElement !== getActiveElement(doc) ||
	    ((doc = activeElement),
	    "selectionStart" in doc && hasSelectionCapabilities(doc)
	      ? (doc = { start: doc.selectionStart, end: doc.selectionEnd })
	      : ((doc = (
	          (doc.ownerDocument && doc.ownerDocument.defaultView) ||
	          window
	        ).getSelection()),
	        (doc = {
	          anchorNode: doc.anchorNode,
	          anchorOffset: doc.anchorOffset,
	          focusNode: doc.focusNode,
	          focusOffset: doc.focusOffset
	        })),
	    (lastSelection && shallowEqual(lastSelection, doc)) ||
	      ((lastSelection = doc),
	      (doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect")),
	      0 < doc.length &&
	        ((nativeEvent = new SyntheticEvent(
	          "onSelect",
	          "select",
	          null,
	          nativeEvent,
	          nativeEventTarget
	        )),
	        dispatchQueue.push({ event: nativeEvent, listeners: doc }),
	        (nativeEvent.target = activeElement))));
	}
	function makePrefixMap(styleProp, eventName) {
	  var prefixes = {};
	  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	  prefixes["Webkit" + styleProp] = "webkit" + eventName;
	  prefixes["Moz" + styleProp] = "moz" + eventName;
	  return prefixes;
	}
	var vendorPrefixes = {
	    animationend: makePrefixMap("Animation", "AnimationEnd"),
	    animationiteration: makePrefixMap("Animation", "AnimationIteration"),
	    animationstart: makePrefixMap("Animation", "AnimationStart"),
	    transitionrun: makePrefixMap("Transition", "TransitionRun"),
	    transitionstart: makePrefixMap("Transition", "TransitionStart"),
	    transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
	    transitionend: makePrefixMap("Transition", "TransitionEnd")
	  },
	  prefixedEventNames = {},
	  style = {};
	canUseDOM &&
	  ((style = document.createElement("div").style),
	  "AnimationEvent" in window ||
	    (delete vendorPrefixes.animationend.animation,
	    delete vendorPrefixes.animationiteration.animation,
	    delete vendorPrefixes.animationstart.animation),
	  "TransitionEvent" in window ||
	    delete vendorPrefixes.transitionend.transition);
	function getVendorPrefixedEventName(eventName) {
	  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
	  if (!vendorPrefixes[eventName]) return eventName;
	  var prefixMap = vendorPrefixes[eventName],
	    styleProp;
	  for (styleProp in prefixMap)
	    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
	      return (prefixedEventNames[eventName] = prefixMap[styleProp]);
	  return eventName;
	}
	var ANIMATION_END = getVendorPrefixedEventName("animationend"),
	  ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"),
	  ANIMATION_START = getVendorPrefixedEventName("animationstart"),
	  TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"),
	  TRANSITION_START = getVendorPrefixedEventName("transitionstart"),
	  TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"),
	  TRANSITION_END = getVendorPrefixedEventName("transitionend"),
	  topLevelEventsToReactNames = new Map(),
	  simpleEventPluginEvents =
	    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
	      " "
	    );
	simpleEventPluginEvents.push("scrollEnd");
	function registerSimpleEvent(domEventName, reactName) {
	  topLevelEventsToReactNames.set(domEventName, reactName);
	  registerTwoPhaseEvent(reactName, [domEventName]);
	}
	var reportGlobalError =
	    "function" === typeof reportError
	      ? reportError
	      : function (error) {
	          if (
	            "object" === typeof window &&
	            "function" === typeof window.ErrorEvent
	          ) {
	            var event = new window.ErrorEvent("error", {
	              bubbles: !0,
	              cancelable: !0,
	              message:
	                "object" === typeof error &&
	                null !== error &&
	                "string" === typeof error.message
	                  ? String(error.message)
	                  : String(error),
	              error: error
	            });
	            if (!window.dispatchEvent(event)) return;
	          } else if (
	            "object" === typeof process &&
	            "function" === typeof process.emit
	          ) {
	            process.emit("uncaughtException", error);
	            return;
	          }
	          console.error(error);
	        },
	  concurrentQueues = [],
	  concurrentQueuesIndex = 0,
	  concurrentlyUpdatedLanes = 0;
	function finishQueueingConcurrentUpdates() {
	  for (
	    var endIndex = concurrentQueuesIndex,
	      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
	    i < endIndex;

	  ) {
	    var fiber = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var queue = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var update = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var lane = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    if (null !== queue && null !== update) {
	      var pending = queue.pending;
	      null === pending
	        ? (update.next = update)
	        : ((update.next = pending.next), (pending.next = update));
	      queue.pending = update;
	    }
	    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
	  }
	}
	function enqueueUpdate$1(fiber, queue, update, lane) {
	  concurrentQueues[concurrentQueuesIndex++] = fiber;
	  concurrentQueues[concurrentQueuesIndex++] = queue;
	  concurrentQueues[concurrentQueuesIndex++] = update;
	  concurrentQueues[concurrentQueuesIndex++] = lane;
	  concurrentlyUpdatedLanes |= lane;
	  fiber.lanes |= lane;
	  fiber = fiber.alternate;
	  null !== fiber && (fiber.lanes |= lane);
	}
	function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
	  enqueueUpdate$1(fiber, queue, update, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function enqueueConcurrentRenderForLane(fiber, lane) {
	  enqueueUpdate$1(fiber, null, null, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
	  sourceFiber.lanes |= lane;
	  var alternate = sourceFiber.alternate;
	  null !== alternate && (alternate.lanes |= lane);
	  for (var isHidden = !1, parent = sourceFiber.return; null !== parent; )
	    (parent.childLanes |= lane),
	      (alternate = parent.alternate),
	      null !== alternate && (alternate.childLanes |= lane),
	      22 === parent.tag &&
	        ((sourceFiber = parent.stateNode),
	        null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = !0)),
	      (sourceFiber = parent),
	      (parent = parent.return);
	  return 3 === sourceFiber.tag
	    ? ((parent = sourceFiber.stateNode),
	      isHidden &&
	        null !== update &&
	        ((isHidden = 31 - clz32(lane)),
	        (sourceFiber = parent.hiddenUpdates),
	        (alternate = sourceFiber[isHidden]),
	        null === alternate
	          ? (sourceFiber[isHidden] = [update])
	          : alternate.push(update),
	        (update.lane = lane | 536870912)),
	      parent)
	    : null;
	}
	function getRootForUpdatedFiber(sourceFiber) {
	  if (50 < nestedUpdateCount)
	    throw (
	      ((nestedUpdateCount = 0),
	      (rootWithNestedUpdates = null),
	      Error(formatProdErrorMessage(185)))
	    );
	  for (var parent = sourceFiber.return; null !== parent; )
	    (sourceFiber = parent), (parent = sourceFiber.return);
	  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
	}
	var emptyContextObject = {};
	function FiberNode(tag, pendingProps, key, mode) {
	  this.tag = tag;
	  this.key = key;
	  this.sibling =
	    this.child =
	    this.return =
	    this.stateNode =
	    this.type =
	    this.elementType =
	      null;
	  this.index = 0;
	  this.refCleanup = this.ref = null;
	  this.pendingProps = pendingProps;
	  this.dependencies =
	    this.memoizedState =
	    this.updateQueue =
	    this.memoizedProps =
	      null;
	  this.mode = mode;
	  this.subtreeFlags = this.flags = 0;
	  this.deletions = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}
	function createFiberImplClass(tag, pendingProps, key, mode) {
	  return new FiberNode(tag, pendingProps, key, mode);
	}
	function shouldConstruct(Component) {
	  Component = Component.prototype;
	  return !(!Component || !Component.isReactComponent);
	}
	function createWorkInProgress(current, pendingProps) {
	  var workInProgress = current.alternate;
	  null === workInProgress
	    ? ((workInProgress = createFiberImplClass(
	        current.tag,
	        pendingProps,
	        current.key,
	        current.mode
	      )),
	      (workInProgress.elementType = current.elementType),
	      (workInProgress.type = current.type),
	      (workInProgress.stateNode = current.stateNode),
	      (workInProgress.alternate = current),
	      (current.alternate = workInProgress))
	    : ((workInProgress.pendingProps = pendingProps),
	      (workInProgress.type = current.type),
	      (workInProgress.flags = 0),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.deletions = null));
	  workInProgress.flags = current.flags & 65011712;
	  workInProgress.childLanes = current.childLanes;
	  workInProgress.lanes = current.lanes;
	  workInProgress.child = current.child;
	  workInProgress.memoizedProps = current.memoizedProps;
	  workInProgress.memoizedState = current.memoizedState;
	  workInProgress.updateQueue = current.updateQueue;
	  pendingProps = current.dependencies;
	  workInProgress.dependencies =
	    null === pendingProps
	      ? null
	      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
	  workInProgress.sibling = current.sibling;
	  workInProgress.index = current.index;
	  workInProgress.ref = current.ref;
	  workInProgress.refCleanup = current.refCleanup;
	  return workInProgress;
	}
	function resetWorkInProgress(workInProgress, renderLanes) {
	  workInProgress.flags &= 65011714;
	  var current = workInProgress.alternate;
	  null === current
	    ? ((workInProgress.childLanes = 0),
	      (workInProgress.lanes = renderLanes),
	      (workInProgress.child = null),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.memoizedProps = null),
	      (workInProgress.memoizedState = null),
	      (workInProgress.updateQueue = null),
	      (workInProgress.dependencies = null),
	      (workInProgress.stateNode = null))
	    : ((workInProgress.childLanes = current.childLanes),
	      (workInProgress.lanes = current.lanes),
	      (workInProgress.child = current.child),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.deletions = null),
	      (workInProgress.memoizedProps = current.memoizedProps),
	      (workInProgress.memoizedState = current.memoizedState),
	      (workInProgress.updateQueue = current.updateQueue),
	      (workInProgress.type = current.type),
	      (renderLanes = current.dependencies),
	      (workInProgress.dependencies =
	        null === renderLanes
	          ? null
	          : {
	              lanes: renderLanes.lanes,
	              firstContext: renderLanes.firstContext
	            }));
	  return workInProgress;
	}
	function createFiberFromTypeAndProps(
	  type,
	  key,
	  pendingProps,
	  owner,
	  mode,
	  lanes
	) {
	  var fiberTag = 0;
	  owner = type;
	  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
	  else if ("string" === typeof type)
	    fiberTag = isHostHoistableType(
	      type,
	      pendingProps,
	      contextStackCursor.current
	    )
	      ? 26
	      : "html" === type || "head" === type || "body" === type
	        ? 27
	        : 5;
	  else
	    a: switch (type) {
	      case REACT_ACTIVITY_TYPE:
	        return (
	          (type = createFiberImplClass(31, pendingProps, key, mode)),
	          (type.elementType = REACT_ACTIVITY_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_FRAGMENT_TYPE:
	        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
	      case REACT_STRICT_MODE_TYPE:
	        fiberTag = 8;
	        mode |= 24;
	        break;
	      case REACT_PROFILER_TYPE:
	        return (
	          (type = createFiberImplClass(12, pendingProps, key, mode | 2)),
	          (type.elementType = REACT_PROFILER_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_SUSPENSE_TYPE:
	        return (
	          (type = createFiberImplClass(13, pendingProps, key, mode)),
	          (type.elementType = REACT_SUSPENSE_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_SUSPENSE_LIST_TYPE:
	        return (
	          (type = createFiberImplClass(19, pendingProps, key, mode)),
	          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      default:
	        if ("object" === typeof type && null !== type)
	          switch (type.$$typeof) {
	            case REACT_CONTEXT_TYPE:
	              fiberTag = 10;
	              break a;
	            case REACT_CONSUMER_TYPE:
	              fiberTag = 9;
	              break a;
	            case REACT_FORWARD_REF_TYPE:
	              fiberTag = 11;
	              break a;
	            case REACT_MEMO_TYPE:
	              fiberTag = 14;
	              break a;
	            case REACT_LAZY_TYPE:
	              fiberTag = 16;
	              owner = null;
	              break a;
	          }
	        fiberTag = 29;
	        pendingProps = Error(
	          formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
	        );
	        owner = null;
	    }
	  key = createFiberImplClass(fiberTag, pendingProps, key, mode);
	  key.elementType = type;
	  key.type = owner;
	  key.lanes = lanes;
	  return key;
	}
	function createFiberFromFragment(elements, mode, lanes, key) {
	  elements = createFiberImplClass(7, elements, key, mode);
	  elements.lanes = lanes;
	  return elements;
	}
	function createFiberFromText(content, mode, lanes) {
	  content = createFiberImplClass(6, content, null, mode);
	  content.lanes = lanes;
	  return content;
	}
	function createFiberFromDehydratedFragment(dehydratedNode) {
	  var fiber = createFiberImplClass(18, null, null, 0);
	  fiber.stateNode = dehydratedNode;
	  return fiber;
	}
	function createFiberFromPortal(portal, mode, lanes) {
	  mode = createFiberImplClass(
	    4,
	    null !== portal.children ? portal.children : [],
	    portal.key,
	    mode
	  );
	  mode.lanes = lanes;
	  mode.stateNode = {
	    containerInfo: portal.containerInfo,
	    pendingChildren: null,
	    implementation: portal.implementation
	  };
	  return mode;
	}
	var CapturedStacks = new WeakMap();
	function createCapturedValueAtFiber(value, source) {
	  if ("object" === typeof value && null !== value) {
	    var existing = CapturedStacks.get(value);
	    if (void 0 !== existing) return existing;
	    source = {
	      value: value,
	      source: source,
	      stack: getStackByFiberInDevAndProd(source)
	    };
	    CapturedStacks.set(value, source);
	    return source;
	  }
	  return {
	    value: value,
	    source: source,
	    stack: getStackByFiberInDevAndProd(source)
	  };
	}
	var forkStack = [],
	  forkStackIndex = 0,
	  treeForkProvider = null,
	  treeForkCount = 0,
	  idStack = [],
	  idStackIndex = 0,
	  treeContextProvider = null,
	  treeContextId = 1,
	  treeContextOverflow = "";
	function pushTreeFork(workInProgress, totalChildren) {
	  forkStack[forkStackIndex++] = treeForkCount;
	  forkStack[forkStackIndex++] = treeForkProvider;
	  treeForkProvider = workInProgress;
	  treeForkCount = totalChildren;
	}
	function pushTreeId(workInProgress, totalChildren, index) {
	  idStack[idStackIndex++] = treeContextId;
	  idStack[idStackIndex++] = treeContextOverflow;
	  idStack[idStackIndex++] = treeContextProvider;
	  treeContextProvider = workInProgress;
	  var baseIdWithLeadingBit = treeContextId;
	  workInProgress = treeContextOverflow;
	  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
	  baseIdWithLeadingBit &= ~(1 << baseLength);
	  index += 1;
	  var length = 32 - clz32(totalChildren) + baseLength;
	  if (30 < length) {
	    var numberOfOverflowBits = baseLength - (baseLength % 5);
	    length = (
	      baseIdWithLeadingBit &
	      ((1 << numberOfOverflowBits) - 1)
	    ).toString(32);
	    baseIdWithLeadingBit >>= numberOfOverflowBits;
	    baseLength -= numberOfOverflowBits;
	    treeContextId =
	      (1 << (32 - clz32(totalChildren) + baseLength)) |
	      (index << baseLength) |
	      baseIdWithLeadingBit;
	    treeContextOverflow = length + workInProgress;
	  } else
	    (treeContextId =
	      (1 << length) | (index << baseLength) | baseIdWithLeadingBit),
	      (treeContextOverflow = workInProgress);
	}
	function pushMaterializedTreeId(workInProgress) {
	  null !== workInProgress.return &&
	    (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
	}
	function popTreeContext(workInProgress) {
	  for (; workInProgress === treeForkProvider; )
	    (treeForkProvider = forkStack[--forkStackIndex]),
	      (forkStack[forkStackIndex] = null),
	      (treeForkCount = forkStack[--forkStackIndex]),
	      (forkStack[forkStackIndex] = null);
	  for (; workInProgress === treeContextProvider; )
	    (treeContextProvider = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null),
	      (treeContextOverflow = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null),
	      (treeContextId = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null);
	}
	function restoreSuspendedTreeContext(workInProgress, suspendedContext) {
	  idStack[idStackIndex++] = treeContextId;
	  idStack[idStackIndex++] = treeContextOverflow;
	  idStack[idStackIndex++] = treeContextProvider;
	  treeContextId = suspendedContext.id;
	  treeContextOverflow = suspendedContext.overflow;
	  treeContextProvider = workInProgress;
	}
	var hydrationParentFiber = null,
	  nextHydratableInstance = null,
	  isHydrating = !1,
	  hydrationErrors = null,
	  rootOrSingletonContext = !1,
	  HydrationMismatchException = Error(formatProdErrorMessage(519));
	function throwOnHydrationMismatch(fiber) {
	  var error = Error(
	    formatProdErrorMessage(
	      418,
	      1 < arguments.length && void 0 !== arguments[1] && arguments[1]
	        ? "text"
	        : "HTML",
	      ""
	    )
	  );
	  queueHydrationError(createCapturedValueAtFiber(error, fiber));
	  throw HydrationMismatchException;
	}
	function prepareToHydrateHostInstance(fiber) {
	  var instance = fiber.stateNode,
	    type = fiber.type,
	    props = fiber.memoizedProps;
	  instance[internalInstanceKey] = fiber;
	  instance[internalPropsKey] = props;
	  switch (type) {
	    case "dialog":
	      listenToNonDelegatedEvent("cancel", instance);
	      listenToNonDelegatedEvent("close", instance);
	      break;
	    case "iframe":
	    case "object":
	    case "embed":
	      listenToNonDelegatedEvent("load", instance);
	      break;
	    case "video":
	    case "audio":
	      for (type = 0; type < mediaEventTypes.length; type++)
	        listenToNonDelegatedEvent(mediaEventTypes[type], instance);
	      break;
	    case "source":
	      listenToNonDelegatedEvent("error", instance);
	      break;
	    case "img":
	    case "image":
	    case "link":
	      listenToNonDelegatedEvent("error", instance);
	      listenToNonDelegatedEvent("load", instance);
	      break;
	    case "details":
	      listenToNonDelegatedEvent("toggle", instance);
	      break;
	    case "input":
	      listenToNonDelegatedEvent("invalid", instance);
	      initInput(
	        instance,
	        props.value,
	        props.defaultValue,
	        props.checked,
	        props.defaultChecked,
	        props.type,
	        props.name,
	        !0
	      );
	      break;
	    case "select":
	      listenToNonDelegatedEvent("invalid", instance);
	      break;
	    case "textarea":
	      listenToNonDelegatedEvent("invalid", instance),
	        initTextarea(instance, props.value, props.defaultValue, props.children);
	  }
	  type = props.children;
	  ("string" !== typeof type &&
	    "number" !== typeof type &&
	    "bigint" !== typeof type) ||
	  instance.textContent === "" + type ||
	  !0 === props.suppressHydrationWarning ||
	  checkForUnmatchedText(instance.textContent, type)
	    ? (null != props.popover &&
	        (listenToNonDelegatedEvent("beforetoggle", instance),
	        listenToNonDelegatedEvent("toggle", instance)),
	      null != props.onScroll && listenToNonDelegatedEvent("scroll", instance),
	      null != props.onScrollEnd &&
	        listenToNonDelegatedEvent("scrollend", instance),
	      null != props.onClick && (instance.onclick = noop$1),
	      (instance = !0))
	    : (instance = !1);
	  instance || throwOnHydrationMismatch(fiber, !0);
	}
	function popToNextHostParent(fiber) {
	  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
	    switch (hydrationParentFiber.tag) {
	      case 5:
	      case 31:
	      case 13:
	        rootOrSingletonContext = !1;
	        return;
	      case 27:
	      case 3:
	        rootOrSingletonContext = !0;
	        return;
	      default:
	        hydrationParentFiber = hydrationParentFiber.return;
	    }
	}
	function popHydrationState(fiber) {
	  if (fiber !== hydrationParentFiber) return !1;
	  if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = !0), !1;
	  var tag = fiber.tag,
	    JSCompiler_temp;
	  if ((JSCompiler_temp = 3 !== tag && 27 !== tag)) {
	    if ((JSCompiler_temp = 5 === tag))
	      (JSCompiler_temp = fiber.type),
	        (JSCompiler_temp =
	          !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) ||
	          shouldSetTextContent(fiber.type, fiber.memoizedProps));
	    JSCompiler_temp = !JSCompiler_temp;
	  }
	  JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
	  popToNextHostParent(fiber);
	  if (13 === tag) {
	    fiber = fiber.memoizedState;
	    fiber = null !== fiber ? fiber.dehydrated : null;
	    if (!fiber) throw Error(formatProdErrorMessage(317));
	    nextHydratableInstance =
	      getNextHydratableInstanceAfterHydrationBoundary(fiber);
	  } else if (31 === tag) {
	    fiber = fiber.memoizedState;
	    fiber = null !== fiber ? fiber.dehydrated : null;
	    if (!fiber) throw Error(formatProdErrorMessage(317));
	    nextHydratableInstance =
	      getNextHydratableInstanceAfterHydrationBoundary(fiber);
	  } else
	    27 === tag
	      ? ((tag = nextHydratableInstance),
	        isSingletonScope(fiber.type)
	          ? ((fiber = previousHydratableOnEnteringScopedSingleton),
	            (previousHydratableOnEnteringScopedSingleton = null),
	            (nextHydratableInstance = fiber))
	          : (nextHydratableInstance = tag))
	      : (nextHydratableInstance = hydrationParentFiber
	          ? getNextHydratable(fiber.stateNode.nextSibling)
	          : null);
	  return !0;
	}
	function resetHydrationState() {
	  nextHydratableInstance = hydrationParentFiber = null;
	  isHydrating = !1;
	}
	function upgradeHydrationErrorsToRecoverable() {
	  var queuedErrors = hydrationErrors;
	  null !== queuedErrors &&
	    (null === workInProgressRootRecoverableErrors
	      ? (workInProgressRootRecoverableErrors = queuedErrors)
	      : workInProgressRootRecoverableErrors.push.apply(
	          workInProgressRootRecoverableErrors,
	          queuedErrors
	        ),
	    (hydrationErrors = null));
	  return queuedErrors;
	}
	function queueHydrationError(error) {
	  null === hydrationErrors
	    ? (hydrationErrors = [error])
	    : hydrationErrors.push(error);
	}
	var valueCursor = createCursor(null),
	  currentlyRenderingFiber$1 = null,
	  lastContextDependency = null;
	function pushProvider(providerFiber, context, nextValue) {
	  push(valueCursor, context._currentValue);
	  context._currentValue = nextValue;
	}
	function popProvider(context) {
	  context._currentValue = valueCursor.current;
	  pop(valueCursor);
	}
	function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
	  for (; null !== parent; ) {
	    var alternate = parent.alternate;
	    (parent.childLanes & renderLanes) !== renderLanes
	      ? ((parent.childLanes |= renderLanes),
	        null !== alternate && (alternate.childLanes |= renderLanes))
	      : null !== alternate &&
	        (alternate.childLanes & renderLanes) !== renderLanes &&
	        (alternate.childLanes |= renderLanes);
	    if (parent === propagationRoot) break;
	    parent = parent.return;
	  }
	}
	function propagateContextChanges(
	  workInProgress,
	  contexts,
	  renderLanes,
	  forcePropagateEntireTree
	) {
	  var fiber = workInProgress.child;
	  null !== fiber && (fiber.return = workInProgress);
	  for (; null !== fiber; ) {
	    var list = fiber.dependencies;
	    if (null !== list) {
	      var nextFiber = fiber.child;
	      list = list.firstContext;
	      a: for (; null !== list; ) {
	        var dependency = list;
	        list = fiber;
	        for (var i = 0; i < contexts.length; i++)
	          if (dependency.context === contexts[i]) {
	            list.lanes |= renderLanes;
	            dependency = list.alternate;
	            null !== dependency && (dependency.lanes |= renderLanes);
	            scheduleContextWorkOnParentPath(
	              list.return,
	              renderLanes,
	              workInProgress
	            );
	            forcePropagateEntireTree || (nextFiber = null);
	            break a;
	          }
	        list = dependency.next;
	      }
	    } else if (18 === fiber.tag) {
	      nextFiber = fiber.return;
	      if (null === nextFiber) throw Error(formatProdErrorMessage(341));
	      nextFiber.lanes |= renderLanes;
	      list = nextFiber.alternate;
	      null !== list && (list.lanes |= renderLanes);
	      scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
	      nextFiber = null;
	    } else nextFiber = fiber.child;
	    if (null !== nextFiber) nextFiber.return = fiber;
	    else
	      for (nextFiber = fiber; null !== nextFiber; ) {
	        if (nextFiber === workInProgress) {
	          nextFiber = null;
	          break;
	        }
	        fiber = nextFiber.sibling;
	        if (null !== fiber) {
	          fiber.return = nextFiber.return;
	          nextFiber = fiber;
	          break;
	        }
	        nextFiber = nextFiber.return;
	      }
	    fiber = nextFiber;
	  }
	}
	function propagateParentContextChanges(
	  current,
	  workInProgress,
	  renderLanes,
	  forcePropagateEntireTree
	) {
	  current = null;
	  for (
	    var parent = workInProgress, isInsidePropagationBailout = !1;
	    null !== parent;

	  ) {
	    if (!isInsidePropagationBailout)
	      if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = !0;
	      else if (0 !== (parent.flags & 262144)) break;
	    if (10 === parent.tag) {
	      var currentParent = parent.alternate;
	      if (null === currentParent) throw Error(formatProdErrorMessage(387));
	      currentParent = currentParent.memoizedProps;
	      if (null !== currentParent) {
	        var context = parent.type;
	        objectIs(parent.pendingProps.value, currentParent.value) ||
	          (null !== current ? current.push(context) : (current = [context]));
	      }
	    } else if (parent === hostTransitionProviderCursor.current) {
	      currentParent = parent.alternate;
	      if (null === currentParent) throw Error(formatProdErrorMessage(387));
	      currentParent.memoizedState.memoizedState !==
	        parent.memoizedState.memoizedState &&
	        (null !== current
	          ? current.push(HostTransitionContext)
	          : (current = [HostTransitionContext]));
	    }
	    parent = parent.return;
	  }
	  null !== current &&
	    propagateContextChanges(
	      workInProgress,
	      current,
	      renderLanes,
	      forcePropagateEntireTree
	    );
	  workInProgress.flags |= 262144;
	}
	function checkIfContextChanged(currentDependencies) {
	  for (
	    currentDependencies = currentDependencies.firstContext;
	    null !== currentDependencies;

	  ) {
	    if (
	      !objectIs(
	        currentDependencies.context._currentValue,
	        currentDependencies.memoizedValue
	      )
	    )
	      return !0;
	    currentDependencies = currentDependencies.next;
	  }
	  return !1;
	}
	function prepareToReadContext(workInProgress) {
	  currentlyRenderingFiber$1 = workInProgress;
	  lastContextDependency = null;
	  workInProgress = workInProgress.dependencies;
	  null !== workInProgress && (workInProgress.firstContext = null);
	}
	function readContext(context) {
	  return readContextForConsumer(currentlyRenderingFiber$1, context);
	}
	function readContextDuringReconciliation(consumer, context) {
	  null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
	  return readContextForConsumer(consumer, context);
	}
	function readContextForConsumer(consumer, context) {
	  var value = context._currentValue;
	  context = { context: context, memoizedValue: value, next: null };
	  if (null === lastContextDependency) {
	    if (null === consumer) throw Error(formatProdErrorMessage(308));
	    lastContextDependency = context;
	    consumer.dependencies = { lanes: 0, firstContext: context };
	    consumer.flags |= 524288;
	  } else lastContextDependency = lastContextDependency.next = context;
	  return value;
	}
	var AbortControllerLocal =
	    "undefined" !== typeof AbortController
	      ? AbortController
	      : function () {
	          var listeners = [],
	            signal = (this.signal = {
	              aborted: !1,
	              addEventListener: function (type, listener) {
	                listeners.push(listener);
	              }
	            });
	          this.abort = function () {
	            signal.aborted = !0;
	            listeners.forEach(function (listener) {
	              return listener();
	            });
	          };
	        },
	  scheduleCallback$2 = Scheduler.unstable_scheduleCallback,
	  NormalPriority = Scheduler.unstable_NormalPriority,
	  CacheContext = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    Consumer: null,
	    Provider: null,
	    _currentValue: null,
	    _currentValue2: null,
	    _threadCount: 0
	  };
	function createCache() {
	  return {
	    controller: new AbortControllerLocal(),
	    data: new Map(),
	    refCount: 0
	  };
	}
	function releaseCache(cache) {
	  cache.refCount--;
	  0 === cache.refCount &&
	    scheduleCallback$2(NormalPriority, function () {
	      cache.controller.abort();
	    });
	}
	var currentEntangledListeners = null,
	  currentEntangledPendingCount = 0,
	  currentEntangledLane = 0,
	  currentEntangledActionThenable = null;
	function entangleAsyncAction(transition, thenable) {
	  if (null === currentEntangledListeners) {
	    var entangledListeners = (currentEntangledListeners = []);
	    currentEntangledPendingCount = 0;
	    currentEntangledLane = requestTransitionLane();
	    currentEntangledActionThenable = {
	      status: "pending",
	      value: void 0,
	      then: function (resolve) {
	        entangledListeners.push(resolve);
	      }
	    };
	  }
	  currentEntangledPendingCount++;
	  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
	  return thenable;
	}
	function pingEngtangledActionScope() {
	  if (
	    0 === --currentEntangledPendingCount &&
	    null !== currentEntangledListeners
	  ) {
	    null !== currentEntangledActionThenable &&
	      (currentEntangledActionThenable.status = "fulfilled");
	    var listeners = currentEntangledListeners;
	    currentEntangledListeners = null;
	    currentEntangledLane = 0;
	    currentEntangledActionThenable = null;
	    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
	  }
	}
	function chainThenableValue(thenable, result) {
	  var listeners = [],
	    thenableWithOverride = {
	      status: "pending",
	      value: null,
	      reason: null,
	      then: function (resolve) {
	        listeners.push(resolve);
	      }
	    };
	  thenable.then(
	    function () {
	      thenableWithOverride.status = "fulfilled";
	      thenableWithOverride.value = result;
	      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
	    },
	    function (error) {
	      thenableWithOverride.status = "rejected";
	      thenableWithOverride.reason = error;
	      for (error = 0; error < listeners.length; error++)
	        (0, listeners[error])(void 0);
	    }
	  );
	  return thenableWithOverride;
	}
	var prevOnStartTransitionFinish = ReactSharedInternals.S;
	ReactSharedInternals.S = function (transition, returnValue) {
	  globalMostRecentTransitionTime = now();
	  "object" === typeof returnValue &&
	    null !== returnValue &&
	    "function" === typeof returnValue.then &&
	    entangleAsyncAction(transition, returnValue);
	  null !== prevOnStartTransitionFinish &&
	    prevOnStartTransitionFinish(transition, returnValue);
	};
	var resumedCache = createCursor(null);
	function peekCacheFromPool() {
	  var cacheResumedFromPreviousRender = resumedCache.current;
	  return null !== cacheResumedFromPreviousRender
	    ? cacheResumedFromPreviousRender
	    : workInProgressRoot.pooledCache;
	}
	function pushTransition(offscreenWorkInProgress, prevCachePool) {
	  null === prevCachePool
	    ? push(resumedCache, resumedCache.current)
	    : push(resumedCache, prevCachePool.pool);
	}
	function getSuspendedCache() {
	  var cacheFromPool = peekCacheFromPool();
	  return null === cacheFromPool
	    ? null
	    : { parent: CacheContext._currentValue, pool: cacheFromPool };
	}
	var SuspenseException = Error(formatProdErrorMessage(460)),
	  SuspenseyCommitException = Error(formatProdErrorMessage(474)),
	  SuspenseActionException = Error(formatProdErrorMessage(542)),
	  noopSuspenseyCommitThenable = { then: function () {} };
	function isThenableResolved(thenable) {
	  thenable = thenable.status;
	  return "fulfilled" === thenable || "rejected" === thenable;
	}
	function trackUsedThenable(thenableState, thenable, index) {
	  index = thenableState[index];
	  void 0 === index
	    ? thenableState.push(thenable)
	    : index !== thenable && (thenable.then(noop$1, noop$1), (thenable = index));
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw (
	        ((thenableState = thenable.reason),
	        checkIfUseWrappedInAsyncCatch(thenableState),
	        thenableState)
	      );
	    default:
	      if ("string" === typeof thenable.status) thenable.then(noop$1, noop$1);
	      else {
	        thenableState = workInProgressRoot;
	        if (null !== thenableState && 100 < thenableState.shellSuspendCounter)
	          throw Error(formatProdErrorMessage(482));
	        thenableState = thenable;
	        thenableState.status = "pending";
	        thenableState.then(
	          function (fulfilledValue) {
	            if ("pending" === thenable.status) {
	              var fulfilledThenable = thenable;
	              fulfilledThenable.status = "fulfilled";
	              fulfilledThenable.value = fulfilledValue;
	            }
	          },
	          function (error) {
	            if ("pending" === thenable.status) {
	              var rejectedThenable = thenable;
	              rejectedThenable.status = "rejected";
	              rejectedThenable.reason = error;
	            }
	          }
	        );
	      }
	      switch (thenable.status) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw (
	            ((thenableState = thenable.reason),
	            checkIfUseWrappedInAsyncCatch(thenableState),
	            thenableState)
	          );
	      }
	      suspendedThenable = thenable;
	      throw SuspenseException;
	  }
	}
	function resolveLazy(lazyType) {
	  try {
	    var init = lazyType._init;
	    return init(lazyType._payload);
	  } catch (x) {
	    if (null !== x && "object" === typeof x && "function" === typeof x.then)
	      throw ((suspendedThenable = x), SuspenseException);
	    throw x;
	  }
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
	  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
	  var thenable = suspendedThenable;
	  suspendedThenable = null;
	  return thenable;
	}
	function checkIfUseWrappedInAsyncCatch(rejectedReason) {
	  if (
	    rejectedReason === SuspenseException ||
	    rejectedReason === SuspenseActionException
	  )
	    throw Error(formatProdErrorMessage(483));
	}
	var thenableState$1 = null,
	  thenableIndexCounter$1 = 0;
	function unwrapThenable(thenable) {
	  var index = thenableIndexCounter$1;
	  thenableIndexCounter$1 += 1;
	  null === thenableState$1 && (thenableState$1 = []);
	  return trackUsedThenable(thenableState$1, thenable, index);
	}
	function coerceRef(workInProgress, element) {
	  element = element.props.ref;
	  workInProgress.ref = void 0 !== element ? element : null;
	}
	function throwOnInvalidObjectTypeImpl(returnFiber, newChild) {
	  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
	    throw Error(formatProdErrorMessage(525));
	  returnFiber = Object.prototype.toString.call(newChild);
	  throw Error(
	    formatProdErrorMessage(
	      31,
	      "[object Object]" === returnFiber
	        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
	        : returnFiber
	    )
	  );
	}
	function createChildReconciler(shouldTrackSideEffects) {
	  function deleteChild(returnFiber, childToDelete) {
	    if (shouldTrackSideEffects) {
	      var deletions = returnFiber.deletions;
	      null === deletions
	        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
	        : deletions.push(childToDelete);
	    }
	  }
	  function deleteRemainingChildren(returnFiber, currentFirstChild) {
	    if (!shouldTrackSideEffects) return null;
	    for (; null !== currentFirstChild; )
	      deleteChild(returnFiber, currentFirstChild),
	        (currentFirstChild = currentFirstChild.sibling);
	    return null;
	  }
	  function mapRemainingChildren(currentFirstChild) {
	    for (var existingChildren = new Map(); null !== currentFirstChild; )
	      null !== currentFirstChild.key
	        ? existingChildren.set(currentFirstChild.key, currentFirstChild)
	        : existingChildren.set(currentFirstChild.index, currentFirstChild),
	        (currentFirstChild = currentFirstChild.sibling);
	    return existingChildren;
	  }
	  function useFiber(fiber, pendingProps) {
	    fiber = createWorkInProgress(fiber, pendingProps);
	    fiber.index = 0;
	    fiber.sibling = null;
	    return fiber;
	  }
	  function placeChild(newFiber, lastPlacedIndex, newIndex) {
	    newFiber.index = newIndex;
	    if (!shouldTrackSideEffects)
	      return (newFiber.flags |= 1048576), lastPlacedIndex;
	    newIndex = newFiber.alternate;
	    if (null !== newIndex)
	      return (
	        (newIndex = newIndex.index),
	        newIndex < lastPlacedIndex
	          ? ((newFiber.flags |= 67108866), lastPlacedIndex)
	          : newIndex
	      );
	    newFiber.flags |= 67108866;
	    return lastPlacedIndex;
	  }
	  function placeSingleChild(newFiber) {
	    shouldTrackSideEffects &&
	      null === newFiber.alternate &&
	      (newFiber.flags |= 67108866);
	    return newFiber;
	  }
	  function updateTextNode(returnFiber, current, textContent, lanes) {
	    if (null === current || 6 !== current.tag)
	      return (
	        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, textContent);
	    current.return = returnFiber;
	    return current;
	  }
	  function updateElement(returnFiber, current, element, lanes) {
	    var elementType = element.type;
	    if (elementType === REACT_FRAGMENT_TYPE)
	      return updateFragment(
	        returnFiber,
	        current,
	        element.props.children,
	        lanes,
	        element.key
	      );
	    if (
	      null !== current &&
	      (current.elementType === elementType ||
	        ("object" === typeof elementType &&
	          null !== elementType &&
	          elementType.$$typeof === REACT_LAZY_TYPE &&
	          resolveLazy(elementType) === current.type))
	    )
	      return (
	        (current = useFiber(current, element.props)),
	        coerceRef(current, element),
	        (current.return = returnFiber),
	        current
	      );
	    current = createFiberFromTypeAndProps(
	      element.type,
	      element.key,
	      element.props,
	      null,
	      returnFiber.mode,
	      lanes
	    );
	    coerceRef(current, element);
	    current.return = returnFiber;
	    return current;
	  }
	  function updatePortal(returnFiber, current, portal, lanes) {
	    if (
	      null === current ||
	      4 !== current.tag ||
	      current.stateNode.containerInfo !== portal.containerInfo ||
	      current.stateNode.implementation !== portal.implementation
	    )
	      return (
	        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, portal.children || []);
	    current.return = returnFiber;
	    return current;
	  }
	  function updateFragment(returnFiber, current, fragment, lanes, key) {
	    if (null === current || 7 !== current.tag)
	      return (
	        (current = createFiberFromFragment(
	          fragment,
	          returnFiber.mode,
	          lanes,
	          key
	        )),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, fragment);
	    current.return = returnFiber;
	    return current;
	  }
	  function createChild(returnFiber, newChild, lanes) {
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return (
	        (newChild = createFiberFromText(
	          "" + newChild,
	          returnFiber.mode,
	          lanes
	        )),
	        (newChild.return = returnFiber),
	        newChild
	      );
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return (
	            (lanes = createFiberFromTypeAndProps(
	              newChild.type,
	              newChild.key,
	              newChild.props,
	              null,
	              returnFiber.mode,
	              lanes
	            )),
	            coerceRef(lanes, newChild),
	            (lanes.return = returnFiber),
	            lanes
	          );
	        case REACT_PORTAL_TYPE:
	          return (
	            (newChild = createFiberFromPortal(
	              newChild,
	              returnFiber.mode,
	              lanes
	            )),
	            (newChild.return = returnFiber),
	            newChild
	          );
	        case REACT_LAZY_TYPE:
	          return (
	            (newChild = resolveLazy(newChild)),
	            createChild(returnFiber, newChild, lanes)
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return (
	          (newChild = createFiberFromFragment(
	            newChild,
	            returnFiber.mode,
	            lanes,
	            null
	          )),
	          (newChild.return = returnFiber),
	          newChild
	        );
	      if ("function" === typeof newChild.then)
	        return createChild(returnFiber, unwrapThenable(newChild), lanes);
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return createChild(
	          returnFiber,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
	    }
	    return null;
	  }
	  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
	    var key = null !== oldFiber ? oldFiber.key : null;
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return null !== key
	        ? null
	        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return newChild.key === key
	            ? updateElement(returnFiber, oldFiber, newChild, lanes)
	            : null;
	        case REACT_PORTAL_TYPE:
	          return newChild.key === key
	            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
	            : null;
	        case REACT_LAZY_TYPE:
	          return (
	            (newChild = resolveLazy(newChild)),
	            updateSlot(returnFiber, oldFiber, newChild, lanes)
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return null !== key
	          ? null
	          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
	      if ("function" === typeof newChild.then)
	        return updateSlot(
	          returnFiber,
	          oldFiber,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return updateSlot(
	          returnFiber,
	          oldFiber,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
	    }
	    return null;
	  }
	  function updateFromMap(
	    existingChildren,
	    returnFiber,
	    newIdx,
	    newChild,
	    lanes
	  ) {
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return (
	        (existingChildren = existingChildren.get(newIdx) || null),
	        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
	      );
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return (
	            (existingChildren =
	              existingChildren.get(
	                null === newChild.key ? newIdx : newChild.key
	              ) || null),
	            updateElement(returnFiber, existingChildren, newChild, lanes)
	          );
	        case REACT_PORTAL_TYPE:
	          return (
	            (existingChildren =
	              existingChildren.get(
	                null === newChild.key ? newIdx : newChild.key
	              ) || null),
	            updatePortal(returnFiber, existingChildren, newChild, lanes)
	          );
	        case REACT_LAZY_TYPE:
	          return (
	            (newChild = resolveLazy(newChild)),
	            updateFromMap(
	              existingChildren,
	              returnFiber,
	              newIdx,
	              newChild,
	              lanes
	            )
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return (
	          (existingChildren = existingChildren.get(newIdx) || null),
	          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
	        );
	      if ("function" === typeof newChild.then)
	        return updateFromMap(
	          existingChildren,
	          returnFiber,
	          newIdx,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return updateFromMap(
	          existingChildren,
	          returnFiber,
	          newIdx,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
	    }
	    return null;
	  }
	  function reconcileChildrenArray(
	    returnFiber,
	    currentFirstChild,
	    newChildren,
	    lanes
	  ) {
	    for (
	      var resultingFirstChild = null,
	        previousNewFiber = null,
	        oldFiber = currentFirstChild,
	        newIdx = (currentFirstChild = 0),
	        nextOldFiber = null;
	      null !== oldFiber && newIdx < newChildren.length;
	      newIdx++
	    ) {
	      oldFiber.index > newIdx
	        ? ((nextOldFiber = oldFiber), (oldFiber = null))
	        : (nextOldFiber = oldFiber.sibling);
	      var newFiber = updateSlot(
	        returnFiber,
	        oldFiber,
	        newChildren[newIdx],
	        lanes
	      );
	      if (null === newFiber) {
	        null === oldFiber && (oldFiber = nextOldFiber);
	        break;
	      }
	      shouldTrackSideEffects &&
	        oldFiber &&
	        null === newFiber.alternate &&
	        deleteChild(returnFiber, oldFiber);
	      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
	      null === previousNewFiber
	        ? (resultingFirstChild = newFiber)
	        : (previousNewFiber.sibling = newFiber);
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }
	    if (newIdx === newChildren.length)
	      return (
	        deleteRemainingChildren(returnFiber, oldFiber),
	        isHydrating && pushTreeFork(returnFiber, newIdx),
	        resultingFirstChild
	      );
	    if (null === oldFiber) {
	      for (; newIdx < newChildren.length; newIdx++)
	        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
	          null !== oldFiber &&
	            ((currentFirstChild = placeChild(
	              oldFiber,
	              currentFirstChild,
	              newIdx
	            )),
	            null === previousNewFiber
	              ? (resultingFirstChild = oldFiber)
	              : (previousNewFiber.sibling = oldFiber),
	            (previousNewFiber = oldFiber));
	      isHydrating && pushTreeFork(returnFiber, newIdx);
	      return resultingFirstChild;
	    }
	    for (
	      oldFiber = mapRemainingChildren(oldFiber);
	      newIdx < newChildren.length;
	      newIdx++
	    )
	      (nextOldFiber = updateFromMap(
	        oldFiber,
	        returnFiber,
	        newIdx,
	        newChildren[newIdx],
	        lanes
	      )),
	        null !== nextOldFiber &&
	          (shouldTrackSideEffects &&
	            null !== nextOldFiber.alternate &&
	            oldFiber.delete(
	              null === nextOldFiber.key ? newIdx : nextOldFiber.key
	            ),
	          (currentFirstChild = placeChild(
	            nextOldFiber,
	            currentFirstChild,
	            newIdx
	          )),
	          null === previousNewFiber
	            ? (resultingFirstChild = nextOldFiber)
	            : (previousNewFiber.sibling = nextOldFiber),
	          (previousNewFiber = nextOldFiber));
	    shouldTrackSideEffects &&
	      oldFiber.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    isHydrating && pushTreeFork(returnFiber, newIdx);
	    return resultingFirstChild;
	  }
	  function reconcileChildrenIterator(
	    returnFiber,
	    currentFirstChild,
	    newChildren,
	    lanes
	  ) {
	    if (null == newChildren) throw Error(formatProdErrorMessage(151));
	    for (
	      var resultingFirstChild = null,
	        previousNewFiber = null,
	        oldFiber = currentFirstChild,
	        newIdx = (currentFirstChild = 0),
	        nextOldFiber = null,
	        step = newChildren.next();
	      null !== oldFiber && !step.done;
	      newIdx++, step = newChildren.next()
	    ) {
	      oldFiber.index > newIdx
	        ? ((nextOldFiber = oldFiber), (oldFiber = null))
	        : (nextOldFiber = oldFiber.sibling);
	      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
	      if (null === newFiber) {
	        null === oldFiber && (oldFiber = nextOldFiber);
	        break;
	      }
	      shouldTrackSideEffects &&
	        oldFiber &&
	        null === newFiber.alternate &&
	        deleteChild(returnFiber, oldFiber);
	      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
	      null === previousNewFiber
	        ? (resultingFirstChild = newFiber)
	        : (previousNewFiber.sibling = newFiber);
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }
	    if (step.done)
	      return (
	        deleteRemainingChildren(returnFiber, oldFiber),
	        isHydrating && pushTreeFork(returnFiber, newIdx),
	        resultingFirstChild
	      );
	    if (null === oldFiber) {
	      for (; !step.done; newIdx++, step = newChildren.next())
	        (step = createChild(returnFiber, step.value, lanes)),
	          null !== step &&
	            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
	            null === previousNewFiber
	              ? (resultingFirstChild = step)
	              : (previousNewFiber.sibling = step),
	            (previousNewFiber = step));
	      isHydrating && pushTreeFork(returnFiber, newIdx);
	      return resultingFirstChild;
	    }
	    for (
	      oldFiber = mapRemainingChildren(oldFiber);
	      !step.done;
	      newIdx++, step = newChildren.next()
	    )
	      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
	        null !== step &&
	          (shouldTrackSideEffects &&
	            null !== step.alternate &&
	            oldFiber.delete(null === step.key ? newIdx : step.key),
	          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
	          null === previousNewFiber
	            ? (resultingFirstChild = step)
	            : (previousNewFiber.sibling = step),
	          (previousNewFiber = step));
	    shouldTrackSideEffects &&
	      oldFiber.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    isHydrating && pushTreeFork(returnFiber, newIdx);
	    return resultingFirstChild;
	  }
	  function reconcileChildFibersImpl(
	    returnFiber,
	    currentFirstChild,
	    newChild,
	    lanes
	  ) {
	    "object" === typeof newChild &&
	      null !== newChild &&
	      newChild.type === REACT_FRAGMENT_TYPE &&
	      null === newChild.key &&
	      (newChild = newChild.props.children);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          a: {
	            for (var key = newChild.key; null !== currentFirstChild; ) {
	              if (currentFirstChild.key === key) {
	                key = newChild.type;
	                if (key === REACT_FRAGMENT_TYPE) {
	                  if (7 === currentFirstChild.tag) {
	                    deleteRemainingChildren(
	                      returnFiber,
	                      currentFirstChild.sibling
	                    );
	                    lanes = useFiber(
	                      currentFirstChild,
	                      newChild.props.children
	                    );
	                    lanes.return = returnFiber;
	                    returnFiber = lanes;
	                    break a;
	                  }
	                } else if (
	                  currentFirstChild.elementType === key ||
	                  ("object" === typeof key &&
	                    null !== key &&
	                    key.$$typeof === REACT_LAZY_TYPE &&
	                    resolveLazy(key) === currentFirstChild.type)
	                ) {
	                  deleteRemainingChildren(
	                    returnFiber,
	                    currentFirstChild.sibling
	                  );
	                  lanes = useFiber(currentFirstChild, newChild.props);
	                  coerceRef(lanes, newChild);
	                  lanes.return = returnFiber;
	                  returnFiber = lanes;
	                  break a;
	                }
	                deleteRemainingChildren(returnFiber, currentFirstChild);
	                break;
	              } else deleteChild(returnFiber, currentFirstChild);
	              currentFirstChild = currentFirstChild.sibling;
	            }
	            newChild.type === REACT_FRAGMENT_TYPE
	              ? ((lanes = createFiberFromFragment(
	                  newChild.props.children,
	                  returnFiber.mode,
	                  lanes,
	                  newChild.key
	                )),
	                (lanes.return = returnFiber),
	                (returnFiber = lanes))
	              : ((lanes = createFiberFromTypeAndProps(
	                  newChild.type,
	                  newChild.key,
	                  newChild.props,
	                  null,
	                  returnFiber.mode,
	                  lanes
	                )),
	                coerceRef(lanes, newChild),
	                (lanes.return = returnFiber),
	                (returnFiber = lanes));
	          }
	          return placeSingleChild(returnFiber);
	        case REACT_PORTAL_TYPE:
	          a: {
	            for (key = newChild.key; null !== currentFirstChild; ) {
	              if (currentFirstChild.key === key)
	                if (
	                  4 === currentFirstChild.tag &&
	                  currentFirstChild.stateNode.containerInfo ===
	                    newChild.containerInfo &&
	                  currentFirstChild.stateNode.implementation ===
	                    newChild.implementation
	                ) {
	                  deleteRemainingChildren(
	                    returnFiber,
	                    currentFirstChild.sibling
	                  );
	                  lanes = useFiber(currentFirstChild, newChild.children || []);
	                  lanes.return = returnFiber;
	                  returnFiber = lanes;
	                  break a;
	                } else {
	                  deleteRemainingChildren(returnFiber, currentFirstChild);
	                  break;
	                }
	              else deleteChild(returnFiber, currentFirstChild);
	              currentFirstChild = currentFirstChild.sibling;
	            }
	            lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
	            lanes.return = returnFiber;
	            returnFiber = lanes;
	          }
	          return placeSingleChild(returnFiber);
	        case REACT_LAZY_TYPE:
	          return (
	            (newChild = resolveLazy(newChild)),
	            reconcileChildFibersImpl(
	              returnFiber,
	              currentFirstChild,
	              newChild,
	              lanes
	            )
	          );
	      }
	      if (isArrayImpl(newChild))
	        return reconcileChildrenArray(
	          returnFiber,
	          currentFirstChild,
	          newChild,
	          lanes
	        );
	      if (getIteratorFn(newChild)) {
	        key = getIteratorFn(newChild);
	        if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
	        newChild = key.call(newChild);
	        return reconcileChildrenIterator(
	          returnFiber,
	          currentFirstChild,
	          newChild,
	          lanes
	        );
	      }
	      if ("function" === typeof newChild.then)
	        return reconcileChildFibersImpl(
	          returnFiber,
	          currentFirstChild,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return reconcileChildFibersImpl(
	          returnFiber,
	          currentFirstChild,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectTypeImpl(returnFiber, newChild);
	    }
	    return ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	      ? ((newChild = "" + newChild),
	        null !== currentFirstChild && 6 === currentFirstChild.tag
	          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
	            (lanes = useFiber(currentFirstChild, newChild)),
	            (lanes.return = returnFiber),
	            (returnFiber = lanes))
	          : (deleteRemainingChildren(returnFiber, currentFirstChild),
	            (lanes = createFiberFromText(newChild, returnFiber.mode, lanes)),
	            (lanes.return = returnFiber),
	            (returnFiber = lanes)),
	        placeSingleChild(returnFiber))
	      : deleteRemainingChildren(returnFiber, currentFirstChild);
	  }
	  return function (returnFiber, currentFirstChild, newChild, lanes) {
	    try {
	      thenableIndexCounter$1 = 0;
	      var firstChildFiber = reconcileChildFibersImpl(
	        returnFiber,
	        currentFirstChild,
	        newChild,
	        lanes
	      );
	      thenableState$1 = null;
	      return firstChildFiber;
	    } catch (x) {
	      if (x === SuspenseException || x === SuspenseActionException) throw x;
	      var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
	      fiber.lanes = lanes;
	      fiber.return = returnFiber;
	      return fiber;
	    } finally {
	    }
	  };
	}
	var reconcileChildFibers = createChildReconciler(!0),
	  mountChildFibers = createChildReconciler(!1),
	  hasForceUpdate = !1;
	function initializeUpdateQueue(fiber) {
	  fiber.updateQueue = {
	    baseState: fiber.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
	    callbacks: null
	  };
	}
	function cloneUpdateQueue(current, workInProgress) {
	  current = current.updateQueue;
	  workInProgress.updateQueue === current &&
	    (workInProgress.updateQueue = {
	      baseState: current.baseState,
	      firstBaseUpdate: current.firstBaseUpdate,
	      lastBaseUpdate: current.lastBaseUpdate,
	      shared: current.shared,
	      callbacks: null
	    });
	}
	function createUpdate(lane) {
	  return { lane: lane, tag: 0, payload: null, callback: null, next: null };
	}
	function enqueueUpdate(fiber, update, lane) {
	  var updateQueue = fiber.updateQueue;
	  if (null === updateQueue) return null;
	  updateQueue = updateQueue.shared;
	  if (0 !== (executionContext & 2)) {
	    var pending = updateQueue.pending;
	    null === pending
	      ? (update.next = update)
	      : ((update.next = pending.next), (pending.next = update));
	    updateQueue.pending = update;
	    update = getRootForUpdatedFiber(fiber);
	    markUpdateLaneFromFiberToRoot(fiber, null, lane);
	    return update;
	  }
	  enqueueUpdate$1(fiber, updateQueue, update, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function entangleTransitions(root, fiber, lane) {
	  fiber = fiber.updateQueue;
	  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 4194048))) {
	    var queueLanes = fiber.lanes;
	    queueLanes &= root.pendingLanes;
	    lane |= queueLanes;
	    fiber.lanes = lane;
	    markRootEntangled(root, lane);
	  }
	}
	function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
	  var queue = workInProgress.updateQueue,
	    current = workInProgress.alternate;
	  if (
	    null !== current &&
	    ((current = current.updateQueue), queue === current)
	  ) {
	    var newFirst = null,
	      newLast = null;
	    queue = queue.firstBaseUpdate;
	    if (null !== queue) {
	      do {
	        var clone = {
	          lane: queue.lane,
	          tag: queue.tag,
	          payload: queue.payload,
	          callback: null,
	          next: null
	        };
	        null === newLast
	          ? (newFirst = newLast = clone)
	          : (newLast = newLast.next = clone);
	        queue = queue.next;
	      } while (null !== queue);
	      null === newLast
	        ? (newFirst = newLast = capturedUpdate)
	        : (newLast = newLast.next = capturedUpdate);
	    } else newFirst = newLast = capturedUpdate;
	    queue = {
	      baseState: current.baseState,
	      firstBaseUpdate: newFirst,
	      lastBaseUpdate: newLast,
	      shared: current.shared,
	      callbacks: current.callbacks
	    };
	    workInProgress.updateQueue = queue;
	    return;
	  }
	  workInProgress = queue.lastBaseUpdate;
	  null === workInProgress
	    ? (queue.firstBaseUpdate = capturedUpdate)
	    : (workInProgress.next = capturedUpdate);
	  queue.lastBaseUpdate = capturedUpdate;
	}
	var didReadFromEntangledAsyncAction = !1;
	function suspendIfUpdateReadFromEntangledAsyncAction() {
	  if (didReadFromEntangledAsyncAction) {
	    var entangledActionThenable = currentEntangledActionThenable;
	    if (null !== entangledActionThenable) throw entangledActionThenable;
	  }
	}
	function processUpdateQueue(
	  workInProgress$jscomp$0,
	  props,
	  instance$jscomp$0,
	  renderLanes
	) {
	  didReadFromEntangledAsyncAction = !1;
	  var queue = workInProgress$jscomp$0.updateQueue;
	  hasForceUpdate = !1;
	  var firstBaseUpdate = queue.firstBaseUpdate,
	    lastBaseUpdate = queue.lastBaseUpdate,
	    pendingQueue = queue.shared.pending;
	  if (null !== pendingQueue) {
	    queue.shared.pending = null;
	    var lastPendingUpdate = pendingQueue,
	      firstPendingUpdate = lastPendingUpdate.next;
	    lastPendingUpdate.next = null;
	    null === lastBaseUpdate
	      ? (firstBaseUpdate = firstPendingUpdate)
	      : (lastBaseUpdate.next = firstPendingUpdate);
	    lastBaseUpdate = lastPendingUpdate;
	    var current = workInProgress$jscomp$0.alternate;
	    null !== current &&
	      ((current = current.updateQueue),
	      (pendingQueue = current.lastBaseUpdate),
	      pendingQueue !== lastBaseUpdate &&
	        (null === pendingQueue
	          ? (current.firstBaseUpdate = firstPendingUpdate)
	          : (pendingQueue.next = firstPendingUpdate),
	        (current.lastBaseUpdate = lastPendingUpdate)));
	  }
	  if (null !== firstBaseUpdate) {
	    var newState = queue.baseState;
	    lastBaseUpdate = 0;
	    current = firstPendingUpdate = lastPendingUpdate = null;
	    pendingQueue = firstBaseUpdate;
	    do {
	      var updateLane = pendingQueue.lane & -536870913,
	        isHiddenUpdate = updateLane !== pendingQueue.lane;
	      if (
	        isHiddenUpdate
	          ? (workInProgressRootRenderLanes & updateLane) === updateLane
	          : (renderLanes & updateLane) === updateLane
	      ) {
	        0 !== updateLane &&
	          updateLane === currentEntangledLane &&
	          (didReadFromEntangledAsyncAction = !0);
	        null !== current &&
	          (current = current.next =
	            {
	              lane: 0,
	              tag: pendingQueue.tag,
	              payload: pendingQueue.payload,
	              callback: null,
	              next: null
	            });
	        a: {
	          var workInProgress = workInProgress$jscomp$0,
	            update = pendingQueue;
	          updateLane = props;
	          var instance = instance$jscomp$0;
	          switch (update.tag) {
	            case 1:
	              workInProgress = update.payload;
	              if ("function" === typeof workInProgress) {
	                newState = workInProgress.call(instance, newState, updateLane);
	                break a;
	              }
	              newState = workInProgress;
	              break a;
	            case 3:
	              workInProgress.flags = (workInProgress.flags & -65537) | 128;
	            case 0:
	              workInProgress = update.payload;
	              updateLane =
	                "function" === typeof workInProgress
	                  ? workInProgress.call(instance, newState, updateLane)
	                  : workInProgress;
	              if (null === updateLane || void 0 === updateLane) break a;
	              newState = assign({}, newState, updateLane);
	              break a;
	            case 2:
	              hasForceUpdate = !0;
	          }
	        }
	        updateLane = pendingQueue.callback;
	        null !== updateLane &&
	          ((workInProgress$jscomp$0.flags |= 64),
	          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
	          (isHiddenUpdate = queue.callbacks),
	          null === isHiddenUpdate
	            ? (queue.callbacks = [updateLane])
	            : isHiddenUpdate.push(updateLane));
	      } else
	        (isHiddenUpdate = {
	          lane: updateLane,
	          tag: pendingQueue.tag,
	          payload: pendingQueue.payload,
	          callback: pendingQueue.callback,
	          next: null
	        }),
	          null === current
	            ? ((firstPendingUpdate = current = isHiddenUpdate),
	              (lastPendingUpdate = newState))
	            : (current = current.next = isHiddenUpdate),
	          (lastBaseUpdate |= updateLane);
	      pendingQueue = pendingQueue.next;
	      if (null === pendingQueue)
	        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
	          break;
	        else
	          (isHiddenUpdate = pendingQueue),
	            (pendingQueue = isHiddenUpdate.next),
	            (isHiddenUpdate.next = null),
	            (queue.lastBaseUpdate = isHiddenUpdate),
	            (queue.shared.pending = null);
	    } while (1);
	    null === current && (lastPendingUpdate = newState);
	    queue.baseState = lastPendingUpdate;
	    queue.firstBaseUpdate = firstPendingUpdate;
	    queue.lastBaseUpdate = current;
	    null === firstBaseUpdate && (queue.shared.lanes = 0);
	    workInProgressRootSkippedLanes |= lastBaseUpdate;
	    workInProgress$jscomp$0.lanes = lastBaseUpdate;
	    workInProgress$jscomp$0.memoizedState = newState;
	  }
	}
	function callCallback(callback, context) {
	  if ("function" !== typeof callback)
	    throw Error(formatProdErrorMessage(191, callback));
	  callback.call(context);
	}
	function commitCallbacks(updateQueue, context) {
	  var callbacks = updateQueue.callbacks;
	  if (null !== callbacks)
	    for (
	      updateQueue.callbacks = null, updateQueue = 0;
	      updateQueue < callbacks.length;
	      updateQueue++
	    )
	      callCallback(callbacks[updateQueue], context);
	}
	var currentTreeHiddenStackCursor = createCursor(null),
	  prevEntangledRenderLanesCursor = createCursor(0);
	function pushHiddenContext(fiber, context) {
	  fiber = entangledRenderLanes;
	  push(prevEntangledRenderLanesCursor, fiber);
	  push(currentTreeHiddenStackCursor, context);
	  entangledRenderLanes = fiber | context.baseLanes;
	}
	function reuseHiddenContextOnStack() {
	  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
	  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
	}
	function popHiddenContext() {
	  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
	  pop(currentTreeHiddenStackCursor);
	  pop(prevEntangledRenderLanesCursor);
	}
	var suspenseHandlerStackCursor = createCursor(null),
	  shellBoundary = null;
	function pushPrimaryTreeSuspenseHandler(handler) {
	  var current = handler.alternate;
	  push(suspenseStackCursor, suspenseStackCursor.current & 1);
	  push(suspenseHandlerStackCursor, handler);
	  null === shellBoundary &&
	    (null === current || null !== currentTreeHiddenStackCursor.current
	      ? (shellBoundary = handler)
	      : null !== current.memoizedState && (shellBoundary = handler));
	}
	function pushDehydratedActivitySuspenseHandler(fiber) {
	  push(suspenseStackCursor, suspenseStackCursor.current);
	  push(suspenseHandlerStackCursor, fiber);
	  null === shellBoundary && (shellBoundary = fiber);
	}
	function pushOffscreenSuspenseHandler(fiber) {
	  22 === fiber.tag
	    ? (push(suspenseStackCursor, suspenseStackCursor.current),
	      push(suspenseHandlerStackCursor, fiber),
	      null === shellBoundary && (shellBoundary = fiber))
	    : reuseSuspenseHandlerOnStack(fiber);
	}
	function reuseSuspenseHandlerOnStack() {
	  push(suspenseStackCursor, suspenseStackCursor.current);
	  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
	}
	function popSuspenseHandler(fiber) {
	  pop(suspenseHandlerStackCursor);
	  shellBoundary === fiber && (shellBoundary = null);
	  pop(suspenseStackCursor);
	}
	var suspenseStackCursor = createCursor(0);
	function findFirstSuspended(row) {
	  for (var node = row; null !== node; ) {
	    if (13 === node.tag) {
	      var state = node.memoizedState;
	      if (
	        null !== state &&
	        ((state = state.dehydrated),
	        null === state ||
	          isSuspenseInstancePending(state) ||
	          isSuspenseInstanceFallback(state))
	      )
	        return node;
	    } else if (
	      19 === node.tag &&
	      ("forwards" === node.memoizedProps.revealOrder ||
	        "backwards" === node.memoizedProps.revealOrder ||
	        "unstable_legacy-backwards" === node.memoizedProps.revealOrder ||
	        "together" === node.memoizedProps.revealOrder)
	    ) {
	      if (0 !== (node.flags & 128)) return node;
	    } else if (null !== node.child) {
	      node.child.return = node;
	      node = node.child;
	      continue;
	    }
	    if (node === row) break;
	    for (; null === node.sibling; ) {
	      if (null === node.return || node.return === row) return null;
	      node = node.return;
	    }
	    node.sibling.return = node.return;
	    node = node.sibling;
	  }
	  return null;
	}
	var renderLanes = 0,
	  currentlyRenderingFiber = null,
	  currentHook = null,
	  workInProgressHook = null,
	  didScheduleRenderPhaseUpdate = !1,
	  didScheduleRenderPhaseUpdateDuringThisPass = !1,
	  shouldDoubleInvokeUserFnsInHooksDEV = !1,
	  localIdCounter = 0,
	  thenableIndexCounter = 0,
	  thenableState = null,
	  globalClientIdCounter = 0;
	function throwInvalidHookError() {
	  throw Error(formatProdErrorMessage(321));
	}
	function areHookInputsEqual(nextDeps, prevDeps) {
	  if (null === prevDeps) return !1;
	  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
	    if (!objectIs(nextDeps[i], prevDeps[i])) return !1;
	  return !0;
	}
	function renderWithHooks(
	  current,
	  workInProgress,
	  Component,
	  props,
	  secondArg,
	  nextRenderLanes
	) {
	  renderLanes = nextRenderLanes;
	  currentlyRenderingFiber = workInProgress;
	  workInProgress.memoizedState = null;
	  workInProgress.updateQueue = null;
	  workInProgress.lanes = 0;
	  ReactSharedInternals.H =
	    null === current || null === current.memoizedState
	      ? HooksDispatcherOnMount
	      : HooksDispatcherOnUpdate;
	  shouldDoubleInvokeUserFnsInHooksDEV = !1;
	  nextRenderLanes = Component(props, secondArg);
	  shouldDoubleInvokeUserFnsInHooksDEV = !1;
	  didScheduleRenderPhaseUpdateDuringThisPass &&
	    (nextRenderLanes = renderWithHooksAgain(
	      workInProgress,
	      Component,
	      props,
	      secondArg
	    ));
	  finishRenderingHooks(current);
	  return nextRenderLanes;
	}
	function finishRenderingHooks(current) {
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
	  renderLanes = 0;
	  workInProgressHook = currentHook = currentlyRenderingFiber = null;
	  didScheduleRenderPhaseUpdate = !1;
	  thenableIndexCounter = 0;
	  thenableState = null;
	  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
	  null === current ||
	    didReceiveUpdate ||
	    ((current = current.dependencies),
	    null !== current &&
	      checkIfContextChanged(current) &&
	      (didReceiveUpdate = !0));
	}
	function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
	  currentlyRenderingFiber = workInProgress;
	  var numberOfReRenders = 0;
	  do {
	    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState = null);
	    thenableIndexCounter = 0;
	    didScheduleRenderPhaseUpdateDuringThisPass = !1;
	    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
	    numberOfReRenders += 1;
	    workInProgressHook = currentHook = null;
	    if (null != workInProgress.updateQueue) {
	      var children = workInProgress.updateQueue;
	      children.lastEffect = null;
	      children.events = null;
	      children.stores = null;
	      null != children.memoCache && (children.memoCache.index = 0);
	    }
	    ReactSharedInternals.H = HooksDispatcherOnRerender;
	    children = Component(props, secondArg);
	  } while (didScheduleRenderPhaseUpdateDuringThisPass);
	  return children;
	}
	function TransitionAwareHostComponent() {
	  var dispatcher = ReactSharedInternals.H,
	    maybeThenable = dispatcher.useState()[0];
	  maybeThenable =
	    "function" === typeof maybeThenable.then
	      ? useThenable(maybeThenable)
	      : maybeThenable;
	  dispatcher = dispatcher.useState()[0];
	  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher &&
	    (currentlyRenderingFiber.flags |= 1024);
	  return maybeThenable;
	}
	function checkDidRenderIdHook() {
	  var didRenderIdHook = 0 !== localIdCounter;
	  localIdCounter = 0;
	  return didRenderIdHook;
	}
	function bailoutHooks(current, workInProgress, lanes) {
	  workInProgress.updateQueue = current.updateQueue;
	  workInProgress.flags &= -2053;
	  current.lanes &= ~lanes;
	}
	function resetHooksOnUnwind(workInProgress) {
	  if (didScheduleRenderPhaseUpdate) {
	    for (
	      workInProgress = workInProgress.memoizedState;
	      null !== workInProgress;

	    ) {
	      var queue = workInProgress.queue;
	      null !== queue && (queue.pending = null);
	      workInProgress = workInProgress.next;
	    }
	    didScheduleRenderPhaseUpdate = !1;
	  }
	  renderLanes = 0;
	  workInProgressHook = currentHook = currentlyRenderingFiber = null;
	  didScheduleRenderPhaseUpdateDuringThisPass = !1;
	  thenableIndexCounter = localIdCounter = 0;
	  thenableState = null;
	}
	function mountWorkInProgressHook() {
	  var hook = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === workInProgressHook
	    ? (currentlyRenderingFiber.memoizedState = workInProgressHook = hook)
	    : (workInProgressHook = workInProgressHook.next = hook);
	  return workInProgressHook;
	}
	function updateWorkInProgressHook() {
	  if (null === currentHook) {
	    var nextCurrentHook = currentlyRenderingFiber.alternate;
	    nextCurrentHook =
	      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
	  } else nextCurrentHook = currentHook.next;
	  var nextWorkInProgressHook =
	    null === workInProgressHook
	      ? currentlyRenderingFiber.memoizedState
	      : workInProgressHook.next;
	  if (null !== nextWorkInProgressHook)
	    (workInProgressHook = nextWorkInProgressHook),
	      (currentHook = nextCurrentHook);
	  else {
	    if (null === nextCurrentHook) {
	      if (null === currentlyRenderingFiber.alternate)
	        throw Error(formatProdErrorMessage(467));
	      throw Error(formatProdErrorMessage(310));
	    }
	    currentHook = nextCurrentHook;
	    nextCurrentHook = {
	      memoizedState: currentHook.memoizedState,
	      baseState: currentHook.baseState,
	      baseQueue: currentHook.baseQueue,
	      queue: currentHook.queue,
	      next: null
	    };
	    null === workInProgressHook
	      ? (currentlyRenderingFiber.memoizedState = workInProgressHook =
	          nextCurrentHook)
	      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
	  }
	  return workInProgressHook;
	}
	function createFunctionComponentUpdateQueue() {
	  return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function useThenable(thenable) {
	  var index = thenableIndexCounter;
	  thenableIndexCounter += 1;
	  null === thenableState && (thenableState = []);
	  thenable = trackUsedThenable(thenableState, thenable, index);
	  index = currentlyRenderingFiber;
	  null ===
	    (null === workInProgressHook
	      ? index.memoizedState
	      : workInProgressHook.next) &&
	    ((index = index.alternate),
	    (ReactSharedInternals.H =
	      null === index || null === index.memoizedState
	        ? HooksDispatcherOnMount
	        : HooksDispatcherOnUpdate));
	  return thenable;
	}
	function use(usable) {
	  if (null !== usable && "object" === typeof usable) {
	    if ("function" === typeof usable.then) return useThenable(usable);
	    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
	  }
	  throw Error(formatProdErrorMessage(438, String(usable)));
	}
	function useMemoCache(size) {
	  var memoCache = null,
	    updateQueue = currentlyRenderingFiber.updateQueue;
	  null !== updateQueue && (memoCache = updateQueue.memoCache);
	  if (null == memoCache) {
	    var current = currentlyRenderingFiber.alternate;
	    null !== current &&
	      ((current = current.updateQueue),
	      null !== current &&
	        ((current = current.memoCache),
	        null != current &&
	          (memoCache = {
	            data: current.data.map(function (array) {
	              return array.slice();
	            }),
	            index: 0
	          })));
	  }
	  null == memoCache && (memoCache = { data: [], index: 0 });
	  null === updateQueue &&
	    ((updateQueue = createFunctionComponentUpdateQueue()),
	    (currentlyRenderingFiber.updateQueue = updateQueue));
	  updateQueue.memoCache = memoCache;
	  updateQueue = memoCache.data[memoCache.index];
	  if (void 0 === updateQueue)
	    for (
	      updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0;
	      current < size;
	      current++
	    )
	      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
	  memoCache.index++;
	  return updateQueue;
	}
	function basicStateReducer(state, action) {
	  return "function" === typeof action ? action(state) : action;
	}
	function updateReducer(reducer) {
	  var hook = updateWorkInProgressHook();
	  return updateReducerImpl(hook, currentHook, reducer);
	}
	function updateReducerImpl(hook, current, reducer) {
	  var queue = hook.queue;
	  if (null === queue) throw Error(formatProdErrorMessage(311));
	  queue.lastRenderedReducer = reducer;
	  var baseQueue = hook.baseQueue,
	    pendingQueue = queue.pending;
	  if (null !== pendingQueue) {
	    if (null !== baseQueue) {
	      var baseFirst = baseQueue.next;
	      baseQueue.next = pendingQueue.next;
	      pendingQueue.next = baseFirst;
	    }
	    current.baseQueue = baseQueue = pendingQueue;
	    queue.pending = null;
	  }
	  pendingQueue = hook.baseState;
	  if (null === baseQueue) hook.memoizedState = pendingQueue;
	  else {
	    current = baseQueue.next;
	    var newBaseQueueFirst = (baseFirst = null),
	      newBaseQueueLast = null,
	      update = current,
	      didReadFromEntangledAsyncAction$60 = !1;
	    do {
	      var updateLane = update.lane & -536870913;
	      if (
	        updateLane !== update.lane
	          ? (workInProgressRootRenderLanes & updateLane) === updateLane
	          : (renderLanes & updateLane) === updateLane
	      ) {
	        var revertLane = update.revertLane;
	        if (0 === revertLane)
	          null !== newBaseQueueLast &&
	            (newBaseQueueLast = newBaseQueueLast.next =
	              {
	                lane: 0,
	                revertLane: 0,
	                gesture: null,
	                action: update.action,
	                hasEagerState: update.hasEagerState,
	                eagerState: update.eagerState,
	                next: null
	              }),
	            updateLane === currentEntangledLane &&
	              (didReadFromEntangledAsyncAction$60 = !0);
	        else if ((renderLanes & revertLane) === revertLane) {
	          update = update.next;
	          revertLane === currentEntangledLane &&
	            (didReadFromEntangledAsyncAction$60 = !0);
	          continue;
	        } else
	          (updateLane = {
	            lane: 0,
	            revertLane: update.revertLane,
	            gesture: null,
	            action: update.action,
	            hasEagerState: update.hasEagerState,
	            eagerState: update.eagerState,
	            next: null
	          }),
	            null === newBaseQueueLast
	              ? ((newBaseQueueFirst = newBaseQueueLast = updateLane),
	                (baseFirst = pendingQueue))
	              : (newBaseQueueLast = newBaseQueueLast.next = updateLane),
	            (currentlyRenderingFiber.lanes |= revertLane),
	            (workInProgressRootSkippedLanes |= revertLane);
	        updateLane = update.action;
	        shouldDoubleInvokeUserFnsInHooksDEV &&
	          reducer(pendingQueue, updateLane);
	        pendingQueue = update.hasEagerState
	          ? update.eagerState
	          : reducer(pendingQueue, updateLane);
	      } else
	        (revertLane = {
	          lane: updateLane,
	          revertLane: update.revertLane,
	          gesture: update.gesture,
	          action: update.action,
	          hasEagerState: update.hasEagerState,
	          eagerState: update.eagerState,
	          next: null
	        }),
	          null === newBaseQueueLast
	            ? ((newBaseQueueFirst = newBaseQueueLast = revertLane),
	              (baseFirst = pendingQueue))
	            : (newBaseQueueLast = newBaseQueueLast.next = revertLane),
	          (currentlyRenderingFiber.lanes |= updateLane),
	          (workInProgressRootSkippedLanes |= updateLane);
	      update = update.next;
	    } while (null !== update && update !== current);
	    null === newBaseQueueLast
	      ? (baseFirst = pendingQueue)
	      : (newBaseQueueLast.next = newBaseQueueFirst);
	    if (
	      !objectIs(pendingQueue, hook.memoizedState) &&
	      ((didReceiveUpdate = !0),
	      didReadFromEntangledAsyncAction$60 &&
	        ((reducer = currentEntangledActionThenable), null !== reducer))
	    )
	      throw reducer;
	    hook.memoizedState = pendingQueue;
	    hook.baseState = baseFirst;
	    hook.baseQueue = newBaseQueueLast;
	    queue.lastRenderedState = pendingQueue;
	  }
	  null === baseQueue && (queue.lanes = 0);
	  return [hook.memoizedState, queue.dispatch];
	}
	function rerenderReducer(reducer) {
	  var hook = updateWorkInProgressHook(),
	    queue = hook.queue;
	  if (null === queue) throw Error(formatProdErrorMessage(311));
	  queue.lastRenderedReducer = reducer;
	  var dispatch = queue.dispatch,
	    lastRenderPhaseUpdate = queue.pending,
	    newState = hook.memoizedState;
	  if (null !== lastRenderPhaseUpdate) {
	    queue.pending = null;
	    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
	    do (newState = reducer(newState, update.action)), (update = update.next);
	    while (update !== lastRenderPhaseUpdate);
	    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = !0);
	    hook.memoizedState = newState;
	    null === hook.baseQueue && (hook.baseState = newState);
	    queue.lastRenderedState = newState;
	  }
	  return [newState, dispatch];
	}
	function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	  var fiber = currentlyRenderingFiber,
	    hook = updateWorkInProgressHook(),
	    isHydrating$jscomp$0 = isHydrating;
	  if (isHydrating$jscomp$0) {
	    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
	    getServerSnapshot = getServerSnapshot();
	  } else getServerSnapshot = getSnapshot();
	  var snapshotChanged = !objectIs(
	    (currentHook || hook).memoizedState,
	    getServerSnapshot
	  );
	  snapshotChanged &&
	    ((hook.memoizedState = getServerSnapshot), (didReceiveUpdate = !0));
	  hook = hook.queue;
	  updateEffect(subscribeToStore.bind(null, fiber, hook, subscribe), [
	    subscribe
	  ]);
	  if (
	    hook.getSnapshot !== getSnapshot ||
	    snapshotChanged ||
	    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
	  ) {
	    fiber.flags |= 2048;
	    pushSimpleEffect(
	      9,
	      { destroy: void 0 },
	      updateStoreInstance.bind(
	        null,
	        fiber,
	        hook,
	        getServerSnapshot,
	        getSnapshot
	      ),
	      null
	    );
	    if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
	    isHydrating$jscomp$0 ||
	      0 !== (renderLanes & 127) ||
	      pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
	  }
	  return getServerSnapshot;
	}
	function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
	  fiber.flags |= 16384;
	  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
	  getSnapshot = currentlyRenderingFiber.updateQueue;
	  null === getSnapshot
	    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
	      (currentlyRenderingFiber.updateQueue = getSnapshot),
	      (getSnapshot.stores = [fiber]))
	    : ((renderedSnapshot = getSnapshot.stores),
	      null === renderedSnapshot
	        ? (getSnapshot.stores = [fiber])
	        : renderedSnapshot.push(fiber));
	}
	function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
	  inst.value = nextSnapshot;
	  inst.getSnapshot = getSnapshot;
	  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	}
	function subscribeToStore(fiber, inst, subscribe) {
	  return subscribe(function () {
	    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	  });
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return !0;
	  }
	}
	function forceStoreRerender(fiber) {
	  var root = enqueueConcurrentRenderForLane(fiber, 2);
	  null !== root && scheduleUpdateOnFiber(root, fiber, 2);
	}
	function mountStateImpl(initialState) {
	  var hook = mountWorkInProgressHook();
	  if ("function" === typeof initialState) {
	    var initialStateInitializer = initialState;
	    initialState = initialStateInitializer();
	    if (shouldDoubleInvokeUserFnsInHooksDEV) {
	      setIsStrictModeForDevtools(!0);
	      try {
	        initialStateInitializer();
	      } finally {
	        setIsStrictModeForDevtools(!1);
	      }
	    }
	  }
	  hook.memoizedState = hook.baseState = initialState;
	  hook.queue = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: basicStateReducer,
	    lastRenderedState: initialState
	  };
	  return hook;
	}
	function updateOptimisticImpl(hook, current, passthrough, reducer) {
	  hook.baseState = passthrough;
	  return updateReducerImpl(
	    hook,
	    currentHook,
	    "function" === typeof reducer ? reducer : basicStateReducer
	  );
	}
	function dispatchActionState(
	  fiber,
	  actionQueue,
	  setPendingState,
	  setState,
	  payload
	) {
	  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
	  fiber = actionQueue.action;
	  if (null !== fiber) {
	    var actionNode = {
	      payload: payload,
	      action: fiber,
	      next: null,
	      isTransition: !0,
	      status: "pending",
	      value: null,
	      reason: null,
	      listeners: [],
	      then: function (listener) {
	        actionNode.listeners.push(listener);
	      }
	    };
	    null !== ReactSharedInternals.T
	      ? setPendingState(!0)
	      : (actionNode.isTransition = !1);
	    setState(actionNode);
	    setPendingState = actionQueue.pending;
	    null === setPendingState
	      ? ((actionNode.next = actionQueue.pending = actionNode),
	        runActionStateAction(actionQueue, actionNode))
	      : ((actionNode.next = setPendingState.next),
	        (actionQueue.pending = setPendingState.next = actionNode));
	  }
	}
	function runActionStateAction(actionQueue, node) {
	  var action = node.action,
	    payload = node.payload,
	    prevState = actionQueue.state;
	  if (node.isTransition) {
	    var prevTransition = ReactSharedInternals.T,
	      currentTransition = {};
	    ReactSharedInternals.T = currentTransition;
	    try {
	      var returnValue = action(prevState, payload),
	        onStartTransitionFinish = ReactSharedInternals.S;
	      null !== onStartTransitionFinish &&
	        onStartTransitionFinish(currentTransition, returnValue);
	      handleActionReturnValue(actionQueue, node, returnValue);
	    } catch (error) {
	      onActionError(actionQueue, node, error);
	    } finally {
	      null !== prevTransition &&
	        null !== currentTransition.types &&
	        (prevTransition.types = currentTransition.types),
	        (ReactSharedInternals.T = prevTransition);
	    }
	  } else
	    try {
	      (prevTransition = action(prevState, payload)),
	        handleActionReturnValue(actionQueue, node, prevTransition);
	    } catch (error$66) {
	      onActionError(actionQueue, node, error$66);
	    }
	}
	function handleActionReturnValue(actionQueue, node, returnValue) {
	  null !== returnValue &&
	  "object" === typeof returnValue &&
	  "function" === typeof returnValue.then
	    ? returnValue.then(
	        function (nextState) {
	          onActionSuccess(actionQueue, node, nextState);
	        },
	        function (error) {
	          return onActionError(actionQueue, node, error);
	        }
	      )
	    : onActionSuccess(actionQueue, node, returnValue);
	}
	function onActionSuccess(actionQueue, actionNode, nextState) {
	  actionNode.status = "fulfilled";
	  actionNode.value = nextState;
	  notifyActionListeners(actionNode);
	  actionQueue.state = nextState;
	  actionNode = actionQueue.pending;
	  null !== actionNode &&
	    ((nextState = actionNode.next),
	    nextState === actionNode
	      ? (actionQueue.pending = null)
	      : ((nextState = nextState.next),
	        (actionNode.next = nextState),
	        runActionStateAction(actionQueue, nextState)));
	}
	function onActionError(actionQueue, actionNode, error) {
	  var last = actionQueue.pending;
	  actionQueue.pending = null;
	  if (null !== last) {
	    last = last.next;
	    do
	      (actionNode.status = "rejected"),
	        (actionNode.reason = error),
	        notifyActionListeners(actionNode),
	        (actionNode = actionNode.next);
	    while (actionNode !== last);
	  }
	  actionQueue.action = null;
	}
	function notifyActionListeners(actionNode) {
	  actionNode = actionNode.listeners;
	  for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
	}
	function actionStateReducer(oldState, newState) {
	  return newState;
	}
	function mountActionState(action, initialStateProp) {
	  if (isHydrating) {
	    var ssrFormState = workInProgressRoot.formState;
	    if (null !== ssrFormState) {
	      a: {
	        var JSCompiler_inline_result = currentlyRenderingFiber;
	        if (isHydrating) {
	          if (nextHydratableInstance) {
	            b: {
	              var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
	              for (
	                var inRootOrSingleton = rootOrSingletonContext;
	                8 !== JSCompiler_inline_result$jscomp$0.nodeType;

	              ) {
	                if (!inRootOrSingleton) {
	                  JSCompiler_inline_result$jscomp$0 = null;
	                  break b;
	                }
	                JSCompiler_inline_result$jscomp$0 = getNextHydratable(
	                  JSCompiler_inline_result$jscomp$0.nextSibling
	                );
	                if (null === JSCompiler_inline_result$jscomp$0) {
	                  JSCompiler_inline_result$jscomp$0 = null;
	                  break b;
	                }
	              }
	              inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
	              JSCompiler_inline_result$jscomp$0 =
	                "F!" === inRootOrSingleton || "F" === inRootOrSingleton
	                  ? JSCompiler_inline_result$jscomp$0
	                  : null;
	            }
	            if (JSCompiler_inline_result$jscomp$0) {
	              nextHydratableInstance = getNextHydratable(
	                JSCompiler_inline_result$jscomp$0.nextSibling
	              );
	              JSCompiler_inline_result =
	                "F!" === JSCompiler_inline_result$jscomp$0.data;
	              break a;
	            }
	          }
	          throwOnHydrationMismatch(JSCompiler_inline_result);
	        }
	        JSCompiler_inline_result = !1;
	      }
	      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
	    }
	  }
	  ssrFormState = mountWorkInProgressHook();
	  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
	  JSCompiler_inline_result = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: actionStateReducer,
	    lastRenderedState: initialStateProp
	  };
	  ssrFormState.queue = JSCompiler_inline_result;
	  ssrFormState = dispatchSetState.bind(
	    null,
	    currentlyRenderingFiber,
	    JSCompiler_inline_result
	  );
	  JSCompiler_inline_result.dispatch = ssrFormState;
	  JSCompiler_inline_result = mountStateImpl(!1);
	  inRootOrSingleton = dispatchOptimisticSetState.bind(
	    null,
	    currentlyRenderingFiber,
	    !1,
	    JSCompiler_inline_result.queue
	  );
	  JSCompiler_inline_result = mountWorkInProgressHook();
	  JSCompiler_inline_result$jscomp$0 = {
	    state: initialStateProp,
	    dispatch: null,
	    action: action,
	    pending: null
	  };
	  JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
	  ssrFormState = dispatchActionState.bind(
	    null,
	    currentlyRenderingFiber,
	    JSCompiler_inline_result$jscomp$0,
	    inRootOrSingleton,
	    ssrFormState
	  );
	  JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
	  JSCompiler_inline_result.memoizedState = action;
	  return [initialStateProp, ssrFormState, !1];
	}
	function updateActionState(action) {
	  var stateHook = updateWorkInProgressHook();
	  return updateActionStateImpl(stateHook, currentHook, action);
	}
	function updateActionStateImpl(stateHook, currentStateHook, action) {
	  currentStateHook = updateReducerImpl(
	    stateHook,
	    currentStateHook,
	    actionStateReducer
	  )[0];
	  stateHook = updateReducer(basicStateReducer)[0];
	  if (
	    "object" === typeof currentStateHook &&
	    null !== currentStateHook &&
	    "function" === typeof currentStateHook.then
	  )
	    try {
	      var state = useThenable(currentStateHook);
	    } catch (x) {
	      if (x === SuspenseException) throw SuspenseActionException;
	      throw x;
	    }
	  else state = currentStateHook;
	  currentStateHook = updateWorkInProgressHook();
	  var actionQueue = currentStateHook.queue,
	    dispatch = actionQueue.dispatch;
	  action !== currentStateHook.memoizedState &&
	    ((currentlyRenderingFiber.flags |= 2048),
	    pushSimpleEffect(
	      9,
	      { destroy: void 0 },
	      actionStateActionEffect.bind(null, actionQueue, action),
	      null
	    ));
	  return [state, dispatch, stateHook];
	}
	function actionStateActionEffect(actionQueue, action) {
	  actionQueue.action = action;
	}
	function rerenderActionState(action) {
	  var stateHook = updateWorkInProgressHook(),
	    currentStateHook = currentHook;
	  if (null !== currentStateHook)
	    return updateActionStateImpl(stateHook, currentStateHook, action);
	  updateWorkInProgressHook();
	  stateHook = stateHook.memoizedState;
	  currentStateHook = updateWorkInProgressHook();
	  var dispatch = currentStateHook.queue.dispatch;
	  currentStateHook.memoizedState = action;
	  return [stateHook, dispatch, !1];
	}
	function pushSimpleEffect(tag, inst, create, deps) {
	  tag = { tag: tag, create: create, deps: deps, inst: inst, next: null };
	  inst = currentlyRenderingFiber.updateQueue;
	  null === inst &&
	    ((inst = createFunctionComponentUpdateQueue()),
	    (currentlyRenderingFiber.updateQueue = inst));
	  create = inst.lastEffect;
	  null === create
	    ? (inst.lastEffect = tag.next = tag)
	    : ((deps = create.next),
	      (create.next = tag),
	      (tag.next = deps),
	      (inst.lastEffect = tag));
	  return tag;
	}
	function updateRef() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function mountEffectImpl(fiberFlags, hookFlags, create, deps) {
	  var hook = mountWorkInProgressHook();
	  currentlyRenderingFiber.flags |= fiberFlags;
	  hook.memoizedState = pushSimpleEffect(
	    1 | hookFlags,
	    { destroy: void 0 },
	    create,
	    void 0 === deps ? null : deps
	  );
	}
	function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var inst = hook.memoizedState.inst;
	  null !== currentHook &&
	  null !== deps &&
	  areHookInputsEqual(deps, currentHook.memoizedState.deps)
	    ? (hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps))
	    : ((currentlyRenderingFiber.flags |= fiberFlags),
	      (hook.memoizedState = pushSimpleEffect(
	        1 | hookFlags,
	        inst,
	        create,
	        deps
	      )));
	}
	function mountEffect(create, deps) {
	  mountEffectImpl(8390656, 8, create, deps);
	}
	function updateEffect(create, deps) {
	  updateEffectImpl(2048, 8, create, deps);
	}
	function useEffectEventImpl(payload) {
	  currentlyRenderingFiber.flags |= 4;
	  var componentUpdateQueue = currentlyRenderingFiber.updateQueue;
	  if (null === componentUpdateQueue)
	    (componentUpdateQueue = createFunctionComponentUpdateQueue()),
	      (currentlyRenderingFiber.updateQueue = componentUpdateQueue),
	      (componentUpdateQueue.events = [payload]);
	  else {
	    var events = componentUpdateQueue.events;
	    null === events
	      ? (componentUpdateQueue.events = [payload])
	      : events.push(payload);
	  }
	}
	function updateEvent(callback) {
	  var ref = updateWorkInProgressHook().memoizedState;
	  useEffectEventImpl({ ref: ref, nextImpl: callback });
	  return function () {
	    if (0 !== (executionContext & 2)) throw Error(formatProdErrorMessage(440));
	    return ref.impl.apply(void 0, arguments);
	  };
	}
	function updateInsertionEffect(create, deps) {
	  return updateEffectImpl(4, 2, create, deps);
	}
	function updateLayoutEffect(create, deps) {
	  return updateEffectImpl(4, 4, create, deps);
	}
	function imperativeHandleEffect(create, ref) {
	  if ("function" === typeof ref) {
	    create = create();
	    var refCleanup = ref(create);
	    return function () {
	      "function" === typeof refCleanup ? refCleanup() : ref(null);
	    };
	  }
	  if (null !== ref && void 0 !== ref)
	    return (
	      (create = create()),
	      (ref.current = create),
	      function () {
	        ref.current = null;
	      }
	    );
	}
	function updateImperativeHandle(ref, create, deps) {
	  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
	  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
	}
	function mountDebugValue() {}
	function updateCallback(callback, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var prevState = hook.memoizedState;
	  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
	    return prevState[0];
	  hook.memoizedState = [callback, deps];
	  return callback;
	}
	function updateMemo(nextCreate, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var prevState = hook.memoizedState;
	  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
	    return prevState[0];
	  prevState = nextCreate();
	  if (shouldDoubleInvokeUserFnsInHooksDEV) {
	    setIsStrictModeForDevtools(!0);
	    try {
	      nextCreate();
	    } finally {
	      setIsStrictModeForDevtools(!1);
	    }
	  }
	  hook.memoizedState = [prevState, deps];
	  return prevState;
	}
	function mountDeferredValueImpl(hook, value, initialValue) {
	  if (
	    void 0 === initialValue ||
	    (0 !== (renderLanes & 1073741824) &&
	      0 === (workInProgressRootRenderLanes & 261930))
	  )
	    return (hook.memoizedState = value);
	  hook.memoizedState = initialValue;
	  hook = requestDeferredLane();
	  currentlyRenderingFiber.lanes |= hook;
	  workInProgressRootSkippedLanes |= hook;
	  return initialValue;
	}
	function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
	  if (objectIs(value, prevValue)) return value;
	  if (null !== currentTreeHiddenStackCursor.current)
	    return (
	      (hook = mountDeferredValueImpl(hook, value, initialValue)),
	      objectIs(hook, prevValue) || (didReceiveUpdate = !0),
	      hook
	    );
	  if (
	    0 === (renderLanes & 42) ||
	    (0 !== (renderLanes & 1073741824) &&
	      0 === (workInProgressRootRenderLanes & 261930))
	  )
	    return (didReceiveUpdate = !0), (hook.memoizedState = value);
	  hook = requestDeferredLane();
	  currentlyRenderingFiber.lanes |= hook;
	  workInProgressRootSkippedLanes |= hook;
	  return prevValue;
	}
	function startTransition(fiber, queue, pendingState, finishedState, callback) {
	  var previousPriority = ReactDOMSharedInternals.p;
	  ReactDOMSharedInternals.p =
	    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  dispatchOptimisticSetState(fiber, !1, queue, pendingState);
	  try {
	    var returnValue = callback(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    if (
	      null !== returnValue &&
	      "object" === typeof returnValue &&
	      "function" === typeof returnValue.then
	    ) {
	      var thenableForFinishedState = chainThenableValue(
	        returnValue,
	        finishedState
	      );
	      dispatchSetStateInternal(
	        fiber,
	        queue,
	        thenableForFinishedState,
	        requestUpdateLane(fiber)
	      );
	    } else
	      dispatchSetStateInternal(
	        fiber,
	        queue,
	        finishedState,
	        requestUpdateLane(fiber)
	      );
	  } catch (error) {
	    dispatchSetStateInternal(
	      fiber,
	      queue,
	      { then: function () {}, status: "rejected", reason: error },
	      requestUpdateLane()
	    );
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      null !== prevTransition &&
	        null !== currentTransition.types &&
	        (prevTransition.types = currentTransition.types),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function noop() {}
	function startHostTransition(formFiber, pendingState, action, formData) {
	  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
	  var queue = ensureFormComponentIsStateful(formFiber).queue;
	  startTransition(
	    formFiber,
	    queue,
	    pendingState,
	    sharedNotPendingObject,
	    null === action
	      ? noop
	      : function () {
	          requestFormReset$1(formFiber);
	          return action(formData);
	        }
	  );
	}
	function ensureFormComponentIsStateful(formFiber) {
	  var existingStateHook = formFiber.memoizedState;
	  if (null !== existingStateHook) return existingStateHook;
	  existingStateHook = {
	    memoizedState: sharedNotPendingObject,
	    baseState: sharedNotPendingObject,
	    baseQueue: null,
	    queue: {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: basicStateReducer,
	      lastRenderedState: sharedNotPendingObject
	    },
	    next: null
	  };
	  var initialResetState = {};
	  existingStateHook.next = {
	    memoizedState: initialResetState,
	    baseState: initialResetState,
	    baseQueue: null,
	    queue: {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: basicStateReducer,
	      lastRenderedState: initialResetState
	    },
	    next: null
	  };
	  formFiber.memoizedState = existingStateHook;
	  formFiber = formFiber.alternate;
	  null !== formFiber && (formFiber.memoizedState = existingStateHook);
	  return existingStateHook;
	}
	function requestFormReset$1(formFiber) {
	  var stateHook = ensureFormComponentIsStateful(formFiber);
	  null === stateHook.next && (stateHook = formFiber.alternate.memoizedState);
	  dispatchSetStateInternal(
	    formFiber,
	    stateHook.next.queue,
	    {},
	    requestUpdateLane()
	  );
	}
	function useHostTransitionStatus() {
	  return readContext(HostTransitionContext);
	}
	function updateId() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function updateRefresh() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function refreshCache(fiber) {
	  for (var provider = fiber.return; null !== provider; ) {
	    switch (provider.tag) {
	      case 24:
	      case 3:
	        var lane = requestUpdateLane();
	        fiber = createUpdate(lane);
	        var root$69 = enqueueUpdate(provider, fiber, lane);
	        null !== root$69 &&
	          (scheduleUpdateOnFiber(root$69, provider, lane),
	          entangleTransitions(root$69, provider, lane));
	        provider = { cache: createCache() };
	        fiber.payload = provider;
	        return;
	    }
	    provider = provider.return;
	  }
	}
	function dispatchReducerAction(fiber, queue, action) {
	  var lane = requestUpdateLane();
	  action = {
	    lane: lane,
	    revertLane: 0,
	    gesture: null,
	    action: action,
	    hasEagerState: !1,
	    eagerState: null,
	    next: null
	  };
	  isRenderPhaseUpdate(fiber)
	    ? enqueueRenderPhaseUpdate(queue, action)
	    : ((action = enqueueConcurrentHookUpdate(fiber, queue, action, lane)),
	      null !== action &&
	        (scheduleUpdateOnFiber(action, fiber, lane),
	        entangleTransitionUpdate(action, queue, lane)));
	}
	function dispatchSetState(fiber, queue, action) {
	  var lane = requestUpdateLane();
	  dispatchSetStateInternal(fiber, queue, action, lane);
	}
	function dispatchSetStateInternal(fiber, queue, action, lane) {
	  var update = {
	    lane: lane,
	    revertLane: 0,
	    gesture: null,
	    action: action,
	    hasEagerState: !1,
	    eagerState: null,
	    next: null
	  };
	  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
	  else {
	    var alternate = fiber.alternate;
	    if (
	      0 === fiber.lanes &&
	      (null === alternate || 0 === alternate.lanes) &&
	      ((alternate = queue.lastRenderedReducer), null !== alternate)
	    )
	      try {
	        var currentState = queue.lastRenderedState,
	          eagerState = alternate(currentState, action);
	        update.hasEagerState = !0;
	        update.eagerState = eagerState;
	        if (objectIs(eagerState, currentState))
	          return (
	            enqueueUpdate$1(fiber, queue, update, 0),
	            null === workInProgressRoot && finishQueueingConcurrentUpdates(),
	            !1
	          );
	      } catch (error) {
	      } finally {
	      }
	    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
	    if (null !== action)
	      return (
	        scheduleUpdateOnFiber(action, fiber, lane),
	        entangleTransitionUpdate(action, queue, lane),
	        !0
	      );
	  }
	  return !1;
	}
	function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
	  action = {
	    lane: 2,
	    revertLane: requestTransitionLane(),
	    gesture: null,
	    action: action,
	    hasEagerState: !1,
	    eagerState: null,
	    next: null
	  };
	  if (isRenderPhaseUpdate(fiber)) {
	    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
	  } else
	    (throwIfDuringRender = enqueueConcurrentHookUpdate(
	      fiber,
	      queue,
	      action,
	      2
	    )),
	      null !== throwIfDuringRender &&
	        scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
	}
	function isRenderPhaseUpdate(fiber) {
	  var alternate = fiber.alternate;
	  return (
	    fiber === currentlyRenderingFiber ||
	    (null !== alternate && alternate === currentlyRenderingFiber)
	  );
	}
	function enqueueRenderPhaseUpdate(queue, update) {
	  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
	    !0;
	  var pending = queue.pending;
	  null === pending
	    ? (update.next = update)
	    : ((update.next = pending.next), (pending.next = update));
	  queue.pending = update;
	}
	function entangleTransitionUpdate(root, queue, lane) {
	  if (0 !== (lane & 4194048)) {
	    var queueLanes = queue.lanes;
	    queueLanes &= root.pendingLanes;
	    lane |= queueLanes;
	    queue.lanes = lane;
	    markRootEntangled(root, lane);
	  }
	}
	var ContextOnlyDispatcher = {
	  readContext: readContext,
	  use: use,
	  useCallback: throwInvalidHookError,
	  useContext: throwInvalidHookError,
	  useEffect: throwInvalidHookError,
	  useImperativeHandle: throwInvalidHookError,
	  useLayoutEffect: throwInvalidHookError,
	  useInsertionEffect: throwInvalidHookError,
	  useMemo: throwInvalidHookError,
	  useReducer: throwInvalidHookError,
	  useRef: throwInvalidHookError,
	  useState: throwInvalidHookError,
	  useDebugValue: throwInvalidHookError,
	  useDeferredValue: throwInvalidHookError,
	  useTransition: throwInvalidHookError,
	  useSyncExternalStore: throwInvalidHookError,
	  useId: throwInvalidHookError,
	  useHostTransitionStatus: throwInvalidHookError,
	  useFormState: throwInvalidHookError,
	  useActionState: throwInvalidHookError,
	  useOptimistic: throwInvalidHookError,
	  useMemoCache: throwInvalidHookError,
	  useCacheRefresh: throwInvalidHookError
	};
	ContextOnlyDispatcher.useEffectEvent = throwInvalidHookError;
	var HooksDispatcherOnMount = {
	    readContext: readContext,
	    use: use,
	    useCallback: function (callback, deps) {
	      mountWorkInProgressHook().memoizedState = [
	        callback,
	        void 0 === deps ? null : deps
	      ];
	      return callback;
	    },
	    useContext: readContext,
	    useEffect: mountEffect,
	    useImperativeHandle: function (ref, create, deps) {
	      deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
	      mountEffectImpl(
	        4194308,
	        4,
	        imperativeHandleEffect.bind(null, create, ref),
	        deps
	      );
	    },
	    useLayoutEffect: function (create, deps) {
	      return mountEffectImpl(4194308, 4, create, deps);
	    },
	    useInsertionEffect: function (create, deps) {
	      mountEffectImpl(4, 2, create, deps);
	    },
	    useMemo: function (nextCreate, deps) {
	      var hook = mountWorkInProgressHook();
	      deps = void 0 === deps ? null : deps;
	      var nextValue = nextCreate();
	      if (shouldDoubleInvokeUserFnsInHooksDEV) {
	        setIsStrictModeForDevtools(!0);
	        try {
	          nextCreate();
	        } finally {
	          setIsStrictModeForDevtools(!1);
	        }
	      }
	      hook.memoizedState = [nextValue, deps];
	      return nextValue;
	    },
	    useReducer: function (reducer, initialArg, init) {
	      var hook = mountWorkInProgressHook();
	      if (void 0 !== init) {
	        var initialState = init(initialArg);
	        if (shouldDoubleInvokeUserFnsInHooksDEV) {
	          setIsStrictModeForDevtools(!0);
	          try {
	            init(initialArg);
	          } finally {
	            setIsStrictModeForDevtools(!1);
	          }
	        }
	      } else initialState = initialArg;
	      hook.memoizedState = hook.baseState = initialState;
	      reducer = {
	        pending: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: reducer,
	        lastRenderedState: initialState
	      };
	      hook.queue = reducer;
	      reducer = reducer.dispatch = dispatchReducerAction.bind(
	        null,
	        currentlyRenderingFiber,
	        reducer
	      );
	      return [hook.memoizedState, reducer];
	    },
	    useRef: function (initialValue) {
	      var hook = mountWorkInProgressHook();
	      initialValue = { current: initialValue };
	      return (hook.memoizedState = initialValue);
	    },
	    useState: function (initialState) {
	      initialState = mountStateImpl(initialState);
	      var queue = initialState.queue,
	        dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
	      queue.dispatch = dispatch;
	      return [initialState.memoizedState, dispatch];
	    },
	    useDebugValue: mountDebugValue,
	    useDeferredValue: function (value, initialValue) {
	      var hook = mountWorkInProgressHook();
	      return mountDeferredValueImpl(hook, value, initialValue);
	    },
	    useTransition: function () {
	      var stateHook = mountStateImpl(!1);
	      stateHook = startTransition.bind(
	        null,
	        currentlyRenderingFiber,
	        stateHook.queue,
	        !0,
	        !1
	      );
	      mountWorkInProgressHook().memoizedState = stateHook;
	      return [!1, stateHook];
	    },
	    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
	      var fiber = currentlyRenderingFiber,
	        hook = mountWorkInProgressHook();
	      if (isHydrating) {
	        if (void 0 === getServerSnapshot)
	          throw Error(formatProdErrorMessage(407));
	        getServerSnapshot = getServerSnapshot();
	      } else {
	        getServerSnapshot = getSnapshot();
	        if (null === workInProgressRoot)
	          throw Error(formatProdErrorMessage(349));
	        0 !== (workInProgressRootRenderLanes & 127) ||
	          pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
	      }
	      hook.memoizedState = getServerSnapshot;
	      var inst = { value: getServerSnapshot, getSnapshot: getSnapshot };
	      hook.queue = inst;
	      mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
	        subscribe
	      ]);
	      fiber.flags |= 2048;
	      pushSimpleEffect(
	        9,
	        { destroy: void 0 },
	        updateStoreInstance.bind(
	          null,
	          fiber,
	          inst,
	          getServerSnapshot,
	          getSnapshot
	        ),
	        null
	      );
	      return getServerSnapshot;
	    },
	    useId: function () {
	      var hook = mountWorkInProgressHook(),
	        identifierPrefix = workInProgressRoot.identifierPrefix;
	      if (isHydrating) {
	        var JSCompiler_inline_result = treeContextOverflow;
	        var idWithLeadingBit = treeContextId;
	        JSCompiler_inline_result =
	          (
	            idWithLeadingBit & ~(1 << (32 - clz32(idWithLeadingBit) - 1))
	          ).toString(32) + JSCompiler_inline_result;
	        identifierPrefix =
	          "_" + identifierPrefix + "R_" + JSCompiler_inline_result;
	        JSCompiler_inline_result = localIdCounter++;
	        0 < JSCompiler_inline_result &&
	          (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
	        identifierPrefix += "_";
	      } else
	        (JSCompiler_inline_result = globalClientIdCounter++),
	          (identifierPrefix =
	            "_" +
	            identifierPrefix +
	            "r_" +
	            JSCompiler_inline_result.toString(32) +
	            "_");
	      return (hook.memoizedState = identifierPrefix);
	    },
	    useHostTransitionStatus: useHostTransitionStatus,
	    useFormState: mountActionState,
	    useActionState: mountActionState,
	    useOptimistic: function (passthrough) {
	      var hook = mountWorkInProgressHook();
	      hook.memoizedState = hook.baseState = passthrough;
	      var queue = {
	        pending: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: null,
	        lastRenderedState: null
	      };
	      hook.queue = queue;
	      hook = dispatchOptimisticSetState.bind(
	        null,
	        currentlyRenderingFiber,
	        !0,
	        queue
	      );
	      queue.dispatch = hook;
	      return [passthrough, hook];
	    },
	    useMemoCache: useMemoCache,
	    useCacheRefresh: function () {
	      return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
	        null,
	        currentlyRenderingFiber
	      ));
	    },
	    useEffectEvent: function (callback) {
	      var hook = mountWorkInProgressHook(),
	        ref = { impl: callback };
	      hook.memoizedState = ref;
	      return function () {
	        if (0 !== (executionContext & 2))
	          throw Error(formatProdErrorMessage(440));
	        return ref.impl.apply(void 0, arguments);
	      };
	    }
	  },
	  HooksDispatcherOnUpdate = {
	    readContext: readContext,
	    use: use,
	    useCallback: updateCallback,
	    useContext: readContext,
	    useEffect: updateEffect,
	    useImperativeHandle: updateImperativeHandle,
	    useInsertionEffect: updateInsertionEffect,
	    useLayoutEffect: updateLayoutEffect,
	    useMemo: updateMemo,
	    useReducer: updateReducer,
	    useRef: updateRef,
	    useState: function () {
	      return updateReducer(basicStateReducer);
	    },
	    useDebugValue: mountDebugValue,
	    useDeferredValue: function (value, initialValue) {
	      var hook = updateWorkInProgressHook();
	      return updateDeferredValueImpl(
	        hook,
	        currentHook.memoizedState,
	        value,
	        initialValue
	      );
	    },
	    useTransition: function () {
	      var booleanOrThenable = updateReducer(basicStateReducer)[0],
	        start = updateWorkInProgressHook().memoizedState;
	      return [
	        "boolean" === typeof booleanOrThenable
	          ? booleanOrThenable
	          : useThenable(booleanOrThenable),
	        start
	      ];
	    },
	    useSyncExternalStore: updateSyncExternalStore,
	    useId: updateId,
	    useHostTransitionStatus: useHostTransitionStatus,
	    useFormState: updateActionState,
	    useActionState: updateActionState,
	    useOptimistic: function (passthrough, reducer) {
	      var hook = updateWorkInProgressHook();
	      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
	    },
	    useMemoCache: useMemoCache,
	    useCacheRefresh: updateRefresh
	  };
	HooksDispatcherOnUpdate.useEffectEvent = updateEvent;
	var HooksDispatcherOnRerender = {
	  readContext: readContext,
	  use: use,
	  useCallback: updateCallback,
	  useContext: readContext,
	  useEffect: updateEffect,
	  useImperativeHandle: updateImperativeHandle,
	  useInsertionEffect: updateInsertionEffect,
	  useLayoutEffect: updateLayoutEffect,
	  useMemo: updateMemo,
	  useReducer: rerenderReducer,
	  useRef: updateRef,
	  useState: function () {
	    return rerenderReducer(basicStateReducer);
	  },
	  useDebugValue: mountDebugValue,
	  useDeferredValue: function (value, initialValue) {
	    var hook = updateWorkInProgressHook();
	    return null === currentHook
	      ? mountDeferredValueImpl(hook, value, initialValue)
	      : updateDeferredValueImpl(
	          hook,
	          currentHook.memoizedState,
	          value,
	          initialValue
	        );
	  },
	  useTransition: function () {
	    var booleanOrThenable = rerenderReducer(basicStateReducer)[0],
	      start = updateWorkInProgressHook().memoizedState;
	    return [
	      "boolean" === typeof booleanOrThenable
	        ? booleanOrThenable
	        : useThenable(booleanOrThenable),
	      start
	    ];
	  },
	  useSyncExternalStore: updateSyncExternalStore,
	  useId: updateId,
	  useHostTransitionStatus: useHostTransitionStatus,
	  useFormState: rerenderActionState,
	  useActionState: rerenderActionState,
	  useOptimistic: function (passthrough, reducer) {
	    var hook = updateWorkInProgressHook();
	    if (null !== currentHook)
	      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
	    hook.baseState = passthrough;
	    return [passthrough, hook.queue.dispatch];
	  },
	  useMemoCache: useMemoCache,
	  useCacheRefresh: updateRefresh
	};
	HooksDispatcherOnRerender.useEffectEvent = updateEvent;
	function applyDerivedStateFromProps(
	  workInProgress,
	  ctor,
	  getDerivedStateFromProps,
	  nextProps
	) {
	  ctor = workInProgress.memoizedState;
	  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
	  getDerivedStateFromProps =
	    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
	      ? ctor
	      : assign({}, ctor, getDerivedStateFromProps);
	  workInProgress.memoizedState = getDerivedStateFromProps;
	  0 === workInProgress.lanes &&
	    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
	}
	var classComponentUpdater = {
	  enqueueSetState: function (inst, payload, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.payload = payload;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    payload = enqueueUpdate(inst, update, lane);
	    null !== payload &&
	      (scheduleUpdateOnFiber(payload, inst, lane),
	      entangleTransitions(payload, inst, lane));
	  },
	  enqueueReplaceState: function (inst, payload, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.tag = 1;
	    update.payload = payload;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    payload = enqueueUpdate(inst, update, lane);
	    null !== payload &&
	      (scheduleUpdateOnFiber(payload, inst, lane),
	      entangleTransitions(payload, inst, lane));
	  },
	  enqueueForceUpdate: function (inst, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.tag = 2;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    callback = enqueueUpdate(inst, update, lane);
	    null !== callback &&
	      (scheduleUpdateOnFiber(callback, inst, lane),
	      entangleTransitions(callback, inst, lane));
	  }
	};
	function checkShouldComponentUpdate(
	  workInProgress,
	  ctor,
	  oldProps,
	  newProps,
	  oldState,
	  newState,
	  nextContext
	) {
	  workInProgress = workInProgress.stateNode;
	  return "function" === typeof workInProgress.shouldComponentUpdate
	    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
	    : ctor.prototype && ctor.prototype.isPureReactComponent
	      ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
	      : !0;
	}
	function callComponentWillReceiveProps(
	  workInProgress,
	  instance,
	  newProps,
	  nextContext
	) {
	  workInProgress = instance.state;
	  "function" === typeof instance.componentWillReceiveProps &&
	    instance.componentWillReceiveProps(newProps, nextContext);
	  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
	    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
	  instance.state !== workInProgress &&
	    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
	}
	function resolveClassComponentProps(Component, baseProps) {
	  var newProps = baseProps;
	  if ("ref" in baseProps) {
	    newProps = {};
	    for (var propName in baseProps)
	      "ref" !== propName && (newProps[propName] = baseProps[propName]);
	  }
	  if ((Component = Component.defaultProps)) {
	    newProps === baseProps && (newProps = assign({}, newProps));
	    for (var propName$73 in Component)
	      void 0 === newProps[propName$73] &&
	        (newProps[propName$73] = Component[propName$73]);
	  }
	  return newProps;
	}
	function defaultOnUncaughtError(error) {
	  reportGlobalError(error);
	}
	function defaultOnCaughtError(error) {
	  console.error(error);
	}
	function defaultOnRecoverableError(error) {
	  reportGlobalError(error);
	}
	function logUncaughtError(root, errorInfo) {
	  try {
	    var onUncaughtError = root.onUncaughtError;
	    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
	  } catch (e$74) {
	    setTimeout(function () {
	      throw e$74;
	    });
	  }
	}
	function logCaughtError(root, boundary, errorInfo) {
	  try {
	    var onCaughtError = root.onCaughtError;
	    onCaughtError(errorInfo.value, {
	      componentStack: errorInfo.stack,
	      errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
	    });
	  } catch (e$75) {
	    setTimeout(function () {
	      throw e$75;
	    });
	  }
	}
	function createRootErrorUpdate(root, errorInfo, lane) {
	  lane = createUpdate(lane);
	  lane.tag = 3;
	  lane.payload = { element: null };
	  lane.callback = function () {
	    logUncaughtError(root, errorInfo);
	  };
	  return lane;
	}
	function createClassErrorUpdate(lane) {
	  lane = createUpdate(lane);
	  lane.tag = 3;
	  return lane;
	}
	function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
	  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
	  if ("function" === typeof getDerivedStateFromError) {
	    var error = errorInfo.value;
	    update.payload = function () {
	      return getDerivedStateFromError(error);
	    };
	    update.callback = function () {
	      logCaughtError(root, fiber, errorInfo);
	    };
	  }
	  var inst = fiber.stateNode;
	  null !== inst &&
	    "function" === typeof inst.componentDidCatch &&
	    (update.callback = function () {
	      logCaughtError(root, fiber, errorInfo);
	      "function" !== typeof getDerivedStateFromError &&
	        (null === legacyErrorBoundariesThatAlreadyFailed
	          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
	          : legacyErrorBoundariesThatAlreadyFailed.add(this));
	      var stack = errorInfo.stack;
	      this.componentDidCatch(errorInfo.value, {
	        componentStack: null !== stack ? stack : ""
	      });
	    });
	}
	function throwException(
	  root,
	  returnFiber,
	  sourceFiber,
	  value,
	  rootRenderLanes
	) {
	  sourceFiber.flags |= 32768;
	  if (
	    null !== value &&
	    "object" === typeof value &&
	    "function" === typeof value.then
	  ) {
	    returnFiber = sourceFiber.alternate;
	    null !== returnFiber &&
	      propagateParentContextChanges(
	        returnFiber,
	        sourceFiber,
	        rootRenderLanes,
	        !0
	      );
	    sourceFiber = suspenseHandlerStackCursor.current;
	    if (null !== sourceFiber) {
	      switch (sourceFiber.tag) {
	        case 31:
	        case 13:
	          return (
	            null === shellBoundary
	              ? renderDidSuspendDelayIfPossible()
	              : null === sourceFiber.alternate &&
	                0 === workInProgressRootExitStatus &&
	                (workInProgressRootExitStatus = 3),
	            (sourceFiber.flags &= -257),
	            (sourceFiber.flags |= 65536),
	            (sourceFiber.lanes = rootRenderLanes),
	            value === noopSuspenseyCommitThenable
	              ? (sourceFiber.flags |= 16384)
	              : ((returnFiber = sourceFiber.updateQueue),
	                null === returnFiber
	                  ? (sourceFiber.updateQueue = new Set([value]))
	                  : returnFiber.add(value),
	                attachPingListener(root, value, rootRenderLanes)),
	            !1
	          );
	        case 22:
	          return (
	            (sourceFiber.flags |= 65536),
	            value === noopSuspenseyCommitThenable
	              ? (sourceFiber.flags |= 16384)
	              : ((returnFiber = sourceFiber.updateQueue),
	                null === returnFiber
	                  ? ((returnFiber = {
	                      transitions: null,
	                      markerInstances: null,
	                      retryQueue: new Set([value])
	                    }),
	                    (sourceFiber.updateQueue = returnFiber))
	                  : ((sourceFiber = returnFiber.retryQueue),
	                    null === sourceFiber
	                      ? (returnFiber.retryQueue = new Set([value]))
	                      : sourceFiber.add(value)),
	                attachPingListener(root, value, rootRenderLanes)),
	            !1
	          );
	      }
	      throw Error(formatProdErrorMessage(435, sourceFiber.tag));
	    }
	    attachPingListener(root, value, rootRenderLanes);
	    renderDidSuspendDelayIfPossible();
	    return !1;
	  }
	  if (isHydrating)
	    return (
	      (returnFiber = suspenseHandlerStackCursor.current),
	      null !== returnFiber
	        ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256),
	          (returnFiber.flags |= 65536),
	          (returnFiber.lanes = rootRenderLanes),
	          value !== HydrationMismatchException &&
	            ((root = Error(formatProdErrorMessage(422), { cause: value })),
	            queueHydrationError(createCapturedValueAtFiber(root, sourceFiber))))
	        : (value !== HydrationMismatchException &&
	            ((returnFiber = Error(formatProdErrorMessage(423), {
	              cause: value
	            })),
	            queueHydrationError(
	              createCapturedValueAtFiber(returnFiber, sourceFiber)
	            )),
	          (root = root.current.alternate),
	          (root.flags |= 65536),
	          (rootRenderLanes &= -rootRenderLanes),
	          (root.lanes |= rootRenderLanes),
	          (value = createCapturedValueAtFiber(value, sourceFiber)),
	          (rootRenderLanes = createRootErrorUpdate(
	            root.stateNode,
	            value,
	            rootRenderLanes
	          )),
	          enqueueCapturedUpdate(root, rootRenderLanes),
	          4 !== workInProgressRootExitStatus &&
	            (workInProgressRootExitStatus = 2)),
	      !1
	    );
	  var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
	  wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
	  null === workInProgressRootConcurrentErrors
	    ? (workInProgressRootConcurrentErrors = [wrapperError])
	    : workInProgressRootConcurrentErrors.push(wrapperError);
	  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
	  if (null === returnFiber) return !0;
	  value = createCapturedValueAtFiber(value, sourceFiber);
	  sourceFiber = returnFiber;
	  do {
	    switch (sourceFiber.tag) {
	      case 3:
	        return (
	          (sourceFiber.flags |= 65536),
	          (root = rootRenderLanes & -rootRenderLanes),
	          (sourceFiber.lanes |= root),
	          (root = createRootErrorUpdate(sourceFiber.stateNode, value, root)),
	          enqueueCapturedUpdate(sourceFiber, root),
	          !1
	        );
	      case 1:
	        if (
	          ((returnFiber = sourceFiber.type),
	          (wrapperError = sourceFiber.stateNode),
	          0 === (sourceFiber.flags & 128) &&
	            ("function" === typeof returnFiber.getDerivedStateFromError ||
	              (null !== wrapperError &&
	                "function" === typeof wrapperError.componentDidCatch &&
	                (null === legacyErrorBoundariesThatAlreadyFailed ||
	                  !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))))
	        )
	          return (
	            (sourceFiber.flags |= 65536),
	            (rootRenderLanes &= -rootRenderLanes),
	            (sourceFiber.lanes |= rootRenderLanes),
	            (rootRenderLanes = createClassErrorUpdate(rootRenderLanes)),
	            initializeClassErrorUpdate(
	              rootRenderLanes,
	              root,
	              sourceFiber,
	              value
	            ),
	            enqueueCapturedUpdate(sourceFiber, rootRenderLanes),
	            !1
	          );
	    }
	    sourceFiber = sourceFiber.return;
	  } while (null !== sourceFiber);
	  return !1;
	}
	var SelectiveHydrationException = Error(formatProdErrorMessage(461)),
	  didReceiveUpdate = !1;
	function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
	  workInProgress.child =
	    null === current
	      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
	      : reconcileChildFibers(
	          workInProgress,
	          current.child,
	          nextChildren,
	          renderLanes
	        );
	}
	function updateForwardRef(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  Component = Component.render;
	  var ref = workInProgress.ref;
	  if ("ref" in nextProps) {
	    var propsWithoutRef = {};
	    for (var key in nextProps)
	      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
	  } else propsWithoutRef = nextProps;
	  prepareToReadContext(workInProgress);
	  nextProps = renderWithHooks(
	    current,
	    workInProgress,
	    Component,
	    propsWithoutRef,
	    ref,
	    renderLanes
	  );
	  key = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && key && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, nextProps, renderLanes);
	  return workInProgress.child;
	}
	function updateMemoComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  if (null === current) {
	    var type = Component.type;
	    if (
	      "function" === typeof type &&
	      !shouldConstruct(type) &&
	      void 0 === type.defaultProps &&
	      null === Component.compare
	    )
	      return (
	        (workInProgress.tag = 15),
	        (workInProgress.type = type),
	        updateSimpleMemoComponent(
	          current,
	          workInProgress,
	          type,
	          nextProps,
	          renderLanes
	        )
	      );
	    current = createFiberFromTypeAndProps(
	      Component.type,
	      null,
	      nextProps,
	      workInProgress,
	      workInProgress.mode,
	      renderLanes
	    );
	    current.ref = workInProgress.ref;
	    current.return = workInProgress;
	    return (workInProgress.child = current);
	  }
	  type = current.child;
	  if (!checkScheduledUpdateOrContext(current, renderLanes)) {
	    var prevProps = type.memoizedProps;
	    Component = Component.compare;
	    Component = null !== Component ? Component : shallowEqual;
	    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
	      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	  }
	  workInProgress.flags |= 1;
	  current = createWorkInProgress(type, nextProps);
	  current.ref = workInProgress.ref;
	  current.return = workInProgress;
	  return (workInProgress.child = current);
	}
	function updateSimpleMemoComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  if (null !== current) {
	    var prevProps = current.memoizedProps;
	    if (
	      shallowEqual(prevProps, nextProps) &&
	      current.ref === workInProgress.ref
	    )
	      if (
	        ((didReceiveUpdate = !1),
	        (workInProgress.pendingProps = nextProps = prevProps),
	        checkScheduledUpdateOrContext(current, renderLanes))
	      )
	        0 !== (current.flags & 131072) && (didReceiveUpdate = !0);
	      else
	        return (
	          (workInProgress.lanes = current.lanes),
	          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	        );
	  }
	  return updateFunctionComponent(
	    current,
	    workInProgress,
	    Component,
	    nextProps,
	    renderLanes
	  );
	}
	function updateOffscreenComponent(
	  current,
	  workInProgress,
	  renderLanes,
	  nextProps
	) {
	  var nextChildren = nextProps.children,
	    prevState = null !== current ? current.memoizedState : null;
	  null === current &&
	    null === workInProgress.stateNode &&
	    (workInProgress.stateNode = {
	      _visibility: 1,
	      _pendingMarkers: null,
	      _retryCache: null,
	      _transitions: null
	    });
	  if ("hidden" === nextProps.mode) {
	    if (0 !== (workInProgress.flags & 128)) {
	      prevState =
	        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
	      if (null !== current) {
	        nextProps = workInProgress.child = current.child;
	        for (nextChildren = 0; null !== nextProps; )
	          (nextChildren =
	            nextChildren | nextProps.lanes | nextProps.childLanes),
	            (nextProps = nextProps.sibling);
	        nextProps = nextChildren & ~prevState;
	      } else (nextProps = 0), (workInProgress.child = null);
	      return deferHiddenOffscreenComponent(
	        current,
	        workInProgress,
	        prevState,
	        renderLanes,
	        nextProps
	      );
	    }
	    if (0 !== (renderLanes & 536870912))
	      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
	        null !== current &&
	          pushTransition(
	            workInProgress,
	            null !== prevState ? prevState.cachePool : null
	          ),
	        null !== prevState
	          ? pushHiddenContext(workInProgress, prevState)
	          : reuseHiddenContextOnStack(),
	        pushOffscreenSuspenseHandler(workInProgress);
	    else
	      return (
	        (nextProps = workInProgress.lanes = 536870912),
	        deferHiddenOffscreenComponent(
	          current,
	          workInProgress,
	          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes,
	          renderLanes,
	          nextProps
	        )
	      );
	  } else
	    null !== prevState
	      ? (pushTransition(workInProgress, prevState.cachePool),
	        pushHiddenContext(workInProgress, prevState),
	        reuseSuspenseHandlerOnStack(workInProgress),
	        (workInProgress.memoizedState = null))
	      : (null !== current && pushTransition(workInProgress, null),
	        reuseHiddenContextOnStack(),
	        reuseSuspenseHandlerOnStack(workInProgress));
	  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
	  return workInProgress.child;
	}
	function bailoutOffscreenComponent(current, workInProgress) {
	  (null !== current && 22 === current.tag) ||
	    null !== workInProgress.stateNode ||
	    (workInProgress.stateNode = {
	      _visibility: 1,
	      _pendingMarkers: null,
	      _retryCache: null,
	      _transitions: null
	    });
	  return workInProgress.sibling;
	}
	function deferHiddenOffscreenComponent(
	  current,
	  workInProgress,
	  nextBaseLanes,
	  renderLanes,
	  remainingChildLanes
	) {
	  var JSCompiler_inline_result = peekCacheFromPool();
	  JSCompiler_inline_result =
	    null === JSCompiler_inline_result
	      ? null
	      : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
	  workInProgress.memoizedState = {
	    baseLanes: nextBaseLanes,
	    cachePool: JSCompiler_inline_result
	  };
	  null !== current && pushTransition(workInProgress, null);
	  reuseHiddenContextOnStack();
	  pushOffscreenSuspenseHandler(workInProgress);
	  null !== current &&
	    propagateParentContextChanges(current, workInProgress, renderLanes, !0);
	  workInProgress.childLanes = remainingChildLanes;
	  return null;
	}
	function mountActivityChildren(workInProgress, nextProps) {
	  nextProps = mountWorkInProgressOffscreenFiber(
	    { mode: nextProps.mode, children: nextProps.children },
	    workInProgress.mode
	  );
	  nextProps.ref = workInProgress.ref;
	  workInProgress.child = nextProps;
	  nextProps.return = workInProgress;
	  return nextProps;
	}
	function retryActivityComponentWithoutHydrating(
	  current,
	  workInProgress,
	  renderLanes
	) {
	  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
	  current = mountActivityChildren(workInProgress, workInProgress.pendingProps);
	  current.flags |= 2;
	  popSuspenseHandler(workInProgress);
	  workInProgress.memoizedState = null;
	  return current;
	}
	function updateActivityComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    didSuspend = 0 !== (workInProgress.flags & 128);
	  workInProgress.flags &= -129;
	  if (null === current) {
	    if (isHydrating) {
	      if ("hidden" === nextProps.mode)
	        return (
	          (current = mountActivityChildren(workInProgress, nextProps)),
	          (workInProgress.lanes = 536870912),
	          bailoutOffscreenComponent(null, current)
	        );
	      pushDehydratedActivitySuspenseHandler(workInProgress);
	      (current = nextHydratableInstance)
	        ? ((current = canHydrateHydrationBoundary(
	            current,
	            rootOrSingletonContext
	          )),
	          (current = null !== current && "&" === current.data ? current : null),
	          null !== current &&
	            ((workInProgress.memoizedState = {
	              dehydrated: current,
	              treeContext:
	                null !== treeContextProvider
	                  ? { id: treeContextId, overflow: treeContextOverflow }
	                  : null,
	              retryLane: 536870912,
	              hydrationErrors: null
	            }),
	            (renderLanes = createFiberFromDehydratedFragment(current)),
	            (renderLanes.return = workInProgress),
	            (workInProgress.child = renderLanes),
	            (hydrationParentFiber = workInProgress),
	            (nextHydratableInstance = null)))
	        : (current = null);
	      if (null === current) throw throwOnHydrationMismatch(workInProgress);
	      workInProgress.lanes = 536870912;
	      return null;
	    }
	    return mountActivityChildren(workInProgress, nextProps);
	  }
	  var prevState = current.memoizedState;
	  if (null !== prevState) {
	    var dehydrated = prevState.dehydrated;
	    pushDehydratedActivitySuspenseHandler(workInProgress);
	    if (didSuspend)
	      if (workInProgress.flags & 256)
	        (workInProgress.flags &= -257),
	          (workInProgress = retryActivityComponentWithoutHydrating(
	            current,
	            workInProgress,
	            renderLanes
	          ));
	      else if (null !== workInProgress.memoizedState)
	        (workInProgress.child = current.child),
	          (workInProgress.flags |= 128),
	          (workInProgress = null);
	      else throw Error(formatProdErrorMessage(558));
	    else if (
	      (didReceiveUpdate ||
	        propagateParentContextChanges(current, workInProgress, renderLanes, !1),
	      (didSuspend = 0 !== (renderLanes & current.childLanes)),
	      didReceiveUpdate || didSuspend)
	    ) {
	      nextProps = workInProgressRoot;
	      if (
	        null !== nextProps &&
	        ((dehydrated = getBumpedLaneForHydration(nextProps, renderLanes)),
	        0 !== dehydrated && dehydrated !== prevState.retryLane)
	      )
	        throw (
	          ((prevState.retryLane = dehydrated),
	          enqueueConcurrentRenderForLane(current, dehydrated),
	          scheduleUpdateOnFiber(nextProps, current, dehydrated),
	          SelectiveHydrationException)
	        );
	      renderDidSuspendDelayIfPossible();
	      workInProgress = retryActivityComponentWithoutHydrating(
	        current,
	        workInProgress,
	        renderLanes
	      );
	    } else
	      (current = prevState.treeContext),
	        (nextHydratableInstance = getNextHydratable(dehydrated.nextSibling)),
	        (hydrationParentFiber = workInProgress),
	        (isHydrating = !0),
	        (hydrationErrors = null),
	        (rootOrSingletonContext = !1),
	        null !== current &&
	          restoreSuspendedTreeContext(workInProgress, current),
	        (workInProgress = mountActivityChildren(workInProgress, nextProps)),
	        (workInProgress.flags |= 4096);
	    return workInProgress;
	  }
	  current = createWorkInProgress(current.child, {
	    mode: nextProps.mode,
	    children: nextProps.children
	  });
	  current.ref = workInProgress.ref;
	  workInProgress.child = current;
	  current.return = workInProgress;
	  return current;
	}
	function markRef(current, workInProgress) {
	  var ref = workInProgress.ref;
	  if (null === ref)
	    null !== current &&
	      null !== current.ref &&
	      (workInProgress.flags |= 4194816);
	  else {
	    if ("function" !== typeof ref && "object" !== typeof ref)
	      throw Error(formatProdErrorMessage(284));
	    if (null === current || current.ref !== ref)
	      workInProgress.flags |= 4194816;
	  }
	}
	function updateFunctionComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  Component = renderWithHooks(
	    current,
	    workInProgress,
	    Component,
	    nextProps,
	    void 0,
	    renderLanes
	  );
	  nextProps = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, Component, renderLanes);
	  return workInProgress.child;
	}
	function replayFunctionComponent(
	  current,
	  workInProgress,
	  nextProps,
	  Component,
	  secondArg,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  workInProgress.updateQueue = null;
	  nextProps = renderWithHooksAgain(
	    workInProgress,
	    Component,
	    nextProps,
	    secondArg
	  );
	  finishRenderingHooks(current);
	  Component = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && Component && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, nextProps, renderLanes);
	  return workInProgress.child;
	}
	function updateClassComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  if (null === workInProgress.stateNode) {
	    var context = emptyContextObject,
	      contextType = Component.contextType;
	    "object" === typeof contextType &&
	      null !== contextType &&
	      (context = readContext(contextType));
	    context = new Component(nextProps, context);
	    workInProgress.memoizedState =
	      null !== context.state && void 0 !== context.state ? context.state : null;
	    context.updater = classComponentUpdater;
	    workInProgress.stateNode = context;
	    context._reactInternals = workInProgress;
	    context = workInProgress.stateNode;
	    context.props = nextProps;
	    context.state = workInProgress.memoizedState;
	    context.refs = {};
	    initializeUpdateQueue(workInProgress);
	    contextType = Component.contextType;
	    context.context =
	      "object" === typeof contextType && null !== contextType
	        ? readContext(contextType)
	        : emptyContextObject;
	    context.state = workInProgress.memoizedState;
	    contextType = Component.getDerivedStateFromProps;
	    "function" === typeof contextType &&
	      (applyDerivedStateFromProps(
	        workInProgress,
	        Component,
	        contextType,
	        nextProps
	      ),
	      (context.state = workInProgress.memoizedState));
	    "function" === typeof Component.getDerivedStateFromProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate ||
	      ("function" !== typeof context.UNSAFE_componentWillMount &&
	        "function" !== typeof context.componentWillMount) ||
	      ((contextType = context.state),
	      "function" === typeof context.componentWillMount &&
	        context.componentWillMount(),
	      "function" === typeof context.UNSAFE_componentWillMount &&
	        context.UNSAFE_componentWillMount(),
	      contextType !== context.state &&
	        classComponentUpdater.enqueueReplaceState(context, context.state, null),
	      processUpdateQueue(workInProgress, nextProps, context, renderLanes),
	      suspendIfUpdateReadFromEntangledAsyncAction(),
	      (context.state = workInProgress.memoizedState));
	    "function" === typeof context.componentDidMount &&
	      (workInProgress.flags |= 4194308);
	    nextProps = !0;
	  } else if (null === current) {
	    context = workInProgress.stateNode;
	    var unresolvedOldProps = workInProgress.memoizedProps,
	      oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
	    context.props = oldProps;
	    var oldContext = context.context,
	      contextType$jscomp$0 = Component.contextType;
	    contextType = emptyContextObject;
	    "object" === typeof contextType$jscomp$0 &&
	      null !== contextType$jscomp$0 &&
	      (contextType = readContext(contextType$jscomp$0));
	    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
	    contextType$jscomp$0 =
	      "function" === typeof getDerivedStateFromProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate;
	    unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
	    contextType$jscomp$0 ||
	      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
	        "function" !== typeof context.componentWillReceiveProps) ||
	      ((unresolvedOldProps || oldContext !== contextType) &&
	        callComponentWillReceiveProps(
	          workInProgress,
	          context,
	          nextProps,
	          contextType
	        ));
	    hasForceUpdate = !1;
	    var oldState = workInProgress.memoizedState;
	    context.state = oldState;
	    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
	    suspendIfUpdateReadFromEntangledAsyncAction();
	    oldContext = workInProgress.memoizedState;
	    unresolvedOldProps || oldState !== oldContext || hasForceUpdate
	      ? ("function" === typeof getDerivedStateFromProps &&
	          (applyDerivedStateFromProps(
	            workInProgress,
	            Component,
	            getDerivedStateFromProps,
	            nextProps
	          ),
	          (oldContext = workInProgress.memoizedState)),
	        (oldProps =
	          hasForceUpdate ||
	          checkShouldComponentUpdate(
	            workInProgress,
	            Component,
	            oldProps,
	            nextProps,
	            oldState,
	            oldContext,
	            contextType
	          ))
	          ? (contextType$jscomp$0 ||
	              ("function" !== typeof context.UNSAFE_componentWillMount &&
	                "function" !== typeof context.componentWillMount) ||
	              ("function" === typeof context.componentWillMount &&
	                context.componentWillMount(),
	              "function" === typeof context.UNSAFE_componentWillMount &&
	                context.UNSAFE_componentWillMount()),
	            "function" === typeof context.componentDidMount &&
	              (workInProgress.flags |= 4194308))
	          : ("function" === typeof context.componentDidMount &&
	              (workInProgress.flags |= 4194308),
	            (workInProgress.memoizedProps = nextProps),
	            (workInProgress.memoizedState = oldContext)),
	        (context.props = nextProps),
	        (context.state = oldContext),
	        (context.context = contextType),
	        (nextProps = oldProps))
	      : ("function" === typeof context.componentDidMount &&
	          (workInProgress.flags |= 4194308),
	        (nextProps = !1));
	  } else {
	    context = workInProgress.stateNode;
	    cloneUpdateQueue(current, workInProgress);
	    contextType = workInProgress.memoizedProps;
	    contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
	    context.props = contextType$jscomp$0;
	    getDerivedStateFromProps = workInProgress.pendingProps;
	    oldState = context.context;
	    oldContext = Component.contextType;
	    oldProps = emptyContextObject;
	    "object" === typeof oldContext &&
	      null !== oldContext &&
	      (oldProps = readContext(oldContext));
	    unresolvedOldProps = Component.getDerivedStateFromProps;
	    (oldContext =
	      "function" === typeof unresolvedOldProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate) ||
	      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
	        "function" !== typeof context.componentWillReceiveProps) ||
	      ((contextType !== getDerivedStateFromProps || oldState !== oldProps) &&
	        callComponentWillReceiveProps(
	          workInProgress,
	          context,
	          nextProps,
	          oldProps
	        ));
	    hasForceUpdate = !1;
	    oldState = workInProgress.memoizedState;
	    context.state = oldState;
	    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
	    suspendIfUpdateReadFromEntangledAsyncAction();
	    var newState = workInProgress.memoizedState;
	    contextType !== getDerivedStateFromProps ||
	    oldState !== newState ||
	    hasForceUpdate ||
	    (null !== current &&
	      null !== current.dependencies &&
	      checkIfContextChanged(current.dependencies))
	      ? ("function" === typeof unresolvedOldProps &&
	          (applyDerivedStateFromProps(
	            workInProgress,
	            Component,
	            unresolvedOldProps,
	            nextProps
	          ),
	          (newState = workInProgress.memoizedState)),
	        (contextType$jscomp$0 =
	          hasForceUpdate ||
	          checkShouldComponentUpdate(
	            workInProgress,
	            Component,
	            contextType$jscomp$0,
	            nextProps,
	            oldState,
	            newState,
	            oldProps
	          ) ||
	          (null !== current &&
	            null !== current.dependencies &&
	            checkIfContextChanged(current.dependencies)))
	          ? (oldContext ||
	              ("function" !== typeof context.UNSAFE_componentWillUpdate &&
	                "function" !== typeof context.componentWillUpdate) ||
	              ("function" === typeof context.componentWillUpdate &&
	                context.componentWillUpdate(nextProps, newState, oldProps),
	              "function" === typeof context.UNSAFE_componentWillUpdate &&
	                context.UNSAFE_componentWillUpdate(
	                  nextProps,
	                  newState,
	                  oldProps
	                )),
	            "function" === typeof context.componentDidUpdate &&
	              (workInProgress.flags |= 4),
	            "function" === typeof context.getSnapshotBeforeUpdate &&
	              (workInProgress.flags |= 1024))
	          : ("function" !== typeof context.componentDidUpdate ||
	              (contextType === current.memoizedProps &&
	                oldState === current.memoizedState) ||
	              (workInProgress.flags |= 4),
	            "function" !== typeof context.getSnapshotBeforeUpdate ||
	              (contextType === current.memoizedProps &&
	                oldState === current.memoizedState) ||
	              (workInProgress.flags |= 1024),
	            (workInProgress.memoizedProps = nextProps),
	            (workInProgress.memoizedState = newState)),
	        (context.props = nextProps),
	        (context.state = newState),
	        (context.context = oldProps),
	        (nextProps = contextType$jscomp$0))
	      : ("function" !== typeof context.componentDidUpdate ||
	          (contextType === current.memoizedProps &&
	            oldState === current.memoizedState) ||
	          (workInProgress.flags |= 4),
	        "function" !== typeof context.getSnapshotBeforeUpdate ||
	          (contextType === current.memoizedProps &&
	            oldState === current.memoizedState) ||
	          (workInProgress.flags |= 1024),
	        (nextProps = !1));
	  }
	  context = nextProps;
	  markRef(current, workInProgress);
	  nextProps = 0 !== (workInProgress.flags & 128);
	  context || nextProps
	    ? ((context = workInProgress.stateNode),
	      (Component =
	        nextProps && "function" !== typeof Component.getDerivedStateFromError
	          ? null
	          : context.render()),
	      (workInProgress.flags |= 1),
	      null !== current && nextProps
	        ? ((workInProgress.child = reconcileChildFibers(
	            workInProgress,
	            current.child,
	            null,
	            renderLanes
	          )),
	          (workInProgress.child = reconcileChildFibers(
	            workInProgress,
	            null,
	            Component,
	            renderLanes
	          )))
	        : reconcileChildren(current, workInProgress, Component, renderLanes),
	      (workInProgress.memoizedState = context.state),
	      (current = workInProgress.child))
	    : (current = bailoutOnAlreadyFinishedWork(
	        current,
	        workInProgress,
	        renderLanes
	      ));
	  return current;
	}
	function mountHostRootWithoutHydrating(
	  current,
	  workInProgress,
	  nextChildren,
	  renderLanes
	) {
	  resetHydrationState();
	  workInProgress.flags |= 256;
	  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
	  return workInProgress.child;
	}
	var SUSPENDED_MARKER = {
	  dehydrated: null,
	  treeContext: null,
	  retryLane: 0,
	  hydrationErrors: null
	};
	function mountSuspenseOffscreenState(renderLanes) {
	  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
	}
	function getRemainingWorkInPrimaryTree(
	  current,
	  primaryTreeDidDefer,
	  renderLanes
	) {
	  current = null !== current ? current.childLanes & ~renderLanes : 0;
	  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
	  return current;
	}
	function updateSuspenseComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    showFallback = !1,
	    didSuspend = 0 !== (workInProgress.flags & 128),
	    JSCompiler_temp;
	  (JSCompiler_temp = didSuspend) ||
	    (JSCompiler_temp =
	      null !== current && null === current.memoizedState
	        ? !1
	        : 0 !== (suspenseStackCursor.current & 2));
	  JSCompiler_temp && ((showFallback = !0), (workInProgress.flags &= -129));
	  JSCompiler_temp = 0 !== (workInProgress.flags & 32);
	  workInProgress.flags &= -33;
	  if (null === current) {
	    if (isHydrating) {
	      showFallback
	        ? pushPrimaryTreeSuspenseHandler(workInProgress)
	        : reuseSuspenseHandlerOnStack(workInProgress);
	      (current = nextHydratableInstance)
	        ? ((current = canHydrateHydrationBoundary(
	            current,
	            rootOrSingletonContext
	          )),
	          (current = null !== current && "&" !== current.data ? current : null),
	          null !== current &&
	            ((workInProgress.memoizedState = {
	              dehydrated: current,
	              treeContext:
	                null !== treeContextProvider
	                  ? { id: treeContextId, overflow: treeContextOverflow }
	                  : null,
	              retryLane: 536870912,
	              hydrationErrors: null
	            }),
	            (renderLanes = createFiberFromDehydratedFragment(current)),
	            (renderLanes.return = workInProgress),
	            (workInProgress.child = renderLanes),
	            (hydrationParentFiber = workInProgress),
	            (nextHydratableInstance = null)))
	        : (current = null);
	      if (null === current) throw throwOnHydrationMismatch(workInProgress);
	      isSuspenseInstanceFallback(current)
	        ? (workInProgress.lanes = 32)
	        : (workInProgress.lanes = 536870912);
	      return null;
	    }
	    var nextPrimaryChildren = nextProps.children;
	    nextProps = nextProps.fallback;
	    if (showFallback)
	      return (
	        reuseSuspenseHandlerOnStack(workInProgress),
	        (showFallback = workInProgress.mode),
	        (nextPrimaryChildren = mountWorkInProgressOffscreenFiber(
	          { mode: "hidden", children: nextPrimaryChildren },
	          showFallback
	        )),
	        (nextProps = createFiberFromFragment(
	          nextProps,
	          showFallback,
	          renderLanes,
	          null
	        )),
	        (nextPrimaryChildren.return = workInProgress),
	        (nextProps.return = workInProgress),
	        (nextPrimaryChildren.sibling = nextProps),
	        (workInProgress.child = nextPrimaryChildren),
	        (nextProps = workInProgress.child),
	        (nextProps.memoizedState = mountSuspenseOffscreenState(renderLanes)),
	        (nextProps.childLanes = getRemainingWorkInPrimaryTree(
	          current,
	          JSCompiler_temp,
	          renderLanes
	        )),
	        (workInProgress.memoizedState = SUSPENDED_MARKER),
	        bailoutOffscreenComponent(null, nextProps)
	      );
	    pushPrimaryTreeSuspenseHandler(workInProgress);
	    return mountSuspensePrimaryChildren(workInProgress, nextPrimaryChildren);
	  }
	  var prevState = current.memoizedState;
	  if (
	    null !== prevState &&
	    ((nextPrimaryChildren = prevState.dehydrated), null !== nextPrimaryChildren)
	  ) {
	    if (didSuspend)
	      workInProgress.flags & 256
	        ? (pushPrimaryTreeSuspenseHandler(workInProgress),
	          (workInProgress.flags &= -257),
	          (workInProgress = retrySuspenseComponentWithoutHydrating(
	            current,
	            workInProgress,
	            renderLanes
	          )))
	        : null !== workInProgress.memoizedState
	          ? (reuseSuspenseHandlerOnStack(workInProgress),
	            (workInProgress.child = current.child),
	            (workInProgress.flags |= 128),
	            (workInProgress = null))
	          : (reuseSuspenseHandlerOnStack(workInProgress),
	            (nextPrimaryChildren = nextProps.fallback),
	            (showFallback = workInProgress.mode),
	            (nextProps = mountWorkInProgressOffscreenFiber(
	              { mode: "visible", children: nextProps.children },
	              showFallback
	            )),
	            (nextPrimaryChildren = createFiberFromFragment(
	              nextPrimaryChildren,
	              showFallback,
	              renderLanes,
	              null
	            )),
	            (nextPrimaryChildren.flags |= 2),
	            (nextProps.return = workInProgress),
	            (nextPrimaryChildren.return = workInProgress),
	            (nextProps.sibling = nextPrimaryChildren),
	            (workInProgress.child = nextProps),
	            reconcileChildFibers(
	              workInProgress,
	              current.child,
	              null,
	              renderLanes
	            ),
	            (nextProps = workInProgress.child),
	            (nextProps.memoizedState =
	              mountSuspenseOffscreenState(renderLanes)),
	            (nextProps.childLanes = getRemainingWorkInPrimaryTree(
	              current,
	              JSCompiler_temp,
	              renderLanes
	            )),
	            (workInProgress.memoizedState = SUSPENDED_MARKER),
	            (workInProgress = bailoutOffscreenComponent(null, nextProps)));
	    else if (
	      (pushPrimaryTreeSuspenseHandler(workInProgress),
	      isSuspenseInstanceFallback(nextPrimaryChildren))
	    ) {
	      JSCompiler_temp =
	        nextPrimaryChildren.nextSibling &&
	        nextPrimaryChildren.nextSibling.dataset;
	      if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
	      JSCompiler_temp = digest;
	      nextProps = Error(formatProdErrorMessage(419));
	      nextProps.stack = "";
	      nextProps.digest = JSCompiler_temp;
	      queueHydrationError({ value: nextProps, source: null, stack: null });
	      workInProgress = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress,
	        renderLanes
	      );
	    } else if (
	      (didReceiveUpdate ||
	        propagateParentContextChanges(current, workInProgress, renderLanes, !1),
	      (JSCompiler_temp = 0 !== (renderLanes & current.childLanes)),
	      didReceiveUpdate || JSCompiler_temp)
	    ) {
	      JSCompiler_temp = workInProgressRoot;
	      if (
	        null !== JSCompiler_temp &&
	        ((nextProps = getBumpedLaneForHydration(JSCompiler_temp, renderLanes)),
	        0 !== nextProps && nextProps !== prevState.retryLane)
	      )
	        throw (
	          ((prevState.retryLane = nextProps),
	          enqueueConcurrentRenderForLane(current, nextProps),
	          scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps),
	          SelectiveHydrationException)
	        );
	      isSuspenseInstancePending(nextPrimaryChildren) ||
	        renderDidSuspendDelayIfPossible();
	      workInProgress = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress,
	        renderLanes
	      );
	    } else
	      isSuspenseInstancePending(nextPrimaryChildren)
	        ? ((workInProgress.flags |= 192),
	          (workInProgress.child = current.child),
	          (workInProgress = null))
	        : ((current = prevState.treeContext),
	          (nextHydratableInstance = getNextHydratable(
	            nextPrimaryChildren.nextSibling
	          )),
	          (hydrationParentFiber = workInProgress),
	          (isHydrating = !0),
	          (hydrationErrors = null),
	          (rootOrSingletonContext = !1),
	          null !== current &&
	            restoreSuspendedTreeContext(workInProgress, current),
	          (workInProgress = mountSuspensePrimaryChildren(
	            workInProgress,
	            nextProps.children
	          )),
	          (workInProgress.flags |= 4096));
	    return workInProgress;
	  }
	  if (showFallback)
	    return (
	      reuseSuspenseHandlerOnStack(workInProgress),
	      (nextPrimaryChildren = nextProps.fallback),
	      (showFallback = workInProgress.mode),
	      (prevState = current.child),
	      (digest = prevState.sibling),
	      (nextProps = createWorkInProgress(prevState, {
	        mode: "hidden",
	        children: nextProps.children
	      })),
	      (nextProps.subtreeFlags = prevState.subtreeFlags & 65011712),
	      null !== digest
	        ? (nextPrimaryChildren = createWorkInProgress(
	            digest,
	            nextPrimaryChildren
	          ))
	        : ((nextPrimaryChildren = createFiberFromFragment(
	            nextPrimaryChildren,
	            showFallback,
	            renderLanes,
	            null
	          )),
	          (nextPrimaryChildren.flags |= 2)),
	      (nextPrimaryChildren.return = workInProgress),
	      (nextProps.return = workInProgress),
	      (nextProps.sibling = nextPrimaryChildren),
	      (workInProgress.child = nextProps),
	      bailoutOffscreenComponent(null, nextProps),
	      (nextProps = workInProgress.child),
	      (nextPrimaryChildren = current.child.memoizedState),
	      null === nextPrimaryChildren
	        ? (nextPrimaryChildren = mountSuspenseOffscreenState(renderLanes))
	        : ((showFallback = nextPrimaryChildren.cachePool),
	          null !== showFallback
	            ? ((prevState = CacheContext._currentValue),
	              (showFallback =
	                showFallback.parent !== prevState
	                  ? { parent: prevState, pool: prevState }
	                  : showFallback))
	            : (showFallback = getSuspendedCache()),
	          (nextPrimaryChildren = {
	            baseLanes: nextPrimaryChildren.baseLanes | renderLanes,
	            cachePool: showFallback
	          })),
	      (nextProps.memoizedState = nextPrimaryChildren),
	      (nextProps.childLanes = getRemainingWorkInPrimaryTree(
	        current,
	        JSCompiler_temp,
	        renderLanes
	      )),
	      (workInProgress.memoizedState = SUSPENDED_MARKER),
	      bailoutOffscreenComponent(current.child, nextProps)
	    );
	  pushPrimaryTreeSuspenseHandler(workInProgress);
	  renderLanes = current.child;
	  current = renderLanes.sibling;
	  renderLanes = createWorkInProgress(renderLanes, {
	    mode: "visible",
	    children: nextProps.children
	  });
	  renderLanes.return = workInProgress;
	  renderLanes.sibling = null;
	  null !== current &&
	    ((JSCompiler_temp = workInProgress.deletions),
	    null === JSCompiler_temp
	      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
	      : JSCompiler_temp.push(current));
	  workInProgress.child = renderLanes;
	  workInProgress.memoizedState = null;
	  return renderLanes;
	}
	function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
	  primaryChildren = mountWorkInProgressOffscreenFiber(
	    { mode: "visible", children: primaryChildren },
	    workInProgress.mode
	  );
	  primaryChildren.return = workInProgress;
	  return (workInProgress.child = primaryChildren);
	}
	function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
	  offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
	  offscreenProps.lanes = 0;
	  return offscreenProps;
	}
	function retrySuspenseComponentWithoutHydrating(
	  current,
	  workInProgress,
	  renderLanes
	) {
	  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
	  current = mountSuspensePrimaryChildren(
	    workInProgress,
	    workInProgress.pendingProps.children
	  );
	  current.flags |= 2;
	  workInProgress.memoizedState = null;
	  return current;
	}
	function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
	  fiber.lanes |= renderLanes;
	  var alternate = fiber.alternate;
	  null !== alternate && (alternate.lanes |= renderLanes);
	  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
	}
	function initSuspenseListRenderState(
	  workInProgress,
	  isBackwards,
	  tail,
	  lastContentRow,
	  tailMode,
	  treeForkCount
	) {
	  var renderState = workInProgress.memoizedState;
	  null === renderState
	    ? (workInProgress.memoizedState = {
	        isBackwards: isBackwards,
	        rendering: null,
	        renderingStartTime: 0,
	        last: lastContentRow,
	        tail: tail,
	        tailMode: tailMode,
	        treeForkCount: treeForkCount
	      })
	    : ((renderState.isBackwards = isBackwards),
	      (renderState.rendering = null),
	      (renderState.renderingStartTime = 0),
	      (renderState.last = lastContentRow),
	      (renderState.tail = tail),
	      (renderState.tailMode = tailMode),
	      (renderState.treeForkCount = treeForkCount));
	}
	function updateSuspenseListComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    revealOrder = nextProps.revealOrder,
	    tailMode = nextProps.tail;
	  nextProps = nextProps.children;
	  var suspenseContext = suspenseStackCursor.current,
	    shouldForceFallback = 0 !== (suspenseContext & 2);
	  shouldForceFallback
	    ? ((suspenseContext = (suspenseContext & 1) | 2),
	      (workInProgress.flags |= 128))
	    : (suspenseContext &= 1);
	  push(suspenseStackCursor, suspenseContext);
	  reconcileChildren(current, workInProgress, nextProps, renderLanes);
	  nextProps = isHydrating ? treeForkCount : 0;
	  if (!shouldForceFallback && null !== current && 0 !== (current.flags & 128))
	    a: for (current = workInProgress.child; null !== current; ) {
	      if (13 === current.tag)
	        null !== current.memoizedState &&
	          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
	      else if (19 === current.tag)
	        scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
	      else if (null !== current.child) {
	        current.child.return = current;
	        current = current.child;
	        continue;
	      }
	      if (current === workInProgress) break a;
	      for (; null === current.sibling; ) {
	        if (null === current.return || current.return === workInProgress)
	          break a;
	        current = current.return;
	      }
	      current.sibling.return = current.return;
	      current = current.sibling;
	    }
	  switch (revealOrder) {
	    case "forwards":
	      renderLanes = workInProgress.child;
	      for (revealOrder = null; null !== renderLanes; )
	        (current = renderLanes.alternate),
	          null !== current &&
	            null === findFirstSuspended(current) &&
	            (revealOrder = renderLanes),
	          (renderLanes = renderLanes.sibling);
	      renderLanes = revealOrder;
	      null === renderLanes
	        ? ((revealOrder = workInProgress.child), (workInProgress.child = null))
	        : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
	      initSuspenseListRenderState(
	        workInProgress,
	        !1,
	        revealOrder,
	        renderLanes,
	        tailMode,
	        nextProps
	      );
	      break;
	    case "backwards":
	    case "unstable_legacy-backwards":
	      renderLanes = null;
	      revealOrder = workInProgress.child;
	      for (workInProgress.child = null; null !== revealOrder; ) {
	        current = revealOrder.alternate;
	        if (null !== current && null === findFirstSuspended(current)) {
	          workInProgress.child = revealOrder;
	          break;
	        }
	        current = revealOrder.sibling;
	        revealOrder.sibling = renderLanes;
	        renderLanes = revealOrder;
	        revealOrder = current;
	      }
	      initSuspenseListRenderState(
	        workInProgress,
	        !0,
	        renderLanes,
	        null,
	        tailMode,
	        nextProps
	      );
	      break;
	    case "together":
	      initSuspenseListRenderState(
	        workInProgress,
	        !1,
	        null,
	        null,
	        void 0,
	        nextProps
	      );
	      break;
	    default:
	      workInProgress.memoizedState = null;
	  }
	  return workInProgress.child;
	}
	function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
	  null !== current && (workInProgress.dependencies = current.dependencies);
	  workInProgressRootSkippedLanes |= workInProgress.lanes;
	  if (0 === (renderLanes & workInProgress.childLanes))
	    if (null !== current) {
	      if (
	        (propagateParentContextChanges(
	          current,
	          workInProgress,
	          renderLanes,
	          !1
	        ),
	        0 === (renderLanes & workInProgress.childLanes))
	      )
	        return null;
	    } else return null;
	  if (null !== current && workInProgress.child !== current.child)
	    throw Error(formatProdErrorMessage(153));
	  if (null !== workInProgress.child) {
	    current = workInProgress.child;
	    renderLanes = createWorkInProgress(current, current.pendingProps);
	    workInProgress.child = renderLanes;
	    for (renderLanes.return = workInProgress; null !== current.sibling; )
	      (current = current.sibling),
	        (renderLanes = renderLanes.sibling =
	          createWorkInProgress(current, current.pendingProps)),
	        (renderLanes.return = workInProgress);
	    renderLanes.sibling = null;
	  }
	  return workInProgress.child;
	}
	function checkScheduledUpdateOrContext(current, renderLanes) {
	  if (0 !== (current.lanes & renderLanes)) return !0;
	  current = current.dependencies;
	  return null !== current && checkIfContextChanged(current) ? !0 : !1;
	}
	function attemptEarlyBailoutIfNoScheduledUpdate(
	  current,
	  workInProgress,
	  renderLanes
	) {
	  switch (workInProgress.tag) {
	    case 3:
	      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
	      resetHydrationState();
	      break;
	    case 27:
	    case 5:
	      pushHostContext(workInProgress);
	      break;
	    case 4:
	      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	      break;
	    case 10:
	      pushProvider(
	        workInProgress,
	        workInProgress.type,
	        workInProgress.memoizedProps.value
	      );
	      break;
	    case 31:
	      if (null !== workInProgress.memoizedState)
	        return (
	          (workInProgress.flags |= 128),
	          pushDehydratedActivitySuspenseHandler(workInProgress),
	          null
	        );
	      break;
	    case 13:
	      var state$102 = workInProgress.memoizedState;
	      if (null !== state$102) {
	        if (null !== state$102.dehydrated)
	          return (
	            pushPrimaryTreeSuspenseHandler(workInProgress),
	            (workInProgress.flags |= 128),
	            null
	          );
	        if (0 !== (renderLanes & workInProgress.child.childLanes))
	          return updateSuspenseComponent(current, workInProgress, renderLanes);
	        pushPrimaryTreeSuspenseHandler(workInProgress);
	        current = bailoutOnAlreadyFinishedWork(
	          current,
	          workInProgress,
	          renderLanes
	        );
	        return null !== current ? current.sibling : null;
	      }
	      pushPrimaryTreeSuspenseHandler(workInProgress);
	      break;
	    case 19:
	      var didSuspendBefore = 0 !== (current.flags & 128);
	      state$102 = 0 !== (renderLanes & workInProgress.childLanes);
	      state$102 ||
	        (propagateParentContextChanges(
	          current,
	          workInProgress,
	          renderLanes,
	          !1
	        ),
	        (state$102 = 0 !== (renderLanes & workInProgress.childLanes)));
	      if (didSuspendBefore) {
	        if (state$102)
	          return updateSuspenseListComponent(
	            current,
	            workInProgress,
	            renderLanes
	          );
	        workInProgress.flags |= 128;
	      }
	      didSuspendBefore = workInProgress.memoizedState;
	      null !== didSuspendBefore &&
	        ((didSuspendBefore.rendering = null),
	        (didSuspendBefore.tail = null),
	        (didSuspendBefore.lastEffect = null));
	      push(suspenseStackCursor, suspenseStackCursor.current);
	      if (state$102) break;
	      else return null;
	    case 22:
	      return (
	        (workInProgress.lanes = 0),
	        updateOffscreenComponent(
	          current,
	          workInProgress,
	          renderLanes,
	          workInProgress.pendingProps
	        )
	      );
	    case 24:
	      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
	  }
	  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	}
	function beginWork(current, workInProgress, renderLanes) {
	  if (null !== current)
	    if (current.memoizedProps !== workInProgress.pendingProps)
	      didReceiveUpdate = !0;
	    else {
	      if (
	        !checkScheduledUpdateOrContext(current, renderLanes) &&
	        0 === (workInProgress.flags & 128)
	      )
	        return (
	          (didReceiveUpdate = !1),
	          attemptEarlyBailoutIfNoScheduledUpdate(
	            current,
	            workInProgress,
	            renderLanes
	          )
	        );
	      didReceiveUpdate = 0 !== (current.flags & 131072) ? !0 : !1;
	    }
	  else
	    (didReceiveUpdate = !1),
	      isHydrating &&
	        0 !== (workInProgress.flags & 1048576) &&
	        pushTreeId(workInProgress, treeForkCount, workInProgress.index);
	  workInProgress.lanes = 0;
	  switch (workInProgress.tag) {
	    case 16:
	      a: {
	        var props = workInProgress.pendingProps;
	        current = resolveLazy(workInProgress.elementType);
	        workInProgress.type = current;
	        if ("function" === typeof current)
	          shouldConstruct(current)
	            ? ((props = resolveClassComponentProps(current, props)),
	              (workInProgress.tag = 1),
	              (workInProgress = updateClassComponent(
	                null,
	                workInProgress,
	                current,
	                props,
	                renderLanes
	              )))
	            : ((workInProgress.tag = 0),
	              (workInProgress = updateFunctionComponent(
	                null,
	                workInProgress,
	                current,
	                props,
	                renderLanes
	              )));
	        else {
	          if (void 0 !== current && null !== current) {
	            var $$typeof = current.$$typeof;
	            if ($$typeof === REACT_FORWARD_REF_TYPE) {
	              workInProgress.tag = 11;
	              workInProgress = updateForwardRef(
	                null,
	                workInProgress,
	                current,
	                props,
	                renderLanes
	              );
	              break a;
	            } else if ($$typeof === REACT_MEMO_TYPE) {
	              workInProgress.tag = 14;
	              workInProgress = updateMemoComponent(
	                null,
	                workInProgress,
	                current,
	                props,
	                renderLanes
	              );
	              break a;
	            }
	          }
	          workInProgress = getComponentNameFromType(current) || current;
	          throw Error(formatProdErrorMessage(306, workInProgress, ""));
	        }
	      }
	      return workInProgress;
	    case 0:
	      return updateFunctionComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 1:
	      return (
	        (props = workInProgress.type),
	        ($$typeof = resolveClassComponentProps(
	          props,
	          workInProgress.pendingProps
	        )),
	        updateClassComponent(
	          current,
	          workInProgress,
	          props,
	          $$typeof,
	          renderLanes
	        )
	      );
	    case 3:
	      a: {
	        pushHostContainer(
	          workInProgress,
	          workInProgress.stateNode.containerInfo
	        );
	        if (null === current) throw Error(formatProdErrorMessage(387));
	        props = workInProgress.pendingProps;
	        var prevState = workInProgress.memoizedState;
	        $$typeof = prevState.element;
	        cloneUpdateQueue(current, workInProgress);
	        processUpdateQueue(workInProgress, props, null, renderLanes);
	        var nextState = workInProgress.memoizedState;
	        props = nextState.cache;
	        pushProvider(workInProgress, CacheContext, props);
	        props !== prevState.cache &&
	          propagateContextChanges(
	            workInProgress,
	            [CacheContext],
	            renderLanes,
	            !0
	          );
	        suspendIfUpdateReadFromEntangledAsyncAction();
	        props = nextState.element;
	        if (prevState.isDehydrated)
	          if (
	            ((prevState = {
	              element: props,
	              isDehydrated: !1,
	              cache: nextState.cache
	            }),
	            (workInProgress.updateQueue.baseState = prevState),
	            (workInProgress.memoizedState = prevState),
	            workInProgress.flags & 256)
	          ) {
	            workInProgress = mountHostRootWithoutHydrating(
	              current,
	              workInProgress,
	              props,
	              renderLanes
	            );
	            break a;
	          } else if (props !== $$typeof) {
	            $$typeof = createCapturedValueAtFiber(
	              Error(formatProdErrorMessage(424)),
	              workInProgress
	            );
	            queueHydrationError($$typeof);
	            workInProgress = mountHostRootWithoutHydrating(
	              current,
	              workInProgress,
	              props,
	              renderLanes
	            );
	            break a;
	          } else {
	            current = workInProgress.stateNode.containerInfo;
	            switch (current.nodeType) {
	              case 9:
	                current = current.body;
	                break;
	              default:
	                current =
	                  "HTML" === current.nodeName
	                    ? current.ownerDocument.body
	                    : current;
	            }
	            nextHydratableInstance = getNextHydratable(current.firstChild);
	            hydrationParentFiber = workInProgress;
	            isHydrating = !0;
	            hydrationErrors = null;
	            rootOrSingletonContext = !0;
	            renderLanes = mountChildFibers(
	              workInProgress,
	              null,
	              props,
	              renderLanes
	            );
	            for (workInProgress.child = renderLanes; renderLanes; )
	              (renderLanes.flags = (renderLanes.flags & -3) | 4096),
	                (renderLanes = renderLanes.sibling);
	          }
	        else {
	          resetHydrationState();
	          if (props === $$typeof) {
	            workInProgress = bailoutOnAlreadyFinishedWork(
	              current,
	              workInProgress,
	              renderLanes
	            );
	            break a;
	          }
	          reconcileChildren(current, workInProgress, props, renderLanes);
	        }
	        workInProgress = workInProgress.child;
	      }
	      return workInProgress;
	    case 26:
	      return (
	        markRef(current, workInProgress),
	        null === current
	          ? (renderLanes = getResource(
	              workInProgress.type,
	              null,
	              workInProgress.pendingProps,
	              null
	            ))
	            ? (workInProgress.memoizedState = renderLanes)
	            : isHydrating ||
	              ((renderLanes = workInProgress.type),
	              (current = workInProgress.pendingProps),
	              (props = getOwnerDocumentFromRootContainer(
	                rootInstanceStackCursor.current
	              ).createElement(renderLanes)),
	              (props[internalInstanceKey] = workInProgress),
	              (props[internalPropsKey] = current),
	              setInitialProperties(props, renderLanes, current),
	              markNodeAsHoistable(props),
	              (workInProgress.stateNode = props))
	          : (workInProgress.memoizedState = getResource(
	              workInProgress.type,
	              current.memoizedProps,
	              workInProgress.pendingProps,
	              current.memoizedState
	            )),
	        null
	      );
	    case 27:
	      return (
	        pushHostContext(workInProgress),
	        null === current &&
	          isHydrating &&
	          ((props = workInProgress.stateNode =
	            resolveSingletonInstance(
	              workInProgress.type,
	              workInProgress.pendingProps,
	              rootInstanceStackCursor.current
	            )),
	          (hydrationParentFiber = workInProgress),
	          (rootOrSingletonContext = !0),
	          ($$typeof = nextHydratableInstance),
	          isSingletonScope(workInProgress.type)
	            ? ((previousHydratableOnEnteringScopedSingleton = $$typeof),
	              (nextHydratableInstance = getNextHydratable(props.firstChild)))
	            : (nextHydratableInstance = $$typeof)),
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        markRef(current, workInProgress),
	        null === current && (workInProgress.flags |= 4194304),
	        workInProgress.child
	      );
	    case 5:
	      if (null === current && isHydrating) {
	        if (($$typeof = props = nextHydratableInstance))
	          (props = canHydrateInstance(
	            props,
	            workInProgress.type,
	            workInProgress.pendingProps,
	            rootOrSingletonContext
	          )),
	            null !== props
	              ? ((workInProgress.stateNode = props),
	                (hydrationParentFiber = workInProgress),
	                (nextHydratableInstance = getNextHydratable(props.firstChild)),
	                (rootOrSingletonContext = !1),
	                ($$typeof = !0))
	              : ($$typeof = !1);
	        $$typeof || throwOnHydrationMismatch(workInProgress);
	      }
	      pushHostContext(workInProgress);
	      $$typeof = workInProgress.type;
	      prevState = workInProgress.pendingProps;
	      nextState = null !== current ? current.memoizedProps : null;
	      props = prevState.children;
	      shouldSetTextContent($$typeof, prevState)
	        ? (props = null)
	        : null !== nextState &&
	          shouldSetTextContent($$typeof, nextState) &&
	          (workInProgress.flags |= 32);
	      null !== workInProgress.memoizedState &&
	        (($$typeof = renderWithHooks(
	          current,
	          workInProgress,
	          TransitionAwareHostComponent,
	          null,
	          null,
	          renderLanes
	        )),
	        (HostTransitionContext._currentValue = $$typeof));
	      markRef(current, workInProgress);
	      reconcileChildren(current, workInProgress, props, renderLanes);
	      return workInProgress.child;
	    case 6:
	      if (null === current && isHydrating) {
	        if ((current = renderLanes = nextHydratableInstance))
	          (renderLanes = canHydrateTextInstance(
	            renderLanes,
	            workInProgress.pendingProps,
	            rootOrSingletonContext
	          )),
	            null !== renderLanes
	              ? ((workInProgress.stateNode = renderLanes),
	                (hydrationParentFiber = workInProgress),
	                (nextHydratableInstance = null),
	                (current = !0))
	              : (current = !1);
	        current || throwOnHydrationMismatch(workInProgress);
	      }
	      return null;
	    case 13:
	      return updateSuspenseComponent(current, workInProgress, renderLanes);
	    case 4:
	      return (
	        pushHostContainer(
	          workInProgress,
	          workInProgress.stateNode.containerInfo
	        ),
	        (props = workInProgress.pendingProps),
	        null === current
	          ? (workInProgress.child = reconcileChildFibers(
	              workInProgress,
	              null,
	              props,
	              renderLanes
	            ))
	          : reconcileChildren(current, workInProgress, props, renderLanes),
	        workInProgress.child
	      );
	    case 11:
	      return updateForwardRef(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 7:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 8:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 12:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 10:
	      return (
	        (props = workInProgress.pendingProps),
	        pushProvider(workInProgress, workInProgress.type, props.value),
	        reconcileChildren(current, workInProgress, props.children, renderLanes),
	        workInProgress.child
	      );
	    case 9:
	      return (
	        ($$typeof = workInProgress.type._context),
	        (props = workInProgress.pendingProps.children),
	        prepareToReadContext(workInProgress),
	        ($$typeof = readContext($$typeof)),
	        (props = props($$typeof)),
	        (workInProgress.flags |= 1),
	        reconcileChildren(current, workInProgress, props, renderLanes),
	        workInProgress.child
	      );
	    case 14:
	      return updateMemoComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 15:
	      return updateSimpleMemoComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 19:
	      return updateSuspenseListComponent(current, workInProgress, renderLanes);
	    case 31:
	      return updateActivityComponent(current, workInProgress, renderLanes);
	    case 22:
	      return updateOffscreenComponent(
	        current,
	        workInProgress,
	        renderLanes,
	        workInProgress.pendingProps
	      );
	    case 24:
	      return (
	        prepareToReadContext(workInProgress),
	        (props = readContext(CacheContext)),
	        null === current
	          ? (($$typeof = peekCacheFromPool()),
	            null === $$typeof &&
	              (($$typeof = workInProgressRoot),
	              (prevState = createCache()),
	              ($$typeof.pooledCache = prevState),
	              prevState.refCount++,
	              null !== prevState && ($$typeof.pooledCacheLanes |= renderLanes),
	              ($$typeof = prevState)),
	            (workInProgress.memoizedState = { parent: props, cache: $$typeof }),
	            initializeUpdateQueue(workInProgress),
	            pushProvider(workInProgress, CacheContext, $$typeof))
	          : (0 !== (current.lanes & renderLanes) &&
	              (cloneUpdateQueue(current, workInProgress),
	              processUpdateQueue(workInProgress, null, null, renderLanes),
	              suspendIfUpdateReadFromEntangledAsyncAction()),
	            ($$typeof = current.memoizedState),
	            (prevState = workInProgress.memoizedState),
	            $$typeof.parent !== props
	              ? (($$typeof = { parent: props, cache: props }),
	                (workInProgress.memoizedState = $$typeof),
	                0 === workInProgress.lanes &&
	                  (workInProgress.memoizedState =
	                    workInProgress.updateQueue.baseState =
	                      $$typeof),
	                pushProvider(workInProgress, CacheContext, props))
	              : ((props = prevState.cache),
	                pushProvider(workInProgress, CacheContext, props),
	                props !== $$typeof.cache &&
	                  propagateContextChanges(
	                    workInProgress,
	                    [CacheContext],
	                    renderLanes,
	                    !0
	                  ))),
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 29:
	      throw workInProgress.pendingProps;
	  }
	  throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function markUpdate(workInProgress) {
	  workInProgress.flags |= 4;
	}
	function preloadInstanceAndSuspendIfNeeded(
	  workInProgress,
	  type,
	  oldProps,
	  newProps,
	  renderLanes
	) {
	  if ((type = 0 !== (workInProgress.mode & 32))) type = !1;
	  if (type) {
	    if (
	      ((workInProgress.flags |= 16777216),
	      (renderLanes & 335544128) === renderLanes)
	    )
	      if (workInProgress.stateNode.complete) workInProgress.flags |= 8192;
	      else if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
	      else
	        throw (
	          ((suspendedThenable = noopSuspenseyCommitThenable),
	          SuspenseyCommitException)
	        );
	  } else workInProgress.flags &= -16777217;
	}
	function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
	  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
	    workInProgress.flags &= -16777217;
	  else if (((workInProgress.flags |= 16777216), !preloadResource(resource)))
	    if (shouldRemainOnPreviousScreen()) workInProgress.flags |= 8192;
	    else
	      throw (
	        ((suspendedThenable = noopSuspenseyCommitThenable),
	        SuspenseyCommitException)
	      );
	}
	function scheduleRetryEffect(workInProgress, retryQueue) {
	  null !== retryQueue && (workInProgress.flags |= 4);
	  workInProgress.flags & 16384 &&
	    ((retryQueue =
	      22 !== workInProgress.tag ? claimNextRetryLane() : 536870912),
	    (workInProgress.lanes |= retryQueue),
	    (workInProgressSuspendedRetryLanes |= retryQueue));
	}
	function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
	  if (!isHydrating)
	    switch (renderState.tailMode) {
	      case "hidden":
	        hasRenderedATailFallback = renderState.tail;
	        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
	          null !== hasRenderedATailFallback.alternate &&
	            (lastTailNode = hasRenderedATailFallback),
	            (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
	        null === lastTailNode
	          ? (renderState.tail = null)
	          : (lastTailNode.sibling = null);
	        break;
	      case "collapsed":
	        lastTailNode = renderState.tail;
	        for (var lastTailNode$106 = null; null !== lastTailNode; )
	          null !== lastTailNode.alternate && (lastTailNode$106 = lastTailNode),
	            (lastTailNode = lastTailNode.sibling);
	        null === lastTailNode$106
	          ? hasRenderedATailFallback || null === renderState.tail
	            ? (renderState.tail = null)
	            : (renderState.tail.sibling = null)
	          : (lastTailNode$106.sibling = null);
	    }
	}
	function bubbleProperties(completedWork) {
	  var didBailout =
	      null !== completedWork.alternate &&
	      completedWork.alternate.child === completedWork.child,
	    newChildLanes = 0,
	    subtreeFlags = 0;
	  if (didBailout)
	    for (var child$107 = completedWork.child; null !== child$107; )
	      (newChildLanes |= child$107.lanes | child$107.childLanes),
	        (subtreeFlags |= child$107.subtreeFlags & 65011712),
	        (subtreeFlags |= child$107.flags & 65011712),
	        (child$107.return = completedWork),
	        (child$107 = child$107.sibling);
	  else
	    for (child$107 = completedWork.child; null !== child$107; )
	      (newChildLanes |= child$107.lanes | child$107.childLanes),
	        (subtreeFlags |= child$107.subtreeFlags),
	        (subtreeFlags |= child$107.flags),
	        (child$107.return = completedWork),
	        (child$107 = child$107.sibling);
	  completedWork.subtreeFlags |= subtreeFlags;
	  completedWork.childLanes = newChildLanes;
	  return didBailout;
	}
	function completeWork(current, workInProgress, renderLanes) {
	  var newProps = workInProgress.pendingProps;
	  popTreeContext(workInProgress);
	  switch (workInProgress.tag) {
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return bubbleProperties(workInProgress), null;
	    case 1:
	      return bubbleProperties(workInProgress), null;
	    case 3:
	      renderLanes = workInProgress.stateNode;
	      newProps = null;
	      null !== current && (newProps = current.memoizedState.cache);
	      workInProgress.memoizedState.cache !== newProps &&
	        (workInProgress.flags |= 2048);
	      popProvider(CacheContext);
	      popHostContainer();
	      renderLanes.pendingContext &&
	        ((renderLanes.context = renderLanes.pendingContext),
	        (renderLanes.pendingContext = null));
	      if (null === current || null === current.child)
	        popHydrationState(workInProgress)
	          ? markUpdate(workInProgress)
	          : null === current ||
	            (current.memoizedState.isDehydrated &&
	              0 === (workInProgress.flags & 256)) ||
	            ((workInProgress.flags |= 1024),
	            upgradeHydrationErrorsToRecoverable());
	      bubbleProperties(workInProgress);
	      return null;
	    case 26:
	      var type = workInProgress.type,
	        nextResource = workInProgress.memoizedState;
	      null === current
	        ? (markUpdate(workInProgress),
	          null !== nextResource
	            ? (bubbleProperties(workInProgress),
	              preloadResourceAndSuspendIfNeeded(workInProgress, nextResource))
	            : (bubbleProperties(workInProgress),
	              preloadInstanceAndSuspendIfNeeded(
	                workInProgress,
	                type,
	                null,
	                newProps,
	                renderLanes
	              )))
	        : nextResource
	          ? nextResource !== current.memoizedState
	            ? (markUpdate(workInProgress),
	              bubbleProperties(workInProgress),
	              preloadResourceAndSuspendIfNeeded(workInProgress, nextResource))
	            : (bubbleProperties(workInProgress),
	              (workInProgress.flags &= -16777217))
	          : ((current = current.memoizedProps),
	            current !== newProps && markUpdate(workInProgress),
	            bubbleProperties(workInProgress),
	            preloadInstanceAndSuspendIfNeeded(
	              workInProgress,
	              type,
	              current,
	              newProps,
	              renderLanes
	            ));
	      return null;
	    case 27:
	      popHostContext(workInProgress);
	      renderLanes = rootInstanceStackCursor.current;
	      type = workInProgress.type;
	      if (null !== current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if (!newProps) {
	          if (null === workInProgress.stateNode)
	            throw Error(formatProdErrorMessage(166));
	          bubbleProperties(workInProgress);
	          return null;
	        }
	        current = contextStackCursor.current;
	        popHydrationState(workInProgress)
	          ? prepareToHydrateHostInstance(workInProgress, current)
	          : ((current = resolveSingletonInstance(type, newProps, renderLanes)),
	            (workInProgress.stateNode = current),
	            markUpdate(workInProgress));
	      }
	      bubbleProperties(workInProgress);
	      return null;
	    case 5:
	      popHostContext(workInProgress);
	      type = workInProgress.type;
	      if (null !== current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if (!newProps) {
	          if (null === workInProgress.stateNode)
	            throw Error(formatProdErrorMessage(166));
	          bubbleProperties(workInProgress);
	          return null;
	        }
	        nextResource = contextStackCursor.current;
	        if (popHydrationState(workInProgress))
	          prepareToHydrateHostInstance(workInProgress, nextResource);
	        else {
	          var ownerDocument = getOwnerDocumentFromRootContainer(
	            rootInstanceStackCursor.current
	          );
	          switch (nextResource) {
	            case 1:
	              nextResource = ownerDocument.createElementNS(
	                "http://www.w3.org/2000/svg",
	                type
	              );
	              break;
	            case 2:
	              nextResource = ownerDocument.createElementNS(
	                "http://www.w3.org/1998/Math/MathML",
	                type
	              );
	              break;
	            default:
	              switch (type) {
	                case "svg":
	                  nextResource = ownerDocument.createElementNS(
	                    "http://www.w3.org/2000/svg",
	                    type
	                  );
	                  break;
	                case "math":
	                  nextResource = ownerDocument.createElementNS(
	                    "http://www.w3.org/1998/Math/MathML",
	                    type
	                  );
	                  break;
	                case "script":
	                  nextResource = ownerDocument.createElement("div");
	                  nextResource.innerHTML = "<script>\x3c/script>";
	                  nextResource = nextResource.removeChild(
	                    nextResource.firstChild
	                  );
	                  break;
	                case "select":
	                  nextResource =
	                    "string" === typeof newProps.is
	                      ? ownerDocument.createElement("select", {
	                          is: newProps.is
	                        })
	                      : ownerDocument.createElement("select");
	                  newProps.multiple
	                    ? (nextResource.multiple = !0)
	                    : newProps.size && (nextResource.size = newProps.size);
	                  break;
	                default:
	                  nextResource =
	                    "string" === typeof newProps.is
	                      ? ownerDocument.createElement(type, { is: newProps.is })
	                      : ownerDocument.createElement(type);
	              }
	          }
	          nextResource[internalInstanceKey] = workInProgress;
	          nextResource[internalPropsKey] = newProps;
	          a: for (
	            ownerDocument = workInProgress.child;
	            null !== ownerDocument;

	          ) {
	            if (5 === ownerDocument.tag || 6 === ownerDocument.tag)
	              nextResource.appendChild(ownerDocument.stateNode);
	            else if (
	              4 !== ownerDocument.tag &&
	              27 !== ownerDocument.tag &&
	              null !== ownerDocument.child
	            ) {
	              ownerDocument.child.return = ownerDocument;
	              ownerDocument = ownerDocument.child;
	              continue;
	            }
	            if (ownerDocument === workInProgress) break a;
	            for (; null === ownerDocument.sibling; ) {
	              if (
	                null === ownerDocument.return ||
	                ownerDocument.return === workInProgress
	              )
	                break a;
	              ownerDocument = ownerDocument.return;
	            }
	            ownerDocument.sibling.return = ownerDocument.return;
	            ownerDocument = ownerDocument.sibling;
	          }
	          workInProgress.stateNode = nextResource;
	          a: switch (
	            (setInitialProperties(nextResource, type, newProps), type)
	          ) {
	            case "button":
	            case "input":
	            case "select":
	            case "textarea":
	              newProps = !!newProps.autoFocus;
	              break a;
	            case "img":
	              newProps = !0;
	              break a;
	            default:
	              newProps = !1;
	          }
	          newProps && markUpdate(workInProgress);
	        }
	      }
	      bubbleProperties(workInProgress);
	      preloadInstanceAndSuspendIfNeeded(
	        workInProgress,
	        workInProgress.type,
	        null === current ? null : current.memoizedProps,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	      return null;
	    case 6:
	      if (current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if ("string" !== typeof newProps && null === workInProgress.stateNode)
	          throw Error(formatProdErrorMessage(166));
	        current = rootInstanceStackCursor.current;
	        if (popHydrationState(workInProgress)) {
	          current = workInProgress.stateNode;
	          renderLanes = workInProgress.memoizedProps;
	          newProps = null;
	          type = hydrationParentFiber;
	          if (null !== type)
	            switch (type.tag) {
	              case 27:
	              case 5:
	                newProps = type.memoizedProps;
	            }
	          current[internalInstanceKey] = workInProgress;
	          current =
	            current.nodeValue === renderLanes ||
	            (null !== newProps && !0 === newProps.suppressHydrationWarning) ||
	            checkForUnmatchedText(current.nodeValue, renderLanes)
	              ? !0
	              : !1;
	          current || throwOnHydrationMismatch(workInProgress, !0);
	        } else
	          (current =
	            getOwnerDocumentFromRootContainer(current).createTextNode(
	              newProps
	            )),
	            (current[internalInstanceKey] = workInProgress),
	            (workInProgress.stateNode = current);
	      }
	      bubbleProperties(workInProgress);
	      return null;
	    case 31:
	      renderLanes = workInProgress.memoizedState;
	      if (null === current || null !== current.memoizedState) {
	        newProps = popHydrationState(workInProgress);
	        if (null !== renderLanes) {
	          if (null === current) {
	            if (!newProps) throw Error(formatProdErrorMessage(318));
	            current = workInProgress.memoizedState;
	            current = null !== current ? current.dehydrated : null;
	            if (!current) throw Error(formatProdErrorMessage(557));
	            current[internalInstanceKey] = workInProgress;
	          } else
	            resetHydrationState(),
	              0 === (workInProgress.flags & 128) &&
	                (workInProgress.memoizedState = null),
	              (workInProgress.flags |= 4);
	          bubbleProperties(workInProgress);
	          current = !1;
	        } else
	          (renderLanes = upgradeHydrationErrorsToRecoverable()),
	            null !== current &&
	              null !== current.memoizedState &&
	              (current.memoizedState.hydrationErrors = renderLanes),
	            (current = !0);
	        if (!current) {
	          if (workInProgress.flags & 256)
	            return popSuspenseHandler(workInProgress), workInProgress;
	          popSuspenseHandler(workInProgress);
	          return null;
	        }
	        if (0 !== (workInProgress.flags & 128))
	          throw Error(formatProdErrorMessage(558));
	      }
	      bubbleProperties(workInProgress);
	      return null;
	    case 13:
	      newProps = workInProgress.memoizedState;
	      if (
	        null === current ||
	        (null !== current.memoizedState &&
	          null !== current.memoizedState.dehydrated)
	      ) {
	        type = popHydrationState(workInProgress);
	        if (null !== newProps && null !== newProps.dehydrated) {
	          if (null === current) {
	            if (!type) throw Error(formatProdErrorMessage(318));
	            type = workInProgress.memoizedState;
	            type = null !== type ? type.dehydrated : null;
	            if (!type) throw Error(formatProdErrorMessage(317));
	            type[internalInstanceKey] = workInProgress;
	          } else
	            resetHydrationState(),
	              0 === (workInProgress.flags & 128) &&
	                (workInProgress.memoizedState = null),
	              (workInProgress.flags |= 4);
	          bubbleProperties(workInProgress);
	          type = !1;
	        } else
	          (type = upgradeHydrationErrorsToRecoverable()),
	            null !== current &&
	              null !== current.memoizedState &&
	              (current.memoizedState.hydrationErrors = type),
	            (type = !0);
	        if (!type) {
	          if (workInProgress.flags & 256)
	            return popSuspenseHandler(workInProgress), workInProgress;
	          popSuspenseHandler(workInProgress);
	          return null;
	        }
	      }
	      popSuspenseHandler(workInProgress);
	      if (0 !== (workInProgress.flags & 128))
	        return (workInProgress.lanes = renderLanes), workInProgress;
	      renderLanes = null !== newProps;
	      current = null !== current && null !== current.memoizedState;
	      renderLanes &&
	        ((newProps = workInProgress.child),
	        (type = null),
	        null !== newProps.alternate &&
	          null !== newProps.alternate.memoizedState &&
	          null !== newProps.alternate.memoizedState.cachePool &&
	          (type = newProps.alternate.memoizedState.cachePool.pool),
	        (nextResource = null),
	        null !== newProps.memoizedState &&
	          null !== newProps.memoizedState.cachePool &&
	          (nextResource = newProps.memoizedState.cachePool.pool),
	        nextResource !== type && (newProps.flags |= 2048));
	      renderLanes !== current &&
	        renderLanes &&
	        (workInProgress.child.flags |= 8192);
	      scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
	      bubbleProperties(workInProgress);
	      return null;
	    case 4:
	      return (
	        popHostContainer(),
	        null === current &&
	          listenToAllSupportedEvents(workInProgress.stateNode.containerInfo),
	        bubbleProperties(workInProgress),
	        null
	      );
	    case 10:
	      return (
	        popProvider(workInProgress.type), bubbleProperties(workInProgress), null
	      );
	    case 19:
	      pop(suspenseStackCursor);
	      newProps = workInProgress.memoizedState;
	      if (null === newProps) return bubbleProperties(workInProgress), null;
	      type = 0 !== (workInProgress.flags & 128);
	      nextResource = newProps.rendering;
	      if (null === nextResource)
	        if (type) cutOffTailIfNeeded(newProps, !1);
	        else {
	          if (
	            0 !== workInProgressRootExitStatus ||
	            (null !== current && 0 !== (current.flags & 128))
	          )
	            for (current = workInProgress.child; null !== current; ) {
	              nextResource = findFirstSuspended(current);
	              if (null !== nextResource) {
	                workInProgress.flags |= 128;
	                cutOffTailIfNeeded(newProps, !1);
	                current = nextResource.updateQueue;
	                workInProgress.updateQueue = current;
	                scheduleRetryEffect(workInProgress, current);
	                workInProgress.subtreeFlags = 0;
	                current = renderLanes;
	                for (renderLanes = workInProgress.child; null !== renderLanes; )
	                  resetWorkInProgress(renderLanes, current),
	                    (renderLanes = renderLanes.sibling);
	                push(
	                  suspenseStackCursor,
	                  (suspenseStackCursor.current & 1) | 2
	                );
	                isHydrating &&
	                  pushTreeFork(workInProgress, newProps.treeForkCount);
	                return workInProgress.child;
	              }
	              current = current.sibling;
	            }
	          null !== newProps.tail &&
	            now() > workInProgressRootRenderTargetTime &&
	            ((workInProgress.flags |= 128),
	            (type = !0),
	            cutOffTailIfNeeded(newProps, !1),
	            (workInProgress.lanes = 4194304));
	        }
	      else {
	        if (!type)
	          if (
	            ((current = findFirstSuspended(nextResource)), null !== current)
	          ) {
	            if (
	              ((workInProgress.flags |= 128),
	              (type = !0),
	              (current = current.updateQueue),
	              (workInProgress.updateQueue = current),
	              scheduleRetryEffect(workInProgress, current),
	              cutOffTailIfNeeded(newProps, !0),
	              null === newProps.tail &&
	                "hidden" === newProps.tailMode &&
	                !nextResource.alternate &&
	                !isHydrating)
	            )
	              return bubbleProperties(workInProgress), null;
	          } else
	            2 * now() - newProps.renderingStartTime >
	              workInProgressRootRenderTargetTime &&
	              536870912 !== renderLanes &&
	              ((workInProgress.flags |= 128),
	              (type = !0),
	              cutOffTailIfNeeded(newProps, !1),
	              (workInProgress.lanes = 4194304));
	        newProps.isBackwards
	          ? ((nextResource.sibling = workInProgress.child),
	            (workInProgress.child = nextResource))
	          : ((current = newProps.last),
	            null !== current
	              ? (current.sibling = nextResource)
	              : (workInProgress.child = nextResource),
	            (newProps.last = nextResource));
	      }
	      if (null !== newProps.tail)
	        return (
	          (current = newProps.tail),
	          (newProps.rendering = current),
	          (newProps.tail = current.sibling),
	          (newProps.renderingStartTime = now()),
	          (current.sibling = null),
	          (renderLanes = suspenseStackCursor.current),
	          push(
	            suspenseStackCursor,
	            type ? (renderLanes & 1) | 2 : renderLanes & 1
	          ),
	          isHydrating && pushTreeFork(workInProgress, newProps.treeForkCount),
	          current
	        );
	      bubbleProperties(workInProgress);
	      return null;
	    case 22:
	    case 23:
	      return (
	        popSuspenseHandler(workInProgress),
	        popHiddenContext(),
	        (newProps = null !== workInProgress.memoizedState),
	        null !== current
	          ? (null !== current.memoizedState) !== newProps &&
	            (workInProgress.flags |= 8192)
	          : newProps && (workInProgress.flags |= 8192),
	        newProps
	          ? 0 !== (renderLanes & 536870912) &&
	            0 === (workInProgress.flags & 128) &&
	            (bubbleProperties(workInProgress),
	            workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192))
	          : bubbleProperties(workInProgress),
	        (renderLanes = workInProgress.updateQueue),
	        null !== renderLanes &&
	          scheduleRetryEffect(workInProgress, renderLanes.retryQueue),
	        (renderLanes = null),
	        null !== current &&
	          null !== current.memoizedState &&
	          null !== current.memoizedState.cachePool &&
	          (renderLanes = current.memoizedState.cachePool.pool),
	        (newProps = null),
	        null !== workInProgress.memoizedState &&
	          null !== workInProgress.memoizedState.cachePool &&
	          (newProps = workInProgress.memoizedState.cachePool.pool),
	        newProps !== renderLanes && (workInProgress.flags |= 2048),
	        null !== current && pop(resumedCache),
	        null
	      );
	    case 24:
	      return (
	        (renderLanes = null),
	        null !== current && (renderLanes = current.memoizedState.cache),
	        workInProgress.memoizedState.cache !== renderLanes &&
	          (workInProgress.flags |= 2048),
	        popProvider(CacheContext),
	        bubbleProperties(workInProgress),
	        null
	      );
	    case 25:
	      return null;
	    case 30:
	      return null;
	  }
	  throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function unwindWork(current, workInProgress) {
	  popTreeContext(workInProgress);
	  switch (workInProgress.tag) {
	    case 1:
	      return (
	        (current = workInProgress.flags),
	        current & 65536
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 3:
	      return (
	        popProvider(CacheContext),
	        popHostContainer(),
	        (current = workInProgress.flags),
	        0 !== (current & 65536) && 0 === (current & 128)
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 26:
	    case 27:
	    case 5:
	      return popHostContext(workInProgress), null;
	    case 31:
	      if (null !== workInProgress.memoizedState) {
	        popSuspenseHandler(workInProgress);
	        if (null === workInProgress.alternate)
	          throw Error(formatProdErrorMessage(340));
	        resetHydrationState();
	      }
	      current = workInProgress.flags;
	      return current & 65536
	        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	        : null;
	    case 13:
	      popSuspenseHandler(workInProgress);
	      current = workInProgress.memoizedState;
	      if (null !== current && null !== current.dehydrated) {
	        if (null === workInProgress.alternate)
	          throw Error(formatProdErrorMessage(340));
	        resetHydrationState();
	      }
	      current = workInProgress.flags;
	      return current & 65536
	        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	        : null;
	    case 19:
	      return pop(suspenseStackCursor), null;
	    case 4:
	      return popHostContainer(), null;
	    case 10:
	      return popProvider(workInProgress.type), null;
	    case 22:
	    case 23:
	      return (
	        popSuspenseHandler(workInProgress),
	        popHiddenContext(),
	        null !== current && pop(resumedCache),
	        (current = workInProgress.flags),
	        current & 65536
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 24:
	      return popProvider(CacheContext), null;
	    case 25:
	      return null;
	    default:
	      return null;
	  }
	}
	function unwindInterruptedWork(current, interruptedWork) {
	  popTreeContext(interruptedWork);
	  switch (interruptedWork.tag) {
	    case 3:
	      popProvider(CacheContext);
	      popHostContainer();
	      break;
	    case 26:
	    case 27:
	    case 5:
	      popHostContext(interruptedWork);
	      break;
	    case 4:
	      popHostContainer();
	      break;
	    case 31:
	      null !== interruptedWork.memoizedState &&
	        popSuspenseHandler(interruptedWork);
	      break;
	    case 13:
	      popSuspenseHandler(interruptedWork);
	      break;
	    case 19:
	      pop(suspenseStackCursor);
	      break;
	    case 10:
	      popProvider(interruptedWork.type);
	      break;
	    case 22:
	    case 23:
	      popSuspenseHandler(interruptedWork);
	      popHiddenContext();
	      null !== current && pop(resumedCache);
	      break;
	    case 24:
	      popProvider(CacheContext);
	  }
	}
	function commitHookEffectListMount(flags, finishedWork) {
	  try {
	    var updateQueue = finishedWork.updateQueue,
	      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
	    if (null !== lastEffect) {
	      var firstEffect = lastEffect.next;
	      updateQueue = firstEffect;
	      do {
	        if ((updateQueue.tag & flags) === flags) {
	          lastEffect = void 0;
	          var create = updateQueue.create,
	            inst = updateQueue.inst;
	          lastEffect = create();
	          inst.destroy = lastEffect;
	        }
	        updateQueue = updateQueue.next;
	      } while (updateQueue !== firstEffect);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitHookEffectListUnmount(
	  flags,
	  finishedWork,
	  nearestMountedAncestor$jscomp$0
	) {
	  try {
	    var updateQueue = finishedWork.updateQueue,
	      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
	    if (null !== lastEffect) {
	      var firstEffect = lastEffect.next;
	      updateQueue = firstEffect;
	      do {
	        if ((updateQueue.tag & flags) === flags) {
	          var inst = updateQueue.inst,
	            destroy = inst.destroy;
	          if (void 0 !== destroy) {
	            inst.destroy = void 0;
	            lastEffect = finishedWork;
	            var nearestMountedAncestor = nearestMountedAncestor$jscomp$0,
	              destroy_ = destroy;
	            try {
	              destroy_();
	            } catch (error) {
	              captureCommitPhaseError(
	                lastEffect,
	                nearestMountedAncestor,
	                error
	              );
	            }
	          }
	        }
	        updateQueue = updateQueue.next;
	      } while (updateQueue !== firstEffect);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitClassCallbacks(finishedWork) {
	  var updateQueue = finishedWork.updateQueue;
	  if (null !== updateQueue) {
	    var instance = finishedWork.stateNode;
	    try {
	      commitCallbacks(updateQueue, instance);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	  }
	}
	function safelyCallComponentWillUnmount(
	  current,
	  nearestMountedAncestor,
	  instance
	) {
	  instance.props = resolveClassComponentProps(
	    current.type,
	    current.memoizedProps
	  );
	  instance.state = current.memoizedState;
	  try {
	    instance.componentWillUnmount();
	  } catch (error) {
	    captureCommitPhaseError(current, nearestMountedAncestor, error);
	  }
	}
	function safelyAttachRef(current, nearestMountedAncestor) {
	  try {
	    var ref = current.ref;
	    if (null !== ref) {
	      switch (current.tag) {
	        case 26:
	        case 27:
	        case 5:
	          var instanceToUse = current.stateNode;
	          break;
	        case 30:
	          instanceToUse = current.stateNode;
	          break;
	        default:
	          instanceToUse = current.stateNode;
	      }
	      "function" === typeof ref
	        ? (current.refCleanup = ref(instanceToUse))
	        : (ref.current = instanceToUse);
	    }
	  } catch (error) {
	    captureCommitPhaseError(current, nearestMountedAncestor, error);
	  }
	}
	function safelyDetachRef(current, nearestMountedAncestor) {
	  var ref = current.ref,
	    refCleanup = current.refCleanup;
	  if (null !== ref)
	    if ("function" === typeof refCleanup)
	      try {
	        refCleanup();
	      } catch (error) {
	        captureCommitPhaseError(current, nearestMountedAncestor, error);
	      } finally {
	        (current.refCleanup = null),
	          (current = current.alternate),
	          null != current && (current.refCleanup = null);
	      }
	    else if ("function" === typeof ref)
	      try {
	        ref(null);
	      } catch (error$140) {
	        captureCommitPhaseError(current, nearestMountedAncestor, error$140);
	      }
	    else ref.current = null;
	}
	function commitHostMount(finishedWork) {
	  var type = finishedWork.type,
	    props = finishedWork.memoizedProps,
	    instance = finishedWork.stateNode;
	  try {
	    a: switch (type) {
	      case "button":
	      case "input":
	      case "select":
	      case "textarea":
	        props.autoFocus && instance.focus();
	        break a;
	      case "img":
	        props.src
	          ? (instance.src = props.src)
	          : props.srcSet && (instance.srcset = props.srcSet);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitHostUpdate(finishedWork, newProps, oldProps) {
	  try {
	    var domElement = finishedWork.stateNode;
	    updateProperties(domElement, finishedWork.type, oldProps, newProps);
	    domElement[internalPropsKey] = newProps;
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function isHostParent(fiber) {
	  return (
	    5 === fiber.tag ||
	    3 === fiber.tag ||
	    26 === fiber.tag ||
	    (27 === fiber.tag && isSingletonScope(fiber.type)) ||
	    4 === fiber.tag
	  );
	}
	function getHostSibling(fiber) {
	  a: for (;;) {
	    for (; null === fiber.sibling; ) {
	      if (null === fiber.return || isHostParent(fiber.return)) return null;
	      fiber = fiber.return;
	    }
	    fiber.sibling.return = fiber.return;
	    for (
	      fiber = fiber.sibling;
	      5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;

	    ) {
	      if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
	      if (fiber.flags & 2) continue a;
	      if (null === fiber.child || 4 === fiber.tag) continue a;
	      else (fiber.child.return = fiber), (fiber = fiber.child);
	    }
	    if (!(fiber.flags & 2)) return fiber.stateNode;
	  }
	}
	function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
	  var tag = node.tag;
	  if (5 === tag || 6 === tag)
	    (node = node.stateNode),
	      before
	        ? (9 === parent.nodeType
	            ? parent.body
	            : "HTML" === parent.nodeName
	              ? parent.ownerDocument.body
	              : parent
	          ).insertBefore(node, before)
	        : ((before =
	            9 === parent.nodeType
	              ? parent.body
	              : "HTML" === parent.nodeName
	                ? parent.ownerDocument.body
	                : parent),
	          before.appendChild(node),
	          (parent = parent._reactRootContainer),
	          (null !== parent && void 0 !== parent) ||
	            null !== before.onclick ||
	            (before.onclick = noop$1));
	  else if (
	    4 !== tag &&
	    (27 === tag &&
	      isSingletonScope(node.type) &&
	      ((parent = node.stateNode), (before = null)),
	    (node = node.child),
	    null !== node)
	  )
	    for (
	      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
	        node = node.sibling;
	      null !== node;

	    )
	      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
	        (node = node.sibling);
	}
	function insertOrAppendPlacementNode(node, before, parent) {
	  var tag = node.tag;
	  if (5 === tag || 6 === tag)
	    (node = node.stateNode),
	      before ? parent.insertBefore(node, before) : parent.appendChild(node);
	  else if (
	    4 !== tag &&
	    (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode),
	    (node = node.child),
	    null !== node)
	  )
	    for (
	      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
	      null !== node;

	    )
	      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
	}
	function commitHostSingletonAcquisition(finishedWork) {
	  var singleton = finishedWork.stateNode,
	    props = finishedWork.memoizedProps;
	  try {
	    for (
	      var type = finishedWork.type, attributes = singleton.attributes;
	      attributes.length;

	    )
	      singleton.removeAttributeNode(attributes[0]);
	    setInitialProperties(singleton, type, props);
	    singleton[internalInstanceKey] = finishedWork;
	    singleton[internalPropsKey] = props;
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	var offscreenSubtreeIsHidden = !1,
	  offscreenSubtreeWasHidden = !1,
	  needsFormReset = !1,
	  PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
	  nextEffect = null;
	function commitBeforeMutationEffects(root, firstChild) {
	  root = root.containerInfo;
	  eventsEnabled = _enabled;
	  root = getActiveElementDeep(root);
	  if (hasSelectionCapabilities(root)) {
	    if ("selectionStart" in root)
	      var JSCompiler_temp = {
	        start: root.selectionStart,
	        end: root.selectionEnd
	      };
	    else
	      a: {
	        JSCompiler_temp =
	          ((JSCompiler_temp = root.ownerDocument) &&
	            JSCompiler_temp.defaultView) ||
	          window;
	        var selection =
	          JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
	        if (selection && 0 !== selection.rangeCount) {
	          JSCompiler_temp = selection.anchorNode;
	          var anchorOffset = selection.anchorOffset,
	            focusNode = selection.focusNode;
	          selection = selection.focusOffset;
	          try {
	            JSCompiler_temp.nodeType, focusNode.nodeType;
	          } catch (e$20) {
	            JSCompiler_temp = null;
	            break a;
	          }
	          var length = 0,
	            start = -1,
	            end = -1,
	            indexWithinAnchor = 0,
	            indexWithinFocus = 0,
	            node = root,
	            parentNode = null;
	          b: for (;;) {
	            for (var next; ; ) {
	              node !== JSCompiler_temp ||
	                (0 !== anchorOffset && 3 !== node.nodeType) ||
	                (start = length + anchorOffset);
	              node !== focusNode ||
	                (0 !== selection && 3 !== node.nodeType) ||
	                (end = length + selection);
	              3 === node.nodeType && (length += node.nodeValue.length);
	              if (null === (next = node.firstChild)) break;
	              parentNode = node;
	              node = next;
	            }
	            for (;;) {
	              if (node === root) break b;
	              parentNode === JSCompiler_temp &&
	                ++indexWithinAnchor === anchorOffset &&
	                (start = length);
	              parentNode === focusNode &&
	                ++indexWithinFocus === selection &&
	                (end = length);
	              if (null !== (next = node.nextSibling)) break;
	              node = parentNode;
	              parentNode = node.parentNode;
	            }
	            node = next;
	          }
	          JSCompiler_temp =
	            -1 === start || -1 === end ? null : { start: start, end: end };
	        } else JSCompiler_temp = null;
	      }
	    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
	  } else JSCompiler_temp = null;
	  selectionInformation = { focusedElem: root, selectionRange: JSCompiler_temp };
	  _enabled = !1;
	  for (nextEffect = firstChild; null !== nextEffect; )
	    if (
	      ((firstChild = nextEffect),
	      (root = firstChild.child),
	      0 !== (firstChild.subtreeFlags & 1028) && null !== root)
	    )
	      (root.return = firstChild), (nextEffect = root);
	    else
	      for (; null !== nextEffect; ) {
	        firstChild = nextEffect;
	        focusNode = firstChild.alternate;
	        root = firstChild.flags;
	        switch (firstChild.tag) {
	          case 0:
	            if (
	              0 !== (root & 4) &&
	              ((root = firstChild.updateQueue),
	              (root = null !== root ? root.events : null),
	              null !== root)
	            )
	              for (
	                JSCompiler_temp = 0;
	                JSCompiler_temp < root.length;
	                JSCompiler_temp++
	              )
	                (anchorOffset = root[JSCompiler_temp]),
	                  (anchorOffset.ref.impl = anchorOffset.nextImpl);
	            break;
	          case 11:
	          case 15:
	            break;
	          case 1:
	            if (0 !== (root & 1024) && null !== focusNode) {
	              root = void 0;
	              JSCompiler_temp = firstChild;
	              anchorOffset = focusNode.memoizedProps;
	              focusNode = focusNode.memoizedState;
	              selection = JSCompiler_temp.stateNode;
	              try {
	                var resolvedPrevProps = resolveClassComponentProps(
	                  JSCompiler_temp.type,
	                  anchorOffset
	                );
	                root = selection.getSnapshotBeforeUpdate(
	                  resolvedPrevProps,
	                  focusNode
	                );
	                selection.__reactInternalSnapshotBeforeUpdate = root;
	              } catch (error) {
	                captureCommitPhaseError(
	                  JSCompiler_temp,
	                  JSCompiler_temp.return,
	                  error
	                );
	              }
	            }
	            break;
	          case 3:
	            if (0 !== (root & 1024))
	              if (
	                ((root = firstChild.stateNode.containerInfo),
	                (JSCompiler_temp = root.nodeType),
	                9 === JSCompiler_temp)
	              )
	                clearContainerSparingly(root);
	              else if (1 === JSCompiler_temp)
	                switch (root.nodeName) {
	                  case "HEAD":
	                  case "HTML":
	                  case "BODY":
	                    clearContainerSparingly(root);
	                    break;
	                  default:
	                    root.textContent = "";
	                }
	            break;
	          case 5:
	          case 26:
	          case 27:
	          case 6:
	          case 4:
	          case 17:
	            break;
	          default:
	            if (0 !== (root & 1024)) throw Error(formatProdErrorMessage(163));
	        }
	        root = firstChild.sibling;
	        if (null !== root) {
	          root.return = firstChild.return;
	          nextEffect = root;
	          break;
	        }
	        nextEffect = firstChild.return;
	      }
	}
	function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
	  var flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitHookEffectListMount(5, finishedWork);
	      break;
	    case 1:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      if (flags & 4)
	        if (((finishedRoot = finishedWork.stateNode), null === current))
	          try {
	            finishedRoot.componentDidMount();
	          } catch (error) {
	            captureCommitPhaseError(finishedWork, finishedWork.return, error);
	          }
	        else {
	          var prevProps = resolveClassComponentProps(
	            finishedWork.type,
	            current.memoizedProps
	          );
	          current = current.memoizedState;
	          try {
	            finishedRoot.componentDidUpdate(
	              prevProps,
	              current,
	              finishedRoot.__reactInternalSnapshotBeforeUpdate
	            );
	          } catch (error$139) {
	            captureCommitPhaseError(
	              finishedWork,
	              finishedWork.return,
	              error$139
	            );
	          }
	        }
	      flags & 64 && commitClassCallbacks(finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 3:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      if (
	        flags & 64 &&
	        ((finishedRoot = finishedWork.updateQueue), null !== finishedRoot)
	      ) {
	        current = null;
	        if (null !== finishedWork.child)
	          switch (finishedWork.child.tag) {
	            case 27:
	            case 5:
	              current = finishedWork.child.stateNode;
	              break;
	            case 1:
	              current = finishedWork.child.stateNode;
	          }
	        try {
	          commitCallbacks(finishedRoot, current);
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      break;
	    case 27:
	      null === current &&
	        flags & 4 &&
	        commitHostSingletonAcquisition(finishedWork);
	    case 26:
	    case 5:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      null === current && flags & 4 && commitHostMount(finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 12:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      break;
	    case 31:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitActivityHydrationCallbacks(finishedRoot, finishedWork);
	      break;
	    case 13:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
	      flags & 64 &&
	        ((finishedRoot = finishedWork.memoizedState),
	        null !== finishedRoot &&
	          ((finishedRoot = finishedRoot.dehydrated),
	          null !== finishedRoot &&
	            ((finishedWork = retryDehydratedSuspenseBoundary.bind(
	              null,
	              finishedWork
	            )),
	            registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
	      break;
	    case 22:
	      flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
	      if (!flags) {
	        current =
	          (null !== current && null !== current.memoizedState) ||
	          offscreenSubtreeWasHidden;
	        prevProps = offscreenSubtreeIsHidden;
	        var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
	        offscreenSubtreeIsHidden = flags;
	        (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden
	          ? recursivelyTraverseReappearLayoutEffects(
	              finishedRoot,
	              finishedWork,
	              0 !== (finishedWork.subtreeFlags & 8772)
	            )
	          : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	        offscreenSubtreeIsHidden = prevProps;
	        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
	      }
	      break;
	    case 30:
	      break;
	    default:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	  }
	}
	function detachFiberAfterEffects(fiber) {
	  var alternate = fiber.alternate;
	  null !== alternate &&
	    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
	  fiber.child = null;
	  fiber.deletions = null;
	  fiber.sibling = null;
	  5 === fiber.tag &&
	    ((alternate = fiber.stateNode),
	    null !== alternate && detachDeletedInstance(alternate));
	  fiber.stateNode = null;
	  fiber.return = null;
	  fiber.dependencies = null;
	  fiber.memoizedProps = null;
	  fiber.memoizedState = null;
	  fiber.pendingProps = null;
	  fiber.stateNode = null;
	  fiber.updateQueue = null;
	}
	var hostParent = null,
	  hostParentIsContainer = !1;
	function recursivelyTraverseDeletionEffects(
	  finishedRoot,
	  nearestMountedAncestor,
	  parent
	) {
	  for (parent = parent.child; null !== parent; )
	    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
	      (parent = parent.sibling);
	}
	function commitDeletionEffectsOnFiber(
	  finishedRoot,
	  nearestMountedAncestor,
	  deletedFiber
	) {
	  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
	    try {
	      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
	    } catch (err) {}
	  switch (deletedFiber.tag) {
	    case 26:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      deletedFiber.memoizedState
	        ? deletedFiber.memoizedState.count--
	        : deletedFiber.stateNode &&
	          ((deletedFiber = deletedFiber.stateNode),
	          deletedFiber.parentNode.removeChild(deletedFiber));
	      break;
	    case 27:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      var prevHostParent = hostParent,
	        prevHostParentIsContainer = hostParentIsContainer;
	      isSingletonScope(deletedFiber.type) &&
	        ((hostParent = deletedFiber.stateNode), (hostParentIsContainer = !1));
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      releaseSingletonInstance(deletedFiber.stateNode);
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      break;
	    case 5:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	    case 6:
	      prevHostParent = hostParent;
	      prevHostParentIsContainer = hostParentIsContainer;
	      hostParent = null;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      if (null !== hostParent)
	        if (hostParentIsContainer)
	          try {
	            (9 === hostParent.nodeType
	              ? hostParent.body
	              : "HTML" === hostParent.nodeName
	                ? hostParent.ownerDocument.body
	                : hostParent
	            ).removeChild(deletedFiber.stateNode);
	          } catch (error) {
	            captureCommitPhaseError(
	              deletedFiber,
	              nearestMountedAncestor,
	              error
	            );
	          }
	        else
	          try {
	            hostParent.removeChild(deletedFiber.stateNode);
	          } catch (error) {
	            captureCommitPhaseError(
	              deletedFiber,
	              nearestMountedAncestor,
	              error
	            );
	          }
	      break;
	    case 18:
	      null !== hostParent &&
	        (hostParentIsContainer
	          ? ((finishedRoot = hostParent),
	            clearHydrationBoundary(
	              9 === finishedRoot.nodeType
	                ? finishedRoot.body
	                : "HTML" === finishedRoot.nodeName
	                  ? finishedRoot.ownerDocument.body
	                  : finishedRoot,
	              deletedFiber.stateNode
	            ),
	            retryIfBlockedOn(finishedRoot))
	          : clearHydrationBoundary(hostParent, deletedFiber.stateNode));
	      break;
	    case 4:
	      prevHostParent = hostParent;
	      prevHostParentIsContainer = hostParentIsContainer;
	      hostParent = deletedFiber.stateNode.containerInfo;
	      hostParentIsContainer = !0;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      break;
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
	      offscreenSubtreeWasHidden ||
	        commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 1:
	      offscreenSubtreeWasHidden ||
	        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
	        (prevHostParent = deletedFiber.stateNode),
	        "function" === typeof prevHostParent.componentWillUnmount &&
	          safelyCallComponentWillUnmount(
	            deletedFiber,
	            nearestMountedAncestor,
	            prevHostParent
	          ));
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 21:
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 22:
	      offscreenSubtreeWasHidden =
	        (prevHostParent = offscreenSubtreeWasHidden) ||
	        null !== deletedFiber.memoizedState;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      offscreenSubtreeWasHidden = prevHostParent;
	      break;
	    default:
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	  }
	}
	function commitActivityHydrationCallbacks(finishedRoot, finishedWork) {
	  if (
	    null === finishedWork.memoizedState &&
	    ((finishedRoot = finishedWork.alternate),
	    null !== finishedRoot &&
	      ((finishedRoot = finishedRoot.memoizedState), null !== finishedRoot))
	  ) {
	    finishedRoot = finishedRoot.dehydrated;
	    try {
	      retryIfBlockedOn(finishedRoot);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	  }
	}
	function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
	  if (
	    null === finishedWork.memoizedState &&
	    ((finishedRoot = finishedWork.alternate),
	    null !== finishedRoot &&
	      ((finishedRoot = finishedRoot.memoizedState),
	      null !== finishedRoot &&
	        ((finishedRoot = finishedRoot.dehydrated), null !== finishedRoot)))
	  )
	    try {
	      retryIfBlockedOn(finishedRoot);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	}
	function getRetryCache(finishedWork) {
	  switch (finishedWork.tag) {
	    case 31:
	    case 13:
	    case 19:
	      var retryCache = finishedWork.stateNode;
	      null === retryCache &&
	        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
	      return retryCache;
	    case 22:
	      return (
	        (finishedWork = finishedWork.stateNode),
	        (retryCache = finishedWork._retryCache),
	        null === retryCache &&
	          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
	        retryCache
	      );
	    default:
	      throw Error(formatProdErrorMessage(435, finishedWork.tag));
	  }
	}
	function attachSuspenseRetryListeners(finishedWork, wakeables) {
	  var retryCache = getRetryCache(finishedWork);
	  wakeables.forEach(function (wakeable) {
	    if (!retryCache.has(wakeable)) {
	      retryCache.add(wakeable);
	      var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
	      wakeable.then(retry, retry);
	    }
	  });
	}
	function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (null !== deletions)
	    for (var i = 0; i < deletions.length; i++) {
	      var childToDelete = deletions[i],
	        root = root$jscomp$0,
	        returnFiber = parentFiber,
	        parent = returnFiber;
	      a: for (; null !== parent; ) {
	        switch (parent.tag) {
	          case 27:
	            if (isSingletonScope(parent.type)) {
	              hostParent = parent.stateNode;
	              hostParentIsContainer = !1;
	              break a;
	            }
	            break;
	          case 5:
	            hostParent = parent.stateNode;
	            hostParentIsContainer = !1;
	            break a;
	          case 3:
	          case 4:
	            hostParent = parent.stateNode.containerInfo;
	            hostParentIsContainer = !0;
	            break a;
	        }
	        parent = parent.return;
	      }
	      if (null === hostParent) throw Error(formatProdErrorMessage(160));
	      commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
	      hostParent = null;
	      hostParentIsContainer = !1;
	      root = childToDelete.alternate;
	      null !== root && (root.return = null);
	      childToDelete.return = null;
	    }
	  if (parentFiber.subtreeFlags & 13886)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0),
	        (parentFiber = parentFiber.sibling);
	}
	var currentHoistableRoot = null;
	function commitMutationEffectsOnFiber(finishedWork, root) {
	  var current = finishedWork.alternate,
	    flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 &&
	        (commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
	        commitHookEffectListMount(3, finishedWork),
	        commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
	      break;
	    case 1:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      flags & 64 &&
	        offscreenSubtreeIsHidden &&
	        ((finishedWork = finishedWork.updateQueue),
	        null !== finishedWork &&
	          ((flags = finishedWork.callbacks),
	          null !== flags &&
	            ((current = finishedWork.shared.hiddenCallbacks),
	            (finishedWork.shared.hiddenCallbacks =
	              null === current ? flags : current.concat(flags)))));
	      break;
	    case 26:
	      var hoistableRoot = currentHoistableRoot;
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      if (flags & 4) {
	        var currentResource = null !== current ? current.memoizedState : null;
	        flags = finishedWork.memoizedState;
	        if (null === current)
	          if (null === flags)
	            if (null === finishedWork.stateNode) {
	              a: {
	                flags = finishedWork.type;
	                current = finishedWork.memoizedProps;
	                hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	                b: switch (flags) {
	                  case "title":
	                    currentResource =
	                      hoistableRoot.getElementsByTagName("title")[0];
	                    if (
	                      !currentResource ||
	                      currentResource[internalHoistableMarker] ||
	                      currentResource[internalInstanceKey] ||
	                      "http://www.w3.org/2000/svg" ===
	                        currentResource.namespaceURI ||
	                      currentResource.hasAttribute("itemprop")
	                    )
	                      (currentResource = hoistableRoot.createElement(flags)),
	                        hoistableRoot.head.insertBefore(
	                          currentResource,
	                          hoistableRoot.querySelector("head > title")
	                        );
	                    setInitialProperties(currentResource, flags, current);
	                    currentResource[internalInstanceKey] = finishedWork;
	                    markNodeAsHoistable(currentResource);
	                    flags = currentResource;
	                    break a;
	                  case "link":
	                    var maybeNodes = getHydratableHoistableCache(
	                      "link",
	                      "href",
	                      hoistableRoot
	                    ).get(flags + (current.href || ""));
	                    if (maybeNodes)
	                      for (var i = 0; i < maybeNodes.length; i++)
	                        if (
	                          ((currentResource = maybeNodes[i]),
	                          currentResource.getAttribute("href") ===
	                            (null == current.href || "" === current.href
	                              ? null
	                              : current.href) &&
	                            currentResource.getAttribute("rel") ===
	                              (null == current.rel ? null : current.rel) &&
	                            currentResource.getAttribute("title") ===
	                              (null == current.title ? null : current.title) &&
	                            currentResource.getAttribute("crossorigin") ===
	                              (null == current.crossOrigin
	                                ? null
	                                : current.crossOrigin))
	                        ) {
	                          maybeNodes.splice(i, 1);
	                          break b;
	                        }
	                    currentResource = hoistableRoot.createElement(flags);
	                    setInitialProperties(currentResource, flags, current);
	                    hoistableRoot.head.appendChild(currentResource);
	                    break;
	                  case "meta":
	                    if (
	                      (maybeNodes = getHydratableHoistableCache(
	                        "meta",
	                        "content",
	                        hoistableRoot
	                      ).get(flags + (current.content || "")))
	                    )
	                      for (i = 0; i < maybeNodes.length; i++)
	                        if (
	                          ((currentResource = maybeNodes[i]),
	                          currentResource.getAttribute("content") ===
	                            (null == current.content
	                              ? null
	                              : "" + current.content) &&
	                            currentResource.getAttribute("name") ===
	                              (null == current.name ? null : current.name) &&
	                            currentResource.getAttribute("property") ===
	                              (null == current.property
	                                ? null
	                                : current.property) &&
	                            currentResource.getAttribute("http-equiv") ===
	                              (null == current.httpEquiv
	                                ? null
	                                : current.httpEquiv) &&
	                            currentResource.getAttribute("charset") ===
	                              (null == current.charSet
	                                ? null
	                                : current.charSet))
	                        ) {
	                          maybeNodes.splice(i, 1);
	                          break b;
	                        }
	                    currentResource = hoistableRoot.createElement(flags);
	                    setInitialProperties(currentResource, flags, current);
	                    hoistableRoot.head.appendChild(currentResource);
	                    break;
	                  default:
	                    throw Error(formatProdErrorMessage(468, flags));
	                }
	                currentResource[internalInstanceKey] = finishedWork;
	                markNodeAsHoistable(currentResource);
	                flags = currentResource;
	              }
	              finishedWork.stateNode = flags;
	            } else
	              mountHoistable(
	                hoistableRoot,
	                finishedWork.type,
	                finishedWork.stateNode
	              );
	          else
	            finishedWork.stateNode = acquireResource(
	              hoistableRoot,
	              flags,
	              finishedWork.memoizedProps
	            );
	        else
	          currentResource !== flags
	            ? (null === currentResource
	                ? null !== current.stateNode &&
	                  ((current = current.stateNode),
	                  current.parentNode.removeChild(current))
	                : currentResource.count--,
	              null === flags
	                ? mountHoistable(
	                    hoistableRoot,
	                    finishedWork.type,
	                    finishedWork.stateNode
	                  )
	                : acquireResource(
	                    hoistableRoot,
	                    flags,
	                    finishedWork.memoizedProps
	                  ))
	            : null === flags &&
	              null !== finishedWork.stateNode &&
	              commitHostUpdate(
	                finishedWork,
	                finishedWork.memoizedProps,
	                current.memoizedProps
	              );
	      }
	      break;
	    case 27:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      null !== current &&
	        flags & 4 &&
	        commitHostUpdate(
	          finishedWork,
	          finishedWork.memoizedProps,
	          current.memoizedProps
	        );
	      break;
	    case 5:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      if (finishedWork.flags & 32) {
	        hoistableRoot = finishedWork.stateNode;
	        try {
	          setTextContent(hoistableRoot, "");
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      flags & 4 &&
	        null != finishedWork.stateNode &&
	        ((hoistableRoot = finishedWork.memoizedProps),
	        commitHostUpdate(
	          finishedWork,
	          hoistableRoot,
	          null !== current ? current.memoizedProps : hoistableRoot
	        ));
	      flags & 1024 && (needsFormReset = !0);
	      break;
	    case 6:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      if (flags & 4) {
	        if (null === finishedWork.stateNode)
	          throw Error(formatProdErrorMessage(162));
	        flags = finishedWork.memoizedProps;
	        current = finishedWork.stateNode;
	        try {
	          current.nodeValue = flags;
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      break;
	    case 3:
	      tagCaches = null;
	      hoistableRoot = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(root.containerInfo);
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      currentHoistableRoot = hoistableRoot;
	      commitReconciliationEffects(finishedWork);
	      if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
	        try {
	          retryIfBlockedOn(root.containerInfo);
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      needsFormReset &&
	        ((needsFormReset = !1), recursivelyResetForms(finishedWork));
	      break;
	    case 4:
	      flags = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(
	        finishedWork.stateNode.containerInfo
	      );
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      currentHoistableRoot = flags;
	      break;
	    case 12:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      break;
	    case 31:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((finishedWork.updateQueue = null),
	          attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 13:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      finishedWork.child.flags & 8192 &&
	        (null !== finishedWork.memoizedState) !==
	          (null !== current && null !== current.memoizedState) &&
	        (globalMostRecentFallbackTime = now());
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((finishedWork.updateQueue = null),
	          attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 22:
	      hoistableRoot = null !== finishedWork.memoizedState;
	      var wasHidden = null !== current && null !== current.memoizedState,
	        prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
	        prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
	      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
	      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
	      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
	      commitReconciliationEffects(finishedWork);
	      if (flags & 8192)
	        a: for (
	          root = finishedWork.stateNode,
	            root._visibility = hoistableRoot
	              ? root._visibility & -2
	              : root._visibility | 1,
	            hoistableRoot &&
	              (null === current ||
	                wasHidden ||
	                offscreenSubtreeIsHidden ||
	                offscreenSubtreeWasHidden ||
	                recursivelyTraverseDisappearLayoutEffects(finishedWork)),
	            current = null,
	            root = finishedWork;
	          ;

	        ) {
	          if (5 === root.tag || 26 === root.tag) {
	            if (null === current) {
	              wasHidden = current = root;
	              try {
	                if (((currentResource = wasHidden.stateNode), hoistableRoot))
	                  (maybeNodes = currentResource.style),
	                    "function" === typeof maybeNodes.setProperty
	                      ? maybeNodes.setProperty("display", "none", "important")
	                      : (maybeNodes.display = "none");
	                else {
	                  i = wasHidden.stateNode;
	                  var styleProp = wasHidden.memoizedProps.style,
	                    display =
	                      void 0 !== styleProp &&
	                      null !== styleProp &&
	                      styleProp.hasOwnProperty("display")
	                        ? styleProp.display
	                        : null;
	                  i.style.display =
	                    null == display || "boolean" === typeof display
	                      ? ""
	                      : ("" + display).trim();
	                }
	              } catch (error) {
	                captureCommitPhaseError(wasHidden, wasHidden.return, error);
	              }
	            }
	          } else if (6 === root.tag) {
	            if (null === current) {
	              wasHidden = root;
	              try {
	                wasHidden.stateNode.nodeValue = hoistableRoot
	                  ? ""
	                  : wasHidden.memoizedProps;
	              } catch (error) {
	                captureCommitPhaseError(wasHidden, wasHidden.return, error);
	              }
	            }
	          } else if (18 === root.tag) {
	            if (null === current) {
	              wasHidden = root;
	              try {
	                var instance = wasHidden.stateNode;
	                hoistableRoot
	                  ? hideOrUnhideDehydratedBoundary(instance, !0)
	                  : hideOrUnhideDehydratedBoundary(wasHidden.stateNode, !1);
	              } catch (error) {
	                captureCommitPhaseError(wasHidden, wasHidden.return, error);
	              }
	            }
	          } else if (
	            ((22 !== root.tag && 23 !== root.tag) ||
	              null === root.memoizedState ||
	              root === finishedWork) &&
	            null !== root.child
	          ) {
	            root.child.return = root;
	            root = root.child;
	            continue;
	          }
	          if (root === finishedWork) break a;
	          for (; null === root.sibling; ) {
	            if (null === root.return || root.return === finishedWork) break a;
	            current === root && (current = null);
	            root = root.return;
	          }
	          current === root && (current = null);
	          root.sibling.return = root.return;
	          root = root.sibling;
	        }
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((current = flags.retryQueue),
	          null !== current &&
	            ((flags.retryQueue = null),
	            attachSuspenseRetryListeners(finishedWork, current))));
	      break;
	    case 19:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((finishedWork.updateQueue = null),
	          attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 30:
	      break;
	    case 21:
	      break;
	    default:
	      recursivelyTraverseMutationEffects(root, finishedWork),
	        commitReconciliationEffects(finishedWork);
	  }
	}
	function commitReconciliationEffects(finishedWork) {
	  var flags = finishedWork.flags;
	  if (flags & 2) {
	    try {
	      for (
	        var hostParentFiber, parentFiber = finishedWork.return;
	        null !== parentFiber;

	      ) {
	        if (isHostParent(parentFiber)) {
	          hostParentFiber = parentFiber;
	          break;
	        }
	        parentFiber = parentFiber.return;
	      }
	      if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
	      switch (hostParentFiber.tag) {
	        case 27:
	          var parent = hostParentFiber.stateNode,
	            before = getHostSibling(finishedWork);
	          insertOrAppendPlacementNode(finishedWork, before, parent);
	          break;
	        case 5:
	          var parent$141 = hostParentFiber.stateNode;
	          hostParentFiber.flags & 32 &&
	            (setTextContent(parent$141, ""), (hostParentFiber.flags &= -33));
	          var before$142 = getHostSibling(finishedWork);
	          insertOrAppendPlacementNode(finishedWork, before$142, parent$141);
	          break;
	        case 3:
	        case 4:
	          var parent$143 = hostParentFiber.stateNode.containerInfo,
	            before$144 = getHostSibling(finishedWork);
	          insertOrAppendPlacementNodeIntoContainer(
	            finishedWork,
	            before$144,
	            parent$143
	          );
	          break;
	        default:
	          throw Error(formatProdErrorMessage(161));
	      }
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	    finishedWork.flags &= -3;
	  }
	  flags & 4096 && (finishedWork.flags &= -4097);
	}
	function recursivelyResetForms(parentFiber) {
	  if (parentFiber.subtreeFlags & 1024)
	    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	      var fiber = parentFiber;
	      recursivelyResetForms(fiber);
	      5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
	      parentFiber = parentFiber.sibling;
	    }
	}
	function recursivelyTraverseLayoutEffects(root, parentFiber) {
	  if (parentFiber.subtreeFlags & 8772)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
	        (parentFiber = parentFiber.sibling);
	}
	function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var finishedWork = parentFiber;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 14:
	      case 15:
	        commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 1:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        var instance = finishedWork.stateNode;
	        "function" === typeof instance.componentWillUnmount &&
	          safelyCallComponentWillUnmount(
	            finishedWork,
	            finishedWork.return,
	            instance
	          );
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 27:
	        releaseSingletonInstance(finishedWork.stateNode);
	      case 26:
	      case 5:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 22:
	        null === finishedWork.memoizedState &&
	          recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 30:
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      default:
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function recursivelyTraverseReappearLayoutEffects(
	  finishedRoot$jscomp$0,
	  parentFiber,
	  includeWorkInProgressEffects
	) {
	  includeWorkInProgressEffects =
	    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var current = parentFiber.alternate,
	      finishedRoot = finishedRoot$jscomp$0,
	      finishedWork = parentFiber,
	      flags = finishedWork.flags;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 15:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        commitHookEffectListMount(4, finishedWork);
	        break;
	      case 1:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        current = finishedWork;
	        finishedRoot = current.stateNode;
	        if ("function" === typeof finishedRoot.componentDidMount)
	          try {
	            finishedRoot.componentDidMount();
	          } catch (error) {
	            captureCommitPhaseError(current, current.return, error);
	          }
	        current = finishedWork;
	        finishedRoot = current.updateQueue;
	        if (null !== finishedRoot) {
	          var instance = current.stateNode;
	          try {
	            var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
	            if (null !== hiddenCallbacks)
	              for (
	                finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0;
	                finishedRoot < hiddenCallbacks.length;
	                finishedRoot++
	              )
	                callCallback(hiddenCallbacks[finishedRoot], instance);
	          } catch (error) {
	            captureCommitPhaseError(current, current.return, error);
	          }
	        }
	        includeWorkInProgressEffects &&
	          flags & 64 &&
	          commitClassCallbacks(finishedWork);
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 27:
	        commitHostSingletonAcquisition(finishedWork);
	      case 26:
	      case 5:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          null === current &&
	          flags & 4 &&
	          commitHostMount(finishedWork);
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 12:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        break;
	      case 31:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          flags & 4 &&
	          commitActivityHydrationCallbacks(finishedRoot, finishedWork);
	        break;
	      case 13:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          flags & 4 &&
	          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
	        break;
	      case 22:
	        null === finishedWork.memoizedState &&
	          recursivelyTraverseReappearLayoutEffects(
	            finishedRoot,
	            finishedWork,
	            includeWorkInProgressEffects
	          );
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 30:
	        break;
	      default:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function commitOffscreenPassiveMountEffects(current, finishedWork) {
	  var previousCache = null;
	  null !== current &&
	    null !== current.memoizedState &&
	    null !== current.memoizedState.cachePool &&
	    (previousCache = current.memoizedState.cachePool.pool);
	  current = null;
	  null !== finishedWork.memoizedState &&
	    null !== finishedWork.memoizedState.cachePool &&
	    (current = finishedWork.memoizedState.cachePool.pool);
	  current !== previousCache &&
	    (null != current && current.refCount++,
	    null != previousCache && releaseCache(previousCache));
	}
	function commitCachePassiveMountEffect(current, finishedWork) {
	  current = null;
	  null !== finishedWork.alternate &&
	    (current = finishedWork.alternate.memoizedState.cache);
	  finishedWork = finishedWork.memoizedState.cache;
	  finishedWork !== current &&
	    (finishedWork.refCount++, null != current && releaseCache(current));
	}
	function recursivelyTraversePassiveMountEffects(
	  root,
	  parentFiber,
	  committedLanes,
	  committedTransitions
	) {
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitPassiveMountOnFiber(
	        root,
	        parentFiber,
	        committedLanes,
	        committedTransitions
	      ),
	        (parentFiber = parentFiber.sibling);
	}
	function commitPassiveMountOnFiber(
	  finishedRoot,
	  finishedWork,
	  committedLanes,
	  committedTransitions
	) {
	  var flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 && commitHookEffectListMount(9, finishedWork);
	      break;
	    case 1:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      break;
	    case 3:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 &&
	        ((finishedRoot = null),
	        null !== finishedWork.alternate &&
	          (finishedRoot = finishedWork.alternate.memoizedState.cache),
	        (finishedWork = finishedWork.memoizedState.cache),
	        finishedWork !== finishedRoot &&
	          (finishedWork.refCount++,
	          null != finishedRoot && releaseCache(finishedRoot)));
	      break;
	    case 12:
	      if (flags & 2048) {
	        recursivelyTraversePassiveMountEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions
	        );
	        finishedRoot = finishedWork.stateNode;
	        try {
	          var _finishedWork$memoize2 = finishedWork.memoizedProps,
	            id = _finishedWork$memoize2.id,
	            onPostCommit = _finishedWork$memoize2.onPostCommit;
	          "function" === typeof onPostCommit &&
	            onPostCommit(
	              id,
	              null === finishedWork.alternate ? "mount" : "update",
	              finishedRoot.passiveEffectDuration,
	              -0
	            );
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      } else
	        recursivelyTraversePassiveMountEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions
	        );
	      break;
	    case 31:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      break;
	    case 13:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      break;
	    case 23:
	      break;
	    case 22:
	      _finishedWork$memoize2 = finishedWork.stateNode;
	      id = finishedWork.alternate;
	      null !== finishedWork.memoizedState
	        ? _finishedWork$memoize2._visibility & 2
	          ? recursivelyTraversePassiveMountEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions
	            )
	          : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork)
	        : _finishedWork$memoize2._visibility & 2
	          ? recursivelyTraversePassiveMountEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions
	            )
	          : ((_finishedWork$memoize2._visibility |= 2),
	            recursivelyTraverseReconnectPassiveEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions,
	              0 !== (finishedWork.subtreeFlags & 10256) || !1
	            ));
	      flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
	      break;
	    case 24:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 &&
	        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	      break;
	    default:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	  }
	}
	function recursivelyTraverseReconnectPassiveEffects(
	  finishedRoot$jscomp$0,
	  parentFiber,
	  committedLanes$jscomp$0,
	  committedTransitions$jscomp$0,
	  includeWorkInProgressEffects
	) {
	  includeWorkInProgressEffects =
	    includeWorkInProgressEffects &&
	    (0 !== (parentFiber.subtreeFlags & 10256) || !1);
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var finishedRoot = finishedRoot$jscomp$0,
	      finishedWork = parentFiber,
	      committedLanes = committedLanes$jscomp$0,
	      committedTransitions = committedTransitions$jscomp$0,
	      flags = finishedWork.flags;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 15:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	        commitHookEffectListMount(8, finishedWork);
	        break;
	      case 23:
	        break;
	      case 22:
	        var instance = finishedWork.stateNode;
	        null !== finishedWork.memoizedState
	          ? instance._visibility & 2
	            ? recursivelyTraverseReconnectPassiveEffects(
	                finishedRoot,
	                finishedWork,
	                committedLanes,
	                committedTransitions,
	                includeWorkInProgressEffects
	              )
	            : recursivelyTraverseAtomicPassiveEffects(
	                finishedRoot,
	                finishedWork
	              )
	          : ((instance._visibility |= 2),
	            recursivelyTraverseReconnectPassiveEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions,
	              includeWorkInProgressEffects
	            ));
	        includeWorkInProgressEffects &&
	          flags & 2048 &&
	          commitOffscreenPassiveMountEffects(
	            finishedWork.alternate,
	            finishedWork
	          );
	        break;
	      case 24:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          flags & 2048 &&
	          commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	        break;
	      default:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function recursivelyTraverseAtomicPassiveEffects(
	  finishedRoot$jscomp$0,
	  parentFiber
	) {
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	      var finishedRoot = finishedRoot$jscomp$0,
	        finishedWork = parentFiber,
	        flags = finishedWork.flags;
	      switch (finishedWork.tag) {
	        case 22:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	          flags & 2048 &&
	            commitOffscreenPassiveMountEffects(
	              finishedWork.alternate,
	              finishedWork
	            );
	          break;
	        case 24:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	          flags & 2048 &&
	            commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	          break;
	        default:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	      }
	      parentFiber = parentFiber.sibling;
	    }
	}
	var suspenseyCommitFlag = 8192;
	function recursivelyAccumulateSuspenseyCommit(
	  parentFiber,
	  committedLanes,
	  suspendedState
	) {
	  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      accumulateSuspenseyCommitOnFiber(
	        parentFiber,
	        committedLanes,
	        suspendedState
	      ),
	        (parentFiber = parentFiber.sibling);
	}
	function accumulateSuspenseyCommitOnFiber(
	  fiber,
	  committedLanes,
	  suspendedState
	) {
	  switch (fiber.tag) {
	    case 26:
	      recursivelyAccumulateSuspenseyCommit(
	        fiber,
	        committedLanes,
	        suspendedState
	      );
	      fiber.flags & suspenseyCommitFlag &&
	        null !== fiber.memoizedState &&
	        suspendResource(
	          suspendedState,
	          currentHoistableRoot,
	          fiber.memoizedState,
	          fiber.memoizedProps
	        );
	      break;
	    case 5:
	      recursivelyAccumulateSuspenseyCommit(
	        fiber,
	        committedLanes,
	        suspendedState
	      );
	      break;
	    case 3:
	    case 4:
	      var previousHoistableRoot = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
	      recursivelyAccumulateSuspenseyCommit(
	        fiber,
	        committedLanes,
	        suspendedState
	      );
	      currentHoistableRoot = previousHoistableRoot;
	      break;
	    case 22:
	      null === fiber.memoizedState &&
	        ((previousHoistableRoot = fiber.alternate),
	        null !== previousHoistableRoot &&
	        null !== previousHoistableRoot.memoizedState
	          ? ((previousHoistableRoot = suspenseyCommitFlag),
	            (suspenseyCommitFlag = 16777216),
	            recursivelyAccumulateSuspenseyCommit(
	              fiber,
	              committedLanes,
	              suspendedState
	            ),
	            (suspenseyCommitFlag = previousHoistableRoot))
	          : recursivelyAccumulateSuspenseyCommit(
	              fiber,
	              committedLanes,
	              suspendedState
	            ));
	      break;
	    default:
	      recursivelyAccumulateSuspenseyCommit(
	        fiber,
	        committedLanes,
	        suspendedState
	      );
	  }
	}
	function detachAlternateSiblings(parentFiber) {
	  var previousFiber = parentFiber.alternate;
	  if (
	    null !== previousFiber &&
	    ((parentFiber = previousFiber.child), null !== parentFiber)
	  ) {
	    previousFiber.child = null;
	    do
	      (previousFiber = parentFiber.sibling),
	        (parentFiber.sibling = null),
	        (parentFiber = previousFiber);
	    while (null !== parentFiber);
	  }
	}
	function recursivelyTraversePassiveUnmountEffects(parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (0 !== (parentFiber.flags & 16)) {
	    if (null !== deletions)
	      for (var i = 0; i < deletions.length; i++) {
	        var childToDelete = deletions[i];
	        nextEffect = childToDelete;
	        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	          childToDelete,
	          parentFiber
	        );
	      }
	    detachAlternateSiblings(parentFiber);
	  }
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitPassiveUnmountOnFiber(parentFiber),
	        (parentFiber = parentFiber.sibling);
	}
	function commitPassiveUnmountOnFiber(finishedWork) {
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      finishedWork.flags & 2048 &&
	        commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
	      break;
	    case 3:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    case 12:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    case 22:
	      var instance = finishedWork.stateNode;
	      null !== finishedWork.memoizedState &&
	      instance._visibility & 2 &&
	      (null === finishedWork.return || 13 !== finishedWork.return.tag)
	        ? ((instance._visibility &= -3),
	          recursivelyTraverseDisconnectPassiveEffects(finishedWork))
	        : recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    default:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	  }
	}
	function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (0 !== (parentFiber.flags & 16)) {
	    if (null !== deletions)
	      for (var i = 0; i < deletions.length; i++) {
	        var childToDelete = deletions[i];
	        nextEffect = childToDelete;
	        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	          childToDelete,
	          parentFiber
	        );
	      }
	    detachAlternateSiblings(parentFiber);
	  }
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    deletions = parentFiber;
	    switch (deletions.tag) {
	      case 0:
	      case 11:
	      case 15:
	        commitHookEffectListUnmount(8, deletions, deletions.return);
	        recursivelyTraverseDisconnectPassiveEffects(deletions);
	        break;
	      case 22:
	        i = deletions.stateNode;
	        i._visibility & 2 &&
	          ((i._visibility &= -3),
	          recursivelyTraverseDisconnectPassiveEffects(deletions));
	        break;
	      default:
	        recursivelyTraverseDisconnectPassiveEffects(deletions);
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	  deletedSubtreeRoot,
	  nearestMountedAncestor
	) {
	  for (; null !== nextEffect; ) {
	    var fiber = nextEffect;
	    switch (fiber.tag) {
	      case 0:
	      case 11:
	      case 15:
	        commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
	        break;
	      case 23:
	      case 22:
	        if (
	          null !== fiber.memoizedState &&
	          null !== fiber.memoizedState.cachePool
	        ) {
	          var cache = fiber.memoizedState.cachePool.pool;
	          null != cache && cache.refCount++;
	        }
	        break;
	      case 24:
	        releaseCache(fiber.memoizedState.cache);
	    }
	    cache = fiber.child;
	    if (null !== cache) (cache.return = fiber), (nextEffect = cache);
	    else
	      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
	        cache = nextEffect;
	        var sibling = cache.sibling,
	          returnFiber = cache.return;
	        detachFiberAfterEffects(cache);
	        if (cache === fiber) {
	          nextEffect = null;
	          break a;
	        }
	        if (null !== sibling) {
	          sibling.return = returnFiber;
	          nextEffect = sibling;
	          break a;
	        }
	        nextEffect = returnFiber;
	      }
	  }
	}
	var DefaultAsyncDispatcher = {
	    getCacheForType: function (resourceType) {
	      var cache = readContext(CacheContext),
	        cacheForType = cache.data.get(resourceType);
	      void 0 === cacheForType &&
	        ((cacheForType = resourceType()),
	        cache.data.set(resourceType, cacheForType));
	      return cacheForType;
	    },
	    cacheSignal: function () {
	      return readContext(CacheContext).controller.signal;
	    }
	  },
	  PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
	  executionContext = 0,
	  workInProgressRoot = null,
	  workInProgress = null,
	  workInProgressRootRenderLanes = 0,
	  workInProgressSuspendedReason = 0,
	  workInProgressThrownValue = null,
	  workInProgressRootDidSkipSuspendedSiblings = !1,
	  workInProgressRootIsPrerendering = !1,
	  workInProgressRootDidAttachPingListener = !1,
	  entangledRenderLanes = 0,
	  workInProgressRootExitStatus = 0,
	  workInProgressRootSkippedLanes = 0,
	  workInProgressRootInterleavedUpdatedLanes = 0,
	  workInProgressRootPingedLanes = 0,
	  workInProgressDeferredLane = 0,
	  workInProgressSuspendedRetryLanes = 0,
	  workInProgressRootConcurrentErrors = null,
	  workInProgressRootRecoverableErrors = null,
	  workInProgressRootDidIncludeRecursiveRenderUpdate = !1,
	  globalMostRecentFallbackTime = 0,
	  globalMostRecentTransitionTime = 0,
	  workInProgressRootRenderTargetTime = Infinity,
	  workInProgressTransitions = null,
	  legacyErrorBoundariesThatAlreadyFailed = null,
	  pendingEffectsStatus = 0,
	  pendingEffectsRoot = null,
	  pendingFinishedWork = null,
	  pendingEffectsLanes = 0,
	  pendingEffectsRemainingLanes = 0,
	  pendingPassiveTransitions = null,
	  pendingRecoverableErrors = null,
	  nestedUpdateCount = 0,
	  rootWithNestedUpdates = null;
	function requestUpdateLane() {
	  return 0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes
	    ? workInProgressRootRenderLanes & -workInProgressRootRenderLanes
	    : null !== ReactSharedInternals.T
	      ? requestTransitionLane()
	      : resolveUpdatePriority();
	}
	function requestDeferredLane() {
	  if (0 === workInProgressDeferredLane)
	    if (0 === (workInProgressRootRenderLanes & 536870912) || isHydrating) {
	      var lane = nextTransitionDeferredLane;
	      nextTransitionDeferredLane <<= 1;
	      0 === (nextTransitionDeferredLane & 3932160) &&
	        (nextTransitionDeferredLane = 262144);
	      workInProgressDeferredLane = lane;
	    } else workInProgressDeferredLane = 536870912;
	  lane = suspenseHandlerStackCursor.current;
	  null !== lane && (lane.flags |= 32);
	  return workInProgressDeferredLane;
	}
	function scheduleUpdateOnFiber(root, fiber, lane) {
	  if (
	    (root === workInProgressRoot &&
	      (2 === workInProgressSuspendedReason ||
	        9 === workInProgressSuspendedReason)) ||
	    null !== root.cancelPendingCommit
	  )
	    prepareFreshStack(root, 0),
	      markRootSuspended(
	        root,
	        workInProgressRootRenderLanes,
	        workInProgressDeferredLane,
	        !1
	      );
	  markRootUpdated$1(root, lane);
	  if (0 === (executionContext & 2) || root !== workInProgressRoot)
	    root === workInProgressRoot &&
	      (0 === (executionContext & 2) &&
	        (workInProgressRootInterleavedUpdatedLanes |= lane),
	      4 === workInProgressRootExitStatus &&
	        markRootSuspended(
	          root,
	          workInProgressRootRenderLanes,
	          workInProgressDeferredLane,
	          !1
	        )),
	      ensureRootIsScheduled(root);
	}
	function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
	  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
	  var shouldTimeSlice =
	      (!forceSync &&
	        0 === (lanes & 127) &&
	        0 === (lanes & root$jscomp$0.expiredLanes)) ||
	      checkIfRootIsPrerendering(root$jscomp$0, lanes),
	    exitStatus = shouldTimeSlice
	      ? renderRootConcurrent(root$jscomp$0, lanes)
	      : renderRootSync(root$jscomp$0, lanes, !0),
	    renderWasConcurrent = shouldTimeSlice;
	  do {
	    if (0 === exitStatus) {
	      workInProgressRootIsPrerendering &&
	        !shouldTimeSlice &&
	        markRootSuspended(root$jscomp$0, lanes, 0, !1);
	      break;
	    } else {
	      forceSync = root$jscomp$0.current.alternate;
	      if (
	        renderWasConcurrent &&
	        !isRenderConsistentWithExternalStores(forceSync)
	      ) {
	        exitStatus = renderRootSync(root$jscomp$0, lanes, !1);
	        renderWasConcurrent = !1;
	        continue;
	      }
	      if (2 === exitStatus) {
	        renderWasConcurrent = lanes;
	        if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
	          var JSCompiler_inline_result = 0;
	        else
	          (JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913),
	            (JSCompiler_inline_result =
	              0 !== JSCompiler_inline_result
	                ? JSCompiler_inline_result
	                : JSCompiler_inline_result & 536870912
	                  ? 536870912
	                  : 0);
	        if (0 !== JSCompiler_inline_result) {
	          lanes = JSCompiler_inline_result;
	          a: {
	            var root = root$jscomp$0;
	            exitStatus = workInProgressRootConcurrentErrors;
	            var wasRootDehydrated = root.current.memoizedState.isDehydrated;
	            wasRootDehydrated &&
	              (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
	            JSCompiler_inline_result = renderRootSync(
	              root,
	              JSCompiler_inline_result,
	              !1
	            );
	            if (2 !== JSCompiler_inline_result) {
	              if (
	                workInProgressRootDidAttachPingListener &&
	                !wasRootDehydrated
	              ) {
	                root.errorRecoveryDisabledLanes |= renderWasConcurrent;
	                workInProgressRootInterleavedUpdatedLanes |=
	                  renderWasConcurrent;
	                exitStatus = 4;
	                break a;
	              }
	              renderWasConcurrent = workInProgressRootRecoverableErrors;
	              workInProgressRootRecoverableErrors = exitStatus;
	              null !== renderWasConcurrent &&
	                (null === workInProgressRootRecoverableErrors
	                  ? (workInProgressRootRecoverableErrors = renderWasConcurrent)
	                  : workInProgressRootRecoverableErrors.push.apply(
	                      workInProgressRootRecoverableErrors,
	                      renderWasConcurrent
	                    ));
	            }
	            exitStatus = JSCompiler_inline_result;
	          }
	          renderWasConcurrent = !1;
	          if (2 !== exitStatus) continue;
	        }
	      }
	      if (1 === exitStatus) {
	        prepareFreshStack(root$jscomp$0, 0);
	        markRootSuspended(root$jscomp$0, lanes, 0, !0);
	        break;
	      }
	      a: {
	        shouldTimeSlice = root$jscomp$0;
	        renderWasConcurrent = exitStatus;
	        switch (renderWasConcurrent) {
	          case 0:
	          case 1:
	            throw Error(formatProdErrorMessage(345));
	          case 4:
	            if ((lanes & 4194048) !== lanes) break;
	          case 6:
	            markRootSuspended(
	              shouldTimeSlice,
	              lanes,
	              workInProgressDeferredLane,
	              !workInProgressRootDidSkipSuspendedSiblings
	            );
	            break a;
	          case 2:
	            workInProgressRootRecoverableErrors = null;
	            break;
	          case 3:
	          case 5:
	            break;
	          default:
	            throw Error(formatProdErrorMessage(329));
	        }
	        if (
	          (lanes & 62914560) === lanes &&
	          ((exitStatus = globalMostRecentFallbackTime + 300 - now()),
	          10 < exitStatus)
	        ) {
	          markRootSuspended(
	            shouldTimeSlice,
	            lanes,
	            workInProgressDeferredLane,
	            !workInProgressRootDidSkipSuspendedSiblings
	          );
	          if (0 !== getNextLanes(shouldTimeSlice, 0, !0)) break a;
	          pendingEffectsLanes = lanes;
	          shouldTimeSlice.timeoutHandle = scheduleTimeout(
	            commitRootWhenReady.bind(
	              null,
	              shouldTimeSlice,
	              forceSync,
	              workInProgressRootRecoverableErrors,
	              workInProgressTransitions,
	              workInProgressRootDidIncludeRecursiveRenderUpdate,
	              lanes,
	              workInProgressDeferredLane,
	              workInProgressRootInterleavedUpdatedLanes,
	              workInProgressSuspendedRetryLanes,
	              workInProgressRootDidSkipSuspendedSiblings,
	              renderWasConcurrent,
	              "Throttled",
	              -0,
	              0
	            ),
	            exitStatus
	          );
	          break a;
	        }
	        commitRootWhenReady(
	          shouldTimeSlice,
	          forceSync,
	          workInProgressRootRecoverableErrors,
	          workInProgressTransitions,
	          workInProgressRootDidIncludeRecursiveRenderUpdate,
	          lanes,
	          workInProgressDeferredLane,
	          workInProgressRootInterleavedUpdatedLanes,
	          workInProgressSuspendedRetryLanes,
	          workInProgressRootDidSkipSuspendedSiblings,
	          renderWasConcurrent,
	          null,
	          -0,
	          0
	        );
	      }
	    }
	    break;
	  } while (1);
	  ensureRootIsScheduled(root$jscomp$0);
	}
	function commitRootWhenReady(
	  root,
	  finishedWork,
	  recoverableErrors,
	  transitions,
	  didIncludeRenderPhaseUpdate,
	  lanes,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes,
	  didSkipSuspendedSiblings,
	  exitStatus,
	  suspendedCommitReason,
	  completedRenderStartTime,
	  completedRenderEndTime
	) {
	  root.timeoutHandle = -1;
	  suspendedCommitReason = finishedWork.subtreeFlags;
	  if (
	    suspendedCommitReason & 8192 ||
	    16785408 === (suspendedCommitReason & 16785408)
	  ) {
	    suspendedCommitReason = {
	      stylesheets: null,
	      count: 0,
	      imgCount: 0,
	      imgBytes: 0,
	      suspenseyImages: [],
	      waitingForImages: !0,
	      waitingForViewTransition: !1,
	      unsuspend: noop$1
	    };
	    accumulateSuspenseyCommitOnFiber(
	      finishedWork,
	      lanes,
	      suspendedCommitReason
	    );
	    var timeoutOffset =
	      (lanes & 62914560) === lanes
	        ? globalMostRecentFallbackTime - now()
	        : (lanes & 4194048) === lanes
	          ? globalMostRecentTransitionTime - now()
	          : 0;
	    timeoutOffset = waitForCommitToBeReady(
	      suspendedCommitReason,
	      timeoutOffset
	    );
	    if (null !== timeoutOffset) {
	      pendingEffectsLanes = lanes;
	      root.cancelPendingCommit = timeoutOffset(
	        commitRoot.bind(
	          null,
	          root,
	          finishedWork,
	          lanes,
	          recoverableErrors,
	          transitions,
	          didIncludeRenderPhaseUpdate,
	          spawnedLane,
	          updatedLanes,
	          suspendedRetryLanes,
	          exitStatus,
	          suspendedCommitReason,
	          null,
	          completedRenderStartTime,
	          completedRenderEndTime
	        )
	      );
	      markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
	      return;
	    }
	  }
	  commitRoot(
	    root,
	    finishedWork,
	    lanes,
	    recoverableErrors,
	    transitions,
	    didIncludeRenderPhaseUpdate,
	    spawnedLane,
	    updatedLanes,
	    suspendedRetryLanes
	  );
	}
	function isRenderConsistentWithExternalStores(finishedWork) {
	  for (var node = finishedWork; ; ) {
	    var tag = node.tag;
	    if (
	      (0 === tag || 11 === tag || 15 === tag) &&
	      node.flags & 16384 &&
	      ((tag = node.updateQueue),
	      null !== tag && ((tag = tag.stores), null !== tag))
	    )
	      for (var i = 0; i < tag.length; i++) {
	        var check = tag[i],
	          getSnapshot = check.getSnapshot;
	        check = check.value;
	        try {
	          if (!objectIs(getSnapshot(), check)) return !1;
	        } catch (error) {
	          return !1;
	        }
	      }
	    tag = node.child;
	    if (node.subtreeFlags & 16384 && null !== tag)
	      (tag.return = node), (node = tag);
	    else {
	      if (node === finishedWork) break;
	      for (; null === node.sibling; ) {
	        if (null === node.return || node.return === finishedWork) return !0;
	        node = node.return;
	      }
	      node.sibling.return = node.return;
	      node = node.sibling;
	    }
	  }
	  return !0;
	}
	function markRootSuspended(
	  root,
	  suspendedLanes,
	  spawnedLane,
	  didAttemptEntireTree
	) {
	  suspendedLanes &= ~workInProgressRootPingedLanes;
	  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
	  root.suspendedLanes |= suspendedLanes;
	  root.pingedLanes &= ~suspendedLanes;
	  didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
	  didAttemptEntireTree = root.expirationTimes;
	  for (var lanes = suspendedLanes; 0 < lanes; ) {
	    var index$6 = 31 - clz32(lanes),
	      lane = 1 << index$6;
	    didAttemptEntireTree[index$6] = -1;
	    lanes &= ~lane;
	  }
	  0 !== spawnedLane &&
	    markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
	}
	function flushSyncWork$1() {
	  return 0 === (executionContext & 6)
	    ? (flushSyncWorkAcrossRoots_impl(0, !1), !1)
	    : !0;
	}
	function resetWorkInProgressStack() {
	  if (null !== workInProgress) {
	    if (0 === workInProgressSuspendedReason)
	      var interruptedWork = workInProgress.return;
	    else
	      (interruptedWork = workInProgress),
	        (lastContextDependency = currentlyRenderingFiber$1 = null),
	        resetHooksOnUnwind(interruptedWork),
	        (thenableState$1 = null),
	        (thenableIndexCounter$1 = 0),
	        (interruptedWork = workInProgress);
	    for (; null !== interruptedWork; )
	      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
	        (interruptedWork = interruptedWork.return);
	    workInProgress = null;
	  }
	}
	function prepareFreshStack(root, lanes) {
	  var timeoutHandle = root.timeoutHandle;
	  -1 !== timeoutHandle &&
	    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
	  timeoutHandle = root.cancelPendingCommit;
	  null !== timeoutHandle &&
	    ((root.cancelPendingCommit = null), timeoutHandle());
	  pendingEffectsLanes = 0;
	  resetWorkInProgressStack();
	  workInProgressRoot = root;
	  workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
	  workInProgressRootRenderLanes = lanes;
	  workInProgressSuspendedReason = 0;
	  workInProgressThrownValue = null;
	  workInProgressRootDidSkipSuspendedSiblings = !1;
	  workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
	  workInProgressRootDidAttachPingListener = !1;
	  workInProgressSuspendedRetryLanes =
	    workInProgressDeferredLane =
	    workInProgressRootPingedLanes =
	    workInProgressRootInterleavedUpdatedLanes =
	    workInProgressRootSkippedLanes =
	    workInProgressRootExitStatus =
	      0;
	  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
	    null;
	  workInProgressRootDidIncludeRecursiveRenderUpdate = !1;
	  0 !== (lanes & 8) && (lanes |= lanes & 32);
	  var allEntangledLanes = root.entangledLanes;
	  if (0 !== allEntangledLanes)
	    for (
	      root = root.entanglements, allEntangledLanes &= lanes;
	      0 < allEntangledLanes;

	    ) {
	      var index$4 = 31 - clz32(allEntangledLanes),
	        lane = 1 << index$4;
	      lanes |= root[index$4];
	      allEntangledLanes &= ~lane;
	    }
	  entangledRenderLanes = lanes;
	  finishQueueingConcurrentUpdates();
	  return timeoutHandle;
	}
	function handleThrow(root, thrownValue) {
	  currentlyRenderingFiber = null;
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  thrownValue === SuspenseException || thrownValue === SuspenseActionException
	    ? ((thrownValue = getSuspendedThenable()),
	      (workInProgressSuspendedReason = 3))
	    : thrownValue === SuspenseyCommitException
	      ? ((thrownValue = getSuspendedThenable()),
	        (workInProgressSuspendedReason = 4))
	      : (workInProgressSuspendedReason =
	          thrownValue === SelectiveHydrationException
	            ? 8
	            : null !== thrownValue &&
	                "object" === typeof thrownValue &&
	                "function" === typeof thrownValue.then
	              ? 6
	              : 1);
	  workInProgressThrownValue = thrownValue;
	  null === workInProgress &&
	    ((workInProgressRootExitStatus = 1),
	    logUncaughtError(
	      root,
	      createCapturedValueAtFiber(thrownValue, root.current)
	    ));
	}
	function shouldRemainOnPreviousScreen() {
	  var handler = suspenseHandlerStackCursor.current;
	  return null === handler
	    ? !0
	    : (workInProgressRootRenderLanes & 4194048) ===
	        workInProgressRootRenderLanes
	      ? null === shellBoundary
	        ? !0
	        : !1
	      : (workInProgressRootRenderLanes & 62914560) ===
	            workInProgressRootRenderLanes ||
	          0 !== (workInProgressRootRenderLanes & 536870912)
	        ? handler === shellBoundary
	        : !1;
	}
	function pushDispatcher() {
	  var prevDispatcher = ReactSharedInternals.H;
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
	}
	function pushAsyncDispatcher() {
	  var prevAsyncDispatcher = ReactSharedInternals.A;
	  ReactSharedInternals.A = DefaultAsyncDispatcher;
	  return prevAsyncDispatcher;
	}
	function renderDidSuspendDelayIfPossible() {
	  workInProgressRootExitStatus = 4;
	  workInProgressRootDidSkipSuspendedSiblings ||
	    ((workInProgressRootRenderLanes & 4194048) !==
	      workInProgressRootRenderLanes &&
	      null !== suspenseHandlerStackCursor.current) ||
	    (workInProgressRootIsPrerendering = !0);
	  (0 === (workInProgressRootSkippedLanes & 134217727) &&
	    0 === (workInProgressRootInterleavedUpdatedLanes & 134217727)) ||
	    null === workInProgressRoot ||
	    markRootSuspended(
	      workInProgressRoot,
	      workInProgressRootRenderLanes,
	      workInProgressDeferredLane,
	      !1
	    );
	}
	function renderRootSync(root, lanes, shouldYieldForPrerendering) {
	  var prevExecutionContext = executionContext;
	  executionContext |= 2;
	  var prevDispatcher = pushDispatcher(),
	    prevAsyncDispatcher = pushAsyncDispatcher();
	  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
	    (workInProgressTransitions = null), prepareFreshStack(root, lanes);
	  lanes = !1;
	  var exitStatus = workInProgressRootExitStatus;
	  a: do
	    try {
	      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
	        var unitOfWork = workInProgress,
	          thrownValue = workInProgressThrownValue;
	        switch (workInProgressSuspendedReason) {
	          case 8:
	            resetWorkInProgressStack();
	            exitStatus = 6;
	            break a;
	          case 3:
	          case 2:
	          case 9:
	          case 6:
	            null === suspenseHandlerStackCursor.current && (lanes = !0);
	            var reason = workInProgressSuspendedReason;
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
	            if (
	              shouldYieldForPrerendering &&
	              workInProgressRootIsPrerendering
	            ) {
	              exitStatus = 0;
	              break a;
	            }
	            break;
	          default:
	            (reason = workInProgressSuspendedReason),
	              (workInProgressSuspendedReason = 0),
	              (workInProgressThrownValue = null),
	              throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
	        }
	      }
	      workLoopSync();
	      exitStatus = workInProgressRootExitStatus;
	      break;
	    } catch (thrownValue$165) {
	      handleThrow(root, thrownValue$165);
	    }
	  while (1);
	  lanes && root.shellSuspendCounter++;
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  executionContext = prevExecutionContext;
	  ReactSharedInternals.H = prevDispatcher;
	  ReactSharedInternals.A = prevAsyncDispatcher;
	  null === workInProgress &&
	    ((workInProgressRoot = null),
	    (workInProgressRootRenderLanes = 0),
	    finishQueueingConcurrentUpdates());
	  return exitStatus;
	}
	function workLoopSync() {
	  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
	}
	function renderRootConcurrent(root, lanes) {
	  var prevExecutionContext = executionContext;
	  executionContext |= 2;
	  var prevDispatcher = pushDispatcher(),
	    prevAsyncDispatcher = pushAsyncDispatcher();
	  workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes
	    ? ((workInProgressTransitions = null),
	      (workInProgressRootRenderTargetTime = now() + 500),
	      prepareFreshStack(root, lanes))
	    : (workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
	        root,
	        lanes
	      ));
	  a: do
	    try {
	      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
	        lanes = workInProgress;
	        var thrownValue = workInProgressThrownValue;
	        b: switch (workInProgressSuspendedReason) {
	          case 1:
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 1);
	            break;
	          case 2:
	          case 9:
	            if (isThenableResolved(thrownValue)) {
	              workInProgressSuspendedReason = 0;
	              workInProgressThrownValue = null;
	              replaySuspendedUnitOfWork(lanes);
	              break;
	            }
	            lanes = function () {
	              (2 !== workInProgressSuspendedReason &&
	                9 !== workInProgressSuspendedReason) ||
	                workInProgressRoot !== root ||
	                (workInProgressSuspendedReason = 7);
	              ensureRootIsScheduled(root);
	            };
	            thrownValue.then(lanes, lanes);
	            break a;
	          case 3:
	            workInProgressSuspendedReason = 7;
	            break a;
	          case 4:
	            workInProgressSuspendedReason = 5;
	            break a;
	          case 7:
	            isThenableResolved(thrownValue)
	              ? ((workInProgressSuspendedReason = 0),
	                (workInProgressThrownValue = null),
	                replaySuspendedUnitOfWork(lanes))
	              : ((workInProgressSuspendedReason = 0),
	                (workInProgressThrownValue = null),
	                throwAndUnwindWorkLoop(root, lanes, thrownValue, 7));
	            break;
	          case 5:
	            var resource = null;
	            switch (workInProgress.tag) {
	              case 26:
	                resource = workInProgress.memoizedState;
	              case 5:
	              case 27:
	                var hostFiber = workInProgress;
	                if (
	                  resource
	                    ? preloadResource(resource)
	                    : hostFiber.stateNode.complete
	                ) {
	                  workInProgressSuspendedReason = 0;
	                  workInProgressThrownValue = null;
	                  var sibling = hostFiber.sibling;
	                  if (null !== sibling) workInProgress = sibling;
	                  else {
	                    var returnFiber = hostFiber.return;
	                    null !== returnFiber
	                      ? ((workInProgress = returnFiber),
	                        completeUnitOfWork(returnFiber))
	                      : (workInProgress = null);
	                  }
	                  break b;
	                }
	            }
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 5);
	            break;
	          case 6:
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 6);
	            break;
	          case 8:
	            resetWorkInProgressStack();
	            workInProgressRootExitStatus = 6;
	            break a;
	          default:
	            throw Error(formatProdErrorMessage(462));
	        }
	      }
	      workLoopConcurrentByScheduler();
	      break;
	    } catch (thrownValue$167) {
	      handleThrow(root, thrownValue$167);
	    }
	  while (1);
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  ReactSharedInternals.H = prevDispatcher;
	  ReactSharedInternals.A = prevAsyncDispatcher;
	  executionContext = prevExecutionContext;
	  if (null !== workInProgress) return 0;
	  workInProgressRoot = null;
	  workInProgressRootRenderLanes = 0;
	  finishQueueingConcurrentUpdates();
	  return workInProgressRootExitStatus;
	}
	function workLoopConcurrentByScheduler() {
	  for (; null !== workInProgress && !shouldYield(); )
	    performUnitOfWork(workInProgress);
	}
	function performUnitOfWork(unitOfWork) {
	  var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
	  unitOfWork.memoizedProps = unitOfWork.pendingProps;
	  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
	}
	function replaySuspendedUnitOfWork(unitOfWork) {
	  var next = unitOfWork;
	  var current = next.alternate;
	  switch (next.tag) {
	    case 15:
	    case 0:
	      next = replayFunctionComponent(
	        current,
	        next,
	        next.pendingProps,
	        next.type,
	        void 0,
	        workInProgressRootRenderLanes
	      );
	      break;
	    case 11:
	      next = replayFunctionComponent(
	        current,
	        next,
	        next.pendingProps,
	        next.type.render,
	        next.ref,
	        workInProgressRootRenderLanes
	      );
	      break;
	    case 5:
	      resetHooksOnUnwind(next);
	    default:
	      unwindInterruptedWork(current, next),
	        (next = workInProgress =
	          resetWorkInProgress(next, entangledRenderLanes)),
	        (next = beginWork(current, next, entangledRenderLanes));
	  }
	  unitOfWork.memoizedProps = unitOfWork.pendingProps;
	  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
	}
	function throwAndUnwindWorkLoop(
	  root,
	  unitOfWork,
	  thrownValue,
	  suspendedReason
	) {
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  resetHooksOnUnwind(unitOfWork);
	  thenableState$1 = null;
	  thenableIndexCounter$1 = 0;
	  var returnFiber = unitOfWork.return;
	  try {
	    if (
	      throwException(
	        root,
	        returnFiber,
	        unitOfWork,
	        thrownValue,
	        workInProgressRootRenderLanes
	      )
	    ) {
	      workInProgressRootExitStatus = 1;
	      logUncaughtError(
	        root,
	        createCapturedValueAtFiber(thrownValue, root.current)
	      );
	      workInProgress = null;
	      return;
	    }
	  } catch (error) {
	    if (null !== returnFiber) throw ((workInProgress = returnFiber), error);
	    workInProgressRootExitStatus = 1;
	    logUncaughtError(
	      root,
	      createCapturedValueAtFiber(thrownValue, root.current)
	    );
	    workInProgress = null;
	    return;
	  }
	  if (unitOfWork.flags & 32768) {
	    if (isHydrating || 1 === suspendedReason) root = !0;
	    else if (
	      workInProgressRootIsPrerendering ||
	      0 !== (workInProgressRootRenderLanes & 536870912)
	    )
	      root = !1;
	    else if (
	      ((workInProgressRootDidSkipSuspendedSiblings = root = !0),
	      2 === suspendedReason ||
	        9 === suspendedReason ||
	        3 === suspendedReason ||
	        6 === suspendedReason)
	    )
	      (suspendedReason = suspenseHandlerStackCursor.current),
	        null !== suspendedReason &&
	          13 === suspendedReason.tag &&
	          (suspendedReason.flags |= 16384);
	    unwindUnitOfWork(unitOfWork, root);
	  } else completeUnitOfWork(unitOfWork);
	}
	function completeUnitOfWork(unitOfWork) {
	  var completedWork = unitOfWork;
	  do {
	    if (0 !== (completedWork.flags & 32768)) {
	      unwindUnitOfWork(
	        completedWork,
	        workInProgressRootDidSkipSuspendedSiblings
	      );
	      return;
	    }
	    unitOfWork = completedWork.return;
	    var next = completeWork(
	      completedWork.alternate,
	      completedWork,
	      entangledRenderLanes
	    );
	    if (null !== next) {
	      workInProgress = next;
	      return;
	    }
	    completedWork = completedWork.sibling;
	    if (null !== completedWork) {
	      workInProgress = completedWork;
	      return;
	    }
	    workInProgress = completedWork = unitOfWork;
	  } while (null !== completedWork);
	  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
	}
	function unwindUnitOfWork(unitOfWork, skipSiblings) {
	  do {
	    var next = unwindWork(unitOfWork.alternate, unitOfWork);
	    if (null !== next) {
	      next.flags &= 32767;
	      workInProgress = next;
	      return;
	    }
	    next = unitOfWork.return;
	    null !== next &&
	      ((next.flags |= 32768), (next.subtreeFlags = 0), (next.deletions = null));
	    if (
	      !skipSiblings &&
	      ((unitOfWork = unitOfWork.sibling), null !== unitOfWork)
	    ) {
	      workInProgress = unitOfWork;
	      return;
	    }
	    workInProgress = unitOfWork = next;
	  } while (null !== unitOfWork);
	  workInProgressRootExitStatus = 6;
	  workInProgress = null;
	}
	function commitRoot(
	  root,
	  finishedWork,
	  lanes,
	  recoverableErrors,
	  transitions,
	  didIncludeRenderPhaseUpdate,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes
	) {
	  root.cancelPendingCommit = null;
	  do flushPendingEffects();
	  while (0 !== pendingEffectsStatus);
	  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
	  if (null !== finishedWork) {
	    if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
	    didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
	    didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
	    markRootFinished(
	      root,
	      lanes,
	      didIncludeRenderPhaseUpdate,
	      spawnedLane,
	      updatedLanes,
	      suspendedRetryLanes
	    );
	    root === workInProgressRoot &&
	      ((workInProgress = workInProgressRoot = null),
	      (workInProgressRootRenderLanes = 0));
	    pendingFinishedWork = finishedWork;
	    pendingEffectsRoot = root;
	    pendingEffectsLanes = lanes;
	    pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
	    pendingPassiveTransitions = transitions;
	    pendingRecoverableErrors = recoverableErrors;
	    0 !== (finishedWork.subtreeFlags & 10256) ||
	    0 !== (finishedWork.flags & 10256)
	      ? ((root.callbackNode = null),
	        (root.callbackPriority = 0),
	        scheduleCallback$1(NormalPriority$1, function () {
	          flushPassiveEffects();
	          return null;
	        }))
	      : ((root.callbackNode = null), (root.callbackPriority = 0));
	    recoverableErrors = 0 !== (finishedWork.flags & 13878);
	    if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
	      recoverableErrors = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      transitions = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      spawnedLane = executionContext;
	      executionContext |= 4;
	      try {
	        commitBeforeMutationEffects(root, finishedWork, lanes);
	      } finally {
	        (executionContext = spawnedLane),
	          (ReactDOMSharedInternals.p = transitions),
	          (ReactSharedInternals.T = recoverableErrors);
	      }
	    }
	    pendingEffectsStatus = 1;
	    flushMutationEffects();
	    flushLayoutEffects();
	    flushSpawnedWork();
	  }
	}
	function flushMutationEffects() {
	  if (1 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
	    if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
	      rootMutationHasEffect = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      var previousPriority = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      var prevExecutionContext = executionContext;
	      executionContext |= 4;
	      try {
	        commitMutationEffectsOnFiber(finishedWork, root);
	        var priorSelectionInformation = selectionInformation,
	          curFocusedElem = getActiveElementDeep(root.containerInfo),
	          priorFocusedElem = priorSelectionInformation.focusedElem,
	          priorSelectionRange = priorSelectionInformation.selectionRange;
	        if (
	          curFocusedElem !== priorFocusedElem &&
	          priorFocusedElem &&
	          priorFocusedElem.ownerDocument &&
	          containsNode(
	            priorFocusedElem.ownerDocument.documentElement,
	            priorFocusedElem
	          )
	        ) {
	          if (
	            null !== priorSelectionRange &&
	            hasSelectionCapabilities(priorFocusedElem)
	          ) {
	            var start = priorSelectionRange.start,
	              end = priorSelectionRange.end;
	            void 0 === end && (end = start);
	            if ("selectionStart" in priorFocusedElem)
	              (priorFocusedElem.selectionStart = start),
	                (priorFocusedElem.selectionEnd = Math.min(
	                  end,
	                  priorFocusedElem.value.length
	                ));
	            else {
	              var doc = priorFocusedElem.ownerDocument || document,
	                win = (doc && doc.defaultView) || window;
	              if (win.getSelection) {
	                var selection = win.getSelection(),
	                  length = priorFocusedElem.textContent.length,
	                  start$jscomp$0 = Math.min(priorSelectionRange.start, length),
	                  end$jscomp$0 =
	                    void 0 === priorSelectionRange.end
	                      ? start$jscomp$0
	                      : Math.min(priorSelectionRange.end, length);
	                !selection.extend &&
	                  start$jscomp$0 > end$jscomp$0 &&
	                  ((curFocusedElem = end$jscomp$0),
	                  (end$jscomp$0 = start$jscomp$0),
	                  (start$jscomp$0 = curFocusedElem));
	                var startMarker = getNodeForCharacterOffset(
	                    priorFocusedElem,
	                    start$jscomp$0
	                  ),
	                  endMarker = getNodeForCharacterOffset(
	                    priorFocusedElem,
	                    end$jscomp$0
	                  );
	                if (
	                  startMarker &&
	                  endMarker &&
	                  (1 !== selection.rangeCount ||
	                    selection.anchorNode !== startMarker.node ||
	                    selection.anchorOffset !== startMarker.offset ||
	                    selection.focusNode !== endMarker.node ||
	                    selection.focusOffset !== endMarker.offset)
	                ) {
	                  var range = doc.createRange();
	                  range.setStart(startMarker.node, startMarker.offset);
	                  selection.removeAllRanges();
	                  start$jscomp$0 > end$jscomp$0
	                    ? (selection.addRange(range),
	                      selection.extend(endMarker.node, endMarker.offset))
	                    : (range.setEnd(endMarker.node, endMarker.offset),
	                      selection.addRange(range));
	                }
	              }
	            }
	          }
	          doc = [];
	          for (
	            selection = priorFocusedElem;
	            (selection = selection.parentNode);

	          )
	            1 === selection.nodeType &&
	              doc.push({
	                element: selection,
	                left: selection.scrollLeft,
	                top: selection.scrollTop
	              });
	          "function" === typeof priorFocusedElem.focus &&
	            priorFocusedElem.focus();
	          for (
	            priorFocusedElem = 0;
	            priorFocusedElem < doc.length;
	            priorFocusedElem++
	          ) {
	            var info = doc[priorFocusedElem];
	            info.element.scrollLeft = info.left;
	            info.element.scrollTop = info.top;
	          }
	        }
	        _enabled = !!eventsEnabled;
	        selectionInformation = eventsEnabled = null;
	      } finally {
	        (executionContext = prevExecutionContext),
	          (ReactDOMSharedInternals.p = previousPriority),
	          (ReactSharedInternals.T = rootMutationHasEffect);
	      }
	    }
	    root.current = finishedWork;
	    pendingEffectsStatus = 2;
	  }
	}
	function flushLayoutEffects() {
	  if (2 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
	    if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
	      rootHasLayoutEffect = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      var previousPriority = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      var prevExecutionContext = executionContext;
	      executionContext |= 4;
	      try {
	        commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
	      } finally {
	        (executionContext = prevExecutionContext),
	          (ReactDOMSharedInternals.p = previousPriority),
	          (ReactSharedInternals.T = rootHasLayoutEffect);
	      }
	    }
	    pendingEffectsStatus = 3;
	  }
	}
	function flushSpawnedWork() {
	  if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    requestPaint();
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      lanes = pendingEffectsLanes,
	      recoverableErrors = pendingRecoverableErrors;
	    0 !== (finishedWork.subtreeFlags & 10256) ||
	    0 !== (finishedWork.flags & 10256)
	      ? (pendingEffectsStatus = 5)
	      : ((pendingEffectsStatus = 0),
	        (pendingFinishedWork = pendingEffectsRoot = null),
	        releaseRootPooledCache(root, root.pendingLanes));
	    var remainingLanes = root.pendingLanes;
	    0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
	    lanesToEventPriority(lanes);
	    finishedWork = finishedWork.stateNode;
	    if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
	      try {
	        injectedHook.onCommitFiberRoot(
	          rendererID,
	          finishedWork,
	          void 0,
	          128 === (finishedWork.current.flags & 128)
	        );
	      } catch (err) {}
	    if (null !== recoverableErrors) {
	      finishedWork = ReactSharedInternals.T;
	      remainingLanes = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      ReactSharedInternals.T = null;
	      try {
	        for (
	          var onRecoverableError = root.onRecoverableError, i = 0;
	          i < recoverableErrors.length;
	          i++
	        ) {
	          var recoverableError = recoverableErrors[i];
	          onRecoverableError(recoverableError.value, {
	            componentStack: recoverableError.stack
	          });
	        }
	      } finally {
	        (ReactSharedInternals.T = finishedWork),
	          (ReactDOMSharedInternals.p = remainingLanes);
	      }
	    }
	    0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
	    ensureRootIsScheduled(root);
	    remainingLanes = root.pendingLanes;
	    0 !== (lanes & 261930) && 0 !== (remainingLanes & 42)
	      ? root === rootWithNestedUpdates
	        ? nestedUpdateCount++
	        : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root))
	      : (nestedUpdateCount = 0);
	    flushSyncWorkAcrossRoots_impl(0, !1);
	  }
	}
	function releaseRootPooledCache(root, remainingLanes) {
	  0 === (root.pooledCacheLanes &= remainingLanes) &&
	    ((remainingLanes = root.pooledCache),
	    null != remainingLanes &&
	      ((root.pooledCache = null), releaseCache(remainingLanes)));
	}
	function flushPendingEffects() {
	  flushMutationEffects();
	  flushLayoutEffects();
	  flushSpawnedWork();
	  return flushPassiveEffects();
	}
	function flushPassiveEffects() {
	  if (5 !== pendingEffectsStatus) return !1;
	  var root = pendingEffectsRoot,
	    remainingLanes = pendingEffectsRemainingLanes;
	  pendingEffectsRemainingLanes = 0;
	  var renderPriority = lanesToEventPriority(pendingEffectsLanes),
	    prevTransition = ReactSharedInternals.T,
	    previousPriority = ReactDOMSharedInternals.p;
	  try {
	    ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
	    ReactSharedInternals.T = null;
	    renderPriority = pendingPassiveTransitions;
	    pendingPassiveTransitions = null;
	    var root$jscomp$0 = pendingEffectsRoot,
	      lanes = pendingEffectsLanes;
	    pendingEffectsStatus = 0;
	    pendingFinishedWork = pendingEffectsRoot = null;
	    pendingEffectsLanes = 0;
	    if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
	    var prevExecutionContext = executionContext;
	    executionContext |= 4;
	    commitPassiveUnmountOnFiber(root$jscomp$0.current);
	    commitPassiveMountOnFiber(
	      root$jscomp$0,
	      root$jscomp$0.current,
	      lanes,
	      renderPriority
	    );
	    executionContext = prevExecutionContext;
	    flushSyncWorkAcrossRoots_impl(0, !1);
	    if (
	      injectedHook &&
	      "function" === typeof injectedHook.onPostCommitFiberRoot
	    )
	      try {
	        injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
	      } catch (err) {}
	    return !0;
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition),
	      releaseRootPooledCache(root, remainingLanes);
	  }
	}
	function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
	  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
	  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
	  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
	  null !== rootFiber &&
	    (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
	}
	function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
	  if (3 === sourceFiber.tag)
	    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
	  else
	    for (; null !== nearestMountedAncestor; ) {
	      if (3 === nearestMountedAncestor.tag) {
	        captureCommitPhaseErrorOnRoot(
	          nearestMountedAncestor,
	          sourceFiber,
	          error
	        );
	        break;
	      } else if (1 === nearestMountedAncestor.tag) {
	        var instance = nearestMountedAncestor.stateNode;
	        if (
	          "function" ===
	            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
	          ("function" === typeof instance.componentDidCatch &&
	            (null === legacyErrorBoundariesThatAlreadyFailed ||
	              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
	        ) {
	          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
	          error = createClassErrorUpdate(2);
	          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
	          null !== instance &&
	            (initializeClassErrorUpdate(
	              error,
	              instance,
	              nearestMountedAncestor,
	              sourceFiber
	            ),
	            markRootUpdated$1(instance, 2),
	            ensureRootIsScheduled(instance));
	          break;
	        }
	      }
	      nearestMountedAncestor = nearestMountedAncestor.return;
	    }
	}
	function attachPingListener(root, wakeable, lanes) {
	  var pingCache = root.pingCache;
	  if (null === pingCache) {
	    pingCache = root.pingCache = new PossiblyWeakMap();
	    var threadIDs = new Set();
	    pingCache.set(wakeable, threadIDs);
	  } else
	    (threadIDs = pingCache.get(wakeable)),
	      void 0 === threadIDs &&
	        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
	  threadIDs.has(lanes) ||
	    ((workInProgressRootDidAttachPingListener = !0),
	    threadIDs.add(lanes),
	    (root = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
	    wakeable.then(root, root));
	}
	function pingSuspendedRoot(root, wakeable, pingedLanes) {
	  var pingCache = root.pingCache;
	  null !== pingCache && pingCache.delete(wakeable);
	  root.pingedLanes |= root.suspendedLanes & pingedLanes;
	  root.warmLanes &= ~pingedLanes;
	  workInProgressRoot === root &&
	    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
	    (4 === workInProgressRootExitStatus ||
	    (3 === workInProgressRootExitStatus &&
	      (workInProgressRootRenderLanes & 62914560) ===
	        workInProgressRootRenderLanes &&
	      300 > now() - globalMostRecentFallbackTime)
	      ? 0 === (executionContext & 2) && prepareFreshStack(root, 0)
	      : (workInProgressRootPingedLanes |= pingedLanes),
	    workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes &&
	      (workInProgressSuspendedRetryLanes = 0));
	  ensureRootIsScheduled(root);
	}
	function retryTimedOutBoundary(boundaryFiber, retryLane) {
	  0 === retryLane && (retryLane = claimNextRetryLane());
	  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
	  null !== boundaryFiber &&
	    (markRootUpdated$1(boundaryFiber, retryLane),
	    ensureRootIsScheduled(boundaryFiber));
	}
	function retryDehydratedSuspenseBoundary(boundaryFiber) {
	  var suspenseState = boundaryFiber.memoizedState,
	    retryLane = 0;
	  null !== suspenseState && (retryLane = suspenseState.retryLane);
	  retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function resolveRetryWakeable(boundaryFiber, wakeable) {
	  var retryLane = 0;
	  switch (boundaryFiber.tag) {
	    case 31:
	    case 13:
	      var retryCache = boundaryFiber.stateNode;
	      var suspenseState = boundaryFiber.memoizedState;
	      null !== suspenseState && (retryLane = suspenseState.retryLane);
	      break;
	    case 19:
	      retryCache = boundaryFiber.stateNode;
	      break;
	    case 22:
	      retryCache = boundaryFiber.stateNode._retryCache;
	      break;
	    default:
	      throw Error(formatProdErrorMessage(314));
	  }
	  null !== retryCache && retryCache.delete(wakeable);
	  retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function scheduleCallback$1(priorityLevel, callback) {
	  return scheduleCallback$3(priorityLevel, callback);
	}
	var firstScheduledRoot = null,
	  lastScheduledRoot = null,
	  didScheduleMicrotask = !1,
	  mightHavePendingSyncWork = !1,
	  isFlushingWork = !1,
	  currentEventTransitionLane = 0;
	function ensureRootIsScheduled(root) {
	  root !== lastScheduledRoot &&
	    null === root.next &&
	    (null === lastScheduledRoot
	      ? (firstScheduledRoot = lastScheduledRoot = root)
	      : (lastScheduledRoot = lastScheduledRoot.next = root));
	  mightHavePendingSyncWork = !0;
	  didScheduleMicrotask ||
	    ((didScheduleMicrotask = !0), scheduleImmediateRootScheduleTask());
	}
	function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
	  if (!isFlushingWork && mightHavePendingSyncWork) {
	    isFlushingWork = !0;
	    do {
	      var didPerformSomeWork = !1;
	      for (var root$170 = firstScheduledRoot; null !== root$170; ) {
	        if (!onlyLegacy)
	          if (0 !== syncTransitionLanes) {
	            var pendingLanes = root$170.pendingLanes;
	            if (0 === pendingLanes) var JSCompiler_inline_result = 0;
	            else {
	              var suspendedLanes = root$170.suspendedLanes,
	                pingedLanes = root$170.pingedLanes;
	              JSCompiler_inline_result =
	                (1 << (31 - clz32(42 | syncTransitionLanes) + 1)) - 1;
	              JSCompiler_inline_result &=
	                pendingLanes & ~(suspendedLanes & ~pingedLanes);
	              JSCompiler_inline_result =
	                JSCompiler_inline_result & 201326741
	                  ? (JSCompiler_inline_result & 201326741) | 1
	                  : JSCompiler_inline_result
	                    ? JSCompiler_inline_result | 2
	                    : 0;
	            }
	            0 !== JSCompiler_inline_result &&
	              ((didPerformSomeWork = !0),
	              performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
	          } else
	            (JSCompiler_inline_result = workInProgressRootRenderLanes),
	              (JSCompiler_inline_result = getNextLanes(
	                root$170,
	                root$170 === workInProgressRoot ? JSCompiler_inline_result : 0,
	                null !== root$170.cancelPendingCommit ||
	                  -1 !== root$170.timeoutHandle
	              )),
	              0 === (JSCompiler_inline_result & 3) ||
	                checkIfRootIsPrerendering(root$170, JSCompiler_inline_result) ||
	                ((didPerformSomeWork = !0),
	                performSyncWorkOnRoot(root$170, JSCompiler_inline_result));
	        root$170 = root$170.next;
	      }
	    } while (didPerformSomeWork);
	    isFlushingWork = !1;
	  }
	}
	function processRootScheduleInImmediateTask() {
	  processRootScheduleInMicrotask();
	}
	function processRootScheduleInMicrotask() {
	  mightHavePendingSyncWork = didScheduleMicrotask = !1;
	  var syncTransitionLanes = 0;
	  0 !== currentEventTransitionLane &&
	    shouldAttemptEagerTransition() &&
	    (syncTransitionLanes = currentEventTransitionLane);
	  for (
	    var currentTime = now(), prev = null, root = firstScheduledRoot;
	    null !== root;

	  ) {
	    var next = root.next,
	      nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
	    if (0 === nextLanes)
	      (root.next = null),
	        null === prev ? (firstScheduledRoot = next) : (prev.next = next),
	        null === next && (lastScheduledRoot = prev);
	    else if (
	      ((prev = root), 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
	    )
	      mightHavePendingSyncWork = !0;
	    root = next;
	  }
	  (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus) ||
	    flushSyncWorkAcrossRoots_impl(syncTransitionLanes, !1);
	  0 !== currentEventTransitionLane && (currentEventTransitionLane = 0);
	}
	function scheduleTaskForRootDuringMicrotask(root, currentTime) {
	  for (
	    var suspendedLanes = root.suspendedLanes,
	      pingedLanes = root.pingedLanes,
	      expirationTimes = root.expirationTimes,
	      lanes = root.pendingLanes & -62914561;
	    0 < lanes;

	  ) {
	    var index$5 = 31 - clz32(lanes),
	      lane = 1 << index$5,
	      expirationTime = expirationTimes[index$5];
	    if (-1 === expirationTime) {
	      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
	        expirationTimes[index$5] = computeExpirationTime(lane, currentTime);
	    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
	    lanes &= ~lane;
	  }
	  currentTime = workInProgressRoot;
	  suspendedLanes = workInProgressRootRenderLanes;
	  suspendedLanes = getNextLanes(
	    root,
	    root === currentTime ? suspendedLanes : 0,
	    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
	  );
	  pingedLanes = root.callbackNode;
	  if (
	    0 === suspendedLanes ||
	    (root === currentTime &&
	      (2 === workInProgressSuspendedReason ||
	        9 === workInProgressSuspendedReason)) ||
	    null !== root.cancelPendingCommit
	  )
	    return (
	      null !== pingedLanes &&
	        null !== pingedLanes &&
	        cancelCallback$1(pingedLanes),
	      (root.callbackNode = null),
	      (root.callbackPriority = 0)
	    );
	  if (
	    0 === (suspendedLanes & 3) ||
	    checkIfRootIsPrerendering(root, suspendedLanes)
	  ) {
	    currentTime = suspendedLanes & -suspendedLanes;
	    if (currentTime === root.callbackPriority) return currentTime;
	    null !== pingedLanes && cancelCallback$1(pingedLanes);
	    switch (lanesToEventPriority(suspendedLanes)) {
	      case 2:
	      case 8:
	        suspendedLanes = UserBlockingPriority;
	        break;
	      case 32:
	        suspendedLanes = NormalPriority$1;
	        break;
	      case 268435456:
	        suspendedLanes = IdlePriority;
	        break;
	      default:
	        suspendedLanes = NormalPriority$1;
	    }
	    pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
	    suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
	    root.callbackPriority = currentTime;
	    root.callbackNode = suspendedLanes;
	    return currentTime;
	  }
	  null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
	  root.callbackPriority = 2;
	  root.callbackNode = null;
	  return 2;
	}
	function performWorkOnRootViaSchedulerTask(root, didTimeout) {
	  if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
	    return (root.callbackNode = null), (root.callbackPriority = 0), null;
	  var originalCallbackNode = root.callbackNode;
	  if (flushPendingEffects() && root.callbackNode !== originalCallbackNode)
	    return null;
	  var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
	  workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
	    root,
	    root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
	    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
	  );
	  if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
	  performWorkOnRoot(root, workInProgressRootRenderLanes$jscomp$0, didTimeout);
	  scheduleTaskForRootDuringMicrotask(root, now());
	  return null != root.callbackNode && root.callbackNode === originalCallbackNode
	    ? performWorkOnRootViaSchedulerTask.bind(null, root)
	    : null;
	}
	function performSyncWorkOnRoot(root, lanes) {
	  if (flushPendingEffects()) return null;
	  performWorkOnRoot(root, lanes, !0);
	}
	function scheduleImmediateRootScheduleTask() {
	  scheduleMicrotask(function () {
	    0 !== (executionContext & 6)
	      ? scheduleCallback$3(
	          ImmediatePriority,
	          processRootScheduleInImmediateTask
	        )
	      : processRootScheduleInMicrotask();
	  });
	}
	function requestTransitionLane() {
	  if (0 === currentEventTransitionLane) {
	    var actionScopeLane = currentEntangledLane;
	    0 === actionScopeLane &&
	      ((actionScopeLane = nextTransitionUpdateLane),
	      (nextTransitionUpdateLane <<= 1),
	      0 === (nextTransitionUpdateLane & 261888) &&
	        (nextTransitionUpdateLane = 256));
	    currentEventTransitionLane = actionScopeLane;
	  }
	  return currentEventTransitionLane;
	}
	function coerceFormActionProp(actionProp) {
	  return null == actionProp ||
	    "symbol" === typeof actionProp ||
	    "boolean" === typeof actionProp
	    ? null
	    : "function" === typeof actionProp
	      ? actionProp
	      : sanitizeURL("" + actionProp);
	}
	function createFormDataWithSubmitter(form, submitter) {
	  var temp = submitter.ownerDocument.createElement("input");
	  temp.name = submitter.name;
	  temp.value = submitter.value;
	  form.id && temp.setAttribute("form", form.id);
	  submitter.parentNode.insertBefore(temp, submitter);
	  form = new FormData(form);
	  temp.parentNode.removeChild(temp);
	  return form;
	}
	function extractEvents$1(
	  dispatchQueue,
	  domEventName,
	  maybeTargetInst,
	  nativeEvent,
	  nativeEventTarget
	) {
	  if (
	    "submit" === domEventName &&
	    maybeTargetInst &&
	    maybeTargetInst.stateNode === nativeEventTarget
	  ) {
	    var action = coerceFormActionProp(
	        (nativeEventTarget[internalPropsKey] || null).action
	      ),
	      submitter = nativeEvent.submitter;
	    submitter &&
	      ((domEventName = (domEventName = submitter[internalPropsKey] || null)
	        ? coerceFormActionProp(domEventName.formAction)
	        : submitter.getAttribute("formAction")),
	      null !== domEventName && ((action = domEventName), (submitter = null)));
	    var event = new SyntheticEvent(
	      "action",
	      "action",
	      null,
	      nativeEvent,
	      nativeEventTarget
	    );
	    dispatchQueue.push({
	      event: event,
	      listeners: [
	        {
	          instance: null,
	          listener: function () {
	            if (nativeEvent.defaultPrevented) {
	              if (0 !== currentEventTransitionLane) {
	                var formData = submitter
	                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
	                  : new FormData(nativeEventTarget);
	                startHostTransition(
	                  maybeTargetInst,
	                  {
	                    pending: !0,
	                    data: formData,
	                    method: nativeEventTarget.method,
	                    action: action
	                  },
	                  null,
	                  formData
	                );
	              }
	            } else
	              "function" === typeof action &&
	                (event.preventDefault(),
	                (formData = submitter
	                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
	                  : new FormData(nativeEventTarget)),
	                startHostTransition(
	                  maybeTargetInst,
	                  {
	                    pending: !0,
	                    data: formData,
	                    method: nativeEventTarget.method,
	                    action: action
	                  },
	                  action,
	                  formData
	                ));
	          },
	          currentTarget: nativeEventTarget
	        }
	      ]
	    });
	  }
	}
	for (
	  var i$jscomp$inline_1577 = 0;
	  i$jscomp$inline_1577 < simpleEventPluginEvents.length;
	  i$jscomp$inline_1577++
	) {
	  var eventName$jscomp$inline_1578 =
	      simpleEventPluginEvents[i$jscomp$inline_1577],
	    domEventName$jscomp$inline_1579 =
	      eventName$jscomp$inline_1578.toLowerCase(),
	    capitalizedEvent$jscomp$inline_1580 =
	      eventName$jscomp$inline_1578[0].toUpperCase() +
	      eventName$jscomp$inline_1578.slice(1);
	  registerSimpleEvent(
	    domEventName$jscomp$inline_1579,
	    "on" + capitalizedEvent$jscomp$inline_1580
	  );
	}
	registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
	registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
	registerSimpleEvent(ANIMATION_START, "onAnimationStart");
	registerSimpleEvent("dblclick", "onDoubleClick");
	registerSimpleEvent("focusin", "onFocus");
	registerSimpleEvent("focusout", "onBlur");
	registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
	registerSimpleEvent(TRANSITION_START, "onTransitionStart");
	registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
	registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
	registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
	registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
	registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
	registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
	registerTwoPhaseEvent(
	  "onChange",
	  "change click focusin focusout input keydown keyup selectionchange".split(" ")
	);
	registerTwoPhaseEvent(
	  "onSelect",
	  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
	    " "
	  )
	);
	registerTwoPhaseEvent("onBeforeInput", [
	  "compositionend",
	  "keypress",
	  "textInput",
	  "paste"
	]);
	registerTwoPhaseEvent(
	  "onCompositionEnd",
	  "compositionend focusout keydown keypress keyup mousedown".split(" ")
	);
	registerTwoPhaseEvent(
	  "onCompositionStart",
	  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
	);
	registerTwoPhaseEvent(
	  "onCompositionUpdate",
	  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
	);
	var mediaEventTypes =
	    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
	      " "
	    ),
	  nonDelegatedEvents = new Set(
	    "beforetoggle cancel close invalid load scroll scrollend toggle"
	      .split(" ")
	      .concat(mediaEventTypes)
	  );
	function processDispatchQueue(dispatchQueue, eventSystemFlags) {
	  eventSystemFlags = 0 !== (eventSystemFlags & 4);
	  for (var i = 0; i < dispatchQueue.length; i++) {
	    var _dispatchQueue$i = dispatchQueue[i],
	      event = _dispatchQueue$i.event;
	    _dispatchQueue$i = _dispatchQueue$i.listeners;
	    a: {
	      var previousInstance = void 0;
	      if (eventSystemFlags)
	        for (
	          var i$jscomp$0 = _dispatchQueue$i.length - 1;
	          0 <= i$jscomp$0;
	          i$jscomp$0--
	        ) {
	          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0],
	            instance = _dispatchListeners$i.instance,
	            currentTarget = _dispatchListeners$i.currentTarget;
	          _dispatchListeners$i = _dispatchListeners$i.listener;
	          if (instance !== previousInstance && event.isPropagationStopped())
	            break a;
	          previousInstance = _dispatchListeners$i;
	          event.currentTarget = currentTarget;
	          try {
	            previousInstance(event);
	          } catch (error) {
	            reportGlobalError(error);
	          }
	          event.currentTarget = null;
	          previousInstance = instance;
	        }
	      else
	        for (
	          i$jscomp$0 = 0;
	          i$jscomp$0 < _dispatchQueue$i.length;
	          i$jscomp$0++
	        ) {
	          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
	          instance = _dispatchListeners$i.instance;
	          currentTarget = _dispatchListeners$i.currentTarget;
	          _dispatchListeners$i = _dispatchListeners$i.listener;
	          if (instance !== previousInstance && event.isPropagationStopped())
	            break a;
	          previousInstance = _dispatchListeners$i;
	          event.currentTarget = currentTarget;
	          try {
	            previousInstance(event);
	          } catch (error) {
	            reportGlobalError(error);
	          }
	          event.currentTarget = null;
	          previousInstance = instance;
	        }
	    }
	  }
	}
	function listenToNonDelegatedEvent(domEventName, targetElement) {
	  var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
	  void 0 === JSCompiler_inline_result &&
	    (JSCompiler_inline_result = targetElement[internalEventHandlersKey] =
	      new Set());
	  var listenerSetKey = domEventName + "__bubble";
	  JSCompiler_inline_result.has(listenerSetKey) ||
	    (addTrappedEventListener(targetElement, domEventName, 2, !1),
	    JSCompiler_inline_result.add(listenerSetKey));
	}
	function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
	  var eventSystemFlags = 0;
	  isCapturePhaseListener && (eventSystemFlags |= 4);
	  addTrappedEventListener(
	    target,
	    domEventName,
	    eventSystemFlags,
	    isCapturePhaseListener
	  );
	}
	var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
	function listenToAllSupportedEvents(rootContainerElement) {
	  if (!rootContainerElement[listeningMarker]) {
	    rootContainerElement[listeningMarker] = !0;
	    allNativeEvents.forEach(function (domEventName) {
	      "selectionchange" !== domEventName &&
	        (nonDelegatedEvents.has(domEventName) ||
	          listenToNativeEvent(domEventName, !1, rootContainerElement),
	        listenToNativeEvent(domEventName, !0, rootContainerElement));
	    });
	    var ownerDocument =
	      9 === rootContainerElement.nodeType
	        ? rootContainerElement
	        : rootContainerElement.ownerDocument;
	    null === ownerDocument ||
	      ownerDocument[listeningMarker] ||
	      ((ownerDocument[listeningMarker] = !0),
	      listenToNativeEvent("selectionchange", !1, ownerDocument));
	  }
	}
	function addTrappedEventListener(
	  targetContainer,
	  domEventName,
	  eventSystemFlags,
	  isCapturePhaseListener
	) {
	  switch (getEventPriority(domEventName)) {
	    case 2:
	      var listenerWrapper = dispatchDiscreteEvent;
	      break;
	    case 8:
	      listenerWrapper = dispatchContinuousEvent;
	      break;
	    default:
	      listenerWrapper = dispatchEvent;
	  }
	  eventSystemFlags = listenerWrapper.bind(
	    null,
	    domEventName,
	    eventSystemFlags,
	    targetContainer
	  );
	  listenerWrapper = void 0;
	  !passiveBrowserEventsSupported ||
	    ("touchstart" !== domEventName &&
	      "touchmove" !== domEventName &&
	      "wheel" !== domEventName) ||
	    (listenerWrapper = !0);
	  isCapturePhaseListener
	    ? void 0 !== listenerWrapper
	      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
	          capture: !0,
	          passive: listenerWrapper
	        })
	      : targetContainer.addEventListener(domEventName, eventSystemFlags, !0)
	    : void 0 !== listenerWrapper
	      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
	          passive: listenerWrapper
	        })
	      : targetContainer.addEventListener(domEventName, eventSystemFlags, !1);
	}
	function dispatchEventForPluginEventSystem(
	  domEventName,
	  eventSystemFlags,
	  nativeEvent,
	  targetInst$jscomp$0,
	  targetContainer
	) {
	  var ancestorInst = targetInst$jscomp$0;
	  if (
	    0 === (eventSystemFlags & 1) &&
	    0 === (eventSystemFlags & 2) &&
	    null !== targetInst$jscomp$0
	  )
	    a: for (;;) {
	      if (null === targetInst$jscomp$0) return;
	      var nodeTag = targetInst$jscomp$0.tag;
	      if (3 === nodeTag || 4 === nodeTag) {
	        var container = targetInst$jscomp$0.stateNode.containerInfo;
	        if (container === targetContainer) break;
	        if (4 === nodeTag)
	          for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
	            var grandTag = nodeTag.tag;
	            if (
	              (3 === grandTag || 4 === grandTag) &&
	              nodeTag.stateNode.containerInfo === targetContainer
	            )
	              return;
	            nodeTag = nodeTag.return;
	          }
	        for (; null !== container; ) {
	          nodeTag = getClosestInstanceFromNode(container);
	          if (null === nodeTag) return;
	          grandTag = nodeTag.tag;
	          if (
	            5 === grandTag ||
	            6 === grandTag ||
	            26 === grandTag ||
	            27 === grandTag
	          ) {
	            targetInst$jscomp$0 = ancestorInst = nodeTag;
	            continue a;
	          }
	          container = container.parentNode;
	        }
	      }
	      targetInst$jscomp$0 = targetInst$jscomp$0.return;
	    }
	  batchedUpdates$1(function () {
	    var targetInst = ancestorInst,
	      nativeEventTarget = getEventTarget(nativeEvent),
	      dispatchQueue = [];
	    a: {
	      var reactName = topLevelEventsToReactNames.get(domEventName);
	      if (void 0 !== reactName) {
	        var SyntheticEventCtor = SyntheticEvent,
	          reactEventType = domEventName;
	        switch (domEventName) {
	          case "keypress":
	            if (0 === getEventCharCode(nativeEvent)) break a;
	          case "keydown":
	          case "keyup":
	            SyntheticEventCtor = SyntheticKeyboardEvent;
	            break;
	          case "focusin":
	            reactEventType = "focus";
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "focusout":
	            reactEventType = "blur";
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "beforeblur":
	          case "afterblur":
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "click":
	            if (2 === nativeEvent.button) break a;
	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            SyntheticEventCtor = SyntheticMouseEvent;
	            break;
	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            SyntheticEventCtor = SyntheticDragEvent;
	            break;
	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            SyntheticEventCtor = SyntheticTouchEvent;
	            break;
	          case ANIMATION_END:
	          case ANIMATION_ITERATION:
	          case ANIMATION_START:
	            SyntheticEventCtor = SyntheticAnimationEvent;
	            break;
	          case TRANSITION_END:
	            SyntheticEventCtor = SyntheticTransitionEvent;
	            break;
	          case "scroll":
	          case "scrollend":
	            SyntheticEventCtor = SyntheticUIEvent;
	            break;
	          case "wheel":
	            SyntheticEventCtor = SyntheticWheelEvent;
	            break;
	          case "copy":
	          case "cut":
	          case "paste":
	            SyntheticEventCtor = SyntheticClipboardEvent;
	            break;
	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            SyntheticEventCtor = SyntheticPointerEvent;
	            break;
	          case "toggle":
	          case "beforetoggle":
	            SyntheticEventCtor = SyntheticToggleEvent;
	        }
	        var inCapturePhase = 0 !== (eventSystemFlags & 4),
	          accumulateTargetOnly =
	            !inCapturePhase &&
	            ("scroll" === domEventName || "scrollend" === domEventName),
	          reactEventName = inCapturePhase
	            ? null !== reactName
	              ? reactName + "Capture"
	              : null
	            : reactName;
	        inCapturePhase = [];
	        for (
	          var instance = targetInst, lastHostComponent;
	          null !== instance;

	        ) {
	          var _instance = instance;
	          lastHostComponent = _instance.stateNode;
	          _instance = _instance.tag;
	          (5 !== _instance && 26 !== _instance && 27 !== _instance) ||
	            null === lastHostComponent ||
	            null === reactEventName ||
	            ((_instance = getListener(instance, reactEventName)),
	            null != _instance &&
	              inCapturePhase.push(
	                createDispatchListener(instance, _instance, lastHostComponent)
	              ));
	          if (accumulateTargetOnly) break;
	          instance = instance.return;
	        }
	        0 < inCapturePhase.length &&
	          ((reactName = new SyntheticEventCtor(
	            reactName,
	            reactEventType,
	            null,
	            nativeEvent,
	            nativeEventTarget
	          )),
	          dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
	      }
	    }
	    if (0 === (eventSystemFlags & 7)) {
	      a: {
	        reactName =
	          "mouseover" === domEventName || "pointerover" === domEventName;
	        SyntheticEventCtor =
	          "mouseout" === domEventName || "pointerout" === domEventName;
	        if (
	          reactName &&
	          nativeEvent !== currentReplayingEvent &&
	          (reactEventType =
	            nativeEvent.relatedTarget || nativeEvent.fromElement) &&
	          (getClosestInstanceFromNode(reactEventType) ||
	            reactEventType[internalContainerInstanceKey])
	        )
	          break a;
	        if (SyntheticEventCtor || reactName) {
	          reactName =
	            nativeEventTarget.window === nativeEventTarget
	              ? nativeEventTarget
	              : (reactName = nativeEventTarget.ownerDocument)
	                ? reactName.defaultView || reactName.parentWindow
	                : window;
	          if (SyntheticEventCtor) {
	            if (
	              ((reactEventType =
	                nativeEvent.relatedTarget || nativeEvent.toElement),
	              (SyntheticEventCtor = targetInst),
	              (reactEventType = reactEventType
	                ? getClosestInstanceFromNode(reactEventType)
	                : null),
	              null !== reactEventType &&
	                ((accumulateTargetOnly =
	                  getNearestMountedFiber(reactEventType)),
	                (inCapturePhase = reactEventType.tag),
	                reactEventType !== accumulateTargetOnly ||
	                  (5 !== inCapturePhase &&
	                    27 !== inCapturePhase &&
	                    6 !== inCapturePhase)))
	            )
	              reactEventType = null;
	          } else (SyntheticEventCtor = null), (reactEventType = targetInst);
	          if (SyntheticEventCtor !== reactEventType) {
	            inCapturePhase = SyntheticMouseEvent;
	            _instance = "onMouseLeave";
	            reactEventName = "onMouseEnter";
	            instance = "mouse";
	            if ("pointerout" === domEventName || "pointerover" === domEventName)
	              (inCapturePhase = SyntheticPointerEvent),
	                (_instance = "onPointerLeave"),
	                (reactEventName = "onPointerEnter"),
	                (instance = "pointer");
	            accumulateTargetOnly =
	              null == SyntheticEventCtor
	                ? reactName
	                : getNodeFromInstance(SyntheticEventCtor);
	            lastHostComponent =
	              null == reactEventType
	                ? reactName
	                : getNodeFromInstance(reactEventType);
	            reactName = new inCapturePhase(
	              _instance,
	              instance + "leave",
	              SyntheticEventCtor,
	              nativeEvent,
	              nativeEventTarget
	            );
	            reactName.target = accumulateTargetOnly;
	            reactName.relatedTarget = lastHostComponent;
	            _instance = null;
	            getClosestInstanceFromNode(nativeEventTarget) === targetInst &&
	              ((inCapturePhase = new inCapturePhase(
	                reactEventName,
	                instance + "enter",
	                reactEventType,
	                nativeEvent,
	                nativeEventTarget
	              )),
	              (inCapturePhase.target = lastHostComponent),
	              (inCapturePhase.relatedTarget = accumulateTargetOnly),
	              (_instance = inCapturePhase));
	            accumulateTargetOnly = _instance;
	            if (SyntheticEventCtor && reactEventType)
	              b: {
	                inCapturePhase = getParent;
	                reactEventName = SyntheticEventCtor;
	                instance = reactEventType;
	                lastHostComponent = 0;
	                for (
	                  _instance = reactEventName;
	                  _instance;
	                  _instance = inCapturePhase(_instance)
	                )
	                  lastHostComponent++;
	                _instance = 0;
	                for (var tempB = instance; tempB; tempB = inCapturePhase(tempB))
	                  _instance++;
	                for (; 0 < lastHostComponent - _instance; )
	                  (reactEventName = inCapturePhase(reactEventName)),
	                    lastHostComponent--;
	                for (; 0 < _instance - lastHostComponent; )
	                  (instance = inCapturePhase(instance)), _instance--;
	                for (; lastHostComponent--; ) {
	                  if (
	                    reactEventName === instance ||
	                    (null !== instance && reactEventName === instance.alternate)
	                  ) {
	                    inCapturePhase = reactEventName;
	                    break b;
	                  }
	                  reactEventName = inCapturePhase(reactEventName);
	                  instance = inCapturePhase(instance);
	                }
	                inCapturePhase = null;
	              }
	            else inCapturePhase = null;
	            null !== SyntheticEventCtor &&
	              accumulateEnterLeaveListenersForEvent(
	                dispatchQueue,
	                reactName,
	                SyntheticEventCtor,
	                inCapturePhase,
	                !1
	              );
	            null !== reactEventType &&
	              null !== accumulateTargetOnly &&
	              accumulateEnterLeaveListenersForEvent(
	                dispatchQueue,
	                accumulateTargetOnly,
	                reactEventType,
	                inCapturePhase,
	                !0
	              );
	          }
	        }
	      }
	      a: {
	        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
	        SyntheticEventCtor =
	          reactName.nodeName && reactName.nodeName.toLowerCase();
	        if (
	          "select" === SyntheticEventCtor ||
	          ("input" === SyntheticEventCtor && "file" === reactName.type)
	        )
	          var getTargetInstFunc = getTargetInstForChangeEvent;
	        else if (isTextInputElement(reactName))
	          if (isInputEventSupported)
	            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
	          else {
	            getTargetInstFunc = getTargetInstForInputEventPolyfill;
	            var handleEventFunc = handleEventsForInputEventPolyfill;
	          }
	        else
	          (SyntheticEventCtor = reactName.nodeName),
	            !SyntheticEventCtor ||
	            "input" !== SyntheticEventCtor.toLowerCase() ||
	            ("checkbox" !== reactName.type && "radio" !== reactName.type)
	              ? targetInst &&
	                isCustomElement(targetInst.elementType) &&
	                (getTargetInstFunc = getTargetInstForChangeEvent)
	              : (getTargetInstFunc = getTargetInstForClickEvent);
	        if (
	          getTargetInstFunc &&
	          (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))
	        ) {
	          createAndAccumulateChangeEvent(
	            dispatchQueue,
	            getTargetInstFunc,
	            nativeEvent,
	            nativeEventTarget
	          );
	          break a;
	        }
	        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
	        "focusout" === domEventName &&
	          targetInst &&
	          "number" === reactName.type &&
	          null != targetInst.memoizedProps.value &&
	          setDefaultValue(reactName, "number", reactName.value);
	      }
	      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
	      switch (domEventName) {
	        case "focusin":
	          if (
	            isTextInputElement(handleEventFunc) ||
	            "true" === handleEventFunc.contentEditable
	          )
	            (activeElement = handleEventFunc),
	              (activeElementInst = targetInst),
	              (lastSelection = null);
	          break;
	        case "focusout":
	          lastSelection = activeElementInst = activeElement = null;
	          break;
	        case "mousedown":
	          mouseDown = !0;
	          break;
	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          mouseDown = !1;
	          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
	          break;
	        case "selectionchange":
	          if (skipSelectionChangeEvent) break;
	        case "keydown":
	        case "keyup":
	          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
	      }
	      var fallbackData;
	      if (canUseCompositionEvent)
	        b: {
	          switch (domEventName) {
	            case "compositionstart":
	              var eventType = "onCompositionStart";
	              break b;
	            case "compositionend":
	              eventType = "onCompositionEnd";
	              break b;
	            case "compositionupdate":
	              eventType = "onCompositionUpdate";
	              break b;
	          }
	          eventType = void 0;
	        }
	      else
	        isComposing
	          ? isFallbackCompositionEnd(domEventName, nativeEvent) &&
	            (eventType = "onCompositionEnd")
	          : "keydown" === domEventName &&
	            229 === nativeEvent.keyCode &&
	            (eventType = "onCompositionStart");
	      eventType &&
	        (useFallbackCompositionData &&
	          "ko" !== nativeEvent.locale &&
	          (isComposing || "onCompositionStart" !== eventType
	            ? "onCompositionEnd" === eventType &&
	              isComposing &&
	              (fallbackData = getData())
	            : ((root = nativeEventTarget),
	              (startText = "value" in root ? root.value : root.textContent),
	              (isComposing = !0))),
	        (handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType)),
	        0 < handleEventFunc.length &&
	          ((eventType = new SyntheticCompositionEvent(
	            eventType,
	            domEventName,
	            null,
	            nativeEvent,
	            nativeEventTarget
	          )),
	          dispatchQueue.push({ event: eventType, listeners: handleEventFunc }),
	          fallbackData
	            ? (eventType.data = fallbackData)
	            : ((fallbackData = getDataFromCustomEvent(nativeEvent)),
	              null !== fallbackData && (eventType.data = fallbackData))));
	      if (
	        (fallbackData = canUseTextInputEvent
	          ? getNativeBeforeInputChars(domEventName, nativeEvent)
	          : getFallbackBeforeInputChars(domEventName, nativeEvent))
	      )
	        (eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput")),
	          0 < eventType.length &&
	            ((handleEventFunc = new SyntheticCompositionEvent(
	              "onBeforeInput",
	              "beforeinput",
	              null,
	              nativeEvent,
	              nativeEventTarget
	            )),
	            dispatchQueue.push({
	              event: handleEventFunc,
	              listeners: eventType
	            }),
	            (handleEventFunc.data = fallbackData));
	      extractEvents$1(
	        dispatchQueue,
	        domEventName,
	        targetInst,
	        nativeEvent,
	        nativeEventTarget
	      );
	    }
	    processDispatchQueue(dispatchQueue, eventSystemFlags);
	  });
	}
	function createDispatchListener(instance, listener, currentTarget) {
	  return {
	    instance: instance,
	    listener: listener,
	    currentTarget: currentTarget
	  };
	}
	function accumulateTwoPhaseListeners(targetFiber, reactName) {
	  for (
	    var captureName = reactName + "Capture", listeners = [];
	    null !== targetFiber;

	  ) {
	    var _instance2 = targetFiber,
	      stateNode = _instance2.stateNode;
	    _instance2 = _instance2.tag;
	    (5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2) ||
	      null === stateNode ||
	      ((_instance2 = getListener(targetFiber, captureName)),
	      null != _instance2 &&
	        listeners.unshift(
	          createDispatchListener(targetFiber, _instance2, stateNode)
	        ),
	      (_instance2 = getListener(targetFiber, reactName)),
	      null != _instance2 &&
	        listeners.push(
	          createDispatchListener(targetFiber, _instance2, stateNode)
	        ));
	    if (3 === targetFiber.tag) return listeners;
	    targetFiber = targetFiber.return;
	  }
	  return [];
	}
	function getParent(inst) {
	  if (null === inst) return null;
	  do inst = inst.return;
	  while (inst && 5 !== inst.tag && 27 !== inst.tag);
	  return inst ? inst : null;
	}
	function accumulateEnterLeaveListenersForEvent(
	  dispatchQueue,
	  event,
	  target,
	  common,
	  inCapturePhase
	) {
	  for (
	    var registrationName = event._reactName, listeners = [];
	    null !== target && target !== common;

	  ) {
	    var _instance3 = target,
	      alternate = _instance3.alternate,
	      stateNode = _instance3.stateNode;
	    _instance3 = _instance3.tag;
	    if (null !== alternate && alternate === common) break;
	    (5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3) ||
	      null === stateNode ||
	      ((alternate = stateNode),
	      inCapturePhase
	        ? ((stateNode = getListener(target, registrationName)),
	          null != stateNode &&
	            listeners.unshift(
	              createDispatchListener(target, stateNode, alternate)
	            ))
	        : inCapturePhase ||
	          ((stateNode = getListener(target, registrationName)),
	          null != stateNode &&
	            listeners.push(
	              createDispatchListener(target, stateNode, alternate)
	            )));
	    target = target.return;
	  }
	  0 !== listeners.length &&
	    dispatchQueue.push({ event: event, listeners: listeners });
	}
	var NORMALIZE_NEWLINES_REGEX = /\r\n?/g,
	  NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
	function normalizeMarkupForTextOrAttribute(markup) {
	  return ("string" === typeof markup ? markup : "" + markup)
	    .replace(NORMALIZE_NEWLINES_REGEX, "\n")
	    .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
	}
	function checkForUnmatchedText(serverText, clientText) {
	  clientText = normalizeMarkupForTextOrAttribute(clientText);
	  return normalizeMarkupForTextOrAttribute(serverText) === clientText ? !0 : !1;
	}
	function setProp(domElement, tag, key, value, props, prevValue) {
	  switch (key) {
	    case "children":
	      "string" === typeof value
	        ? "body" === tag ||
	          ("textarea" === tag && "" === value) ||
	          setTextContent(domElement, value)
	        : ("number" === typeof value || "bigint" === typeof value) &&
	          "body" !== tag &&
	          setTextContent(domElement, "" + value);
	      break;
	    case "className":
	      setValueForKnownAttribute(domElement, "class", value);
	      break;
	    case "tabIndex":
	      setValueForKnownAttribute(domElement, "tabindex", value);
	      break;
	    case "dir":
	    case "role":
	    case "viewBox":
	    case "width":
	    case "height":
	      setValueForKnownAttribute(domElement, key, value);
	      break;
	    case "style":
	      setValueForStyles(domElement, value, prevValue);
	      break;
	    case "data":
	      if ("object" !== tag) {
	        setValueForKnownAttribute(domElement, "data", value);
	        break;
	      }
	    case "src":
	    case "href":
	      if ("" === value && ("a" !== tag || "href" !== key)) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      if (
	        null == value ||
	        "function" === typeof value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      ) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      value = sanitizeURL("" + value);
	      domElement.setAttribute(key, value);
	      break;
	    case "action":
	    case "formAction":
	      if ("function" === typeof value) {
	        domElement.setAttribute(
	          key,
	          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
	        );
	        break;
	      } else
	        "function" === typeof prevValue &&
	          ("formAction" === key
	            ? ("input" !== tag &&
	                setProp(domElement, tag, "name", props.name, props, null),
	              setProp(
	                domElement,
	                tag,
	                "formEncType",
	                props.formEncType,
	                props,
	                null
	              ),
	              setProp(
	                domElement,
	                tag,
	                "formMethod",
	                props.formMethod,
	                props,
	                null
	              ),
	              setProp(
	                domElement,
	                tag,
	                "formTarget",
	                props.formTarget,
	                props,
	                null
	              ))
	            : (setProp(domElement, tag, "encType", props.encType, props, null),
	              setProp(domElement, tag, "method", props.method, props, null),
	              setProp(domElement, tag, "target", props.target, props, null)));
	      if (
	        null == value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      ) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      value = sanitizeURL("" + value);
	      domElement.setAttribute(key, value);
	      break;
	    case "onClick":
	      null != value && (domElement.onclick = noop$1);
	      break;
	    case "onScroll":
	      null != value && listenToNonDelegatedEvent("scroll", domElement);
	      break;
	    case "onScrollEnd":
	      null != value && listenToNonDelegatedEvent("scrollend", domElement);
	      break;
	    case "dangerouslySetInnerHTML":
	      if (null != value) {
	        if ("object" !== typeof value || !("__html" in value))
	          throw Error(formatProdErrorMessage(61));
	        key = value.__html;
	        if (null != key) {
	          if (null != props.children) throw Error(formatProdErrorMessage(60));
	          domElement.innerHTML = key;
	        }
	      }
	      break;
	    case "multiple":
	      domElement.multiple =
	        value && "function" !== typeof value && "symbol" !== typeof value;
	      break;
	    case "muted":
	      domElement.muted =
	        value && "function" !== typeof value && "symbol" !== typeof value;
	      break;
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "defaultValue":
	    case "defaultChecked":
	    case "innerHTML":
	    case "ref":
	      break;
	    case "autoFocus":
	      break;
	    case "xlinkHref":
	      if (
	        null == value ||
	        "function" === typeof value ||
	        "boolean" === typeof value ||
	        "symbol" === typeof value
	      ) {
	        domElement.removeAttribute("xlink:href");
	        break;
	      }
	      key = sanitizeURL("" + value);
	      domElement.setAttributeNS(
	        "http://www.w3.org/1999/xlink",
	        "xlink:href",
	        key
	      );
	      break;
	    case "contentEditable":
	    case "spellCheck":
	    case "draggable":
	    case "value":
	    case "autoReverse":
	    case "externalResourcesRequired":
	    case "focusable":
	    case "preserveAlpha":
	      null != value && "function" !== typeof value && "symbol" !== typeof value
	        ? domElement.setAttribute(key, "" + value)
	        : domElement.removeAttribute(key);
	      break;
	    case "inert":
	    case "allowFullScreen":
	    case "async":
	    case "autoPlay":
	    case "controls":
	    case "default":
	    case "defer":
	    case "disabled":
	    case "disablePictureInPicture":
	    case "disableRemotePlayback":
	    case "formNoValidate":
	    case "hidden":
	    case "loop":
	    case "noModule":
	    case "noValidate":
	    case "open":
	    case "playsInline":
	    case "readOnly":
	    case "required":
	    case "reversed":
	    case "scoped":
	    case "seamless":
	    case "itemScope":
	      value && "function" !== typeof value && "symbol" !== typeof value
	        ? domElement.setAttribute(key, "")
	        : domElement.removeAttribute(key);
	      break;
	    case "capture":
	    case "download":
	      !0 === value
	        ? domElement.setAttribute(key, "")
	        : !1 !== value &&
	            null != value &&
	            "function" !== typeof value &&
	            "symbol" !== typeof value
	          ? domElement.setAttribute(key, value)
	          : domElement.removeAttribute(key);
	      break;
	    case "cols":
	    case "rows":
	    case "size":
	    case "span":
	      null != value &&
	      "function" !== typeof value &&
	      "symbol" !== typeof value &&
	      !isNaN(value) &&
	      1 <= value
	        ? domElement.setAttribute(key, value)
	        : domElement.removeAttribute(key);
	      break;
	    case "rowSpan":
	    case "start":
	      null == value ||
	      "function" === typeof value ||
	      "symbol" === typeof value ||
	      isNaN(value)
	        ? domElement.removeAttribute(key)
	        : domElement.setAttribute(key, value);
	      break;
	    case "popover":
	      listenToNonDelegatedEvent("beforetoggle", domElement);
	      listenToNonDelegatedEvent("toggle", domElement);
	      setValueForAttribute(domElement, "popover", value);
	      break;
	    case "xlinkActuate":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:actuate",
	        value
	      );
	      break;
	    case "xlinkArcrole":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:arcrole",
	        value
	      );
	      break;
	    case "xlinkRole":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:role",
	        value
	      );
	      break;
	    case "xlinkShow":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:show",
	        value
	      );
	      break;
	    case "xlinkTitle":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:title",
	        value
	      );
	      break;
	    case "xlinkType":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:type",
	        value
	      );
	      break;
	    case "xmlBase":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:base",
	        value
	      );
	      break;
	    case "xmlLang":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:lang",
	        value
	      );
	      break;
	    case "xmlSpace":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:space",
	        value
	      );
	      break;
	    case "is":
	      setValueForAttribute(domElement, "is", value);
	      break;
	    case "innerText":
	    case "textContent":
	      break;
	    default:
	      if (
	        !(2 < key.length) ||
	        ("o" !== key[0] && "O" !== key[0]) ||
	        ("n" !== key[1] && "N" !== key[1])
	      )
	        (key = aliases.get(key) || key),
	          setValueForAttribute(domElement, key, value);
	  }
	}
	function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
	  switch (key) {
	    case "style":
	      setValueForStyles(domElement, value, prevValue);
	      break;
	    case "dangerouslySetInnerHTML":
	      if (null != value) {
	        if ("object" !== typeof value || !("__html" in value))
	          throw Error(formatProdErrorMessage(61));
	        key = value.__html;
	        if (null != key) {
	          if (null != props.children) throw Error(formatProdErrorMessage(60));
	          domElement.innerHTML = key;
	        }
	      }
	      break;
	    case "children":
	      "string" === typeof value
	        ? setTextContent(domElement, value)
	        : ("number" === typeof value || "bigint" === typeof value) &&
	          setTextContent(domElement, "" + value);
	      break;
	    case "onScroll":
	      null != value && listenToNonDelegatedEvent("scroll", domElement);
	      break;
	    case "onScrollEnd":
	      null != value && listenToNonDelegatedEvent("scrollend", domElement);
	      break;
	    case "onClick":
	      null != value && (domElement.onclick = noop$1);
	      break;
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "innerHTML":
	    case "ref":
	      break;
	    case "innerText":
	    case "textContent":
	      break;
	    default:
	      if (!registrationNameDependencies.hasOwnProperty(key))
	        a: {
	          if (
	            "o" === key[0] &&
	            "n" === key[1] &&
	            ((props = key.endsWith("Capture")),
	            (tag = key.slice(2, props ? key.length - 7 : void 0)),
	            (prevValue = domElement[internalPropsKey] || null),
	            (prevValue = null != prevValue ? prevValue[key] : null),
	            "function" === typeof prevValue &&
	              domElement.removeEventListener(tag, prevValue, props),
	            "function" === typeof value)
	          ) {
	            "function" !== typeof prevValue &&
	              null !== prevValue &&
	              (key in domElement
	                ? (domElement[key] = null)
	                : domElement.hasAttribute(key) &&
	                  domElement.removeAttribute(key));
	            domElement.addEventListener(tag, value, props);
	            break a;
	          }
	          key in domElement
	            ? (domElement[key] = value)
	            : !0 === value
	              ? domElement.setAttribute(key, "")
	              : setValueForAttribute(domElement, key, value);
	        }
	  }
	}
	function setInitialProperties(domElement, tag, props) {
	  switch (tag) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	    case "a":
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "img":
	      listenToNonDelegatedEvent("error", domElement);
	      listenToNonDelegatedEvent("load", domElement);
	      var hasSrc = !1,
	        hasSrcSet = !1,
	        propKey;
	      for (propKey in props)
	        if (props.hasOwnProperty(propKey)) {
	          var propValue = props[propKey];
	          if (null != propValue)
	            switch (propKey) {
	              case "src":
	                hasSrc = !0;
	                break;
	              case "srcSet":
	                hasSrcSet = !0;
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(137, tag));
	              default:
	                setProp(domElement, tag, propKey, propValue, props, null);
	            }
	        }
	      hasSrcSet &&
	        setProp(domElement, tag, "srcSet", props.srcSet, props, null);
	      hasSrc && setProp(domElement, tag, "src", props.src, props, null);
	      return;
	    case "input":
	      listenToNonDelegatedEvent("invalid", domElement);
	      var defaultValue = (propKey = propValue = hasSrcSet = null),
	        checked = null,
	        defaultChecked = null;
	      for (hasSrc in props)
	        if (props.hasOwnProperty(hasSrc)) {
	          var propValue$184 = props[hasSrc];
	          if (null != propValue$184)
	            switch (hasSrc) {
	              case "name":
	                hasSrcSet = propValue$184;
	                break;
	              case "type":
	                propValue = propValue$184;
	                break;
	              case "checked":
	                checked = propValue$184;
	                break;
	              case "defaultChecked":
	                defaultChecked = propValue$184;
	                break;
	              case "value":
	                propKey = propValue$184;
	                break;
	              case "defaultValue":
	                defaultValue = propValue$184;
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                if (null != propValue$184)
	                  throw Error(formatProdErrorMessage(137, tag));
	                break;
	              default:
	                setProp(domElement, tag, hasSrc, propValue$184, props, null);
	            }
	        }
	      initInput(
	        domElement,
	        propKey,
	        defaultValue,
	        checked,
	        defaultChecked,
	        propValue,
	        hasSrcSet,
	        !1
	      );
	      return;
	    case "select":
	      listenToNonDelegatedEvent("invalid", domElement);
	      hasSrc = propValue = propKey = null;
	      for (hasSrcSet in props)
	        if (
	          props.hasOwnProperty(hasSrcSet) &&
	          ((defaultValue = props[hasSrcSet]), null != defaultValue)
	        )
	          switch (hasSrcSet) {
	            case "value":
	              propKey = defaultValue;
	              break;
	            case "defaultValue":
	              propValue = defaultValue;
	              break;
	            case "multiple":
	              hasSrc = defaultValue;
	            default:
	              setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
	          }
	      tag = propKey;
	      props = propValue;
	      domElement.multiple = !!hasSrc;
	      null != tag
	        ? updateOptions(domElement, !!hasSrc, tag, !1)
	        : null != props && updateOptions(domElement, !!hasSrc, props, !0);
	      return;
	    case "textarea":
	      listenToNonDelegatedEvent("invalid", domElement);
	      propKey = hasSrcSet = hasSrc = null;
	      for (propValue in props)
	        if (
	          props.hasOwnProperty(propValue) &&
	          ((defaultValue = props[propValue]), null != defaultValue)
	        )
	          switch (propValue) {
	            case "value":
	              hasSrc = defaultValue;
	              break;
	            case "defaultValue":
	              hasSrcSet = defaultValue;
	              break;
	            case "children":
	              propKey = defaultValue;
	              break;
	            case "dangerouslySetInnerHTML":
	              if (null != defaultValue) throw Error(formatProdErrorMessage(91));
	              break;
	            default:
	              setProp(domElement, tag, propValue, defaultValue, props, null);
	          }
	      initTextarea(domElement, hasSrc, hasSrcSet, propKey);
	      return;
	    case "option":
	      for (checked in props)
	        if (
	          props.hasOwnProperty(checked) &&
	          ((hasSrc = props[checked]), null != hasSrc)
	        )
	          switch (checked) {
	            case "selected":
	              domElement.selected =
	                hasSrc &&
	                "function" !== typeof hasSrc &&
	                "symbol" !== typeof hasSrc;
	              break;
	            default:
	              setProp(domElement, tag, checked, hasSrc, props, null);
	          }
	      return;
	    case "dialog":
	      listenToNonDelegatedEvent("beforetoggle", domElement);
	      listenToNonDelegatedEvent("toggle", domElement);
	      listenToNonDelegatedEvent("cancel", domElement);
	      listenToNonDelegatedEvent("close", domElement);
	      break;
	    case "iframe":
	    case "object":
	      listenToNonDelegatedEvent("load", domElement);
	      break;
	    case "video":
	    case "audio":
	      for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
	        listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
	      break;
	    case "image":
	      listenToNonDelegatedEvent("error", domElement);
	      listenToNonDelegatedEvent("load", domElement);
	      break;
	    case "details":
	      listenToNonDelegatedEvent("toggle", domElement);
	      break;
	    case "embed":
	    case "source":
	    case "link":
	      listenToNonDelegatedEvent("error", domElement),
	        listenToNonDelegatedEvent("load", domElement);
	    case "area":
	    case "base":
	    case "br":
	    case "col":
	    case "hr":
	    case "keygen":
	    case "meta":
	    case "param":
	    case "track":
	    case "wbr":
	    case "menuitem":
	      for (defaultChecked in props)
	        if (
	          props.hasOwnProperty(defaultChecked) &&
	          ((hasSrc = props[defaultChecked]), null != hasSrc)
	        )
	          switch (defaultChecked) {
	            case "children":
	            case "dangerouslySetInnerHTML":
	              throw Error(formatProdErrorMessage(137, tag));
	            default:
	              setProp(domElement, tag, defaultChecked, hasSrc, props, null);
	          }
	      return;
	    default:
	      if (isCustomElement(tag)) {
	        for (propValue$184 in props)
	          props.hasOwnProperty(propValue$184) &&
	            ((hasSrc = props[propValue$184]),
	            void 0 !== hasSrc &&
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                propValue$184,
	                hasSrc,
	                props,
	                void 0
	              ));
	        return;
	      }
	  }
	  for (defaultValue in props)
	    props.hasOwnProperty(defaultValue) &&
	      ((hasSrc = props[defaultValue]),
	      null != hasSrc &&
	        setProp(domElement, tag, defaultValue, hasSrc, props, null));
	}
	function updateProperties(domElement, tag, lastProps, nextProps) {
	  switch (tag) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	    case "a":
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "input":
	      var name = null,
	        type = null,
	        value = null,
	        defaultValue = null,
	        lastDefaultValue = null,
	        checked = null,
	        defaultChecked = null;
	      for (propKey in lastProps) {
	        var lastProp = lastProps[propKey];
	        if (lastProps.hasOwnProperty(propKey) && null != lastProp)
	          switch (propKey) {
	            case "checked":
	              break;
	            case "value":
	              break;
	            case "defaultValue":
	              lastDefaultValue = lastProp;
	            default:
	              nextProps.hasOwnProperty(propKey) ||
	                setProp(domElement, tag, propKey, null, nextProps, lastProp);
	          }
	      }
	      for (var propKey$201 in nextProps) {
	        var propKey = nextProps[propKey$201];
	        lastProp = lastProps[propKey$201];
	        if (
	          nextProps.hasOwnProperty(propKey$201) &&
	          (null != propKey || null != lastProp)
	        )
	          switch (propKey$201) {
	            case "type":
	              type = propKey;
	              break;
	            case "name":
	              name = propKey;
	              break;
	            case "checked":
	              checked = propKey;
	              break;
	            case "defaultChecked":
	              defaultChecked = propKey;
	              break;
	            case "value":
	              value = propKey;
	              break;
	            case "defaultValue":
	              defaultValue = propKey;
	              break;
	            case "children":
	            case "dangerouslySetInnerHTML":
	              if (null != propKey)
	                throw Error(formatProdErrorMessage(137, tag));
	              break;
	            default:
	              propKey !== lastProp &&
	                setProp(
	                  domElement,
	                  tag,
	                  propKey$201,
	                  propKey,
	                  nextProps,
	                  lastProp
	                );
	          }
	      }
	      updateInput(
	        domElement,
	        value,
	        defaultValue,
	        lastDefaultValue,
	        checked,
	        defaultChecked,
	        type,
	        name
	      );
	      return;
	    case "select":
	      propKey = value = defaultValue = propKey$201 = null;
	      for (type in lastProps)
	        if (
	          ((lastDefaultValue = lastProps[type]),
	          lastProps.hasOwnProperty(type) && null != lastDefaultValue)
	        )
	          switch (type) {
	            case "value":
	              break;
	            case "multiple":
	              propKey = lastDefaultValue;
	            default:
	              nextProps.hasOwnProperty(type) ||
	                setProp(
	                  domElement,
	                  tag,
	                  type,
	                  null,
	                  nextProps,
	                  lastDefaultValue
	                );
	          }
	      for (name in nextProps)
	        if (
	          ((type = nextProps[name]),
	          (lastDefaultValue = lastProps[name]),
	          nextProps.hasOwnProperty(name) &&
	            (null != type || null != lastDefaultValue))
	        )
	          switch (name) {
	            case "value":
	              propKey$201 = type;
	              break;
	            case "defaultValue":
	              defaultValue = type;
	              break;
	            case "multiple":
	              value = type;
	            default:
	              type !== lastDefaultValue &&
	                setProp(
	                  domElement,
	                  tag,
	                  name,
	                  type,
	                  nextProps,
	                  lastDefaultValue
	                );
	          }
	      tag = defaultValue;
	      lastProps = value;
	      nextProps = propKey;
	      null != propKey$201
	        ? updateOptions(domElement, !!lastProps, propKey$201, !1)
	        : !!nextProps !== !!lastProps &&
	          (null != tag
	            ? updateOptions(domElement, !!lastProps, tag, !0)
	            : updateOptions(domElement, !!lastProps, lastProps ? [] : "", !1));
	      return;
	    case "textarea":
	      propKey = propKey$201 = null;
	      for (defaultValue in lastProps)
	        if (
	          ((name = lastProps[defaultValue]),
	          lastProps.hasOwnProperty(defaultValue) &&
	            null != name &&
	            !nextProps.hasOwnProperty(defaultValue))
	        )
	          switch (defaultValue) {
	            case "value":
	              break;
	            case "children":
	              break;
	            default:
	              setProp(domElement, tag, defaultValue, null, nextProps, name);
	          }
	      for (value in nextProps)
	        if (
	          ((name = nextProps[value]),
	          (type = lastProps[value]),
	          nextProps.hasOwnProperty(value) && (null != name || null != type))
	        )
	          switch (value) {
	            case "value":
	              propKey$201 = name;
	              break;
	            case "defaultValue":
	              propKey = name;
	              break;
	            case "children":
	              break;
	            case "dangerouslySetInnerHTML":
	              if (null != name) throw Error(formatProdErrorMessage(91));
	              break;
	            default:
	              name !== type &&
	                setProp(domElement, tag, value, name, nextProps, type);
	          }
	      updateTextarea(domElement, propKey$201, propKey);
	      return;
	    case "option":
	      for (var propKey$217 in lastProps)
	        if (
	          ((propKey$201 = lastProps[propKey$217]),
	          lastProps.hasOwnProperty(propKey$217) &&
	            null != propKey$201 &&
	            !nextProps.hasOwnProperty(propKey$217))
	        )
	          switch (propKey$217) {
	            case "selected":
	              domElement.selected = !1;
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                propKey$217,
	                null,
	                nextProps,
	                propKey$201
	              );
	          }
	      for (lastDefaultValue in nextProps)
	        if (
	          ((propKey$201 = nextProps[lastDefaultValue]),
	          (propKey = lastProps[lastDefaultValue]),
	          nextProps.hasOwnProperty(lastDefaultValue) &&
	            propKey$201 !== propKey &&
	            (null != propKey$201 || null != propKey))
	        )
	          switch (lastDefaultValue) {
	            case "selected":
	              domElement.selected =
	                propKey$201 &&
	                "function" !== typeof propKey$201 &&
	                "symbol" !== typeof propKey$201;
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                lastDefaultValue,
	                propKey$201,
	                nextProps,
	                propKey
	              );
	          }
	      return;
	    case "img":
	    case "link":
	    case "area":
	    case "base":
	    case "br":
	    case "col":
	    case "embed":
	    case "hr":
	    case "keygen":
	    case "meta":
	    case "param":
	    case "source":
	    case "track":
	    case "wbr":
	    case "menuitem":
	      for (var propKey$222 in lastProps)
	        (propKey$201 = lastProps[propKey$222]),
	          lastProps.hasOwnProperty(propKey$222) &&
	            null != propKey$201 &&
	            !nextProps.hasOwnProperty(propKey$222) &&
	            setProp(domElement, tag, propKey$222, null, nextProps, propKey$201);
	      for (checked in nextProps)
	        if (
	          ((propKey$201 = nextProps[checked]),
	          (propKey = lastProps[checked]),
	          nextProps.hasOwnProperty(checked) &&
	            propKey$201 !== propKey &&
	            (null != propKey$201 || null != propKey))
	        )
	          switch (checked) {
	            case "children":
	            case "dangerouslySetInnerHTML":
	              if (null != propKey$201)
	                throw Error(formatProdErrorMessage(137, tag));
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                checked,
	                propKey$201,
	                nextProps,
	                propKey
	              );
	          }
	      return;
	    default:
	      if (isCustomElement(tag)) {
	        for (var propKey$227 in lastProps)
	          (propKey$201 = lastProps[propKey$227]),
	            lastProps.hasOwnProperty(propKey$227) &&
	              void 0 !== propKey$201 &&
	              !nextProps.hasOwnProperty(propKey$227) &&
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                propKey$227,
	                void 0,
	                nextProps,
	                propKey$201
	              );
	        for (defaultChecked in nextProps)
	          (propKey$201 = nextProps[defaultChecked]),
	            (propKey = lastProps[defaultChecked]),
	            !nextProps.hasOwnProperty(defaultChecked) ||
	              propKey$201 === propKey ||
	              (void 0 === propKey$201 && void 0 === propKey) ||
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                defaultChecked,
	                propKey$201,
	                nextProps,
	                propKey
	              );
	        return;
	      }
	  }
	  for (var propKey$232 in lastProps)
	    (propKey$201 = lastProps[propKey$232]),
	      lastProps.hasOwnProperty(propKey$232) &&
	        null != propKey$201 &&
	        !nextProps.hasOwnProperty(propKey$232) &&
	        setProp(domElement, tag, propKey$232, null, nextProps, propKey$201);
	  for (lastProp in nextProps)
	    (propKey$201 = nextProps[lastProp]),
	      (propKey = lastProps[lastProp]),
	      !nextProps.hasOwnProperty(lastProp) ||
	        propKey$201 === propKey ||
	        (null == propKey$201 && null == propKey) ||
	        setProp(domElement, tag, lastProp, propKey$201, nextProps, propKey);
	}
	function isLikelyStaticResource(initiatorType) {
	  switch (initiatorType) {
	    case "css":
	    case "script":
	    case "font":
	    case "img":
	    case "image":
	    case "input":
	    case "link":
	      return !0;
	    default:
	      return !1;
	  }
	}
	function estimateBandwidth() {
	  if ("function" === typeof performance.getEntriesByType) {
	    for (
	      var count = 0,
	        bits = 0,
	        resourceEntries = performance.getEntriesByType("resource"),
	        i = 0;
	      i < resourceEntries.length;
	      i++
	    ) {
	      var entry = resourceEntries[i],
	        transferSize = entry.transferSize,
	        initiatorType = entry.initiatorType,
	        duration = entry.duration;
	      if (transferSize && duration && isLikelyStaticResource(initiatorType)) {
	        initiatorType = 0;
	        duration = entry.responseEnd;
	        for (i += 1; i < resourceEntries.length; i++) {
	          var overlapEntry = resourceEntries[i],
	            overlapStartTime = overlapEntry.startTime;
	          if (overlapStartTime > duration) break;
	          var overlapTransferSize = overlapEntry.transferSize,
	            overlapInitiatorType = overlapEntry.initiatorType;
	          overlapTransferSize &&
	            isLikelyStaticResource(overlapInitiatorType) &&
	            ((overlapEntry = overlapEntry.responseEnd),
	            (initiatorType +=
	              overlapTransferSize *
	              (overlapEntry < duration
	                ? 1
	                : (duration - overlapStartTime) /
	                  (overlapEntry - overlapStartTime))));
	        }
	        --i;
	        bits += (8 * (transferSize + initiatorType)) / (entry.duration / 1e3);
	        count++;
	        if (10 < count) break;
	      }
	    }
	    if (0 < count) return bits / count / 1e6;
	  }
	  return navigator.connection &&
	    ((count = navigator.connection.downlink), "number" === typeof count)
	    ? count
	    : 5;
	}
	var eventsEnabled = null,
	  selectionInformation = null;
	function getOwnerDocumentFromRootContainer(rootContainerElement) {
	  return 9 === rootContainerElement.nodeType
	    ? rootContainerElement
	    : rootContainerElement.ownerDocument;
	}
	function getOwnHostContext(namespaceURI) {
	  switch (namespaceURI) {
	    case "http://www.w3.org/2000/svg":
	      return 1;
	    case "http://www.w3.org/1998/Math/MathML":
	      return 2;
	    default:
	      return 0;
	  }
	}
	function getChildHostContextProd(parentNamespace, type) {
	  if (0 === parentNamespace)
	    switch (type) {
	      case "svg":
	        return 1;
	      case "math":
	        return 2;
	      default:
	        return 0;
	    }
	  return 1 === parentNamespace && "foreignObject" === type
	    ? 0
	    : parentNamespace;
	}
	function shouldSetTextContent(type, props) {
	  return (
	    "textarea" === type ||
	    "noscript" === type ||
	    "string" === typeof props.children ||
	    "number" === typeof props.children ||
	    "bigint" === typeof props.children ||
	    ("object" === typeof props.dangerouslySetInnerHTML &&
	      null !== props.dangerouslySetInnerHTML &&
	      null != props.dangerouslySetInnerHTML.__html)
	  );
	}
	var currentPopstateTransitionEvent = null;
	function shouldAttemptEagerTransition() {
	  var event = window.event;
	  if (event && "popstate" === event.type) {
	    if (event === currentPopstateTransitionEvent) return !1;
	    currentPopstateTransitionEvent = event;
	    return !0;
	  }
	  currentPopstateTransitionEvent = null;
	  return !1;
	}
	var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0,
	  cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0,
	  localPromise = "function" === typeof Promise ? Promise : void 0,
	  scheduleMicrotask =
	    "function" === typeof queueMicrotask
	      ? queueMicrotask
	      : "undefined" !== typeof localPromise
	        ? function (callback) {
	            return localPromise
	              .resolve(null)
	              .then(callback)
	              .catch(handleErrorInNextTick);
	          }
	        : scheduleTimeout;
	function handleErrorInNextTick(error) {
	  setTimeout(function () {
	    throw error;
	  });
	}
	function isSingletonScope(type) {
	  return "head" === type;
	}
	function clearHydrationBoundary(parentInstance, hydrationInstance) {
	  var node = hydrationInstance,
	    depth = 0;
	  do {
	    var nextNode = node.nextSibling;
	    parentInstance.removeChild(node);
	    if (nextNode && 8 === nextNode.nodeType)
	      if (((node = nextNode.data), "/$" === node || "/&" === node)) {
	        if (0 === depth) {
	          parentInstance.removeChild(nextNode);
	          retryIfBlockedOn(hydrationInstance);
	          return;
	        }
	        depth--;
	      } else if (
	        "$" === node ||
	        "$?" === node ||
	        "$~" === node ||
	        "$!" === node ||
	        "&" === node
	      )
	        depth++;
	      else if ("html" === node)
	        releaseSingletonInstance(parentInstance.ownerDocument.documentElement);
	      else if ("head" === node) {
	        node = parentInstance.ownerDocument.head;
	        releaseSingletonInstance(node);
	        for (var node$jscomp$0 = node.firstChild; node$jscomp$0; ) {
	          var nextNode$jscomp$0 = node$jscomp$0.nextSibling,
	            nodeName = node$jscomp$0.nodeName;
	          node$jscomp$0[internalHoistableMarker] ||
	            "SCRIPT" === nodeName ||
	            "STYLE" === nodeName ||
	            ("LINK" === nodeName &&
	              "stylesheet" === node$jscomp$0.rel.toLowerCase()) ||
	            node.removeChild(node$jscomp$0);
	          node$jscomp$0 = nextNode$jscomp$0;
	        }
	      } else
	        "body" === node &&
	          releaseSingletonInstance(parentInstance.ownerDocument.body);
	    node = nextNode;
	  } while (node);
	  retryIfBlockedOn(hydrationInstance);
	}
	function hideOrUnhideDehydratedBoundary(suspenseInstance, isHidden) {
	  var node = suspenseInstance;
	  suspenseInstance = 0;
	  do {
	    var nextNode = node.nextSibling;
	    1 === node.nodeType
	      ? isHidden
	        ? ((node._stashedDisplay = node.style.display),
	          (node.style.display = "none"))
	        : ((node.style.display = node._stashedDisplay || ""),
	          "" === node.getAttribute("style") && node.removeAttribute("style"))
	      : 3 === node.nodeType &&
	        (isHidden
	          ? ((node._stashedText = node.nodeValue), (node.nodeValue = ""))
	          : (node.nodeValue = node._stashedText || ""));
	    if (nextNode && 8 === nextNode.nodeType)
	      if (((node = nextNode.data), "/$" === node))
	        if (0 === suspenseInstance) break;
	        else suspenseInstance--;
	      else
	        ("$" !== node && "$?" !== node && "$~" !== node && "$!" !== node) ||
	          suspenseInstance++;
	    node = nextNode;
	  } while (node);
	}
	function clearContainerSparingly(container) {
	  var nextNode = container.firstChild;
	  nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
	  for (; nextNode; ) {
	    var node = nextNode;
	    nextNode = nextNode.nextSibling;
	    switch (node.nodeName) {
	      case "HTML":
	      case "HEAD":
	      case "BODY":
	        clearContainerSparingly(node);
	        detachDeletedInstance(node);
	        continue;
	      case "SCRIPT":
	      case "STYLE":
	        continue;
	      case "LINK":
	        if ("stylesheet" === node.rel.toLowerCase()) continue;
	    }
	    container.removeChild(node);
	  }
	}
	function canHydrateInstance(instance, type, props, inRootOrSingleton) {
	  for (; 1 === instance.nodeType; ) {
	    var anyProps = props;
	    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
	      if (
	        !inRootOrSingleton &&
	        ("INPUT" !== instance.nodeName || "hidden" !== instance.type)
	      )
	        break;
	    } else if (!inRootOrSingleton)
	      if ("input" === type && "hidden" === instance.type) {
	        var name = null == anyProps.name ? null : "" + anyProps.name;
	        if (
	          "hidden" === anyProps.type &&
	          instance.getAttribute("name") === name
	        )
	          return instance;
	      } else return instance;
	    else if (!instance[internalHoistableMarker])
	      switch (type) {
	        case "meta":
	          if (!instance.hasAttribute("itemprop")) break;
	          return instance;
	        case "link":
	          name = instance.getAttribute("rel");
	          if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
	            break;
	          else if (
	            name !== anyProps.rel ||
	            instance.getAttribute("href") !==
	              (null == anyProps.href || "" === anyProps.href
	                ? null
	                : anyProps.href) ||
	            instance.getAttribute("crossorigin") !==
	              (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) ||
	            instance.getAttribute("title") !==
	              (null == anyProps.title ? null : anyProps.title)
	          )
	            break;
	          return instance;
	        case "style":
	          if (instance.hasAttribute("data-precedence")) break;
	          return instance;
	        case "script":
	          name = instance.getAttribute("src");
	          if (
	            (name !== (null == anyProps.src ? null : anyProps.src) ||
	              instance.getAttribute("type") !==
	                (null == anyProps.type ? null : anyProps.type) ||
	              instance.getAttribute("crossorigin") !==
	                (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) &&
	            name &&
	            instance.hasAttribute("async") &&
	            !instance.hasAttribute("itemprop")
	          )
	            break;
	          return instance;
	        default:
	          return instance;
	      }
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) break;
	  }
	  return null;
	}
	function canHydrateTextInstance(instance, text, inRootOrSingleton) {
	  if ("" === text) return null;
	  for (; 3 !== instance.nodeType; ) {
	    if (
	      (1 !== instance.nodeType ||
	        "INPUT" !== instance.nodeName ||
	        "hidden" !== instance.type) &&
	      !inRootOrSingleton
	    )
	      return null;
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) return null;
	  }
	  return instance;
	}
	function canHydrateHydrationBoundary(instance, inRootOrSingleton) {
	  for (; 8 !== instance.nodeType; ) {
	    if (
	      (1 !== instance.nodeType ||
	        "INPUT" !== instance.nodeName ||
	        "hidden" !== instance.type) &&
	      !inRootOrSingleton
	    )
	      return null;
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) return null;
	  }
	  return instance;
	}
	function isSuspenseInstancePending(instance) {
	  return "$?" === instance.data || "$~" === instance.data;
	}
	function isSuspenseInstanceFallback(instance) {
	  return (
	    "$!" === instance.data ||
	    ("$?" === instance.data && "loading" !== instance.ownerDocument.readyState)
	  );
	}
	function registerSuspenseInstanceRetry(instance, callback) {
	  var ownerDocument = instance.ownerDocument;
	  if ("$~" === instance.data) instance._reactRetry = callback;
	  else if ("$?" !== instance.data || "loading" !== ownerDocument.readyState)
	    callback();
	  else {
	    var listener = function () {
	      callback();
	      ownerDocument.removeEventListener("DOMContentLoaded", listener);
	    };
	    ownerDocument.addEventListener("DOMContentLoaded", listener);
	    instance._reactRetry = listener;
	  }
	}
	function getNextHydratable(node) {
	  for (; null != node; node = node.nextSibling) {
	    var nodeType = node.nodeType;
	    if (1 === nodeType || 3 === nodeType) break;
	    if (8 === nodeType) {
	      nodeType = node.data;
	      if (
	        "$" === nodeType ||
	        "$!" === nodeType ||
	        "$?" === nodeType ||
	        "$~" === nodeType ||
	        "&" === nodeType ||
	        "F!" === nodeType ||
	        "F" === nodeType
	      )
	        break;
	      if ("/$" === nodeType || "/&" === nodeType) return null;
	    }
	  }
	  return node;
	}
	var previousHydratableOnEnteringScopedSingleton = null;
	function getNextHydratableInstanceAfterHydrationBoundary(hydrationInstance) {
	  hydrationInstance = hydrationInstance.nextSibling;
	  for (var depth = 0; hydrationInstance; ) {
	    if (8 === hydrationInstance.nodeType) {
	      var data = hydrationInstance.data;
	      if ("/$" === data || "/&" === data) {
	        if (0 === depth)
	          return getNextHydratable(hydrationInstance.nextSibling);
	        depth--;
	      } else
	        ("$" !== data &&
	          "$!" !== data &&
	          "$?" !== data &&
	          "$~" !== data &&
	          "&" !== data) ||
	          depth++;
	    }
	    hydrationInstance = hydrationInstance.nextSibling;
	  }
	  return null;
	}
	function getParentHydrationBoundary(targetInstance) {
	  targetInstance = targetInstance.previousSibling;
	  for (var depth = 0; targetInstance; ) {
	    if (8 === targetInstance.nodeType) {
	      var data = targetInstance.data;
	      if (
	        "$" === data ||
	        "$!" === data ||
	        "$?" === data ||
	        "$~" === data ||
	        "&" === data
	      ) {
	        if (0 === depth) return targetInstance;
	        depth--;
	      } else ("/$" !== data && "/&" !== data) || depth++;
	    }
	    targetInstance = targetInstance.previousSibling;
	  }
	  return null;
	}
	function resolveSingletonInstance(type, props, rootContainerInstance) {
	  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
	  switch (type) {
	    case "html":
	      type = props.documentElement;
	      if (!type) throw Error(formatProdErrorMessage(452));
	      return type;
	    case "head":
	      type = props.head;
	      if (!type) throw Error(formatProdErrorMessage(453));
	      return type;
	    case "body":
	      type = props.body;
	      if (!type) throw Error(formatProdErrorMessage(454));
	      return type;
	    default:
	      throw Error(formatProdErrorMessage(451));
	  }
	}
	function releaseSingletonInstance(instance) {
	  for (var attributes = instance.attributes; attributes.length; )
	    instance.removeAttributeNode(attributes[0]);
	  detachDeletedInstance(instance);
	}
	var preloadPropsMap = new Map(),
	  preconnectsSet = new Set();
	function getHoistableRoot(container) {
	  return "function" === typeof container.getRootNode
	    ? container.getRootNode()
	    : 9 === container.nodeType
	      ? container
	      : container.ownerDocument;
	}
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
	  f: flushSyncWork,
	  r: requestFormReset,
	  D: prefetchDNS,
	  C: preconnect,
	  L: preload,
	  m: preloadModule,
	  X: preinitScript,
	  S: preinitStyle,
	  M: preinitModuleScript
	};
	function flushSyncWork() {
	  var previousWasRendering = previousDispatcher.f(),
	    wasRendering = flushSyncWork$1();
	  return previousWasRendering || wasRendering;
	}
	function requestFormReset(form) {
	  var formInst = getInstanceFromNode(form);
	  null !== formInst && 5 === formInst.tag && "form" === formInst.type
	    ? requestFormReset$1(formInst)
	    : previousDispatcher.r(form);
	}
	var globalDocument = "undefined" === typeof document ? null : document;
	function preconnectAs(rel, href, crossOrigin) {
	  var ownerDocument = globalDocument;
	  if (ownerDocument && "string" === typeof href && href) {
	    var limitedEscapedHref =
	      escapeSelectorAttributeValueInsideDoubleQuotes(href);
	    limitedEscapedHref =
	      'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
	    "string" === typeof crossOrigin &&
	      (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
	    preconnectsSet.has(limitedEscapedHref) ||
	      (preconnectsSet.add(limitedEscapedHref),
	      (rel = { rel: rel, crossOrigin: crossOrigin, href: href }),
	      null === ownerDocument.querySelector(limitedEscapedHref) &&
	        ((href = ownerDocument.createElement("link")),
	        setInitialProperties(href, "link", rel),
	        markNodeAsHoistable(href),
	        ownerDocument.head.appendChild(href)));
	  }
	}
	function prefetchDNS(href) {
	  previousDispatcher.D(href);
	  preconnectAs("dns-prefetch", href, null);
	}
	function preconnect(href, crossOrigin) {
	  previousDispatcher.C(href, crossOrigin);
	  preconnectAs("preconnect", href, crossOrigin);
	}
	function preload(href, as, options) {
	  previousDispatcher.L(href, as, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href && as) {
	    var preloadSelector =
	      'link[rel="preload"][as="' +
	      escapeSelectorAttributeValueInsideDoubleQuotes(as) +
	      '"]';
	    "image" === as
	      ? options && options.imageSrcSet
	        ? ((preloadSelector +=
	            '[imagesrcset="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(
	              options.imageSrcSet
	            ) +
	            '"]'),
	          "string" === typeof options.imageSizes &&
	            (preloadSelector +=
	              '[imagesizes="' +
	              escapeSelectorAttributeValueInsideDoubleQuotes(
	                options.imageSizes
	              ) +
	              '"]'))
	        : (preloadSelector +=
	            '[href="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	            '"]')
	      : (preloadSelector +=
	          '[href="' +
	          escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	          '"]');
	    var key = preloadSelector;
	    switch (as) {
	      case "style":
	        key = getStyleKey(href);
	        break;
	      case "script":
	        key = getScriptKey(href);
	    }
	    preloadPropsMap.has(key) ||
	      ((href = assign(
	        {
	          rel: "preload",
	          href:
	            "image" === as && options && options.imageSrcSet ? void 0 : href,
	          as: as
	        },
	        options
	      )),
	      preloadPropsMap.set(key, href),
	      null !== ownerDocument.querySelector(preloadSelector) ||
	        ("style" === as &&
	          ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) ||
	        ("script" === as &&
	          ownerDocument.querySelector(getScriptSelectorFromKey(key))) ||
	        ((as = ownerDocument.createElement("link")),
	        setInitialProperties(as, "link", href),
	        markNodeAsHoistable(as),
	        ownerDocument.head.appendChild(as)));
	  }
	}
	function preloadModule(href, options) {
	  previousDispatcher.m(href, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href) {
	    var as = options && "string" === typeof options.as ? options.as : "script",
	      preloadSelector =
	        'link[rel="modulepreload"][as="' +
	        escapeSelectorAttributeValueInsideDoubleQuotes(as) +
	        '"][href="' +
	        escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	        '"]',
	      key = preloadSelector;
	    switch (as) {
	      case "audioworklet":
	      case "paintworklet":
	      case "serviceworker":
	      case "sharedworker":
	      case "worker":
	      case "script":
	        key = getScriptKey(href);
	    }
	    if (
	      !preloadPropsMap.has(key) &&
	      ((href = assign({ rel: "modulepreload", href: href }, options)),
	      preloadPropsMap.set(key, href),
	      null === ownerDocument.querySelector(preloadSelector))
	    ) {
	      switch (as) {
	        case "audioworklet":
	        case "paintworklet":
	        case "serviceworker":
	        case "sharedworker":
	        case "worker":
	        case "script":
	          if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
	            return;
	      }
	      as = ownerDocument.createElement("link");
	      setInitialProperties(as, "link", href);
	      markNodeAsHoistable(as);
	      ownerDocument.head.appendChild(as);
	    }
	  }
	}
	function preinitStyle(href, precedence, options) {
	  previousDispatcher.S(href, precedence, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href) {
	    var styles = getResourcesFromRoot(ownerDocument).hoistableStyles,
	      key = getStyleKey(href);
	    precedence = precedence || "default";
	    var resource = styles.get(key);
	    if (!resource) {
	      var state = { loading: 0, preload: null };
	      if (
	        (resource = ownerDocument.querySelector(
	          getStylesheetSelectorFromKey(key)
	        ))
	      )
	        state.loading = 5;
	      else {
	        href = assign(
	          { rel: "stylesheet", href: href, "data-precedence": precedence },
	          options
	        );
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForStylesheet(href, options);
	        var link = (resource = ownerDocument.createElement("link"));
	        markNodeAsHoistable(link);
	        setInitialProperties(link, "link", href);
	        link._p = new Promise(function (resolve, reject) {
	          link.onload = resolve;
	          link.onerror = reject;
	        });
	        link.addEventListener("load", function () {
	          state.loading |= 1;
	        });
	        link.addEventListener("error", function () {
	          state.loading |= 2;
	        });
	        state.loading |= 4;
	        insertStylesheet(resource, precedence, ownerDocument);
	      }
	      resource = {
	        type: "stylesheet",
	        instance: resource,
	        count: 1,
	        state: state
	      };
	      styles.set(key, resource);
	    }
	  }
	}
	function preinitScript(src, options) {
	  previousDispatcher.X(src, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && src) {
	    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
	      key = getScriptKey(src),
	      resource = scripts.get(key);
	    resource ||
	      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
	      resource ||
	        ((src = assign({ src: src, async: !0 }, options)),
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForScript(src, options),
	        (resource = ownerDocument.createElement("script")),
	        markNodeAsHoistable(resource),
	        setInitialProperties(resource, "link", src),
	        ownerDocument.head.appendChild(resource)),
	      (resource = {
	        type: "script",
	        instance: resource,
	        count: 1,
	        state: null
	      }),
	      scripts.set(key, resource));
	  }
	}
	function preinitModuleScript(src, options) {
	  previousDispatcher.M(src, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && src) {
	    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
	      key = getScriptKey(src),
	      resource = scripts.get(key);
	    resource ||
	      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
	      resource ||
	        ((src = assign({ src: src, async: !0, type: "module" }, options)),
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForScript(src, options),
	        (resource = ownerDocument.createElement("script")),
	        markNodeAsHoistable(resource),
	        setInitialProperties(resource, "link", src),
	        ownerDocument.head.appendChild(resource)),
	      (resource = {
	        type: "script",
	        instance: resource,
	        count: 1,
	        state: null
	      }),
	      scripts.set(key, resource));
	  }
	}
	function getResource(type, currentProps, pendingProps, currentResource) {
	  var JSCompiler_inline_result = (JSCompiler_inline_result =
	    rootInstanceStackCursor.current)
	    ? getHoistableRoot(JSCompiler_inline_result)
	    : null;
	  if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
	  switch (type) {
	    case "meta":
	    case "title":
	      return null;
	    case "style":
	      return "string" === typeof pendingProps.precedence &&
	        "string" === typeof pendingProps.href
	        ? ((currentProps = getStyleKey(pendingProps.href)),
	          (pendingProps = getResourcesFromRoot(
	            JSCompiler_inline_result
	          ).hoistableStyles),
	          (currentResource = pendingProps.get(currentProps)),
	          currentResource ||
	            ((currentResource = {
	              type: "style",
	              instance: null,
	              count: 0,
	              state: null
	            }),
	            pendingProps.set(currentProps, currentResource)),
	          currentResource)
	        : { type: "void", instance: null, count: 0, state: null };
	    case "link":
	      if (
	        "stylesheet" === pendingProps.rel &&
	        "string" === typeof pendingProps.href &&
	        "string" === typeof pendingProps.precedence
	      ) {
	        type = getStyleKey(pendingProps.href);
	        var styles$243 = getResourcesFromRoot(
	            JSCompiler_inline_result
	          ).hoistableStyles,
	          resource$244 = styles$243.get(type);
	        resource$244 ||
	          ((JSCompiler_inline_result =
	            JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result),
	          (resource$244 = {
	            type: "stylesheet",
	            instance: null,
	            count: 0,
	            state: { loading: 0, preload: null }
	          }),
	          styles$243.set(type, resource$244),
	          (styles$243 = JSCompiler_inline_result.querySelector(
	            getStylesheetSelectorFromKey(type)
	          )) &&
	            !styles$243._p &&
	            ((resource$244.instance = styles$243),
	            (resource$244.state.loading = 5)),
	          preloadPropsMap.has(type) ||
	            ((pendingProps = {
	              rel: "preload",
	              as: "style",
	              href: pendingProps.href,
	              crossOrigin: pendingProps.crossOrigin,
	              integrity: pendingProps.integrity,
	              media: pendingProps.media,
	              hrefLang: pendingProps.hrefLang,
	              referrerPolicy: pendingProps.referrerPolicy
	            }),
	            preloadPropsMap.set(type, pendingProps),
	            styles$243 ||
	              preloadStylesheet(
	                JSCompiler_inline_result,
	                type,
	                pendingProps,
	                resource$244.state
	              )));
	        if (currentProps && null === currentResource)
	          throw Error(formatProdErrorMessage(528, ""));
	        return resource$244;
	      }
	      if (currentProps && null !== currentResource)
	        throw Error(formatProdErrorMessage(529, ""));
	      return null;
	    case "script":
	      return (
	        (currentProps = pendingProps.async),
	        (pendingProps = pendingProps.src),
	        "string" === typeof pendingProps &&
	        currentProps &&
	        "function" !== typeof currentProps &&
	        "symbol" !== typeof currentProps
	          ? ((currentProps = getScriptKey(pendingProps)),
	            (pendingProps = getResourcesFromRoot(
	              JSCompiler_inline_result
	            ).hoistableScripts),
	            (currentResource = pendingProps.get(currentProps)),
	            currentResource ||
	              ((currentResource = {
	                type: "script",
	                instance: null,
	                count: 0,
	                state: null
	              }),
	              pendingProps.set(currentProps, currentResource)),
	            currentResource)
	          : { type: "void", instance: null, count: 0, state: null }
	      );
	    default:
	      throw Error(formatProdErrorMessage(444, type));
	  }
	}
	function getStyleKey(href) {
	  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
	}
	function getStylesheetSelectorFromKey(key) {
	  return 'link[rel="stylesheet"][' + key + "]";
	}
	function stylesheetPropsFromRawProps(rawProps) {
	  return assign({}, rawProps, {
	    "data-precedence": rawProps.precedence,
	    precedence: null
	  });
	}
	function preloadStylesheet(ownerDocument, key, preloadProps, state) {
	  ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]")
	    ? (state.loading = 1)
	    : ((key = ownerDocument.createElement("link")),
	      (state.preload = key),
	      key.addEventListener("load", function () {
	        return (state.loading |= 1);
	      }),
	      key.addEventListener("error", function () {
	        return (state.loading |= 2);
	      }),
	      setInitialProperties(key, "link", preloadProps),
	      markNodeAsHoistable(key),
	      ownerDocument.head.appendChild(key));
	}
	function getScriptKey(src) {
	  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
	}
	function getScriptSelectorFromKey(key) {
	  return "script[async]" + key;
	}
	function acquireResource(hoistableRoot, resource, props) {
	  resource.count++;
	  if (null === resource.instance)
	    switch (resource.type) {
	      case "style":
	        var instance = hoistableRoot.querySelector(
	          'style[data-href~="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(props.href) +
	            '"]'
	        );
	        if (instance)
	          return (
	            (resource.instance = instance),
	            markNodeAsHoistable(instance),
	            instance
	          );
	        var styleProps = assign({}, props, {
	          "data-href": props.href,
	          "data-precedence": props.precedence,
	          href: null,
	          precedence: null
	        });
	        instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
	          "style"
	        );
	        markNodeAsHoistable(instance);
	        setInitialProperties(instance, "style", styleProps);
	        insertStylesheet(instance, props.precedence, hoistableRoot);
	        return (resource.instance = instance);
	      case "stylesheet":
	        styleProps = getStyleKey(props.href);
	        var instance$249 = hoistableRoot.querySelector(
	          getStylesheetSelectorFromKey(styleProps)
	        );
	        if (instance$249)
	          return (
	            (resource.state.loading |= 4),
	            (resource.instance = instance$249),
	            markNodeAsHoistable(instance$249),
	            instance$249
	          );
	        instance = stylesheetPropsFromRawProps(props);
	        (styleProps = preloadPropsMap.get(styleProps)) &&
	          adoptPreloadPropsForStylesheet(instance, styleProps);
	        instance$249 = (
	          hoistableRoot.ownerDocument || hoistableRoot
	        ).createElement("link");
	        markNodeAsHoistable(instance$249);
	        var linkInstance = instance$249;
	        linkInstance._p = new Promise(function (resolve, reject) {
	          linkInstance.onload = resolve;
	          linkInstance.onerror = reject;
	        });
	        setInitialProperties(instance$249, "link", instance);
	        resource.state.loading |= 4;
	        insertStylesheet(instance$249, props.precedence, hoistableRoot);
	        return (resource.instance = instance$249);
	      case "script":
	        instance$249 = getScriptKey(props.src);
	        if (
	          (styleProps = hoistableRoot.querySelector(
	            getScriptSelectorFromKey(instance$249)
	          ))
	        )
	          return (
	            (resource.instance = styleProps),
	            markNodeAsHoistable(styleProps),
	            styleProps
	          );
	        instance = props;
	        if ((styleProps = preloadPropsMap.get(instance$249)))
	          (instance = assign({}, props)),
	            adoptPreloadPropsForScript(instance, styleProps);
	        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	        styleProps = hoistableRoot.createElement("script");
	        markNodeAsHoistable(styleProps);
	        setInitialProperties(styleProps, "link", instance);
	        hoistableRoot.head.appendChild(styleProps);
	        return (resource.instance = styleProps);
	      case "void":
	        return null;
	      default:
	        throw Error(formatProdErrorMessage(443, resource.type));
	    }
	  else
	    "stylesheet" === resource.type &&
	      0 === (resource.state.loading & 4) &&
	      ((instance = resource.instance),
	      (resource.state.loading |= 4),
	      insertStylesheet(instance, props.precedence, hoistableRoot));
	  return resource.instance;
	}
	function insertStylesheet(instance, precedence, root) {
	  for (
	    var nodes = root.querySelectorAll(
	        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
	      ),
	      last = nodes.length ? nodes[nodes.length - 1] : null,
	      prior = last,
	      i = 0;
	    i < nodes.length;
	    i++
	  ) {
	    var node = nodes[i];
	    if (node.dataset.precedence === precedence) prior = node;
	    else if (prior !== last) break;
	  }
	  prior
	    ? prior.parentNode.insertBefore(instance, prior.nextSibling)
	    : ((precedence = 9 === root.nodeType ? root.head : root),
	      precedence.insertBefore(instance, precedence.firstChild));
	}
	function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
	  null == stylesheetProps.crossOrigin &&
	    (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
	  null == stylesheetProps.referrerPolicy &&
	    (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
	  null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
	}
	function adoptPreloadPropsForScript(scriptProps, preloadProps) {
	  null == scriptProps.crossOrigin &&
	    (scriptProps.crossOrigin = preloadProps.crossOrigin);
	  null == scriptProps.referrerPolicy &&
	    (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
	  null == scriptProps.integrity &&
	    (scriptProps.integrity = preloadProps.integrity);
	}
	var tagCaches = null;
	function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
	  if (null === tagCaches) {
	    var cache = new Map();
	    var caches = (tagCaches = new Map());
	    caches.set(ownerDocument, cache);
	  } else
	    (caches = tagCaches),
	      (cache = caches.get(ownerDocument)),
	      cache || ((cache = new Map()), caches.set(ownerDocument, cache));
	  if (cache.has(type)) return cache;
	  cache.set(type, null);
	  ownerDocument = ownerDocument.getElementsByTagName(type);
	  for (caches = 0; caches < ownerDocument.length; caches++) {
	    var node = ownerDocument[caches];
	    if (
	      !(
	        node[internalHoistableMarker] ||
	        node[internalInstanceKey] ||
	        ("link" === type && "stylesheet" === node.getAttribute("rel"))
	      ) &&
	      "http://www.w3.org/2000/svg" !== node.namespaceURI
	    ) {
	      var nodeKey = node.getAttribute(keyAttribute) || "";
	      nodeKey = type + nodeKey;
	      var existing = cache.get(nodeKey);
	      existing ? existing.push(node) : cache.set(nodeKey, [node]);
	    }
	  }
	  return cache;
	}
	function mountHoistable(hoistableRoot, type, instance) {
	  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	  hoistableRoot.head.insertBefore(
	    instance,
	    "title" === type ? hoistableRoot.querySelector("head > title") : null
	  );
	}
	function isHostHoistableType(type, props, hostContext) {
	  if (1 === hostContext || null != props.itemProp) return !1;
	  switch (type) {
	    case "meta":
	    case "title":
	      return !0;
	    case "style":
	      if (
	        "string" !== typeof props.precedence ||
	        "string" !== typeof props.href ||
	        "" === props.href
	      )
	        break;
	      return !0;
	    case "link":
	      if (
	        "string" !== typeof props.rel ||
	        "string" !== typeof props.href ||
	        "" === props.href ||
	        props.onLoad ||
	        props.onError
	      )
	        break;
	      switch (props.rel) {
	        case "stylesheet":
	          return (
	            (type = props.disabled),
	            "string" === typeof props.precedence && null == type
	          );
	        default:
	          return !0;
	      }
	    case "script":
	      if (
	        props.async &&
	        "function" !== typeof props.async &&
	        "symbol" !== typeof props.async &&
	        !props.onLoad &&
	        !props.onError &&
	        props.src &&
	        "string" === typeof props.src
	      )
	        return !0;
	  }
	  return !1;
	}
	function preloadResource(resource) {
	  return "stylesheet" === resource.type && 0 === (resource.state.loading & 3)
	    ? !1
	    : !0;
	}
	function suspendResource(state, hoistableRoot, resource, props) {
	  if (
	    "stylesheet" === resource.type &&
	    ("string" !== typeof props.media ||
	      !1 !== matchMedia(props.media).matches) &&
	    0 === (resource.state.loading & 4)
	  ) {
	    if (null === resource.instance) {
	      var key = getStyleKey(props.href),
	        instance = hoistableRoot.querySelector(
	          getStylesheetSelectorFromKey(key)
	        );
	      if (instance) {
	        hoistableRoot = instance._p;
	        null !== hoistableRoot &&
	          "object" === typeof hoistableRoot &&
	          "function" === typeof hoistableRoot.then &&
	          (state.count++,
	          (state = onUnsuspend.bind(state)),
	          hoistableRoot.then(state, state));
	        resource.state.loading |= 4;
	        resource.instance = instance;
	        markNodeAsHoistable(instance);
	        return;
	      }
	      instance = hoistableRoot.ownerDocument || hoistableRoot;
	      props = stylesheetPropsFromRawProps(props);
	      (key = preloadPropsMap.get(key)) &&
	        adoptPreloadPropsForStylesheet(props, key);
	      instance = instance.createElement("link");
	      markNodeAsHoistable(instance);
	      var linkInstance = instance;
	      linkInstance._p = new Promise(function (resolve, reject) {
	        linkInstance.onload = resolve;
	        linkInstance.onerror = reject;
	      });
	      setInitialProperties(instance, "link", props);
	      resource.instance = instance;
	    }
	    null === state.stylesheets && (state.stylesheets = new Map());
	    state.stylesheets.set(resource, hoistableRoot);
	    (hoistableRoot = resource.state.preload) &&
	      0 === (resource.state.loading & 3) &&
	      (state.count++,
	      (resource = onUnsuspend.bind(state)),
	      hoistableRoot.addEventListener("load", resource),
	      hoistableRoot.addEventListener("error", resource));
	  }
	}
	var estimatedBytesWithinLimit = 0;
	function waitForCommitToBeReady(state, timeoutOffset) {
	  state.stylesheets &&
	    0 === state.count &&
	    insertSuspendedStylesheets(state, state.stylesheets);
	  return 0 < state.count || 0 < state.imgCount
	    ? function (commit) {
	        var stylesheetTimer = setTimeout(function () {
	          state.stylesheets &&
	            insertSuspendedStylesheets(state, state.stylesheets);
	          if (state.unsuspend) {
	            var unsuspend = state.unsuspend;
	            state.unsuspend = null;
	            unsuspend();
	          }
	        }, 6e4 + timeoutOffset);
	        0 < state.imgBytes &&
	          0 === estimatedBytesWithinLimit &&
	          (estimatedBytesWithinLimit = 62500 * estimateBandwidth());
	        var imgTimer = setTimeout(
	          function () {
	            state.waitingForImages = !1;
	            if (
	              0 === state.count &&
	              (state.stylesheets &&
	                insertSuspendedStylesheets(state, state.stylesheets),
	              state.unsuspend)
	            ) {
	              var unsuspend = state.unsuspend;
	              state.unsuspend = null;
	              unsuspend();
	            }
	          },
	          (state.imgBytes > estimatedBytesWithinLimit ? 50 : 800) +
	            timeoutOffset
	        );
	        state.unsuspend = commit;
	        return function () {
	          state.unsuspend = null;
	          clearTimeout(stylesheetTimer);
	          clearTimeout(imgTimer);
	        };
	      }
	    : null;
	}
	function onUnsuspend() {
	  this.count--;
	  if (0 === this.count && (0 === this.imgCount || !this.waitingForImages))
	    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
	    else if (this.unsuspend) {
	      var unsuspend = this.unsuspend;
	      this.unsuspend = null;
	      unsuspend();
	    }
	}
	var precedencesByRoot = null;
	function insertSuspendedStylesheets(state, resources) {
	  state.stylesheets = null;
	  null !== state.unsuspend &&
	    (state.count++,
	    (precedencesByRoot = new Map()),
	    resources.forEach(insertStylesheetIntoRoot, state),
	    (precedencesByRoot = null),
	    onUnsuspend.call(state));
	}
	function insertStylesheetIntoRoot(root, resource) {
	  if (!(resource.state.loading & 4)) {
	    var precedences = precedencesByRoot.get(root);
	    if (precedences) var last = precedences.get(null);
	    else {
	      precedences = new Map();
	      precedencesByRoot.set(root, precedences);
	      for (
	        var nodes = root.querySelectorAll(
	            "link[data-precedence],style[data-precedence]"
	          ),
	          i = 0;
	        i < nodes.length;
	        i++
	      ) {
	        var node = nodes[i];
	        if (
	          "LINK" === node.nodeName ||
	          "not all" !== node.getAttribute("media")
	        )
	          precedences.set(node.dataset.precedence, node), (last = node);
	      }
	      last && precedences.set(null, last);
	    }
	    nodes = resource.instance;
	    node = nodes.getAttribute("data-precedence");
	    i = precedences.get(node) || last;
	    i === last && precedences.set(null, nodes);
	    precedences.set(node, nodes);
	    this.count++;
	    last = onUnsuspend.bind(this);
	    nodes.addEventListener("load", last);
	    nodes.addEventListener("error", last);
	    i
	      ? i.parentNode.insertBefore(nodes, i.nextSibling)
	      : ((root = 9 === root.nodeType ? root.head : root),
	        root.insertBefore(nodes, root.firstChild));
	    resource.state.loading |= 4;
	  }
	}
	var HostTransitionContext = {
	  $$typeof: REACT_CONTEXT_TYPE,
	  Provider: null,
	  Consumer: null,
	  _currentValue: sharedNotPendingObject,
	  _currentValue2: sharedNotPendingObject,
	  _threadCount: 0
	};
	function FiberRootNode(
	  containerInfo,
	  tag,
	  hydrate,
	  identifierPrefix,
	  onUncaughtError,
	  onCaughtError,
	  onRecoverableError,
	  onDefaultTransitionIndicator,
	  formState
	) {
	  this.tag = 1;
	  this.containerInfo = containerInfo;
	  this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.callbackNode =
	    this.next =
	    this.pendingContext =
	    this.context =
	    this.cancelPendingCommit =
	      null;
	  this.callbackPriority = 0;
	  this.expirationTimes = createLaneMap(-1);
	  this.entangledLanes =
	    this.shellSuspendCounter =
	    this.errorRecoveryDisabledLanes =
	    this.expiredLanes =
	    this.warmLanes =
	    this.pingedLanes =
	    this.suspendedLanes =
	    this.pendingLanes =
	      0;
	  this.entanglements = createLaneMap(0);
	  this.hiddenUpdates = createLaneMap(null);
	  this.identifierPrefix = identifierPrefix;
	  this.onUncaughtError = onUncaughtError;
	  this.onCaughtError = onCaughtError;
	  this.onRecoverableError = onRecoverableError;
	  this.pooledCache = null;
	  this.pooledCacheLanes = 0;
	  this.formState = formState;
	  this.incompleteTransitions = new Map();
	}
	function createFiberRoot(
	  containerInfo,
	  tag,
	  hydrate,
	  initialChildren,
	  hydrationCallbacks,
	  isStrictMode,
	  identifierPrefix,
	  formState,
	  onUncaughtError,
	  onCaughtError,
	  onRecoverableError,
	  onDefaultTransitionIndicator
	) {
	  containerInfo = new FiberRootNode(
	    containerInfo,
	    tag,
	    hydrate,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    onDefaultTransitionIndicator,
	    formState
	  );
	  tag = 1;
	  !0 === isStrictMode && (tag |= 24);
	  isStrictMode = createFiberImplClass(3, null, null, tag);
	  containerInfo.current = isStrictMode;
	  isStrictMode.stateNode = containerInfo;
	  tag = createCache();
	  tag.refCount++;
	  containerInfo.pooledCache = tag;
	  tag.refCount++;
	  isStrictMode.memoizedState = {
	    element: initialChildren,
	    isDehydrated: hydrate,
	    cache: tag
	  };
	  initializeUpdateQueue(isStrictMode);
	  return containerInfo;
	}
	function getContextForSubtree(parentComponent) {
	  if (!parentComponent) return emptyContextObject;
	  parentComponent = emptyContextObject;
	  return parentComponent;
	}
	function updateContainerImpl(
	  rootFiber,
	  lane,
	  element,
	  container,
	  parentComponent,
	  callback
	) {
	  parentComponent = getContextForSubtree(parentComponent);
	  null === container.context
	    ? (container.context = parentComponent)
	    : (container.pendingContext = parentComponent);
	  container = createUpdate(lane);
	  container.payload = { element: element };
	  callback = void 0 === callback ? null : callback;
	  null !== callback && (container.callback = callback);
	  element = enqueueUpdate(rootFiber, container, lane);
	  null !== element &&
	    (scheduleUpdateOnFiber(element, rootFiber, lane),
	    entangleTransitions(element, rootFiber, lane));
	}
	function markRetryLaneImpl(fiber, retryLane) {
	  fiber = fiber.memoizedState;
	  if (null !== fiber && null !== fiber.dehydrated) {
	    var a = fiber.retryLane;
	    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
	  }
	}
	function markRetryLaneIfNotHydrated(fiber, retryLane) {
	  markRetryLaneImpl(fiber, retryLane);
	  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
	}
	function attemptContinuousHydration(fiber) {
	  if (13 === fiber.tag || 31 === fiber.tag) {
	    var root = enqueueConcurrentRenderForLane(fiber, 67108864);
	    null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
	    markRetryLaneIfNotHydrated(fiber, 67108864);
	  }
	}
	function attemptHydrationAtCurrentPriority(fiber) {
	  if (13 === fiber.tag || 31 === fiber.tag) {
	    var lane = requestUpdateLane();
	    lane = getBumpedLaneForHydrationByLane(lane);
	    var root = enqueueConcurrentRenderForLane(fiber, lane);
	    null !== root && scheduleUpdateOnFiber(root, fiber, lane);
	    markRetryLaneIfNotHydrated(fiber, lane);
	  }
	}
	var _enabled = !0;
	function dispatchDiscreteEvent(
	  domEventName,
	  eventSystemFlags,
	  container,
	  nativeEvent
	) {
	  var prevTransition = ReactSharedInternals.T;
	  ReactSharedInternals.T = null;
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    (ReactDOMSharedInternals.p = 2),
	      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function dispatchContinuousEvent(
	  domEventName,
	  eventSystemFlags,
	  container,
	  nativeEvent
	) {
	  var prevTransition = ReactSharedInternals.T;
	  ReactSharedInternals.T = null;
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    (ReactDOMSharedInternals.p = 8),
	      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function dispatchEvent(
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  if (_enabled) {
	    var blockedOn = findInstanceBlockingEvent(nativeEvent);
	    if (null === blockedOn)
	      dispatchEventForPluginEventSystem(
	        domEventName,
	        eventSystemFlags,
	        nativeEvent,
	        return_targetInst,
	        targetContainer
	      ),
	        clearIfContinuousEvent(domEventName, nativeEvent);
	    else if (
	      queueIfContinuousEvent(
	        blockedOn,
	        domEventName,
	        eventSystemFlags,
	        targetContainer,
	        nativeEvent
	      )
	    )
	      nativeEvent.stopPropagation();
	    else if (
	      (clearIfContinuousEvent(domEventName, nativeEvent),
	      eventSystemFlags & 4 &&
	        -1 < discreteReplayableEvents.indexOf(domEventName))
	    ) {
	      for (; null !== blockedOn; ) {
	        var fiber = getInstanceFromNode(blockedOn);
	        if (null !== fiber)
	          switch (fiber.tag) {
	            case 3:
	              fiber = fiber.stateNode;
	              if (fiber.current.memoizedState.isDehydrated) {
	                var lanes = getHighestPriorityLanes(fiber.pendingLanes);
	                if (0 !== lanes) {
	                  var root = fiber;
	                  root.pendingLanes |= 2;
	                  for (root.entangledLanes |= 2; lanes; ) {
	                    var lane = 1 << (31 - clz32(lanes));
	                    root.entanglements[1] |= lane;
	                    lanes &= ~lane;
	                  }
	                  ensureRootIsScheduled(fiber);
	                  0 === (executionContext & 6) &&
	                    ((workInProgressRootRenderTargetTime = now() + 500),
	                    flushSyncWorkAcrossRoots_impl(0, !1));
	                }
	              }
	              break;
	            case 31:
	            case 13:
	              (root = enqueueConcurrentRenderForLane(fiber, 2)),
	                null !== root && scheduleUpdateOnFiber(root, fiber, 2),
	                flushSyncWork$1(),
	                markRetryLaneIfNotHydrated(fiber, 2);
	          }
	        fiber = findInstanceBlockingEvent(nativeEvent);
	        null === fiber &&
	          dispatchEventForPluginEventSystem(
	            domEventName,
	            eventSystemFlags,
	            nativeEvent,
	            return_targetInst,
	            targetContainer
	          );
	        if (fiber === blockedOn) break;
	        blockedOn = fiber;
	      }
	      null !== blockedOn && nativeEvent.stopPropagation();
	    } else
	      dispatchEventForPluginEventSystem(
	        domEventName,
	        eventSystemFlags,
	        nativeEvent,
	        null,
	        targetContainer
	      );
	  }
	}
	function findInstanceBlockingEvent(nativeEvent) {
	  nativeEvent = getEventTarget(nativeEvent);
	  return findInstanceBlockingTarget(nativeEvent);
	}
	var return_targetInst = null;
	function findInstanceBlockingTarget(targetNode) {
	  return_targetInst = null;
	  targetNode = getClosestInstanceFromNode(targetNode);
	  if (null !== targetNode) {
	    var nearestMounted = getNearestMountedFiber(targetNode);
	    if (null === nearestMounted) targetNode = null;
	    else {
	      var tag = nearestMounted.tag;
	      if (13 === tag) {
	        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
	        if (null !== targetNode) return targetNode;
	        targetNode = null;
	      } else if (31 === tag) {
	        targetNode = getActivityInstanceFromFiber(nearestMounted);
	        if (null !== targetNode) return targetNode;
	        targetNode = null;
	      } else if (3 === tag) {
	        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
	          return 3 === nearestMounted.tag
	            ? nearestMounted.stateNode.containerInfo
	            : null;
	        targetNode = null;
	      } else nearestMounted !== targetNode && (targetNode = null);
	    }
	  }
	  return_targetInst = targetNode;
	  return null;
	}
	function getEventPriority(domEventName) {
	  switch (domEventName) {
	    case "beforetoggle":
	    case "cancel":
	    case "click":
	    case "close":
	    case "contextmenu":
	    case "copy":
	    case "cut":
	    case "auxclick":
	    case "dblclick":
	    case "dragend":
	    case "dragstart":
	    case "drop":
	    case "focusin":
	    case "focusout":
	    case "input":
	    case "invalid":
	    case "keydown":
	    case "keypress":
	    case "keyup":
	    case "mousedown":
	    case "mouseup":
	    case "paste":
	    case "pause":
	    case "play":
	    case "pointercancel":
	    case "pointerdown":
	    case "pointerup":
	    case "ratechange":
	    case "reset":
	    case "resize":
	    case "seeked":
	    case "submit":
	    case "toggle":
	    case "touchcancel":
	    case "touchend":
	    case "touchstart":
	    case "volumechange":
	    case "change":
	    case "selectionchange":
	    case "textInput":
	    case "compositionstart":
	    case "compositionend":
	    case "compositionupdate":
	    case "beforeblur":
	    case "afterblur":
	    case "beforeinput":
	    case "blur":
	    case "fullscreenchange":
	    case "focus":
	    case "hashchange":
	    case "popstate":
	    case "select":
	    case "selectstart":
	      return 2;
	    case "drag":
	    case "dragenter":
	    case "dragexit":
	    case "dragleave":
	    case "dragover":
	    case "mousemove":
	    case "mouseout":
	    case "mouseover":
	    case "pointermove":
	    case "pointerout":
	    case "pointerover":
	    case "scroll":
	    case "touchmove":
	    case "wheel":
	    case "mouseenter":
	    case "mouseleave":
	    case "pointerenter":
	    case "pointerleave":
	      return 8;
	    case "message":
	      switch (getCurrentPriorityLevel()) {
	        case ImmediatePriority:
	          return 2;
	        case UserBlockingPriority:
	          return 8;
	        case NormalPriority$1:
	        case LowPriority:
	          return 32;
	        case IdlePriority:
	          return 268435456;
	        default:
	          return 32;
	      }
	    default:
	      return 32;
	  }
	}
	var hasScheduledReplayAttempt = !1,
	  queuedFocus = null,
	  queuedDrag = null,
	  queuedMouse = null,
	  queuedPointers = new Map(),
	  queuedPointerCaptures = new Map(),
	  queuedExplicitHydrationTargets = [],
	  discreteReplayableEvents =
	    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
	      " "
	    );
	function clearIfContinuousEvent(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "focusin":
	    case "focusout":
	      queuedFocus = null;
	      break;
	    case "dragenter":
	    case "dragleave":
	      queuedDrag = null;
	      break;
	    case "mouseover":
	    case "mouseout":
	      queuedMouse = null;
	      break;
	    case "pointerover":
	    case "pointerout":
	      queuedPointers.delete(nativeEvent.pointerId);
	      break;
	    case "gotpointercapture":
	    case "lostpointercapture":
	      queuedPointerCaptures.delete(nativeEvent.pointerId);
	  }
	}
	function accumulateOrCreateContinuousQueuedReplayableEvent(
	  existingQueuedEvent,
	  blockedOn,
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  if (
	    null === existingQueuedEvent ||
	    existingQueuedEvent.nativeEvent !== nativeEvent
	  )
	    return (
	      (existingQueuedEvent = {
	        blockedOn: blockedOn,
	        domEventName: domEventName,
	        eventSystemFlags: eventSystemFlags,
	        nativeEvent: nativeEvent,
	        targetContainers: [targetContainer]
	      }),
	      null !== blockedOn &&
	        ((blockedOn = getInstanceFromNode(blockedOn)),
	        null !== blockedOn && attemptContinuousHydration(blockedOn)),
	      existingQueuedEvent
	    );
	  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
	  blockedOn = existingQueuedEvent.targetContainers;
	  null !== targetContainer &&
	    -1 === blockedOn.indexOf(targetContainer) &&
	    blockedOn.push(targetContainer);
	  return existingQueuedEvent;
	}
	function queueIfContinuousEvent(
	  blockedOn,
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  switch (domEventName) {
	    case "focusin":
	      return (
	        (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedFocus,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        !0
	      );
	    case "dragenter":
	      return (
	        (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedDrag,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        !0
	      );
	    case "mouseover":
	      return (
	        (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedMouse,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        !0
	      );
	    case "pointerover":
	      var pointerId = nativeEvent.pointerId;
	      queuedPointers.set(
	        pointerId,
	        accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedPointers.get(pointerId) || null,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )
	      );
	      return !0;
	    case "gotpointercapture":
	      return (
	        (pointerId = nativeEvent.pointerId),
	        queuedPointerCaptures.set(
	          pointerId,
	          accumulateOrCreateContinuousQueuedReplayableEvent(
	            queuedPointerCaptures.get(pointerId) || null,
	            blockedOn,
	            domEventName,
	            eventSystemFlags,
	            targetContainer,
	            nativeEvent
	          )
	        ),
	        !0
	      );
	  }
	  return !1;
	}
	function attemptExplicitHydrationTarget(queuedTarget) {
	  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
	  if (null !== targetInst) {
	    var nearestMounted = getNearestMountedFiber(targetInst);
	    if (null !== nearestMounted)
	      if (((targetInst = nearestMounted.tag), 13 === targetInst)) {
	        if (
	          ((targetInst = getSuspenseInstanceFromFiber(nearestMounted)),
	          null !== targetInst)
	        ) {
	          queuedTarget.blockedOn = targetInst;
	          runWithPriority(queuedTarget.priority, function () {
	            attemptHydrationAtCurrentPriority(nearestMounted);
	          });
	          return;
	        }
	      } else if (31 === targetInst) {
	        if (
	          ((targetInst = getActivityInstanceFromFiber(nearestMounted)),
	          null !== targetInst)
	        ) {
	          queuedTarget.blockedOn = targetInst;
	          runWithPriority(queuedTarget.priority, function () {
	            attemptHydrationAtCurrentPriority(nearestMounted);
	          });
	          return;
	        }
	      } else if (
	        3 === targetInst &&
	        nearestMounted.stateNode.current.memoizedState.isDehydrated
	      ) {
	        queuedTarget.blockedOn =
	          3 === nearestMounted.tag
	            ? nearestMounted.stateNode.containerInfo
	            : null;
	        return;
	      }
	  }
	  queuedTarget.blockedOn = null;
	}
	function attemptReplayContinuousQueuedEvent(queuedEvent) {
	  if (null !== queuedEvent.blockedOn) return !1;
	  for (
	    var targetContainers = queuedEvent.targetContainers;
	    0 < targetContainers.length;

	  ) {
	    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
	    if (null === nextBlockedOn) {
	      nextBlockedOn = queuedEvent.nativeEvent;
	      var nativeEventClone = new nextBlockedOn.constructor(
	        nextBlockedOn.type,
	        nextBlockedOn
	      );
	      currentReplayingEvent = nativeEventClone;
	      nextBlockedOn.target.dispatchEvent(nativeEventClone);
	      currentReplayingEvent = null;
	    } else
	      return (
	        (targetContainers = getInstanceFromNode(nextBlockedOn)),
	        null !== targetContainers &&
	          attemptContinuousHydration(targetContainers),
	        (queuedEvent.blockedOn = nextBlockedOn),
	        !1
	      );
	    targetContainers.shift();
	  }
	  return !0;
	}
	function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
	  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
	}
	function replayUnblockedEvents() {
	  hasScheduledReplayAttempt = !1;
	  null !== queuedFocus &&
	    attemptReplayContinuousQueuedEvent(queuedFocus) &&
	    (queuedFocus = null);
	  null !== queuedDrag &&
	    attemptReplayContinuousQueuedEvent(queuedDrag) &&
	    (queuedDrag = null);
	  null !== queuedMouse &&
	    attemptReplayContinuousQueuedEvent(queuedMouse) &&
	    (queuedMouse = null);
	  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
	  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
	}
	function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
	  queuedEvent.blockedOn === unblocked &&
	    ((queuedEvent.blockedOn = null),
	    hasScheduledReplayAttempt ||
	      ((hasScheduledReplayAttempt = !0),
	      Scheduler.unstable_scheduleCallback(
	        Scheduler.unstable_NormalPriority,
	        replayUnblockedEvents
	      )));
	}
	var lastScheduledReplayQueue = null;
	function scheduleReplayQueueIfNeeded(formReplayingQueue) {
	  lastScheduledReplayQueue !== formReplayingQueue &&
	    ((lastScheduledReplayQueue = formReplayingQueue),
	    Scheduler.unstable_scheduleCallback(
	      Scheduler.unstable_NormalPriority,
	      function () {
	        lastScheduledReplayQueue === formReplayingQueue &&
	          (lastScheduledReplayQueue = null);
	        for (var i = 0; i < formReplayingQueue.length; i += 3) {
	          var form = formReplayingQueue[i],
	            submitterOrAction = formReplayingQueue[i + 1],
	            formData = formReplayingQueue[i + 2];
	          if ("function" !== typeof submitterOrAction)
	            if (null === findInstanceBlockingTarget(submitterOrAction || form))
	              continue;
	            else break;
	          var formInst = getInstanceFromNode(form);
	          null !== formInst &&
	            (formReplayingQueue.splice(i, 3),
	            (i -= 3),
	            startHostTransition(
	              formInst,
	              {
	                pending: !0,
	                data: formData,
	                method: form.method,
	                action: submitterOrAction
	              },
	              submitterOrAction,
	              formData
	            ));
	        }
	      }
	    ));
	}
	function retryIfBlockedOn(unblocked) {
	  function unblock(queuedEvent) {
	    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
	  }
	  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
	  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
	  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
	  queuedPointers.forEach(unblock);
	  queuedPointerCaptures.forEach(unblock);
	  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
	    var queuedTarget = queuedExplicitHydrationTargets[i];
	    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
	  }
	  for (
	    ;
	    0 < queuedExplicitHydrationTargets.length &&
	    ((i = queuedExplicitHydrationTargets[0]), null === i.blockedOn);

	  )
	    attemptExplicitHydrationTarget(i),
	      null === i.blockedOn && queuedExplicitHydrationTargets.shift();
	  i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
	  if (null != i)
	    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
	      var form = i[queuedTarget],
	        submitterOrAction = i[queuedTarget + 1],
	        formProps = form[internalPropsKey] || null;
	      if ("function" === typeof submitterOrAction)
	        formProps || scheduleReplayQueueIfNeeded(i);
	      else if (formProps) {
	        var action = null;
	        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
	          if (
	            ((form = submitterOrAction),
	            (formProps = submitterOrAction[internalPropsKey] || null))
	          )
	            action = formProps.formAction;
	          else {
	            if (null !== findInstanceBlockingTarget(form)) continue;
	          }
	        else action = formProps.action;
	        "function" === typeof action
	          ? (i[queuedTarget + 1] = action)
	          : (i.splice(queuedTarget, 3), (queuedTarget -= 3));
	        scheduleReplayQueueIfNeeded(i);
	      }
	    }
	}
	function defaultOnDefaultTransitionIndicator() {
	  function handleNavigate(event) {
	    event.canIntercept &&
	      "react-transition" === event.info &&
	      event.intercept({
	        handler: function () {
	          return new Promise(function (resolve) {
	            return (pendingResolve = resolve);
	          });
	        },
	        focusReset: "manual",
	        scroll: "manual"
	      });
	  }
	  function handleNavigateComplete() {
	    null !== pendingResolve && (pendingResolve(), (pendingResolve = null));
	    isCancelled || setTimeout(startFakeNavigation, 20);
	  }
	  function startFakeNavigation() {
	    if (!isCancelled && !navigation.transition) {
	      var currentEntry = navigation.currentEntry;
	      currentEntry &&
	        null != currentEntry.url &&
	        navigation.navigate(currentEntry.url, {
	          state: currentEntry.getState(),
	          info: "react-transition",
	          history: "replace"
	        });
	    }
	  }
	  if ("object" === typeof navigation) {
	    var isCancelled = !1,
	      pendingResolve = null;
	    navigation.addEventListener("navigate", handleNavigate);
	    navigation.addEventListener("navigatesuccess", handleNavigateComplete);
	    navigation.addEventListener("navigateerror", handleNavigateComplete);
	    setTimeout(startFakeNavigation, 100);
	    return function () {
	      isCancelled = !0;
	      navigation.removeEventListener("navigate", handleNavigate);
	      navigation.removeEventListener("navigatesuccess", handleNavigateComplete);
	      navigation.removeEventListener("navigateerror", handleNavigateComplete);
	      null !== pendingResolve && (pendingResolve(), (pendingResolve = null));
	    };
	  }
	}
	function ReactDOMRoot(internalRoot) {
	  this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render =
	  function (children) {
	    var root = this._internalRoot;
	    if (null === root) throw Error(formatProdErrorMessage(409));
	    var current = root.current,
	      lane = requestUpdateLane();
	    updateContainerImpl(current, lane, children, root, null, null);
	  };
	ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount =
	  function () {
	    var root = this._internalRoot;
	    if (null !== root) {
	      this._internalRoot = null;
	      var container = root.containerInfo;
	      updateContainerImpl(root.current, 2, null, root, null, null);
	      flushSyncWork$1();
	      container[internalContainerInstanceKey] = null;
	    }
	  };
	function ReactDOMHydrationRoot(internalRoot) {
	  this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function (target) {
	  if (target) {
	    var updatePriority = resolveUpdatePriority();
	    target = { blockedOn: null, target: target, priority: updatePriority };
	    for (
	      var i = 0;
	      i < queuedExplicitHydrationTargets.length &&
	      0 !== updatePriority &&
	      updatePriority < queuedExplicitHydrationTargets[i].priority;
	      i++
	    );
	    queuedExplicitHydrationTargets.splice(i, 0, target);
	    0 === i && attemptExplicitHydrationTarget(target);
	  }
	};
	var isomorphicReactPackageVersion$jscomp$inline_1840 = React.version;
	if (
	  "19.2.5" !==
	  isomorphicReactPackageVersion$jscomp$inline_1840
	)
	  throw Error(
	    formatProdErrorMessage(
	      527,
	      isomorphicReactPackageVersion$jscomp$inline_1840,
	      "19.2.5"
	    )
	  );
	ReactDOMSharedInternals.findDOMNode = function (componentOrElement) {
	  var fiber = componentOrElement._reactInternals;
	  if (void 0 === fiber) {
	    if ("function" === typeof componentOrElement.render)
	      throw Error(formatProdErrorMessage(188));
	    componentOrElement = Object.keys(componentOrElement).join(",");
	    throw Error(formatProdErrorMessage(268, componentOrElement));
	  }
	  componentOrElement = findCurrentFiberUsingSlowPath(fiber);
	  componentOrElement =
	    null !== componentOrElement
	      ? findCurrentHostFiberImpl(componentOrElement)
	      : null;
	  componentOrElement =
	    null === componentOrElement ? null : componentOrElement.stateNode;
	  return componentOrElement;
	};
	var internals$jscomp$inline_2347 = {
	  bundleType: 0,
	  version: "19.2.5",
	  rendererPackageName: "react-dom",
	  currentDispatcherRef: ReactSharedInternals,
	  reconcilerVersion: "19.2.5"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var hook$jscomp$inline_2348 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (
	    !hook$jscomp$inline_2348.isDisabled &&
	    hook$jscomp$inline_2348.supportsFiber
	  )
	    try {
	      (rendererID = hook$jscomp$inline_2348.inject(
	        internals$jscomp$inline_2347
	      )),
	        (injectedHook = hook$jscomp$inline_2348);
	    } catch (err) {}
	}
	reactDomClient_production.createRoot = function (container, options) {
	  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
	  var isStrictMode = !1,
	    identifierPrefix = "",
	    onUncaughtError = defaultOnUncaughtError,
	    onCaughtError = defaultOnCaughtError,
	    onRecoverableError = defaultOnRecoverableError;
	  null !== options &&
	    void 0 !== options &&
	    (!0 === options.unstable_strictMode && (isStrictMode = !0),
	    void 0 !== options.identifierPrefix &&
	      (identifierPrefix = options.identifierPrefix),
	    void 0 !== options.onUncaughtError &&
	      (onUncaughtError = options.onUncaughtError),
	    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
	    void 0 !== options.onRecoverableError &&
	      (onRecoverableError = options.onRecoverableError));
	  options = createFiberRoot(
	    container,
	    1,
	    !1,
	    null,
	    null,
	    isStrictMode,
	    identifierPrefix,
	    null,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    defaultOnDefaultTransitionIndicator
	  );
	  container[internalContainerInstanceKey] = options.current;
	  listenToAllSupportedEvents(container);
	  return new ReactDOMRoot(options);
	};
	reactDomClient_production.hydrateRoot = function (container, initialChildren, options) {
	  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
	  var isStrictMode = !1,
	    identifierPrefix = "",
	    onUncaughtError = defaultOnUncaughtError,
	    onCaughtError = defaultOnCaughtError,
	    onRecoverableError = defaultOnRecoverableError,
	    formState = null;
	  null !== options &&
	    void 0 !== options &&
	    (!0 === options.unstable_strictMode && (isStrictMode = !0),
	    void 0 !== options.identifierPrefix &&
	      (identifierPrefix = options.identifierPrefix),
	    void 0 !== options.onUncaughtError &&
	      (onUncaughtError = options.onUncaughtError),
	    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
	    void 0 !== options.onRecoverableError &&
	      (onRecoverableError = options.onRecoverableError),
	    void 0 !== options.formState && (formState = options.formState));
	  initialChildren = createFiberRoot(
	    container,
	    1,
	    !0,
	    initialChildren,
	    null != options ? options : null,
	    isStrictMode,
	    identifierPrefix,
	    formState,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    defaultOnDefaultTransitionIndicator
	  );
	  initialChildren.context = getContextForSubtree(null);
	  options = initialChildren.current;
	  isStrictMode = requestUpdateLane();
	  isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
	  identifierPrefix = createUpdate(isStrictMode);
	  identifierPrefix.callback = null;
	  enqueueUpdate(options, identifierPrefix, isStrictMode);
	  options = isStrictMode;
	  initialChildren.current.lanes = options;
	  markRootUpdated$1(initialChildren, options);
	  ensureRootIsScheduled(initialChildren);
	  container[internalContainerInstanceKey] = initialChildren.current;
	  listenToAllSupportedEvents(container);
	  return new ReactDOMHydrationRoot(initialChildren);
	};
	reactDomClient_production.version = "19.2.5";
	return reactDomClient_production;
}

var client$1 = client$2.exports;

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client$2.exports;
	hasRequiredClient = 1;
	"use strict";
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  if (false) {
	    throw new Error("^_^");
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	if (true) {
	  checkDCE();
	  client$2.exports = requireReactDomClient_production();
	} else {
	  module.exports = require("./cjs/react-dom-client.development.js");
	}
	return client$2.exports;
}

var clientExports = requireClient();
const client = /*@__PURE__*/getDefaultExportFromCjs(clientExports);

const GlobalStyle = vt`
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: sans-serif; }
`;
window.__resetWallet__ = () => {
  Wallet.disconnect();
  delete window.cardano;
  localStorage.clear();
};
beforeMount(async ({ App }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyle, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(App, {})
  ] });
});


"use strict";

// packages/playwright-ct-core/src/injected/importRegistry.ts
function isImportRef(value) {
  return typeof value === "object" && value && value.__pw_type === "importRef";
}
var ImportRegistry = class {
  constructor() {
    this._registry = /* @__PURE__ */ new Map();
  }
  initialize(components) {
    for (const [name, value] of Object.entries(components))
      this._registry.set(name, value);
  }
  async resolveImportRef(importRef) {
    const importFunction = this._registry.get(importRef.id);
    if (!importFunction)
      throw new Error(`Unregistered component: ${importRef.id}. Following components are registered: ${[...this._registry.keys()]}`);
    let importedObject = await importFunction();
    if (!importedObject)
      throw new Error(`Could not resolve component: ${importRef.id}.`);
    if (importRef.property) {
      importedObject = importedObject[importRef.property];
      if (!importedObject)
        throw new Error(`Could not instantiate component: ${importRef.id}.${importRef.property}.`);
    }
    return importedObject;
  }
};

// packages/playwright-ct-core/src/injected/serializers.ts
function isFunctionRef(value) {
  return value && typeof value === "object" && value.__pw_type === "function";
}
async function unwrapObject(value) {
  return transformObjectAsync(value, async (v) => {
    if (isFunctionRef(v)) {
      const result = (...args) => {
        window.__ctDispatchFunction(v.ordinal, args);
      };
      return { result };
    }
    if (isImportRef(v))
      return { result: await window.__pwRegistry.resolveImportRef(v) };
  });
}
function transformObject(value, mapping) {
  const result = mapping(value);
  if (result)
    return result.result;
  if (value === null || typeof value !== "object")
    return value;
  if (value instanceof Date || value instanceof RegExp || value instanceof URL)
    return value;
  if (Array.isArray(value)) {
    const result3 = [];
    for (const item of value)
      result3.push(transformObject(item, mapping));
    return result3;
  }
  if ((value == null ? void 0 : value.__pw_type) === "jsx" && typeof value.type === "function") {
    throw new Error([
      `Component "${value.type.name}" cannot be mounted.`,
      `Most likely, this component is defined in the test file. Create a test story instead.`,
      `For more information, see https://playwright.dev/docs/test-components#test-stories.`
    ].join("\n"));
  }
  const result2 = {};
  for (const [key, prop] of Object.entries(value))
    result2[key] = transformObject(prop, mapping);
  return result2;
}
async function transformObjectAsync(value, mapping) {
  const result = await mapping(value);
  if (result)
    return result.result;
  if (value === null || typeof value !== "object")
    return value;
  if (value instanceof Date || value instanceof RegExp || value instanceof URL)
    return value;
  if (Array.isArray(value)) {
    const result3 = [];
    for (const item of value)
      result3.push(await transformObjectAsync(item, mapping));
    return result3;
  }
  const result2 = {};
  for (const [key, prop] of Object.entries(value))
    result2[key] = await transformObjectAsync(prop, mapping);
  return result2;
}

// packages/playwright-ct-core/src/injected/index.ts
window.__pwRegistry = new ImportRegistry();
window.__pwUnwrapObject = unwrapObject;
window.__pwTransformObject = transformObject;
/** @typedef {import('../playwright-ct-core/types/component').JsxComponent} JsxComponent */

/** @type {Map<Element, { root: import('react-dom/client').Root, setRenderer: (renderer: any) => void }>} */
const __pwRootRegistry = new Map();

/**
 * @param {any} component
 * @returns {component is JsxComponent}
 */
function isJsxComponent(component) {
  return typeof component === 'object' && component && component.__pw_type === 'jsx';
}

/**
 * @param {any} type
 * @returns {boolean} type is Playwright's mock JSX.Fragment
 */
function isJsxFragment(type) {
  return typeof type === 'object' && type?.__pw_jsx_fragment;
}

/**
 * Turns the Playwright representation of JSX (see jsx-runtime.js) into React.createElement calls.
 * @param {any} value
 */
function __pwRender(value) {
  return window.__pwTransformObject(value, v => {
    if (isJsxComponent(v)) {
      const component = v;
      let type = component.type;
      if (isJsxFragment(type))
        type = React2.Fragment;
      const props = component.props ? __pwRender(component.props) : {};
      const key = component.key ? __pwRender(component.key) : undefined;
      const { children, ...propsWithoutChildren } = props;
      if (key)
        propsWithoutChildren.key = key;
      const createElementArguments = [propsWithoutChildren];
      if (children)
        createElementArguments.push(children);
      return { result: React2.createElement(type, ...createElementArguments) };
    }
  });
}

window.playwrightMount = async (component, rootElement, hooksConfig) => {
  if (!isJsxComponent(component))
    throw new Error('Object mount notation is not supported');
  if (__pwRootRegistry.has(rootElement)) {
    throw new Error(
        'Attempting to mount a component into an container that already has a React root'
    );
  }

  const root = clientExports.createRoot(rootElement);
  const entry = { root, setRenderer: () => undefined };
  __pwRootRegistry.set(rootElement, entry);

  const App = () => {
    /** @type {any} */
    const [renderer, setRenderer] = React2.useState(() => __pwRender(component));
    entry.setRenderer = setRenderer;
    return renderer;
  };
  let AppWrapper = App;
  for (const hook of window.__pw_hooks_before_mount || []) {
    const wrapper = await hook({ App: AppWrapper, hooksConfig });
    if (wrapper)
      AppWrapper = () => wrapper;
  }

  root.render(React2.createElement(AppWrapper));

  for (const hook of window.__pw_hooks_after_mount || [])
    await hook({ hooksConfig });
};

window.playwrightUnmount = async rootElement => {
  const entry = __pwRootRegistry.get(rootElement);
  if (!entry)
    throw new Error('Component was not mounted');

  entry.root.unmount();
  __pwRootRegistry.delete(rootElement);
};

window.playwrightUpdate = async (rootElement, component) => {
  if (!isJsxComponent(component))
    throw new Error('Object mount notation is not supported');

  const entry = __pwRootRegistry.get(rootElement);
  if (!entry)
    throw new Error('Component was not mounted');
  entry.setRenderer(() => __pwRender(component));
};

const _Users_fabianbormann_workspace_cardano_connect_with_wallet_react_src_components_ConnectWalletButton_ConnectWalletButton = () => __vitePreload(() => import('./ConnectWalletButton-GnPObxF3.js'),true              ?__vite__mapDeps([0,1]):void 0).then((mod) => mod.default);
const _Users_fabianbormann_workspace_cardano_connect_with_wallet_react_src_components_ConnectWalletList_ConnectWalletList = () => __vitePreload(() => import('./ConnectWalletList-B_be24F3.js'),true              ?__vite__mapDeps([2,1]):void 0).then((mod) => mod.default);
__pwRegistry.initialize({ _Users_fabianbormann_workspace_cardano_connect_with_wallet_react_src_components_ConnectWalletButton_ConnectWalletButton,
  _Users_fabianbormann_workspace_cardano_connect_with_wallet_react_src_components_ConnectWalletList_ConnectWalletList });

export { NetworkType as N, Ot as O, React2 as R, UnavailableWalletVisibility as U, WalletExtensionNotFoundError as W, chromeStoreUrl as a, generateCip158DeepLink as b, checkIsMobile as c, getWalletIcon as d, estimateAvailableWallets as e, capitalize as f, getWalletConfig as g, formatSupportedWallets as h, isWalletInstalled as i, jsxRuntimeExports as j, getDefaultExportFromCjs as k, Wallet as l, mobileWallets as m, React as n, requireReactDom as o, reactExports as r, yt as y };
//# sourceMappingURL=index-Dcr_zcAl.js.map
