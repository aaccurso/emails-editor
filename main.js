/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/email-block/styles.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/email-block/styles.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".emails-editor .email-block {\n    padding: 2px 4px;\n    margin: 4px;\n    background: rgba(102, 153, 255, 0.2);\n    border-radius: 100px;\n}\n\n.emails-editor .email-block.is-invalid {\n    margin-right: 4px;\n    background: none;\n    border-radius: 0;\n    border-bottom: #D92929 dashed 1px;\n    padding: 2px 0 2px 2px;\n}\n\n.emails-editor .email-block.is-invalid .email-block-label {\n    margin-left: 0;\n}\n\n.emails-editor .email-block-label {\n    margin-left: 10px;\n}\n\n.emails-editor .email-block-remove-button {\n    border: none;\n    background: none;\n    width: 16px;\n    height: 16px;\n    padding: 0 4px;\n    margin-left: 4px;\n    cursor: pointer;\n    border-radius: 2px;\n    transition: background-color 100ms ease-in-out;\n}\n\n.emails-editor .email-block-remove-button:hover {\n    background: rgba(217, 41, 41, 0.5);\n}\n", "",{"version":3,"sources":["webpack://src/email-block/styles.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,WAAW;IACX,oCAAoC;IACpC,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,iCAAiC;IACjC,sBAAsB;AAC1B;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,8CAA8C;AAClD;;AAEA;IACI,kCAAkC;AACtC","sourcesContent":[".emails-editor .email-block {\n    padding: 2px 4px;\n    margin: 4px;\n    background: rgba(102, 153, 255, 0.2);\n    border-radius: 100px;\n}\n\n.emails-editor .email-block.is-invalid {\n    margin-right: 4px;\n    background: none;\n    border-radius: 0;\n    border-bottom: #D92929 dashed 1px;\n    padding: 2px 0 2px 2px;\n}\n\n.emails-editor .email-block.is-invalid .email-block-label {\n    margin-left: 0;\n}\n\n.emails-editor .email-block-label {\n    margin-left: 10px;\n}\n\n.emails-editor .email-block-remove-button {\n    border: none;\n    background: none;\n    width: 16px;\n    height: 16px;\n    padding: 0 4px;\n    margin-left: 4px;\n    cursor: pointer;\n    border-radius: 2px;\n    transition: background-color 100ms ease-in-out;\n}\n\n.emails-editor .email-block-remove-button:hover {\n    background: rgba(217, 41, 41, 0.5);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/email-input/styles.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/email-input/styles.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".emails-editor .email-input {\n    border: none;\n    padding: 4px;\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 24px;\n    outline-color: rgba(195, 194, 207, 0.8);\n}\n\n.emails-editor .email-input::placeholder {\n    color: #C3C2CF;\n}\n", "",{"version":3,"sources":["webpack://src/email-input/styles.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,uCAAuC;AAC3C;;AAEA;IACI,cAAc;AAClB","sourcesContent":[".emails-editor .email-input {\n    border: none;\n    padding: 4px;\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 24px;\n    outline-color: rgba(195, 194, 207, 0.8);\n}\n\n.emails-editor .email-input::placeholder {\n    color: #C3C2CF;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/email-list/styles.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/email-list/styles.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".emails-editor .email-list {\n    background: #FFFFFF;\n    border: 1px solid #C3C2CF;\n    box-sizing: border-box;\n    border-radius: 4px;\n    list-style: none;\n    padding-inline-start: 0;\n    padding: 4px;\n    display: flex;\n    flex-wrap: wrap;\n    max-height: 96px;\n    overflow-y: auto;\n}\n", "",{"version":3,"sources":["webpack://src/email-list/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB","sourcesContent":[".emails-editor .email-list {\n    background: #FFFFFF;\n    border: 1px solid #C3C2CF;\n    box-sizing: border-box;\n    border-radius: 4px;\n    list-style: none;\n    padding-inline-start: 0;\n    padding: 4px;\n    display: flex;\n    flex-wrap: wrap;\n    max-height: 96px;\n    overflow-y: auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/emails-editor-content/styles.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/emails-editor-content/styles.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".emails-editor .emails-editor-content {\n    background: #F8F8F7;\n    padding: 24px 50px ;\n}\n\n.emails-editor .emails-editor-content .header {\n    font-size: 20px;\n    line-height: 27px;\n    color: #050038;\n}\n", "",{"version":3,"sources":["webpack://src/emails-editor-content/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB","sourcesContent":[".emails-editor .emails-editor-content {\n    background: #F8F8F7;\n    padding: 24px 50px ;\n}\n\n.emails-editor .emails-editor-content .header {\n    font-size: 20px;\n    line-height: 27px;\n    color: #050038;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/emails-editor-footer/styles.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/emails-editor-footer/styles.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".emails-editor .emails-editor-footer {\n    padding: 24px 50px;\n}\n", "",{"version":3,"sources":["webpack://src/emails-editor-footer/styles.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB","sourcesContent":[".emails-editor .emails-editor-footer {\n    padding: 24px 50px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/emails-editor/styles.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/emails-editor/styles.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".emails-editor {\n    background: #FFFFFF;\n    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    overflow: hidden;\n}\n", "",{"version":3,"sources":["webpack://src/emails-editor/styles.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,2CAA2C;IAC3C,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB","sourcesContent":[".emails-editor {\n    background: #FFFFFF;\n    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    overflow: hidden;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".emails-editor .button {\n    border-radius: 6px;\n    padding: 10px 16px;\n    color: #FFFFFF;\n    background: #4262FF;\n    border: none;\n    margin-right: 16px;\n    font-size: 14px;\n    line-height: 24px;\n    cursor: pointer;\n    transition: background-color 200ms ease-in-out;\n}\n\n.emails-editor .button:hover {\n    background-color: rgba(66, 98, 255, 0.8);\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,8CAA8C;AAClD;;AAEA;IACI,wCAAwC;AAC5C","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\n\n.emails-editor .button {\n    border-radius: 6px;\n    padding: 10px 16px;\n    color: #FFFFFF;\n    background: #4262FF;\n    border: none;\n    margin-right: 16px;\n    font-size: 14px;\n    line-height: 24px;\n    cursor: pointer;\n    transition: background-color 200ms ease-in-out;\n}\n\n.emails-editor .button:hover {\n    background-color: rgba(66, 98, 255, 0.8);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/email-block/index.js":
/*!**********************************!*\
  !*** ./src/email-block/index.js ***!
  \**********************************/
/*! exports provided: EmailBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailBlock", function() { return EmailBlock; });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/email-block/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widget */ "./src/widget/index.js");
/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./remove.svg */ "./src/email-block/remove.svg");
/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_remove_svg__WEBPACK_IMPORTED_MODULE_3__);





class EmailBlock extends _widget__WEBPACK_IMPORTED_MODULE_2__["Widget"] {
	constructor(props) {
		super(props);
		const { value, isValid } = this.props.email;
		// <EmailBlock/>
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_1__["HtmlElement"](
			'li',
			{
				className: `email-block ${isValid ? 'is-valid' : 'is-invalid'}`,
			})
			.setKey(value);
		// <EmailBlockLabel/>
		this.emailBlockLabel = new _widget__WEBPACK_IMPORTED_MODULE_2__["SimpleWidget"](
			'span',
			{
				innerHTML: value,
				className: 'email-block-label',
			});
		// <EmailBlockRemoveButton/>
		this.emailBlockRemoveButton = new _widget__WEBPACK_IMPORTED_MODULE_2__["SimpleWidget"](
			'button',
			{
				type: 'button',
				innerHTML: _remove_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
				className: 'email-block-remove-button',
			});
		this.emailBlockRemoveButton.element.node.setAttribute('aria-label', `Remove ${value}`);
		this.emailBlockRemoveButton.element.setEvent('click', this.removeEmail.bind(this));
		// Add children
		this.addChildren(this.emailBlockLabel, this.emailBlockRemoveButton);
	}

	removeEmail() {
		this.props.onRemove(this.props.email);
	}
}


/***/ }),

