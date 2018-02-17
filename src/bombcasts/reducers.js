import {
  BOMBCAST_VIDEO_SET_SUCCESS,
  BOMBCAST_VIDEO_SET_FAIL,
  BOMBCAST_VIDEOS_SET_SUCCESS,
  BOMBCAST_VIDEOS_SET_FAIL,
  LATEST_BOMBCAST_VIDEO_SET_SUCCESS,
  LATEST_BOMBCAST_VIDEO_SET_FAIL
} from './actions'

export const bombcastVideo = (state=null, action) => {
  switch(action.type) {
    case BOMBCAST_VIDEO_SET_SUCCESS:
      console.log('bombcast_video_set_success!');
      return action.response;
    case BOMBCAST_VIDEO_SET_FAIL:
      console.log('bombcast_video_set_fail');
      console.log(action.message);
      break;
    default:
      return state;
  }
}

export const bombcastVideos = (state=null, action) => {
  switch(action.type) {
    case BOMBCAST_VIDEOS_SET_SUCCESS:
      console.log('bombcast_videos_set_success!');
      const data = action.response;
      return data;
    case BOMBCAST_VIDEOS_SET_FAIL:
      console.log('bombcast_videos_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
}
