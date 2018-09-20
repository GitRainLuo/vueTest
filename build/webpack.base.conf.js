'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  //入口文件entry
  entry: {
    app: './src/main.js'
  },
  //输出文件output
  output: {
    path: config.build.assetsRoot,//导出目录的绝对路径
    filename: '[name].js',//导出文件的文件名
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath //生产模式或开发模式下html、js等文件内部引用的公共路径
  },
  //文件解析resolve
  resolve: {
    extensions: ['.js', '.vue', '.json'],//自动解析确定的拓展名,使导入模块时不带拓展名
    alias: { // 创建import或require的别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  //模块解析module
  module: {
    rules: [
      {
        test: /\.vue$/,// vue文件后缀
        loader: 'vue-loader',//使用vue-loader处理
        options: vueLoaderConfig //options是对vue-loader做的额外选项配置
      },
      {
        test: /\.js$/,// js文件后缀
        loader: 'babel-loader',//使用babel-loader处理
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
        //必须处理包含src和test文件夹
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,//图片后缀
        loader: 'url-loader',//使用url-loader处理
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, //字体文件
        loader: 'url-loader',//使用url-loader处理
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
