define(["require", "exports", "react", "./input-control", "maishu-dilu"], function (require, exports, React, input_control_1, maishu_dilu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RadioListInput extends input_control_1.InputControl {
        constructor(props) {
            super(props);
            this.state = { items: [], value: this.props.defaultValue };
        }
        set value(value) {
            this.setState({ value });
        }
        get value() {
            return this.state.value;
        }
        componentDidMount() {
            let { nameField, valueField } = this.props;
            this.props.dataSource.executeSelect().then(r => {
                let items = r.dataItems.map(o => ({ text: o[nameField], value: o[valueField] }));
                this.setState({ items });
            });
        }
        render() {
            let { dataField, dataType } = this.props;
            let { items } = this.state;
            return React.createElement("div", null, items.map(o => React.createElement(React.Fragment, null,
                React.createElement("input", { name: dataField, type: "radion", value: o.value, checked: this.value == o.value, onChange: e => {
                        if (dataType == "number" && !maishu_dilu_1.rules.numeric().validate(e.target))
                            return;
                        let value = dataType == "number" ? parseFloat(e.target.value) : e.target.value;
                        this.setState({ value });
                    } }),
                React.createElement("span", null, o.text))));
        }
    }
    exports.RadioListInput = RadioListInput;
});
