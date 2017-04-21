var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/entry.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })
  ] : [new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })],

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
      {
        test: /\.(jpg|png|gif)$/,
        loader: [
          'url-loader?limit=50000'
        ]
      },
      {
        test: /\.(scss)$/,
        exclude: [/node_modules/],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?sourceMap=true',
            'sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true'
          ]
        })
      }
    ]
  }
}
