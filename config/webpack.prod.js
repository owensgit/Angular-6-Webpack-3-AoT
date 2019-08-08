/**
 * Non AOT Production Build
 */
const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    polyfills: './src/polyfill.ts',
    vendor: './src/vendor.ts',
    app: './src/main.ts'
  },
  output: {
    path: helpers.root('dist/non-aot'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['babel-loader', 'awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  plugins: [
    /**
     * The CommonsChunkPlugin is an opt-in feature that creates a separate file (known 
     * as a chunk), consisting of common modules shared between multiple entry points.
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    /**
     * HtmlWebpackPlugin will generate an HTML5 file for you that includes all your 
     * webpack bundles in the body using script tags. 
     */
    new HtmlWebpackPlugin({
      template: 'src/app/index.html'
    }),
    /**
     * This plugin uses uglify-js to minify your JavaScript.
     */
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        keep_fnames: true,
        screw_i8: true
      }
    })
  ]
};
