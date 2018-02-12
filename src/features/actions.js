const FEATURE_VIDEO_SET = 'FEATURE_VIDEO_SET';
export const FEATURE_VIDEO_SET_SUCCESS = 'FEATURE_VIDEO_SET_SUCCEEDED';
export const FEATURE_VIDEO_SET_FAIL = 'FEATURE_VIDEO_SET_FAILED';

export const setFeatureVideo = () => {
  console.log('inside setFeatureVideo');
  return {
    type: FEATURE_VIDEO_SET,
  }
}
