import * as w from 'maishu-wuzhui';
import { Rule } from "maishu-dilu";
export interface FieldValidate {
    validateRules?: Rule[];
    emptyText?: string;
}
export declare function boundField<T>(params: w.BoundFieldParams<T> & FieldValidate): w.BoundField<T> & FieldValidate;
