/*!
 * WUZHUI-HELPER v1.8.8
 * https://github.com/ansiboy/wuzhui-helper
 * 
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 */
define("wuzhui_helper", ["maishu-wuzhui"], function(__WEBPACK_EXTERNAL_MODULE_maishu_wuzhui__) { return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./out-es5/controls/checkbox-list.js":
/*!*******************************************!*\
  !*** ./out-es5/controls/checkbox-list.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");

function checkboxList(params) {
  return __awaiter(this, void 0, void 0,
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var dataSource, element, nameField, valueField, dataField, dataItem, r, elementDataItems;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (params) {
              _context.next = 2;
              break;
            }

            throw errors_1.errors.argumentNull('params');

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
            dataSource = params.dataSource, element = params.element, nameField = params.nameField, valueField = params.valueField, dataField = params.dataField, dataItem = params.dataItem;
            _context.next = 9;
            return dataSource.select({});

          case 9:
            r = _context.sent;
            elementDataItems = [];
            r.dataItems.map(function (o) {
              var label = document.createElement('label');
              var input = document.createElement('input');
              input.type = "checkbox";
              var span = document.createElement('span');
              label.appendChild(input);
              label.appendChild(span);
              var name = nameField ? o[nameField] : o;
              var value = valueField ? o[valueField] : o;
              input.value = "".concat(value);
              span.innerHTML = "".concat(name);

              if (dataItem[dataField] && !Array.isArray(dataItem[dataField])) {
                throw errors_1.errors.dataFieldValueNotArray(dataField);
              }

              if (value == dataItem[dataField]) {
                input.checked = true;
              }

              elementDataItems.push({
                element: input,
                dataItem: o
              });

              input.onchange = function (e) {
                dataItem[dataField] = elementDataItems.filter(function (o) {
                  return o.element.checked;
                }).map(function (o) {
                  return o.dataItem[valueField];
                });
              };

              element.appendChild(label);
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}

exports.checkboxList = checkboxList;
//# sourceMappingURL=checkbox-list.js.map


/***/ }),

/***/ "./out-es5/controls/radio-list.js":
/*!****************************************!*\
  !*** ./out-es5/controls/radio-list.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");

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

            throw errors_1.errors.argumentNull('params');

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
//# sourceMappingURL=radio-list.js.map


/***/ }),

/***/ "./out-es5/errors.js":
/*!***************************!*\
  !*** ./out-es5/errors.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = {
  argumentNull: function argumentNull(paramName) {
    return new Error("Argument '" + paramName + "' can not be null.");
  },
  argumentFieldNull: function argumentFieldNull(argumentName, fieldName) {
    var msg = "Argument ".concat(argumentName, " ").concat(fieldName, " field can not be null or empty.");
    return new Error(msg);
  },
  dataFieldValueNotArray: function dataFieldValueNotArray(dataField) {
    var msg = "Type of dataitem ".concat(dataField, " field is not array.");
    return new Error(msg);
  }
};
//# sourceMappingURL=errors.js.map


/***/ }),

/***/ "./out-es5/fields/bound-field.js":
/*!***************************************!*\
  !*** ./out-es5/fields/bound-field.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui");

var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");

function boundField(params) {
  if (!params) throw errors_1.errors.argumentNull('params');
  params.headerStyle = Object.assign({
    textAlign: 'center'
  }, params.headerStyle || {});
  if (params.nullText == null) params.nullText = '';
  var field = new w.BoundField(params);
  var validateRules = {
    validateRules: params.validateRules
  };
  var r = Object.assign(field, validateRules);
  var createControl = field.createControl;

  field.createControl = function () {
    var ctrl = createControl.apply(this, []);
    if (params.emptyText) ctrl.element.placeholder = params.emptyText;
    ctrl.element.className = "form-control";
    return ctrl;
  };

  return r;
}

exports.boundField = boundField;
//# sourceMappingURL=bound-field.js.map


/***/ }),

