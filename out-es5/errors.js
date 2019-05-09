"use strict";

define(["require", "exports"], function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.errors = {
    arugmentNull: function arugmentNull(paramName) {
      return new Error("Argument '" + paramName + "' can not be null.");
    },
    argumentFieldNull: function argumentFieldNull(argumentName, fieldName) {
      var msg = "Argument ".concat(argumentName, " ").concat(fieldName, " field can not be null or empty.");
      return new Error(msg);
    }
  };
});
//# sourceMappingURL=errors.js.map
