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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, /*#__PURE__*/_react.default.createElement(Document, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child === null || child === void 0 ? void 0 : (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props['data-react-helmet'];

        if ((child === null || child === void 0 ? void 0 : child.type) === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el === null || el === void 0 ? void 0 : (_el$props = el.props) === null || _el$props === void 0 ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) === null || _el$props$dangerously === void 0 ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, /*#__PURE__*/_react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), !disableRuntimeJS && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && page !== '/_error' && /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(), this.context._documentProps.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return /*#__PURE__*/_react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags,
      unstable_runtimeJS
    } = this.context._documentProps;
    const disableRuntimeJS = unstable_runtimeJS === false;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH, _constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    const appScript = [/*#__PURE__*/_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && /*#__PURE__*/false];
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup || disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), !disableRuntimeJS && appScript, !disableRuntimeJS && page !== '/_error' && pageScript, disableRuntimeJS || staticMarkup ? null : this.getDynamicChunks(), disableRuntimeJS || staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  const startingUrl = page === '/' ? '/index' : page;
  return buildId ? `${startingUrl}.${buildId}.js` : `${startingUrl}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi next/dist/pages/_document ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_document */"./node_modules/next/dist/pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2h0bWxlc2NhcGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX19lc01vZHVsZSIsIm1pZGRsZXdhcmUiLCJOZXh0U2NyaXB0IiwiTWFpbiIsIkhlYWQiLCJIdG1sIiwiZGVmYXVsdCIsIl9wcm9wVHlwZXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NlcnZlciIsIl9jb25zdGFudHMiLCJfZG9jdW1lbnRDb250ZXh0IiwiX3V0aWxzIiwiRG9jdW1lbnRDb250ZXh0IiwiRG9jdW1lbnRJbml0aWFsUHJvcHMiLCJEb2N1bWVudFByb3BzIiwiX3V0aWxzMiIsIl9odG1sZXNjYXBlIiwib2JqIiwiX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlIiwiV2Vha01hcCIsImNhY2hlIiwiaGFzIiwiZ2V0IiwibmV3T2JqIiwiaGFzUHJvcGVydHlEZXNjcmlwdG9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2V0IiwicmVxIiwicmVzIiwiZGVkdXBlIiwiYnVuZGxlcyIsImZpbGVzIiwiU2V0Iiwia2VwdCIsImJ1bmRsZSIsImZpbGUiLCJhZGQiLCJwdXNoIiwiZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50IiwicGF0aCIsInByb2Nlc3MiLCJEb2N1bWVudCIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImVuaGFuY2VycyIsImVuaGFuY2VBcHAiLCJBcHAiLCJlbmhhbmNlciIsInByb3BzIiwiY3JlYXRlRWxlbWVudCIsImh0bWwiLCJoZWFkIiwicmVuZGVyUGFnZSIsInN0eWxlcyIsInJlbmRlckRvY3VtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIl9kb2N1bWVudFByb3BzIiwiX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyIsIkRhdGUiLCJub3ciLCJyZW5kZXIiLCJoZWFkVGFnc01pZGRsZXdhcmUiLCJQcm9taXNlIiwiYm9keVRhZ3NNaWRkbGV3YXJlIiwiaHRtbFByb3BzTWlkZGxld2FyZSIsImNvbnN0cnVjdG9yIiwiYXJncyIsImNvbnRleHQiLCJpbkFtcE1vZGUiLCJodG1sUHJvcHMiLCJhc3NpZ24iLCJhbXAiLCJ1bmRlZmluZWQiLCJjb250ZXh0VHlwZSIsInByb3BUeXBlcyIsImNoaWxkcmVuIiwibm9kZSIsImlzUmVxdWlyZWQiLCJnZXRDc3NMaW5rcyIsImFzc2V0UHJlZml4IiwiY3NzRmlsZXMiLCJsZW5ndGgiLCJmaWx0ZXIiLCJmIiwidGVzdCIsImNzc0xpbmtFbGVtZW50cyIsImZvckVhY2giLCJub25jZSIsInJlbCIsImhyZWYiLCJlbmNvZGVVUkkiLCJhcyIsImNyb3NzT3JpZ2luIiwiZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MiLCJkeW5hbWljSW1wb3J0cyIsIm1hcCIsImVuZHNXaXRoIiwiQm9vbGVhbiIsImdldFByZWxvYWRNYWluTGlua3MiLCJwcmVsb2FkRmlsZXMiLCJhbXBQYXRoIiwiaHlicmlkQW1wIiwiY2Fub25pY2FsQmFzZSIsIl9fTkVYVF9EQVRBX18iLCJkYW5nZXJvdXNBc1BhdGgiLCJoZWFkVGFncyIsInVuc3RhYmxlX3J1bnRpbWVKUyIsImRpc2FibGVSdW50aW1lSlMiLCJwYWdlIiwiYnVpbGRJZCIsIkNoaWxkcmVuIiwiY2hpbGQiLCJfY2hpbGQkcHJvcHMiLCJpc1JlYWN0SGVsbWV0IiwidHlwZSIsImNvbnNvbGUiLCJ3YXJuIiwiaGFzQW1waHRtbFJlbCIsImhhc0Nhbm9uaWNhbFJlbCIsImJhZFByb3AiLCJuYW1lIiwic3JjIiwiaW5kZXhPZiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwia2V5cyIsInByb3AiLCJjdXJTdHlsZXMiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNTdHlsZXMiLCJlbCIsIl9lbCRwcm9wcyIsIl9lbCRwcm9wcyRkYW5nZXJvdXNseSIsIl9faHRtbCIsImlzRGV2ZWxvcG1lbnQiLCJGcmFnbWVudCIsImNvbnRlbnQiLCJjb3VudCIsInRvU3RyaW5nIiwiY2xlYW5BbXBQYXRoIiwic3R5bGUiLCJqb2luIiwicmVwbGFjZSIsImFzeW5jIiwiZ2V0QW1wUGF0aCIsImdldFBhZ2VGaWxlIiwiaWQiLCJzdHJpbmciLCJBTVBfUkVOREVSX1RBUkdFVCIsImdldER5bmFtaWNDaHVua3MiLCJtb2Rlcm5Qcm9wcyIsImluY2x1ZGVzIiwiZ2V0U2NyaXB0cyIsImxvd1ByaW9yaXR5RmlsZXMiLCJub3JtYWxTY3JpcHRzIiwibG93UHJpb3JpdHlTY3JpcHRzIiwiZ2V0UG9seWZpbGxTY3JpcHRzIiwicG9seWZpbGxGaWxlcyIsInBvbHlmaWxsIiwibm9Nb2R1bGUiLCJnZXRJbmxpbmVTY3JpcHRTb3VyY2UiLCJkb2N1bWVudFByb3BzIiwiZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJodG1sRXNjYXBlSnNvblN0cmluZyIsImVyciIsIm1lc3NhZ2UiLCJFcnJvciIsInN0YXRpY01hcmt1cCIsImRldkZpbGVzIiwiYm9keVRhZ3MiLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUkVBQ1RfUkVGUkVTSCIsIkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9BTVAiLCJDTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfV0VCUEFDSyIsInBhZ2VTY3JpcHQiLCJhcHBTY3JpcHQiLCJtYXRjaCIsInNhZmFyaU5vbW9kdWxlRml4IiwiYXNQYXRoIiwic3RhcnRpbmdVcmwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSxtRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7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LE9BQVEsS0FBM0IsR0FBaUMsR0FBRXVFLFdBQVksS0FBN0Q7QUFBbUUsQzs7Ozs7Ozs7Ozs7O0FDaEN4b0wsd0JBQXdCLGtEQUFrRDtBQUN2RjtBQUNBLHFCQUFxQixpRkFBaUYsd0NBQXdDLG1DQUFtQyw4RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGakwsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsOEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5taWRkbGV3YXJlPW1pZGRsZXdhcmU7ZXhwb3J0cy5OZXh0U2NyaXB0PWV4cG9ydHMuTWFpbj1leHBvcnRzLkhlYWQ9ZXhwb3J0cy5IdG1sPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9wcm9wVHlwZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfc2VydmVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpKTt2YXIgX2NvbnN0YW50cz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50c1wiKTt2YXIgX2RvY3VtZW50Q29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHRcIik7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuRG9jdW1lbnRDb250ZXh0PV91dGlscy5Eb2N1bWVudENvbnRleHQ7ZXhwb3J0cy5Eb2N1bWVudEluaXRpYWxQcm9wcz1fdXRpbHMuRG9jdW1lbnRJbml0aWFsUHJvcHM7ZXhwb3J0cy5Eb2N1bWVudFByb3BzPV91dGlscy5Eb2N1bWVudFByb3BzO3ZhciBfdXRpbHMyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHNcIik7dmFyIF9odG1sZXNjYXBlPXJlcXVpcmUoXCIuLi9zZXJ2ZXIvaHRtbGVzY2FwZVwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9YXN5bmMgZnVuY3Rpb24gbWlkZGxld2FyZSh7cmVxLHJlc30pe31mdW5jdGlvbiBkZWR1cGUoYnVuZGxlcyl7Y29uc3QgZmlsZXM9bmV3IFNldCgpO2NvbnN0IGtlcHQ9W107Zm9yKGNvbnN0IGJ1bmRsZSBvZiBidW5kbGVzKXtpZihmaWxlcy5oYXMoYnVuZGxlLmZpbGUpKWNvbnRpbnVlO2ZpbGVzLmFkZChidW5kbGUuZmlsZSk7a2VwdC5wdXNoKGJ1bmRsZSk7fXJldHVybiBrZXB0O31mdW5jdGlvbiBnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQocGF0aCl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFwuanMkLywnLm1vZHVsZS5qcycpO31yZXR1cm4gcGF0aDt9LyoqXG4gKiBgRG9jdW1lbnRgIGNvbXBvbmVudCBoYW5kbGVzIHRoZSBpbml0aWFsIGBkb2N1bWVudGAgbWFya3VwIGFuZCByZW5kZXJzIG9ubHkgb24gdGhlIHNlcnZlciBzaWRlLlxuICogQ29tbW9ubHkgdXNlZCBmb3IgaW1wbGVtZW50aW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZyBmb3IgYGNzcy1pbi1qc2AgbGlicmFyaWVzLlxuICovY2xhc3MgRG9jdW1lbnQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50ey8qKlxuICAgKiBgZ2V0SW5pdGlhbFByb3BzYCBob29rIHJldHVybnMgdGhlIGNvbnRleHQgb2JqZWN0IHdpdGggdGhlIGFkZGl0aW9uIG9mIGByZW5kZXJQYWdlYC5cbiAgICogYHJlbmRlclBhZ2VgIGNhbGxiYWNrIGV4ZWN1dGVzIGBSZWFjdGAgcmVuZGVyaW5nIGxvZ2ljIHN5bmNocm9ub3VzbHkgdG8gc3VwcG9ydCBzZXJ2ZXItcmVuZGVyaW5nIHdyYXBwZXJzXG4gICAqL3N0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KXtjb25zdCBlbmhhbmNlcnM9cHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlM/YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9dW5zdGFibGUtZW5oYW5jZS1hcHAtc2VydmVyIScpKSkudGhlbihtb2Q9Pm1vZC5kZWZhdWx0KGN0eCkpOltdO2NvbnN0IGVuaGFuY2VBcHA9QXBwPT57Zm9yKGNvbnN0IGVuaGFuY2VyIG9mIGVuaGFuY2Vycyl7QXBwPWVuaGFuY2VyKEFwcCk7fXJldHVybiBwcm9wcz0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQXBwLHByb3BzKTt9O2NvbnN0e2h0bWwsaGVhZH09YXdhaXQgY3R4LnJlbmRlclBhZ2Uoe2VuaGFuY2VBcHB9KTtjb25zdCBzdHlsZXM9Wy4uLigwLF9zZXJ2ZXIuZGVmYXVsdCkoKSwuLi4ocHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlM/YXdhaXQgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9dW5zdGFibGUtZ2V0LXN0eWxlcy1zZXJ2ZXIhJykpKS50aGVuKG1vZD0+bW9kLmRlZmF1bHQoY3R4KSk6W10pXTtyZXR1cm57aHRtbCxoZWFkLHN0eWxlc307fXN0YXRpYyByZW5kZXJEb2N1bWVudChEb2N1bWVudCxwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQuUHJvdmlkZXIse3ZhbHVlOntfZG9jdW1lbnRQcm9wczpwcm9wcywvLyBJbiBkZXYgd2UgaW52YWxpZGF0ZSB0aGUgY2FjaGUgYnkgYXBwZW5kaW5nIGEgdGltZXN0YW1wIHRvIHRoZSByZXNvdXJjZSBVUkwuXG4vLyBUaGlzIGlzIGEgd29ya2Fyb3VuZCB0byBmaXggaHR0cHM6Ly9naXRodWIuY29tL3plaXQvbmV4dC5qcy9pc3N1ZXMvNTg2MFxuLy8gVE9ETzogcmVtb3ZlIHRoaXMgd29ya2Fyb3VuZCB3aGVuIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xODc3MjYgaXMgZml4ZWQuXG5fZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nOnByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nPyc/dHM9JytEYXRlLm5vdygpOicnfX0sLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG9jdW1lbnQscHJvcHMpKTt9cmVuZGVyKCl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSHRtbCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEhlYWQsbnVsbCksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJib2R5XCIsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNYWluLG51bGwpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KE5leHRTY3JpcHQsbnVsbCkpKTt9fWV4cG9ydHMuZGVmYXVsdD1Eb2N1bWVudDtEb2N1bWVudC5oZWFkVGFnc01pZGRsZXdhcmU9cHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlM/UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaGVhZC10YWdzLXNlcnZlciEnKSkpOigpPT5bXTtEb2N1bWVudC5ib2R5VGFnc01pZGRsZXdhcmU9cHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlM/UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtYm9keS10YWdzLXNlcnZlciEnKSkpOigpPT5bXTtEb2N1bWVudC5odG1sUHJvcHNNaWRkbGV3YXJlPXByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP1Byb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPWRvY3VtZW50LWh0bWwtcHJvcHMtc2VydmVyIScpKSk6KCk9PltdO2NsYXNzIEh0bWwgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKC4uLmFyZ3Mpe3N1cGVyKC4uLmFyZ3MpO3RoaXMuY29udGV4dD12b2lkIDA7fXJlbmRlcigpe2NvbnN0e2luQW1wTW9kZSxodG1sUHJvcHN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImh0bWxcIixPYmplY3QuYXNzaWduKHt9LGh0bWxQcm9wcyx0aGlzLnByb3BzLHthbXA6aW5BbXBNb2RlPycnOnVuZGVmaW5lZCxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZSYmcHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbic/Jyc6dW5kZWZpbmVkfSkpO319ZXhwb3J0cy5IdG1sPUh0bWw7SHRtbC5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtIdG1sLnByb3BUeXBlcz17Y2hpbGRyZW46X3Byb3BUeXBlcy5kZWZhdWx0Lm5vZGUuaXNSZXF1aXJlZH07Y2xhc3MgSGVhZCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9Z2V0Q3NzTGlua3MoKXtjb25zdHthc3NldFByZWZpeCxmaWxlc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtjb25zdCBjc3NGaWxlcz1maWxlcyYmZmlsZXMubGVuZ3RoP2ZpbGVzLmZpbHRlcihmPT4vXFwuY3NzJC8udGVzdChmKSk6W107Y29uc3QgY3NzTGlua0VsZW1lbnRzPVtdO2Nzc0ZpbGVzLmZvckVhY2goZmlsZT0+e2Nzc0xpbmtFbGVtZW50cy5wdXNoKC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtrZXk6YCR7ZmlsZX0tcHJlbG9hZGAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsYXM6XCJzdHlsZVwiLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJzdHlsZXNoZWV0XCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pKTt9KTtyZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aD09PTA/bnVsbDpjc3NMaW5rRWxlbWVudHM7fWdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXh9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7cmV0dXJuIGRlZHVwZShkeW5hbWljSW1wb3J0cykubWFwKGJ1bmRsZT0+ey8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuIHRoZVxuLy8gZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZSBtb2Rlcm5cbi8vIHZhcmlhbnRzIG9ubHkuXG5pZighYnVuZGxlLmZpbGUuZW5kc1dpdGgoZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KCcuanMnKSkpe3JldHVybiBudWxsO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGtleTpidW5kbGUuZmlsZSxocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShidW5kbGUuZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsYXM6XCJzY3JpcHRcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KTt9KS8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbi5maWx0ZXIoQm9vbGVhbik7fWdldFByZWxvYWRNYWluTGlua3MoKXtjb25zdHthc3NldFByZWZpeCxmaWxlc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtjb25zdCBwcmVsb2FkRmlsZXM9ZmlsZXMmJmZpbGVzLmxlbmd0aD9maWxlcy5maWx0ZXIoZmlsZT0+ey8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuXG4vLyB0aGUgZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZVxuLy8gbW9kZXJuIHZhcmlhbnRzIG9ubHkuXG5yZXR1cm4gZmlsZS5lbmRzV2l0aChnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoJy5qcycpKTt9KTpbXTtyZXR1cm4hcHJlbG9hZEZpbGVzLmxlbmd0aD9udWxsOnByZWxvYWRGaWxlcy5tYXAoZmlsZT0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse2tleTpmaWxlLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwicHJlbG9hZFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLGFzOlwic2NyaXB0XCIsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pKTt9cmVuZGVyKCl7Y29uc3R7c3R5bGVzLGFtcFBhdGgsaW5BbXBNb2RlLGFzc2V0UHJlZml4LGh5YnJpZEFtcCxjYW5vbmljYWxCYXNlLF9fTkVYVF9EQVRBX18sZGFuZ2Vyb3VzQXNQYXRoLGhlYWRUYWdzLHVuc3RhYmxlX3J1bnRpbWVKU309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0IGRpc2FibGVSdW50aW1lSlM9dW5zdGFibGVfcnVudGltZUpTPT09ZmFsc2U7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0e3BhZ2UsYnVpbGRJZH09X19ORVhUX0RBVEFfXztsZXR7aGVhZH09dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2xldCBjaGlsZHJlbj10aGlzLnByb3BzLmNoaWxkcmVuOy8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjaGlsZHJlbj1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sY2hpbGQ9Pnt2YXIgX2NoaWxkJHByb3BzO2NvbnN0IGlzUmVhY3RIZWxtZXQ9Y2hpbGQ9PT1udWxsfHxjaGlsZD09PXZvaWQgMD92b2lkIDA6KF9jaGlsZCRwcm9wcz1jaGlsZC5wcm9wcyk9PT1udWxsfHxfY2hpbGQkcHJvcHM9PT12b2lkIDA/dm9pZCAwOl9jaGlsZCRwcm9wc1snZGF0YS1yZWFjdC1oZWxtZXQnXTtpZigoY2hpbGQ9PT1udWxsfHxjaGlsZD09PXZvaWQgMD92b2lkIDA6Y2hpbGQudHlwZSk9PT0ndGl0bGUnJiYhaXNSZWFjdEhlbG1ldCl7Y29uc29sZS53YXJuKFwiV2FybmluZzogPHRpdGxlPiBzaG91bGQgbm90IGJlIHVzZWQgaW4gX2RvY3VtZW50LmpzJ3MgPEhlYWQ+LiBodHRwczovL2Vyci5zaC9uZXh0LmpzL25vLWRvY3VtZW50LXRpdGxlXCIpO31yZXR1cm4gY2hpbGQ7fSk7aWYodGhpcy5wcm9wcy5jcm9zc09yaWdpbiljb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBIZWFkYCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7fWxldCBoYXNBbXBodG1sUmVsPWZhbHNlO2xldCBoYXNDYW5vbmljYWxSZWw9ZmFsc2U7Ly8gc2hvdyB3YXJuaW5nIGFuZCByZW1vdmUgY29uZmxpY3RpbmcgYW1wIGhlYWQgdGFnc1xuaGVhZD1fcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5tYXAoaGVhZHx8W10sY2hpbGQ9PntpZighY2hpbGQpcmV0dXJuIGNoaWxkO2NvbnN0e3R5cGUscHJvcHN9PWNoaWxkO2lmKGluQW1wTW9kZSl7bGV0IGJhZFByb3A9Jyc7aWYodHlwZT09PSdtZXRhJyYmcHJvcHMubmFtZT09PSd2aWV3cG9ydCcpe2JhZFByb3A9J25hbWU9XCJ2aWV3cG9ydFwiJzt9ZWxzZSBpZih0eXBlPT09J2xpbmsnJiZwcm9wcy5yZWw9PT0nY2Fub25pY2FsJyl7aGFzQ2Fub25pY2FsUmVsPXRydWU7fWVsc2UgaWYodHlwZT09PSdzY3JpcHQnKXsvLyBvbmx5IGJsb2NrIGlmXG4vLyAxLiBpdCBoYXMgYSBzcmMgYW5kIGlzbid0IHBvaW50aW5nIHRvIGFtcHByb2plY3QncyBDRE5cbi8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4vLyBhIHR5cGUgb2YgdGV4dC9qYXZhc2NyaXB0XG5pZihwcm9wcy5zcmMmJnByb3BzLnNyYy5pbmRleE9mKCdhbXBwcm9qZWN0Jyk8LTF8fHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiYoIXByb3BzLnR5cGV8fHByb3BzLnR5cGU9PT0ndGV4dC9qYXZhc2NyaXB0Jykpe2JhZFByb3A9JzxzY3JpcHQnO09iamVjdC5rZXlzKHByb3BzKS5mb3JFYWNoKHByb3A9PntiYWRQcm9wKz1gICR7cHJvcH09XCIke3Byb3BzW3Byb3BdfVwiYDt9KTtiYWRQcm9wKz0nLz4nO319aWYoYmFkUHJvcCl7Y29uc29sZS53YXJuKGBGb3VuZCBjb25mbGljdGluZyBhbXAgdGFnIFwiJHtjaGlsZC50eXBlfVwiIHdpdGggY29uZmxpY3RpbmcgcHJvcCAke2JhZFByb3B9IGluICR7X19ORVhUX0RBVEFfXy5wYWdlfS4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9jb25mbGljdGluZy1hbXAtdGFnYCk7cmV0dXJuIG51bGw7fX1lbHNley8vIG5vbi1hbXAgbW9kZVxuaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2FtcGh0bWwnKXtoYXNBbXBodG1sUmVsPXRydWU7fX1yZXR1cm4gY2hpbGQ7fSk7Ly8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG5jb25zdCBjdXJTdHlsZXM9QXJyYXkuaXNBcnJheShzdHlsZXMpP3N0eWxlczpbXTtpZihpbkFtcE1vZGUmJnN0eWxlcyYmLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5zdHlsZXMucHJvcHMmJi8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuQXJyYXkuaXNBcnJheShzdHlsZXMucHJvcHMuY2hpbGRyZW4pKXtjb25zdCBoYXNTdHlsZXM9ZWw9Pnt2YXIgX2VsJHByb3BzLF9lbCRwcm9wcyRkYW5nZXJvdXNseTtyZXR1cm4gZWw9PT1udWxsfHxlbD09PXZvaWQgMD92b2lkIDA6KF9lbCRwcm9wcz1lbC5wcm9wcyk9PT1udWxsfHxfZWwkcHJvcHM9PT12b2lkIDA/dm9pZCAwOihfZWwkcHJvcHMkZGFuZ2Vyb3VzbHk9X2VsJHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKT09PW51bGx8fF9lbCRwcm9wcyRkYW5nZXJvdXNseT09PXZvaWQgMD92b2lkIDA6X2VsJHByb3BzJGRhbmdlcm91c2x5Ll9faHRtbDt9Oy8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQ9PntpZihBcnJheS5pc0FycmF5KGNoaWxkKSl7Y2hpbGQuZm9yRWFjaChlbD0+aGFzU3R5bGVzKGVsKSYmY3VyU3R5bGVzLnB1c2goZWwpKTt9ZWxzZSBpZihoYXNTdHlsZXMoY2hpbGQpKXtjdXJTdHlsZXMucHVzaChjaGlsZCk7fX0pO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImhlYWRcIix0aGlzLnByb3BzLHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcy5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpub25lfWB9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLHtcImRhdGEtbmV4dC1oaWRlLWZvdWNcIjp0cnVlLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlPyd0cnVlJzp1bmRlZmluZWR9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXtkaXNwbGF5OmJsb2NrfWB9fSkpKSxjaGlsZHJlbixoZWFkLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1oZWFkLWNvdW50XCIsY29udGVudDpfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChoZWFkfHxbXSkudG9TdHJpbmcoKX0pLGluQW1wTW9kZSYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcInZpZXdwb3J0XCIsY29udGVudDpcIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJ9KSwhaGFzQ2Fub25pY2FsUmVsJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwiY2Fub25pY2FsXCIsaHJlZjpjYW5vbmljYWxCYXNlKygwLF91dGlsczIuY2xlYW5BbXBQYXRoKShkYW5nZXJvdXNBc1BhdGgpfSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIse3JlbDpcInByZWxvYWRcIixhczpcInNjcmlwdFwiLGhyZWY6XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wifSksc3R5bGVzJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse1wiYW1wLWN1c3RvbVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpjdXJTdHlsZXMubWFwKHN0eWxlPT5zdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpLmpvaW4oJycpLnJlcGxhY2UoL1xcL1xcKiMgc291cmNlTWFwcGluZ1VSTD0uKlxcKlxcLy9nLCcnKS5yZXBsYWNlKC9cXC9cXCpAIHNvdXJjZVVSTD0uKj9cXCpcXC8vZywnJyl9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1ib2lsZXJwbGF0ZVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWB9fSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLG51bGwsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1ib2lsZXJwbGF0ZVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWB9fSkpLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOnRydWUsc3JjOlwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIn0pKSwhaW5BbXBNb2RlJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLCFoYXNBbXBodG1sUmVsJiZoeWJyaWRBbXAmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJhbXBodG1sXCIsaHJlZjpjYW5vbmljYWxCYXNlK2dldEFtcFBhdGgoYW1wUGF0aCxkYW5nZXJvdXNBc1BhdGgpfSksdGhpcy5nZXRDc3NMaW5rcygpLCFkaXNhYmxlUnVudGltZUpTJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGhyZWY6YXNzZXRQcmVmaXgrZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgKSkrX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pLCFkaXNhYmxlUnVudGltZUpTJiZwYWdlIT09Jy9fZXJyb3InJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGhyZWY6YXNzZXRQcmVmaXgrZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzJHtnZXRQYWdlRmlsZShwYWdlKX1gKSkrX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pLCFkaXNhYmxlUnVudGltZUpTJiZ0aGlzLmdldFByZWxvYWREeW5hbWljQ2h1bmtzKCksIWRpc2FibGVSdW50aW1lSlMmJnRoaXMuZ2V0UHJlbG9hZE1haW5MaW5rcygpLHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcy5pc0RldmVsb3BtZW50JiYvKiNfX1BVUkVfXyovIC8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbi8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7aWQ6XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIn0pLHN0eWxlc3x8bnVsbCksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCx7fSwuLi4oaGVhZFRhZ3N8fFtdKSkpO319ZXhwb3J0cy5IZWFkPUhlYWQ7SGVhZC5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtIZWFkLnByb3BUeXBlcz17bm9uY2U6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxjcm9zc09yaWdpbjpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTtjbGFzcyBNYWluIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31yZW5kZXIoKXtjb25zdHtpbkFtcE1vZGUsaHRtbH09dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2lmKGluQW1wTW9kZSlyZXR1cm4gX2NvbnN0YW50cy5BTVBfUkVOREVSX1RBUkdFVDtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtpZDpcIl9fbmV4dFwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6aHRtbH19KTt9fWV4cG9ydHMuTWFpbj1NYWluO01haW4uY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7Y2xhc3MgTmV4dFNjcmlwdCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9Z2V0RHluYW1pY0NodW5rcygpe2NvbnN0e2R5bmFtaWNJbXBvcnRzLGFzc2V0UHJlZml4LGZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O3JldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcChidW5kbGU9PntsZXQgbW9kZXJuUHJvcHM9e307aWYocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCl7bW9kZXJuUHJvcHM9L1xcLm1vZHVsZVxcLmpzJC8udGVzdChidW5kbGUuZmlsZSk/e3R5cGU6J21vZHVsZSd9Ontub01vZHVsZTp0cnVlfTt9aWYoIS9cXC5qcyQvLnRlc3QoYnVuZGxlLmZpbGUpfHxmaWxlcy5pbmNsdWRlcyhidW5kbGUuZmlsZSkpcmV0dXJuIG51bGw7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHthc3luYzp0cnVlLGtleTpidW5kbGUuZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGJ1bmRsZS5maWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59LG1vZGVyblByb3BzKSk7fSk7fWdldFNjcmlwdHMoKXtjb25zdHthc3NldFByZWZpeCxmaWxlcyxsb3dQcmlvcml0eUZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0IG5vcm1hbFNjcmlwdHM9ZmlsZXM9PT1udWxsfHxmaWxlcz09PXZvaWQgMD92b2lkIDA6ZmlsZXMuZmlsdGVyKGZpbGU9PmZpbGUuZW5kc1dpdGgoJy5qcycpKTtjb25zdCBsb3dQcmlvcml0eVNjcmlwdHM9bG93UHJpb3JpdHlGaWxlcz09PW51bGx8fGxvd1ByaW9yaXR5RmlsZXM9PT12b2lkIDA/dm9pZCAwOmxvd1ByaW9yaXR5RmlsZXMuZmlsdGVyKGZpbGU9PmZpbGUuZW5kc1dpdGgoJy5qcycpKTtyZXR1cm5bLi4ubm9ybWFsU2NyaXB0cywuLi5sb3dQcmlvcml0eVNjcmlwdHNdLm1hcChmaWxlPT57bGV0IG1vZGVyblByb3BzPXt9O2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpe21vZGVyblByb3BzPWZpbGUuZW5kc1dpdGgoJy5tb2R1bGUuanMnKT97dHlwZTonbW9kdWxlJ306e25vTW9kdWxlOnRydWV9O31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxhc3luYzp0cnVlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59LG1vZGVyblByb3BzKSk7fSk7fWdldFBvbHlmaWxsU2NyaXB0cygpey8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG5jb25zdHthc3NldFByZWZpeCxwb2x5ZmlsbEZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O3JldHVybiBwb2x5ZmlsbEZpbGVzLmZpbHRlcihwb2x5ZmlsbD0+cG9seWZpbGwuZW5kc1dpdGgoJy5qcycpJiYhL1xcLm1vZHVsZVxcLmpzJC8udGVzdChwb2x5ZmlsbCkpLm1hcChwb2x5ZmlsbD0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7a2V5OnBvbHlmaWxsLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixub01vZHVsZTp0cnVlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtwb2x5ZmlsbH0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YH0pKTt9c3RhdGljIGdldElubGluZVNjcmlwdFNvdXJjZShkb2N1bWVudFByb3BzKXtjb25zdHtfX05FWFRfREFUQV9ffT1kb2N1bWVudFByb3BzO3RyeXtjb25zdCBkYXRhPUpTT04uc3RyaW5naWZ5KF9fTkVYVF9EQVRBX18pO3JldHVybigwLF9odG1sZXNjYXBlLmh0bWxFc2NhcGVKc29uU3RyaW5nKShkYXRhKTt9Y2F0Y2goZXJyKXtpZihlcnIubWVzc2FnZS5pbmRleE9mKCdjaXJjdWxhciBzdHJ1Y3R1cmUnKSl7dGhyb3cgbmV3IEVycm9yKGBDaXJjdWxhciBzdHJ1Y3R1cmUgaW4gXCJnZXRJbml0aWFsUHJvcHNcIiByZXN1bHQgb2YgcGFnZSBcIiR7X19ORVhUX0RBVEFfXy5wYWdlfVwiLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvY2lyY3VsYXItc3RydWN0dXJlYCk7fXRocm93IGVycjt9fXJlbmRlcigpe2NvbnN0e3N0YXRpY01hcmt1cCxhc3NldFByZWZpeCxpbkFtcE1vZGUsZGV2RmlsZXMsX19ORVhUX0RBVEFfXyxib2R5VGFncyx1bnN0YWJsZV9ydW50aW1lSlN9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdCBkaXNhYmxlUnVudGltZUpTPXVuc3RhYmxlX3J1bnRpbWVKUz09PWZhbHNlO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtpZihpbkFtcE1vZGUpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J3Byb2R1Y3Rpb24nKXtyZXR1cm4gbnVsbDt9Y29uc3QgZGV2RmlsZXM9W19jb25zdGFudHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1JFQUNUX1JFRlJFU0gsX2NvbnN0YW50cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QLF9jb25zdGFudHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0tdO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsc3RhdGljTWFya3VwfHxkaXNhYmxlUnVudGltZUpTP251bGw6LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7aWQ6XCJfX05FWFRfREFUQV9fXCIsdHlwZTpcImFwcGxpY2F0aW9uL2pzb25cIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMpfSxcImRhdGEtYW1wZGV2bW9kZVwiOnRydWV9KSxkZXZGaWxlcz9kZXZGaWxlcy5tYXAoZmlsZT0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2ZpbGV9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLFwiZGF0YS1hbXBkZXZtb2RlXCI6dHJ1ZX0pKTpudWxsLF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQse30sLi4uKGJvZHlUYWdzfHxbXSkpKTt9Y29uc3R7cGFnZSxidWlsZElkfT1fX05FWFRfREFUQV9fO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZih0aGlzLnByb3BzLmNyb3NzT3JpZ2luKWNvbnNvbGUud2FybignV2FybmluZzogYE5leHRTY3JpcHRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnKTt9Y29uc3QgcGFnZVNjcmlwdD1bLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHthc3luYzp0cnVlLFwiZGF0YS1uZXh0LXBhZ2VcIjpwYWdlLGtleTpwYWdlLHNyYzphc3NldFByZWZpeCtlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YCkrX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59LHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQ/e25vTW9kdWxlOnRydWV9Ont9KSkscHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCYmLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7YXN5bmM6dHJ1ZSxcImRhdGEtbmV4dC1wYWdlXCI6cGFnZSxrZXk6YCR7cGFnZX0tbW9kZXJuYCxzcmM6YXNzZXRQcmVmaXgrZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzJHtnZXRQYWdlRmlsZShwYWdlKX1gKSkrX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sdHlwZTpcIm1vZHVsZVwifSldO2NvbnN0IGFwcFNjcmlwdD1bLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHthc3luYzp0cnVlLFwiZGF0YS1uZXh0LXBhZ2VcIjpcIi9fYXBwXCIsc3JjOmFzc2V0UHJlZml4K2AvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMvX2FwcC5qc2ArX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyxrZXk6XCJfYXBwXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEP3tub01vZHVsZTp0cnVlfTp7fSkpLHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQmJi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOnRydWUsXCJkYXRhLW5leHQtcGFnZVwiOlwiL19hcHBcIixzcmM6YXNzZXRQcmVmaXgrYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLm1vZHVsZS5qc2ArX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyxrZXk6XCJfYXBwLW1vZGVyblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbix0eXBlOlwibW9kdWxlXCJ9KV07cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCwhZGlzYWJsZVJ1bnRpbWVKUyYmZGV2RmlsZXM/ZGV2RmlsZXMubWFwKGZpbGU9PiFmaWxlLm1hdGNoKC9cXC5qc1xcLm1hcC8pJiYvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6ZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pKTpudWxsLHN0YXRpY01hcmt1cHx8ZGlzYWJsZVJ1bnRpbWVKUz9udWxsOi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzKX19KSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEJiYhZGlzYWJsZVJ1bnRpbWVKUz8vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW4sbm9Nb2R1bGU6dHJ1ZSxkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOk5leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXh9fSk6bnVsbCwhZGlzYWJsZVJ1bnRpbWVKUyYmdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSwhZGlzYWJsZVJ1bnRpbWVKUyYmYXBwU2NyaXB0LCFkaXNhYmxlUnVudGltZUpTJiZwYWdlIT09Jy9fZXJyb3InJiZwYWdlU2NyaXB0LGRpc2FibGVSdW50aW1lSlN8fHN0YXRpY01hcmt1cD9udWxsOnRoaXMuZ2V0RHluYW1pY0NodW5rcygpLGRpc2FibGVSdW50aW1lSlN8fHN0YXRpY01hcmt1cD9udWxsOnRoaXMuZ2V0U2NyaXB0cygpLF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQse30sLi4uKGJvZHlUYWdzfHxbXSkpKTt9fWV4cG9ydHMuTmV4dFNjcmlwdD1OZXh0U2NyaXB0O05leHRTY3JpcHQuY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7TmV4dFNjcmlwdC5wcm9wVHlwZXM9e25vbmNlOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsY3Jvc3NPcmlnaW46X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZ307TmV4dFNjcmlwdC5zYWZhcmlOb21vZHVsZUZpeD0nIWZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQsdD1lLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7aWYoIShcIm5vTW9kdWxlXCJpbiB0KSYmXCJvbmJlZm9yZWxvYWRcImluIHQpe3ZhciBuPSExO2UuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZWxvYWRcIixmdW5jdGlvbihlKXtpZihlLnRhcmdldD09PXQpbj0hMDtlbHNlIGlmKCFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoXCJub21vZHVsZVwiKXx8IW4pcmV0dXJuO2UucHJldmVudERlZmF1bHQoKX0sITApLHQudHlwZT1cIm1vZHVsZVwiLHQuc3JjPVwiLlwiLGUuaGVhZC5hcHBlbmRDaGlsZCh0KSx0LnJlbW92ZSgpfX0oKTsnO2Z1bmN0aW9uIGdldEFtcFBhdGgoYW1wUGF0aCxhc1BhdGgpe3JldHVybiBhbXBQYXRofHxgJHthc1BhdGh9JHthc1BhdGguaW5jbHVkZXMoJz8nKT8nJic6Jz8nfWFtcD0xYDt9ZnVuY3Rpb24gZ2V0UGFnZUZpbGUocGFnZSxidWlsZElkKXtjb25zdCBzdGFydGluZ1VybD1wYWdlPT09Jy8nPycvaW5kZXgnOnBhZ2U7cmV0dXJuIGJ1aWxkSWQ/YCR7c3RhcnRpbmdVcmx9LiR7YnVpbGRJZH0uanNgOmAke3N0YXJ0aW5nVXJsfS5qc2A7fSIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaHRtbEVzY2FwZUpzb25TdHJpbmc9aHRtbEVzY2FwZUpzb25TdHJpbmc7Ly8gVGhpcyB1dGlsaXR5IGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGVcbi8vIExpY2Vuc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2h0bWxlc2NhcGUvYmxvYi8wNTI3Y2E3MTU2YTUyNGQyNTYxMDFiYjMxMGE5Zjk3MGY2MzA3OGFkL0xJQ0VOU0VcbmNvbnN0IEVTQ0FQRV9MT09LVVA9eycmJzonXFxcXHUwMDI2JywnPic6J1xcXFx1MDAzZScsJzwnOidcXFxcdTAwM2MnLCdcXHUyMDI4JzonXFxcXHUyMDI4JywnXFx1MjAyOSc6J1xcXFx1MjAyOSd9O2NvbnN0IEVTQ0FQRV9SRUdFWD0vWyY+PFxcdTIwMjhcXHUyMDI5XS9nO2Z1bmN0aW9uIGh0bWxFc2NhcGVKc29uU3RyaW5nKHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKEVTQ0FQRV9SRUdFWCxtYXRjaD0+RVNDQVBFX0xPT0tVUFttYXRjaF0pO30iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=