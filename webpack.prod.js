const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [

        //移除无用代码
      /*  new UglifyJsPlugin({
            sourceMap: true
        }),*/
        new webpack.DefinePlugin({
            'procee.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' //指定公共 bundle 的名称
        })
    ]
});