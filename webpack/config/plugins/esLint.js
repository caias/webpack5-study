/**
 * @author caias
 */
import EsLintPlugin from 'eslint-webpack-plugin';
import { SRC_PATH } from '../env';

const config = {
  context: SRC_PATH,
  extensions: ['js', 'jsx', 'ts', 'tsx'],
};

export const esLintPlugin = new EsLintPlugin(config);