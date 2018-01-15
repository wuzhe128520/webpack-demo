const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    //webpack的执行入口;
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },

    plugins: [

        //清理dist文件夹
        new CleanWebpackPlugin(['dist']),

        //解决生成多个bundle产生的bug
        new HtmlWebpackPlugin({
            title: 'Production'
        })
    ],
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
            },

            //编译less
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }

        ]
    },

    //输出配置
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};