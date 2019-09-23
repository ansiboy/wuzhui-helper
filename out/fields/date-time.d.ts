import { CustomField } from "maishu-wuzhui";
export declare function dateTimeField<T>(args: {
    dataField: Extract<keyof T, string>;
    headerText: string;
}): CustomField<T>;
export declare function toDateTimeString(datetime: number | Date): string;
