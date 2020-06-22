define(["require", "exports", "react", "maishu-wuzhui", "maishu-wuzhui-helper"], function (require, exports, React, maishu_wuzhui_1, maishu_wuzhui_helper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let dataSource = new maishu_wuzhui_1.ArrayDataSource([
        { name: "tom", age: 10 },
        { name: "may", age: 8 },
    ]);
    class default_1 extends React.Component {
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
    exports.default = default_1;
});
