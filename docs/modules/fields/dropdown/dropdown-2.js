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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "react", "maishu-wuzhui-helper", "react-dom"], function (require, exports, React, maishu_wuzhui_helper_1, react_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    react_dom_1 = __importDefault(react_dom_1);
    function default_1(element) {
        var _element;
        let dataSource = new maishu_wuzhui_helper_1.ArrayDataSource([
            { id: "1", name: "tom", age: 10, country_id: "1", },
            { id: "2", name: "may", age: 8, country_id: "2" },
        ], ["id"]);
        let countryDataSource = new maishu_wuzhui_helper_1.ArrayDataSource([
        // { id: "1", name: "China" },
        // { id: "2", name: "American" },
        // { id: "3", name: "Japan" },
        ], ["id"]);
        class Page extends React.Component {
            constructor(props) {
                super(props);
                _element.set(this, void 0);
                this.state = { hasCountryData: false };
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
                            emptyText: "请选择国家"
                        }),
                        maishu_wuzhui_helper_1.commandField({ showEditButton: true })
                    ]
                });
            }
            setCountryData() {
                // countryDataSource.insert({ id: "1", name: "China" });
                // countryDataSource.insert({ id: "2", name: "American" });
                // countryDataSource.insert({ id: "3", name: "Japan" });
                countryDataSource.inserted;
            }
            updateCountryData() {
                countryDataSource.update({ id: "1", name: "中国" });
                countryDataSource.update({ id: "2", name: "美国" });
                countryDataSource.update({ id: "3", name: "日本" });
            }
            clearCountryData() {
                countryDataSource.delete({ id: "1" });
                countryDataSource.delete({ id: "2" });
                countryDataSource.delete({ id: "3" });
            }
            render() {
                let { hasCountryData } = this.state;
                return React.createElement(React.Fragment, null,
                    React.createElement("div", { style: { width: "100%" }, ref: e => __classPrivateFieldSet(this, _element, __classPrivateFieldGet(this, _element) || e) }),
                    React.createElement("div", { className: "well" },
                        React.createElement("div", { className: "container" },
                            React.createElement("div", { className: "row" },
                                React.createElement("div", { className: "col-md-4 text-center" },
                                    React.createElement("button", { className: "btn btn-primary", disabled: hasCountryData, onClick: () => this.setCountryData() }, "\u8BBE\u7F6E\u4E0B\u62C9\u5BBD\u6570\u636E")),
                                React.createElement("div", { className: "col-md-4 text-center" },
                                    React.createElement("button", { className: "btn btn-primary", onClick: () => this.updateCountryData() }, "\u66F4\u65B0\u4E0B\u62C9\u5BBD\u6570\u636E")),
                                React.createElement("div", { className: "col-md-4 text-center" },
                                    React.createElement("button", { className: "btn btn-primary", onClick: () => this.clearCountryData() }, "\u6E05\u9664\u4E0B\u62C9\u5BBD\u6570\u636E"))))));
            }
        }
        _element = new WeakMap();
        react_dom_1.default.render(React.createElement(Page, null), element);
    }
    exports.default = default_1;
});
