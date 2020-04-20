"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const w = require("maishu-wuzhui");
const errors_1 = require("./errors");
const textbox_1 = require("./textbox");
function createGridView(params) {
    params = Object.assign({
        pageSize: 10,
        dataSource: null,
        columns: null,
    }, params);
    if (params.pagerSettings == null) {
        params.pagerSettings = {
            activeButtonClassName: 'active',
            buttonContainerWraper: 'ul',
            buttonWrapper: 'li',
            buttonContainerClassName: 'pagination',
            showTotal: true
        };
    }
<<<<<<< HEAD
    console.assert(params.element != null, 'element can not null.');
    params.element.className = 'table table-striped table-bordered table-hover';
    let gridView = new w.GridView(params);
    return gridView;
}
exports.createGridView = createGridView;
function boundField(params) {
    if (!params)
        throw errors_1.errors.argumentNull('params');
    params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
    if (params.nullText == null)
        params.nullText = '';
    return new w.BoundField(params);
}
exports.boundField = boundField;
function commandField(params) {
    if (!params)
        throw errors_1.errors.argumentNull('params');
    return new w.CommandField(params);
}
exports.commandField = commandField;
function customField(params) {
    if (!params)
        throw errors_1.errors.argumentNull('params');
    params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
    let field = new w.CustomField(params);
    return field;
}
exports.customField = customField;
function dropdown(args) {
    return new w.DropDown(args);
}
exports.dropdown = dropdown;
function textbox(args) {
    return new textbox_1.TextBox(args);
}
exports.textbox = textbox;
=======
    exports.createGridView = createGridView;
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
    function commandField(params) {
        if (!params)
            throw errors_1.errors.argumentNull('params');
        return new w.CommandField(params);
    }
    exports.commandField = commandField;
    function customField(params) {
        if (!params)
            throw errors_1.errors.argumentNull('params');
        params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
        let field = new w.CustomField(params);
        return field;
    }
    exports.customField = customField;
    function dropdown(args) {
        return new w.DropDown(args);
    }
    exports.dropdown = dropdown;
    function textbox(args) {
        return new textbox_1.TextBox(args);
    }
    exports.textbox = textbox;
});
>>>>>>> 4583a7e310f462972a0aa9d0e176c4a4fc454ed3
