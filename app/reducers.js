/**
 * このファイル内のすべてのリデューサー（減速機）を組み合わせて、組み合わせたリデューサーを出力します。
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';

/**
 * メインのリデューサーを、リアクトルーターの状態と、動的に注入されたリデューサーに、がっちゃんこします。
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: globalReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
}
