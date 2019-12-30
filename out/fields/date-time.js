define(["require", "exports", "maishu-wuzhui"], function (require, exports, maishu_wuzhui_1) {
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
});
