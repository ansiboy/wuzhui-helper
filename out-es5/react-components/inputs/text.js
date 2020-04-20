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

define(["require", "exports", "react", "./input-control"], function (require, exports, React, input_control_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var TextInput =
  /*#__PURE__*/
  function (_input_control_1$Inpu) {
    _inherits(TextInput, _input_control_1$Inpu);

    function TextInput(props) {
      var _this;

      _classCallCheck(this, TextInput);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInput).call(this, props));
      _this.state = {
        dataItem: {}
      };
      return _this;
    }

    _createClass(TextInput, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            dataField = _this$props.dataField,
            placeholder = _this$props.placeholder;
        return React.createElement("input", {
          name: name || dataField,
          className: "form-control",
          placeholder: placeholder,
          type: this.props.type,
          ref: function ref(e) {
            return _this2.input = e || _this2.input;
          }
        });
      }
    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set(value) {
        this.input.value = value;
      }
    }]);

    return TextInput;
  }(input_control_1.InputControl);

  exports.TextInput = TextInput;
});
//# sourceMappingURL=text.js.map