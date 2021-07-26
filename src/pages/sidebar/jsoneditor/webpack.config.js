var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './example/main.js',

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js'
  },

  module: {
    rules: [{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }, {
      test: /.vue$/,
      loader: "vue-loader"
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: 'example/index.html'
    }),

      new VueLoaderPlugin()
  ],

  devServer: {
    contentBase: path.join(__dirname),
    port: 8080,
    open: true,
    inline: true
  }
}
