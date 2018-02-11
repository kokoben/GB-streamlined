const VIDEO_SET = 'VIDEO_SET';
export const VIDEO_SET_SUCCESS = 'VIDEO_SET_SUCCEEDED';
export const VIDEO_SET_FAIL = 'VIDEO_SET_FAILED';

export const setVideo = () => {
  console.log('inside setVideo');
  return {
    type: VIDEO_SET,
  }
}
