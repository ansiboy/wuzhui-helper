import * as w from 'maishu-wuzhui';
import { errors } from './errors';

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

export function boundField<T>(params: w.BoundFieldParams<T>) {
    if (!params) throw errors.arugmentNull('params')
    params.headerStyle = Object.assign({ textAlign: 'center' } as CSSStyleDeclaration, params.headerStyle || {});
    if (params.nullText == null)
        params.nullText = '';

    return new w.BoundField<T>(params)
}

export function commandField<T>(params: w.CommandFieldParams) {
    if (!params) throw errors.arugmentNull('params')

    return new w.CommandField<T>(params);
}

export function customField<T>(params: w.CustomFieldParams) {
    if (!params) throw errors.arugmentNull('params')

    params.headerStyle = Object.assign({ textAlign: 'center' } as CSSStyleDeclaration, params.headerStyle || {});
    let field = new w.CustomField<T>(params);
    return field
}

export function dropdown<T>(args: w.DropDownParams<T>) {
    return new w.DropDown(args)
}

export function textbox<T>(args: w.TextBoxParams<T>) {
    return new w.TextBox(args)
}
