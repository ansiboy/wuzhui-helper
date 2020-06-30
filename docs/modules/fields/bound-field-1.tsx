import React = require("react");
import { createGridView, ArrayDataSource, boundField } from "maishu-wuzhui-helper";


type Country = { id: string, name: string }
let countryDataSource = new ArrayDataSource([
    { id: "1", name: "China" },
    { id: "2", name: "American" },
    { id: "3", name: "Japan" },
] as Country[], ["id"])

export default class extends React.Component {

    private element: HTMLElement;

    componentDidMount() {
        createGridView({
            dataSource: countryDataSource,
            element: this.element,
            columns: [
                boundField<Country>({
                    dataField: "name",
                })
            ]
        })
    }
    render() {
        return <div style={{ width: "100%" }} ref={e => this.element = this.element || e}>
        </div>
    }
}