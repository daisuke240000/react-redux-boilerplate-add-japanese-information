/**
 *
 * アプリ
 *
 * このコンポーネント（＝部品）は、実際のページを囲む「スケルトン（＝骨組み）」であり、
 * すべてのページに表示されるコードのみを含める必要があります。 （例：ナビゲーションバーなど。）
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - 【りあくと＆りだっくす】"
      defaultTitle="【りあくと＆りだっくす】"
    >
      <meta name="description" content="りあくととりだっくすの下敷きアプリです" />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/features" component={FeaturePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </div>
);

export default App;
