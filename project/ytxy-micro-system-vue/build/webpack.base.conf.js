/*
  webpack config.js webpack配置文件
  webpack运行时会加载里面的配置

*/
'use strict'

const path = require('path');
const glob = require('glob');
const utils = require('./utils');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const config = require('../config');
const single = require('./single-conf.js');
const HappyPack = require('happypack');




module.exports = {

    
    entry: ["@babel/polyfill", "./src/main.js"],
    output:{

        //输出文件名
        filename: 'js/[name]_[hash:8].js', //'build.js',//
        //__dirname当前目录绝对路径
        path:config.build.assetsRoot, // path.resolve( __dirname , 'dist/'+baseUrl )//
        publicPath: process.env.NODE_ENV == 'production' ? 
                        config.build.assetsPublicPath:  config.dev.assetsPublicPath,
        
        // 微应用的包名，这里与主应用中注册的微应用名称一致
        library: "ytxySubApp",
        // 将你的 library 暴露为所有的模块定义下都可运行的方式
        libraryTarget: 'umd',
        // 按需加载相关，设置为 webpackJsonp_${library} 即可
        jsonpFunction: `webpackJsonp_ytxySubApp`,
                

    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.resolve(__dirname,'../src')
        }
    },
    module:{

        rules:[{
                
                test:/\.js$/,
                use: [
                    "happypack/loader"
                    //'babel-loader'
                ],
                include: [
                    path.resolve(__dirname,'../src'),
                    path.resolve(__dirname,'../node_modules/webpack-dev-server/client')
                ],
                //exclude:['node_modules'] 
            },{  //loader配置

                test: /\.css$/,
                use:[
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效   
                    process.env.NODE_ENV !== 'production'
                    ? 'vue-style-loader':
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:"../"
                        }
                    },
                    //将 css 文件变成common.js 模块加载js中
                    'css-loader',
                    'postcss-loader'
                ]


            },{  //loader配置

                test: /\.less$/,
                use:[
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效   
                    process.env.NODE_ENV !== 'production'
                    ? 'vue-style-loader':
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:"../"
                        }
                    },
                    //将 css 文件变成common.js 模块加载js中
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                    
                    // {
                    //     loader:'postcss-loader',
                    //     options:{
                    //         plugin:()=>{

                    //             require('autoprefixer')({
                    //                 browsers:["last 2 version",">1%","iOS 7"]
                    //             })
                    //         }
                    //     }
                    // }
                    //'postcss-loader',  ///转换px
                ]

            },{  //loader配置

                test: /\.vue$/,
                loader:'vue-loader'

            },{  //loader配置

                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader:'url-loader',
                options:{

                    limit: 8 * 1024,  ///图片小于8kb，会被base64处理 优点减少服务器压力 缺点图片体积增大
                    esModule: false,   ///url-loader使用es6loader 而html-loader引入图片使用 common.js解析会出问题
                    // name:'assets/images/[name]_[hash:8].[ext]',
                    // publicPath: process.env.NODE_ENV == 'production' ? 
                    //                 config.build.assetsPublicPath:  config.dev.assetsPublicPath
                    name:utils.assetsPath('assets/images/[name].[hash:8].[ext]')
                    
                }

            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [path.resolve('src/assets/svg')],
                options: {
                symbolId: 'icon-[name]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg|woff)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [path.resolve('src/assets/svg')],
                options: {
                    limit: 10000,
                    // name:'assets/fonts/[name]_[hash:8].[ext]',
                    // publicPath: process.env.NODE_ENV == 'production' ? 
                    //                 config.build.assetsPublicPath :  config.dev.assetsPublicPath
                    name:utils.assetsPath('assets/fonts/[name].[hash:8].[ext]')
                }
            },
            {  //loader配置

                test: /\.html$/,
                loader:'html-loader', //处理html 中 img 
                loader: 'html-loader',
                options: {
                    attributes: {
                        list: [
                        {
                            // Tag name
                            tag: 'img',
                            // Attribute name
                            attribute: 'src',
                            // Type of processing, can be `src` or `scrset`
                            type: 'src',
                        },
                        ]
                    }
                }  
            },
       
        ]

    },
    plugins:[
       
        
   
        new HtmlWebpackPlugin({
            template:path.resolve( __dirname,"../index.html"),
            inject: true,
            favicon: path.resolve( __dirname,"../favicon.ico"),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true,
                
            }
        }),
        new VueLoaderPlugin(),
        new HappyPack({

            loaders: [ 'babel-loader?cacheDirectory' ]
        }),
        
      
        new copyWebpackPlugin([{
            from:path.join(__dirname, '../static'),
            //to:config.build.assetsRoot + '/static'
            to:config.build.assetsSubDirectory
        }]),
    
    ],
    stats:'errors-only'
    

    //只会在内存中编译打包，不会有任何输出
    // npx webpack-dev-server 

}
        

