var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "react", "react-dom", "maishu-chitu", "./errors"], function (require, exports, React, ReactDOM, chitu, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    chitu = __importStar(chitu);
    class Page extends chitu.Page {
        constructor() {
            super(...arguments);
            this.component = null;
        }
    }
    exports.Page = Page;
    // export let PageContext = React.createContext<{ page: Page | null }>({ page: null })
    class DefaultPageNodeParser {
        constructor(modulesPath) {
            this.nodes = {};
            this.modulesPath = modulesPath.endsWith("/") ? modulesPath.substr(0, modulesPath.length - 1) : modulesPath;
        }
        parse(pageName) {
            let node = this.nodes[pageName];
            if (node == null) {
                let path = `${pageName}`.split('_').join('/');
                if (this.modulesPath) {
                    path = `${this.modulesPath}/${path}`;
                }
                node = { action: this.createDefaultAction(path, (path) => this.loadjs(path)), name: pageName };
                this.nodes[pageName] = node;
            }
            return node;
        }
        createDefaultAction(url, loadjs) {
            return async (page, app) => {
                let actionExports = await loadjs(url);
                if (!actionExports)
                    throw errors_1.Errors.exportsCanntNull(url);
                let action = actionExports['default'];
                if (action == null) {
                    throw errors_1.Errors.canntFindAction(page.name);
                }
                if (isClassComponent(action)) {
                    console.assert(this.app != null);
                    let app = this.app;
                    let props = {
                        app,
                        data: page.data,
                        events: {
                            shown: page.shown,
                            showing: page.showing,
                            hidden: page.hidden,
                            hiding: page.hiding,
                        },
                        source: page,
                        createService(type) {
                            return page.createService(type);
                        }
                    };
                    // let element = React.createElement(PageContext.Provider, { value: { page: page as Page } },
                    let element = React.createElement(action, props);
                    // )
                    let component = ReactDOM.render(element, page.element);
                    page.component = component;
                }
                else {
                    action(page);
                }
            };
        }
    }
    class Application extends chitu.Application {
        constructor(args) {
            args = args || {};
            if (args.modulesPath === undefined) {
                args.modulesPath = "modules";
            }
            if (!args.parser)
                args.parser = Application.createPageNodeParser(args.modulesPath);
            super(args);
            args.parser.app = this;
            args.parser.loadjs = (path) => this.loadjs(path);
            // this.pageCreated.add((sender, page) => {
            //     page.element.className = "page"
            // })
            this.pageType = Page;
        }
        static createPageNodeParser(modulesPath) {
            let p = new DefaultPageNodeParser(modulesPath);
            return p;
        }
    }
    exports.Application = Application;
    function isClassComponent(component) {
        return (typeof component === 'function' &&
            !!component.prototype.isReactComponent) ? true : false;
    }
});
// function isFunctionComponent(component: any) {
//     return (
//         typeof component === 'function' &&
//         String(component).includes('return React.createElement')
//     ) ? true : false;
// }
// function isReactComponent(component: any) {
//     return (
//         isClassComponent(component) ||
//         isFunctionComponent(component)
//     ) ? true : false;
// }
