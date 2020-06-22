declare module "marked" {
    interface Options {
        renderer?: {
            html?: (html: string) => string
        }
    }
    interface Marked {
        (md: string): string;
        use(options: Options);
    }
    let m: Marked;
    export = m;
}



declare var hljs: {
    highlightBlock: (element: HTMLElement) => void,
};

declare module "js/jquery.pin" {

}

interface JQuery {
    pin();
    pin({ containerSelector: any });
}