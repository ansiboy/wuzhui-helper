import { CommandField } from 'maishu-wuzhui';
export class BoundField extends wuzhui.BoundField {
    constructor(params) {
        params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
        if (params.nullText == null)
            params.nullText = '';
        super(params);
    }
}
export class CustomField extends wuzhui.CustomField {
    constructor(params) {
        params.headerStyle = Object.assign({ textAlign: 'center' }, params.headerStyle || {});
        super(params);
    }
}
export function appendGridView(target, args) {
    let tableElement = document.createElement('table');
    target.appendChild(tableElement);
    return createGridView({
        dataSource: args.dataSource, columns: args.columns, element: tableElement,
        pageSize: args.pageSize
    });
}
export function createGridView(params) {
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
export function boundField(params) {
    return new BoundField(params);
}
export function commandField(params) {
    return new CommandField(params);
}
export function customField(params) {
    return new CustomField(params);
}
