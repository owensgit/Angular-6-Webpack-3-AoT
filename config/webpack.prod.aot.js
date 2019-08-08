/**
 * AOT Production Build
 */
const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV = (process.env.NODE_ENV = process.env.ENV = 'production');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = {
  entry: {
    polyfills: './src/polyfill.ts',
    vendor: './src/vendor-aot.ts',
    app: './src/main.ts'
  },
  output: {
    path: helpers.root('dist/aot'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    loaders: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    // AOT Plugin
    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.aot.json',
      entryModule: helpers.root('src/app/app.module#AppModule'),
      sourceMap: true,
      nameLazyFiles: true,
    }),
    new HtmlWebpackPlugin({
      template: 'src/app/index.html'
    }),
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
    }),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify(ENV)
      }
    })
  ]
};
