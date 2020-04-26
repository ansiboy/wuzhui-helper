import * as w from 'maishu-wuzhui';
import { errors } from '../errors';
import { Rule } from "maishu-dilu";

export interface FieldValidate {
    validateRules?: Rule[],
    emptyText?: string,
}

export function boundField<T>(params: w.BoundFieldParams<T> & FieldValidate & {
    createControl?: w.BoundField<T>["createControl"],
    renderItem?: (dataItem: T, element: HTMLElement) => void
}): w.BoundField<T> & FieldValidate {
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
    field.createItemCell = function (dataItem: T) {
        let cell = createItemCell.apply(this, [dataItem]) as w.GridViewEditableCell<T>;

        let renderItem = params.renderItem;
        let render = cell.render;
        cell.render = (dataItem) => {
            if (renderItem) {
                renderItem.apply(cell, [dataItem, cell.element]);
            }
            else {
                render.apply(cell, [dataItem]);
            }
        }
        return cell;
    }


    return r;
}