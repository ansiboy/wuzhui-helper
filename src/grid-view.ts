import * as w from 'maishu-wuzhui';

export function createGridView<T>(params: w.GridViewArguments<T> & { headerFixed?: boolean }) {
    params = Object.assign({
        pageSize: 10,
        dataSource: null,
        columns: null,
    }, params);

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
    params.element.className = 'table table-striped table-bordered table-hover';

    let gridView = new w.GridView(params);
    return gridView;
}