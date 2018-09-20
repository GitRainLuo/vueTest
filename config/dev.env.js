'use strict'
//引入webpack-merge模块 合并两个配置文件对象并生成一个新的配置文件
const merge = require('webpack-merge')
//引入刚才打开的prod.env.js
const prodEnv = require('./prod.env')

//指明开发环境（development）进行了merge
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
