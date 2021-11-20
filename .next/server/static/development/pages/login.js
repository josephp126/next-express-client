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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\work\next-express\client\pages\login.js */"./pages/login.js");


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

/***/ "wowjs":
/*!************************!*\
  !*** external "wowjs" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("wowjs");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FsZXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3RlcjIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbjIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXZiYXIyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdG9wYmFyLmpzIiwid2VicGFjazovLy8uL2NvbnRleHQvYWxlcnQvYWxlcnRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL21pdHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ3b3dqc1wiIl0sIm5hbWVzIjpbIkFsZXJ0cyIsImFsZXJ0Q29udGV4dCIsInVzZUNvbnRleHQiLCJBbGVydENvbnRleHQiLCJhbGVydHMiLCJsZW5ndGgiLCJpZCIsInR5cGUiLCJtc2ciLCJGb290ZXIiLCJfX2h0bWwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJGb290ZXIyIiwiaXNTZXJ2ZXIiLCJXT1ciLCJyZXF1aXJlIiwiTGF5b3V0IiwicHJvcHMiLCJ1c2VFZmZlY3QiLCJpbml0IiwiY2hpbGRyZW4iLCJvdmVycmlkZSIsImNzcyIsIkF3ZXNvbWVDb21wb25lbnQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJsb2FkaW5nIiwicmVuZGVyIiwiTG9naW4iLCJyb3V0ZXIiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwidXNlU3RhdGUiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwic2V0QWxlcnQiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJfb25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwZXJzaXN0IiwiYm9keSIsImVtYWlsIiwicmVzIiwiQXhpb3MiLCJwb3N0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwidG9rZW4iLCJuYW1lIiwicGF0aG5hbWUiLCJyZWxvYWQiLCJSb3V0ZXIiLCJwdXNoIiwidG9nZ2xlUGFzc3dvcmQiLCJfaGFuZGxlVXNlck5hbWVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsIl9oYW5kbGVQYXNzd29yZENoYW5nZSIsIm1hcmdpbkJvdHRvbSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIndpdGhSb3V0ZXIiLCJOYXZiYXIiLCJoYW5kbGVMb2dvdXQiLCJDb29raWVzIiwicmVtb3ZlIiwiZ2V0SXRlbSIsImlzbG9naW4iLCJnZXREYXRhIiwiaGVhZGVyIiwiaGVhZGVycyIsImdldCIsIk5hdmJhcjIiLCJzZXRJc0xvZ2luIiwic2V0TmFtZSIsImNvbyIsInVuZGVmaW5lZCIsImVycm9yIiwiZm9udFNpemUiLCJTdWJzY3JpYmUiLCJjcmVhdGVDb250ZXh0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3VybCIsIl91dGlscyIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsImlzTG9jYWwiLCJ1cmwiLCJwYXJzZSIsIm9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwiaG9zdCIsInByb3RvY29sIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRGdW5jIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRVcmwiLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsIm9ic2VydmVyIiwibGlzdGVuZXJzIiwiTWFwIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJwcmVmZXRjaGVkIiwiZ2V0T2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZm9yRWFjaCIsImVudHJ5IiwiaGFzIiwiY2IiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwidW5vYnNlcnZlIiwiZGVsZXRlIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsImVsIiwib2JzZXJ2ZSIsInNldCIsImVyciIsIkxpbmsiLCJwIiwiY2xlYW5VcExpc3RlbmVycyIsImZvcm1hdFVybHMiLCJhc0hyZWYiLCJhZGRCYXNlUGF0aCIsImxpbmtDbGlja2VkIiwibm9kZU5hbWUiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJyZXNvbHZlIiwic2Nyb2xsIiwiaW5kZXhPZiIsInJlcGxhY2UiLCJzaGFsbG93IiwidGhlbiIsInN1Y2Nlc3MiLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiZm9jdXMiLCJwcmVmZXRjaCIsIndhcm4iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImdldFBhdGhzIiwicGFyc2VkSHJlZiIsInBhcnNlZEFzIiwicmVzb2x2ZWRIcmVmIiwiaGFuZGxlUmVmIiwicmVmIiwidGFnTmFtZSIsImlzUHJlZmV0Y2hlZCIsImpvaW4iLCJvcHRpb25zIiwicGF0aHMiLCJjYXRjaCIsImNyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImN1cnJlbnQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwicGFzc0hyZWYiLCJwcm9jZXNzIiwiY2xvbmVFbGVtZW50IiwiZXhlY09uY2UiLCJQcm9wVHlwZXMiLCJleGFjdCIsInByb3BUeXBlcyIsIm9uZU9mVHlwZSIsInN0cmluZyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJib29sIiwiZWxlbWVudCIsInByb3BOYW1lIiwiX2RlZmF1bHQiLCJ1c2VSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJjcmVhdGVSb3V0ZXIiLCJOZXh0Um91dGVyIiwiX3JvdXRlckNvbnRleHQiLCJfd2l0aFJvdXRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwiYXJndW1lbnRzIiwiZXZlbnQiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJFcnJvciIsIlJvdXRlckNvbnRleHQiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibWl0dCIsImFsbCIsImNyZWF0ZSIsImhhbmRsZXIiLCJvZmYiLCJzcGxpY2UiLCJlbWl0IiwiZXZ0cyIsInNsaWNlIiwibWFwIiwiX19pbXBvcnREZWZhdWx0IiwibW9kIiwidXJsXzEiLCJtaXR0XzEiLCJ1dGlsc18xIiwiaXNfZHluYW1pY18xIiwicm91dGVfbWF0Y2hlcl8xIiwicm91dGVfcmVnZXhfMSIsImJhc2VQYXRoIiwicGF0aCIsImRlbEJhc2VQYXRoIiwic3Vic3RyIiwidG9Sb3V0ZSIsInByZXBhcmVSb3V0ZSIsImZldGNoTmV4dERhdGEiLCJxdWVyeSIsImlzU2VydmVyUmVuZGVyIiwiYXR0ZW1wdHMiLCJnZXRSZXNwb25zZSIsImZldGNoIiwiX19ORVhUX0RBVEFfXyIsImJ1aWxkSWQiLCJjcmVkZW50aWFscyIsIm9rIiwic3RhdHVzIiwianNvbiIsImNvZGUiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJzZGMiLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJnZXRVUkwiLCJpc1NzciIsImFzUGF0aCIsIl9icHMiLCJfZ2V0U3RhdGljRGF0YSIsIlByb21pc2UiLCJfZ2V0U2VydmVyRGF0YSIsInJvdXRlIiwiY29tcG9uZW50cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiaXNEeW5hbWljUm91dGUiLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJfcmV3cml0ZVVybEZvck5leHRFeHBvcnQiLCJ1cGRhdGUiLCJuZXdEYXRhIiwibm90aWZ5IiwiYmFjayIsImhpc3RvcnkiLCJjaGFuZ2UiLCJtZXRob2QiLCJfYXMiLCJyZWplY3QiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwidXJsSXNOZXciLCJhc1BhdGhuYW1lIiwicm91dGVSZWdleCIsImdldFJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwiZ2V0Um91dGVNYXRjaGVyIiwibWlzc2luZ1BhcmFtcyIsImtleXMiLCJncm91cHMiLCJmaWx0ZXIiLCJwYXJhbSIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsImNhbmNlbGxlZCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsImNhY2hlZFJvdXRlSW5mbyIsImhhbmRsZUVycm9yIiwibG9hZEVycm9yRmFpbCIsImZldGNoQ29tcG9uZW50IiwicGFnZSIsImdpcEVyciIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic3BsaXQiLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwcmVmZXRjaERhdGEiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJURVNUX1JPVVRFIiwidGVzdCIsInJlIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIl8iLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJtIiwicG9zIiwicmVwZWF0IiwiZXNjYXBlUmVnZXgiLCJzdHIiLCJub3JtYWxpemVkUm91dGUiLCJlc2NhcGVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwiJDEiLCJpc0NhdGNoQWxsIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwidXNlZCIsImhvc3RuYW1lIiwicG9ydCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9hIiwicHJvdG90eXBlIiwicGFnZVByb3BzIiwidXJsT2JqZWN0S2V5cyIsImZvcm1hdCIsIlNQIiwibWVhc3VyZSIsImxvZ2luIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0U7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Ozs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbGVydENvbnRleHQgZnJvbSAnLi4vY29udGV4dC9hbGVydC9hbGVydENvbnRleHQnO1xuXG5jb25zdCBBbGVydHMgPSAoKSA9PiB7XG5cdGNvbnN0IGFsZXJ0Q29udGV4dCA9IHVzZUNvbnRleHQoQWxlcnRDb250ZXh0KTtcblx0Ly8gY29uc29sZS5sb2coYWxlcnRDb250ZXh0LmFsZXJ0cyk7XG5cdHJldHVybiAoXG5cdFx0YWxlcnRDb250ZXh0LmFsZXJ0cy5sZW5ndGggPiAwICYmIChcblx0XHRcdDxkaXZcblx0XHRcdFx0a2V5PXthbGVydENvbnRleHQuYWxlcnRzWzBdLmlkfVxuXHRcdFx0XHRjbGFzc05hbWU9e2BtdC00IGFsZXJ0IGFsZXJ0LSR7YWxlcnRDb250ZXh0LmFsZXJ0c1swXS50eXBlfWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtaW5mby1jaXJjbGUnIC8+eycgJ31cblx0XHRcdFx0PHN0cm9uZz5BbGVydGE6IHthbGVydENvbnRleHQuYWxlcnRzWzBdLm1zZ308L3N0cm9uZz5cblx0XHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogNzVweDtcblx0XHRcdFx0XHRcdHotaW5kZXg6IDk5OTk5OTtcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiBhdXRvO1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xuXHRcdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdFx0bGVmdDogMDtcblx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI2U1NTcyOTtcblx0XHRcdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuXHRcdFx0XHRcdFx0Ly8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMzAsIDE2NSwgNjAsIDEpIDQ3JSwgcmdiYSgyMzAsIDE2NSwgNjAsIDEpIDAlLCByZ2JhKDIyOSwgODAsIDM5LCAxKSAxMDAlKTtcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT0ncGFnZS1mb290ZXIgZm9udC1zbWFsbCBtZGItY29sb3IgbGlnaHRlbi0zIHB0LTEnPlxuXHRcdFx0PGRpdlxuXHRcdFx0XHRkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuXHRcdFx0XHRcdF9faHRtbDpcblx0XHRcdFx0XHRcdCc8IS0tIE1hZGUgd2l0aCDimaUgYnkgUm9zaGFuIE1pc2hyYSBhbmQgRGV2IEFyb3JhIEdpdGh1YiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9yaW5lbSBodHRwczovL2dpdGh1Yi5jb20vZHIwaWQwMDcgLS0+Jyxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgdGV4dC1tZC1sZWZ0Jz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3Jvdyc+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC00IGNvbC1sZy0zIG1yLWF1dG8gbXktbWQtNCBteS0wIG10LTIgbWItMSc+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHsvKiA8aW1nXG5cdFx0XHRcdFx0XHRcdFx0c3JjPXtyZXF1aXJlKCcnKX1cblx0XHRcdFx0XHRcdFx0XHRhbHQ9Jydcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ltZy1mbHVpZCdcblx0XHRcdFx0XHRcdFx0Lz4gKi99XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHQ8cD5cblx0XHRcdFx0XHRcdFx0RWwgbWVqb3IgdGlwbyBkZSBjYW1iaW8gcGFyYSBjYW1iaWFyIGTDs2xhcmVzIHkgc29sZXMgb25saW5lIGVuXG5cdFx0XHRcdFx0XHRcdExpbWEsIFBlcsO6XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHR7LyogPGhyIGNsYXNzTmFtZT1cImNsZWFyZml4IHctMTAwIGQtbWQtbm9uZVwiPjwvaHI+ICovfVxuXG5cdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nY2xlYXJmaXggdy0xMDAgZC1tZC1ub25lJz48L2hyPlxuXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2NvbC1tZC02IGNvbC1sZy0zIG14LWF1dG8gbXktbWQtNCBteS0xIG10LTEgbWItMSc+XG5cdFx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPSdmb250LXdlaWdodC1ib2xkIHRleHQtdXBwZXJjYXNlIG1iLTInPkNvbnRhY3Q8L2g1PlxuXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdsaXN0LXVuc3R5bGVkJz5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1ob21lIG1yLTEnPjwvaT4gTmV3IFlvcmssIE5ZIDEwMDEyXG5cdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWVudmVsb3BlIG1yLTEnPjwvaT4gaW5mb0BleGFtcGxlLmNvbVxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdDxwPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS1waG9uZSBtci0xJz48L2k+ICsgMDEgMjM0IDU2NyA4OFxuXHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPSdjbGVhcmZpeCB3LTEwMCBkLW1kLW5vbmUnPjwvaHI+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTIgY29sLWxnLTIgdGV4dC1jZW50ZXIgbXgtYXV0byBteS00Jz5cblx0XHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9J2ZvbnQtd2VpZ2h0LWJvbGQgdGV4dC11cHBlcmNhc2UgbWItNCc+Rm9sbG93IFVzPC9oNT5cblxuXHRcdFx0XHRcdFx0PGEgdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J2J0bi1mbG9hdGluZyBidG4tZmInPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWZhY2Vib29rJz48L2k+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0XHRcdDxhIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidG4tZmxvYXRpbmcgYnRuLXR3Jz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS10d2l0dGVyJz48L2k+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0XHRcdDxhIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSdidG4tZmxvYXRpbmcgYnRuLWdwbHVzJz5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPSdmYSBmYS13aGF0c2FwcCc+PC9pPlxuXHRcdFx0XHRcdFx0PC9hPlxuXG5cdFx0XHRcdFx0XHQ8YSB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT0nYnRuLWZsb2F0aW5nIGJ0bi1kcmliYmJsZSc+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtaW5zdGFncmFtJz48L2k+XG5cdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRwLFxuXHRcdFx0XHRcdFx0bGksXG5cdFx0XHRcdFx0XHRkaXYgYSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyLWNvcHlyaWdodCB0ZXh0LWNlbnRlciBweS0xIHBiLTMnPlxuXHRcdFx0XHTCqSAyMDIwIENvcHlyaWdodDpcblx0XHRcdFx0PGEgaHJlZj0nIyc+IE1vbmkucGU8L2E+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Zvb3Rlcj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEZvb3RlcjIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9XCJzbWFsbC1zZWN0aW9uIGJnLW1vcmFkbyBmb290ZXIgcGItMjAgcHQtMjBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWxlZnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy0zIGNvbC1tZC0zIGNvbC14cy02IGNvbC1zbS0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldFwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nc2hpcC1sb2dvJyBzcmM9J2ltYWdlcy9zaGlwX2xvZ28ucG5nJyBhbHQ9J2xvZ28nIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIDMxMzAtNTgwIFNlYWJvcm5lIEF2ZSA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgIFBvcnQgQ29xdWl0bGFtLCBCLCBjLDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgVjNCIE9NMzxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgQ0FOQURBPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICBUZWw6ICsxIDc3OC03MjctMTQyN1xuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTMgY29sLXhzLTYgY29sLW1kLTMgY29sLXNtLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2xlYXJsaXN0IHdpZGdldC1tZW51XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEhvdyBTaGlwQnlNYWlsIFdvcmtzXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFNoaXBwaW5nICYgUHJpY2luZ1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBGQVFcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgU3VwcG9ydFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBBY3R1YWwgdnMsIFZvbHVtZXRyaWMgV2VpZ2h0XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTYgY29sLWxnLTMgY29sLXhzLTYgY29sLW1kLTMgY29sLXNtLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2xlYXJsaXN0IHdpZGdldC1tZW51XCI+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWJvdXQgU2hpcEJ5TWFpbFxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvZmFxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBCZWNvbWUgYSBQYXJ0bmVyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9mYXFcIjtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFNpdGVNYXBcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2ZhcVwiO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+ICAgICAgICAgXG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS02IGNvbC1sZy0zIGNvbC14cy0xMiBjb2wtbWQtMyBjb2wtc20tM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItc29jaWFsLWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic29jaWFsLXRpdGxlXCI+MjAxOSBDb3VudHJ5IEdyb3d0aCBMZWFkZXI8L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvaW50ZXJuYXRpb25hbF9zaGlwLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic29jaWFsLXN1YnRpdGxlXCI+aW50ZXJuYXRpb25hbCBTaGlwcGluZzwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzb2NsYWwtcmV2aWV3XCI+UmVhZCBvdXIgcmV2aWV3cyBvbjo8L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3BnL3NoaXBieW1haWwvcmV2aWV3c1wiO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhY2Vib29rLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9mYWNlYm9va19zaGFyZTEucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3d3dy5zaGlwYnltYWlsLmNvbVwiO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3RydXN0cGlsb3QucG5nXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsZ2luLWxlZnQgZm9vdGVyLXBheXBhbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTMgY29sLXNtLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3d3dy5zaGlwYnltYWlsLmNvbVwiO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9DYW5hZGEtcG9zdC5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3d3dy5zaGlwYnltYWlsLmNvbVwiO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9kaGxfbG9nby5naWZcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3d3dy5zaGlwYnltYWlsLmNvbVwiO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9mZWRleF9sb2dvLmdpZlwiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy50cnVzdHBpbG90LmNvbS9yZXZpZXcvd3d3LnNoaXBieW1haWwuY29tXCI7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL1ROVC1sb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwczovL3d3dy50cnVzdHBpbG90LmNvbS9yZXZpZXcvd3d3LnNoaXBieW1haWwuY29tXCI7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3VzcHNfbG9nby5wbmdcIiAvPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cHM6Ly93d3cudHJ1c3RwaWxvdC5jb20vcmV2aWV3L3d3dy5zaGlwYnltYWlsLmNvbVwiO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBheXBhbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvUGF5cGFsLVZpc2EtZGViaXQucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vd3d3LnRydXN0cGlsb3QuY29tL3Jldmlldy93d3cuc2hpcGJ5bWFpbC5jb21cIjtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWFnZXMvVVBTX2xvZ28ucG5nXCIgLz5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBjb2wtc20tMTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgICA8aDQ+QkxPRzwvaDQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCI+XG5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPjEuIE9ubGluZSBTaG9wcGluZyBmcm9tIGNhbmFkYSBzYXZlcyB5b3UgbW9uZXksIFJlYWxseT88L3A+XG4gICAgICAgICAgICA8cD4yLiBTaGlwIFRvIFBhbmFtYTwvcD5cbiAgICAgICAgICAgIDxwPjMuIFNoaXAgVG8gQXVzdHJhbGlhPC9wPlxuICAgICAgICAgICAgPHA+NC4gU2hpcCBUbyBBcmdlbnRpbmE8L3A+XG4gICAgICAgICAgICA8cD41LiBXaGF0IENBTidUIHlvdSBzaGlwIHRocm91Z2ggeW91ciBDYW5hZGlhbiBQYXJjZWwgRm9yd2FyZGVycyBBZGRyZXNzPzwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0zIGNvbC1zbS02IHBsdXNcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3BsdXNpbWcxMTExMTExLmpwZ1wiIC8+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgRm9yIGV2ZXJ5IGludGVybmF0aW9uYWwgc2hpcG1lbnQuPGJyPjwvYnI+XG4gICAgICAgICAgICAgIFNoaXBCeU1haWwgd2lsbCBkb25hdGUgJDEgdG8gdGhlIENhbmFkaWFuIDxicj48L2JyPlxuICAgICAgICAgICAgICBSZWQgQ3Jvc3MgdG8gaGVscCB3aGVyZSBpdCBpcyBuZWVkZWQ8YnI+PC9icj5cbiAgICAgICAgICAgICAgbW9zdC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRleHRcIj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cIndoaXRlXCI+XG4gICAgICAgICAgMjAxNy0yMDIwIFNoaXBCeU1haWwuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQgfCBYTUwgU2l0ZW1hcFxuICAgICAgICA8L2g2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2FsLXNjcm9sbFwiPlxuICAgICAgICA8YSBocmVmPVwiI3RvcFwiIGNsYXNzTmFtZT1cImxpbmstdG8tdG9wXCI+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY2hldnJvbi1jaXJjbGUtdXBcIj48L2k+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuc29jaWFsLXRpdGxle1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICB9XG4gICAgICAgIC5zb2NpYWwtc3VidGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXNvY2lhbC1saW5rcyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mYWNlYm9vay1saW5rIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNvY2xhbC1yZXZpZXcge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBjb2xvcjpibGFjaztcbiAgICAgICAgICBtYXJnaW4tdG9wOjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOjJweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXRleHQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTQ4N2M7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci10ZXh0IGg2e1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXBheXBhbCBpbWd7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItcGF5cGFsIC5yb3cge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3Rlci1wYXlwYWwgLnBheXBhbCBpbWd7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXBheXBhbCBoNCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItcGF5cGFsIHAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyLXBheXBhbCAucGx1cyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXItdGV4dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjI7XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IEFsZXJ0cyBmcm9tIFwiLi9BbGVydHNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XG5jb25zdCBXT1cgPSAhaXNTZXJ2ZXIgPyByZXF1aXJlKFwid293anNcIikgOiBudWxsO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuZXcgV09XLldPVygpLmluaXQoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TW9uaTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiXCIgLz5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiaW1hZ2VzL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiaW1hZ2VzL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cbiAgICAgIDxsaW5rXG4gICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICBzaXplcz1cIjcyeDcyXCJcbiAgICAgICAgaHJlZj1cImltYWdlcy9hcHBsZS10b3VjaC1pY29uLTcyeDcyLnBuZ1wiXG4gICAgICAvPlxuICAgICAgPGxpbmtcbiAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgIHNpemVzPVwiMTE0eDExNFwiXG4gICAgICAgIGhyZWY9XCJpbWFnZXMvYXBwbGUtdG91Y2gtaWNvbi0xMTR4MTE0LnBuZ1wiXG4gICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJjc3Mvc3R5bGUuY3NzXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL3N0eWxlLXJlc3BvbnNpdmUuY3NzXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY3NzL2FuaW1hdGUubWluLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy92ZXJ0aWNhbC1yaHl0aG0ubWluLmNzc1wiIC8+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImNzcy9tYWduaWZpYy1wb3B1cC5jc3NcIiAvPlxuICAgICAgPEFsZXJ0cyAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBlYXItYW5pbWF0ZVwiPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cblxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvanF1ZXJ5LTEuMTEuMi5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5lYXNpbmcuMS4zLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9ib290c3RyYXAubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9TbW9vdGhTY3JvbGwuanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5zY3JvbGxUby5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgIHNyYz1cImpzL2pxdWVyeS5sb2NhbFNjcm9sbC5taW4uanNcIlxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvanF1ZXJ5LnZpZXdwb3J0Lm1pbmkuanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5jb3VudFRvLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuYXBwZWFyLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkuc3RpY2t5LmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9qcXVlcnkucGFyYWxsYXgtMS4xLjMuanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiIHNyYz1cImpzL2pxdWVyeS5maXR2aWRzLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9vd2wuY2Fyb3VzZWwubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9pc290b3BlLnBrZ2QubWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9pbWFnZXNsb2FkZWQucGtnZC5taW4uanNcIj48L3NjcmlwdD5cbiAgICAgIDxzY3JpcHRcbiAgICAgICAgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgIHNyYz1cImpzL2pxdWVyeS5tYWduaWZpYy1wb3B1cC5taW4uanNcIlxuICAgICAgPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvd293Lm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvbWFzb25yeS5wa2dkLm1pbi5qc1wiPjwvc2NyaXB0PlxuICAgICAgPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgc3JjPVwianMvYWxsLmpzXCI+PC9zY3JpcHQ+XG4gICAgICA8c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCJqcy9tYWluLmpzXCI+PC9zY3JpcHQ+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vY29yZVwiO1xuaW1wb3J0IEJhckxvYWRlciBmcm9tIFwicmVhY3Qtc3Bpbm5lcnMvUHVsc2VMb2FkZXJcIjtcblxuLy8gQ2FuIGJlIGEgc3RyaW5nIGFzIHdlbGwuIE5lZWQgdG8gZW5zdXJlIGVhY2gga2V5LXZhbHVlIHBhaXIgZW5kcyB3aXRoIDtcbmNvbnN0IG92ZXJyaWRlID0gY3NzYFxuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuYDtcblxuY2xhc3MgQXdlc29tZUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3dlZXQtbG9hZGluZ1wiPlxuICAgICAgICA8QmFyTG9hZGVyXG4gICAgICAgICAgY3NzPXtvdmVycmlkZX1cbiAgICAgICAgICBzaXplPXsxMH1cbiAgICAgICAgICBjb2xvcj17XCIjNzdjZmViXCJ9XG4gICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBd2Vzb21lQ29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCBBbGVydENvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9hbGVydC9hbGVydENvbnRleHQnO1xuaW1wb3J0IE5hdmJhcjIgZnJvbSAnLi4vTmF2YmFyMic7XG5pbXBvcnQgVG9wYmFyIGZyb20gJy4uL3RvcGJhcic7XG5pbXBvcnQgRm9vdGVyMiBmcm9tICcuLi9Gb290ZXIyJztcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi9Mb2FkZXInO1xuXG5leHBvcnQgY29uc3QgTG9naW4gPSAoe3JvdXRlcn0pID0+IHtcblx0Y29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBhbGVydENvbnRleHQgPSB1c2VDb250ZXh0KEFsZXJ0Q29udGV4dCk7XG5cdGNvbnN0IHsgc2V0QWxlcnQsIGFsZXJ0cyB9ID0gYWxlcnRDb250ZXh0O1xuXHRjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdGNvbnN0IF9vblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUucGVyc2lzdCgpO1xuXHRcdGNvbnN0IGJvZHkgPSB7IGVtYWlsOiB1c2VybmFtZSwgcGFzc3dvcmQ6IHBhc3N3b3JkIH07XG5cdFx0aWYgKGJvZHkuZW1haWwgPT09ICcnIHx8IGJvZHkucGFzc3dvcmQgPT09ICcnKSB7XG5cdFx0XHRzZXRBbGVydCgnTG9naW4gZXJyb3InKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc3QgcmVzID0gYXdhaXQgQXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL3VzZXJzL2xvZ2luJywge2RhdGE6IGJvZHl9KTtcblx0XHRcdGlmKHJlcy5kYXRhICE9IFwiaW52YWxpZCB1c2VyXCIpIHtcblx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaGlwLXRva2VuXCIsIHJlcy5kYXRhLnRva2VuKTtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaGlwLXVzZXJuYW1lXCIsIHJlcy5kYXRhLm5hbWUpO1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNoaXAtdXNlcklkXCIsIHJlcy5kYXRhLmlkKTtcblx0XHRcdFx0aWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gJy9pbmRleCcpIHtcblx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Um91dGVyLnB1c2goJy8nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0QWxlcnQoXCJJbnZhbGlkIFVzZXJcIik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHRvZ2dsZVBhc3N3b3JkID0gKGUpID0+IHtcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0c2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpO1xuXHR9O1xuXG5cdGNvbnN0IF9oYW5kbGVVc2VyTmFtZUNoYW5nZSA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUucGVyc2lzdCgpO1xuXHRcdHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKTtcblx0fVxuXG5cdGNvbnN0IF9oYW5kbGVQYXNzd29yZENoYW5nZSA9IChlKSA9PiB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGUucGVyc2lzdCgpO1xuXHRcdHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZS1zZWN0aW9uIHB0LTIwIHBiLTAgYXBwZWFyLWFuaW1hdGUnIGlkPSdwYWdlJz5cblx0XHRcdFx0PE5hdmJhcjIgLz5cblx0XHRcdFx0PFRvcGJhciAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naG9tZS1jb250ZW50IGNvbnRhaW5lcic+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2hvbWUtdGV4dCc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGFsaWduLWNlbnRlcic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tNyBjb2wtc20tcHVzaC0zJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT0nZm9ybSB3aGl0ZScgb25TdWJtaXQ9eyhlKSA9PiBfb25TdWJtaXQoZSl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDE+U2lnbiBpbiB0byBlbmpveSBTaG9wcGluZyBmcm9tIENhbmFkYTwvaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J3VzdWFyaW8nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3VzdWFyaW8nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdpbnB1dC1zbSBib2xkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdlbWFpbCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXR0ZXJuPScuezMsMTAwfSdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17dXNlcm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBfaGFuZGxlVXNlck5hbWVDaGFuZ2UoZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtdXNlciBmYS0yeCBjYW1wb2Zvcm0nPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0ncGFzc3dvcmQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J3Bhc3N3b3JkJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naW5wdXQtc20gYm9sZCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0ncGFzc3dvcmQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGF0dGVybj0nLnszLDEwMH0nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT17c2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cGFzc3dvcmR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBfaGFuZGxlUGFzc3dvcmRDaGFuZ2UoZSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2ZhIGZhLWV5ZSBmYS0yeCBjYW1wb2Zvcm0nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHRvZ2dsZVBhc3N3b3JkKGUpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBJTlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9Jy9mb3JnZXRwYXNzd29yZCc+PHAgc3R5bGU9e3ttYXJnaW5Cb3R0b206ICczcHgnLCBmb250V2VpZ2h0OiBcIm5vcm1hbFwifX0+Rm9yZ2V0IHBhc3N3b3JkPzwvcD48L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnM3B4JywgY29sb3I6IFwiYmxhY2tcIn19PiBEb24ndCBoYXZlIGFuIGFjY291bnQ/ICZuYnNwOyZuYnNwO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9Jy9yZWdpc3Rlcic+IFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U2lnbiBVcCBOb3dcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdFx0XHQuYnRuLWljb24ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5ob21lLWNvbnRlbnQge1xuXHRcdFx0XHRcdFx0cGFkZGluZzogODBweCAwcHggNjBweCAwcHg7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB1cmwoXCJpbWFnZXMvcGF5LWJnLmpwZ1wiKTtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvcm0ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAxNXB4O1xuXHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3JtIGgxIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjMWU0ODdjO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Zm9ybSBpbnB1dCB7XG5cdFx0XHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjZjdmMWYxICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRmb3JtIGJ1dHRvbiB7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiA4cHggMjVweDtcblx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xuXHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzFlNDg3Yztcblx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDMwcHg7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGZvcm0gYSB7XG5cdFx0XHRcdFx0XHRjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9PC9zdHlsZT5cblx0XHRcdFx0PEZvb3RlcjIgLz5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTG9naW4pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJvdXRlciwgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XG5cbmNvbnN0IE5hdmJhciA9ICh7IHJvdXRlciB9KSA9PiB7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0fSwgW10pO1xuXG5cdGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcblx0XHRjb25zdCByZXMgPSBDb29raWVzLnJlbW92ZSgndG9rZW4nKTtcblx0XHRpZiAocm91dGVyLnBhdGhuYW1lID09PSAnLycgfHwgcm91dGVyLnBhdGhuYW1lID09PSAnL2luZGV4Jykge1xuXHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRSb3V0ZXIucHVzaCgnLycpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxuYXYgY2xhc3NOYW1lPSdtYWluLW5hdiBzdGljay1maXhlZCc+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHJlbGF0aXZlIGNsZWFyZml4Jz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J25hdi1sb2dvLXdyYXAgbG9jYWwtc2Nyb2xsJz5cblx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2xvZ28nXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPSdzaGlwLWxvZ28nIHNyYz0naW1hZ2VzL3NoaXBfbG9nby5wbmcnIGFsdD0nbG9nbycgLz5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J2JiYi1sb2dvJyBzcmM9J2ltYWdlcy9iYmJfbG9nby5wbmcnIGFsdD0nbG9nbycgLz5cblx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbW9iaWxlLW5hdic+XG5cdFx0XHRcdFx0PGEgaHJlZj0nIycgY2xhc3NOYW1lPSdmbS1idXR0b24nPlxuXHRcdFx0XHRcdFx0PHNwYW4+PC9zcGFuPk1lbnVcblx0XHRcdFx0XHQ8L2E+XG5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm0td3JhcHBlcicgaWQ9J2Z1bGxzY3JlZW4tbWVudSc+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm0td3JhcHBlci1zdWInPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm0td3JhcHBlci1zdWItc3ViJz5cblx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdmbS1tZW51LWxpbmtzIHNjcm9sbC1uYXYgbG9jYWwtc2Nyb2xsJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IGRhc2hib2FyZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9kYXNoYm9hcmQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kYXNoYm9hcmQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHREQVNIQk9BUkRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBob3dpdHdvcmtzJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2hvd2l0d29ya3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9ob3dpdHdvcmtzJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SE9XIElUIFdPUktTXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgcHJpY2luZyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9wcmljaW5nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJpY2luZyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFBSSUNJTkdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBzdXBwb3J0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3N1cHBvcnQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zdXBwb3J0Jztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U1VQUE9SVFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL1VzZXJJbmZvJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT57bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaGlwLXVzZXJOYW1lXCIpfTwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3JlZ2lzdGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5Mb2dvdXQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PC91bD5cblxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS1zb2NpYWwtbGlua3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgdGl0bGU9J0ZhY2Vib29rJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtZmFjZWJvb2snPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdUd2l0dGVyJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtdHdpdHRlcic+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj0nIycgdGl0bGU9J0xpbmtlZGluJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtbGlua2VkaW4nPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdJbnN0YWdyYW0rJyB0YXJnZXQ9J19ibGFuayc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT0nZmEgZmEtaW5zdGFncmFtJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0naW5uZXItbmF2IGRlc2t0b3AtbmF2Jz5cblx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPSdjbGVhcmxpc3Qgc2Nyb2xsLW5hdiBsb2NhbC1zY3JvbGwnPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IGRhc2hib2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kYXNoYm9hcmQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHREQVNIQk9BUkRcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWxpc3QgaG93aXR3b3Jrc1wiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9ob3dpdHdvcmtzJztcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0SE9XIElUIFdPUktTXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1saXN0IHByaWNpbmdcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJpY2luZyc7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFBSSUNJTkdcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWxpc3Qgc3VwcG9ydFwiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zdXBwb3J0Jztcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0U1VQUE9SVFxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblxuXHRcdFx0XHRcdFx0e2lzbG9naW4gPyAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2xvZ2luJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9IGNsYXNzTmFtZT0nYnRuJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWJvcmRlci13IGJ0bi1jaXJjbGUgYm9sZCBidG4tc2VzaW9uJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q2VycmFyIFNlc2nDs25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJvZmlsZSc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWNvbG9yIGJ0bi1ib3JkZXItdyBidG4tbWVkaXVtIGJ0bi1jaXJjbGUgYm9sZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7bmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2xvZ2luJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdidG4gYnRuLW1vZCBidG4tYm9yZGVyLXcgYnRuLWNpcmNsZSBzaWduLWluJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNJR04gSU5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZWdpc3Rlcic+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0nYnRuIGJ0bi1tb2QgYnRuLWJvcmRlci13IGJ0bi1jaXJjbGUgc2lnbi11cCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTSUdOIFVQXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHR7YFxuXHRcdFx0XHRcdC5idG4ge1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5uYXYtbGlzdC5hY3RpdmUgYXtcblx0XHRcdFx0XHRcdGNvbG9yOiByZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRgfVxuXHRcdFx0PC9zdHlsZT5cblx0XHQ8L25hdj5cblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoTmF2YmFyKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBSb3V0ZXIsIHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBBeGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBGYVVuZGVybGluZSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcbmNvbnN0IGdldERhdGEgPSBhc3luYyB0b2tlbiA9PiB7XG5cdGNvbnN0IGhlYWRlciA9IHtcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQneC1hdXRoLXRva2VuJzogdG9rZW4sXG5cdFx0fSxcblx0fTtcblx0Y29uc3QgZGF0YSA9IGF3YWl0IEF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9hdXRoJywgaGVhZGVyKTtcblxuXHRyZXR1cm4gZGF0YS5kYXRhO1xufTtcblxuY29uc3QgTmF2YmFyMiA9ICh7IHJvdXRlciB9KSA9PiB7XG5cdGNvbnN0IFtpc2xvZ2luLCBzZXRJc0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgY29vID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NoaXAtdG9rZW4nKTtcblx0XHRpZiAoY29vICE9IG51bGwgJiYgY29vICE9ICcnICYmIGNvbyAhPSB1bmRlZmluZWQgJiYgY29vICE9ICd1bmRlZmluZWQnICYmIGNvbyAhPSAnbnVsbCcpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiaXNsb2dpblwiKTtcblx0XHRcdFx0c2V0SXNMb2dpbih0cnVlKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdHNldElzTG9naW4oZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSwgW10pO1xuXG5cdHJldHVybiAoXG5cdFx0PG5hdiBjbGFzc05hbWU9J21haW4tbmF2IHN0aWNrLWZpeGVkJz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgcmVsYXRpdmUgY2xlYXJmaXgnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nbmF2LWxvZ28td3JhcCBsb2NhbC1zY3JvbGwnPlxuXHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0nbG9nbydcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9J3NoaXAtbG9nbycgc3JjPSdpbWFnZXMvc2hpcF9sb2dvLnBuZycgYWx0PSdsb2dvJyAvPlxuXHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT0nYmJiLWxvZ28nIHNyYz0naW1hZ2VzL2JiYl9sb2dvLnBuZycgYWx0PSdsb2dvJyAvPlxuXHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdtb2JpbGUtbmF2Jz5cblx0XHRcdFx0XHQ8YSBocmVmPScjJyBjbGFzc05hbWU9J2ZtLWJ1dHRvbic+XG5cdFx0XHRcdFx0XHQ8c3Bhbj48L3NwYW4+TWVudVxuXHRcdFx0XHRcdDwvYT5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS13cmFwcGVyJyBpZD0nZnVsbHNjcmVlbi1tZW51Jz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS13cmFwcGVyLXN1Yic+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbS13cmFwcGVyLXN1Yi1zdWInPlxuXHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9J2ZtLW1lbnUtbGlua3Mgc2Nyb2xsLW5hdiBsb2NhbC1zY3JvbGwnPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgaG9tZSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNsb2dpbiA/ICcnIFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRIT01FXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgZGFzaGJvYXJkJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2Rhc2hib2FyZCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoaXNsb2dpbil7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2Rhc2hib2FyZCc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2xvZ2luJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHREQVNIQk9BUkRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBob3dpdHdvcmtzJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL2hvd2l0d29ya3MnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9ob3dpdHdvcmtzJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0SE9XIElUIFdPUktTXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT0nbmF2LWxpc3QgcHJpY2luZyc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9wcmljaW5nJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcHJpY2luZyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFBSSUNJTkdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPSduYXYtbGlzdCBzdXBwb3J0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3N1cHBvcnQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9zdXBwb3J0Jztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U1VQUE9SVFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdHtpc2xvZ2luID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaGlwLXVzZXJuYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgb25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NoaXAtdXNlcm5hbWUnLCAnJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2hpcC10b2tlbicsICcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyb3V0ZXIucGF0aG5hbWUgPT09ICcvJyB8fCByb3V0ZXIucGF0aG5hbWUgPT09ICcvaW5kZXgnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJvdXRlci5wdXNoKCcvJyk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRMb2cgb3V0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvbG9naW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNJR04gSU5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVnaXN0ZXInPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNJR04gVVBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm0tc29jaWFsLWxpbmtzJz5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdGYWNlYm9vaycgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWZhY2Vib29rJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJyB0aXRsZT0nVHdpdHRlcicgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLXR3aXR0ZXInPjwvaT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9JyMnIHRpdGxlPSdMaW5rZWRpbicgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWxpbmtlZGluJz48L2k+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPScjJyB0aXRsZT0nSW5zdGFncmFtKycgdGFyZ2V0PSdfYmxhbmsnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9J2ZhIGZhLWluc3RhZ3JhbSc+PC9pPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2lubmVyLW5hdiBkZXNrdG9wLW5hdic+XG5cdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT0nY2xlYXJsaXN0IHNjcm9sbC1uYXYgbG9jYWwtc2Nyb2xsJz5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9J25hdi1saXN0IGhvbWUnPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGlzbG9naW4gPyAnJyBcblx0XHRcdFx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0SE9NRVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBkYXNoYm9hcmRcIj5cblx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nJz5cblx0XHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZihpc2xvZ2luKXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvZGFzaGJvYXJkJztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvbG9naW4nO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdERBU0hCT0FSRFxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBob3dpdHdvcmtzXCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2hvd2l0d29ya3MnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRIT1cgSVQgV09SS1Ncblx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWxpc3QgcHJpY2luZ1wiPlxuXHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScnPlxuXHRcdFx0XHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wcmljaW5nJztcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0UFJJQ0lOR1xuXHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtbGlzdCBzdXBwb3J0XCI+XG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jyc+XG5cdFx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL3N1cHBvcnQnO1xuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRTVVBQT1JUXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHQ8L2xpPlxuXG5cdFx0XHRcdFx0XHR7aXNsb2dpbiA/IChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBzdHlsZT17e2ZvbnRTaXplOiBcIjIwcHhcIiwgZm9udFdlaWdodDogXCJib2xkXCJ9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2xvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaGlwLXVzZXJuYW1lJyl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YSBvbkNsaWNrPXsoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzaGlwLXVzZXJuYW1lJywgJycpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2hpcC10b2tlbicsICcnKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJvdXRlci5wYXRobmFtZSA9PT0gJy8nIHx8IHJvdXRlci5wYXRobmFtZSA9PT0gJy9pbmRleCcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tbW9kIGJ0bi1ib3JkZXItdyBidG4tY2lyY2xlIHNpZ24taW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdExPRyBPVVRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPScvbG9naW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J2J0biBidG4tbW9kIGJ0bi1ib3JkZXItdyBidG4tY2lyY2xlIHNpZ24taW4nPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0U0lHTiBJTlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj0nL3JlZ2lzdGVyJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdidG4gYnRuLW1vZCBidG4tYm9yZGVyLXcgYnRuLWNpcmNsZSBzaWduLXVwJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFNJR04gVVBcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdHtgXG5cdFx0XHRcdFx0LmJ0biB7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Lm5hdi1saXN0LmFjdGl2ZSBhe1xuXHRcdFx0XHRcdFx0Y29sb3I6IHJlZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGB9XG5cdFx0XHQ8L3N0eWxlPlxuXHRcdDwvbmF2PlxuXHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihOYXZiYXIyKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3Vic2NyaWJlID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidG9wYmFyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wYmFyLXJlZFwiPlxuICAgICAgICAgIEZPTExPVyBVUyBPTiBJTlNUQVJBTSBAU0hJUEJZTUFJTCBGT1IgVEhFIExBVEVTVCBQUk9NT1MuIFNBTEVTIEFORCBERUFMUyBGUk9NIENBTkFEQVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50b3BiYXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnRvcGJhci1yZWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkODAyMDI7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Vic2NyaWJlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgYWxlcnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGFsZXJ0Q29udGV4dDtcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlclwiKTtmdW5jdGlvbiBpc0xvY2FsKGhyZWYpe3ZhciB1cmw9KDAsX3VybC5wYXJzZSkoaHJlZixmYWxzZSx0cnVlKTt2YXIgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7dmFyIGxhc3RIcmVmPW51bGw7dmFyIGxhc3RBcz1udWxsO3ZhciBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fXZhciByZXN1bHQ9Zm9ybWF0RnVuYyhocmVmLGFzKTtsYXN0SHJlZj1ocmVmO2xhc3RBcz1hcztsYXN0UmVzdWx0PXJlc3VsdDtyZXR1cm4gcmVzdWx0O307fWZ1bmN0aW9uIGZvcm1hdFVybCh1cmwpe3JldHVybiB1cmwmJnR5cGVvZiB1cmw9PT0nb2JqZWN0Jz8oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHVybCk6dXJsO312YXIgb2JzZXJ2ZXI7dmFyIGxpc3RlbmVycz1uZXcgTWFwKCk7dmFyIEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDt2YXIgcHJlZmV0Y2hlZD17fTtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO312YXIgY2I9bGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpO2lmKGVudHJ5LmlzSW50ZXJzZWN0aW5nfHxlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbz4wKXtvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldCk7Y2IoKTt9fSk7fSx7cm9vdE1hcmdpbjonMjAwcHgnfSk7fXZhciBsaXN0ZW5Ub0ludGVyc2VjdGlvbnM9KGVsLGNiKT0+e3ZhciBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e3RyeXtvYnNlcnZlci51bm9ic2VydmUoZWwpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoZXJyKTt9bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6KDAsX3JvdXRlcjIuYWRkQmFzZVBhdGgpKGZvcm1hdFVybChocmVmKSksYXM6YXNIcmVmPygwLF9yb3V0ZXIyLmFkZEJhc2VQYXRoKShmb3JtYXRVcmwoYXNIcmVmKSk6YXNIcmVmfTt9KTt0aGlzLmxpbmtDbGlja2VkPWU9Pnt2YXJ7bm9kZU5hbWUsdGFyZ2V0fT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJih0YXJnZXQmJnRhcmdldCE9PSdfc2VsZid8fGUubWV0YUtleXx8ZS5jdHJsS2V5fHxlLnNoaWZ0S2V5fHxlLm5hdGl2ZUV2ZW50JiZlLm5hdGl2ZUV2ZW50LndoaWNoPT09Mikpey8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbnJldHVybjt9dmFye2hyZWYsYXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7aWYoIWlzTG9jYWwoaHJlZikpey8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbnJldHVybjt9dmFye3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247aHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGhyZWYpO2FzPWFzPygwLF91cmwucmVzb2x2ZSkocGF0aG5hbWUsYXMpOmhyZWY7ZS5wcmV2ZW50RGVmYXVsdCgpOy8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xudmFye3Njcm9sbH09dGhpcy5wcm9wcztpZihzY3JvbGw9PW51bGwpe3Njcm9sbD1hcy5pbmRleE9mKCcjJyk8MDt9Ly8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG5fcm91dGVyLmRlZmF1bHRbdGhpcy5wcm9wcy5yZXBsYWNlPydyZXBsYWNlJzoncHVzaCddKGhyZWYsYXMse3NoYWxsb3c6dGhpcy5wcm9wcy5zaGFsbG93fSkudGhlbihzdWNjZXNzPT57aWYoIXN1Y2Nlc3MpcmV0dXJuO2lmKHNjcm9sbCl7d2luZG93LnNjcm9sbFRvKDAsMCk7ZG9jdW1lbnQuYm9keS5mb2N1cygpO319KTt9O2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtpZihwcm9wcy5wcmVmZXRjaCl7Y29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTt9fXRoaXMucD1wcm9wcy5wcmVmZXRjaCE9PWZhbHNlO31jb21wb25lbnRXaWxsVW5tb3VudCgpe3RoaXMuY2xlYW5VcExpc3RlbmVycygpO31nZXRQYXRocygpe3ZhcntwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO3ZhcntocmVmOnBhcnNlZEhyZWYsYXM6cGFyc2VkQXN9PXRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsdGhpcy5wcm9wcy5hcyk7dmFyIHJlc29sdmVkSHJlZj0oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLHBhcnNlZEhyZWYpO3JldHVybltyZXNvbHZlZEhyZWYscGFyc2VkQXM/KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRBcyk6cmVzb2x2ZWRIcmVmXTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dmFyIGlzUHJlZmV0Y2hlZD1wcmVmZXRjaGVkW3RoaXMuZ2V0UGF0aHMoKS5qb2luKC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4nJScpXTtpZighaXNQcmVmZXRjaGVkKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9bGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwoKT0+e3RoaXMucHJlZmV0Y2goKTt9KTt9fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2gob3B0aW9ucyl7aWYoIXRoaXMucHx8dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXJldHVybjsvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG52YXIgcGF0aHM9dGhpcy5nZXRQYXRocygpOy8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbi8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG5fcm91dGVyLmRlZmF1bHQucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLzBdLHBhdGhzWy8qIGFzUGF0aCAqLzFdLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO3ByZWZldGNoZWRbcGF0aHMuam9pbigvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuJyUnKV09dHJ1ZTt9cmVuZGVyKCl7dmFye2NoaWxkcmVufT10aGlzLnByb3BzO3ZhcntocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbnZhciBjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7dmFyIHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKHtwcmlvcml0eTp0cnVlfSk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319fTsvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbi8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuaWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe3ZhciByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydD1yZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKS5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtpZihwcm9wcy5ocmVmJiZ0eXBlb2YgX19ORVhUX0RBVEFfXyE9PSd1bmRlZmluZWQnJiZfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpe3Byb3BzLmhyZWY9cmV3cml0ZVVybEZvck5leHRFeHBvcnQocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fWlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09J2RldmVsb3BtZW50Jyl7dmFyIHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbnZhciBQcm9wVHlwZXM9cmVxdWlyZSgncHJvcC10eXBlcycpO3ZhciBleGFjdD1yZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0Jyk7Ly8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuTGluay5wcm9wVHlwZXM9ZXhhY3Qoe2hyZWY6UHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZyxQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxhczpQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLFByb3BUeXBlcy5vYmplY3RdKSxwcmVmZXRjaDpQcm9wVHlwZXMuYm9vbCxyZXBsYWNlOlByb3BUeXBlcy5ib29sLHNoYWxsb3c6UHJvcFR5cGVzLmJvb2wscGFzc0hyZWY6UHJvcFR5cGVzLmJvb2wsc2Nyb2xsOlByb3BUeXBlcy5ib29sLGNoaWxkcmVuOlByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5lbGVtZW50LChwcm9wcyxwcm9wTmFtZSk9Pnt2YXIgdmFsdWU9cHJvcHNbcHJvcE5hbWVdO2lmKHR5cGVvZiB2YWx1ZT09PSdzdHJpbmcnKXt3YXJuKFwiV2FybmluZzogWW91J3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPlwiKTt9cmV0dXJuIG51bGw7fV0pLmlzUmVxdWlyZWR9KTt9dmFyIF9kZWZhdWx0PUxpbms7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZVJvdXRlcj11c2VSb3V0ZXI7ZXhwb3J0cy5tYWtlUHVibGljUm91dGVySW5zdGFuY2U9bWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO2V4cG9ydHMuY3JlYXRlUm91dGVyPWV4cG9ydHMud2l0aFJvdXRlcj1leHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyMj1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi92YXIgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxudmFyIHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cycsJ2lzRmFsbGJhY2snLCdiYXNlUGF0aCddO3ZhciByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107dmFyIGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbi8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4vLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlcixmaWVsZCx7Z2V0KCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7dmFyIHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe3ZhciBldmVudEZpZWxkPVwib25cIitldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKStldmVudC5zdWJzdHJpbmcoMSk7dmFyIF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe3ZhciBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxudmFyIGNyZWF0ZVJvdXRlcj1mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXNpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXt2YXIgX3JvdXRlcj1yb3V0ZXI7dmFyIGluc3RhbmNlPXt9O2Zvcih2YXIgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbih7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcm91dGVyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTtmdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KXtmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wcyl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsT2JqZWN0LmFzc2lnbih7cm91dGVyOigwLF9yb3V0ZXIudXNlUm91dGVyKSgpfSxwcm9wcykpO31XaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuO1dpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dmFyIG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyO30iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gbWl0dCgpIHtcbiAgICBjb25zdCBhbGwgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG9uKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgb2ZmKHR5cGUsIGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbWl0KHR5cGUsIC4uLmV2dHMpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIChhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciguLi5ldnRzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmF1bHQgPSBtaXR0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB1cmxfMSA9IHJlcXVpcmUoXCJ1cmxcIik7XG5jb25zdCBtaXR0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL21pdHRcIikpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IGlzX2R5bmFtaWNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG5jb25zdCByb3V0ZV9tYXRjaGVyXzEgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xuY29uc3Qgcm91dGVfcmVnZXhfMSA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO1xuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aDtcbn1cbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcbmZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgICAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgICAgIDogcGF0aDtcbn1cbmV4cG9ydHMuZGVsQmFzZVBhdGggPSBkZWxCYXNlUGF0aDtcbmZ1bmN0aW9uIHRvUm91dGUocGF0aCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nO1xufVxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGgpID0+IHRvUm91dGUoIXBhdGggfHwgcGF0aCA9PT0gJy8nID8gJy9pbmRleCcgOiBwYXRoKTtcbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCBpc1NlcnZlclJlbmRlciwgY2IpIHtcbiAgICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxO1xuICAgIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gZmV0Y2godXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIF9fTkVYVF9EQVRBX19cbiAgICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmApLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgIH0pLCB7XG4gICAgICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVzcG9uc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBjYiA/IGNiKGRhdGEpIDogZGF0YTtcbiAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgICAgLy8gbG9vcC5cbiAgICAgICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgICAgICAgO1xuICAgICAgICAgICAgZXJyLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfSk7XG59XG5jbGFzcyBSb3V0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lLCBxdWVyeSwgYXMsIHsgaW5pdGlhbFByb3BzLCBwYWdlTG9hZGVyLCBBcHAsIHdyYXBBcHAsIENvbXBvbmVudCwgZXJyLCBzdWJzY3JpcHRpb24sIGlzRmFsbGJhY2ssIH0pIHtcbiAgICAgICAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgICAgICAgdGhpcy5zZGMgPSB7fTtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpID0+IHtcbiAgICAgICAgICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCB1dGlsc18xLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKGUuc3RhdGUgJiZcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyICYmXG4gICAgICAgICAgICAgICAgZS5zdGF0ZS5hcyA9PT0gdGhpcy5hc1BhdGggJiZcbiAgICAgICAgICAgICAgICB1cmxfMS5wYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKGUuc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fZ2V0U3RhdGljRGF0YSA9IChhc1BhdGgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHVybF8xLnBhcnNlKGFzUGF0aCkucGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICAgICAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgICAgICAgICAgIDogZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgbnVsbCwgdGhpcy5pc1NzciwgZGF0YSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSkpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLl9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aCkgPT4ge1xuICAgICAgICAgICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB1cmxfMS5wYXJzZShhc1BhdGgsIHRydWUpO1xuICAgICAgICAgICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgICAgIHRoaXMucm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHt9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICBpc19keW5hbWljXzEuaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXM7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCB1dGlsc18xLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLCBhcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUocm91dGUsIG1vZCkge1xuICAgICAgICBjb25zdCBDb21wb25lbnQgPSBtb2QuZGVmYXVsdCB8fCBtb2Q7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkYXRhKSwgeyBDb21wb25lbnQsIF9fTl9TU0c6IG1vZC5fX05fU1NHLCBfX05fU1NQOiBtb2QuX19OX1NTUCB9KTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGE7XG4gICAgICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgICAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWxvYWQoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAgICovXG4gICAgYmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgICAqL1xuICAgIHB1c2godXJsLCBhcyA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAgICovXG4gICAgcmVwbGFjZSh1cmwsIGFzID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgY2hhbmdlKG1ldGhvZCwgX3VybCwgX2FzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5TVCkge1xuICAgICAgICAgICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgICAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICAgICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gdXRpbHNfMS5mb3JtYXRXaXRoVmFsaWRhdGlvbihfdXJsKSA6IF91cmw7XG4gICAgICAgICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IHV0aWxzXzEuZm9ybWF0V2l0aFZhbGlkYXRpb24oX2FzKSA6IF9hcztcbiAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybCk7XG4gICAgICAgICAgICBhcyA9IGFkZEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgICAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydDtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgICAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgICAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZChhcyk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAgICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgICAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoYXMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpO1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSB1cmxfMS5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zO1xuICAgICAgICAgICAgaWYgKGlzX2R5bmFtaWNfMS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSB1cmxfMS5wYXJzZShhcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IHJvdXRlX3JlZ2V4XzEuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IHJvdXRlX21hdGNoZXJfMS5nZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtID0+ICFxdWVyeVtwYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IoYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcyk7XG4gICAgICAgICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICAgICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihyb3V0ZUluZm8gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGFzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCB1dGlsc18xLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXSh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICAgICAnJywgYXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdyA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKGVyciwgbG9hZEVycm9yRmFpbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgICAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgZ2lwRXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVycjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihyZXMgPT4gcmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgfSksIHJlamVjdCk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocm91dGVJbmZvKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YSgoKSA9PiBfX05fU1NHXG4gICAgICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHByb3BzID0+IHtcbiAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wcztcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvcik7XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgdGhpcy5ub3RpZnkoZGF0YSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICAgKi9cbiAgICBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgICAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgICAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7XG4gICAgICAgIGlmIChpZEVsKSB7XG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgICAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtcbiAgICAgICAgaWYgKG5hbWVFbCkge1xuICAgICAgICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXJsSXNOZXcoYXNQYXRoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICAgKi9cbiAgICBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lLCBwcm90b2NvbCB9ID0gdXJsXzEucGFyc2UodXJsKTtcbiAgICAgICAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKTtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xuICAgICAgICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKTtcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpO1xuICAgICAgICAgICAgZS5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSkge1xuICAgICAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KTtcbiAgICB9XG59XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5Sb3V0ZXIuZXZlbnRzID0gbWl0dF8xLmRlZmF1bHQoKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvO1xuZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGUpIHtcbiAgICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKTtcbn1cbmV4cG9ydHMuaXNEeW5hbWljUm91dGUgPSBpc0R5bmFtaWNSb3V0ZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpIHtcbiAgICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXg7XG4gICAgcmV0dXJuIChwYXRobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyID0gbmV3IEVycm9yKCdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJyk7XG4gICAgICAgICAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCc7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV07XG4gICAgICAgICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc107XG4gICAgICAgICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgICAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoZW50cnkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICAgICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBkZWNvZGUobSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgIH07XG59XG5leHBvcnRzLmdldFJvdXRlTWF0Y2hlciA9IGdldFJvdXRlTWF0Y2hlcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJyk7XG59XG5mdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZSkge1xuICAgIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgICBjb25zdCBlc2NhcGVkUm91dGUgPSBlc2NhcGVSZWdleChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpO1xuICAgIGNvbnN0IGdyb3VwcyA9IHt9O1xuICAgIGxldCBncm91cEluZGV4ID0gMTtcbiAgICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKTtcbiAgICAgICAgZ3JvdXBzWyQxXG4gICAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL15cXC57M30vLCAnJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgICBdID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0OiBpc0NhdGNoQWxsIH07XG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsID8gJy8oLis/KScgOiAnLyhbXi9dKz8pJztcbiAgICB9KTtcbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU7XG4gICAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gICAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZSgvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLCAoXywgJDEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSk7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oeyByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksIGdyb3VwcyB9LCAobmFtZWRQYXJhbWV0ZXJpemVkUm91dGVcbiAgICAgICAgPyB7XG4gICAgICAgICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgICAgIH1cbiAgICAgICAgOiB7fSkpO1xufVxuZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdXJsXzEgPSByZXF1aXJlKFwidXJsXCIpO1xuLyoqXG4gKiBVdGlsc1xuICovXG5mdW5jdGlvbiBleGVjT25jZShmbikge1xuICAgIGxldCB1c2VkID0gZmFsc2U7XG4gICAgbGV0IHJlc3VsdDtcbiAgICByZXR1cm4gKCguLi5hcmdzKSA9PiB7XG4gICAgICAgIGlmICghdXNlZCkge1xuICAgICAgICAgICAgdXNlZCA9IHRydWU7XG4gICAgICAgICAgICByZXN1bHQgPSBmbiguLi5hcmdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW4vTG9naW4yXCI7XG5cbmNvbnN0IGxvZ2luID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiIGlkPVwidG9wXCI+XG4gICAgICAgIDxMb2dpbiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2dpbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3Bpbm5lcnMvUHVsc2VMb2FkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ3b3dqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9