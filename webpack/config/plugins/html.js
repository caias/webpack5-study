/**
 * @author caias
 */
import { join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { SRC_PATH } from '../env';

const config = {
  filename: 'index.html',
  inject: true,
  template: join(SRC_PATH, '/index.html'),
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config);