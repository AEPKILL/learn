import CopyPlugin from 'copy-webpack-plugin';
import HtmlPlugin from 'html-webpack-plugin';
import { resolve } from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.js', '.ts']
  },
  devtool: 'inline-source-map',
  mode: 'development',
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
