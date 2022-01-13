module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/I18nManager/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/I18nManager/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);

var doLeftAndRightSwapInRTL = true;
var isPreferredLanguageRTL = false;
var isRTLAllowed = true;
var isRTLForced = false;

var isRTL = function isRTL() {
  if (isRTLForced) {
    return true;
  }

  return isRTLAllowed && isPreferredLanguageRTL;
};

var onDirectionChange = function onDirectionChange() {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default.a.canUseDOM) {
    if (document.documentElement && document.documentElement.setAttribute) {
      document.documentElement.setAttribute('dir', isRTL() ? 'rtl' : 'ltr');
    }
  }
};

var I18nManager = {
  allowRTL: function allowRTL(bool) {
    isRTLAllowed = bool;
    onDirectionChange();
  },
  forceRTL: function forceRTL(bool) {
    isRTLForced = bool;
    onDirectionChange();
  },
  getConstants: function getConstants() {
    return {
      doLeftAndRightSwapInRTL: doLeftAndRightSwapInRTL,
      isRTL: isRTL()
    };
  },
  setPreferredLanguageRTL: function setPreferredLanguageRTL(bool) {
    isPreferredLanguageRTL = bool;
    onDirectionChange();
  },
  swapLeftAndRightInRTL: function swapLeftAndRightInRTL(bool) {
    doLeftAndRightSwapInRTL = bool;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (I18nManager);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReactNativePropRegistry; });
var emptyObject = {};
var objects = {};
var prefix = 'r';
var uniqueID = 1;

var createKey = function createKey(id) {
  return prefix + "-" + id;
};

var ReactNativePropRegistry = function () {
  function ReactNativePropRegistry() {}

  ReactNativePropRegistry.register = function register(object) {
    var id = uniqueID++;

    if (true) {
      Object.freeze(object);
    }

    var key = createKey(id);
    objects[key] = object;
    return id;
  };

  ReactNativePropRegistry.getByID = function getByID(id) {
    if (!id) {
      return emptyObject;
    }

    var key = createKey(id);
    var object = objects[key];

    if (!object) {
      console.warn('Invalid style with id `' + id + '`. Skipping ...');
      return emptyObject;
    }

    return object;
  };

  return ReactNativePropRegistry;
}();



/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactNativePropRegistry */ "./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry.js");
/* harmony import */ var _flattenStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flattenStyle */ "./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validate */ "./node_modules/react-native-web/dist/exports/StyleSheet/validate.js");



var absoluteFillObject = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var absoluteFill = _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__["default"].register(absoluteFillObject);
var StyleSheet = {
  absoluteFill: absoluteFill,
  absoluteFillObject: absoluteFillObject,
  compose: function compose(style1, style2) {
    if (true) {
      var len = arguments.length;

      if (len > 2) {
        var readableStyles = Array.prototype.slice.call(arguments).map(function (a) {
          return Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_1__["default"])(a);
        });
        throw new Error("StyleSheet.compose() only accepts 2 arguments, received " + len + ": " + JSON.stringify(readableStyles));
      }
    }

    if (style1 && style2) {
      return [style1, style2];
    } else {
      return style1 || style2;
    }
  },
  create: function create(styles) {
    var result = {};
    Object.keys(styles).forEach(function (key) {
      if (true) {
        Object(_validate__WEBPACK_IMPORTED_MODULE_2__["default"])(key, styles);
      }

      var id = styles[key] && _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__["default"].register(styles[key]);
      result[key] = id;
    });
    return result;
  },
  flatten: _flattenStyle__WEBPACK_IMPORTED_MODULE_1__["default"],
  hairlineWidth: 1
};
/* harmony default export */ __webpack_exports__["default"] = (StyleSheet);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/compile.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/compile.js ***!
  \**************************************************************************/
/*! exports provided: atomic, classic, inline, stringifyValueWithProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "atomic", function() { return atomic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classic", function() { return classic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inline", function() { return inline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyValueWithProperty", function() { return stringifyValueWithProperty; });
/* harmony import */ var _createReactDOMStyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createReactDOMStyle */ "./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js");
/* harmony import */ var _vendor_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vendor/hash */ "./node_modules/react-native-web/dist/vendor/hash/index.js");
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hyphenate-style-name */ "hyphenate-style-name");
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");
/* harmony import */ var _modules_prefixStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/prefixStyles */ "./node_modules/react-native-web/dist/modules/prefixStyles/index.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}






var cache = {
  get: function get(property, value) {
    if (cache[property] != null && cache[property].hasOwnProperty(value) && cache[property][value] != null) {
      return cache[property][value];
    }
  },
  set: function set(property, value, object) {
    if (cache[property] == null) {
      cache[property] = {};
    }

    return cache[property][value] = object;
  }
};
function atomic(style) {
  return Object.keys(style).sort().reduce(function (acc, property) {
    var value = style[property];

    if (value != null) {
      var valueString = stringifyValueWithProperty(value, property);
      var cachedResult = cache.get(property, valueString);

      if (cachedResult != null) {
        var identifier = cachedResult.identifier;
        acc[identifier] = cachedResult;
      } else {
        var _identifier = createIdentifier('r', property, value);

        var rules = createAtomicRules(_identifier, property, value);

        var _cachedResult = cache.set(property, valueString, {
          property: property,
          value: stringifyValueWithProperty(value, property),
          identifier: _identifier,
          rules: rules
        });

        acc[_identifier] = _cachedResult;
      }
    }

    return acc;
  }, {});
}
function classic(style, name) {
  var _ref;

  var identifier = createIdentifier('css', name, style);

  var animationKeyframes = style.animationKeyframes,
      rest = _objectWithoutPropertiesLoose(style, ["animationKeyframes"]);

  var rules = [];
  var selector = "." + identifier;
  var animationName;

  if (animationKeyframes != null) {
    var _processKeyframesValu = processKeyframesValue(animationKeyframes),
        animationNames = _processKeyframesValu.animationNames,
        keyframesRules = _processKeyframesValu.rules;

    animationName = animationNames.join(',');
    rules.push.apply(rules, keyframesRules);
  }

  var block = createDeclarationBlock(_objectSpread(_objectSpread({}, rest), {}, {
    animationName: animationName
  }));
  rules.push("" + selector + block);
  return _ref = {}, _ref[identifier] = {
    identifier: identifier,
    rules: rules
  }, _ref;
}
function inline(style) {
  return Object(_modules_prefixStyles__WEBPACK_IMPORTED_MODULE_4__["prefixInlineStyles"])(Object(_createReactDOMStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(style));
}
function stringifyValueWithProperty(value, property) {
  var normalizedValue = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(value, property);
  return typeof normalizedValue !== 'string' ? JSON.stringify(normalizedValue || '') : normalizedValue;
}

function createAtomicRules(identifier, property, value) {
  var rules = [];
  var selector = "." + identifier;

  switch (property) {
    case 'animationKeyframes':
      {
        var _processKeyframesValu2 = processKeyframesValue(value),
            animationNames = _processKeyframesValu2.animationNames,
            keyframesRules = _processKeyframesValu2.rules;

        var block = createDeclarationBlock({
          animationName: animationNames.join(',')
        });
        rules.push.apply(rules, ["" + selector + block].concat(keyframesRules));
        break;
      }

    case 'placeholderTextColor':
      {
        var _block = createDeclarationBlock({
          color: value,
          opacity: 1
        });

        rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
        break;
      }

    case 'pointerEvents':
      {
        var finalValue = value;

        if (value === 'auto' || value === 'box-only') {
          finalValue = 'auto!important';

          if (value === 'box-only') {
            var _block3 = createDeclarationBlock({
              pointerEvents: 'none'
            });

            rules.push(selector + ">*" + _block3);
          }
        } else if (value === 'none' || value === 'box-none') {
          finalValue = 'none!important';

          if (value === 'box-none') {
            var _block4 = createDeclarationBlock({
              pointerEvents: 'auto'
            });

            rules.push(selector + ">*" + _block4);
          }
        }

        var _block2 = createDeclarationBlock({
          pointerEvents: finalValue
        });

        rules.push("" + selector + _block2);
        break;
      }

    case 'scrollbarWidth':
      {
        if (value === 'none') {
          rules.push(selector + "::-webkit-scrollbar{display:none}");
        }

        var _block5 = createDeclarationBlock({
          scrollbarWidth: value
        });

        rules.push("" + selector + _block5);
        break;
      }

    default:
      {
        var _createDeclarationBlo;

        var _block6 = createDeclarationBlock((_createDeclarationBlo = {}, _createDeclarationBlo[property] = value, _createDeclarationBlo));

        rules.push("" + selector + _block6);
        break;
      }
  }

  return rules;
}

function createDeclarationBlock(style) {
  var domStyle = Object(_modules_prefixStyles__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_createReactDOMStyle__WEBPACK_IMPORTED_MODULE_0__["default"])(style));
  var declarationsString = Object.keys(domStyle).map(function (property) {
    var value = domStyle[property];
    var prop = hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2___default()(property);

    if (Array.isArray(value)) {
      return value.map(function (v) {
        return prop + ":" + v;
      }).join(';');
    } else {
      return prop + ":" + value;
    }
  }).sort().join(';');
  return "{" + declarationsString + ";}";
}

function createIdentifier(prefix, name, value) {
  var hashedString = Object(_vendor_hash__WEBPACK_IMPORTED_MODULE_1__["default"])(name + stringifyValueWithProperty(value, name));
  return  true ? prefix + "-" + name + "-" + hashedString : undefined;
}

function createKeyframes(keyframes) {
  var prefixes = ['-webkit-', ''];
  var identifier = createIdentifier('r', 'animation', keyframes);
  var steps = '{' + Object.keys(keyframes).map(function (stepName) {
    var rule = keyframes[stepName];
    var block = createDeclarationBlock(rule);
    return "" + stepName + block;
  }).join('') + '}';
  var rules = prefixes.map(function (prefix) {
    return "@" + prefix + "keyframes " + identifier + steps;
  });
  return {
    identifier: identifier,
    rules: rules
  };
}

function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === 'number') {
    throw new Error("Invalid CSS keyframes type: " + typeof keyframesValue);
  }

  var animationNames = [];
  var rules = [];
  var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach(function (keyframes) {
    if (typeof keyframes === 'string') {
      animationNames.push(keyframes);
    } else {
      var _createKeyframes = createKeyframes(keyframes),
          identifier = _createKeyframes.identifier,
          keyframesRules = _createKeyframes.rules;

      animationNames.push(identifier);
      rules.push.apply(rules, keyframesRules);
    }
  });
  return {
    animationNames: animationNames,
    rules: rules
  };
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/constants.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/constants.js ***!
  \****************************************************************************/
/*! exports provided: STYLE_ELEMENT_ID, STYLE_GROUPS, STYLE_SHORT_FORM_EXPANSIONS, MONOSPACE_FONT_STACK, SYSTEM_FONT_STACK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_ELEMENT_ID", function() { return STYLE_ELEMENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_GROUPS", function() { return STYLE_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLE_SHORT_FORM_EXPANSIONS", function() { return STYLE_SHORT_FORM_EXPANSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONOSPACE_FONT_STACK", function() { return MONOSPACE_FONT_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_FONT_STACK", function() { return SYSTEM_FONT_STACK; });
var STYLE_ELEMENT_ID = 'react-native-stylesheet';
var STYLE_GROUPS = {
  reset: 0,
  modality: 0.1,
  classicReset: 0.5,
  classic: 1,
  atomic: 2.2,
  custom: {
    borderColor: 2,
    borderRadius: 2,
    borderStyle: 2,
    borderWidth: 2,
    display: 2,
    flex: 2,
    margin: 2,
    overflow: 2,
    overscrollBehavior: 2,
    padding: 2,
    marginHorizontal: 2.1,
    marginVertical: 2.1,
    paddingHorizontal: 2.1,
    paddingVertical: 2.1
  }
};
var STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  marginHorizontal: ['marginRight', 'marginLeft'],
  marginVertical: ['marginTop', 'marginBottom'],
  overflow: ['overflowX', 'overflowY'],
  overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  paddingHorizontal: ['paddingRight', 'paddingLeft'],
  paddingVertical: ['paddingTop', 'paddingBottom']
};
var MONOSPACE_FONT_STACK = 'monospace,monospace';
var SYSTEM_FONT_STACK = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createCSSStyleSheet; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);

function createCSSStyleSheet(id) {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
    var element = document.getElementById(id);

    if (element != null) {
      return element.sheet;
    } else {
      var _element = document.createElement('style');

      _element.setAttribute('id', id);

      var head = document.head;

      if (head) {
        head.insertBefore(_element, head.firstChild);
      }

      return _element.sheet;
    }
  } else {
    return null;
  }
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");
/* harmony import */ var _resolveShadowValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolveShadowValue */ "./node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js");
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var defaultOffset = {
  height: 0,
  width: 0
};

function boxShadowReducer(resolvedStyle, style) {
  var boxShadow = style.boxShadow;
  var shadow = Object(_resolveShadowValue__WEBPACK_IMPORTED_MODULE_1__["default"])(style);

  if (shadow != null) {
    resolvedStyle.boxShadow = boxShadow ? boxShadow + ", " + shadow : shadow;
  }
}

function textShadowReducer(resolvedStyle, style) {
  var textShadowColor = style.textShadowColor,
      textShadowOffset = style.textShadowOffset,
      textShadowRadius = style.textShadowRadius;

  var _ref = textShadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var radius = textShadowRadius || 0;
  var offsetX = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(width);
  var offsetY = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(height);
  var blurRadius = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(radius);
  var color = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(textShadowColor, 'textShadowColor');

  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    resolvedStyle.textShadow = offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
}

var createCompileableStyle = function createCompileableStyle(styles) {
  var shadowColor = styles.shadowColor,
      shadowOffset = styles.shadowOffset,
      shadowOpacity = styles.shadowOpacity,
      shadowRadius = styles.shadowRadius,
      textShadowColor = styles.textShadowColor,
      textShadowOffset = styles.textShadowOffset,
      textShadowRadius = styles.textShadowRadius,
      nextStyles = _objectWithoutPropertiesLoose(styles, ["shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "textShadowColor", "textShadowOffset", "textShadowRadius"]);

  if (shadowColor != null || shadowOffset != null || shadowOpacity != null || shadowRadius != null) {
    boxShadowReducer(nextStyles, styles);
  }

  if (textShadowColor != null || textShadowOffset != null || textShadowRadius != null) {
    textShadowReducer(nextStyles, styles);
  }

  return nextStyles;
};

/* harmony default export */ __webpack_exports__["default"] = (createCompileableStyle);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createOrderedCSSStyleSheet; });
var slice = Array.prototype.slice;
function createOrderedCSSStyleSheet(sheet) {
  var groups = {};
  var selectors = {};

  if (sheet != null) {
    var group;
    slice.call(sheet.cssRules).forEach(function (cssRule, i) {
      var cssText = cssRule.cssText;

      if (cssText.indexOf('stylesheet-group') > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = {
          start: i,
          rules: [cssText]
        };
      } else {
        var selectorText = getSelectorText(cssText);

        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }

  function sheetInsert(sheet, group, text) {
    var orderedGroups = getOrderedGroups(groups);
    var groupIndex = orderedGroups.indexOf(group);
    var nextGroupIndex = groupIndex + 1;
    var nextGroup = orderedGroups[nextGroupIndex];
    var position = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet.cssRules.length;
    var isInserted = insertRuleAt(sheet, text, position);

    if (isInserted) {
      if (groups[group].start == null) {
        groups[group].start = position;
      }

      for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        var groupNumber = orderedGroups[i];
        var previousStart = groups[groupNumber].start || 0;
        groups[groupNumber].start = previousStart + 1;
      }
    }

    return isInserted;
  }

  var OrderedCSSStyleSheet = {
    getTextContent: function getTextContent() {
      return getOrderedGroups(groups).map(function (group) {
        var rules = groups[group].rules;
        return rules.join('\n');
      }).join('\n');
    },
    insert: function insert(cssText, groupValue) {
      var group = Number(groupValue);

      if (groups[group] == null) {
        var markerRule = encodeGroupRule(group);
        groups[group] = {
          start: null,
          rules: [markerRule]
        };

        if (sheet != null) {
          sheetInsert(sheet, group, markerRule);
        }
      }

      var selectorText = getSelectorText(cssText);

      if (selectorText != null && selectors[selectorText] == null) {
        selectors[selectorText] = true;
        groups[group].rules.push(cssText);

        if (sheet != null) {
          var isInserted = sheetInsert(sheet, group, cssText);

          if (!isInserted) {
            groups[group].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}

function encodeGroupRule(group) {
  return "[stylesheet-group=\"" + group + "\"]{}";
}

function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(/["']/)[1]);
}

function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort(function (a, b) {
    return a > b ? 1 : -1;
  });
}

var pattern = /\s*([,])\s*/g;

function getSelectorText(cssText) {
  var selector = cssText.split('{')[0].trim();
  return selector !== '' ? selector.replace(pattern, '$1') : null;
}

function insertRuleAt(root, cssText, position) {
  try {
    root.insertRule(cssText, position);
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/react-native-web/dist/exports/StyleSheet/constants.js");
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");



var emptyObject = {};
var supportsCSS3TextDecoration = !fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] || window.CSS != null && window.CSS.supports != null && (window.CSS.supports('text-decoration-line', 'none') || window.CSS.supports('-webkit-text-decoration-line', 'none'));

var mapTransform = function mapTransform(transform) {
  var type = Object.keys(transform)[0];
  var value = transform[type];

  if (type === 'matrix' || type === 'matrix3d') {
    return type + "(" + value.join(',') + ")";
  } else {
    var normalizedValue = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(value, type);
    return type + "(" + normalizedValue + ")";
  }
};

var resolveTransform = function resolveTransform(resolvedStyle, style) {
  var transform = style.transform;

  if (Array.isArray(style.transform)) {
    transform = style.transform.map(mapTransform).join(' ');
  }

  resolvedStyle.transform = transform;
};

var createReactDOMStyle = function createReactDOMStyle(style) {
  if (!style) {
    return emptyObject;
  }

  var resolvedStyle = {};
  Object.keys(style).sort().forEach(function (prop) {
    var value = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(style[prop], prop);

    if (value == null) {
      return;
    }

    switch (prop) {
      case 'elevation':
      case 'overlayColor':
      case 'resizeMode':
      case 'tintColor':
        {
          break;
        }

      case 'aspectRatio':
        {
          resolvedStyle[prop] = value.toString();
          break;
        }

      case 'backgroundClip':
        {
          if (value === 'text') {
            resolvedStyle.backgroundClip = value;
            resolvedStyle.WebkitBackgroundClip = value;
          }

          break;
        }

      case 'flex':
        {
          if (value === -1) {
            resolvedStyle.flexGrow = 0;
            resolvedStyle.flexShrink = 1;
            resolvedStyle.flexBasis = 'auto';
          } else {
            resolvedStyle.flex = value;
          }

          break;
        }

      case 'font':
        {
          resolvedStyle[prop] = value.replace('System', _constants__WEBPACK_IMPORTED_MODULE_1__["SYSTEM_FONT_STACK"]);
          break;
        }

      case 'fontFamily':
        {
          if (value.indexOf('System') > -1) {
            var stack = value.split(/,\s*/);
            stack[stack.indexOf('System')] = _constants__WEBPACK_IMPORTED_MODULE_1__["SYSTEM_FONT_STACK"];
            resolvedStyle[prop] = stack.join(',');
          } else if (value === 'monospace') {
            resolvedStyle[prop] = _constants__WEBPACK_IMPORTED_MODULE_1__["MONOSPACE_FONT_STACK"];
          } else {
            resolvedStyle[prop] = value;
          }

          break;
        }

      case 'fontVariant':
        {
          if (Array.isArray(value) && value.length > 0) {
            resolvedStyle.fontVariant = value.join(' ');
          }

          break;
        }

      case 'textAlignVertical':
        {
          resolvedStyle.verticalAlign = value === 'center' ? 'middle' : value;
          break;
        }

      case 'textDecorationLine':
        {
          if (!supportsCSS3TextDecoration) {
            resolvedStyle.textDecoration = value;
          } else {
            resolvedStyle.textDecorationLine = value;
          }

          break;
        }

      case 'transform':
      case 'transformMatrix':
        {
          resolveTransform(resolvedStyle, style);
          break;
        }

      case 'writingDirection':
        {
          resolvedStyle.direction = value;
          break;
        }

      default:
        {
          var longFormProperties = _constants__WEBPACK_IMPORTED_MODULE_1__["STYLE_SHORT_FORM_EXPANSIONS"][prop];

          if (longFormProperties) {
            longFormProperties.forEach(function (longForm, i) {
              if (typeof style[longForm] === 'undefined') {
                resolvedStyle[longForm] = value;
              }
            });
          } else {
            resolvedStyle[prop] = Array.isArray(value) ? value.join(',') : value;
          }
        }
    }
  });
  return resolvedStyle;
};

/* harmony default export */ __webpack_exports__["default"] = (createReactDOMStyle);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyleResolver; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createCSSStyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createCSSStyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js");
/* harmony import */ var _createCompileableStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCompileableStyle */ "./node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js");
/* harmony import */ var _createOrderedCSSStyleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createOrderedCSSStyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js");
/* harmony import */ var _modules_flattenArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/flattenArray */ "./node_modules/react-native-web/dist/modules/flattenArray/index.js");
/* harmony import */ var _flattenStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flattenStyle */ "./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js");
/* harmony import */ var _I18nManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../I18nManager */ "./node_modules/react-native-web/dist/exports/I18nManager/index.js");
/* harmony import */ var _i18nStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./i18nStyle */ "./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js");
/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compile */ "./node_modules/react-native-web/dist/exports/StyleSheet/compile.js");
/* harmony import */ var _initialRules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./initialRules */ "./node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js");
/* harmony import */ var _modality__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modality */ "./node_modules/react-native-web/dist/exports/StyleSheet/modality.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./node_modules/react-native-web/dist/exports/StyleSheet/constants.js");












