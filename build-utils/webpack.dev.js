const NpmInstallPlugin = require('npm-install-webpack-plugin');

const config = {
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new NpmInstallPlugin()
  ]
}

module.exports = config;