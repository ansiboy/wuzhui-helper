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
/******/ 	return __webpack_require__(__webpack_require__.s = "./out-es5/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./out-es5/checkbox-list.js":
/*!**********************************!*\
  !*** ./out-es5/checkbox-list.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\nvar __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : new P(function (resolve) {\n        resolve(result.value);\n      }).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./errors */ \"./out-es5/errors.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, errors_1) {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  function checkboxList(params) {\n    return __awaiter(this, void 0, void 0,\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var dataSource, element, nameField, valueField, r;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (params) {\n                _context.next = 2;\n                break;\n              }\n\n              throw errors_1.errors.arugmentNull('params');\n\n            case 2:\n              if (params.element) {\n                _context.next = 4;\n                break;\n              }\n\n              throw errors_1.errors.argumentFieldNull('params', 'element');\n\n            case 4:\n              if (params.dataSource) {\n                _context.next = 6;\n                break;\n              }\n\n              throw errors_1.errors.argumentFieldNull('params', 'dataSource');\n\n            case 6:\n              dataSource = params.dataSource, element = params.element, nameField = params.nameField, valueField = params.valueField;\n              _context.next = 9;\n              return dataSource.select({});\n\n            case 9:\n              r = _context.sent;\n              r.dataItems.map(function (o) {\n                var label = document.createElement('label');\n                var input = document.createElement('input');\n                var span = document.createElement('span');\n                label.appendChild(input);\n                label.appendChild(span);\n                var name = nameField ? o[nameField] : o;\n                var value = valueField ? o[valueField] : o;\n                input.value = \"\".concat(value);\n                span.innerHTML = \"\".concat(name);\n                element.appendChild(label);\n              });\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n  }\n\n  exports.checkboxList = checkboxList;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n//# sourceMappingURL=checkbox-list.js.map\n\n\n//# sourceURL=webpack:///./out-es5/checkbox-list.js?");

/***/ }),

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n  exports.errors = {\n    arugmentNull: function arugmentNull(paramName) {\n      return new Error(\"Argument '\" + paramName + \"' can not be null.\");\n    },\n    argumentFieldNull: function argumentFieldNull(argumentName, fieldName) {\n      var msg = \"Argument \".concat(argumentName, \" \").concat(fieldName, \" field can not be null or empty.\");\n      return new Error(msg);\n    }\n  };\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n//# sourceMappingURL=errors.js.map\n\n\n//# sourceURL=webpack:///./out-es5/errors.js?");

/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./wrapper */ \"./out-es5/wrapper.js\"), __webpack_require__(/*! ./checkbox-list */ \"./out-es5/checkbox-list.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, wrapper_1, checkbox_list_1) {\n  \"use strict\";\n\n  function __export(m) {\n    for (var p in m) {\n      if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n    }\n  }\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  __export(wrapper_1);\n\n  __export(checkbox_list_1);\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack:///./out-es5/index.js?");

/***/ }),

/***/ "./out-es5/wrapper.js":
/*!****************************!*\
  !*** ./out-es5/wrapper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;\n\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! maishu-wuzhui */ \"maishu-wuzhui\"), __webpack_require__(/*! ./errors */ \"./out-es5/errors.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, w, errors_1) {\n  \"use strict\";\n\n  Object.defineProperty(exports, \"__esModule\", {\n    value: true\n  });\n\n  function createGridView(params) {\n    params = Object.assign({\n      pageSize: 10,\n      dataSource: null,\n      columns: null\n    }, params);\n\n    if (params.pagerSettings == null) {\n      params.pagerSettings = {\n        activeButtonClassName: 'active',\n        buttonContainerWraper: 'ul',\n        buttonWrapper: 'li',\n        buttonContainerClassName: 'pagination',\n        showTotal: true\n      };\n    }\n\n    console.assert(params.element != null, 'element can not null.');\n    params.element.className = 'table table-striped table-bordered table-hover';\n    var gridView = new w.GridView(params);\n    return gridView;\n  }\n\n  exports.createGridView = createGridView;\n\n  function boundField(params) {\n    if (!params) throw errors_1.errors.arugmentNull('params');\n    params.headerStyle = Object.assign({\n      textAlign: 'center'\n    }, params.headerStyle || {});\n    if (params.nullText == null) params.nullText = '';\n    return new w.BoundField(params);\n  }\n\n  exports.boundField = boundField;\n\n  function commandField(params) {\n    if (!params) throw errors_1.errors.arugmentNull('params');\n    return new w.CommandField(params);\n  }\n\n  exports.commandField = commandField;\n\n  function customField(params) {\n    if (!params) throw errors_1.errors.arugmentNull('params');\n    params.headerStyle = Object.assign({\n      textAlign: 'center'\n    }, params.headerStyle || {});\n    var field = new w.CustomField(params);\n    return field;\n  }\n\n  exports.customField = customField;\n\n  function dropdown(args) {\n    return new w.DropDown(args);\n  }\n\n  exports.dropdown = dropdown;\n\n  function textbox(args) {\n    return new w.TextBox(args);\n  }\n\n  exports.textbox = textbox;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n//# sourceMappingURL=wrapper.js.map\n\n\n//# sourceURL=webpack:///./out-es5/wrapper.js?");

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