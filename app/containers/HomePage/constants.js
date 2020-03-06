/*
 * ホーム定数
 *
 * 各アクションには対応するタイプがあり、レデューサーはそれを認識して取得します。
 * リデューサー（＝減速機）とアクションの間の奇妙なタイプミスを避けるために、
 * ここでそれらを定数として保存します。
 * リデューサーが誤ってアクションを選択しないように、
 * 「yourproject/YourComponent」という、プレフィックス（＝接頭辞）を付けます。
 *
 * この形式に従ってください：
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
