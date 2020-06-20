const { startServer, VirtualDirectory } = require("maishu-node-mvc");
const path = require("path");

startServer({
    port: 53267,
    staticRootDirectory: new VirtualDirectory(path.join(__dirname, "static")),
    virtualPaths: {
        "node_modules": path.join(__dirname, "../node_modules"),
        "maishu-wuzhui-helper": path.join(__dirname, "../dist/")
    }
})