/***/ "./out-es5/fields/command-field.js":
/*!*****************************************!*\
  !*** ./out-es5/fields/command-field.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui");

var errors_1 = __webpack_require__(/*! ../errors */ "./out-es5/errors.js");

function commandField(params) {
  if (!params) throw errors_1.errors.argumentNull('params');
  return new w.CommandField(params);
}

exports.commandField = commandField;
//# sourceMappingURL=command-field.js.map


/***/ }),

/***/ "./out-es5/fields/custom-data-field.js":
/*!*********************************************!*\
  !*** ./out-es5/fields/custom-data-field.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var maishu_wuzhui_1 = __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui");

function customDataField(params) {
  return new maishu_wuzhui_1.CustomField({
    headerText: params.headerText,
    headerStyle: params.headerStyle,
    itemStyle: params.itemStyle,
    createItemCell: function createItemCell() {
      var cell = new maishu_wuzhui_1.GridViewDataCell({
        render: function render(dataItem, element) {
          var r = params.render(dataItem, element);
          if (r) element.innerHTML = r;
        }
      });
      return cell;
    }
  });
}

exports.customDataField = customDataField;
//# sourceMappingURL=custom-data-field.js.map


/***/ }),

/***/ "./out-es5/fields/date-time-field.js":
/*!*******************************************!*\
  !*** ./out-es5/fields/date-time-field.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var maishu_wuzhui_1 = __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui");

function dateTimeField(args) {
  var field = new DateTimeField(args);
  var validateRules = {
    validateRules: args.validateRules
  };
  var r = Object.assign(field, validateRules);
  return r;
}

exports.dateTimeField = dateTimeField;

var DateTimeField =
/*#__PURE__*/
function (_maishu_wuzhui_1$Boun) {
  _inherits(DateTimeField, _maishu_wuzhui_1$Boun);

  function DateTimeField(args) {
    var _this;

    _classCallCheck(this, DateTimeField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimeField).call(this, Object.assign({
      headerStyle: {
        textAlign: 'center',
        width: '160px'
      },
      itemStyle: {
        textAlign: 'center',
        width: "160px"
      }
    }, args)));
    _this.emptyText = args.emptyText;
    return _this;
  }

  _createClass(DateTimeField, [{
    key: "createControl",
    value: function createControl() {
      var ctrl = _get(_getPrototypeOf(DateTimeField.prototype), "createControl", this).call(this);

      var VALUE = "value";
      Object.defineProperty(ctrl, VALUE, {
        get: function get() {
          var str = ctrl.element.value;
          var value;

          try {
            value = new Date(Date.parse(str));
          } catch (err) {}

          return value;
        },
        set: function set(value) {
          var str = toDateTimeString(value);
          ctrl.element.value = str;
        }
      });
      if (this.emptyText) ctrl.element.placeholder = this.emptyText;
      ctrl.element.className = "form-control";
      return ctrl;
    }
  }, {
    key: "createItemCell",
    value: function createItemCell(dataItem) {
      var cell = _get(_getPrototypeOf(DateTimeField.prototype), "createItemCell", this).call(this, dataItem);

      cell.formatValue = function (value) {
        return toDateTimeString(value);
      };

      return cell;
    }
  }]);

  return DateTimeField;
}(maishu_wuzhui_1.BoundField);

function toDateTimeString(datetime) {
  if (datetime == null) return null;

  if (typeof datetime == "string") {
    datetime = new Date(datetime);
  }

  var d;
  if (typeof datetime == 'number') d = new Date(datetime);else d = datetime;
  var month = "".concat(d.getMonth() + 1);
  month = month.length == 1 ? '0' + month : month;
  var date = "".concat(d.getDate());
  date = date.length == 1 ? '0' + date : date;
  var hours = "".concat(d.getHours());
  hours = hours.length == 1 ? '0' + hours : hours;
  var minutes = "".concat(d.getMinutes());
  minutes = minutes.length == 1 ? '0' + minutes : minutes;
  return "".concat(d.getFullYear(), "-").concat(month, "-").concat(date, " ").concat(hours, ":").concat(minutes);
}

