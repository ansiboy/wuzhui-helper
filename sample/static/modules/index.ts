import { Page } from "maishu-chitu";
import { createDataItemDialog, boundField, dateTimeField } from "maishu-wuzhui-helper";

export default function IndexPage(page: Page) {
    let dialogElement = document.createElement("div");
    dialogElement.className = "modal fade";
    document.body.appendChild(dialogElement);

    let dialog = createDataItemDialog({
        element: dialogElement,
        fields: [
            boundField({ dataField: "name", headerText: "姓名", }),
            dateTimeField({ dataField: "date", headerText: "日期" })
        ],
        onConfirm(dataItem) {
            alert(dataItem["name"])
        }
    })


    let button = document.createElement("button");
    button.className = "btn btn-primary";
    button.innerHTML = "测试弹窗";
    button.onclick = function () {
        dialog.show({ name: "tom", date: new Date() });
    }

    page.element.appendChild(button);

}