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
    const emptyValue = "";
    function dropdownField(params) {
        let field = new DropdownField(params);
        return field;
    }
    exports.dropdownField = dropdownField;
    class DropdownField extends w.BoundField {
        constructor(params) {
            super(params);
        }
        getParams() {
            return this.params;
        }
        async getDataItems() {
            if (!this.dataItems) {
                let r = await this.getParams().dataSource.select({ startRowIndex: 0, maximumRows: 1000 });
                this.dataItems = r.dataItems;
            }
            return this.dataItems;
        }
        createControl() {
            let element = document.createElement("select");
            element.className = "form-control";
            if (this.getParams().emptyText) {
                let o = document.createElement("option");
                let emptyText = this.getParams().emptyText;
                if (emptyText != null)
                    o.innerText = emptyText;
                o.value = emptyValue;
                element.append(o);
            }
            this.getDataItems().then(dataItems => {
                let options = dataItems.map(dataItem => {
                    let o = document.createElement("option");
                    o.innerHTML = dataItem[this.getParams().nameField];
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
        createItemCell(dataItem, cellElement) {
            let cell = super.createItemCell(dataItem, cellElement);
            let cellRender = cell.render;
            let field = this;
            cell.render = function (dataItem, mode) {
                mode = mode || "read";
                let it = this;
                let params = it.field.params;
                if (mode == "read") {
                    field.getDataItems().then(dataItems => {
                        let item = dataItems.filter(o => o[params.valueField] == dataItem[params.dataField])[0];
                        if (item != null) {
                            cellElement.innerHTML = `${item[params.nameField]}` || "";
                        }
                    });
                    return;
                }
                cellRender.apply(cell, [dataItem, mode]);
            };
            return cell;
        }
    }
});
