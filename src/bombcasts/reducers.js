import * as bActions from './actions/types';

export const bombcastVideo = (state=null, action) => {
  switch (action.type) {
    case bActions.BOMBCAST_VIDEO_SET_SUCCESS:
      console.log('bombcast_video_set_success!');
      return action.response;
    case bActions.BOMBCAST_VIDEO_SET_FAIL:
      console.log('bombcast_video_set_fail');
      console.log(action.message);
      break;
    default:
      return state;
  }
}

export const bombcastVideos = (state=null, action) => {
  switch (action.type) {
    case bActions.BOMBCAST_VIDEOS_SET_SUCCESS:
      console.log('bombcast_videos_set_success!');
      const data = action.response;
      return data;
    case bActions.BOMBCAST_VIDEOS_SET_FAIL:
      console.log('bombcast_videos_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
}
