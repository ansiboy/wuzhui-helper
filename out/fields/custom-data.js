"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maishu_wuzhui_1 = require("maishu-wuzhui");
function customDataField(params) {
    return new maishu_wuzhui_1.CustomField({
        headerText: params.headerText,
        headerStyle: params.headerStyle,
        itemStyle: params.itemStyle,
        createItemCell() {
            let cell = new maishu_wuzhui_1.GridViewDataCell({
                render(dataItem, element) {
                    let r = params.render(dataItem, element);
                    if (r)
                        element.innerHTML = r;
                }
            });
            return cell;
        }
    });
}
exports.customDataField = customDataField;
