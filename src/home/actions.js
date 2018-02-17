export const HOME_VIDEO_SET = 'HOME_VIDEO_SET';
export const HOME_VIDEO_SET_SUCCESS = 'HOME_VIDEO_SET_SUCCEEDED';
export const HOME_VIDEO_SET_FAIL = 'HOME_VIDEO_SET_FAILED';
export const HOME_VIDEOS_SET = 'HOME_VIDEOS_SET';
export const HOME_VIDEOS_SET_SUCCESS = 'HOME_VIDEOS_SET_SUCCEEDED';
export const HOME_VIDEOS_SET_FAIL = 'HOME_VIDEOS_SET_FAILED';

export const setHomeVideo = () => {
  console.log('inside setHomeVideo');
  return {
    type: HOME_VIDEO_SET
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
