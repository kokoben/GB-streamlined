import { 
  HOME_VIDEO_SET_SUCCESS, 
  HOME_VIDEO_SET_FAIL,
  HOME_VIDEOS_SET_SUCCESS,
  HOME_VIDEOS_SET_FAIL,
  LATEST_HOME_VIDEO_SET_SUCCESS,
  LATEST_HOME_VIDEO_SET_FAIL
} from './actions';

export const homeVideo = (state=null, action) => {
  switch(action.type) {
    case HOME_VIDEO_SET_SUCCESS:
      return action.response;
    case HOME_VIDEO_SET_FAIL:
      console.log('home_video_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
}

export const homeVideos = (state=null, action) => {
  switch(action.type) {
    case HOME_VIDEOS_SET_SUCCESS:
      console.log('home_video_set_success!');
      const data = action.response;
      return data;
    case HOME_VIDEOS_SET_FAIL:
      console.log('home_video_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
}
