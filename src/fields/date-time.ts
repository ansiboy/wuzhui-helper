import { BoundField, GridViewDataCell, BoundFieldParams } from "maishu-wuzhui";
import { FieldValidate } from "../wrapper";

export function dateTimeField<T>(args: BoundFieldParams<T> & FieldValidate): BoundField<T> & FieldValidate {

    let field = new DateTimeField<T>(args);
    let validateRules: FieldValidate = {
        validateRules: args.validateRules
    }
    let r = Object.assign(field, validateRules);
    return r
}

class DateTimeField<T> extends BoundField<T> {
    private inputTips: string;
    constructor(args: BoundFieldParams<T> & FieldValidate) {//dataField: Extract<keyof T, string>, headerText: string
        super(Object.assign({
            headerStyle: { textAlign: 'center', width: '160px' },
            itemStyle: { textAlign: 'center', width: `160px` }
        }, args))

        this.inputTips = args.inputTips;
    }
    createControl() {
        let ctrl = super.createControl();
        let VALUE: keyof typeof ctrl = "value";
        Object.defineProperty(ctrl, VALUE, {
            get() {
                let str = (ctrl.element as HTMLInputElement).value;
                let value: Date;
                try {
                    value = new Date(Date.parse(str));
                }
                catch (err) {

                }
                return value;
            },
            set(value: Date) {
                let str = toDateTimeString(value);
                (ctrl.element as HTMLInputElement).value = str;
            }
        });

        if (this.inputTips)
            (<HTMLInputElement>ctrl.element).placeholder = this.inputTips;

        return ctrl;
    }
    createItemCell(dataItem: T) {
        let cell = super.createItemCell(dataItem) as GridViewDataCell<T>;
        cell.formatValue = function (value: any) {
            return toDateTimeString(value);
        }
        return cell;
    }
}


export function toDateTimeString(datetime: number | Date | string) {
    if (datetime == null)
        return null;

    if (typeof datetime == "string") {
        datetime = new Date(datetime);
    }


    let d: Date;
    if (typeof datetime == 'number')
        d = new Date(datetime);
    else
        d = datetime;

    let month = `${d.getMonth() + 1}`
    month = month.length == 1 ? '0' + month : month;

    let date = `${d.getDate()}`;
    date = date.length == 1 ? '0' + date : date;

    let hours = `${d.getHours()}`;
    hours = hours.length == 1 ? '0' + hours : hours;

    let minutes = `${d.getMinutes()}`;
    minutes = minutes.length == 1 ? '0' + minutes : minutes;

    return `${d.getFullYear()}-${month}-${date} ${hours}:${minutes}`
}