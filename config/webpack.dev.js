var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    polyfills: './src/polyfill.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  output: {
    path: helpers.root('dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        query: {
          minimize: false // workaround for ng2
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'src/app/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
};
