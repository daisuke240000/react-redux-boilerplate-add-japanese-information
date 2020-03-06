/*
 * アプリアクション
 *
 * アクションは、アプリケーションの表示内容を変えます。
 * この定型文は単方向のデータの流れ、特に「redux」を使用するため、
 * アプリケーションがアプリケーションの状態と対話する唯一の方法です。
 * これはあなたの状態が最新であることを保証し、誰もそれを台無しにしません。
 *
 * 新しいアクションを追加するには：
 * 1) コンスタント（定数）をインポートする
 * 2) 下記のような関数を追加します。↓
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';

/**
 * リポジトリをロードすると、このアクションは「リクエストサーガ」を開始します
 *
 * @return {object} タイプが「LOAD_REPOS」のアクションオブジェクト
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * 「リクエストサーガ」によって、リポジトリが読み込まれたときに発信（ディスパッチ）されます。
 *
 * @param  {array} repos リポジトリデータ
 * @param  {string} username 現在のユーザー名
 *
 * @return {object}      リポジトリを渡す「LOAD_REPOS_SUCCESS」タイプのアクションオブジェクト
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * リポジトリのロードが失敗したときに発信（ディスパッチ）されます
 *
 * @param  {object} error エラー
 *
 * @return {object}       タイプ「LOAD_REPOS_ERROR」のエラーを渡すアクションオブジェクト
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
