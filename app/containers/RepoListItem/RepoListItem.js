/**
 * RepoListItem
 *
 * リポジトリの名前と、発行件数をリストします
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import { IssueIcon } from 'components/Icons';
import './style.scss';

export default class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item, currentUser } = this.props;
    let nameprefix = '';

    // リポジトリが所有しているデータが、
    // （フォークであるために）別の人が所有している場合、
    // 所有者の名前を表示する必要があります。
    if (item.owner.login !== currentUser) {
      nameprefix = `${item.owner.login}/`;
    }

    // リポジトリのコンテンツをまとめます。
    const content = (
      <div className="repo-list-item">
        <a className="repo-list-item__repo-link" href={item.html_url} target="_blank" rel="noopener noreferrer">
          {nameprefix + item.name}
        </a>
        <a className="repo-list-item__issue-link" href={`${item.html_url}/issues`} target="_blank" rel="noopener noreferrer">
          <IssueIcon className="repo-list-item__issue-icon" />
          {item.open_issues_count}
        </a>
      </div>
    );

    // コンテンツを、リストアイテムに描画します。
    return (
      <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
    );
  }
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentUser: PropTypes.string,
};
