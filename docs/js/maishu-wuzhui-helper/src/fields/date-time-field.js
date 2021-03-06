define(["require", "exports", "maishu-wuzhui"], function (require, exports, maishu_wuzhui_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function dateTimeField(args) {
        let field = new DateTimeField(args);
        return field;
    }
    exports.dateTimeField = dateTimeField;
    class DateTimeField extends maishu_wuzhui_1.BoundField {
        constructor(args) {
            super(Object.assign({
                headerStyle: { textAlign: 'center', width: `160px` },
                itemStyle: { textAlign: 'center', width: `160px` }
            }, args));
            this.emptyText = args.emptyText;
        }
        createControl() {
            let ctrl = super.createControl();
            let VALUE = "value";
            Object.defineProperty(ctrl, VALUE, {
                get() {
                    let str = ctrl.element.value;
                    let value = null;
                    try {
                        value = new Date(Date.parse(str));
                    }
                    catch (err) {
                    }
                    return value;
                },
                set(value) {
                    let str = toDateTimeString(value);
                    ctrl.element.value = str || "";
                }
            });
            if (this.emptyText)
                ctrl.element.placeholder = this.emptyText;
            ctrl.element.className = "form-control";
            ctrl.element.name = this.params.dataField;
            return ctrl;
        }
        createItemCell(dataItem, cellElement) {
            let cell = super.createItemCell(dataItem, cellElement);
            cell.formatValue = function (value) {
                return toDateTimeString(value) || "";
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
