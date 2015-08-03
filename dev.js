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
                test: /\.jsx?$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony',
                resolverLoader:{
                    root:'./node_modules'
                }
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass"
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
