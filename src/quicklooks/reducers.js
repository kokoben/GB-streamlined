import { combineReducers } from 'redux';
import * as qlActions from './actions/types';

/* eslint-disable consistent-return */
export const quicklookVideo = (state = null, action) => {
  switch (action.type) {
    case qlActions.QUICKLOOK_VIDEO_SET_SUCCESS:
      console.log('quicklook_video_set_success!');
      return action.response;
    case qlActions.QUICKLOOK_VIDEO_SET_FAIL:
      console.log('quicklook_video_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
};

export const quicklookVideos = (state = null, action) => {
  switch (action.type) {
    case qlActions.QUICKLOOK_VIDEOS_SET_SUCCESS: {
      console.log('quicklook_videos_set_success!');
      const data = action.response;
      return data;
    }
    case qlActions.QUICKLOOK_VIDEOS_SET_FAIL:
      console.log('quicklook_videos_set-fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
};

export const quicklookSearchResults = (state = [], action) => {
  switch (action.type) {
    case qlActions.QUICKLOOK_SEARCH_FETCH_SUCCESS:
      console.log('quicklook_search_fetch_success!');
      return action.results;
    case qlActions.QUICKLOOK_SEARCH_FETCH_FAIL:
      console.log('quicklook_search_fetch_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
};

export default combineReducers({
  quicklookVideo,
  quicklookVideos,
  quicklookSearchResults,
});
/* eslint-enable */
