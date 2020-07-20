define(["require", "exports", "maishu-chitu-service", "./PageMaster", "./Errors"], function (require, exports, maishu_chitu_service_1, PageMaster_1, Errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const DefaultPageName = "index";
    function parseUrl(url) {
        if (!url)
            throw Errors_1.Errors.argumentNull('url');
        let sharpIndex = url.indexOf('#');
        let routeString;
        if (sharpIndex >= 0)
            routeString = url.substr(sharpIndex + 1);
        else
            routeString = url;
        if (!routeString)
            throw Errors_1.Errors.canntParseRouteString(url);
        /** 以 ! 开头在 hash 忽略掉 */
        if (routeString.startsWith('!')) {
            throw Errors_1.Errors.canntParseRouteString(routeString);
        }
        let routePath;
        let search = null;
        let param_spliter_index = routeString.indexOf('?');
        if (param_spliter_index >= 0) {
            search = routeString.substr(param_spliter_index + 1);
            routePath = routeString.substring(0, param_spliter_index);
        }
        else {
            routePath = routeString;
        }
        if (!routePath)
            routePath = DefaultPageName; //throw Errors.canntParseRouteString(routeString);
        let values = {};
        if (search) {
            values = pareeUrlQuery(search);
        }
        let pageName = routePath;
        return { pageName, values };
    }
    exports.parseUrl = parseUrl;
    function pareeUrlQuery(query) {
        let match, pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g, decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "));
        };
        let urlParams = {};
        while (match = search.exec(query))
            urlParams[decode(match[1])] = decode(match[2]);
        return urlParams;
    }
    function createPageUrl(pageName, params) {
        let path_parts = pageName.split('.');
        let path = path_parts.join('/');
        if (!params)
            return `${path}`;
        //==============================================
        // 移除 function, null, object 字段
        let paramsText = '';
        for (let key in params) {
            let value = params[key];
            if (typeof value == "function" || value == null)
                continue;
            value = encodeURIComponent(value);
            paramsText = paramsText == '' ? `?${key}=${value}` : paramsText + `&${key}=${value}`;
        }
        //==============================================
        return `${path}${paramsText}`;
    }
    exports.createPageUrl = createPageUrl;
    /**
     * 应用，处理页面 URL 和 Page 之间的关联
     */
    class Application extends PageMaster_1.PageMaster {
        /**
         * 构造函数
         * @param parser 地图，描述站点各个页面结点
         * @param allowCachePage 是允许缓存页面，默认 true
         */
        constructor(args) {
            super(Application.containers((args || {}).container), (args || {}).parser);
            this._runned = false;
        }
        static containers(container) {
            let r = {};
            if (container == null) {
                r[Application.DefaultContainerName] = document.body;
                return r;
            }
            if (container.tagName) {
                r[Application.DefaultContainerName] = container;
                return r;
            }
            r = container;
            if (!Application.DefaultContainerName)
                throw Errors_1.Errors.containerIsNotExists(Application.DefaultContainerName);
            return r;
        }
        /**
         * 解释路由，将路由字符串解释为 RouteData 对象
         * @param url 要解释的 路由字符串
         */
        parseUrl(url) {
            if (!url)
                throw Errors_1.Errors.argumentNull('url');
            let routeData = parseUrl(url);
            return routeData;
        }
        /**
         * 创建 url
         * @param pageName 页面名称
         * @param values 页面参数
         */
        createUrl(pageName, values) {
            return createPageUrl(pageName, values);
        }
        /**
         * 运行当前应用
         */
        run() {
            if (this._runned)
                return;
            let showPage = () => {
                let url = location.href;
                let sharpIndex = url.indexOf('#');
                if (sharpIndex < 0) {
                    url = '#' + DefaultPageName;
                }
                else {
                    url = url.substr(sharpIndex + 1);
                }
                // let routeString = url.substr(sharpIndex + 1);
                /** 以 ! 开头在 hash 忽略掉 */
                if (url.startsWith('!')) {
                    return;
                }
                this.showPage(url);
            };
            showPage();
            window.addEventListener('hashchange', () => {
                if (this.location.skip) {
                    delete this.location.skip;
                    return;
                }
                showPage();
            });
            this._runned = true;
        }
        setLocationHash(pageUrl) {
            this.location.hash = `#${pageUrl}`;
            this.location.skip = true;
        }
        get location() {
            return location;
        }
        /**
         * 页面跳转
         * @param node 页面节点
         * @param args 传递到页面的参数
         */
        redirect(pageUrl, args) {
            if (!pageUrl)
                throw Errors_1.Errors.argumentNull('pageUrl');
            let page = this.showPage(pageUrl, args);
            let url = this.createUrl(page.name, page.data);
            this.setLocationHash(url);
            return page;
        }
        /**
         * 页面向下一级页面跳转，页面会重新渲染
         * @param node 页面节点
         * @param args 传递到页面的参数
         * @param setUrl 是否设置链接里 Hash
         */
        forward(pageUrl, args, setUrl) {
            if (!pageUrl)
                throw Errors_1.Errors.argumentNull('pageNameOrUrl');
            if (setUrl == null)
                setUrl = true;
            let page = this.showPage(pageUrl, args, true);
            if (setUrl) {
                let url = this.createUrl(page.name, page.data);
                this.setLocationHash(url);
            }
            return page;
        }
        // public reload(pageName: string, args?: PageData) {
        //     let result = this.showPage(pageName, args, true)
        //     return result
        // }
        /**
         * 返回上一个页面
         * @param closeCurrentPage 返回上一个页面时，是否关闭当前页面，true 关闭当前页，false 隐藏当前页。默认为 true。
         */
        back() {
            this.closeCurrentPage();
            setTimeout(() => {
                history.back();
            }, 100);
        }
        /**
         * 创建服务
         * @param type 服务类型
         */
        createService(type) {
            type = type || maishu_chitu_service_1.Service;
            let service = new type();
            service.error.add((sender, error) => {
                this.error.fire(this, error, null);
            });
            return service;
        }
    }
    exports.Application = Application;
    // private closeCurrentOnBack: boolean | null = null;
    // private tempPageData: PageData | undefined = undefined;
    Application.DefaultContainerName = 'default';
});