function createStyleResolver() {
  var inserted, sheet, cache;
  var resolved = {
    css: {},
    ltr: {},
    rtl: {},
    rtlNoSwap: {}
  };

  var init = function init() {
    inserted = {
      css: {},
      ltr: {},
      rtl: {},
      rtlNoSwap: {}
    };
    sheet = Object(_createOrderedCSSStyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_createCSSStyleSheet__WEBPACK_IMPORTED_MODULE_1__["default"])(_constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_ELEMENT_ID"]));
    cache = {};
    Object(_modality__WEBPACK_IMPORTED_MODULE_10__["default"])(function (rule) {
      return sheet.insert(rule, _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].modality);
    });
    _initialRules__WEBPACK_IMPORTED_MODULE_9__["default"].forEach(function (rule) {
      sheet.insert(rule, _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].reset);
    });
  };

  init();

  function addToCache(className, prop, value) {
    if (!cache[prop]) {
      cache[prop] = {};
    }

    cache[prop][value] = className;
  }

  function getClassName(prop, value) {
    var val = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["stringifyValueWithProperty"])(value, prop);
    return cache[prop] && cache[prop].hasOwnProperty(val) && cache[prop][val];
  }

  function _injectRegisteredStyle(id) {
    var _I18nManager$getConst = _I18nManager__WEBPACK_IMPORTED_MODULE_6__["default"].getConstants(),
        doLeftAndRightSwapInRTL = _I18nManager$getConst.doLeftAndRightSwapInRTL,
        isRTL = _I18nManager$getConst.isRTL;

    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr';

    if (!inserted[dir][id]) {
      var style = Object(_createCompileableStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_i18nStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(id)));
      var results = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["atomic"])(style);
      Object.keys(results).forEach(function (key) {
        var _results$key = results[key],
            identifier = _results$key.identifier,
            property = _results$key.property,
            rules = _results$key.rules,
            value = _results$key.value;
        addToCache(identifier, property, value);
        rules.forEach(function (rule) {
          var group = _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].custom[property] || _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].atomic;
          sheet.insert(rule, group);
        });
      });
      inserted[dir][id] = true;
    }
  }

  function resolve(style, classList) {
    var nextClassList = [];
    var props = {};

    if (!style && !classList) {
      return props;
    }

    if (Array.isArray(classList)) {
      Object(_modules_flattenArray__WEBPACK_IMPORTED_MODULE_4__["default"])(classList).forEach(function (identifier) {
        if (identifier) {
          if (inserted.css[identifier] == null && resolved.css[identifier] != null) {
            var item = resolved.css[identifier];
            item.rules.forEach(function (rule) {
              sheet.insert(rule, item.group);
            });
            inserted.css[identifier] = true;
          }

          nextClassList.push(identifier);
        }
      });
    }

    if (typeof style === 'number') {
      _injectRegisteredStyle(style);

      var key = createCacheKey(style);
      props = _resolveStyle(style, key);
    } else if (!Array.isArray(style)) {
      props = _resolveStyle(style);
    } else {
      var flatArray = Object(_modules_flattenArray__WEBPACK_IMPORTED_MODULE_4__["default"])(style);
      var isArrayOfNumbers = true;
      var cacheKey = '';

      for (var i = 0; i < flatArray.length; i++) {
        var id = flatArray[i];

        if (typeof id !== 'number') {
          isArrayOfNumbers = false;
        } else {
          if (isArrayOfNumbers) {
            cacheKey += id + '-';
          }

          _injectRegisteredStyle(id);
        }
      }

      var _key = isArrayOfNumbers ? createCacheKey(cacheKey) : null;

      props = _resolveStyle(flatArray, _key);
    }

    nextClassList.push.apply(nextClassList, props.classList);
    var finalProps = {
      className: classListToString(nextClassList),
      classList: nextClassList
    };

    if (props.style) {
      finalProps.style = props.style;
    }

    return finalProps;
  }

  function _resolveStyle(style, key) {
    var _I18nManager$getConst2 = _I18nManager__WEBPACK_IMPORTED_MODULE_6__["default"].getConstants(),
        doLeftAndRightSwapInRTL = _I18nManager$getConst2.doLeftAndRightSwapInRTL,
        isRTL = _I18nManager$getConst2.isRTL;

    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr';

    if (key != null && resolved[dir][key] != null) {
      return resolved[dir][key];
    }

    var flatStyle = Object(_flattenStyle__WEBPACK_IMPORTED_MODULE_5__["default"])(style);
    var localizedStyle = Object(_createCompileableStyle__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_i18nStyle__WEBPACK_IMPORTED_MODULE_7__["default"])(flatStyle));
    var props = Object.keys(localizedStyle).sort().reduce(function (props, styleProp) {
      var value = localizedStyle[styleProp];

      if (value != null) {
        var className = getClassName(styleProp, value);

        if (className) {
          props.classList.push(className);
        } else {
          if (styleProp === 'animationKeyframes' || styleProp === 'placeholderTextColor' || styleProp === 'pointerEvents' || styleProp === 'scrollbarWidth') {
            var _atomic;

            var a = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["atomic"])((_atomic = {}, _atomic[styleProp] = value, _atomic));
            Object.keys(a).forEach(function (key) {
              var _a$key = a[key],
                  identifier = _a$key.identifier,
                  rules = _a$key.rules;
              props.classList.push(identifier);
              rules.forEach(function (rule) {
                sheet.insert(rule, _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].atomic);
              });
            });
          } else {
            if (!props.style) {
              props.style = {};
            }

            props.style[styleProp] = value;
          }
        }
      }

      return props;
    }, {
      classList: []
    });

    if (props.style) {
      props.style = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["inline"])(props.style);
    }

    if (key != null) {
      resolved[dir][key] = props;
    }

    return props;
  }

  return {
    getStyleSheet: function getStyleSheet() {
      var textContent = sheet.getTextContent();

      if (!fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
        init();
      }

      return {
        id: _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_ELEMENT_ID"],
        textContent: textContent
      };
    },
    createCSS: function createCSS(rules, group) {
      var result = {};
      Object.keys(rules).forEach(function (name) {
        var style = rules[name];
        var compiled = Object(_compile__WEBPACK_IMPORTED_MODULE_8__["classic"])(style, name);
        Object.keys(compiled).forEach(function (key) {
          var _compiled$key = compiled[key],
              identifier = _compiled$key.identifier,
              rules = _compiled$key.rules;
          resolved.css[identifier] = {
            group: group || _constants__WEBPACK_IMPORTED_MODULE_11__["STYLE_GROUPS"].classic,
            rules: rules
          };
          result[name] = identifier;
        });
      });
      return result;
    },
    resolve: resolve,

    get sheet() {
      return sheet;
    }

  };
}

var createCacheKey = function createCacheKey(id) {
  var prefix = 'rn';
  return prefix + "-" + id;
};

var classListToString = function classListToString(list) {
  return list.join(' ').trim();
};

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/css.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/css.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styleResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styleResolver */ "./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");

var css = {
  create: function create(rules, group) {
    return _styleResolver__WEBPACK_IMPORTED_MODULE_0__["default"].createCSS(rules, group);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (css);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactNativePropRegistry */ "./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry.js");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fbjs/lib/invariant */ "fbjs/lib/invariant");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);



function getStyle(style) {
  if (typeof style === 'number') {
    return _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__["default"].getByID(style);
  }

  return style;
}

function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  if (true) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(style !== true, 'style may be false but not true');
  }

  if (!Array.isArray(style)) {
    return getStyle(style);
  }

  var result = {};

  for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
    var computedStyle = flattenStyle(style[i]);

    if (computedStyle) {
      for (var key in computedStyle) {
        var value = computedStyle[key];
        result[key] = value;
      }
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (flattenStyle);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _I18nManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../I18nManager */ "./node_modules/react-native-web/dist/exports/I18nManager/index.js");
/* harmony import */ var _modules_multiplyStyleLengthValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/multiplyStyleLengthValue */ "./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js");


var emptyObject = {};
var borderTopLeftRadius = 'borderTopLeftRadius';
var borderTopRightRadius = 'borderTopRightRadius';
var borderBottomLeftRadius = 'borderBottomLeftRadius';
var borderBottomRightRadius = 'borderBottomRightRadius';
var borderLeftColor = 'borderLeftColor';
var borderLeftStyle = 'borderLeftStyle';
var borderLeftWidth = 'borderLeftWidth';
var borderRightColor = 'borderRightColor';
var borderRightStyle = 'borderRightStyle';
var borderRightWidth = 'borderRightWidth';
var right = 'right';
var marginLeft = 'marginLeft';
var marginRight = 'marginRight';
var paddingLeft = 'paddingLeft';
var paddingRight = 'paddingRight';
var left = 'left';
var PROPERTIES_FLIP = {
  borderTopLeftRadius: borderTopRightRadius,
  borderTopRightRadius: borderTopLeftRadius,
  borderBottomLeftRadius: borderBottomRightRadius,
  borderBottomRightRadius: borderBottomLeftRadius,
  borderLeftColor: borderRightColor,
  borderLeftStyle: borderRightStyle,
  borderLeftWidth: borderRightWidth,
  borderRightColor: borderLeftColor,
  borderRightStyle: borderLeftStyle,
  borderRightWidth: borderLeftWidth,
  left: right,
  marginLeft: marginRight,
  marginRight: marginLeft,
  paddingLeft: paddingRight,
  paddingRight: paddingLeft,
  right: left
};
var PROPERTIES_I18N = {
  borderTopStartRadius: borderTopLeftRadius,
  borderTopEndRadius: borderTopRightRadius,
  borderBottomStartRadius: borderBottomLeftRadius,
  borderBottomEndRadius: borderBottomRightRadius,
  borderStartColor: borderLeftColor,
  borderStartStyle: borderLeftStyle,
  borderStartWidth: borderLeftWidth,
  borderEndColor: borderRightColor,
  borderEndStyle: borderRightStyle,
  borderEndWidth: borderRightWidth,
  end: right,
  marginStart: marginLeft,
  marginEnd: marginRight,
  paddingStart: paddingLeft,
  paddingEnd: paddingRight,
  start: left
};
var PROPERTIES_VALUE = {
  clear: true,
  "float": true,
  textAlign: true
};

var additiveInverse = function additiveInverse(value) {
  return Object(_modules_multiplyStyleLengthValue__WEBPACK_IMPORTED_MODULE_1__["default"])(value, -1);
};

var i18nStyle = function i18nStyle(originalStyle) {
  var _I18nManager$getConst = _I18nManager__WEBPACK_IMPORTED_MODULE_0__["default"].getConstants(),
      doLeftAndRightSwapInRTL = _I18nManager$getConst.doLeftAndRightSwapInRTL,
      isRTL = _I18nManager$getConst.isRTL;

  var style = originalStyle || emptyObject;
  var frozenProps = {};
  var nextStyle = {};

  for (var originalProp in style) {
    if (!Object.prototype.hasOwnProperty.call(style, originalProp)) {
      continue;
    }

    var originalValue = style[originalProp];
    var prop = originalProp;
    var value = originalValue;

    if (PROPERTIES_I18N.hasOwnProperty(originalProp)) {
      var convertedProp = PROPERTIES_I18N[originalProp];
      prop = isRTL ? PROPERTIES_FLIP[convertedProp] : convertedProp;
    } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalProp]) {
      prop = PROPERTIES_FLIP[originalProp];
    }

    if (PROPERTIES_VALUE.hasOwnProperty(originalProp)) {
      if (originalValue === 'start') {
        value = isRTL ? 'right' : 'left';
      } else if (originalValue === 'end') {
        value = isRTL ? 'left' : 'right';
      } else if (isRTL && doLeftAndRightSwapInRTL) {
        if (originalValue === 'left') {
          value = 'right';
        } else if (originalValue === 'right') {
          value = 'left';
        }
      }
    }

    if (prop === 'transitionProperty') {
      if (PROPERTIES_I18N.hasOwnProperty(value)) {
        var convertedValue = PROPERTIES_I18N[originalValue];
        value = isRTL ? PROPERTIES_FLIP[convertedValue] : convertedValue;
      } else if (isRTL && doLeftAndRightSwapInRTL) {
        var flippedValue = PROPERTIES_FLIP[originalValue];

        if (flippedValue != null) {
          value = flippedValue;
        }
      }
    }

    if (isRTL && prop === 'textShadowOffset') {
      var invertedValue = additiveInverse(value.width);
      value.width = invertedValue;
      nextStyle[prop] = value;
    } else if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }

    if (PROPERTIES_I18N[originalProp]) {
      frozenProps[prop] = true;
    }
  }

  return nextStyle;
};

/* harmony default export */ __webpack_exports__["default"] = (i18nStyle);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js");



if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = _StyleSheet__WEBPACK_IMPORTED_MODULE_1__["default"].flatten;
}

/* harmony default export */ __webpack_exports__["default"] = (_StyleSheet__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var resets = ['html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}', 'body{margin:0;}', 'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}', 'input::-webkit-search-cancel-button,input::-webkit-search-decoration,' + 'input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}'];
/* harmony default export */ __webpack_exports__["default"] = (resets);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/modality.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/modality.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);

var focusVisibleAttributeName = 'data-focusvisible-polyfill';
var rule = ":focus:not([" + focusVisibleAttributeName + "]){outline: none;}";

var modality = function modality(insertRule) {
  insertRule(rule);

  if (!fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
    return;
  }

  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }

  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    var isReadOnly = el.readOnly;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !isReadOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !isReadOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }

  function addFocusVisibleAttribute(el) {
    if (el.hasAttribute(focusVisibleAttributeName)) {
      return;
    }

    el.setAttribute(focusVisibleAttributeName, true);
  }

  function removeFocusVisibleAttribute(el) {
    el.removeAttribute(focusVisibleAttributeName);
  }

  function removeAllFocusVisibleAttributes() {
    var list = document.querySelectorAll("[" + focusVisibleAttributeName + "]");

    for (var i = 0; i < list.length; i += 1) {
      removeFocusVisibleAttribute(list[i]);
    }
  }

  function onKeyDown(e) {
    if (e.key !== 'Tab' && (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
      return;
    }

    if (isValidFocusTarget(document.activeElement)) {
      addFocusVisibleAttribute(document.activeElement);
    }

    hadKeyboardEvent = true;
  }

  function onPointerDown(e) {
    if (hadKeyboardEvent === true) {
      removeAllFocusVisibleAttributes();
    }

    hadKeyboardEvent = false;
  }

  function onFocus(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleAttribute(e.target);
    }
  }

  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.hasAttribute(focusVisibleAttributeName)) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      }, 100);
      removeFocusVisibleAttribute(e.target);
    }
  }

  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }

  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  function onInitialPointerMove(e) {
    if (e.target.nodeName === 'HTML') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();
};

/* harmony default export */ __webpack_exports__["default"] = (modality);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeValueWithProperty; });
/* harmony import */ var _modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/unitlessNumbers */ "./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js");
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/normalizeColor */ "./node_modules/react-native-web/dist/modules/normalizeColor/index.js");


var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  var returnValue = value;

  if ((property == null || !_modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__["default"][property]) && typeof value === 'number') {
    returnValue = value + "px";
  } else if (property != null && colorProps[property]) {
    returnValue = Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
  }

  return returnValue;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/normalizeColor */ "./node_modules/react-native-web/dist/modules/normalizeColor/index.js");
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeValueWithProperty */ "./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js");


var defaultOffset = {
  height: 0,
  width: 0
};

var resolveShadowValue = function resolveShadowValue(style) {
  var shadowColor = style.shadowColor,
      shadowOffset = style.shadowOffset,
      shadowOpacity = style.shadowOpacity,
      shadowRadius = style.shadowRadius;

  var _ref = shadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var offsetX = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(width);
  var offsetY = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(height);
  var blurRadius = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(shadowRadius || 0);
  var color = Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__["default"])(shadowColor || 'black', shadowOpacity);

  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (resolveShadowValue);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createStyleResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createStyleResolver */ "./node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js");

var styleResolver = Object(_createStyleResolver__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (styleResolver);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/StyleSheet/validate.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/StyleSheet/validate.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return validate; });
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/warning */ "fbjs/lib/warning");
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_0__);

var invalidShortforms = {
  background: true,
  borderBottom: true,
  borderLeft: true,
  borderRight: true,
  borderTop: true,
  font: true,
  grid: true,
  outline: true,
  textDecoration: true
};

function error(message) {
  fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_0___default()(false, message);
}

function validate(key, styles) {
  var obj = styles[key];

  for (var k in obj) {
    var prop = k.trim();
    var value = obj[prop];
    var isInvalid = false;

    if (value === null) {
      continue;
    }

    if (typeof value === 'string' && value.indexOf('!important') > -1) {
      error("Invalid style declaration \"" + prop + ":" + value + "\". Values cannot include \"!important\"");
      isInvalid = true;
    } else {
      var suggestion = '';

      if (prop === 'animation' || prop === 'animationName') {
        suggestion = 'Did you mean "animationKeyframes"?';
        isInvalid = true;
      } else if (prop === 'direction') {
        suggestion = 'Did you mean "writingDirection"?';
        isInvalid = true;
      } else if (prop === 'verticalAlign') {
        suggestion = 'Did you mean "textAlignVertical"?';
        isInvalid = true;
      } else if (invalidShortforms[prop]) {
        suggestion = 'Please use long-form properties.';
        isInvalid = true;
      }

      if (suggestion !== '') {
        error("Invalid style property of \"" + prop + "\". " + suggestion);
      }
    }

    if (isInvalid) {
      delete obj[k];
    }
  }
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TextAncestorContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/* harmony default export */ __webpack_exports__["default"] = (TextAncestorContext);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/Text/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/Text/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createElement */ "./node_modules/react-native-web/dist/exports/createElement/index.js");
/* harmony import */ var _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyleSheet/css */ "./node_modules/react-native-web/dist/exports/StyleSheet/css.js");
/* harmony import */ var _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/forwardedProps */ "./node_modules/react-native-web/dist/modules/forwardedProps/index.js");
/* harmony import */ var _modules_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/pick */ "./node_modules/react-native-web/dist/modules/pick/index.js");
/* harmony import */ var _modules_useElementLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/useElementLayout */ "./node_modules/react-native-web/dist/modules/useElementLayout/index.js");
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/useMergeRefs */ "./node_modules/react-native-web/dist/modules/useMergeRefs/index.js");
/* harmony import */ var _modules_usePlatformMethods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/usePlatformMethods */ "./node_modules/react-native-web/dist/modules/usePlatformMethods/index.js");
/* harmony import */ var _modules_useResponderEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/useResponderEvents */ "./node_modules/react-native-web/dist/modules/useResponderEvents/index.js");
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _TextAncestorContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TextAncestorContext */ "./node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}













