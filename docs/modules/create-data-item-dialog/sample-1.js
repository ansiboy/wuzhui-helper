define(["require", "exports", "maishu-wuzhui-helper", "react", "maishu-dilu"], function (require, exports, maishu_wuzhui_helper_1, React, maishu_dilu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let dataItem = { name: "tom", age: 10 };
    class default_1 extends React.Component {
        showDialog() {
            this.dialog.show(dataItem);
        }
        componentDidMount() {
            this.dialog = maishu_wuzhui_helper_1.createDataItemDialog({
                title: "编辑",
                element: this.dialogElement,
                fields: [
                    maishu_wuzhui_helper_1.boundField({
                        dataField: "name", headerText: "名称",
                        validateRules: [maishu_dilu_1.rules.required("请输入名称")]
                    }),
                    maishu_wuzhui_helper_1.boundField({
                        dataField: "age", headerText: "年龄",
                        validateRules: [
                            maishu_dilu_1.rules.required("请输入年龄"),
                            maishu_dilu_1.rules.numeric("请输入数字")
                        ]
                    }),
                ]
            });
        }
        render() {
            return React.createElement("div", null,
                React.createElement("button", { className: "btn btn-primary", onClick: e => this.showDialog() }, "\u6253\u5F00\u6570\u636E\u7F16\u8F91\u5BF9\u8BDD\u6846"),
                React.createElement("div", { className: "modal fade", ref: e => this.dialogElement = e || this.dialogElement }));
        }
    }
    exports.default = default_1;
});
