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
/* eslint-enable */
