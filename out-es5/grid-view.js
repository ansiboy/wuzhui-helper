"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = require("maishu-wuzhui");

function createGridView(params) {
  params = Object.assign({
    pageSize: 10,
    dataSource: null,
    columns: null
  }, params);

  if (params.pagerSettings == null) {
    params.pagerSettings = {
      activeButtonClassName: 'active',
      buttonContainerWraper: 'ul',
      buttonWrapper: 'li',
      buttonContainerClassName: 'pagination',
      showTotal: true
    };
  }

  console.assert(params.element != null, 'element can not null.');
  params.element.className = 'table table-striped table-bordered table-hover';
  var gridView = new w.GridView(params);
  return gridView;
}

exports.createGridView = createGridView;
//# sourceMappingURL=grid-view.js.map
