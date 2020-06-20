define(["require", "exports", "maishu-wuzhui-helper"], function (require, exports, maishu_wuzhui_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function IndexPage(page) {
        let dialogElement = document.createElement("div");
        dialogElement.className = "modal fade";
        document.body.appendChild(dialogElement);
        let dialog = maishu_wuzhui_helper_1.createDataItemDialog({
            element: dialogElement,
            fields: [
                maishu_wuzhui_helper_1.boundField({ dataField: "name", headerText: "姓名", }),
                maishu_wuzhui_helper_1.dateTimeField({ dataField: "date", headerText: "日期" })
            ],
            onConfirm(dataItem) {
                alert(dataItem["name"]);
            }
        });
        let button = document.createElement("button");
        button.className = "btn btn-primary";
        button.innerHTML = "测试弹窗";
        button.onclick = function () {
            dialog.show({ name: "tom", date: new Date() });
        };
        page.element.appendChild(button);
    }
    exports.default = IndexPage;
});
