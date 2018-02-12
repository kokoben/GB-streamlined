const HOME_VIDEO_SET = 'HOME_VIDEO_SET';
export const HOME_VIDEO_SET_SUCCESS = 'HOME_VIDEO_SET_SUCCEEDED';
export const HOME_VIDEO_SET_FAIL = 'HOME_VIDEO_SET_FAILED';

export const setHomeVideo = () => {
  console.log('inside setHomeVideo');
  return {
    type: HOME_VIDEO_SET,
  }
}
