/**
 * app.js
 *
 * これはアプリケーションの「エントリー（＝入り口）ファイル」であり、
 * 「初期設定」と「定型コード」のみです。
 */

// 「redux-saga es6ジェネレーター」の補助に必要です。
import '@babel/polyfill';

// すべてのサードパーティ製のものを読み込みます。
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';

// おおもとの、根本の「App」を読み込みます。
import App from 'containers/App';

// ファビコンを読み込みます。
/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
/* eslint-enable import/no-webpack-loader-syntax */

// CSSリセットと、グローバルなスタイルを読み込みます。
import 'styles/theme.scss';

import configureStore from './configureStore';

// 「すべての初期化するやつ」を読み込みます。
import { registerOpenSans } from './init';

registerOpenSans();

// 履歴を含む「reduxストア」を作成します
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // ホットリロードが可能なReactコンポーネントと、
  // 翻訳jsonファイルの「modules.hot.accept」は、
  // 動的依存関係を受け入れないため、
  // 変換する時には「定数」である必要があります
  module.hot.accept(['containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
