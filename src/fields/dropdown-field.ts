import * as w from 'maishu-wuzhui';

const emptyValue = "";
interface DropdownFieldParams<T, S> extends w.BoundFieldParams<T> {
    dataSource: w.DataSource<S>;
    emptyText?: string;
    nameField: keyof S;
    valueField: keyof S
}

export function dropdownField<T, S>(params: DropdownFieldParams<T, S>) {
    let field = new DropdownField(params);
    return field;
}

class DropdownField<T, S> extends w.BoundField<T> {
    private dataItems: S[];
    constructor(params: DropdownFieldParams<T, S>) {
        super(params)
        super.params
        params.dataSource.select().then(r => {

        })
    }

    private getParams(): DropdownFieldParams<T, S> {
        return this.params as any;
    }

    async getDataItems() {
        if (!this.dataItems) {
            let r = await this.getParams().dataSource.select();
            this.dataItems = r.dataItems;
        }

        return this.dataItems;
    }
    createControl() {
        let element = document.createElement("select");
        element.className = "form-control";
        if (this.getParams().emptyText) {
            let o = document.createElement("option");

            let emptyText = this.getParams().emptyText;
            if (emptyText != null)
                o.innerText = emptyText;

            o.value = emptyValue;
            element.append(o);
        }
        this.getDataItems().then(dataItems => {
            let options = dataItems.map(dataItem => {
                let o = document.createElement("option");
                o.innerText = dataItem[this.getParams().nameField] as any;
                o.value = dataItem[this.getParams().valueField] as any;
                return o;
            })
            element.append(...options);
        })
        return {
            element,
            get value() {
                return element.value;
            },
            set value(value) {
                if (value == null) {
                    element.value = emptyValue;
                    return;
                }
                element.value = value;
            }
        }
    }
}