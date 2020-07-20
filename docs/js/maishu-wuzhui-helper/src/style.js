define(["require", "exports", "maishu-wuzhui"], function (require, exports, maishu_wuzhui_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.classNames = {
        inputControl: "input-control",
        gridViewWraper: "grid-view-wraper"
    };
    exports.footerHeight = 52;
    let element = document.createElement('style');
    element.type = 'text/css';
    element.setAttribute("data-name", "wuzhui-helper");
    if (document.head != null) {
        document.head.appendChild(element);
    }
    let labelWidth = 80;
    let margin = 20;
    element.innerHTML = `
    .${exports.classNames.inputControl} label {
        width: ${labelWidth}px;
        float: left;
    }
    .${exports.classNames.inputControl} .control {
        margin-left: ${margin}px;
        width: calc(100% - ${labelWidth + margin}px);
    }
    .${exports.classNames.inputControl} .validationMessage {
        color: red
    }
    .${maishu_wuzhui_1.GridView.pagingBarClassName} .pagination {
        margin-top: 0;
        margin-bottom: 0;
        float: right;
    } 
    .${maishu_wuzhui_1.GridView.pagingBarClassName} .total {
        float: left;
        padding-top: 8px;
    }
    .${exports.classNames.gridViewWraper} {
        border: 1px solid #ddd;
    }
    .${exports.classNames.gridViewWraper} .main{
        overflow: auto;
    }
    .${exports.classNames.gridViewWraper} .table {
        margin-bottom: 0;
        max-width: unset;
        min-width: 100%;
    }
    .${exports.classNames.gridViewWraper} .header {
        background-color: white;
        position: relative;
    }
    .${exports.classNames.gridViewWraper} .footer  {
        border: 1px solid #ddd;
        border-top: none;
        padding: 8px;
        height: ${exports.footerHeight}px;
    }
    .${exports.classNames.gridViewWraper} .footer .${maishu_wuzhui_1.GridView.pagingBarClassName} .pagination {
        float: right;
        margin: 0;
    }
    .${exports.classNames.gridViewWraper} .footer .${maishu_wuzhui_1.GridView.pagingBarClassName} .total {
        float: left;
    }
`;
});
