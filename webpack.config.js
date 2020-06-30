const path = require('path');
const webpack = require('webpack');
const grunt = require('grunt')
let pkg = grunt.file.readJSON('package.json');

let license = `WUZHUI-HELPER v${pkg.version}
https://github.com/ansiboy/wuzhui-helper

Copyright (c) 2016-2018, shu mai <ansiboy@163.com>
Licensed under the MIT License.`

module.exports = {
    entry: './out/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'umd',
        library: "wuzhui-helper",
    },
    mode: 'development', // production
    devtool: 'source-map',
    plugins: [
        new webpack.BannerPlugin(license)
    ],
    externals: [
        'react', 'react-dom', 'maishu-chitu-service', 'maishu-dilu', 'maishu-ui-toolkit',// 'maishu-wuzhui',
    ]
}