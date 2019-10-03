const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  module: {
    rules: [{
      test: [/\.jsx$/],
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  }
};

// module.exports = {
//     entry: '/client/index.jsx',
//     output: {    path: __dirname + '/dist',    publicPath: '/',    filename: 'bundle.js'  },
//     devServer: {    contentBase: './dist'  },
//     module: {    rules:
//          [    {
//              test: /\.(js|jsx)$/,
//              exclude: /node_modules/,
//              use: ['babel-loader']    }    ]
//             },
//     plugins: [
//         new HtmlWebpackPlugin({template: './client/public/index.html'})
//         ]
//     };