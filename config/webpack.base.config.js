const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const alias = require('./alias')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../dist/js/'),
    filename: 'bundle.js',
    chunkFilename: '[name].js',
    publicPath: '/public',
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              experimentalWatchApi: true,
            },
          },
        ],
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(svg|png)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'react-svg-loader',
            options: {
              name: '[name].[ext]?[hash]',
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
      chunkFilename: '[name].css',
      ignoreOrder: true,
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, '../src')],
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss', '.svg'],
    alias,
  },
}
