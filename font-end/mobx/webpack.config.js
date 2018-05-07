const path = require('path');
const htmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'inline-source-map',
  devServer: {
    open: true,
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
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
  ],
  mode: 'development'
};
