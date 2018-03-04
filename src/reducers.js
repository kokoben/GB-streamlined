import { combineReducers } from 'redux';
import * as qlActions from './quicklooks/actions/types';

/* eslint-disable consisten-return */
export const currentSearchPage = (state = null, action) => {
  switch (action.type) {
    case qlActions.QUICKLOOK_SEARCH_FETCH_SUCCESS:
      return action.page;
    default:
      return state;
  }
};

export default combineReducers({
  currentSearchPage,
});
/* eslint-enable */
