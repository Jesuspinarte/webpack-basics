module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
    test: './src/test.js',
  },
  module: {
    rules: [
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
