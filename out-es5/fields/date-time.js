"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

define(["require", "exports", "maishu-wuzhui"], function (require, exports, maishu_wuzhui_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function dateTimeField(args) {
    var field = new DateTimeField(args);
    var validateRules = {
      validateRules: args.validateRules
    };
    var r = Object.assign(field, validateRules);
    return r;
  }

  exports.dateTimeField = dateTimeField;

  var DateTimeField =
  /*#__PURE__*/
  function (_maishu_wuzhui_1$Boun) {
    _inherits(DateTimeField, _maishu_wuzhui_1$Boun);

    function DateTimeField(args) {
      var _this;

      _classCallCheck(this, DateTimeField);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DateTimeField).call(this, Object.assign({
        headerStyle: {
          textAlign: 'center',
          width: '160px'
        },
        itemStyle: {
          textAlign: 'center',
          width: "160px"
        }
      }, args)));
      _this.inputTips = args.inputTips;
      return _this;
    }

    _createClass(DateTimeField, [{
      key: "createControl",
      value: function createControl() {
        var ctrl = _get(_getPrototypeOf(DateTimeField.prototype), "createControl", this).call(this);

        var VALUE = "value";
        Object.defineProperty(ctrl, VALUE, {
          get: function get() {
            var str = ctrl.element.value;
            var value;

            try {
              value = new Date(Date.parse(str));
            } catch (err) {}

            return value;
          },
          set: function set(value) {
            var str = toDateTimeString(value);
            ctrl.element.value = str;
          }
        });
        if (this.inputTips) ctrl.element.placeholder = this.inputTips;
        ctrl.element.className = "form-control";
        return ctrl;
      }
    }, {
      key: "createItemCell",
      value: function createItemCell(dataItem) {
        var cell = _get(_getPrototypeOf(DateTimeField.prototype), "createItemCell", this).call(this, dataItem);

        cell.formatValue = function (value) {
          return toDateTimeString(value);
        };

        return cell;
      }
    }]);

    return DateTimeField;
  }(maishu_wuzhui_1.BoundField);

  function toDateTimeString(datetime) {
    if (datetime == null) return null;

    if (typeof datetime == "string") {
      datetime = new Date(datetime);
    }

    var d;
    if (typeof datetime == 'number') d = new Date(datetime);else d = datetime;
    var month = "".concat(d.getMonth() + 1);
    month = month.length == 1 ? '0' + month : month;
    var date = "".concat(d.getDate());
    date = date.length == 1 ? '0' + date : date;
    var hours = "".concat(d.getHours());
    hours = hours.length == 1 ? '0' + hours : hours;
    var minutes = "".concat(d.getMinutes());
    minutes = minutes.length == 1 ? '0' + minutes : minutes;
    return "".concat(d.getFullYear(), "-").concat(month, "-").concat(date, " ").concat(hours, ":").concat(minutes);
  }

  exports.toDateTimeString = toDateTimeString;
});
//# sourceMappingURL=date-time.js.map