/***/ "./src/email-block/remove.svg":
/*!************************************!*\
  !*** ./src/email-block/remove.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg viewBox=\"0 0 8 8\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 0.8L7.2 0L4 3.2L0.8 0L0 0.8L3.2 4L0 7.2L0.8 8L4 4.8L7.2 8L8 7.2L4.8 4L8 0.8Z\" fill=\"#050038\"></path></svg>"

/***/ }),

/***/ "./src/email-block/styles.css":
/*!************************************!*\
  !*** ./src/email-block/styles.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/email-block/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/email-input/index.js":
/*!**********************************!*\
  !*** ./src/email-input/index.js ***!
  \**********************************/
/*! exports provided: EmailInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInput", function() { return EmailInput; });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/email-input/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widget */ "./src/widget/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");





class EmailInput extends _widget__WEBPACK_IMPORTED_MODULE_2__["Widget"] {
	constructor(props) {
		super(props);
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_1__["HtmlElement"](
			'input',
			{
				type: 'email',
				placeholder: 'add more people...',
				className: 'email-input',
			},
		);
		this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onPasteHandler = this.onPasteHandler.bind(this);
		this.element.setEvent('keyup', this.onKeyUpHandler);
		this.element.setEvent('blur', this.onChangeHandler);
		this.element.setEvent('paste', this.onPasteHandler);
	}

	onChangeHandler(event) {
		const value = event.target.value;
		this.props.onChange(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["transformValueToEmails"])(value));
		event.target.value = '';
	}

	onKeyUpHandler(event) {
		if (event.keyCode === _utils__WEBPACK_IMPORTED_MODULE_3__["ENTER_KEY"] || event.keyCode === _utils__WEBPACK_IMPORTED_MODULE_3__["COMMA_KEY"]) {
			this.onChangeHandler(event);
		}
	}

	onPasteHandler(event) {
		const value = event.clipboardData.getData('Text');
		this.props.onChange(Object(_utils__WEBPACK_IMPORTED_MODULE_3__["transformValueToEmails"])(value));
	}
}


/***/ }),

/***/ "./src/email-input/styles.css":
/*!************************************!*\
  !*** ./src/email-input/styles.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/email-input/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/email-list/index.js":
/*!*********************************!*\
  !*** ./src/email-list/index.js ***!
  \*********************************/
/*! exports provided: EmailList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailList", function() { return EmailList; });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/email-list/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");
/* harmony import */ var _email_block__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../email-block */ "./src/email-block/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _email_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../email-input */ "./src/email-input/index.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../widget */ "./src/widget/index.js");







class EmailList extends _widget__WEBPACK_IMPORTED_MODULE_5__["Widget"] {
	constructor(props) {
		super(props);
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_1__["HtmlElement"]('ul', {
			className: 'email-list',
		});
		this.emailInput = new _email_input__WEBPACK_IMPORTED_MODULE_4__["EmailInput"]({ onChange: this.props.onChange });
		this.addChildren(this.emailInput);
		this.previousEmails = [];
		this.update(this.props);
	}

	update(props) {
		const { emails } = props;
		const addedEmails = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["differenceBy"])(emails, this.previousEmails, 'value');
		const removedEmails = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["differenceBy"])(this.previousEmails, emails, 'value');
		removedEmails.forEach(email => {
			this.element.removeChildByKey(email.value);
		});
		addedEmails.forEach(email => {
			const emailBlock = new _email_block__WEBPACK_IMPORTED_MODULE_2__["EmailBlock"]({ email, onRemove: this.props.onRemove });
			this.element.insertBefore(emailBlock.element, this.emailInput.element);
		});
		this.previousEmails = [...emails];
		super.update(props);
	}
}


/***/ }),

/***/ "./src/email-list/styles.css":
/*!***********************************!*\
  !*** ./src/email-list/styles.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/email-list/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/emails-editor-content/index.js":
/*!********************************************!*\
  !*** ./src/emails-editor-content/index.js ***!
  \********************************************/
/*! exports provided: EmailsEditorContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsEditorContent", function() { return EmailsEditorContent; });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/emails-editor-content/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widget */ "./src/widget/index.js");
/* harmony import */ var _email_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email-list */ "./src/email-list/index.js");





class EmailsEditorContent extends _widget__WEBPACK_IMPORTED_MODULE_2__["Widget"] {
	constructor(props) {
		super(props);
		// <EmailsEditorFooter/>
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_1__["HtmlElement"](
			'div',
			{
				className: 'emails-editor-content',
			});
		// <EmailsEditorContentHeader/>
		this.header = new _widget__WEBPACK_IMPORTED_MODULE_2__["SimpleWidget"]('div', {
			className: 'header',
			innerHTML: this.props.headerTitle || 'Emails Editor',
		});
		// <EmailList/>
		this.emailList = new _email_list__WEBPACK_IMPORTED_MODULE_3__["EmailList"]({
			...this.state,
			...this.props,
		});
		this.addChildren(this.header, this.emailList);
	}
}


/***/ }),

