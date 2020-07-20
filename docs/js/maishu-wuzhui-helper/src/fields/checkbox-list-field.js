var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "maishu-wuzhui"], function (require, exports, w) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    w = __importStar(w);
    function checkboxListField(params) {
        let field = new CheckboxListField(params);
        return field;
    }
    exports.checkboxListField = checkboxListField;
    class CheckboxListField extends w.BoundField {
        constructor(params) {
            super(params);
            this.checkboxs = {};
            this._params = params;
        }
        async getDataItems() {
            if (!this.dataItems) {
                let r = await this._params.dataSource.select();
                this.dataItems = r.dataItems;
            }
            return this.dataItems;
        }
        setControlValue(value) {
            value = value || [];
            for (let i = 0; i < value.length; i++) {
                let checkbox = this.checkboxs[value[i]];
                if (checkbox) {
                    checkbox.checked = true;
                }
            }
        }
        createControl() {
            let element = document.createElement("div");
            this.getDataItems().then(dataItems => {
                this.dataItems = dataItems;
                for (let i = 0; i < dataItems.length; i++) {
                    console.assert(this._params.nameField != null);
                    console.assert(this._params.valueField != null);
                    let name = dataItems[i][this._params.nameField];
                    let value = dataItems[i][this._params.valueField];
                    let itemCtrl = document.createElement("div");
                    itemCtrl.innerHTML = `<label><input type="checkbox" value="${value}">${name}</label>`;
                    itemCtrl.className = "checkbox";
                    element.appendChild(itemCtrl);
                    let checkbox = itemCtrl.querySelector("input");
                    this.checkboxs[`${value}`] = checkbox;
                }
                if (self.value) {
                    this.setControlValue(self.value);
                }
            });
            let self = this;
            return {
                element,
                get value() {
                    let checkboxs = [];
                    for (let c in self.checkboxs) {
                        if (self.checkboxs[c].checked) {
                            checkboxs.push(self.checkboxs[c]);
                        }
                    }
                    let value = checkboxs.map(o => o.value);
                    return value;
                },
                set value(value) {
                    self.value = value;
                    self.setControlValue(value);
                }
            };
        }
        createItemCell(dataItem) {
            let field = this;
            let cell = super.createItemCell(dataItem);
            cell.render = function (dataItem) {
                field.getDataItems().then(dataItems => {
                    let value = dataItem[field._params.dataField];
                    let names = [];
                    for (let i = 0; i < value.length; i++) {
                        let dataItem = dataItems.filter(o => o[field._params.valueField] == value[i])[0];
                        if (dataItem) {
                            names.push(dataItem[field._params.nameField]);
                        }
                    }
                    let text = names.filter(o => o).join(",");
                    this.element.innerHTML = text;
                });
            };
            return cell;
        }
    }
});
