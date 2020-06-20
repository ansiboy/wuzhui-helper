import { createDataItemDialog, boundField, DataItemDialog } from "maishu-wuzhui-helper";
import React = require("react");

let dataItem = { name: "tom", age: 10 };
type DataItem = typeof dataItem;

export default class extends React.Component {
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
                boundField<DataItem>({ dataField: "name", headerText: "名称" }),
                boundField<DataItem>({ dataField: "age", headerText: "年龄" }),
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