import { VIDEO_SET_SUCCESS, VIDEO_SET_FAIL } from './actions';

export const latestVideo = (state=null, action) => {
  switch(action.type) {
    case VIDEO_SET_SUCCESS:
      console.log('video_set_success!');
      let videoLink = action.response.results[0];
      return videoLink;
    case VIDEO_SET_FAIL:
      console.log('video_set_fail!');
      console.log(action.message);
    default:
      return state;
  }
}
