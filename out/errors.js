define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errors = {
        argumentNull(paramName) {
            return new Error("Argument '" + paramName + "' can not be null.");
        },
        argumentFieldNull(argumentName, fieldName) {
            let msg = `Argument ${argumentName} ${fieldName} field can not be null or empty.`;
            return new Error(msg);
        },
        dataFieldValueNotArray(dataField) {
            let msg = `Type of dataitem ${dataField} field is not array.`;
            return new Error(msg);
        }
    };
});
