'use strict';

const { resolve } = require('path');

// root
const ROOTPATH = resolve(__dirname, '..');

// src folder
exports.SRC = resolve(ROOTPATH, 'src');

// development env check
exports.IS_DEV = process.env.NODE_ENV === 'development';

// setting related build
exports.BUILD = {
  BUILD_PATH: resolve(ROOTPATH, 'dist'),
  FILENAME_SUFFIX: '.bundle.js',
};
