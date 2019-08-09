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
    publicPath: 'http://localhost:4200/', // used in script tags
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'tsconfig.json'
            }
          }, 
          { loader: 'angular2-template-loader' }
        ]
      },
      /**
       * A Webpack loader for Angular that enables string-based module loading with 
       * the Angular Router, e.g. lazy loading of modules via loadChildren
       */
      {
        test: /\.(ts|js)$/,
        use: [
          {
            loader: 'angular-router-loader'
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
        // query: {
        //   minimize: false // workaround for ng2
        // }
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