/***/ "./src/emails-editor-content/styles.css":
/*!**********************************************!*\
  !*** ./src/emails-editor-content/styles.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/emails-editor-content/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/emails-editor-footer/index.js":
/*!*******************************************!*\
  !*** ./src/emails-editor-footer/index.js ***!
  \*******************************************/
/*! exports provided: EmailsEditorFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsEditorFooter", function() { return EmailsEditorFooter; });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/emails-editor-footer/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widget */ "./src/widget/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");





class EmailsEditorFooter extends _widget__WEBPACK_IMPORTED_MODULE_2__["Widget"] {
	constructor(props) {
		super(props);
		this.addRandomEmail = this.addRandomEmail.bind(this);
		this.displayEmailsCount = this.displayEmailsCount.bind(this);
		// <EmailsEditorFooter/>
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_1__["HtmlElement"]('div', {
			className: 'emails-editor-footer',
		});
		// <AddEmailButton/>
		this.addEmailButton = new _widget__WEBPACK_IMPORTED_MODULE_2__["SimpleWidget"]('button', {
			type: 'button',
			className: 'button primary',
			innerHTML: 'Add Email',
		});
		this.addEmailButton.element.setEvent('click', this.addRandomEmail);
		// <GetEmailsCountButton/>
		this.getEmailsCountButton = new _widget__WEBPACK_IMPORTED_MODULE_2__["SimpleWidget"]('button', {
			type: 'button',
			className: 'button primary',
			innerHTML: 'Get Emails Count',
		});
		this.getEmailsCountButton.element.setEvent('click', this.displayEmailsCount);
		// Add children
		this.addChildren(this.addEmailButton, this.getEmailsCountButton);
	}

	addRandomEmail() {
		this.props.addEmails([Object(_utils__WEBPACK_IMPORTED_MODULE_3__["generateRandomEmail"])()]);
	}

	displayEmailsCount() {
		const validEmailsCount = this.props.emails.filter(email => email.isValid).length;
		alert(`You have ${validEmailsCount} valid emails.`);
	}
}


/***/ }),

/***/ "./src/emails-editor-footer/styles.css":
/*!*********************************************!*\
  !*** ./src/emails-editor-footer/styles.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/emails-editor-footer/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/emails-editor/index.js":
/*!************************************!*\
  !*** ./src/emails-editor/index.js ***!
  \************************************/
/*! exports provided: EmailsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsEditor", function() { return EmailsEditor; });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/emails-editor/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../widget */ "./src/widget/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _emails_editor_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../emails-editor-footer */ "./src/emails-editor-footer/index.js");
/* harmony import */ var _emails_editor_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../emails-editor-content */ "./src/emails-editor-content/index.js");







class EmailsEditor extends _widget__WEBPACK_IMPORTED_MODULE_2__["Widget"] {
	constructor(props) {
		super(props);
		this.addEmails = this.addEmails.bind(this);
		this.removeEmail = this.removeEmail.bind(this);
		// State
		this.state = {
			emails: props.emails || [],
		};
		// <EmailsEditor/>
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_1__["HtmlElement"](
			props.containerNode,
			{
				className: 'emails-editor',
			});
		// <EmailsEditorContent/>
		this.emailsEditorContent = new _emails_editor_content__WEBPACK_IMPORTED_MODULE_5__["EmailsEditorContent"]({
			...this.state,
			headerTitle: this.props.headerTitle,
			onRemove: this.removeEmail,
			onChange: this.addEmails,
		});
		// <EmailsEditorFooter/>
		this.emailsEditorFooter = new _emails_editor_footer__WEBPACK_IMPORTED_MODULE_4__["EmailsEditorFooter"]({
			...this.state,
			addEmails: this.addEmails,
		});
		this.addChildren(this.emailsEditorContent, this.emailsEditorFooter);
	}

	addEmails(emails) {
		const newEmails = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["differenceBy"])(emails, this.state.emails, 'value');
		this.setState({
			emails: [
				...this.state.emails,
				...newEmails,
			],
		});
	}

	removeEmail(emailToRemove) {
		this.setState({
			emails: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["removeItem"])(this.state.emails, emailToRemove, 'value'),
		});
	}
}


/***/ }),

/***/ "./src/emails-editor/styles.css":
/*!**************************************!*\
  !*** ./src/emails-editor/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/emails-editor/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/html-element/index.js":
/*!***********************************!*\
  !*** ./src/html-element/index.js ***!
  \***********************************/
/*! exports provided: HtmlElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlElement", function() { return HtmlElement; });
class HtmlElement {
	constructor(node, options = {}) {
		// When node is a string then create element
		if (typeof node === 'string') {
			this.node = document.createElement(node);
		} else {
			this.node = node;
		}
		for (const optionsKey in options) {
			if (options.hasOwnProperty(optionsKey)) {
				this.node[optionsKey] = options[optionsKey];
			}
		}
	}

	appendChild(htmlElement) {
		htmlElement.parent = this;
		this.node.appendChild(htmlElement.node);

		return this;
	}

	insertBefore(htmlElement, nextSiblingElement) {
		this.node.insertBefore(htmlElement.node, nextSiblingElement.node);

		return this;
	}

	setKey(value) {
		this.node.setAttribute('key', value);

		return this;
	}

	removeChildByKey(value) {
		const childToRemove = this.node.querySelector(`[key="${value}"]`);
		this.node.removeChild(childToRemove);

		return this;
	}

	setEvent(eventName, handler) {
		this.node.addEventListener(eventName, event => {
			event.preventDefault();
			handler(event);
		});

		return this;
	}
}


/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emails_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emails-editor */ "./src/emails-editor/index.js");



function EmailsEditorWidget(containerNode, options = {}) {
	const emailsEditor = new _emails_editor__WEBPACK_IMPORTED_MODULE_1__["EmailsEditor"]({
		containerNode,
		...options,
	});

	return {
		instance: emailsEditor,
		getEmails: () => emailsEditor.state.emails,
	};
}

window.EmailsEditor = EmailsEditorWidget;


