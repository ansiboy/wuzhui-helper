/// <reference types="react" />
import { InputControl, InputControlProps } from "./input-control";
interface InputFieldProps<T> extends InputControlProps<T> {
    placeholder?: string;
    type?: 'text' | 'password';
}
export declare class TextInput<T> extends InputControl<T, InputFieldProps<T>> {
    input: HTMLInputElement;
    constructor(props: any);
    value: string;
    render(): JSX.Element;
}
export {};
