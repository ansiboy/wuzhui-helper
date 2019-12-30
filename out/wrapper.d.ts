import * as w from 'maishu-wuzhui';
import { TextBox } from './textbox';
import { Rule } from "maishu-dilu";
export interface FieldValidate {
    validateRules?: Rule[];
    inputTips?: string;
}
export declare function createGridView<T>(params: w.GridViewArguments<T> & {
    headerFixed?: boolean;
}): w.GridView<T>;
export declare function boundField<T>(params: w.BoundFieldParams<T> & FieldValidate): w.BoundField<T> & FieldValidate;
export declare function commandField<T>(params: w.CommandFieldParams): w.CommandField<T>;
export declare function customField<T>(params: w.CustomFieldParams<T>): w.CustomField<T>;
export declare function dropdown<T>(args: w.DropDownParams<T>): w.DropDown<T>;
export declare function textbox<T>(args: w.TextBoxParams<T>): TextBox<T>;
