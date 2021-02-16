/**
 * @author caias
 * webpack dev config
 */

// dependencies
import rimraf from 'rimraf';
import merge from 'webpack-merge';

// modules
import { BUILD } from './config';
import baseConfig from './base';

function development() {
  rimraf(BUILD.BUILD_PATH, () => {});
  
  return merge(baseConfig, {
    // webpack mode
    mode: 'development',
    // sourcemap
    devtool: 'source-map',
    // entry public path
    output: {
      filename: '[name].js',
    },
  });
}

export default development;
