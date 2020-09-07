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
___CSS_LOADER_EXPORT___.push([module.i, ".emails-editor {\n    background: #FFFFFF;\n    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n}\n\n.emails-editor .emails-editor-content {\n    background: #F8F8F7;\n    border-radius: 8px;\n    padding: 24px 50px ;\n}\n\n.emails-editor .email-list {\n    background: #FFFFFF;\n    border: 1px solid #C3C2CF;\n    box-sizing: border-box;\n    border-radius: 4px;\n    list-style: none;\n    padding-inline-start: 0;\n    padding: 4px;\n    display: flex;\n    flex-wrap: wrap;\n    max-height: 96px;\n    overflow-y: auto;\n}\n\n.emails-editor .email-block {\n    padding: 2px 4px;\n    margin: 4px;\n    background: rgba(102, 153, 255, 0.2);\n    border-radius: 100px;\n}\n\n.emails-editor .email-block.is-invalid {\n    margin-right: 4px;\n    background: none;\n    border-radius: 0;\n    border-bottom: #D92929 dashed 1px;\n}\n\n.emails-editor .email-block.is-invalid .email-block-label {\n    margin-left: 0;\n}\n\n.emails-editor .email-block-label {\n    margin-left: 10px;\n}\n\n.emails-editor .email-block-remove-button {\n    border: none;\n    background: none;\n    width: 16px;\n    height: 16px;\n    padding: 0 4px;\n    margin: 0 3px;\n    cursor: pointer;\n    border-radius: 2px;\n    transition: background-color 100ms ease-in-out;\n}\n\n.emails-editor .email-block-remove-button:hover {\n    background: rgba(217, 41, 41, 0.5);\n}\n\n.emails-editor .email-input {\n    border: none;\n    padding: 4px;\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 24px;\n}\n\n.emails-editor .email-input::placeholder {\n    color: #C3C2CF;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAEA;IACI,mBAAmB;IACnB,2CAA2C;IAC3C,kBAAkB;IAClB,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,oCAAoC;IACpC,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,iCAAiC;AACrC;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,WAAW;IACX,YAAY;IACZ,cAAc;IACd,aAAa;IACb,eAAe;IACf,kBAAkB;IAClB,8CAA8C;AAClD;;AAEA;IACI,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,oCAAoC;IACpC,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,cAAc;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');\n\n.emails-editor {\n    background: #FFFFFF;\n    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n}\n\n.emails-editor .emails-editor-content {\n    background: #F8F8F7;\n    border-radius: 8px;\n    padding: 24px 50px ;\n}\n\n.emails-editor .email-list {\n    background: #FFFFFF;\n    border: 1px solid #C3C2CF;\n    box-sizing: border-box;\n    border-radius: 4px;\n    list-style: none;\n    padding-inline-start: 0;\n    padding: 4px;\n    display: flex;\n    flex-wrap: wrap;\n    max-height: 96px;\n    overflow-y: auto;\n}\n\n.emails-editor .email-block {\n    padding: 2px 4px;\n    margin: 4px;\n    background: rgba(102, 153, 255, 0.2);\n    border-radius: 100px;\n}\n\n.emails-editor .email-block.is-invalid {\n    margin-right: 4px;\n    background: none;\n    border-radius: 0;\n    border-bottom: #D92929 dashed 1px;\n}\n\n.emails-editor .email-block.is-invalid .email-block-label {\n    margin-left: 0;\n}\n\n.emails-editor .email-block-label {\n    margin-left: 10px;\n}\n\n.emails-editor .email-block-remove-button {\n    border: none;\n    background: none;\n    width: 16px;\n    height: 16px;\n    padding: 0 4px;\n    margin: 0 3px;\n    cursor: pointer;\n    border-radius: 2px;\n    transition: background-color 100ms ease-in-out;\n}\n\n.emails-editor .email-block-remove-button:hover {\n    background: rgba(217, 41, 41, 0.5);\n}\n\n.emails-editor .email-input {\n    border: none;\n    padding: 4px;\n    font-family: 'Open Sans', sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 24px;\n}\n\n.emails-editor .email-input::placeholder {\n    color: #C3C2CF;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");
/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remove.svg */ "./src/email-block/remove.svg");
/* harmony import */ var _remove_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remove_svg__WEBPACK_IMPORTED_MODULE_1__);