var forwardPropsList = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["defaultProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["accessibilityProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["clickProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["focusProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["keyboardProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["mouseProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["touchProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["styleProps"]), {}, {
  href: true,
  lang: true,
  pointerEvents: true
});

var pickProps = function pickProps(props) {
  return Object(_modules_pick__WEBPACK_IMPORTED_MODULE_4__["default"])(props, forwardPropsList);
};

var Text = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, forwardedRef) {
  var dir = props.dir,
      hrefAttrs = props.hrefAttrs,
      numberOfLines = props.numberOfLines,
      onClick = props.onClick,
      onLayout = props.onLayout,
      onPress = props.onPress,
      onMoveShouldSetResponder = props.onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
      onResponderEnd = props.onResponderEnd,
      onResponderGrant = props.onResponderGrant,
      onResponderMove = props.onResponderMove,
      onResponderReject = props.onResponderReject,
      onResponderRelease = props.onResponderRelease,
      onResponderStart = props.onResponderStart,
      onResponderTerminate = props.onResponderTerminate,
      onResponderTerminationRequest = props.onResponderTerminationRequest,
      onScrollShouldSetResponder = props.onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder = props.onStartShouldSetResponder,
      onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
      selectable = props.selectable;
  var hasTextAncestor = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_TextAncestorContext__WEBPACK_IMPORTED_MODULE_10__["default"]);
  var hostRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var classList = [classes.text, hasTextAncestor === true && classes.textHasAncestor, numberOfLines === 1 && classes.textOneLine, numberOfLines != null && numberOfLines > 1 && classes.textMultiLine];
  var style = [props.style, numberOfLines != null && numberOfLines > 1 && {
    WebkitLineClamp: numberOfLines
  }, selectable === true && styles.selectable, selectable === false && styles.notSelectable, onPress && styles.pressable];
  Object(_modules_useElementLayout__WEBPACK_IMPORTED_MODULE_5__["default"])(hostRef, onLayout);
  Object(_modules_useResponderEvents__WEBPACK_IMPORTED_MODULE_8__["default"])(hostRef, {
    onMoveShouldSetResponder: onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture: onMoveShouldSetResponderCapture,
    onResponderEnd: onResponderEnd,
    onResponderGrant: onResponderGrant,
    onResponderMove: onResponderMove,
    onResponderReject: onResponderReject,
    onResponderRelease: onResponderRelease,
    onResponderStart: onResponderStart,
    onResponderTerminate: onResponderTerminate,
    onResponderTerminationRequest: onResponderTerminationRequest,
    onScrollShouldSetResponder: onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture: onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder: onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture: onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder: onStartShouldSetResponder,
    onStartShouldSetResponderCapture: onStartShouldSetResponderCapture
  });
  var handleClick = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (e) {
    if (onClick != null) {
      onClick(e);
    } else if (onPress != null) {
      e.stopPropagation();
      onPress(e);
    }
  }, [onClick, onPress]);
  var component = hasTextAncestor ? 'span' : 'div';
  var supportedProps = pickProps(props);
  supportedProps.classList = classList;
  supportedProps.dir = dir;

  if (!hasTextAncestor) {
    supportedProps.dir = dir != null ? dir : 'auto';
  }

  if (onClick || onPress) {
    supportedProps.onClick = handleClick;
  }

  supportedProps.style = style;

  if (props.href != null) {
    component = 'a';

    if (hrefAttrs != null) {
      var download = hrefAttrs.download,
          rel = hrefAttrs.rel,
          target = hrefAttrs.target;

      if (download != null) {
        supportedProps.download = download;
      }

      if (rel != null) {
        supportedProps.rel = rel;
      }

      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target;
      }
    }
  }

  var platformMethodsRef = Object(_modules_usePlatformMethods__WEBPACK_IMPORTED_MODULE_7__["default"])(supportedProps);
  var setRef = Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_6__["default"])(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  var element = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(component, supportedProps);
  return hasTextAncestor ? element : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TextAncestorContext__WEBPACK_IMPORTED_MODULE_10__["default"].Provider, {
    value: true
  }, element);
});
Text.displayName = 'Text';
var classes = _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__["default"].create({
  text: {
    border: '0 solid black',
    boxSizing: 'border-box',
    color: 'black',
    display: 'inline',
    font: '14px System',
    margin: 0,
    padding: 0,
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },
  textHasAncestor: {
    color: 'inherit',
    font: 'inherit',
    whiteSpace: 'inherit'
  },
  textOneLine: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'pre'
  },
  textMultiLine: {
    display: '-webkit-box',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical'
  }
});
var styles = _StyleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].create({
  notSelectable: {
    userSelect: 'none'
  },
  selectable: {
    userSelect: 'text'
  },
  pressable: {
    cursor: 'pointer'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/TextInput/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/TextInput/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createElement */ "./node_modules/react-native-web/dist/exports/createElement/index.js");
/* harmony import */ var _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyleSheet/css */ "./node_modules/react-native-web/dist/exports/StyleSheet/css.js");
/* harmony import */ var _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/forwardedProps */ "./node_modules/react-native-web/dist/modules/forwardedProps/index.js");
/* harmony import */ var _modules_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/pick */ "./node_modules/react-native-web/dist/modules/pick/index.js");
/* harmony import */ var _modules_useElementLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/useElementLayout */ "./node_modules/react-native-web/dist/modules/useElementLayout/index.js");
/* harmony import */ var _modules_useLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/useLayoutEffect */ "./node_modules/react-native-web/dist/modules/useLayoutEffect/index.js");
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/useMergeRefs */ "./node_modules/react-native-web/dist/modules/useMergeRefs/index.js");
/* harmony import */ var _modules_usePlatformMethods__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/usePlatformMethods */ "./node_modules/react-native-web/dist/modules/usePlatformMethods/index.js");
/* harmony import */ var _modules_useResponderEvents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../modules/useResponderEvents */ "./node_modules/react-native-web/dist/modules/useResponderEvents/index.js");
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _modules_TextInputState__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../modules/TextInputState */ "./node_modules/react-native-web/dist/modules/TextInputState/index.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}














var isSelectionStale = function isSelectionStale(node, selection) {
  var selectionEnd = node.selectionEnd,
      selectionStart = node.selectionStart;
  var start = selection.start,
      end = selection.end;
  return start !== selectionStart || end !== selectionEnd;
};

var setSelection = function setSelection(node, selection) {
  if (isSelectionStale(node, selection)) {
    var start = selection.start,
        end = selection.end;

    try {
      node.setSelectionRange(start, end || start);
    } catch (e) {}
  }
};

var forwardPropsList = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["defaultProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["accessibilityProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["clickProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["focusProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["keyboardProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["mouseProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["touchProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["styleProps"]), {}, {
  autoCapitalize: true,
  autoComplete: true,
  autoCorrect: true,
  autoFocus: true,
  defaultValue: true,
  disabled: true,
  lang: true,
  maxLength: true,
  onChange: true,
  onScroll: true,
  placeholder: true,
  pointerEvents: true,
  readOnly: true,
  rows: true,
  spellCheck: true,
  value: true,
  type: true
});

var pickProps = function pickProps(props) {
  return Object(_modules_pick__WEBPACK_IMPORTED_MODULE_4__["default"])(props, forwardPropsList);
};

function isEventComposing(nativeEvent) {
  return nativeEvent.isComposing || nativeEvent.keyCode === 229;
}

var TextInput = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, forwardedRef) {
  var _props$autoCapitalize = props.autoCapitalize,
      autoCapitalize = _props$autoCapitalize === void 0 ? 'sentences' : _props$autoCapitalize,
      autoComplete = props.autoComplete,
      autoCompleteType = props.autoCompleteType,
      _props$autoCorrect = props.autoCorrect,
      autoCorrect = _props$autoCorrect === void 0 ? true : _props$autoCorrect,
      blurOnSubmit = props.blurOnSubmit,
      clearTextOnFocus = props.clearTextOnFocus,
      dir = props.dir,
      _props$editable = props.editable,
      editable = _props$editable === void 0 ? true : _props$editable,
      _props$keyboardType = props.keyboardType,
      keyboardType = _props$keyboardType === void 0 ? 'default' : _props$keyboardType,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$numberOfLines = props.numberOfLines,
      numberOfLines = _props$numberOfLines === void 0 ? 1 : _props$numberOfLines,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onChangeText = props.onChangeText,
      onContentSizeChange = props.onContentSizeChange,
      onFocus = props.onFocus,
      onKeyPress = props.onKeyPress,
      onLayout = props.onLayout,
      onMoveShouldSetResponder = props.onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
      onResponderEnd = props.onResponderEnd,
      onResponderGrant = props.onResponderGrant,
      onResponderMove = props.onResponderMove,
      onResponderReject = props.onResponderReject,
      onResponderRelease = props.onResponderRelease,
      onResponderStart = props.onResponderStart,
      onResponderTerminate = props.onResponderTerminate,
      onResponderTerminationRequest = props.onResponderTerminationRequest,
      onScrollShouldSetResponder = props.onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
      onSelectionChange = props.onSelectionChange,
      onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder = props.onStartShouldSetResponder,
      onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
      onSubmitEditing = props.onSubmitEditing,
      placeholderTextColor = props.placeholderTextColor,
      returnKeyType = props.returnKeyType,
      _props$secureTextEntr = props.secureTextEntry,
      secureTextEntry = _props$secureTextEntr === void 0 ? false : _props$secureTextEntr,
      selection = props.selection,
      selectTextOnFocus = props.selectTextOnFocus,
      spellCheck = props.spellCheck;
  var type;
  var inputMode;

  switch (keyboardType) {
    case 'email-address':
      type = 'email';
      break;

    case 'number-pad':
    case 'numeric':
      inputMode = 'numeric';
      break;

    case 'decimal-pad':
      inputMode = 'decimal';
      break;

    case 'phone-pad':
      type = 'tel';
      break;

    case 'search':
    case 'web-search':
      type = 'search';
      break;

    case 'url':
      type = 'url';
      break;

    default:
      type = 'text';
  }

  if (secureTextEntry) {
    type = 'password';
  }

  var dimensions = react__WEBPACK_IMPORTED_MODULE_0__["useRef"]({
    height: null,
    width: null
  });
  var hostRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var handleContentSizeChange = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (hostNode) {
    if (multiline && onContentSizeChange && hostNode != null) {
      var newHeight = hostNode.scrollHeight;
      var newWidth = hostNode.scrollWidth;

      if (newHeight !== dimensions.current.height || newWidth !== dimensions.current.width) {
        dimensions.current.height = newHeight;
        dimensions.current.width = newWidth;
        onContentSizeChange({
          nativeEvent: {
            contentSize: {
              height: dimensions.current.height,
              width: dimensions.current.width
            }
          }
        });
      }
    }
  }, [multiline, onContentSizeChange]);
  var imperativeRef = react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return function (hostNode) {
      if (hostNode != null) {
        hostNode.clear = function () {
          if (hostNode != null) {
            hostNode.value = '';
          }
        };

        hostNode.isFocused = function () {
          return hostNode != null && _modules_TextInputState__WEBPACK_IMPORTED_MODULE_11__["default"].currentlyFocusedField() === hostNode;
        };

        handleContentSizeChange(hostNode);
      }
    };
  }, [handleContentSizeChange]);

  function handleBlur(e) {
    _modules_TextInputState__WEBPACK_IMPORTED_MODULE_11__["default"]._currentlyFocusedNode = null;

    if (onBlur) {
      e.nativeEvent.text = e.target.value;
      onBlur(e);
    }
  }

  function handleChange(e) {
    var hostNode = e.target;
    var text = hostNode.value;
    e.nativeEvent.text = text;
    handleContentSizeChange(hostNode);

    if (onChange) {
      onChange(e);
    }

    if (onChangeText) {
      onChangeText(text);
    }
  }

  function handleFocus(e) {
    var hostNode = e.target;

    if (onFocus) {
      e.nativeEvent.text = hostNode.value;
      onFocus(e);
    }

    if (hostNode != null) {
      _modules_TextInputState__WEBPACK_IMPORTED_MODULE_11__["default"]._currentlyFocusedNode = hostNode;

      if (clearTextOnFocus) {
        hostNode.value = '';
      }

      if (selectTextOnFocus) {
        setTimeout(function () {
          hostNode.select();
        }, 0);
      }
    }
  }

  function handleKeyDown(e) {
    var hostNode = e.target;
    e.stopPropagation();
    var blurOnSubmitDefault = !multiline;
    var shouldBlurOnSubmit = blurOnSubmit == null ? blurOnSubmitDefault : blurOnSubmit;
    var nativeEvent = e.nativeEvent;
    var isComposing = isEventComposing(nativeEvent);

    if (onKeyPress) {
      onKeyPress(e);
    }

    if (e.key === 'Enter' && !e.shiftKey && !isComposing && !e.isDefaultPrevented()) {
      if ((blurOnSubmit || !multiline) && onSubmitEditing) {
        e.preventDefault();
        nativeEvent.text = e.target.value;
        onSubmitEditing(e);
      }

      if (shouldBlurOnSubmit && hostNode != null) {
        hostNode.blur();
      }
    }
  }

  function handleSelectionChange(e) {
    if (onSelectionChange) {
      try {
        var node = e.target;
        var selectionStart = node.selectionStart,
            selectionEnd = node.selectionEnd;
        e.nativeEvent.selection = {
          start: selectionStart,
          end: selectionEnd
        };
        e.nativeEvent.text = e.target.value;
        onSelectionChange(e);
      } catch (e) {}
    }
  }

  Object(_modules_useLayoutEffect__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
    var node = hostRef.current;

    if (node != null && selection != null) {
      setSelection(node, selection);
    }

    if (document.activeElement === node) {
      _modules_TextInputState__WEBPACK_IMPORTED_MODULE_11__["default"]._currentlyFocusedNode = node;
    }
  }, [hostRef, selection]);
  var component = multiline ? 'textarea' : 'input';
  var classList = [classes.textinput];
  var style = _StyleSheet__WEBPACK_IMPORTED_MODULE_10__["default"].compose(props.style, placeholderTextColor && {
    placeholderTextColor: placeholderTextColor
  });
  Object(_modules_useElementLayout__WEBPACK_IMPORTED_MODULE_5__["default"])(hostRef, onLayout);
  Object(_modules_useResponderEvents__WEBPACK_IMPORTED_MODULE_9__["default"])(hostRef, {
    onMoveShouldSetResponder: onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture: onMoveShouldSetResponderCapture,
    onResponderEnd: onResponderEnd,
    onResponderGrant: onResponderGrant,
    onResponderMove: onResponderMove,
    onResponderReject: onResponderReject,
    onResponderRelease: onResponderRelease,
    onResponderStart: onResponderStart,
    onResponderTerminate: onResponderTerminate,
    onResponderTerminationRequest: onResponderTerminationRequest,
    onScrollShouldSetResponder: onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture: onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder: onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture: onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder: onStartShouldSetResponder,
    onStartShouldSetResponderCapture: onStartShouldSetResponderCapture
  });
  var supportedProps = pickProps(props);
  supportedProps.autoCapitalize = autoCapitalize;
  supportedProps.autoComplete = autoComplete || autoCompleteType || 'on';
  supportedProps.autoCorrect = autoCorrect ? 'on' : 'off';
  supportedProps.classList = classList;
  supportedProps.dir = dir !== undefined ? dir : 'auto';
  supportedProps.enterKeyHint = returnKeyType;
  supportedProps.onBlur = handleBlur;
  supportedProps.onChange = handleChange;
  supportedProps.onFocus = handleFocus;
  supportedProps.onKeyDown = handleKeyDown;
  supportedProps.onSelect = handleSelectionChange;
  supportedProps.readOnly = !editable;
  supportedProps.rows = multiline ? numberOfLines : undefined;
  supportedProps.spellCheck = spellCheck != null ? spellCheck : autoCorrect;
  supportedProps.style = style;
  supportedProps.type = multiline ? undefined : type;
  supportedProps.inputMode = inputMode;
  var platformMethodsRef = Object(_modules_usePlatformMethods__WEBPACK_IMPORTED_MODULE_8__["default"])(supportedProps);
  var setRef = Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_7__["default"])(hostRef, platformMethodsRef, imperativeRef, forwardedRef);
  supportedProps.ref = setRef;
  return Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(component, supportedProps);
});
TextInput.displayName = 'TextInput';
TextInput.State = _modules_TextInputState__WEBPACK_IMPORTED_MODULE_11__["default"];
var classes = _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__["default"].create({
  textinput: {
    MozAppearance: 'textfield',
    WebkitAppearance: 'none',
    backgroundColor: 'transparent',
    border: '0 solid black',
    borderRadius: 0,
    boxSizing: 'border-box',
    font: '14px System',
    margin: 0,
    padding: 0,
    resize: 'none'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/useMergeRefs */ "./node_modules/react-native-web/dist/modules/useMergeRefs/index.js");
/* harmony import */ var _modules_usePressEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/usePressEvents */ "./node_modules/react-native-web/dist/modules/usePressEvents/index.js");
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../View */ "./node_modules/react-native-web/dist/exports/View/index.js");


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}








function TouchableOpacity(props, forwardedRef) {
  var activeOpacity = props.activeOpacity,
      delayPressIn = props.delayPressIn,
      delayPressOut = props.delayPressOut,
      delayLongPress = props.delayLongPress,
      disabled = props.disabled,
      focusable = props.focusable,
      onLongPress = props.onLongPress,
      onPress = props.onPress,
      onPressIn = props.onPressIn,
      onPressOut = props.onPressOut,
      rejectResponderTermination = props.rejectResponderTermination,
      style = props.style,
      rest = _objectWithoutPropertiesLoose(props, ["activeOpacity", "delayPressIn", "delayPressOut", "delayLongPress", "disabled", "focusable", "onLongPress", "onPress", "onPressIn", "onPressOut", "rejectResponderTermination", "style"]);

  var hostRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var setRef = Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_1__["default"])(forwardedRef, hostRef);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0s'),
      duration = _useState[0],
      setDuration = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      opacityOverride = _useState2[0],
      setOpacityOverride = _useState2[1];

  var setOpacityTo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value, duration) {
    setOpacityOverride(value);
    setDuration(duration ? duration / 1000 + "s" : '0s');
  }, [setOpacityOverride, setDuration]);
  var setOpacityActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (duration) {
    setOpacityTo(activeOpacity !== null && activeOpacity !== void 0 ? activeOpacity : 0.2, duration);
  }, [activeOpacity, setOpacityTo]);
  var setOpacityInactive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (duration) {
    setOpacityTo(null, duration);
  }, [setOpacityTo]);
  var pressConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      cancelable: !rejectResponderTermination,
      disabled: disabled,
      delayLongPress: delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      onLongPress: onLongPress,
      onPress: onPress,
      onPressStart: function onPressStart(event) {
        var isGrant = event.dispatchConfig != null ? event.dispatchConfig.registrationName === 'onResponderGrant' : event.type === 'keydown';
        setOpacityActive(isGrant ? 0 : 150);

        if (onPressIn != null) {
          onPressIn(event);
        }
      },
      onPressEnd: function onPressEnd(event) {
        setOpacityInactive(250);

        if (onPressOut != null) {
          onPressOut(event);
        }
      }
    };
  }, [delayLongPress, delayPressIn, delayPressOut, disabled, onLongPress, onPress, onPressIn, onPressOut, rejectResponderTermination, setOpacityActive, setOpacityInactive]);
  var pressEventHandlers = Object(_modules_usePressEvents__WEBPACK_IMPORTED_MODULE_2__["default"])(hostRef, pressConfig);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, rest, pressEventHandlers, {
    accessibilityDisabled: disabled,
    focusable: !disabled && focusable !== false,
    ref: setRef,
    style: [styles.root, !disabled && styles.actionable, style, opacityOverride != null && {
      opacity: opacityOverride
    }, {
      transitionDuration: duration
    }]
  }));
}

