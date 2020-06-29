var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
define(["require", "exports", "react", "maishu-wuzhui-helper"], function (require, exports, React, maishu_wuzhui_helper_1) {
    "use strict";
    var _element;
    Object.defineProperty(exports, "__esModule", { value: true });
    let dataSource = new maishu_wuzhui_helper_1.ArrayDataSource([
        { id: "1", name: "tom", age: 10, country_id: "1", },
        { id: "2", name: "may", age: 8, country_id: "2" },
    ], ["id"]);
    let countryDataSource = new maishu_wuzhui_helper_1.ArrayDataSource([
        { id: "1", name: "China" },
        { id: "2", name: "American" },
        { id: "3", name: "Japan" },
    ], ["id"]);
    class default_1 extends React.Component {
        constructor() {
            super(...arguments);
            _element.set(this, void 0);
        }
        componentDidMount() {
            maishu_wuzhui_helper_1.createGridView({
                element: __classPrivateFieldGet(this, _element),
                dataSource: dataSource,
                columns: [
                    maishu_wuzhui_helper_1.boundField({ dataField: "name" }),
                    maishu_wuzhui_helper_1.boundField({ dataField: "age" }),
                    maishu_wuzhui_helper_1.dropdownField({
                        dataSource: countryDataSource,
                        dataField: "country_id",
                        nameField: "name",
                        valueField: "id",
                    }),
                    maishu_wuzhui_helper_1.commandField({ showEditButton: true })
                ]
            });
        }
        render() {
            return React.createElement("div", { style: { width: "100%" }, ref: e => __classPrivateFieldSet(this, _element, __classPrivateFieldGet(this, _element) || e) });
        }
    }
    exports.default = default_1;
    _element = new WeakMap();
});