exports.toDateTimeString = toDateTimeString;
//# sourceMappingURL=date-time-field.js.map


/***/ }),

/***/ "./out-es5/fields/dropdown-field.js":
/*!******************************************!*\
  !*** ./out-es5/fields/dropdown-field.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

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
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui");

var emptyValue = "";

function dropdownField(params) {
  var field = new DropdownField(params);
  return field;
}

exports.dropdownField = dropdownField;

var DropdownField =
/*#__PURE__*/
function (_w$BoundField) {
  _inherits(DropdownField, _w$BoundField);

  function DropdownField(params) {
    var _this;

    _classCallCheck(this, DropdownField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownField).call(this, params));

    _get(_getPrototypeOf(DropdownField.prototype), "params", _assertThisInitialized(_this));

    params.dataSource.select().then(function (r) {});
    return _this;
  }

  _createClass(DropdownField, [{
    key: "getParams",
    value: function getParams() {
      return this.params;
    }
  }, {
    key: "getDataItems",
    value: function getDataItems() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var r;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.dataItems) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.getParams().dataSource.select();

              case 3:
                r = _context.sent;
                this.dataItems = r.dataItems;

              case 5:
                return _context.abrupt("return", this.dataItems);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "createControl",
    value: function createControl() {
      var _this2 = this;

      var element = document.createElement("select");
      element.className = "form-control";

      if (this.getParams().emptyText) {
        var o = document.createElement("option");
        o.innerText = this.getParams().emptyText;
        o.value = emptyValue;
        element.append(o);
      }

      this.getDataItems().then(function (dataItems) {
        var options = dataItems.map(function (dataItem) {
          var o = document.createElement("option");
          o.innerText = dataItem[_this2.getParams().nameField];
          o.value = dataItem[_this2.getParams().valueField];
          return o;
        });
        element.append.apply(element, _toConsumableArray(options));
      });
      return {
        element: element,

        get value() {
          return element.value;
        },

        set value(value) {
          if (value == null) {
            element.value = emptyValue;
            return;
          }

          element.value = value;
        }

      };
    }
  }]);

  return DropdownField;
}(w.BoundField);
//# sourceMappingURL=dropdown-field.js.map


/***/ }),

/***/ "./out-es5/grid-view.js":
/*!******************************!*\
  !*** ./out-es5/grid-view.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui");

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
//# sourceMappingURL=grid-view.js.map


/***/ }),

/***/ "./out-es5/index.js":
/*!**************************!*\
  !*** ./out-es5/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(/*! ./controls/checkbox-list */ "./out-es5/controls/checkbox-list.js"));

__export(__webpack_require__(/*! ./controls/radio-list */ "./out-es5/controls/radio-list.js"));

var bound_field_1 = __webpack_require__(/*! ./fields/bound-field */ "./out-es5/fields/bound-field.js");

exports.boundField = bound_field_1.boundField;

var command_field_1 = __webpack_require__(/*! ./fields/command-field */ "./out-es5/fields/command-field.js");

exports.commandField = command_field_1.commandField;

var custom_data_field_1 = __webpack_require__(/*! ./fields/custom-data-field */ "./out-es5/fields/custom-data-field.js");

exports.customDataField = custom_data_field_1.customDataField;

var date_time_field_1 = __webpack_require__(/*! ./fields/date-time-field */ "./out-es5/fields/date-time-field.js");

exports.dateTimeField = date_time_field_1.dateTimeField;

var dropdown_field_1 = __webpack_require__(/*! ./fields/dropdown-field */ "./out-es5/fields/dropdown-field.js");

exports.dropdownField = dropdown_field_1.dropdownField;

__export(__webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui"));

var grid_view_1 = __webpack_require__(/*! ./grid-view */ "./out-es5/grid-view.js");

exports.createGridView = grid_view_1.createGridView;
//# sourceMappingURL=index.js.map


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