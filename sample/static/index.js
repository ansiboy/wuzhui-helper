requirejs.config({
    baseUrl: "./",
    paths: {
        "maishu-chitu": "node_modules/maishu-chitu/dist/index",
        "maishu-chitu-service": "node_modules/maishu-chitu-service/dist/index",
        "maishu-ui-toolkit": "node_modules/maishu-ui-toolkit/dist/index",
        "maishu-wuzhui-helper": "maishu-wuzhui-helper/index",

    }
})

requirejs(["maishu-chitu"], function (c) {
    let app = new c.Application();
    app.run();
})