define(["require", "exports", "./callback", "./errors"], function (require, exports, callback_1, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Service {
        constructor(handleError) {
            this.error = callback_1.Callbacks();
            if (handleError) {
                this.error.add((sender, err) => {
                    handleError(err, this);
                });
            }
        }
        ajax(url, options) {
            if (options === undefined)
                options = {};
            let data = options.data;
            let method = options.method;
            let headers = Object.assign({}, options.headers || {}, Service.headers);
            let body;
            if (data != null) {
                let is_json = (headers['content-type'] || '').indexOf('json') >= 0;
                if (is_json) {
                    body = JSON.stringify(data);
                }
                else {
                    body = new URLSearchParams();
                    for (let key in data) {
                        body.append(key, data[key]);
                    }
                }
            }
            return new Promise((reslove, reject) => {
                let options = { headers: headers, body, method };
                let timeId;
                if (options == null)
                    throw errors_1.errors.unexpectedNullValue('options');
                if (method == 'get') {
                    timeId = setTimeout(() => {
                        console.warn(`timeout url: ${url}`);
                        let err = new Error(); //new AjaxError(options.method);
                        err.name = 'timeout';
                        err.message = '网络连接超时';
                        reject(err);
                        this.error.fire(this, err);
                        clearTimeout(timeId);
                    }, Service.settings.ajaxTimeout * 1000);
                }
                ajax(url, options)
                    .then(data => {
                    reslove(data);
                    if (timeId)
                        clearTimeout(timeId);
                })
                    .catch(err => {
                    reject(err);
                    this.error.fire(this, err);
                    if (timeId)
                        clearTimeout(timeId);
                });
            });
        }
        /**
         * 创建服务
         * @param type 服务类型
         */
        createService(type) {
            type = type || Service;
            let service = new type();
            service.error.add((sender, error) => {
                this.error.fire(service, error);
            });
            return service;
        }
        getByJson(url, data) {
            if (data && Object.getOwnPropertyNames(data).length > 0) {
                url = `${url}?${encodeURIComponent(JSON.stringify(data))}`;
            }
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, method: 'get' });
        }
        putByJson(url, data) {
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, data, method: 'put' });
        }
        postByJson(url, data) {
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, data, method: 'post' });
        }
        deleteByJson(url, data) {
            let headers = { "content-type": 'application/json' };
            return this.ajax(url, { headers, data, method: 'delete' });
        }
        isEncoded(uri) {
            try {
                uri = uri || '';
                return uri !== decodeURIComponent(uri);
            }
            catch (e) {
                return false;
            }
        }
        get(url, data) {
            data = data || {};
            let params = "";
            for (let key in data) {
                if (data[key] == null)
                    continue;
                let value = `${data[key]}`;
                if (!this.isEncoded(value)) {
                    value = encodeURIComponent(value);
                }
                params = params ? `${params}&${key}=${value}` : `${key}=${value}`;
            }
            if (params) {
                url = `${url}?${params}`;
            }
            return this.ajax(url, { method: 'get' });
        }
        put(url, data) {
            let headers = { "content-type": 'application/x-www-form-urlencoded' };
            return this.ajax(url, { headers, data, method: 'put' });
        }
        post(url, data) {
            let headers = { "content-type": 'application/x-www-form-urlencoded' };
            return this.ajax(url, { headers, data, method: 'post', });
        }
        delete(url, data) {
            let headers = { "content-type": 'application/x-www-form-urlencoded' };
            return this.ajax(url, { headers, data, method: 'delete' });
        }
    }
    exports.Service = Service;
    Service.settings = {
        ajaxTimeout: 30,
    };
    Service.headers = {};
    function formatData(data) {
        if (typeof data == "object") {
            for (let key in data) {
                data[key] = formatData(data[key]);
            }
            return data;
        }
        let datePattern = /\d{4}-\d{1,2}-\d{1,2}T\d{1,2}:\d{1,2}:\d{1,2}/;
        if (typeof data == "string" && datePattern.test(data)) {
            return new Date(data);
        }
        return data;
    }
    async function ajax(url, options) {
        let response;
        if (typeof window === 'undefined') {
            // 使用 global['require'] 而不是 require ，避免 webpack 处理 node-fetch
            response = await eval('require')('node-fetch')(url, options);
        }
        else {
            response = await fetch(url, options);
        }
        let responseText = response.text();
        let p;
        if (typeof responseText == 'string') {
            p = new Promise((reslove, reject) => {
                reslove(responseText);
            });
        }
        else {
            p = responseText;
        }
        let text = await responseText;
        let textObject;
        let isJSONContextType = (response.headers.get('content-type') || '').indexOf('json') >= 0;
        if (isJSONContextType) {
            try {
                textObject = text ? JSON.parse(text) : {};
            }
            catch (_a) {
                let err = errors_1.errors.parseJSONFail(text);
                console.error(err);
                textObject = text;
            }
        }
        else {
            textObject = text;
        }
        if (response.status >= 300) {
            let err = new Error();
            err.method = options.method;
            err.name = `${response.status}`;
            err.message = typeof textObject == "string" ? textObject : (textObject.Message || textObject.message || '');
            err.message = err.message || response.statusText;
            throw err;
        }
        textObject = formatData(textObject);
        return textObject;
    }
});
