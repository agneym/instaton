const commonPaths = require('./common-paths');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: './src/index.js',
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    filename: "[hash].bundle.js",
    path: commonPaths.outputPath
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1000
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new htmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name:'vendor', 
      filename: 'vendor.js'
    })
  ]
}

module.exports = config;