/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: generateRandomString, generateRandomEmail, differenceBy, removeItem, ENTER_KEY, COMMA_KEY, transformValueToEmails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomString", function() { return generateRandomString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomEmail", function() { return generateRandomEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "differenceBy", function() { return differenceBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER_KEY", function() { return ENTER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA_KEY", function() { return COMMA_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformValueToEmails", function() { return transformValueToEmails; });
const generateRandomString = () => Math.random().toString(36).substring(2, 15);

const generateRandomEmail = () => ({
	value: `${generateRandomString()}@mail.com`,
	isValid: true,
});

const differenceBy = (array1, array2, key) => {
	return array1.filter(a => !array2.some(b => b[key] === a[key]))
};

const removeItem = (array, item, key) => {
	const itemIndex = array.findIndex(anItem => anItem[key] === item[key]);
	return [
		...array.slice(0, itemIndex),
		...array.slice(itemIndex + 1, array.length),
	];
};

const ENTER_KEY = 13;
const COMMA_KEY = 188;

const EMAIL_REGEX = /^\w+([\.-]?(\w|\d)+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const validateEmail = email => EMAIL_REGEX.test(email);

const transformValueToEmails = value => value.split(',').map(rawEmail => {
	const email = rawEmail.trim();

	return {
		value: email,
		isValid: validateEmail(email),
	};
})
// Filter empty emails
.filter(email => Boolean(email.value));


/***/ }),

/***/ "./src/widget/index.js":
/*!*****************************!*\
  !*** ./src/widget/index.js ***!
  \*****************************/
/*! exports provided: Widget, SimpleWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Widget", function() { return Widget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleWidget", function() { return SimpleWidget; });
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");


class Widget {
	constructor(props) {
		this.props = props;
		this.children = [];
		this.state = null;
		this.element = null;
	}

	addChildren(...childrenWidgets) {
		childrenWidgets.forEach(childWidget => {
			this.children.push(childWidget);
			this.element.node.appendChild(childWidget.element.node);
		});

		return this;
	}

	setState(state) {
		this.state = {
			...this.state,
			...state,
		};
		this.children.forEach(child => child.update({ ...this.props, ...this.state }));

		return this;
	}

	update(props) {
		this.props = {
			...this.props,
			...props,
		};
		this.children.forEach(child => child.update(this.props));
	}
}

class SimpleWidget extends Widget {
	constructor(node, options) {
		super();
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_0__["HtmlElement"](node, options);
	}
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlsLWJsb2NrL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlsLWlucHV0L3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlsLWxpc3Qvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWxzLWVkaXRvci1jb250ZW50L3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlscy1lZGl0b3ItZm9vdGVyL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlscy1lZGl0b3Ivc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbC1ibG9jay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWwtYmxvY2svcmVtb3ZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWwtYmxvY2svc3R5bGVzLmNzcz9iZmEyIiwid2VicGFjazovLy8uL3NyYy9lbWFpbC1pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWwtaW5wdXQvc3R5bGVzLmNzcz8yYzlmIiwid2VicGFjazovLy8uL3NyYy9lbWFpbC1saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbC1saXN0L3N0eWxlcy5jc3M/NmNiMyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWxzLWVkaXRvci1jb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbHMtZWRpdG9yLWNvbnRlbnQvc3R5bGVzLmNzcz8yNGEyIiwid2VicGFjazovLy8uL3NyYy9lbWFpbHMtZWRpdG9yLWZvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWxzLWVkaXRvci1mb290ZXIvc3R5bGVzLmNzcz80MDAzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbHMtZWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbHMtZWRpdG9yL3N0eWxlcy5jc3M/ZmY5YyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbC1lbGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQUE7QUFBQTtBQUFBO0FBQThDOztBQUV2QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLCtCQUErQjs7QUFFOUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQix5REFBVztBQUNoQztBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jayB7XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMiwgMTUzLCAyNTUsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2suaXMtaW52YWxpZCB7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAjRDkyOTI5IGRhc2hlZCAxcHg7XFxuICAgIHBhZGRpbmc6IDJweCAwIDJweCAycHg7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jay5pcy1pbnZhbGlkIC5lbWFpbC1ibG9jay1sYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2stbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLXJlbW92ZS1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLXJlbW92ZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxNywgNDEsIDQxLCAwLjUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2VtYWlsLWJsb2NrL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLG9DQUFvQztJQUNwQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jayB7XFxuICAgIHBhZGRpbmc6IDJweCA0cHg7XFxuICAgIG1hcmdpbjogNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMiwgMTUzLCAyNTUsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2suaXMtaW52YWxpZCB7XFxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAjRDkyOTI5IGRhc2hlZCAxcHg7XFxuICAgIHBhZGRpbmc6IDJweCAwIDJweCAycHg7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jay5pcy1pbnZhbGlkIC5lbWFpbC1ibG9jay1sYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2stbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLXJlbW92ZS1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIHdpZHRoOiAxNnB4O1xcbiAgICBoZWlnaHQ6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDAgNHB4O1xcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLXJlbW92ZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIxNywgNDEsIDQxLCAwLjUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmVtYWlscy1lZGl0b3IgLmVtYWlsLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDE5NSwgMTk0LCAyMDcsIDAuOCk7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI0MzQzJDRjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9lbWFpbC1pbnB1dC9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmVtYWlscy1lZGl0b3IgLmVtYWlsLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDE5NSwgMTk0LCAyMDcsIDAuOCk7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogI0MzQzJDRjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1saXN0IHtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0MzQzJDRjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIG1heC1oZWlnaHQ6IDk2cHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvZW1haWwtbGlzdC9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZW1haWxzLWVkaXRvciAuZW1haWwtbGlzdCB7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDM0MyQ0Y7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXgtaGVpZ2h0OiA5NnB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmVtYWlscy1lZGl0b3IgLmVtYWlscy1lZGl0b3ItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjc7XFxuICAgIHBhZGRpbmc6IDI0cHggNTBweCA7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbHMtZWRpdG9yLWNvbnRlbnQgLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XFxuICAgIGNvbG9yOiAjMDUwMDM4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2VtYWlscy1lZGl0b3ItY29udGVudC9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZW1haWxzLWVkaXRvciAuZW1haWxzLWVkaXRvci1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGNztcXG4gICAgcGFkZGluZzogMjRweCA1MHB4IDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlscy1lZGl0b3ItY29udGVudCAuaGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjdweDtcXG4gICAgY29sb3I6ICMwNTAwMzg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1haWxzLWVkaXRvciAuZW1haWxzLWVkaXRvci1mb290ZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4IDUwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvZW1haWxzLWVkaXRvci1mb290ZXIvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZW1haWxzLWVkaXRvciAuZW1haWxzLWVkaXRvci1mb290ZXIge1xcbiAgICBwYWRkaW5nOiAyNHB4IDUwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1haWxzLWVkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9lbWFpbHMtZWRpdG9yL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5lbWFpbHMtZWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbWFpbHMtZWRpdG9yIC5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGJhY2tncm91bmQ6ICM0MjYyRkY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA5OCwgMjU1LCAwLjgpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2luZGV4LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLHdDQUF3QztBQUM1Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnMmZGlzcGxheT1zd2FwJyk7XFxuXFxuLmVtYWlscy1lZGl0b3IgLmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgcGFkZGluZzogMTBweCAxNnB4O1xcbiAgICBjb2xvcjogI0ZGRkZGRjtcXG4gICAgYmFja2dyb3VuZDogIzQyNjJGRjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDk4LCAyNTUsIDAuOCk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge0h0bWxFbGVtZW50fSBmcm9tICcuLi9odG1sLWVsZW1lbnQnO1xuaW1wb3J0IHtTaW1wbGVXaWRnZXQsIFdpZGdldH0gZnJvbSAnLi4vd2lkZ2V0JztcbmltcG9ydCByZW1vdmVJY29uIGZyb20gJy4vcmVtb3ZlLnN2Zyc7XG5cbmV4cG9ydCBjbGFzcyBFbWFpbEJsb2NrIGV4dGVuZHMgV2lkZ2V0IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0Y29uc3QgeyB2YWx1ZSwgaXNWYWxpZCB9ID0gdGhpcy5wcm9wcy5lbWFpbDtcblx0XHQvLyA8RW1haWxCbG9jay8+XG5cdFx0dGhpcy5lbGVtZW50ID0gbmV3IEh0bWxFbGVtZW50KFxuXHRcdFx0J2xpJyxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NOYW1lOiBgZW1haWwtYmxvY2sgJHtpc1ZhbGlkID8gJ2lzLXZhbGlkJyA6ICdpcy1pbnZhbGlkJ31gLFxuXHRcdFx0fSlcblx0XHRcdC5zZXRLZXkodmFsdWUpO1xuXHRcdC8vIDxFbWFpbEJsb2NrTGFiZWwvPlxuXHRcdHRoaXMuZW1haWxCbG9ja0xhYmVsID0gbmV3IFNpbXBsZVdpZGdldChcblx0XHRcdCdzcGFuJyxcblx0XHRcdHtcblx0XHRcdFx0aW5uZXJIVE1MOiB2YWx1ZSxcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZW1haWwtYmxvY2stbGFiZWwnLFxuXHRcdFx0fSk7XG5cdFx0Ly8gPEVtYWlsQmxvY2tSZW1vdmVCdXR0b24vPlxuXHRcdHRoaXMuZW1haWxCbG9ja1JlbW92ZUJ1dHRvbiA9IG5ldyBTaW1wbGVXaWRnZXQoXG5cdFx0XHQnYnV0dG9uJyxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRcdGlubmVySFRNTDogcmVtb3ZlSWNvbixcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZW1haWwtYmxvY2stcmVtb3ZlLWJ1dHRvbicsXG5cdFx0XHR9KTtcblx0XHR0aGlzLmVtYWlsQmxvY2tSZW1vdmVCdXR0b24uZWxlbWVudC5ub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGBSZW1vdmUgJHt2YWx1ZX1gKTtcblx0XHR0aGlzLmVtYWlsQmxvY2tSZW1vdmVCdXR0b24uZWxlbWVudC5zZXRFdmVudCgnY2xpY2snLCB0aGlzLnJlbW92ZUVtYWlsLmJpbmQodGhpcykpO1xuXHRcdC8vIEFkZCBjaGlsZHJlblxuXHRcdHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5lbWFpbEJsb2NrTGFiZWwsIHRoaXMuZW1haWxCbG9ja1JlbW92ZUJ1dHRvbik7XG5cdH1cblxuXHRyZW1vdmVFbWFpbCgpIHtcblx0XHR0aGlzLnByb3BzLm9uUmVtb3ZlKHRoaXMucHJvcHMuZW1haWwpO1xuXHR9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2aWV3Qm94PVxcXCIwIDAgOCA4XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiPjxwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNOCAwLjhMNy4yIDBMNCAzLjJMMC44IDBMMCAwLjhMMy4yIDRMMCA3LjJMMC44IDhMNCA0LjhMNy4yIDhMOCA3LjJMNC44IDRMOCAwLjhaXFxcIiBmaWxsPVxcXCIjMDUwMDM4XFxcIj48L3BhdGg+PC9zdmc+XCIiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9odG1sLWVsZW1lbnQnO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi4vd2lkZ2V0JztcbmltcG9ydCB7IENPTU1BX0tFWSwgRU5URVJfS0VZLCB0cmFuc2Zvcm1WYWx1ZVRvRW1haWxzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBFbWFpbElucHV0IGV4dGVuZHMgV2lkZ2V0IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5lbGVtZW50ID0gbmV3IEh0bWxFbGVtZW50KFxuXHRcdFx0J2lucHV0Jyxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogJ2VtYWlsJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdhZGQgbW9yZSBwZW9wbGUuLi4nLFxuXHRcdFx0XHRjbGFzc05hbWU6ICdlbWFpbC1pbnB1dCcsXG5cdFx0XHR9LFxuXHRcdCk7XG5cdFx0dGhpcy5vbktleVVwSGFuZGxlciA9IHRoaXMub25LZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vblBhc3RlSGFuZGxlciA9IHRoaXMub25QYXN0ZUhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmVsZW1lbnQuc2V0RXZlbnQoJ2tleXVwJywgdGhpcy5vbktleVVwSGFuZGxlcik7XG5cdFx0dGhpcy5lbGVtZW50LnNldEV2ZW50KCdibHVyJywgdGhpcy5vbkNoYW5nZUhhbmRsZXIpO1xuXHRcdHRoaXMuZWxlbWVudC5zZXRFdmVudCgncGFzdGUnLCB0aGlzLm9uUGFzdGVIYW5kbGVyKTtcblx0fVxuXG5cdG9uQ2hhbmdlSGFuZGxlcihldmVudCkge1xuXHRcdGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UodHJhbnNmb3JtVmFsdWVUb0VtYWlscyh2YWx1ZSkpO1xuXHRcdGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xuXHR9XG5cblx0b25LZXlVcEhhbmRsZXIoZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZIHx8IGV2ZW50LmtleUNvZGUgPT09IENPTU1BX0tFWSkge1xuXHRcdFx0dGhpcy5vbkNoYW5nZUhhbmRsZXIoZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdG9uUGFzdGVIYW5kbGVyKGV2ZW50KSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKHRyYW5zZm9ybVZhbHVlVG9FbWFpbHModmFsdWUpKTtcblx0fVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSAnLi4vaHRtbC1lbGVtZW50JztcbmltcG9ydCB7IEVtYWlsQmxvY2sgfSBmcm9tICcuLi9lbWFpbC1ibG9jayc7XG5pbXBvcnQgeyBkaWZmZXJlbmNlQnkgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7IEVtYWlsSW5wdXQgfSBmcm9tIFwiLi4vZW1haWwtaW5wdXRcIjtcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldCc7XG5cbmV4cG9ydCBjbGFzcyBFbWFpbExpc3QgZXh0ZW5kcyBXaWRnZXQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLmVsZW1lbnQgPSBuZXcgSHRtbEVsZW1lbnQoJ3VsJywge1xuXHRcdFx0Y2xhc3NOYW1lOiAnZW1haWwtbGlzdCcsXG5cdFx0fSk7XG5cdFx0dGhpcy5lbWFpbElucHV0ID0gbmV3IEVtYWlsSW5wdXQoeyBvbkNoYW5nZTogdGhpcy5wcm9wcy5vbkNoYW5nZSB9KTtcblx0XHR0aGlzLmFkZENoaWxkcmVuKHRoaXMuZW1haWxJbnB1dCk7XG5cdFx0dGhpcy5wcmV2aW91c0VtYWlscyA9IFtdO1xuXHRcdHRoaXMudXBkYXRlKHRoaXMucHJvcHMpO1xuXHR9XG5cblx0dXBkYXRlKHByb3BzKSB7XG5cdFx0Y29uc3QgeyBlbWFpbHMgfSA9IHByb3BzO1xuXHRcdGNvbnN0IGFkZGVkRW1haWxzID0gZGlmZmVyZW5jZUJ5KGVtYWlscywgdGhpcy5wcmV2aW91c0VtYWlscywgJ3ZhbHVlJyk7XG5cdFx0Y29uc3QgcmVtb3ZlZEVtYWlscyA9IGRpZmZlcmVuY2VCeSh0aGlzLnByZXZpb3VzRW1haWxzLCBlbWFpbHMsICd2YWx1ZScpO1xuXHRcdHJlbW92ZWRFbWFpbHMuZm9yRWFjaChlbWFpbCA9PiB7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGRCeUtleShlbWFpbC52YWx1ZSk7XG5cdFx0fSk7XG5cdFx0YWRkZWRFbWFpbHMuZm9yRWFjaChlbWFpbCA9PiB7XG5cdFx0XHRjb25zdCBlbWFpbEJsb2NrID0gbmV3IEVtYWlsQmxvY2soeyBlbWFpbCwgb25SZW1vdmU6IHRoaXMucHJvcHMub25SZW1vdmUgfSk7XG5cdFx0XHR0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKGVtYWlsQmxvY2suZWxlbWVudCwgdGhpcy5lbWFpbElucHV0LmVsZW1lbnQpO1xuXHRcdH0pO1xuXHRcdHRoaXMucHJldmlvdXNFbWFpbHMgPSBbLi4uZW1haWxzXTtcblx0XHRzdXBlci51cGRhdGUocHJvcHMpO1xuXHR9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9odG1sLWVsZW1lbnQnO1xuaW1wb3J0IHsgU2ltcGxlV2lkZ2V0LCBXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQnO1xuaW1wb3J0IHsgRW1haWxMaXN0IH0gZnJvbSAnLi4vZW1haWwtbGlzdCc7XG5cbmV4cG9ydCBjbGFzcyBFbWFpbHNFZGl0b3JDb250ZW50IGV4dGVuZHMgV2lkZ2V0IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0Ly8gPEVtYWlsc0VkaXRvckZvb3Rlci8+XG5cdFx0dGhpcy5lbGVtZW50ID0gbmV3IEh0bWxFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTmFtZTogJ2VtYWlscy1lZGl0b3ItY29udGVudCcsXG5cdFx0XHR9KTtcblx0XHQvLyA8RW1haWxzRWRpdG9yQ29udGVudEhlYWRlci8+XG5cdFx0dGhpcy5oZWFkZXIgPSBuZXcgU2ltcGxlV2lkZ2V0KCdkaXYnLCB7XG5cdFx0XHRjbGFzc05hbWU6ICdoZWFkZXInLFxuXHRcdFx0aW5uZXJIVE1MOiB0aGlzLnByb3BzLmhlYWRlclRpdGxlIHx8ICdFbWFpbHMgRWRpdG9yJyxcblx0XHR9KTtcblx0XHQvLyA8RW1haWxMaXN0Lz5cblx0XHR0aGlzLmVtYWlsTGlzdCA9IG5ldyBFbWFpbExpc3Qoe1xuXHRcdFx0Li4udGhpcy5zdGF0ZSxcblx0XHRcdC4uLnRoaXMucHJvcHMsXG5cdFx0fSk7XG5cdFx0dGhpcy5hZGRDaGlsZHJlbih0aGlzLmhlYWRlciwgdGhpcy5lbWFpbExpc3QpO1xuXHR9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9odG1sLWVsZW1lbnQnO1xuaW1wb3J0IHsgV2lkZ2V0LCBTaW1wbGVXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQnO1xuaW1wb3J0IHsgZ2VuZXJhdGVSYW5kb21FbWFpbCB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEVtYWlsc0VkaXRvckZvb3RlciBleHRlbmRzIFdpZGdldCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuYWRkUmFuZG9tRW1haWwgPSB0aGlzLmFkZFJhbmRvbUVtYWlsLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kaXNwbGF5RW1haWxzQ291bnQgPSB0aGlzLmRpc3BsYXlFbWFpbHNDb3VudC5iaW5kKHRoaXMpO1xuXHRcdC8vIDxFbWFpbHNFZGl0b3JGb290ZXIvPlxuXHRcdHRoaXMuZWxlbWVudCA9IG5ldyBIdG1sRWxlbWVudCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lOiAnZW1haWxzLWVkaXRvci1mb290ZXInLFxuXHRcdH0pO1xuXHRcdC8vIDxBZGRFbWFpbEJ1dHRvbi8+XG5cdFx0dGhpcy5hZGRFbWFpbEJ1dHRvbiA9IG5ldyBTaW1wbGVXaWRnZXQoJ2J1dHRvbicsIHtcblx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0Y2xhc3NOYW1lOiAnYnV0dG9uIHByaW1hcnknLFxuXHRcdFx0aW5uZXJIVE1MOiAnQWRkIEVtYWlsJyxcblx0XHR9KTtcblx0XHR0aGlzLmFkZEVtYWlsQnV0dG9uLmVsZW1lbnQuc2V0RXZlbnQoJ2NsaWNrJywgdGhpcy5hZGRSYW5kb21FbWFpbCk7XG5cdFx0Ly8gPEdldEVtYWlsc0NvdW50QnV0dG9uLz5cblx0XHR0aGlzLmdldEVtYWlsc0NvdW50QnV0dG9uID0gbmV3IFNpbXBsZVdpZGdldCgnYnV0dG9uJywge1xuXHRcdFx0dHlwZTogJ2J1dHRvbicsXG5cdFx0XHRjbGFzc05hbWU6ICdidXR0b24gcHJpbWFyeScsXG5cdFx0XHRpbm5lckhUTUw6ICdHZXQgRW1haWxzIENvdW50Jyxcblx0XHR9KTtcblx0XHR0aGlzLmdldEVtYWlsc0NvdW50QnV0dG9uLmVsZW1lbnQuc2V0RXZlbnQoJ2NsaWNrJywgdGhpcy5kaXNwbGF5RW1haWxzQ291bnQpO1xuXHRcdC8vIEFkZCBjaGlsZHJlblxuXHRcdHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5hZGRFbWFpbEJ1dHRvbiwgdGhpcy5nZXRFbWFpbHNDb3VudEJ1dHRvbik7XG5cdH1cblxuXHRhZGRSYW5kb21FbWFpbCgpIHtcblx0XHR0aGlzLnByb3BzLmFkZEVtYWlscyhbZ2VuZXJhdGVSYW5kb21FbWFpbCgpXSk7XG5cdH1cblxuXHRkaXNwbGF5RW1haWxzQ291bnQoKSB7XG5cdFx0Y29uc3QgdmFsaWRFbWFpbHNDb3VudCA9IHRoaXMucHJvcHMuZW1haWxzLmZpbHRlcihlbWFpbCA9PiBlbWFpbC5pc1ZhbGlkKS5sZW5ndGg7XG5cdFx0YWxlcnQoYFlvdSBoYXZlICR7dmFsaWRFbWFpbHNDb3VudH0gdmFsaWQgZW1haWxzLmApO1xuXHR9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9odG1sLWVsZW1lbnQnO1xuaW1wb3J0IHsgV2lkZ2V0IH0gZnJvbSAnLi4vd2lkZ2V0JztcbmltcG9ydCB7IGRpZmZlcmVuY2VCeSwgcmVtb3ZlSXRlbSB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEVtYWlsc0VkaXRvckZvb3RlciB9IGZyb20gJy4uL2VtYWlscy1lZGl0b3ItZm9vdGVyJztcbmltcG9ydCB7IEVtYWlsc0VkaXRvckNvbnRlbnQgfSBmcm9tICcuLi9lbWFpbHMtZWRpdG9yLWNvbnRlbnQnO1xuXG5leHBvcnQgY2xhc3MgRW1haWxzRWRpdG9yIGV4dGVuZHMgV2lkZ2V0IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5hZGRFbWFpbHMgPSB0aGlzLmFkZEVtYWlscy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVtb3ZlRW1haWwgPSB0aGlzLnJlbW92ZUVtYWlsLmJpbmQodGhpcyk7XG5cdFx0Ly8gU3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0ZW1haWxzOiBwcm9wcy5lbWFpbHMgfHwgW10sXG5cdFx0fTtcblx0XHQvLyA8RW1haWxzRWRpdG9yLz5cblx0XHR0aGlzLmVsZW1lbnQgPSBuZXcgSHRtbEVsZW1lbnQoXG5cdFx0XHRwcm9wcy5jb250YWluZXJOb2RlLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc05hbWU6ICdlbWFpbHMtZWRpdG9yJyxcblx0XHRcdH0pO1xuXHRcdC8vIDxFbWFpbHNFZGl0b3JDb250ZW50Lz5cblx0XHR0aGlzLmVtYWlsc0VkaXRvckNvbnRlbnQgPSBuZXcgRW1haWxzRWRpdG9yQ29udGVudCh7XG5cdFx0XHQuLi50aGlzLnN0YXRlLFxuXHRcdFx0aGVhZGVyVGl0bGU6IHRoaXMucHJvcHMuaGVhZGVyVGl0bGUsXG5cdFx0XHRvblJlbW92ZTogdGhpcy5yZW1vdmVFbWFpbCxcblx0XHRcdG9uQ2hhbmdlOiB0aGlzLmFkZEVtYWlscyxcblx0XHR9KTtcblx0XHQvLyA8RW1haWxzRWRpdG9yRm9vdGVyLz5cblx0XHR0aGlzLmVtYWlsc0VkaXRvckZvb3RlciA9IG5ldyBFbWFpbHNFZGl0b3JGb290ZXIoe1xuXHRcdFx0Li4udGhpcy5zdGF0ZSxcblx0XHRcdGFkZEVtYWlsczogdGhpcy5hZGRFbWFpbHMsXG5cdFx0fSk7XG5cdFx0dGhpcy5hZGRDaGlsZHJlbih0aGlzLmVtYWlsc0VkaXRvckNvbnRlbnQsIHRoaXMuZW1haWxzRWRpdG9yRm9vdGVyKTtcblx0fVxuXG5cdGFkZEVtYWlscyhlbWFpbHMpIHtcblx0XHRjb25zdCBuZXdFbWFpbHMgPSBkaWZmZXJlbmNlQnkoZW1haWxzLCB0aGlzLnN0YXRlLmVtYWlscywgJ3ZhbHVlJyk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRlbWFpbHM6IFtcblx0XHRcdFx0Li4udGhpcy5zdGF0ZS5lbWFpbHMsXG5cdFx0XHRcdC4uLm5ld0VtYWlscyxcblx0XHRcdF0sXG5cdFx0fSk7XG5cdH1cblxuXHRyZW1vdmVFbWFpbChlbWFpbFRvUmVtb3ZlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRlbWFpbHM6IHJlbW92ZUl0ZW0odGhpcy5zdGF0ZS5lbWFpbHMsIGVtYWlsVG9SZW1vdmUsICd2YWx1ZScpLFxuXHRcdH0pO1xuXHR9XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGNsYXNzIEh0bWxFbGVtZW50IHtcblx0Y29uc3RydWN0b3Iobm9kZSwgb3B0aW9ucyA9IHt9KSB7XG5cdFx0Ly8gV2hlbiBub2RlIGlzIGEgc3RyaW5nIHRoZW4gY3JlYXRlIGVsZW1lbnRcblx0XHRpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IG9wdGlvbnNLZXkgaW4gb3B0aW9ucykge1xuXHRcdFx0aWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkob3B0aW9uc0tleSkpIHtcblx0XHRcdFx0dGhpcy5ub2RlW29wdGlvbnNLZXldID0gb3B0aW9uc1tvcHRpb25zS2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRhcHBlbmRDaGlsZChodG1sRWxlbWVudCkge1xuXHRcdGh0bWxFbGVtZW50LnBhcmVudCA9IHRoaXM7XG5cdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGh0bWxFbGVtZW50Lm5vZGUpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpbnNlcnRCZWZvcmUoaHRtbEVsZW1lbnQsIG5leHRTaWJsaW5nRWxlbWVudCkge1xuXHRcdHRoaXMubm9kZS5pbnNlcnRCZWZvcmUoaHRtbEVsZW1lbnQubm9kZSwgbmV4dFNpYmxpbmdFbGVtZW50Lm5vZGUpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRLZXkodmFsdWUpIHtcblx0XHR0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdrZXknLCB2YWx1ZSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJlbW92ZUNoaWxkQnlLZXkodmFsdWUpIHtcblx0XHRjb25zdCBjaGlsZFRvUmVtb3ZlID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoYFtrZXk9XCIke3ZhbHVlfVwiXWApO1xuXHRcdHRoaXMubm9kZS5yZW1vdmVDaGlsZChjaGlsZFRvUmVtb3ZlKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RXZlbnQoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdFx0dGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aGFuZGxlcihldmVudCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBFbWFpbHNFZGl0b3IgfSBmcm9tICcuL2VtYWlscy1lZGl0b3InO1xuXG5mdW5jdGlvbiBFbWFpbHNFZGl0b3JXaWRnZXQoY29udGFpbmVyTm9kZSwgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IGVtYWlsc0VkaXRvciA9IG5ldyBFbWFpbHNFZGl0b3Ioe1xuXHRcdGNvbnRhaW5lck5vZGUsXG5cdFx0Li4ub3B0aW9ucyxcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRpbnN0YW5jZTogZW1haWxzRWRpdG9yLFxuXHRcdGdldEVtYWlsczogKCkgPT4gZW1haWxzRWRpdG9yLnN0YXRlLmVtYWlscyxcblx0fTtcbn1cblxud2luZG93LkVtYWlsc0VkaXRvciA9IEVtYWlsc0VkaXRvcldpZGdldDtcbiIsImV4cG9ydCBjb25zdCBnZW5lcmF0ZVJhbmRvbVN0cmluZyA9ICgpID0+IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyLCAxNSk7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVJhbmRvbUVtYWlsID0gKCkgPT4gKHtcblx0dmFsdWU6IGAke2dlbmVyYXRlUmFuZG9tU3RyaW5nKCl9QG1haWwuY29tYCxcblx0aXNWYWxpZDogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZGlmZmVyZW5jZUJ5ID0gKGFycmF5MSwgYXJyYXkyLCBrZXkpID0+IHtcblx0cmV0dXJuIGFycmF5MS5maWx0ZXIoYSA9PiAhYXJyYXkyLnNvbWUoYiA9PiBiW2tleV0gPT09IGFba2V5XSkpXG59O1xuXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChhcnJheSwgaXRlbSwga2V5KSA9PiB7XG5cdGNvbnN0IGl0ZW1JbmRleCA9IGFycmF5LmZpbmRJbmRleChhbkl0ZW0gPT4gYW5JdGVtW2tleV0gPT09IGl0ZW1ba2V5XSk7XG5cdHJldHVybiBbXG5cdFx0Li4uYXJyYXkuc2xpY2UoMCwgaXRlbUluZGV4KSxcblx0XHQuLi5hcnJheS5zbGljZShpdGVtSW5kZXggKyAxLCBhcnJheS5sZW5ndGgpLFxuXHRdO1xufTtcblxuZXhwb3J0IGNvbnN0IEVOVEVSX0tFWSA9IDEzO1xuZXhwb3J0IGNvbnN0IENPTU1BX0tFWSA9IDE4ODtcblxuY29uc3QgRU1BSUxfUkVHRVggPSAvXlxcdysoW1xcLi1dPyhcXHd8XFxkKSspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvO1xuXG5jb25zdCB2YWxpZGF0ZUVtYWlsID0gZW1haWwgPT4gRU1BSUxfUkVHRVgudGVzdChlbWFpbCk7XG5cbmV4cG9ydCBjb25zdCB0cmFuc2Zvcm1WYWx1ZVRvRW1haWxzID0gdmFsdWUgPT4gdmFsdWUuc3BsaXQoJywnKS5tYXAocmF3RW1haWwgPT4ge1xuXHRjb25zdCBlbWFpbCA9IHJhd0VtYWlsLnRyaW0oKTtcblxuXHRyZXR1cm4ge1xuXHRcdHZhbHVlOiBlbWFpbCxcblx0XHRpc1ZhbGlkOiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSxcblx0fTtcbn0pXG4vLyBGaWx0ZXIgZW1wdHkgZW1haWxzXG4uZmlsdGVyKGVtYWlsID0+IEJvb2xlYW4oZW1haWwudmFsdWUpKTtcbiIsImltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIi4uL2h0bWwtZWxlbWVudFwiO1xuXG5leHBvcnQgY2xhc3MgV2lkZ2V0IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1xuXHRcdHRoaXMuc3RhdGUgPSBudWxsO1xuXHRcdHRoaXMuZWxlbWVudCA9IG51bGw7XG5cdH1cblxuXHRhZGRDaGlsZHJlbiguLi5jaGlsZHJlbldpZGdldHMpIHtcblx0XHRjaGlsZHJlbldpZGdldHMuZm9yRWFjaChjaGlsZFdpZGdldCA9PiB7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGRXaWRnZXQpO1xuXHRcdFx0dGhpcy5lbGVtZW50Lm5vZGUuYXBwZW5kQ2hpbGQoY2hpbGRXaWRnZXQuZWxlbWVudC5ub2RlKTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0U3RhdGUoc3RhdGUpIHtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Li4udGhpcy5zdGF0ZSxcblx0XHRcdC4uLnN0YXRlLFxuXHRcdH07XG5cdFx0dGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnVwZGF0ZSh7IC4uLnRoaXMucHJvcHMsIC4uLnRoaXMuc3RhdGUgfSkpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR1cGRhdGUocHJvcHMpIHtcblx0XHR0aGlzLnByb3BzID0ge1xuXHRcdFx0Li4udGhpcy5wcm9wcyxcblx0XHRcdC4uLnByb3BzLFxuXHRcdH07XG5cdFx0dGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnVwZGF0ZSh0aGlzLnByb3BzKSk7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpbXBsZVdpZGdldCBleHRlbmRzIFdpZGdldCB7XG5cdGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuZWxlbWVudCA9IG5ldyBIdG1sRWxlbWVudChub2RlLCBvcHRpb25zKTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==