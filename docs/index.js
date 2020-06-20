requirejs.config({
    shim: {
        highlight_javascript: {
            deps: ['highlight']
        }
    },
    paths: {
        chitu: 'js/chitu',
        css: 'js/css',
        highlight: 'js/highlight/highlight.pack',
        highlight_javascript: 'js/highlight.js/languages/javascript',
        highlight_typescript: 'js/highlight.js/languages/typescript',
        highlight_css: 'js/highlight.js/styles/rainbow',
        "maishu-chitu": "node_modules/maishu-chitu/dist/index",
        "maishu-chitu-react": "node_modules/maishu-chitu-react/dist/index",
        "maishu-chitu-service": "node_modules/maishu-chitu-service/dist/index",
        "maishu-dilu": "node_modules/maishu-dilu/dist/index",
        "maishu-ui-toolkit": "node_modules/maishu-ui-toolkit/dist/index",
        "maishu-wuzhui-helper": "node_modules/maishu-wuzhui-helper/dist/index",
        "react": "node_modules/react/umd/react.development",
        "react-dom": "node_modules/react-dom/umd/react-dom.development",
        "marked": "node_modules/marked/lib/marked",
        lessjs: `node_modules/less/dist/less`,
    }
})

requirejs(["./application"], function (mod) {
    mod.app.run();
})


