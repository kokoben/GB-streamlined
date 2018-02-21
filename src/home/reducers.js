import * as hActions from './actions/types';

export const homeVideo = (state=null, action) => {
  switch(action.type) {
    case hActions.HOME_VIDEO_SET_SUCCESS:
      console.log('home_video_set_success!');
      return action.response;
    case hActions.HOME_VIDEO_SET_FAIL:
      console.log('home_video_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
}

export const homeVideos = (state=null, action) => {
  switch(action.type) {
    case hActions.HOME_VIDEOS_SET_SUCCESS:
      console.log('home_video_set_success!');
      const data = action.response;
      return data;
    case hActions.HOME_VIDEOS_SET_FAIL:
      console.log('home_video_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
}
