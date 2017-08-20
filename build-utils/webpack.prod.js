const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: {
              minimize: true
            }
          }
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({
      test: /\.jsx?$/,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}