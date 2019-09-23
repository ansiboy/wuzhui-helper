define(["require", "exports", "react", "maishu-chitu-service"], function (require, exports, React, maishu_chitu_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InputControl extends React.Component {
        constructor(props) {
            super(props);
            this.id = maishu_chitu_service_1.guid();
        }
    }
    exports.InputControl = InputControl;
});
