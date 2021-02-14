/**
 * @author caias
 */

import { join } from 'path';
import { ROOT_PATH } from './env';

// babel
const babelLoader = {
  loader: 'babel-loader',
  options: {
    configFile: join(ROOT_PATH, '/.babelrc'),
  },
};

export const JSRULE = {
  test: /\.(js|jsx)$/,
  use: [babelLoader],
  exclude: /node_modules/,
};