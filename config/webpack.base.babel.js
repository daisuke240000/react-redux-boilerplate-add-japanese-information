/**
 * 共通のWEBPACKの設定
 */

const path = require('path');
const webpack = require('webpack');

process.noDeprecation = true;

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: Object.assign(
    {
      // 「js/build.js」に出力します
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/'
    },
    options.output
  ), // 環境依存の設定をマージします。
  module: {
    rules: [
      {
        test: /\.js$/, // どこかで必要なすべての.jsファイルをBabelで変換します
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery
        }
      },
      {
        // 独自の.scssファイルを前処理する
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        // 「node_modules」にあるサードパーティの.cssファイルの前処理
        test: /\.css$/,
        include: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
        use: 'file-loader'
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // フェッチを利用可能にする
      fetch: 'exports-loader?self.fetch!whatwg-fetch'
    }),

    // 環境チェックのためにコード内で `process.env.NODE_ENV`を使用するために、
    // NODE_ENVを常にwebpackに公開します。
    // UglifyJSは、到達不能なコードを自動的にドロップします。
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]),
  resolve: {
    modules: ['app', 'node_modules'],
    extensions: ['.js', '.jsx', '.scss', '.react.js'],
    mainFields: ['browser', 'jsnext:main', 'main']
  },
  devtool: options.devtool,
  target: 'web', // webpackからWeb変数にアクセスできるようにします。（例）window
  performance: options.performance || {},
  optimization: {
    namedModules: true,
    splitChunks: {
      name: 'vendor',
      minChunks: 2
    }
  }
});
