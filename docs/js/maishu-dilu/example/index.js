var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "../out/index"], function (require, exports, dilu) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    dilu = __importStar(dilu);
    let FormValidator = dilu.FormValidator;
    let r = dilu.rules;
    let passwordInput = document.getElementsByName('password')[0];
    let form = document.getElementsByClassName('container')[0];
    let validator = new dilu.FormValidator(form, { name: "mobile", rules: [r.required(), r.mobile()] }, {
        name: 'verifyCode',
        errorElement: document.getElementById('verifyCodeError'),
        rules: [r.required()], depends: [() => validator.checkElement('mobile')]
    }, { name: 'password', rules: [r.required('请输入密码')] }, {
        name: 'confirmPassword',
        rules: [
            r.required('请再次输入密码'),
            r.equal(() => passwordInput.value, '两次输入的密码不一致')
        ]
    });
    document.getElementById('btn-register').onclick = function () {
        validator.check();
    };
    document.getElementById('btn-verifyCode').onclick = function () {
        validator.checkElement('mobile');
    };
});
