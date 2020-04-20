"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const w = require("maishu-wuzhui");
const errors_1 = require("../errors");
function boundField(params) {
    if (!params)
        throw errors_1.errors.argumentNull('params');
    params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
    if (params.nullText == null)
        params.nullText = '';
    let field = new w.BoundField(params);
    let validateRules = {
        validateRules: params.validateRules
    };
    let r = Object.assign(field, validateRules);
    let createControl = field.createControl;
    field.createControl = function () {
        let ctrl = createControl.apply(this, []);
        if (params.emptyText)
            ctrl.element.placeholder = params.emptyText;
        ctrl.element.className = "form-control";
        return ctrl;
    };
    return r;
}
exports.boundField = boundField;
