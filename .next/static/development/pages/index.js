(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

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

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "./node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional = config.transitional || defaults.transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
axios.VERSION = __webpack_require__(/*! ./env/data */ "./node_modules/axios/lib/env/data.js").version;

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(/*! ./helpers/isAxiosError */ "./node_modules/axios/lib/helpers/isAxiosError.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var validator = __webpack_require__(/*! ../helpers/validator */ "./node_modules/axios/lib/helpers/validator.js");

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/buildFullPath.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/buildFullPath.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var Cancel = __webpack_require__(/*! ../cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new Cancel('canceled');
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");
var enhanceError = __webpack_require__(/*! ./core/enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/env/data.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/env/data.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "version": "0.24.0"
};

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAxiosError.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAxiosError.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/validator.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/validator.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VERSION = __webpack_require__(/*! ../env/data */ "./node_modules/axios/lib/env/data.js").version;

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/hyphenateProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-in-js-utils/lib/isPrefixedValue.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/fbjs/lib/ExecutionEnvironment.js":
/*!*******************************************************!*\
  !*** ./node_modules/fbjs/lib/ExecutionEnvironment.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
module.exports = ExecutionEnvironment;

/***/ }),

/***/ "./node_modules/fbjs/lib/emptyFunction.js":
/*!************************************************!*\
  !*** ./node_modules/fbjs/lib/emptyFunction.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);

emptyFunction.thatReturnsThis = function () {
  return this;
};

emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var validateFormat =  true ? function (format) {
  if (format === undefined) {
    throw new Error('invariant(...): Second argument must be a string.');
  }
} : undefined;
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/fbjs/lib/warning.js":
/*!******************************************!*\
  !*** ./node_modules/fbjs/lib/warning.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var emptyFunction = __webpack_require__(/*! ./emptyFunction */ "./node_modules/fbjs/lib/emptyFunction.js");
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */


function printWarning(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var argIndex = 0;
  var message = 'Warning: ' + format.replace(/%s/g, function () {
    return args[argIndex++];
  });

  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    // --- Welcome to debugging React ---
    // This error was thrown as a convenience so that you can use this stack
    // to find the callsite that caused this warning to fire.
    throw new Error(message);
  } catch (x) {}
}

var warning =  true ? function (condition, format) {
  if (format === undefined) {
    throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
  }

  if (!condition) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
      args[_key2 - 2] = arguments[_key2];
    }

    printWarning.apply(void 0, [format].concat(args));
  }
} : undefined;
module.exports = warning;

