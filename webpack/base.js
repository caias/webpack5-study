/**
 * @author caias
 */

import { BUILD } from './config/env';
import { JSRULE } from './config/rules';

export default {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: BUILD.BUILD_PATH,
  },
  mode: 'development',
  module: {
    rules: [
      JSRULE,
    ]
  },
};