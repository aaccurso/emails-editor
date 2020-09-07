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
___CSS_LOADER_EXPORT___.push([module.i, ".emails-editor .email-block {\n    padding: 2px 4px;\n    margin: 4px;\n    background: rgba(102, 153, 255, 0.2);\n    border-radius: 100px;\n}\n\n.emails-editor .email-block.is-invalid {\n    margin-right: 4px;\n    background: none;\n    border-radius: 0;\n    border-bottom: #D92929 dashed 1px;\n}\n\n.emails-editor .email-block.is-invalid .email-block-label {\n    margin-left: 0;\n}\n\n.emails-editor .email-block-label {\n    margin-left: 10px;\n}\n\n.emails-editor .email-block-remove-button {\n    border: none;\n    background: none;\n    width: 16px;\n    height: 16px;\n    padding: 0 4px;\n    margin: 0 3px;\n    cursor: pointer;\n    border-radius: 2px;\n    transition: background-color 100ms ease-in-out;\n}\n\n.emails-editor .email-block-remove-button:hover {\n    background: rgba(217, 41, 41, 0.5);\n}\n", "",{"version":3,"sources":["webpack://src/email-block/styles.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,WAAW;IACX,oCAAoC;IACpC,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,cAAc;IACd,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,8CAA8C;AAClD;;AAEA;IACI,kCAAkC;AACtC","sourcesContent":[".emails-editor .email-block {\n    padding: 2px 4px;\n    margin: 4px;\n    background: rgba(102, 153, 255, 0.2);\n    border-radius: 100px;\n}\n\n.emails-editor .email-block.is-invalid {\n    margin-right: 4px;\n    background: none;\n    border-radius: 0;\n    border-bottom: #D92929 dashed 1px;\n}\n\n.emails-editor .email-block.is-invalid .email-block-label {\n    margin-left: 0;\n}\n\n.emails-editor .email-block-label {\n    margin-left: 10px;\n}\n\n.emails-editor .email-block-remove-button {\n    border: none;\n    background: none;\n    width: 16px;\n    height: 16px;\n    padding: 0 4px;\n    margin: 0 3px;\n    cursor: pointer;\n    border-radius: 2px;\n    transition: background-color 100ms ease-in-out;\n}\n\n.emails-editor .email-block-remove-button:hover {\n    background: rgba(217, 41, 41, 0.5);\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlsLWJsb2NrL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlsLWlucHV0L3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlsLWxpc3Qvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWxzLWVkaXRvci1jb250ZW50L3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlscy1lZGl0b3ItZm9vdGVyL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlscy1lZGl0b3Ivc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbC1ibG9jay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWwtYmxvY2svcmVtb3ZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWwtYmxvY2svc3R5bGVzLmNzcz9iZmEyIiwid2VicGFjazovLy8uL3NyYy9lbWFpbC1pbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWwtaW5wdXQvc3R5bGVzLmNzcz8yYzlmIiwid2VicGFjazovLy8uL3NyYy9lbWFpbC1saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbC1saXN0L3N0eWxlcy5jc3M/NmNiMyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWxzLWVkaXRvci1jb250ZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbHMtZWRpdG9yLWNvbnRlbnQvc3R5bGVzLmNzcz8yNGEyIiwid2VicGFjazovLy8uL3NyYy9lbWFpbHMtZWRpdG9yLWZvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWxzLWVkaXRvci1mb290ZXIvc3R5bGVzLmNzcz80MDAzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbHMtZWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbHMtZWRpdG9yL3N0eWxlcy5jc3M/ZmY5YyIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbC1lbGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy93aWRnZXQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FB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O0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBOEM7O0FBRXZDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsK0JBQStCOztBQUU5RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EscUJBQXFCLHlEQUFXO0FBQ2hDO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrIHtcXG4gICAgcGFkZGluZzogMnB4IDRweDtcXG4gICAgbWFyZ2luOiA0cHg7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAyLCAxNTMsIDI1NSwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jay5pcy1pbnZhbGlkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIGJvcmRlci1ib3R0b206ICNEOTI5MjkgZGFzaGVkIDFweDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLmlzLWludmFsaWQgLmVtYWlsLWJsb2NrLWxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jay1sYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2stcmVtb3ZlLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gICAgcGFkZGluZzogMCA0cHg7XFxuICAgIG1hcmdpbjogMCAzcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDEwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2stcmVtb3ZlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjE3LCA0MSwgNDEsIDAuNSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvZW1haWwtYmxvY2svc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2sge1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDIsIDE1MywgMjU1LCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLmlzLWludmFsaWQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogI0Q5MjkyOSBkYXNoZWQgMXB4O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2suaXMtaW52YWxpZCAuZW1haWwtYmxvY2stbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLWxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jay1yZW1vdmUtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgbWFyZ2luOiAwIDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jay1yZW1vdmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTcsIDQxLCA0MSwgMC41KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgb3V0bGluZS1jb2xvcjogcmdiYSgxOTUsIDE5NCwgMjA3LCAwLjgpO1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNDM0MyQ0Y7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvZW1haWwtaW5wdXQvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgb3V0bGluZS1jb2xvcjogcmdiYSgxOTUsIDE5NCwgMjA3LCAwLjgpO1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNDM0MyQ0Y7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1haWxzLWVkaXRvciAuZW1haWwtbGlzdCB7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDM0MyQ0Y7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXgtaGVpZ2h0OiA5NnB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2VtYWlsLWxpc3Qvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmVtYWlscy1lZGl0b3IgLmVtYWlsLWxpc3Qge1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQzNDMkNGO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgbWF4LWhlaWdodDogOTZweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbWFpbHMtZWRpdG9yIC5lbWFpbHMtZWRpdG9yLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kOiAjRjhGOEY3O1xcbiAgICBwYWRkaW5nOiAyNHB4IDUwcHggO1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWxzLWVkaXRvci1jb250ZW50IC5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xcbiAgICBjb2xvcjogIzA1MDAzODtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9lbWFpbHMtZWRpdG9yLWNvbnRlbnQvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmVtYWlscy1lZGl0b3IgLmVtYWlscy1lZGl0b3ItY29udGVudCB7XFxuICAgIGJhY2tncm91bmQ6ICNGOEY4Rjc7XFxuICAgIHBhZGRpbmc6IDI0cHggNTBweCA7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbHMtZWRpdG9yLWNvbnRlbnQgLmhlYWRlciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XFxuICAgIGNvbG9yOiAjMDUwMDM4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmVtYWlscy1lZGl0b3IgLmVtYWlscy1lZGl0b3ItZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMjRweCA1MHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2VtYWlscy1lZGl0b3ItZm9vdGVyL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmVtYWlscy1lZGl0b3IgLmVtYWlscy1lZGl0b3ItZm9vdGVyIHtcXG4gICAgcGFkZGluZzogMjRweCA1MHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmVtYWlscy1lZGl0b3Ige1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbiAgICBib3gtc2hhZG93OiAwcHggOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvZW1haWxzLWVkaXRvci9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZW1haWxzLWVkaXRvciB7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZW1haWxzLWVkaXRvciAuYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XFxuICAgIGNvbG9yOiAjRkZGRkZGO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDI2MkZGO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBsaW5lLWhlaWdodDogMjRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgOTgsIDI1NSwgMC44KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9pbmRleC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSx3Q0FBd0M7QUFDNUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5lbWFpbHMtZWRpdG9yIC5idXR0b24ge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcXG4gICAgY29sb3I6ICNGRkZGRkY7XFxuICAgIGJhY2tncm91bmQ6ICM0MjYyRkY7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA5OCwgMjU1LCAwLjgpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHtIdG1sRWxlbWVudH0gZnJvbSAnLi4vaHRtbC1lbGVtZW50JztcbmltcG9ydCB7U2ltcGxlV2lkZ2V0LCBXaWRnZXR9IGZyb20gJy4uL3dpZGdldCc7XG5pbXBvcnQgcmVtb3ZlSWNvbiBmcm9tICcuL3JlbW92ZS5zdmcnO1xuXG5leHBvcnQgY2xhc3MgRW1haWxCbG9jayBleHRlbmRzIFdpZGdldCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdGNvbnN0IHsgdmFsdWUsIGlzVmFsaWQgfSA9IHRoaXMucHJvcHMuZW1haWw7XG5cdFx0Ly8gPEVtYWlsQmxvY2svPlxuXHRcdHRoaXMuZWxlbWVudCA9IG5ldyBIdG1sRWxlbWVudChcblx0XHRcdCdsaScsXG5cdFx0XHR7XG5cdFx0XHRcdGNsYXNzTmFtZTogYGVtYWlsLWJsb2NrICR7aXNWYWxpZCA/ICdpcy12YWxpZCcgOiAnaXMtaW52YWxpZCd9YCxcblx0XHRcdH0pXG5cdFx0XHQuc2V0S2V5KHZhbHVlKTtcblx0XHQvLyA8RW1haWxCbG9ja0xhYmVsLz5cblx0XHR0aGlzLmVtYWlsQmxvY2tMYWJlbCA9IG5ldyBTaW1wbGVXaWRnZXQoXG5cdFx0XHQnc3BhbicsXG5cdFx0XHR7XG5cdFx0XHRcdGlubmVySFRNTDogdmFsdWUsXG5cdFx0XHRcdGNsYXNzTmFtZTogJ2VtYWlsLWJsb2NrLWxhYmVsJyxcblx0XHRcdH0pO1xuXHRcdC8vIDxFbWFpbEJsb2NrUmVtb3ZlQnV0dG9uLz5cblx0XHR0aGlzLmVtYWlsQmxvY2tSZW1vdmVCdXR0b24gPSBuZXcgU2ltcGxlV2lkZ2V0KFxuXHRcdFx0J2J1dHRvbicsXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRpbm5lckhUTUw6IHJlbW92ZUljb24sXG5cdFx0XHRcdGNsYXNzTmFtZTogJ2VtYWlsLWJsb2NrLXJlbW92ZS1idXR0b24nLFxuXHRcdFx0fSk7XG5cdFx0dGhpcy5lbWFpbEJsb2NrUmVtb3ZlQnV0dG9uLmVsZW1lbnQubm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBgUmVtb3ZlICR7dmFsdWV9YCk7XG5cdFx0dGhpcy5lbWFpbEJsb2NrUmVtb3ZlQnV0dG9uLmVsZW1lbnQuc2V0RXZlbnQoJ2NsaWNrJywgdGhpcy5yZW1vdmVFbWFpbC5iaW5kKHRoaXMpKTtcblx0XHQvLyBBZGQgY2hpbGRyZW5cblx0XHR0aGlzLmFkZENoaWxkcmVuKHRoaXMuZW1haWxCbG9ja0xhYmVsLCB0aGlzLmVtYWlsQmxvY2tSZW1vdmVCdXR0b24pO1xuXHR9XG5cblx0cmVtb3ZlRW1haWwoKSB7XG5cdFx0dGhpcy5wcm9wcy5vblJlbW92ZSh0aGlzLnByb3BzLmVtYWlsKTtcblx0fVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmlld0JveD1cXFwiMCAwIDggOFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIj48cGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTggMC44TDcuMiAwTDQgMy4yTDAuOCAwTDAgMC44TDMuMiA0TDAgNy4yTDAuOCA4TDQgNC44TDcuMiA4TDggNy4yTDQuOCA0TDggMC44WlxcXCIgZmlsbD1cXFwiIzA1MDAzOFxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSAnLi4vaHRtbC1lbGVtZW50JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldCc7XG5pbXBvcnQgeyBDT01NQV9LRVksIEVOVEVSX0tFWSwgdHJhbnNmb3JtVmFsdWVUb0VtYWlscyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgRW1haWxJbnB1dCBleHRlbmRzIFdpZGdldCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuZWxlbWVudCA9IG5ldyBIdG1sRWxlbWVudChcblx0XHRcdCdpbnB1dCcsXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6ICdlbWFpbCcsXG5cdFx0XHRcdHBsYWNlaG9sZGVyOiAnYWRkIG1vcmUgcGVvcGxlLi4uJyxcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZW1haWwtaW5wdXQnLFxuXHRcdFx0fSxcblx0XHQpO1xuXHRcdHRoaXMub25LZXlVcEhhbmRsZXIgPSB0aGlzLm9uS2V5VXBIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbkNoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25QYXN0ZUhhbmRsZXIgPSB0aGlzLm9uUGFzdGVIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5lbGVtZW50LnNldEV2ZW50KCdrZXl1cCcsIHRoaXMub25LZXlVcEhhbmRsZXIpO1xuXHRcdHRoaXMuZWxlbWVudC5zZXRFdmVudCgnYmx1cicsIHRoaXMub25DaGFuZ2VIYW5kbGVyKTtcblx0XHR0aGlzLmVsZW1lbnQuc2V0RXZlbnQoJ3Bhc3RlJywgdGhpcy5vblBhc3RlSGFuZGxlcik7XG5cdH1cblxuXHRvbkNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcblx0XHRjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKHRyYW5zZm9ybVZhbHVlVG9FbWFpbHModmFsdWUpKTtcblx0XHRldmVudC50YXJnZXQudmFsdWUgPSAnJztcblx0fVxuXG5cdG9uS2V5VXBIYW5kbGVyKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LmtleUNvZGUgPT09IEVOVEVSX0tFWSB8fCBldmVudC5rZXlDb2RlID09PSBDT01NQV9LRVkpIHtcblx0XHRcdHRoaXMub25DaGFuZ2VIYW5kbGVyKGV2ZW50KTtcblx0XHR9XG5cdH1cblxuXHRvblBhc3RlSGFuZGxlcihldmVudCkge1xuXHRcdGNvbnN0IHZhbHVlID0gZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0Jyk7XG5cdFx0dGhpcy5wcm9wcy5vbkNoYW5nZSh0cmFuc2Zvcm1WYWx1ZVRvRW1haWxzKHZhbHVlKSk7XG5cdH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gJy4uL2h0bWwtZWxlbWVudCc7XG5pbXBvcnQgeyBFbWFpbEJsb2NrIH0gZnJvbSAnLi4vZW1haWwtYmxvY2snO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUJ5IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgeyBFbWFpbElucHV0IH0gZnJvbSBcIi4uL2VtYWlsLWlucHV0XCI7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tICcuLi93aWRnZXQnO1xuXG5leHBvcnQgY2xhc3MgRW1haWxMaXN0IGV4dGVuZHMgV2lkZ2V0IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5lbGVtZW50ID0gbmV3IEh0bWxFbGVtZW50KCd1bCcsIHtcblx0XHRcdGNsYXNzTmFtZTogJ2VtYWlsLWxpc3QnLFxuXHRcdH0pO1xuXHRcdHRoaXMuZW1haWxJbnB1dCA9IG5ldyBFbWFpbElucHV0KHsgb25DaGFuZ2U6IHRoaXMucHJvcHMub25DaGFuZ2UgfSk7XG5cdFx0dGhpcy5hZGRDaGlsZHJlbih0aGlzLmVtYWlsSW5wdXQpO1xuXHRcdHRoaXMucHJldmlvdXNFbWFpbHMgPSBbXTtcblx0XHR0aGlzLnVwZGF0ZSh0aGlzLnByb3BzKTtcblx0fVxuXG5cdHVwZGF0ZShwcm9wcykge1xuXHRcdGNvbnN0IHsgZW1haWxzIH0gPSBwcm9wcztcblx0XHRjb25zdCBhZGRlZEVtYWlscyA9IGRpZmZlcmVuY2VCeShlbWFpbHMsIHRoaXMucHJldmlvdXNFbWFpbHMsICd2YWx1ZScpO1xuXHRcdGNvbnN0IHJlbW92ZWRFbWFpbHMgPSBkaWZmZXJlbmNlQnkodGhpcy5wcmV2aW91c0VtYWlscywgZW1haWxzLCAndmFsdWUnKTtcblx0XHRyZW1vdmVkRW1haWxzLmZvckVhY2goZW1haWwgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkQnlLZXkoZW1haWwudmFsdWUpO1xuXHRcdH0pO1xuXHRcdGFkZGVkRW1haWxzLmZvckVhY2goZW1haWwgPT4ge1xuXHRcdFx0Y29uc3QgZW1haWxCbG9jayA9IG5ldyBFbWFpbEJsb2NrKHsgZW1haWwsIG9uUmVtb3ZlOiB0aGlzLnByb3BzLm9uUmVtb3ZlIH0pO1xuXHRcdFx0dGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShlbWFpbEJsb2NrLmVsZW1lbnQsIHRoaXMuZW1haWxJbnB1dC5lbGVtZW50KTtcblx0XHR9KTtcblx0XHR0aGlzLnByZXZpb3VzRW1haWxzID0gWy4uLmVtYWlsc107XG5cdFx0c3VwZXIudXBkYXRlKHByb3BzKTtcblx0fVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSAnLi4vaHRtbC1lbGVtZW50JztcbmltcG9ydCB7IFNpbXBsZVdpZGdldCwgV2lkZ2V0IH0gZnJvbSAnLi4vd2lkZ2V0JztcbmltcG9ydCB7IEVtYWlsTGlzdCB9IGZyb20gJy4uL2VtYWlsLWxpc3QnO1xuXG5leHBvcnQgY2xhc3MgRW1haWxzRWRpdG9yQ29udGVudCBleHRlbmRzIFdpZGdldCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdC8vIDxFbWFpbHNFZGl0b3JGb290ZXIvPlxuXHRcdHRoaXMuZWxlbWVudCA9IG5ldyBIdG1sRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc05hbWU6ICdlbWFpbHMtZWRpdG9yLWNvbnRlbnQnLFxuXHRcdFx0fSk7XG5cdFx0Ly8gPEVtYWlsc0VkaXRvckNvbnRlbnRIZWFkZXIvPlxuXHRcdHRoaXMuaGVhZGVyID0gbmV3IFNpbXBsZVdpZGdldCgnZGl2Jywge1xuXHRcdFx0Y2xhc3NOYW1lOiAnaGVhZGVyJyxcblx0XHRcdGlubmVySFRNTDogdGhpcy5wcm9wcy5oZWFkZXJUaXRsZSB8fCAnRW1haWxzIEVkaXRvcicsXG5cdFx0fSk7XG5cdFx0Ly8gPEVtYWlsTGlzdC8+XG5cdFx0dGhpcy5lbWFpbExpc3QgPSBuZXcgRW1haWxMaXN0KHtcblx0XHRcdC4uLnRoaXMuc3RhdGUsXG5cdFx0XHQuLi50aGlzLnByb3BzLFxuXHRcdH0pO1xuXHRcdHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5oZWFkZXIsIHRoaXMuZW1haWxMaXN0KTtcblx0fVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSAnLi4vaHRtbC1lbGVtZW50JztcbmltcG9ydCB7IFdpZGdldCwgU2ltcGxlV2lkZ2V0IH0gZnJvbSAnLi4vd2lkZ2V0JztcbmltcG9ydCB7IGdlbmVyYXRlUmFuZG9tRW1haWwgfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBFbWFpbHNFZGl0b3JGb290ZXIgZXh0ZW5kcyBXaWRnZXQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLmFkZFJhbmRvbUVtYWlsID0gdGhpcy5hZGRSYW5kb21FbWFpbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZGlzcGxheUVtYWlsc0NvdW50ID0gdGhpcy5kaXNwbGF5RW1haWxzQ291bnQuYmluZCh0aGlzKTtcblx0XHQvLyA8RW1haWxzRWRpdG9yRm9vdGVyLz5cblx0XHR0aGlzLmVsZW1lbnQgPSBuZXcgSHRtbEVsZW1lbnQoJ2RpdicsIHtcblx0XHRcdGNsYXNzTmFtZTogJ2VtYWlscy1lZGl0b3ItZm9vdGVyJyxcblx0XHR9KTtcblx0XHQvLyA8QWRkRW1haWxCdXR0b24vPlxuXHRcdHRoaXMuYWRkRW1haWxCdXR0b24gPSBuZXcgU2ltcGxlV2lkZ2V0KCdidXR0b24nLCB7XG5cdFx0XHR0eXBlOiAnYnV0dG9uJyxcblx0XHRcdGNsYXNzTmFtZTogJ2J1dHRvbiBwcmltYXJ5Jyxcblx0XHRcdGlubmVySFRNTDogJ0FkZCBFbWFpbCcsXG5cdFx0fSk7XG5cdFx0dGhpcy5hZGRFbWFpbEJ1dHRvbi5lbGVtZW50LnNldEV2ZW50KCdjbGljaycsIHRoaXMuYWRkUmFuZG9tRW1haWwpO1xuXHRcdC8vIDxHZXRFbWFpbHNDb3VudEJ1dHRvbi8+XG5cdFx0dGhpcy5nZXRFbWFpbHNDb3VudEJ1dHRvbiA9IG5ldyBTaW1wbGVXaWRnZXQoJ2J1dHRvbicsIHtcblx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0Y2xhc3NOYW1lOiAnYnV0dG9uIHByaW1hcnknLFxuXHRcdFx0aW5uZXJIVE1MOiAnR2V0IEVtYWlscyBDb3VudCcsXG5cdFx0fSk7XG5cdFx0dGhpcy5nZXRFbWFpbHNDb3VudEJ1dHRvbi5lbGVtZW50LnNldEV2ZW50KCdjbGljaycsIHRoaXMuZGlzcGxheUVtYWlsc0NvdW50KTtcblx0XHQvLyBBZGQgY2hpbGRyZW5cblx0XHR0aGlzLmFkZENoaWxkcmVuKHRoaXMuYWRkRW1haWxCdXR0b24sIHRoaXMuZ2V0RW1haWxzQ291bnRCdXR0b24pO1xuXHR9XG5cblx0YWRkUmFuZG9tRW1haWwoKSB7XG5cdFx0dGhpcy5wcm9wcy5hZGRFbWFpbHMoW2dlbmVyYXRlUmFuZG9tRW1haWwoKV0pO1xuXHR9XG5cblx0ZGlzcGxheUVtYWlsc0NvdW50KCkge1xuXHRcdGNvbnN0IHZhbGlkRW1haWxzQ291bnQgPSB0aGlzLnByb3BzLmVtYWlscy5maWx0ZXIoZW1haWwgPT4gZW1haWwuaXNWYWxpZCkubGVuZ3RoO1xuXHRcdGFsZXJ0KGBZb3UgaGF2ZSAke3ZhbGlkRW1haWxzQ291bnR9IHZhbGlkIGVtYWlscy5gKTtcblx0fVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSAnLi4vaHRtbC1lbGVtZW50JztcbmltcG9ydCB7IFdpZGdldCB9IGZyb20gJy4uL3dpZGdldCc7XG5pbXBvcnQgeyBkaWZmZXJlbmNlQnksIHJlbW92ZUl0ZW0gfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBFbWFpbHNFZGl0b3JGb290ZXIgfSBmcm9tICcuLi9lbWFpbHMtZWRpdG9yLWZvb3Rlcic7XG5pbXBvcnQgeyBFbWFpbHNFZGl0b3JDb250ZW50IH0gZnJvbSAnLi4vZW1haWxzLWVkaXRvci1jb250ZW50JztcblxuZXhwb3J0IGNsYXNzIEVtYWlsc0VkaXRvciBleHRlbmRzIFdpZGdldCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuYWRkRW1haWxzID0gdGhpcy5hZGRFbWFpbHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlbW92ZUVtYWlsID0gdGhpcy5yZW1vdmVFbWFpbC5iaW5kKHRoaXMpO1xuXHRcdC8vIFN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVtYWlsczogcHJvcHMuZW1haWxzIHx8IFtdLFxuXHRcdH07XG5cdFx0Ly8gPEVtYWlsc0VkaXRvci8+XG5cdFx0dGhpcy5lbGVtZW50ID0gbmV3IEh0bWxFbGVtZW50KFxuXHRcdFx0cHJvcHMuY29udGFpbmVyTm9kZSxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZW1haWxzLWVkaXRvcicsXG5cdFx0XHR9KTtcblx0XHQvLyA8RW1haWxzRWRpdG9yQ29udGVudC8+XG5cdFx0dGhpcy5lbWFpbHNFZGl0b3JDb250ZW50ID0gbmV3IEVtYWlsc0VkaXRvckNvbnRlbnQoe1xuXHRcdFx0Li4udGhpcy5zdGF0ZSxcblx0XHRcdGhlYWRlclRpdGxlOiB0aGlzLnByb3BzLmhlYWRlclRpdGxlLFxuXHRcdFx0b25SZW1vdmU6IHRoaXMucmVtb3ZlRW1haWwsXG5cdFx0XHRvbkNoYW5nZTogdGhpcy5hZGRFbWFpbHMsXG5cdFx0fSk7XG5cdFx0Ly8gPEVtYWlsc0VkaXRvckZvb3Rlci8+XG5cdFx0dGhpcy5lbWFpbHNFZGl0b3JGb290ZXIgPSBuZXcgRW1haWxzRWRpdG9yRm9vdGVyKHtcblx0XHRcdC4uLnRoaXMuc3RhdGUsXG5cdFx0XHRhZGRFbWFpbHM6IHRoaXMuYWRkRW1haWxzLFxuXHRcdH0pO1xuXHRcdHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5lbWFpbHNFZGl0b3JDb250ZW50LCB0aGlzLmVtYWlsc0VkaXRvckZvb3Rlcik7XG5cdH1cblxuXHRhZGRFbWFpbHMoZW1haWxzKSB7XG5cdFx0Y29uc3QgbmV3RW1haWxzID0gZGlmZmVyZW5jZUJ5KGVtYWlscywgdGhpcy5zdGF0ZS5lbWFpbHMsICd2YWx1ZScpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZW1haWxzOiBbXG5cdFx0XHRcdC4uLnRoaXMuc3RhdGUuZW1haWxzLFxuXHRcdFx0XHQuLi5uZXdFbWFpbHMsXG5cdFx0XHRdLFxuXHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlRW1haWwoZW1haWxUb1JlbW92ZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0ZW1haWxzOiByZW1vdmVJdGVtKHRoaXMuc3RhdGUuZW1haWxzLCBlbWFpbFRvUmVtb3ZlLCAndmFsdWUnKSxcblx0XHR9KTtcblx0fVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBjbGFzcyBIdG1sRWxlbWVudCB7XG5cdGNvbnN0cnVjdG9yKG5vZGUsIG9wdGlvbnMgPSB7fSkge1xuXHRcdC8vIFdoZW4gbm9kZSBpcyBhIHN0cmluZyB0aGVuIGNyZWF0ZSBlbGVtZW50XG5cdFx0aWYgKHR5cGVvZiBub2RlID09PSAnc3RyaW5nJykge1xuXHRcdFx0dGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR9XG5cdFx0Zm9yIChjb25zdCBvcHRpb25zS2V5IGluIG9wdGlvbnMpIHtcblx0XHRcdGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KG9wdGlvbnNLZXkpKSB7XG5cdFx0XHRcdHRoaXMubm9kZVtvcHRpb25zS2V5XSA9IG9wdGlvbnNbb3B0aW9uc0tleV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0YXBwZW5kQ2hpbGQoaHRtbEVsZW1lbnQpIHtcblx0XHRodG1sRWxlbWVudC5wYXJlbnQgPSB0aGlzO1xuXHRcdHRoaXMubm9kZS5hcHBlbmRDaGlsZChodG1sRWxlbWVudC5ub2RlKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0aW5zZXJ0QmVmb3JlKGh0bWxFbGVtZW50LCBuZXh0U2libGluZ0VsZW1lbnQpIHtcblx0XHR0aGlzLm5vZGUuaW5zZXJ0QmVmb3JlKGh0bWxFbGVtZW50Lm5vZGUsIG5leHRTaWJsaW5nRWxlbWVudC5ub2RlKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0S2V5KHZhbHVlKSB7XG5cdFx0dGhpcy5ub2RlLnNldEF0dHJpYnV0ZSgna2V5JywgdmFsdWUpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRyZW1vdmVDaGlsZEJ5S2V5KHZhbHVlKSB7XG5cdFx0Y29uc3QgY2hpbGRUb1JlbW92ZSA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yKGBba2V5PVwiJHt2YWx1ZX1cIl1gKTtcblx0XHR0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoY2hpbGRUb1JlbW92ZSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldEV2ZW50KGV2ZW50TmFtZSwgaGFuZGxlcikge1xuXHRcdHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnQgPT4ge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdGhhbmRsZXIoZXZlbnQpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCAnLi9pbmRleC5jc3MnO1xuaW1wb3J0IHsgRW1haWxzRWRpdG9yIH0gZnJvbSAnLi9lbWFpbHMtZWRpdG9yJztcblxuZnVuY3Rpb24gRW1haWxzRWRpdG9yV2lkZ2V0KGNvbnRhaW5lck5vZGUsIG9wdGlvbnMgPSB7fSkge1xuXHRjb25zdCBlbWFpbHNFZGl0b3IgPSBuZXcgRW1haWxzRWRpdG9yKHtcblx0XHRjb250YWluZXJOb2RlLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0aW5zdGFuY2U6IGVtYWlsc0VkaXRvcixcblx0XHRnZXRFbWFpbHM6ICgpID0+IGVtYWlsc0VkaXRvci5zdGF0ZS5lbWFpbHMsXG5cdH07XG59XG5cbndpbmRvdy5FbWFpbHNFZGl0b3IgPSBFbWFpbHNFZGl0b3JXaWRnZXQ7XG4iLCJleHBvcnQgY29uc3QgZ2VuZXJhdGVSYW5kb21TdHJpbmcgPSAoKSA9PiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVSYW5kb21FbWFpbCA9ICgpID0+ICh7XG5cdHZhbHVlOiBgJHtnZW5lcmF0ZVJhbmRvbVN0cmluZygpfUBtYWlsLmNvbWAsXG5cdGlzVmFsaWQ6IHRydWUsXG59KTtcblxuZXhwb3J0IGNvbnN0IGRpZmZlcmVuY2VCeSA9IChhcnJheTEsIGFycmF5Miwga2V5KSA9PiB7XG5cdHJldHVybiBhcnJheTEuZmlsdGVyKGEgPT4gIWFycmF5Mi5zb21lKGIgPT4gYltrZXldID09PSBhW2tleV0pKVxufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoYXJyYXksIGl0ZW0sIGtleSkgPT4ge1xuXHRjb25zdCBpdGVtSW5kZXggPSBhcnJheS5maW5kSW5kZXgoYW5JdGVtID0+IGFuSXRlbVtrZXldID09PSBpdGVtW2tleV0pO1xuXHRyZXR1cm4gW1xuXHRcdC4uLmFycmF5LnNsaWNlKDAsIGl0ZW1JbmRleCksXG5cdFx0Li4uYXJyYXkuc2xpY2UoaXRlbUluZGV4ICsgMSwgYXJyYXkubGVuZ3RoKSxcblx0XTtcbn07XG5cbmV4cG9ydCBjb25zdCBFTlRFUl9LRVkgPSAxMztcbmV4cG9ydCBjb25zdCBDT01NQV9LRVkgPSAxODg7XG5cbmNvbnN0IEVNQUlMX1JFR0VYID0gL15cXHcrKFtcXC4tXT8oXFx3fFxcZCkrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLztcblxuY29uc3QgdmFsaWRhdGVFbWFpbCA9IGVtYWlsID0+IEVNQUlMX1JFR0VYLnRlc3QoZW1haWwpO1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtVmFsdWVUb0VtYWlscyA9IHZhbHVlID0+IHZhbHVlLnNwbGl0KCcsJykubWFwKHJhd0VtYWlsID0+IHtcblx0Y29uc3QgZW1haWwgPSByYXdFbWFpbC50cmltKCk7XG5cblx0cmV0dXJuIHtcblx0XHR2YWx1ZTogZW1haWwsXG5cdFx0aXNWYWxpZDogdmFsaWRhdGVFbWFpbChlbWFpbCksXG5cdH07XG59KVxuLy8gRmlsdGVyIGVtcHR5IGVtYWlsc1xuLmZpbHRlcihlbWFpbCA9PiBCb29sZWFuKGVtYWlsLnZhbHVlKSk7XG4iLCJpbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gXCIuLi9odG1sLWVsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFdpZGdldCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcblx0XHR0aGlzLnN0YXRlID0gbnVsbDtcblx0XHR0aGlzLmVsZW1lbnQgPSBudWxsO1xuXHR9XG5cblx0YWRkQ2hpbGRyZW4oLi4uY2hpbGRyZW5XaWRnZXRzKSB7XG5cdFx0Y2hpbGRyZW5XaWRnZXRzLmZvckVhY2goY2hpbGRXaWRnZXQgPT4ge1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkV2lkZ2V0KTtcblx0XHRcdHRoaXMuZWxlbWVudC5ub2RlLmFwcGVuZENoaWxkKGNoaWxkV2lkZ2V0LmVsZW1lbnQubm9kZSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHNldFN0YXRlKHN0YXRlKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdC4uLnRoaXMuc3RhdGUsXG5cdFx0XHQuLi5zdGF0ZSxcblx0XHR9O1xuXHRcdHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC51cGRhdGUoeyAuLi50aGlzLnByb3BzLCAuLi50aGlzLnN0YXRlIH0pKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dXBkYXRlKHByb3BzKSB7XG5cdFx0dGhpcy5wcm9wcyA9IHtcblx0XHRcdC4uLnRoaXMucHJvcHMsXG5cdFx0XHQuLi5wcm9wcyxcblx0XHR9O1xuXHRcdHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC51cGRhdGUodGhpcy5wcm9wcykpO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBTaW1wbGVXaWRnZXQgZXh0ZW5kcyBXaWRnZXQge1xuXHRjb25zdHJ1Y3Rvcihub2RlLCBvcHRpb25zKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmVsZW1lbnQgPSBuZXcgSHRtbEVsZW1lbnQobm9kZSwgb3B0aW9ucyk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=