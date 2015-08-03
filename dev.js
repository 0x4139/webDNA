'use strict';
var path = require('path');
module.exports = {
    devtool: 'eval',
    devServer: {
        contentBase: "./build",
        noInfo: true
    },
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: "./build",
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    }
};