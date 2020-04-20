"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = require("maishu-wuzhui");

var errors_1 = require("../errors");

function commandField(params) {
  if (!params) throw errors_1.errors.argumentNull('params');
  return new w.CommandField(params);
}

exports.commandField = commandField;
//# sourceMappingURL=command-field.js.map
