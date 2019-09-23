import React = require("react");
import { FormValidator } from "maishu-dilu";
declare type ConfirmCallback<T> = (item: T) => void;
export interface ItemDialogState<T> {
    item: T;
    title?: string;
}
export declare class ItemDialog<P, T, S extends ItemDialogState<T> = ItemDialogState<T>> extends React.Component<P, S> {
    private item;
    protected element: HTMLElement;
    private confirmCallback;
    protected confirmButtonText: string;
    protected cancelButtonText: string;
    protected validator: FormValidator;
    constructor(props: any);
    private confirm;
    show(item: T, title: string, confirm?: ConfirmCallback<T>): any;
    show(title: string, confirm?: ConfirmCallback<T>): any;
}
export {};
