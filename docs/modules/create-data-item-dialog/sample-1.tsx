import { createDataItemDialog, boundField, DataItemDialog } from "maishu-wuzhui-helper";
import React = require("react");
import { rules as r } from "maishu-dilu";
import ReactDOM from "react-dom";

export default function (element: HTMLElement) {
    let dataItem = { name: "tom", age: 10 };
    type DataItem = typeof dataItem;

    class Page extends React.Component {
        private dialogElement: HTMLElement;
        dialog: DataItemDialog<{ name: string; age: number; }>;

        showDialog() {
            this.dialog.show(dataItem);
        }
        componentDidMount() {
            this.dialog = createDataItemDialog<DataItem>({
                title: "编辑",
                element: this.dialogElement,
                fields: [
                    boundField<DataItem>({
                        dataField: "name", headerText: "名称",
                        validateRules: [r.required("请输入名称")]
                    }),
                    boundField<DataItem>({
                        dataField: "age", headerText: "年龄",
                        validateRules: [
                            r.required("请输入年龄"),
                            r.numeric("请输入数字")
                        ]
                    }),
                ]
            })
        }
        render() {
            return <div>
                <button className="btn btn-primary" onClick={e => this.showDialog()}>打开数据编辑对话框</button>
                <div className="modal fade" ref={e => this.dialogElement = e || this.dialogElement}></div>
            </div>
        }
    }

    ReactDOM.render(<Page />, element);
}