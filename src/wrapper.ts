import * as w from 'maishu-wuzhui';
import { errors } from './errors';
import { TextBox } from './textbox';
import { Rule } from "maishu-dilu";

export interface FieldValidate {
    validateRules?: Rule[],
    emptyText?: string,
}

export function createGridView<T>(params: w.GridViewArguments<T> & { headerFixed?: boolean }) {
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
        }
    }

    console.assert(params.element != null, 'element can not null.');
    params.element.className = 'table table-striped table-bordered table-hover';

    let gridView = new w.GridView(params);
    return gridView;
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

export function commandField<T>(params: w.CommandFieldParams) {
    if (!params) throw errors.argumentNull('params')

    return new w.CommandField<T>(params);
}

export function customField<T>(params: w.CustomFieldParams<T>) {
    if (!params) throw errors.argumentNull('params')

    params.headerStyle = Object.assign({ textAlign: 'center' } as CSSStyleDeclaration, params.headerStyle || {});
    let field = new w.CustomField<T>(params);
    return field
}

export function dropdown<T>(args: w.DropDownParams<T>) {
    return new w.DropDown(args)
}

export function textbox<T>(args: w.TextBoxParams<T>) {
    return new TextBox(args)
}
