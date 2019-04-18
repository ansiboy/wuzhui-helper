var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "./errors"], function (require, exports, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function checkboxList(params) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!params)
                throw errors_1.errors.arugmentNull('params');
            if (!params.element)
                throw errors_1.errors.argumentFieldNull('params', 'element');
            if (!params.dataSource)
                throw errors_1.errors.argumentFieldNull('params', 'dataSource');
            let { dataSource, element, nameField, valueField } = params;
            let r = yield dataSource.select({});
            r.dataItems.map(o => {
                let label = document.createElement('label');
                let input = document.createElement('input');
                let span = document.createElement('span');
                label.appendChild(input);
                label.appendChild(span);
                let name = nameField ? o[nameField] : o;
                let value = valueField ? o[valueField] : o;
                input.value = `${value}`;
                span.innerHTML = `${name}`;
                element.appendChild(label);
            });
        });
    }
    exports.checkboxList = checkboxList;
});
