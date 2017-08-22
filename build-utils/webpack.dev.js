const NpmInstallPlugin = require("npm-install-webpack-plugin");
const detect = require("detect-port");
const webpack = require("webpack");
const commonPaths = require("./common-paths");

const config = {
  devtool: "eval-source-map",
  devServer: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
    overlay: true,
    hot: true,
    useLocalIp: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.jsx?$/,
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          emitWarning: true
        }
      },
      {
        test: /.jsx?$/,
        use: {
          loader: "babel-loader",
          query: {
            presets: ["es2015", "react"]
          }
        },
        exclude: /(node_modules|dist|build-utils)/
      }
    ]
  },
  plugins: [new NpmInstallPlugin(), new webpack.HotModuleReplacementPlugin()]
};

module.exports = config;
