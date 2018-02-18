export const FEATURE_VIDEO_SET = 'FEATURE_VIDEO_SET';
export const FEATURE_VIDEO_SET_SUCCESS = 'FEATURE_VIDEO_SET_SUCCEEDED';
export const FEATURE_VIDEO_SET_FAIL = 'FEATURE_VIDEO_SET_FAILED';
export const FEATURE_VIDEOS_SET = 'FEATURE_VIDEOS_SET';
export const FEATURE_VIDEOS_SET_SUCCESS = 'FEATURE_VIDEOS_SET_SUCCEEDED';
export const FEATURE_VIDEOS_SET_FAIL = 'FEATURE_VIDEOS_SET_FAILED';
export const LATEST_FEATURE_VIDEO_SET = 'LATEST_FEATURE_VIDEO_SET';
export const LATEST_FEATURE_VIDEO_SET_SUCCESS = 'LATEST_FEATURE_VIDEO_SET_SUCCEEDED';
export const LATEST_FEATURE_VIDEO_SET_FAIL = 'LATEST_FEATURE_VIDEO_SET_FAILED';

export const setFeatureVideo = (id) => {
  console.log('inside setFeatureVideo');
  return {
    type: FEATURE_VIDEO_SET,
    id
  }
}

export const setFeatureVideos = (page, pageSize) => {
  console.log('inside setFeatureVideos');
  return {
    type: FEATURE_VIDEOS_SET,
    page,
    pageSize
  }
}

export const setLatestFeatureVideo = () => ({
  type: LATEST_FEATURE_VIDEO_SET
})