/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/createPrefixer.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/createPrefixer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__(/*! ./utils/prefixProperty */ "./node_modules/inline-style-prefixer/lib/utils/prefixProperty.js");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__(/*! ./utils/prefixValue */ "./node_modules/inline-style-prefixer/lib/utils/prefixValue.js");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__(/*! ./utils/addNewValuesOnly */ "./node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__(/*! ./utils/isObject */ "./node_modules/inline-style-prefixer/lib/utils/isObject.js");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;

  return function prefix(style) {
    for (var property in style) {
      var value = style[property];

      // handle nested objects
      if ((0, _isObject2.default)(value)) {
        style[property] = prefix(value);
        // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        }

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap);

        // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations
        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  };
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backgroundClip;

// https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility
function backgroundClip(property, value) {
  if (typeof value === 'string' && value === 'text') {
    return ['-webkit-text', 'text'];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/crossFade.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/crossFade.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#search=cross-fade
var prefixes = ['-webkit-', ''];
function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/cursor.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/cursor.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/filter.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/filter.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-filter-function
var prefixes = ['-webkit-', ''];
function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/flex.js":
/*!****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/flex.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize'
  // Full expanded syntax is flex-grow | flex-shrink | flex-basis.
};var flexShorthandMappings = {
  auto: '1 1 auto',
  inherit: 'inherit',
  initial: '0 1 auto',
  none: '0 0 auto',
  unset: 'unset'
};
var isUnitlessNumber = /^\d+(\.\d+)?$/;
var logTag = 'inline-style-prefixer.flexboxIE plugin';
function flexboxIE(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
  if (property === 'flex') {
    // For certain values we can do straight mappings based on the spec
    // for the expansions.
    if (Object.prototype.hasOwnProperty.call(flexShorthandMappings, value)) {
      style.msFlex = flexShorthandMappings[value];
      return;
    }
    // Here we have no direct mapping, so we favor looking for a
    // unitless positive number as that will be the most common use-case.
    if (isUnitlessNumber.test(value)) {
      style.msFlex = value + ' 1 0%';
      return;
    }

    if (typeof value === 'number' && value < 0) {
      // ignore negative values;
      console.warn(logTag + ': "flex: ' + value + '", negative values is not valid and will be ignored.');
      return;
    }

    if (!value.split) {
      console.warn(logTag + ': "flex: ' + value + '", value format is not detected, it will be remain as is');
      style.msFlex = value;
      return;
    }

    // The next thing we can look for is if there are multiple values.
    var flexValues = value.split(/\s/);
    // If we only have a single value that wasn't a positive unitless
    // or a pre-mapped value, then we can assume it is a unit value.
    switch (flexValues.length) {
      case 1:
        style.msFlex = '1 1 ' + value;
        return;
      case 2:
        // If we have 2 units, then we expect that the first will
        // always be a unitless number and represents flex-grow.
        // The second unit will represent flex-shrink for a unitless
        // value, or flex-basis otherwise.
        if (isUnitlessNumber.test(flexValues[1])) {
          style.msFlex = flexValues[0] + ' ' + flexValues[1] + ' 0%';
        } else {
          style.msFlex = flexValues[0] + ' 1 ' + flexValues[1];
        }
        return;
      default:
        style.msFlex = value;
    }
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }
    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }
  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/gradient.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/gradient.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixes = ['-webkit-', '-moz-', ''];

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/grid.js":
/*!****************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/grid.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = grid;
function isSimplePositionValue(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isComplexSpanValue(value) {
  return typeof value === 'string' && value.includes('/');
}

var alignmentValues = ['center', 'end', 'start', 'stretch'];

var displayValues = {
  'inline-grid': ['-ms-inline-grid', 'inline-grid'],
  grid: ['-ms-grid', 'grid']
};

var propertyConverters = {
  alignSelf: function alignSelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridRowAlign = value;
    }
  },

  gridColumn: function gridColumn(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    } else if (isComplexSpanValue(value)) {
      var _value$split = value.split('/'),
          _value$split2 = _slicedToArray(_value$split, 2),
          start = _value$split2[0],
          end = _value$split2[1];

      propertyConverters.gridColumnStart(+start, style);

      var _end$split = end.split(/ ?span /),
          _end$split2 = _slicedToArray(_end$split, 2),
          maybeSpan = _end$split2[0],
          maybeNumber = _end$split2[1];

      if (maybeSpan === '') {
        propertyConverters.gridColumnEnd(+start + +maybeNumber, style);
      } else {
        propertyConverters.gridColumnEnd(+end, style);
      }
    } else {
      propertyConverters.gridColumnStart(value, style);
    }
  },

  gridColumnEnd: function gridColumnEnd(value, style) {
    var msGridColumn = style.msGridColumn;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
      style.msGridColumnSpan = value - msGridColumn;
    }
  },

  gridColumnStart: function gridColumnStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    }
  },

  gridRow: function gridRow(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    } else if (isComplexSpanValue(value)) {
      var _value$split3 = value.split('/'),
          _value$split4 = _slicedToArray(_value$split3, 2),
          start = _value$split4[0],
          end = _value$split4[1];

      propertyConverters.gridRowStart(+start, style);

      var _end$split3 = end.split(/ ?span /),
          _end$split4 = _slicedToArray(_end$split3, 2),
          maybeSpan = _end$split4[0],
          maybeNumber = _end$split4[1];

      if (maybeSpan === '') {
        propertyConverters.gridRowEnd(+start + +maybeNumber, style);
      } else {
        propertyConverters.gridRowEnd(+end, style);
      }
    } else {
      propertyConverters.gridRowStart(value, style);
    }
  },

  gridRowEnd: function gridRowEnd(value, style) {
    var msGridRow = style.msGridRow;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
      style.msGridRowSpan = value - msGridRow;
    }
  },

  gridRowStart: function gridRowStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    }
  },

  gridTemplateColumns: function gridTemplateColumns(value, style) {
    style.msGridColumns = value;
  },

  gridTemplateRows: function gridTemplateRows(value, style) {
    style.msGridRows = value;
  },

  justifySelf: function justifySelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridColumnAlign = value;
    }
  }
};

function grid(property, value, style) {
  if (property === 'display' && value in displayValues) {
    return displayValues[value];
  }

  if (property in propertyConverters) {
    var propertyConverter = propertyConverters[property];
    propertyConverter(value, style);
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/imageSet.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/imageSet.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://caniuse.com/#feat=css-image-set
var prefixes = ['-webkit-', ''];
function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/logical.js":
/*!*******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/logical.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logical;
var alternativeProps = {
  marginBlockStart: ['WebkitMarginBefore'],
  marginBlockEnd: ['WebkitMarginAfter'],
  marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
  marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
  paddingBlockStart: ['WebkitPaddingBefore'],
  paddingBlockEnd: ['WebkitPaddingAfter'],
  paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
  paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
  borderBlockStart: ['WebkitBorderBefore'],
  borderBlockStartColor: ['WebkitBorderBeforeColor'],
  borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
  borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
  borderBlockEnd: ['WebkitBorderAfter'],
  borderBlockEndColor: ['WebkitBorderAfterColor'],
  borderBlockEndStyle: ['WebkitBorderAfterStyle'],
  borderBlockEndWidth: ['WebkitBorderAfterWidth'],
  borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
  borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
  borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
  borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
  borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
  borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
  borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
  borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
};

function logical(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    var alternativePropList = alternativeProps[property];
    for (var i = 0, len = alternativePropList.length; i < len; ++i) {
      style[alternativePropList[i]] = value;
    }
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/position.js":
/*!********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/position.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/sizing.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/sizing.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/plugins/transition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/plugins/transition.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__(/*! css-in-js-utils/lib/hyphenateProperty */ "./node_modules/css-in-js-utils/lib/hyphenateProperty.js");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__(/*! css-in-js-utils/lib/isPrefixedValue */ "./node_modules/css-in-js-utils/lib/isPrefixedValue.js");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__(/*! ../utils/capitalizeString */ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};


var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];
    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];
        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap);
    // if the property is already prefixed
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/addNewValuesOnly.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;
function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js":
/*!**************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;
function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/isObject.js":
/*!******************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/isObject.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;
function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/prefixProperty.js":
/*!************************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/prefixProperty.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__(/*! ./capitalizeString */ "./node_modules/inline-style-prefixer/lib/utils/capitalizeString.js");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);
    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];
      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }
      newStyle[styleProperty] = style[styleProperty];
    }
    return newStyle;
  }
  return style;
}

