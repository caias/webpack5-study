/**
 * @author caias
 */

// dependencies
import rimraf from 'rimraf';
import merge from 'webpack-merge';

// modules
import * as ENV from './config/env';
import baseConfig from './base';

function development() {
  rimraf(ENV.BUILD.BUILD_PATH, () => {});

  return merge(baseConfig, {
    // webpack mode
    mode: 'development',
    // sourcemap
    devtool: 'source-map',
    // entry public path
    output: {
      path: ENV.BUILD.BUILD_PATH,
      filename: `[name]${ENV.BUILD.FILENAME_SUFFIX}`,
      libraryTarget: 'umd',
    },
    // watch 설정
    watch: true,
  });
}

export default development;
