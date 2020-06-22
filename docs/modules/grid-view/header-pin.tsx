import React = require("react");
import { ArrayDataSource } from "maishu-wuzhui";
import { createGridView, boundField } from "maishu-wuzhui-helper";
import $ = require("jquery");

window["jQuery"] = window["$"] = $;

let dataSource = new ArrayDataSource([
    { name: "tom", age: 1 },
    { name: "may", age: 2 },
    { name: "tom", age: 3 },
    { name: "may", age: 4 },
    { name: "tom", age: 5 },
    { name: "may", age: 6 },
    { name: "tom", age: 7 },
    { name: "may", age: 8 },
])

export default class extends React.Component {
    gridViewElement: HTMLElement;

    async componentDidMount() {
        let gridView = createGridView({
            element: this.gridViewElement,
            dataSource,
            columns: [
                boundField({ dataField: "name", headerText: "姓名", headerStyle: { width: "800px" } }),
                boundField({ dataField: "age", headerText: "年龄", headerStyle: { width: "800px" } })
            ]
        });
        (this.gridViewElement.querySelector(".main") as HTMLElement).style.height = "200px";
    }

    render() {
        return <div style={{ width: "100%" }} ref={e => this.gridViewElement = e || this.gridViewElement}>

        </div>
    }
}