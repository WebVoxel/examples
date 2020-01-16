const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const buildPath = path.resolve(__dirname, 'public');
const srcPath = path.resolve(__dirname, 'src');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: path.resolve(srcPath, 'index.ts'),
    },
    output: {
        path: buildPath,
        filename: '[name].[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Minecraft Example',
            template: path.resolve(srcPath, 'index.html'),
            filename: 'index.html',
            chunks: ['main'],
            inject: 'body'
        })
    ]
};