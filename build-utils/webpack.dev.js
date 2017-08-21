const NpmInstallPlugin = require('npm-install-webpack-plugin');
const detect = require('detect-port');
const commonPaths = require('./common-paths');

function findOpenPort(port) {
  detect(port)
    .then(_port => {
      if(port === _port) {
        console.log(`Port ${port} is free`);
        return port;
      } else {
        console.log(`port: ${port} was occupied, try port: ${_port}`);
        return _port;
      }
    })
}

const config = {
  devtool: 'eval-source-map',
  devServer: {
    port: findOpenPort(3000),
    open: true,
    host: '0.0.0.0',
    overlay: true,
    hot: true,
    useLocalIp: true,
  },
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