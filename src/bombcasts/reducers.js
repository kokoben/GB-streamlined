import {
  BOMBCAST_VIDEO_SET_SUCCESS,
  BOMBCAST_VIDEO_SET_FAIL
} from './actions'

export const bombcastVideo = (state=null, action) => {
  switch(action.type) {
    case BOMBCAST_VIDEO_SET_SUCCESS:
      console.log('bombcast_video_set_success!');
      const data = action.response.results[0];
      return data;
    case BOMBCAST_VIDEO_SET_FAIL:
      console.log('bombcast_video_set_fail');
      console.log(action.message);
      break;
    default:
      return state;
  }
}
