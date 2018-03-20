const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    open: true,
    compress: true
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new htmlPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};
