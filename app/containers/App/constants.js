/*
 * アプリの定数
 *
 * 各アクションには対応するタイプがあり、
 * リデューサーはそれを認識して取得します。
 * リデューサーとアクションの間の奇妙なタイプミスを避けるために、
 * ここでそれらを定数として保存します。
 * リデューサーが誤ってアクションを選択しないように、
 * 「yourproject / YourComponent」というプレフィックス（＝接頭辞）を付けます。
 *
 * この形式に従ってください：
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const DEFAULT_LOCALE = 'en';
