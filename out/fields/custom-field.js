"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const w = require("maishu-wuzhui");
const errors_1 = require("../errors");
function customField(params) {
    if (!params)
        throw errors_1.errors.argumentNull('params');
    params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
    let field = new w.CustomField(params);
    return field;
}
exports.customField = customField;
