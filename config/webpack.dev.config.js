const fs = require('fs')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PORT = 3030

module.exports = merge(baseConfig, {
  plugins: [
    new HtmlWebpackPlugin({
      template: './config/index.html',
      filename: './index.html',
    }),
  ],
  mode: 'development',
  devtool: 'cheap-module-source-map',
  output: {
    filename: 'bundle.js',
    publicPath: `http://localhost:${PORT}/`,
  },
  devServer: {
    port: PORT,
    historyApiFallback: true,
    contentBase: path.resolve('public'),
  },
  optimization: {
    moduleIds: 'named',
  },
})
