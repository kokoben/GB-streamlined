import { combineReducers } from 'redux';
import * as qlActions from './quicklooks/actions/types';
import * as fActions from './features/actions/types';
import * as sharedActions from './actions/types';

/* eslint-disable consisten-return */
export const currentSearchPage = (state = null, action) => {
  switch (action.type) {
    case qlActions.QUICKLOOK_SEARCH_FETCH_SUCCESS:
    case fActions.FEATURE_SEARCH_FETCH_SUCCESS:
      return action.page;
    default:
      return state;
  }
};

export const searchSpinnerOn = (state = false, action) => {
  switch (action.type) {
    case sharedActions.SEARCH_SPINNER_SET:
      return action.on;
    default:
      return state;
  }
};

export default combineReducers({
  currentSearchPage,
  searchSpinnerOn,
});
/* eslint-enable */
