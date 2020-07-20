define(["require", "exports", "../errors"], function (require, exports, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    async function checkboxList(params) {
        if (!params)
            throw errors_1.errors.argumentNull('params');
        if (!params.element)
            throw errors_1.errors.argumentFieldNull('params', 'element');
        if (!params.dataSource)
            throw errors_1.errors.argumentFieldNull('params', 'dataSource');
        let { dataSource, element, nameField, valueField, dataField, dataItem } = params;
        let r = await dataSource.select({});
        let elementDataItems = [];
        r.dataItems.map(o => {
            let label = document.createElement('label');
            let input = document.createElement('input');
            input.type = "checkbox";
            let span = document.createElement('span');
            label.appendChild(input);
            label.appendChild(span);
            let name = nameField ? o[nameField] : o;
            let value = valueField ? o[valueField] : o;
            input.value = `${value}`;
            span.innerHTML = `${name}`;
            if (dataItem[dataField] && !Array.isArray(dataItem[dataField])) {
                throw errors_1.errors.dataFieldValueNotArray(dataField);
            }
            if (value == dataItem[dataField]) {
                input.checked = true;
            }
            elementDataItems.push({ element: input, dataItem: o });
            input.onchange = function (e) {
                dataItem[dataField] = elementDataItems.filter(o => o.element.checked).map(o => o.dataItem[valueField]);
            };
            element.appendChild(label);
        });
    }
    exports.checkboxList = checkboxList;
});
