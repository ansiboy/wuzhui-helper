"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_data_1 = require("./custom-data");
function dateTimeField(args) {
    return custom_data_1.customDataField({
        headerText: args.headerText,
        headerStyle: { textAlign: 'center', width: '160px' },
        itemStyle: { textAlign: 'center', width: `160px` },
        render: (dataItem) => {
            let value = dataItem[args.dataField];
            // if (typeof value == 'number')
            return toDateTimeString(value);
        }
    });
}
exports.dateTimeField = dateTimeField;
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
