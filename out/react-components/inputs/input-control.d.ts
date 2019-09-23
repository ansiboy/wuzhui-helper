import React = require("react");
import { ValidateDataField } from "../item-dialog";
export interface InputControlProps<T> extends ValidateDataField {
    dataField: Extract<keyof T, string>;
}
export declare abstract class InputControl<T, P = InputControlProps<T>, S = {}> extends React.Component<P, S> {
    abstract value: any;
    id: string;
    constructor(props: any);
}
