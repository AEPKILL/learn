import * as CopyPlugin from 'copy-webpack-plugin';
import * as HtmlPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  devtool: 'inline-source-map',
  mode: 'development',
  devServer: {
    port: 3000,
    open: true,
    compress: true
  },
  output: {
    path: resolve(__dirname, '../dist'),
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
    new HtmlPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyPlugin([
      {
        from: './src/static',
        to: 'static',
        toType: 'dir'
      }
    ])
  ]
};

export default config;
