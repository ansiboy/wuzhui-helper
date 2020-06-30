define(["require", "exports", "react", "maishu-wuzhui-helper"], function (require, exports, React, maishu_wuzhui_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let countryDataSource = new maishu_wuzhui_helper_1.ArrayDataSource([
        { id: "1", name: "China" },
        { id: "2", name: "American" },
        { id: "3", name: "Japan" },
    ], ["id"]);
    class default_1 extends React.Component {
        componentDidMount() {
            maishu_wuzhui_helper_1.createGridView({
                dataSource: countryDataSource,
                element: this.element,
                columns: [
                    maishu_wuzhui_helper_1.boundField({
                        dataField: "name",
                    })
                ]
            });
        }
        render() {
            return React.createElement("div", { style: { width: "100%" }, ref: e => this.element = this.element || e });
        }
    }
    exports.default = default_1;
});
