import * as htmlPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

export default {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    compress: true
  },
  output: {
    path: resolve('./dist'),
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
  ]
};