var styles = _StyleSheet__WEBPACK_IMPORTED_MODULE_3__["default"].create({
  root: {
    transitionProperty: 'opacity',
    transitionDuration: '0.15s',
    userSelect: 'none'
  },
  actionable: {
    cursor: 'pointer',
    touchAction: 'manipulation'
  }
});
var MemoedTouchableOpacity = react__WEBPACK_IMPORTED_MODULE_0__["memo"](react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](TouchableOpacity));
MemoedTouchableOpacity.displayName = 'TouchableOpacity';
/* harmony default export */ __webpack_exports__["default"] = (MemoedTouchableOpacity);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/UIManager/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/UIManager/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/getBoundingClientRect */ "./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js");
/* harmony import */ var _modules_setValueForStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/setValueForStyles */ "./node_modules/react-native-web/dist/modules/setValueForStyles/index.js");



var getRect = function getRect(node) {
  var _getBoundingClientRec = Object(_modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(node),
      x = _getBoundingClientRec.x,
      y = _getBoundingClientRec.y,
      top = _getBoundingClientRec.top,
      left = _getBoundingClientRec.left;

  var width = node.offsetWidth;
  var height = node.offsetHeight;
  return {
    x: x,
    y: y,
    width: width,
    height: height,
    top: top,
    left: left
  };
};

var _measureLayout = function measureLayout(node, relativeToNativeNode, callback) {
  var relativeNode = relativeToNativeNode || node && node.parentNode;

  if (node && relativeNode) {
    setTimeout(function () {
      var relativeRect = Object(_modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(relativeNode);

      var _getRect = getRect(node),
          height = _getRect.height,
          left = _getRect.left,
          top = _getRect.top,
          width = _getRect.width;

      var x = left - relativeRect.left;
      var y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};

var focusableElements = {
  A: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
var UIManager = {
  blur: function blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },
  focus: function focus(node) {
    try {
      var name = node.nodeName;

      if (node.getAttribute('tabIndex') == null && focusableElements[name] == null) {
        node.setAttribute('tabIndex', '-1');
      }

      node.focus();
    } catch (err) {}
  },
  measure: function measure(node, callback) {
    _measureLayout(node, null, callback);
  },
  measureInWindow: function measureInWindow(node, callback) {
    if (node) {
      setTimeout(function () {
        var _getRect2 = getRect(node),
            height = _getRect2.height,
            left = _getRect2.left,
            top = _getRect2.top,
            width = _getRect2.width;

        callback(left, top, width, height);
      }, 0);
    }
  },
  measureLayout: function measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    _measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView: function updateView(node, props) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }

      var value = props[prop];

      switch (prop) {
        case 'style':
          {
            Object(_modules_setValueForStyles__WEBPACK_IMPORTED_MODULE_1__["default"])(node, value);
            break;
          }

        case 'class':
        case 'className':
          {
            node.setAttribute('class', value);
            break;
          }

        case 'text':
        case 'value':
          node.value = value;
          break;

        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation: function configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  setLayoutAnimationEnabledExperimental: function setLayoutAnimationEnabledExperimental() {}
};
/* harmony default export */ __webpack_exports__["default"] = (UIManager);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/View/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/View/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createElement */ "./node_modules/react-native-web/dist/exports/createElement/index.js");
/* harmony import */ var _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyleSheet/css */ "./node_modules/react-native-web/dist/exports/StyleSheet/css.js");
/* harmony import */ var _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/forwardedProps */ "./node_modules/react-native-web/dist/modules/forwardedProps/index.js");
/* harmony import */ var _modules_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/pick */ "./node_modules/react-native-web/dist/modules/pick/index.js");
/* harmony import */ var _modules_useElementLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/useElementLayout */ "./node_modules/react-native-web/dist/modules/useElementLayout/index.js");
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modules/useMergeRefs */ "./node_modules/react-native-web/dist/modules/useMergeRefs/index.js");
/* harmony import */ var _modules_usePlatformMethods__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/usePlatformMethods */ "./node_modules/react-native-web/dist/modules/usePlatformMethods/index.js");
/* harmony import */ var _modules_useResponderEvents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/useResponderEvents */ "./node_modules/react-native-web/dist/modules/useResponderEvents/index.js");
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _Text_TextAncestorContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Text/TextAncestorContext */ "./node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}













var forwardPropsList = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["defaultProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["accessibilityProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["clickProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["focusProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["keyboardProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["mouseProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["touchProps"]), _modules_forwardedProps__WEBPACK_IMPORTED_MODULE_3__["styleProps"]), {}, {
  href: true,
  lang: true,
  onScroll: true,
  onWheel: true,
  pointerEvents: true
});

var pickProps = function pickProps(props) {
  return Object(_modules_pick__WEBPACK_IMPORTED_MODULE_4__["default"])(props, forwardPropsList);
};

var View = react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function (props, forwardedRef) {
  var hrefAttrs = props.hrefAttrs,
      onLayout = props.onLayout,
      onMoveShouldSetResponder = props.onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
      onResponderEnd = props.onResponderEnd,
      onResponderGrant = props.onResponderGrant,
      onResponderMove = props.onResponderMove,
      onResponderReject = props.onResponderReject,
      onResponderRelease = props.onResponderRelease,
      onResponderStart = props.onResponderStart,
      onResponderTerminate = props.onResponderTerminate,
      onResponderTerminationRequest = props.onResponderTerminationRequest,
      onScrollShouldSetResponder = props.onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder = props.onStartShouldSetResponder,
      onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture;

  if (true) {
    react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(props.children).forEach(function (item) {
      if (typeof item === 'string') {
        console.error("Unexpected text node: " + item + ". A text node cannot be a child of a <View>.");
      }
    });
  }

  var hasTextAncestor = react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_Text_TextAncestorContext__WEBPACK_IMPORTED_MODULE_10__["default"]);
  var hostRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  Object(_modules_useElementLayout__WEBPACK_IMPORTED_MODULE_5__["default"])(hostRef, onLayout);
  Object(_modules_useResponderEvents__WEBPACK_IMPORTED_MODULE_8__["default"])(hostRef, {
    onMoveShouldSetResponder: onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture: onMoveShouldSetResponderCapture,
    onResponderEnd: onResponderEnd,
    onResponderGrant: onResponderGrant,
    onResponderMove: onResponderMove,
    onResponderReject: onResponderReject,
    onResponderRelease: onResponderRelease,
    onResponderStart: onResponderStart,
    onResponderTerminate: onResponderTerminate,
    onResponderTerminationRequest: onResponderTerminationRequest,
    onScrollShouldSetResponder: onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture: onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder: onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture: onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder: onStartShouldSetResponder,
    onStartShouldSetResponderCapture: onStartShouldSetResponderCapture
  });
  var component = 'div';
  var style = _StyleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].compose(hasTextAncestor && styles.inline, props.style);
  var supportedProps = pickProps(props);
  supportedProps.classList = classList;
  supportedProps.style = style;

  if (props.href != null) {
    component = 'a';

    if (hrefAttrs != null) {
      var download = hrefAttrs.download,
          rel = hrefAttrs.rel,
          target = hrefAttrs.target;

      if (download != null) {
        supportedProps.download = download;
      }

      if (rel != null) {
        supportedProps.rel = rel;
      }

      if (typeof target === 'string') {
        supportedProps.target = target.charAt(0) !== '_' ? '_' + target : target;
      }
    }
  }

  var platformMethodsRef = Object(_modules_usePlatformMethods__WEBPACK_IMPORTED_MODULE_7__["default"])(supportedProps);
  var setRef = Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_6__["default"])(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return Object(_createElement__WEBPACK_IMPORTED_MODULE_1__["default"])(component, supportedProps);
});
View.displayName = 'View';
var classes = _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__["default"].create({
  view: {
    alignItems: 'stretch',
    border: '0 solid black',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: 'relative',
    zIndex: 0
  }
});
var classList = [classes.view];
var styles = _StyleSheet__WEBPACK_IMPORTED_MODULE_9__["default"].create({
  inline: {
    display: 'inline-flex'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (View);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/createElement/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/createElement/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/AccessibilityUtil */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js");
/* harmony import */ var _modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/createDOMProps */ "./node_modules/react-native-web/dist/modules/createDOMProps/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var createElement = function createElement(component, props) {
  var accessibilityComponent;

  if (component && component.constructor === String) {
    accessibilityComponent = _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__["default"].propsToAccessibilityComponent(props);
  }

  var Component = accessibilityComponent || component;
  var domProps = Object(_modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__["default"])(Component, props);

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement.apply(react__WEBPACK_IMPORTED_MODULE_2___default.a, [Component, domProps].concat(children));
};

/* harmony default export */ __webpack_exports__["default"] = (createElement);

/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/processColor/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/processColor/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-css-color */ "normalize-css-color");
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css_color__WEBPACK_IMPORTED_MODULE_0__);


var processColor = function processColor(color) {
  if (color === undefined || color === null) {
    return color;
  }

  var int32Color = normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default()(color);

  if (int32Color === undefined || int32Color === null) {
    return undefined;
  }

  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};

/* harmony default export */ __webpack_exports__["default"] = (processColor);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isDisabled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDisabled */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js");
/* harmony import */ var _propsToAccessibilityComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propsToAccessibilityComponent */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js");
/* harmony import */ var _propsToAriaRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./propsToAriaRole */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js");



var AccessibilityUtil = {
  isDisabled: _isDisabled__WEBPACK_IMPORTED_MODULE_0__["default"],
  propsToAccessibilityComponent: _propsToAccessibilityComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
  propsToAriaRole: _propsToAriaRole__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (AccessibilityUtil);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js":
/*!************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isDisabled = function isDisabled(props) {
  return props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf('disabled') > -1;
};

/* harmony default export */ __webpack_exports__["default"] = (isDisabled);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _propsToAriaRole__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./propsToAriaRole */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js");

var roleComponents = {
  article: 'article',
  banner: 'header',
  blockquote: 'blockquote',
  code: 'code',
  complementary: 'aside',
  contentinfo: 'footer',
  deletion: 'del',
  emphasis: 'em',
  figure: 'figure',
  insertion: 'ins',
  form: 'form',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section',
  strong: 'strong'
};
var emptyObject = {};

var propsToAccessibilityComponent = function propsToAccessibilityComponent(props) {
  if (props === void 0) {
    props = emptyObject;
  }

  if (props.accessibilityRole === 'label') {
    return 'label';
  }

  var role = Object(_propsToAriaRole__WEBPACK_IMPORTED_MODULE_0__["default"])(props);

  if (role) {
    if (role === 'heading') {
      var level = props.accessibilityLevel || props['aria-level'];

      if (level != null) {
        return "h" + level;
      }

      return 'h1';
    }

    return roleComponents[role];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (propsToAccessibilityComponent);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var accessibilityRoleToWebRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region',
  text: null
};

var propsToAriaRole = function propsToAriaRole(_ref) {
  var accessibilityRole = _ref.accessibilityRole;

  if (accessibilityRole) {
    var inferredRole = accessibilityRoleToWebRole[accessibilityRole];

    if (inferredRole !== null) {
      return inferredRole || accessibilityRole;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (propsToAriaRole);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/TextInputState/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/TextInputState/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../exports/UIManager */ "./node_modules/react-native-web/dist/exports/UIManager/index.js");

var TextInputState = {
  _currentlyFocusedNode: null,
  currentlyFocusedField: function currentlyFocusedField() {
    if (document.activeElement !== this._currentlyFocusedNode) {
      this._currentlyFocusedNode = null;
    }

    return this._currentlyFocusedNode;
  },
  focusTextInput: function focusTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = textFieldNode;

      if (document.activeElement !== textFieldNode) {
        _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].focus(textFieldNode);
      }
    }
  },
  blurTextInput: function blurTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = null;

      if (document.activeElement === textFieldNode) {
        _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].blur(textFieldNode);
      }
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TextInputState);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/createDOMProps/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/createDOMProps/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../AccessibilityUtil */ "./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js");
/* harmony import */ var _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exports/StyleSheet/css */ "./node_modules/react-native-web/dist/exports/StyleSheet/css.js");
/* harmony import */ var _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exports/StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../exports/StyleSheet/styleResolver */ "./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js");
/* harmony import */ var _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../exports/StyleSheet/constants */ "./node_modules/react-native-web/dist/exports/StyleSheet/constants.js");
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}






var emptyObject = {};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var uppercasePattern = /[A-Z]/g;

function toHyphenLower(match) {
  return '-' + match.toLowerCase();
}

function hyphenateString(str) {
  return str.replace(uppercasePattern, toHyphenLower);
}

function processIDRefList(idRefList) {
  return isArray(idRefList) ? idRefList.join(' ') : idRefList;
}

var classes = _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  reset: {
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    listStyle: 'none',
    margin: 0,
    textAlign: 'inherit',
    textDecoration: 'none'
  },
  cursor: {
    cursor: 'pointer'
  }
}, _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__["STYLE_GROUPS"].classicReset);
var pointerEventsStyles = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].create({
  auto: {
    pointerEvents: 'auto'
  },
  'box-none': {
    pointerEvents: 'box-none'
  },
  'box-only': {
    pointerEvents: 'box-only'
  },
  none: {
    pointerEvents: 'none'
  }
});

