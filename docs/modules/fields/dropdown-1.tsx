import React = require("react");
import { createGridView, ArrayDataSource, dropdownField, boundField, commandField } from "maishu-wuzhui-helper";

type People = { id: string, name: string, age: number, country_id: string };

let dataSource = new ArrayDataSource([
    { id: "1", name: "tom", age: 10, country_id: "1", },
    { id: "2", name: "may", age: 8, country_id: "2" },
] as People[], ["id"])

type Country = { id: string, name: string }
let countryDataSource = new ArrayDataSource([
    { id: "1", name: "China" },
    { id: "2", name: "American" },
    { id: "3", name: "Japan" },
] as Country[], ["id"])


export default class extends React.Component {
    #element: HTMLElement;

    componentDidMount() {
        createGridView({
            element: this.#element,
            dataSource: dataSource,
            columns: [
                boundField<People>({ dataField: "name" }),
                boundField<People>({ dataField: "age" }),
                dropdownField<People, Country>({
                    dataSource: countryDataSource,
                    dataField: "country_id",
                    nameField: "name",
                    valueField: "id",
                }),
                commandField({ showEditButton: true })
            ]
        })
    }

    render() {
        return <div style={{ width: "100%" }} ref={e => this.#element = this.#element || e}>

        </div>
    }
}