const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Handlebars = require('handlebars');

module.exports = {
  entry: {
    home: './src/js/home.js',
    contact: './src/js/contact.js',
    about: './src/js/about.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          preprocessor: (content, loaderContext) => {
            try {
              return Handlebars.compile(content)({
                web_page_title: 'Custom Web',
              });
            } catch (error) {
              loaderContext.emitError(error);
              return content;
            }
          },
        },
      },
    ],
  },
};
