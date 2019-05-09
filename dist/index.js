/*!
 * WUZHUI-HELPER v1.5.0
 * https://github.com/ansiboy/wuzhui-helper
 * 
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 */
define(["maishu-wuzhui"], function(__WEBPACK_EXTERNAL_MODULE_maishu_wuzhui__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out/checkbox-list.js":
/*!******************************!*\
  !*** ./out/checkbox-list.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./errors */ \"./out/errors.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, errors_1) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    function checkboxList(params) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            if (!params)\r\n                throw errors_1.errors.arugmentNull('params');\r\n            if (!params.element)\r\n                throw errors_1.errors.argumentFieldNull('params', 'element');\r\n            if (!params.dataSource)\r\n                throw errors_1.errors.argumentFieldNull('params', 'dataSource');\r\n            let { dataSource, element, nameField, valueField } = params;\r\n            let r = yield dataSource.select({});\r\n            r.dataItems.map(o => {\r\n                let label = document.createElement('label');\r\n                let input = document.createElement('input');\r\n                let span = document.createElement('span');\r\n                label.appendChild(input);\r\n                label.appendChild(span);\r\n                let name = nameField ? o[nameField] : o;\r\n                let value = valueField ? o[valueField] : o;\r\n                input.value = `${value}`;\r\n                span.innerHTML = `${name}`;\r\n                element.appendChild(label);\r\n            });\r\n        });\r\n    }\r\n    exports.checkboxList = checkboxList;\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./out/checkbox-list.js?");

/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    exports.errors = {\r\n        arugmentNull(paramName) {\r\n            return new Error(\"Argument '\" + paramName + \"' can not be null.\");\r\n        },\r\n        argumentFieldNull(argumentName, fieldName) {\r\n            let msg = `Argument ${argumentName} ${fieldName} field can not be null or empty.`;\r\n            return new Error(msg);\r\n        }\r\n    };\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./out/errors.js?");

/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./wrapper */ \"./out/wrapper.js\"), __webpack_require__(/*! ./checkbox-list */ \"./out/checkbox-list.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, wrapper_1, checkbox_list_1) {\r\n    \"use strict\";\r\n    function __export(m) {\r\n        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\r\n    }\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    __export(wrapper_1);\r\n    __export(checkbox_list_1);\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./out/index.js?");

/***/ }),

/***/ "./out/wrapper.js":
/*!************************!*\
  !*** ./out/wrapper.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! maishu-wuzhui */ \"maishu-wuzhui\"), __webpack_require__(/*! ./errors */ \"./out/errors.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, w, errors_1) {\r\n    \"use strict\";\r\n    Object.defineProperty(exports, \"__esModule\", { value: true });\r\n    function createGridView(params) {\r\n        params = Object.assign({\r\n            pageSize: 10,\r\n            dataSource: null,\r\n            columns: null,\r\n        }, params);\r\n        if (params.pagerSettings == null) {\r\n            params.pagerSettings = {\r\n                activeButtonClassName: 'active',\r\n                buttonContainerWraper: 'ul',\r\n                buttonWrapper: 'li',\r\n                buttonContainerClassName: 'pagination',\r\n                showTotal: true\r\n            };\r\n        }\r\n        console.assert(params.element != null, 'element can not null.');\r\n        params.element.className = 'table table-striped table-bordered table-hover';\r\n        let gridView = new w.GridView(params);\r\n        return gridView;\r\n    }\r\n    exports.createGridView = createGridView;\r\n    function boundField(params) {\r\n        if (!params)\r\n            throw errors_1.errors.arugmentNull('params');\r\n        params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});\r\n        if (params.nullText == null)\r\n            params.nullText = '';\r\n        return new w.BoundField(params);\r\n    }\r\n    exports.boundField = boundField;\r\n    function commandField(params) {\r\n        if (!params)\r\n            throw errors_1.errors.arugmentNull('params');\r\n        return new w.CommandField(params);\r\n    }\r\n    exports.commandField = commandField;\r\n    function customField(params) {\r\n        if (!params)\r\n            throw errors_1.errors.arugmentNull('params');\r\n        params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});\r\n        let field = new w.CustomField(params);\r\n        return field;\r\n    }\r\n    exports.customField = customField;\r\n    function dropdown(args) {\r\n        return new w.DropDown(args);\r\n    }\r\n    exports.dropdown = dropdown;\r\n    function textbox(args) {\r\n        return new w.TextBox(args);\r\n    }\r\n    exports.textbox = textbox;\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\r\n\n\n//# sourceURL=webpack:///./out/wrapper.js?");

/***/ }),

/***/ "maishu-wuzhui":
/*!********************************!*\
  !*** external "maishu-wuzhui" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_wuzhui__;\n\n//# sourceURL=webpack:///external_%22maishu-wuzhui%22?");

/***/ })

/******/ })});;