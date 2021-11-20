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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./Style/css/animate.min.css":
/*!***********************************!*\
  !*** ./Style/css/animate.min.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./Style/css/dropdown.css":
/*!********************************!*\
  !*** ./Style/css/dropdown.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./Style/css/et-line.css":
/*!*******************************!*\
  !*** ./Style/css/et-line.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./Style/css/font-awesome.min.css":
/*!****************************************!*\
  !*** ./Style/css/font-awesome.min.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./Style/css/popup.css":
/*!*****************************!*\
  !*** ./Style/css/popup.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./Style/css/style-responsive.css":
/*!****************************************!*\
  !*** ./Style/css/style-responsive.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./Style/css/style.css":
/*!*****************************!*\
  !*** ./Style/css/style.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./Style/css/vertical-rhythm.min.css":
/*!*******************************************!*\
  !*** ./Style/css/vertical-rhythm.min.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Alerts.js":
/*!******************************!*\
  !*** ./components/Alerts.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_alert_alertContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/alert/alertContext */ "./context/alert/alertContext.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Alerts = () => {
  const alertContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_alert_alertContext__WEBPACK_IMPORTED_MODULE_2__["default"]); // console.log(alertContext.alerts);

  return alertContext.alerts.length > 0 && __jsx("div", {
    key: alertContext.alerts[0].id,
    className: "jsx-26299467" + " " + `mt-4 alert alert-${alertContext.alerts[0].type}`
  }, __jsx("i", {
    className: "jsx-26299467" + " " + 'fa fa-info-circle'
  }), ' ', __jsx("strong", {
    className: "jsx-26299467"
  }, "Alerta: ", alertContext.alerts[0].msg), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "26299467"
  }, "div.jsx-26299467{width:100%;height:75px;z-index:999999;position:absolute;margin-left:auto;margin-right:auto;top:0;left:0;right:0;text-align:center;background-color:#e55729;border:1px solid black;color:#fff;font-size:16px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxcY29tcG9uZW50c1xcQWxlcnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNnQixBQUdrQixXQUNDLFlBQ0csZUFDRyxrQkFDRCxpQkFDQyxrQkFDWixNQUNDLE9BQ0MsUUFDVSxrQkFDTyx5QkFDRix1QkFFWixXQUNJLGVBQ2hCIiwiZmlsZSI6IkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxcY29tcG9uZW50c1xcQWxlcnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWxlcnRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYWxlcnQvYWxlcnRDb250ZXh0JztcblxuY29uc3QgQWxlcnRzID0gKCkgPT4ge1xuXHRjb25zdCBhbGVydENvbnRleHQgPSB1c2VDb250ZXh0KEFsZXJ0Q29udGV4dCk7XG5cdC8vIGNvbnNvbGUubG9nKGFsZXJ0Q29udGV4dC5hbGVydHMpO1xuXHRyZXR1cm4gKFxuXHRcdGFsZXJ0Q29udGV4dC5hbGVydHMubGVuZ3RoID4gMCAmJiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGtleT17YWxlcnRDb250ZXh0LmFsZXJ0c1swXS5pZH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtgbXQtNCBhbGVydCBhbGVydC0ke2FsZXJ0Q29udGV4dC5hbGVydHNbMF0udHlwZX1gfVxuXHRcdFx0PlxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWluZm8tY2lyY2xlJyAvPnsnICd9XG5cdFx0XHRcdDxzdHJvbmc+QWxlcnRhOiB7YWxlcnRDb250ZXh0LmFsZXJ0c1swXS5tc2d9PC9zdHJvbmc+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDc1cHg7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5OTk5OTk7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlNTU3Mjk7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjMwLCAxNjUsIDYwLCAxKSA0NyUsIHJnYmEoMjMwLCAxNjUsIDYwLCAxKSAwJSwgcmdiYSgyMjksIDgwLCAzOSwgMSkgMTAwJSk7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0cztcbiJdfQ== */\n/*@ sourceURL=E:\\\\work\\\\next-express\\\\client\\\\components\\\\Alerts.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Alerts);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: Footer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = () => {
  return __jsx("footer", {
    className: "page-footer font-small mdb-color lighten-3 pt-1"
  }, __jsx("div", {
    dangerouslySetInnerHTML: {
      __html: '<!-- Made with ♥ by Roshan Mishra and Dev Arora Github : https://github.com/rinem https://github.com/dr0id007 -->'
    }
  }), __jsx("div", {
    className: "jsx-1392379088" + " " + 'container text-center text-md-left'
  }, __jsx("div", {
    className: "jsx-1392379088" + " " + 'row'
  }, __jsx("div", {
    className: "jsx-1392379088" + " " + 'col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-2 mb-1'
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/';
    },
    className: "jsx-1392379088"
  }), __jsx("p", {
    className: "jsx-1392379088"
  }, "El mejor tipo de cambio para cambiar d\xF3lares y soles online en Lima, Per\xFA")), __jsx("hr", {
    className: "jsx-1392379088" + " " + 'clearfix w-100 d-md-none'
  }), __jsx("div", {
    className: "jsx-1392379088" + " " + 'col-md-6 col-lg-3 mx-auto my-md-4 my-1 mt-1 mb-1'
  }, __jsx("h5", {
    className: "jsx-1392379088" + " " + 'font-weight-bold text-uppercase mb-2'
  }, "Contact"), __jsx("ul", {
    className: "jsx-1392379088" + " " + 'list-unstyled'
  }, __jsx("li", {
    className: "jsx-1392379088"
  }, __jsx("p", {
    className: "jsx-1392379088"
  }, __jsx("i", {
    className: "jsx-1392379088" + " " + 'fa fa-home mr-1'
  }), " New York, NY 10012")), __jsx("li", {
    className: "jsx-1392379088"
  }, __jsx("p", {
    className: "jsx-1392379088"
  }, __jsx("i", {
    className: "jsx-1392379088" + " " + 'fa fa-envelope mr-1'
  }), " info@example.com")), __jsx("li", {
    className: "jsx-1392379088"
  }, __jsx("p", {
    className: "jsx-1392379088"
  }, __jsx("i", {
    className: "jsx-1392379088" + " " + 'fa fa-phone mr-1'
  }), " + 01 234 567 88")))), __jsx("hr", {
    className: "jsx-1392379088" + " " + 'clearfix w-100 d-md-none'
  }), __jsx("div", {
    className: "jsx-1392379088" + " " + 'col-md-2 col-lg-2 text-center mx-auto my-4'
  }, __jsx("h5", {
    className: "jsx-1392379088" + " " + 'font-weight-bold text-uppercase mb-4'
  }, "Follow Us"), __jsx("a", {
    type: "button",
    className: "jsx-1392379088" + " " + 'btn-floating btn-fb'
  }, __jsx("i", {
    className: "jsx-1392379088" + " " + 'fa fa-facebook'
  })), __jsx("a", {
    type: "button",
    className: "jsx-1392379088" + " " + 'btn-floating btn-tw'
  }, __jsx("i", {
    className: "jsx-1392379088" + " " + 'fa fa-twitter'
  })), __jsx("a", {
    type: "button",
    className: "jsx-1392379088" + " " + 'btn-floating btn-gplus'
  }, __jsx("i", {
    className: "jsx-1392379088" + " " + 'fa fa-whatsapp'
  })), __jsx("a", {
    type: "button",
    className: "jsx-1392379088" + " " + 'btn-floating btn-dribbble'
  }, __jsx("i", {
    className: "jsx-1392379088" + " " + 'fa fa-instagram'
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1392379088"
  }, "p.jsx-1392379088,li.jsx-1392379088,div.jsx-1392379088 a.jsx-1392379088{margin:0%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGTSxBQUtrQixVQUNYIiwiZmlsZSI6IkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT0ncGFnZS1mb290ZXIgZm9udC1zbWFsbCBtZGItY29sb3IgbGlnaHRlbi0zIHB0LTEnPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdF9faHRtbDpcblx0XHRcdFx0XHRcdCc8IS0tIE1hZGUgd2l0aCDimaUgYnkgUm9zaGFuIE1pc2hyYSBhbmQgRGV2IEFyb3JhIEdpdGh1YiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9yaW5lbSBodHRwczovL2dpdGh1Yi5jb20vZHIwaWQwMDcgLS0+Jyxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0Jz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC00IGNvbC1sZy0zIG1yLWF1dG8gbXktbWQtNCBteS0wIG10LTIgbWItMSc+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHsvKiA8aW1nXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtyZXF1aXJlKCcnKX1cblx0XHRcdFx0XHRcdFx0XHRhbHQ9Jydcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltZy1mbHVpZCdcblx0XHRcdFx0XHRcdFx0Lz4gKi99XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0RWwgbWVqb3IgdGlwbyBkZSBjYW1iaW8gcGFyYSBjYW1iaWFyIGTDs2xhcmVzIHkgc29sZXMgb25saW5lIGVuXG5cdFx0XHRcdFx0XHRcdExpbWEsIFBlcsO6XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogPGhyIGNsYXNzTmFtZT1cImNsZWFyZml4IHctMTAwIGQtbWQtbm9uZVwiPjwvaHI+ICovfVxuXG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nY2xlYXJmaXggdy0xMDAgZC1tZC1ub25lJz48L2hyPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IGNvbC1sZy0zIG14LWF1dG8gbXktbWQtNCBteS0xIG10LTEgbWItMSc+XG5cdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkIHRleHQtdXBwZXJjYXNlIG1iLTInPkNvbnRhY3Q8L2g1PlxuXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdsaXN0LXVuc3R5bGVkJz5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1ob21lIG1yLTEnPjwvaT4gTmV3IFlvcmssIE5ZIDEwMDEyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWVudmVsb3BlIG1yLTEnPjwvaT4gaW5mb0BleGFtcGxlLmNvbVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1waG9uZSBtci0xJz48L2k+ICsgMDEgMjM0IDU2NyA4OFxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdjbGVhcmZpeCB3LTEwMCBkLW1kLW5vbmUnPjwvaHI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTIgY29sLWxnLTIgdGV4dC1jZW50ZXIgbXgtYXV0byBteS00Jz5cblx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbWItNCc+Rm9sbG93IFVzPC9oNT5cblxuXHRcdFx0XHRcdFx0PGEgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J0bi1mbG9hdGluZyBidG4tZmInPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWZhY2Vib29rJz48L2k+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0XHRcdDxhIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidG4tZmxvYXRpbmcgYnRuLXR3Jz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS10d2l0dGVyJz48L2k+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0XHRcdDxhIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidG4tZmxvYXRpbmcgYnRuLWdwbHVzJz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS13aGF0c2FwcCc+PC9pPlxuXHRcdFx0XHRcdFx0PC9hPlxuXG5cdFx0XHRcdFx0XHQ8YSB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnRuLWZsb2F0aW5nIGJ0bi1kcmliYmJsZSc+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtaW5zdGFncmFtJz48L2k+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0bGksXG5cdFx0XHRcdFx0XHRkaXYgYSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyLWNvcHlyaWdodCB0ZXh0LWNlbnRlciBweS0xIHBiLTMnPlxuXHRcdFx0XHTCqSAyMDIwIENvcHlyaWdodDpcblx0XHRcdFx0PGEgaHJlZj0nIyc+IE1vbmkucGU8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Zvb3Rlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=E:\\\\work\\\\next-express\\\\client\\\\components\\\\Footer.js */")), __jsx("div", {
    className: "footer-copyright text-center py-1 pb-3"
  }, "\xA9 2020 Copyright:", __jsx("a", {
    href: "#"
  }, " Moni.pe")));
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer2.js":
/*!*******************************!*\
  !*** ./components/Footer2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Footer2 = () => {
  return __jsx("footer", {
    className: "jsx-4089914221" + " " + "small-section bg-morado footer pb-20 pt-20"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "container"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "row align-left"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "col-sm-6 col-lg-3 col-md-3 col-xs-6 col-sm-3"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "widget"
  }, __jsx("img", {
    src: "images/ship_logo.png",
    alt: "logo",
    className: "jsx-4089914221" + " " + 'ship-logo'
  }), __jsx("div", {
    className: "jsx-4089914221" + " " + "widget-body"
  }, __jsx("p", {
    className: "jsx-4089914221"
  }, "3130-580 Seaborne Ave ", __jsx("br", {
    className: "jsx-4089914221"
  }), "Port Coquitlam, B, c,", __jsx("br", {
    className: "jsx-4089914221"
  }), "V3B OM3", __jsx("br", {
    className: "jsx-4089914221"
  }), "CANADA", __jsx("br", {
    className: "jsx-4089914221"
  }), "Tel: +1 778-727-1427")))), __jsx("div", {
    className: "jsx-4089914221" + " " + "col-sm-6 col-lg-3 col-xs-6 col-md-3 col-sm-3"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "widget"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "widget-body"
  }, __jsx("ul", {
    className: "jsx-4089914221" + " " + "clearlist widget-menu"
  }, __jsx("li", {
    className: "jsx-4089914221"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "/faq";
    },
    title: "",
    className: "jsx-4089914221"
  }, "How ShipByMail Works")), __jsx("li", {
    className: "jsx-4089914221"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "/faq";
    },
    title: "",
    className: "jsx-4089914221"
  }, "Shipping & Pricing")), __jsx("li", {
    className: "jsx-4089914221"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "/faq";
    },
    title: "",
    className: "jsx-4089914221"
  }, "FAQ")), __jsx("li", {
    className: "jsx-4089914221"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "/faq";
    },
    title: "",
    className: "jsx-4089914221"
  }, "Support")), __jsx("li", {
    className: "jsx-4089914221"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "/faq";
    },
    title: "",
    className: "jsx-4089914221"
  }, "Actual vs, Volumetric Weight")))))), __jsx("div", {
    className: "jsx-4089914221" + " " + "col-sm-6 col-lg-3 col-xs-6 col-md-3 col-sm-3"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "widget"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "widget-body"
  }, __jsx("ul", {
    className: "jsx-4089914221" + " " + "clearlist widget-menu"
  }, __jsx("li", {
    className: "jsx-4089914221"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "/faq";
    },
    title: "",
    className: "jsx-4089914221"
  }, "Contact Us")), __jsx("li", {
    className: "jsx-4089914221"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "/faq";
    },
    title: "",
    className: "jsx-4089914221"
  }, "About ShipByMail")), __jsx("li", {
    className: "jsx-4089914221"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "/faq";
    },
    title: "",
    className: "jsx-4089914221"
  }, "Become a Partner")), __jsx("li", {
    className: "jsx-4089914221"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "/faq";
    },
    title: "",
    className: "jsx-4089914221"
  }, "SiteMap")), __jsx("li", {
    className: "jsx-4089914221"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "/faq";
    },
    title: "",
    className: "jsx-4089914221"
  }, "Blog")))))), __jsx("div", {
    className: "jsx-4089914221" + " " + "col-sm-6 col-lg-3 col-xs-12 col-md-3 col-sm-3"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "widget"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "footer-social-links"
  }, __jsx("p", {
    className: "jsx-4089914221" + " " + "social-title"
  }, "2019 Country Growth Leader"), __jsx("img", {
    src: "images/international_ship.png",
    className: "jsx-4089914221"
  }), __jsx("p", {
    className: "jsx-4089914221" + " " + "social-subtitle"
  }, "international Shipping"), __jsx("p", {
    className: "jsx-4089914221" + " " + "soclal-review"
  }, "Read our reviews on:"), __jsx("div", {
    className: "jsx-4089914221" + " " + "row"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "https://www.facebook.com/pg/shipbymail/reviews";
    },
    title: "",
    className: "jsx-4089914221" + " " + "facebook-link"
  }, __jsx("img", {
    src: "images/facebook_share1.png",
    className: "jsx-4089914221"
  })), __jsx("a", {
    onClick: () => {
      window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
    },
    title: "",
    className: "jsx-4089914221"
  }, __jsx("img", {
    src: "images/trustpilot.png",
    className: "jsx-4089914221"
  }))))))), __jsx("div", {
    className: "jsx-4089914221" + " " + "row algin-left footer-paypal"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-3 col-sm-6"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "row"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-6"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
    },
    title: "",
    className: "jsx-4089914221"
  }, __jsx("img", {
    src: "images/Canada-post.png",
    className: "jsx-4089914221"
  }))), __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-6"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
    },
    title: "",
    className: "jsx-4089914221"
  }, __jsx("img", {
    src: "images/dhl_logo.gif",
    className: "jsx-4089914221"
  })))), __jsx("div", {
    className: "jsx-4089914221" + " " + "row"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-6"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
    },
    title: "",
    className: "jsx-4089914221"
  }, __jsx("img", {
    src: "images/fedex_logo.gif",
    className: "jsx-4089914221"
  }))), __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-6"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
    },
    title: "",
    className: "jsx-4089914221"
  }, __jsx("img", {
    src: "images/TNT-logo.png",
    className: "jsx-4089914221"
  })))), __jsx("div", {
    className: "jsx-4089914221" + " " + "row"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-6"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
    },
    title: "",
    className: "jsx-4089914221"
  }, __jsx("img", {
    src: "images/usps_logo.png",
    className: "jsx-4089914221"
  })), __jsx("a", {
    onClick: () => {
      window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
    },
    title: "",
    className: "jsx-4089914221" + " " + "paypal"
  }, __jsx("img", {
    src: "images/Paypal-Visa-debit.png",
    className: "jsx-4089914221"
  }))), __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-6"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = "https://www.trustpilot.com/review/www.shipbymail.com";
    },
    title: "",
    className: "jsx-4089914221"
  }, __jsx("img", {
    src: "images/UPS_logo.png",
    className: "jsx-4089914221"
  }))))), __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-6 col-sm-12"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "row"
  }, __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-8"
  }, __jsx("h4", {
    className: "jsx-4089914221"
  }, "BLOG")), __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-4"
  })), __jsx("p", {
    className: "jsx-4089914221"
  }, "1. Online Shopping from canada saves you money, Really?"), __jsx("p", {
    className: "jsx-4089914221"
  }, "2. Ship To Panama"), __jsx("p", {
    className: "jsx-4089914221"
  }, "3. Ship To Australia"), __jsx("p", {
    className: "jsx-4089914221"
  }, "4. Ship To Argentina"), __jsx("p", {
    className: "jsx-4089914221"
  }, "5. What CAN'T you ship through your Canadian Parcel Forwarders Address?")), __jsx("div", {
    className: "jsx-4089914221" + " " + "col-md-3 col-sm-6 plus"
  }, __jsx("img", {
    src: "images/plusimg1111111.jpg",
    className: "jsx-4089914221"
  }), __jsx("p", {
    className: "jsx-4089914221"
  }, "For every international shipment.", __jsx("br", {
    className: "jsx-4089914221"
  }), "ShipByMail will donate $1 to the Canadian ", __jsx("br", {
    className: "jsx-4089914221"
  }), "Red Cross to help where it is needed", __jsx("br", {
    className: "jsx-4089914221"
  }), "most.")))), __jsx("div", {
    className: "jsx-4089914221" + " " + "footer-text"
  }, __jsx("h6", {
    className: "jsx-4089914221" + " " + "white"
  }, "2017-2020 ShipByMail.com All Rights Reserved | XML Sitemap")), __jsx("div", {
    className: "jsx-4089914221" + " " + "local-scroll"
  }, __jsx("a", {
    href: "#top",
    className: "jsx-4089914221" + " " + "link-to-top"
  }, __jsx("i", {
    className: "jsx-4089914221" + " " + "fa fa-chevron-circle-up"
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4089914221"
  }, ".social-title.jsx-4089914221{margin-bottom:3px;color:red;}.social-subtitle.jsx-4089914221{margin-bottom:0px;color:red;font-size:19px;}.footer-social-links.jsx-4089914221{text-align:center;}.facebook-link.jsx-4089914221{margin-right:15px;}.soclal-review.jsx-4089914221{font-size:12px;color:black;margin-top:0px;margin-bottom:2px;}.footer-text.jsx-4089914221{background-color:#1e487c;}.footer-text.jsx-4089914221 h6.jsx-4089914221{margin-bottom:0;}footer.jsx-4089914221{padding-bottom:0;}.footer-paypal.jsx-4089914221 img.jsx-4089914221{border-radius:5px;}.footer-paypal.jsx-4089914221 .row.jsx-4089914221{margin-bottom:10px;}.footer-paypal.jsx-4089914221 .paypal.jsx-4089914221 img.jsx-4089914221{margin-top:20px;}.footer-paypal.jsx-4089914221 h4.jsx-4089914221{margin-top:0;margin-bottom:10px;}.footer-paypal.jsx-4089914221 p.jsx-4089914221{margin-top:0;margin-bottom :4px;}.footer-paypal.jsx-4089914221 .plus.jsx-4089914221{text-align:center;}.footer-text.jsx-4089914221{text-align:center;}footer.jsx-4089914221 a.jsx-4089914221{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxcY29tcG9uZW50c1xcRm9vdGVyMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2UmtCLEFBRzZCLEFBSUEsQUFLQSxBQUdBLEFBR0gsQUFNVSxBQUdULEFBR0MsQUFHQyxBQUdDLEFBR0gsQUFHSCxBQUlBLEFBSUssQUFHQSxBQUdILGFBYkksQUFJQSxFQTVCUixBQXNDYixDQTdCQSxBQVlBLENBVEEsQ0EzQlksQUFJQSxBQUtaLEFBR0EsQUFrQkEsQUFpQkEsQUFHQSxDQWpCQSxNQVpBLEVBTGdCLENBZmhCLEFBSWlCLElBbUNqQixBQUlBLFVBM0JtQixDQVhuQixpQkFZQSIsImZpbGUiOiJFOlxcd29ya1xcbmV4dC1leHByZXNzXFxjbGllbnRcXGNvbXBvbmVudHNcXEZvb3RlcjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBGb290ZXIyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwic21hbGwtc2VjdGlvbiBiZy1tb3JhZG8gZm9vdGVyIHBiLTIwIHB0LTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1sZWZ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctMyBjb2wtbWQtMyBjb2wteHMtNiBjb2wtc20tM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3NoaXAtbG9nbycgc3JjPSdpbWFnZXMvc2hpcF9sb2dvLnBuZycgYWx0PSdsb2dvJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAzMTMwLTU4MCBTZWFib3JuZSBBdmUgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICBQb3J0IENvcXVpdGxhbSwgQiwgYyw8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgIFYzQiBPTTM8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgIENBTkFEQTxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgVGVsOiArMSA3NzgtNzI3LTE0MjdcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy0zIGNvbC14cy02IGNvbC1tZC0zIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNsZWFybGlzdCB3aWRnZXQtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBIb3cgU2hpcEJ5TWFpbCBXb3Jrc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTaGlwcGluZyAmIFByaWNpbmdcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRkFRXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWN0dWFsIHZzLCBWb2x1bWV0cmljIFdlaWdodFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy0zIGNvbC14cy02IGNvbC1tZC0zIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNsZWFybGlzdCB3aWRnZXQtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFNoaXBCeU1haWxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQmVjb21lIGEgUGFydG5lclxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTaXRlTWFwXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctMyBjb2wteHMtMTIgY29sLW1kLTMgY29sLXNtLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNvY2lhbC1saW5rc1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNvY2lhbC10aXRsZVwiPjIwMTkgQ291bnRyeSBHcm93dGggTGVhZGVyPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ludGVybmF0aW9uYWxfc2hpcC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNvY2lhbC1zdWJ0aXRsZVwiPmludGVybmF0aW9uYWwgU2hpcHBpbmc8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic29jbGFsLXJldmlld1wiPlJlYWQgb3VyIHJldmlld3Mgb246PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wZy9zaGlwYnltYWlsL3Jldmlld3NcIjtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWNlYm9vay1saW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZmFjZWJvb2tfc2hhcmUxLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy90cnVzdHBpbG90LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGdpbi1sZWZ0IGZvb3Rlci1wYXlwYWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvQ2FuYWRhLXBvc3QucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZGhsX2xvZ28uZ2lmXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZmVkZXhfbG9nby5naWZcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3d3dy5zaGlwYnltYWlsLmNvbVwiO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9UTlQtbG9nby5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3d3dy5zaGlwYnltYWlsLmNvbVwiO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy91c3BzX2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXlwYWxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL1BheXBhbC1WaXNhLWRlYml0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy50cnVzdHBpbG90LmNvbS9yZXZpZXcvd3d3LnNoaXBieW1haWwuY29tXCI7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL1VQU19sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgPGg0PkJMT0c8L2g0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD4xLiBPbmxpbmUgU2hvcHBpbmcgZnJvbSBjYW5hZGEgc2F2ZXMgeW91IG1vbmV5LCBSZWFsbHk/PC9wPlxuICAgICAgICAgICAgPHA+Mi4gU2hpcCBUbyBQYW5hbWE8L3A+XG4gICAgICAgICAgICA8cD4zLiBTaGlwIFRvIEF1c3RyYWxpYTwvcD5cbiAgICAgICAgICAgIDxwPjQuIFNoaXAgVG8gQXJnZW50aW5hPC9wPlxuICAgICAgICAgICAgPHA+NS4gV2hhdCBDQU4nVCB5b3Ugc2hpcCB0aHJvdWdoIHlvdXIgQ2FuYWRpYW4gUGFyY2VsIEZvcndhcmRlcnMgQWRkcmVzcz88L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wtc20tNiBwbHVzXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9wbHVzaW1nMTExMTExMS5qcGdcIiAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEZvciBldmVyeSBpbnRlcm5hdGlvbmFsIHNoaXBtZW50Ljxicj48L2JyPlxuICAgICAgICAgICAgICBTaGlwQnlNYWlsIHdpbGwgZG9uYXRlICQxIHRvIHRoZSBDYW5hZGlhbiA8YnI+PC9icj5cbiAgICAgICAgICAgICAgUmVkIENyb3NzIHRvIGhlbHAgd2hlcmUgaXQgaXMgbmVlZGVkPGJyPjwvYnI+XG4gICAgICAgICAgICAgIG1vc3QuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10ZXh0XCI+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgIDIwMTctMjAyMCBTaGlwQnlNYWlsLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkIHwgWE1MIFNpdGVtYXBcbiAgICAgICAgPC9oNj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhbC1zY3JvbGxcIj5cbiAgICAgICAgPGEgaHJlZj1cIiN0b3BcIiBjbGFzc05hbWU9XCJsaW5rLXRvLXRvcFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZXZyb24tY2lyY2xlLXVwXCI+PC9pPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNvY2lhbC10aXRsZXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsLXN1YnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1zb2NpYWwtbGlua3Mge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZmFjZWJvb2stbGluayB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zb2NsYWwtcmV2aWV3IHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgbWFyZ2luLXRvcDowcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbToycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci10ZXh0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ODdjO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItdGV4dCBoNntcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1wYXlwYWwgaW1ne1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXBheXBhbCAucm93IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItcGF5cGFsIC5wYXlwYWwgaW1ne1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1wYXlwYWwgaDQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXBheXBhbCBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1wYXlwYWwgLnBsdXMge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXRleHQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXIyO1xuIl19 */\n/*@ sourceURL=E:\\\\work\\\\next-express\\\\client\\\\components\\\\Footer2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer2);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Alerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Alerts */ "./components/Alerts.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const isServer = true;
const WOW = !isServer ? __webpack_require__(/*! wowjs */ "wowjs") : null;

const Layout = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    new WOW.WOW().init();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Moni"), __jsx("meta", {
    name: "description",
    content: ""
  }), __jsx("meta", {
    name: "keywords",
    content: ""
  }), __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0"
  }), __jsx("link", {
    rel: "shortcut icon",
    href: "images/favicon.png"
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "images/apple-touch-icon.png"
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "images/apple-touch-icon-72x72.png"
  }), __jsx("link", {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "images/apple-touch-icon-114x114.png"
  })), __jsx("link", {
    rel: "stylesheet",
    href: "css/bootstrap.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "css/style.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "css/style-responsive.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "css/animate.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "css/vertical-rhythm.min.css"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "css/magnific-popup.css"
  }), __jsx(_Alerts__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("div", {
    className: "appear-animate"
  }, props.children), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery-1.11.2.min.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery.easing.1.3.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/bootstrap.min.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/SmoothScroll.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery.scrollTo.min.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery.localScroll.min.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery.viewport.mini.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery.countTo.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery.appear.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery.sticky.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery.parallax-1.1.3.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery.fitvids.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/owl.carousel.min.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/isotope.pkgd.min.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/imagesloaded.pkgd.min.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/jquery.magnific-popup.min.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/wow.min.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/masonry.pkgd.min.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/all.js"
  }), __jsx("script", {
    type: "text/javascript",
    src: "js/main.js"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spinners/PulseLoader */ "react-spinners/PulseLoader");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Can be a string as well. Need to ensure each key-value pair ends with ;

const override = _emotion_core__WEBPACK_IMPORTED_MODULE_1__["css"]`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class AwesomeComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return __jsx("div", {
      className: "sweet-loading"
    }, __jsx(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_2___default.a, {
      css: override,
      size: 10,
      color: "#77cfeb",
      loading: this.state.loading
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AwesomeComponent);

/***/ }),

/***/ "./components/Login/Login2.js":
/*!************************************!*\
  !*** ./components/Login/Login2.js ***!
  \************************************/
/*! exports provided: Login, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_alert_alertContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/alert/alertContext */ "./context/alert/alertContext.js");
/* harmony import */ var _Navbar2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navbar2 */ "./components/Navbar2.js");
/* harmony import */ var _topbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../topbar */ "./components/topbar.js");
/* harmony import */ var _Footer2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Footer2 */ "./components/Footer2.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Loader */ "./components/Loader.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const Login = ({
  router
}) => {
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const alertContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_alert_alertContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    setAlert,
    alerts
  } = alertContext;
  const {
    0: showPassword,
    1: setShowPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const _onSubmit = async e => {
    e.preventDefault();
    e.persist();
    const body = {
      email: username,
      password: password
    };

    if (body.email === '' || body.password === '') {
      setAlert('Login error');
    } else {
      const res = await axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5000/users/login', {
        data: body
      });

      if (res.data != "invalid user") {
        console.log(res);
        localStorage.setItem("ship-token", res.data.token);
        localStorage.setItem("ship-username", res.data.name);
        localStorage.setItem("ship-userId", res.data.id);

        if (router.pathname === '/' || router.pathname === '/index') {
          window.location.reload();
        } else {
          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/');
        }
      } else {
        setAlert("Invalid User");
      }
    }
  };

  const togglePassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const _handleUserNameChange = e => {
    e.preventDefault();
    e.persist();
    setUsername(e.target.value);
  };

  const _handlePasswordChange = e => {
    e.preventDefault();
    e.persist();
    setPassword(e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("section", {
    id: "page",
    className: "jsx-630839561" + " " + 'page-section pt-20 pb-0 appear-animate'
  }, __jsx(_Navbar2__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_topbar__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "jsx-630839561" + " " + 'home-content container'
  }, __jsx("div", {
    className: "jsx-630839561" + " " + 'home-text'
  }, __jsx("div", {
    className: "jsx-630839561" + " " + 'container align-center'
  }, __jsx("div", {
    className: "jsx-630839561" + " " + 'row'
  }, __jsx("div", {
    className: "jsx-630839561" + " " + 'col-sm-7 col-sm-push-3'
  }, __jsx("form", {
    onSubmit: e => _onSubmit(e),
    className: "jsx-630839561" + " " + 'form white'
  }, __jsx("h1", {
    className: "jsx-630839561"
  }, "Sign in to enjoy Shopping from Canada"), __jsx("input", {
    type: "email",
    name: "usuario",
    id: "usuario",
    placeholder: "email",
    pattern: ".{3,100}",
    value: username,
    onChange: e => _handleUserNameChange(e),
    className: "jsx-630839561" + " " + 'input-sm bold'
  }), __jsx("i", {
    className: "jsx-630839561" + " " + 'fa fa-user fa-2x campoform'
  }), __jsx("input", {
    name: "password",
    id: "password",
    placeholder: "password",
    pattern: ".{3,100}",
    type: showPassword ? 'text' : 'password',
    value: password,
    onChange: e => _handlePasswordChange(e),
    className: "jsx-630839561" + " " + 'input-sm bold'
  }), __jsx("i", {
    onClick: e => togglePassword(e),
    className: "jsx-630839561" + " " + 'fa fa-eye fa-2x campoform'
  }), __jsx("div", {
    className: "jsx-630839561"
  }, __jsx("button", {
    type: "submit",
    className: "jsx-630839561"
  }, "SIGN IN")), __jsx("a", {
    href: "/forgetpassword",
    className: "jsx-630839561"
  }, __jsx("p", {
    style: {
      marginBottom: '3px',
      fontWeight: "normal"
    },
    className: "jsx-630839561"
  }, "Forget password?")), __jsx("p", {
    style: {
      marginBottom: '3px',
      color: "black"
    },
    className: "jsx-630839561"
  }, " Don't have an account? \xA0\xA0", __jsx("a", {
    href: "/register",
    className: "jsx-630839561"
  }, "Sign Up Now")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "630839561"
  }, ".btn-icon.jsx-630839561{background:transparent;color:white;}.home-content.jsx-630839561{padding:80px 0px 60px 0px;background:url(\"images/pay-bg.jpg\");background-size:cover;}form.jsx-630839561{background-color:white;padding:15px;text-align:center;}form.jsx-630839561 h1.jsx-630839561{font-size:24px;color:#1e487c;font-weight:600;}form.jsx-630839561 input.jsx-630839561{border:1px solid #f7f1f1 !important;color:black !important;border-radius:3px !important;}form.jsx-630839561 button.jsx-630839561{padding:8px 25px;border:none;border-radius:3px;background-color:#1e487c;margin-bottom:30px;}form.jsx-630839561 a.jsx-630839561{color:black !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxcY29tcG9uZW50c1xcTG9naW5cXExvZ2luMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSGdCLEFBRzhCLEFBSUcsQUFLSCxBQUtSLEFBS3FCLEFBS25CLEFBT00sZUFoQlQsRUFVSCxNQXhCQyxBQVNDLEFBc0JkLEdBM0JxQyxHQVdwQixBQVVFLE1BeEJuQixDQVNtQixBQVNLLFNBSHhCLEVBVTBCLE9BZjFCLEtBUzhCLEdBZlAsVUFzQkgsWUFyQnBCLElBZUEsR0FPQSIsImZpbGUiOiJFOlxcd29ya1xcbmV4dC1leHByZXNzXFxjbGllbnRcXGNvbXBvbmVudHNcXExvZ2luXFxMb2dpbjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IEFsZXJ0Q29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L2FsZXJ0L2FsZXJ0Q29udGV4dCc7XG5pbXBvcnQgTmF2YmFyMiBmcm9tICcuLi9OYXZiYXIyJztcbmltcG9ydCBUb3BiYXIgZnJvbSAnLi4vdG9wYmFyJztcbmltcG9ydCBGb290ZXIyIGZyb20gJy4uL0Zvb3RlcjInO1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XG5cbmV4cG9ydCBjb25zdCBMb2dpbiA9ICh7cm91dGVyfSkgPT4ge1xuXHRjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IGFsZXJ0Q29udGV4dCA9IHVzZUNvbnRleHQoQWxlcnRDb250ZXh0KTtcblx0Y29uc3QgeyBzZXRBbGVydCwgYWxlcnRzIH0gPSBhbGVydENvbnRleHQ7XG5cdGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgX29uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5wZXJzaXN0KCk7XG5cdFx0Y29uc3QgYm9keSA9IHsgZW1haWw6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcblx0XHRpZiAoYm9keS5lbWFpbCA9PT0gJycgfHwgYm9keS5wYXNzd29yZCA9PT0gJycpIHtcblx0XHRcdHNldEFsZXJ0KCdMb2dpbiBlcnJvcicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvdXNlcnMvbG9naW4nLCB7ZGF0YTogYm9keX0pO1xuXHRcdFx0aWYocmVzLmRhdGEgIT0gXCJpbnZhbGlkIHVzZXJcIikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNoaXAtdG9rZW5cIiwgcmVzLmRhdGEudG9rZW4pO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNoaXAtdXNlcm5hbWVcIiwgcmVzLmRhdGEubmFtZSk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2hpcC11c2VySWRcIiwgcmVzLmRhdGEuaWQpO1xuXHRcdFx0XHRpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL2luZGV4Jykge1xuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnLycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRBbGVydChcIkludmFsaWQgVXNlclwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdG9nZ2xlUGFzc3dvcmQgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCk7XG5cdH07XG5cblx0Y29uc3QgX2hhbmRsZVVzZXJOYW1lQ2hhbmdlID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5wZXJzaXN0KCk7XG5cdFx0c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xuXHR9XG5cblx0Y29uc3QgX2hhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5wZXJzaXN0KCk7XG5cdFx0c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlLXNlY3Rpb24gcHQtMjAgcGItMCBhcHBlYXItYW5pbWF0ZScgaWQ9J3BhZ2UnPlxuXHRcdFx0XHQ8TmF2YmFyMiAvPlxuXHRcdFx0XHQ8VG9wYmFyIC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRlbnQgY29udGFpbmVyJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naG9tZS10ZXh0Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgYWxpZ24tY2VudGVyJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1zbS03IGNvbC1zbS1wdXNoLTMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPSdmb3JtIHdoaXRlJyBvblN1Ym1pdD17KGUpID0+IF9vblN1Ym1pdChlKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMT5TaWduIGluIHRvIGVuam95IFNob3BwaW5nIGZyb20gQ2FuYWRhPC9oMT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nZW1haWwnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ndXN1YXJpbydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0ndXN1YXJpbydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXNtIGJvbGQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm49Jy57MywxMDB9J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt1c2VybmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IF9oYW5kbGVVc2VyTmFtZUNoYW5nZShlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS11c2VyIGZhLTJ4IGNhbXBvZm9ybSc+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0ncGFzc3dvcmQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbnB1dC1zbSBib2xkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScuezMsMTAwfSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPXtzaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IF9oYW5kbGVQYXNzd29yZENoYW5nZShlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmEgZmEtZXllIGZhLTJ4IGNhbXBvZm9ybSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gdG9nZ2xlUGFzc3dvcmQoZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTSUdOIElOXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nL2ZvcmdldHBhc3N3b3JkJz48cCBzdHlsZT17e21hcmdpbkJvdHRvbTogJzNweCcsIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJ9fT5Gb3JnZXQgcGFzc3dvcmQ/PC9wPjwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICczcHgnLCBjb2xvcjogXCJibGFja1wifX0+IERvbid0IGhhdmUgYW4gYWNjb3VudD8gJm5ic3A7Jm5ic3A7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nL3JlZ2lzdGVyJz4gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTaWduIFVwIE5vd1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5idG4taWNvbiB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmhvbWUtY29udGVudCB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA4MHB4IDBweCA2MHB4IDBweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybChcImltYWdlcy9wYXktYmcuanBnXCIpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9ybSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvcm0gaDEge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxZTQ4N2M7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3JtIGlucHV0IHtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmN2YxZjEgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvcm0gYnV0dG9uIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweCAyNXB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOm5vbmU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ODdjO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9ybSBhIHtcblx0XHRcdFx0XHRcdGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8Rm9vdGVyMiAvPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihMb2dpbik7XG4iXX0= */\n/*@ sourceURL=E:\\\\work\\\\next-express\\\\client\\\\components\\\\Login\\\\Login2.js */"), __jsx(_Footer2__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Login));

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Navbar = ({
  router
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {}, []);

  const handleLogout = () => {
    const res = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.remove('token');

    if (router.pathname === '/' || router.pathname === '/index') {
      window.location.reload();
    } else {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
    }
  };

  return __jsx("nav", {
    className: "jsx-1824206738" + " " + 'main-nav stick-fixed'
  }, __jsx("div", {
    className: "jsx-1824206738" + " " + 'container relative clearfix'
  }, __jsx("div", {
    className: "jsx-1824206738" + " " + 'nav-logo-wrap local-scroll'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/';
    },
    className: "jsx-1824206738" + " " + 'logo'
  }, __jsx("img", {
    src: "images/ship_logo.png",
    alt: "logo",
    className: "jsx-1824206738" + " " + 'ship-logo'
  }), __jsx("img", {
    src: "images/bbb_logo.png",
    alt: "logo",
    className: "jsx-1824206738" + " " + 'bbb-logo'
  })))), __jsx("div", {
    className: "jsx-1824206738" + " " + 'mobile-nav'
  }, __jsx("a", {
    href: "#",
    className: "jsx-1824206738" + " " + 'fm-button'
  }, __jsx("span", {
    className: "jsx-1824206738"
  }), "Menu"), __jsx("div", {
    id: "fullscreen-menu",
    className: "jsx-1824206738" + " " + 'fm-wrapper'
  }, __jsx("div", {
    className: "jsx-1824206738" + " " + 'fm-wrapper-sub'
  }, __jsx("div", {
    className: "jsx-1824206738" + " " + 'fm-wrapper-sub-sub'
  }, __jsx("ul", {
    className: "jsx-1824206738" + " " + 'fm-menu-links scroll-nav local-scroll'
  }, __jsx("li", {
    className: "jsx-1824206738" + " " + 'nav-list dashboard'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/dashboard"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/dashboard';
    },
    className: "jsx-1824206738"
  }, "DASHBOARD"))), __jsx("li", {
    className: "jsx-1824206738" + " " + 'nav-list howitworks'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/howitworks"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/howitworks';
    },
    className: "jsx-1824206738"
  }, "HOW IT WORKS"))), __jsx("li", {
    className: "jsx-1824206738" + " " + 'nav-list pricing'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/pricing"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/pricing';
    },
    className: "jsx-1824206738"
  }, "PRICING"))), __jsx("li", {
    className: "jsx-1824206738" + " " + 'nav-list support'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/support"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/support';
    },
    className: "jsx-1824206738"
  }, "SUPPORT"))), __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/UserInfo"
  }, __jsx("a", {
    className: "jsx-1824206738"
  }, localStorage.getItem("ship-userName")))), __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/register"
  }, __jsx("a", {
    className: "jsx-1824206738"
  }, "Logout")))), __jsx("div", {
    className: "jsx-1824206738" + " " + 'fm-social-links'
  }, __jsx("a", {
    href: "#",
    title: "Facebook",
    target: "_blank",
    className: "jsx-1824206738"
  }, __jsx("i", {
    className: "jsx-1824206738" + " " + 'fa fa-facebook'
  })), __jsx("a", {
    href: "#",
    title: "Twitter",
    target: "_blank",
    className: "jsx-1824206738"
  }, __jsx("i", {
    className: "jsx-1824206738" + " " + 'fa fa-twitter'
  })), __jsx("a", {
    href: "#",
    title: "Linkedin",
    target: "_blank",
    className: "jsx-1824206738"
  }, __jsx("i", {
    className: "jsx-1824206738" + " " + 'fa fa-linkedin'
  })), __jsx("a", {
    href: "#",
    title: "Instagram+",
    target: "_blank",
    className: "jsx-1824206738"
  }, __jsx("i", {
    className: "jsx-1824206738" + " " + 'fa fa-instagram'
  }))))))), __jsx("div", {
    className: "jsx-1824206738" + " " + 'inner-nav desktop-nav'
  }, __jsx("ul", {
    className: "jsx-1824206738" + " " + 'clearlist scroll-nav local-scroll'
  }, __jsx("li", {
    className: "jsx-1824206738" + " " + "nav-list dashboard"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/dashboard';
    },
    className: "jsx-1824206738"
  }, "DASHBOARD"))), __jsx("li", {
    className: "jsx-1824206738" + " " + "nav-list howitworks"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/howitworks';
    },
    className: "jsx-1824206738"
  }, "HOW IT WORKS"))), __jsx("li", {
    className: "jsx-1824206738" + " " + "nav-list pricing"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/pricing';
    },
    className: "jsx-1824206738"
  }, "PRICING"))), __jsx("li", {
    className: "jsx-1824206738" + " " + "nav-list support"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/support';
    },
    className: "jsx-1824206738"
  }, "SUPPORT"))), islogin ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login"
  }, __jsx("a", {
    className: "jsx-1824206738"
  }, __jsx("button", {
    onClick: handleLogout,
    className: "jsx-1824206738" + " " + 'btn'
  }, __jsx("span", {
    className: "jsx-1824206738" + " " + 'btn btn-mod btn-border-w btn-circle bold btn-sesion'
  }, "Cerrar Sesi\xF3n"))))), __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/profile';
    },
    className: "jsx-1824206738"
  }, __jsx("span", {
    className: "jsx-1824206738" + " " + 'btn btn-mod btn-color btn-border-w btn-medium btn-circle bold'
  }, name))))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login"
  }, __jsx("a", {
    className: "jsx-1824206738"
  }, __jsx("span", {
    className: "jsx-1824206738" + " " + 'btn btn-mod btn-border-w btn-circle sign-in'
  }, "SIGN IN")))), __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/register"
  }, __jsx("a", {
    className: "jsx-1824206738"
  }, __jsx("span", {
    className: "jsx-1824206738" + " " + 'btn btn-mod btn-border-w btn-circle sign-up'
  }, "SIGN UP")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1824206738"
  }, ".btn.jsx-1824206738{background:transparent;}.nav-list.active.jsx-1824206738 a.jsx-1824206738{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJOSyxBQUc4QixBQUdiLFVBQ1gsYUFIQSIsImZpbGUiOiJFOlxcd29ya1xcbmV4dC1leHByZXNzXFxjbGllbnRcXGNvbXBvbmVudHNcXE5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5jb25zdCBOYXZiYXIgPSAoeyByb3V0ZXIgfSkgPT4ge1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgcmVzID0gQ29va2llcy5yZW1vdmUoJ3Rva2VuJyk7XG5cdFx0aWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gJy9pbmRleCcpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Um91dGVyLnB1c2goJy8nKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT0nbWFpbi1uYXYgc3RpY2stZml4ZWQnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciByZWxhdGl2ZSBjbGVhcmZpeCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduYXYtbG9nby13cmFwIGxvY2FsLXNjcm9sbCc+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdsb2dvJ1xuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nc2hpcC1sb2dvJyBzcmM9J2ltYWdlcy9zaGlwX2xvZ28ucG5nJyBhbHQ9J2xvZ28nIC8+XG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdiYmItbG9nbycgc3JjPSdpbWFnZXMvYmJiX2xvZ28ucG5nJyBhbHQ9J2xvZ28nIC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vYmlsZS1uYXYnPlxuXHRcdFx0XHRcdDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nZm0tYnV0dG9uJz5cblx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5NZW51XG5cdFx0XHRcdFx0PC9hPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZtLXdyYXBwZXInIGlkPSdmdWxsc2NyZWVuLW1lbnUnPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZtLXdyYXBwZXItc3ViJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZtLXdyYXBwZXItc3ViLXN1Yic+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nZm0tbWVudS1saW5rcyBzY3JvbGwtbmF2IGxvY2FsLXNjcm9sbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBkYXNoYm9hcmQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZGFzaGJvYXJkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZGFzaGJvYXJkJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0REFTSEJPQVJEXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgaG93aXR3b3Jrcyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9ob3dpdHdvcmtzJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaG93aXR3b3Jrcyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEhPVyBJVCBXT1JLU1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IHByaWNpbmcnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcHJpY2luZyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3ByaWNpbmcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRQUklDSU5HXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3Qgc3VwcG9ydCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9zdXBwb3J0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc3VwcG9ydCc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNVUFBPUlRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9Vc2VySW5mbyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+e2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hpcC11c2VyTmFtZVwiKX08L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZWdpc3Rlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+TG9nb3V0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm0tc29jaWFsLWxpbmtzJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdGYWNlYm9vaycgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWZhY2Vib29rJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJyB0aXRsZT0nVHdpdHRlcicgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLXR3aXR0ZXInPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdMaW5rZWRpbicgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWxpbmtlZGluJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJyB0aXRsZT0nSW5zdGFncmFtKycgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWluc3RhZ3JhbSc+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2lubmVyLW5hdiBkZXNrdG9wLW5hdic+XG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nY2xlYXJsaXN0IHNjcm9sbC1uYXYgbG9jYWwtc2Nyb2xsJz5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBkYXNoYm9hcmRcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZGFzaGJvYXJkJztcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0REFTSEJPQVJEXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IGhvd2l0d29ya3NcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaG93aXR3b3Jrcyc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdEhPVyBJVCBXT1JLU1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBwcmljaW5nXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3ByaWNpbmcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRQUklDSU5HXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IHN1cHBvcnRcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc3VwcG9ydCc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFNVUFBPUlRcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cblx0XHRcdFx0XHRcdHtpc2xvZ2luID8gKFxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9sb2dpbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17aGFuZGxlTG9nb3V0fSBjbGFzc05hbWU9J2J0bic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tbW9kIGJ0bi1ib3JkZXItdyBidG4tY2lyY2xlIGJvbGQgYnRuLXNlc2lvbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdENlcnJhciBTZXNpw7NuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3Byb2ZpbGUnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tbW9kIGJ0bi1jb2xvciBidG4tYm9yZGVyLXcgYnRuLW1lZGl1bSBidG4tY2lyY2xlIGJvbGQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e25hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9sb2dpbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWJvcmRlci13IGJ0bi1jaXJjbGUgc2lnbi1pbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTSUdOIElOXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVnaXN0ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tbW9kIGJ0bi1ib3JkZXItdyBidG4tY2lyY2xlIHNpZ24tdXAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBVUFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQuYnRuIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubmF2LWxpc3QuYWN0aXZlIGF7XG5cdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9uYXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKE5hdmJhcik7XG4iXX0= */\n/*@ sourceURL=E:\\\\work\\\\next-express\\\\client\\\\components\\\\Navbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Navbar));

/***/ }),

/***/ "./components/Navbar2.js":
/*!*******************************!*\
  !*** ./components/Navbar2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const getData = async token => {
  const header = {
    headers: {
      'x-auth-token': token
    }
  };
  const data = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get('http://localhost:5000/api/auth', header);
  return data.data;
};

const Navbar2 = ({
  router
}) => {
  const {
    0: islogin,
    1: setIsLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const coo = localStorage.getItem('ship-token');

    if (coo != null && coo != '' && coo != undefined && coo != 'undefined' && coo != 'null') {
      try {
        console.log("islogin");
        setIsLogin(true);
      } catch (error) {
        setIsLogin(false);
      }
    }
  }, []);
  return __jsx("nav", {
    className: "jsx-1824206738" + " " + 'main-nav stick-fixed'
  }, __jsx("div", {
    className: "jsx-1824206738" + " " + 'container relative clearfix'
  }, __jsx("div", {
    className: "jsx-1824206738" + " " + 'nav-logo-wrap local-scroll'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/';
    },
    className: "jsx-1824206738" + " " + 'logo'
  }, __jsx("img", {
    src: "images/ship_logo.png",
    alt: "logo",
    className: "jsx-1824206738" + " " + 'ship-logo'
  }), __jsx("img", {
    src: "images/bbb_logo.png",
    alt: "logo",
    className: "jsx-1824206738" + " " + 'bbb-logo'
  })))), __jsx("div", {
    className: "jsx-1824206738" + " " + 'mobile-nav'
  }, __jsx("a", {
    href: "#",
    className: "jsx-1824206738" + " " + 'fm-button'
  }, __jsx("span", {
    className: "jsx-1824206738"
  }), "Menu"), __jsx("div", {
    id: "fullscreen-menu",
    className: "jsx-1824206738" + " " + 'fm-wrapper'
  }, __jsx("div", {
    className: "jsx-1824206738" + " " + 'fm-wrapper-sub'
  }, __jsx("div", {
    className: "jsx-1824206738" + " " + 'fm-wrapper-sub-sub'
  }, __jsx("ul", {
    className: "jsx-1824206738" + " " + 'fm-menu-links scroll-nav local-scroll'
  }, __jsx("li", {
    className: "jsx-1824206738" + " " + 'nav-list home'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, islogin ? '' : __jsx("a", {
    onClick: () => {
      window.location.href = '/';
    },
    className: "jsx-1824206738"
  }, "HOME"))), __jsx("li", {
    className: "jsx-1824206738" + " " + 'nav-list dashboard'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/dashboard"
  }, __jsx("a", {
    onClick: () => {
      if (islogin) {
        window.location.href = '/dashboard';
      } else {
        window.location.href = '/login';
      }
    },
    className: "jsx-1824206738"
  }, "DASHBOARD"))), __jsx("li", {
    className: "jsx-1824206738" + " " + 'nav-list howitworks'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/howitworks"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/howitworks';
    },
    className: "jsx-1824206738"
  }, "HOW IT WORKS"))), __jsx("li", {
    className: "jsx-1824206738" + " " + 'nav-list pricing'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/pricing"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/pricing';
    },
    className: "jsx-1824206738"
  }, "PRICING"))), __jsx("li", {
    className: "jsx-1824206738" + " " + 'nav-list support'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/support"
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/support';
    },
    className: "jsx-1824206738"
  }, "SUPPORT"))), islogin ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx("a", {
    className: "jsx-1824206738"
  }, localStorage.getItem('ship-username'))), __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx("a", {
    onClick: () => {
      localStorage.setItem('ship-username', '');
      localStorage.setItem('ship-token', '');

      if (router.pathname === '/' || router.pathname === '/index') {
        window.location.reload();
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/');
      }
    },
    className: "jsx-1824206738"
  }, "Log out"))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login"
  }, __jsx("a", {
    className: "jsx-1824206738"
  }, "SIGN IN"))), __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/register"
  }, __jsx("a", {
    className: "jsx-1824206738"
  }, "SIGN UP"))))), __jsx("div", {
    className: "jsx-1824206738" + " " + 'fm-social-links'
  }, __jsx("a", {
    href: "#",
    title: "Facebook",
    target: "_blank",
    className: "jsx-1824206738"
  }, __jsx("i", {
    className: "jsx-1824206738" + " " + 'fa fa-facebook'
  })), __jsx("a", {
    href: "#",
    title: "Twitter",
    target: "_blank",
    className: "jsx-1824206738"
  }, __jsx("i", {
    className: "jsx-1824206738" + " " + 'fa fa-twitter'
  })), __jsx("a", {
    href: "#",
    title: "Linkedin",
    target: "_blank",
    className: "jsx-1824206738"
  }, __jsx("i", {
    className: "jsx-1824206738" + " " + 'fa fa-linkedin'
  })), __jsx("a", {
    href: "#",
    title: "Instagram+",
    target: "_blank",
    className: "jsx-1824206738"
  }, __jsx("i", {
    className: "jsx-1824206738" + " " + 'fa fa-instagram'
  }))))))), __jsx("div", {
    className: "jsx-1824206738" + " " + 'inner-nav desktop-nav'
  }, __jsx("ul", {
    className: "jsx-1824206738" + " " + 'clearlist scroll-nav local-scroll'
  }, __jsx("li", {
    className: "jsx-1824206738" + " " + 'nav-list home'
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, islogin ? '' : __jsx("a", {
    onClick: () => {
      window.location.href = '/';
    },
    className: "jsx-1824206738"
  }, "HOME"))), __jsx("li", {
    className: "jsx-1824206738" + " " + "nav-list dashboard"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      if (islogin) {
        window.location.href = '/dashboard';
      } else {
        window.location.href = '/login';
      }
    },
    className: "jsx-1824206738"
  }, "DASHBOARD"))), __jsx("li", {
    className: "jsx-1824206738" + " " + "nav-list howitworks"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/howitworks';
    },
    className: "jsx-1824206738"
  }, "HOW IT WORKS"))), __jsx("li", {
    className: "jsx-1824206738" + " " + "nav-list pricing"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/pricing';
    },
    className: "jsx-1824206738"
  }, "PRICING"))), __jsx("li", {
    className: "jsx-1824206738" + " " + "nav-list support"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: ""
  }, __jsx("a", {
    onClick: () => {
      window.location.href = '/support';
    },
    className: "jsx-1824206738"
  }, "SUPPORT"))), islogin ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx("a", {
    style: {
      fontSize: "20px",
      fontWeight: "bold"
    },
    className: "jsx-1824206738"
  }, localStorage.getItem('ship-username'))), __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx("a", {
    onClick: () => {
      localStorage.setItem('ship-username', '');
      localStorage.setItem('ship-token', '');

      if (router.pathname === '/' || router.pathname === '/index') {
        window.location.reload();
      } else {
        window.location.href = '/';
      }
    },
    className: "jsx-1824206738"
  }, __jsx("span", {
    className: "jsx-1824206738" + " " + 'btn btn-mod btn-border-w btn-circle sign-in'
  }, "LOG OUT")))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/login"
  }, __jsx("a", {
    className: "jsx-1824206738"
  }, __jsx("span", {
    className: "jsx-1824206738" + " " + 'btn btn-mod btn-border-w btn-circle sign-in'
  }, "SIGN IN")))), __jsx("li", {
    className: "jsx-1824206738"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/register"
  }, __jsx("a", {
    className: "jsx-1824206738"
  }, __jsx("span", {
    className: "jsx-1824206738" + " " + 'btn btn-mod btn-border-w btn-circle sign-up'
  }, "SIGN UP")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1824206738"
  }, ".btn.jsx-1824206738{background:transparent;}.nav-list.active.jsx-1824206738 a.jsx-1824206738{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxcY29tcG9uZW50c1xcTmF2YmFyMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzU0ssQUFHOEIsQUFHYixVQUNYLGFBSEEiLCJmaWxlIjoiRTpcXHdvcmtcXG5leHQtZXhwcmVzc1xcY2xpZW50XFxjb21wb25lbnRzXFxOYXZiYXIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEZhVW5kZXJsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIHRva2VuID0+IHtcblx0Y29uc3QgaGVhZGVyID0ge1xuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCd4LWF1dGgtdG9rZW4nOiB0b2tlbixcblx0XHR9LFxuXHR9O1xuXHRjb25zdCBkYXRhID0gYXdhaXQgQXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2F1dGgnLCBoZWFkZXIpO1xuXG5cdHJldHVybiBkYXRhLmRhdGE7XG59O1xuXG5jb25zdCBOYXZiYXIyID0gKHsgcm91dGVyIH0pID0+IHtcblx0Y29uc3QgW2lzbG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBjb28gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2hpcC10b2tlbicpO1xuXHRcdGlmIChjb28gIT0gbnVsbCAmJiBjb28gIT0gJycgJiYgY29vICE9IHVuZGVmaW5lZCAmJiBjb28gIT0gJ3VuZGVmaW5lZCcgJiYgY29vICE9ICdudWxsJykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJpc2xvZ2luXCIpO1xuXHRcdFx0XHRzZXRJc0xvZ2luKHRydWUpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0c2V0SXNMb2dpbihmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT0nbWFpbi1uYXYgc3RpY2stZml4ZWQnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciByZWxhdGl2ZSBjbGVhcmZpeCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduYXYtbG9nby13cmFwIGxvY2FsLXNjcm9sbCc+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdsb2dvJ1xuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nc2hpcC1sb2dvJyBzcmM9J2ltYWdlcy9zaGlwX2xvZ28ucG5nJyBhbHQ9J2xvZ28nIC8+XG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdiYmItbG9nbycgc3JjPSdpbWFnZXMvYmJiX2xvZ28ucG5nJyBhbHQ9J2xvZ28nIC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vYmlsZS1uYXYnPlxuXHRcdFx0XHRcdDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nZm0tYnV0dG9uJz5cblx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5NZW51XG5cdFx0XHRcdFx0PC9hPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZtLXdyYXBwZXInIGlkPSdmdWxsc2NyZWVuLW1lbnUnPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZtLXdyYXBwZXItc3ViJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZtLXdyYXBwZXItc3ViLXN1Yic+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nZm0tbWVudS1saW5rcyBzY3JvbGwtbmF2IGxvY2FsLXNjcm9sbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBob21lJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc2xvZ2luID8gJycgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEhPTUVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBkYXNoYm9hcmQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZGFzaGJvYXJkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihpc2xvZ2luKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZGFzaGJvYXJkJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdERBU0hCT0FSRFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IGhvd2l0d29ya3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvaG93aXR3b3Jrcyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2hvd2l0d29ya3MnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRIT1cgSVQgV09SS1Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBwcmljaW5nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3ByaWNpbmcnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcmljaW5nJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0UFJJQ0lOR1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IHN1cHBvcnQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvc3VwcG9ydCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3N1cHBvcnQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTVVBQT1JUXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2lzbG9naW4gPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NoaXAtdXNlcm5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2hpcC11c2VybmFtZScsICcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaGlwLXRva2VuJywgJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gJy9pbmRleCcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Um91dGVyLnB1c2goJy8nKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdExvZyBvdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9sb2dpbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBJTlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZWdpc3Rlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBVUFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS1zb2NpYWwtbGlua3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgdGl0bGU9J0ZhY2Vib29rJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtZmFjZWJvb2snPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdUd2l0dGVyJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtdHdpdHRlcic+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgdGl0bGU9J0xpbmtlZGluJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlua2VkaW4nPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdJbnN0YWdyYW0rJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtaW5zdGFncmFtJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5uZXItbmF2IGRlc2t0b3AtbmF2Jz5cblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdjbGVhcmxpc3Qgc2Nyb2xsLW5hdiBsb2NhbC1zY3JvbGwnPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgaG9tZSc+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0aXNsb2dpbiA/ICcnIFxuXHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRIT01FXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IGRhc2hib2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKGlzbG9naW4pe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kYXNoYm9hcmQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0REFTSEJPQVJEXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IGhvd2l0d29ya3NcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaG93aXR3b3Jrcyc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdEhPVyBJVCBXT1JLU1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBwcmljaW5nXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3ByaWNpbmcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRQUklDSU5HXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IHN1cHBvcnRcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc3VwcG9ydCc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFNVUFBPUlRcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cblx0XHRcdFx0XHRcdHtpc2xvZ2luID8gKFxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIHN0eWxlPXt7Zm9udFNpemU6IFwiMjBweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIn19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NoaXAtdXNlcm5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NoaXAtdXNlcm5hbWUnLCAnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaGlwLXRva2VuJywgJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL2luZGV4Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWJvcmRlci13IGJ0bi1jaXJjbGUgc2lnbi1pbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0TE9HIE9VVFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9sb2dpbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWJvcmRlci13IGJ0bi1jaXJjbGUgc2lnbi1pbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTSUdOIElOXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVnaXN0ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tbW9kIGJ0bi1ib3JkZXItdyBidG4tY2lyY2xlIHNpZ24tdXAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBVUFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQuYnRuIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubmF2LWxpc3QuYWN0aXZlIGF7XG5cdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9uYXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKE5hdmJhcjIpO1xuIl19 */\n/*@ sourceURL=E:\\\\work\\\\next-express\\\\client\\\\components\\\\Navbar2.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Navbar2));

/***/ }),

/***/ "./components/topbar.js":
/*!******************************!*\
  !*** ./components/topbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Subscribe = props => {
  return __jsx("section", {
    className: "jsx-2229240104" + " " + "topbar"
  }, __jsx("div", {
    className: "jsx-2229240104" + " " + "topbar-red"
  }, "FOLLOW US ON INSTARAM @SHIPBYMAIL FOR THE LATEST PROMOS. SALES AND DEALS FROM CANADA"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2229240104"
  }, ".topbar.jsx-2229240104{text-align:center;color:white;}.topbar-red.jsx-2229240104{background-color:#d80202;font-size:12px;padding:5px 0px;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;border-bottom:1px solid white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxcY29tcG9uZW50c1xcdG9wYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNrQixBQUc2QixBQUlPLGtCQUhiLE9BSUcsS0FIakIsVUFJa0IsZ0JBQ0csNkZBQ1csOEJBQ2hDIiwiZmlsZSI6IkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxcY29tcG9uZW50c1xcdG9wYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdWJzY3JpYmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b3BiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BiYXItcmVkXCI+XG4gICAgICAgICAgRk9MTE9XIFVTIE9OIElOU1RBUkFNIEBTSElQQllNQUlMIEZPUiBUSEUgTEFURVNUIFBST01PUy4gU0FMRVMgQU5EIERFQUxTIEZST00gQ0FOQURBXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRvcGJhciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAudG9wYmFyLXJlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDIwMjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpYmU7XG4iXX0= */\n/*@ sourceURL=E:\\\\work\\\\next-express\\\\client\\\\components\\\\topbar.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Subscribe);

/***/ }),

/***/ "./context/AdminContext.js":
/*!*********************************!*\
  !*** ./context/AdminContext.js ***!
  \*********************************/
/*! exports provided: Provider, Consumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AdminContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const Provider = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    token: '',
    isAuthenticated: false
  });

  const addToken = token => {
    // console.log("admin login called..");
    const newState = state;
    newState.token = token;
    setState(newState);
  };

  const changeAuthenticated = () => {
    const newState = state;
    newState.isAuthenticated = true;
    setState(newState);
  };

  return __jsx(AdminContext.Provider, {
    value: {
      state,
      addToken,
      changeAuthenticated
    }
  }, props.children);
};
const Consumer = AdminContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (AdminContext);

/***/ }),

/***/ "./context/AgentContext.js":
/*!*********************************!*\
  !*** ./context/AgentContext.js ***!
  \*********************************/
/*! exports provided: Provider, Consumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AgentContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const Provider = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    token: '',
    userName: '',
    isLogin: false,
    id: ''
  });

  const addToken = token => {
    const newState = state;
    newState.token = token;
    setState(newState);
  };

  const addName = userName => {
    const newState = state;
    newState.userName = userName;
    newState.isLogin = true;
    setState(newState); // console.log(state);
  };

  const isUserAuth = async token => {
    const header = {
      headers: {
        'x-auth-token': token
      }
    };
    const res = axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.moni.pe/api/auth', header); // console.log('res:-', res);
  };

  return __jsx(AgentContext.Provider, {
    value: {
      state,
      addToken,
      isUserAuth,
      addName
    }
  }, props.children);
};
const Consumer = AgentContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (AgentContext);

/***/ }),

/***/ "./context/LoginContext.js":
/*!*********************************!*\
  !*** ./context/LoginContext.js ***!
  \*********************************/
/*! exports provided: Provider, Consumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const UserContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  showLogin: false
});
const Provider = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    showLogin: false
  });

  const toggleLogin = () => {
    const {
      showLogin
    } = state;
    setState({
      showLogin: !showLogin
    });
  };

  return __jsx(UserContext.Provider, {
    value: {
      state,
      toggleLogin
    }
  }, props.children);
};
const Consumer = UserContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (UserContext);

/***/ }),

/***/ "./context/UserContext.js":
/*!********************************!*\
  !*** ./context/UserContext.js ***!
  \********************************/
/*! exports provided: Provider, Consumer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const UserContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const Provider = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    token: '',
    userName: '',
    isLogin: false,
    id: ''
  });

  const addToken = token => {
    const newState = state;
    newState.token = token;
    setState(newState);
  };

  const addName = userName => {
    const newState = state;
    newState.userName = userName;
    newState.isLogin = true;
    setState(newState);
  };

  const isUserAuth = async token => {
    const header = {
      headers: {
        'x-auth-token': token
      }
    };
    const res = axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('https://api.moni.pe/api/auth', header);
  };

  return __jsx(UserContext.Provider, {
    value: {
      state,
      addToken,
      isUserAuth,
      addName
    }
  }, props.children);
};
const Consumer = UserContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (UserContext);

/***/ }),

/***/ "./context/alert/AlertState.js":
/*!*************************************!*\
  !*** ./context/alert/AlertState.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _alertContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alertContext */ "./context/alert/alertContext.js");
/* harmony import */ var _alertReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alertReducer */ "./context/alert/alertReducer.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./context/types.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const AlertState = props => {
  const initialState = [];
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_alertReducer__WEBPACK_IMPORTED_MODULE_3__["default"], initialState); // Set Alert

  const setAlert = (msg, type, timeout = 5000) => {
    const id = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__["SET_ALERT"],
      payload: {
        msg,
        type,
        id
      }
    });
    setTimeout(() => dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__["REMOVE_ALERT"],
      payload: id
    }), timeout);
  };

  return __jsx(_alertContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      alerts: state,
      setAlert
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (AlertState);

/***/ }),

/***/ "./context/alert/alertContext.js":
/*!***************************************!*\
  !*** ./context/alert/alertContext.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const alertContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (alertContext);

/***/ }),

/***/ "./context/alert/alertReducer.js":
/*!***************************************!*\
  !*** ./context/alert/alertReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./context/types.js");

/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_ALERT"]:
      return [...state, action.payload];

    case _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_ALERT"]:
      return state.filter(alert => alert.id !== action.payload);

    default:
      return state;
  }
});

/***/ }),

/***/ "./context/types.js":
/*!**************************!*\
  !*** ./context/types.js ***!
  \**************************/
/*! exports provided: SET_ALERT, REMOVE_ALERT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_ALERT", function() { return SET_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ALERT", function() { return REMOVE_ALERT; });
const SET_ALERT = 'SET_ALERT';
const REMOVE_ALERT = 'REMOVE_ALERT';

/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.min.css":
/*!************************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.min.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


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

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
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

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/react-notifications/lib/notifications.css":
/*!****************************************************************!*\
  !*** ./node_modules/react-notifications/lib/notifications.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_LoginContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/LoginContext */ "./context/LoginContext.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/UserContext */ "./context/UserContext.js");
/* harmony import */ var _context_AdminContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AdminContext */ "./context/AdminContext.js");
/* harmony import */ var _context_AgentContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/AgentContext */ "./context/AgentContext.js");
/* harmony import */ var _context_alert_AlertState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/alert/AlertState */ "./context/alert/AlertState.js");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _login_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login.js */ "./pages/login.js");
/* harmony import */ var _admin_login_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin_login.js */ "./pages/admin_login.js");
/* harmony import */ var _node_modules_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../node_modules/font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var _node_modules_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_node_modules_font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-notifications/lib/notifications.css */ "./node_modules/react-notifications/lib/notifications.css");
/* harmony import */ var react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_notifications_lib_notifications_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Style_css_style_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Style/css/style.css */ "./Style/css/style.css");
/* harmony import */ var _Style_css_style_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_Style_css_style_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _Style_css_style_responsive_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Style/css/style-responsive.css */ "./Style/css/style-responsive.css");
/* harmony import */ var _Style_css_style_responsive_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Style_css_style_responsive_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _Style_css_animate_min_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Style/css/animate.min.css */ "./Style/css/animate.min.css");
/* harmony import */ var _Style_css_animate_min_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Style_css_animate_min_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Style_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../Style/css/font-awesome.min.css */ "./Style/css/font-awesome.min.css");
/* harmony import */ var _Style_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Style_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _Style_css_vertical_rhythm_min_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Style/css/vertical-rhythm.min.css */ "./Style/css/vertical-rhythm.min.css");
/* harmony import */ var _Style_css_vertical_rhythm_min_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_Style_css_vertical_rhythm_min_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Style_css_et_line_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../Style/css/et-line.css */ "./Style/css/et-line.css");
/* harmony import */ var _Style_css_et_line_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_Style_css_et_line_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Style_css_popup_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../Style/css/popup.css */ "./Style/css/popup.css");
/* harmony import */ var _Style_css_popup_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Style_css_popup_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _Style_css_dropdown_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Style/css/dropdown.css */ "./Style/css/dropdown.css");
/* harmony import */ var _Style_css_dropdown_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_Style_css_dropdown_css__WEBPACK_IMPORTED_MODULE_21__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














 // import "../Style/Button.css";
// import "../Style/Card.css";
// import "../Style/Navbar.css";
// import "../Style/Home.css";
// import "../Style/Footer.css";
// import "../Style/Features.css";
// import "../Style/Convertor.css";
// import "../Style/Contact.css";
// import "../Style/Faq.css";
// import "../Style/Banner.css";
// import "../Style/Login.css";
// import "../Style/Transfer.css";
// import "../Style/Form.css";
// import "../Style/Operation.css";
// import "../Style/AdminSidenav.css";
// import "../Style/Button.css";
// import "../Style/Popup.css";
// import "../Style/Alert.css";








 // import "../Style/magnific-popup.css";

const MyApp = ({
  Component,
  pageProps,
  role
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  let allowed = true; // if (router.pathname.startsWith("/admin/") && role !== "admin") {
  //   allowed = false;
  // }
  // if (router.pathname.startsWith("/login") && !role) {
  //   allowed = false;
  // }
  // if (router.pathname.startsWith("/operation") && role !== "user") {
  //   allowed = false;
  // }

  const ComponentToRender = allowed ? Component : _login_js__WEBPACK_IMPORTED_MODULE_10__["default"];
  return __jsx(_context_alert_AlertState__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx(_context_AdminContext__WEBPACK_IMPORTED_MODULE_6__["Provider"], null, __jsx(_context_AgentContext__WEBPACK_IMPORTED_MODULE_7__["Provider"], null, __jsx(_context_LoginContext__WEBPACK_IMPORTED_MODULE_4__["Provider"], null, __jsx(_context_UserContext__WEBPACK_IMPORTED_MODULE_5__["Provider"], null, __jsx(ComponentToRender, pageProps))))));
};

MyApp.getInitialProps = async function (ctx) {
  const appProps = await next_app__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
  return _objectSpread(_objectSpread({}, appProps), {}, {
    role: next_cookies__WEBPACK_IMPORTED_MODULE_9___default()(ctx).type || ""
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./pages/admin_login.js":
/*!******************************!*\
  !*** ./pages/admin_login.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_AdminContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AdminContext */ "./context/AdminContext.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_alert_alertContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/alert/alertContext */ "./context/alert/alertContext.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_AgentContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/AgentContext */ "./context/AgentContext.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-notifications */ "react-notifications");
/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_notifications__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_13__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 // import cookies from "next-cookies";







const adminLogin = props => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_AdminContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    state,
    addToken,
    changeAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_AdminContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const alertContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_alert_alertContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const {
    setAlert,
    alerts
  } = alertContext;
  const {
    0: awaitData,
    1: setAwaitData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: showPassword,
    1: setShowPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Admin');

  const init = () => {
    const tok = js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.get('adminToken');

    if (tok !== undefined) {
      window.location.href = '/admin/admin_dashboard';
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    init();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    let url = 'https://api.moni.pe/api/admin/auth';
    const body = {
      email,
      password
    };

    if (type === 'Agent') {
      url = 'https://api.moni.pe/api/agent/auth';
    }

    setAwaitData(true);

    try {
      if (body.email === '' || body.password === '') {
        setAwaitData(false);
        setAlert('Por favor llena todos los espacios', 'danger');
      } else {
        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(url, body);

        if (res.data !== undefined) {
          await addToken(res.data.token);

          if (type === 'Agent') {
            js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set('agentToken', res.data.token);
            js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove('adminToken');
          } else {
            js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set('adminToken', res.data.token);
            js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.remove('agentToken');
          }

          changeAuthenticated(); // await addName(res.data.name);

          window.location.href = '/admin/admin_dashboard';
        } else {
          setAlert('Por favor llena todos los espacios', 'danger');
          setAwaitData(false);
        }
      }
    } catch (error) {
      console.log(error);
      setAlert('Credenciales no válidas', 'danger');
      setAwaitData(false);
    }
  };

  const togglePassword = e => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  if (awaitData === true) {
    return __jsx("div", {
      className: "loading w-100 h-100"
    }, __jsx("div", {
      className: "loader"
    }, __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], null)), __jsx("style", null, `
          .loading {
            overflow: hidden
            margin: 0px;
            padding: 0px;
            height: 100vh;
            background: #071127;
          }
        `));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx("div", {
    className: "page",
    id: "top"
  }, __jsx("section", {
    id: "page",
    className: "jsx-4072744872" + " " + 'page-section pt-20 pb-0'
  }, __jsx("div", {
    className: "jsx-4072744872" + " " + 'home-content container'
  }, __jsx("div", {
    className: "jsx-4072744872" + " " + 'home-text'
  }, __jsx("div", {
    className: "jsx-4072744872" + " " + 'container align-center'
  }, __jsx("div", {
    className: "jsx-4072744872" + " " + 'row'
  }, __jsx("div", {
    className: "jsx-4072744872" + " " + 'col-sm-5 col-sm-push-3'
  }, __jsx("form", {
    className: "jsx-4072744872" + " " + 'form white'
  }, __jsx("img", {
    src: "images/logo-moni.png",
    alt: "Moni",
    width: "150px",
    className: "jsx-4072744872"
  }), __jsx("h1", {
    className: "jsx-4072744872" + " " + 'section-title pt-80 pt-xs-40 mb-40 mb-sm-40'
  }, "Inicie sesi\xF3n como administrador"), __jsx("input", {
    type: "text",
    name: "usuario",
    id: "usuario",
    placeholder: "Usuario",
    pattern: ".{3,100}",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
    },
    className: "jsx-4072744872" + " " + 'input-sm bold'
  }), __jsx("i", {
    className: "jsx-4072744872" + " " + 'fa fa-user fa-2x campoform'
  }), __jsx("input", {
    name: "password",
    id: "password",
    placeholder: "Contrase\xF1a",
    pattern: ".{3,100}",
    type: showPassword ? 'text' : 'password',
    value: password,
    onChange: e => {
      setPassword(e.target.value);
    },
    className: "jsx-4072744872" + " " + 'input-sm bold'
  }), __jsx("i", {
    onClick: togglePassword,
    className: "jsx-4072744872" + " " + 'fa fa-eye fa-2x campoform'
  }), __jsx("select", {
    onChange: e => {
      setType(e.target.value);
    },
    disabled: "",
    className: "jsx-4072744872" + " " + 'input-sm mb-20'
  }, __jsx("option", {
    selected: true,
    className: "jsx-4072744872" + " " + 'opt-custom'
  }, "Admin"), __jsx("option", {
    className: "jsx-4072744872" + " " + 'opt-custom'
  }, "Agent")), __jsx("button", {
    onClick: handleSubmit,
    className: "jsx-4072744872" + " " + 'btn btn-mod btn-color btn-border-w btn-large btn-circle mb-20'
  }, "Iniciar sesi\xF3n"), __jsx("p", {
    className: "jsx-4072744872" + " " + 'mt-20'
  }, "Inicie sesi\xF3n como usuario", __jsx("br", {
    className: "jsx-4072744872"
  }), __jsx("a", {
    href: "/login",
    className: "jsx-4072744872" + " " + 'orange'
  }, "user login")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4072744872"
  }, ".btn-icon.jsx-4072744872{background:transparent;color:white;}.opt-custom.jsx-4072744872{color:white !important;background:black !important;}.opt-custom.jsx-4072744872:hover{background:orange !important;color:white !important;}select.jsx-4072744872 option.jsx-4072744872:hover{background:orange !important;color:white !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxccGFnZXNcXGFkbWluX2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNMa0IsQUFHZ0MsQUFJQSxBQUtNLEFBS0EsdUJBYmpCLEFBSWdCLE1BS0wsQUFLQSxNQWJ4QixnQkFJQSxDQUtBLEFBS0EiLCJmaWxlIjoiRTpcXHdvcmtcXG5leHQtZXhwcmVzc1xcY2xpZW50XFxwYWdlc1xcYWRtaW5fbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQWRtaW5Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvQWRtaW5Db250ZXh0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEFsZXJ0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L2FsZXJ0L2FsZXJ0Q29udGV4dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFnZW50Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L0FnZW50Q29udGV4dCc7XG4vLyBpbXBvcnQgY29va2llcyBmcm9tIFwibmV4dC1jb29raWVzXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHtcblx0Tm90aWZpY2F0aW9uQ29udGFpbmVyLFxuXHROb3RpZmljYXRpb25NYW5hZ2VyLFxufSBmcm9tICdyZWFjdC1ub3RpZmljYXRpb25zJztcbmltcG9ydCB7IEZhRXllLCBGYUV5ZVNsYXNoIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5jb25zdCBhZG1pbkxvZ2luID0gcHJvcHMgPT4ge1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQWRtaW5Db250ZXh0KTtcblx0Y29uc3QgeyBzdGF0ZSwgYWRkVG9rZW4sIGNoYW5nZUF1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQWRtaW5Db250ZXh0KTtcblx0Y29uc3QgYWxlcnRDb250ZXh0ID0gdXNlQ29udGV4dChBbGVydENvbnRleHQpO1xuXHRjb25zdCB7IHNldEFsZXJ0LCBhbGVydHMgfSA9IGFsZXJ0Q29udGV4dDtcblx0Y29uc3QgW2F3YWl0RGF0YSwgc2V0QXdhaXREYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoJ0FkbWluJyk7XG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9rID0gQ29va2llcy5nZXQoJ2FkbWluVG9rZW4nKTtcblx0XHRpZiAodG9rICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hZG1pbi9hZG1pbl9kYXNoYm9hcmQnO1xuXHRcdH1cblx0fTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpbml0KCk7XG5cdH0sIFtdKTtcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCB1cmwgPSAnaHR0cHM6Ly9hcGkubW9uaS5wZS9hcGkvYWRtaW4vYXV0aCc7XG5cdFx0Y29uc3QgYm9keSA9IHsgZW1haWwsIHBhc3N3b3JkIH07XG5cdFx0aWYgKHR5cGUgPT09ICdBZ2VudCcpIHtcblx0XHRcdHVybCA9ICdodHRwczovL2FwaS5tb25pLnBlL2FwaS9hZ2VudC9hdXRoJztcblx0XHR9XG5cdFx0c2V0QXdhaXREYXRhKHRydWUpO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoYm9keS5lbWFpbCA9PT0gJycgfHwgYm9keS5wYXNzd29yZCA9PT0gJycpIHtcblx0XHRcdFx0c2V0QXdhaXREYXRhKGZhbHNlKTtcblx0XHRcdFx0c2V0QWxlcnQoJ1BvciBmYXZvciBsbGVuYSB0b2RvcyBsb3MgZXNwYWNpb3MnLCAnZGFuZ2VyJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBBeGlvcy5wb3N0KHVybCwgYm9keSk7XG5cdFx0XHRcdGlmIChyZXMuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YXdhaXQgYWRkVG9rZW4ocmVzLmRhdGEudG9rZW4pO1xuXHRcdFx0XHRcdGlmICh0eXBlID09PSAnQWdlbnQnKSB7XG5cdFx0XHRcdFx0XHRDb29raWVzLnNldCgnYWdlbnRUb2tlbicsIHJlcy5kYXRhLnRva2VuKTtcblx0XHRcdFx0XHRcdENvb2tpZXMucmVtb3ZlKCdhZG1pblRva2VuJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdENvb2tpZXMuc2V0KCdhZG1pblRva2VuJywgcmVzLmRhdGEudG9rZW4pO1xuXHRcdFx0XHRcdFx0Q29va2llcy5yZW1vdmUoJ2FnZW50VG9rZW4nKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjaGFuZ2VBdXRoZW50aWNhdGVkKCk7XG5cdFx0XHRcdFx0Ly8gYXdhaXQgYWRkTmFtZShyZXMuZGF0YS5uYW1lKTtcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vYWRtaW5fZGFzaGJvYXJkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRBbGVydCgnUG9yIGZhdm9yIGxsZW5hIHRvZG9zIGxvcyBlc3BhY2lvcycsICdkYW5nZXInKTtcblx0XHRcdFx0XHRzZXRBd2FpdERhdGEoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdHNldEFsZXJ0KCdDcmVkZW5jaWFsZXMgbm8gdsOhbGlkYXMnLCAnZGFuZ2VyJyk7XG5cdFx0XHRzZXRBd2FpdERhdGEoZmFsc2UpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCB0b2dnbGVQYXNzd29yZCA9IGUgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCk7XG5cdH07XG5cblx0aWYgKGF3YWl0RGF0YSA9PT0gdHJ1ZSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZyB3LTEwMCBoLTEwMCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsb2FkZXInPlxuXHRcdFx0XHRcdDxMb2FkZXIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZT57YFxuICAgICAgICAgIC5sb2FkaW5nIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW5cbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNzExMjc7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UnIGlkPSd0b3AnPlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZS1zZWN0aW9uIHB0LTIwIHBiLTAnIGlkPSdwYWdlJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRlbnQgY29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2hvbWUtdGV4dCc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBhbGlnbi1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tNSBjb2wtc20tcHVzaC0zJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J2Zvcm0gd2hpdGUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9J2ltYWdlcy9sb2dvLW1vbmkucG5nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9J01vbmknXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPScxNTBweCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlIHB0LTgwIHB0LXhzLTQwIG1iLTQwIG1iLXNtLTQwJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SW5pY2llIHNlc2nDs24gY29tbyBhZG1pbmlzdHJhZG9yXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3VzdWFyaW8nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSd1c3VhcmlvJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXNtIGJvbGQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdVc3VhcmlvJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScuezMsMTAwfSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtdXNlciBmYS0yeCBjYW1wb2Zvcm0nPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3Bhc3N3b3JkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXNtIGJvbGQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb250cmFzZcOxYSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybj0nLnszLDEwMH0nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9e3Nob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmEgZmEtZXllIGZhLTJ4IGNhbXBvZm9ybSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlUGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VHlwZShlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naW5wdXQtc20gbWItMjAnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPScnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gY2xhc3NOYW1lPSdvcHQtY3VzdG9tJyBzZWxlY3RlZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZG1pblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBjbGFzc05hbWU9J29wdC1jdXN0b20nPkFnZW50PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidG4gYnRuLW1vZCBidG4tY29sb3IgYnRuLWJvcmRlci13IGJ0bi1sYXJnZSBidG4tY2lyY2xlIG1iLTIwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEluaWNpYXIgc2VzacOzblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMjAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRJbmljaWUgc2VzacOzbiBjb21vIHVzdWFyaW9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9Jy9sb2dpbicgY2xhc3NOYW1lPSdvcmFuZ2UnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXIgbG9naW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdFx0LmJ0bi1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lm9wdC1jdXN0b20ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQub3B0LWN1c3RvbTpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogb3JhbmdlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRzZWxlY3Qgb3B0aW9uOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBvcmFuZ2UgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkbWluTG9naW47XG4iXX0= */\n/*@ sourceURL=E:\\\\work\\\\next-express\\\\client\\\\pages\\\\admin_login.js */")))));
};

/* harmony default export */ __webpack_exports__["default"] = (adminLogin);

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Login_Login2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Login/Login2 */ "./components/Login/Login2.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const login = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx("div", {
    className: "page",
    id: "top"
  }, __jsx(_components_Login_Login2__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (login);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-notifications":
/*!**************************************!*\
  !*** external "react-notifications" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-notifications");

/***/ }),

/***/ "react-spinners/PulseLoader":
/*!*********************************************!*\
  !*** external "react-spinners/PulseLoader" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners/PulseLoader");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "wowjs":
/*!************************!*\
  !*** external "wowjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("wowjs");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsZXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3RlcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbjIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9wYmFyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvQWRtaW5Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvQWdlbnRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvTG9naW5Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydC9BbGVydFN0YXRlLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYWxlcnQvYWxlcnRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYWxlcnQvYWxlcnRSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYWRtaW5fbG9naW4uanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb29raWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW5vdGlmaWNhdGlvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcGlubmVycy9QdWxzZUxvYWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0c3RyYXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIndvd2pzXCIiXSwibmFtZXMiOlsiQWxlcnRzIiwiYWxlcnRDb250ZXh0IiwidXNlQ29udGV4dCIsIkFsZXJ0Q29udGV4dCIsImFsZXJ0cyIsImxlbmd0aCIsImlkIiwidHlwZSIsIm1zZyIsIkZvb3RlciIsIl9faHRtbCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIkZvb3RlcjIiLCJpc1NlcnZlciIsIldPVyIsInJlcXVpcmUiLCJMYXlvdXQiLCJwcm9wcyIsInVzZUVmZmVjdCIsImluaXQiLCJjaGlsZHJlbiIsIm92ZXJyaWRlIiwiY3NzIiwiQXdlc29tZUNvbXBvbmVudCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJzdGF0ZSIsImxvYWRpbmciLCJyZW5kZXIiLCJMb2dpbiIsInJvdXRlciIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJzZXRBbGVydCIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsIl9vblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBlcnNpc3QiLCJib2R5IiwiZW1haWwiLCJyZXMiLCJBeGlvcyIsInBvc3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b2tlbiIsIm5hbWUiLCJwYXRobmFtZSIsInJlbG9hZCIsIlJvdXRlciIsInB1c2giLCJ0b2dnbGVQYXNzd29yZCIsIl9oYW5kbGVVc2VyTmFtZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiX2hhbmRsZVBhc3N3b3JkQ2hhbmdlIiwibWFyZ2luQm90dG9tIiwiZm9udFdlaWdodCIsImNvbG9yIiwid2l0aFJvdXRlciIsIk5hdmJhciIsImhhbmRsZUxvZ291dCIsIkNvb2tpZXMiLCJyZW1vdmUiLCJnZXRJdGVtIiwiaXNsb2dpbiIsImdldERhdGEiLCJoZWFkZXIiLCJoZWFkZXJzIiwiZ2V0IiwiTmF2YmFyMiIsInNldElzTG9naW4iLCJzZXROYW1lIiwiY29vIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJmb250U2l6ZSIsIlN1YnNjcmliZSIsIkFkbWluQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlciIsInNldFN0YXRlIiwiaXNBdXRoZW50aWNhdGVkIiwiYWRkVG9rZW4iLCJuZXdTdGF0ZSIsImNoYW5nZUF1dGhlbnRpY2F0ZWQiLCJDb25zdW1lciIsIkFnZW50Q29udGV4dCIsInVzZXJOYW1lIiwiaXNMb2dpbiIsImFkZE5hbWUiLCJpc1VzZXJBdXRoIiwiVXNlckNvbnRleHQiLCJzaG93TG9naW4iLCJ0b2dnbGVMb2dpbiIsIkFsZXJ0U3RhdGUiLCJpbml0aWFsU3RhdGUiLCJkaXNwYXRjaCIsInVzZVJlZHVjZXIiLCJhbGVydFJlZHVjZXIiLCJ0aW1lb3V0IiwidXVpZHY0IiwiU0VUX0FMRVJUIiwicGF5bG9hZCIsInNldFRpbWVvdXQiLCJSRU1PVkVfQUxFUlQiLCJhY3Rpb24iLCJmaWx0ZXIiLCJhbGVydCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJMaW5rIiwicCIsImNsZWFuVXBMaXN0ZW5lcnMiLCJmb3JtYXRVcmxzIiwiYXNIcmVmIiwiYWRkQmFzZVBhdGgiLCJsaW5rQ2xpY2tlZCIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicmVzb2x2ZSIsInNjcm9sbCIsImluZGV4T2YiLCJyZXBsYWNlIiwic2hhbGxvdyIsInRoZW4iLCJzdWNjZXNzIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsIl9kZWZhdWx0IiwidXNlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiY3JlYXRlUm91dGVyIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsImFyZ3VtZW50cyIsImV2ZW50Iiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiRXJyb3IiLCJSb3V0ZXJDb250ZXh0IiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm1pdHQiLCJhbGwiLCJjcmVhdGUiLCJoYW5kbGVyIiwib2ZmIiwic3BsaWNlIiwiZW1pdCIsImV2dHMiLCJzbGljZSIsIm1hcCIsIl9faW1wb3J0RGVmYXVsdCIsIm1vZCIsInVybF8xIiwibWl0dF8xIiwidXRpbHNfMSIsImlzX2R5bmFtaWNfMSIsInJvdXRlX21hdGNoZXJfMSIsInJvdXRlX3JlZ2V4XzEiLCJiYXNlUGF0aCIsInBhdGgiLCJkZWxCYXNlUGF0aCIsInN1YnN0ciIsInRvUm91dGUiLCJwcmVwYXJlUm91dGUiLCJmZXRjaE5leHREYXRhIiwicXVlcnkiLCJpc1NlcnZlclJlbmRlciIsImF0dGVtcHRzIiwiZ2V0UmVzcG9uc2UiLCJmZXRjaCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiY3JlZGVudGlhbHMiLCJvayIsInN0YXR1cyIsImpzb24iLCJjb2RlIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwic2RjIiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiaXNTc3IiLCJhc1BhdGgiLCJfYnBzIiwiX2dldFN0YXRpY0RhdGEiLCJQcm9taXNlIiwiX2dldFNlcnZlckRhdGEiLCJyb3V0ZSIsImNvbXBvbmVudHMiLCJfX05fU1NHIiwiX19OX1NTUCIsImlzRHluYW1pY1JvdXRlIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0IiwidXBkYXRlIiwibmV3RGF0YSIsIm5vdGlmeSIsImJhY2siLCJoaXN0b3J5IiwiY2hhbmdlIiwibWV0aG9kIiwiX2FzIiwicmVqZWN0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsInVybElzTmV3IiwiYXNQYXRobmFtZSIsInJvdXRlUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsImdldFJvdXRlTWF0Y2hlciIsIm1pc3NpbmdQYXJhbXMiLCJrZXlzIiwiZ3JvdXBzIiwicGFyYW0iLCJnZXRSb3V0ZUluZm8iLCJyb3V0ZUluZm8iLCJjYW5jZWxsZWQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsImxvYWRFcnJvckZhaWwiLCJmZXRjaENvbXBvbmVudCIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNwbGl0IiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImhhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicHJlZmV0Y2hEYXRhIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiVEVTVF9ST1VURSIsInRlc3QiLCJyZSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJfIiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsInJlcGVhdCIsImVzY2FwZVJlZ2V4Iiwic3RyIiwibm9ybWFsaXplZFJvdXRlIiwiZXNjYXBlZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsIiQxIiwiaXNDYXRjaEFsbCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwia2V5IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsInVzZWQiLCJob3N0bmFtZSIsInBvcnQiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfYSIsInByb3RvdHlwZSIsInBhZ2VQcm9wcyIsInVybE9iamVjdEtleXMiLCJmb3JtYXQiLCJTUCIsIm1lYXN1cmUiLCJDb250YWluZXIiLCJjcmVhdGVVcmwiLCJBcHBJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJfcmVmIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJfZXJyb3JJbmZvIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIk15QXBwIiwicm9sZSIsImFsbG93ZWQiLCJDb21wb25lbnRUb1JlbmRlciIsImFwcFByb3BzIiwiY29va2llcyIsImFkbWluTG9naW4iLCJzZXRFbWFpbCIsImNvbnRleHQiLCJhd2FpdERhdGEiLCJzZXRBd2FpdERhdGEiLCJzZXRUeXBlIiwidG9rIiwiaGFuZGxlU3VibWl0IiwibG9naW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtR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QjtBQUEzQixrQkFIRCxDQTFERCxDQURELENBREQsQ0FERCxDQURELENBREQsQ0FERDtBQUFBO0FBQUEseXhVQURELENBREQsQ0FERCxDQUREO0FBMEdBLENBN0xEOztBQStMZVAseUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqTkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTVEsS0FBSyxHQUFJM2IsS0FBRCxJQUFXO0FBQ3ZCLFNBQ0UsbUVBQ0UsTUFBQywwREFBRCxPQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixNQUFFLEVBQUM7QUFBekIsS0FDRSxNQUFDLGdFQUFELE9BREYsQ0FGRixDQURGO0FBUUQsQ0FURDs7QUFXZTJiLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFsZXJ0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L2FsZXJ0L2FsZXJ0Q29udGV4dCc7XG5cbmNvbnN0IEFsZXJ0cyA9ICgpID0+IHtcblx0Y29uc3QgYWxlcnRDb250ZXh0ID0gdXNlQ29udGV4dChBbGVydENvbnRleHQpO1xuXHQvLyBjb25zb2xlLmxvZyhhbGVydENvbnRleHQuYWxlcnRzKTtcblx0cmV0dXJuIChcblx0XHRhbGVydENvbnRleHQuYWxlcnRzLmxlbmd0aCA+IDAgJiYgKFxuXHRcdFx0PGRpdlxuXHRcdFx0XHRrZXk9e2FsZXJ0Q29udGV4dC5hbGVydHNbMF0uaWR9XG5cdFx0XHRcdGNsYXNzTmFtZT17YG10LTQgYWxlcnQgYWxlcnQtJHthbGVydENvbnRleHQuYWxlcnRzWzBdLnR5cGV9YH1cblx0XHRcdD5cblx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1pbmZvLWNpcmNsZScgLz57JyAnfVxuXHRcdFx0XHQ8c3Ryb25nPkFsZXJ0YToge2FsZXJ0Q29udGV4dC5hbGVydHNbMF0ubXNnfTwvc3Ryb25nPlxuXHRcdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdFx0ZGl2IHtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA3NXB4O1xuXHRcdFx0XHRcdFx0ei1pbmRleDogOTk5OTk5O1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IGF1dG87XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XG5cdFx0XHRcdFx0XHR0b3A6IDA7XG5cdFx0XHRcdFx0XHRsZWZ0OiAwO1xuXHRcdFx0XHRcdFx0cmlnaHQ6IDA7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTU1NzI5O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cdFx0XHRcdFx0XHQvLyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDIzMCwgMTY1LCA2MCwgMSkgNDclLCByZ2JhKDIzMCwgMTY1LCA2MCwgMSkgMCUsIHJnYmEoMjI5LCA4MCwgMzksIDEpIDEwMCUpO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxmb290ZXIgY2xhc3NOYW1lPSdwYWdlLWZvb3RlciBmb250LXNtYWxsIG1kYi1jb2xvciBsaWdodGVuLTMgcHQtMSc+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG5cdFx0XHRcdFx0X19odG1sOlxuXHRcdFx0XHRcdFx0JzwhLS0gTWFkZSB3aXRoIOKZpSBieSBSb3NoYW4gTWlzaHJhIGFuZCBEZXYgQXJvcmEgR2l0aHViIDogaHR0cHM6Ly9naXRodWIuY29tL3JpbmVtIGh0dHBzOi8vZ2l0aHViLmNvbS9kcjBpZDAwNyAtLT4nLFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlciB0ZXh0LW1kLWxlZnQnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTQgY29sLWxnLTMgbXItYXV0byBteS1tZC00IG15LTAgbXQtMiBtYi0xJz5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0ey8qIDxpbWdcblx0XHRcdFx0XHRcdFx0XHRzcmM9e3JlcXVpcmUoJycpfVxuXHRcdFx0XHRcdFx0XHRcdGFsdD0nJ1xuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naW1nLWZsdWlkJ1xuXHRcdFx0XHRcdFx0XHQvPiAqL31cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRFbCBtZWpvciB0aXBvIGRlIGNhbWJpbyBwYXJhIGNhbWJpYXIgZMOzbGFyZXMgeSBzb2xlcyBvbmxpbmUgZW5cblx0XHRcdFx0XHRcdFx0TGltYSwgUGVyw7pcblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdHsvKiA8aHIgY2xhc3NOYW1lPVwiY2xlYXJmaXggdy0xMDAgZC1tZC1ub25lXCI+PC9ocj4gKi99XG5cblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdjbGVhcmZpeCB3LTEwMCBkLW1kLW5vbmUnPjwvaHI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgY29sLWxnLTMgbXgtYXV0byBteS1tZC00IG15LTEgbXQtMSBtYi0xJz5cblx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbWItMic+Q29udGFjdDwvaDU+XG5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2xpc3QtdW5zdHlsZWQnPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWhvbWUgbXItMSc+PC9pPiBOZXcgWW9yaywgTlkgMTAwMTJcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtZW52ZWxvcGUgbXItMSc+PC9pPiBpbmZvQGV4YW1wbGUuY29tXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLXBob25lIG1yLTEnPjwvaT4gKyAwMSAyMzQgNTY3IDg4XG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxociBjbGFzc05hbWU9J2NsZWFyZml4IHctMTAwIGQtbWQtbm9uZSc+PC9ocj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtMiBjb2wtbGctMiB0ZXh0LWNlbnRlciBteC1hdXRvIG15LTQnPlxuXHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXVwcGVyY2FzZSBtYi00Jz5Gb2xsb3cgVXM8L2g1PlxuXG5cdFx0XHRcdFx0XHQ8YSB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnRuLWZsb2F0aW5nIGJ0bi1mYic+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtZmFjZWJvb2snPjwvaT5cblx0XHRcdFx0XHRcdDwvYT5cblxuXHRcdFx0XHRcdFx0PGEgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J0bi1mbG9hdGluZyBidG4tdHcnPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLXR3aXR0ZXInPjwvaT5cblx0XHRcdFx0XHRcdDwvYT5cblxuXHRcdFx0XHRcdFx0PGEgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J0bi1mbG9hdGluZyBidG4tZ3BsdXMnPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLXdoYXRzYXBwJz48L2k+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0XHRcdDxhIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidG4tZmxvYXRpbmcgYnRuLWRyaWJiYmxlJz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1pbnN0YWdyYW0nPjwvaT5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdHAsXG5cdFx0XHRcdFx0XHRsaSxcblx0XHRcdFx0XHRcdGRpdiBhIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwJTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmb290ZXItY29weXJpZ2h0IHRleHQtY2VudGVyIHB5LTEgcGItMyc+XG5cdFx0XHRcdMKpIDIwMjAgQ29weXJpZ2h0OlxuXHRcdFx0XHQ8YSBocmVmPScjJz4gTW9uaS5wZTwvYT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZm9vdGVyPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgRm9vdGVyMiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInNtYWxsLXNlY3Rpb24gYmctbW9yYWRvIGZvb3RlciBwYi0yMCBwdC0yMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24tbGVmdFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTMgY29sLW1kLTMgY29sLXhzLTYgY29sLXNtLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdzaGlwLWxvZ28nIHNyYz0naW1hZ2VzL3NoaXBfbG9nby5wbmcnIGFsdD0nbG9nbycgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgMzEzMC01ODAgU2VhYm9ybmUgQXZlIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgUG9ydCBDb3F1aXRsYW0sIEIsIGMsPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICBWM0IgT00zPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICBDQU5BREE8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgIFRlbDogKzEgNzc4LTcyNy0xNDI3XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctMyBjb2wteHMtNiBjb2wtbWQtMyBjb2wtc20tM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjbGVhcmxpc3Qgd2lkZ2V0LW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgSG93IFNoaXBCeU1haWwgV29ya3NcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgU2hpcHBpbmcgJiBQcmljaW5nXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEZBUVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTdXBwb3J0XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFjdHVhbCB2cywgVm9sdW1ldHJpYyBXZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctMyBjb2wteHMtNiBjb2wtbWQtMyBjb2wtc20tM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjbGVhcmxpc3Qgd2lkZ2V0LW1lbnVcIj5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBYm91dCBTaGlwQnlNYWlsXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEJlY29tZSBhIFBhcnRuZXJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgU2l0ZU1hcFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gICAgICAgICBcblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTMgY29sLXhzLTEyIGNvbC1tZC0zIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1zb2NpYWwtbGlua3NcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzb2NpYWwtdGl0bGVcIj4yMDE5IENvdW50cnkgR3Jvd3RoIExlYWRlcjwvcD5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9pbnRlcm5hdGlvbmFsX3NoaXAucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzb2NpYWwtc3VidGl0bGVcIj5pbnRlcm5hdGlvbmFsIFNoaXBwaW5nPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNvY2xhbC1yZXZpZXdcIj5SZWFkIG91ciByZXZpZXdzIG9uOjwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGcvc2hpcGJ5bWFpbC9yZXZpZXdzXCI7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFjZWJvb2stbGlua1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ZhY2Vib29rX3NoYXJlMS5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy50cnVzdHBpbG90LmNvbS9yZXZpZXcvd3d3LnNoaXBieW1haWwuY29tXCI7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdHJ1c3RwaWxvdC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxnaW4tbGVmdCBmb290ZXItcGF5cGFsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wtc20tNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy50cnVzdHBpbG90LmNvbS9yZXZpZXcvd3d3LnNoaXBieW1haWwuY29tXCI7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL0NhbmFkYS1wb3N0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy50cnVzdHBpbG90LmNvbS9yZXZpZXcvd3d3LnNoaXBieW1haWwuY29tXCI7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2RobF9sb2dvLmdpZlwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy50cnVzdHBpbG90LmNvbS9yZXZpZXcvd3d3LnNoaXBieW1haWwuY29tXCI7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ZlZGV4X2xvZ28uZ2lmXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvVE5ULWxvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvdXNwc19sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy50cnVzdHBpbG90LmNvbS9yZXZpZXcvd3d3LnNoaXBieW1haWwuY29tXCI7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicGF5cGFsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9QYXlwYWwtVmlzYS1kZWJpdC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3d3dy5zaGlwYnltYWlsLmNvbVwiO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9VUFNfbG9nby5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IGNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgICAgICAgIDxoND5CTE9HPC9oND5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIj5cblxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+MS4gT25saW5lIFNob3BwaW5nIGZyb20gY2FuYWRhIHNhdmVzIHlvdSBtb25leSwgUmVhbGx5PzwvcD5cbiAgICAgICAgICAgIDxwPjIuIFNoaXAgVG8gUGFuYW1hPC9wPlxuICAgICAgICAgICAgPHA+My4gU2hpcCBUbyBBdXN0cmFsaWE8L3A+XG4gICAgICAgICAgICA8cD40LiBTaGlwIFRvIEFyZ2VudGluYTwvcD5cbiAgICAgICAgICAgIDxwPjUuIFdoYXQgQ0FOJ1QgeW91IHNoaXAgdGhyb3VnaCB5b3VyIENhbmFkaWFuIFBhcmNlbCBGb3J3YXJkZXJzIEFkZHJlc3M/PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLXNtLTYgcGx1c1wiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvcGx1c2ltZzExMTExMTEuanBnXCIgLz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBGb3IgZXZlcnkgaW50ZXJuYXRpb25hbCBzaGlwbWVudC48YnI+PC9icj5cbiAgICAgICAgICAgICAgU2hpcEJ5TWFpbCB3aWxsIGRvbmF0ZSAkMSB0byB0aGUgQ2FuYWRpYW4gPGJyPjwvYnI+XG4gICAgICAgICAgICAgIFJlZCBDcm9zcyB0byBoZWxwIHdoZXJlIGl0IGlzIG5lZWRlZDxicj48L2JyPlxuICAgICAgICAgICAgICBtb3N0LlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdGV4dFwiPlxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwid2hpdGVcIj5cbiAgICAgICAgICAyMDE3LTIwMjAgU2hpcEJ5TWFpbC5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZCB8IFhNTCBTaXRlbWFwXG4gICAgICAgIDwvaDY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9jYWwtc2Nyb2xsXCI+XG4gICAgICAgIDxhIGhyZWY9XCIjdG9wXCIgY2xhc3NOYW1lPVwibGluay10by10b3BcIj5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jaGV2cm9uLWNpcmNsZS11cFwiPjwvaT5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5zb2NpYWwtdGl0bGV7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2lhbC1zdWJ0aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItc29jaWFsLWxpbmtzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZhY2Vib29rLWxpbmsge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAuc29jbGFsLXJldmlldyB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOmJsYWNrO1xuICAgICAgICAgIG1hcmdpbi10b3A6MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MnB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItdGV4dCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlNDg3YztcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXRleHQgaDZ7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItcGF5cGFsIGltZ3tcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1wYXlwYWwgLnJvdyB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXBheXBhbCAucGF5cGFsIGltZ3tcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItcGF5cGFsIGg0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1wYXlwYWwgcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tIDogNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItcGF5cGFsIC5wbHVzIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci10ZXh0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9vdGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyMjtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgQWxlcnRzIGZyb20gXCIuL0FsZXJ0c1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIjtcbmNvbnN0IFdPVyA9ICFpc1NlcnZlciA/IHJlcXVpcmUoXCJ3b3dqc1wiKSA6IG51bGw7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5ldyBXT1cuV09XKCkuaW5pdCgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Nb25pPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJcIiAvPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCJpbWFnZXMvZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCJpbWFnZXMvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgIHNpemVzPVwiNzJ4NzJcIlxuICAgICAgICBocmVmPVwiaW1hZ2VzL2FwcGxlLXRvdWNoLWljb24tNzJ4NzIucG5nXCJcbiAgICAgIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgc2l6ZXM9XCIxMTR4MTE0XCJcbiAgICAgICAgaHJlZj1cImltYWdlcy9hcHBsZS10b3VjaC1pY29uLTExNHgxMTQucG5nXCJcbiAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9zdHlsZS5jc3NcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3Mvc3R5bGUtcmVzcG9uc2l2ZS5jc3NcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvYW5pbWF0ZS5taW4uY3NzXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL3ZlcnRpY2FsLXJoeXRobS5taW4uY3NzXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL21hZ25pZmljLXBvcHVwLmNzc1wiIC8+XG4gICAgICA8QWxlcnRzIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcGVhci1hbmltYXRlXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuXG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnktMS4xMS4yLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvanF1ZXJ5LmVhc2luZy4xLjMuanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2Jvb3RzdHJhcC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL1Ntb290aFNjcm9sbC5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvanF1ZXJ5LnNjcm9sbFRvLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdFxuICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgc3JjPVwianMvanF1ZXJ5LmxvY2FsU2Nyb2xsLm1pbi5qc1wiXG4gICAgICA+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkudmlld3BvcnQubWluaS5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvanF1ZXJ5LmNvdW50VG8uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5hcHBlYXIuanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5zdGlja3kuanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5wYXJhbGxheC0xLjEuMy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvanF1ZXJ5LmZpdHZpZHMuanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL293bC5jYXJvdXNlbC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2lzb3RvcGUucGtnZC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2ltYWdlc2xvYWRlZC5wa2dkLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdFxuICAgICAgICB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJcbiAgICAgICAgc3JjPVwianMvanF1ZXJ5Lm1hZ25pZmljLXBvcHVwLm1pbi5qc1wiXG4gICAgICA+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy93b3cubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9tYXNvbnJ5LnBrZ2QubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9hbGwuanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL21haW4uanNcIj48L3NjcmlwdD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9jb3JlXCI7XG5pbXBvcnQgQmFyTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9QdWxzZUxvYWRlclwiO1xuXG4vLyBDYW4gYmUgYSBzdHJpbmcgYXMgd2VsbC4gTmVlZCB0byBlbnN1cmUgZWFjaCBrZXktdmFsdWUgcGFpciBlbmRzIHdpdGggO1xuY29uc3Qgb3ZlcnJpZGUgPSBjc3NgXG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG5gO1xuXG5jbGFzcyBBd2Vzb21lQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2VldC1sb2FkaW5nXCI+XG4gICAgICAgIDxCYXJMb2FkZXJcbiAgICAgICAgICBjc3M9e292ZXJyaWRlfVxuICAgICAgICAgIHNpemU9ezEwfVxuICAgICAgICAgIGNvbG9yPXtcIiM3N2NmZWJcIn1cbiAgICAgICAgICBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IEFsZXJ0Q29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L2FsZXJ0L2FsZXJ0Q29udGV4dCc7XG5pbXBvcnQgTmF2YmFyMiBmcm9tICcuLi9OYXZiYXIyJztcbmltcG9ydCBUb3BiYXIgZnJvbSAnLi4vdG9wYmFyJztcbmltcG9ydCBGb290ZXIyIGZyb20gJy4uL0Zvb3RlcjInO1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL0xvYWRlcic7XG5cbmV4cG9ydCBjb25zdCBMb2dpbiA9ICh7cm91dGVyfSkgPT4ge1xuXHRjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IGFsZXJ0Q29udGV4dCA9IHVzZUNvbnRleHQoQWxlcnRDb250ZXh0KTtcblx0Y29uc3QgeyBzZXRBbGVydCwgYWxlcnRzIH0gPSBhbGVydENvbnRleHQ7XG5cdGNvbnN0IFtzaG93UGFzc3dvcmQsIHNldFNob3dQYXNzd29yZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgX29uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5wZXJzaXN0KCk7XG5cdFx0Y29uc3QgYm9keSA9IHsgZW1haWw6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfTtcblx0XHRpZiAoYm9keS5lbWFpbCA9PT0gJycgfHwgYm9keS5wYXNzd29yZCA9PT0gJycpIHtcblx0XHRcdHNldEFsZXJ0KCdMb2dpbiBlcnJvcicpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCByZXMgPSBhd2FpdCBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvdXNlcnMvbG9naW4nLCB7ZGF0YTogYm9keX0pO1xuXHRcdFx0aWYocmVzLmRhdGEgIT0gXCJpbnZhbGlkIHVzZXJcIikge1xuXHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNoaXAtdG9rZW5cIiwgcmVzLmRhdGEudG9rZW4pO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNoaXAtdXNlcm5hbWVcIiwgcmVzLmRhdGEubmFtZSk7XG5cdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2hpcC11c2VySWRcIiwgcmVzLmRhdGEuaWQpO1xuXHRcdFx0XHRpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL2luZGV4Jykge1xuXHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRSb3V0ZXIucHVzaCgnLycpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZXRBbGVydChcIkludmFsaWQgVXNlclwiKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdG9nZ2xlUGFzc3dvcmQgPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCk7XG5cdH07XG5cblx0Y29uc3QgX2hhbmRsZVVzZXJOYW1lQ2hhbmdlID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5wZXJzaXN0KCk7XG5cdFx0c2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpO1xuXHR9XG5cblx0Y29uc3QgX2hhbmRsZVBhc3N3b3JkQ2hhbmdlID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZS5wZXJzaXN0KCk7XG5cdFx0c2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPSdwYWdlLXNlY3Rpb24gcHQtMjAgcGItMCBhcHBlYXItYW5pbWF0ZScgaWQ9J3BhZ2UnPlxuXHRcdFx0XHQ8TmF2YmFyMiAvPlxuXHRcdFx0XHQ8VG9wYmFyIC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRlbnQgY29udGFpbmVyJz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naG9tZS10ZXh0Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgYWxpZ24tY2VudGVyJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1zbS03IGNvbC1zbS1wdXNoLTMnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPSdmb3JtIHdoaXRlJyBvblN1Ym1pdD17KGUpID0+IF9vblN1Ym1pdChlKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMT5TaWduIGluIHRvIGVuam95IFNob3BwaW5nIGZyb20gQ2FuYWRhPC9oMT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0nZW1haWwnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ndXN1YXJpbydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0ndXN1YXJpbydcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXNtIGJvbGQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBhdHRlcm49Jy57MywxMDB9J1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt1c2VybmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IF9oYW5kbGVVc2VyTmFtZUNoYW5nZShlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS11c2VyIGZhLTJ4IGNhbXBvZm9ybSc+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0ncGFzc3dvcmQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbnB1dC1zbSBib2xkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScuezMsMTAwfSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPXtzaG93UGFzc3dvcmQgPyAndGV4dCcgOiAncGFzc3dvcmQnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IF9oYW5kbGVQYXNzd29yZENoYW5nZShlKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmEgZmEtZXllIGZhLTJ4IGNhbXBvZm9ybSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gdG9nZ2xlUGFzc3dvcmQoZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTSUdOIElOXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nL2ZvcmdldHBhc3N3b3JkJz48cCBzdHlsZT17e21hcmdpbkJvdHRvbTogJzNweCcsIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCJ9fT5Gb3JnZXQgcGFzc3dvcmQ/PC9wPjwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICczcHgnLCBjb2xvcjogXCJibGFja1wifX0+IERvbid0IGhhdmUgYW4gYWNjb3VudD8gJm5ic3A7Jm5ic3A7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nL3JlZ2lzdGVyJz4gXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTaWduIFVwIE5vd1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdC5idG4taWNvbiB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0LmhvbWUtY29udGVudCB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA4MHB4IDBweCA2MHB4IDBweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHVybChcImltYWdlcy9wYXktYmcuanBnXCIpO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9ybSB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDE1cHg7XG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvcm0gaDEge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0XHRcdFx0Y29sb3I6ICMxZTQ4N2M7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3JtIGlucHV0IHtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNmN2YxZjEgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvcm0gYnV0dG9uIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDhweCAyNXB4O1xuXHRcdFx0XHRcdFx0Ym9yZGVyOm5vbmU7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ODdjO1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMzBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9ybSBhIHtcblx0XHRcdFx0XHRcdGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHQ8Rm9vdGVyMiAvPlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihMb2dpbik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUm91dGVyLCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuY29uc3QgTmF2YmFyID0gKHsgcm91dGVyIH0pID0+IHtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHR9LCBbXSk7XG5cblx0Y29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHJlcyA9IENvb2tpZXMucmVtb3ZlKCd0b2tlbicpO1xuXHRcdGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyB8fCByb3V0ZXIucGF0aG5hbWUgPT09ICcvaW5kZXgnKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFJvdXRlci5wdXNoKCcvJyk7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9J21haW4tbmF2IHN0aWNrLWZpeGVkJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcmVsYXRpdmUgY2xlYXJmaXgnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmF2LWxvZ28td3JhcCBsb2NhbC1zY3JvbGwnPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbG9nbydcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J3NoaXAtbG9nbycgc3JjPSdpbWFnZXMvc2hpcF9sb2dvLnBuZycgYWx0PSdsb2dvJyAvPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nYmJiLWxvZ28nIHNyYz0naW1hZ2VzL2JiYl9sb2dvLnBuZycgYWx0PSdsb2dvJyAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2JpbGUtbmF2Jz5cblx0XHRcdFx0XHQ8YSBocmVmPScjJyBjbGFzc05hbWU9J2ZtLWJ1dHRvbic+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+TWVudVxuXHRcdFx0XHRcdDwvYT5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS13cmFwcGVyJyBpZD0nZnVsbHNjcmVlbi1tZW51Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS13cmFwcGVyLXN1Yic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS13cmFwcGVyLXN1Yi1zdWInPlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2ZtLW1lbnUtbGlua3Mgc2Nyb2xsLW5hdiBsb2NhbC1zY3JvbGwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgZGFzaGJvYXJkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2Rhc2hib2FyZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2Rhc2hib2FyZCc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdERBU0hCT0FSRFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IGhvd2l0d29ya3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvaG93aXR3b3Jrcyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2hvd2l0d29ya3MnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRIT1cgSVQgV09SS1Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBwcmljaW5nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3ByaWNpbmcnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcmljaW5nJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0UFJJQ0lOR1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IHN1cHBvcnQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvc3VwcG9ydCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3N1cHBvcnQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTVVBQT1JUXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvVXNlckluZm8nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPntsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNoaXAtdXNlck5hbWVcIil9PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVnaXN0ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPkxvZ291dDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZtLXNvY2lhbC1saW5rcyc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJyB0aXRsZT0nRmFjZWJvb2snIHRhcmdldD0nX2JsYW5rJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1mYWNlYm9vayc+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgdGl0bGU9J1R3aXR0ZXInIHRhcmdldD0nX2JsYW5rJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS10d2l0dGVyJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJyB0aXRsZT0nTGlua2VkaW4nIHRhcmdldD0nX2JsYW5rJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1saW5rZWRpbic+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgdGl0bGU9J0luc3RhZ3JhbSsnIHRhcmdldD0nX2JsYW5rJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1pbnN0YWdyYW0nPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdpbm5lci1uYXYgZGVza3RvcC1uYXYnPlxuXHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2NsZWFybGlzdCBzY3JvbGwtbmF2IGxvY2FsLXNjcm9sbCc+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWxpc3QgZGFzaGJvYXJkXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2Rhc2hib2FyZCc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdERBU0hCT0FSRFxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBob3dpdHdvcmtzXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2hvd2l0d29ya3MnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRIT1cgSVQgV09SS1Ncblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWxpc3QgcHJpY2luZ1wiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcmljaW5nJztcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0UFJJQ0lOR1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBzdXBwb3J0XCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3N1cHBvcnQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRTVVBQT1JUXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdFx0XHR7aXNsb2dpbiA/IChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvbG9naW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0gY2xhc3NOYW1lPSdidG4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdidG4gYnRuLW1vZCBidG4tYm9yZGVyLXcgYnRuLWNpcmNsZSBib2xkIGJ0bi1zZXNpb24nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDZXJyYXIgU2VzacOzblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcm9maWxlJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdidG4gYnRuLW1vZCBidG4tY29sb3IgYnRuLWJvcmRlci13IGJ0bi1tZWRpdW0gYnRuLWNpcmNsZSBib2xkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtuYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvbG9naW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tbW9kIGJ0bi1ib3JkZXItdyBidG4tY2lyY2xlIHNpZ24taW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBJTlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3JlZ2lzdGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdidG4gYnRuLW1vZCBidG4tYm9yZGVyLXcgYnRuLWNpcmNsZSBzaWduLXVwJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNJR04gVVBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0LmJ0biB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm5hdi1saXN0LmFjdGl2ZSBhe1xuXHRcdFx0XHRcdFx0Y29sb3I6IHJlZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXZiYXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IEZhVW5kZXJsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuY29uc3QgZ2V0RGF0YSA9IGFzeW5jIHRva2VuID0+IHtcblx0Y29uc3QgaGVhZGVyID0ge1xuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCd4LWF1dGgtdG9rZW4nOiB0b2tlbixcblx0XHR9LFxuXHR9O1xuXHRjb25zdCBkYXRhID0gYXdhaXQgQXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2F1dGgnLCBoZWFkZXIpO1xuXG5cdHJldHVybiBkYXRhLmRhdGE7XG59O1xuXG5jb25zdCBOYXZiYXIyID0gKHsgcm91dGVyIH0pID0+IHtcblx0Y29uc3QgW2lzbG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBjb28gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2hpcC10b2tlbicpO1xuXHRcdGlmIChjb28gIT0gbnVsbCAmJiBjb28gIT0gJycgJiYgY29vICE9IHVuZGVmaW5lZCAmJiBjb28gIT0gJ3VuZGVmaW5lZCcgJiYgY29vICE9ICdudWxsJykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJpc2xvZ2luXCIpO1xuXHRcdFx0XHRzZXRJc0xvZ2luKHRydWUpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0c2V0SXNMb2dpbihmYWxzZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LCBbXSk7XG5cblx0cmV0dXJuIChcblx0XHQ8bmF2IGNsYXNzTmFtZT0nbWFpbi1uYXYgc3RpY2stZml4ZWQnPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciByZWxhdGl2ZSBjbGVhcmZpeCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSduYXYtbG9nby13cmFwIGxvY2FsLXNjcm9sbCc+XG5cdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdsb2dvJ1xuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nc2hpcC1sb2dvJyBzcmM9J2ltYWdlcy9zaGlwX2xvZ28ucG5nJyBhbHQ9J2xvZ28nIC8+XG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdiYmItbG9nbycgc3JjPSdpbWFnZXMvYmJiX2xvZ28ucG5nJyBhbHQ9J2xvZ28nIC8+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J21vYmlsZS1uYXYnPlxuXHRcdFx0XHRcdDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nZm0tYnV0dG9uJz5cblx0XHRcdFx0XHRcdDxzcGFuPjwvc3Bhbj5NZW51XG5cdFx0XHRcdFx0PC9hPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZtLXdyYXBwZXInIGlkPSdmdWxsc2NyZWVuLW1lbnUnPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZtLXdyYXBwZXItc3ViJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZtLXdyYXBwZXItc3ViLXN1Yic+XG5cdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nZm0tbWVudS1saW5rcyBzY3JvbGwtbmF2IGxvY2FsLXNjcm9sbCc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBob21lJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc2xvZ2luID8gJycgXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEhPTUVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBkYXNoYm9hcmQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvZGFzaGJvYXJkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihpc2xvZ2luKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZGFzaGJvYXJkJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdERBU0hCT0FSRFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IGhvd2l0d29ya3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvaG93aXR3b3Jrcyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2hvd2l0d29ya3MnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRIT1cgSVQgV09SS1Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBwcmljaW5nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3ByaWNpbmcnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcmljaW5nJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0UFJJQ0lOR1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IHN1cHBvcnQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvc3VwcG9ydCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3N1cHBvcnQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTVVBQT1JUXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2lzbG9naW4gPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NoaXAtdXNlcm5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2hpcC11c2VybmFtZScsICcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaGlwLXRva2VuJywgJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gJy9pbmRleCcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Um91dGVyLnB1c2goJy8nKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdExvZyBvdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9sb2dpbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBJTlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZWdpc3Rlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBVUFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS1zb2NpYWwtbGlua3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgdGl0bGU9J0ZhY2Vib29rJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtZmFjZWJvb2snPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdUd2l0dGVyJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtdHdpdHRlcic+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgdGl0bGU9J0xpbmtlZGluJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlua2VkaW4nPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdJbnN0YWdyYW0rJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtaW5zdGFncmFtJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5uZXItbmF2IGRlc2t0b3AtbmF2Jz5cblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdjbGVhcmxpc3Qgc2Nyb2xsLW5hdiBsb2NhbC1zY3JvbGwnPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgaG9tZSc+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0aXNsb2dpbiA/ICcnIFxuXHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRIT01FXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IGRhc2hib2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmKGlzbG9naW4pe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kYXNoYm9hcmQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9sb2dpbic7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0REFTSEJPQVJEXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IGhvd2l0d29ya3NcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvaG93aXR3b3Jrcyc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdEhPVyBJVCBXT1JLU1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBwcmljaW5nXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3ByaWNpbmcnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRQUklDSU5HXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IHN1cHBvcnRcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvc3VwcG9ydCc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFNVUFBPUlRcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cblx0XHRcdFx0XHRcdHtpc2xvZ2luID8gKFxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIHN0eWxlPXt7Zm9udFNpemU6IFwiMjBweFwiLCBmb250V2VpZ2h0OiBcImJvbGRcIn19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NoaXAtdXNlcm5hbWUnKX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NoaXAtdXNlcm5hbWUnLCAnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaGlwLXRva2VuJywgJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL2luZGV4Jykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWJvcmRlci13IGJ0bi1jaXJjbGUgc2lnbi1pbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0TE9HIE9VVFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9sb2dpbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWJvcmRlci13IGJ0bi1jaXJjbGUgc2lnbi1pbic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTSUdOIElOXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVnaXN0ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tbW9kIGJ0bi1ib3JkZXItdyBidG4tY2lyY2xlIHNpZ24tdXAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBVUFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0e2Bcblx0XHRcdFx0XHQuYnRuIHtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubmF2LWxpc3QuYWN0aXZlIGF7XG5cdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH1cblx0XHRcdDwvc3R5bGU+XG5cdFx0PC9uYXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKE5hdmJhcjIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTdWJzY3JpYmUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0b3BiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BiYXItcmVkXCI+XG4gICAgICAgICAgRk9MTE9XIFVTIE9OIElOU1RBUkFNIEBTSElQQllNQUlMIEZPUiBUSEUgTEFURVNUIFBST01PUy4gU0FMRVMgQU5EIERFQUxTIEZST00gQ0FOQURBXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnRvcGJhciB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAudG9wYmFyLXJlZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4MDIwMjtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJzY3JpYmU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBBZG1pbkNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IHByb3BzID0+IHtcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG5cdFx0dG9rZW46ICcnLFxuXHRcdGlzQXV0aGVudGljYXRlZDogZmFsc2UsXG5cdH0pO1xuXG5cdGNvbnN0IGFkZFRva2VuID0gdG9rZW4gPT4ge1xuXHRcdC8vIGNvbnNvbGUubG9nKFwiYWRtaW4gbG9naW4gY2FsbGVkLi5cIik7XG5cdFx0Y29uc3QgbmV3U3RhdGUgPSBzdGF0ZTtcblx0XHRuZXdTdGF0ZS50b2tlbiA9IHRva2VuO1xuXHRcdHNldFN0YXRlKG5ld1N0YXRlKTtcblx0fTtcblxuXHRjb25zdCBjaGFuZ2VBdXRoZW50aWNhdGVkID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5ld1N0YXRlID0gc3RhdGU7XG5cdFx0bmV3U3RhdGUuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcblx0XHRzZXRTdGF0ZShuZXdTdGF0ZSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8QWRtaW5Db250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBhZGRUb2tlbiwgY2hhbmdlQXV0aGVudGljYXRlZCB9fT5cblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8L0FkbWluQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn07XG5leHBvcnQgY29uc3QgQ29uc3VtZXIgPSBBZG1pbkNvbnRleHQuQ29uc3VtZXI7XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IEFnZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IFByb3ZpZGVyID0gcHJvcHMgPT4ge1xuXHRjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcblx0XHR0b2tlbjogJycsXG5cdFx0dXNlck5hbWU6ICcnLFxuXHRcdGlzTG9naW46IGZhbHNlLFxuXHRcdGlkOiAnJyxcblx0fSk7XG5cblx0Y29uc3QgYWRkVG9rZW4gPSB0b2tlbiA9PiB7XG5cdFx0Y29uc3QgbmV3U3RhdGUgPSBzdGF0ZTtcblx0XHRuZXdTdGF0ZS50b2tlbiA9IHRva2VuO1xuXHRcdHNldFN0YXRlKG5ld1N0YXRlKTtcblx0fTtcblxuXHRjb25zdCBhZGROYW1lID0gdXNlck5hbWUgPT4ge1xuXHRcdGNvbnN0IG5ld1N0YXRlID0gc3RhdGU7XG5cdFx0bmV3U3RhdGUudXNlck5hbWUgPSB1c2VyTmFtZTtcblx0XHRuZXdTdGF0ZS5pc0xvZ2luID0gdHJ1ZTtcblx0XHRzZXRTdGF0ZShuZXdTdGF0ZSk7XG5cdFx0Ly8gY29uc29sZS5sb2coc3RhdGUpO1xuXHR9O1xuXG5cdGNvbnN0IGlzVXNlckF1dGggPSBhc3luYyB0b2tlbiA9PiB7XG5cdFx0Y29uc3QgaGVhZGVyID0ge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQneC1hdXRoLXRva2VuJzogdG9rZW4sXG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHRjb25zdCByZXMgPSBBeGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm1vbmkucGUvYXBpL2F1dGgnLCBoZWFkZXIpO1xuXHRcdC8vIGNvbnNvbGUubG9nKCdyZXM6LScsIHJlcyk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHQ8QWdlbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBhZGRUb2tlbiwgaXNVc2VyQXV0aCwgYWRkTmFtZSB9fT5cblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8L0FnZW50Q29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn07XG5leHBvcnQgY29uc3QgQ29uc3VtZXIgPSBBZ2VudENvbnRleHQuQ29uc3VtZXI7XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW50Q29udGV4dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBVc2VyQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBzaG93TG9naW46IGZhbHNlLFxufSk7XG5cbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHsgc2hvd0xvZ2luOiBmYWxzZSB9KTtcblxuICBjb25zdCB0b2dnbGVMb2dpbiA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNob3dMb2dpbiB9ID0gc3RhdGU7XG4gICAgc2V0U3RhdGUoeyBzaG93TG9naW46ICFzaG93TG9naW4gfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgc3RhdGUsIHRvZ2dsZUxvZ2luIH19PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IENvbnN1bWVyID0gVXNlckNvbnRleHQuQ29uc3VtZXI7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJDb250ZXh0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IHByb3BzID0+IHtcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG5cdFx0dG9rZW46ICcnLFxuXHRcdHVzZXJOYW1lOiAnJyxcblx0XHRpc0xvZ2luOiBmYWxzZSxcblx0XHRpZDogJycsXG5cdH0pO1xuXG5cdGNvbnN0IGFkZFRva2VuID0gdG9rZW4gPT4ge1xuXHRcdGNvbnN0IG5ld1N0YXRlID0gc3RhdGU7XG5cdFx0bmV3U3RhdGUudG9rZW4gPSB0b2tlbjtcblx0XHRzZXRTdGF0ZShuZXdTdGF0ZSk7XG5cdH07XG5cblx0Y29uc3QgYWRkTmFtZSA9IHVzZXJOYW1lID0+IHtcblx0XHRjb25zdCBuZXdTdGF0ZSA9IHN0YXRlO1xuXHRcdG5ld1N0YXRlLnVzZXJOYW1lID0gdXNlck5hbWU7XG5cdFx0bmV3U3RhdGUuaXNMb2dpbiA9IHRydWU7XG5cdFx0c2V0U3RhdGUobmV3U3RhdGUpO1xuXHR9O1xuXG5cdGNvbnN0IGlzVXNlckF1dGggPSBhc3luYyB0b2tlbiA9PiB7XG5cdFx0Y29uc3QgaGVhZGVyID0ge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQneC1hdXRoLXRva2VuJzogdG9rZW4sXG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHRjb25zdCByZXMgPSBBeGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm1vbmkucGUvYXBpL2F1dGgnLCBoZWFkZXIpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBhZGRUb2tlbiwgaXNVc2VyQXV0aCwgYWRkTmFtZSB9fT5cblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTtcbmV4cG9ydCBjb25zdCBDb25zdW1lciA9IFVzZXJDb250ZXh0LkNvbnN1bWVyO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IEFsZXJ0Q29udGV4dCBmcm9tIFwiLi9hbGVydENvbnRleHRcIjtcbmltcG9ydCBhbGVydFJlZHVjZXIgZnJvbSBcIi4vYWxlcnRSZWR1Y2VyXCI7XG5pbXBvcnQgeyBTRVRfQUxFUlQsIFJFTU9WRV9BTEVSVCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBBbGVydFN0YXRlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxTdGF0ZSA9IFtdO1xuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihhbGVydFJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgLy8gU2V0IEFsZXJ0XG4gIGNvbnN0IHNldEFsZXJ0ID0gKG1zZywgdHlwZSwgdGltZW91dCA9IDUwMDApID0+IHtcbiAgICBjb25zdCBpZCA9IHV1aWR2NCgpO1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFNFVF9BTEVSVCxcbiAgICAgIHBheWxvYWQ6IHsgbXNnLCB0eXBlLCBpZCB9LFxuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiBkaXNwYXRjaCh7IHR5cGU6IFJFTU9WRV9BTEVSVCwgcGF5bG9hZDogaWQgfSksIHRpbWVvdXQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEFsZXJ0Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgYWxlcnRzOiBzdGF0ZSxcbiAgICAgICAgc2V0QWxlcnQsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0FsZXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0U3RhdGU7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhbGVydENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cblxuZXhwb3J0IGRlZmF1bHQgYWxlcnRDb250ZXh0O1xuIiwiaW1wb3J0IHsgU0VUX0FMRVJULCBSRU1PVkVfQUxFUlQgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9BTEVSVDpcbiAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXTtcbiAgICBjYXNlIFJFTU9WRV9BTEVSVDpcbiAgICAgIHJldHVybiBzdGF0ZS5maWx0ZXIoYWxlcnQgPT4gYWxlcnQuaWQgIT09IGFjdGlvbi5wYXlsb2FkKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IFNFVF9BTEVSVCA9ICdTRVRfQUxFUlQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9BTEVSVCA9ICdSRU1PVkVfQUxFUlQnO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9wYWdlcy9fYXBwJylcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzXCIpO2V4cG9ydHMuQXBwSW5pdGlhbFByb3BzPV91dGlscy5BcHBJbml0aWFsUHJvcHM7LyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL2FzeW5jIGZ1bmN0aW9uIGFwcEdldEluaXRpYWxQcm9wcyhfcmVmKXt2YXJ7Q29tcG9uZW50LGN0eH09X3JlZjt2YXIgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Ly8gS2VwdCBoZXJlIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbi8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4vLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG5jb21wb25lbnREaWRDYXRjaChlcnJvcixfZXJyb3JJbmZvKXt0aHJvdyBlcnJvcjt9cmVuZGVyKCl7dmFye3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzLF9fTl9TU0csX19OX1NTUH09dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7fSxwYWdlUHJvcHMsLy8gd2UgZG9uJ3QgYWRkIHRoZSBsZWdhY3kgVVJMIHByb3AgaWYgaXQncyB1c2luZyBub24tbGVnYWN5XG4vLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuIShfX05fU1NHfHxfX05fU1NQKT97dXJsOmNyZWF0ZVVybChyb3V0ZXIpfTp7fSkpO319ZXhwb3J0cy5kZWZhdWx0PUFwcDtBcHAub3JpZ0dldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7QXBwLmdldEluaXRpYWxQcm9wcz1hcHBHZXRJbml0aWFsUHJvcHM7dmFyIHdhcm5Db250YWluZXI7dmFyIHdhcm5Vcmw7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3dhcm5Db250YWluZXI9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUud2FybihcIldhcm5pbmc6IHRoZSBgQ29udGFpbmVyYCBpbiBgX2FwcGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRcIik7fSk7d2FyblVybD0oMCxfdXRpbHMuZXhlY09uY2UpKCgpPT57Y29uc29sZS5lcnJvcihcIldhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvdXJsLWRlcHJlY2F0ZWRcIik7fSk7fS8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5mdW5jdGlvbiBDb250YWluZXIocCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FybkNvbnRhaW5lcigpO3JldHVybiBwLmNoaWxkcmVuO31mdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyKXsvLyBUaGlzIGlzIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCByZWZlcmVuY2VzIHRoZSByb3V0ZXIgb2JqZWN0IGF0IGNhbGwgdGltZVxudmFye3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciBwdXNoUm91dGU9YXM/aHJlZjonJzt2YXIgcHVzaFVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLHB1c2hVcmwpO30scmVwbGFjZToodXJsLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcm91dGVyLnJlcGxhY2UodXJsLGFzKTt9LHJlcGxhY2VUbzooaHJlZixhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7dmFyIHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO3ZhciByZXBsYWNlVXJsPWFzfHxocmVmO3JldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUscmVwbGFjZVVybCk7fX07fSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBMb2dpblByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvTG9naW5Db250ZXh0XCI7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L1VzZXJDb250ZXh0XCI7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBBZG1pblByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvQWRtaW5Db250ZXh0XCI7XG5pbXBvcnQgeyBQcm92aWRlciBhcyBBZ2VudFByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHQvQWdlbnRDb250ZXh0XCI7XG5pbXBvcnQgQWxlcnRTdGF0ZSBmcm9tIFwiLi4vY29udGV4dC9hbGVydC9BbGVydFN0YXRlXCI7XG5pbXBvcnQgY29va2llcyBmcm9tIFwibmV4dC1jb29raWVzXCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4vbG9naW4uanNcIjtcbmltcG9ydCBBZG1pbkxvZ2luIGZyb20gXCIuL2FkbWluX2xvZ2luLmpzXCI7XG5pbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvZm9udC1hd2Vzb21lL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiO1xuaW1wb3J0IFwicmVhY3Qtbm90aWZpY2F0aW9ucy9saWIvbm90aWZpY2F0aW9ucy5jc3NcIjtcbi8vIGltcG9ydCBcIi4uL1N0eWxlL0J1dHRvbi5jc3NcIjtcbi8vIGltcG9ydCBcIi4uL1N0eWxlL0NhcmQuY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9TdHlsZS9OYXZiYXIuY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9TdHlsZS9Ib21lLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi4vU3R5bGUvRm9vdGVyLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi4vU3R5bGUvRmVhdHVyZXMuY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9TdHlsZS9Db252ZXJ0b3IuY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9TdHlsZS9Db250YWN0LmNzc1wiO1xuLy8gaW1wb3J0IFwiLi4vU3R5bGUvRmFxLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi4vU3R5bGUvQmFubmVyLmNzc1wiO1xuLy8gaW1wb3J0IFwiLi4vU3R5bGUvTG9naW4uY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9TdHlsZS9UcmFuc2Zlci5jc3NcIjtcbi8vIGltcG9ydCBcIi4uL1N0eWxlL0Zvcm0uY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9TdHlsZS9PcGVyYXRpb24uY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9TdHlsZS9BZG1pblNpZGVuYXYuY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9TdHlsZS9CdXR0b24uY3NzXCI7XG4vLyBpbXBvcnQgXCIuLi9TdHlsZS9Qb3B1cC5jc3NcIjtcbi8vIGltcG9ydCBcIi4uL1N0eWxlL0FsZXJ0LmNzc1wiO1xuXG5pbXBvcnQgXCIuLi9TdHlsZS9jc3Mvc3R5bGUuY3NzXCI7XG5pbXBvcnQgXCIuLi9TdHlsZS9jc3Mvc3R5bGUtcmVzcG9uc2l2ZS5jc3NcIjtcbmltcG9ydCBcIi4uL1N0eWxlL2Nzcy9hbmltYXRlLm1pbi5jc3NcIjtcbmltcG9ydCBcIi4uL1N0eWxlL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiO1xuaW1wb3J0IFwiLi4vU3R5bGUvY3NzL3ZlcnRpY2FsLXJoeXRobS5taW4uY3NzXCI7XG5pbXBvcnQgXCIuLi9TdHlsZS9jc3MvZXQtbGluZS5jc3NcIjtcbmltcG9ydCBcIi4uL1N0eWxlL2Nzcy9wb3B1cC5jc3NcIjtcbmltcG9ydCBcIi4uL1N0eWxlL2Nzcy9kcm9wZG93bi5jc3NcIjtcbi8vIGltcG9ydCBcIi4uL1N0eWxlL21hZ25pZmljLXBvcHVwLmNzc1wiO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzLCByb2xlIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGxldCBhbGxvd2VkID0gdHJ1ZTtcbiAgLy8gaWYgKHJvdXRlci5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FkbWluL1wiKSAmJiByb2xlICE9PSBcImFkbWluXCIpIHtcbiAgLy8gICBhbGxvd2VkID0gZmFsc2U7XG4gIC8vIH1cblxuICAvLyBpZiAocm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvbG9naW5cIikgJiYgIXJvbGUpIHtcbiAgLy8gICBhbGxvd2VkID0gZmFsc2U7XG4gIC8vIH1cblxuICAvLyBpZiAocm91dGVyLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvb3BlcmF0aW9uXCIpICYmIHJvbGUgIT09IFwidXNlclwiKSB7XG4gIC8vICAgYWxsb3dlZCA9IGZhbHNlO1xuICAvLyB9XG5cbiAgY29uc3QgQ29tcG9uZW50VG9SZW5kZXIgPSBhbGxvd2VkID8gQ29tcG9uZW50IDogTG9naW47XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0U3RhdGU+XG4gICAgICA8QWRtaW5Qcm92aWRlcj5cbiAgICAgICAgPEFnZW50UHJvdmlkZXI+XG4gICAgICAgICAgPExvZ2luUHJvdmlkZXI+XG4gICAgICAgICAgICA8VXNlckNvbnRleHQ+XG4gICAgICAgICAgICAgIDxDb21wb25lbnRUb1JlbmRlciB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9Vc2VyQ29udGV4dD5cbiAgICAgICAgICA8L0xvZ2luUHJvdmlkZXI+XG4gICAgICAgIDwvQWdlbnRQcm92aWRlcj5cbiAgICAgIDwvQWRtaW5Qcm92aWRlcj5cbiAgICA8L0FsZXJ0U3RhdGU+XG4gICk7XG59O1xuXG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY3R4KSB7XG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICByZXR1cm4geyAuLi5hcHBQcm9wcywgcm9sZTogY29va2llcyhjdHgpLnR5cGUgfHwgXCJcIiB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgQWRtaW5Db250ZXh0IGZyb20gJy4uL2NvbnRleHQvQWRtaW5Db250ZXh0JztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEFsZXJ0Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L2FsZXJ0L2FsZXJ0Q29udGV4dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEFnZW50Q29udGV4dCBmcm9tICcuLi9jb250ZXh0L0FnZW50Q29udGV4dCc7XG4vLyBpbXBvcnQgY29va2llcyBmcm9tIFwibmV4dC1jb29raWVzXCI7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRlcic7XG5pbXBvcnQgQ29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHtcblx0Tm90aWZpY2F0aW9uQ29udGFpbmVyLFxuXHROb3RpZmljYXRpb25NYW5hZ2VyLFxufSBmcm9tICdyZWFjdC1ub3RpZmljYXRpb25zJztcbmltcG9ydCB7IEZhRXllLCBGYUV5ZVNsYXNoIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xuXG5jb25zdCBhZG1pbkxvZ2luID0gcHJvcHMgPT4ge1xuXHRjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG5cblx0Y29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQWRtaW5Db250ZXh0KTtcblx0Y29uc3QgeyBzdGF0ZSwgYWRkVG9rZW4sIGNoYW5nZUF1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoQWRtaW5Db250ZXh0KTtcblx0Y29uc3QgYWxlcnRDb250ZXh0ID0gdXNlQ29udGV4dChBbGVydENvbnRleHQpO1xuXHRjb25zdCB7IHNldEFsZXJ0LCBhbGVydHMgfSA9IGFsZXJ0Q29udGV4dDtcblx0Y29uc3QgW2F3YWl0RGF0YSwgc2V0QXdhaXREYXRhXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoJ0FkbWluJyk7XG5cdGNvbnN0IGluaXQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdG9rID0gQ29va2llcy5nZXQoJ2FkbWluVG9rZW4nKTtcblx0XHRpZiAodG9rICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9hZG1pbi9hZG1pbl9kYXNoYm9hcmQnO1xuXHRcdH1cblx0fTtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpbml0KCk7XG5cdH0sIFtdKTtcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCB1cmwgPSAnaHR0cHM6Ly9hcGkubW9uaS5wZS9hcGkvYWRtaW4vYXV0aCc7XG5cdFx0Y29uc3QgYm9keSA9IHsgZW1haWwsIHBhc3N3b3JkIH07XG5cdFx0aWYgKHR5cGUgPT09ICdBZ2VudCcpIHtcblx0XHRcdHVybCA9ICdodHRwczovL2FwaS5tb25pLnBlL2FwaS9hZ2VudC9hdXRoJztcblx0XHR9XG5cdFx0c2V0QXdhaXREYXRhKHRydWUpO1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoYm9keS5lbWFpbCA9PT0gJycgfHwgYm9keS5wYXNzd29yZCA9PT0gJycpIHtcblx0XHRcdFx0c2V0QXdhaXREYXRhKGZhbHNlKTtcblx0XHRcdFx0c2V0QWxlcnQoJ1BvciBmYXZvciBsbGVuYSB0b2RvcyBsb3MgZXNwYWNpb3MnLCAnZGFuZ2VyJyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjb25zdCByZXMgPSBhd2FpdCBBeGlvcy5wb3N0KHVybCwgYm9keSk7XG5cdFx0XHRcdGlmIChyZXMuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0YXdhaXQgYWRkVG9rZW4ocmVzLmRhdGEudG9rZW4pO1xuXHRcdFx0XHRcdGlmICh0eXBlID09PSAnQWdlbnQnKSB7XG5cdFx0XHRcdFx0XHRDb29raWVzLnNldCgnYWdlbnRUb2tlbicsIHJlcy5kYXRhLnRva2VuKTtcblx0XHRcdFx0XHRcdENvb2tpZXMucmVtb3ZlKCdhZG1pblRva2VuJyk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdENvb2tpZXMuc2V0KCdhZG1pblRva2VuJywgcmVzLmRhdGEudG9rZW4pO1xuXHRcdFx0XHRcdFx0Q29va2llcy5yZW1vdmUoJ2FnZW50VG9rZW4nKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRjaGFuZ2VBdXRoZW50aWNhdGVkKCk7XG5cdFx0XHRcdFx0Ly8gYXdhaXQgYWRkTmFtZShyZXMuZGF0YS5uYW1lKTtcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvYWRtaW4vYWRtaW5fZGFzaGJvYXJkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZXRBbGVydCgnUG9yIGZhdm9yIGxsZW5hIHRvZG9zIGxvcyBlc3BhY2lvcycsICdkYW5nZXInKTtcblx0XHRcdFx0XHRzZXRBd2FpdERhdGEoZmFsc2UpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdHNldEFsZXJ0KCdDcmVkZW5jaWFsZXMgbm8gdsOhbGlkYXMnLCAnZGFuZ2VyJyk7XG5cdFx0XHRzZXRBd2FpdERhdGEoZmFsc2UpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCB0b2dnbGVQYXNzd29yZCA9IGUgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCk7XG5cdH07XG5cblx0aWYgKGF3YWl0RGF0YSA9PT0gdHJ1ZSkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbG9hZGluZyB3LTEwMCBoLTEwMCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdsb2FkZXInPlxuXHRcdFx0XHRcdDxMb2FkZXIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZT57YFxuICAgICAgICAgIC5sb2FkaW5nIHtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW5cbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwNzExMjc7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3BhZ2UnIGlkPSd0b3AnPlxuXHRcdFx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZS1zZWN0aW9uIHB0LTIwIHBiLTAnIGlkPSdwYWdlJz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdob21lLWNvbnRlbnQgY29udGFpbmVyJz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2hvbWUtdGV4dCc+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBhbGlnbi1jZW50ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tNSBjb2wtc20tcHVzaC0zJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9J2Zvcm0gd2hpdGUnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9J2ltYWdlcy9sb2dvLW1vbmkucG5nJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhbHQ9J01vbmknXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoPScxNTBweCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPSdzZWN0aW9uLXRpdGxlIHB0LTgwIHB0LXhzLTQwIG1iLTQwIG1iLXNtLTQwJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SW5pY2llIHNlc2nDs24gY29tbyBhZG1pbmlzdHJhZG9yXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J3RleHQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3VzdWFyaW8nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPSd1c3VhcmlvJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXNtIGJvbGQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdVc3VhcmlvJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScuezMsMTAwfSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e2VtYWlsfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtdXNlciBmYS0yeCBjYW1wb2Zvcm0nPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3Bhc3N3b3JkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2lucHV0LXNtIGJvbGQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb250cmFzZcOxYSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybj0nLnszLDEwMH0nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9e3Nob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nZmEgZmEtZXllIGZhLTJ4IGNhbXBvZm9ybSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlUGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0VHlwZShlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naW5wdXQtc20gbWItMjAnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPScnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gY2xhc3NOYW1lPSdvcHQtY3VzdG9tJyBzZWxlY3RlZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBZG1pblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiBjbGFzc05hbWU9J29wdC1jdXN0b20nPkFnZW50PC9vcHRpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdidG4gYnRuLW1vZCBidG4tY29sb3IgYnRuLWJvcmRlci13IGJ0bi1sYXJnZSBidG4tY2lyY2xlIG1iLTIwJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVTdWJtaXR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEluaWNpYXIgc2VzacOzblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0nbXQtMjAnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRJbmljaWUgc2VzacOzbiBjb21vIHVzdWFyaW9cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9Jy9sb2dpbicgY2xhc3NOYW1lPSdvcmFuZ2UnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXIgbG9naW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRcdFx0LmJ0bi1pY29uIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Lm9wdC1jdXN0b20ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmQ6IGJsYWNrICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQub3B0LWN1c3RvbTpob3ZlciB7XG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogb3JhbmdlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRzZWxlY3Qgb3B0aW9uOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiBvcmFuZ2UgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0XHRcdDwvc2VjdGlvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkbWluTG9naW47XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luMlwiO1xuXG5jb25zdCBsb2dpbiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2VcIiBpZD1cInRvcFwiPlxuICAgICAgICA8TG9naW4gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ub3RpZmljYXRpb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1cmxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3b3dqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9