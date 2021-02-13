const CONFIG = require('./config');
const Terser = require("terser-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: CONFIG.BUILD.BUILD_PATH,
  },
  mode: 'development',
  optimization: {
    minimize: true,
    minimizer: [new Terser({
      extractComments: false,
    })],
  }
};