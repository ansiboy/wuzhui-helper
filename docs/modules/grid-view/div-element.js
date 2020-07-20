var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "maishu-wuzhui", "maishu-wuzhui-helper", "react-dom"], function (require, exports, React, maishu_wuzhui_1, maishu_wuzhui_helper_1, react_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_dom_1 = __importDefault(react_dom_1);
    function default_1(element) {
        let dataSource = new maishu_wuzhui_1.ArrayDataSource([
            { name: "tom", age: 10 },
            { name: "may", age: 8 },
        ]);
        class Page extends React.Component {
            componentDidMount() {
                let gridView = maishu_wuzhui_helper_1.createGridView({
                    element: this.table,
                    dataSource,
                    columns: [
                        maishu_wuzhui_helper_1.boundField({ dataField: "name", headerText: "姓名", headerStyle: { width: "800px" } }),
                        maishu_wuzhui_helper_1.boundField({ dataField: "age", headerText: "年龄", headerStyle: { width: "800px" } })
                    ]
                });
            }
            render() {
                return React.createElement("div", { style: { width: "100%" }, ref: e => this.table = e || this.table });
            }
        }
        react_dom_1.default.render(React.createElement(Page, null), element);
    }
    exports.default = default_1;
});
