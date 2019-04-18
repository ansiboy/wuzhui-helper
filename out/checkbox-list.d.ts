import { DataSource } from 'maishu-wuzhui';
export declare function checkboxList<T>(params: {
    element: HTMLElement;
    dataSource: DataSource<T>;
    nameField?: keyof T;
    valueField?: keyof T;
}): Promise<void>;
