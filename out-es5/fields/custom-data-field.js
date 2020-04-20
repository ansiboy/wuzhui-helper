"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var maishu_wuzhui_1 = require("maishu-wuzhui");

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
