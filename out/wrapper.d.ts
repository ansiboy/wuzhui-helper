import * as w from 'maishu-wuzhui';
export declare function createGridView<T>(params: w.GridViewArguments<T> & {
    headerFixed?: boolean;
}): w.GridView<T>;
export declare function boundField<T>(params: w.BoundFieldParams<T>): w.BoundField<T>;
export declare function commandField<T>(params: w.CommandFieldParams): w.CommandField<T>;
export declare function customField<T>(params: w.CustomFieldParams): w.CustomField<T>;
export declare function dropdown<T>(args: w.DropDownParams<T>): w.DropDown<T>;
export declare function textbox<T>(args: w.TextBoxParams<T>): w.TextBox<T>;
