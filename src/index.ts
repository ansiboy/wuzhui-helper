import { CommandFieldParams, CommandField } from 'maishu-wuzhui';

export class BoundField<T> extends wuzhui.BoundField<T> {
    constructor(params: wuzhui.BoundFieldParams<T>) {
        params.headerStyle = Object.assign({ textAlign: 'center' } as CSSStyleDeclaration, params.headerStyle || {});
        if (params.nullText == null)
            params.nullText = '';

        super(params)
    }
}

export class CustomField<T> extends wuzhui.CustomField<T> {
    constructor(params: wuzhui.CustomFieldParams) {
        params.headerStyle = Object.assign({ textAlign: 'center' } as CSSStyleDeclaration, params.headerStyle || {});
        super(params);
    }
}

export function appendGridView(target: HTMLElement,
    args: { dataSource: wuzhui.DataSource<any>, columns: wuzhui.DataControlField<any>[], pageSize?: number }) {

    let tableElement = document.createElement('table');
    target.appendChild(tableElement);
    return createGridView({
        dataSource: args.dataSource, columns: args.columns, element: tableElement,
        pageSize: args.pageSize
    });

}
export function createGridView<T>(params: wuzhui.GridViewArguments<T>) {
    params = Object.assign({
        pageSize: 10,
        dataSource: null,
        columns: null,
    }, params);

    params.pagerSettings = Object.assign({
        activeButtonClassName: 'active'
    } as wuzhui.PagerSettings, params.pagerSettings);

    console.assert(params.element != null, 'element can not null.');
    params.element.className = 'table table-striped table-bordered table-hover';

    let gridView = new wuzhui.GridView(params);
    return gridView;
}

export function boundField<T>(params: wuzhui.BoundFieldParams<T>) {
    return new BoundField<T>(params)
}

export function commandField<T>(params: CommandFieldParams) {
    return new CommandField<T>(params);
}

export function customField<T>(params: wuzhui.CustomFieldParams) {
    return new CustomField<T>(params);
}
