/*
  webpack config.js webpack配置文件
  webpack运行时会加载里面的配置

*/


const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin')
const config = require('../config');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js');
const happypack = require('happypack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

// const PurgecssPaths = glob.sync(path.join(__dirname, '../src/page/**/index.js'),{ nodir: true }).map(item => {

//    let path = item.substring(0,item.indexOf("index.js")); 

//    return path

// })

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}



const prodConfig = {


    
    
    devtool:'source-map',
    plugins:[
       
        new CleanWebpackPlugin({

            // cleanOnceBeforeBuildPatterns: [
            //     path.resolve( __dirname,"dist/"+baseUrl)
            // ],
        }),
        //new BundleAnalyzerPlugin()
        // keep chunk.id stable when chunk has no name
        // new webpack.NamedChunksPlugin(chunk => {
        //     if (chunk.name) {
        //         return chunk.name
        //     }
        //     const modules = Array.from(chunk.modulesIterable)
        //     if (modules.length > 1) {
        //         const hash = require('hash-sum')
        //         const joinedHash = hash(modules.map(m => m.id).join('_'))
        //         let len = nameLength
        //         while (seen.has(joinedHash.substr(0, len))) len++
        //         seen.add(joinedHash.substr(0, len))
        //         return `chunk-${joinedHash.substr(0, len)}`
        //     } else {
        //         return modules[0].id
        //     }
        // }),
        
       

        // new PurgecssPlugin({
        //     //paths:glob.sync(`${path.resolve(__dirname)}/src/page/**/*.css`,{ nodir: true })
        //     paths:[
        //         // ...glob.sync(
        //         //     path.join(__dirname, '../src/page/**/index.html'),
        //         // ),
        //         // ...glob.sync(
        //         //     path.join(__dirname, '../src/page/**/*.less'),
        //         // ),
        //         ...glob.sync(
        //             path.join(__dirname, '../src/page/**/*.vue'),
        //         )
        //         // ...glob.sync(
        //         //     path.join(__dirname, '../src/page/**/*.css'),
        //         // )
        //     ] 
        
        // })
       
      
        // new PruifyCSSPlugin({
        //     paths:glob.sync(path.join(__dirname,'src/*.html'))//src下所有的html
        // })
        // new HtmlWebpackExternalsPlugin({
        //     externals: [
        //       {
        //         module: 'jquery',
        //         entry: 'dist/jquery.min.js',
        //         global: 'jQuery',
        //       },
        //     ],
        // })
    //     new webpack.LoaderOptionsPlugin({
    //         // webpack 2.0之后， 此配置不能直接写在自定义配置项中， 必须写在此处
    //         vue: {
    //             postcss: [require('postcss-px2rem')({ remUnit: 75, propWhiteList: [] })]
    //         },
    //     })
    ],
    
    optimization: {
        splitChunks: {
            chunks: 'all',
            minChunks: 1,
            minSize:30,
            name: true,
            maxAsyncRequests: 5,    //同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
            maxInitialRequests: 3,  //首页加载的时候引入的文件最多3个
            cacheGroups: {
                libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    chunks: 'initial', // 只打包初始时依赖的第三方
                    reuseExistingChunk: true,
                },
                vue: {
                    name: 'chunk-vue', // 单独将 elementUI 拆包
                    chunks: 'initial',
                    priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                    test: /[\\/]node_modules[\\/]vue[\\/]/,
                    enforce: true,
                },
                echarts: {
                    name: 'chunk-echarts', // 单独将 elementUI 拆包
                    chunks: 'initial',
                    priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                    test: /[\\/]node_modules[\\/]echarts[\\/]/,
                    enforce: true,
                },
                elementUI: {
                    name: 'chunk-elementUI', // 单独将 elementUI 拆包
                    priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                    test: /[\\/]node_modules[\\/]element-ui[\\/]/,
                    enforce: true,
                },
                Utils: {
                    name: 'chunk-utils', // 单独将 elementUI 拆包
                    priority: 20, // 权重要大于 libs 和 app 不然会被打包进 libs 或者 app
                    chunks: 'all',
                    test: /[\\/]src[\\/]utils[\\/]/
                },
                commons: {
                    name: 'chunk-commons',
                    test: resolve('src/components'), // 可自定义拓展你的规则
                    minChunks: 1, // 最小公用次数
                    priority: 5,
                    reuseExistingChunk: true,
                    enforce: true
                },
                layout: {
                    name: 'chunk-layout',
                    test: resolve('src/views/layout'), // 可自定义拓展你的规则
                    minChunks: 1, // 最小公用次数
                    priority: 5,
                    reuseExistingChunk: true,
                    enforce: true
                },
                
            }
        },
        //runtimeChunk: 'single',
        // minimizer: [
        //     new UglifyJsPlugin({
        //         uglifyOptions: {
        //             // mangle: {
        //             //     safari10: true
        //             // }
        //             compress: false
        //         },
        //         //sourceMap: config.build.productionSourceMap,
        //         cache: true,
        //         parallel: true
        //     }),
        //     // Compress extracted CSS. We are using this plugin so that possible
        //     // duplicated CSS from different components can be deduped.
        //     new OptimizeCSSAssetsPlugin()
        // ]
    },    
    mode:"production", // production

    //只会在内存中编译打包，不会有任何输出
    // npx webpack-dev-server 

}



module.exports = merge(baseConfig,prodConfig);