/*
 * ホームページ
 *
 * これは、ユーザーがアプリの最初に表示する「/」ルートです。
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * 初期状態のユーザー名が「null（空白）」でない場合、フォームを送信してリポジトリをロードします
   */
  componentDidMount() {
    const { username, onSubmitForm } = this.props;
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const {
      loading, error, repos, username, onChangeUsername, onSubmitForm
    } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };

    return (
      <article>
        <Helmet>
          <title>ホームページ</title>
          <meta name="description" content="React.js Boilerplateアプリケーションのホームページです。" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>次の「React」プロジェクトを、秒ではじめられる</h2>
            <p>
            すべてのベストプラクティスを備えた、最小限の <i>React-Redux</i> ボイラープレート。
            </p>
          </section>
          <section>
            <h2>やってみて！</h2>
            <form onSubmit={onSubmitForm}>
              <label htmlFor="username">
                入力されたユーザーのGithubリポジトリを表示します
                <span className="at-prefix">@</span>
                <input
                  id="username"
                  type="text"
                  placeholder="flexdinesh"
                  value={username}
                  onChange={onChangeUsername}
                />
              </label>
            </form>
            <ReposList {...reposListProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  onChangeUsername: PropTypes.func
};
