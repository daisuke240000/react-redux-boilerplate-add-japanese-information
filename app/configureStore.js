/**
 * 動的減速機（＝ダイナミックリデューサー）で「ストア」を作成する
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = {}, history) {
  // 2つのミドルウェアでストアを作成します。
  // 1. sagaMiddleware：redux-sagasを機能させます。
  // 2. routerMiddleware：ロケーション/ URLパスを状態に同期します
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  // 拡張機能の「Redux DevTools」がインストールされている場合はそれを使用し、インストールされていない場合は「Redux compose」を使用します
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // 開発者のTODO `react-router-redux`がベータ版ではなくなったときに削除しようとします。これはホットリロード後に「LOCATION_CHANGE」を複数回起動することはできません
      // 「replaceReducer」のリデューサーの再計算を防止します。
      shouldHotReload: false
    })
    : compose;
  /* eslint-enable */

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers));

  // 拡張機能
  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {}; // レデューサー・レジストリ
  store.injectedSagas = {}; // サーガ・レジストリ

  /* イスタンブールは下記を無視します */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.injectedReducers));
      store.dispatch({ type: '@@REDUCER_INJECTED' });
    });
  }

  return store;
}