/***/ }),

/***/ "./node_modules/inline-style-prefixer/lib/utils/prefixValue.js":
/*!*********************************************************************!*\
  !*** ./node_modules/inline-style-prefixer/lib/utils/prefixValue.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;
function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData);

    // we can stop processing if a value is returned
    // as all plugin criteria are unique
    if (processedValue) {
      return processedValue;
    }
  }
}

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fandrii%2FAddspire%2FKepp%20alive%2Ftest_keepalive_web%2Fpages%2Findex.js!./":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fandrii%2FAddspire%2FKepp%20alive%2Ftest_keepalive_web%2Fpages%2Findex.js ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/normalize-css-color/index.js":
/*!***************************************************!*\
  !*** ./node_modules/normalize-css-color/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }
    return null;
  }

  // Ordered based on occurrences on Facebook codebase
  if ((match = matchers.hex6.exec(color))) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if ((match = matchers.rgb.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.rgba.exec(color))) {
    return (
        parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4]) // a
      ) >>> 0;
  }

  if ((match = matchers.hex3.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16
      ) >>> 0;
  }

  // https://drafts.csswg.org/css-color-4/#hex-notation
  if ((match = matchers.hex8.exec(color))) {
    return parseInt(match[1], 16) >>> 0;
  }

  if ((match = matchers.hex4.exec(color))) {
    return parseInt(
        match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16
      ) >>> 0;
  }

  if ((match = matchers.hsl.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        0x000000ff // a
      ) >>> 0;
  }

  if ((match = matchers.hsla.exec(color))) {
    return (
        hslToRgb(
          parse360(match[1]), // h
          parsePercentage(match[2]), // s
          parsePercentage(match[3]) // l
        ) |
        parse1(match[4]) // a
      ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);

  return (
    Math.round(r * 255) << 24 |
    Math.round(g * 255) << 16 |
    Math.round(b * 255) << 8
  );
}

// var INTEGER = '[-+]?\\d+';
var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/,
};

function parse255(str) {
  var int = parseInt(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 255) {
    return 255;
  }
  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (((int % 360) + 360) % 360) / 360;
}

function parse1(str) {
  var num = parseFloat(str);
  if (num < 0) {
    return 0;
  }
  if (num > 1) {
    return 255;
  }
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);
  if (int < 0) {
    return 0;
  }
  if (int > 100) {
    return 1;
  }
  return int / 100;
}

var names = {
  transparent: 0x00000000,

  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff,
};

function rgba(colorInt) {
  var r = Math.round(((colorInt & 0xff000000) >>> 24));
  var g = Math.round(((colorInt & 0x00ff0000) >>> 16));
  var b = Math.round(((colorInt & 0x0000ff00) >>> 8));
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a,
  };
};

normalizeColor.rgba = rgba;

module.exports = normalizeColor;


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
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
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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
};

// v8 likes predictible objects
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

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-native-web/dist/exports/I18nManager/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-native-web/dist/exports/I18nManager/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
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
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");
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
    var prop = Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_2__["default"])(property);

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
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
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
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
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
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
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
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");
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
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
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
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
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
/* harmony import */ var fbjs_lib_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/warning */ "./node_modules/fbjs/lib/warning.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! normalize-css-color */ "./node_modules/normalize-css-color/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var inline_style_prefixer_lib_createPrefixer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/lib/createPrefixer */ "./node_modules/inline-style-prefixer/lib/createPrefixer.js");
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
/* harmony import */ var inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/backgroundClip */ "./node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_backgroundClip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/crossFade */ "./node_modules/inline-style-prefixer/lib/plugins/crossFade.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_crossFade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/cursor */ "./node_modules/inline-style-prefixer/lib/plugins/cursor.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_cursor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/filter */ "./node_modules/inline-style-prefixer/lib/plugins/filter.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_filter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flex */ "./node_modules/inline-style-prefixer/lib/plugins/flex.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flex__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flexboxIE */ "./node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flexboxIE__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/flexboxOld */ "./node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_flexboxOld__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/gradient */ "./node_modules/inline-style-prefixer/lib/plugins/gradient.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/grid */ "./node_modules/inline-style-prefixer/lib/plugins/grid.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/imageSet */ "./node_modules/inline-style-prefixer/lib/plugins/imageSet.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_imageSet__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/logical */ "./node_modules/inline-style-prefixer/lib/plugins/logical.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_logical__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/position */ "./node_modules/inline-style-prefixer/lib/plugins/position.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_position__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/sizing */ "./node_modules/inline-style-prefixer/lib/plugins/sizing.js");
/* harmony import */ var inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(inline_style_prefixer_lib_plugins_sizing__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var inline_style_prefixer_lib_plugins_transition__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! inline-style-prefixer/lib/plugins/transition */ "./node_modules/inline-style-prefixer/lib/plugins/transition.js");
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
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
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
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fbjs/lib/ExecutionEnvironment */ "./node_modules/fbjs/lib/ExecutionEnvironment.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_3f8c4f0a5f1d7ebf5b8f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_3f8c4f0a5f1d7ebf5b8f */ "dll-reference dll_3f8c4f0a5f1d7ebf5b8f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ 2:
/*!***************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fandrii%2FAddspire%2FKepp%20alive%2Ftest_keepalive_web%2Fpages%2Findex.js ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2Fhome%2Fandrii%2FAddspire%2FKepp%20alive%2Ftest_keepalive_web%2Fpages%2Findex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2Fhome%2Fandrii%2FAddspire%2FKepp%20alive%2Ftest_keepalive_web%2Fpages%2Findex.js!./");


/***/ }),

/***/ "dll-reference dll_3f8c4f0a5f1d7ebf5b8f":
/*!*******************************************!*\
  !*** external "dll_3f8c4f0a5f1d7ebf5b8f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_3f8c4f0a5f1d7ebf5b8f;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map