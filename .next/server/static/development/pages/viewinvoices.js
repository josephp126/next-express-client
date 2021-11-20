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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/viewinvoices.js":
/*!*******************************!*\
  !*** ./pages/viewinvoices.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _context_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/UserContext */ "./context/UserContext.js");
/* harmony import */ var _components_Navbar2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar2 */ "./components/Navbar2.js");
/* harmony import */ var _components_topbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/topbar */ "./components/topbar.js");
/* harmony import */ var _components_Footer2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer2 */ "./components/Footer2.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-data-table-component */ "react-data-table-component");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ArrowDownward */ "@material-ui/icons/ArrowDownward");
/* harmony import */ var _material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










Object(react_data_table_component__WEBPACK_IMPORTED_MODULE_7__["createTheme"])('solarized', {
  text: {
    primary: 'white',
    secondary: 'white'
  },
  background: {
    default: '#223'
  },
  divider: {
    default: '#79f'
  }
});
const columns = [{
  name: "Tracking Number",
  selector: row => row.trackingNum,
  sortable: true
}, {
  name: "Name",
  selector: row => row.filename
}, {
  name: "Suite ID",
  selector: row => row.suiteId //sortable: true,
  //right: true

}, {
  name: "Action",
  selector: row => row.action > 0 ? 'active' : 'non active' //right: true

}];
const darkTheme = {
  title: {
    fontSize: '22px',
    fontColor: '#FFFFFF',
    backgroundColor: '#363640'
  },
  contextMenu: {
    backgroundColor: '#E91E63',
    fontColor: '#FFFFFF'
  },
  header: {
    fontSize: '12px',
    fontColor: '#FFFFFF',
    backgroundColor: '#363640'
  },
  rows: {
    fontColor: '#FFFFFF',
    backgroundColor: '#363640',
    borderColor: 'rgba(255, 255, 255, .12)',
    hoverFontColor: 'black',
    hoverBackgroundColor: 'rgba(0, 0, 0, .24)'
  },
  cells: {
    cellPadding: '10px'
  }
};
const customStyles = {
  headCells: {
    style: {
      background: 'white',
      fontSize: '16px',
      color: 'black',
      border: '1px solid #a19797'
    }
  },
  cells: {
    style: {
      color: 'black',
      background: 'white',
      border: 'none'
    }
  },
  pagination: {
    style: {
      color: 'black',
      background: 'white'
    }
  }
};

function Table() {
  let {
    0: totalSupplyData,
    1: setTotalSupplyData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(async () => {
    await axios__WEBPACK_IMPORTED_MODULE_10___default.a.get('http://localhost:5000/users/getinvoices', {
      id: localStorage.getItem("ship-userId")
    }).then(response => {
      console.log(response);

      if (response.data != 'error') {
        setTotalSupplyData(response.data);
        console.log(totalSupplyData);
      } else {
        console.log("error");
      }
    });
  }, []);
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx(react_data_table_component__WEBPACK_IMPORTED_MODULE_7___default.a, {
    columns: columns,
    data: totalSupplyData,
    defaultSortFieldId: 1,
    sortIcon: __jsx(_material_ui_icons_ArrowDownward__WEBPACK_IMPORTED_MODULE_9___default.a, null),
    pagination: true,
    theme: "solarized",
    customStyles: customStyles
  }));
}

const invoice = props => {
  const {
    state,
    isUserAuth
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_UserContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    0: isLogin,
    1: setIsLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (document.getElementsByClassName('nav-list dashboard').length > 0) {
      for (let i = 0; i < document.getElementsByClassName('nav-list dashboard').length; i++) {
        document.getElementsByClassName('nav-list dashboard')[i].classList.add("active");
      }
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx("div", {
    className: "jsx-1209105477" + " " + 'appear-animate'
  }, __jsx(_components_Navbar2__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(_components_topbar__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx("div", {
    className: "jsx-1209105477" + " " + "banner"
  }, __jsx("div", {
    className: "jsx-1209105477" + " " + "container"
  }, __jsx("h1", {
    className: "jsx-1209105477"
  }, "Uploaded Invoices"), __jsx(Table, null))), __jsx(_components_Footer2__WEBPACK_IMPORTED_MODULE_6__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1209105477"
  }, "div.jsx-1209105477,section.jsx-1209105477{background:white;}.banner.jsx-1209105477{padding-top:100px;padding-bottom:50px;text-align:center;}.banner.jsx-1209105477 h1.jsx-1209105477{font-size:28px;color:#1e487c;margin-bottom:20px;}tr.jsx-1209105477{border:none !important;}td.jsx-1209105477{border:1px solid #a19797 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxccGFnZXNcXHZpZXdpbnZvaWNlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SmlCLEFBSXlCLEFBR0MsQUFLSCxBQUtRLEFBR2EsZUFQdEIsRUFSZixDQUdxQixLQVVyQixNQUpvQixPQU9wQixFQVptQixVQU1uQixRQUxBIiwiZmlsZSI6IkU6XFx3b3JrXFxuZXh0LWV4cHJlc3NcXGNsaWVudFxccGFnZXNcXHZpZXdpbnZvaWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFVzZXJDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvVXNlckNvbnRleHQnO1xyXG5pbXBvcnQgTmF2YmFyMiBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhcjInO1xyXG5pbXBvcnQgVG9wYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvdG9wYmFyJztcclxuaW1wb3J0IEZvb3RlcjIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIyJztcclxuaW1wb3J0IERhdGFUYWJsZSwgeyBjcmVhdGVUaGVtZSB9IGZyb20gXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiO1xyXG5pbXBvcnQgU29ydEljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNyZWF0ZVRoZW1lKCdzb2xhcml6ZWQnLCB7XHJcblx0dGV4dDoge1xyXG5cdCAgcHJpbWFyeTogJ3doaXRlJyxcclxuXHQgIHNlY29uZGFyeTogJ3doaXRlJyxcclxuXHR9LFxyXG5cdGJhY2tncm91bmQ6IHtcclxuXHQgIGRlZmF1bHQ6ICcjMjIzJyxcclxuXHR9LFxyXG5cdGRpdmlkZXI6IHtcclxuXHQgIGRlZmF1bHQ6ICcjNzlmJyxcclxuXHR9LFxyXG59KTtcclxuXHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiVHJhY2tpbmcgTnVtYmVyXCIsXHJcbiAgICAgIHNlbGVjdG9yOiByb3cgPT4gcm93LnRyYWNraW5nTnVtLFxyXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiTmFtZVwiLFxyXG4gICAgICBzZWxlY3Rvcjogcm93ID0+IHJvdy5maWxlbmFtZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU3VpdGUgSURcIixcclxuICAgICAgc2VsZWN0b3I6IHJvdyA9PiByb3cuc3VpdGVJZCxcclxuICAgICAgLy9zb3J0YWJsZTogdHJ1ZSxcclxuICAgICAgLy9yaWdodDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJBY3Rpb25cIixcclxuICAgICAgc2VsZWN0b3I6IHJvdyA9PiByb3cuYWN0aW9uID4gMCA/ICdhY3RpdmUnIDogJ25vbiBhY3RpdmUnLFxyXG4gICAgICAvL3JpZ2h0OiB0cnVlXHJcbiAgICB9XHJcbl07XHJcbiAgXHJcbmNvbnN0IGRhcmtUaGVtZSA9IHtcclxuICAgIHRpdGxlOiB7XHJcblx0XHRmb250U2l6ZTogJzIycHgnLFxyXG5cdFx0Zm9udENvbG9yOiAnI0ZGRkZGRicsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMzYzNjQwJyxcclxuICAgIH0sXHJcbiAgICBjb250ZXh0TWVudToge1xyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnI0U5MUU2MycsXHJcblx0XHRmb250Q29sb3I6ICcjRkZGRkZGJyxcclxuICAgIH0sXHJcbiAgICBoZWFkZXI6IHtcclxuXHRcdGZvbnRTaXplOiAnMTJweCcsXHJcblx0XHRmb250Q29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyMzNjM2NDAnLFxyXG4gICAgfSxcclxuICAgIHJvd3M6IHtcclxuXHRcdGZvbnRDb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzM2MzY0MCcsXHJcblx0XHRib3JkZXJDb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjEyKScsXHJcblx0XHRob3ZlckZvbnRDb2xvcjogJ2JsYWNrJyxcclxuXHRcdGhvdmVyQmFja2dyb3VuZENvbG9yOiAncmdiYSgwLCAwLCAwLCAuMjQpJyxcclxuICAgIH0sXHJcbiAgICBjZWxsczoge1xyXG4gICAgICBcdGNlbGxQYWRkaW5nOiAnMTBweCcsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgaGVhZENlbGxzOiB7XHJcbiAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgICBmb250U2l6ZTogJzE2cHgnLFxyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG5cdFx0Ym9yZGVyOiAnMXB4IHNvbGlkICNhMTk3OTcnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY2VsbHM6IHtcclxuICAgICAgc3R5bGU6IHtcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG5cdFx0Ym9yZGVyOiAnbm9uZSdcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcblx0XHRiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG59O1xyXG4gIFxyXG5mdW5jdGlvbiBUYWJsZSgpIHtcclxuXHRsZXQgW3RvdGFsU3VwcGx5RGF0YSwgc2V0VG90YWxTdXBwbHlEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblx0dXNlRWZmZWN0KGFzeW5jKCkgPT4ge1xyXG5cdFx0YXdhaXRcclxuXHRcdGF4aW9zXHJcblx0XHQuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvdXNlcnMvZ2V0aW52b2ljZXMnLCB7aWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hpcC11c2VySWRcIil9KVxyXG5cdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuXHRcdFx0aWYocmVzcG9uc2UuZGF0YSAhPSAnZXJyb3InKXtcclxuXHRcdFx0XHRzZXRUb3RhbFN1cHBseURhdGEoIHJlc3BvbnNlLmRhdGEgKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyh0b3RhbFN1cHBseURhdGEpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sIFtdKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxDYXJkPlxyXG5cdFx0XHQ8RGF0YVRhYmxlXHJcblx0XHRcdFx0Y29sdW1ucyA9IHtjb2x1bW5zfVxyXG5cdFx0XHRcdGRhdGEgPSB7dG90YWxTdXBwbHlEYXRhfVxyXG5cdFx0XHRcdGRlZmF1bHRTb3J0RmllbGRJZCA9IHsxfVxyXG5cdFx0XHRcdHNvcnRJY29uID0gezxTb3J0SWNvbiAvPn1cclxuXHRcdFx0XHRwYWdpbmF0aW9uXHJcblx0XHRcdFx0dGhlbWUgPSBcInNvbGFyaXplZFwiXHJcblx0XHRcdFx0Y3VzdG9tU3R5bGVzID0geyBjdXN0b21TdHlsZXMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC9DYXJkPlxyXG5cdCk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBpbnZvaWNlID0gcHJvcHMgPT4ge1xyXG5cdGNvbnN0IHsgc3RhdGUsIGlzVXNlckF1dGggfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG5cclxuXHRjb25zdCBbaXNMb2dpbiwgc2V0SXNMb2dpbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0XHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGlmKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdi1saXN0IGRhc2hib2FyZCcpLmxlbmd0aCA+IDApe1xyXG5cdFx0XHRmb3IobGV0IGk9MDsgaTxkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXYtbGlzdCBkYXNoYm9hcmQnKS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdi1saXN0IGRhc2hib2FyZCcpW2ldLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdhcHBlYXItYW5pbWF0ZSc+XHJcblx0XHRcdFx0XHQ8TmF2YmFyMiAvPlxyXG5cdFx0XHRcdFx0PFRvcGJhciAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDE+VXBsb2FkZWQgSW52b2ljZXM8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxUYWJsZSAvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PEZvb3RlcjIgLz5cclxuXHRcdFx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHRcdFx0ZGl2LFxyXG5cdFx0XHRcdFx0XHRzZWN0aW9uIHtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuYmFubmVyIHtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTAwcHg7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDUwcHg7XHJcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdC5iYW5uZXIgaDEge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjhweDtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzFlNDg3YztcclxuXHRcdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHRyIHtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0ZCB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2ExOTc5NyAhaW1wb3J0YW50O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRgfTwvc3R5bGU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGludm9pY2U7XHJcbiJdfQ== */\n/*@ sourceURL=E:\\\\work\\\\next-express\\\\client\\\\pages\\\\viewinvoices.js */"))));
};

/* harmony default export */ __webpack_exports__["default"] = (invoice);

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/viewinvoices.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\work\next-express\client\pages\viewinvoices.js */"./pages/viewinvoices.js");


