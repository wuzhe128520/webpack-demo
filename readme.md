1、根据入口配置，动态输出打包好的文件名
entry : {
    app: 'index.js',
    print: 'print.js'
}
output: {
    filename: '[name].bundle.js' //这里的name动态对应entry的属性名(app,print)
}
2、HtmlWebpackPlugin插件
a、会自动创建html文件，所有的bundle会自动添加到html中。
3、clean-webpack-plugin插件
a、清理冗余的文件夹
4、Manifest 文件追踪(详情可以到github查找WebpackManifestPlugin插件)
5、devtool配置项,使用source map追踪错误
  当webpack打包源代码时，用于追踪到错误和警告在源代码中的原始位置。
6、webpack-dev-server简单的web服务器,并能实时重新加载
7、模块热替换
  模块热替换(HMR)时webpack提供的最有用的功能之一。它允许在运行时更新各个模块，而无需进行
  完全刷新。
8、NamedModulesPlugin
查看要修补的依赖(概念模糊)
9、HMR + style-loader + css-loader 修改样式表
10、tree shaking 移除javascript上下文中的未引用代码
使用UglifyJSPlugin插件，删除未引用代码并压缩js;
11、webpack-merge合并配置，可以将公用配置加载进来
12、生产环境中，devtool设置为'source-map';
13、library将通过与 process.env.NODE_ENV 环境变量关联，以决定library中应该
引用哪些内容。
14、使用webpack内置的DefinePlugin为所有的依赖定义这个变量;
15、CommonsChunkPlugin防止同时引入多个重复文件;将重复的模块分离到单独的chunk
(单独的文件)，并且将其从main bundle中移除;有效的减少代码的体积。
16、extract-text-webpack-plugin
将所有的入口chunk(单独的文件) 中引用的 *.css，移动到独立分离的css文件。
module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
  ]




