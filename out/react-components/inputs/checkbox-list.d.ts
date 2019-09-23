/// <reference types="react" />
import { DataSource } from "maishu-wuzhui";
import { InputControl } from "./input-control";
interface CheckboxListFieldProps<T> {
    dataField: Extract<keyof T, string>;
    label: string;
    dataType: 'string' | 'number';
    defaultValue?: string | number;
    dataSource: DataSource<T>;
    nameField: keyof T;
    valueField: keyof T;
}
export declare class CheckboxListInput<T> extends InputControl<T, CheckboxListFieldProps<T>, {
    items: {
        name: string;
        value: string;
    }[];
}> {
    private dataItem;
    constructor(props: CheckboxListInput<T>['props']);
    value: any;
    render(): JSX.Element;
}
export {};
