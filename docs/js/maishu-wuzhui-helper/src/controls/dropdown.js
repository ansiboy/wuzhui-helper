var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "maishu-wuzhui"], function (require, exports, w) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    w = __importStar(w);
    function dropdown(args) {
        return new w.DropDown(args);
    }
    exports.dropdown = dropdown;
});
