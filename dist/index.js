/*!
 * WUZHUI-HELPER v1.15.0
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

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./errors */ "./out/errors.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function checkboxList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params)
                throw errors_1.errors.argumentNull('params');
            if (!params.element)
                throw errors_1.errors.argumentFieldNull('params', 'element');
            if (!params.dataSource)
                throw errors_1.errors.argumentFieldNull('params', 'dataSource');
            let { dataSource, element, nameField, valueField, dataField, dataItem } = params;
            let r = yield dataSource.select({});
            let elementDataItems = [];
            r.dataItems.map(o => {
                let label = document.createElement('label');
                let input = document.createElement('input');
                input.type = "checkbox";
                let span = document.createElement('span');
                label.appendChild(input);
                label.appendChild(span);
                let name = nameField ? o[nameField] : o;
                let value = valueField ? o[valueField] : o;
                input.value = `${value}`;
                span.innerHTML = `${name}`;
                if (dataItem[dataField] && !Array.isArray(dataItem[dataField])) {
                    throw errors_1.errors.dataFieldValueNotArray(dataField);
                }
                if (value == dataItem[dataField]) {
                    input.checked = true;
                }
                elementDataItems.push({ element: input, dataItem: o });
                input.onchange = function (e) {
                    dataItem[dataField] = elementDataItems.filter(o => o.element.checked).map(o => o.dataItem[valueField]);
                };
                element.appendChild(label);
            });
        });
    }
    exports.checkboxList = checkboxList;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/errors.js":
/*!***********************!*\
  !*** ./out/errors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errors = {
        argumentNull(paramName) {
            return new Error("Argument '" + paramName + "' can not be null.");
        },
        argumentFieldNull(argumentName, fieldName) {
            let msg = `Argument ${argumentName} ${fieldName} field can not be null or empty.`;
            return new Error(msg);
        },
        dataFieldValueNotArray(dataField) {
            let msg = `Type of dataitem ${dataField} field is not array.`;
            return new Error(msg);
        }
    };
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/fields/custom-data.js":
/*!***********************************!*\
  !*** ./out/fields/custom-data.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, maishu_wuzhui_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function customDataField(params) {
        return new maishu_wuzhui_1.CustomField({
            headerText: params.headerText,
            headerStyle: params.headerStyle,
            itemStyle: params.itemStyle,
            createItemCell() {
                let cell = new maishu_wuzhui_1.GridViewDataCell({
                    render(dataItem, element) {
                        let r = params.render(dataItem, element);
                        if (r)
                            element.innerHTML = r;
                    }
                });
                return cell;
            }
        });
    }
    exports.customDataField = customDataField;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/fields/date-time.js":
/*!*********************************!*\
  !*** ./out/fields/date-time.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, maishu_wuzhui_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function dateTimeField(args) {
        let field = new DateTimeField(args);
        let validateRules = {
            validateRules: args.validateRules
        };
        let r = Object.assign(field, validateRules);
        return r;
    }
    exports.dateTimeField = dateTimeField;
    class DateTimeField extends maishu_wuzhui_1.BoundField {
        constructor(args) {
            super(Object.assign({
                headerStyle: { textAlign: 'center', width: '160px' },
                itemStyle: { textAlign: 'center', width: `160px` }
            }, args));
            this.inputTips = args.inputTips;
        }
        createControl() {
            let ctrl = super.createControl();
            let VALUE = "value";
            Object.defineProperty(ctrl, VALUE, {
                get() {
                    let str = ctrl.element.value;
                    let value;
                    try {
                        value = new Date(Date.parse(str));
                    }
                    catch (err) {
                    }
                    return value;
                },
                set(value) {
                    let str = toDateTimeString(value);
                    ctrl.element.value = str;
                }
            });
            if (this.inputTips)
                ctrl.element.placeholder = this.inputTips;
            ctrl.element.className = "form-control";
            return ctrl;
        }
        createItemCell(dataItem) {
            let cell = super.createItemCell(dataItem);
            cell.formatValue = function (value) {
                return toDateTimeString(value);
            };
            return cell;
        }
    }
    function toDateTimeString(datetime) {
        if (datetime == null)
            return null;
        if (typeof datetime == "string") {
            datetime = new Date(datetime);
        }
        let d;
        if (typeof datetime == 'number')
            d = new Date(datetime);
        else
            d = datetime;
        let month = `${d.getMonth() + 1}`;
        month = month.length == 1 ? '0' + month : month;
        let date = `${d.getDate()}`;
        date = date.length == 1 ? '0' + date : date;
        let hours = `${d.getHours()}`;
        hours = hours.length == 1 ? '0' + hours : hours;
        let minutes = `${d.getMinutes()}`;
        minutes = minutes.length == 1 ? '0' + minutes : minutes;
        return `${d.getFullYear()}-${month}-${date} ${hours}:${minutes}`;
    }
    exports.toDateTimeString = toDateTimeString;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/fields/index.js":
/*!*****************************!*\
  !*** ./out/fields/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./date-time */ "./out/fields/date-time.js"), __webpack_require__(/*! ./custom-data */ "./out/fields/custom-data.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, date_time_1, custom_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dateTimeField = date_time_1.dateTimeField;
    exports.customDataField = custom_data_1.customDataField;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/index.js":
/*!**********************!*\
  !*** ./out/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./wrapper */ "./out/wrapper.js"), __webpack_require__(/*! ./checkbox-list */ "./out/checkbox-list.js"), __webpack_require__(/*! ./radio-list */ "./out/radio-list.js"), __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui"), __webpack_require__(/*! ./fields/index */ "./out/fields/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, wrapper_1, checkbox_list_1, radio_list_1, maishu_wuzhui_1, index_1) {
    "use strict";
    function __export(m) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
    Object.defineProperty(exports, "__esModule", { value: true });
    __export(wrapper_1);
    __export(checkbox_list_1);
    __export(radio_list_1);
    __export(maishu_wuzhui_1);
    __export(index_1);
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/radio-list.js":
/*!***************************!*\
  !*** ./out/radio-list.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./errors */ "./out/errors.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function radioList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params)
                throw errors_1.errors.argumentNull('params');
            if (!params.element)
                throw errors_1.errors.argumentFieldNull('params', 'element');
            if (!params.dataSource)
                throw errors_1.errors.argumentFieldNull('params', 'dataSource');
            let { dataSource, element, nameField, valueField, dataField } = params;
            let r = yield dataSource.select({});
            element.innerHTML = "";
            r.dataItems.map(o => {
                let label = document.createElement('label');
                label.className = "radio-inline";
                let controlElement = document.createElement('input');
                controlElement.type = "radio";
                controlElement.name = dataField;
                let nameElement = document.createElement('span');
                label.appendChild(controlElement);
                label.appendChild(nameElement);
                let itemName = getDataSourceItemName(o);
                let itemValue = getDataSourceItemValue(o);
                controlElement.value = `${itemValue}`;
                nameElement.innerHTML = `${itemName}`;
                controlElement.onchange = function (e) {
                    params.dataItem[dataField] = itemValue;
                };
                let value = params.dataItem[dataField] || params.defaultValue;
                if (value == itemValue) {
                    controlElement.checked = true;
                }
                element.appendChild(label);
            });
            function getDataSourceItemName(item) {
                if (!nameField)
                    return item;
                return item[nameField];
            }
            function getDataSourceItemValue(item) {
                if (!valueField)
                    return item;
                return item[valueField];
            }
        });
    }
    exports.radioList = radioList;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/textbox.js":
