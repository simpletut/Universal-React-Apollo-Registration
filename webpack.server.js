const path = require('path');
const webConfig = require('./webConfig');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {

  // production || development
  mode: webConfig.environment,

  // Inform webpack that we're building a bundle
  // for nodeJS, rather then for the browser
  target: 'node',

  // Tell webpack the root file of our
  // server application 
  entry: './server.js',

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },

  // Tell webpack not to bundle any libraries that exist in the 'node_modules' folder
  // into the server bundle
  externals: [webpackNodeExternals()]

};