var createDOMProps = function createDOMProps(elementType, props) {
  if (!props) {
    props = emptyObject;
  }

  var _props = props,
      accessibilityActiveDescendant = _props.accessibilityActiveDescendant,
      accessibilityAtomic = _props.accessibilityAtomic,
      accessibilityAutoComplete = _props.accessibilityAutoComplete,
      accessibilityBusy = _props.accessibilityBusy,
      accessibilityChecked = _props.accessibilityChecked,
      accessibilityColumnCount = _props.accessibilityColumnCount,
      accessibilityColumnIndex = _props.accessibilityColumnIndex,
      accessibilityColumnSpan = _props.accessibilityColumnSpan,
      accessibilityControls = _props.accessibilityControls,
      accessibilityCurrent = _props.accessibilityCurrent,
      accessibilityDescribedBy = _props.accessibilityDescribedBy,
      accessibilityDetails = _props.accessibilityDetails,
      accessibilityDisabled = _props.accessibilityDisabled,
      accessibilityErrorMessage = _props.accessibilityErrorMessage,
      accessibilityExpanded = _props.accessibilityExpanded,
      accessibilityFlowTo = _props.accessibilityFlowTo,
      accessibilityHasPopup = _props.accessibilityHasPopup,
      accessibilityHidden = _props.accessibilityHidden,
      accessibilityInvalid = _props.accessibilityInvalid,
      accessibilityKeyShortcuts = _props.accessibilityKeyShortcuts,
      accessibilityLabel = _props.accessibilityLabel,
      accessibilityLabelledBy = _props.accessibilityLabelledBy,
      accessibilityLevel = _props.accessibilityLevel,
      accessibilityLiveRegion = _props.accessibilityLiveRegion,
      accessibilityModal = _props.accessibilityModal,
      accessibilityMultiline = _props.accessibilityMultiline,
      accessibilityMultiSelectable = _props.accessibilityMultiSelectable,
      accessibilityOrientation = _props.accessibilityOrientation,
      accessibilityOwns = _props.accessibilityOwns,
      accessibilityPlaceholder = _props.accessibilityPlaceholder,
      accessibilityPosInSet = _props.accessibilityPosInSet,
      accessibilityPressed = _props.accessibilityPressed,
      accessibilityReadOnly = _props.accessibilityReadOnly,
      accessibilityRequired = _props.accessibilityRequired,
      accessibilityRole = _props.accessibilityRole,
      accessibilityRoleDescription = _props.accessibilityRoleDescription,
      accessibilityRowCount = _props.accessibilityRowCount,
      accessibilityRowIndex = _props.accessibilityRowIndex,
      accessibilityRowSpan = _props.accessibilityRowSpan,
      accessibilitySelected = _props.accessibilitySelected,
      accessibilitySetSize = _props.accessibilitySetSize,
      accessibilitySort = _props.accessibilitySort,
      accessibilityValueMax = _props.accessibilityValueMax,
      accessibilityValueMin = _props.accessibilityValueMin,
      accessibilityValueNow = _props.accessibilityValueNow,
      accessibilityValueText = _props.accessibilityValueText,
      classList = _props.classList,
      dataSet = _props.dataSet,
      focusable = _props.focusable,
      nativeID = _props.nativeID,
      pointerEvents = _props.pointerEvents,
      providedStyle = _props.style,
      testID = _props.testID,
      accessible = _props.accessible,
      accessibilityState = _props.accessibilityState,
      accessibilityValue = _props.accessibilityValue,
      domProps = _objectWithoutPropertiesLoose(_props, ["accessibilityActiveDescendant", "accessibilityAtomic", "accessibilityAutoComplete", "accessibilityBusy", "accessibilityChecked", "accessibilityColumnCount", "accessibilityColumnIndex", "accessibilityColumnSpan", "accessibilityControls", "accessibilityCurrent", "accessibilityDescribedBy", "accessibilityDetails", "accessibilityDisabled", "accessibilityErrorMessage", "accessibilityExpanded", "accessibilityFlowTo", "accessibilityHasPopup", "accessibilityHidden", "accessibilityInvalid", "accessibilityKeyShortcuts", "accessibilityLabel", "accessibilityLabelledBy", "accessibilityLevel", "accessibilityLiveRegion", "accessibilityModal", "accessibilityMultiline", "accessibilityMultiSelectable", "accessibilityOrientation", "accessibilityOwns", "accessibilityPlaceholder", "accessibilityPosInSet", "accessibilityPressed", "accessibilityReadOnly", "accessibilityRequired", "accessibilityRole", "accessibilityRoleDescription", "accessibilityRowCount", "accessibilityRowIndex", "accessibilityRowSpan", "accessibilitySelected", "accessibilitySetSize", "accessibilitySort", "accessibilityValueMax", "accessibilityValueMin", "accessibilityValueNow", "accessibilityValueText", "classList", "dataSet", "focusable", "nativeID", "pointerEvents", "style", "testID", "accessible", "accessibilityState", "accessibilityValue"]);

  var disabled = accessibilityState != null && accessibilityState.disabled === true || accessibilityDisabled;
  var role = _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__["default"].propsToAriaRole(props);

  if (accessibilityState != null) {
    for (var prop in accessibilityState) {
      var value = accessibilityState[prop];

      if (value != null) {
        if (prop === 'disabled' || prop === 'hidden') {
          if (value === true) {
            domProps["aria-" + prop] = value;
            domProps[prop] = value;
          }
        } else {
          domProps["aria-" + prop] = value;
        }
      }
    }
  }

  if (accessibilityValue != null) {
    for (var _prop in accessibilityValue) {
      var _value = accessibilityValue[_prop];

      if (_value != null) {
        domProps["aria-value" + _prop] = _value;
      }
    }
  }

  if (accessibilityActiveDescendant != null) {
    domProps['aria-activedescendant'] = accessibilityActiveDescendant;
  }

  if (accessibilityAtomic != null) {
    domProps['aria-atomic'] = accessibilityAtomic;
  }

  if (accessibilityAutoComplete != null) {
    domProps['aria-autocomplete'] = accessibilityAutoComplete;
  }

  if (accessibilityBusy != null) {
    domProps['aria-busy'] = accessibilityBusy;
  }

  if (accessibilityChecked != null) {
    domProps['aria-checked'] = accessibilityChecked;
  }

  if (accessibilityColumnCount != null) {
    domProps['aria-colcount'] = accessibilityColumnCount;
  }

  if (accessibilityColumnIndex != null) {
    domProps['aria-colindex'] = accessibilityColumnIndex;
  }

  if (accessibilityColumnSpan != null) {
    domProps['aria-colspan'] = accessibilityColumnSpan;
  }

  if (accessibilityControls != null) {
    domProps['aria-controls'] = processIDRefList(accessibilityControls);
  }

  if (accessibilityCurrent != null) {
    domProps['aria-current'] = accessibilityCurrent;
  }

  if (accessibilityDescribedBy != null) {
    domProps['aria-describedby'] = processIDRefList(accessibilityDescribedBy);
  }

  if (accessibilityDetails != null) {
    domProps['aria-details'] = accessibilityDetails;
  }

  if (disabled === true) {
    domProps['aria-disabled'] = true;

    if (elementType === 'button' || elementType === 'form' || elementType === 'input' || elementType === 'select' || elementType === 'textarea') {
      domProps.disabled = true;
    }
  }

  if (accessibilityErrorMessage != null) {
    domProps['aria-errormessage'] = accessibilityErrorMessage;
  }

  if (accessibilityExpanded != null) {
    domProps['aria-expanded'] = accessibilityExpanded;
  }

  if (accessibilityFlowTo != null) {
    domProps['aria-flowto'] = processIDRefList(accessibilityFlowTo);
  }

  if (accessibilityHasPopup != null) {
    domProps['aria-haspopup'] = accessibilityHasPopup;
  }

  if (accessibilityHidden === true) {
    domProps['aria-hidden'] = accessibilityHidden;
  }

  if (accessibilityInvalid != null) {
    domProps['aria-invalid'] = accessibilityInvalid;
  }

  if (accessibilityKeyShortcuts != null && Array.isArray(accessibilityKeyShortcuts)) {
    domProps['aria-keyshortcuts'] = accessibilityKeyShortcuts.join(' ');
  }

  if (accessibilityLabel != null) {
    domProps['aria-label'] = accessibilityLabel;
  }

  if (accessibilityLabelledBy != null) {
    domProps['aria-labelledby'] = processIDRefList(accessibilityLabelledBy);
  }

  if (accessibilityLevel != null) {
    domProps['aria-level'] = accessibilityLevel;
  }

  if (accessibilityLiveRegion != null) {
    domProps['aria-live'] = accessibilityLiveRegion === 'none' ? 'off' : accessibilityLiveRegion;
  }

  if (accessibilityModal != null) {
    domProps['aria-modal'] = accessibilityModal;
  }

  if (accessibilityMultiline != null) {
    domProps['aria-multiline'] = accessibilityMultiline;
  }

  if (accessibilityMultiSelectable != null) {
    domProps['aria-multiselectable'] = accessibilityMultiSelectable;
  }

  if (accessibilityOrientation != null) {
    domProps['aria-orientation'] = accessibilityOrientation;
  }

  if (accessibilityOwns != null) {
    domProps['aria-owns'] = processIDRefList(accessibilityOwns);
  }

  if (accessibilityPlaceholder != null) {
    domProps['aria-placeholder'] = accessibilityPlaceholder;
  }

  if (accessibilityPosInSet != null) {
    domProps['aria-posinset'] = accessibilityPosInSet;
  }

  if (accessibilityPressed != null) {
    domProps['aria-pressed'] = accessibilityPressed;
  }

  if (accessibilityReadOnly != null) {
    domProps['aria-readonly'] = accessibilityReadOnly;

    if (elementType === 'input' || elementType === 'select' || elementType === 'textarea') {
      domProps.readOnly = true;
    }
  }

  if (accessibilityRequired != null) {
    domProps['aria-required'] = accessibilityRequired;

    if (elementType === 'input' || elementType === 'select' || elementType === 'textarea') {
      domProps.required = true;
    }
  }

  if (role != null) {
    domProps['role'] = role === 'none' ? 'presentation' : role;
  }

  if (accessibilityRoleDescription != null) {
    domProps['aria-roledescription'] = accessibilityRoleDescription;
  }

  if (accessibilityRowCount != null) {
    domProps['aria-rowcount'] = accessibilityRowCount;
  }

  if (accessibilityRowIndex != null) {
    domProps['aria-rowindex'] = accessibilityRowIndex;
  }

  if (accessibilityRowSpan != null) {
    domProps['aria-rowspan'] = accessibilityRowSpan;
  }

  if (accessibilitySelected != null) {
    domProps['aria-selected'] = accessibilitySelected;
  }

  if (accessibilitySetSize != null) {
    domProps['aria-setsize'] = accessibilitySetSize;
  }

  if (accessibilitySort != null) {
    domProps['aria-sort'] = accessibilitySort;
  }

  if (accessibilityValueMax != null) {
    domProps['aria-valuemax'] = accessibilityValueMax;
  }

  if (accessibilityValueMin != null) {
    domProps['aria-valuemin'] = accessibilityValueMin;
  }

  if (accessibilityValueNow != null) {
    domProps['aria-valuenow'] = accessibilityValueNow;
  }

  if (accessibilityValueText != null) {
    domProps['aria-valuetext'] = accessibilityValueText;
  }

  if (dataSet != null) {
    for (var dataProp in dataSet) {
      if (hasOwnProperty.call(dataSet, dataProp)) {
        var dataName = hyphenateString(dataProp);
        var dataValue = dataSet[dataProp];

        if (dataValue != null) {
          domProps["data-" + dataName] = dataValue;
        }
      }
    }
  }

  var _focusable = focusable != null ? focusable : accessible;

  if (_focusable === false) {
    domProps.tabIndex = '-1';
  }

  if (elementType === 'a' || elementType === 'button' || elementType === 'input' || elementType === 'select' || elementType === 'textarea') {
    if (_focusable === false || accessibilityDisabled === true) {
      domProps.tabIndex = '-1';
    }
  } else if (role === 'button' || role === 'checkbox' || role === 'link' || role === 'radio' || role === 'textbox' || role === 'switch') {
    if (_focusable !== false) {
      domProps.tabIndex = '0';
    }
  } else {
    if (_focusable === true) {
      domProps.tabIndex = '0';
    }
  }

  var reactNativeStyle = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__["default"].compose(pointerEvents && pointerEventsStyles[pointerEvents], providedStyle);
  var needsCursor = (role === 'button' || role === 'link') && !disabled;
  var needsReset = elementType === 'a' || elementType === 'button' || elementType === 'li' || elementType === 'ul' || role === 'heading';
  var finalClassList = [needsReset && classes.reset, needsCursor && classes.cursor, classList];

  var _styleResolver$resolv = _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__["default"].resolve(reactNativeStyle, finalClassList),
      className = _styleResolver$resolv.className,
      style = _styleResolver$resolv.style;

  if (className != null && className !== '') {
    domProps.className = className;
  }

  if (style) {
    domProps.style = style;
  }

  if (nativeID != null) {
    domProps.id = nativeID;
  }

  if (testID != null) {
    domProps['data-testid'] = testID;
  }

  return domProps;
};

/* harmony default export */ __webpack_exports__["default"] = (createDOMProps);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/flattenArray/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/flattenArray/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function flattenArray(array) {
  function flattenDown(array, result) {
    for (var i = 0; i < array.length; i++) {
      var value = array[i];

      if (Array.isArray(value)) {
        flattenDown(value, result);
      } else if (value != null && value !== false) {
        result.push(value);
      }
    }

    return result;
  }

  return flattenDown(array, []);
}

/* harmony default export */ __webpack_exports__["default"] = (flattenArray);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/forwardedProps/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/forwardedProps/index.js ***!
  \****************************************************************************/
/*! exports provided: defaultProps, accessibilityProps, clickProps, focusProps, keyboardProps, mouseProps, touchProps, styleProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessibilityProps", function() { return accessibilityProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clickProps", function() { return clickProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusProps", function() { return focusProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyboardProps", function() { return keyboardProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mouseProps", function() { return mouseProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "touchProps", function() { return touchProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleProps", function() { return styleProps; });
var defaultProps = {
  children: true,
  dataSet: true,
  nativeID: true,
  ref: true,
  suppressHydrationWarning: true,
  testID: true
};
var accessibilityProps = {
  accessibilityActiveDescendant: true,
  accessibilityAtomic: true,
  accessibilityAutoComplete: true,
  accessibilityBusy: true,
  accessibilityChecked: true,
  accessibilityColumnCount: true,
  accessibilityColumnIndex: true,
  accessibilityColumnSpan: true,
  accessibilityControls: true,
  accessibilityCurrent: true,
  accessibilityDescribedBy: true,
  accessibilityDetails: true,
  accessibilityDisabled: true,
  accessibilityErrorMessage: true,
  accessibilityExpanded: true,
  accessibilityFlowTo: true,
  accessibilityHasPopup: true,
  accessibilityHidden: true,
  accessibilityInvalid: true,
  accessibilityKeyShortcuts: true,
  accessibilityLabel: true,
  accessibilityLabelledBy: true,
  accessibilityLevel: true,
  accessibilityLiveRegion: true,
  accessibilityModal: true,
  accessibilityMultiline: true,
  accessibilityMultiSelectable: true,
  accessibilityOrientation: true,
  accessibilityOwns: true,
  accessibilityPlaceholder: true,
  accessibilityPosInSet: true,
  accessibilityPressed: true,
  accessibilityReadOnly: true,
  accessibilityRequired: true,
  accessibilityRole: true,
  accessibilityRoleDescription: true,
  accessibilityRowCount: true,
  accessibilityRowIndex: true,
  accessibilityRowSpan: true,
  accessibilitySelected: true,
  accessibilitySetSize: true,
  accessibilitySort: true,
  accessibilityValueMax: true,
  accessibilityValueMin: true,
  accessibilityValueNow: true,
  accessibilityValueText: true,
  dir: true,
  focusable: true,
  accessible: true,
  accessibilityState: true,
  accessibilityValue: true
};
var clickProps = {
  onClick: true,
  onClickCapture: true,
  onContextMenu: true
};
var focusProps = {
  onBlur: true,
  onFocus: true
};
var keyboardProps = {
  onKeyDown: true,
  onKeyDownCapture: true,
  onKeyUp: true,
  onKeyUpCapture: true
};
var mouseProps = {
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true
};
var touchProps = {
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true
};
var styleProps = {
  classList: true,
  style: true
};

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getBoundingClientRect = function getBoundingClientRect(node) {
  if (node != null) {
    var isElement = node.nodeType === 1;

    if (isElement && typeof node.getBoundingClientRect === 'function') {
      return node.getBoundingClientRect();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getBoundingClientRect);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/isSelectionValid/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/isSelectionValid/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSelectionValid; });
function isSelectionValid() {
  var selection = window.getSelection();
  var string = selection.toString();
  var anchorNode = selection.anchorNode;
  var focusNode = selection.focusNode;
  var isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
  return string.length >= 1 && string !== '\n' && isTextNode;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/isWebColor/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/isWebColor/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isWebColor = function isWebColor(color) {
  return color === 'currentcolor' || color === 'currentColor' || color === 'inherit' || color.indexOf('var(') === 0;
};

/* harmony default export */ __webpack_exports__["default"] = (isWebColor);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/mergeRefs/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/mergeRefs/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function mergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function forwardRef(node) {
    args.forEach(function (ref) {
      if (ref == null) {
        return;
      }

      if (typeof ref === 'function') {
        ref(node);
        return;
      }

      if (typeof ref === 'object') {
        ref.current = node;
        return;
      }

      console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(ref));
    });
  };
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CSS_UNIT_RE = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;

var getUnit = function getUnit(str) {
  return str.match(CSS_UNIT_RE)[1];
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var multiplyStyleLengthValue = function multiplyStyleLengthValue(value, multiple) {
  if (typeof value === 'string') {
    var number = parseFloat(value) * multiple;
    var unit = getUnit(value);
    return "" + number + unit;
  } else if (isNumeric(value)) {
    return value * multiple;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (multiplyStyleLengthValue);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/normalizeColor/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/normalizeColor/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isWebColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../isWebColor */ "./node_modules/react-native-web/dist/modules/isWebColor/index.js");
/* harmony import */ var _exports_processColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exports/processColor */ "./node_modules/react-native-web/dist/exports/processColor/index.js");



var normalizeColor = function normalizeColor(color, opacity) {
  if (opacity === void 0) {
    opacity = 1;
  }

  if (color == null) return;

  if (typeof color === 'string' && Object(_isWebColor__WEBPACK_IMPORTED_MODULE_0__["default"])(color)) {
    return color;
  }

  var colorInt = Object(_exports_processColor__WEBPACK_IMPORTED_MODULE_1__["default"])(color);

  if (colorInt != null) {
    var r = colorInt >> 16 & 255;
    var g = colorInt >> 8 & 255;
    var b = colorInt & 255;
    var a = (colorInt >> 24 & 255) / 255;
    var alpha = (a * opacity).toFixed(2);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }
};

/* harmony default export */ __webpack_exports__["default"] = (normalizeColor);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/pick/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/pick/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pick; });
function pick(obj, list) {
  var nextObj = {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (list[key] === true || key.indexOf('aria-') === 0) {
        nextObj[key] = obj[key];
      }
    }
  }

  return nextObj;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/prefixStyles/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/prefixStyles/index.js ***!
  \**************************************************************************/
/*! exports provided: prefixInlineStyles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixInlineStyles", function() { return prefixInlineStyles; });
/* harmony import */ var inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/lib/createPrefixer */ "inline-style-prefixer/lib/createPrefixer");
/* harmony import */ var inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static */ "./node_modules/react-native-web/dist/modules/prefixStyles/static.js");


var prefixAll = inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0___default()(_static__WEBPACK_IMPORTED_MODULE_1__["default"]);
var prefixInlineStyles = function prefixInlineStyles(style) {
  var prefixedStyles = prefixAll(style);
  Object.keys(prefixedStyles).forEach(function (prop) {
    var value = prefixedStyles[prop];

    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });
  return prefixedStyles;
};
/* harmony default export */ __webpack_exports__["default"] = (prefixAll);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/prefixStyles/static.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/prefixStyles/static.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/backgroundClip */ "inline-style-prefixer/lib/plugins/backgroundClip");
/* harmony import */ var inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/crossFade */ "inline-style-prefixer/lib/plugins/crossFade");
/* harmony import */ var inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/cursor */ "inline-style-prefixer/lib/plugins/cursor");
/* harmony import */ var inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/filter */ "inline-style-prefixer/lib/plugins/filter");
/* harmony import */ var inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flex */ "inline-style-prefixer/lib/plugins/flex");
/* harmony import */ var inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flexboxIE */ "inline-style-prefixer/lib/plugins/flexboxIE");
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flexboxOld */ "inline-style-prefixer/lib/plugins/flexboxOld");
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/gradient */ "inline-style-prefixer/lib/plugins/gradient");
/* harmony import */ var inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/grid */ "inline-style-prefixer/lib/plugins/grid");
/* harmony import */ var inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/imageSet */ "inline-style-prefixer/lib/plugins/imageSet");
/* harmony import */ var inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/logical */ "inline-style-prefixer/lib/plugins/logical");
/* harmony import */ var inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/position */ "inline-style-prefixer/lib/plugins/position");
/* harmony import */ var inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/sizing */ "inline-style-prefixer/lib/plugins/sizing");
/* harmony import */ var inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/transition */ "inline-style-prefixer/lib/plugins/transition");
/* harmony import */ var inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_13__);














var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];
/* harmony default export */ __webpack_exports__["default"] = ({
  plugins: [inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0___default.a, inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default.a, inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default.a, inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default.a, inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default.a, inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default.a, inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default.a, inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default.a, inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8___default.a, inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9___default.a, inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10___default.a, inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11___default.a, inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12___default.a, inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_13___default.a],
  prefixMap: {
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    fontFeatureSettings: w,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transform: w,
    transformOrigin: w,
    transformOriginX: w,
    transformOriginY: w,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    backdropFilter: w,
    fontKerning: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    textOrientation: w,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    textSizeAdjust: ['ms', 'Webkit'],
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w
  }
});

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/setValueForStyles/dangerousStyleValue.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/setValueForStyles/dangerousStyleValue.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../unitlessNumbers */ "./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js");


function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__["default"].hasOwnProperty(name) && _unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__["default"][name])) {
    return value + 'px';
  }

  return ('' + value).trim();
}

/* harmony default export */ __webpack_exports__["default"] = (dangerousStyleValue);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/setValueForStyles/index.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/setValueForStyles/index.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dangerousStyleValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dangerousStyleValue */ "./node_modules/react-native-web/dist/modules/setValueForStyles/dangerousStyleValue.js");


function setValueForStyles(node, styles) {
  var style = node.style;

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = Object(_dangerousStyleValue__WEBPACK_IMPORTED_MODULE_0__["default"])(styleName, styles[styleName], isCustomProperty);

    if (styleName === 'float') {
      styleName = 'cssFloat';
    }

    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (setValueForStyles);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessNumbers = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  shadowOpacity: true
};
var prefixes = ['ms', 'Moz', 'O', 'Webkit'];

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

Object.keys(unitlessNumbers).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
/* harmony default export */ __webpack_exports__["default"] = (unitlessNumbers);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useElementLayout/index.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useElementLayout/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useElementLayout; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useLayoutEffect */ "./node_modules/react-native-web/dist/modules/useLayoutEffect/index.js");
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exports/UIManager */ "./node_modules/react-native-web/dist/exports/UIManager/index.js");



var DOM_LAYOUT_HANDLER_NAME = '__reactLayoutHandler';
var didWarn = !fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"];
var resizeObserver = null;

function getResizeObserver() {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] && typeof window.ResizeObserver !== 'undefined') {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function (entries) {
        entries.forEach(function (entry) {
          var node = entry.target;
          var onLayout = node[DOM_LAYOUT_HANDLER_NAME];

          if (typeof onLayout === 'function') {
            _exports_UIManager__WEBPACK_IMPORTED_MODULE_2__["default"].measure(node, function (x, y, width, height, left, top) {
              var event = {
                nativeEvent: {
                  layout: {
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    left: left,
                    top: top
                  }
                },
                timeStamp: Date.now()
              };
              Object.defineProperty(event.nativeEvent, 'target', {
                enumerable: true,
                get: function get() {
                  return entry.target;
                }
              });
              onLayout(event);
            });
          }
        });
      });
    }
  } else if (!didWarn) {
    if (true) {
      console.warn('onLayout relies on ResizeObserver which is not supported by your browser. ' + 'Please include a polyfill, e.g., https://github.com/que-etc/resize-observer-polyfill.');
      didWarn = true;
    }
  }

  return resizeObserver;
}

function useElementLayout(ref, onLayout) {
  var observer = getResizeObserver();
  Object(_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    var node = ref.current;

    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref, onLayout]);
  Object(_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
    var node = ref.current;

    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === 'function') {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }

    return function () {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref, observer]);
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useLayoutEffect/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useLayoutEffect/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useLayoutEffectImpl = fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] ? react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_1__["useEffect"];
/* harmony default export */ __webpack_exports__["default"] = (useLayoutEffectImpl);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useMergeRefs/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useMergeRefs/index.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mergeRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mergeRefs */ "./node_modules/react-native-web/dist/modules/mergeRefs/index.js");


function useMergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return _mergeRefs__WEBPACK_IMPORTED_MODULE_1__["default"].apply(void 0, args);
  }, [].concat(args));
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/usePlatformMethods/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/usePlatformMethods/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePlatformMethods; });
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../exports/UIManager */ "./node_modules/react-native-web/dist/exports/UIManager/index.js");
/* harmony import */ var _createDOMProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createDOMProps */ "./node_modules/react-native-web/dist/modules/createDOMProps/index.js");
/* harmony import */ var _useStable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useStable */ "./node_modules/react-native-web/dist/modules/useStable/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}





var emptyObject = {};

function setNativeProps(node, nativeProps, classList, pointerEvents, style, previousStyleRef) {
  if (node != null && nativeProps) {
    var domProps = Object(_createDOMProps__WEBPACK_IMPORTED_MODULE_1__["default"])(null, _objectSpread(_objectSpread({
      pointerEvents: pointerEvents
    }, nativeProps), {}, {
      classList: [classList, nativeProps.className],
      style: [style, nativeProps.style]
    }));
    var nextDomStyle = domProps.style;

    if (previousStyleRef.current != null) {
      if (domProps.style == null) {
        domProps.style = {};
      }

      for (var styleName in previousStyleRef.current) {
        if (domProps.style[styleName] == null) {
          domProps.style[styleName] = '';
        }
      }
    }

    previousStyleRef.current = nextDomStyle;
    _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].updateView(node, domProps);
  }
}

function usePlatformMethods(_ref) {
  var classList = _ref.classList,
      pointerEvents = _ref.pointerEvents,
      style = _ref.style;
  var previousStyleRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var setNativePropsArgsRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  setNativePropsArgsRef.current = {
    classList: classList,
    pointerEvents: pointerEvents,
    style: style
  };
  var ref = Object(_useStable__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return function (hostNode) {
      if (hostNode != null) {
        hostNode.measure = function (callback) {
          return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].measure(hostNode, callback);
        };

        hostNode.measureLayout = function (relativeToNode, success, failure) {
          return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].measureLayout(hostNode, relativeToNode, failure, success);
        };

        hostNode.measureInWindow = function (callback) {
          return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].measureInWindow(hostNode, callback);
        };

        hostNode.setNativeProps = function (nativeProps) {
          var _ref2 = setNativePropsArgsRef.current || emptyObject,
              classList = _ref2.classList,
              style = _ref2.style,
              pointerEvents = _ref2.pointerEvents;

          setNativeProps(hostNode, nativeProps, classList, pointerEvents, style, previousStyleRef);
        };
      }
    };
  });
  return ref;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/usePressEvents/PressResponder.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/usePressEvents/PressResponder.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PressResponder; });


var DELAY = 'DELAY';
var ERROR = 'ERROR';
var LONG_PRESS_DETECTED = 'LONG_PRESS_DETECTED';
var NOT_RESPONDER = 'NOT_RESPONDER';
var RESPONDER_ACTIVE_LONG_PRESS_START = 'RESPONDER_ACTIVE_LONG_PRESS_START';
var RESPONDER_ACTIVE_PRESS_START = 'RESPONDER_ACTIVE_PRESS_START';
var RESPONDER_INACTIVE_PRESS_START = 'RESPONDER_INACTIVE_PRESS_START';
var RESPONDER_GRANT = 'RESPONDER_GRANT';
var RESPONDER_RELEASE = 'RESPONDER_RELEASE';
var RESPONDER_TERMINATED = 'RESPONDER_TERMINATED';
var Transitions = Object.freeze({
  NOT_RESPONDER: {
    DELAY: ERROR,
    RESPONDER_GRANT: RESPONDER_INACTIVE_PRESS_START,
    RESPONDER_RELEASE: ERROR,
    RESPONDER_TERMINATED: ERROR,
    LONG_PRESS_DETECTED: ERROR
  },
  RESPONDER_INACTIVE_PRESS_START: {
    DELAY: RESPONDER_ACTIVE_PRESS_START,
    RESPONDER_GRANT: ERROR,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: ERROR
  },
  RESPONDER_ACTIVE_PRESS_START: {
    DELAY: ERROR,
    RESPONDER_GRANT: ERROR,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: RESPONDER_ACTIVE_LONG_PRESS_START
  },
  RESPONDER_ACTIVE_LONG_PRESS_START: {
    DELAY: ERROR,
    RESPONDER_GRANT: ERROR,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: RESPONDER_ACTIVE_LONG_PRESS_START
  },
  ERROR: {
    DELAY: NOT_RESPONDER,
    RESPONDER_GRANT: RESPONDER_INACTIVE_PRESS_START,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: NOT_RESPONDER
  }
});

var isActiveSignal = function isActiveSignal(signal) {
  return signal === RESPONDER_ACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_LONG_PRESS_START;
};

var isButtonRole = function isButtonRole(element) {
  return element.getAttribute('role') === 'button';
};

var isPressStartSignal = function isPressStartSignal(signal) {
  return signal === RESPONDER_INACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_LONG_PRESS_START;
};

var isTerminalSignal = function isTerminalSignal(signal) {
  return signal === RESPONDER_TERMINATED || signal === RESPONDER_RELEASE;
};

var isValidKeyPress = function isValidKeyPress(event) {
  var key = event.key,
      target = event.target;
  var role = target.getAttribute('role');
  var isSpacebar = key === ' ' || key === 'Spacebar';
  return key === 'Enter' || isSpacebar && role === 'button';
};

var DEFAULT_LONG_PRESS_DELAY_MS = 450;
var DEFAULT_PRESS_DELAY_MS = 50;

var PressResponder = function () {
  function PressResponder(config) {
    this._eventHandlers = null;
    this._isPointerTouch = false;
    this._longPressDelayTimeout = null;
    this._longPressDispatched = false;
    this._pressDelayTimeout = null;
    this._pressOutDelayTimeout = null;
    this._touchState = NOT_RESPONDER;
    this.configure(config);
  }

  var _proto = PressResponder.prototype;

  _proto.configure = function configure(config) {
    this._config = config;
  };

  _proto.reset = function reset() {
    this._cancelLongPressDelayTimeout();

    this._cancelPressDelayTimeout();

    this._cancelPressOutDelayTimeout();
  };

  _proto.getEventHandlers = function getEventHandlers() {
    if (this._eventHandlers == null) {
      this._eventHandlers = this._createEventHandlers();
    }

    return this._eventHandlers;
  };

  _proto._createEventHandlers = function _createEventHandlers() {
    var _this = this;

    var start = function start(event, shouldDelay) {
      event.persist();

      _this._cancelPressOutDelayTimeout();

      _this._longPressDispatched = false;
      _this._selectionTerminated = false;
      _this._touchState = NOT_RESPONDER;
      _this._isPointerTouch = event.nativeEvent.type === 'touchstart';

      _this._receiveSignal(RESPONDER_GRANT, event);

      var delayPressStart = normalizeDelay(_this._config.delayPressStart, 0, DEFAULT_PRESS_DELAY_MS);

      if (shouldDelay !== false && delayPressStart > 0) {
        _this._pressDelayTimeout = setTimeout(function () {
          _this._receiveSignal(DELAY, event);
        }, delayPressStart);
      } else {
        _this._receiveSignal(DELAY, event);
      }

      var delayLongPress = normalizeDelay(_this._config.delayLongPress, 10, DEFAULT_LONG_PRESS_DELAY_MS);
      _this._longPressDelayTimeout = setTimeout(function () {
        _this._handleLongPress(event);
      }, delayLongPress + delayPressStart);
    };

    var end = function end(event) {
      _this._receiveSignal(RESPONDER_RELEASE, event);
    };

    var keyupHandler = function keyupHandler(event) {
      var onPress = _this._config.onPress;
      var target = event.target;

      if (_this._touchState !== NOT_RESPONDER && isValidKeyPress(event)) {
        end(event);
        document.removeEventListener('keyup', keyupHandler);
        var role = target.getAttribute('role');
        var elementType = target.tagName.toLowerCase();
        var isNativeInteractiveElement = role === 'link' || elementType === 'a' || elementType === 'button' || elementType === 'input' || elementType === 'select' || elementType === 'textarea';

        if (onPress != null && !isNativeInteractiveElement) {
          onPress(event);
        }
      }
    };

    return {
      onStartShouldSetResponder: function onStartShouldSetResponder(event) {
        var disabled = _this._config.disabled;

        if (disabled && isButtonRole(event.currentTarget)) {
          event.stopPropagation();
        }

        if (disabled == null) {
          return true;
        }

        return !disabled;
      },
      onKeyDown: function onKeyDown(event) {
        var disabled = _this._config.disabled;
        var key = event.key,
            target = event.target;

        if (!disabled && isValidKeyPress(event)) {
          if (_this._touchState === NOT_RESPONDER) {
            start(event, false);
            document.addEventListener('keyup', keyupHandler);
          }

          var role = target.getAttribute('role');
          var isSpacebarKey = key === ' ' || key === 'Spacebar';

          var _isButtonRole = role === 'button' || role === 'menuitem';

          if (isSpacebarKey && _isButtonRole) {
            event.preventDefault();
          }

          event.stopPropagation();
        }
      },
      onResponderGrant: function onResponderGrant(event) {
        return start(event);
      },
      onResponderMove: function onResponderMove(event) {
        if (_this._config.onPressMove != null) {
          _this._config.onPressMove(event);
        }

        var touch = getTouchFromResponderEvent(event);

        if (_this._touchActivatePosition != null) {
          var deltaX = _this._touchActivatePosition.pageX - touch.pageX;
          var deltaY = _this._touchActivatePosition.pageY - touch.pageY;

          if (Math.hypot(deltaX, deltaY) > 10) {
            _this._cancelLongPressDelayTimeout();
          }
        }
      },
      onResponderRelease: function onResponderRelease(event) {
        return end(event);
      },
      onResponderTerminate: function onResponderTerminate(event) {
        if (event.nativeEvent.type === 'selectionchange') {
          _this._selectionTerminated = true;
        }

        _this._receiveSignal(RESPONDER_TERMINATED, event);
      },
      onResponderTerminationRequest: function onResponderTerminationRequest(event) {
        var _this$_config = _this._config,
            cancelable = _this$_config.cancelable,
            disabled = _this$_config.disabled,
            onLongPress = _this$_config.onLongPress;

        if (!disabled && onLongPress != null && _this._isPointerTouch && event.nativeEvent.type === 'contextmenu') {
          return false;
        }

        if (cancelable == null) {
          return true;
        }

        return cancelable;
      },
      onClick: function onClick(event) {
        var _this$_config2 = _this._config,
            disabled = _this$_config2.disabled,
            onPress = _this$_config2.onPress;

        if (!disabled) {
          event.stopPropagation();

          if (_this._longPressDispatched || _this._selectionTerminated) {
            event.preventDefault();
          } else if (onPress != null && event.altKey === false) {
            onPress(event);
          }
        } else {
          if (isButtonRole(event.currentTarget)) {
            event.stopPropagation();
          }
        }
      },
      onContextMenu: function onContextMenu(event) {
        var _this$_config3 = _this._config,
            disabled = _this$_config3.disabled,
            onLongPress = _this$_config3.onLongPress;

        if (!disabled) {
          if (onLongPress != null && _this._isPointerTouch && !event.defaultPrevented) {
            event.preventDefault();
            event.stopPropagation();
          }
        } else {
          if (isButtonRole(event.currentTarget)) {
            event.stopPropagation();
          }
        }
      }
    };
  };

  _proto._receiveSignal = function _receiveSignal(signal, event) {
    var prevState = this._touchState;
    var nextState = null;

    if (Transitions[prevState] != null) {
      nextState = Transitions[prevState][signal];
    }

    if (this._touchState === NOT_RESPONDER && signal === RESPONDER_RELEASE) {
      return;
    }

    if (nextState == null || nextState === ERROR) {
      console.error("PressResponder: Invalid signal " + signal + " for state " + prevState + " on responder");
    } else if (prevState !== nextState) {
      this._performTransitionSideEffects(prevState, nextState, signal, event);

      this._touchState = nextState;
    }
  };

  _proto._performTransitionSideEffects = function _performTransitionSideEffects(prevState, nextState, signal, event) {
    if (isTerminalSignal(signal)) {
      this._isPointerTouch = false;
      this._touchActivatePosition = null;

      this._cancelLongPressDelayTimeout();
    }

    if (isPressStartSignal(prevState) && signal === LONG_PRESS_DETECTED) {
      var onLongPress = this._config.onLongPress;

      if (onLongPress != null && event.nativeEvent.key == null) {
        onLongPress(event);
        this._longPressDispatched = true;
      }
    }

    var isPrevActive = isActiveSignal(prevState);
    var isNextActive = isActiveSignal(nextState);

    if (!isPrevActive && isNextActive) {
      this._activate(event);
    } else if (isPrevActive && !isNextActive) {
      this._deactivate(event);
    }

    if (isPressStartSignal(prevState) && signal === RESPONDER_RELEASE) {
      var _this$_config4 = this._config,
          _onLongPress = _this$_config4.onLongPress,
          onPress = _this$_config4.onPress;

      if (onPress != null) {
        var isPressCanceledByLongPress = _onLongPress != null && prevState === RESPONDER_ACTIVE_LONG_PRESS_START;

        if (!isPressCanceledByLongPress) {
          if (!isNextActive && !isPrevActive) {
            this._activate(event);

            this._deactivate(event);
          }
        }
      }
    }

    this._cancelPressDelayTimeout();
  };

  _proto._activate = function _activate(event) {
    var _this$_config5 = this._config,
        onPressChange = _this$_config5.onPressChange,
        onPressStart = _this$_config5.onPressStart;
    var touch = getTouchFromResponderEvent(event);
    this._touchActivatePosition = {
      pageX: touch.pageX,
      pageY: touch.pageY
    };

    if (onPressStart != null) {
      onPressStart(event);
    }

    if (onPressChange != null) {
      onPressChange(true);
    }
  };

  _proto._deactivate = function _deactivate(event) {
    var _this$_config6 = this._config,
        onPressChange = _this$_config6.onPressChange,
        onPressEnd = _this$_config6.onPressEnd;

    function end() {
      if (onPressEnd != null) {
        onPressEnd(event);
      }

      if (onPressChange != null) {
        onPressChange(false);
      }
    }

    var delayPressEnd = normalizeDelay(this._config.delayPressEnd);

    if (delayPressEnd > 0) {
      this._pressOutDelayTimeout = setTimeout(function () {
        end();
      }, delayPressEnd);
    } else {
      end();
    }
  };

  _proto._handleLongPress = function _handleLongPress(event) {
    if (this._touchState === RESPONDER_ACTIVE_PRESS_START || this._touchState === RESPONDER_ACTIVE_LONG_PRESS_START) {
      this._receiveSignal(LONG_PRESS_DETECTED, event);
    }
  };

  _proto._cancelLongPressDelayTimeout = function _cancelLongPressDelayTimeout() {
    if (this._longPressDelayTimeout != null) {
      clearTimeout(this._longPressDelayTimeout);
      this._longPressDelayTimeout = null;
    }
  };

  _proto._cancelPressDelayTimeout = function _cancelPressDelayTimeout() {
    if (this._pressDelayTimeout != null) {
      clearTimeout(this._pressDelayTimeout);
      this._pressDelayTimeout = null;
    }
  };

  _proto._cancelPressOutDelayTimeout = function _cancelPressOutDelayTimeout() {
    if (this._pressOutDelayTimeout != null) {
      clearTimeout(this._pressOutDelayTimeout);
      this._pressOutDelayTimeout = null;
    }
  };

  return PressResponder;
}();



function normalizeDelay(delay, min, fallback) {
  if (min === void 0) {
    min = 0;
  }

  if (fallback === void 0) {
    fallback = 0;
  }

  return Math.max(min, delay !== null && delay !== void 0 ? delay : fallback);
}

function getTouchFromResponderEvent(event) {
  var _event$nativeEvent = event.nativeEvent,
      changedTouches = _event$nativeEvent.changedTouches,
      touches = _event$nativeEvent.touches;

  if (touches != null && touches.length > 0) {
    return touches[0];
  }

  if (changedTouches != null && changedTouches.length > 0) {
    return changedTouches[0];
  }

  return event.nativeEvent;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/usePressEvents/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/usePressEvents/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePressEvents; });
/* harmony import */ var _PressResponder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PressResponder */ "./node_modules/react-native-web/dist/modules/usePressEvents/PressResponder.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




function usePressEvents(hostRef, config) {
  var pressResponderRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  if (pressResponderRef.current == null) {
    pressResponderRef.current = new _PressResponder__WEBPACK_IMPORTED_MODULE_0__["default"](config);
  }

  var pressResponder = pressResponderRef.current;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    pressResponder.configure(config);
  }, [config, pressResponder]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      pressResponder.reset();
    };
  }, [pressResponder]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(config);
  return pressResponder.getEventHandlers();
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderEventTypes.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderEventTypes.js ***!
  \**********************************************************************************************/
/*! exports provided: BLUR, CONTEXT_MENU, FOCUS_OUT, MOUSE_DOWN, MOUSE_MOVE, MOUSE_UP, MOUSE_CANCEL, TOUCH_START, TOUCH_MOVE, TOUCH_END, TOUCH_CANCEL, SCROLL, SELECT, SELECTION_CHANGE, isStartish, isMoveish, isEndish, isCancelish, isScroll, isSelectionChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLUR", function() { return BLUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_OUT", function() { return FOCUS_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_DOWN", function() { return MOUSE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_MOVE", function() { return MOUSE_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_UP", function() { return MOUSE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOUSE_CANCEL", function() { return MOUSE_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_START", function() { return TOUCH_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_MOVE", function() { return TOUCH_MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_END", function() { return TOUCH_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_CANCEL", function() { return TOUCH_CANCEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL", function() { return SCROLL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTION_CHANGE", function() { return SELECTION_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStartish", function() { return isStartish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMoveish", function() { return isMoveish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEndish", function() { return isEndish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCancelish", function() { return isCancelish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScroll", function() { return isScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectionChange", function() { return isSelectionChange; });
var BLUR = 'blur';
var CONTEXT_MENU = 'contextmenu';
var FOCUS_OUT = 'focusout';
var MOUSE_DOWN = 'mousedown';
var MOUSE_MOVE = 'mousemove';
var MOUSE_UP = 'mouseup';
var MOUSE_CANCEL = 'dragstart';
var TOUCH_START = 'touchstart';
var TOUCH_MOVE = 'touchmove';
var TOUCH_END = 'touchend';
var TOUCH_CANCEL = 'touchcancel';
var SCROLL = 'scroll';
var SELECT = 'select';
var SELECTION_CHANGE = 'selectionchange';
function isStartish(eventType) {
  return eventType === TOUCH_START || eventType === MOUSE_DOWN;
}
function isMoveish(eventType) {
  return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
}
function isEndish(eventType) {
  return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
}
function isCancelish(eventType) {
  return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
}
function isScroll(eventType) {
  return eventType === SCROLL;
}
function isSelectionChange(eventType) {
  return eventType === SELECT || eventType === SELECTION_CHANGE;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderSystem.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderSystem.js ***!
  \******************************************************************************************/
/*! exports provided: attachListeners, addNode, removeNode, terminateResponder, getResponderNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachListeners", function() { return attachListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNode", function() { return addNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "terminateResponder", function() { return terminateResponder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponderNode", function() { return getResponderNode; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "fbjs/lib/ExecutionEnvironment");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createResponderEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createResponderEvent */ "./node_modules/react-native-web/dist/modules/useResponderEvents/createResponderEvent.js");
/* harmony import */ var _ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResponderEventTypes */ "./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderEventTypes.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./node_modules/react-native-web/dist/modules/useResponderEvents/utils.js");
/* harmony import */ var _ResponderTouchHistoryStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ResponderTouchHistoryStore */ "./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore.js");





