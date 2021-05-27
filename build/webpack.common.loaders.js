/**
 * 配置loaders
 */
'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = require('../config.js');
//工作空间
const __include__dirname = path.resolve(__dirname, config.src);
if (!__include__dirname) {
    throw '请在config.js中指定源代码目录';
}
const babelLoader = {
    test: /\.(js|jsx|ts|tsx)$/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            cacheCompression: false,
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
            plugins: [
                //支持装饰器语法
                ['@babel/plugin-proposal-decorators', { legacy: true }]
            ]
        }
    }
};
const eslintLoader = {
    test: /\.(jsx|js|ts|tsx)$/,
    include: __include__dirname,
    exclude: [/node_modules/],
    use: ['eslint-loader'],
    enforce: 'pre'
};
const tsLoader = {
    test: /\.(ts|tsx)$/,
    use: [{ loader: 'ts-loader' }],
    include: __include__dirname,
    exclude: /node_modules/
};
const cssLoader = {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, { loader: 'style-loader' }, { loader: 'css-loader' }],
    include: __include__dirname,
    exclude: /node_modules/
};
const lessLoader = {
    test: /\.less$/,
    use: [
        MiniCssExtractPlugin.loader,
        { loader: 'css-loader' },
        {
            loader: 'less-loader', // compiles Less to CSS
            options: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        }
    ]
};
const scssLoader = {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }, { loader: 'sass-loader' }]
};
const sassLoader = {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, { loader: 'css-loader' }, { loader: 'sass-loader' }],
    include: __include__dirname,
    exclude: /node_modules/
};
const imgLoader = {
    test: /\.(png|jpg|gif|svg)$/i,
    type: 'asset/resource',
    generator: {
        filename: 'static/img/[name]_[hash:8][ext]' // [ext]前面自带"."
    },
    include: __include__dirname,
    exclude: /node_modules/
};
const fileLoader = {
    test: /\.(eot|ttf|otf|woff|woff2|mp3|mp4)$/i,
    type: 'asset/resource',
    generator: {
        filename: 'static/fonts/[name]_[hash:8][ext]' // [ext]前面自带"."
    },
    include: __include__dirname,
    exclude: /node_modules/
};
module.exports = [
    eslintLoader,
    babelLoader,
    tsLoader,
    cssLoader,
    lessLoader,
    scssLoader,
    sassLoader,
    imgLoader,
    fileLoader
];
