/**
 * @author caias
 */
import { BUILD, ENTRY_PATH } from './config/env';
import { JSRULE, TSRULE } from './config/rules';
import esLint from './config/plugin';
import entryLoader from './utils/entryLoader';

const entries = entryLoader(ENTRY_PATH, '**/*.ts');

export default {
  entry: entries,
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    filename: 'main.js',
    path: BUILD.BUILD_PATH,
  },
  mode: 'development',
  module: {
    rules: [
      JSRULE,
      TSRULE,
    ],
  },
  plugins: [
    esLint,
  ],
};