const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common');
const pages = require('./src/index');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name]/[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist/public'),
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]/[name].[contenthash].css' }),
    new CleanWebpackPlugin(),
    ...pages,
  ],
});
