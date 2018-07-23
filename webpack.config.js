const path = require('path');
const webpack = require('webpack');
// 用于清空 dist 目录。
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 用于把src的文件复制到dist
const CopyWebpackPlugin = require('copy-webpack-plugin');
/* 生成html */
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打开浏览器
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {

    // 入口文件的配置项，可以指定多个入口起点
    entry: {
        'index': './src/index.js',
         },

    output: {
        // path：指用来存放打包后文件的输出目录
        path: path.resolve(__dirname,'dist'),
        // publicPath：指定资源文件引用的目录
        filename: 'js/[name].js'
    },

    externals: {
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
    },

    module: {
        rules: [ // 用于规定在不同模块被创建时如何处理模块的规则数组

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            //添加对样式表.css格式文件的处理
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'}
                ]
            },
            {
                test: /\.art$/,
                loader: "art-template-loader",
                options: {
                    // art-template options (if necessary)
                    // @see https://github.com/aui/art-template
                }
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:[{
                    loader:'url-loader',
                    options:{ // 这里的options选项参数可以定义多大的图片转换为base64
                        limit:5000, // 表示小于5kb的图片转为base64,大于50kb的是路径
                        outputPath:'assets/images', //定义输出的图片文件夹
                        name:'[name].[ext]',
                    }
                }]
            }
        ]
    },

    plugins: [

        // 清空dist目录，第一个参数是要清理的目录的字符串数组
        new CleanWebpackPlugin(['./dist']),

        /* 复制文件，把src的css、images文件复制到pc下  */
        new CopyWebpackPlugin([
          {from:path.resolve(__dirname,'./src/data.json'),to:path.resolve(__dirname,'./dist/data.json')},
          {from:path.resolve(__dirname,'./src/img'),to:path.resolve(__dirname,'./dist/img')},
        ]),


        new HtmlWebpackPlugin({
            title: '人物关系图',
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body',
            hash: true,
            chunks: ['index'],
            minify: {
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: false // 删除空白符与换行符
            }
        }),


        // 打开浏览器url
        new OpenBrowserPlugin({ url: 'http://localhost:8000/index.html' }),
    ],

    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        // host: 'localhost',
        disableHostCheck: true, // 绕过主机检查
        hot: true,
        https: false,           // 是否采用https，默认是http
        inline: true,
        progress: true,         // 输出运行进度到控制台。
        watchContentBase: true, // 观察contentBase选项提供的文件。文件更改将触发整页重新加载
        compress: true,
        port: 8000
    }
};
