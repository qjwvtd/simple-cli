'use strict';

const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const base = require('../config.js');
const __rules = require('./webpack.common.loaders.js');
const isProduction = process.env.NODE_ENV === 'production'

const env = require('./env');

function chunkCssPath() {
    let fileName = '',
        chunkFileName = '';
    switch (env.current) {
        case 'development':
            fileName = 'static/css/[name].css';
            chunkFileName = 'static/css/[name]_chunk.css';
            break;
        case 'production':
            fileName = 'static/css/[name]_[hash:8].css';
            chunkFileName = 'static/css/[name]_chunk_[hash:8].css';
            break;
    }
    return { filename: fileName, chunkFilename: chunkFileName };
}
const webpackConfig = {
    target: 'web', //default
    // entry: { 'index': path.resolve(__dirname, './../src/index.js') },//default,不需要配置
    module: {
        //noParse: /jquery|loadsh/,es5代码不需要打包
        rules: __rules
    },
	productionSourceMap: !isProduction, //关闭生产环境下的SourceMap映射文件
	css: {         
		sourceMap: !isProduction // css sourceMap 配置 
	},
    // externals: {
    //     "react": "react",
    //     "react-dom": "react-dom"
    // },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.css', '.scss', '.less'],
        alias: base.alias ? base.alias : { '@': path.join(__dirname, './../src') }
    },
    plugins: [
        //eslint
        new ESLintPlugin(),
        //处理.css文件
        new MiniCssExtractPlugin({
            filename: chunkCssPath().filename,
            chunkFilename: chunkCssPath().chunkFilename,
            ignoreOrder: true //移除样式文件引用顺序不对导致的警告
        }),
        //构建html
        new HtmlWebpackPlugin({
            title: base.name || 'SPA,' + base.version || '0.0.1',
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 压缩内联css
                minifyCSS: true
            },
            //HtmlWebpackPlugin插件的路径要从项目根目录开始
            favicon: base.dev.path + '/favicon.ico',
            template: base.dev.path + '/index.html',
            //自定义打包路径必须false
            hash: false
        })
        //监控进度
        // new webpack.ProgressPlugin((percentage, message, ...args) => {
        // console.log(parseFloat(percentage.toFixed(2)) * 100 + '%', message);
        // }).
    ],
    stats: { children: false }
};

module.exports = webpackConfig;
