(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/runtime/amp.js"],{

/***/ "./node_modules/next/dist/build/polyfills/unfetch.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/unfetch.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports=function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var l in s.open(n.method||"get",e,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,n,t){o.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+","+t:t}),t(a())},s.onerror=r,s.withCredentials="include"==n.credentials,n.headers)s.setRequestHeader(l,n.headers[l]);s.send(n.body||null)})};
//# sourceMappingURL=unfetch.js.map


/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill["default"];
}

var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
var assetPrefix = data.assetPrefix,
    page = data.page;
assetPrefix = assetPrefix || '';
var mostRecentHash = null;
/* eslint-disable-next-line */

var curHash = __webpack_require__.h();
var hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

function _tryApplyUpdates() {
  _tryApplyUpdates = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var res, _data, curPage, pageUpdated;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!isUpdateAvailable() || !canApplyUpdates())) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.prev = 2;
            _context.next = 5;
            return (0, _unfetch["default"])("" + hotUpdatePath + curHash + ".hot-update.json");

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            _data = _context.sent;
            curPage = page === '/' ? 'index' : page;
            pageUpdated = Object.keys(_data.c).some(function (mod) {
              return mod.indexOf("pages" + (curPage.substr(0, 1) === '/' ? curPage : "/" + curPage)) !== -1 || mod.indexOf(("pages" + (curPage.substr(0, 1) === '/' ? curPage : "/" + curPage)).replace(/\//g, '\\')) !== -1;
            });

            if (pageUpdated) {
              document.location.reload(true);
            } else {
              curHash = mostRecentHash;
            }

            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](2);
            console.error('Error occurred checking for update', _context.t0);
            document.location.reload(true);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 14]]);
  }));
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource.getEventSourceWrapper)({
  path: assetPrefix + "/_next/webpack-hmr"
}).addMessageListener(function (event) {
  if (event.data === "\uD83D\uDC93") {
    return;
  }

  try {
    var message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, function () {
  return page;
});
(0, _fouc.displayContent)();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getEventSourceWrapper = getEventSourceWrapper;
var eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    if (event.data.indexOf('action') !== -1) {
      eventCallbacks.forEach(function (cb) {
        return cb(event);
      });
    }
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: function close() {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function addMessageListener(fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function getEventSourceWrapper(options) {
  if (!options.ondemand) {
    return {
      addMessageListener: function addMessageListener(cb) {
        eventCallbacks.push(cb);
      }
    };
  }

  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below


var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function AbortController() {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behaviour, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  (0, _unfetch["default"])(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = _unfetch["default"] != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports["default"] = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.displayContent = displayContent;

function displayContent(callback) {
  // This is the fallback helper that removes Next.js' no-FOUC styles when
  // CSS mode is enabled. This only really activates if you haven't created
  // _any_ styles in your application yet.
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _unfetch = _interopRequireDefault(__webpack_require__(/*! next/dist/build/polyfills/unfetch */ "./node_modules/next/dist/build/polyfills/unfetch.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


var evtSource;
var currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  var pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  var url = assetPrefix + "/_next/webpack-hmr?page=" + currentPage;
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: url,
    timeout: 5000,
    ondemand: 1
  });
  evtSource.addMessageListener(function (event) {
    if (event.data.indexOf('{') === -1) return;

    try {
      var payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        (0, _unfetch["default"])(location.href, {
          credentials: 'same-origin'
        }).then(function (pageRes) {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


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

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

},[["./node_modules/next/dist/client/dev/amp-dev.js","static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiXSwibmFtZXMiOlsiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfdW5mZXRjaCIsIl9ldmVudFNvdXJjZVBvbHlmaWxsIiwiX2V2ZW50c291cmNlIiwiX29uRGVtYW5kRW50cmllc1V0aWxzIiwiX2ZvdWMiLCJ3aW5kb3ciLCJFdmVudFNvdXJjZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJob3QiLCJzdGF0dXMiLCJ0cnlBcHBseVVwZGF0ZXMiLCJyZXMiLCJqc29uIiwiX2RhdGEiLCJjdXJQYWdlIiwicGFnZVVwZGF0ZWQiLCJPYmplY3QiLCJrZXlzIiwiYyIsInNvbWUiLCJtb2QiLCJpbmRleE9mIiwic3Vic3RyIiwicmVwbGFjZSIsImxvY2F0aW9uIiwicmVsb2FkIiwiY29uc29sZSIsImVycm9yIiwiZ2V0RXZlbnRTb3VyY2VXcmFwcGVyIiwicGF0aCIsImFkZE1lc3NhZ2VMaXN0ZW5lciIsImV2ZW50IiwibWVzc2FnZSIsImFjdGlvbiIsImhhc2giLCJleCIsIndhcm4iLCJzZXR1cFBpbmciLCJkaXNwbGF5Q29udGVudCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZXZlbnRDYWxsYmFja3MiLCJFdmVudFNvdXJjZVdyYXBwZXIiLCJvcHRpb25zIiwic291cmNlIiwibGFzdEFjdGl2aXR5IiwiRGF0ZSIsImxpc3RlbmVycyIsInRpbWVvdXQiLCJpbml0IiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImhhbmRsZURpc2Nvbm5lY3QiLCJvbm9wZW4iLCJoYW5kbGVPbmxpbmUiLCJvbmVycm9yIiwib25tZXNzYWdlIiwiaGFuZGxlTWVzc2FnZSIsImxvZyIsImkiLCJsZW5ndGgiLCJmb3JFYWNoIiwiY2IiLCJjbGVhckludGVydmFsIiwiY2xvc2UiLCJzZXRUaW1lb3V0IiwiZm4iLCJwdXNoIiwib25kZW1hbmQiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJ1bmRlZmluZWQiLCJzaWduYWwiLCJhYm9ydCIsIlRleHREZWNvZGVyUG9seWZpbGwiLCJiaXRzTmVlZGVkIiwiY29kZVBvaW50IiwicHJvdG90eXBlIiwiZGVjb2RlIiwib2N0ZXRzIiwidmFsaWQiLCJzaGlmdCIsIm9jdGV0c0NvdW50IiwiRXJyb3IiLCJSRVBMQUNFUiIsInN0cmluZyIsIm9jdGV0IiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJlbmNvZGUiLCJzdHJlYW0iLCJrIiwiWEhSV3JhcHBlciIsInhociIsIndpdGhDcmVkZW50aWFscyIsInJlc3BvbnNlVHlwZSIsInJlYWR5U3RhdGUiLCJzdGF0dXNUZXh0IiwicmVzcG9uc2VUZXh0Iiwib25wcm9ncmVzcyIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsIl9jb250ZW50VHlwZSIsIl94aHIiLCJfc2VuZFRpbWVvdXQiLCJfYWJvcnQiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwidGhhdCIsInN0YXRlIiwic2lsZW50IiwiY2xlYXJUaW1lb3V0Iiwib25sb2FkIiwib25hYm9ydCIsIm9uU3RhcnQiLCJjb250ZW50VHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwib25Qcm9ncmVzcyIsIm9uRmluaXNoIiwib25SZWFkeVN0YXRlQ2hhbmdlIiwib25UaW1lb3V0IiwiWE1MSHR0cFJlcXVlc3QiLCJuYW1lIiwic2V0UmVxdWVzdEhlYWRlciIsInZhbHVlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2VuZCIsImVycm9yMSIsInRvTG93ZXJDYXNlIiwiY2hhckNvZGVBdCIsIkhlYWRlcnNQb2x5ZmlsbCIsImFsbCIsIm1hcCIsImNyZWF0ZSIsImFycmF5Iiwic3BsaXQiLCJsaW5lIiwicGFydHMiLCJqb2luIiwiX21hcCIsImdldCIsIlhIUlRyYW5zcG9ydCIsIm9uU3RhcnRDYWxsYmFjayIsIm9uUHJvZ3Jlc3NDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJoZWFkZXJzIiwib2Zmc2V0IiwiY2h1bmsiLCJzbGljZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIkhlYWRlcnNXcmFwcGVyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJ0aGVuIiwicmVzcG9uc2UiLCJyZWFkZXIiLCJib2R5IiwiZ2V0UmVhZGVyIiwiY2FuY2VsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsImRvbmUiLCJFdmVudFRhcmdldCIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwidHlwZSIsImxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm91bmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudCIsIk1lc3NhZ2VFdmVudCIsImxhc3RFdmVudElkIiwiQ29ubmVjdGlvbkV2ZW50IiwiV0FJVElORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwiQ0xPU0VEIiwiQUZURVJfQ1IiLCJGSUVMRF9TVEFSVCIsIkZJRUxEIiwiVkFMVUVfU1RBUlQiLCJWQUxVRSIsImNvbnRlbnRUeXBlUmVnRXhwIiwiTUlOSU1VTV9EVVJBVElPTiIsIk1BWElNVU1fRFVSQVRJT04iLCJwYXJzZUR1cmF0aW9uIiwiZGVmIiwibiIsInBhcnNlSW50IiwiY2xhbXBEdXJhdGlvbiIsIk1hdGgiLCJtaW4iLCJtYXgiLCJmaXJlIiwiZiIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJfY2xvc2UiLCJzdGFydCIsImlzRmV0Y2hTdXBwb3J0ZWQiLCJlcyIsIkJvb2xlYW4iLCJpbml0aWFsUmV0cnkiLCJoZWFydGJlYXRUaW1lb3V0IiwicmV0cnkiLCJ3YXNBY3Rpdml0eSIsInN0cmluZ2lmeSIsIkN1cnJlbnRUcmFuc3BvcnQiLCJUcmFuc3BvcnQiLCJ0cmFuc3BvcnQiLCJjYW5jZWxGdW5jdGlvbiIsImN1cnJlbnRTdGF0ZSIsImRhdGFCdWZmZXIiLCJsYXN0RXZlbnRJZEJ1ZmZlciIsImV2ZW50VHlwZUJ1ZmZlciIsInRleHRCdWZmZXIiLCJmaWVsZFN0YXJ0IiwidmFsdWVTdGFydCIsInRlc3QiLCJ0ZXh0Q2h1bmsiLCJwb3NpdGlvbiIsImZpZWxkIiwicmVxdWVzdFVSTCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RIZWFkZXJzIiwiX2RlZmF1bHQiLCJjYWxsYmFjayIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIngiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2xvc2VQaW5nIiwiY3VycmVudFBhZ2UiLCJldnRTb3VyY2UiLCJwYXRobmFtZUZuIiwicGF0aG5hbWUiLCJwYXlsb2FkIiwiaW52YWxpZCIsImhyZWYiLCJwYWdlUmVzIiwiZXJyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSw2QkFBNkIsY0FBYywyQkFBMkIsdUNBQXVDLGNBQWMsT0FBTyxpR0FBaUcsdUNBQXVDLGlCQUFpQixtREFBbUQsaUJBQWlCLCtDQUErQyxrQkFBa0IsZ0JBQWdCLFNBQVMsb0JBQW9CLFNBQVMsaUJBQWlCLDBCQUEwQixpQkFBaUIsK0JBQStCLDhEQUE4RCxpRkFBaUYsK0RBQStELFNBQVMscUdBQXFHLHFCQUFxQjtBQUNsNEI7Ozs7Ozs7Ozs7Ozs7QUNEQSw4Q0FBYTs7Ozs7O0FBQUEsSUFBSUEsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsc0lBQUQsQ0FBbEM7O0FBQW1GLElBQUlDLFFBQVEsR0FBQ0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOEZBQUQsQ0FBUixDQUFuQzs7QUFBa0YsSUFBSUUsb0JBQW9CLEdBQUNILHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDZGQUFELENBQVIsQ0FBL0M7O0FBQW9GLElBQUlHLFlBQVksR0FBQ0gsbUJBQU8sQ0FBQyxxR0FBRCxDQUF4Qjs7QUFBd0QsSUFBSUkscUJBQXFCLEdBQUNKLG1CQUFPLENBQUMsaUdBQUQsQ0FBakM7O0FBQStELElBQUlLLEtBQUssR0FBQ0wsbUJBQU8sQ0FBQywyREFBRCxDQUFqQjtBQUE0Qjs7O0FBQThCLElBQUcsQ0FBQ00sTUFBTSxDQUFDQyxXQUFYLEVBQXVCO0FBQUNELFFBQU0sQ0FBQ0MsV0FBUCxHQUFtQkwsb0JBQW9CLFdBQXZDO0FBQWlEOztBQUFBLElBQUlNLElBQUksR0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixFQUF5Q0MsV0FBcEQsQ0FBVDtBQUEwRSxJQUFJQyxXQUFKLEdBQXNCTixJQUF0QixDQUFJTSxXQUFKO0FBQUEsSUFBZ0JDLElBQWhCLEdBQXNCUCxJQUF0QixDQUFnQk8sSUFBaEI7QUFBMkJELFdBQVcsR0FBQ0EsV0FBVyxJQUFFLEVBQXpCO0FBQTRCLElBQUlFLGNBQWMsR0FBQyxJQUFuQjtBQUF3Qjs7QUFBOEIsSUFBSUMsT0FBTyxHQUFDQyx1QkFBWjtBQUE2QixJQUFJQyxhQUFhLEdBQUNMLFdBQVcsSUFBRUEsV0FBVyxDQUFDTSxRQUFaLENBQXFCLEdBQXJCLElBQTBCLEVBQTFCLEdBQTZCLEdBQS9CLENBQVgsR0FBK0MsdUJBQWpFLEMsQ0FBeUY7O0FBQzd5QixTQUFTQyxpQkFBVCxHQUE0QjtBQUFDO0FBQzdCOztBQUNBO0FBQThCLFNBQU9MLGNBQWMsS0FBR0UsdUJBQXhCO0FBQTBDLEMsQ0FBQTs7O0FBQ3hFLFNBQVNJLGVBQVQsR0FBMEI7QUFBQyxTQUFPQyxNQUFNLENBQUNDLEdBQVAsQ0FBV0MsTUFBWCxPQUFzQixNQUE3QjtBQUFxQyxDLENBQUE7QUFDaEU7OztTQUNlQyxlOzs7Ozs4RUFBZjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQW9DLENBQUNMLGlCQUFpQixFQUFsQixJQUFzQixDQUFDQyxlQUFlLEVBQTFFO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF1RyxDQUFDLEdBQUVyQixRQUFRLFdBQVgsRUFBcUIsS0FBR2tCLGFBQUgsR0FBaUJGLE9BQWpCLEdBQXlCLGtCQUE5QyxDQUF2Rzs7QUFBQTtBQUE4RlUsZUFBOUY7QUFBQTtBQUFBLG1CQUF5TEEsR0FBRyxDQUFDQyxJQUFKLEVBQXpMOztBQUFBO0FBQTZLQyxpQkFBN0s7QUFBd01DLG1CQUF4TSxHQUFnTmYsSUFBSSxLQUFHLEdBQVAsR0FBVyxPQUFYLEdBQW1CQSxJQUFuTztBQUE0T2dCLHVCQUE1TyxHQUF3UEMsTUFBTSxDQUFDQyxJQUFQLENBQVlKLEtBQUssQ0FBQ0ssQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCLFVBQUFDLEdBQUcsRUFBRTtBQUFDLHFCQUFPQSxHQUFHLENBQUNDLE9BQUosQ0FBWSxXQUFTUCxPQUFPLENBQUNRLE1BQVIsQ0FBZSxDQUFmLEVBQWlCLENBQWpCLE1BQXNCLEdBQXRCLEdBQTBCUixPQUExQixHQUFrQyxNQUFJQSxPQUEvQyxDQUFaLE1BQXVFLENBQUMsQ0FBeEUsSUFBMkVNLEdBQUcsQ0FBQ0MsT0FBSixDQUFZLENBQUMsV0FBU1AsT0FBTyxDQUFDUSxNQUFSLENBQWUsQ0FBZixFQUFpQixDQUFqQixNQUFzQixHQUF0QixHQUEwQlIsT0FBMUIsR0FBa0MsTUFBSUEsT0FBL0MsQ0FBRCxFQUEwRFMsT0FBMUQsQ0FBa0UsS0FBbEUsRUFBd0UsSUFBeEUsQ0FBWixNQUE2RixDQUFDLENBQWhMO0FBQW1MLGFBQW5OLENBQXhQOztBQUE2YyxnQkFBR1IsV0FBSCxFQUFlO0FBQUNwQixzQkFBUSxDQUFDNkIsUUFBVCxDQUFrQkMsTUFBbEIsQ0FBeUIsSUFBekI7QUFBZ0MsYUFBaEQsTUFBb0Q7QUFBQ3hCLHFCQUFPLEdBQUNELGNBQVI7QUFBd0I7O0FBQTFoQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFzaUIwQixtQkFBTyxDQUFDQyxLQUFSLENBQWMsb0NBQWQ7QUFBd0RoQyxvQkFBUSxDQUFDNkIsUUFBVCxDQUFrQkMsTUFBbEIsQ0FBeUIsSUFBekI7O0FBQTlsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBQStuQixDQUFDLEdBQUV0QyxZQUFZLENBQUN5QyxxQkFBaEIsRUFBdUM7QUFBQ0MsTUFBSSxFQUFDL0IsV0FBVyxHQUFDO0FBQWxCLENBQXZDLEVBQWdGZ0Msa0JBQWhGLENBQW1HLFVBQUFDLEtBQUssRUFBRTtBQUFDLE1BQUdBLEtBQUssQ0FBQ3ZDLElBQU4sS0FBYSxjQUFoQixFQUErQjtBQUFDO0FBQVE7O0FBQUEsTUFBRztBQUFDLFFBQUl3QyxPQUFPLEdBQUN2QyxJQUFJLENBQUNDLEtBQUwsQ0FBV3FDLEtBQUssQ0FBQ3ZDLElBQWpCLENBQVo7O0FBQW1DLFFBQUd3QyxPQUFPLENBQUNDLE1BQVIsS0FBaUIsTUFBakIsSUFBeUJELE9BQU8sQ0FBQ0MsTUFBUixLQUFpQixPQUE3QyxFQUFxRDtBQUFDLFVBQUcsQ0FBQ0QsT0FBTyxDQUFDRSxJQUFaLEVBQWlCO0FBQUM7QUFBUTs7QUFBQWxDLG9CQUFjLEdBQUNnQyxPQUFPLENBQUNFLElBQXZCO0FBQTRCeEIscUJBQWU7QUFBSSxLQUEvSCxNQUFvSSxJQUFHc0IsT0FBTyxDQUFDQyxNQUFSLEtBQWlCLFlBQXBCLEVBQWlDO0FBQUN0QyxjQUFRLENBQUM2QixRQUFULENBQWtCQyxNQUFsQixDQUF5QixJQUF6QjtBQUFnQztBQUFDLEdBQTlPLENBQThPLE9BQU1VLEVBQU4sRUFBUztBQUFDVCxXQUFPLENBQUNVLElBQVIsQ0FBYSwwQkFBd0JMLEtBQUssQ0FBQ3ZDLElBQTlCLEdBQW1DLElBQW5DLEdBQXdDMkMsRUFBckQ7QUFBMEQ7QUFBQyxDQUF0YztBQUF3YyxDQUFDLEdBQUUvQyxxQkFBcUIsQ0FBQ2lELFNBQXpCLEVBQW9DdkMsV0FBcEMsRUFBZ0Q7QUFBQSxTQUFJQyxJQUFKO0FBQUEsQ0FBaEQ7QUFBMEQsQ0FBQyxHQUFFVixLQUFLLENBQUNpRCxjQUFUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOam9DLDhDQUFhOztBQUFBQyxPQUFPLENBQUNDLFVBQVIsR0FBbUIsSUFBbkI7QUFBd0JELE9BQU8sQ0FBQ1gscUJBQVIsR0FBOEJBLHFCQUE5QjtBQUFvRCxJQUFJYSxjQUFjLEdBQUMsRUFBbkI7O0FBQXNCLFNBQVNDLGtCQUFULENBQTRCQyxPQUE1QixFQUFvQztBQUFDLE1BQUlDLE1BQUo7QUFBVyxNQUFJQyxZQUFZLEdBQUMsSUFBSUMsSUFBSixFQUFqQjtBQUE0QixNQUFJQyxTQUFTLEdBQUMsRUFBZDs7QUFBaUIsTUFBRyxDQUFDSixPQUFPLENBQUNLLE9BQVosRUFBb0I7QUFBQ0wsV0FBTyxDQUFDSyxPQUFSLEdBQWdCLEtBQUcsSUFBbkI7QUFBeUI7O0FBQUFDLE1BQUk7QUFBRyxNQUFJQyxLQUFLLEdBQUNDLFdBQVcsQ0FBQyxZQUFVO0FBQUMsUUFBRyxJQUFJTCxJQUFKLEtBQVdELFlBQVgsR0FBd0JGLE9BQU8sQ0FBQ0ssT0FBbkMsRUFBMkM7QUFBQ0ksc0JBQWdCO0FBQUk7QUFBQyxHQUE3RSxFQUE4RVQsT0FBTyxDQUFDSyxPQUFSLEdBQWdCLENBQTlGLENBQXJCOztBQUFzSCxXQUFTQyxJQUFULEdBQWU7QUFBQ0wsVUFBTSxHQUFDLElBQUl0RCxNQUFNLENBQUNDLFdBQVgsQ0FBdUJvRCxPQUFPLENBQUNkLElBQS9CLENBQVA7QUFBNENlLFVBQU0sQ0FBQ1MsTUFBUCxHQUFjQyxZQUFkO0FBQTJCVixVQUFNLENBQUNXLE9BQVAsR0FBZUgsZ0JBQWY7QUFBZ0NSLFVBQU0sQ0FBQ1ksU0FBUCxHQUFpQkMsYUFBakI7QUFBZ0M7O0FBQUEsV0FBU0gsWUFBVCxHQUF1QjtBQUFDLFFBQUdYLE9BQU8sQ0FBQ2UsR0FBWCxFQUFlaEMsT0FBTyxDQUFDZ0MsR0FBUixDQUFZLGlCQUFaO0FBQStCYixnQkFBWSxHQUFDLElBQUlDLElBQUosRUFBYjtBQUF5Qjs7QUFBQSxXQUFTVyxhQUFULENBQXVCMUIsS0FBdkIsRUFBNkI7QUFBQ2MsZ0JBQVksR0FBQyxJQUFJQyxJQUFKLEVBQWI7O0FBQXdCLFNBQUksSUFBSWEsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDWixTQUFTLENBQUNhLE1BQXhCLEVBQStCRCxDQUFDLEVBQWhDLEVBQW1DO0FBQUNaLGVBQVMsQ0FBQ1ksQ0FBRCxDQUFULENBQWE1QixLQUFiO0FBQXFCOztBQUFBLFFBQUdBLEtBQUssQ0FBQ3ZDLElBQU4sQ0FBVzZCLE9BQVgsQ0FBbUIsUUFBbkIsTUFBK0IsQ0FBQyxDQUFuQyxFQUFxQztBQUFDb0Isb0JBQWMsQ0FBQ29CLE9BQWYsQ0FBdUIsVUFBQUMsRUFBRTtBQUFBLGVBQUVBLEVBQUUsQ0FBQy9CLEtBQUQsQ0FBSjtBQUFBLE9BQXpCO0FBQXVDO0FBQUM7O0FBQUEsV0FBU3FCLGdCQUFULEdBQTJCO0FBQUNXLGlCQUFhLENBQUNiLEtBQUQsQ0FBYjtBQUFxQk4sVUFBTSxDQUFDb0IsS0FBUDtBQUFlQyxjQUFVLENBQUNoQixJQUFELEVBQU1OLE9BQU8sQ0FBQ0ssT0FBZCxDQUFWO0FBQWtDOztBQUFBLFNBQU07QUFBQ2dCLFNBQUssRUFBQyxpQkFBSTtBQUFDRCxtQkFBYSxDQUFDYixLQUFELENBQWI7QUFBcUJOLFlBQU0sQ0FBQ29CLEtBQVA7QUFBZ0IsS0FBakQ7QUFBa0RsQyxzQkFBa0IsRUFBQyxTQUFTQSxrQkFBVCxDQUE0Qm9DLEVBQTVCLEVBQStCO0FBQUNuQixlQUFTLENBQUNvQixJQUFWLENBQWVELEVBQWY7QUFBb0I7QUFBekgsR0FBTjtBQUFrSTs7S0FBdDVCeEIsa0I7O0FBQXM1QixTQUFTZCxxQkFBVCxDQUErQmUsT0FBL0IsRUFBdUM7QUFBQyxNQUFHLENBQUNBLE9BQU8sQ0FBQ3lCLFFBQVosRUFBcUI7QUFBQyxXQUFNO0FBQUN0Qyx3QkFBa0IsRUFBQyw0QkFBQWdDLEVBQUUsRUFBRTtBQUFDckIsc0JBQWMsQ0FBQzBCLElBQWYsQ0FBb0JMLEVBQXBCO0FBQXlCO0FBQWxELEtBQU47QUFBMkQ7O0FBQUEsU0FBT3BCLGtCQUFrQixDQUFDQyxPQUFELENBQXpCO0FBQW9DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTNxQyw4Q0FBYTs7QUFBQSxJQUFJNUQsc0JBQXNCLEdBQUNDLG1CQUFPLENBQUMsc0lBQUQsQ0FBbEM7O0FBQW1GdUQsT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLFdBQVAsR0FBZ0IsS0FBSyxDQUFyQjs7QUFBdUIsSUFBSXRELFFBQVEsR0FBQ0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsOEZBQUQsQ0FBUixDQUFuQztBQUFrRjtBQUFxQjtBQUN0UDtBQUNBOzs7QUFDQSxJQUFJVyxRQUFRLEdBQUNMLE1BQU0sQ0FBQ0ssUUFBcEI7QUFBNkIsSUFBSTBFLFFBQVEsR0FBQy9FLE1BQU0sQ0FBQytFLFFBQXBCO0FBQTZCLElBQUlDLFdBQVcsR0FBQ2hGLE1BQU0sQ0FBQ2dGLFdBQXZCO0FBQW1DLElBQUlDLFdBQVcsR0FBQ2pGLE1BQU0sQ0FBQ2lGLFdBQXZCO0FBQW1DLElBQUlDLGVBQWUsR0FBQ2xGLE1BQU0sQ0FBQ2tGLGVBQTNCOztBQUEyQyxJQUFHQSxlQUFlLElBQUVDLFNBQXBCLEVBQThCO0FBQUNELGlCQUFlLEdBQUMsU0FBU0EsZUFBVCxHQUEwQjtBQUFDLFNBQUtFLE1BQUwsR0FBWSxJQUFaOztBQUFpQixTQUFLQyxLQUFMLEdBQVcsWUFBVSxDQUFFLENBQXZCO0FBQXlCLEdBQXJGO0FBQXVGOztBQUFBLFNBQVNDLG1CQUFULEdBQThCO0FBQUMsT0FBS0MsVUFBTCxHQUFnQixDQUFoQjtBQUFrQixPQUFLQyxTQUFMLEdBQWUsQ0FBZjtBQUFrQjs7S0FBMURGLG1COztBQUEwREEsbUJBQW1CLENBQUNHLFNBQXBCLENBQThCQyxNQUE5QixHQUFxQyxVQUFTQyxNQUFULEVBQWdCO0FBQUMsV0FBU0MsS0FBVCxDQUFlSixTQUFmLEVBQXlCSyxLQUF6QixFQUErQkMsV0FBL0IsRUFBMkM7QUFBQyxRQUFHQSxXQUFXLEtBQUcsQ0FBakIsRUFBbUI7QUFBQyxhQUFPTixTQUFTLElBQUUsVUFBUUssS0FBbkIsSUFBMEJMLFNBQVMsSUFBRUssS0FBWCxJQUFrQixNQUFuRDtBQUEyRDs7QUFBQSxRQUFHQyxXQUFXLEtBQUcsQ0FBakIsRUFBbUI7QUFBQyxhQUFPTixTQUFTLElBQUUsVUFBUUssS0FBbkIsSUFBMEJMLFNBQVMsSUFBRUssS0FBWCxJQUFrQixNQUE1QyxJQUFvREwsU0FBUyxJQUFFLFVBQVFLLEtBQW5CLElBQTBCTCxTQUFTLElBQUVLLEtBQVgsSUFBa0IsTUFBdkc7QUFBK0c7O0FBQUEsUUFBR0MsV0FBVyxLQUFHLENBQWpCLEVBQW1CO0FBQUMsYUFBT04sU0FBUyxJQUFFLFlBQVVLLEtBQXJCLElBQTRCTCxTQUFTLElBQUVLLEtBQVgsSUFBa0IsUUFBckQ7QUFBK0Q7O0FBQUEsVUFBTSxJQUFJRSxLQUFKLEVBQU47QUFBbUI7O0FBQUEsV0FBU0QsV0FBVCxDQUFxQlAsVUFBckIsRUFBZ0NDLFNBQWhDLEVBQTBDO0FBQUMsUUFBR0QsVUFBVSxLQUFHLElBQUUsQ0FBbEIsRUFBb0I7QUFBQyxhQUFPQyxTQUFTLElBQUUsQ0FBWCxHQUFhLEVBQWIsR0FBZ0IsQ0FBaEIsR0FBa0JBLFNBQVMsR0FBQyxFQUFWLEdBQWEsQ0FBYixHQUFlLENBQXhDO0FBQTJDOztBQUFBLFFBQUdELFVBQVUsS0FBRyxJQUFFLENBQWxCLEVBQW9CO0FBQUMsYUFBT0MsU0FBUyxHQUFDLEVBQVYsR0FBYSxDQUFiLEdBQWUsQ0FBdEI7QUFBeUI7O0FBQUEsUUFBR0QsVUFBVSxLQUFHLElBQUUsQ0FBbEIsRUFBb0I7QUFBQyxhQUFPLENBQVA7QUFBVTs7QUFBQSxVQUFNLElBQUlRLEtBQUosRUFBTjtBQUFtQjs7QUFBQSxNQUFJQyxRQUFRLEdBQUMsTUFBYjtBQUFvQixNQUFJQyxNQUFNLEdBQUMsRUFBWDtBQUFjLE1BQUlWLFVBQVUsR0FBQyxLQUFLQSxVQUFwQjtBQUErQixNQUFJQyxTQUFTLEdBQUMsS0FBS0EsU0FBbkI7O0FBQTZCLE9BQUksSUFBSW5CLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ3NCLE1BQU0sQ0FBQ3JCLE1BQXJCLEVBQTRCRCxDQUFDLElBQUUsQ0FBL0IsRUFBaUM7QUFBQyxRQUFJNkIsS0FBSyxHQUFDUCxNQUFNLENBQUN0QixDQUFELENBQWhCOztBQUFvQixRQUFHa0IsVUFBVSxLQUFHLENBQWhCLEVBQWtCO0FBQUMsVUFBR1csS0FBSyxHQUFDLEdBQU4sSUFBV0EsS0FBSyxHQUFDLEdBQWpCLElBQXNCLENBQUNOLEtBQUssQ0FBQ0osU0FBUyxJQUFFLENBQVgsR0FBYVUsS0FBSyxHQUFDLEVBQXBCLEVBQXVCWCxVQUFVLEdBQUMsQ0FBbEMsRUFBb0NPLFdBQVcsQ0FBQ1AsVUFBRCxFQUFZQyxTQUFaLENBQS9DLENBQS9CLEVBQXNHO0FBQUNELGtCQUFVLEdBQUMsQ0FBWDtBQUFhQyxpQkFBUyxHQUFDUSxRQUFWO0FBQW1CQyxjQUFNLElBQUVFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQlosU0FBcEIsQ0FBUjtBQUF3QztBQUFDOztBQUFBLFFBQUdELFVBQVUsS0FBRyxDQUFoQixFQUFrQjtBQUFDLFVBQUdXLEtBQUssSUFBRSxDQUFQLElBQVVBLEtBQUssSUFBRSxHQUFwQixFQUF3QjtBQUFDWCxrQkFBVSxHQUFDLENBQVg7QUFBYUMsaUJBQVMsR0FBQ1UsS0FBVjtBQUFpQixPQUF2RCxNQUE0RCxJQUFHQSxLQUFLLElBQUUsR0FBUCxJQUFZQSxLQUFLLElBQUUsR0FBdEIsRUFBMEI7QUFBQ1gsa0JBQVUsR0FBQyxJQUFFLENBQWI7QUFBZUMsaUJBQVMsR0FBQ1UsS0FBSyxHQUFDLEVBQWhCO0FBQW9CLE9BQTlELE1BQW1FLElBQUdBLEtBQUssSUFBRSxHQUFQLElBQVlBLEtBQUssSUFBRSxHQUF0QixFQUEwQjtBQUFDWCxrQkFBVSxHQUFDLElBQUUsQ0FBYjtBQUFlQyxpQkFBUyxHQUFDVSxLQUFLLEdBQUMsRUFBaEI7QUFBb0IsT0FBOUQsTUFBbUUsSUFBR0EsS0FBSyxJQUFFLEdBQVAsSUFBWUEsS0FBSyxJQUFFLEdBQXRCLEVBQTBCO0FBQUNYLGtCQUFVLEdBQUMsSUFBRSxDQUFiO0FBQWVDLGlCQUFTLEdBQUNVLEtBQUssR0FBQyxDQUFoQjtBQUFtQixPQUE3RCxNQUFpRTtBQUFDWCxrQkFBVSxHQUFDLENBQVg7QUFBYUMsaUJBQVMsR0FBQ1EsUUFBVjtBQUFvQjs7QUFBQSxVQUFHVCxVQUFVLEtBQUcsQ0FBYixJQUFnQixDQUFDSyxLQUFLLENBQUNKLFNBQUQsRUFBV0QsVUFBWCxFQUFzQk8sV0FBVyxDQUFDUCxVQUFELEVBQVlDLFNBQVosQ0FBakMsQ0FBekIsRUFBa0Y7QUFBQ0Qsa0JBQVUsR0FBQyxDQUFYO0FBQWFDLGlCQUFTLEdBQUNRLFFBQVY7QUFBb0I7QUFBQyxLQUE3YSxNQUFpYjtBQUFDVCxnQkFBVSxJQUFFLENBQVo7QUFBY0MsZUFBUyxHQUFDQSxTQUFTLElBQUUsQ0FBWCxHQUFhVSxLQUFLLEdBQUMsRUFBN0I7QUFBaUM7O0FBQUEsUUFBR1gsVUFBVSxLQUFHLENBQWhCLEVBQWtCO0FBQUMsVUFBR0MsU0FBUyxJQUFFLE1BQWQsRUFBcUI7QUFBQ1MsY0FBTSxJQUFFRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JaLFNBQXBCLENBQVI7QUFBd0MsT0FBOUQsTUFBa0U7QUFBQ1MsY0FBTSxJQUFFRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsVUFBUVosU0FBUyxHQUFDLE1BQVYsR0FBaUIsQ0FBakIsSUFBb0IsRUFBNUIsQ0FBcEIsQ0FBUjtBQUE2RFMsY0FBTSxJQUFFRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsVUFBUVosU0FBUyxHQUFDLE1BQVYsR0FBaUIsQ0FBakIsR0FBbUIsS0FBM0IsQ0FBcEIsQ0FBUjtBQUFnRTtBQUFDO0FBQUM7O0FBQUEsT0FBS0QsVUFBTCxHQUFnQkEsVUFBaEI7QUFBMkIsT0FBS0MsU0FBTCxHQUFlQSxTQUFmO0FBQXlCLFNBQU9TLE1BQVA7QUFBZSxDQUFyckQsQyxDQUFzckQ7OztBQUMxaEUsSUFBSUksb0JBQW9CLEdBQUMsU0FBU0Esb0JBQVQsR0FBK0I7QUFBQyxNQUFHO0FBQUMsV0FBTyxJQUFJckIsV0FBSixHQUFrQlUsTUFBbEIsQ0FBeUIsSUFBSVQsV0FBSixHQUFrQnFCLE1BQWxCLENBQXlCLE1BQXpCLENBQXpCLEVBQTBEO0FBQUNDLFlBQU0sRUFBQztBQUFSLEtBQTFELE1BQTJFLE1BQWxGO0FBQTBGLEdBQTlGLENBQThGLE9BQU1sRSxLQUFOLEVBQVk7QUFBQ0QsV0FBTyxDQUFDZ0MsR0FBUixDQUFZL0IsS0FBWjtBQUFvQjs7QUFBQSxTQUFPLEtBQVA7QUFBYyxDQUF0TSxDLENBQXVNOzs7QUFDdk0sSUFBRzJDLFdBQVcsSUFBRUcsU0FBYixJQUF3QkYsV0FBVyxJQUFFRSxTQUFyQyxJQUFnRCxDQUFDa0Isb0JBQW9CLEVBQXhFLEVBQTJFO0FBQUNyQixhQUFXLEdBQUNNLG1CQUFaO0FBQWlDOztBQUFBLElBQUlrQixDQUFDLEdBQUMsU0FBU0EsQ0FBVCxHQUFZLENBQUUsQ0FBcEI7O0FBQXFCLFNBQVNDLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXdCO0FBQUMsT0FBS0MsZUFBTCxHQUFxQixLQUFyQjtBQUEyQixPQUFLQyxZQUFMLEdBQWtCLEVBQWxCO0FBQXFCLE9BQUtDLFVBQUwsR0FBZ0IsQ0FBaEI7QUFBa0IsT0FBSzFGLE1BQUwsR0FBWSxDQUFaO0FBQWMsT0FBSzJGLFVBQUwsR0FBZ0IsRUFBaEI7QUFBbUIsT0FBS0MsWUFBTCxHQUFrQixFQUFsQjtBQUFxQixPQUFLQyxVQUFMLEdBQWdCUixDQUFoQjtBQUFrQixPQUFLUyxrQkFBTCxHQUF3QlQsQ0FBeEI7QUFBMEIsT0FBS1UsWUFBTCxHQUFrQixFQUFsQjtBQUFxQixPQUFLQyxJQUFMLEdBQVVULEdBQVY7QUFBYyxPQUFLVSxZQUFMLEdBQWtCLENBQWxCO0FBQW9CLE9BQUtDLE1BQUwsR0FBWWIsQ0FBWjtBQUFlOztNQUExUEMsVTs7QUFBMFBBLFVBQVUsQ0FBQ2hCLFNBQVgsQ0FBcUI2QixJQUFyQixHQUEwQixVQUFTQyxNQUFULEVBQWdCQyxHQUFoQixFQUFvQjtBQUFDLE9BQUtILE1BQUwsQ0FBWSxJQUFaOztBQUFrQixNQUFJSSxJQUFJLEdBQUMsSUFBVDtBQUFjLE1BQUlmLEdBQUcsR0FBQyxLQUFLUyxJQUFiO0FBQWtCLE1BQUlPLEtBQUssR0FBQyxDQUFWO0FBQVksTUFBSWhFLE9BQU8sR0FBQyxDQUFaOztBQUFjLE9BQUsyRCxNQUFMLEdBQVksVUFBU00sTUFBVCxFQUFnQjtBQUFDLFFBQUdGLElBQUksQ0FBQ0wsWUFBTCxLQUFvQixDQUF2QixFQUF5QjtBQUFDUSxrQkFBWSxDQUFDSCxJQUFJLENBQUNMLFlBQU4sQ0FBWjtBQUFnQ0ssVUFBSSxDQUFDTCxZQUFMLEdBQWtCLENBQWxCO0FBQXFCOztBQUFBLFFBQUdNLEtBQUssS0FBRyxDQUFSLElBQVdBLEtBQUssS0FBRyxDQUFuQixJQUFzQkEsS0FBSyxLQUFHLENBQWpDLEVBQW1DO0FBQUNBLFdBQUssR0FBQyxDQUFOO0FBQVFoQixTQUFHLENBQUNtQixNQUFKLEdBQVdyQixDQUFYO0FBQWFFLFNBQUcsQ0FBQ3pDLE9BQUosR0FBWXVDLENBQVo7QUFBY0UsU0FBRyxDQUFDb0IsT0FBSixHQUFZdEIsQ0FBWjtBQUFjRSxTQUFHLENBQUNNLFVBQUosR0FBZVIsQ0FBZjtBQUFpQkUsU0FBRyxDQUFDTyxrQkFBSixHQUF1QlQsQ0FBdkIsQ0FBbkUsQ0FBNEY7QUFDM3VCOztBQUNBRSxTQUFHLENBQUNyQixLQUFKOztBQUFZLFVBQUczQixPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUNrRSxvQkFBWSxDQUFDbEUsT0FBRCxDQUFaO0FBQXNCQSxlQUFPLEdBQUMsQ0FBUjtBQUFXOztBQUFBLFVBQUcsQ0FBQ2lFLE1BQUosRUFBVztBQUFDRixZQUFJLENBQUNaLFVBQUwsR0FBZ0IsQ0FBaEI7QUFBa0JZLFlBQUksQ0FBQ1Isa0JBQUw7QUFBMkI7QUFBQzs7QUFBQVMsU0FBSyxHQUFDLENBQU47QUFBUyxHQUZnWTs7QUFFL1gsTUFBSUssT0FBTyxHQUFDLFNBQVNBLE9BQVQsR0FBa0I7QUFBQyxRQUFHTCxLQUFLLEtBQUcsQ0FBWCxFQUFhO0FBQUM7QUFDOUssVUFBSXZHLE1BQU0sR0FBQyxDQUFYO0FBQWEsVUFBSTJGLFVBQVUsR0FBQyxFQUFmO0FBQWtCLFVBQUlrQixXQUFXLEdBQUM3QyxTQUFoQjs7QUFBMEIsVUFBRyxFQUFFLGlCQUFnQnVCLEdBQWxCLENBQUgsRUFBMEI7QUFBQyxZQUFHO0FBQUN2RixnQkFBTSxHQUFDdUYsR0FBRyxDQUFDdkYsTUFBWDtBQUFrQjJGLG9CQUFVLEdBQUNKLEdBQUcsQ0FBQ0ksVUFBZjtBQUEwQmtCLHFCQUFXLEdBQUN0QixHQUFHLENBQUN1QixpQkFBSixDQUFzQixjQUF0QixDQUFaO0FBQW1ELFNBQW5HLENBQW1HLE9BQU01RixLQUFOLEVBQVk7QUFBQztBQUNwTTtBQUNBO0FBQ0FsQixnQkFBTSxHQUFDLENBQVA7QUFBUzJGLG9CQUFVLEdBQUMsRUFBWDtBQUFja0IscUJBQVcsR0FBQzdDLFNBQVosQ0FINEssQ0FHdEo7QUFDN0M7QUFDQTtBQUNDO0FBQUMsT0FOdUQsTUFNbkQ7QUFBQ2hFLGNBQU0sR0FBQyxHQUFQO0FBQVcyRixrQkFBVSxHQUFDLElBQVg7QUFBZ0JrQixtQkFBVyxHQUFDdEIsR0FBRyxDQUFDc0IsV0FBaEI7QUFBNkI7O0FBQUEsVUFBRzdHLE1BQU0sS0FBRyxDQUFaLEVBQWM7QUFBQ3VHLGFBQUssR0FBQyxDQUFOO0FBQVFELFlBQUksQ0FBQ1osVUFBTCxHQUFnQixDQUFoQjtBQUFrQlksWUFBSSxDQUFDdEcsTUFBTCxHQUFZQSxNQUFaO0FBQW1Cc0csWUFBSSxDQUFDWCxVQUFMLEdBQWdCQSxVQUFoQjtBQUEyQlcsWUFBSSxDQUFDUCxZQUFMLEdBQWtCYyxXQUFsQjtBQUE4QlAsWUFBSSxDQUFDUixrQkFBTDtBQUEyQjtBQUFDO0FBQUMsR0FQaEY7O0FBT2lGLE1BQUlpQixVQUFVLEdBQUMsU0FBU0EsVUFBVCxHQUFxQjtBQUFDSCxXQUFPOztBQUFHLFFBQUdMLEtBQUssS0FBRyxDQUFSLElBQVdBLEtBQUssS0FBRyxDQUF0QixFQUF3QjtBQUFDQSxXQUFLLEdBQUMsQ0FBTjtBQUFRLFVBQUlYLFlBQVksR0FBQyxFQUFqQjs7QUFBb0IsVUFBRztBQUFDQSxvQkFBWSxHQUFDTCxHQUFHLENBQUNLLFlBQWpCO0FBQStCLE9BQW5DLENBQW1DLE9BQU0xRSxLQUFOLEVBQVksQ0FBQztBQUNyVzs7QUFBQW9GLFVBQUksQ0FBQ1osVUFBTCxHQUFnQixDQUFoQjtBQUFrQlksVUFBSSxDQUFDVixZQUFMLEdBQWtCQSxZQUFsQjtBQUErQlUsVUFBSSxDQUFDVCxVQUFMO0FBQW1CO0FBQUMsR0FENEk7O0FBQzNJLE1BQUltQixRQUFRLEdBQUMsU0FBU0EsUUFBVCxHQUFtQjtBQUFDO0FBQ3hHO0FBQ0FELGNBQVU7O0FBQUcsUUFBR1IsS0FBSyxLQUFHLENBQVIsSUFBV0EsS0FBSyxLQUFHLENBQW5CLElBQXNCQSxLQUFLLEtBQUcsQ0FBakMsRUFBbUM7QUFBQ0EsV0FBSyxHQUFDLENBQU47O0FBQVEsVUFBR2hFLE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBQ2tFLG9CQUFZLENBQUNsRSxPQUFELENBQVo7QUFBc0JBLGVBQU8sR0FBQyxDQUFSO0FBQVc7O0FBQUErRCxVQUFJLENBQUNaLFVBQUwsR0FBZ0IsQ0FBaEI7QUFBa0JZLFVBQUksQ0FBQ1Isa0JBQUw7QUFBMkI7QUFBQyxHQUZqRjs7QUFFa0YsTUFBSW1CLGtCQUFrQixHQUFDLFNBQVNBLGtCQUFULEdBQTZCO0FBQUMsUUFBRzFCLEdBQUcsSUFBRXZCLFNBQVIsRUFBa0I7QUFBQztBQUNqTyxVQUFHdUIsR0FBRyxDQUFDRyxVQUFKLEtBQWlCLENBQXBCLEVBQXNCO0FBQUNzQixnQkFBUTtBQUFJLE9BQW5DLE1BQXdDLElBQUd6QixHQUFHLENBQUNHLFVBQUosS0FBaUIsQ0FBcEIsRUFBc0I7QUFBQ3FCLGtCQUFVO0FBQUksT0FBckMsTUFBMEMsSUFBR3hCLEdBQUcsQ0FBQ0csVUFBSixLQUFpQixDQUFwQixFQUFzQjtBQUFDa0IsZUFBTztBQUFJO0FBQUM7QUFBQyxHQURtQzs7QUFDbEMsTUFBSU0sU0FBUyxHQUFDLFNBQVNBLFNBQVQsR0FBb0I7QUFBQzNFLFdBQU8sR0FBQ2lCLFVBQVUsQ0FBQyxZQUFVO0FBQUMwRCxlQUFTO0FBQUksS0FBekIsRUFBMEIsR0FBMUIsQ0FBbEI7O0FBQWlELFFBQUczQixHQUFHLENBQUNHLFVBQUosS0FBaUIsQ0FBcEIsRUFBc0I7QUFBQ3FCLGdCQUFVO0FBQUk7QUFBQyxHQUExSCxDQWI0VCxDQWFqTTs7O0FBQ2xQeEIsS0FBRyxDQUFDbUIsTUFBSixHQUFXTSxRQUFYO0FBQW9CekIsS0FBRyxDQUFDekMsT0FBSixHQUFZa0UsUUFBWixDQWQrWixDQWMxWTtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFDQXpCLEtBQUcsQ0FBQ29CLE9BQUosR0FBWUssUUFBWixDQW5CbWIsQ0FtQjlaOztBQUNyQixNQUFHLEVBQUUsa0JBQWlCRyxjQUFjLENBQUM3QyxTQUFsQyxLQUE4QyxFQUFFLGFBQVk2QyxjQUFjLENBQUM3QyxTQUE3QixDQUFqRCxFQUF5RjtBQUFDaUIsT0FBRyxDQUFDTSxVQUFKLEdBQWVrQixVQUFmO0FBQTJCLEdBcEI4VCxDQW9COVQ7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0F4QixLQUFHLENBQUNPLGtCQUFKLEdBQXVCbUIsa0JBQXZCOztBQUEwQyxNQUFHLGlCQUFnQjFCLEdBQW5CLEVBQXVCO0FBQUNjLE9BQUcsSUFBRSxDQUFDQSxHQUFHLENBQUN6RixPQUFKLENBQVksR0FBWixNQUFtQixDQUFDLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCLEdBQTNCLElBQWdDLGNBQXJDO0FBQXFEOztBQUFBMkUsS0FBRyxDQUFDWSxJQUFKLENBQVNDLE1BQVQsRUFBZ0JDLEdBQWhCLEVBQW9CLElBQXBCOztBQUEwQixNQUFHLGdCQUFlZCxHQUFsQixFQUFzQjtBQUFDO0FBQ3hLO0FBQ0FoRCxXQUFPLEdBQUNpQixVQUFVLENBQUMsWUFBVTtBQUFDMEQsZUFBUztBQUFJLEtBQXpCLEVBQTBCLENBQTFCLENBQWxCO0FBQWdEO0FBQUMsQ0E1Qm9WOztBQTRCblY1QixVQUFVLENBQUNoQixTQUFYLENBQXFCSixLQUFyQixHQUEyQixZQUFVO0FBQUMsT0FBS2dDLE1BQUwsQ0FBWSxLQUFaO0FBQW9CLENBQTFEOztBQUEyRFosVUFBVSxDQUFDaEIsU0FBWCxDQUFxQndDLGlCQUFyQixHQUF1QyxVQUFTTSxJQUFULEVBQWM7QUFBQyxTQUFPLEtBQUtyQixZQUFaO0FBQTBCLENBQWhGOztBQUFpRlQsVUFBVSxDQUFDaEIsU0FBWCxDQUFxQitDLGdCQUFyQixHQUFzQyxVQUFTRCxJQUFULEVBQWNFLEtBQWQsRUFBb0I7QUFBQyxNQUFJL0IsR0FBRyxHQUFDLEtBQUtTLElBQWI7O0FBQWtCLE1BQUcsc0JBQXFCVCxHQUF4QixFQUE0QjtBQUFDQSxPQUFHLENBQUM4QixnQkFBSixDQUFxQkQsSUFBckIsRUFBMEJFLEtBQTFCO0FBQWtDO0FBQUMsQ0FBN0k7O0FBQThJaEMsVUFBVSxDQUFDaEIsU0FBWCxDQUFxQmlELHFCQUFyQixHQUEyQyxZQUFVO0FBQUMsU0FBTyxLQUFLdkIsSUFBTCxDQUFVdUIscUJBQVYsSUFBaUN2RCxTQUFqQyxHQUEyQyxLQUFLZ0MsSUFBTCxDQUFVdUIscUJBQVYsRUFBM0MsR0FBNkUsRUFBcEY7QUFBd0YsQ0FBOUk7O0FBQStJakMsVUFBVSxDQUFDaEIsU0FBWCxDQUFxQmtELElBQXJCLEdBQTBCLFlBQVU7QUFBQztBQUNoZ0IsTUFBRyxFQUFFLGVBQWNMLGNBQWMsQ0FBQzdDLFNBQS9CLEtBQTJDcEYsUUFBUSxJQUFFOEUsU0FBckQsSUFBZ0U5RSxRQUFRLENBQUN3RyxVQUFULElBQXFCMUIsU0FBckYsSUFBZ0c5RSxRQUFRLENBQUN3RyxVQUFULEtBQXNCLFVBQXpILEVBQW9JO0FBQUMsUUFBSVksSUFBSSxHQUFDLElBQVQ7QUFBY0EsUUFBSSxDQUFDTCxZQUFMLEdBQWtCekMsVUFBVSxDQUFDLFlBQVU7QUFBQzhDLFVBQUksQ0FBQ0wsWUFBTCxHQUFrQixDQUFsQjtBQUFvQkssVUFBSSxDQUFDa0IsSUFBTDtBQUFhLEtBQTdDLEVBQThDLENBQTlDLENBQTVCO0FBQTZFO0FBQVE7O0FBQUEsTUFBSWpDLEdBQUcsR0FBQyxLQUFLUyxJQUFiLENBRHVSLENBQ3JROztBQUMxUFQsS0FBRyxDQUFDQyxlQUFKLEdBQW9CLEtBQUtBLGVBQXpCO0FBQXlDRCxLQUFHLENBQUNFLFlBQUosR0FBaUIsS0FBS0EsWUFBdEI7O0FBQW1DLE1BQUc7QUFBQztBQUNoRkYsT0FBRyxDQUFDaUMsSUFBSixDQUFTeEQsU0FBVDtBQUFxQixHQUR1RCxDQUN2RCxPQUFNeUQsTUFBTixFQUFhO0FBQUM7QUFDbkMsVUFBTUEsTUFBTjtBQUFjO0FBQUMsQ0FKNGM7O0FBSTNjLFNBQVNDLFdBQVQsQ0FBcUJOLElBQXJCLEVBQTBCO0FBQUMsU0FBT0EsSUFBSSxDQUFDdEcsT0FBTCxDQUFhLFFBQWIsRUFBc0IsVUFBU0wsQ0FBVCxFQUFXO0FBQUMsV0FBT3VFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQnhFLENBQUMsQ0FBQ2tILFVBQUYsQ0FBYSxDQUFiLElBQWdCLElBQXBDLENBQVA7QUFBa0QsR0FBcEYsQ0FBUDtBQUE4Rjs7QUFBQSxTQUFTQyxlQUFULENBQXlCQyxHQUF6QixFQUE2QjtBQUFDO0FBQ3ZLLE1BQUlDLEdBQUcsR0FBQ3ZILE1BQU0sQ0FBQ3dILE1BQVAsQ0FBYyxJQUFkLENBQVI7QUFBNEIsTUFBSUMsS0FBSyxHQUFDSCxHQUFHLENBQUNJLEtBQUosQ0FBVSxNQUFWLENBQVY7O0FBQTRCLE9BQUksSUFBSS9FLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQzhFLEtBQUssQ0FBQzdFLE1BQXBCLEVBQTJCRCxDQUFDLElBQUUsQ0FBOUIsRUFBZ0M7QUFBQyxRQUFJZ0YsSUFBSSxHQUFDRixLQUFLLENBQUM5RSxDQUFELENBQWQ7QUFBa0IsUUFBSWlGLEtBQUssR0FBQ0QsSUFBSSxDQUFDRCxLQUFMLENBQVcsSUFBWCxDQUFWO0FBQTJCLFFBQUliLElBQUksR0FBQ2UsS0FBSyxDQUFDekQsS0FBTixFQUFUO0FBQXVCLFFBQUk0QyxLQUFLLEdBQUNhLEtBQUssQ0FBQ0MsSUFBTixDQUFXLElBQVgsQ0FBVjtBQUEyQk4sT0FBRyxDQUFDSixXQUFXLENBQUNOLElBQUQsQ0FBWixDQUFILEdBQXVCRSxLQUF2QjtBQUE4Qjs7QUFBQSxPQUFLZSxJQUFMLEdBQVVQLEdBQVY7QUFBZTs7TUFEbkZGLGU7O0FBQ21GQSxlQUFlLENBQUN0RCxTQUFoQixDQUEwQmdFLEdBQTFCLEdBQThCLFVBQVNsQixJQUFULEVBQWM7QUFBQyxTQUFPLEtBQUtpQixJQUFMLENBQVVYLFdBQVcsQ0FBQ04sSUFBRCxDQUFyQixDQUFQO0FBQXFDLENBQWxGOztBQUFtRixTQUFTbUIsWUFBVCxHQUF1QixDQUFFOztNQUFoQkEsWTs7QUFBZ0JBLFlBQVksQ0FBQ2pFLFNBQWIsQ0FBdUI2QixJQUF2QixHQUE0QixVQUFTWixHQUFULEVBQWFpRCxlQUFiLEVBQTZCQyxrQkFBN0IsRUFBZ0RDLGdCQUFoRCxFQUFpRXJDLEdBQWpFLEVBQXFFYixlQUFyRSxFQUFxRm1ELE9BQXJGLEVBQTZGO0FBQUNwRCxLQUFHLENBQUNZLElBQUosQ0FBUyxLQUFULEVBQWVFLEdBQWY7QUFBb0IsTUFBSXVDLE1BQU0sR0FBQyxDQUFYOztBQUFhckQsS0FBRyxDQUFDTSxVQUFKLEdBQWUsWUFBVTtBQUFDLFFBQUlELFlBQVksR0FBQ0wsR0FBRyxDQUFDSyxZQUFyQjtBQUFrQyxRQUFJaUQsS0FBSyxHQUFDakQsWUFBWSxDQUFDa0QsS0FBYixDQUFtQkYsTUFBbkIsQ0FBVjtBQUFxQ0EsVUFBTSxJQUFFQyxLQUFLLENBQUMxRixNQUFkO0FBQXFCc0Ysc0JBQWtCLENBQUNJLEtBQUQsQ0FBbEI7QUFBMkIsR0FBako7O0FBQWtKdEQsS0FBRyxDQUFDTyxrQkFBSixHQUF1QixZQUFVO0FBQUMsUUFBR1AsR0FBRyxDQUFDRyxVQUFKLEtBQWlCLENBQXBCLEVBQXNCO0FBQUMsVUFBSTFGLE1BQU0sR0FBQ3VGLEdBQUcsQ0FBQ3ZGLE1BQWY7QUFBc0IsVUFBSTJGLFVBQVUsR0FBQ0osR0FBRyxDQUFDSSxVQUFuQjtBQUE4QixVQUFJa0IsV0FBVyxHQUFDdEIsR0FBRyxDQUFDdUIsaUJBQUosQ0FBc0IsY0FBdEIsQ0FBaEI7QUFBc0QsVUFBSTZCLE9BQU8sR0FBQ3BELEdBQUcsQ0FBQ2dDLHFCQUFKLEVBQVo7QUFBd0NpQixxQkFBZSxDQUFDeEksTUFBRCxFQUFRMkYsVUFBUixFQUFtQmtCLFdBQW5CLEVBQStCLElBQUllLGVBQUosQ0FBb0JlLE9BQXBCLENBQS9CLEVBQTRELFlBQVU7QUFBQ3BELFdBQUcsQ0FBQ3JCLEtBQUo7QUFBYSxPQUFwRixDQUFmO0FBQXNHLEtBQS9RLE1BQW9SLElBQUdxQixHQUFHLENBQUNHLFVBQUosS0FBaUIsQ0FBcEIsRUFBc0I7QUFBQ2dELHNCQUFnQjtBQUFJO0FBQUMsR0FBbFc7O0FBQW1XbkQsS0FBRyxDQUFDQyxlQUFKLEdBQW9CQSxlQUFwQjtBQUFvQ0QsS0FBRyxDQUFDRSxZQUFKLEdBQWlCLE1BQWpCOztBQUF3QixPQUFJLElBQUkyQixJQUFSLElBQWdCdUIsT0FBaEIsRUFBd0I7QUFBQyxRQUFHcEksTUFBTSxDQUFDK0QsU0FBUCxDQUFpQnlFLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ0wsT0FBckMsRUFBNkN2QixJQUE3QyxDQUFILEVBQXNEO0FBQUM3QixTQUFHLENBQUM4QixnQkFBSixDQUFxQkQsSUFBckIsRUFBMEJ1QixPQUFPLENBQUN2QixJQUFELENBQWpDO0FBQTBDO0FBQUM7O0FBQUE3QixLQUFHLENBQUNpQyxJQUFKO0FBQVksQ0FBbjFCOztBQUFvMUIsU0FBU3lCLGNBQVQsQ0FBd0JOLE9BQXhCLEVBQWdDO0FBQUMsT0FBS08sUUFBTCxHQUFjUCxPQUFkO0FBQXVCOztNQUEvQ00sYzs7QUFBK0NBLGNBQWMsQ0FBQzNFLFNBQWYsQ0FBeUJnRSxHQUF6QixHQUE2QixVQUFTbEIsSUFBVCxFQUFjO0FBQUMsU0FBTyxLQUFLOEIsUUFBTCxDQUFjWixHQUFkLENBQWtCbEIsSUFBbEIsQ0FBUDtBQUFnQyxDQUE1RTs7QUFBNkUsU0FBUytCLGNBQVQsR0FBeUIsQ0FBRTs7TUFBbEJBLGM7O0FBQWtCQSxjQUFjLENBQUM3RSxTQUFmLENBQXlCNkIsSUFBekIsR0FBOEIsVUFBU1osR0FBVCxFQUFhaUQsZUFBYixFQUE2QkMsa0JBQTdCLEVBQWdEQyxnQkFBaEQsRUFBaUVyQyxHQUFqRSxFQUFxRWIsZUFBckUsRUFBcUZtRCxPQUFyRixFQUE2RjtBQUFDLE1BQUlTLFVBQVUsR0FBQyxJQUFJckYsZUFBSixFQUFmO0FBQXFDLE1BQUlFLE1BQU0sR0FBQ21GLFVBQVUsQ0FBQ25GLE1BQXRCLENBQXRDLENBQW1FOztBQUNuZ0QsTUFBSW9GLFdBQVcsR0FBQyxJQUFJeEYsV0FBSixFQUFoQjtBQUFrQyxHQUFDLEdBQUVyRixRQUFRLFdBQVgsRUFBcUI2SCxHQUFyQixFQUF5QjtBQUFDc0MsV0FBTyxFQUFDQSxPQUFUO0FBQWlCVyxlQUFXLEVBQUM5RCxlQUFlLEdBQUMsU0FBRCxHQUFXLGFBQXZEO0FBQXFFdkIsVUFBTSxFQUFDQSxNQUE1RTtBQUFtRnNGLFNBQUssRUFBQztBQUF6RixHQUF6QixFQUErSEMsSUFBL0gsQ0FBb0ksVUFBU0MsUUFBVCxFQUFrQjtBQUFDLFFBQUlDLE1BQU0sR0FBQ0QsUUFBUSxDQUFDRSxJQUFULENBQWNDLFNBQWQsRUFBWDtBQUFxQ3BCLG1CQUFlLENBQUNpQixRQUFRLENBQUN6SixNQUFWLEVBQWlCeUosUUFBUSxDQUFDOUQsVUFBMUIsRUFBcUM4RCxRQUFRLENBQUNkLE9BQVQsQ0FBaUJMLEdBQWpCLENBQXFCLGNBQXJCLENBQXJDLEVBQTBFLElBQUlXLGNBQUosQ0FBbUJRLFFBQVEsQ0FBQ2QsT0FBNUIsQ0FBMUUsRUFBK0csWUFBVTtBQUFDUyxnQkFBVSxDQUFDbEYsS0FBWDtBQUFtQndGLFlBQU0sQ0FBQ0csTUFBUDtBQUFpQixLQUE5SixDQUFmO0FBQStLLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVNDLE9BQVQsRUFBaUJDLE1BQWpCLEVBQXdCO0FBQUMsVUFBSUMsYUFBYSxHQUFDLFNBQVNBLGFBQVQsR0FBd0I7QUFBQ1AsY0FBTSxDQUFDUSxJQUFQLEdBQWNWLElBQWQsQ0FBbUIsVUFBU1csTUFBVCxFQUFnQjtBQUFDLGNBQUdBLE1BQU0sQ0FBQ0MsSUFBVixFQUFlO0FBQUM7QUFDeGhCTCxtQkFBTyxDQUFDL0YsU0FBRCxDQUFQO0FBQW9CLFdBRG9mLE1BQ2hmO0FBQUMsZ0JBQUk2RSxLQUFLLEdBQUNRLFdBQVcsQ0FBQzlFLE1BQVosQ0FBbUI0RixNQUFNLENBQUM3QyxLQUExQixFQUFnQztBQUFDbEMsb0JBQU0sRUFBQztBQUFSLGFBQWhDLENBQVY7QUFBeURxRCw4QkFBa0IsQ0FBQ0ksS0FBRCxDQUFsQjtBQUEwQm9CLHlCQUFhO0FBQUk7QUFBQyxTQURzVyxFQUNwVyxPQURvVyxFQUMzVixVQUFTL0ksS0FBVCxFQUFlO0FBQUM4SSxnQkFBTSxDQUFDOUksS0FBRCxDQUFOO0FBQWUsU0FENFQ7QUFDelQsT0FEOFE7O0FBQzdRK0ksbUJBQWE7QUFBSSxLQUR1TixDQUFQO0FBQzdNLEdBRDlKLEVBQ2dLVCxJQURoSyxDQUNxSyxVQUFTVyxNQUFULEVBQWdCO0FBQUN6QixvQkFBZ0I7QUFBRyxXQUFPeUIsTUFBUDtBQUFlLEdBRHhOLEVBQ3lOLFVBQVNqSixLQUFULEVBQWU7QUFBQ3dILG9CQUFnQjtBQUFHLFdBQU9vQixPQUFPLENBQUNFLE1BQVIsQ0FBZTlJLEtBQWYsQ0FBUDtBQUE4QixHQUQxUjtBQUM2UixDQUZzZ0M7O0FBRXJnQyxTQUFTbUosV0FBVCxHQUFzQjtBQUFDLE9BQUtDLFVBQUwsR0FBZ0IvSixNQUFNLENBQUN3SCxNQUFQLENBQWMsSUFBZCxDQUFoQjtBQUFxQzs7TUFBbkRzQyxXOztBQUFtRCxTQUFTRSxVQUFULENBQW9CQyxDQUFwQixFQUFzQjtBQUFDaEgsWUFBVSxDQUFDLFlBQVU7QUFBQyxVQUFNZ0gsQ0FBTjtBQUFTLEdBQXJCLEVBQXNCLENBQXRCLENBQVY7QUFBb0M7O0FBQUFILFdBQVcsQ0FBQy9GLFNBQVosQ0FBc0JtRyxhQUF0QixHQUFvQyxVQUFTbkosS0FBVCxFQUFlO0FBQUNBLE9BQUssQ0FBQ29KLE1BQU4sR0FBYSxJQUFiO0FBQWtCLE1BQUlDLGFBQWEsR0FBQyxLQUFLTCxVQUFMLENBQWdCaEosS0FBSyxDQUFDc0osSUFBdEIsQ0FBbEI7O0FBQThDLE1BQUdELGFBQWEsSUFBRTNHLFNBQWxCLEVBQTRCO0FBQUMsUUFBSWIsTUFBTSxHQUFDd0gsYUFBYSxDQUFDeEgsTUFBekI7O0FBQWdDLFNBQUksSUFBSUQsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDQyxNQUFkLEVBQXFCRCxDQUFDLElBQUUsQ0FBeEIsRUFBMEI7QUFBQyxVQUFJMkgsUUFBUSxHQUFDRixhQUFhLENBQUN6SCxDQUFELENBQTFCOztBQUE4QixVQUFHO0FBQUMsWUFBRyxPQUFPMkgsUUFBUSxDQUFDQyxXQUFoQixLQUE4QixVQUFqQyxFQUE0QztBQUFDRCxrQkFBUSxDQUFDQyxXQUFULENBQXFCeEosS0FBckI7QUFBNkIsU0FBMUUsTUFBOEU7QUFBQ3VKLGtCQUFRLENBQUM3QixJQUFULENBQWMsSUFBZCxFQUFtQjFILEtBQW5CO0FBQTJCO0FBQUMsT0FBL0csQ0FBK0csT0FBTWtKLENBQU4sRUFBUTtBQUFDRCxrQkFBVSxDQUFDQyxDQUFELENBQVY7QUFBZTtBQUFDO0FBQUM7QUFBQyxDQUFwWDs7QUFBcVhILFdBQVcsQ0FBQy9GLFNBQVosQ0FBc0J5RyxnQkFBdEIsR0FBdUMsVUFBU0gsSUFBVCxFQUFjQyxRQUFkLEVBQXVCO0FBQUNELE1BQUksR0FBQzVGLE1BQU0sQ0FBQzRGLElBQUQsQ0FBWDtBQUFrQixNQUFJdEksU0FBUyxHQUFDLEtBQUtnSSxVQUFuQjtBQUE4QixNQUFJSyxhQUFhLEdBQUNySSxTQUFTLENBQUNzSSxJQUFELENBQTNCOztBQUFrQyxNQUFHRCxhQUFhLElBQUUzRyxTQUFsQixFQUE0QjtBQUFDMkcsaUJBQWEsR0FBQyxFQUFkO0FBQWlCckksYUFBUyxDQUFDc0ksSUFBRCxDQUFULEdBQWdCRCxhQUFoQjtBQUErQjs7QUFBQSxNQUFJSyxLQUFLLEdBQUMsS0FBVjs7QUFBZ0IsT0FBSSxJQUFJOUgsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDeUgsYUFBYSxDQUFDeEgsTUFBNUIsRUFBbUNELENBQUMsSUFBRSxDQUF0QyxFQUF3QztBQUFDLFFBQUd5SCxhQUFhLENBQUN6SCxDQUFELENBQWIsS0FBbUIySCxRQUF0QixFQUErQjtBQUFDRyxXQUFLLEdBQUMsSUFBTjtBQUFZO0FBQUM7O0FBQUEsTUFBRyxDQUFDQSxLQUFKLEVBQVU7QUFBQ0wsaUJBQWEsQ0FBQ2pILElBQWQsQ0FBbUJtSCxRQUFuQjtBQUE4QjtBQUFDLENBQTlXOztBQUErV1IsV0FBVyxDQUFDL0YsU0FBWixDQUFzQjJHLG1CQUF0QixHQUEwQyxVQUFTTCxJQUFULEVBQWNDLFFBQWQsRUFBdUI7QUFBQ0QsTUFBSSxHQUFDNUYsTUFBTSxDQUFDNEYsSUFBRCxDQUFYO0FBQWtCLE1BQUl0SSxTQUFTLEdBQUMsS0FBS2dJLFVBQW5CO0FBQThCLE1BQUlLLGFBQWEsR0FBQ3JJLFNBQVMsQ0FBQ3NJLElBQUQsQ0FBM0I7O0FBQWtDLE1BQUdELGFBQWEsSUFBRTNHLFNBQWxCLEVBQTRCO0FBQUMsUUFBSWtILFFBQVEsR0FBQyxFQUFiOztBQUFnQixTQUFJLElBQUloSSxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUN5SCxhQUFhLENBQUN4SCxNQUE1QixFQUFtQ0QsQ0FBQyxJQUFFLENBQXRDLEVBQXdDO0FBQUMsVUFBR3lILGFBQWEsQ0FBQ3pILENBQUQsQ0FBYixLQUFtQjJILFFBQXRCLEVBQStCO0FBQUNLLGdCQUFRLENBQUN4SCxJQUFULENBQWNpSCxhQUFhLENBQUN6SCxDQUFELENBQTNCO0FBQWlDO0FBQUM7O0FBQUEsUUFBR2dJLFFBQVEsQ0FBQy9ILE1BQVQsS0FBa0IsQ0FBckIsRUFBdUI7QUFBQyxhQUFPYixTQUFTLENBQUNzSSxJQUFELENBQWhCO0FBQXdCLEtBQWhELE1BQW9EO0FBQUN0SSxlQUFTLENBQUNzSSxJQUFELENBQVQsR0FBZ0JNLFFBQWhCO0FBQTBCO0FBQUM7QUFBQyxDQUE3WDs7QUFBOFgsU0FBU0MsS0FBVCxDQUFlUCxJQUFmLEVBQW9CO0FBQUMsT0FBS0EsSUFBTCxHQUFVQSxJQUFWO0FBQWUsT0FBS0YsTUFBTCxHQUFZMUcsU0FBWjtBQUF1Qjs7TUFBbERtSCxLOztBQUFrRCxTQUFTQyxZQUFULENBQXNCUixJQUF0QixFQUEyQjFJLE9BQTNCLEVBQW1DO0FBQUNpSixPQUFLLENBQUNuQyxJQUFOLENBQVcsSUFBWCxFQUFnQjRCLElBQWhCO0FBQXNCLE9BQUs3TCxJQUFMLEdBQVVtRCxPQUFPLENBQUNuRCxJQUFsQjtBQUF1QixPQUFLc00sV0FBTCxHQUFpQm5KLE9BQU8sQ0FBQ21KLFdBQXpCO0FBQXNDOztNQUE5R0QsWTtBQUE4R0EsWUFBWSxDQUFDOUcsU0FBYixHQUF1Qi9ELE1BQU0sQ0FBQ3dILE1BQVAsQ0FBY29ELEtBQUssQ0FBQzdHLFNBQXBCLENBQXZCOztBQUFzRCxTQUFTZ0gsZUFBVCxDQUF5QlYsSUFBekIsRUFBOEIxSSxPQUE5QixFQUFzQztBQUFDaUosT0FBSyxDQUFDbkMsSUFBTixDQUFXLElBQVgsRUFBZ0I0QixJQUFoQjtBQUFzQixPQUFLNUssTUFBTCxHQUFZa0MsT0FBTyxDQUFDbEMsTUFBcEI7QUFBMkIsT0FBSzJGLFVBQUwsR0FBZ0J6RCxPQUFPLENBQUN5RCxVQUF4QjtBQUFtQyxPQUFLZ0QsT0FBTCxHQUFhekcsT0FBTyxDQUFDeUcsT0FBckI7QUFBOEI7O09BQWhKMkMsZTtBQUFnSkEsZUFBZSxDQUFDaEgsU0FBaEIsR0FBMEIvRCxNQUFNLENBQUN3SCxNQUFQLENBQWNvRCxLQUFLLENBQUM3RyxTQUFwQixDQUExQjtBQUF5RCxJQUFJaUgsT0FBTyxHQUFDLENBQUMsQ0FBYjtBQUFlLElBQUlDLFVBQVUsR0FBQyxDQUFmO0FBQWlCLElBQUlDLElBQUksR0FBQyxDQUFUO0FBQVcsSUFBSUMsTUFBTSxHQUFDLENBQVg7QUFBYSxJQUFJQyxRQUFRLEdBQUMsQ0FBQyxDQUFkO0FBQWdCLElBQUlDLFdBQVcsR0FBQyxDQUFoQjtBQUFrQixJQUFJQyxLQUFLLEdBQUMsQ0FBVjtBQUFZLElBQUlDLFdBQVcsR0FBQyxDQUFoQjtBQUFrQixJQUFJQyxLQUFLLEdBQUMsQ0FBVjtBQUFZLElBQUlDLGlCQUFpQixHQUFDLCtDQUF0QjtBQUFzRSxJQUFJQyxnQkFBZ0IsR0FBQyxJQUFyQjtBQUEwQixJQUFJQyxnQkFBZ0IsR0FBQyxRQUFyQjs7QUFBOEIsSUFBSUMsYUFBYSxHQUFDLFNBQVNBLGFBQVQsQ0FBdUI3RSxLQUF2QixFQUE2QjhFLEdBQTdCLEVBQWlDO0FBQUMsTUFBSUMsQ0FBQyxHQUFDQyxRQUFRLENBQUNoRixLQUFELEVBQU8sRUFBUCxDQUFkOztBQUF5QixNQUFHK0UsQ0FBQyxLQUFHQSxDQUFQLEVBQVM7QUFBQ0EsS0FBQyxHQUFDRCxHQUFGO0FBQU87O0FBQUEsU0FBT0csYUFBYSxDQUFDRixDQUFELENBQXBCO0FBQXlCLENBQXZIOztBQUF3SCxJQUFJRSxhQUFhLEdBQUMsU0FBU0EsYUFBVCxDQUF1QkYsQ0FBdkIsRUFBeUI7QUFBQyxTQUFPRyxJQUFJLENBQUNDLEdBQUwsQ0FBU0QsSUFBSSxDQUFDRSxHQUFMLENBQVNMLENBQVQsRUFBV0osZ0JBQVgsQ0FBVCxFQUFzQ0MsZ0JBQXRDLENBQVA7QUFBZ0UsQ0FBNUc7O0FBQTZHLElBQUlTLElBQUksR0FBQyxTQUFTQSxJQUFULENBQWNyRyxJQUFkLEVBQW1Cc0csQ0FBbkIsRUFBcUJ0TCxLQUFyQixFQUEyQjtBQUFDLE1BQUc7QUFBQyxRQUFHLE9BQU9zTCxDQUFQLEtBQVcsVUFBZCxFQUF5QjtBQUFDQSxPQUFDLENBQUM1RCxJQUFGLENBQU8xQyxJQUFQLEVBQVloRixLQUFaO0FBQW9CO0FBQUMsR0FBbkQsQ0FBbUQsT0FBTWtKLENBQU4sRUFBUTtBQUFDRCxjQUFVLENBQUNDLENBQUQsQ0FBVjtBQUFlO0FBQUMsQ0FBakg7O0FBQWtILFNBQVNxQyxtQkFBVCxDQUE2QnhHLEdBQTdCLEVBQWlDbkUsT0FBakMsRUFBeUM7QUFBQ21JLGFBQVcsQ0FBQ3JCLElBQVosQ0FBaUIsSUFBakI7QUFBdUIsT0FBS3BHLE1BQUwsR0FBWW9CLFNBQVo7QUFBc0IsT0FBS2pCLFNBQUwsR0FBZWlCLFNBQWY7QUFBeUIsT0FBS2xCLE9BQUwsR0FBYWtCLFNBQWI7QUFBdUIsT0FBS3FDLEdBQUwsR0FBU3JDLFNBQVQ7QUFBbUIsT0FBSzBCLFVBQUwsR0FBZ0IxQixTQUFoQjtBQUEwQixPQUFLd0IsZUFBTCxHQUFxQnhCLFNBQXJCO0FBQStCLE9BQUs4SSxNQUFMLEdBQVk5SSxTQUFaO0FBQXNCK0ksT0FBSyxDQUFDLElBQUQsRUFBTTFHLEdBQU4sRUFBVW5FLE9BQVYsQ0FBTDtBQUF5Qjs7T0FBelAySyxtQjtBQUF5UCxJQUFJRyxnQkFBZ0IsR0FBQ3hPLFFBQVEsV0FBUixJQUFrQndGLFNBQWxCLElBQTZCSixRQUFRLElBQUVJLFNBQXZDLElBQWtELFVBQVNKLFFBQVEsQ0FBQ1UsU0FBekY7O0FBQW1HLFNBQVN5SSxLQUFULENBQWVFLEVBQWYsRUFBa0I1RyxHQUFsQixFQUFzQm5FLE9BQXRCLEVBQThCO0FBQUNtRSxLQUFHLEdBQUNyQixNQUFNLENBQUNxQixHQUFELENBQVY7QUFBZ0IsTUFBSWIsZUFBZSxHQUFDdEQsT0FBTyxJQUFFOEIsU0FBVCxJQUFvQmtKLE9BQU8sQ0FBQ2hMLE9BQU8sQ0FBQ3NELGVBQVQsQ0FBL0M7QUFBeUUsTUFBSTJILFlBQVksR0FBQ1osYUFBYSxDQUFDLElBQUQsQ0FBOUI7QUFBcUMsTUFBSWEsZ0JBQWdCLEdBQUNsTCxPQUFPLElBQUU4QixTQUFULElBQW9COUIsT0FBTyxDQUFDa0wsZ0JBQVIsSUFBMEJwSixTQUE5QyxHQUF3RG1JLGFBQWEsQ0FBQ2pLLE9BQU8sQ0FBQ2tMLGdCQUFULEVBQTBCLEtBQTFCLENBQXJFLEdBQXNHYixhQUFhLENBQUMsS0FBRCxDQUF4STtBQUFnSixNQUFJbEIsV0FBVyxHQUFDLEVBQWhCO0FBQW1CLE1BQUlnQyxLQUFLLEdBQUNGLFlBQVY7QUFBdUIsTUFBSUcsV0FBVyxHQUFDLEtBQWhCO0FBQXNCLE1BQUkzRSxPQUFPLEdBQUN6RyxPQUFPLElBQUU4QixTQUFULElBQW9COUIsT0FBTyxDQUFDeUcsT0FBUixJQUFpQjNFLFNBQXJDLEdBQStDaEYsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ3VPLFNBQUwsQ0FBZXJMLE9BQU8sQ0FBQ3lHLE9BQXZCLENBQVgsQ0FBL0MsR0FBMkYzRSxTQUF2RztBQUFpSCxNQUFJd0osZ0JBQWdCLEdBQUN0TCxPQUFPLElBQUU4QixTQUFULElBQW9COUIsT0FBTyxDQUFDdUwsU0FBUixJQUFtQnpKLFNBQXZDLEdBQWlEOUIsT0FBTyxDQUFDdUwsU0FBekQsR0FBbUV0RyxjQUF4RjtBQUF1RyxNQUFJNUIsR0FBRyxHQUFDeUgsZ0JBQWdCLElBQUUsRUFBRTlLLE9BQU8sSUFBRThCLFNBQVQsSUFBb0I5QixPQUFPLENBQUN1TCxTQUFSLElBQW1CekosU0FBekMsQ0FBbEIsR0FBc0VBLFNBQXRFLEdBQWdGLElBQUlzQixVQUFKLENBQWUsSUFBSWtJLGdCQUFKLEVBQWYsQ0FBeEY7QUFBK0gsTUFBSUUsU0FBUyxHQUFDbkksR0FBRyxJQUFFdkIsU0FBTCxHQUFlLElBQUltRixjQUFKLEVBQWYsR0FBb0MsSUFBSVosWUFBSixFQUFsRDtBQUFxRSxNQUFJb0YsY0FBYyxHQUFDM0osU0FBbkI7QUFBNkIsTUFBSXpCLE9BQU8sR0FBQyxDQUFaO0FBQWMsTUFBSXFMLFlBQVksR0FBQ3JDLE9BQWpCO0FBQXlCLE1BQUlzQyxVQUFVLEdBQUMsRUFBZjtBQUFrQixNQUFJQyxpQkFBaUIsR0FBQyxFQUF0QjtBQUF5QixNQUFJQyxlQUFlLEdBQUMsRUFBcEI7QUFBdUIsTUFBSUMsVUFBVSxHQUFDLEVBQWY7QUFBa0IsTUFBSXpILEtBQUssR0FBQ3FGLFdBQVY7QUFBc0IsTUFBSXFDLFVBQVUsR0FBQyxDQUFmO0FBQWlCLE1BQUlDLFVBQVUsR0FBQyxDQUFmOztBQUFpQixNQUFJdEgsT0FBTyxHQUFDLFNBQVNBLE9BQVQsQ0FBaUI1RyxNQUFqQixFQUF3QjJGLFVBQXhCLEVBQW1Da0IsV0FBbkMsRUFBK0M4QixPQUEvQyxFQUF1RGtCLE1BQXZELEVBQThEO0FBQUMsUUFBRytELFlBQVksS0FBR3BDLFVBQWxCLEVBQTZCO0FBQUNtQyxvQkFBYyxHQUFDOUQsTUFBZjs7QUFBc0IsVUFBRzdKLE1BQU0sS0FBRyxHQUFULElBQWM2RyxXQUFXLElBQUU3QyxTQUEzQixJQUFzQ2dJLGlCQUFpQixDQUFDbUMsSUFBbEIsQ0FBdUJ0SCxXQUF2QixDQUF6QyxFQUE2RTtBQUFDK0csb0JBQVksR0FBQ25DLElBQWI7QUFBa0I2QixtQkFBVyxHQUFDLElBQVo7QUFBaUJELGFBQUssR0FBQ0YsWUFBTjtBQUFtQkYsVUFBRSxDQUFDdkgsVUFBSCxHQUFjK0YsSUFBZDtBQUFtQixZQUFJbkssS0FBSyxHQUFDLElBQUlnSyxlQUFKLENBQW9CLE1BQXBCLEVBQTJCO0FBQUN0TCxnQkFBTSxFQUFDQSxNQUFSO0FBQWUyRixvQkFBVSxFQUFDQSxVQUExQjtBQUFxQ2dELGlCQUFPLEVBQUNBO0FBQTdDLFNBQTNCLENBQVY7QUFBNEZzRSxVQUFFLENBQUN4QyxhQUFILENBQWlCbkosS0FBakI7QUFBd0JxTCxZQUFJLENBQUNNLEVBQUQsRUFBSUEsRUFBRSxDQUFDckssTUFBUCxFQUFjdEIsS0FBZCxDQUFKO0FBQTBCLE9BQXJTLE1BQXlTO0FBQUMsWUFBSUMsT0FBTyxHQUFDLEVBQVo7O0FBQWUsWUFBR3ZCLE1BQU0sS0FBRyxHQUFaLEVBQWdCO0FBQUMsY0FBRzJGLFVBQUgsRUFBYztBQUFDQSxzQkFBVSxHQUFDQSxVQUFVLENBQUM3RSxPQUFYLENBQW1CLE1BQW5CLEVBQTBCLEdBQTFCLENBQVg7QUFBMkM7O0FBQUFTLGlCQUFPLEdBQUMseUNBQXVDdkIsTUFBdkMsR0FBOEMsR0FBOUMsR0FBa0QyRixVQUFsRCxHQUE2RCw0Q0FBckU7QUFBbUgsU0FBOUwsTUFBa007QUFBQ3BFLGlCQUFPLEdBQUMsZ0ZBQThFc0YsV0FBVyxJQUFFN0MsU0FBYixHQUF1QixHQUF2QixHQUEyQjZDLFdBQVcsQ0FBQy9GLE9BQVosQ0FBb0IsTUFBcEIsRUFBMkIsR0FBM0IsQ0FBekcsSUFBMEksNEJBQWxKO0FBQWdMOztBQUFBeUosa0JBQVUsQ0FBQyxJQUFJM0YsS0FBSixDQUFVckQsT0FBVixDQUFELENBQVY7QUFBK0JnQyxhQUFLO0FBQUcsWUFBSWpDLEtBQUssR0FBQyxJQUFJZ0ssZUFBSixDQUFvQixPQUFwQixFQUE0QjtBQUFDdEwsZ0JBQU0sRUFBQ0EsTUFBUjtBQUFlMkYsb0JBQVUsRUFBQ0EsVUFBMUI7QUFBcUNnRCxpQkFBTyxFQUFDQTtBQUE3QyxTQUE1QixDQUFWO0FBQTZGc0UsVUFBRSxDQUFDeEMsYUFBSCxDQUFpQm5KLEtBQWpCO0FBQXdCcUwsWUFBSSxDQUFDTSxFQUFELEVBQUlBLEVBQUUsQ0FBQ25LLE9BQVAsRUFBZXhCLEtBQWYsQ0FBSjtBQUEyQjtBQUFDO0FBQUMsR0FBcCtCOztBQUFxK0IsTUFBSXlGLFVBQVUsR0FBQyxTQUFTQSxVQUFULENBQW9CcUgsU0FBcEIsRUFBOEI7QUFBQyxRQUFHUixZQUFZLEtBQUduQyxJQUFsQixFQUF1QjtBQUFDLFVBQUlZLENBQUMsR0FBQyxDQUFDLENBQVA7O0FBQVMsV0FBSSxJQUFJbkosQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDa0wsU0FBUyxDQUFDakwsTUFBeEIsRUFBK0JELENBQUMsSUFBRSxDQUFsQyxFQUFvQztBQUFDLFlBQUl6QyxDQUFDLEdBQUMyTixTQUFTLENBQUN6RyxVQUFWLENBQXFCekUsQ0FBckIsQ0FBTjs7QUFBOEIsWUFBR3pDLENBQUMsS0FBRyxLQUFLa0gsVUFBTCxDQUFnQixDQUFoQixDQUFKLElBQXdCbEgsQ0FBQyxLQUFHLEtBQUtrSCxVQUFMLENBQWdCLENBQWhCLENBQS9CLEVBQWtEO0FBQUMwRSxXQUFDLEdBQUNuSixDQUFGO0FBQUs7QUFBQzs7QUFBQSxVQUFJMkYsS0FBSyxHQUFDLENBQUN3RCxDQUFDLEtBQUcsQ0FBQyxDQUFMLEdBQU8yQixVQUFQLEdBQWtCLEVBQW5CLElBQXVCSSxTQUFTLENBQUN0RixLQUFWLENBQWdCLENBQWhCLEVBQWtCdUQsQ0FBQyxHQUFDLENBQXBCLENBQWpDO0FBQXdEMkIsZ0JBQVUsR0FBQyxDQUFDM0IsQ0FBQyxLQUFHLENBQUMsQ0FBTCxHQUFPMkIsVUFBUCxHQUFrQixFQUFuQixJQUF1QkksU0FBUyxDQUFDdEYsS0FBVixDQUFnQnVELENBQUMsR0FBQyxDQUFsQixDQUFsQzs7QUFBdUQsVUFBR3hELEtBQUssS0FBRyxFQUFYLEVBQWM7QUFBQ3lFLG1CQUFXLEdBQUMsSUFBWjtBQUFrQjs7QUFBQSxXQUFJLElBQUllLFFBQVEsR0FBQyxDQUFqQixFQUFtQkEsUUFBUSxHQUFDeEYsS0FBSyxDQUFDMUYsTUFBbEMsRUFBeUNrTCxRQUFRLElBQUUsQ0FBbkQsRUFBcUQ7QUFBQyxZQUFJNU4sQ0FBQyxHQUFDb0ksS0FBSyxDQUFDbEIsVUFBTixDQUFpQjBHLFFBQWpCLENBQU47O0FBQWlDLFlBQUc5SCxLQUFLLEtBQUdvRixRQUFSLElBQWtCbEwsQ0FBQyxLQUFHLEtBQUtrSCxVQUFMLENBQWdCLENBQWhCLENBQXpCLEVBQTRDO0FBQUNwQixlQUFLLEdBQUNxRixXQUFOO0FBQW1CLFNBQWhFLE1BQW9FO0FBQUMsY0FBR3JGLEtBQUssS0FBR29GLFFBQVgsRUFBb0I7QUFBQ3BGLGlCQUFLLEdBQUNxRixXQUFOO0FBQW1COztBQUFBLGNBQUduTCxDQUFDLEtBQUcsS0FBS2tILFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBSixJQUF3QmxILENBQUMsS0FBRyxLQUFLa0gsVUFBTCxDQUFnQixDQUFoQixDQUEvQixFQUFrRDtBQUFDLGdCQUFHcEIsS0FBSyxLQUFHcUYsV0FBWCxFQUF1QjtBQUFDLGtCQUFHckYsS0FBSyxLQUFHc0YsS0FBWCxFQUFpQjtBQUFDcUMsMEJBQVUsR0FBQ0csUUFBUSxHQUFDLENBQXBCO0FBQXVCOztBQUFBLGtCQUFJQyxLQUFLLEdBQUN6RixLQUFLLENBQUNDLEtBQU4sQ0FBWW1GLFVBQVosRUFBdUJDLFVBQVUsR0FBQyxDQUFsQyxDQUFWO0FBQStDLGtCQUFJNUcsS0FBSyxHQUFDdUIsS0FBSyxDQUFDQyxLQUFOLENBQVlvRixVQUFVLElBQUVBLFVBQVUsR0FBQ0csUUFBWCxJQUFxQnhGLEtBQUssQ0FBQ2xCLFVBQU4sQ0FBaUJ1RyxVQUFqQixNQUErQixJQUFJdkcsVUFBSixDQUFlLENBQWYsQ0FBcEQsR0FBc0UsQ0FBdEUsR0FBd0UsQ0FBMUUsQ0FBdEIsRUFBbUcwRyxRQUFuRyxDQUFWOztBQUF1SCxrQkFBR0MsS0FBSyxLQUFHLE1BQVgsRUFBa0I7QUFBQ1QsMEJBQVUsSUFBRSxJQUFaO0FBQWlCQSwwQkFBVSxJQUFFdkcsS0FBWjtBQUFtQixlQUF2RCxNQUE0RCxJQUFHZ0gsS0FBSyxLQUFHLElBQVgsRUFBZ0I7QUFBQ1IsaUNBQWlCLEdBQUN4RyxLQUFsQjtBQUF5QixlQUExQyxNQUErQyxJQUFHZ0gsS0FBSyxLQUFHLE9BQVgsRUFBbUI7QUFBQ1AsK0JBQWUsR0FBQ3pHLEtBQWhCO0FBQXVCLGVBQTNDLE1BQWdELElBQUdnSCxLQUFLLEtBQUcsT0FBWCxFQUFtQjtBQUFDbkIsNEJBQVksR0FBQ2hCLGFBQWEsQ0FBQzdFLEtBQUQsRUFBTzZGLFlBQVAsQ0FBMUI7QUFBK0NFLHFCQUFLLEdBQUNGLFlBQU47QUFBb0IsZUFBdkYsTUFBNEYsSUFBR21CLEtBQUssS0FBRyxrQkFBWCxFQUE4QjtBQUFDbEIsZ0NBQWdCLEdBQUNqQixhQUFhLENBQUM3RSxLQUFELEVBQU84RixnQkFBUCxDQUE5Qjs7QUFBdUQsb0JBQUc3SyxPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUNrRSw4QkFBWSxDQUFDbEUsT0FBRCxDQUFaO0FBQXNCQSx5QkFBTyxHQUFDaUIsVUFBVSxDQUFDLFlBQVU7QUFBQzBELDZCQUFTO0FBQUksbUJBQXpCLEVBQTBCa0csZ0JBQTFCLENBQWxCO0FBQStEO0FBQUM7QUFBQzs7QUFBQSxnQkFBRzdHLEtBQUssS0FBR3FGLFdBQVgsRUFBdUI7QUFBQyxrQkFBR2lDLFVBQVUsS0FBRyxFQUFoQixFQUFtQjtBQUFDeEMsMkJBQVcsR0FBQ3lDLGlCQUFaOztBQUE4QixvQkFBR0MsZUFBZSxLQUFHLEVBQXJCLEVBQXdCO0FBQUNBLGlDQUFlLEdBQUMsU0FBaEI7QUFBMkI7O0FBQUEsb0JBQUl6TSxLQUFLLEdBQUMsSUFBSThKLFlBQUosQ0FBaUIyQyxlQUFqQixFQUFpQztBQUFDaFAsc0JBQUksRUFBQzhPLFVBQVUsQ0FBQy9FLEtBQVgsQ0FBaUIsQ0FBakIsQ0FBTjtBQUEwQnVDLDZCQUFXLEVBQUN5QztBQUF0QyxpQkFBakMsQ0FBVjtBQUFxR2Isa0JBQUUsQ0FBQ3hDLGFBQUgsQ0FBaUJuSixLQUFqQjs7QUFBd0Isb0JBQUd5TSxlQUFlLEtBQUcsU0FBckIsRUFBK0I7QUFBQ3BCLHNCQUFJLENBQUNNLEVBQUQsRUFBSUEsRUFBRSxDQUFDbEssU0FBUCxFQUFpQnpCLEtBQWpCLENBQUo7QUFBNkI7O0FBQUEsb0JBQUdzTSxZQUFZLEtBQUdsQyxNQUFsQixFQUF5QjtBQUFDO0FBQVE7QUFBQzs7QUFBQW1DLHdCQUFVLEdBQUMsRUFBWDtBQUFjRSw2QkFBZSxHQUFDLEVBQWhCO0FBQW9COztBQUFBeEgsaUJBQUssR0FBQzlGLENBQUMsS0FBRyxLQUFLa0gsVUFBTCxDQUFnQixDQUFoQixDQUFKLEdBQXVCZ0UsUUFBdkIsR0FBZ0NDLFdBQXRDO0FBQW1ELFdBQTluQyxNQUFrb0M7QUFBQyxnQkFBR3JGLEtBQUssS0FBR3FGLFdBQVgsRUFBdUI7QUFBQ3FDLHdCQUFVLEdBQUNJLFFBQVg7QUFBb0I5SCxtQkFBSyxHQUFDc0YsS0FBTjtBQUFhOztBQUFBLGdCQUFHdEYsS0FBSyxLQUFHc0YsS0FBWCxFQUFpQjtBQUFDLGtCQUFHcEwsQ0FBQyxLQUFHLElBQUlrSCxVQUFKLENBQWUsQ0FBZixDQUFQLEVBQXlCO0FBQUN1RywwQkFBVSxHQUFDRyxRQUFRLEdBQUMsQ0FBcEI7QUFBc0I5SCxxQkFBSyxHQUFDdUYsV0FBTjtBQUFtQjtBQUFDLGFBQXRGLE1BQTJGLElBQUd2RixLQUFLLEtBQUd1RixXQUFYLEVBQXVCO0FBQUN2RixtQkFBSyxHQUFDd0YsS0FBTjtBQUFhO0FBQUM7QUFBQztBQUFDO0FBQUM7QUFBQyxHQUFoMkQ7O0FBQWkyRCxNQUFJL0UsUUFBUSxHQUFDLFNBQVNBLFFBQVQsR0FBbUI7QUFBQyxRQUFHNEcsWUFBWSxLQUFHbkMsSUFBZixJQUFxQm1DLFlBQVksS0FBR3BDLFVBQXZDLEVBQWtEO0FBQUNvQyxrQkFBWSxHQUFDckMsT0FBYjs7QUFBcUIsVUFBR2hKLE9BQU8sS0FBRyxDQUFiLEVBQWU7QUFBQ2tFLG9CQUFZLENBQUNsRSxPQUFELENBQVo7QUFBc0JBLGVBQU8sR0FBQyxDQUFSO0FBQVc7O0FBQUFBLGFBQU8sR0FBQ2lCLFVBQVUsQ0FBQyxZQUFVO0FBQUMwRCxpQkFBUztBQUFJLE9BQXpCLEVBQTBCbUcsS0FBMUIsQ0FBbEI7QUFBbURBLFdBQUssR0FBQ2QsYUFBYSxDQUFDQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1UsWUFBWSxHQUFDLEVBQXRCLEVBQXlCRSxLQUFLLEdBQUMsQ0FBL0IsQ0FBRCxDQUFuQjtBQUF1REosUUFBRSxDQUFDdkgsVUFBSCxHQUFjOEYsVUFBZDtBQUF5QixVQUFJbEssS0FBSyxHQUFDLElBQUk2SixLQUFKLENBQVUsT0FBVixDQUFWO0FBQTZCOEIsUUFBRSxDQUFDeEMsYUFBSCxDQUFpQm5KLEtBQWpCO0FBQXdCcUwsVUFBSSxDQUFDTSxFQUFELEVBQUlBLEVBQUUsQ0FBQ25LLE9BQVAsRUFBZXhCLEtBQWYsQ0FBSjtBQUEyQjtBQUFDLEdBQTlXOztBQUErVyxNQUFJaUMsS0FBSyxHQUFDLFNBQVNBLEtBQVQsR0FBZ0I7QUFBQ3FLLGdCQUFZLEdBQUNsQyxNQUFiOztBQUFvQixRQUFHaUMsY0FBYyxJQUFFM0osU0FBbkIsRUFBNkI7QUFBQzJKLG9CQUFjO0FBQUdBLG9CQUFjLEdBQUMzSixTQUFmO0FBQTBCOztBQUFBLFFBQUd6QixPQUFPLEtBQUcsQ0FBYixFQUFlO0FBQUNrRSxrQkFBWSxDQUFDbEUsT0FBRCxDQUFaO0FBQXNCQSxhQUFPLEdBQUMsQ0FBUjtBQUFXOztBQUFBMEssTUFBRSxDQUFDdkgsVUFBSCxHQUFjZ0csTUFBZDtBQUFzQixHQUEvTDs7QUFBZ00sTUFBSXhFLFNBQVMsR0FBQyxTQUFTQSxTQUFULEdBQW9CO0FBQUMzRSxXQUFPLEdBQUMsQ0FBUjs7QUFBVSxRQUFHcUwsWUFBWSxLQUFHckMsT0FBbEIsRUFBMEI7QUFBQyxVQUFHLENBQUMrQixXQUFELElBQWNLLGNBQWMsSUFBRTNKLFNBQWpDLEVBQTJDO0FBQUN1RyxrQkFBVSxDQUFDLElBQUkzRixLQUFKLENBQVUsd0JBQXNCd0ksZ0JBQXRCLEdBQXVDLDhCQUFqRCxDQUFELENBQVY7QUFBNkZPLHNCQUFjO0FBQUdBLHNCQUFjLEdBQUMzSixTQUFmO0FBQTBCLE9BQXBMLE1BQXdMO0FBQUNzSixtQkFBVyxHQUFDLEtBQVo7QUFBa0IvSyxlQUFPLEdBQUNpQixVQUFVLENBQUMsWUFBVTtBQUFDMEQsbUJBQVM7QUFBSSxTQUF6QixFQUEwQmtHLGdCQUExQixDQUFsQjtBQUErRDs7QUFBQTtBQUFROztBQUFBRSxlQUFXLEdBQUMsS0FBWjtBQUFrQi9LLFdBQU8sR0FBQ2lCLFVBQVUsQ0FBQyxZQUFVO0FBQUMwRCxlQUFTO0FBQUksS0FBekIsRUFBMEJrRyxnQkFBMUIsQ0FBbEI7QUFBOERRLGdCQUFZLEdBQUNwQyxVQUFiO0FBQXdCcUMsY0FBVSxHQUFDLEVBQVg7QUFBY0UsbUJBQWUsR0FBQyxFQUFoQjtBQUFtQkQscUJBQWlCLEdBQUN6QyxXQUFsQjtBQUE4QjJDLGNBQVUsR0FBQyxFQUFYO0FBQWNDLGNBQVUsR0FBQyxDQUFYO0FBQWFDLGNBQVUsR0FBQyxDQUFYO0FBQWEzSCxTQUFLLEdBQUNxRixXQUFOLENBQXZnQixDQUF5aEI7QUFDMXhQOztBQUNBLFFBQUkyQyxVQUFVLEdBQUNsSSxHQUFmOztBQUFtQixRQUFHQSxHQUFHLENBQUN5QyxLQUFKLENBQVUsQ0FBVixFQUFZLENBQVosTUFBaUIsT0FBakIsSUFBMEJ6QyxHQUFHLENBQUN5QyxLQUFKLENBQVUsQ0FBVixFQUFZLENBQVosTUFBaUIsT0FBOUMsRUFBc0Q7QUFBQyxVQUFHdUMsV0FBVyxLQUFHLEVBQWpCLEVBQW9CO0FBQUNrRCxrQkFBVSxJQUFFLENBQUNsSSxHQUFHLENBQUN6RixPQUFKLENBQVksR0FBWixNQUFtQixDQUFDLENBQXBCLEdBQXNCLEdBQXRCLEdBQTBCLEdBQTNCLElBQWdDLGNBQWhDLEdBQStDNE4sa0JBQWtCLENBQUNuRCxXQUFELENBQTdFO0FBQTRGO0FBQUM7O0FBQUEsUUFBSW9ELGNBQWMsR0FBQyxFQUFuQjtBQUFzQkEsa0JBQWMsQ0FBQyxRQUFELENBQWQsR0FBeUIsbUJBQXpCOztBQUE2QyxRQUFHOUYsT0FBTyxJQUFFM0UsU0FBWixFQUFzQjtBQUFDLFdBQUksSUFBSW9ELElBQVIsSUFBZ0J1QixPQUFoQixFQUF3QjtBQUFDLFlBQUdwSSxNQUFNLENBQUMrRCxTQUFQLENBQWlCeUUsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDTCxPQUFyQyxFQUE2Q3ZCLElBQTdDLENBQUgsRUFBc0Q7QUFBQ3FILHdCQUFjLENBQUNySCxJQUFELENBQWQsR0FBcUJ1QixPQUFPLENBQUN2QixJQUFELENBQTVCO0FBQW9DO0FBQUM7QUFBQzs7QUFBQSxRQUFHO0FBQUNzRyxlQUFTLENBQUN2SCxJQUFWLENBQWVaLEdBQWYsRUFBbUJxQixPQUFuQixFQUEyQkcsVUFBM0IsRUFBc0NDLFFBQXRDLEVBQStDdUgsVUFBL0MsRUFBMEQvSSxlQUExRCxFQUEwRWlKLGNBQTFFO0FBQTJGLEtBQS9GLENBQStGLE9BQU12TixLQUFOLEVBQVk7QUFBQ3FDLFdBQUs7QUFBRyxZQUFNckMsS0FBTjtBQUFhO0FBQUMsR0FGaXROOztBQUVodE4rTCxJQUFFLENBQUM1RyxHQUFILEdBQU9BLEdBQVA7QUFBVzRHLElBQUUsQ0FBQ3ZILFVBQUgsR0FBYzhGLFVBQWQ7QUFBeUJ5QixJQUFFLENBQUN6SCxlQUFILEdBQW1CQSxlQUFuQjtBQUFtQ3lILElBQUUsQ0FBQ0gsTUFBSCxHQUFVdkosS0FBVjtBQUFnQjJELFdBQVM7QUFBSTs7QUFBQTJGLG1CQUFtQixDQUFDdkksU0FBcEIsR0FBOEIvRCxNQUFNLENBQUN3SCxNQUFQLENBQWNzQyxXQUFXLENBQUMvRixTQUExQixDQUE5QjtBQUFtRXVJLG1CQUFtQixDQUFDdkksU0FBcEIsQ0FBOEJrSCxVQUE5QixHQUF5Q0EsVUFBekM7QUFBb0RxQixtQkFBbUIsQ0FBQ3ZJLFNBQXBCLENBQThCbUgsSUFBOUIsR0FBbUNBLElBQW5DO0FBQXdDb0IsbUJBQW1CLENBQUN2SSxTQUFwQixDQUE4Qm9ILE1BQTlCLEdBQXFDQSxNQUFyQzs7QUFBNENtQixtQkFBbUIsQ0FBQ3ZJLFNBQXBCLENBQThCZixLQUE5QixHQUFvQyxZQUFVO0FBQUMsT0FBS3VKLE1BQUw7QUFBZSxDQUE5RDs7QUFBK0RELG1CQUFtQixDQUFDckIsVUFBcEIsR0FBK0JBLFVBQS9CO0FBQTBDcUIsbUJBQW1CLENBQUNwQixJQUFwQixHQUF5QkEsSUFBekI7QUFBOEJvQixtQkFBbUIsQ0FBQ25CLE1BQXBCLEdBQTJCQSxNQUEzQjtBQUFrQ21CLG1CQUFtQixDQUFDdkksU0FBcEIsQ0FBOEJrQixlQUE5QixHQUE4Q3hCLFNBQTlDO0FBQXdELElBQUkwSyxRQUFRLEdBQUM3QixtQkFBYjtBQUFpQy9LLE9BQU8sV0FBUCxHQUFnQjRNLFFBQWhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFDaGtDLDhDQUFhOztBQUFBNU0sT0FBTyxDQUFDQyxVQUFSLEdBQW1CLElBQW5CO0FBQXdCRCxPQUFPLENBQUNELGNBQVIsR0FBdUJBLGNBQXZCOztBQUFzQyxTQUFTQSxjQUFULENBQXdCOE0sUUFBeEIsRUFBaUM7QUFBQztBQUM3RztBQUNBO0FBQ0E7QUFBQyxHQUFDOVAsTUFBTSxDQUFDK1AscUJBQVAsSUFBOEJwTCxVQUEvQixFQUEyQyxZQUFVO0FBQUMsU0FBSSxJQUFJcUwsQ0FBQyxHQUFDM1AsUUFBUSxDQUFDNFAsZ0JBQVQsQ0FBMEIsdUJBQTFCLENBQU4sRUFBeUQ1TCxDQUFDLEdBQUMyTCxDQUFDLENBQUMxTCxNQUFqRSxFQUF3RUQsQ0FBQyxFQUF6RSxHQUE2RTtBQUFDMkwsT0FBQyxDQUFDM0wsQ0FBRCxDQUFELENBQUs2TCxVQUFMLENBQWdCQyxXQUFoQixDQUE0QkgsQ0FBQyxDQUFDM0wsQ0FBRCxDQUE3QjtBQUFtQzs7QUFBQSxRQUFHeUwsUUFBSCxFQUFZO0FBQUNBLGNBQVE7QUFBSTtBQUFDLEdBQWpNO0FBQW9NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIck0sOENBQWE7O0FBQUEsSUFBSXJRLHNCQUFzQixHQUFDQyxtQkFBTyxDQUFDLHNJQUFELENBQWxDOztBQUFtRnVELE9BQU8sQ0FBQ0MsVUFBUixHQUFtQixJQUFuQjtBQUF3QkQsT0FBTyxDQUFDbU4sU0FBUixHQUFrQkEsU0FBbEI7QUFBNEJuTixPQUFPLENBQUNGLFNBQVIsR0FBa0JBLFNBQWxCO0FBQTRCRSxPQUFPLENBQUNvTixXQUFSLEdBQW9CLEtBQUssQ0FBekI7O0FBQTJCLElBQUkxUSxRQUFRLEdBQUNGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDhGQUFELENBQVIsQ0FBbkM7O0FBQWtGLElBQUlHLFlBQVksR0FBQ0gsbUJBQU8sQ0FBQyxxR0FBRCxDQUF4QjtBQUF3RDs7O0FBQXFCLElBQUk0USxTQUFKO0FBQWMsSUFBSUQsV0FBSjtBQUFnQnBOLE9BQU8sQ0FBQ29OLFdBQVIsR0FBb0JBLFdBQXBCOztBQUFnQyxTQUFTRCxTQUFULEdBQW9CO0FBQUMsTUFBR0UsU0FBSCxFQUFhQSxTQUFTLENBQUM1TCxLQUFWO0FBQWtCNEwsV0FBUyxHQUFDLElBQVY7QUFBZ0I7O0FBQUEsU0FBU3ZOLFNBQVQsQ0FBbUJ2QyxXQUFuQixFQUErQitQLFVBQS9CLEVBQTBDL0IsS0FBMUMsRUFBZ0Q7QUFBQyxNQUFJZ0MsUUFBUSxHQUFDRCxVQUFVLEVBQXZCLENBQUQsQ0FBMkI7O0FBQ3ZqQixNQUFHQyxRQUFRLEtBQUdILFdBQVgsSUFBd0IsQ0FBQzdCLEtBQTVCLEVBQWtDO0FBQU92TCxTQUFPLENBQUNvTixXQUFSLEdBQW9CQSxXQUFXLEdBQUNHLFFBQWhDLENBRG1mLENBQzFjOztBQUNsRkosV0FBUztBQUFHLE1BQUk1SSxHQUFHLEdBQUNoSCxXQUFXLEdBQUMsMEJBQVosR0FBdUM2UCxXQUEvQztBQUEyREMsV0FBUyxHQUFDLENBQUMsR0FBRXpRLFlBQVksQ0FBQ3lDLHFCQUFoQixFQUF1QztBQUFDQyxRQUFJLEVBQUNpRixHQUFOO0FBQVU5RCxXQUFPLEVBQUMsSUFBbEI7QUFBdUJvQixZQUFRLEVBQUM7QUFBaEMsR0FBdkMsQ0FBVjtBQUFxRndMLFdBQVMsQ0FBQzlOLGtCQUFWLENBQTZCLFVBQUFDLEtBQUssRUFBRTtBQUFDLFFBQUdBLEtBQUssQ0FBQ3ZDLElBQU4sQ0FBVzZCLE9BQVgsQ0FBbUIsR0FBbkIsTUFBMEIsQ0FBQyxDQUE5QixFQUFnQzs7QUFBTyxRQUFHO0FBQUMsVUFBSTBPLE9BQU8sR0FBQ3RRLElBQUksQ0FBQ0MsS0FBTCxDQUFXcUMsS0FBSyxDQUFDdkMsSUFBakIsQ0FBWjs7QUFBbUMsVUFBR3VRLE9BQU8sQ0FBQ0MsT0FBWCxFQUFtQjtBQUFDO0FBQ25TO0FBQ0EsU0FBQyxHQUFFL1EsUUFBUSxXQUFYLEVBQXFCdUMsUUFBUSxDQUFDeU8sSUFBOUIsRUFBbUM7QUFBQ2xHLHFCQUFXLEVBQUM7QUFBYixTQUFuQyxFQUFnRUUsSUFBaEUsQ0FBcUUsVUFBQWlHLE9BQU8sRUFBRTtBQUFDLGNBQUdBLE9BQU8sQ0FBQ3pQLE1BQVIsS0FBaUIsR0FBcEIsRUFBd0I7QUFBQ2Usb0JBQVEsQ0FBQ0MsTUFBVDtBQUFtQjtBQUFDLFNBQTVIO0FBQStIO0FBQUMsS0FGd0csQ0FFeEcsT0FBTTBPLEdBQU4sRUFBVTtBQUFDek8sYUFBTyxDQUFDQyxLQUFSLENBQWMsNENBQWQsRUFBMkR3TyxHQUEzRDtBQUFpRTtBQUFDLEdBRmpEO0FBRW9EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0poTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxtQzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsbUJBQU8sQ0FBQywwRUFBcUI7Ozs7Ozs7Ozs7OztBQ0E5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxLQUFLO0FBQ0wsY0FBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLFNBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvcnVudGltZS9hbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbihlLG4pe3JldHVybiBuPW58fHt9LG5ldyBQcm9taXNlKGZ1bmN0aW9uKHQscil7dmFyIHM9bmV3IFhNTEh0dHBSZXF1ZXN0LG89W10sdT1bXSxpPXt9LGE9ZnVuY3Rpb24oKXtyZXR1cm57b2s6Mj09KHMuc3RhdHVzLzEwMHwwKSxzdGF0dXNUZXh0OnMuc3RhdHVzVGV4dCxzdGF0dXM6cy5zdGF0dXMsdXJsOnMucmVzcG9uc2VVUkwsdGV4dDpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUocy5yZXNwb25zZVRleHQpfSxqc29uOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShKU09OLnBhcnNlKHMucmVzcG9uc2VUZXh0KSl9LGJsb2I6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBCbG9iKFtzLnJlc3BvbnNlXSkpfSxjbG9uZTphLGhlYWRlcnM6e2tleXM6ZnVuY3Rpb24oKXtyZXR1cm4gb30sZW50cmllczpmdW5jdGlvbigpe3JldHVybiB1fSxnZXQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGlbZS50b0xvd2VyQ2FzZSgpXX0saGFzOmZ1bmN0aW9uKGUpe3JldHVybiBlLnRvTG93ZXJDYXNlKClpbiBpfX19fTtmb3IodmFyIGwgaW4gcy5vcGVuKG4ubWV0aG9kfHxcImdldFwiLGUsITApLHMub25sb2FkPWZ1bmN0aW9uKCl7cy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKS5yZXBsYWNlKC9eKC4qPyk6W15cXFNcXG5dKihbXFxzXFxTXSo/KSQvZ20sZnVuY3Rpb24oZSxuLHQpe28ucHVzaChuPW4udG9Mb3dlckNhc2UoKSksdS5wdXNoKFtuLHRdKSxpW25dPWlbbl0/aVtuXStcIixcIit0OnR9KSx0KGEoKSl9LHMub25lcnJvcj1yLHMud2l0aENyZWRlbnRpYWxzPVwiaW5jbHVkZVwiPT1uLmNyZWRlbnRpYWxzLG4uaGVhZGVycylzLnNldFJlcXVlc3RIZWFkZXIobCxuLmhlYWRlcnNbbF0pO3Muc2VuZChuLmJvZHl8fG51bGwpfSl9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5mZXRjaC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX3VuZmV0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoXCIpKTt2YXIgX2V2ZW50U291cmNlUG9seWZpbGw9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ldmVudC1zb3VyY2UtcG9seWZpbGxcIikpO3ZhciBfZXZlbnRzb3VyY2U9cmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTt2YXIgX29uRGVtYW5kRW50cmllc1V0aWxzPXJlcXVpcmUoXCIuL29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzXCIpO3ZhciBfZm91Yz1yZXF1aXJlKFwiLi9mb3VjXCIpOy8qIGdsb2JhbHMgX193ZWJwYWNrX2hhc2hfXyAqL2lmKCF3aW5kb3cuRXZlbnRTb3VyY2Upe3dpbmRvdy5FdmVudFNvdXJjZT1fZXZlbnRTb3VyY2VQb2x5ZmlsbC5kZWZhdWx0O312YXIgZGF0YT1KU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpO3Zhcnthc3NldFByZWZpeCxwYWdlfT1kYXRhO2Fzc2V0UHJlZml4PWFzc2V0UHJlZml4fHwnJzt2YXIgbW9zdFJlY2VudEhhc2g9bnVsbDsvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi92YXIgY3VySGFzaD1fX3dlYnBhY2tfaGFzaF9fO3ZhciBob3RVcGRhdGVQYXRoPWFzc2V0UHJlZml4Kyhhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpPycnOicvJykrJ19uZXh0L3N0YXRpYy93ZWJwYWNrLyc7Ly8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpey8vIF9fd2VicGFja19oYXNoX18gaXMgdGhlIGhhc2ggb2YgdGhlIGN1cnJlbnQgY29tcGlsYXRpb24uXG4vLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9yZXR1cm4gbW9zdFJlY2VudEhhc2ghPT1fX3dlYnBhY2tfaGFzaF9fO30vLyBXZWJwYWNrIGRpc2FsbG93cyB1cGRhdGVzIGluIG90aGVyIHN0YXRlcy5cbmZ1bmN0aW9uIGNhbkFwcGx5VXBkYXRlcygpe3JldHVybiBtb2R1bGUuaG90LnN0YXR1cygpPT09J2lkbGUnO30vLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4vLyByZWxvYWRzIHRoZSBwYWdlIHdoZW4gaXQgaGFzIGNoYW5nZWQuXG5hc3luYyBmdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKXtpZighaXNVcGRhdGVBdmFpbGFibGUoKXx8IWNhbkFwcGx5VXBkYXRlcygpKXtyZXR1cm47fXRyeXt2YXIgcmVzPWF3YWl0KDAsX3VuZmV0Y2guZGVmYXVsdCkoXCJcIitob3RVcGRhdGVQYXRoK2N1ckhhc2grXCIuaG90LXVwZGF0ZS5qc29uXCIpO3ZhciBfZGF0YT1hd2FpdCByZXMuanNvbigpO3ZhciBjdXJQYWdlPXBhZ2U9PT0nLyc/J2luZGV4JzpwYWdlO3ZhciBwYWdlVXBkYXRlZD1PYmplY3Qua2V5cyhfZGF0YS5jKS5zb21lKG1vZD0+e3JldHVybiBtb2QuaW5kZXhPZihcInBhZ2VzXCIrKGN1clBhZ2Uuc3Vic3RyKDAsMSk9PT0nLyc/Y3VyUGFnZTpcIi9cIitjdXJQYWdlKSkhPT0tMXx8bW9kLmluZGV4T2YoKFwicGFnZXNcIisoY3VyUGFnZS5zdWJzdHIoMCwxKT09PScvJz9jdXJQYWdlOlwiL1wiK2N1clBhZ2UpKS5yZXBsYWNlKC9cXC8vZywnXFxcXCcpKSE9PS0xO30pO2lmKHBhZ2VVcGRhdGVkKXtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fWVsc2V7Y3VySGFzaD1tb3N0UmVjZW50SGFzaDt9fWNhdGNoKGVycil7Y29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJyZWQgY2hlY2tpbmcgZm9yIHVwZGF0ZScsZXJyKTtkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7fX0oMCxfZXZlbnRzb3VyY2UuZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKSh7cGF0aDphc3NldFByZWZpeCtcIi9fbmV4dC93ZWJwYWNrLWhtclwifSkuYWRkTWVzc2FnZUxpc3RlbmVyKGV2ZW50PT57aWYoZXZlbnQuZGF0YT09PSdcXHVEODNEXFx1REM5Mycpe3JldHVybjt9dHJ5e3ZhciBtZXNzYWdlPUpTT04ucGFyc2UoZXZlbnQuZGF0YSk7aWYobWVzc2FnZS5hY3Rpb249PT0nc3luYyd8fG1lc3NhZ2UuYWN0aW9uPT09J2J1aWx0Jyl7aWYoIW1lc3NhZ2UuaGFzaCl7cmV0dXJuO31tb3N0UmVjZW50SGFzaD1tZXNzYWdlLmhhc2g7dHJ5QXBwbHlVcGRhdGVzKCk7fWVsc2UgaWYobWVzc2FnZS5hY3Rpb249PT0ncmVsb2FkUGFnZScpe2RvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTt9fWNhdGNoKGV4KXtjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcrZXZlbnQuZGF0YSsnXFxuJytleCk7fX0pOygwLF9vbkRlbWFuZEVudHJpZXNVdGlscy5zZXR1cFBpbmcpKGFzc2V0UHJlZml4LCgpPT5wYWdlKTsoMCxfZm91Yy5kaXNwbGF5Q29udGVudCkoKTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldEV2ZW50U291cmNlV3JhcHBlcj1nZXRFdmVudFNvdXJjZVdyYXBwZXI7dmFyIGV2ZW50Q2FsbGJhY2tzPVtdO2Z1bmN0aW9uIEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKXt2YXIgc291cmNlO3ZhciBsYXN0QWN0aXZpdHk9bmV3IERhdGUoKTt2YXIgbGlzdGVuZXJzPVtdO2lmKCFvcHRpb25zLnRpbWVvdXQpe29wdGlvbnMudGltZW91dD0yMCoxMDAwO31pbml0KCk7dmFyIHRpbWVyPXNldEludGVydmFsKGZ1bmN0aW9uKCl7aWYobmV3IERhdGUoKS1sYXN0QWN0aXZpdHk+b3B0aW9ucy50aW1lb3V0KXtoYW5kbGVEaXNjb25uZWN0KCk7fX0sb3B0aW9ucy50aW1lb3V0LzIpO2Z1bmN0aW9uIGluaXQoKXtzb3VyY2U9bmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO3NvdXJjZS5vbm9wZW49aGFuZGxlT25saW5lO3NvdXJjZS5vbmVycm9yPWhhbmRsZURpc2Nvbm5lY3Q7c291cmNlLm9ubWVzc2FnZT1oYW5kbGVNZXNzYWdlO31mdW5jdGlvbiBoYW5kbGVPbmxpbmUoKXtpZihvcHRpb25zLmxvZyljb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJyk7bGFzdEFjdGl2aXR5PW5ldyBEYXRlKCk7fWZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpe2xhc3RBY3Rpdml0eT1uZXcgRGF0ZSgpO2Zvcih2YXIgaT0wO2k8bGlzdGVuZXJzLmxlbmd0aDtpKyspe2xpc3RlbmVyc1tpXShldmVudCk7fWlmKGV2ZW50LmRhdGEuaW5kZXhPZignYWN0aW9uJykhPT0tMSl7ZXZlbnRDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoZXZlbnQpKTt9fWZ1bmN0aW9uIGhhbmRsZURpc2Nvbm5lY3QoKXtjbGVhckludGVydmFsKHRpbWVyKTtzb3VyY2UuY2xvc2UoKTtzZXRUaW1lb3V0KGluaXQsb3B0aW9ucy50aW1lb3V0KTt9cmV0dXJue2Nsb3NlOigpPT57Y2xlYXJJbnRlcnZhbCh0aW1lcik7c291cmNlLmNsb3NlKCk7fSxhZGRNZXNzYWdlTGlzdGVuZXI6ZnVuY3Rpb24gYWRkTWVzc2FnZUxpc3RlbmVyKGZuKXtsaXN0ZW5lcnMucHVzaChmbik7fX07fWZ1bmN0aW9uIGdldEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKXtpZighb3B0aW9ucy5vbmRlbWFuZCl7cmV0dXJue2FkZE1lc3NhZ2VMaXN0ZW5lcjpjYj0+e2V2ZW50Q2FsbGJhY2tzLnB1c2goY2IpO319O31yZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpO30iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3VuZmV0Y2g9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwibmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy91bmZldGNoXCIpKTsvKiBlc2xpbnQtZGlzYWJsZSAqLyAvLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG52YXIgZG9jdW1lbnQ9d2luZG93LmRvY3VtZW50O3ZhciBSZXNwb25zZT13aW5kb3cuUmVzcG9uc2U7dmFyIFRleHREZWNvZGVyPXdpbmRvdy5UZXh0RGVjb2Rlcjt2YXIgVGV4dEVuY29kZXI9d2luZG93LlRleHRFbmNvZGVyO3ZhciBBYm9ydENvbnRyb2xsZXI9d2luZG93LkFib3J0Q29udHJvbGxlcjtpZihBYm9ydENvbnRyb2xsZXI9PXVuZGVmaW5lZCl7QWJvcnRDb250cm9sbGVyPWZ1bmN0aW9uIEFib3J0Q29udHJvbGxlcigpe3RoaXMuc2lnbmFsPW51bGw7dGhpcy5hYm9ydD1mdW5jdGlvbigpe307fTt9ZnVuY3Rpb24gVGV4dERlY29kZXJQb2x5ZmlsbCgpe3RoaXMuYml0c05lZWRlZD0wO3RoaXMuY29kZVBvaW50PTA7fVRleHREZWNvZGVyUG9seWZpbGwucHJvdG90eXBlLmRlY29kZT1mdW5jdGlvbihvY3RldHMpe2Z1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCxzaGlmdCxvY3RldHNDb3VudCl7aWYob2N0ZXRzQ291bnQ9PT0xKXtyZXR1cm4gY29kZVBvaW50Pj0weDAwODA+PnNoaWZ0JiZjb2RlUG9pbnQ8PHNoaWZ0PD0weDA3ZmY7fWlmKG9jdGV0c0NvdW50PT09Mil7cmV0dXJuIGNvZGVQb2ludD49MHgwODAwPj5zaGlmdCYmY29kZVBvaW50PDxzaGlmdDw9MHhkN2ZmfHxjb2RlUG9pbnQ+PTB4ZTAwMD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4ZmZmZjt9aWYob2N0ZXRzQ291bnQ9PT0zKXtyZXR1cm4gY29kZVBvaW50Pj0weDAxMDAwMD4+c2hpZnQmJmNvZGVQb2ludDw8c2hpZnQ8PTB4MTBmZmZmO310aHJvdyBuZXcgRXJyb3IoKTt9ZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCxjb2RlUG9pbnQpe2lmKGJpdHNOZWVkZWQ9PT02KjEpe3JldHVybiBjb2RlUG9pbnQ+PjY+MTU/Mzpjb2RlUG9pbnQ+MzE/MjoxO31pZihiaXRzTmVlZGVkPT09NioyKXtyZXR1cm4gY29kZVBvaW50PjE1PzM6Mjt9aWYoYml0c05lZWRlZD09PTYqMyl7cmV0dXJuIDM7fXRocm93IG5ldyBFcnJvcigpO312YXIgUkVQTEFDRVI9MHhmZmZkO3ZhciBzdHJpbmc9Jyc7dmFyIGJpdHNOZWVkZWQ9dGhpcy5iaXRzTmVlZGVkO3ZhciBjb2RlUG9pbnQ9dGhpcy5jb2RlUG9pbnQ7Zm9yKHZhciBpPTA7aTxvY3RldHMubGVuZ3RoO2krPTEpe3ZhciBvY3RldD1vY3RldHNbaV07aWYoYml0c05lZWRlZCE9PTApe2lmKG9jdGV0PDEyOHx8b2N0ZXQ+MTkxfHwhdmFsaWQoY29kZVBvaW50PDw2fG9jdGV0JjYzLGJpdHNOZWVkZWQtNixvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCkpKXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO319aWYoYml0c05lZWRlZD09PTApe2lmKG9jdGV0Pj0wJiZvY3RldDw9MTI3KXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PW9jdGV0O31lbHNlIGlmKG9jdGV0Pj0xOTImJm9jdGV0PD0yMjMpe2JpdHNOZWVkZWQ9NioxO2NvZGVQb2ludD1vY3RldCYzMTt9ZWxzZSBpZihvY3RldD49MjI0JiZvY3RldDw9MjM5KXtiaXRzTmVlZGVkPTYqMjtjb2RlUG9pbnQ9b2N0ZXQmMTU7fWVsc2UgaWYob2N0ZXQ+PTI0MCYmb2N0ZXQ8PTI0Nyl7Yml0c05lZWRlZD02KjM7Y29kZVBvaW50PW9jdGV0Jjc7fWVsc2V7Yml0c05lZWRlZD0wO2NvZGVQb2ludD1SRVBMQUNFUjt9aWYoYml0c05lZWRlZCE9PTAmJiF2YWxpZChjb2RlUG9pbnQsYml0c05lZWRlZCxvY3RldHNDb3VudChiaXRzTmVlZGVkLGNvZGVQb2ludCkpKXtiaXRzTmVlZGVkPTA7Y29kZVBvaW50PVJFUExBQ0VSO319ZWxzZXtiaXRzTmVlZGVkLT02O2NvZGVQb2ludD1jb2RlUG9pbnQ8PDZ8b2N0ZXQmNjM7fWlmKGJpdHNOZWVkZWQ9PT0wKXtpZihjb2RlUG9pbnQ8PTB4ZmZmZil7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7fWVsc2V7c3RyaW5nKz1TdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZDgwMCsoY29kZVBvaW50LTB4ZmZmZi0xPj4xMCkpO3N0cmluZys9U3RyaW5nLmZyb21DaGFyQ29kZSgweGRjMDArKGNvZGVQb2ludC0weGZmZmYtMSYweDNmZikpO319fXRoaXMuYml0c05lZWRlZD1iaXRzTmVlZGVkO3RoaXMuY29kZVBvaW50PWNvZGVQb2ludDtyZXR1cm4gc3RyaW5nO307Ly8gRmlyZWZveCA8IDM4IHRocm93cyBhbiBlcnJvciB3aXRoIHN0cmVhbSBvcHRpb25cbnZhciBzdXBwb3J0c1N0cmVhbU9wdGlvbj1mdW5jdGlvbiBzdXBwb3J0c1N0cmVhbU9wdGlvbigpe3RyeXtyZXR1cm4gbmV3IFRleHREZWNvZGVyKCkuZGVjb2RlKG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSgndGVzdCcpLHtzdHJlYW06dHJ1ZX0pPT09J3Rlc3QnO31jYXRjaChlcnJvcil7Y29uc29sZS5sb2coZXJyb3IpO31yZXR1cm4gZmFsc2U7fTsvLyBJRSwgRWRnZVxuaWYoVGV4dERlY29kZXI9PXVuZGVmaW5lZHx8VGV4dEVuY29kZXI9PXVuZGVmaW5lZHx8IXN1cHBvcnRzU3RyZWFtT3B0aW9uKCkpe1RleHREZWNvZGVyPVRleHREZWNvZGVyUG9seWZpbGw7fXZhciBrPWZ1bmN0aW9uIGsoKXt9O2Z1bmN0aW9uIFhIUldyYXBwZXIoeGhyKXt0aGlzLndpdGhDcmVkZW50aWFscz1mYWxzZTt0aGlzLnJlc3BvbnNlVHlwZT0nJzt0aGlzLnJlYWR5U3RhdGU9MDt0aGlzLnN0YXR1cz0wO3RoaXMuc3RhdHVzVGV4dD0nJzt0aGlzLnJlc3BvbnNlVGV4dD0nJzt0aGlzLm9ucHJvZ3Jlc3M9azt0aGlzLm9ucmVhZHlzdGF0ZWNoYW5nZT1rO3RoaXMuX2NvbnRlbnRUeXBlPScnO3RoaXMuX3hocj14aHI7dGhpcy5fc2VuZFRpbWVvdXQ9MDt0aGlzLl9hYm9ydD1rO31YSFJXcmFwcGVyLnByb3RvdHlwZS5vcGVuPWZ1bmN0aW9uKG1ldGhvZCx1cmwpe3RoaXMuX2Fib3J0KHRydWUpO3ZhciB0aGF0PXRoaXM7dmFyIHhocj10aGlzLl94aHI7dmFyIHN0YXRlPTE7dmFyIHRpbWVvdXQ9MDt0aGlzLl9hYm9ydD1mdW5jdGlvbihzaWxlbnQpe2lmKHRoYXQuX3NlbmRUaW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRoYXQuX3NlbmRUaW1lb3V0KTt0aGF0Ll9zZW5kVGltZW91dD0wO31pZihzdGF0ZT09PTF8fHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT00O3hoci5vbmxvYWQ9azt4aHIub25lcnJvcj1rO3hoci5vbmFib3J0PWs7eGhyLm9ucHJvZ3Jlc3M9azt4aHIub25yZWFkeXN0YXRlY2hhbmdlPWs7Ly8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbi8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbnhoci5hYm9ydCgpO2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO31pZighc2lsZW50KXt0aGF0LnJlYWR5U3RhdGU9NDt0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO319c3RhdGU9MDt9O3ZhciBvblN0YXJ0PWZ1bmN0aW9uIG9uU3RhcnQoKXtpZihzdGF0ZT09PTEpey8vIHN0YXRlID0gMjtcbnZhciBzdGF0dXM9MDt2YXIgc3RhdHVzVGV4dD0nJzt2YXIgY29udGVudFR5cGU9dW5kZWZpbmVkO2lmKCEoJ2NvbnRlbnRUeXBlJ2luIHhocikpe3RyeXtzdGF0dXM9eGhyLnN0YXR1cztzdGF0dXNUZXh0PXhoci5zdGF0dXNUZXh0O2NvbnRlbnRUeXBlPXhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7fWNhdGNoKGVycm9yKXsvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXG4vLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkxMjFcbnN0YXR1cz0wO3N0YXR1c1RleHQ9Jyc7Y29udGVudFR5cGU9dW5kZWZpbmVkOy8vIEZpcmVmb3ggPCAxNCwgQ2hyb21lID8sIFNhZmFyaSA/XG4vLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD03Nzg1NFxufX1lbHNle3N0YXR1cz0yMDA7c3RhdHVzVGV4dD0nT0snO2NvbnRlbnRUeXBlPXhoci5jb250ZW50VHlwZTt9aWYoc3RhdHVzIT09MCl7c3RhdGU9Mjt0aGF0LnJlYWR5U3RhdGU9Mjt0aGF0LnN0YXR1cz1zdGF0dXM7dGhhdC5zdGF0dXNUZXh0PXN0YXR1c1RleHQ7dGhhdC5fY29udGVudFR5cGU9Y29udGVudFR5cGU7dGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTt9fX07dmFyIG9uUHJvZ3Jlc3M9ZnVuY3Rpb24gb25Qcm9ncmVzcygpe29uU3RhcnQoKTtpZihzdGF0ZT09PTJ8fHN0YXRlPT09Myl7c3RhdGU9Mzt2YXIgcmVzcG9uc2VUZXh0PScnO3RyeXtyZXNwb25zZVRleHQ9eGhyLnJlc3BvbnNlVGV4dDt9Y2F0Y2goZXJyb3Ipey8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3Rcbn10aGF0LnJlYWR5U3RhdGU9Mzt0aGF0LnJlc3BvbnNlVGV4dD1yZXNwb25zZVRleHQ7dGhhdC5vbnByb2dyZXNzKCk7fX07dmFyIG9uRmluaXNoPWZ1bmN0aW9uIG9uRmluaXNoKCl7Ly8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXCJcbm9uUHJvZ3Jlc3MoKTtpZihzdGF0ZT09PTF8fHN0YXRlPT09Mnx8c3RhdGU9PT0zKXtzdGF0ZT00O2lmKHRpbWVvdXQhPT0wKXtjbGVhclRpbWVvdXQodGltZW91dCk7dGltZW91dD0wO310aGF0LnJlYWR5U3RhdGU9NDt0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpO319O3ZhciBvblJlYWR5U3RhdGVDaGFuZ2U9ZnVuY3Rpb24gb25SZWFkeVN0YXRlQ2hhbmdlKCl7aWYoeGhyIT11bmRlZmluZWQpey8vIE9wZXJhIDEyXG5pZih4aHIucmVhZHlTdGF0ZT09PTQpe29uRmluaXNoKCk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT0zKXtvblByb2dyZXNzKCk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT0yKXtvblN0YXJ0KCk7fX19O3ZhciBvblRpbWVvdXQ9ZnVuY3Rpb24gb25UaW1lb3V0KCl7dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSw1MDApO2lmKHhoci5yZWFkeVN0YXRlPT09Myl7b25Qcm9ncmVzcygpO319Oy8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXG54aHIub25sb2FkPW9uRmluaXNoO3hoci5vbmVycm9yPW9uRmluaXNoOy8vIGltcHJvcGVyIGZpeCB0byBtYXRjaCBGaXJlZm94IGJlaGF2aW91ciwgYnV0IGl0IGlzIGJldHRlciB0aGFuIGp1c3QgaWdub3JlIGFib3J0XG4vLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4vLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcbi8vIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xNTM1NzBcbi8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xueGhyLm9uYWJvcnQ9b25GaW5pc2g7Ly8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG5pZighKCdzZW5kQXNCaW5hcnknaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSYmISgnbW96QW5vbidpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpKXt4aHIub25wcm9ncmVzcz1vblByb2dyZXNzO30vLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXG4vLyBPcGVyYSA8IDEyXG4vLyBGaXJlZm94IDwgMy41XG4vLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcbi8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4vLyBzZWUgYWxzbyAjNjRcbnhoci5vbnJlYWR5c3RhdGVjaGFuZ2U9b25SZWFkeVN0YXRlQ2hhbmdlO2lmKCdjb250ZW50VHlwZSdpbiB4aHIpe3VybCs9KHVybC5pbmRleE9mKCc/Jyk9PT0tMT8nPyc6JyYnKSsncGFkZGluZz10cnVlJzt9eGhyLm9wZW4obWV0aG9kLHVybCx0cnVlKTtpZigncmVhZHlTdGF0ZSdpbiB4aHIpey8vIHdvcmthcm91bmQgZm9yIE9wZXJhIDEyIGlzc3VlIHdpdGggXCJwcm9ncmVzc1wiIGV2ZW50c1xuLy8gIzkxXG50aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LDApO319O1hIUldyYXBwZXIucHJvdG90eXBlLmFib3J0PWZ1bmN0aW9uKCl7dGhpcy5fYWJvcnQoZmFsc2UpO307WEhSV3JhcHBlci5wcm90b3R5cGUuZ2V0UmVzcG9uc2VIZWFkZXI9ZnVuY3Rpb24obmFtZSl7cmV0dXJuIHRoaXMuX2NvbnRlbnRUeXBlO307WEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbihuYW1lLHZhbHVlKXt2YXIgeGhyPXRoaXMuX3hocjtpZignc2V0UmVxdWVzdEhlYWRlcidpbiB4aHIpe3hoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsdmFsdWUpO319O1hIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycz1mdW5jdGlvbigpe3JldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIT11bmRlZmluZWQ/dGhpcy5feGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpOicnO307WEhSV3JhcHBlci5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbigpey8vIGxvYWRpbmcgaW5kaWNhdG9yIGluIFNhZmFyaSA8ID8gKDYpLCBDaHJvbWUgPCAxNCwgRmlyZWZveFxuaWYoISgnb250aW1lb3V0J2luIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkmJmRvY3VtZW50IT11bmRlZmluZWQmJmRvY3VtZW50LnJlYWR5U3RhdGUhPXVuZGVmaW5lZCYmZG9jdW1lbnQucmVhZHlTdGF0ZSE9PSdjb21wbGV0ZScpe3ZhciB0aGF0PXRoaXM7dGhhdC5fc2VuZFRpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe3RoYXQuX3NlbmRUaW1lb3V0PTA7dGhhdC5zZW5kKCk7fSw0KTtyZXR1cm47fXZhciB4aHI9dGhpcy5feGhyOy8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxueGhyLndpdGhDcmVkZW50aWFscz10aGlzLndpdGhDcmVkZW50aWFsczt4aHIucmVzcG9uc2VUeXBlPXRoaXMucmVzcG9uc2VUeXBlO3RyeXsvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXG54aHIuc2VuZCh1bmRlZmluZWQpO31jYXRjaChlcnJvcjEpey8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcbnRocm93IGVycm9yMTt9fTtmdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKXtyZXR1cm4gbmFtZS5yZXBsYWNlKC9bQS1aXS9nLGZ1bmN0aW9uKGMpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGMuY2hhckNvZGVBdCgwKSsweDIwKTt9KTt9ZnVuY3Rpb24gSGVhZGVyc1BvbHlmaWxsKGFsbCl7Ly8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcbnZhciBtYXA9T2JqZWN0LmNyZWF0ZShudWxsKTt2YXIgYXJyYXk9YWxsLnNwbGl0KCdcXHJcXG4nKTtmb3IodmFyIGk9MDtpPGFycmF5Lmxlbmd0aDtpKz0xKXt2YXIgbGluZT1hcnJheVtpXTt2YXIgcGFydHM9bGluZS5zcGxpdCgnOiAnKTt2YXIgbmFtZT1wYXJ0cy5zaGlmdCgpO3ZhciB2YWx1ZT1wYXJ0cy5qb2luKCc6ICcpO21hcFt0b0xvd2VyQ2FzZShuYW1lKV09dmFsdWU7fXRoaXMuX21hcD1tYXA7fUhlYWRlcnNQb2x5ZmlsbC5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKG5hbWUpe3JldHVybiB0aGlzLl9tYXBbdG9Mb3dlckNhc2UobmFtZSldO307ZnVuY3Rpb24gWEhSVHJhbnNwb3J0KCl7fVhIUlRyYW5zcG9ydC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbih4aHIsb25TdGFydENhbGxiYWNrLG9uUHJvZ3Jlc3NDYWxsYmFjayxvbkZpbmlzaENhbGxiYWNrLHVybCx3aXRoQ3JlZGVudGlhbHMsaGVhZGVycyl7eGhyLm9wZW4oJ0dFVCcsdXJsKTt2YXIgb2Zmc2V0PTA7eGhyLm9ucHJvZ3Jlc3M9ZnVuY3Rpb24oKXt2YXIgcmVzcG9uc2VUZXh0PXhoci5yZXNwb25zZVRleHQ7dmFyIGNodW5rPXJlc3BvbnNlVGV4dC5zbGljZShvZmZzZXQpO29mZnNldCs9Y2h1bmsubGVuZ3RoO29uUHJvZ3Jlc3NDYWxsYmFjayhjaHVuayk7fTt4aHIub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7aWYoeGhyLnJlYWR5U3RhdGU9PT0yKXt2YXIgc3RhdHVzPXhoci5zdGF0dXM7dmFyIHN0YXR1c1RleHQ9eGhyLnN0YXR1c1RleHQ7dmFyIGNvbnRlbnRUeXBlPXhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7dmFyIGhlYWRlcnM9eGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO29uU3RhcnRDYWxsYmFjayhzdGF0dXMsc3RhdHVzVGV4dCxjb250ZW50VHlwZSxuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLGZ1bmN0aW9uKCl7eGhyLmFib3J0KCk7fSk7fWVsc2UgaWYoeGhyLnJlYWR5U3RhdGU9PT00KXtvbkZpbmlzaENhbGxiYWNrKCk7fX07eGhyLndpdGhDcmVkZW50aWFscz13aXRoQ3JlZGVudGlhbHM7eGhyLnJlc3BvbnNlVHlwZT0ndGV4dCc7Zm9yKHZhciBuYW1lIGluIGhlYWRlcnMpe2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLG5hbWUpKXt4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLGhlYWRlcnNbbmFtZV0pO319eGhyLnNlbmQoKTt9O2Z1bmN0aW9uIEhlYWRlcnNXcmFwcGVyKGhlYWRlcnMpe3RoaXMuX2hlYWRlcnM9aGVhZGVyczt9SGVhZGVyc1dyYXBwZXIucHJvdG90eXBlLmdldD1mdW5jdGlvbihuYW1lKXtyZXR1cm4gdGhpcy5faGVhZGVycy5nZXQobmFtZSk7fTtmdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpe31GZXRjaFRyYW5zcG9ydC5wcm90b3R5cGUub3Blbj1mdW5jdGlvbih4aHIsb25TdGFydENhbGxiYWNrLG9uUHJvZ3Jlc3NDYWxsYmFjayxvbkZpbmlzaENhbGxiYWNrLHVybCx3aXRoQ3JlZGVudGlhbHMsaGVhZGVycyl7dmFyIGNvbnRyb2xsZXI9bmV3IEFib3J0Q29udHJvbGxlcigpO3ZhciBzaWduYWw9Y29udHJvbGxlci5zaWduYWw7Ly8gc2VlICMxMjBcbnZhciB0ZXh0RGVjb2Rlcj1uZXcgVGV4dERlY29kZXIoKTsoMCxfdW5mZXRjaC5kZWZhdWx0KSh1cmwse2hlYWRlcnM6aGVhZGVycyxjcmVkZW50aWFsczp3aXRoQ3JlZGVudGlhbHM/J2luY2x1ZGUnOidzYW1lLW9yaWdpbicsc2lnbmFsOnNpZ25hbCxjYWNoZTonbm8tc3RvcmUnfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7dmFyIHJlYWRlcj1yZXNwb25zZS5ib2R5LmdldFJlYWRlcigpO29uU3RhcnRDYWxsYmFjayhyZXNwb25zZS5zdGF0dXMscmVzcG9uc2Uuc3RhdHVzVGV4dCxyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJyksbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLGZ1bmN0aW9uKCl7Y29udHJvbGxlci5hYm9ydCgpO3JlYWRlci5jYW5jZWwoKTt9KTtyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSxyZWplY3Qpe3ZhciByZWFkTmV4dENodW5rPWZ1bmN0aW9uIHJlYWROZXh0Q2h1bmsoKXtyZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtpZihyZXN1bHQuZG9uZSl7Ly8gTm90ZTogYnl0ZXMgaW4gdGV4dERlY29kZXIgYXJlIGlnbm9yZWRcbnJlc29sdmUodW5kZWZpbmVkKTt9ZWxzZXt2YXIgY2h1bms9dGV4dERlY29kZXIuZGVjb2RlKHJlc3VsdC52YWx1ZSx7c3RyZWFtOnRydWV9KTtvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspO3JlYWROZXh0Q2h1bmsoKTt9fSlbJ2NhdGNoJ10oZnVuY3Rpb24oZXJyb3Ipe3JlamVjdChlcnJvcik7fSk7fTtyZWFkTmV4dENodW5rKCk7fSk7fSkudGhlbihmdW5jdGlvbihyZXN1bHQpe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gcmVzdWx0O30sZnVuY3Rpb24oZXJyb3Ipe29uRmluaXNoQ2FsbGJhY2soKTtyZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO30pO307ZnVuY3Rpb24gRXZlbnRUYXJnZXQoKXt0aGlzLl9saXN0ZW5lcnM9T2JqZWN0LmNyZWF0ZShudWxsKTt9ZnVuY3Rpb24gdGhyb3dFcnJvcihlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZTt9LDApO31FdmVudFRhcmdldC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihldmVudCl7ZXZlbnQudGFyZ2V0PXRoaXM7dmFyIHR5cGVMaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzW2V2ZW50LnR5cGVdO2lmKHR5cGVMaXN0ZW5lcnMhPXVuZGVmaW5lZCl7dmFyIGxlbmd0aD10eXBlTGlzdGVuZXJzLmxlbmd0aDtmb3IodmFyIGk9MDtpPGxlbmd0aDtpKz0xKXt2YXIgbGlzdGVuZXI9dHlwZUxpc3RlbmVyc1tpXTt0cnl7aWYodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50PT09J2Z1bmN0aW9uJyl7bGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpO31lbHNle2xpc3RlbmVyLmNhbGwodGhpcyxldmVudCk7fX1jYXRjaChlKXt0aHJvd0Vycm9yKGUpO319fX07RXZlbnRUYXJnZXQucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24odHlwZSxsaXN0ZW5lcil7dHlwZT1TdHJpbmcodHlwZSk7dmFyIGxpc3RlbmVycz10aGlzLl9saXN0ZW5lcnM7dmFyIHR5cGVMaXN0ZW5lcnM9bGlzdGVuZXJzW3R5cGVdO2lmKHR5cGVMaXN0ZW5lcnM9PXVuZGVmaW5lZCl7dHlwZUxpc3RlbmVycz1bXTtsaXN0ZW5lcnNbdHlwZV09dHlwZUxpc3RlbmVyczt9dmFyIGZvdW5kPWZhbHNlO2Zvcih2YXIgaT0wO2k8dHlwZUxpc3RlbmVycy5sZW5ndGg7aSs9MSl7aWYodHlwZUxpc3RlbmVyc1tpXT09PWxpc3RlbmVyKXtmb3VuZD10cnVlO319aWYoIWZvdW5kKXt0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO319O0V2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKHR5cGUsbGlzdGVuZXIpe3R5cGU9U3RyaW5nKHR5cGUpO3ZhciBsaXN0ZW5lcnM9dGhpcy5fbGlzdGVuZXJzO3ZhciB0eXBlTGlzdGVuZXJzPWxpc3RlbmVyc1t0eXBlXTtpZih0eXBlTGlzdGVuZXJzIT11bmRlZmluZWQpe3ZhciBmaWx0ZXJlZD1bXTtmb3IodmFyIGk9MDtpPHR5cGVMaXN0ZW5lcnMubGVuZ3RoO2krPTEpe2lmKHR5cGVMaXN0ZW5lcnNbaV0hPT1saXN0ZW5lcil7ZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKTt9fWlmKGZpbHRlcmVkLmxlbmd0aD09PTApe2RlbGV0ZSBsaXN0ZW5lcnNbdHlwZV07fWVsc2V7bGlzdGVuZXJzW3R5cGVdPWZpbHRlcmVkO319fTtmdW5jdGlvbiBFdmVudCh0eXBlKXt0aGlzLnR5cGU9dHlwZTt0aGlzLnRhcmdldD11bmRlZmluZWQ7fWZ1bmN0aW9uIE1lc3NhZ2VFdmVudCh0eXBlLG9wdGlvbnMpe0V2ZW50LmNhbGwodGhpcyx0eXBlKTt0aGlzLmRhdGE9b3B0aW9ucy5kYXRhO3RoaXMubGFzdEV2ZW50SWQ9b3B0aW9ucy5sYXN0RXZlbnRJZDt9TWVzc2FnZUV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7ZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsb3B0aW9ucyl7RXZlbnQuY2FsbCh0aGlzLHR5cGUpO3RoaXMuc3RhdHVzPW9wdGlvbnMuc3RhdHVzO3RoaXMuc3RhdHVzVGV4dD1vcHRpb25zLnN0YXR1c1RleHQ7dGhpcy5oZWFkZXJzPW9wdGlvbnMuaGVhZGVyczt9Q29ubmVjdGlvbkV2ZW50LnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKEV2ZW50LnByb3RvdHlwZSk7dmFyIFdBSVRJTkc9LTE7dmFyIENPTk5FQ1RJTkc9MDt2YXIgT1BFTj0xO3ZhciBDTE9TRUQ9Mjt2YXIgQUZURVJfQ1I9LTE7dmFyIEZJRUxEX1NUQVJUPTA7dmFyIEZJRUxEPTE7dmFyIFZBTFVFX1NUQVJUPTI7dmFyIFZBTFVFPTM7dmFyIGNvbnRlbnRUeXBlUmVnRXhwPS9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2k7dmFyIE1JTklNVU1fRFVSQVRJT049MTAwMDt2YXIgTUFYSU1VTV9EVVJBVElPTj0xODAwMDAwMDt2YXIgcGFyc2VEdXJhdGlvbj1mdW5jdGlvbiBwYXJzZUR1cmF0aW9uKHZhbHVlLGRlZil7dmFyIG49cGFyc2VJbnQodmFsdWUsMTApO2lmKG4hPT1uKXtuPWRlZjt9cmV0dXJuIGNsYW1wRHVyYXRpb24obik7fTt2YXIgY2xhbXBEdXJhdGlvbj1mdW5jdGlvbiBjbGFtcER1cmF0aW9uKG4pe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChuLE1JTklNVU1fRFVSQVRJT04pLE1BWElNVU1fRFVSQVRJT04pO307dmFyIGZpcmU9ZnVuY3Rpb24gZmlyZSh0aGF0LGYsZXZlbnQpe3RyeXtpZih0eXBlb2YgZj09PSdmdW5jdGlvbicpe2YuY2FsbCh0aGF0LGV2ZW50KTt9fWNhdGNoKGUpe3Rocm93RXJyb3IoZSk7fX07ZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsb3B0aW9ucyl7RXZlbnRUYXJnZXQuY2FsbCh0aGlzKTt0aGlzLm9ub3Blbj11bmRlZmluZWQ7dGhpcy5vbm1lc3NhZ2U9dW5kZWZpbmVkO3RoaXMub25lcnJvcj11bmRlZmluZWQ7dGhpcy51cmw9dW5kZWZpbmVkO3RoaXMucmVhZHlTdGF0ZT11bmRlZmluZWQ7dGhpcy53aXRoQ3JlZGVudGlhbHM9dW5kZWZpbmVkO3RoaXMuX2Nsb3NlPXVuZGVmaW5lZDtzdGFydCh0aGlzLHVybCxvcHRpb25zKTt9dmFyIGlzRmV0Y2hTdXBwb3J0ZWQ9X3VuZmV0Y2guZGVmYXVsdCE9dW5kZWZpbmVkJiZSZXNwb25zZSE9dW5kZWZpbmVkJiYnYm9keSdpbiBSZXNwb25zZS5wcm90b3R5cGU7ZnVuY3Rpb24gc3RhcnQoZXMsdXJsLG9wdGlvbnMpe3VybD1TdHJpbmcodXJsKTt2YXIgd2l0aENyZWRlbnRpYWxzPW9wdGlvbnMhPXVuZGVmaW5lZCYmQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscyk7dmFyIGluaXRpYWxSZXRyeT1jbGFtcER1cmF0aW9uKDEwMDApO3ZhciBoZWFydGJlYXRUaW1lb3V0PW9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0IT11bmRlZmluZWQ/cGFyc2VEdXJhdGlvbihvcHRpb25zLmhlYXJ0YmVhdFRpbWVvdXQsNDUwMDApOmNsYW1wRHVyYXRpb24oNDUwMDApO3ZhciBsYXN0RXZlbnRJZD0nJzt2YXIgcmV0cnk9aW5pdGlhbFJldHJ5O3ZhciB3YXNBY3Rpdml0eT1mYWxzZTt2YXIgaGVhZGVycz1vcHRpb25zIT11bmRlZmluZWQmJm9wdGlvbnMuaGVhZGVycyE9dW5kZWZpbmVkP0pTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSk6dW5kZWZpbmVkO3ZhciBDdXJyZW50VHJhbnNwb3J0PW9wdGlvbnMhPXVuZGVmaW5lZCYmb3B0aW9ucy5UcmFuc3BvcnQhPXVuZGVmaW5lZD9vcHRpb25zLlRyYW5zcG9ydDpYTUxIdHRwUmVxdWVzdDt2YXIgeGhyPWlzRmV0Y2hTdXBwb3J0ZWQmJiEob3B0aW9ucyE9dW5kZWZpbmVkJiZvcHRpb25zLlRyYW5zcG9ydCE9dW5kZWZpbmVkKT91bmRlZmluZWQ6bmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSk7dmFyIHRyYW5zcG9ydD14aHI9PXVuZGVmaW5lZD9uZXcgRmV0Y2hUcmFuc3BvcnQoKTpuZXcgWEhSVHJhbnNwb3J0KCk7dmFyIGNhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt2YXIgdGltZW91dD0wO3ZhciBjdXJyZW50U3RhdGU9V0FJVElORzt2YXIgZGF0YUJ1ZmZlcj0nJzt2YXIgbGFzdEV2ZW50SWRCdWZmZXI9Jyc7dmFyIGV2ZW50VHlwZUJ1ZmZlcj0nJzt2YXIgdGV4dEJ1ZmZlcj0nJzt2YXIgc3RhdGU9RklFTERfU1RBUlQ7dmFyIGZpZWxkU3RhcnQ9MDt2YXIgdmFsdWVTdGFydD0wO3ZhciBvblN0YXJ0PWZ1bmN0aW9uIG9uU3RhcnQoc3RhdHVzLHN0YXR1c1RleHQsY29udGVudFR5cGUsaGVhZGVycyxjYW5jZWwpe2lmKGN1cnJlbnRTdGF0ZT09PUNPTk5FQ1RJTkcpe2NhbmNlbEZ1bmN0aW9uPWNhbmNlbDtpZihzdGF0dXM9PT0yMDAmJmNvbnRlbnRUeXBlIT11bmRlZmluZWQmJmNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpKXtjdXJyZW50U3RhdGU9T1BFTjt3YXNBY3Rpdml0eT10cnVlO3JldHJ5PWluaXRpYWxSZXRyeTtlcy5yZWFkeVN0YXRlPU9QRU47dmFyIGV2ZW50PW5ldyBDb25uZWN0aW9uRXZlbnQoJ29wZW4nLHtzdGF0dXM6c3RhdHVzLHN0YXR1c1RleHQ6c3RhdHVzVGV4dCxoZWFkZXJzOmhlYWRlcnN9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9ub3BlbixldmVudCk7fWVsc2V7dmFyIG1lc3NhZ2U9Jyc7aWYoc3RhdHVzIT09MjAwKXtpZihzdGF0dXNUZXh0KXtzdGF0dXNUZXh0PXN0YXR1c1RleHQucmVwbGFjZSgvXFxzKy9nLCcgJyk7fW1lc3NhZ2U9XCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIitzdGF0dXMrJyAnK3N0YXR1c1RleHQrJyB0aGF0IGlzIG5vdCAyMDAuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLic7fWVsc2V7bWVzc2FnZT1cIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgQ29udGVudC1UeXBlIHNwZWNpZnlpbmcgYW4gdW5zdXBwb3J0ZWQgdHlwZTogXCIrKGNvbnRlbnRUeXBlPT11bmRlZmluZWQ/Jy0nOmNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywnICcpKSsnLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nO310aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7Y2xvc2UoKTt2YXIgZXZlbnQ9bmV3IENvbm5lY3Rpb25FdmVudCgnZXJyb3InLHtzdGF0dXM6c3RhdHVzLHN0YXR1c1RleHQ6c3RhdHVzVGV4dCxoZWFkZXJzOmhlYWRlcnN9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtmaXJlKGVzLGVzLm9uZXJyb3IsZXZlbnQpO319fTt2YXIgb25Qcm9ncmVzcz1mdW5jdGlvbiBvblByb2dyZXNzKHRleHRDaHVuayl7aWYoY3VycmVudFN0YXRlPT09T1BFTil7dmFyIG49LTE7Zm9yKHZhciBpPTA7aTx0ZXh0Q2h1bmsubGVuZ3RoO2krPTEpe3ZhciBjPXRleHRDaHVuay5jaGFyQ29kZUF0KGkpO2lmKGM9PT0nXFxuJy5jaGFyQ29kZUF0KDApfHxjPT09J1xccicuY2hhckNvZGVBdCgwKSl7bj1pO319dmFyIGNodW5rPShuIT09LTE/dGV4dEJ1ZmZlcjonJykrdGV4dENodW5rLnNsaWNlKDAsbisxKTt0ZXh0QnVmZmVyPShuPT09LTE/dGV4dEJ1ZmZlcjonJykrdGV4dENodW5rLnNsaWNlKG4rMSk7aWYoY2h1bmshPT0nJyl7d2FzQWN0aXZpdHk9dHJ1ZTt9Zm9yKHZhciBwb3NpdGlvbj0wO3Bvc2l0aW9uPGNodW5rLmxlbmd0aDtwb3NpdGlvbis9MSl7dmFyIGM9Y2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbik7aWYoc3RhdGU9PT1BRlRFUl9DUiYmYz09PSdcXG4nLmNoYXJDb2RlQXQoMCkpe3N0YXRlPUZJRUxEX1NUQVJUO31lbHNle2lmKHN0YXRlPT09QUZURVJfQ1Ipe3N0YXRlPUZJRUxEX1NUQVJUO31pZihjPT09J1xccicuY2hhckNvZGVBdCgwKXx8Yz09PSdcXG4nLmNoYXJDb2RlQXQoMCkpe2lmKHN0YXRlIT09RklFTERfU1RBUlQpe2lmKHN0YXRlPT09RklFTEQpe3ZhbHVlU3RhcnQ9cG9zaXRpb24rMTt9dmFyIGZpZWxkPWNodW5rLnNsaWNlKGZpZWxkU3RhcnQsdmFsdWVTdGFydC0xKTt2YXIgdmFsdWU9Y2h1bmsuc2xpY2UodmFsdWVTdGFydCsodmFsdWVTdGFydDxwb3NpdGlvbiYmY2h1bmsuY2hhckNvZGVBdCh2YWx1ZVN0YXJ0KT09PScgJy5jaGFyQ29kZUF0KDApPzE6MCkscG9zaXRpb24pO2lmKGZpZWxkPT09J2RhdGEnKXtkYXRhQnVmZmVyKz0nXFxuJztkYXRhQnVmZmVyKz12YWx1ZTt9ZWxzZSBpZihmaWVsZD09PSdpZCcpe2xhc3RFdmVudElkQnVmZmVyPXZhbHVlO31lbHNlIGlmKGZpZWxkPT09J2V2ZW50Jyl7ZXZlbnRUeXBlQnVmZmVyPXZhbHVlO31lbHNlIGlmKGZpZWxkPT09J3JldHJ5Jyl7aW5pdGlhbFJldHJ5PXBhcnNlRHVyYXRpb24odmFsdWUsaW5pdGlhbFJldHJ5KTtyZXRyeT1pbml0aWFsUmV0cnk7fWVsc2UgaWYoZmllbGQ9PT0naGVhcnRiZWF0VGltZW91dCcpe2hlYXJ0YmVhdFRpbWVvdXQ9cGFyc2VEdXJhdGlvbih2YWx1ZSxoZWFydGJlYXRUaW1lb3V0KTtpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30saGVhcnRiZWF0VGltZW91dCk7fX19aWYoc3RhdGU9PT1GSUVMRF9TVEFSVCl7aWYoZGF0YUJ1ZmZlciE9PScnKXtsYXN0RXZlbnRJZD1sYXN0RXZlbnRJZEJ1ZmZlcjtpZihldmVudFR5cGVCdWZmZXI9PT0nJyl7ZXZlbnRUeXBlQnVmZmVyPSdtZXNzYWdlJzt9dmFyIGV2ZW50PW5ldyBNZXNzYWdlRXZlbnQoZXZlbnRUeXBlQnVmZmVyLHtkYXRhOmRhdGFCdWZmZXIuc2xpY2UoMSksbGFzdEV2ZW50SWQ6bGFzdEV2ZW50SWRCdWZmZXJ9KTtlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtpZihldmVudFR5cGVCdWZmZXI9PT0nbWVzc2FnZScpe2ZpcmUoZXMsZXMub25tZXNzYWdlLGV2ZW50KTt9aWYoY3VycmVudFN0YXRlPT09Q0xPU0VEKXtyZXR1cm47fX1kYXRhQnVmZmVyPScnO2V2ZW50VHlwZUJ1ZmZlcj0nJzt9c3RhdGU9Yz09PSdcXHInLmNoYXJDb2RlQXQoMCk/QUZURVJfQ1I6RklFTERfU1RBUlQ7fWVsc2V7aWYoc3RhdGU9PT1GSUVMRF9TVEFSVCl7ZmllbGRTdGFydD1wb3NpdGlvbjtzdGF0ZT1GSUVMRDt9aWYoc3RhdGU9PT1GSUVMRCl7aWYoYz09PSc6Jy5jaGFyQ29kZUF0KDApKXt2YWx1ZVN0YXJ0PXBvc2l0aW9uKzE7c3RhdGU9VkFMVUVfU1RBUlQ7fX1lbHNlIGlmKHN0YXRlPT09VkFMVUVfU1RBUlQpe3N0YXRlPVZBTFVFO319fX19fTt2YXIgb25GaW5pc2g9ZnVuY3Rpb24gb25GaW5pc2goKXtpZihjdXJyZW50U3RhdGU9PT1PUEVOfHxjdXJyZW50U3RhdGU9PT1DT05ORUNUSU5HKXtjdXJyZW50U3RhdGU9V0FJVElORztpZih0aW1lb3V0IT09MCl7Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO3RpbWVvdXQ9MDt9dGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7b25UaW1lb3V0KCk7fSxyZXRyeSk7cmV0cnk9Y2xhbXBEdXJhdGlvbihNYXRoLm1pbihpbml0aWFsUmV0cnkqMTYscmV0cnkqMikpO2VzLnJlYWR5U3RhdGU9Q09OTkVDVElORzt2YXIgZXZlbnQ9bmV3IEV2ZW50KCdlcnJvcicpO2VzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO2ZpcmUoZXMsZXMub25lcnJvcixldmVudCk7fX07dmFyIGNsb3NlPWZ1bmN0aW9uIGNsb3NlKCl7Y3VycmVudFN0YXRlPUNMT1NFRDtpZihjYW5jZWxGdW5jdGlvbiE9dW5kZWZpbmVkKXtjYW5jZWxGdW5jdGlvbigpO2NhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt9aWYodGltZW91dCE9PTApe2NsZWFyVGltZW91dCh0aW1lb3V0KTt0aW1lb3V0PTA7fWVzLnJlYWR5U3RhdGU9Q0xPU0VEO307dmFyIG9uVGltZW91dD1mdW5jdGlvbiBvblRpbWVvdXQoKXt0aW1lb3V0PTA7aWYoY3VycmVudFN0YXRlIT09V0FJVElORyl7aWYoIXdhc0FjdGl2aXR5JiZjYW5jZWxGdW5jdGlvbiE9dW5kZWZpbmVkKXt0aHJvd0Vycm9yKG5ldyBFcnJvcignTm8gYWN0aXZpdHkgd2l0aGluICcraGVhcnRiZWF0VGltZW91dCsnIG1pbGxpc2Vjb25kcy4gUmVjb25uZWN0aW5nLicpKTtjYW5jZWxGdW5jdGlvbigpO2NhbmNlbEZ1bmN0aW9uPXVuZGVmaW5lZDt9ZWxzZXt3YXNBY3Rpdml0eT1mYWxzZTt0aW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24oKXtvblRpbWVvdXQoKTt9LGhlYXJ0YmVhdFRpbWVvdXQpO31yZXR1cm47fXdhc0FjdGl2aXR5PWZhbHNlO3RpbWVvdXQ9c2V0VGltZW91dChmdW5jdGlvbigpe29uVGltZW91dCgpO30saGVhcnRiZWF0VGltZW91dCk7Y3VycmVudFN0YXRlPUNPTk5FQ1RJTkc7ZGF0YUJ1ZmZlcj0nJztldmVudFR5cGVCdWZmZXI9Jyc7bGFzdEV2ZW50SWRCdWZmZXI9bGFzdEV2ZW50SWQ7dGV4dEJ1ZmZlcj0nJztmaWVsZFN0YXJ0PTA7dmFsdWVTdGFydD0wO3N0YXRlPUZJRUxEX1NUQVJUOy8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxuLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxudmFyIHJlcXVlc3RVUkw9dXJsO2lmKHVybC5zbGljZSgwLDUpIT09J2RhdGE6JyYmdXJsLnNsaWNlKDAsNSkhPT0nYmxvYjonKXtpZihsYXN0RXZlbnRJZCE9PScnKXtyZXF1ZXN0VVJMKz0odXJsLmluZGV4T2YoJz8nKT09PS0xPyc/JzonJicpKydsYXN0RXZlbnRJZD0nK2VuY29kZVVSSUNvbXBvbmVudChsYXN0RXZlbnRJZCk7fX12YXIgcmVxdWVzdEhlYWRlcnM9e307cmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddPSd0ZXh0L2V2ZW50LXN0cmVhbSc7aWYoaGVhZGVycyE9dW5kZWZpbmVkKXtmb3IodmFyIG5hbWUgaW4gaGVhZGVycyl7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhlYWRlcnMsbmFtZSkpe3JlcXVlc3RIZWFkZXJzW25hbWVdPWhlYWRlcnNbbmFtZV07fX19dHJ5e3RyYW5zcG9ydC5vcGVuKHhocixvblN0YXJ0LG9uUHJvZ3Jlc3Msb25GaW5pc2gscmVxdWVzdFVSTCx3aXRoQ3JlZGVudGlhbHMscmVxdWVzdEhlYWRlcnMpO31jYXRjaChlcnJvcil7Y2xvc2UoKTt0aHJvdyBlcnJvcjt9fTtlcy51cmw9dXJsO2VzLnJlYWR5U3RhdGU9Q09OTkVDVElORztlcy53aXRoQ3JlZGVudGlhbHM9d2l0aENyZWRlbnRpYWxzO2VzLl9jbG9zZT1jbG9zZTtvblRpbWVvdXQoKTt9RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShFdmVudFRhcmdldC5wcm90b3R5cGUpO0V2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkc9Q09OTkVDVElORztFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOPU9QRU47RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEPUNMT1NFRDtFdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZT1mdW5jdGlvbigpe3RoaXMuX2Nsb3NlKCk7fTtFdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkc9Q09OTkVDVElORztFdmVudFNvdXJjZVBvbHlmaWxsLk9QRU49T1BFTjtFdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRD1DTE9TRUQ7RXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzPXVuZGVmaW5lZDt2YXIgX2RlZmF1bHQ9RXZlbnRTb3VyY2VQb2x5ZmlsbDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kaXNwbGF5Q29udGVudD1kaXNwbGF5Q29udGVudDtmdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjayl7Ly8gVGhpcyBpcyB0aGUgZmFsbGJhY2sgaGVscGVyIHRoYXQgcmVtb3ZlcyBOZXh0LmpzJyBuby1GT1VDIHN0eWxlcyB3aGVuXG4vLyBDU1MgbW9kZSBpcyBlbmFibGVkLiBUaGlzIG9ubHkgcmVhbGx5IGFjdGl2YXRlcyBpZiB5b3UgaGF2ZW4ndCBjcmVhdGVkXG4vLyBfYW55XyBzdHlsZXMgaW4geW91ciBhcHBsaWNhdGlvbiB5ZXQuXG47KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO31pZihjYWxsYmFjayl7Y2FsbGJhY2soKTt9fSk7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmNsb3NlUGluZz1jbG9zZVBpbmc7ZXhwb3J0cy5zZXR1cFBpbmc9c2V0dXBQaW5nO2V4cG9ydHMuY3VycmVudFBhZ2U9dm9pZCAwO3ZhciBfdW5mZXRjaD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJuZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL3VuZmV0Y2hcIikpO3ZhciBfZXZlbnRzb3VyY2U9cmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTsvKiBnbG9iYWwgbG9jYXRpb24gKi92YXIgZXZ0U291cmNlO3ZhciBjdXJyZW50UGFnZTtleHBvcnRzLmN1cnJlbnRQYWdlPWN1cnJlbnRQYWdlO2Z1bmN0aW9uIGNsb3NlUGluZygpe2lmKGV2dFNvdXJjZSlldnRTb3VyY2UuY2xvc2UoKTtldnRTb3VyY2U9bnVsbDt9ZnVuY3Rpb24gc2V0dXBQaW5nKGFzc2V0UHJlZml4LHBhdGhuYW1lRm4scmV0cnkpe3ZhciBwYXRobmFtZT1wYXRobmFtZUZuKCk7Ly8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbmlmKHBhdGhuYW1lPT09Y3VycmVudFBhZ2UmJiFyZXRyeSlyZXR1cm47ZXhwb3J0cy5jdXJyZW50UGFnZT1jdXJyZW50UGFnZT1wYXRobmFtZTsvLyBjbG9zZSBjdXJyZW50IEV2ZW50U291cmNlIGNvbm5lY3Rpb25cbmNsb3NlUGluZygpO3ZhciB1cmw9YXNzZXRQcmVmaXgrXCIvX25leHQvd2VicGFjay1obXI/cGFnZT1cIitjdXJyZW50UGFnZTtldnRTb3VyY2U9KDAsX2V2ZW50c291cmNlLmdldEV2ZW50U291cmNlV3JhcHBlcikoe3BhdGg6dXJsLHRpbWVvdXQ6NTAwMCxvbmRlbWFuZDoxfSk7ZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcihldmVudD0+e2lmKGV2ZW50LmRhdGEuaW5kZXhPZigneycpPT09LTEpcmV0dXJuO3RyeXt2YXIgcGF5bG9hZD1KU09OLnBhcnNlKGV2ZW50LmRhdGEpO2lmKHBheWxvYWQuaW52YWxpZCl7Ly8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxuLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuKDAsX3VuZmV0Y2guZGVmYXVsdCkobG9jYXRpb24uaHJlZix7Y3JlZGVudGlhbHM6J3NhbWUtb3JpZ2luJ30pLnRoZW4ocGFnZVJlcz0+e2lmKHBhZ2VSZXMuc3RhdHVzPT09MjAwKXtsb2NhdGlvbi5yZWxvYWQoKTt9fSk7fX1jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsZXJyKTt9fSk7fSIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIGRlZmluZShJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgZGVmaW5lKEdwLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgZGVmaW5lKEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLCBcImNvbnN0cnVjdG9yXCIsIEdlbmVyYXRvckZ1bmN0aW9uKTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBkZWZpbmUoXG4gICAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUsXG4gICAgdG9TdHJpbmdUYWdTeW1ib2wsXG4gICAgXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICk7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgZGVmaW5lKHByb3RvdHlwZSwgbWV0aG9kLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgZGVmaW5lKGdlbkZ1biwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yRnVuY3Rpb25cIik7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKWAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuXG4gIGV4cG9ydHMuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4geyBfX2F3YWl0OiBhcmcgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvciwgUHJvbWlzZUltcGwpIHtcbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGdlbmVyYXRvclttZXRob2RdLCBnZW5lcmF0b3IsIGFyZyk7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICByZWplY3QocmVjb3JkLmFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcmVzdWx0ID0gcmVjb3JkLmFyZztcbiAgICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgICBpZiAodmFsdWUgJiZcbiAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwodmFsdWUsIFwiX19hd2FpdFwiKSkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlLl9fYXdhaXQpLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGludm9rZShcIm5leHRcIiwgdmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJ0aHJvd1wiLCBlcnIsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgLy8gSWYgYSByZWplY3RlZCBQcm9taXNlIHdhcyB5aWVsZGVkLCB0aHJvdyB0aGUgcmVqZWN0aW9uIGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGhhbmRsZWQgdGhlcmUuXG4gICAgICAgICAgcmV0dXJuIGludm9rZShcInRocm93XCIsIGVycm9yLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZUltcGwoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuICBkZWZpbmUoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUsIGFzeW5jSXRlcmF0b3JTeW1ib2wsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfSk7XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgZGVmaW5lKEdwLCBpdGVyYXRvclN5bWJvbCwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH0pO1xuXG4gIGRlZmluZShHcCwgXCJ0b1N0cmluZ1wiLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgaW4gbW9kZXJuIGVuZ2luZXNcbiAgLy8gd2UgY2FuIGV4cGxpY2l0bHkgYWNjZXNzIGdsb2JhbFRoaXMuIEluIG9sZGVyIGVuZ2luZXMgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgaWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSBcIm9iamVjdFwiKSB7XG4gICAgZ2xvYmFsVGhpcy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xuICB9IGVsc2Uge1xuICAgIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=