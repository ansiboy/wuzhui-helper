define(["require", "exports", "maishu-wuzhui", "./errors"], function (require, exports, maishu_wuzhui_1, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createPagingBar(params) {
        if (!params.dataSource)
            throw errors_1.errors.argumentFieldNull("params", "dataSource");
        if (!params.element)
            throw errors_1.errors.argumentFieldNull("params", "element");
        return new maishu_wuzhui_1.DataSourcePagingBar({
            dataSource: params.dataSource,
            element: params.element,
            pagerSettings: {
                activeButtonClassName: 'active',
                buttonWrapper: 'li',
                buttonContainerWraper: 'ul',
                showTotal: false,
            },
        });
    }
    exports.createPagingBar = createPagingBar;
});
