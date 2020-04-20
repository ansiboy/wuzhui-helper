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
const w = require("maishu-wuzhui");
const emptyValue = "";
function dropdownField(params) {
    let field = new DropdownField(params);
    return field;
}
exports.dropdownField = dropdownField;
class DropdownField extends w.BoundField {
    constructor(params) {
        super(params);
        super.params;
        params.dataSource.select().then(r => {
        });
    }
    getParams() {
        return this.params;
    }
    getDataItems() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.dataItems) {
                let r = yield this.getParams().dataSource.select();
                this.dataItems = r.dataItems;
            }
            return this.dataItems;
        });
    }
    createControl() {
        let element = document.createElement("select");
        element.className = "form-control";
        if (this.getParams().emptyText) {
            let o = document.createElement("option");
            o.innerText = this.getParams().emptyText;
            o.value = emptyValue;
            element.append(o);
        }
        this.getDataItems().then(dataItems => {
            let options = dataItems.map(dataItem => {
                let o = document.createElement("option");
                o.innerText = dataItem[this.getParams().nameField];
                o.value = dataItem[this.getParams().valueField];
                return o;
            });
            element.append(...options);
        });
        return {
            element,
            get value() {
                return element.value;
            },
            set value(value) {
                if (value == null) {
                    element.value = emptyValue;
                    return;
                }
                element.value = value;
            }
        };
    }
}
