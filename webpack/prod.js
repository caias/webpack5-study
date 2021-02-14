/**
 * @author caias
 */

// dependencies
import rimraf from 'rimraf';
import merge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';

// modules
import * as ENV from './config/env';
import baseConfig from './base';

function production() {
  rimraf(ENV.BUILD.BUILD_PATH, () => { });

  return merge(baseConfig, {
    devtool: false,
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        extractComments: false,
      })],
    }
  });
}

export default production;