var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    main: './views/master/index.jsx',
    vendor: [
      'react',
    ],
  },
  output: {
    path: 'public/js',
    filename: '[name].js',
    chunkFilename: '[id].js',
    publicPath: '/js/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx|.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.DefinePlugin({
      'process.env': {
        HOST: JSON.stringify(process.env.HOST || 'http://localhost:3000'),
      }
    })
  ]
}