import { DataControlField, DataSource, BoundField, GridViewCellControl, GridViewCell, GridViewEditableCell } from "maishu-wuzhui";
import { showDialog, hideDialog } from "maishu-ui-toolkit";

type Params<T> = {
    /** 窗体元素，使用 boostrap 创建 */
    element: HTMLElement,
    /** 字段 */
    fields: DataControlField<T>[],
    /** 数据项 */
    onConfirm?: (dataItem: T) => void,
    cancelButtonText?: string,
    confirmButtonText?: string,
    title?: string
}

export class DataItemDialog<T> {
    private params: Params<T>;
    private dataCells: GridViewCell[];

    constructor(params: Params<T>) {
        this.params = Object.assign({
            cancelButtonText: "取消",
            confirmButtonText: "确定"
        } as Params<T>, params);

        this.dataCells = [];
        params.fields.forEach(c => {
            let headerStyle = c.headerStyle as CSSStyleDeclaration || {};
            headerStyle.textAlign = "right";
            delete headerStyle.width;

            let itemStyle = c.itemStyle as CSSStyleDeclaration || {};
            delete itemStyle.width;

        })
        this.createDialogElement();
    }

    show(dataItem: T) {
        for (let i = 0; i < this.dataCells.length; i++) {
            if (this.dataCells[i].type == "GridViewEditableCell") {
                let cell = this.dataCells[i] as GridViewEditableCell<T>;
                cell.render(dataItem, "edit");
            }
        }
        showDialog(this.params.element);
    }

    hide() {
        hideDialog(this.params.element);
    }

    private onConfirm() {
        let dataItem = {} as any;
        for (let i = 0; i < this.dataCells.length; i++) {
            if (this.dataCells[i].type == "GridViewEditableCell") {
                let cell = this.dataCells[i] as GridViewEditableCell<T>;
                dataItem[cell.dataField] = cell.controlValue;
            }
        }
        this.hide();
        if (this.params.onConfirm) {
            this.params.onConfirm(dataItem);
        }
    }

    private createDialogElement() {
        let dialogElement = document.createElement("div");
        dialogElement.className = "modal-dialog";

        dialogElement.innerHTML = `<div class="modal-dialog">
<div class="modal-content">
    <div class="modal-header">
        <button type="button" class="btn close" data-dismiss="modal">
            <span aria-hidden="true">&times;</span>
            <span class="sr-only">Close</span>
        </button>
        <h4 class="modal-title">${this.params.title || ""}</h4>
    </div>
    <div class="modal-body">
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">
            ${this.params.cancelButtonText}
        </button>
        <button type="button" class="btn btn-primary">
            ${this.params.confirmButtonText}
        </button>
    </div>
</div>
</div>`;

        this.params.element.appendChild(dialogElement);
        let confirmButton = dialogElement.querySelector(".btn-primary") as HTMLButtonElement;
        confirmButton.onclick = () => this.onConfirm();

        let bodyElement = dialogElement.querySelector(".modal-body") as HTMLElement;
        this.params.fields.forEach(field => {

            if (!field.visible) {
                return;
            }

            let fieldElement = document.createElement("div");
            fieldElement.className = "form-group clearfix input-control";
            bodyElement.appendChild(fieldElement);

            let labelElement = document.createElement("label");
            labelElement.innerHTML = field.headerText;
            fieldElement.appendChild(labelElement);

            let controlContainerElement = document.createElement("span");
            fieldElement.appendChild(controlContainerElement);

            let boundField = field as BoundField<T>;
            boundField.createHeaderCell(labelElement);
            let dataCell = boundField.createItemCell({} as T, controlContainerElement);
            this.dataCells.push(dataCell);
        })

    }
}

export function createDataItemDialog<T>(params: Params<T>) {
    let dialog = new DataItemDialog(params);
    return dialog;
}