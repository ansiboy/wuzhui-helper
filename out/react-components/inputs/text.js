define(["require", "exports", "react", "./input-control"], function (require, exports, React, input_control_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class TextInput extends input_control_1.InputControl {
        constructor(props) {
            super(props);
            this.state = { dataItem: {} };
        }
        get value() {
            return this.input.value;
        }
        set value(value) {
            this.input.value = value;
        }
        render() {
            let { dataField, placeholder } = this.props;
            return React.createElement("input", { name: name || dataField, className: "form-control", placeholder: placeholder, type: this.props.type, ref: e => this.input = e || this.input });
        }
    }
    exports.TextInput = TextInput;
});
