define(["require", "exports", "./buttonOnClick", "./dialog", "./image"], function (require, exports, buttonOnClick_1, dialog_1, image_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buttonOnClick = buttonOnClick_1.buttonOnClick;
    exports.showDialog = dialog_1.showDialog;
    exports.hideDialog = dialog_1.hideDialog;
    exports.toast = dialog_1.toast;
    exports.alert = dialog_1.alert;
    exports.confirm = dialog_1.confirm;
    exports.dialogConfig = dialog_1.dialogConfig;
    exports.generateImageBase64 = image_1.generateImageBase64;
    exports.renderImage = image_1.renderImage;
    exports.loadImageConfig = image_1.loadImageConfig;
    exports.imageFileToBase64 = image_1.imageFileToBase64;
    exports.fileToBase64 = image_1.fileToBase64;
});