var emptyObject = {};
var startRegistration = ['onStartShouldSetResponderCapture', 'onStartShouldSetResponder', {
  bubbles: true
}];
var moveRegistration = ['onMoveShouldSetResponderCapture', 'onMoveShouldSetResponder', {
  bubbles: true
}];
var scrollRegistration = ['onScrollShouldSetResponderCapture', 'onScrollShouldSetResponder', {
  bubbles: false
}];
var shouldSetResponderEvents = {
  touchstart: startRegistration,
  mousedown: startRegistration,
  touchmove: moveRegistration,
  mousemove: moveRegistration,
  scroll: scrollRegistration
};
var emptyResponder = {
  id: null,
  idPath: null,
  node: null
};
var responderListenersMap = new Map();
var isEmulatingMouseEvents = false;
var trackedTouchCount = 0;
var currentResponder = {
  id: null,
  node: null,
  idPath: null
};

function changeCurrentResponder(responder) {
  currentResponder = responder;
}

function getResponderConfig(id) {
  var config = responderListenersMap.get(id);
  return config != null ? config : emptyObject;
}

function eventListener(domEvent) {
  var eventType = domEvent.type;
  var eventTarget = domEvent.target;

  if (eventType === 'touchstart') {
    isEmulatingMouseEvents = true;
  }

  if (eventType === 'touchmove' || trackedTouchCount > 1) {
    isEmulatingMouseEvents = false;
  }

  if (eventType === 'mousedown' && isEmulatingMouseEvents || eventType === 'mousemove' && isEmulatingMouseEvents || eventType === 'mousemove' && trackedTouchCount < 1) {
    return;
  }

  if (isEmulatingMouseEvents && eventType === 'mouseup') {
    if (trackedTouchCount === 0) {
      isEmulatingMouseEvents = false;
    }

    return;
  }

  var isStartEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isStartish"])(eventType) && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isPrimaryPointerDown"])(domEvent);
  var isMoveEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isMoveish"])(eventType);
  var isEndEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isEndish"])(eventType);
  var isScrollEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isScroll"])(eventType);
  var isSelectionChangeEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isSelectionChange"])(eventType);
  var responderEvent = Object(_createResponderEvent__WEBPACK_IMPORTED_MODULE_1__["default"])(domEvent);

  if (isStartEvent || isMoveEvent || isEndEvent) {
    if (domEvent.touches) {
      trackedTouchCount = domEvent.touches.length;
    } else {
      if (isStartEvent) {
        trackedTouchCount = 1;
      } else if (isEndEvent) {
        trackedTouchCount = 0;
      }
    }

    _ResponderTouchHistoryStore__WEBPACK_IMPORTED_MODULE_4__["default"].recordTouchTrack(eventType, responderEvent.nativeEvent);
  }

  var eventPaths = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getResponderPaths"])(domEvent);
  var wasNegotiated = false;
  var wantsResponder;

  if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
    var currentResponderIdPath = currentResponder.idPath;
    var eventIdPath = eventPaths.idPath;

    if (currentResponderIdPath != null && eventIdPath != null) {
      var lowestCommonAncestor = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getLowestCommonAncestor"])(currentResponderIdPath, eventIdPath);

      if (lowestCommonAncestor != null) {
        var indexOfLowestCommonAncestor = eventIdPath.indexOf(lowestCommonAncestor);
        var index = indexOfLowestCommonAncestor + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
        eventPaths = {
          idPath: eventIdPath.slice(index),
          nodePath: eventPaths.nodePath.slice(index)
        };
      } else {
        eventPaths = null;
      }
    }

    if (eventPaths != null) {
      wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent);

      if (wantsResponder != null) {
        attemptTransfer(responderEvent, wantsResponder);
        wasNegotiated = true;
      }
    }
  }

  if (currentResponder.id != null && currentResponder.node != null) {
    var _currentResponder = currentResponder,
        id = _currentResponder.id,
        node = _currentResponder.node;

    var _getResponderConfig = getResponderConfig(id),
        onResponderStart = _getResponderConfig.onResponderStart,
        onResponderMove = _getResponderConfig.onResponderMove,
        onResponderEnd = _getResponderConfig.onResponderEnd,
        onResponderRelease = _getResponderConfig.onResponderRelease,
        onResponderTerminate = _getResponderConfig.onResponderTerminate,
        onResponderTerminationRequest = _getResponderConfig.onResponderTerminationRequest;

    responderEvent.bubbles = false;
    responderEvent.cancelable = false;
    responderEvent.currentTarget = node;

    if (isStartEvent) {
      if (onResponderStart != null) {
        responderEvent.dispatchConfig.registrationName = 'onResponderStart';
        onResponderStart(responderEvent);
      }
    } else if (isMoveEvent) {
      if (onResponderMove != null) {
        responderEvent.dispatchConfig.registrationName = 'onResponderMove';
        onResponderMove(responderEvent);
      }
    } else {
      var isTerminateEvent = Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_2__["isCancelish"])(eventType) || eventType === 'contextmenu' || eventType === 'blur' && eventTarget === window || eventType === 'blur' && eventTarget.contains(node) && domEvent.relatedTarget !== node || isScrollEvent && trackedTouchCount === 0 || isScrollEvent && eventTarget.contains(node) && eventTarget !== node || isSelectionChangeEvent && Object(_utils__WEBPACK_IMPORTED_MODULE_3__["hasValidSelection"])(domEvent);
      var isReleaseEvent = isEndEvent && !isTerminateEvent && !Object(_utils__WEBPACK_IMPORTED_MODULE_3__["hasTargetTouches"])(node, domEvent.touches);

      if (isEndEvent) {
        if (onResponderEnd != null) {
          responderEvent.dispatchConfig.registrationName = 'onResponderEnd';
          onResponderEnd(responderEvent);
        }
      }

      if (isReleaseEvent) {
        if (onResponderRelease != null) {
          responderEvent.dispatchConfig.registrationName = 'onResponderRelease';
          onResponderRelease(responderEvent);
        }

        changeCurrentResponder(emptyResponder);
      }

      if (isTerminateEvent) {
        var shouldTerminate = true;

        if (eventType === 'contextmenu' || eventType === 'scroll' || eventType === 'selectionchange') {
          if (wasNegotiated) {
            shouldTerminate = false;
          } else if (onResponderTerminationRequest != null) {
            responderEvent.dispatchConfig.registrationName = 'onResponderTerminationRequest';

            if (onResponderTerminationRequest(responderEvent) === false) {
              shouldTerminate = false;
            }
          }
        }

        if (shouldTerminate) {
          if (onResponderTerminate != null) {
            responderEvent.dispatchConfig.registrationName = 'onResponderTerminate';
            onResponderTerminate(responderEvent);
          }

          changeCurrentResponder(emptyResponder);
          isEmulatingMouseEvents = false;
          trackedTouchCount = 0;
        }
      }
    }
  }
}

function findWantsResponder(eventPaths, domEvent, responderEvent) {
  var shouldSetCallbacks = shouldSetResponderEvents[domEvent.type];

  if (shouldSetCallbacks != null) {
    var idPath = eventPaths.idPath,
        nodePath = eventPaths.nodePath;
    var shouldSetCallbackCaptureName = shouldSetCallbacks[0];
    var shouldSetCallbackBubbleName = shouldSetCallbacks[1];
    var bubbles = shouldSetCallbacks[2].bubbles;

    var check = function check(id, node, callbackName) {
      var config = getResponderConfig(id);
      var shouldSetCallback = config[callbackName];

      if (shouldSetCallback != null) {
        responderEvent.currentTarget = node;

        if (shouldSetCallback(responderEvent) === true) {
          var prunedIdPath = idPath.slice(idPath.indexOf(id));
          return {
            id: id,
            node: node,
            idPath: prunedIdPath
          };
        }
      }
    };

    for (var i = idPath.length - 1; i >= 0; i--) {
      var id = idPath[i];
      var node = nodePath[i];
      var result = check(id, node, shouldSetCallbackCaptureName);

      if (result != null) {
        return result;
      }

      if (responderEvent.isPropagationStopped() === true) {
        return;
      }
    }

    if (bubbles) {
      for (var _i = 0; _i < idPath.length; _i++) {
        var _id = idPath[_i];
        var _node = nodePath[_i];

        var _result = check(_id, _node, shouldSetCallbackBubbleName);

        if (_result != null) {
          return _result;
        }

        if (responderEvent.isPropagationStopped() === true) {
          return;
        }
      }
    } else {
      var _id2 = idPath[0];
      var _node2 = nodePath[0];
      var target = domEvent.target;

      if (target === _node2) {
        return check(_id2, _node2, shouldSetCallbackBubbleName);
      }
    }
  }
}

function attemptTransfer(responderEvent, wantsResponder) {
  var _currentResponder2 = currentResponder,
      currentId = _currentResponder2.id,
      currentNode = _currentResponder2.node;
  var id = wantsResponder.id,
      node = wantsResponder.node;

  var _getResponderConfig2 = getResponderConfig(id),
      onResponderGrant = _getResponderConfig2.onResponderGrant,
      onResponderReject = _getResponderConfig2.onResponderReject;

  responderEvent.bubbles = false;
  responderEvent.cancelable = false;
  responderEvent.currentTarget = node;

  if (currentId == null) {
    if (onResponderGrant != null) {
      responderEvent.currentTarget = node;
      responderEvent.dispatchConfig.registrationName = 'onResponderGrant';
      onResponderGrant(responderEvent);
    }

    changeCurrentResponder(wantsResponder);
  } else {
    var _getResponderConfig3 = getResponderConfig(currentId),
        onResponderTerminate = _getResponderConfig3.onResponderTerminate,
        onResponderTerminationRequest = _getResponderConfig3.onResponderTerminationRequest;

    var allowTransfer = true;

    if (onResponderTerminationRequest != null) {
      responderEvent.currentTarget = currentNode;
      responderEvent.dispatchConfig.registrationName = 'onResponderTerminationRequest';

      if (onResponderTerminationRequest(responderEvent) === false) {
        allowTransfer = false;
      }
    }

    if (allowTransfer) {
      if (onResponderTerminate != null) {
        responderEvent.currentTarget = currentNode;
        responderEvent.dispatchConfig.registrationName = 'onResponderTerminate';
        onResponderTerminate(responderEvent);
      }

      if (onResponderGrant != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = 'onResponderGrant';
        onResponderGrant(responderEvent);
      }

      changeCurrentResponder(wantsResponder);
    } else {
      if (onResponderReject != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = 'onResponderReject';
        onResponderReject(responderEvent);
      }
    }
  }
}

var documentEventsCapturePhase = ['blur', 'scroll'];
var documentEventsBubblePhase = ['mousedown', 'mousemove', 'mouseup', 'dragstart', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'contextmenu', 'select', 'selectionchange'];
function attachListeners() {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] && window.__reactResponderSystemActive == null) {
    window.addEventListener('blur', eventListener);
    documentEventsBubblePhase.forEach(function (eventType) {
      document.addEventListener(eventType, eventListener);
    });
    documentEventsCapturePhase.forEach(function (eventType) {
      document.addEventListener(eventType, eventListener, true);
    });
    window.__reactResponderSystemActive = true;
  }
}
function addNode(id, node, config) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_3__["setResponderId"])(node, id);
  responderListenersMap.set(id, config);
}
function removeNode(id) {
  if (currentResponder.id === id) {
    terminateResponder();
  }

  if (responderListenersMap.has(id)) {
    responderListenersMap["delete"](id);
  }
}
function terminateResponder() {
  var _currentResponder3 = currentResponder,
      id = _currentResponder3.id,
      node = _currentResponder3.node;

  if (id != null && node != null) {
    var _getResponderConfig4 = getResponderConfig(id),
        onResponderTerminate = _getResponderConfig4.onResponderTerminate;

    if (onResponderTerminate != null) {
      var event = Object(_createResponderEvent__WEBPACK_IMPORTED_MODULE_1__["default"])({});
      event.currentTarget = node;
      onResponderTerminate(event);
    }

    changeCurrentResponder(emptyResponder);
  }

  isEmulatingMouseEvents = false;
  trackedTouchCount = 0;
}
function getResponderNode() {
  return currentResponder.node;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResponderEventTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponderEventTypes */ "./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderEventTypes.js");


var __DEV__ = "development" !== 'production';

var MAX_TOUCH_BANK = 20;
var touchBank = [];
var touchHistory = {
  touchBank: touchBank,
  numberActiveTouches: 0,
  indexOfSingleActiveTouch: -1,
  mostRecentTimeStamp: 0
};

function timestampForTouch(touch) {
  return touch.timeStamp || touch.timestamp;
}

function createTouchRecord(touch) {
  return {
    touchActive: true,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    startTimeStamp: timestampForTouch(touch),
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: timestampForTouch(touch),
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: timestampForTouch(touch)
  };
}

function resetTouchRecord(touchRecord, touch) {
  touchRecord.touchActive = true;
  touchRecord.startPageX = touch.pageX;
  touchRecord.startPageY = touch.pageY;
  touchRecord.startTimeStamp = timestampForTouch(touch);
  touchRecord.currentPageX = touch.pageX;
  touchRecord.currentPageY = touch.pageY;
  touchRecord.currentTimeStamp = timestampForTouch(touch);
  touchRecord.previousPageX = touch.pageX;
  touchRecord.previousPageY = touch.pageY;
  touchRecord.previousTimeStamp = timestampForTouch(touch);
}

function getTouchIdentifier(_ref) {
  var identifier = _ref.identifier;

  if (identifier == null) {
    console.error('Touch object is missing identifier.');
  }

  if (__DEV__) {
    if (identifier > MAX_TOUCH_BANK) {
      console.error('Touch identifier %s is greater than maximum supported %s which causes ' + 'performance issues backfilling array locations for all of the indices.', identifier, MAX_TOUCH_BANK);
    }
  }

  return identifier;
}

function recordTouchStart(touch) {
  var identifier = getTouchIdentifier(touch);
  var touchRecord = touchBank[identifier];

  if (touchRecord) {
    resetTouchRecord(touchRecord, touch);
  } else {
    touchBank[identifier] = createTouchRecord(touch);
  }

  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}

function recordTouchMove(touch) {
  var touchRecord = touchBank[getTouchIdentifier(touch)];

  if (touchRecord) {
    touchRecord.touchActive = true;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn('Cannot record touch move without a touch start.\n', "Touch Move: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank());
  }
}

function recordTouchEnd(touch) {
  var touchRecord = touchBank[getTouchIdentifier(touch)];

  if (touchRecord) {
    touchRecord.touchActive = false;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn('Cannot record touch end without a touch start.\n', "Touch End: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank());
  }
}

function printTouch(touch) {
  return JSON.stringify({
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    timestamp: timestampForTouch(touch)
  });
}

function printTouchBank() {
  var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));

  if (touchBank.length > MAX_TOUCH_BANK) {
    printed += ' (original size: ' + touchBank.length + ')';
  }

  return printed;
}

var ResponderTouchHistoryStore = {
  recordTouchTrack: function recordTouchTrack(topLevelType, nativeEvent) {
    if (Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_0__["isMoveish"])(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchMove);
    } else if (Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_0__["isStartish"])(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchStart);
      touchHistory.numberActiveTouches = nativeEvent.touches.length;

      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
      }
    } else if (Object(_ResponderEventTypes__WEBPACK_IMPORTED_MODULE_0__["isEndish"])(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchEnd);
      touchHistory.numberActiveTouches = nativeEvent.touches.length;

      if (touchHistory.numberActiveTouches === 1) {
        for (var i = 0; i < touchBank.length; i++) {
          var touchTrackToCheck = touchBank[i];

          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }

        if (__DEV__) {
          var activeRecord = touchBank[touchHistory.indexOfSingleActiveTouch];

          if (!(activeRecord != null && activeRecord.touchActive)) {
            console.error('Cannot find single active touch.');
          }
        }
      }
    }
  },
  touchHistory: touchHistory
};
/* harmony default export */ __webpack_exports__["default"] = (ResponderTouchHistoryStore);

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useResponderEvents/createResponderEvent.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useResponderEvents/createResponderEvent.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createResponderEvent; });
/* harmony import */ var _modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/getBoundingClientRect */ "./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js");
/* harmony import */ var _ResponderTouchHistoryStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponderTouchHistoryStore */ "./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore.js");



var emptyFunction = function emptyFunction() {};

var emptyObject = {};
var emptyArray = [];

function normalizeIdentifier(identifier) {
  return identifier > 20 ? identifier % 20 : identifier;
}

function createResponderEvent(domEvent) {
  var rect;
  var propagationWasStopped = false;
  var changedTouches;
  var touches;
  var domEventChangedTouches = domEvent.changedTouches;
  var domEventType = domEvent.type;
  var metaKey = domEvent.metaKey === true;
  var shiftKey = domEvent.shiftKey === true;
  var force = domEventChangedTouches && domEventChangedTouches[0].force || 0;
  var identifier = normalizeIdentifier(domEventChangedTouches && domEventChangedTouches[0].identifier || 0);
  var clientX = domEventChangedTouches && domEventChangedTouches[0].clientX || domEvent.clientX;
  var clientY = domEventChangedTouches && domEventChangedTouches[0].clientY || domEvent.clientY;
  var pageX = domEventChangedTouches && domEventChangedTouches[0].pageX || domEvent.pageX;
  var pageY = domEventChangedTouches && domEventChangedTouches[0].pageY || domEvent.pageY;
  var preventDefault = typeof domEvent.preventDefault === 'function' ? domEvent.preventDefault.bind(domEvent) : emptyFunction;
  var timestamp = domEvent.timeStamp;

  function normalizeTouches(touches) {
    return Array.prototype.slice.call(touches).map(function (touch) {
      return {
        force: touch.force,
        identifier: normalizeIdentifier(touch.identifier),

        get locationX() {
          return locationX(touch.clientX);
        },

        get locationY() {
          return locationY(touch.clientY);
        },

        pageX: touch.pageX,
        pageY: touch.pageY,
        target: touch.target,
        timestamp: timestamp
      };
    });
  }

  if (domEventChangedTouches != null) {
    changedTouches = normalizeTouches(domEventChangedTouches);
    touches = normalizeTouches(domEvent.touches);
  } else {
    var emulatedTouches = [{
      force: force,
      identifier: identifier,

      get locationX() {
        return locationX(clientX);
      },

      get locationY() {
        return locationY(clientY);
      },

      pageX: pageX,
      pageY: pageY,
      target: domEvent.target,
      timestamp: timestamp
    }];
    changedTouches = emulatedTouches;
    touches = domEventType === 'mouseup' || domEventType === 'dragstart' ? emptyArray : emulatedTouches;
  }

  var responderEvent = {
    bubbles: true,
    cancelable: true,
    currentTarget: null,
    defaultPrevented: domEvent.defaultPrevented,
    dispatchConfig: emptyObject,
    eventPhase: domEvent.eventPhase,
    isDefaultPrevented: function isDefaultPrevented() {
      return domEvent.defaultPrevented;
    },
    isPropagationStopped: function isPropagationStopped() {
      return propagationWasStopped;
    },
    isTrusted: domEvent.isTrusted,
    nativeEvent: {
      altKey: false,
      ctrlKey: false,
      metaKey: metaKey,
      shiftKey: shiftKey,
      changedTouches: changedTouches,
      force: force,
      identifier: identifier,

      get locationX() {
        return locationX(clientX);
      },

      get locationY() {
        return locationY(clientY);
      },

      pageX: pageX,
      pageY: pageY,
      target: domEvent.target,
      timestamp: timestamp,
      touches: touches,
      type: domEventType
    },
    persist: emptyFunction,
    preventDefault: preventDefault,
    stopPropagation: function stopPropagation() {
      propagationWasStopped = true;
    },
    target: domEvent.target,
    timeStamp: timestamp,
    touchHistory: _ResponderTouchHistoryStore__WEBPACK_IMPORTED_MODULE_1__["default"].touchHistory
  };

  function locationX(x) {
    rect = rect || Object(_modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(responderEvent.currentTarget);

    if (rect) {
      return x - rect.left;
    }
  }

  function locationY(y) {
    rect = rect || Object(_modules_getBoundingClientRect__WEBPACK_IMPORTED_MODULE_0__["default"])(responderEvent.currentTarget);

    if (rect) {
      return y - rect.top;
    }
  }

  return responderEvent;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useResponderEvents/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useResponderEvents/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useResponderEvents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponderSystem */ "./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderSystem.js");


var emptyObject = {};
var idCounter = 0;

function useStable(getInitialValue) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);

  if (ref.current == null) {
    ref.current = getInitialValue();
  }

  return ref.current;
}

