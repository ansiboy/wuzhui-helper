var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "maishu-wuzhui-helper", "react-dom"], function (require, exports, React, maishu_wuzhui_helper_1, react_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_dom_1 = __importDefault(react_dom_1);
    function default_1(element) {
        let countryDataSource = new maishu_wuzhui_helper_1.ArrayDataSource([
            { id: "1", name: "China" },
            { id: "2", name: "American" },
            { id: "3", name: "Japan" },
        ], ["id"]);
        class Page extends React.Component {
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
        react_dom_1.default.render(React.createElement(Page, null), element);
    }
    exports.default = default_1;
});
