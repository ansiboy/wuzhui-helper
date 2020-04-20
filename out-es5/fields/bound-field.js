"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = require("maishu-wuzhui");

var errors_1 = require("../errors");

function boundField(params) {
  if (!params) throw errors_1.errors.argumentNull('params');
  params.headerStyle = Object.assign({
    textAlign: 'center'
  }, params.headerStyle || {});
  if (params.nullText == null) params.nullText = '';
  var field = new w.BoundField(params);
  var validateRules = {
    validateRules: params.validateRules
  };
  var r = Object.assign(field, validateRules);
  var createControl = field.createControl;

  field.createControl = function () {
    var ctrl = createControl.apply(this, []);
    if (params.emptyText) ctrl.element.placeholder = params.emptyText;
    ctrl.element.className = "form-control";
    return ctrl;
  };

  return r;
}

exports.boundField = boundField;
//# sourceMappingURL=bound-field.js.map
