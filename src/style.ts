let classNames = {
    inputControl: "input-control"
}

let element = document.createElement('style');
element.type = 'text/css';
element.setAttribute("data-name", "wuzhui-helper");

if (document.head != null) {
    document.head.appendChild(element);
}

let labelWidth = 80;
let margin = 20;
element.innerHTML = `
    .${classNames.inputControl} label {
        width: ${labelWidth}px;
        float: left;
    }
    .${classNames.inputControl} .control {
        margin-left: ${labelWidth + margin}px;
        width: calc(100% - ${labelWidth + margin}px);
    }
    .${classNames.inputControl} .validationMessage {
        color: red
    }
`;