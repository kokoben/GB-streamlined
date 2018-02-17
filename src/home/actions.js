export const HOME_VIDEO_SET = 'HOME_VIDEO_SET';
export const HOME_VIDEO_SET_SUCCESS = 'HOME_VIDEO_SET_SUCCEEDED';
export const HOME_VIDEO_SET_FAIL = 'HOME_VIDEO_SET_FAILED';
export const HOME_VIDEOS_SET = 'HOME_VIDEOS_SET';
export const HOME_VIDEOS_SET_SUCCESS = 'HOME_VIDEOS_SET_SUCCEEDED';
export const HOME_VIDEOS_SET_FAIL = 'HOME_VIDEOS_SET_FAILED';
export const LATEST_HOME_VIDEO_SET = 'LATEST_HOME_VIDEO_SET';
export const LATEST_HOME_VIDEO_SET_SUCCESS = 'LATEST_HOME_VIDEO_SET_SUCCEEDED';
export const LATEST_HOME_VIDEO_SET_FAIL = 'LATEST_HOME_VIDEO_SET_FAILED';

export const setHomeVideo = (id) => {
  console.log('inside setHomeVideo');
  return {
    type: HOME_VIDEO_SET,
    id
  }
}

export const setHomeVideos = (page, pageSize) => {
  console.log('inside setHomeVideos');
  return {
    type: HOME_VIDEOS_SET,
    page, 
    pageSize
  }
}

export const setLatestHomeVideo = () => {
  return {
    type: LATEST_HOME_VIDEO_SET
  }
}
