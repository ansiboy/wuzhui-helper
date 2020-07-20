import React = require("react");
import { ArrayDataSource } from "maishu-wuzhui";
import { createGridView, boundField } from "maishu-wuzhui-helper";
import ReactDOM from "react-dom";

export default function (element: HTMLElement) {
    let dataSource = new ArrayDataSource([
        { name: "tom", age: 10 },
        { name: "may", age: 8 },
    ])

    class Page extends React.Component {
        table: HTMLElement;

        componentDidMount() {
            let gridView = createGridView({
                element: this.table,
                dataSource,
                columns: [
                    boundField({ dataField: "name", headerText: "姓名", headerStyle: { width: "800px" } }),
                    boundField({ dataField: "age", headerText: "年龄", headerStyle: { width: "800px" } })
                ]
            })
        }

        render() {
            return <div style={{ width: "100%" }} ref={e => this.table = e || this.table}>

            </div>
        }
    }

    ReactDOM.render(<Page />, element);
}