var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'Components/entry.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
