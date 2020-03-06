/**
 * 特徴ページのコンポーネント（＝部品）を非同期に読み込みます。
 */
import Loadable from 'react-loadable';

import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingIndicator,
});
