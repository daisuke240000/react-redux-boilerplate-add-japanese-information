/*
 * 特徴ページ
 *
 * すべての機能を並べます。
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // 「state」と「props」は静的であるため、
  // このコンポーネント（=部品）を再描画する必要はありません。
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="feature-page">
        <Helmet>
          <title>特徴ページ</title>
          <meta
            name="description"
            content="React.js Boilerplateアプリケーションの特徴ページ"
          />
        </Helmet>
        <h1>コレの特徴</h1>
        <ul>
          <li>
            <p className="title">次世代のJavaScript！</p>
            <p>
              今日からは、テンプレート文字列、オブジェクトの破壊、アロー関数、JSX構文などを使用してください。
            </p>
          </li>
          <li>
            <p className="title">瞬間的な返答</p>
            <p>
              最高の開発体験をお楽しみいただき、アプリを思いのままにコーディングしてください！
              きみのCSSとJSに保存された変更は即座に反映されます。
              基になるコードで何かを更新する場合でも、
              ページを更新せずにアプリケーションの状態を保持します！
            </p>
          </li>
          <li>
            <p className="title">業界標準のルーティング</p>
            <p>
              {
                '完全な部品管理のために、コンポーネント（部品）と同じ場所にある構成可能なCSSを記述します。固有の生成されたクラス名は、スタイルの衝突を排除しながら、特異性を低く保ちます。最高のパフォーマンスを得るには、ページにあるスタイルのみを出荷してください。'
              }
            </p>
          </li>
          <li>
            <p className="title">最高のテスト設定</p>
            <p>
              コードの品質と中断のない変更を自動的に保証します。
              （以前に99％のテストカバレッジを持つReactアプリを見たことがありますか？）
            </p>
          </li>
        </ul>
        <i>などなど...</i>
      </div>
    );
  }
}
