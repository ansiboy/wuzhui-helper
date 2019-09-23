"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

define(["require", "exports", "react", "maishu-ui-toolkit"], function (require, exports, React, ui) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ItemDialog =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(ItemDialog, _React$Component);

    function ItemDialog(props) {
      var _this;

      _classCallCheck(this, ItemDialog);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ItemDialog).call(this, props));
      _this.confirmButtonText = "保存";
      _this.cancelButtonText = "取消";
      _this.state = {
        item: {}
      };
      var render = _this.render;
      console.assert(render != null);

      _this.render = function () {
        var _ref = _this.state || {},
            title = _ref.title,
            item = _ref.item;

        if (item == null) item = {};
        return React.createElement("div", {
          className: "modal fade",
          ref: function ref(e) {
            return _this.element = e || _this.element;
          }
        }, React.createElement("div", {
          className: "modal-dialog"
        }, React.createElement("div", {
          className: "modal-content"
        }, React.createElement("div", {
          className: "modal-header"
        }, React.createElement("button", {
          type: "button",
          className: "close",
          "data-dismiss": "modal"
        }, React.createElement("span", {
          "aria-hidden": "true"
        }, "\xD7"), React.createElement("span", {
          className: "sr-only"
        }, "Close")), React.createElement("h4", {
          className: "modal-title"
        }, title || "")), React.createElement("div", {
          className: "modal-body"
        }, render.bind(_assertThisInitialized(_this))()), React.createElement("div", {
          className: "modal-footer",
          style: {
            marginTop: 0
          }
        }, React.createElement("button", {
          type: "button",
          className: "btn btn-default",
          "data-dismiss": "modal"
        }, _this.cancelButtonText), React.createElement("button", {
          type: "button",
          className: "btn btn-primary",
          onClick: function onClick() {
            return _this.confirm();
          }
        }, _this.confirmButtonText)))));
      };

      return _this;
    }

    _createClass(ItemDialog, [{
      key: "confirm",
      value: function confirm() {
        if (this.validator && !this.validator.check()) return;
        var item = this.state.item;
        Object.assign(this.item, item);
        ui.hideDialog(this.element);
        if (this.confirmCallback) this.confirmCallback(item);
      }
    }, {
      key: "show",
      value: function show(arg1, arg2, arg3) {
        var _this2 = this;

        var item, title, confirm;

        if (typeof arg1 == "string") {
          title = arg1;
          confirm = arg2;
        } else {
          item = arg1;
          title = arg2;
          confirm = arg3;
        }

        if (this.validator) this.validator.clearErrors();
        this.item = item;
        this.confirmCallback = confirm;
        this.setState({
          item: Object.assign({}, item),
          title: title
        }, function () {
          ui.showDialog(_this2.element);
        });
      }
    }]);

    return ItemDialog;
  }(React.Component);

  exports.ItemDialog = ItemDialog;
});
//# sourceMappingURL=item-dialog.js.map
