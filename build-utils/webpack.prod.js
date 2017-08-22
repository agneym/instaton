const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const commonPaths = require("./common-paths");

module.exports = {
  devtool: "source-map",
  devServer: {
    contentBase: commonPaths.outputPath,
    port: 3000,
    host: "0.0.0.0",
    useLocalIp: true,
    compress: true
  },
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
      },
      {
        test: /.jsx?$/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["es2015", "react"]
          }
        },
        exclude: /(node_modules|dist)/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new UglifyJSPlugin({
      test: /\.jsx?$/
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
