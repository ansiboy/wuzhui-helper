"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var w = require("maishu-wuzhui");

var emptyValue = "";

function dropdownField(params) {
  var field = new DropdownField(params);
  return field;
}

exports.dropdownField = dropdownField;

var DropdownField =
/*#__PURE__*/
function (_w$BoundField) {
  _inherits(DropdownField, _w$BoundField);

  function DropdownField(params) {
    var _this;

    _classCallCheck(this, DropdownField);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropdownField).call(this, params));

    _get(_getPrototypeOf(DropdownField.prototype), "params", _assertThisInitialized(_this));

    params.dataSource.select().then(function (r) {});
    return _this;
  }

  _createClass(DropdownField, [{
    key: "getParams",
    value: function getParams() {
      return this.params;
    }
  }, {
    key: "getDataItems",
    value: function getDataItems() {
      return __awaiter(this, void 0, void 0,
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var r;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.dataItems) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return this.getParams().dataSource.select();

              case 3:
                r = _context.sent;
                this.dataItems = r.dataItems;

              case 5:
                return _context.abrupt("return", this.dataItems);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "createControl",
    value: function createControl() {
      var _this2 = this;

      var element = document.createElement("select");
      element.className = "form-control";

      if (this.getParams().emptyText) {
        var o = document.createElement("option");
        o.innerText = this.getParams().emptyText;
        o.value = emptyValue;
        element.append(o);
      }

      this.getDataItems().then(function (dataItems) {
        var options = dataItems.map(function (dataItem) {
          var o = document.createElement("option");
          o.innerText = dataItem[_this2.getParams().nameField];
          o.value = dataItem[_this2.getParams().valueField];
          return o;
        });
        element.append.apply(element, _toConsumableArray(options));
      });
      return {
        element: element,

        get value() {
          return element.value;
        },

        set value(value) {
          if (value == null) {
            element.value = emptyValue;
            return;
          }

          element.value = value;
        }

      };
    }
  }]);

  return DropdownField;
}(w.BoundField);
//# sourceMappingURL=dropdown.js.map
