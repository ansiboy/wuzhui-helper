
    
/*!
 * DILU v1.0.0
 * https://github.com/ansiboy/dilu
 *
 * Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
 * Licensed under the MIT License.
 *
 */
    (function(factory) { 
        if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') { 
            // [1] CommonJS/Node.js 
            var target = module['exports'] || exports;
            var dilu = factory(target, require);
            Object.assign(target, dilu);
        } else if (typeof define === 'function' && define['amd']) {
            define(factory); 
        } else { 
            factory();
        } 
    })(function() {
    var dilu;
(function (dilu) {
    dilu.errors = {
        argumentNull(parameterName) {
            let msg = `Parameter ${parameterName} can not be null or empty.`;
            return new Error(msg);
        },
        elementValidateRuleNotSet(element) {
            let msg = `元素'${element.name}'没有设置验证规则`;
            return new Error(msg);
        },
        fieldElementCanntNull(fieldIndex) {
            // if (fieldIndex != null)
            let msg = fieldIndex != null ?
                `The element value in the field cannt be null, field index is ${fieldIndex}.` :
                `The element in the field is null`;
            return new Error(msg);
        },
        elementNotExists(name) {
            let msg = `Element ${name} is not exits in the form.`;
            return new Error(msg);
        },
        fieldResultExpectBooleanType(name) {
            let msg = `Result of ${name} field is expected boolean.`;
            return new Error(msg);
        }
    };
})(dilu || (dilu = {}));
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var dilu;
(function (dilu) {
    /**
     * 表单验证器，用于对表单中的字段进行验证
     */
    class FormValidator {
        constructor(form, ...fields) {
            /** 输入框的值发生改变，是否重新校验该输入框的值，默认为 true */
            this.validateOnChanged = true;
            this.fields = fields || [];
            this.form = form;
            this.elementEvents = {};
        }
        appendField(field) {
            this.fields.push(field);
        }
        /**
         * 清除表单的错误信息
         */
        clearErrors() {
            this.fields.map(o => o.errorElement)
                .filter(o => o != null)
                .forEach(o => o.style.display = 'none');
        }
        /**
         * 清除表单的指定元素错误信息
         * @param name 指定的元素名称
         */
        clearElementError(name) {
            if (!name)
                throw dilu.errors.argumentNull('name');
            let fields = this.fields.filter(o => o.name == name);
            for (let field of fields) {
                let errorElement = this.fieldErrorElement(field);
                errorElement.style.display = 'none';
            }
        }
        /**
         * 设置表单的指定元素错误信息
         * @param name 指定的元素名称
         * @param error 错误信息
         */
        setElementError(name, error) {
            if (!name)
                throw dilu.errors.argumentNull('name');
            if (!error)
                throw dilu.errors.argumentNull('error');
            let fields = this.fields.filter(o => o.name == name);
            for (let field of fields) {
                let errorElement = this.fieldErrorElement(field);
                errorElement.style.removeProperty('display');
                errorElement.innerHTML = error;
            }
        }
        fieldElement(field) {
            let name = field.name;
            let element = this.form.querySelectorAll(`[name='${name}']`)[0];
            if (element == null)
                throw dilu.errors.elementNotExists(name);
            return element;
        }
        fieldErrorElement(field) {
            if (field.errorElement) {
                return field.errorElement;
            }
            let element = this.fieldElement(field);
            let errorElement = field.errorElement = document.createElement("span");
            errorElement.className = FormValidator.errorClassName;
            errorElement.style.display = 'none';
            if (element.nextSibling)
                element.parentElement.insertBefore(errorElement, element.nextSibling);
            else
                element.parentElement.appendChild(errorElement);
            return errorElement;
        }
        /**
         * 验证字段
         */
        check() {
            let ps = new Array();
            for (let i = 0; i < this.fields.length; i++) {
                let field = this.fields[i];
                if (field.condition && field.condition() == false)
                    continue;
                let p = this.checkField(field);
                ps.push(p);
            }
            let result = ps.filter(o => o == false).length == 0;
            return result;
        }
        /**
         * 异步验证字段
         */
        checkAsync() {
            return __awaiter(this, void 0, void 0, function* () {
                let ps = new Array();
                for (let i = 0; i < this.fields.length; i++) {
                    let field = this.fields[i];
                    if (field.condition && field.condition() == false)
                        continue;
                    let p = this.checkFieldAsync(field);
                    ps.push(p);
                }
                let checkResults = yield Promise.all(ps);
                let result = checkResults.filter(o => o == false).length == 0;
                return result;
            });
        }
        bindElementEvent(field, isAsync) {
            if (this.elementEvents[field.name]) {
                return;
            }
            let element = this.fieldElement(field);
            let validateFunc = (() => {
                let checking = false;
                return () => {
                    if (checking)
                        return;
                    checking = true;
                    // isAsync ? this.checkFieldAsync(field) : this.checkField(field);
                    if (isAsync) {
                        this.checkFieldAsync(field)
                            .then(() => checking = false)
                            .catch(() => checking = false);
                    }
                    else {
                        this.checkField(field);
                        checking = false;
                    }
                };
            })();
            if (this.validateOnChanged) {
                element.addEventListener('change', validateFunc);
                if (element.tagName != 'select') {
                    element.addEventListener('keyup', validateFunc);
                }
            }
            this.elementEvents[field.name] = true;
        }
        checkField(field) {
            this.bindElementEvent(field, false);
            let depends = field.depends || [];
            for (let j = 0; j < depends.length; j++) {
                let dependResult = depends[j]();
                if (typeof dependResult == 'object') {
                    throw new Error('Please use checkAsync method.');
                }
                let dependIsOK = dependResult;
                if (!dependIsOK)
                    return false;
            }
            for (let j = 0; j < field.rules.length; j++) {
                let rule = field.rules[j];
                let element = this.fieldElement(field);
                if (element == null)
                    throw dilu.errors.fieldElementCanntNull();
                let value = FormValidator.elementValue(element);
                let isPass = rule.validate(value);
                if (typeof isPass == 'object') {
                    throw new Error('Please use checkAsync method.');
                }
                this.showElement(!isPass, field, rule, element);
                if (!isPass)
                    return false;
            }
            return true;
        }
        checkFieldAsync(field) {
            return __awaiter(this, void 0, void 0, function* () {
                this.bindElementEvent(field, true);
                let depends = field.depends || [];
                for (let j = 0; j < depends.length; j++) {
                    let dependResult = depends[j]();
                    if (typeof dependResult == 'boolean') {
                        dependResult = Promise.resolve(dependResult);
                    }
                    let dependIsOK = yield dependResult;
                    if (!dependIsOK)
                        return false;
                }
                for (let j = 0; j < field.rules.length; j++) {
                    let rule = field.rules[j];
                    let element = this.fieldElement(field);
                    if (element == null)
                        throw dilu.errors.fieldElementCanntNull();
                    let value = FormValidator.elementValue(element);
                    let p = rule.validate(value);
                    if (typeof p == 'boolean') {
                        p = Promise.resolve(p);
                    }
                    let isPass = yield p;
                    this.showElement(!isPass, field, rule, element);
                    if (!isPass)
                        return false;
                }
                return true;
            });
        }
        showElement(display, field, rule, element) {
            let errorElement = this.fieldErrorElement(field);
            console.assert(errorElement != null, 'errorElement cannt be null.');
            if (rule.error != null) {
                errorElement = field.errorElement;
                let name = this.elementName(element);
                let errorText = typeof rule.error == 'string' ? rule.error : rule.error() || '';
                errorElement.innerHTML = errorText.replace('%s', name);
            }
            if (display) {
                errorElement.style.removeProperty('display');
            }
            else {
                errorElement.style.display = 'none';
            }
        }
        /**
         * 异步验证 HTML 元素
         * @param name HTML 元素名称
         */
        checkElementAsync(name) {
            let field = this.fields.filter(o => o.name == name)[0];
            if (!field)
                throw dilu.errors.elementNotExists(name);
            return this.checkFieldAsync(field);
        }
        /**
         * 同步验证 HTML 元素
         * @param name HTML 元素名称
         */
        checkElement(name) {
            let field = this.fields.filter(o => o.name == name)[0];
            if (!field)
                throw dilu.errors.elementNotExists(name);
            return this.checkField(field);
        }
        static elementValue(element) {
            if (element.tagName == "TEXTAREA") {
                return element.value;
            }
            return element.value;
        }
        elementName(element) {
            if (element.tagName == "TEXTAREA") {
                return element.name;
            }
            return element.name;
        }
    }
    FormValidator.errorClassName = 'validationMessage';
    dilu.FormValidator = FormValidator;
})(dilu || (dilu = {}));
var dilu;
(function (dilu) {
    var ruleRegex = /^(.+?)\[(.+)\]$/, numericRegex = /^[0-9]+$/, integerRegex = /^\-?[0-9]+$/, decimalRegex = /^\-?[0-9]*\.?[0-9]+$/, emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, alphaRegex = /^[a-z]+$/i, alphaNumericRegex = /^[a-z0-9]+$/i, alphaDashRegex = /^[a-z0-9_\-]+$/i, naturalRegex = /^[0-9]+$/i, naturalNoZeroRegex = /^[1-9][0-9]*$/i, ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i, base64Regex = /[^a-zA-Z0-9\/\+=]/i, numericDashRegex = /^[\d\-\s]+$/, urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, mobileRegex = /^1[34578]\d{9}$/, dateRegex = /\d{4}-\d{1,2}-\d{1,2}/;
    let msgs = {
        required: '%s不能为空',
        matches: '%s与%s不匹配',
        "default": 'The %s field is still set to default, please change.',
        equal: '%s和%s必须相同',
        email: '不是有效的邮箱地址',
        valid_emails: 'The %s field must contain all valid email addresses.',
        minLength: '%s至少包含%s个字符',
        maxLength: '%s不能超过%s字符',
        exact_length: 'The %s field must be exactly %s characters in length.',
        greater_than: 'The %s field must contain a number greater than %s.',
        less_than: 'The %s field must contain a number less than %s.',
        alpha: 'The %s field must only contain alphabetical characters.',
        alpha_numeric: 'The %s field must only contain alpha-numeric characters.',
        alpha_dash: 'The %s field must only contain alpha-numeric characters, underscores, and dashes.',
        numeric: '请数入数字',
        integer: 'The %s field must contain an integer.',
        decimal: 'The %s field must contain a decimal number.',
        is_natural: 'The %s field must contain only positive numbers.',
        is_natural_no_zero: 'The %s field must contain a number greater than zero.',
        ip: 'The %s field must contain a valid IP.',
        valid_base64: 'The %s field must contain a base64 string.',
        valid_credit_card: 'The %s field must contain a valid credit card number.',
        is_file_type: 'The %s field must contain only %s files.',
        valid_url: 'The %s field must contain a valid URL.',
        greater_than_date: 'The %s field must contain a more recent date than %s.',
        less_than_date: 'The %s field must contain an older date than %s.',
        greater_than_or_equal_date: 'The %s field must contain a date that\'s at least as recent as %s.',
        less_than_or_equal_date: 'The %s field must contain a date that\'s %s or older.',
        mobile: '请输入正确的手机号码',
        custom: '请输入正确制',
    };
    function createValidation(validate, error) {
        return {
            validate: validate,
            error: error
        };
    }
    function calc(value) {
        if (typeof value == 'function')
            return value();
        return value;
    }
    /**
     * 表单验证规则
     */
    dilu.rules = {
        /**
         * 验证必填字段
         * @param error 错误提示文字
         */
        required(error) {
            let validate = (value) => value != '';
            return createValidation(validate, error || msgs.required);
        },
        /**
         * 验证两个字段值是否相等
         * @param otherElement 另外一个字段
         * @param error 错误提示文字
         */
        matches(otherElement, error) {
            var validate = (value) => value == dilu.FormValidator.elementValue(otherElement);
            return createValidation(validate, error || msgs.required);
        },
        /**
         * 验证邮箱
         * @param error 错误提示文字
         */
        email(error) {
            var validate = (value) => emailRegex.test(value);
            return createValidation(validate, error || msgs.required);
        },
        /**
         * 验证字段最小长度
         * @param length 最小长度
         * @param error 错误提示文字
         */
        minLength(length, error) {
            var validate = (value) => (value || '').length >= calc(length);
            return createValidation(validate, error || msgs.minLength);
        },
        /**
         * 验证字段的最大长度
         * @param length 最大长度
         * @param error 错误提示文字
         */
        maxLength(length, error) {
            var validate = (value) => (value || '').length <= calc(length);
            return createValidation(validate, error || msgs.matches);
        },
        /**
         * 验证字段大于指定的值
         * @param value 指定的值
         * @param error 错误提示文字
         */
        greaterThan(value, error) {
            var validate = (o) => elementValueCompare(o, calc(value)) == 'greaterThan';
            return createValidation(validate, error || msgs.greater_than);
        },
        /**
         * 验证字段小于指定的值
         * @param value 指定的值
         * @param error 错误提示文字
         */
        lessThan(value, error) {
            var validate = (o) => elementValueCompare(o, calc(value)) == 'lessThan';
            return createValidation(validate, error || msgs.less_than);
        },
        /**
         * 验证字段等于指定的值
         * @param value 指定的值
         * @param error 错误提示文字
         */
        equal(value, error) {
            var validate = (o) => elementValueCompare(o, calc(value)) == 'equal';
            return createValidation(validate, error || msgs.equal);
        },
        /**
         * 验证字段为 IP
         * @param error 错误提示文字
         */
        ip(error) {
            var validate = (value) => ipRegex.test(value);
            return createValidation(validate, error || msgs.ip);
        },
        /**
         * 验证字段为 URL
         * @param error 错误提示文字
         */
        url(error) {
            var validate = (value) => urlRegex.test(value);
            return createValidation(validate, error || msgs.valid_url);
        },
        /**
         * 验证字段为手机号码
         * @param error 错误提示文字
         */
        mobile(error) {
            var validate = (value) => mobileRegex.test(value);
            return createValidation(validate, error || msgs.mobile);
        },
        /**
         * 验证字段为数字
         * @param error 错误提示文字
         */
        numeric(error) {
            var validate = (value) => numericRegex.test(value);
            return createValidation(validate, error || msgs.numeric);
        },
        /**
         * 自定义验证
         * @param validate 自定义验证的方法
         * @param error 错误提示文字
         */
        custom(validate, error) {
            return createValidation(validate, error || msgs.custom);
        }
    };
    function elementValueCompare(value, otherValue) {
        let elementValue;
        if (typeof otherValue == 'number') {
            elementValue = decimalRegex.test(value) ? parseFloat(value) : null;
        }
        else if (typeof otherValue == 'string') {
            elementValue = value;
        }
        else {
            elementValue = getValidDate(value);
        }
        if (elementValue < otherValue)
            return 'lessThan';
        else if (elementValue > otherValue)
            return 'greaterThan';
        else
            return 'equal';
    }
    /**
     * private function _getValidDate: helper function to convert a string date to a Date object
     * @param date (String) must be in format yyyy-mm-dd or use keyword: today
     * @returns {Date} returns false if invalid
     */
    function getValidDate(date) {
        if (!date.match('today') && !date.match(dateRegex)) {
            return null;
        }
        var validDate = new Date(), validDateArray;
        if (!date.match('today')) {
            validDateArray = date.split('-');
            validDate.setFullYear(validDateArray[0]);
            validDate.setMonth(validDateArray[1] - 1);
            validDate.setDate(validDateArray[2]);
        }
        return validDate;
    }
    ;
})(dilu || (dilu = {}));

window['dilu'] = window['dilu'] || dilu 
                                
 return dilu;
                });