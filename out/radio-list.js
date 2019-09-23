var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "./errors"], function (require, exports, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function radioList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params)
                throw errors_1.errors.argumentNull('params');
            if (!params.element)
                throw errors_1.errors.argumentFieldNull('params', 'element');
            if (!params.dataSource)
                throw errors_1.errors.argumentFieldNull('params', 'dataSource');
            let { dataSource, element, nameField, valueField, dataField } = params;
            let r = yield dataSource.select({});
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
        });
    }
    exports.radioList = radioList;
});
