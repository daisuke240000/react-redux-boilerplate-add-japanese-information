/**
 * Gets the repositories of the user from Github
 */

import {
  call, put, select, takeLatest
} from 'redux-saga/effects';
import { LOAD_REPOS } from 'containers/App/constants';
import { reposLoaded, repoLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectUsername } from 'containers/HomePage/selectors';

/**
 * Githubリポジトリの、（要求と応答）を扱う者です。
 */
export function* getRepos() {
  // ストアからユーザー名を選択します。
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // 「要求を助ける者」を呼び出します。（詳しくは「utils/request」を参照して下さい）
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * 「ルートサーガ」は、「監視者」のライフサイクルを管理します
 */
export default function* githubData() {
  // 「LOAD_REPOS」アクションを監視し、入ったときに「getRepos」を呼び出します。
  // 「takeLatest」を使用すると、最新のAPI呼び出しの結果のみが適用されます。
  // 実行を継続できるように、「タスク記述子（＝フォークと同じです）」を返します。
  // コンポーネント（部品）が使われなくなる時に自動的にキャンセルされます。
  yield takeLatest(LOAD_REPOS, getRepos);
}
