define(["require", "exports", "maishu-wuzhui"], function (require, exports, maishu_wuzhui_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function customDataField(params) {
        return new maishu_wuzhui_1.CustomField({
            headerText: params.headerText,
            headerStyle: params.headerStyle,
            itemStyle: params.itemStyle,
            createItemCell(dataItem, cellElement) {
                let cell = new maishu_wuzhui_1.GridViewDataCell({
                    render(dataItem, element) {
                        let r = params.render(dataItem, element);
                        if (r)
                            element.innerHTML = r;
                    }
                }, cellElement);
                return cell;
            }
        });
    }
    exports.customDataField = customDataField;
});
