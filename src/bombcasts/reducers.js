import { combineReducers } from 'redux';
import * as bActions from './actions/types';

/* eslint-disable consistent-return */
export const bombcastVideo = (state = null, action) => {
  switch (action.type) {
    case bActions.BOMBCAST_VIDEO_SET_SUCCESS:
      return action.response;
    case bActions.BOMBCAST_VIDEO_SET_FAIL:
      console.log(action.message);
      break;
    default:
      return state;
  }
};

export const bombcastVideos = (state = null, action) => {
  switch (action.type) {
    case bActions.BOMBCAST_VIDEOS_SET_SUCCESS: {
      const data = action.response;
      return data;
    }
    case bActions.BOMBCAST_VIDEOS_SET_FAIL:
      console.log(action.message);
      break;
    default:
      return state;
  }
};
/* eslint-enable */

export default combineReducers({
  bombcastVideo,
  bombcastVideos,
});
