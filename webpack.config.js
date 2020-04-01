const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const SOURCE_PATH = './test/';
const PUBLIC_PATH = './test-build/';
const TEMPLATE_PATH = './test/';
const MEDIA_PATH = './test/';
// const HOSTNAME = 'localhost';
module.exports = {
    entry: `${SOURCE_PATH}index.js`,
    output: {
        path: path.resolve(__dirname, PUBLIC_PATH),
        filename: '[name].[contenthash].js',
    },
    resolve: {
        alias: {
            Com: path.resolve(__dirname, 'app/source/components/'),
        },
    },
    module: {
        rules: [
            {
                test: /test\.js$/,
                use: 'mocha-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        contentBase: PUBLIC_PATH,
        port: 3000,
        liveReload: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
        new HtmlWebPackPlugin({
            template: `${TEMPLATE_PATH}index.html`,
            filename: './index.html',
        }),
        new CopyWebpackPlugin([
            { from: `${MEDIA_PATH}favicon.ico` },
        ]),

    ],
};
