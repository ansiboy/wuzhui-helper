"use strict";

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

define(["require", "exports", "./errors"], function (require, exports, errors_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function radioList(params) {
    return __awaiter(this, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var dataSource, element, nameField, valueField, dataField, r, getDataSourceItemName, getDataSourceItemValue;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getDataSourceItemValue = function _ref2(item) {
                if (!valueField) return item;
                return item[valueField];
              };

              getDataSourceItemName = function _ref(item) {
                if (!nameField) return item;
                return item[nameField];
              };

              if (params) {
                _context.next = 4;
                break;
              }

              throw errors_1.errors.argumentNull('params');

            case 4:
              if (params.element) {
                _context.next = 6;
                break;
              }

              throw errors_1.errors.argumentFieldNull('params', 'element');

            case 6:
              if (params.dataSource) {
                _context.next = 8;
                break;
              }

              throw errors_1.errors.argumentFieldNull('params', 'dataSource');

            case 8:
              dataSource = params.dataSource, element = params.element, nameField = params.nameField, valueField = params.valueField, dataField = params.dataField;
              _context.next = 11;
              return dataSource.select({});

            case 11:
              r = _context.sent;
              element.innerHTML = "";
              r.dataItems.map(function (o) {
                var label = document.createElement('label');
                label.className = "radio-inline";
                var controlElement = document.createElement('input');
                controlElement.type = "radio";
                controlElement.name = dataField;
                var nameElement = document.createElement('span');
                label.appendChild(controlElement);
                label.appendChild(nameElement);
                var itemName = getDataSourceItemName(o);
                var itemValue = getDataSourceItemValue(o);
                controlElement.value = "".concat(itemValue);
                nameElement.innerHTML = "".concat(itemName);

                controlElement.onchange = function (e) {
                  params.dataItem[dataField] = itemValue;
                };

                var value = params.dataItem[dataField] || params.defaultValue;

                if (value == itemValue) {
                  controlElement.checked = true;
                }

                element.appendChild(label);
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }

  exports.radioList = radioList;
});
//# sourceMappingURL=radio-list.js.map
