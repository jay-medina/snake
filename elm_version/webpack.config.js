const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: 'development',

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },

      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack-loader?verbose=true&warn=true',
      },
    ],
  },

  devServer: {
    contentBase: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
};
