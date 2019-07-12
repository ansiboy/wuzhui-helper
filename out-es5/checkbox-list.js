"use strict";

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
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
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

define(["require", "exports", "./errors"], function (require, exports, errors_1) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function checkboxList(params) {
    return __awaiter(this, void 0, void 0,
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var dataSource, element, nameField, valueField, dataField, dataItem, r, elementDataItems;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (params) {
                _context.next = 2;
                break;
              }

              throw errors_1.errors.arugmentNull('params');

            case 2:
              if (params.element) {
                _context.next = 4;
                break;
              }

              throw errors_1.errors.argumentFieldNull('params', 'element');

            case 4:
              if (params.dataSource) {
                _context.next = 6;
                break;
              }

              throw errors_1.errors.argumentFieldNull('params', 'dataSource');

            case 6:
              dataSource = params.dataSource, element = params.element, nameField = params.nameField, valueField = params.valueField, dataField = params.dataField, dataItem = params.dataItem;
              _context.next = 9;
              return dataSource.select({});

            case 9:
              r = _context.sent;
              elementDataItems = [];
              r.dataItems.map(function (o) {
                var label = document.createElement('label');
                var input = document.createElement('input');
                input.type = "checkbox";
                var span = document.createElement('span');
                label.appendChild(input);
                label.appendChild(span);
                var name = nameField ? o[nameField] : o;
                var value = valueField ? o[valueField] : o;
                input.value = "".concat(value);
                span.innerHTML = "".concat(name);

                if (value == dataItem[dataField]) {
                  input.checked = true;
                }

                elementDataItems.push({
                  element: input,
                  dataItem: o
                });

                input.onchange = function (e) {
                  dataItem[dataField] = elementDataItems.filter(function (o) {
                    return o.element.checked;
                  }).map(function (o) {
                    return o.dataItem[valueField];
                  });
                };

                element.appendChild(label);
              });

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
  }

  exports.checkboxList = checkboxList;
});
//# sourceMappingURL=checkbox-list.js.map
