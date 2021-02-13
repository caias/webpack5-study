'use strict';

// dependencies
const { merge } = require('webpack-merge');
const rimraf = require('rimraf');

// webpack base config
const base = require('./base');
const CONFIG = require('./config');

function development() {
  rimraf(CONFIG.BUILD.BUILD_PATH, () => {});

  return merge(base, {
    // webpack mode
    mode: 'production',
    // sourcemap
    devtool: 'source-map',
    // entry public path
    output: {
      path: CONFIG.BUILD.BUILD_PATH,
      filename: `[name]${CONFIG.BUILD.FILENAME_SUFFIX}`,
      libraryTarget: 'umd',
    },
    // watch 설정
    watch: true,
  });
}

module.exports = development();
