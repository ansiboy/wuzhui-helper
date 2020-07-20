define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errors = {
        argumentNull(paramName) {
            let msg = `Argumnet ${paramName} can not be null or empty.`;
            let error = new Error();
            error.message = msg;
            return error;
        }
    };
});
