define(["require", "exports", "./formValidator"], function (require, exports, formValidator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // namespace dilu {
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
        if (typeof value == 'function') {
            return value();
        }
        return value;
    }
    /**
     * 表单验证规则
     */
    exports.rules = {
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
            var validate = (value) => value == formValidator_1.FormValidator.elementValue(otherElement);
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
});
// }
