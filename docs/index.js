
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

// window.onhashchange = function () {
//     loadContent();
// }

// function loadContent() {
//     let file_name = !location.hash ? 'index' : location.hash.substr(1);
//     let url = 'md_files/' + file_name + '.md';
//     fetch(url)
//         .then(res => {
//             return res.text();
//         })
//         .then(text => {
//             var html_content = marked(text);
//             var container = document.getElementsByClassName('container')[0];
//             container.innerHTML = html_content;

//             if (file_name != 'index') {
//                 let js_path = 'md_files/' + file_name + '.js';
//                 require(['highlight', 'highlight_javascript', js_path], function (hljs, n, exports) {
//                     exports.default();
//                     document.querySelectorAll('code').forEach(block => {
//                         hljs.highlightBlock(block);
//                     })
//                 });
//             }
//         })
// }

// loadContent();

// requirejs(['application'], function (app) {
//     app.run()
//     if (!location.hash)
//         location.hash = '#index'
// })
// requirejs(['css!highlight_css'])



// /**
//  * @param {string} name
//  * @param {()=>void} func 
//  */
// function action(name, func) {
//     if (typeof name == 'function') {
//         func = name
//         name = null
//     }

//     func = func || (() => { })
//     /**
//      * @param {chitu.Page} page 
//      */
//     function actionFunction(page) {
//         let url = `modules/${page.routeData.routeString}.md`
//         fetch(url)
//             .then(res => {
//                 return res.text();
//             })
//             .then(text => {
//                 var html_content = marked(text);
//                 page.element.innerHTML = html_content;

//                 require(['highlight', 'highlight_javascript'], function (hljs, n) {
//                     func();
//                     page.element.querySelectorAll('code').forEach(block => {
//                         hljs.highlightBlock(block);
//                     })
//                 });
//             })
//     }

//     if (name) {
//         define(name, ['exports'], function (exports) {
//             exports.default = actionFunction
//         });
//     }
//     else {
//         define(['exports'], function (exports) {
//             exports.default = actionFunction
//         });
//     }
// }

// action('modules/index')
// action('modules/api/boundField')
// action('modules/api/gridView')
// action('modules/api/dataSource')
// action('modules/api/pagerSettings')

