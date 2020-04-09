import * as w from 'maishu-wuzhui';
interface DropdownFieldParams<T, S> extends w.BoundFieldParams<T> {
    dataSource: w.DataSource<S>;
    emptyText?: string;
    nameField: keyof S;
    valueField: keyof S;
}
export declare function dropdownField<T, S>(params: DropdownFieldParams<T, S>): DropdownField<T, S>;
declare class DropdownField<T, S> extends w.BoundField<T> {
    private dataItems;
    constructor(params: DropdownFieldParams<T, S>);
    private getParams;
    getDataItems(): Promise<S[]>;
    createControl(): {
        element: HTMLSelectElement;
        value: string;
    };
}
export {};
