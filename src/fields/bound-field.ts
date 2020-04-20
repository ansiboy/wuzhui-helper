import * as w from 'maishu-wuzhui';
import { errors } from '../errors';
import { Rule } from "maishu-dilu";

export interface FieldValidate {
    validateRules?: Rule[],
    emptyText?: string,
}

export function boundField<T>(params: w.BoundFieldParams<T> & FieldValidate): w.BoundField<T> & FieldValidate {
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
        let ctrl = createControl.apply(this, []);
        if (params.emptyText)
            (<HTMLInputElement>ctrl.element).placeholder = params.emptyText;

        (<HTMLInputElement>ctrl.element).className = "form-control";
        return ctrl;
    }

    return r;
}