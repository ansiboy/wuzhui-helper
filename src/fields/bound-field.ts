import * as w from 'maishu-wuzhui';
import { errors } from '../errors';
import { Rule } from "maishu-dilu";

export interface FieldValidate {
    validateRules?: Rule[],
    emptyText?: string,
}

export type BoundFieldParams<T> = w.BoundFieldParams<T> & FieldValidate & {
    createControl?: w.BoundField<T>["createControl"],
    renderItem?: w.GridViewEditableCell<T>["render"]
}

export function boundField<T>(params: BoundFieldParams<T>): w.BoundField<T> & FieldValidate {
    if (!params) throw errors.argumentNull('params')
    params.headerStyle = Object.assign({ textAlign: 'center' } as CSSStyleDeclaration, params.headerStyle || {});
    if (params.nullText == null)
        params.nullText = '';

    let field = new w.BoundField<T>(params);
    let validateRules: FieldValidate = {
        validateRules: params.validateRules
    }
    let r = Object.assign(field, validateRules);

    let createControl = field.createControl;
    field.createControl = function () {
        if (params.createControl) {
            let ctrl = params.createControl.apply(this, []);
            return ctrl;
        }

        let ctrl = createControl.apply(this, []);
        if (params.emptyText)
            (<HTMLInputElement>ctrl.element).placeholder = params.emptyText;

        (<HTMLInputElement>ctrl.element).className = "form-control";
        return ctrl;
    }

    let createItemCell = field.createItemCell;
    field.createItemCell = function (dataItem: T, cellElement) {
        let cell = createItemCell.apply(this, [dataItem, cellElement]) as w.GridViewEditableCell<T>;

        let renderItem = params.renderItem;
        let render = cell.render;
        cell.render = (...args) => {
            if (renderItem) {
                renderItem.apply(cell, args);
            }
            else {
                render.apply(cell, args);
            }
        }
        return cell;
    }


    return r;
}