"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = require("maishu-wuzhui");

var errors_1 = require("../errors");

function customField(params) {
  if (!params) throw errors_1.errors.argumentNull('params');
  params.headerStyle = Object.assign({
    textAlign: 'center'
  }, params.headerStyle || {});
  var field = new w.CustomField(params);
  return field;
}

exports.customField = customField;
//# sourceMappingURL=custom-field.js.map
