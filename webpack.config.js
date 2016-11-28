var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname);

var config = {
    entry: APP_DIR + '/main.jsx',
    output: {
        path: APP_DIR,
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel'
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    }
};

module.exports = config;