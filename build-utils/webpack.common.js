const commonPaths = require("./common-paths");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  entry: {
    app: "./src/index.js",
    vendor: ["react", "react-dom"]
  },
  output: {
    filename: "[chunkhash].bundle.js",
    path: commonPaths.outputPath
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000
            }
          },
          {
            loader: "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false",
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new htmlWebpackPlugin({
      template: "public/index.html"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.js"
    })
  ]
};

module.exports = config;
