define(["require", "exports", "react", "maishu-wuzhui", "maishu-wuzhui-helper", "jquery", "react-dom"], function (require, exports, React, maishu_wuzhui_1, maishu_wuzhui_helper_1, $, ReactDOM) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window["jQuery"] = window["$"] = $;
    function default_1(element) {
        let dataSource = new maishu_wuzhui_1.ArrayDataSource([
            { name: "tom", age: 1 },
            { name: "may", age: 2 },
            { name: "tom", age: 3 },
            { name: "may", age: 4 },
            { name: "tom", age: 5 },
            { name: "may", age: 6 },
            { name: "tom", age: 7 },
            { name: "may", age: 8 },
        ]);
        class HeaderPin extends React.Component {
            async componentDidMount() {
                let gridView = maishu_wuzhui_helper_1.createGridView({
                    element: this.gridViewElement,
                    dataSource,
                    columns: [
                        maishu_wuzhui_helper_1.boundField({ dataField: "name", headerText: "姓名", headerStyle: { width: "800px" } }),
                        maishu_wuzhui_helper_1.boundField({ dataField: "age", headerText: "年龄", headerStyle: { width: "800px" } })
                    ]
                });
                this.gridViewElement.querySelector(".main").style.height = "200px";
            }
            render() {
                return React.createElement("div", { style: { width: "100%" }, ref: e => this.gridViewElement = e || this.gridViewElement });
            }
        }
        ReactDOM.render(React.createElement(HeaderPin, null), element);
    }
    exports.default = default_1;
});
