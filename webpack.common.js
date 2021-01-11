const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pages = require('./src/index');

module.exports = {
  entry: {
    home: './src/js/home.js',
    contact: './src/js/contact.js',
    about: './src/js/about.js',
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name]/[name].[contenthash].css' }),
    new CleanWebpackPlugin(),
    ...pages
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
          name: '[name].[hash].[ext]',
          publicPath: './img/',
        },
      },
    ],
  },
};
