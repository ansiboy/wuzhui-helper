// import { Errors } from "maishu-toolkit";
// export { Errors } from "maishu-toolkit";
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Errors {
        unexpectedNullValue(name) {
            let msg = `variable ${name} is unexpected null value.`;
            return new Error(msg);
        }
        parseJSONFail(text) {
            let msg = `Parse json string fail:\r\n${text}`;
            return new Error(msg);
        }
    }
    exports.Errors = Errors;
    exports.errors = new Errors();
});
