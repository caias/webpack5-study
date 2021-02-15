/**
 * @author caias
 */
import EsLintPlugin from 'eslint-webpack-plugin';
import { SRC_PATH } from './env';

const config = {
  context: SRC_PATH,
  extensions: ['js', 'jsx', 'ts', 'tsx'],
};

const esLint = new EsLintPlugin(config);

export default esLint;