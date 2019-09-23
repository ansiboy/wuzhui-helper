import React = require("react");
import { DataSource } from "maishu-wuzhui";
import { Rule } from "maishu-dilu";
declare type BeforeSave<T> = (dataItem: T) => Promise<any>;
export interface ValidateDataField {
    validateRules?: Rule[];
}
export declare function createItemDialog<T>(dataSource: DataSource<T>, name: string, child: React.ReactElement, beforeSave?: BeforeSave<T>): {
    show: (args: T) => void;
};
export interface ValidateDataField {
    validateRules?: Rule[];
}
export {};
