"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var custom_data_1 = require("./custom-data");

function dateTimeField(args) {
  return custom_data_1.customDataField({
    headerText: args.headerText,
    headerStyle: {
      textAlign: 'center',
      width: '160px'
    },
    itemStyle: {
      textAlign: 'center',
      width: "160px"
    },
    render: function render(dataItem) {
      var value = dataItem[args.dataField]; // if (typeof value == 'number')

      return toDateTimeString(value);
    }
  });
}

exports.dateTimeField = dateTimeField;

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
//# sourceMappingURL=date-time.js.map
