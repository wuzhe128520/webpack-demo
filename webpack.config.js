const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: {
        app: './src/index.js',

    },
    //代码错误追踪
    devtool: 'inline-source-map',

    //告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [

        //清理dist文件夹
        new CleanWebpackPlugin(['dist']),

        //解决多个bundle生成出现的bug
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        //删除无用的代码和注释
        new UglifyJsPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    /*
    *webpack 根据正则表达式，来确定应该查找哪些文件，
    * 并将其提供给指定的 loader。在这种情况下，以
    * .css 结尾的全部文件，都将被提供给 style-loader
    * 和 css-loader。
    * */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            /*
            * 将图片混合到css中
             *  */
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            //html页面路径自动转换不正确
            {
                test: /\.html$/,
                use: [
                    'html-loader'
                ]
            },
            //加载字体
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
module.exports = config;
