/**
 * @author caias
 */
import { BUILD, ENTRY_PATH } from './config/env';
import { JSRULE, TSRULE } from './config/rules';
import devServer from './config/devServer';
import { esLintPlugin, htmlWebpackPlugin } from './config/plugins';
import entryLoader from './utils/entryLoader';

const entries = entryLoader(ENTRY_PATH, '**/*.tsx');

export default {
  entry: entries,
  resolve: {
    modules: ['node_modules'],
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
    esLintPlugin,
    htmlWebpackPlugin,
  ],
  devServer,
};