/*!************************!*\
  !*** ./out/textbox.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! ./errors */ "./out/errors.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextBox {
        constructor(params) {
            if (params == null)
                throw errors_1.errors.argumentNull("params");
            if (!params.element)
                throw errors_1.errors.argumentFieldNull("params", "element");
            if (!params.dataField)
                throw errors_1.errors.argumentFieldNull("params", "dataField");
            if (!params.dataItem)
                throw errors_1.errors.argumentFieldNull("params", "dataItem");
            if (!params.valueType)
                throw errors_1.errors.argumentFieldNull("params", "valuetype");
            let { element, dataField, dataItem, valueType } = params;
            let value = dataItem[dataField];
            element.value = `${value || ""}`;
            element.onchange = () => {
                if (valueType == 'int') {
                    dataItem[dataField] = Number.parseInt(element.value);
                }
                else if (valueType == 'float') {
                    dataItem[dataField] = Number.parseFloat(element.value);
                }
                else {
                    dataItem[dataField] = element.value;
                }
            };
        }
    }
    exports.TextBox = TextBox;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),

/***/ "./out/wrapper.js":
/*!************************!*\
  !*** ./out/wrapper.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! maishu-wuzhui */ "maishu-wuzhui"), __webpack_require__(/*! ./errors */ "./out/errors.js"), __webpack_require__(/*! ./textbox */ "./out/textbox.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, w, errors_1, textbox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createGridView(params) {
        params = Object.assign({
            pageSize: 10,
            dataSource: null,
            columns: null,
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
        let gridView = new w.GridView(params);
        return gridView;
    }
    exports.createGridView = createGridView;
    function boundField(params) {
        if (!params)
            throw errors_1.errors.argumentNull('params');
        params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
        if (params.nullText == null)
            params.nullText = '';
        let field = new w.BoundField(params);
        let validateRules = {
            validateRules: params.validateRules
        };
        let r = Object.assign(field, validateRules);
        let createControl = field.createControl;
        field.createControl = function () {
            let ctrl = createControl.apply(this, []);
            if (params.inputTips)
                ctrl.element.placeholder = params.inputTips;
            ctrl.element.className = "form-control";
            return ctrl;
        };
        return r;
    }
    exports.boundField = boundField;
    function commandField(params) {
        if (!params)
            throw errors_1.errors.argumentNull('params');
        return new w.CommandField(params);
    }
    exports.commandField = commandField;
    function customField(params) {
        if (!params)
            throw errors_1.errors.argumentNull('params');
        params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
        let field = new w.CustomField(params);
        return field;
    }
    exports.customField = customField;
    function dropdown(args) {
        return new w.DropDown(args);
    }
    exports.dropdown = dropdown;
    function textbox(args) {
        return new textbox_1.TextBox(args);
    }
    exports.textbox = textbox;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


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
//# sourceMappingURL=index.js.map