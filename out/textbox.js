"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
class TextBox {
    constructor(params) {
        if (params == null)
            throw errors_1.errors.argumentNull("params");
        if (!params.element)
            throw errors_1.errors.argumentFieldNull("params", "element");
        if (!params.dataField)
            throw errors_1.errors.argumentFieldNull("params", "dataField");
        if (!params.dataItem)
            throw errors_1.errors.argumentFieldNull("params", "dataItem");
        if (!params.valueType)
            throw errors_1.errors.argumentFieldNull("params", "valuetype");
        let { element, dataField, dataItem, valueType } = params;
        let value = dataItem[dataField];
        element.value = `${value || ""}`;
        element.onchange = () => {
            if (valueType == 'int') {
                dataItem[dataField] = Number.parseInt(element.value);
            }
            else if (valueType == 'float') {
                dataItem[dataField] = Number.parseFloat(element.value);
            }
            else {
                dataItem[dataField] = element.value;
            }
        };
    }
}
exports.TextBox = TextBox;
