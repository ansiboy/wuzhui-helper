"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

define(["require", "exports", "react", "maishu-ui-toolkit", "react-dom", "maishu-dilu", "./inputs/input-control"], function (require, exports, React, maishu_ui_toolkit_1, ReactDOM, maishu_dilu_1, input_control_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function createItemDialog(dataSource, name, child, beforeSave) {
    var ItemDialog =
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(ItemDialog, _React$Component);

      function ItemDialog(props) {
        var _this;

        _classCallCheck(this, ItemDialog);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ItemDialog).call(this, props));
        _this.state = {};
        _this.beforeSaves = [];
        _this.inputControls = [];
        return _this;
      }

      _createClass(ItemDialog, [{
        key: "onSaveButtonClick",
        value: function onSaveButtonClick() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.validator.clearErrors();

                    if (this.validator.check()) {
                      _context.next = 3;
                      break;
                    }

                    return _context.abrupt("return", Promise.reject('validate fail'));

                  case 3:
                    _context.next = 5;
                    return this.save();

                  case 5:
                    maishu_ui_toolkit_1.hideDialog(this.dialogElement);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "setDataItem",
        value: function setDataItem(dataItem) {
          this.dataItem = dataItem;
          var primaryValues = dataSource.primaryKeys;
          var title = primaryValues.length > 0 ? "\u4FEE\u6539".concat(name) : "\u6DFB\u52A0".concat(name);
          this.inputControls.forEach(function (c) {
            var value = dataItem[c.props.dataField];
            c.value = value;
          });
          this.setState({
            title: title
          });
        }
      }, {
        key: "save",
        value: function save() {
          return __awaiter(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var dataItem, primaryValues;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    dataItem = this.dataItem;
                    this.inputControls.forEach(function (c) {
                      dataItem[c.props.dataField] = c.value;
                    });

                    if (!beforeSave) {
                      _context2.next = 5;
                      break;
                    }

                    _context2.next = 5;
                    return beforeSave(dataItem);

                  case 5:
                    if (!(this.beforeSaves.length > 0)) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 8;
                    return Promise.all(this.beforeSaves.map(function (m) {
                      return m(dataItem);
                    }));

                  case 8:
                    primaryValues = dataSource.primaryKeys.map(function (o) {
                      return dataItem[o];
                    }).filter(function (v) {
                      return v != null;
                    });

                    if (!(primaryValues.length > 0)) {
                      _context2.next = 14;
                      break;
                    }

                    _context2.next = 12;
                    return dataSource.update(dataItem);

                  case 12:
                    _context2.next = 16;
                    break;

                  case 14:
                    _context2.next = 16;
                    return dataSource.insert(dataItem);

                  case 16:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "childrenToArray",
        value: function childrenToArray(children) {
          var r = Array.isArray(children) ? children : [children];
          r = r.filter(function (o) {
            return o;
          });
          return r;
        }
      }, {
        key: "controlCreated",
        value: function controlCreated(ctrl) {
          var exists = this.inputControls.filter(function (o) {
            return o.id == ctrl.id;
          }).length > 0;
          if (exists) return;
          this.inputControls.push(ctrl);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var nodes = this.childrenToArray(child.props.children); //Array.isArray(child.props.children) ? child.props.children : [child.props.children];

          var validateFields = [];

          var stack = _toConsumableArray(nodes);

          while (stack.length > 0) {
            var item = stack.pop();
            if (!item.props) continue; // let props = item.props as ValidateDataField & { dataField: string, name: string };
            // if (props.validateRules != null) {
            //     let f: ValidateField = { name: props.name || props.dataField, rules: props.validateRules || [] };
            //     validateFields.push(f);
            // }

            if (item.props.type != null && item.props.type.prototype instanceof input_control_1.InputControl) {
              this.inputControls.push(item);
              var props = item.props;

              if (props.validateRules != null) {
                var f = {
                  name: props.dataField,
                  rules: props.validateRules || []
                };
                validateFields.push(f);
              }
            }

            var children = this.childrenToArray(item.props.children);
            stack.push.apply(stack, _toConsumableArray(children));
          }

          this.validator = _construct(maishu_dilu_1.FormValidator, [this.fieldsConatiner].concat(validateFields));
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          var title = this.state.title; // let primaryValues = dataSource.primaryKeys.map(o => dataItem[o]).filter(v => v != null);

          return React.createElement("div", {
            className: "modal-dialog"
          }, React.createElement("div", {
            className: "modal-content"
          }, React.createElement("div", {
            className: "modal-header"
          }, React.createElement("button", {
            type: "button",
            className: "close",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }, React.createElement("span", {
            "aria-hidden": "true"
          }, "\xD7")), React.createElement("h4", {
            className: "modal-title"
          }, title)), React.createElement("div", {
            className: "modal-body well",
            style: {
              paddingLeft: 20,
              paddingRight: 20
            },
            ref: function ref(e) {
              return _this2.fieldsConatiner = e || _this2.fieldsConatiner;
            }
          }, child), React.createElement("div", {
            className: "modal-footer"
          }, React.createElement("button", {
            className: "btn btn-default",
            onClick: function onClick(e) {
              maishu_ui_toolkit_1.hideDialog(_this2.dialogElement);
            }
          }, React.createElement("i", {
            className: "icon-reply"
          }), React.createElement("span", null, "\u53D6\u6D88")), React.createElement("button", {
            className: "btn btn-primary",
            onClick: function onClick() {
              return _this2.onSaveButtonClick();
            }
          }, React.createElement("i", {
            className: "icon-save"
          }), React.createElement("span", null, "\u786E\u5B9A")))));
        }
      }], [{
        key: "show",
        value: function show(dataItem) {
          dataItem = dataItem || {};

          if (!ItemDialog.instance) {
            var dialogElement = document.createElement("div");
            dialogElement.className = "modal fade-in";
            document.body.appendChild(dialogElement);
            ItemDialog.instance = ReactDOM.render(React.createElement(ItemDialog, null), dialogElement);
            ItemDialog.instance.dialogElement = dialogElement;
          }

          ItemDialog.instance.validator.clearErrors(); // ItemDialog.instance.setState({ dataItem: dataItem });

          ItemDialog.instance.setDataItem(dataItem);
          maishu_ui_toolkit_1.showDialog(ItemDialog.instance.dialogElement);
        }
      }]);

      return ItemDialog;
    }(React.Component);

    return ItemDialog;
  }

  exports.createItemDialog = createItemDialog;
}); // export let ItemDialogContext = React.createContext({
//     controlCreated: null as (ctrl: InputControl<any>) => void
// });
//# sourceMappingURL=item-dialog.js.map
