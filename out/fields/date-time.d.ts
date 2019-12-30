import { BoundField, BoundFieldParams } from "maishu-wuzhui";
import { FieldValidate } from "../wrapper";
export declare function dateTimeField<T>(args: BoundFieldParams<T> & FieldValidate): BoundField<T> & FieldValidate;
export declare function toDateTimeString(datetime: number | Date | string): string;
