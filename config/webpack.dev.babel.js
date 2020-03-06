/**
 * 開発用のWEBPACKの設定です
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = require('./webpack.base.babel')({
  mode: 'development',
  // 開発にホットリロードを追加する
  entry: [
    'eventsource-polyfill', // IEでのホットリロードに必要です
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/app.js') // js / app.jsから始めます
  ],

  // パフォーマンスを向上させるために、開発モードでハッシュを使用しないでください
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },

  // 開発用のプラグインを追加します
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 「webpack」にホットリロードが必要であることを伝えます
    new HtmlWebpackPlugin({
      inject: true, // 「webpack」によって生成されたすべてのファイルを挿入します。 （例） bundle.js
      template: 'app/index.html'
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // 「node_modules」を除外します
      failOnError: false // 循環依存関係があるときに警告を表示します
    })
  ],

  // デバッグを容易にするために、ソースマップを発行する
  // 詳細はこちら → https://webpack.js.org/configuration/devtool/#devtool
  devtool: 'eval-source-map',

  performance: {
    hints: false
  }
});
