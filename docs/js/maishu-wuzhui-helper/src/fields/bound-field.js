var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "maishu-wuzhui", "../errors"], function (require, exports, w, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    w = __importStar(w);
    function boundField(params) {
        if (!params)
            throw errors_1.errors.argumentNull('params');
        params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
        if (params.nullText == null)
            params.nullText = '';
        let field = new w.BoundField(params);
        // let validateRules = {
        //     validateRules: params.validateRules
        // }
        // let r = Object.assign(field, validateRules);
        let createControl = field.createControl;
        field.createControl = function () {
            if (params.createControl) {
                let ctrl = params.createControl.apply(this, []);
                return ctrl;
            }
            let ctrl = createControl.apply(this, []);
            // if (params.emptyText)
            //     (<HTMLInputElement>ctrl.element).placeholder = params.emptyText;
            ctrl.element.className = "form-control";
            // (<HTMLInputElement>ctrl.element).name = params.dataField;
            return ctrl;
        };
        let createItemCell = field.createItemCell;
        field.createItemCell = function (dataItem, cellElement) {
            let cell = createItemCell.apply(this, [dataItem, cellElement]);
            let render = cell.render;
            cell.render = (dataItem, mode) => {
                if (params.renderCell) {
                    params.renderCell(cell, dataItem, mode);
                }
                else {
                    render.apply(cell, [dataItem, mode]);
                }
            };
            return cell;
        };
        return field;
    }
    exports.boundField = boundField;
});
