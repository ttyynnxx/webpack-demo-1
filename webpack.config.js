var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js'
  },
 
  plugins: [new HtmlWebpackPlugin({
    title: '我要写代码啦',
    template: 'src/assets/test.html'
  })],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
};
