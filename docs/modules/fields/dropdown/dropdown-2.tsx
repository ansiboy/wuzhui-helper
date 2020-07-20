import React = require("react");
import { createGridView, ArrayDataSource, dropdownField, boundField, commandField } from "maishu-wuzhui-helper";
import ReactDOM from "react-dom";

export default function (element: HTMLElement) {
    type People = { id: string, name: string, age: number, country_id: string };

    let dataSource = new ArrayDataSource([
        { id: "1", name: "tom", age: 10, country_id: "1", },
        { id: "2", name: "may", age: 8, country_id: "2" },
    ] as People[], ["id"])

    type Country = { id: string, name: string }
    let countryDataSource = new ArrayDataSource([
        // { id: "1", name: "China" },
        // { id: "2", name: "American" },
        // { id: "3", name: "Japan" },
    ] as Country[], ["id"])


    class Page extends React.Component<{}, { hasCountryData: boolean }> {
        #element: HTMLElement;

        constructor(props) {
            super(props);
            this.state = { hasCountryData: false };
        }

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
                        emptyText: "请选择国家"
                    }),
                    commandField({ showEditButton: true })
                ]
            })
        }

        setCountryData() {
            // countryDataSource.insert({ id: "1", name: "China" });
            // countryDataSource.insert({ id: "2", name: "American" });
            // countryDataSource.insert({ id: "3", name: "Japan" });
            countryDataSource.inserted
        }

        updateCountryData() {
            countryDataSource.update({ id: "1", name: "中国" });
            countryDataSource.update({ id: "2", name: "美国" });
            countryDataSource.update({ id: "3", name: "日本" });
        }

        clearCountryData() {
            countryDataSource.delete({ id: "1" } as Country);
            countryDataSource.delete({ id: "2" } as Country);
            countryDataSource.delete({ id: "3" } as Country);
        }

        render() {
            let { hasCountryData } = this.state;
            return <>
                <div style={{ width: "100%" }} ref={e => this.#element = this.#element || e}>
                </div>
                <div className="well">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 text-center">
                                <button className="btn btn-primary" disabled={hasCountryData}
                                    onClick={() => this.setCountryData()}>设置下拉宽数据</button>
                            </div>

                            <div className="col-md-4 text-center">
                                <button className="btn btn-primary"
                                    onClick={() => this.updateCountryData()}>更新下拉宽数据</button>
                            </div>

                            <div className="col-md-4 text-center">
                                <button className="btn btn-primary"
                                    onClick={() => this.clearCountryData()}>清除下拉宽数据</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    }

    ReactDOM.render(<Page />, element);
}