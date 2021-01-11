const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  new HtmlWebpackPlugin({
    inject: 'body',
    chunks: ['about'],
    filename: 'about/index.html',
    template: 'src/pages/about.html',
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    chunks: ['contact'],
    filename: 'contact/index.html',
    template: 'src/pages/contact.html',
  }),
  new HtmlWebpackPlugin({
    inject: 'body',
    chunks: ['home'],
    filename: 'index.html',
    template: 'src/pages/home.html',
  }),
];
