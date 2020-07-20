var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define(["require", "exports", "maishu-chitu", "marked", "maishu-toolkit/out/path", "./errors", "../js/highlight/highlight.pack", "../js/marked", "../js/highlight/styles/rainbow.css", "../css/bootstrap.css", "../css/site.css"], function (require, exports, maishu_chitu_1, marked, path_1, errors_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    marked = __importStar(marked);
    class MyApplication extends maishu_chitu_1.Application {
        static async loadMarkdown(path) {
            let r = await fetch(path);
            let text = await r.text();
            marked.use({
                renderer: {
                    html(html) {
                        if (html.startsWith("<code")) {
                            return `<pre>${html}`;
                        }
                        else if (html.startsWith("</code>")) {
                            return `${html}</pre>`;
                        }
                        return html;
                    }
                }
            });
            let html = marked(text);
            return { html };
        }
        async loadjs(path) {
            let url = `${path}.md`;
            let superLoadjs = super.loadjs;
            return {
                default: (page) => {
                    let container = document.createElement("div");
                    container.className = "container";
                    page.element.appendChild(container);
                    MyApplication.loadMarkdown(url).then(r => {
                        container.innerHTML = r.html;
                        container.querySelectorAll("[path]").forEach(s => {
                            if (s.tagName == "CODE")
                                return;
                            let samplePath = s.getAttribute("path");
                            let arr = path.split("/");
                            arr.pop();
                            let directoryPath = arr.join("/");
                            samplePath = path_1.pathContact("/", directoryPath, samplePath);
                            superLoadjs.apply(exports.app, [samplePath]).then(mod => {
                                let func = mod.default || mod;
                                if (func == null)
                                    throw errors_1.errors.moduleExportNull(samplePath);
                                if (typeof func == null)
                                    throw errors_1.errors.moduleExportNotFunction(samplePath);
                                func(s);
                            });
                        });
                        container.querySelectorAll("code").forEach(c => {
                            let name = c.getAttribute("path");
                            if (name) {
                                let arr = path.split("/");
                                arr.pop();
                                let directoryPath = arr.join("/");
                                let codePath = path_1.pathContact("/", directoryPath, name);
                                fetch(codePath).then(r => {
                                    return r.text();
                                }).then(text => {
                                    c.textContent = text;
                                    hljs.highlightBlock(c);
                                }).catch(err => {
                                    console.error(err);
                                });
                            }
                            else {
                                hljs.highlightBlock(c);
                            }
                        });
                    }).catch(err => {
                        console.error(err);
                        container.innerHTML = JSON.stringify(err);
                    });
                }
            };
        }
    }
    exports.app = new MyApplication();
});
