define(["require", "exports", "./dialog"], function (require, exports, dialog_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function buttonOnClick(arg1, arg2, arg3) {
        let element;
        let callback;
        let args;
        if (typeof (arg1) == 'function') {
            callback = arg1;
            args = arg2;
        }
        else if (typeof (arg2) == 'function') {
            element = arg1;
            callback = arg2;
            args = arg3;
        }
        else {
            throw new Error("Arguments error");
        }
        args = args || {};
        let execute = async (event) => {
            let button = event.currentTarget;
            button.setAttribute('disabled', '');
            try {
                await callback(event);
                if (args.toast) {
                    dialog_1.toast(args.toast);
                }
            }
            catch (exc) {
                console.error(exc);
                throw exc;
            }
            finally {
                button.removeAttribute('disabled');
            }
        };
        let result = function (event) {
            event.stopPropagation();
            event.cancelBubble = true;
            if (!args.confirm) {
                execute(event);
                return;
            }
            let text = typeof args.confirm == 'string' ?
                args.confirm :
                args.confirm();
            dialog_1.confirm({ message: text, confirm: (event) => execute(event) });
        };
        if (element)
            element.onclick = result;
        return result;
    }
    exports.buttonOnClick = buttonOnClick;
});
