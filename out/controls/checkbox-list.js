"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
function checkboxList(params) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!params)
            throw errors_1.errors.argumentNull('params');
        if (!params.element)
            throw errors_1.errors.argumentFieldNull('params', 'element');
        if (!params.dataSource)
            throw errors_1.errors.argumentFieldNull('params', 'dataSource');
        let { dataSource, element, nameField, valueField, dataField, dataItem } = params;
        let r = yield dataSource.select({});
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
    });
}
exports.checkboxList = checkboxList;