import { combineReducers } from 'redux';
import * as hActions from './home/actions/types';
import * as qlActions from './quicklooks/actions/types';
import * as fActions from './features/actions/types';
import * as sharedActions from './actions/types';
import * as bActions from './bombcasts/actions/types';

/* eslint-disable consisten-return */
export const currentSearchPage = (state = null, action) => {
  switch (action.type) {
    case sharedActions.SEARCH_PAGE_SET:
    case hActions.HOME_SEARCH_FETCH_SUCCESS:
    case qlActions.QUICKLOOK_SEARCH_FETCH_SUCCESS:
    case fActions.FEATURE_SEARCH_FETCH_SUCCESS:
    case bActions.BOMBCAST_SEARCH_FETCH_SUCCESS:
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

export const searchResultMarker = (state = null, action) => {
  switch (action.type) {
    case sharedActions.SEARCH_MARKER_SET:
      return action.marker;
    default:
      return state;
  }
};

export default combineReducers({
  currentSearchPage,
  searchSpinnerOn,
  searchResultMarker,
});
/* eslint-enable */
