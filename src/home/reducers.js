import { 
  HOME_VIDEO_SET_SUCCESS, 
  HOME_VIDEO_SET_FAIL 
} from './actions';

export const homeVideo = (state=null, action) => {
  switch(action.type) {
    case HOME_VIDEO_SET_SUCCESS:
      console.log('home_video_set_success!');
      let videoLink = action.response.results[0];
      return videoLink;
    case HOME_VIDEO_SET_FAIL:
      console.log('home_video_set_fail!');
      console.log(action.message);
    default:
      return state;
  }
}
