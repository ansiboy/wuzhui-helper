define(["require", "exports", "maishu-chitu-service", "./Errors", "./Application"], function (require, exports, maishu_chitu_service_1, Errors_1, Application_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * 页面，用把 HTML Element 包装起来。
     */
    class Page {
        constructor(params) {
            this.data = {};
            /** 页面显示时引发 */
            this.showing = maishu_chitu_service_1.Callbacks();
            /** 页面显示时完成后引发 */
            this.shown = maishu_chitu_service_1.Callbacks();
            this.hiding = maishu_chitu_service_1.Callbacks();
            this.hidden = maishu_chitu_service_1.Callbacks();
            this.closing = maishu_chitu_service_1.Callbacks();
            this.closed = maishu_chitu_service_1.Callbacks();
            this.messageReceived = maishu_chitu_service_1.Callbacks();
            this._element = params.element;
            this._app = params.app;
            this._displayer = params.displayer;
            let routeData = Application_1.parseUrl(params.url);
            this.data = Object.assign(routeData.values, params.data || {});
            this._name = routeData.pageName;
            this._url = params.url;
            this._container = params.container;
        }
        on_showing() {
            return this.showing.fire(this, this.data);
        }
        on_shown() {
            return this.shown.fire(this, this.data);
        }
        on_hiding() {
            return this.hiding.fire(this, this.data);
        }
        on_hidden() {
            return this.hidden.fire(this, this.data);
        }
        on_closing() {
            return this.closing.fire(this, this.data);
        }
        on_closed() {
            return this.closed.fire(this, this.data);
        }
        show() {
            this.on_showing();
            let currentPage = this._app.currentPage;
            if (this == currentPage) {
                currentPage = null;
            }
            return this._displayer.show(this, currentPage).then(o => {
                this.on_shown();
            });
        }
        hide(currentPage) {
            this.on_hiding();
            return this._displayer.hide(this, currentPage).then(o => {
                this.on_hidden();
            });
        }
        close() {
            this.on_closing();
            let parentElement = this._element.parentElement;
            if (parentElement == null)
                throw Errors_1.Errors.unexpectedNullValue();
            parentElement.removeChild(this._element);
            this.on_closed();
            return Promise.resolve();
        }
        /**
         * 创建服务
         * @param type 服务类型
         */
        createService(type) {
            type = type || maishu_chitu_service_1.Service;
            let service = new type();
            service.error.add((sender, error) => {
                this._app.error.fire(this._app, error, this);
            });
            return service;
        }
        reload() {
            this.app.reload(this);
        }
        // public reload(pageName: string, args?: PageData) {
        //     let result = this.showPage(pageName, args, true)
        //     return result
        // }
        /**
         * 元素，与页面相对应的元素
         */
        get element() {
            return this._element;
        }
        /**
         * 名称
         */
        get name() {
            return this._name;
        }
        get url() {
            return this._url;
        }
        get app() {
            return this._app;
        }
        get container() {
            return this._container;
        }
    }
    exports.Page = Page;
    class PageDisplayerImplement {
        show(page, previous) {
            page.element.style.display = 'block';
            if (previous != null) {
                previous.element.style.display = 'none';
            }
            return Promise.resolve();
        }
        hide(page, previous) {
            page.element.style.display = 'none';
            if (previous != null) {
                previous.element.style.display = 'block';
            }
            return Promise.resolve();
        }
    }
    exports.PageDisplayerImplement = PageDisplayerImplement;
});
