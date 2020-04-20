"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errors = {
  argumentNull: function argumentNull(paramName) {
    return new Error("Argument '" + paramName + "' can not be null.");
  },
  argumentFieldNull: function argumentFieldNull(argumentName, fieldName) {
    var msg = "Argument ".concat(argumentName, " ").concat(fieldName, " field can not be null or empty.");
    return new Error(msg);
  },
  dataFieldValueNotArray: function dataFieldValueNotArray(dataField) {
    var msg = "Type of dataitem ".concat(dataField, " field is not array.");
    return new Error(msg);
  }
};
//# sourceMappingURL=errors.js.map