/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/icons/ArrowDownward":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowDownward" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowDownward");

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

/***/ "react-data-table-component":
/*!*********************************************!*\
  !*** external "react-data-table-component" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-data-table-component");

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

/***/ "wowjs":
/*!************************!*\
  !*** external "wowjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("wowjs");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsZXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3RlcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9wYmFyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvVXNlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGV4dC9hbGVydC9hbGVydENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbWl0dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy92aWV3aW52b2ljZXMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRhLXRhYmxlLWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwid293anNcIiJdLCJuYW1lcyI6WyJBbGVydHMiLCJhbGVydENvbnRleHQiLCJ1c2VDb250ZXh0IiwiQWxlcnRDb250ZXh0IiwiYWxlcnRzIiwibGVuZ3RoIiwiaWQiLCJ0eXBlIiwibXNnIiwiRm9vdGVyIiwiX19odG1sIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiRm9vdGVyMiIsImlzU2VydmVyIiwiV09XIiwicmVxdWlyZSIsIkxheW91dCIsInByb3BzIiwidXNlRWZmZWN0IiwiaW5pdCIsImNoaWxkcmVuIiwiTmF2YmFyIiwicm91dGVyIiwiaGFuZGxlTG9nb3V0IiwicmVzIiwiQ29va2llcyIsInJlbW92ZSIsInBhdGhuYW1lIiwicmVsb2FkIiwiUm91dGVyIiwicHVzaCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpc2xvZ2luIiwibmFtZSIsIndpdGhSb3V0ZXIiLCJnZXREYXRhIiwidG9rZW4iLCJoZWFkZXIiLCJoZWFkZXJzIiwiZGF0YSIsIkF4aW9zIiwiZ2V0IiwiTmF2YmFyMiIsInNldElzTG9naW4iLCJ1c2VTdGF0ZSIsInNldE5hbWUiLCJjb28iLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJzZXRJdGVtIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiU3Vic2NyaWJlIiwiVXNlckNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJQcm92aWRlciIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VyTmFtZSIsImlzTG9naW4iLCJhZGRUb2tlbiIsIm5ld1N0YXRlIiwiYWRkTmFtZSIsImlzVXNlckF1dGgiLCJDb25zdW1lciIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsImV4cG9ydHMiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl91cmwiLCJfdXRpbHMiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJpc0xvY2FsIiwidXJsIiwicGFyc2UiLCJvcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsImhvc3QiLCJwcm90b2NvbCIsIm1lbW9pemVkRm9ybWF0VXJsIiwiZm9ybWF0RnVuYyIsImxhc3RIcmVmIiwibGFzdEFzIiwibGFzdFJlc3VsdCIsImFzIiwicmVzdWx0IiwiZm9ybWF0VXJsIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJvYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsInRhcmdldCIsImNiIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsImRlbGV0ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJMaW5rIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwiZSIsIm5vZGVOYW1lIiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwicmVzb2x2ZSIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiYm9keSIsImZvY3VzIiwicHJlZmV0Y2giLCJ3YXJuIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJnZXRQYXRocyIsInBhcnNlZEhyZWYiLCJwYXJzZWRBcyIsInJlc29sdmVkSHJlZiIsImhhbmRsZVJlZiIsInJlZiIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJqb2luIiwib3B0aW9ucyIsInBhdGhzIiwiY2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjdXJyZW50Iiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJvbkNsaWNrIiwiZGVmYXVsdFByZXZlbnRlZCIsInBhc3NIcmVmIiwicHJvY2VzcyIsImNsb25lRWxlbWVudCIsImV4ZWNPbmNlIiwiUHJvcFR5cGVzIiwiZXhhY3QiLCJwcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImVsZW1lbnQiLCJwcm9wTmFtZSIsInZhbHVlIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsIm9rIiwic3RhdHVzIiwianNvbiIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsImNyZWF0ZVRoZW1lIiwidGV4dCIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiZGl2aWRlciIsImNvbHVtbnMiLCJzZWxlY3RvciIsInJvdyIsInRyYWNraW5nTnVtIiwic29ydGFibGUiLCJmaWxlbmFtZSIsInN1aXRlSWQiLCJhY3Rpb24iLCJkYXJrVGhlbWUiLCJ0aXRsZSIsImZvbnRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImNvbnRleHRNZW51Iiwicm93cyIsImJvcmRlckNvbG9yIiwiaG92ZXJGb250Q29sb3IiLCJob3ZlckJhY2tncm91bmRDb2xvciIsImNlbGxzIiwiY2VsbFBhZGRpbmciLCJjdXN0b21TdHlsZXMiLCJoZWFkQ2VsbHMiLCJzdHlsZSIsImNvbG9yIiwiYm9yZGVyIiwicGFnaW5hdGlvbiIsIlRhYmxlIiwidG90YWxTdXBwbHlEYXRhIiwic2V0VG90YWxTdXBwbHlEYXRhIiwiYXhpb3MiLCJyZXNwb25zZSIsImludm9pY2UiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaSIsImNsYXNzTGlzdCIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVB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QUF6RCxDQUFtRUMsR0FBbkUsQ0FBdUUsUUFBdkU7QUFDQTtBQUNEO0FBQ0QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQ0MsbUVBQ0MsTUFBQywwREFBRCxRQUNDO0FBQUEsd0NBQWU7QUFBZixLQUNDLE1BQUMsMkRBQUQsT0FERCxFQUVDLE1BQUMsMERBQUQsT0FGRCxFQUdDO0FBQUEsd0NBQWU7QUFBZixLQUNDO0FBQUEsd0NBQWU7QUFBZixLQUNDO0FBQUE7QUFBQSx5QkFERCxFQUVDLE1BQUMsS0FBRCxPQUZELENBREQsQ0FIRCxFQVNDLE1BQUMsMkRBQUQsT0FURDtBQUFBO0FBQUEsd2pPQURELENBREQsQ0FERDtBQXVDQSxDQXBERDs7QUFzRGVKLHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxBLG1EOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFx2aWV3aW52b2ljZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQWxlcnRDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvYWxlcnQvYWxlcnRDb250ZXh0JztcblxuY29uc3QgQWxlcnRzID0gKCkgPT4ge1xuXHRjb25zdCBhbGVydENvbnRleHQgPSB1c2VDb250ZXh0KEFsZXJ0Q29udGV4dCk7XG5cdC8vIGNvbnNvbGUubG9nKGFsZXJ0Q29udGV4dC5hbGVydHMpO1xuXHRyZXR1cm4gKFxuXHRcdGFsZXJ0Q29udGV4dC5hbGVydHMubGVuZ3RoID4gMCAmJiAoXG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGtleT17YWxlcnRDb250ZXh0LmFsZXJ0c1swXS5pZH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtgbXQtNCBhbGVydCBhbGVydC0ke2FsZXJ0Q29udGV4dC5hbGVydHNbMF0udHlwZX1gfVxuXHRcdFx0PlxuXHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWluZm8tY2lyY2xlJyAvPnsnICd9XG5cdFx0XHRcdDxzdHJvbmc+QWxlcnRhOiB7YWxlcnRDb250ZXh0LmFsZXJ0c1swXS5tc2d9PC9zdHJvbmc+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHRkaXYge1xuXHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDc1cHg7XG5cdFx0XHRcdFx0XHR6LWluZGV4OiA5OTk5OTk7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogYXV0bztcblx0XHRcdFx0XHRcdG1hcmdpbi1yaWdodDogYXV0bztcblx0XHRcdFx0XHRcdHRvcDogMDtcblx0XHRcdFx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNlNTU3Mjk7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjMwLCAxNjUsIDYwLCAxKSA0NyUsIHJnYmEoMjMwLCAxNjUsIDYwLCAxKSAwJSwgcmdiYSgyMjksIDgwLCAzOSwgMSkgMTAwJSk7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGZvb3RlciBjbGFzc05hbWU9J3BhZ2UtZm9vdGVyIGZvbnQtc21hbGwgbWRiLWNvbG9yIGxpZ2h0ZW4tMyBwdC0xJz5cblx0XHRcdDxkaXZcblx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcblx0XHRcdFx0XHRfX2h0bWw6XG5cdFx0XHRcdFx0XHQnPCEtLSBNYWRlIHdpdGgg4pmlIGJ5IFJvc2hhbiBNaXNocmEgYW5kIERldiBBcm9yYSBHaXRodWIgOiBodHRwczovL2dpdGh1Yi5jb20vcmluZW0gaHR0cHM6Ly9naXRodWIuY29tL2RyMGlkMDA3IC0tPicsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyIHRleHQtbWQtbGVmdCc+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCBjb2wtbGctMyBtci1hdXRvIG15LW1kLTQgbXktMCBtdC0yIG1iLTEnPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7LyogPGltZ1xuXHRcdFx0XHRcdFx0XHRcdHNyYz17cmVxdWlyZSgnJyl9XG5cdFx0XHRcdFx0XHRcdFx0YWx0PScnXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbWctZmx1aWQnXG5cdFx0XHRcdFx0XHRcdC8+ICovfVxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdEVsIG1lam9yIHRpcG8gZGUgY2FtYmlvIHBhcmEgY2FtYmlhciBkw7NsYXJlcyB5IHNvbGVzIG9ubGluZSBlblxuXHRcdFx0XHRcdFx0XHRMaW1hLCBQZXLDulxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0ey8qIDxociBjbGFzc05hbWU9XCJjbGVhcmZpeCB3LTEwMCBkLW1kLW5vbmVcIj48L2hyPiAqL31cblxuXHRcdFx0XHRcdDxociBjbGFzc05hbWU9J2NsZWFyZml4IHctMTAwIGQtbWQtbm9uZSc+PC9ocj5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNiBjb2wtbGctMyBteC1hdXRvIG15LW1kLTQgbXktMSBtdC0xIG1iLTEnPlxuXHRcdFx0XHRcdFx0PGg1IGNsYXNzTmFtZT0nZm9udC13ZWlnaHQtYm9sZCB0ZXh0LXVwcGVyY2FzZSBtYi0yJz5Db250YWN0PC9oNT5cblxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nbGlzdC11bnN0eWxlZCc+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtaG9tZSBtci0xJz48L2k+IE5ldyBZb3JrLCBOWSAxMDAxMlxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1lbnZlbG9wZSBtci0xJz48L2k+IGluZm9AZXhhbXBsZS5jb21cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtcGhvbmUgbXItMSc+PC9pPiArIDAxIDIzNCA1NjcgODhcblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nY2xlYXJmaXggdy0xMDAgZC1tZC1ub25lJz48L2hyPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC0yIGNvbC1sZy0yIHRleHQtY2VudGVyIG14LWF1dG8gbXktNCc+XG5cdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkIHRleHQtdXBwZXJjYXNlIG1iLTQnPkZvbGxvdyBVczwvaDU+XG5cblx0XHRcdFx0XHRcdDxhIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidG4tZmxvYXRpbmcgYnRuLWZiJz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1mYWNlYm9vayc+PC9pPlxuXHRcdFx0XHRcdFx0PC9hPlxuXG5cdFx0XHRcdFx0XHQ8YSB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnRuLWZsb2F0aW5nIGJ0bi10dyc+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtdHdpdHRlcic+PC9pPlxuXHRcdFx0XHRcdFx0PC9hPlxuXG5cdFx0XHRcdFx0XHQ8YSB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnRuLWZsb2F0aW5nIGJ0bi1ncGx1cyc+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtd2hhdHNhcHAnPjwvaT5cblx0XHRcdFx0XHRcdDwvYT5cblxuXHRcdFx0XHRcdFx0PGEgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J0bi1mbG9hdGluZyBidG4tZHJpYmJibGUnPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWluc3RhZ3JhbSc+PC9pPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0cCxcblx0XHRcdFx0XHRcdGxpLFxuXHRcdFx0XHRcdFx0ZGl2IGEge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDAlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGRpdiBjbGFzc05hbWU9J2Zvb3Rlci1jb3B5cmlnaHQgdGV4dC1jZW50ZXIgcHktMSBwYi0zJz5cblx0XHRcdFx0wqkgMjAyMCBDb3B5cmlnaHQ6XG5cdFx0XHRcdDxhIGhyZWY9JyMnPiBNb25pLnBlPC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb290ZXI+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBGb290ZXIyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwic21hbGwtc2VjdGlvbiBiZy1tb3JhZG8gZm9vdGVyIHBiLTIwIHB0LTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1sZWZ0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctMyBjb2wtbWQtMyBjb2wteHMtNiBjb2wtc20tM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3NoaXAtbG9nbycgc3JjPSdpbWFnZXMvc2hpcF9sb2dvLnBuZycgYWx0PSdsb2dvJyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAzMTMwLTU4MCBTZWFib3JuZSBBdmUgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICBQb3J0IENvcXVpdGxhbSwgQiwgYyw8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgIFYzQiBPTTM8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgIENBTkFEQTxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgVGVsOiArMSA3NzgtNzI3LTE0MjdcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy0zIGNvbC14cy02IGNvbC1tZC0zIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNsZWFybGlzdCB3aWRnZXQtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBIb3cgU2hpcEJ5TWFpbCBXb3Jrc1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTaGlwcGluZyAmIFByaWNpbmdcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgRkFRXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFN1cHBvcnRcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWN0dWFsIHZzLCBWb2x1bWV0cmljIFdlaWdodFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy0zIGNvbC14cy02IGNvbC1tZC0zIGNvbC1zbS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNsZWFybGlzdCB3aWRnZXQtbWVudVwiPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFNoaXBCeU1haWxcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQmVjb21lIGEgUGFydG5lclxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBTaXRlTWFwXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNiBjb2wtbGctMyBjb2wteHMtMTIgY29sLW1kLTMgY29sLXNtLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXNvY2lhbC1saW5rc1wiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNvY2lhbC10aXRsZVwiPjIwMTkgQ291bnRyeSBHcm93dGggTGVhZGVyPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2ludGVybmF0aW9uYWxfc2hpcC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInNvY2lhbC1zdWJ0aXRsZVwiPmludGVybmF0aW9uYWwgU2hpcHBpbmc8L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic29jbGFsLXJldmlld1wiPlJlYWQgb3VyIHJldmlld3Mgb246PC9wPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wZy9zaGlwYnltYWlsL3Jldmlld3NcIjtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYWNlYm9vay1saW5rXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZmFjZWJvb2tfc2hhcmUxLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy90cnVzdHBpbG90LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGdpbi1sZWZ0IGZvb3Rlci1wYXlwYWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvQ2FuYWRhLXBvc3QucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZGhsX2xvZ28uZ2lmXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvZmVkZXhfbG9nby5naWZcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3d3dy5zaGlwYnltYWlsLmNvbVwiO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9UTlQtbG9nby5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3d3dy5zaGlwYnltYWlsLmNvbVwiO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy91c3BzX2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYXlwYWxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL1BheXBhbC1WaXNhLWRlYml0LnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy50cnVzdHBpbG90LmNvbS9yZXZpZXcvd3d3LnNoaXBieW1haWwuY29tXCI7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL1VQU19sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLXNtLTEyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC04XCI+XG4gICAgICAgICAgICAgICAgPGg0PkJMT0c8L2g0PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD4xLiBPbmxpbmUgU2hvcHBpbmcgZnJvbSBjYW5hZGEgc2F2ZXMgeW91IG1vbmV5LCBSZWFsbHk/PC9wPlxuICAgICAgICAgICAgPHA+Mi4gU2hpcCBUbyBQYW5hbWE8L3A+XG4gICAgICAgICAgICA8cD4zLiBTaGlwIFRvIEF1c3RyYWxpYTwvcD5cbiAgICAgICAgICAgIDxwPjQuIFNoaXAgVG8gQXJnZW50aW5hPC9wPlxuICAgICAgICAgICAgPHA+NS4gV2hhdCBDQU4nVCB5b3Ugc2hpcCB0aHJvdWdoIHlvdXIgQ2FuYWRpYW4gUGFyY2VsIEZvcndhcmRlcnMgQWRkcmVzcz88L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMyBjb2wtc20tNiBwbHVzXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9wbHVzaW1nMTExMTExMS5qcGdcIiAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEZvciBldmVyeSBpbnRlcm5hdGlvbmFsIHNoaXBtZW50Ljxicj48L2JyPlxuICAgICAgICAgICAgICBTaGlwQnlNYWlsIHdpbGwgZG9uYXRlICQxIHRvIHRoZSBDYW5hZGlhbiA8YnI+PC9icj5cbiAgICAgICAgICAgICAgUmVkIENyb3NzIHRvIGhlbHAgd2hlcmUgaXQgaXMgbmVlZGVkPGJyPjwvYnI+XG4gICAgICAgICAgICAgIG1vc3QuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10ZXh0XCI+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJ3aGl0ZVwiPlxuICAgICAgICAgIDIwMTctMjAyMCBTaGlwQnlNYWlsLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkIHwgWE1MIFNpdGVtYXBcbiAgICAgICAgPC9oNj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2NhbC1zY3JvbGxcIj5cbiAgICAgICAgPGEgaHJlZj1cIiN0b3BcIiBjbGFzc05hbWU9XCJsaW5rLXRvLXRvcFwiPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZXZyb24tY2lyY2xlLXVwXCI+PC9pPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnNvY2lhbC10aXRsZXtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAuc29jaWFsLXN1YnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1zb2NpYWwtbGlua3Mge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZmFjZWJvb2stbGluayB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zb2NsYWwtcmV2aWV3IHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgICAgICAgbWFyZ2luLXRvcDowcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbToycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci10ZXh0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU0ODdjO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItdGV4dCBoNntcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1wYXlwYWwgaW1ne1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXBheXBhbCAucm93IHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItcGF5cGFsIC5wYXlwYWwgaW1ne1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1wYXlwYWwgaDQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXBheXBhbCBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b20gOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1wYXlwYWwgLnBsdXMge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXRleHQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXIyO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9OYXZiYXJcIjtcbmltcG9ydCBBbGVydHMgZnJvbSBcIi4vQWxlcnRzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiO1xuY29uc3QgV09XID0gIWlzU2VydmVyID8gcmVxdWlyZShcIndvd2pzXCIpIDogbnVsbDtcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbmV3IFdPVy5XT1coKS5pbml0KCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1vbmk8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIlwiIC8+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjBcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cImltYWdlcy9mYXZpY29uLnBuZ1wiIC8+XG4gICAgICA8bGluayByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgaHJlZj1cImltYWdlcy9hcHBsZS10b3VjaC1pY29uLnBuZ1wiIC8+XG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgc2l6ZXM9XCI3Mng3MlwiXG4gICAgICAgIGhyZWY9XCJpbWFnZXMvYXBwbGUtdG91Y2gtaWNvbi03Mng3Mi5wbmdcIlxuICAgICAgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICBzaXplcz1cIjExNHgxMTRcIlxuICAgICAgICBocmVmPVwiaW1hZ2VzL2FwcGxlLXRvdWNoLWljb24tMTE0eDExNC5wbmdcIlxuICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL3N0eWxlLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9zdHlsZS1yZXNwb25zaXZlLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9hbmltYXRlLm1pbi5jc3NcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvdmVydGljYWwtcmh5dGhtLm1pbi5jc3NcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvbWFnbmlmaWMtcG9wdXAuY3NzXCIgLz5cbiAgICAgIDxBbGVydHMgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwZWFyLWFuaW1hdGVcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS0xLjExLjIubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuZWFzaW5nLjEuMy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvYm9vdHN0cmFwLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvU21vb3RoU2Nyb2xsLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuc2Nyb2xsVG8ubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0XG4gICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICBzcmM9XCJqcy9qcXVlcnkubG9jYWxTY3JvbGwubWluLmpzXCJcbiAgICAgID48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS52aWV3cG9ydC5taW5pLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuY291bnRUby5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvanF1ZXJ5LmFwcGVhci5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvanF1ZXJ5LnN0aWNreS5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvanF1ZXJ5LnBhcmFsbGF4LTEuMS4zLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuZml0dmlkcy5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvb3dsLmNhcm91c2VsLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvaXNvdG9wZS5wa2dkLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvaW1hZ2VzbG9hZGVkLnBrZ2QubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0XG4gICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICBzcmM9XCJqcy9qcXVlcnkubWFnbmlmaWMtcG9wdXAubWluLmpzXCJcbiAgICAgID48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL3dvdy5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL21hc29ucnkucGtnZC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2FsbC5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvbWFpbi5qc1wiPjwvc2NyaXB0PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNvbnN0IE5hdmJhciA9ICh7IHJvdXRlciB9KSA9PiB7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0fSwgW10pO1xuXG5cdGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcblx0XHRjb25zdCByZXMgPSBDb29raWVzLnJlbW92ZSgndG9rZW4nKTtcblx0XHRpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL2luZGV4Jykge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRSb3V0ZXIucHVzaCgnLycpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxuYXYgY2xhc3NOYW1lPSdtYWluLW5hdiBzdGljay1maXhlZCc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHJlbGF0aXZlIGNsZWFyZml4Jz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25hdi1sb2dvLXdyYXAgbG9jYWwtc2Nyb2xsJz5cblx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2xvZ28nXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdzaGlwLWxvZ28nIHNyYz0naW1hZ2VzL3NoaXBfbG9nby5wbmcnIGFsdD0nbG9nbycgLz5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2JiYi1sb2dvJyBzcmM9J2ltYWdlcy9iYmJfbG9nby5wbmcnIGFsdD0nbG9nbycgLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9iaWxlLW5hdic+XG5cdFx0XHRcdFx0PGEgaHJlZj0nIycgY2xhc3NOYW1lPSdmbS1idXR0b24nPlxuXHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPk1lbnVcblx0XHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm0td3JhcHBlcicgaWQ9J2Z1bGxzY3JlZW4tbWVudSc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm0td3JhcHBlci1zdWInPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm0td3JhcHBlci1zdWItc3ViJz5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdmbS1tZW51LWxpbmtzIHNjcm9sbC1uYXYgbG9jYWwtc2Nyb2xsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IGRhc2hib2FyZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kYXNoYm9hcmQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHREQVNIQk9BUkRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBob3dpdHdvcmtzJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2hvd2l0d29ya3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9ob3dpdHdvcmtzJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SE9XIElUIFdPUktTXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgcHJpY2luZyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9wcmljaW5nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJpY2luZyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFBSSUNJTkdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBzdXBwb3J0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3N1cHBvcnQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zdXBwb3J0Jztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U1VQUE9SVFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL1VzZXJJbmZvJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT57bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaGlwLXVzZXJOYW1lXCIpfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3JlZ2lzdGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5Mb2dvdXQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS1zb2NpYWwtbGlua3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgdGl0bGU9J0ZhY2Vib29rJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtZmFjZWJvb2snPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdUd2l0dGVyJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtdHdpdHRlcic+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgdGl0bGU9J0xpbmtlZGluJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlua2VkaW4nPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdJbnN0YWdyYW0rJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtaW5zdGFncmFtJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5uZXItbmF2IGRlc2t0b3AtbmF2Jz5cblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdjbGVhcmxpc3Qgc2Nyb2xsLW5hdiBsb2NhbC1zY3JvbGwnPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IGRhc2hib2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kYXNoYm9hcmQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHREQVNIQk9BUkRcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWxpc3QgaG93aXR3b3Jrc1wiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9ob3dpdHdvcmtzJztcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0SE9XIElUIFdPUktTXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IHByaWNpbmdcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJpY2luZyc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFBSSUNJTkdcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWxpc3Qgc3VwcG9ydFwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zdXBwb3J0Jztcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0U1VQUE9SVFxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblxuXHRcdFx0XHRcdFx0e2lzbG9naW4gPyAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2xvZ2luJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IGNsYXNzTmFtZT0nYnRuJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWJvcmRlci13IGJ0bi1jaXJjbGUgYm9sZCBidG4tc2VzaW9uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q2VycmFyIFNlc2nDs25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvZmlsZSc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWNvbG9yIGJ0bi1ib3JkZXItdyBidG4tbWVkaXVtIGJ0bi1jaXJjbGUgYm9sZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2xvZ2luJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdidG4gYnRuLW1vZCBidG4tYm9yZGVyLXcgYnRuLWNpcmNsZSBzaWduLWluJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNJR04gSU5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZWdpc3Rlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWJvcmRlci13IGJ0bi1jaXJjbGUgc2lnbi11cCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTSUdOIFVQXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdC5idG4ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5uYXYtbGlzdC5hY3RpdmUgYXtcblx0XHRcdFx0XHRcdGNvbG9yOiByZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8L25hdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2YmFyKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBGYVVuZGVybGluZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmNvbnN0IGdldERhdGEgPSBhc3luYyB0b2tlbiA9PiB7XG5cdGNvbnN0IGhlYWRlciA9IHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQneC1hdXRoLXRva2VuJzogdG9rZW4sXG5cdFx0fSxcblx0fTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IEF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9hdXRoJywgaGVhZGVyKTtcblxuXHRyZXR1cm4gZGF0YS5kYXRhO1xufTtcblxuY29uc3QgTmF2YmFyMiA9ICh7IHJvdXRlciB9KSA9PiB7XG5cdGNvbnN0IFtpc2xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgY29vID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NoaXAtdG9rZW4nKTtcblx0XHRpZiAoY29vICE9IG51bGwgJiYgY29vICE9ICcnICYmIGNvbyAhPSB1bmRlZmluZWQgJiYgY29vICE9ICd1bmRlZmluZWQnICYmIGNvbyAhPSAnbnVsbCcpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiaXNsb2dpblwiKTtcblx0XHRcdFx0c2V0SXNMb2dpbih0cnVlKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHNldElzTG9naW4oZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9J21haW4tbmF2IHN0aWNrLWZpeGVkJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcmVsYXRpdmUgY2xlYXJmaXgnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmF2LWxvZ28td3JhcCBsb2NhbC1zY3JvbGwnPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbG9nbydcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J3NoaXAtbG9nbycgc3JjPSdpbWFnZXMvc2hpcF9sb2dvLnBuZycgYWx0PSdsb2dvJyAvPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nYmJiLWxvZ28nIHNyYz0naW1hZ2VzL2JiYl9sb2dvLnBuZycgYWx0PSdsb2dvJyAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2JpbGUtbmF2Jz5cblx0XHRcdFx0XHQ8YSBocmVmPScjJyBjbGFzc05hbWU9J2ZtLWJ1dHRvbic+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+TWVudVxuXHRcdFx0XHRcdDwvYT5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS13cmFwcGVyJyBpZD0nZnVsbHNjcmVlbi1tZW51Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS13cmFwcGVyLXN1Yic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS13cmFwcGVyLXN1Yi1zdWInPlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2ZtLW1lbnUtbGlua3Mgc2Nyb2xsLW5hdiBsb2NhbC1zY3JvbGwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgaG9tZSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNsb2dpbiA/ICcnIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRIT01FXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgZGFzaGJvYXJkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2Rhc2hib2FyZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoaXNsb2dpbil7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2Rhc2hib2FyZCc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHREQVNIQk9BUkRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBob3dpdHdvcmtzJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2hvd2l0d29ya3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9ob3dpdHdvcmtzJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SE9XIElUIFdPUktTXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgcHJpY2luZyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9wcmljaW5nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJpY2luZyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFBSSUNJTkdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBzdXBwb3J0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3N1cHBvcnQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zdXBwb3J0Jztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U1VQUE9SVFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdHtpc2xvZ2luID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaGlwLXVzZXJuYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NoaXAtdXNlcm5hbWUnLCAnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2hpcC10b2tlbicsICcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyB8fCByb3V0ZXIucGF0aG5hbWUgPT09ICcvaW5kZXgnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRMb2cgb3V0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvbG9naW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNJR04gSU5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVnaXN0ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNJR04gVVBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm0tc29jaWFsLWxpbmtzJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdGYWNlYm9vaycgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWZhY2Vib29rJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJyB0aXRsZT0nVHdpdHRlcicgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLXR3aXR0ZXInPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdMaW5rZWRpbicgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWxpbmtlZGluJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJyB0aXRsZT0nSW5zdGFncmFtKycgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWluc3RhZ3JhbSc+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2lubmVyLW5hdiBkZXNrdG9wLW5hdic+XG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nY2xlYXJsaXN0IHNjcm9sbC1uYXYgbG9jYWwtc2Nyb2xsJz5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IGhvbWUnPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGlzbG9naW4gPyAnJyBcblx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0SE9NRVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBkYXNoYm9hcmRcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZihpc2xvZ2luKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZGFzaGJvYXJkJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdERBU0hCT0FSRFxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBob3dpdHdvcmtzXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2hvd2l0d29ya3MnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRIT1cgSVQgV09SS1Ncblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWxpc3QgcHJpY2luZ1wiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcmljaW5nJztcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0UFJJQ0lOR1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBzdXBwb3J0XCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3N1cHBvcnQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRTVVBQT1JUXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdFx0XHR7aXNsb2dpbiA/IChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIiwgZm9udFdlaWdodDogXCJib2xkXCJ9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaGlwLXVzZXJuYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaGlwLXVzZXJuYW1lJywgJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2hpcC10b2tlbicsICcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gJy9pbmRleCcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tbW9kIGJ0bi1ib3JkZXItdyBidG4tY2lyY2xlIHNpZ24taW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdExPRyBPVVRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvbG9naW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tbW9kIGJ0bi1ib3JkZXItdyBidG4tY2lyY2xlIHNpZ24taW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBJTlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3JlZ2lzdGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdidG4gYnRuLW1vZCBidG4tYm9yZGVyLXcgYnRuLWNpcmNsZSBzaWduLXVwJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNJR04gVVBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0LmJ0biB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm5hdi1saXN0LmFjdGl2ZSBhe1xuXHRcdFx0XHRcdFx0Y29sb3I6IHJlZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXZiYXIyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3Vic2NyaWJlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9wYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wYmFyLXJlZFwiPlxuICAgICAgICAgIEZPTExPVyBVUyBPTiBJTlNUQVJBTSBAU0hJUEJZTUFJTCBGT1IgVEhFIExBVEVTVCBQUk9NT1MuIFNBTEVTIEFORCBERUFMUyBGUk9NIENBTkFEQVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50b3BiYXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnRvcGJhci1yZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkODAyMDI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgVXNlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IHByb3BzID0+IHtcblx0Y29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XG5cdFx0dG9rZW46ICcnLFxuXHRcdHVzZXJOYW1lOiAnJyxcblx0XHRpc0xvZ2luOiBmYWxzZSxcblx0XHRpZDogJycsXG5cdH0pO1xuXG5cdGNvbnN0IGFkZFRva2VuID0gdG9rZW4gPT4ge1xuXHRcdGNvbnN0IG5ld1N0YXRlID0gc3RhdGU7XG5cdFx0bmV3U3RhdGUudG9rZW4gPSB0b2tlbjtcblx0XHRzZXRTdGF0ZShuZXdTdGF0ZSk7XG5cdH07XG5cblx0Y29uc3QgYWRkTmFtZSA9IHVzZXJOYW1lID0+IHtcblx0XHRjb25zdCBuZXdTdGF0ZSA9IHN0YXRlO1xuXHRcdG5ld1N0YXRlLnVzZXJOYW1lID0gdXNlck5hbWU7XG5cdFx0bmV3U3RhdGUuaXNMb2dpbiA9IHRydWU7XG5cdFx0c2V0U3RhdGUobmV3U3RhdGUpO1xuXHR9O1xuXG5cdGNvbnN0IGlzVXNlckF1dGggPSBhc3luYyB0b2tlbiA9PiB7XG5cdFx0Y29uc3QgaGVhZGVyID0ge1xuXHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHQneC1hdXRoLXRva2VuJzogdG9rZW4sXG5cdFx0XHR9LFxuXHRcdH07XG5cblx0XHRjb25zdCByZXMgPSBBeGlvcy5nZXQoJ2h0dHBzOi8vYXBpLm1vbmkucGUvYXBpL2F1dGgnLCBoZWFkZXIpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0PFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBhZGRUb2tlbiwgaXNVc2VyQXV0aCwgYWRkTmFtZSB9fT5cblx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHQ8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTtcbmV4cG9ydCBjb25zdCBDb25zdW1lciA9IFVzZXJDb250ZXh0LkNvbnN1bWVyO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IGFsZXJ0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcblxuXG5leHBvcnQgZGVmYXVsdCBhbGVydENvbnRleHQ7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkPXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91cmw9cmVxdWlyZShcInVybFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7dmFyIF9yb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yb3V0ZXJcIikpO3ZhciBfcm91dGVyMj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7ZnVuY3Rpb24gaXNMb2NhbChocmVmKXt2YXIgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7dmFyIG9yaWdpbj0oMCxfdXJsLnBhcnNlKSgoMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCksZmFsc2UsdHJ1ZSk7cmV0dXJuIXVybC5ob3N0fHx1cmwucHJvdG9jb2w9PT1vcmlnaW4ucHJvdG9jb2wmJnVybC5ob3N0PT09b3JpZ2luLmhvc3Q7fWZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmMpe3ZhciBsYXN0SHJlZj1udWxsO3ZhciBsYXN0QXM9bnVsbDt2YXIgbGFzdFJlc3VsdD1udWxsO3JldHVybihocmVmLGFzKT0+e2lmKGxhc3RSZXN1bHQmJmhyZWY9PT1sYXN0SHJlZiYmYXM9PT1sYXN0QXMpe3JldHVybiBsYXN0UmVzdWx0O312YXIgcmVzdWx0PWZvcm1hdEZ1bmMoaHJlZixhcyk7bGFzdEhyZWY9aHJlZjtsYXN0QXM9YXM7bGFzdFJlc3VsdD1yZXN1bHQ7cmV0dXJuIHJlc3VsdDt9O31mdW5jdGlvbiBmb3JtYXRVcmwodXJsKXtyZXR1cm4gdXJsJiZ0eXBlb2YgdXJsPT09J29iamVjdCc/KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKSh1cmwpOnVybDt9dmFyIG9ic2VydmVyO3ZhciBsaXN0ZW5lcnM9bmV3IE1hcCgpO3ZhciBJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCc/d2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyOm51bGw7dmFyIHByZWZldGNoZWQ9e307ZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKXsvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuaWYob2JzZXJ2ZXIpe3JldHVybiBvYnNlcnZlcjt9Ly8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG5pZighSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpe3JldHVybiB1bmRlZmluZWQ7fXJldHVybiBvYnNlcnZlcj1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcz0+e2VudHJpZXMuZm9yRWFjaChlbnRyeT0+e2lmKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpe3JldHVybjt9dmFyIGNiPWxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KTtpZihlbnRyeS5pc0ludGVyc2VjdGluZ3x8ZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8+MCl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7bGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpO2NiKCk7fX0pO30se3Jvb3RNYXJnaW46JzIwMHB4J30pO312YXIgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pnt2YXIgb2JzZXJ2ZXI9Z2V0T2JzZXJ2ZXIoKTtpZighb2JzZXJ2ZXIpe3JldHVybigpPT57fTt9b2JzZXJ2ZXIub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLnNldChlbCxjYik7cmV0dXJuKCk9Pnt0cnl7b2JzZXJ2ZXIudW5vYnNlcnZlKGVsKTt9Y2F0Y2goZXJyKXtjb25zb2xlLmVycm9yKGVycik7fWxpc3RlbmVycy5kZWxldGUoZWwpO307fTtjbGFzcyBMaW5rIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMucD12b2lkIDA7dGhpcy5jbGVhblVwTGlzdGVuZXJzPSgpPT57fTt0aGlzLmZvcm1hdFVybHM9bWVtb2l6ZWRGb3JtYXRVcmwoKGhyZWYsYXNIcmVmKT0+e3JldHVybntocmVmOigwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoaHJlZikpLGFzOmFzSHJlZj8oMCxfcm91dGVyMi5hZGRCYXNlUGF0aCkoZm9ybWF0VXJsKGFzSHJlZikpOmFzSHJlZn07fSk7dGhpcy5saW5rQ2xpY2tlZD1lPT57dmFye25vZGVOYW1lLHRhcmdldH09ZS5jdXJyZW50VGFyZ2V0O2lmKG5vZGVOYW1lPT09J0EnJiYodGFyZ2V0JiZ0YXJnZXQhPT0nX3NlbGYnfHxlLm1ldGFLZXl8fGUuY3RybEtleXx8ZS5zaGlmdEtleXx8ZS5uYXRpdmVFdmVudCYmZS5uYXRpdmVFdmVudC53aGljaD09PTIpKXsvLyBpZ25vcmUgY2xpY2sgZm9yIG5ldyB0YWIgLyBuZXcgd2luZG93IGJlaGF2aW9yXG5yZXR1cm47fXZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2lmKCFpc0xvY2FsKGhyZWYpKXsvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG5yZXR1cm47fXZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbnZhcntzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9Z2V0UGF0aHMoKXt2YXJ7cGF0aG5hbWV9PXdpbmRvdy5sb2NhdGlvbjt2YXJ7aHJlZjpwYXJzZWRIcmVmLGFzOnBhcnNlZEFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO3ZhciByZXNvbHZlZEhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtyZXR1cm5bcmVzb2x2ZWRIcmVmLHBhcnNlZEFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUscGFyc2VkQXMpOnJlc29sdmVkSHJlZl07fWhhbmRsZVJlZihyZWYpe2lmKHRoaXMucCYmSW50ZXJzZWN0aW9uT2JzZXJ2ZXImJnJlZiYmcmVmLnRhZ05hbWUpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO3ZhciBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFt0aGlzLmdldFBhdGhzKCkuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV07aWYoIWlzUHJlZmV0Y2hlZCl7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX19Ly8gVGhlIGZ1bmN0aW9uIGlzIG1lbW9pemVkIHNvIHRoYXQgbm8gZXh0cmEgbGlmZWN5Y2xlcyBhcmUgbmVlZGVkXG4vLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbnByZWZldGNoKG9wdGlvbnMpe2lmKCF0aGlzLnB8fHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJylyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxudmFyIHBhdGhzPXRoaXMuZ2V0UGF0aHMoKTsvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4vLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3Rcbi8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuX3JvdXRlci5kZWZhdWx0LnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8wXSxwYXRoc1svKiBhc1BhdGggKi8xXSxvcHRpb25zKS5jYXRjaChlcnI9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Ly8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xudGhyb3cgZXJyO319KTtwcmVmZXRjaGVkW3BhdGhzLmpvaW4oLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiclJyldPXRydWU7fXJlbmRlcigpe3ZhcntjaGlsZHJlbn09dGhpcy5wcm9wczt2YXJ7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTsvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbmlmKHR5cGVvZiBjaGlsZHJlbj09PSdzdHJpbmcnKXtjaGlsZHJlbj0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIixudWxsLGNoaWxkcmVuKTt9Ly8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG52YXIgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO3ZhciBwcm9wcz17cmVmOmVsPT57dGhpcy5oYW5kbGVSZWYoZWwpO2lmKGNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmKXtpZih0eXBlb2YgY2hpbGQucmVmPT09J2Z1bmN0aW9uJyljaGlsZC5yZWYoZWwpO2Vsc2UgaWYodHlwZW9mIGNoaWxkLnJlZj09PSdvYmplY3QnKXtjaGlsZC5yZWYuY3VycmVudD1lbDt9fX0sb25Nb3VzZUVudGVyOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9dGhpcy5wcmVmZXRjaCh7cHJpb3JpdHk6dHJ1ZX0pO30sb25DbGljazplPT57aWYoY2hpbGQucHJvcHMmJnR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25DbGljayhlKTt9aWYoIWUuZGVmYXVsdFByZXZlbnRlZCl7dGhpcy5saW5rQ2xpY2tlZChlKTt9fX07Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbmlmKHRoaXMucHJvcHMucGFzc0hyZWZ8fGNoaWxkLnR5cGU9PT0nYScmJiEoJ2hyZWYnaW4gY2hpbGQucHJvcHMpKXtwcm9wcy5ocmVmPWFzfHxocmVmO30vLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4vLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKXt2YXIgcmV3cml0ZVVybEZvck5leHRFeHBvcnQ9cmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JykucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7aWYocHJvcHMuaHJlZiYmdHlwZW9mIF9fTkVYVF9EQVRBX18hPT0ndW5kZWZpbmVkJyYmX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0KXtwcm9wcy5ocmVmPXJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpO319cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCxwcm9wcyk7fX1pZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3ZhciB3YXJuPSgwLF91dGlscy5leGVjT25jZSkoY29uc29sZS5lcnJvcik7Ly8gVGhpcyBtb2R1bGUgZ2V0cyByZW1vdmVkIGJ5IHdlYnBhY2suSWdub3JlUGx1Z2luXG52YXIgUHJvcFR5cGVzPXJlcXVpcmUoJ3Byb3AtdHlwZXMnKTt2YXIgZXhhY3Q9cmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpOy8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbkxpbmsucHJvcFR5cGVzPWV4YWN0KHtocmVmOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsYXM6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkscHJlZmV0Y2g6UHJvcFR5cGVzLmJvb2wscmVwbGFjZTpQcm9wVHlwZXMuYm9vbCxzaGFsbG93OlByb3BUeXBlcy5ib29sLHBhc3NIcmVmOlByb3BUeXBlcy5ib29sLHNjcm9sbDpQcm9wVHlwZXMuYm9vbCxjaGlsZHJlbjpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuZWxlbWVudCwocHJvcHMscHJvcE5hbWUpPT57dmFyIHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovdmFyIHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbnZhciB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnLCdpc0ZhbGxiYWNrJywnYmFzZVBhdGgnXTt2YXIgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO3ZhciBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe3ZhciByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JvdXRlckV2ZW50cy5mb3JFYWNoKGV2ZW50PT57c2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57X3JvdXRlcjIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsZnVuY3Rpb24oKXt2YXIgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO3ZhciBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXt2YXIgbWVzc2FnZT0nTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicrJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJzt0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7fXJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO30vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbnZhciBfZGVmYXVsdD1zaW5nbGV0b25Sb3V0ZXI7Ly8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtmdW5jdGlvbiB1c2VSb3V0ZXIoKXtyZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTt9Ly8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbnZhciBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7dmFyIF9yb3V0ZXI9cm91dGVyO3ZhciBpbnN0YW5jZT17fTtmb3IodmFyIHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPU9iamVjdC5hc3NpZ24oe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3ZhciBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIG1pdHQoKSB7XG4gICAgY29uc3QgYWxsID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBvbih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcik7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZih0eXBlLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZW1pdCh0eXBlLCAuLi5ldnRzKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICAoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIoLi4uZXZ0cyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0ID0gbWl0dDtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuY29uc3QgbWl0dF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBpc19keW5hbWljXzEgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xuY29uc3Qgcm91dGVfbWF0Y2hlcl8xID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtbWF0Y2hlclwiKTtcbmNvbnN0IHJvdXRlX3JlZ2V4XzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSAhPT0gMCA/IGJhc2VQYXRoICsgcGF0aCA6IHBhdGg7XG59XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICAgICAgPyBwYXRoLnN1YnN0cihiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xuICAgICAgICA6IHBhdGg7XG59XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5mdW5jdGlvbiB0b1JvdXRlKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJztcbn1cbmNvbnN0IHByZXBhcmVSb3V0ZSA9IChwYXRoKSA9PiB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aCk7XG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgaXNTZXJ2ZXJSZW5kZXIsIGNiKSB7XG4gICAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMTtcbiAgICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIGZldGNoKHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgICBgL19uZXh0L2RhdGEvJHtfX05FWFRfREFUQV9fLmJ1aWxkSWR9JHtkZWxCYXNlUGF0aChwYXRobmFtZSl9Lmpzb25gKSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICB9KSwge1xuICAgICAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICBpZiAoLS1hdHRlbXB0cyA+IDAgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGE7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGVyci5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUic7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZSwgcXVlcnksIGFzLCB7IGluaXRpYWxQcm9wcywgcGFnZUxvYWRlciwgQXBwLCB3cmFwQXBwLCBDb21wb25lbnQsIGVyciwgc3Vic2NyaXB0aW9uLCBpc0ZhbGxiYWNrLCB9KSB7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge307XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgICAgICAgICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgICAgICAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgICAgICAgICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgdXRpbHNfMS5nZXRVUkwoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgICAgICAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICAgICAgICAgIGlmIChlLnN0YXRlICYmXG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciAmJlxuICAgICAgICAgICAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICAgICAgICAgICAgdXJsXzEucGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgICAgICAgICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICAgICAgICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBhcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdgcG9wc3RhdGVgIGV2ZW50IHRyaWdnZXJlZCBidXQgYGV2ZW50LnN0YXRlYCBkaWQgbm90IGhhdmUgYHVybGAgb3IgYGFzYCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcG9wc3RhdGUtc3RhdGUtZW1wdHknKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZSh1cmxfMS5wYXJzZShhc1BhdGgpLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgICAgICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgICAgICAgICAgICA6IGZldGNoTmV4dERhdGEocGF0aG5hbWUsIG51bGwsIHRoaXMuaXNTc3IsIGRhdGEgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U2VydmVyRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdXJsXzEucGFyc2UoYXNQYXRoLCB0cnVlKTtcbiAgICAgICAgICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1Nzcik7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSB7fTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHsgQ29tcG9uZW50OiBBcHAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAgICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICAgICAgdGhpcy5hc1BhdGggPVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgaXNfZHluYW1pY18xLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSwgYXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gICAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKHJvdXRlLCBtb2QpIHtcbiAgICAgICAgY29uc3QgQ29tcG9uZW50ID0gbW9kLmRlZmF1bHQgfHwgbW9kO1xuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXTtcbiAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksIHsgQ29tcG9uZW50LCBfX05fU1NHOiBtb2QuX19OX1NTRywgX19OX1NTUDogbW9kLl9fTl9TU1AgfSk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhO1xuICAgICAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICAgICAgaWYgKHJvdXRlID09PSAnL19hcHAnKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgICAqL1xuICAgIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICAgKi9cbiAgICBwdXNoKHVybCwgYXMgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHJlcGxhY2UodXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNoYW5nZShtZXRob2QsIF91cmwsIF9hcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICAgICAgaWYgKHV0aWxzXzEuU1QpIHtcbiAgICAgICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAgICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsO1xuICAgICAgICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXM7XG4gICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCh1cmwpO1xuICAgICAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcyk7XG4gICAgICAgICAgICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gICAgICAgICAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnQ7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgICAgICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbiAgICAgICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGFzKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgICAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9ucztcbiAgICAgICAgICAgIGlmIChpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gdXJsXzEucGFyc2UoYXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSByb3V0ZV9yZWdleF8xLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByb3V0ZV9tYXRjaGVyXzEuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihwYXJhbSA9PiAhcXVlcnlbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobmV3IEVycm9yKGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2ApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpO1xuICAgICAgICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4ocm91dGVJbmZvID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcyk7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgdXRpbHNfMS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgICAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBoYW5kbGVFcnJvciA9IChlcnIsIGxvYWRFcnJvckZhaWwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICAgICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXM7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIGdpcEVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzID0+IHJlc29sdmUoe1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICAgIH0pLCByZWplY3QpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGEoKCkgPT4gX19OX1NTR1xuICAgICAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICB9KSkudGhlbihwcm9wcyA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpO1xuICAgIH1cbiAgICBzZXQocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHRoaXMubm90aWZ5KGRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAgICovXG4gICAgYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XG4gICAgICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgICAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoO1xuICAgIH1cbiAgICBzY3JvbGxUb0hhc2goYXMpIHtcbiAgICAgICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAgICovXG4gICAgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHVybF8xLnBhcnNlKHVybCk7XG4gICAgICAgICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSk7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgICAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7XG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgKTtcbiAgICAgICAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRSZXN1bHQ7XG4gICAgfVxuICAgIF9nZXREYXRhKGZuKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEubG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhYm9ydENvbXBvbmVudExvYWQoYXMpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKTtcbiAgICAgICAgICAgIGUuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKTtcbiAgICAgICAgICAgIHRoaXMuY2xjKCk7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbm90aWZ5KGRhdGEpIHtcbiAgICAgICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGVyO1xuUm91dGVyLmV2ZW50cyA9IG1pdHRfMS5kZWZhdWx0KCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztcbmZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlKSB7XG4gICAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7XG59XG5leHBvcnRzLmlzRHluYW1pY1JvdXRlID0gaXNEeW5hbWljUm91dGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KSB7XG4gICAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4O1xuICAgIHJldHVybiAocGF0aG5hbWUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGUgPSAocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoXykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO1xuICAgICAgICAgICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdO1xuICAgICAgICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdO1xuICAgICAgICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICAgICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKGVudHJ5ID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogZGVjb2RlKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xufVxuZXhwb3J0cy5nZXRSb3V0ZU1hdGNoZXIgPSBnZXRSb3V0ZU1hdGNoZXI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpO1xufVxuZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpIHtcbiAgICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gICAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKTtcbiAgICBjb25zdCBncm91cHMgPSB7fTtcbiAgICBsZXQgZ3JvdXBJbmRleCA9IDE7XG4gICAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgIGdyb3Vwc1skMVxuICAgICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9O1xuICAgICAgICByZXR1cm4gaXNDYXRjaEFsbCA/ICcvKC4rPyknIDogJy8oW14vXSs/KSc7XG4gICAgfSk7XG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlO1xuICAgIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAgIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZywgKF8sICQxKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpO1xuICAgICAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKTtcbiAgICAgICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHsgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLCBncm91cHMgfSwgKG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICAgID8ge1xuICAgICAgICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgICAgICB9XG4gICAgICAgIDoge30pKTtcbn1cbmV4cG9ydHMuZ2V0Um91dGVSZWdleCA9IGdldFJvdXRlUmVnZXg7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQ7XG4gICAgcmV0dXJuICgoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbn1cbmV4cG9ydHMuZXhlY09uY2UgPSBleGVjT25jZTtcbmZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICAgIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb247XG4gICAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YDtcbn1cbmV4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbjtcbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTtcbn1cbmV4cG9ydHMuZ2V0VVJMID0gZ2V0VVJMO1xuZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgICAgID8gQ29tcG9uZW50XG4gICAgICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbn1cbmV4cG9ydHMuZ2V0RGlzcGxheU5hbWUgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGlzUmVzU2VudChyZXMpIHtcbiAgICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudDtcbn1cbmV4cG9ydHMuaXNSZXNTZW50ID0gaXNSZXNTZW50O1xuYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wcyhBcHAsIGN0eCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoKF9hID0gQXBwLnByb3RvdHlwZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmdldEluaXRpYWxQcm9wcykge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYDtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gICAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcyk7XG4gICAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgIH1cbiAgICBpZiAoIXByb3BzKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKEFwcCl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYDtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGAke2dldERpc3BsYXlOYW1lKEFwcCl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wcztcbn1cbmV4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcyA9IGxvYWRHZXRJbml0aWFsUHJvcHM7XG5leHBvcnRzLnVybE9iamVjdEtleXMgPSBbXG4gICAgJ2F1dGgnLFxuICAgICdoYXNoJyxcbiAgICAnaG9zdCcsXG4gICAgJ2hvc3RuYW1lJyxcbiAgICAnaHJlZicsXG4gICAgJ3BhdGgnLFxuICAgICdwYXRobmFtZScsXG4gICAgJ3BvcnQnLFxuICAgICdwcm90b2NvbCcsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2xhc2hlcycsXG5dO1xuZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChleHBvcnRzLnVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHVybF8xLmZvcm1hdCh1cmwsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5mb3JtYXRXaXRoVmFsaWRhdGlvbiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uO1xuZXhwb3J0cy5TUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCc7XG5leHBvcnRzLlNUID0gZXhwb3J0cy5TUCAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbic7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBVc2VyQ29udGV4dCBmcm9tICcuLi9jb250ZXh0L1VzZXJDb250ZXh0JztcclxuaW1wb3J0IE5hdmJhcjIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIyJztcclxuaW1wb3J0IFRvcGJhciBmcm9tICcuLi9jb21wb25lbnRzL3RvcGJhcic7XHJcbmltcG9ydCBGb290ZXIyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyMic7XHJcbmltcG9ydCBEYXRhVGFibGUsIHsgY3JlYXRlVGhlbWUgfSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NhcmRcIjtcclxuaW1wb3J0IFNvcnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dEb3dud2FyZFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jcmVhdGVUaGVtZSgnc29sYXJpemVkJywge1xyXG5cdHRleHQ6IHtcclxuXHQgIHByaW1hcnk6ICd3aGl0ZScsXHJcblx0ICBzZWNvbmRhcnk6ICd3aGl0ZScsXHJcblx0fSxcclxuXHRiYWNrZ3JvdW5kOiB7XHJcblx0ICBkZWZhdWx0OiAnIzIyMycsXHJcblx0fSxcclxuXHRkaXZpZGVyOiB7XHJcblx0ICBkZWZhdWx0OiAnIzc5ZicsXHJcblx0fSxcclxufSk7XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlRyYWNraW5nIE51bWJlclwiLFxyXG4gICAgICBzZWxlY3Rvcjogcm93ID0+IHJvdy50cmFja2luZ051bSxcclxuICAgICAgc29ydGFibGU6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIk5hbWVcIixcclxuICAgICAgc2VsZWN0b3I6IHJvdyA9PiByb3cuZmlsZW5hbWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlN1aXRlIElEXCIsXHJcbiAgICAgIHNlbGVjdG9yOiByb3cgPT4gcm93LnN1aXRlSWQsXHJcbiAgICAgIC8vc29ydGFibGU6IHRydWUsXHJcbiAgICAgIC8vcmlnaHQ6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiQWN0aW9uXCIsXHJcbiAgICAgIHNlbGVjdG9yOiByb3cgPT4gcm93LmFjdGlvbiA+IDAgPyAnYWN0aXZlJyA6ICdub24gYWN0aXZlJyxcclxuICAgICAgLy9yaWdodDogdHJ1ZVxyXG4gICAgfVxyXG5dO1xyXG4gIFxyXG5jb25zdCBkYXJrVGhlbWUgPSB7XHJcbiAgICB0aXRsZToge1xyXG5cdFx0Zm9udFNpemU6ICcyMnB4JyxcclxuXHRcdGZvbnRDb2xvcjogJyNGRkZGRkYnLFxyXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzM2MzY0MCcsXHJcbiAgICB9LFxyXG4gICAgY29udGV4dE1lbnU6IHtcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyNFOTFFNjMnLFxyXG5cdFx0Zm9udENvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICB9LFxyXG4gICAgaGVhZGVyOiB7XHJcblx0XHRmb250U2l6ZTogJzEycHgnLFxyXG5cdFx0Zm9udENvbG9yOiAnI0ZGRkZGRicsXHJcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICcjMzYzNjQwJyxcclxuICAgIH0sXHJcbiAgICByb3dzOiB7XHJcblx0XHRmb250Q29sb3I6ICcjRkZGRkZGJyxcclxuXHRcdGJhY2tncm91bmRDb2xvcjogJyMzNjM2NDAnLFxyXG5cdFx0Ym9yZGVyQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC4xMiknLFxyXG5cdFx0aG92ZXJGb250Q29sb3I6ICdibGFjaycsXHJcblx0XHRob3ZlckJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjI0KScsXHJcbiAgICB9LFxyXG4gICAgY2VsbHM6IHtcclxuICAgICAgXHRjZWxsUGFkZGluZzogJzEwcHgnLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGN1c3RvbVN0eWxlcyA9IHtcclxuICAgIGhlYWRDZWxsczoge1xyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICAgICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuXHRcdGJvcmRlcjogJzFweCBzb2xpZCAjYTE5Nzk3J1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGNlbGxzOiB7XHJcbiAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuXHRcdGJvcmRlcjogJ25vbmUnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIGNvbG9yOiAnYmxhY2snLFxyXG5cdFx0YmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxufTtcclxuICBcclxuZnVuY3Rpb24gVGFibGUoKSB7XHJcblx0bGV0IFt0b3RhbFN1cHBseURhdGEsIHNldFRvdGFsU3VwcGx5RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cdHVzZUVmZmVjdChhc3luYygpID0+IHtcclxuXHRcdGF3YWl0XHJcblx0XHRheGlvc1xyXG5cdFx0LmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VzZXJzL2dldGludm9pY2VzJywge2lkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNoaXAtdXNlcklkXCIpfSlcclxuXHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblx0XHRcdGlmKHJlc3BvbnNlLmRhdGEgIT0gJ2Vycm9yJyl7XHJcblx0XHRcdFx0c2V0VG90YWxTdXBwbHlEYXRhKCByZXNwb25zZS5kYXRhICk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2codG90YWxTdXBwbHlEYXRhKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LCBbXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8Q2FyZD5cclxuXHRcdFx0PERhdGFUYWJsZVxyXG5cdFx0XHRcdGNvbHVtbnMgPSB7Y29sdW1uc31cclxuXHRcdFx0XHRkYXRhID0ge3RvdGFsU3VwcGx5RGF0YX1cclxuXHRcdFx0XHRkZWZhdWx0U29ydEZpZWxkSWQgPSB7MX1cclxuXHRcdFx0XHRzb3J0SWNvbiA9IHs8U29ydEljb24gLz59XHJcblx0XHRcdFx0cGFnaW5hdGlvblxyXG5cdFx0XHRcdHRoZW1lID0gXCJzb2xhcml6ZWRcIlxyXG5cdFx0XHRcdGN1c3RvbVN0eWxlcyA9IHsgY3VzdG9tU3R5bGVzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvQ2FyZD5cclxuXHQpO1xyXG59XHJcblxyXG5cclxuY29uc3QgaW52b2ljZSA9IHByb3BzID0+IHtcclxuXHRjb25zdCB7IHN0YXRlLCBpc1VzZXJBdXRoIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcblx0Y29uc3QgW2lzTG9naW4sIHNldElzTG9naW5dID0gdXNlU3RhdGUoJycpO1xyXG5cdFxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRpZihkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXYtbGlzdCBkYXNoYm9hcmQnKS5sZW5ndGggPiAwKXtcclxuXHRcdFx0Zm9yKGxldCBpPTA7IGk8ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2LWxpc3QgZGFzaGJvYXJkJykubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXYtbGlzdCBkYXNoYm9hcmQnKVtpXS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSwgW10pO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PExheW91dD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYXBwZWFyLWFuaW1hdGUnPlxyXG5cdFx0XHRcdFx0PE5hdmJhcjIgLz5cclxuXHRcdFx0XHRcdDxUb3BiYXIgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxPlVwbG9hZGVkIEludm9pY2VzPC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8VGFibGUgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxGb290ZXIyIC8+XHJcblx0XHRcdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0XHRcdGRpdixcclxuXHRcdFx0XHRcdFx0c2VjdGlvbiB7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0LmJhbm5lciB7XHJcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDEwMHB4O1xyXG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQuYmFubmVyIGgxIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI4cHg7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICMxZTQ4N2M7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR0ciB7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dGQge1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNhMTk3OTcgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L0xheW91dD5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnZvaWNlO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9DYXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9BcnJvd0Rvd253YXJkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzLWV4YWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGEtdGFibGUtY29tcG9uZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIndvd2pzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=