var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "react", "maishu-ui-toolkit", "react-dom", "maishu-dilu", "./inputs/input-control"], function (require, exports, React, maishu_ui_toolkit_1, ReactDOM, maishu_dilu_1, input_control_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createItemDialog(dataSource, name, child, beforeSave) {
        class ItemDialog extends React.Component {
            constructor(props) {
                super(props);
                this.state = {};
                this.beforeSaves = [];
                this.inputControls = [];
            }
            onSaveButtonClick() {
                return __awaiter(this, void 0, void 0, function* () {
                    this.validator.clearErrors();
                    if (!this.validator.check()) {
                        return Promise.reject('validate fail');
                    }
                    yield this.save();
                    maishu_ui_toolkit_1.hideDialog(this.dialogElement);
                });
            }
            setDataItem(dataItem) {
                this.dataItem = dataItem;
                let primaryValues = dataSource.primaryKeys;
                let title = primaryValues.length > 0 ? `修改${name}` : `添加${name}`;
                this.inputControls.forEach(c => {
                    let value = dataItem[c.props.dataField];
                    c.value = value;
                });
                this.setState({ title });
            }
            save() {
                return __awaiter(this, void 0, void 0, function* () {
                    let dataItem = this.dataItem;
                    this.inputControls.forEach(c => {
                        dataItem[c.props.dataField] = c.value;
                    });
                    if (beforeSave) {
                        yield beforeSave(dataItem);
                    }
                    if (this.beforeSaves.length > 0) {
                        yield Promise.all(this.beforeSaves.map(m => m(dataItem)));
                    }
                    let primaryValues = dataSource.primaryKeys.map(o => dataItem[o]).filter(v => v != null);
                    if (primaryValues.length > 0) {
                        yield dataSource.update(dataItem);
                    }
                    else {
                        yield dataSource.insert(dataItem);
                    }
                });
            }
            childrenToArray(children) {
                let r = Array.isArray(children) ? children : [children];
                r = r.filter(o => o);
                return r;
            }
            controlCreated(ctrl) {
                let exists = this.inputControls.filter(o => o.id == ctrl.id).length > 0;
                if (exists)
                    return;
                this.inputControls.push(ctrl);
            }
            componentDidMount() {
                let nodes = this.childrenToArray(child.props.children); //Array.isArray(child.props.children) ? child.props.children : [child.props.children];
                var validateFields = [];
                let stack = [...nodes];
                while (stack.length > 0) {
                    let item = stack.pop();
                    if (!item.props)
                        continue;
                    // let props = item.props as ValidateDataField & { dataField: string, name: string };
                    // if (props.validateRules != null) {
                    //     let f: ValidateField = { name: props.name || props.dataField, rules: props.validateRules || [] };
                    //     validateFields.push(f);
                    // }
                    if (item.props.type != null && item.props.type.prototype instanceof input_control_1.InputControl) {
                        this.inputControls.push(item);
                        let props = item.props;
                        if (props.validateRules != null) {
                            let f = { name: props.dataField, rules: props.validateRules || [] };
                            validateFields.push(f);
                        }
                    }
                    let children = this.childrenToArray(item.props.children);
                    stack.push(...children);
                }
                this.validator = new maishu_dilu_1.FormValidator(this.fieldsConatiner, ...validateFields);
            }
            render() {
                let { title } = this.state;
                // let primaryValues = dataSource.primaryKeys.map(o => dataItem[o]).filter(v => v != null);
                return React.createElement("div", { className: "modal-dialog" },
                    React.createElement("div", { className: "modal-content" },
                        React.createElement("div", { className: "modal-header" },
                            React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close" },
                                React.createElement("span", { "aria-hidden": "true" }, "\u00D7")),
                            React.createElement("h4", { className: "modal-title" }, title)),
                        React.createElement("div", { className: "modal-body well", style: { paddingLeft: 20, paddingRight: 20 }, ref: e => this.fieldsConatiner = e || this.fieldsConatiner }, child),
                        React.createElement("div", { className: "modal-footer" },
                            React.createElement("button", { className: "btn btn-default", onClick: e => { maishu_ui_toolkit_1.hideDialog(this.dialogElement); } },
                                React.createElement("i", { className: "icon-reply" }),
                                React.createElement("span", null, "\u53D6\u6D88")),
                            React.createElement("button", { className: "btn btn-primary", onClick: () => this.onSaveButtonClick() },
                                React.createElement("i", { className: "icon-save" }),
                                React.createElement("span", null, "\u786E\u5B9A")))));
            }
            static show(dataItem) {
                dataItem = dataItem || {};
                if (!ItemDialog.instance) {
                    let dialogElement = document.createElement("div");
                    dialogElement.className = "modal fade-in";
                    document.body.appendChild(dialogElement);
                    ItemDialog.instance = ReactDOM.render(React.createElement(ItemDialog, null), dialogElement);
                    ItemDialog.instance.dialogElement = dialogElement;
                }
                ItemDialog.instance.validator.clearErrors();
                // ItemDialog.instance.setState({ dataItem: dataItem });
                ItemDialog.instance.setDataItem(dataItem);
                maishu_ui_toolkit_1.showDialog(ItemDialog.instance.dialogElement);
            }
        }
        return ItemDialog;
    }
    exports.createItemDialog = createItemDialog;
});
// export let ItemDialogContext = React.createContext({
//     controlCreated: null as (ctrl: InputControl<any>) => void
// });
