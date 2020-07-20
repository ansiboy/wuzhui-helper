define(["require", "exports", "../errors"], function (require, exports, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    async function radioList(params) {
        if (!params)
            throw errors_1.errors.argumentNull('params');
        if (!params.element)
            throw errors_1.errors.argumentFieldNull('params', 'element');
        if (!params.dataSource)
            throw errors_1.errors.argumentFieldNull('params', 'dataSource');
        let { dataSource, element, nameField, valueField, dataField } = params;
        let r = await dataSource.select({});
        element.innerHTML = "";
        r.dataItems.map(o => {
            let label = document.createElement('label');
            label.className = "radio-inline";
            let controlElement = document.createElement('input');
            controlElement.type = "radio";
            controlElement.name = dataField;
            let nameElement = document.createElement('span');
            label.appendChild(controlElement);
            label.appendChild(nameElement);
            let itemName = getDataSourceItemName(o);
            let itemValue = getDataSourceItemValue(o);
            controlElement.value = `${itemValue}`;
            nameElement.innerHTML = `${itemName}`;
            controlElement.onchange = function (e) {
                params.dataItem[dataField] = itemValue;
            };
            let value = params.dataItem[dataField] || params.defaultValue;
            if (value == itemValue) {
                controlElement.checked = true;
            }
            element.appendChild(label);
        });
        function getDataSourceItemName(item) {
            if (!nameField)
                return item;
            return item[nameField];
        }
        function getDataSourceItemValue(item) {
            if (!valueField)
                return item;
            return item[valueField];
        }
    }
    exports.radioList = radioList;
});
