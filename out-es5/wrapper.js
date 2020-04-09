"use strict";

define(["require", "exports", "maishu-wuzhui", "./errors", "./textbox"], function (require, exports, w, errors_1, textbox_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  function boundField(params) {
    if (!params) throw errors_1.errors.argumentNull('params');
    params.headerStyle = Object.assign({
      textAlign: 'center'
    }, params.headerStyle || {});
    if (params.nullText == null) params.nullText = '';
    var field = new w.BoundField(params);
    var validateRules = {
      validateRules: params.validateRules
    };
    var r = Object.assign(field, validateRules);
    var createControl = field.createControl;

    field.createControl = function () {
      var ctrl = createControl.apply(this, []);
      if (params.emptyText) ctrl.element.placeholder = params.emptyText;
      ctrl.element.className = "form-control";
      return ctrl;
    };

    return r;
  }

  exports.boundField = boundField;

  function commandField(params) {
    if (!params) throw errors_1.errors.argumentNull('params');
    return new w.CommandField(params);
  }

  exports.commandField = commandField;

  function customField(params) {
    if (!params) throw errors_1.errors.argumentNull('params');
    params.headerStyle = Object.assign({
      textAlign: 'center'
    }, params.headerStyle || {});
    var field = new w.CustomField(params);
    return field;
  }

  exports.customField = customField;

  function dropdown(args) {
    return new w.DropDown(args);
  }

  exports.dropdown = dropdown;

  function textbox(args) {
    return new textbox_1.TextBox(args);
  }

  exports.textbox = textbox;
});
//# sourceMappingURL=wrapper.js.map
