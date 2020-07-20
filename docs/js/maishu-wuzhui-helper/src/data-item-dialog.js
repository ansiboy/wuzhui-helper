define(["require", "exports", "maishu-ui-toolkit", "maishu-dilu"], function (require, exports, maishu_ui_toolkit_1, maishu_dilu_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DataItemDialog {
        constructor(params) {
            this.params = Object.assign({
                cancelButtonText: "取消",
                confirmButtonText: "确定"
            }, params);
            this.dataCells = [];
            params.fields.forEach(c => {
                let headerStyle = c.headerStyle || {};
                headerStyle.textAlign = "right";
                delete headerStyle.width;
                let itemStyle = c.itemStyle || {};
                delete itemStyle.width;
            });
            let validateFiels = params.fields.filter(c => c.validateRules != null && c.dataField != null)
                .map(o => ({ name: o.dataField, rules: o.validateRules }));
            this.validator = new maishu_dilu_1.FormValidator(params.element, ...validateFiels);
            this.createDialogElement();
        }
        show(dataItem) {
            dataItem = dataItem || {};
            for (let i = 0; i < this.dataCells.length; i++) {
                if (this.dataCells[i].type == "GridViewEditableCell") {
                    let cell = this.dataCells[i];
                    cell.render(dataItem, "edit");
                }
            }
            maishu_ui_toolkit_1.showDialog(this.params.element);
        }
        hide() {
            maishu_ui_toolkit_1.hideDialog(this.params.element);
        }
        onConfirm() {
            let dataItem = {};
            for (let i = 0; i < this.dataCells.length; i++) {
                if (this.dataCells[i].type == "GridViewEditableCell") {
                    let cell = this.dataCells[i];
                    dataItem[cell.dataField] = cell.controlValue;
                }
            }
            if (!this.validator.check())
                return;
            this.hide();
            if (this.params.onConfirm) {
                this.params.onConfirm(dataItem);
            }
        }
        createDialogElement() {
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
            let confirmButton = dialogElement.querySelector(".btn-primary");
            confirmButton.onclick = () => this.onConfirm();
            let bodyElement = dialogElement.querySelector(".modal-body");
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
                let controlContainerElement = document.createElement("div");
                controlContainerElement.className = "control";
                fieldElement.appendChild(controlContainerElement);
                let boundField = field;
                boundField.createHeaderCell(labelElement);
                let dataCell = boundField.createItemCell({}, controlContainerElement);
                this.dataCells.push(dataCell);
            });
        }
    }
    exports.DataItemDialog = DataItemDialog;
    function createDataItemDialog(params) {
        let dialog = new DataItemDialog(params);
        return dialog;
    }
    exports.createDataItemDialog = createDataItemDialog;
});
