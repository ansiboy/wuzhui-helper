define(["require", "exports", "react", "../../checkbox-list", "./input-control"], function (require, exports, React, checkbox_list_1, input_control_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CheckboxListInput extends input_control_1.InputControl {
        constructor(props) {
            super(props);
            this.dataItem = {};
            this.state = { items: [] };
            this.props.dataSource.executeSelect().then(r => {
                r.dataItems.map(o => ({ name: o[this.props.nameField] }));
            });
            this.dataItem[props.dataField] = {
                get() {
                },
                set(value) {
                }
            };
        }
        set value(value) {
            // this.dataItem[this.props.dataField] = value;
        }
        get value() {
            // return this.dataItem[this.props.dataField];
            return "";
        }
        // render() {
        //     let { items } = this.state;
        //     return <div>
        //         {items.map(o => <>
        //             <span>{o.name}</span>
        //             <input type="radio" value={o.value} />
        //         </>)}
        //     </div>
        // }
        render() {
            let { dataField, dataSource, nameField, valueField, } = this.props;
            return React.createElement("div", { ref: e => {
                    if (!e)
                        return;
                    checkbox_list_1.checkboxList({
                        element: e,
                        dataSource: dataSource,
                        dataField: dataField,
                        nameField: nameField,
                        valueField: valueField,
                        dataItem: this.dataItem
                    });
                } });
        }
    }
    exports.CheckboxListInput = CheckboxListInput;
});
