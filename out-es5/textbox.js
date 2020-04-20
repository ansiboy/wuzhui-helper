"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var errors_1 = require("./errors");

var TextBox = function TextBox(params) {
  _classCallCheck(this, TextBox);

  if (params == null) throw errors_1.errors.argumentNull("params");
  if (!params.element) throw errors_1.errors.argumentFieldNull("params", "element");
  if (!params.dataField) throw errors_1.errors.argumentFieldNull("params", "dataField");
  if (!params.dataItem) throw errors_1.errors.argumentFieldNull("params", "dataItem");
  if (!params.valueType) throw errors_1.errors.argumentFieldNull("params", "valuetype");
  var element = params.element,
      dataField = params.dataField,
      dataItem = params.dataItem,
      valueType = params.valueType;
  var value = dataItem[dataField];
  element.value = "".concat(value || "");

  element.onchange = function () {
    if (valueType == 'int') {
      dataItem[dataField] = Number.parseInt(element.value);
    } else if (valueType == 'float') {
      dataItem[dataField] = Number.parseFloat(element.value);
    } else {
      dataItem[dataField] = element.value;
    }
  };
};

exports.TextBox = TextBox;
//# sourceMappingURL=textbox.js.map