class EmailBlock {
	constructor(props) {
		this.props = props;
		this.email = props.email;
		// <EmailBlockLabel/>
		this.emailBlockLabel = new _html_element__WEBPACK_IMPORTED_MODULE_0__["HtmlElement"](
			'span',
			{
				innerHTML: this.email.value,
				className: 'email-block-label',
			});
		// <EmailBlockRemoveButton/>
		this.emailBlockRemoveButton = new _html_element__WEBPACK_IMPORTED_MODULE_0__["HtmlElement"](
			'button',
			{
				type: 'button',
				innerHTML: _remove_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
				className: 'email-block-remove-button',
			})
			.setEvent('click', this.removeEmail.bind(this));
		// <EmailBlock/>
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_0__["HtmlElement"](
			'li',
			{
				className: `email-block ${this.email.isValid ? 'is-valid' : 'is-invalid'}`,
			})
			.setKey(this.email.value)
			.appendChild(this.emailBlockLabel)
			.appendChild(this.emailBlockRemoveButton);
	}

	removeEmail() {
		this.props.onRemove(this.email);
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

/***/ "./src/email-input/index.js":
/*!**********************************!*\
  !*** ./src/email-input/index.js ***!
  \**********************************/
/*! exports provided: EmailInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailInput", function() { return EmailInput; });
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");



class EmailInput {
	constructor(props) {
		this.props = props;
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_0__["HtmlElement"](
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
		this.props.onChange(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["transformValueToEmails"])(value));
		event.target.value = '';
	}

	onKeyUpHandler(event) {
		if (event.keyCode === _utils__WEBPACK_IMPORTED_MODULE_1__["ENTER_KEY"] || event.keyCode === _utils__WEBPACK_IMPORTED_MODULE_1__["COMMA_KEY"]) {
			this.onChangeHandler(event);
		}
	}

	onPasteHandler(event) {
		const value = event.clipboardData.getData('Text');
		this.props.onChange(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["transformValueToEmails"])(value));
	}
}


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
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");
/* harmony import */ var _email_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../email-block */ "./src/email-block/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _email_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email-input */ "./src/email-input/index.js");





class EmailList {
	constructor(props) {
		this.props = props;
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_0__["HtmlElement"]('ul', {
			className: 'email-list',
		});
		this.emailInput = new _email_input__WEBPACK_IMPORTED_MODULE_3__["EmailInput"]({ onChange: this.props.onChange });
		this.element.appendChild(this.emailInput.element);
		this.previousEmails = [];
		this.render(this.props);
	}

	render({ emails }) {
		const addedEmails = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["differenceBy"])(emails, this.previousEmails, 'value');
		const removedEmails = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["differenceBy"])(this.previousEmails, emails, 'value');
		removedEmails.forEach(email => {
			this.element.removeChildByKey(email.value);
		});
		addedEmails.forEach(email => {
			const emailBlock = new _email_block__WEBPACK_IMPORTED_MODULE_1__["EmailBlock"]({ email, onRemove: this.props.onRemove });
			this.element.insertBefore(emailBlock.element, this.emailInput.element);
		});
		this.previousEmails = [...emails];
	}
}


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
/* harmony import */ var _email_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../email-list */ "./src/email-list/index.js");
/* harmony import */ var _html_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../html-element */ "./src/html-element/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");




class EmailsEditor {
	constructor(props) {
		// State
		this.state = {
			emails: props.emails || [],
		};
		// <EmailList/>
		this.emailList = new _email_list__WEBPACK_IMPORTED_MODULE_0__["EmailList"]({
			emails: this.state.emails,
			onRemove: this.removeEmail.bind(this),
			onChange: this.addEmails.bind(this),
		});
		// <EmailsEditorContent/>
		this.emailsEditorContent = new _html_element__WEBPACK_IMPORTED_MODULE_1__["HtmlElement"](
			'div',
			{
				className: 'emails-editor-content',
			})
			.appendChild(this.emailList.element);
		// <EmailsEditorFooter/>
		this.emailsEditorFooter = new _html_element__WEBPACK_IMPORTED_MODULE_1__["HtmlElement"](
			'div',
			{
				className: 'emails-editor-footer',
			});
		// <EmailsEditor/>
		this.element = new _html_element__WEBPACK_IMPORTED_MODULE_1__["HtmlElement"](
			props.containerNode,
			{
				className: 'emails-editor',
			})
			.appendChild(this.emailsEditorContent)
			.appendChild(this.emailsEditorFooter);
	}

