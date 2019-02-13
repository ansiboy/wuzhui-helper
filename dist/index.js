(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "maishu-wuzhui"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const maishu_wuzhui_1 = require("maishu-wuzhui");
    class BoundField extends wuzhui.BoundField {
        constructor(params) {
            params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
            if (params.nullText == null)
                params.nullText = '';
            super(params);
        }
    }
    exports.BoundField = BoundField;
    class CustomField extends wuzhui.CustomField {
        constructor(params) {
            params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
            super(params);
        }
    }
    exports.CustomField = CustomField;
    function appendGridView(target, args) {
        let tableElement = document.createElement('table');
        target.appendChild(tableElement);
        return createGridView({
            dataSource: args.dataSource, columns: args.columns, element: tableElement,
            pageSize: args.pageSize,
            pagerSettings: {
                activeButtonClassName: 'active',
                buttonContainerWraper: 'ul',
                buttonWrapper: 'li',
                buttonContainerClassName: 'pagination',
            }
        });
    }
    exports.appendGridView = appendGridView;
    function createGridView(params) {
        params = Object.assign({
            pageSize: 10,
            dataSource: null,
            columns: null,
        }, params);
        params.pagerSettings = Object.assign({
            activeButtonClassName: 'active'
        }, params.pagerSettings);
        console.assert(params.element != null, 'element can not null.');
        params.element.className = 'table table-striped table-bordered table-hover';
        let gridView = new wuzhui.GridView(params);
        return gridView;
    }
    exports.createGridView = createGridView;
    function boundField(params) {
        return new BoundField(params);
    }
    exports.boundField = boundField;
    function commandField(params) {
        return new maishu_wuzhui_1.CommandField(params);
    }
    exports.commandField = commandField;
    function customField(params) {
        return new CustomField(params);
    }
    exports.customField = customField;
});
