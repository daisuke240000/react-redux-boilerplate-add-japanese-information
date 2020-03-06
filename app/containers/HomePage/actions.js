/*
 * ホームアクション
 *
 * アクションはアプリケーション内の「内容」を変更します。
 * この定型文は単方向のデータの流れ、特に「redux」を使用するため、
 * アプリケーションがアプリケーションの状態と対話する唯一の方法です。
 * これはあなたの状態が最新であることを保証し、誰もそれを台無しにしません。
 *
 * 新しいアクションを追加するには：
 * 1) コンスタンツ（＝定数）をインポートする
 * 2) 下記のような関数を追加します。↓
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { CHANGE_USERNAME } from './constants';

/**
 * フォームの入力フィールドを変更します
 *
 * @param  {name} name 入力フィールドの新しいテキスト
 *
 * @return {object}    タイプが「CHANGE_USERNAME」のアクションオブジェクト
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name
  };
}