	addEmails(emails) {
		const newEmails = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["differenceBy"])(emails, this.state.emails, 'value');
		this.state.emails = [
			...this.state.emails,
			...newEmails,
		];
		this.emailList.render({ emails: this.state.emails });
	}

	removeEmail(emailToRemove) {
		this.state.emails = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["removeItem"])(this.state.emails, emailToRemove, 'value');
		this.emailList.render(this.state);
	}
}


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
	constructor(node, options) {
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
	return new _emails_editor__WEBPACK_IMPORTED_MODULE_1__["EmailsEditor"]({
		containerNode,
		...options,
	});
}

window.EmailsEditor = EmailsEditorWidget;


/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: differenceBy, removeItem, ENTER_KEY, COMMA_KEY, transformValueToEmails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "differenceBy", function() { return differenceBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeItem", function() { return removeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER_KEY", function() { return ENTER_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA_KEY", function() { return COMMA_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformValueToEmails", function() { return transformValueToEmails; });
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

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW1haWwtYmxvY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlsLWJsb2NrL3JlbW92ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlsLWlucHV0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbC1saXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbWFpbHMtZWRpdG9yL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9odG1sLWVsZW1lbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmNzcz9jZmU0Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUN5RjtBQUN6Riw4QkFBOEIsbUZBQTJCO0FBQ3pELDhCQUE4QixRQUFTLGdGQUFnRjtBQUN2SDtBQUNBLDhCQUE4QixRQUFTLG1CQUFtQiwwQkFBMEIsa0RBQWtELHlCQUF5QiwyQ0FBMkMseUJBQXlCLDBCQUEwQixzQkFBc0IsR0FBRywyQ0FBMkMsMEJBQTBCLHlCQUF5QiwwQkFBMEIsR0FBRyxnQ0FBZ0MsMEJBQTBCLGdDQUFnQyw2QkFBNkIseUJBQXlCLHVCQUF1Qiw4QkFBOEIsbUJBQW1CLG9CQUFvQixzQkFBc0IsdUJBQXVCLHVCQUF1QixHQUFHLGlDQUFpQyx1QkFBdUIsa0JBQWtCLDJDQUEyQywyQkFBMkIsR0FBRyw0Q0FBNEMsd0JBQXdCLHVCQUF1Qix1QkFBdUIsd0NBQXdDLEdBQUcsK0RBQStELHFCQUFxQixHQUFHLHVDQUF1Qyx3QkFBd0IsR0FBRywrQ0FBK0MsbUJBQW1CLHVCQUF1QixrQkFBa0IsbUJBQW1CLHFCQUFxQixvQkFBb0Isc0JBQXNCLHlCQUF5QixxREFBcUQsR0FBRyxxREFBcUQseUNBQXlDLEdBQUcsaUNBQWlDLG1CQUFtQixtQkFBbUIsMkNBQTJDLHlCQUF5QiwwQkFBMEIsc0JBQXNCLHdCQUF3QixHQUFHLDhDQUE4QyxxQkFBcUIsR0FBRyxTQUFTLDhFQUE4RSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSx5R0FBeUcsb0JBQW9CLDBCQUEwQixrREFBa0QseUJBQXlCLDJDQUEyQyx5QkFBeUIsMEJBQTBCLHNCQUFzQixHQUFHLDJDQUEyQywwQkFBMEIseUJBQXlCLDBCQUEwQixHQUFHLGdDQUFnQywwQkFBMEIsZ0NBQWdDLDZCQUE2Qix5QkFBeUIsdUJBQXVCLDhCQUE4QixtQkFBbUIsb0JBQW9CLHNCQUFzQix1QkFBdUIsdUJBQXVCLEdBQUcsaUNBQWlDLHVCQUF1QixrQkFBa0IsMkNBQTJDLDJCQUEyQixHQUFHLDRDQUE0Qyx3QkFBd0IsdUJBQXVCLHVCQUF1Qix3Q0FBd0MsR0FBRywrREFBK0QscUJBQXFCLEdBQUcsdUNBQXVDLHdCQUF3QixHQUFHLCtDQUErQyxtQkFBbUIsdUJBQXVCLGtCQUFrQixtQkFBbUIscUJBQXFCLG9CQUFvQixzQkFBc0IseUJBQXlCLHFEQUFxRCxHQUFHLHFEQUFxRCx5Q0FBeUMsR0FBRyxpQ0FBaUMsbUJBQW1CLG1CQUFtQiwyQ0FBMkMseUJBQXlCLDBCQUEwQixzQkFBc0Isd0JBQXdCLEdBQUcsOENBQThDLHFCQUFxQixHQUFHLHFCQUFxQjtBQUM1NUk7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM3RmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE4QztBQUNSOztBQUUvQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHlEQUFXO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0Esb0NBQW9DLHlEQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0RBQVU7QUFDekI7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHFCQUFxQix5REFBVztBQUNoQztBQUNBO0FBQ0EsOEJBQThCLCtDQUErQztBQUM3RSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3JDQSxxUTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDMEI7O0FBRWpFO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQix5REFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixxRUFBc0I7QUFDNUM7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixnREFBUyxzQkFBc0IsZ0RBQVM7QUFDaEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IscUVBQXNCO0FBQzVDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThDO0FBQ0Y7QUFDSjtBQUNFOztBQUVuQztBQUNQO0FBQ0E7QUFDQSxxQkFBcUIseURBQVc7QUFDaEM7QUFDQSxHQUFHO0FBQ0gsd0JBQXdCLHVEQUFVLEVBQUUsZ0NBQWdDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVMsU0FBUztBQUNsQixzQkFBc0IsMkRBQVk7QUFDbEMsd0JBQXdCLDJEQUFZO0FBQ3BDO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSwwQkFBMEIsdURBQVUsRUFBRSx1Q0FBdUM7QUFDN0U7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDSTtBQUNNOztBQUU3QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixxREFBUztBQUNoQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxpQ0FBaUMseURBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MseURBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EscUJBQXFCLHlEQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsMkRBQVk7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNEJBQTRCO0FBQ3JEOztBQUVBO0FBQ0Esc0JBQXNCLHlEQUFVO0FBQ2hDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BEQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQsTUFBTTtBQUMvRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pEQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGtIQUFzRDs7QUFFeEY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTtBQUFxQjtBQUMwQjs7QUFFL0MsdURBQXVEO0FBQ3ZELFlBQVksMkRBQVk7QUFDeEI7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNBOztBQUVQLDJEQUEyRCxJQUFJOztBQUUvRDs7QUFFTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5lbWFpbHMtZWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWxzLWVkaXRvci1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGNztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAyNHB4IDUwcHggO1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtbGlzdCB7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDM0MyQ0Y7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXgtaGVpZ2h0OiA5NnB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2sge1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDIsIDE1MywgMjU1LCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLmlzLWludmFsaWQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogI0Q5MjkyOSBkYXNoZWQgMXB4O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2suaXMtaW52YWxpZCAuZW1haWwtYmxvY2stbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLWxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jay1yZW1vdmUtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgbWFyZ2luOiAwIDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jay1yZW1vdmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTcsIDQxLCA0MSwgMC41KTtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNDM0MyQ0Y7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5lbWFpbHMtZWRpdG9yIHtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWxzLWVkaXRvci1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZDogI0Y4RjhGNztcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBwYWRkaW5nOiAyNHB4IDUwcHggO1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtbGlzdCB7XFxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDM0MyQ0Y7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBtYXgtaGVpZ2h0OiA5NnB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2sge1xcbiAgICBwYWRkaW5nOiAycHggNHB4O1xcbiAgICBtYXJnaW46IDRweDtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDIsIDE1MywgMjU1LCAwLjIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLmlzLWludmFsaWQge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgYm9yZGVyLWJvdHRvbTogI0Q5MjkyOSBkYXNoZWQgMXB4O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtYmxvY2suaXMtaW52YWxpZCAuZW1haWwtYmxvY2stbGFiZWwge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWJsb2NrLWxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jay1yZW1vdmUtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICB3aWR0aDogMTZweDtcXG4gICAgaGVpZ2h0OiAxNnB4O1xcbiAgICBwYWRkaW5nOiAwIDRweDtcXG4gICAgbWFyZ2luOiAwIDNweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5lbWFpbHMtZWRpdG9yIC5lbWFpbC1ibG9jay1yZW1vdmUtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMTcsIDQxLCA0MSwgMC41KTtcXG59XFxuXFxuLmVtYWlscy1lZGl0b3IgLmVtYWlsLWlucHV0IHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBwYWRkaW5nOiA0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uZW1haWxzLWVkaXRvciAuZW1haWwtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICNDM0MyQ0Y7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gJy4uL2h0bWwtZWxlbWVudCc7XG5pbXBvcnQgcmVtb3ZlSWNvbiBmcm9tICcuL3JlbW92ZS5zdmcnO1xuXG5leHBvcnQgY2xhc3MgRW1haWxCbG9jayB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuZW1haWwgPSBwcm9wcy5lbWFpbDtcblx0XHQvLyA8RW1haWxCbG9ja0xhYmVsLz5cblx0XHR0aGlzLmVtYWlsQmxvY2tMYWJlbCA9IG5ldyBIdG1sRWxlbWVudChcblx0XHRcdCdzcGFuJyxcblx0XHRcdHtcblx0XHRcdFx0aW5uZXJIVE1MOiB0aGlzLmVtYWlsLnZhbHVlLFxuXHRcdFx0XHRjbGFzc05hbWU6ICdlbWFpbC1ibG9jay1sYWJlbCcsXG5cdFx0XHR9KTtcblx0XHQvLyA8RW1haWxCbG9ja1JlbW92ZUJ1dHRvbi8+XG5cdFx0dGhpcy5lbWFpbEJsb2NrUmVtb3ZlQnV0dG9uID0gbmV3IEh0bWxFbGVtZW50KFxuXHRcdFx0J2J1dHRvbicsXG5cdFx0XHR7XG5cdFx0XHRcdHR5cGU6ICdidXR0b24nLFxuXHRcdFx0XHRpbm5lckhUTUw6IHJlbW92ZUljb24sXG5cdFx0XHRcdGNsYXNzTmFtZTogJ2VtYWlsLWJsb2NrLXJlbW92ZS1idXR0b24nLFxuXHRcdFx0fSlcblx0XHRcdC5zZXRFdmVudCgnY2xpY2snLCB0aGlzLnJlbW92ZUVtYWlsLmJpbmQodGhpcykpO1xuXHRcdC8vIDxFbWFpbEJsb2NrLz5cblx0XHR0aGlzLmVsZW1lbnQgPSBuZXcgSHRtbEVsZW1lbnQoXG5cdFx0XHQnbGknLFxuXHRcdFx0e1xuXHRcdFx0XHRjbGFzc05hbWU6IGBlbWFpbC1ibG9jayAke3RoaXMuZW1haWwuaXNWYWxpZCA/ICdpcy12YWxpZCcgOiAnaXMtaW52YWxpZCd9YCxcblx0XHRcdH0pXG5cdFx0XHQuc2V0S2V5KHRoaXMuZW1haWwudmFsdWUpXG5cdFx0XHQuYXBwZW5kQ2hpbGQodGhpcy5lbWFpbEJsb2NrTGFiZWwpXG5cdFx0XHQuYXBwZW5kQ2hpbGQodGhpcy5lbWFpbEJsb2NrUmVtb3ZlQnV0dG9uKTtcblx0fVxuXG5cdHJlbW92ZUVtYWlsKCkge1xuXHRcdHRoaXMucHJvcHMub25SZW1vdmUodGhpcy5lbWFpbCk7XG5cdH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZpZXdCb3g9XFxcIjAgMCA4IDhcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCI+PHBhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk04IDAuOEw3LjIgMEw0IDMuMkwwLjggMEwwIDAuOEwzLjIgNEwwIDcuMkwwLjggOEw0IDQuOEw3LjIgOEw4IDcuMkw0LjggNEw4IDAuOFpcXFwiIGZpbGw9XFxcIiMwNTAwMzhcXFwiPjwvcGF0aD48L3N2Zz5cIiIsImltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSAnLi4vaHRtbC1lbGVtZW50JztcbmltcG9ydCB7IENPTU1BX0tFWSwgRU5URVJfS0VZLCB0cmFuc2Zvcm1WYWx1ZVRvRW1haWxzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBFbWFpbElucHV0IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHR0aGlzLnByb3BzID0gcHJvcHM7XG5cdFx0dGhpcy5lbGVtZW50ID0gbmV3IEh0bWxFbGVtZW50KFxuXHRcdFx0J2lucHV0Jyxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogJ2VtYWlsJyxcblx0XHRcdFx0cGxhY2Vob2xkZXI6ICdhZGQgbW9yZSBwZW9wbGUuLi4nLFxuXHRcdFx0XHRjbGFzc05hbWU6ICdlbWFpbC1pbnB1dCcsXG5cdFx0XHR9LFxuXHRcdCk7XG5cdFx0dGhpcy5vbktleVVwSGFuZGxlciA9IHRoaXMub25LZXlVcEhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vblBhc3RlSGFuZGxlciA9IHRoaXMub25QYXN0ZUhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmVsZW1lbnQuc2V0RXZlbnQoJ2tleXVwJywgdGhpcy5vbktleVVwSGFuZGxlcik7XG5cdFx0dGhpcy5lbGVtZW50LnNldEV2ZW50KCdibHVyJywgdGhpcy5vbkNoYW5nZUhhbmRsZXIpO1xuXHRcdHRoaXMuZWxlbWVudC5zZXRFdmVudCgncGFzdGUnLCB0aGlzLm9uUGFzdGVIYW5kbGVyKTtcblx0fVxuXG5cdG9uQ2hhbmdlSGFuZGxlcihldmVudCkge1xuXHRcdGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXHRcdHRoaXMucHJvcHMub25DaGFuZ2UodHJhbnNmb3JtVmFsdWVUb0VtYWlscyh2YWx1ZSkpO1xuXHRcdGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnO1xuXHR9XG5cblx0b25LZXlVcEhhbmRsZXIoZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PT0gRU5URVJfS0VZIHx8IGV2ZW50LmtleUNvZGUgPT09IENPTU1BX0tFWSkge1xuXHRcdFx0dGhpcy5vbkNoYW5nZUhhbmRsZXIoZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdG9uUGFzdGVIYW5kbGVyKGV2ZW50KSB7XG5cdFx0Y29uc3QgdmFsdWUgPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKTtcblx0XHR0aGlzLnByb3BzLm9uQ2hhbmdlKHRyYW5zZm9ybVZhbHVlVG9FbWFpbHModmFsdWUpKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9odG1sLWVsZW1lbnQnO1xuaW1wb3J0IHsgRW1haWxCbG9jayB9IGZyb20gJy4uL2VtYWlsLWJsb2NrJztcbmltcG9ydCB7IGRpZmZlcmVuY2VCeSB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IHtFbWFpbElucHV0fSBmcm9tIFwiLi4vZW1haWwtaW5wdXRcIjtcblxuZXhwb3J0IGNsYXNzIEVtYWlsTGlzdCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0dGhpcy5wcm9wcyA9IHByb3BzO1xuXHRcdHRoaXMuZWxlbWVudCA9IG5ldyBIdG1sRWxlbWVudCgndWwnLCB7XG5cdFx0XHRjbGFzc05hbWU6ICdlbWFpbC1saXN0Jyxcblx0XHR9KTtcblx0XHR0aGlzLmVtYWlsSW5wdXQgPSBuZXcgRW1haWxJbnB1dCh7IG9uQ2hhbmdlOiB0aGlzLnByb3BzLm9uQ2hhbmdlIH0pO1xuXHRcdHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVtYWlsSW5wdXQuZWxlbWVudCk7XG5cdFx0dGhpcy5wcmV2aW91c0VtYWlscyA9IFtdO1xuXHRcdHRoaXMucmVuZGVyKHRoaXMucHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKHsgZW1haWxzIH0pIHtcblx0XHRjb25zdCBhZGRlZEVtYWlscyA9IGRpZmZlcmVuY2VCeShlbWFpbHMsIHRoaXMucHJldmlvdXNFbWFpbHMsICd2YWx1ZScpO1xuXHRcdGNvbnN0IHJlbW92ZWRFbWFpbHMgPSBkaWZmZXJlbmNlQnkodGhpcy5wcmV2aW91c0VtYWlscywgZW1haWxzLCAndmFsdWUnKTtcblx0XHRyZW1vdmVkRW1haWxzLmZvckVhY2goZW1haWwgPT4ge1xuXHRcdFx0dGhpcy5lbGVtZW50LnJlbW92ZUNoaWxkQnlLZXkoZW1haWwudmFsdWUpO1xuXHRcdH0pO1xuXHRcdGFkZGVkRW1haWxzLmZvckVhY2goZW1haWwgPT4ge1xuXHRcdFx0Y29uc3QgZW1haWxCbG9jayA9IG5ldyBFbWFpbEJsb2NrKHsgZW1haWwsIG9uUmVtb3ZlOiB0aGlzLnByb3BzLm9uUmVtb3ZlIH0pO1xuXHRcdFx0dGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZShlbWFpbEJsb2NrLmVsZW1lbnQsIHRoaXMuZW1haWxJbnB1dC5lbGVtZW50KTtcblx0XHR9KTtcblx0XHR0aGlzLnByZXZpb3VzRW1haWxzID0gWy4uLmVtYWlsc107XG5cdH1cbn1cbiIsImltcG9ydCB7IEVtYWlsTGlzdCB9IGZyb20gJy4uL2VtYWlsLWxpc3QnO1xuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tICcuLi9odG1sLWVsZW1lbnQnO1xuaW1wb3J0IHsgZGlmZmVyZW5jZUJ5LCByZW1vdmVJdGVtIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRW1haWxzRWRpdG9yIHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHQvLyBTdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRlbWFpbHM6IHByb3BzLmVtYWlscyB8fCBbXSxcblx0XHR9O1xuXHRcdC8vIDxFbWFpbExpc3QvPlxuXHRcdHRoaXMuZW1haWxMaXN0ID0gbmV3IEVtYWlsTGlzdCh7XG5cdFx0XHRlbWFpbHM6IHRoaXMuc3RhdGUuZW1haWxzLFxuXHRcdFx0b25SZW1vdmU6IHRoaXMucmVtb3ZlRW1haWwuYmluZCh0aGlzKSxcblx0XHRcdG9uQ2hhbmdlOiB0aGlzLmFkZEVtYWlscy5iaW5kKHRoaXMpLFxuXHRcdH0pO1xuXHRcdC8vIDxFbWFpbHNFZGl0b3JDb250ZW50Lz5cblx0XHR0aGlzLmVtYWlsc0VkaXRvckNvbnRlbnQgPSBuZXcgSHRtbEVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZW1haWxzLWVkaXRvci1jb250ZW50Jyxcblx0XHRcdH0pXG5cdFx0XHQuYXBwZW5kQ2hpbGQodGhpcy5lbWFpbExpc3QuZWxlbWVudCk7XG5cdFx0Ly8gPEVtYWlsc0VkaXRvckZvb3Rlci8+XG5cdFx0dGhpcy5lbWFpbHNFZGl0b3JGb290ZXIgPSBuZXcgSHRtbEVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZW1haWxzLWVkaXRvci1mb290ZXInLFxuXHRcdFx0fSk7XG5cdFx0Ly8gPEVtYWlsc0VkaXRvci8+XG5cdFx0dGhpcy5lbGVtZW50ID0gbmV3IEh0bWxFbGVtZW50KFxuXHRcdFx0cHJvcHMuY29udGFpbmVyTm9kZSxcblx0XHRcdHtcblx0XHRcdFx0Y2xhc3NOYW1lOiAnZW1haWxzLWVkaXRvcicsXG5cdFx0XHR9KVxuXHRcdFx0LmFwcGVuZENoaWxkKHRoaXMuZW1haWxzRWRpdG9yQ29udGVudClcblx0XHRcdC5hcHBlbmRDaGlsZCh0aGlzLmVtYWlsc0VkaXRvckZvb3Rlcik7XG5cdH1cblxuXHRhZGRFbWFpbHMoZW1haWxzKSB7XG5cdFx0Y29uc3QgbmV3RW1haWxzID0gZGlmZmVyZW5jZUJ5KGVtYWlscywgdGhpcy5zdGF0ZS5lbWFpbHMsICd2YWx1ZScpO1xuXHRcdHRoaXMuc3RhdGUuZW1haWxzID0gW1xuXHRcdFx0Li4udGhpcy5zdGF0ZS5lbWFpbHMsXG5cdFx0XHQuLi5uZXdFbWFpbHMsXG5cdFx0XTtcblx0XHR0aGlzLmVtYWlsTGlzdC5yZW5kZXIoeyBlbWFpbHM6IHRoaXMuc3RhdGUuZW1haWxzIH0pO1xuXHR9XG5cblx0cmVtb3ZlRW1haWwoZW1haWxUb1JlbW92ZSkge1xuXHRcdHRoaXMuc3RhdGUuZW1haWxzID0gcmVtb3ZlSXRlbSh0aGlzLnN0YXRlLmVtYWlscywgZW1haWxUb1JlbW92ZSwgJ3ZhbHVlJyk7XG5cdFx0dGhpcy5lbWFpbExpc3QucmVuZGVyKHRoaXMuc3RhdGUpO1xuXHR9XG59XG4iLCJleHBvcnQgY2xhc3MgSHRtbEVsZW1lbnQge1xuXHRjb25zdHJ1Y3Rvcihub2RlLCBvcHRpb25zKSB7XG5cdFx0Ly8gV2hlbiBub2RlIGlzIGEgc3RyaW5nIHRoZW4gY3JlYXRlIGVsZW1lbnRcblx0XHRpZiAodHlwZW9mIG5vZGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLm5vZGUgPSBub2RlO1xuXHRcdH1cblx0XHRmb3IgKGNvbnN0IG9wdGlvbnNLZXkgaW4gb3B0aW9ucykge1xuXHRcdFx0aWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkob3B0aW9uc0tleSkpIHtcblx0XHRcdFx0dGhpcy5ub2RlW29wdGlvbnNLZXldID0gb3B0aW9uc1tvcHRpb25zS2V5XTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRhcHBlbmRDaGlsZChodG1sRWxlbWVudCkge1xuXHRcdGh0bWxFbGVtZW50LnBhcmVudCA9IHRoaXM7XG5cdFx0dGhpcy5ub2RlLmFwcGVuZENoaWxkKGh0bWxFbGVtZW50Lm5vZGUpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRpbnNlcnRCZWZvcmUoaHRtbEVsZW1lbnQsIG5leHRTaWJsaW5nRWxlbWVudCkge1xuXHRcdHRoaXMubm9kZS5pbnNlcnRCZWZvcmUoaHRtbEVsZW1lbnQubm9kZSwgbmV4dFNpYmxpbmdFbGVtZW50Lm5vZGUpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRzZXRLZXkodmFsdWUpIHtcblx0XHR0aGlzLm5vZGUuc2V0QXR0cmlidXRlKCdrZXknLCB2YWx1ZSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHJlbW92ZUNoaWxkQnlLZXkodmFsdWUpIHtcblx0XHRjb25zdCBjaGlsZFRvUmVtb3ZlID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3IoYFtrZXk9XCIke3ZhbHVlfVwiXWApO1xuXHRcdHRoaXMubm9kZS5yZW1vdmVDaGlsZChjaGlsZFRvUmVtb3ZlKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0c2V0RXZlbnQoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG5cdFx0dGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0aGFuZGxlcihldmVudCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBFbWFpbHNFZGl0b3IgfSBmcm9tICcuL2VtYWlscy1lZGl0b3InO1xuXG5mdW5jdGlvbiBFbWFpbHNFZGl0b3JXaWRnZXQoY29udGFpbmVyTm9kZSwgb3B0aW9ucyA9IHt9KSB7XG5cdHJldHVybiBuZXcgRW1haWxzRWRpdG9yKHtcblx0XHRjb250YWluZXJOb2RlLFxuXHRcdC4uLm9wdGlvbnMsXG5cdH0pO1xufVxuXG53aW5kb3cuRW1haWxzRWRpdG9yID0gRW1haWxzRWRpdG9yV2lkZ2V0O1xuIiwiZXhwb3J0IGNvbnN0IGRpZmZlcmVuY2VCeSA9IChhcnJheTEsIGFycmF5Miwga2V5KSA9PiB7XG5cdHJldHVybiBhcnJheTEuZmlsdGVyKGEgPT4gIWFycmF5Mi5zb21lKGIgPT4gYltrZXldID09PSBhW2tleV0pKVxufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUl0ZW0gPSAoYXJyYXksIGl0ZW0sIGtleSkgPT4ge1xuXHRjb25zdCBpdGVtSW5kZXggPSBhcnJheS5maW5kSW5kZXgoYW5JdGVtID0+IGFuSXRlbVtrZXldID09PSBpdGVtW2tleV0pO1xuXHRyZXR1cm4gW1xuXHRcdC4uLmFycmF5LnNsaWNlKDAsIGl0ZW1JbmRleCksXG5cdFx0Li4uYXJyYXkuc2xpY2UoaXRlbUluZGV4ICsgMSwgYXJyYXkubGVuZ3RoKSxcblx0XTtcbn07XG5cbmV4cG9ydCBjb25zdCBFTlRFUl9LRVkgPSAxMztcbmV4cG9ydCBjb25zdCBDT01NQV9LRVkgPSAxODg7XG5cbmNvbnN0IEVNQUlMX1JFR0VYID0gL15cXHcrKFtcXC4tXT9cXHcrKSpAXFx3KyhbXFwuLV0/XFx3KykqKFxcLlxcd3syLDN9KSskLztcblxuY29uc3QgdmFsaWRhdGVFbWFpbCA9IGVtYWlsID0+IEVNQUlMX1JFR0VYLnRlc3QoZW1haWwpO1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtVmFsdWVUb0VtYWlscyA9IHZhbHVlID0+IHZhbHVlLnNwbGl0KCcsJykubWFwKHJhd0VtYWlsID0+IHtcblx0Y29uc3QgZW1haWwgPSByYXdFbWFpbC50cmltKCk7XG5cblx0cmV0dXJuIHtcblx0XHR2YWx1ZTogZW1haWwsXG5cdFx0aXNWYWxpZDogdmFsaWRhdGVFbWFpbChlbWFpbCksXG5cdH07XG59KVxuLy8gRmlsdGVyIGVtcHR5IGVtYWlsc1xuLmZpbHRlcihlbWFpbCA9PiBCb29sZWFuKGVtYWlsLnZhbHVlKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9