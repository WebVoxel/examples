const path = require('path');
const paths = require('./webpack.paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        main: path.resolve(paths.srcDir, 'index.ts'),
    },
    output: {
        path: paths.buildDir,
        filename: '[name].[hash].js'
    },
    devServer: {
        disableHostCheck: true,
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.ts$/,
                // exclude: /node_modules/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WebVR Example',
            template: path.resolve(paths.srcDir, 'index.html'),
            filename: 'index.html',
            chunks: ['main'],
            inject: 'body'
        })
    ]
};
