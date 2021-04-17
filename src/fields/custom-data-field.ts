import { CustomField, GridViewDataCell, FieldValidation } from "maishu-wuzhui";

export function customDataField<T>(params: {
    headerText?: string,
    headerStyle?: Partial<CSSStyleDeclaration>,
    itemStyle?: Partial<CSSStyleDeclaration>,
    render: (dataItem: T, element: HTMLElement) => string | void,
    validation?: FieldValidation["validation"],
}) {
    return new CustomField<T>({
        headerText: params.headerText,
        headerStyle: params.headerStyle,
        itemStyle: params.itemStyle,
        createItemCell(dataItem, cellElement) {
            let cell = new GridViewDataCell<T>({
                render(dataItem: T, element) {
                    let r = params.render(dataItem, element)
                    if (r)
                        element.innerHTML = r
                }
            }, cellElement);
            return cell
        },
        validation: params.validation,
    });
}