const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: './index.html'
});

module.exports = {
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
          use: ['babel-loader']
      }
    ]
  },
  plugins: [ HtmlPlugin ],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
};