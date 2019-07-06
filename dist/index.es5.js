/*!
 * WUZHUI-HELPER v1.5.5
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
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./errors */ "./out-es5/errors.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, errors_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function checkboxList(params) {
    return __awaiter(this, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var dataSource, element, nameField, valueField, r;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (params) {
                _context.next = 2;
                break;
              }

              throw errors_1.errors.arugmentNull('params');

            case 2:
              if (params.element) {
                _context.next = 4;
                break;
              }

              throw errors_1.errors.argumentFieldNull('params', 'element');

            case 4:
              if (params.dataSource) {
                _context.next = 6;
                break;
              }

              throw errors_1.errors.argumentFieldNull('params', 'dataSource');

            case 6:
              dataSource = params.dataSource, element = params.element, nameField = params.nameField, valueField = params.valueField;
              _context.next = 9;
              return dataSource.select({});

            case 9:
              r = _context.sent;
              r.dataItems.map(function (o) {
                var label = document.createElement('label');
                var input = document.createElement('input');
                var span = document.createElement('span');
                label.appendChild(input);
                label.appendChild(span);
                var name = nameField ? o[nameField] : o;
                var value = valueField ? o[valueField] : o;
                input.value = "".concat(value);
                span.innerHTML = "".concat(name);
                element.appendChild(label);
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }

  exports.checkboxList = checkboxList;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=checkbox-list.js.map


/***/ }),

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.errors = {
    arugmentNull: function arugmentNull(paramName) {
      return new Error("Argument '" + paramName + "' can not be null.");
    },
    argumentFieldNull: function argumentFieldNull(argumentName, fieldName) {
      var msg = "Argument ".concat(argumentName, " ").concat(fieldName, " field can not be null or empty.");
      return new Error(msg);
    }
  };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./wrapper */ "./out-es5/wrapper.js"), __webpack_require__(/*! ./checkbox-list */ "./out-es5/checkbox-list.js"), __webpack_require__(/*! ./radio-list */ "./out-es5/radio-list.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, wrapper_1, checkbox_list_1, radio_list_1) {
  "use strict";

  function __export(m) {
    for (var p in m) {
      if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
  }

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  __export(wrapper_1);

  __export(checkbox_list_1);

  __export(radio_list_1);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./out-es5/radio-list.js":
/*!*******************************!*\
  !*** ./out-es5/radio-list.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./errors */ "./out-es5/errors.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, errors_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function radioList(params) {
    return __awaiter(this, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var dataSource, element, nameField, valueField, dataField, r, getDataSourceItemName, getDataSourceItemValue;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getDataSourceItemValue = function _ref2(item) {
                if (!valueField) return item;
                return item[valueField];
              };

              getDataSourceItemName = function _ref(item) {
                if (!nameField) return item;
                return item[nameField];
              };

              if (params) {
                _context.next = 4;
                break;
              }

              throw errors_1.errors.arugmentNull('params');

            case 4:
              if (params.element) {
                _context.next = 6;
                break;
              }

              throw errors_1.errors.argumentFieldNull('params', 'element');

            case 6:
              if (params.dataSource) {
                _context.next = 8;
                break;
              }

              throw errors_1.errors.argumentFieldNull('params', 'dataSource');

            case 8:
              dataSource = params.dataSource, element = params.element, nameField = params.nameField, valueField = params.valueField, dataField = params.dataField;
              _context.next = 11;
              return dataSource.select({});

            case 11:
              r = _context.sent;
              element.innerHTML = "";
              r.dataItems.map(function (o) {
                var label = document.createElement('label');
                label.className = "radio-inline";
                var controlElement = document.createElement('input');
                controlElement.type = "radio";
                controlElement.name = dataField;
                var nameElement = document.createElement('span');
                label.appendChild(controlElement);
                label.appendChild(nameElement);
                var itemName = getDataSourceItemName(o);
                var itemValue = getDataSourceItemValue(o);
                controlElement.value = "".concat(itemValue);
                nameElement.innerHTML = "".concat(itemName);

                controlElement.onchange = function (e) {
                  params.dataItem[dataField] = itemValue;
                };

                var value = params.dataItem[dataField] || params.defaultValue;

                if (value == itemValue) {
                  controlElement.checked = true;
                }

                element.appendChild(label);
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }

  exports.radioList = radioList;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=radio-list.js.map


/***/ }),

/***/ "./out-es5/wrapper.js":
/*!****************************!*\
  !*** ./out-es5/wrapper.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui"), __webpack_require__(/*! ./errors */ "./out-es5/errors.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, w, errors_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function createGridView(params) {
    params = Object.assign({
      pageSize: 10,
      dataSource: null,
      columns: null
    }, params);

    if (params.pagerSettings == null) {
      params.pagerSettings = {
        activeButtonClassName: 'active',
        buttonContainerWraper: 'ul',
        buttonWrapper: 'li',
        buttonContainerClassName: 'pagination',
        showTotal: true
      };
    }

    console.assert(params.element != null, 'element can not null.');
    params.element.className = 'table table-striped table-bordered table-hover';
    var gridView = new w.GridView(params);
    return gridView;
  }

  exports.createGridView = createGridView;

  function boundField(params) {
    if (!params) throw errors_1.errors.arugmentNull('params');
    params.headerStyle = Object.assign({
      textAlign: 'center'
    }, params.headerStyle || {});
    if (params.nullText == null) params.nullText = '';
    return new w.BoundField(params);
  }

  exports.boundField = boundField;

  function commandField(params) {
    if (!params) throw errors_1.errors.arugmentNull('params');
    return new w.CommandField(params);
  }

  exports.commandField = commandField;

  function customField(params) {
    if (!params) throw errors_1.errors.arugmentNull('params');
    params.headerStyle = Object.assign({
      textAlign: 'center'
    }, params.headerStyle || {});
    var field = new w.CustomField(params);
    return field;
  }

  exports.customField = customField;

  function dropdown(args) {
    return new w.DropDown(args);
  }

  exports.dropdown = dropdown;

  function textbox(args) {
    return new w.TextBox(args);
  }

  exports.textbox = textbox;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=wrapper.js.map


/***/ }),

/***/ "maishu-wuzhui":
/*!********************************!*\
  !*** external "maishu-wuzhui" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_maishu_wuzhui__;

/***/ })

/******/ })});;
//# sourceMappingURL=index.es5.js.map