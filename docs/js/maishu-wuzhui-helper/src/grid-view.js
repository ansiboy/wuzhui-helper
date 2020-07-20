var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "maishu-wuzhui", "./errors", "./style"], function (require, exports, w, errors_1, style_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    w = __importStar(w);
    function createGridView(params) {
        params = Object.assign({
            pageSize: 10,
            dataSource: null,
            columns: null,
        }, params);
        if (params.pageSize === null)
            params.showPagingBar = false;
        if (params.pagerSettings == null) {
            params.pagerSettings = Object.assign(w.DataSourcePagingBar.defaultPagerSettings, {
                activeButtonClassName: 'active',
                buttonContainerWraper: 'ul',
                buttonWrapper: 'li',
                buttonContainerClassName: 'pagination',
                showTotal: true,
            });
        }
        console.assert(params.element != null, 'element can not null.');
        if (params.element == null)
            throw errors_1.errors.argumentFieldNull("param", "element");
        if (params.element.tagName != "TABLE" && params.element.tagName != "DIV")
            throw errors_1.errors.gridViewElementError();
        let gridView;
        if (params.element.tagName == "TABLE") {
            params.element.className = 'table table-striped table-bordered table-hover';
            gridView = new w.GridView(params);
        }
        else {
            gridView = new WraperGridView(params);
        }
        ;
        return gridView;
    }
    exports.createGridView = createGridView;
    class WraperGridView extends w.GridView {
        constructor(params) {
            super(WraperGridView.init(params));
            this.createHeader(params);
            this.createFooter(params);
        }
        static init(params) {
            params.element.innerHTML = `
            <div class="main">
                <table class="header table table-bordered">
                    <thead></thead>
                </table>
                <table class="body table table-striped table-bordered table-hover"></table>
            </div>
            <div class="footer"/>`;
            let headerElement = params.element.querySelector(".header");
            let bodyElement = params.element.querySelector(".body");
            let mainElement = params.element.querySelector(".main");
            this.onScroll(mainElement, headerElement);
            params.columns.forEach(c => {
                c.headerStyle = c.headerStyle || {};
                c.itemStyle = c.itemStyle || {};
                c.itemStyle.width = c.headerStyle.width = c.headerStyle.width || WraperGridView.DefaultColumnWidth;
            });
            let tableWidth = this.calcColumnsWidth(params.columns);
            headerElement.style.width = `${tableWidth}px`;
            bodyElement.style.width = `${tableWidth}px`;
            params.element.className = style_1.classNames.gridViewWraper;
            let obj = Object.assign({}, params, {
                showFooter: false,
                showPagingBar: false,
                element: bodyElement,
                dataSource: params.dataSource,
                columns: params.columns,
                showHeader: false,
            });
            return obj;
        }
        static onScroll(mainElement, headerElement) {
            mainElement.onscroll = function (e) {
                headerElement.style.top = `${mainElement.scrollTop}px`;
            };
        }
        static calcColumnsWidth(columns) {
            let width = 0;
            columns.forEach(c => {
                var _a;
                console.assert(c.headerStyle.width != null);
                width = width + Number.parseInt((_a = c.headerStyle.width) === null || _a === void 0 ? void 0 : _a.replace("px", ""));
            });
            return width;
        }
        createHeader(params) {
            let headerElement = params.element.querySelector(".header thead");
            console.assert(headerElement != null);
            let rowElement = document.createElement("tr");
            headerElement.appendChild(rowElement);
            for (let i = 0; i < params.columns.length; i++) {
                let cellElement = document.createElement("th");
                rowElement.appendChild(cellElement);
                params.columns[i].createHeaderCell(cellElement);
            }
        }
        createFooter(params) {
            let footerElement = params.element.querySelector(".footer");
            let pagingBarElement = document.createElement("div");
            pagingBarElement.className = `${w.GridView.pagingBarClassName} clearfix`;
            new w.DataSourcePagingBar({
                dataSource: params.dataSource,
                element: pagingBarElement
            });
            footerElement.appendChild(pagingBarElement);
            params.element.appendChild(footerElement);
        }
    }
    WraperGridView.DefaultColumnWidth = "120px";
});
