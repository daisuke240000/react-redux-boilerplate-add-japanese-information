import { CHANGE_USERNAME } from './constants';

// アプリの初期状態
const initialState = {
  username: '',
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // GitHubユーザー名からプレフィックス「@」を削除します
      return { ...state, username: action.name.replace(/@/gi, '') };
    default:
      return state;
  }
}

export default homeReducer;
