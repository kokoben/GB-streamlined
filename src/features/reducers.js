import { 
  FEATURE_VIDEO_SET_SUCCESS,
  FEATURE_VIDEO_SET_FAIL,
  FEATURE_VIDEOS_SET_SUCCESS,
  FEATURE_VIDEOS_SET_FAIL 
} from './actions';

export const featureVideo = (state=null, action) => {
  switch(action.type) {
    case FEATURE_VIDEO_SET_SUCCESS:
      console.log('feature_video_set_success!');
      const data = action.response.results[0];
      return data;
    case FEATURE_VIDEO_SET_FAIL:
      console.log('feature_video_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
}

export const featureVideos = (state=null, action) => {
  switch(action.type) {
    case FEATURE_VIDEOS_SET_SUCCESS:
      console.log('feature_videos_set_success!');
      const data = action.response;
      return data;
    case FEATURE_VIDEOS_SET_FAIL:
      console.log('feature_videos_set_fail!');
      console.log(action.message);
      break;
    default:
      return state;
  }
}