function useResponderEvents(hostRef, config) {
  if (config === void 0) {
    config = emptyObject;
  }

  var id = useStable(function () {
    return idCounter++;
  });
  var isAttachedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__["attachListeners"]();
    return function () {
      _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__["removeNode"](id);
    };
  }, [id]);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    var _config = config,
        onMoveShouldSetResponder = _config.onMoveShouldSetResponder,
        onMoveShouldSetResponderCapture = _config.onMoveShouldSetResponderCapture,
        onScrollShouldSetResponder = _config.onScrollShouldSetResponder,
        onScrollShouldSetResponderCapture = _config.onScrollShouldSetResponderCapture,
        onSelectionChangeShouldSetResponder = _config.onSelectionChangeShouldSetResponder,
        onSelectionChangeShouldSetResponderCapture = _config.onSelectionChangeShouldSetResponderCapture,
        onStartShouldSetResponder = _config.onStartShouldSetResponder,
        onStartShouldSetResponderCapture = _config.onStartShouldSetResponderCapture;
    var requiresResponderSystem = onMoveShouldSetResponder != null || onMoveShouldSetResponderCapture != null || onScrollShouldSetResponder != null || onScrollShouldSetResponderCapture != null || onSelectionChangeShouldSetResponder != null || onSelectionChangeShouldSetResponderCapture != null || onStartShouldSetResponder != null || onStartShouldSetResponderCapture != null;
    var node = hostRef.current;

    if (requiresResponderSystem) {
      _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__["addNode"](id, node, config);
      isAttachedRef.current = true;
    } else if (isAttachedRef.current) {
      _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__["removeNode"](id);
      isAttachedRef.current = false;
    }
  }, [config, hostRef, id]);
  react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"]({
    isResponder: hostRef.current === _ResponderSystem__WEBPACK_IMPORTED_MODULE_1__["getResponderNode"]()
  });
  react__WEBPACK_IMPORTED_MODULE_0__["useDebugValue"](config);
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useResponderEvents/utils.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useResponderEvents/utils.js ***!
  \********************************************************************************/
/*! exports provided: setResponderId, getResponderPaths, getLowestCommonAncestor, hasTargetTouches, hasValidSelection, isPrimaryPointerDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setResponderId", function() { return setResponderId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponderPaths", function() { return getResponderPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLowestCommonAncestor", function() { return getLowestCommonAncestor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasTargetTouches", function() { return hasTargetTouches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValidSelection", function() { return hasValidSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimaryPointerDown", function() { return isPrimaryPointerDown; });
/* harmony import */ var _modules_isSelectionValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/isSelectionValid */ "./node_modules/react-native-web/dist/modules/isSelectionValid/index.js");

var keyName = '__reactResponderId';

function getEventPath(domEvent) {
  if (domEvent.type === 'selectionchange') {
    var target = window.getSelection().anchorNode;
    return composedPathFallback(target);
  } else {
    var path = domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
    return path;
  }
}

function composedPathFallback(target) {
  var path = [];

  while (target != null && target !== document.body) {
    path.push(target);
    target = target.parentNode;
  }

  return path;
}

function getResponderId(node) {
  if (node != null) {
    return node[keyName];
  }

  return null;
}

function setResponderId(node, id) {
  if (node != null) {
    node[keyName] = id;
  }
}
function getResponderPaths(domEvent) {
  var idPath = [];
  var nodePath = [];
  var eventPath = getEventPath(domEvent);

  for (var i = 0; i < eventPath.length; i++) {
    var node = eventPath[i];
    var id = getResponderId(node);

    if (id != null) {
      idPath.push(id);
      nodePath.push(node);
    }
  }

  return {
    idPath: idPath,
    nodePath: nodePath
  };
}
function getLowestCommonAncestor(pathA, pathB) {
  var pathALength = pathA.length;
  var pathBLength = pathB.length;

  if (pathALength === 0 || pathBLength === 0 || pathA[pathALength - 1] !== pathB[pathBLength - 1]) {
    return null;
  }

  var itemA = pathA[0];
  var indexA = 0;
  var itemB = pathB[0];
  var indexB = 0;

  if (pathALength - pathBLength > 0) {
    indexA = pathALength - pathBLength;
    itemA = pathA[indexA];
    pathALength = pathBLength;
  }

  if (pathBLength - pathALength > 0) {
    indexB = pathBLength - pathALength;
    itemB = pathB[indexB];
    pathBLength = pathALength;
  }

  var depth = pathALength;

  while (depth--) {
    if (itemA === itemB) {
      return itemA;
    }

    itemA = pathA[indexA++];
    itemB = pathB[indexB++];
  }

  return null;
}
function hasTargetTouches(target, touches) {
  if (!touches || touches.length === 0) {
    return false;
  }

  for (var i = 0; i < touches.length; i++) {
    var node = touches[i].target;

    if (node != null) {
      if (target.contains(node)) {
        return true;
      }
    }
  }

  return false;
}
function hasValidSelection(domEvent) {
  if (domEvent.type === 'selectionchange') {
    return Object(_modules_isSelectionValid__WEBPACK_IMPORTED_MODULE_0__["default"])();
  }

  return domEvent.type === 'select';
}
function isPrimaryPointerDown(domEvent) {
  var altKey = domEvent.altKey,
      button = domEvent.button,
      buttons = domEvent.buttons,
      ctrlKey = domEvent.ctrlKey,
      type = domEvent.type;
  var isTouch = type === 'touchstart' || type === 'touchmove';
  var isPrimaryMouseDown = type === 'mousedown' && (button === 0 || buttons === 1);
  var isPrimaryMouseMove = type === 'mousemove' && buttons === 1;
  var noModifiers = altKey === false && ctrlKey === false;

  if (isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/modules/useStable/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-native-web/dist/modules/useStable/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UNINITIALIZED = typeof Symbol === 'function' && typeof Symbol() === 'symbol' ? Symbol() : Object.freeze({});
function useStable(getInitialValue) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](UNINITIALIZED);

  if (ref.current === UNINITIALIZED) {
    ref.current = getInitialValue();
  }

  return ref.current;
}

/***/ }),

/***/ "./node_modules/react-native-web/dist/vendor/hash/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-native-web/dist/vendor/hash/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function murmurhash2_32_gc(str, seed) {
  var l = str.length,
      h = seed ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}

var hash = function hash(str) {
  return murmurhash2_32_gc(str, 1).toString(36);
};

/* harmony default export */ __webpack_exports__["default"] = (hash);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-native-web/dist/exports/StyleSheet */ "./node_modules/react-native-web/dist/exports/StyleSheet/index.js");
/* harmony import */ var react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-native-web/dist/exports/Text */ "./node_modules/react-native-web/dist/exports/Text/index.js");
/* harmony import */ var react_native_web_dist_exports_TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-native-web/dist/exports/TextInput */ "./node_modules/react-native-web/dist/exports/TextInput/index.js");
/* harmony import */ var react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-native-web/dist/exports/TouchableOpacity */ "./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js");
/* harmony import */ var react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-native-web/dist/exports/View */ "./node_modules/react-native-web/dist/exports/View/index.js");
/* harmony import */ var _utils_sse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/sse */ "./utils/sse.js");
/* harmony import */ var _utils_sse__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_utils_sse__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName="/home/andrii/Addspire/Kepp alive/test_keepalive_web/pages/index.js";var __jsx=react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;var sourceWith;var sourceWithout;var timerWith;function App(){var _this=this;var _useState=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),withChecks=_useState[0],setWithChecks=_useState[1];var _useState2=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),withoutChecks=_useState2[0],setWithoutChecks=_useState2[1];var _useState3=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),withChecksRunning=_useState3[0],setWithChecksRunning=_useState3[1];var _useState4=Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("https://quantum.sh"),url=_useState4[0],setUrl=_useState4[1];var addLog=function addLog(text,without){if(without)setWithoutChecks([{time:Date().toString(),text:text}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(withoutChecks)));else setWithChecks([{time:Date().toString(),text:text}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(withChecks)));};Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function(){if(!withChecksRunning){addLog("closed");if(timerWith)clearTimeout(timerWith);}},[withChecksRunning]);var startPoll=function startPoll(){return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function startPoll$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;if(!withChecksRunning){_context.next=4;break;}addLog("already running");return _context.abrupt("return");case 4:addLog("starting");setWithChecksRunning(true);if(sourceWith)sourceWith.close();if(timerWith)clearTimeout(timerWith);sourceWith=new _utils_sse__WEBPACK_IMPORTED_MODULE_9__["SSE"](url+"/api/document/poll",{headers:{"Content-Type":"application/json"},payload:JSON.stringify({timeOnClient:Date().toString()})});timerWith=setTimeout(function(){addLog("closed because no ping");setWithChecksRunning(false);},20000);sourceWith.addEventListener("message",function(e){var news=JSON.parse(e.data);console.log(news);switch(news.messageCode){case"ping":addLog("ping ".concat(news.time));if(timerWith)clearTimeout(timerWith);timerWith=setTimeout(function(){addLog("closed because no ping");setWithChecksRunning(false);},20000);break;}});sourceWith.addEventListener("error",function(){setWithChecksRunning(false);});sourceWith.stream();_context.next=18;break;case 15:_context.prev=15;_context.t0=_context["catch"](0);setWithChecksRunning(false);case 18:case"end":return _context.stop();}}},null,null,[[0,15]],Promise);};var sendOneReq=function sendOneReq(){var _res$data,res;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function sendOneReq$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.next=3;return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(url,"/api/utils/time")));case 3:res=_context2.sent;if(res===null||res===void 0?void 0:(_res$data=res.data)===null||_res$data===void 0?void 0:_res$data.time)addLog("time on server from one time req: ".concat(res.data.time));_context2.next=11;break;case 7:_context2.prev=7;_context2.t0=_context2["catch"](0);addLog("one time req error");console.log(_context2.t0);case 11:case"end":return _context2.stop();}}},null,null,[[0,7]],Promise);};return __jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__["default"],{style:styles.container,__self:this,__source:{fileName:_jsxFileName,lineNumber:98,columnNumber:9}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:99,columnNumber:13}},"Url:"),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{onPress:function onPress(){return setUrl("http://localhost:5000");},__self:this,__source:{fileName:_jsxFileName,lineNumber:100,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:101,columnNumber:17}},"localhost:5000")),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{onPress:function onPress(){return setUrl("https://quantum.sh");},__self:this,__source:{fileName:_jsxFileName,lineNumber:103,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:104,columnNumber:17}},"https://quantum.sh")),__jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__["default"],{style:{padding:10,margin:10,backgroundColor:"#ddd"},__self:this,__source:{fileName:_jsxFileName,lineNumber:106,columnNumber:13}},__jsx(react_native_web_dist_exports_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"],{value:url,onChangeText:setUrl,__self:this,__source:{fileName:_jsxFileName,lineNumber:107,columnNumber:17}})),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{style:{margin:10,padding:10,backgroundColor:"green",color:"white"},onPress:startPoll,__self:this,__source:{fileName:_jsxFileName,lineNumber:110,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:119,columnNumber:17}},"Start poll (checks every 20 sec)")),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{style:{margin:10,padding:10,backgroundColor:"red",color:"white"},onPress:function onPress(){return setWithChecksRunning(false);},__self:this,__source:{fileName:_jsxFileName,lineNumber:121,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:130,columnNumber:17}},"Stop poll")),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{style:{margin:10,padding:10,backgroundColor:"red",color:"white"},onPress:sendOneReq,__self:this,__source:{fileName:_jsxFileName,lineNumber:132,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:141,columnNumber:17}},"One time req")),__jsx(react_native_web_dist_exports_TouchableOpacity__WEBPACK_IMPORTED_MODULE_7__["default"],{onPress:function onPress(){return setWithChecks([]);},style:{margin:10,padding:10,backgroundColor:"grey",color:"white"},__self:this,__source:{fileName:_jsxFileName,lineNumber:143,columnNumber:13}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:152,columnNumber:17}},"Clear log")),__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:this,__source:{fileName:_jsxFileName,lineNumber:154,columnNumber:13}},"Log"),withChecks.map(function(item){return __jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__["default"],{style:{flexDirection:"row"},__self:_this,__source:{fileName:_jsxFileName,lineNumber:156,columnNumber:17}},__jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:157,columnNumber:21}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:158,columnNumber:25}},item.time)),__jsx(react_native_web_dist_exports_View__WEBPACK_IMPORTED_MODULE_8__["default"],{__self:_this,__source:{fileName:_jsxFileName,lineNumber:160,columnNumber:21}},__jsx(react_native_web_dist_exports_Text__WEBPACK_IMPORTED_MODULE_5__["default"],{style:{color:"blue"},__self:_this,__source:{fileName:_jsxFileName,lineNumber:161,columnNumber:25}},item.text)));}));}var styles=react_native_web_dist_exports_StyleSheet__WEBPACK_IMPORTED_MODULE_4__["default"].create({container:{flex:1},text:{fontSize:16}});

/***/ }),

/***/ "./utils/sse.js":
/*!**********************!*\
  !*** ./utils/sse.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SSE=function SSE(url,options){if(!(this instanceof SSE)){return new SSE(url,options);}this.INITIALIZING=-1;this.CONNECTING=0;this.OPEN=1;this.CLOSED=2;this.url=url;options=options||{};this.headers=options.headers||{};this.payload=options.payload!==undefined?options.payload:'';this.method=options.method||this.payload&&'POST'||'GET';this.withCredentials=!!options.withCredentials;this.FIELD_SEPARATOR=':';this.listeners={};this.xhr=null;this.readyState=this.INITIALIZING;this.progress=0;this.chunk='';this.addEventListener=function(type,listener){if(this.listeners[type]===undefined){this.listeners[type]=[];}if(this.listeners[type].indexOf(listener)===-1){this.listeners[type].push(listener);}};this.removeEventListener=function(type,listener){if(this.listeners[type]===undefined){return;}var filtered=[];this.listeners[type].forEach(function(element){if(element!==listener){filtered.push(element);}});if(filtered.length===0){delete this.listeners[type];}else{this.listeners[type]=filtered;}};this.dispatchEvent=function(e){if(!e){return true;}e.source=this;var onHandler='on'+e.type;if(this.hasOwnProperty(onHandler)){this[onHandler].call(this,e);if(e.defaultPrevented){return false;}}if(this.listeners[e.type]){return this.listeners[e.type].every(function(callback){callback(e);return!e.defaultPrevented;});}return true;};this._setReadyState=function(state){var event={type:'readystatechange'};event.readyState=state;this.readyState=state;this.dispatchEvent(event);};this._onStreamFailure=function(e){this.dispatchEvent({type:'error'});this.close();};this._onStreamProgress=function(e){if(!this.xhr){return;}if(this.xhr.status!==200){this._onStreamFailure(e);return;}if(this.readyState==this.CONNECTING){this.dispatchEvent({type:'open'});this._setReadyState(this.OPEN);}var data=this.xhr.responseText.substring(this.progress);this.progress+=data.length;data.split(/(\r\n|\r|\n){2}/g).forEach(function(part){if(part.trim().length===0){this.dispatchEvent(this._parseEventChunk(this.chunk.trim()));this.chunk='';}else{this.chunk+=part;}}.bind(this));};this._onStreamLoaded=function(e){this._onStreamProgress(e);this.dispatchEvent(this._parseEventChunk(this.chunk));this.chunk='';};this._parseEventChunk=function(chunk){if(!chunk||chunk.length===0){return null;}var e={id:null,retry:null,data:'',event:'message'};chunk.split(/\n|\r\n|\r/).forEach(function(line){line=line.trimRight();var index=line.indexOf(this.FIELD_SEPARATOR);if(index<=0){return;}var field=line.substring(0,index);if(!(field in e)){return;}var value=line.substring(index+1).trimLeft();if(field==='data'){e[field]+=value;}else{e[field]=value;}}.bind(this));var event={type:e.event};event.data=e.data;event.id=e.id;return event;};this._checkStreamClosed=function(){if(!this.xhr){return;}if(this.xhr.readyState===XMLHttpRequest.DONE){this._setReadyState(this.CLOSED);this.dispatchEvent({type:'close'});}};this.stream=function(){this._setReadyState(this.CONNECTING);this.xhr=new XMLHttpRequest();this.xhr.addEventListener('progress',this._onStreamProgress.bind(this));this.xhr.addEventListener('load',this._onStreamLoaded.bind(this));this.xhr.addEventListener('readystatechange',this._checkStreamClosed.bind(this));this.xhr.addEventListener('error',this._onStreamFailure.bind(this));this.xhr.addEventListener('abort',this._onStreamFailure.bind(this));this.xhr.open(this.method,this.url);for(var header in this.headers){this.xhr.setRequestHeader(header,this.headers[header]);}this.xhr.withCredentials=this.withCredentials;this.xhr.send(this.payload);};this.close=function(){if(this.readyState===this.CLOSED){return;}this.xhr.abort();this.xhr=null;this._setReadyState(this.CLOSED);};};if(true){exports.SSE=SSE;}

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrii/Addspire/Kepp alive/test_keepalive_web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "fbjs/lib/ExecutionEnvironment":
/*!************************************************!*\
  !*** external "fbjs/lib/ExecutionEnvironment" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ }),

/***/ "fbjs/lib/invariant":
/*!*************************************!*\
  !*** external "fbjs/lib/invariant" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/invariant");

/***/ }),

/***/ "fbjs/lib/warning":
/*!***********************************!*\
  !*** external "fbjs/lib/warning" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/warning");

/***/ }),

/***/ "hyphenate-style-name":
/*!***************************************!*\
  !*** external "hyphenate-style-name" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hyphenate-style-name");

/***/ }),

/***/ "inline-style-prefixer/lib/createPrefixer":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/createPrefixer" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/createPrefixer");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/backgroundClip":
/*!*******************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/backgroundClip" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/backgroundClip");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/crossFade":
/*!**************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/crossFade" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/crossFade");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/cursor":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/cursor" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/cursor");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/filter":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/filter" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/filter");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/flex":
/*!*********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/flex" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/flex");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/flexboxIE":
/*!**************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/flexboxIE" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/flexboxIE");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/flexboxOld":
/*!***************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/flexboxOld" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/flexboxOld");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/gradient":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/gradient" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/gradient");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/grid":
/*!*********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/grid" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/grid");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/imageSet":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/imageSet" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/imageSet");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/logical":
/*!************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/logical" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/logical");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/position":
/*!*************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/position" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/position");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/sizing":
/*!***********************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/sizing" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/sizing");

/***/ }),

/***/ "inline-style-prefixer/lib/plugins/transition":
/*!***************************************************************!*\
  !*** external "inline-style-prefixer/lib/plugins/transition" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inline-style-prefixer/lib/plugins/transition");

/***/ }),

/***/ "normalize-css-color":
/*!**************************************!*\
  !*** external "normalize-css-color" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("normalize-css-color");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map