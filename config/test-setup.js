// 「リジェネレーターランタイム」のために必要です。
// （「redux-saga」では、ES7ジェネレータのサポートが必要です）
import '@babel/polyfill';

// Enzyme adapter for React 16
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
