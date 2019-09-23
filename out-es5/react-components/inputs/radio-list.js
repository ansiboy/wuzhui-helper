"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

define(["require", "exports", "react", "./input-control", "maishu-dilu"], function (require, exports, React, input_control_1, maishu_dilu_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var RadioListInput =
  /*#__PURE__*/
  function (_input_control_1$Inpu) {
    _inherits(RadioListInput, _input_control_1$Inpu);

    function RadioListInput(props) {
      var _this;

      _classCallCheck(this, RadioListInput);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioListInput).call(this, props));
      _this.state = {
        items: [],
        value: _this.props.defaultValue
      };
      return _this;
    }

    _createClass(RadioListInput, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var _this$props = this.props,
            nameField = _this$props.nameField,
            valueField = _this$props.valueField;
        this.props.dataSource.executeSelect().then(function (r) {
          var items = r.dataItems.map(function (o) {
            return {
              text: o[nameField],
              value: o[valueField]
            };
          });

          _this2.setState({
            items: items
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var _this$props2 = this.props,
            dataField = _this$props2.dataField,
            dataType = _this$props2.dataType;
        var items = this.state.items;
        return React.createElement("div", null, items.map(function (o) {
          return React.createElement(React.Fragment, null, React.createElement("input", {
            name: dataField,
            type: "radion",
            value: o.value,
            checked: _this3.value == o.value,
            onChange: function onChange(e) {
              if (dataType == "number" && !maishu_dilu_1.rules.numeric().validate(e.target)) return;
              var value = dataType == "number" ? parseFloat(e.target.value) : e.target.value;

              _this3.setState({
                value: value
              });
            }
          }), React.createElement("span", null, o.text));
        }));
      }
    }, {
      key: "value",
      set: function set(value) {
        this.setState({
          value: value
        });
      },
      get: function get() {
        return this.state.value;
      }
    }]);

    return RadioListInput;
  }(input_control_1.InputControl);

  exports.RadioListInput = RadioListInput;
});
//# sourceMappingURL=radio-list.js.map
