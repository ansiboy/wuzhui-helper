import React = require("react");
import { ArrayDataSource } from "maishu-wuzhui";
import { createGridView, boundField } from "maishu-wuzhui-helper";
import ReactDOM from "react-dom";


export default function (element: HTMLElement) {

    let dataSource = new ArrayDataSource([
        { name: "tom", age: 10 },
        { name: "may", age: 8 }
    ])

    class Page extends React.Component {
        table: HTMLElement;

        componentDidMount() {
            let gridView = createGridView({
                element: this.table,
                dataSource,
                columns: [
                    boundField({ dataField: "name", headerText: "姓名" }),
                    boundField({ dataField: "age", headerText: "年龄" })
                ]
            })
        }

        render() {
            return <table ref={e => this.table = e || this.table}>

            </table>
        }
    }

    ReactDOM.render(<Page />, element);
}