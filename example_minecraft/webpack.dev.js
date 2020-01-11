const path = require('path');
const paths = require('./webpack.paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: path.resolve(paths.srcDir, 'index.js'),
    },
    output: {
        path: paths.buildDir,
        filename: '[name].[hash].js'
    },
    devServer: {
        disableHostCheck: true,
    },
    watch: true,
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Minecraft Example',
            template: path.resolve(paths.srcDir, 'index.html'),
            filename: 'index.html',
            chunks: ['main'],
            inject: 'body'
        })
    ]
};
