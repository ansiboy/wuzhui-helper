define(["require", "exports", "react", "maishu-ui-toolkit"], function (require, exports, React, ui) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ItemDialog extends React.Component {
        constructor(props) {
            super(props);
            this.confirmButtonText = "保存";
            this.cancelButtonText = "取消";
            this.state = { item: {} };
            let render = this.render;
            console.assert(render != null);
            this.render = () => {
                let { title, item } = this.state || {};
                if (item == null)
                    item = {};
                return React.createElement("div", { className: "modal fade", ref: e => this.element = e || this.element },
                    React.createElement("div", { className: "modal-dialog" },
                        React.createElement("div", { className: "modal-content" },
                            React.createElement("div", { className: "modal-header" },
                                React.createElement("button", { type: "button", className: "close", "data-dismiss": "modal" },
                                    React.createElement("span", { "aria-hidden": "true" }, "\u00D7"),
                                    React.createElement("span", { className: "sr-only" }, "Close")),
                                React.createElement("h4", { className: "modal-title" }, title || "")),
                            React.createElement("div", { className: "modal-body" }, render.bind(this)()),
                            React.createElement("div", { className: "modal-footer", style: { marginTop: 0 } },
                                React.createElement("button", { type: "button", className: "btn btn-default", "data-dismiss": "modal" }, this.cancelButtonText),
                                React.createElement("button", { type: "button", className: "btn btn-primary", onClick: () => this.confirm() }, this.confirmButtonText)))));
            };
        }
        confirm() {
            if (this.validator && !this.validator.check())
                return;
            let { item } = this.state;
            Object.assign(this.item, item);
            ui.hideDialog(this.element);
            if (this.confirmCallback)
                this.confirmCallback(item);
        }
        show(arg1, arg2, arg3) {
            let item, title, confirm;
            if (typeof arg1 == "string") {
                title = arg1;
                confirm = arg2;
            }
            else {
                item = arg1;
                title = arg2;
                confirm = arg3;
            }
            if (this.validator)
                this.validator.clearErrors();
            this.item = item;
            this.confirmCallback = confirm;
            this.setState({ item: Object.assign({}, item), title }, () => {
                ui.showDialog(this.element);
            });
        }
    }
    exports.ItemDialog = ItemDialog;
});
