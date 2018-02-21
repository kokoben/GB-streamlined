import * as fActions from './types';

export const setFeatureVideo = (id) => {
  console.log('inside setFeatureVideo');
  return {
    type: fActions.FEATURE_VIDEO_SET,
    id
  }
}

export const setFeatureVideos = (page, pageSize) => {
  console.log('inside setFeatureVideos');
  return {
    type: fActions.FEATURE_VIDEOS_SET,
    page,
    pageSize
  }
}

export const setLatestFeatureVideo = () => ({
  type: fActions.LATEST_FEATURE_VIDEO_SET
})
