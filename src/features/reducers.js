import * as fActions from './actions/types';

/* eslint-disable consistent-return */
export const featureVideo = (state = null, action) => {
  switch (action.type) {
    case fActions.FEATURE_VIDEO_SET_SUCCESS:
      console.log('feature_video_set_success!');
      return action.response;
    case fActions.FEATURE_VIDEO_SET_FAIL:
      console.log('feature_video_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
};

export const featureVideos = (state = null, action) => {
  switch (action.type) {
    case fActions.FEATURE_VIDEOS_SET_SUCCESS: {
      console.log('feature_videos_set_success!');
      const data = action.response;
      return data;
    }
    case fActions.FEATURE_VIDEOS_SET_FAIL:
      console.log('feature_videos_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
};
/* eslint-enable */
