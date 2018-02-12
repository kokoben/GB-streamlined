import { 
  FEATURE_VIDEO_SET_SUCCESS,
  FEATURE_VIDEO_SET_FAIL 
} from './actions';

export const featureVideo = (state=null, action) => {
  switch(action.type) {
    case FEATURE_VIDEO_SET_SUCCESS:
      console.log('feature_video_set_success!');
      const videoLink = action.response.results[0];
      return videoLink;
    case FEATURE_VIDEO_SET_FAIL:
        console.log('feature_video_set_fail!');
        console.log(action.message);
    default:
      return state;
  }
}
