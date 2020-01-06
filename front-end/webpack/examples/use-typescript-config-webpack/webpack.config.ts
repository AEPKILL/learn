import { Configuration } from 'webpack';
import { resolve } from 'path';

const config: Configuration = {
  entry: './src/main.js',
  mode: 'development',
  output: {
    path: resolve(__dirname, 'dist')
  }
};

export default config;
