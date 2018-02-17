export const BOMBCAST_VIDEO_SET = 'BOMBCAST_VIDEO_SET';
export const BOMBCAST_VIDEO_SET_SUCCESS = 'BOMBCAST_VIDEO_SET_SUCCEDED';
export const BOMBCAST_VIDEO_SET_FAIL = 'BOMBCAST_VIDEO_SET_FAIL';
export const BOMBCAST_VIDEOS_SET = 'BOMBCAST_VIDEOS_SET';
export const BOMBCAST_VIDEOS_SET_SUCCESS = 'BOMBCAST_VIDEOS_SET_SUCCEEDED';
export const BOMBCAST_VIDEOS_SET_FAIL = 'BOMBCAST_VIDEOS_SET_FAILED';

export const setBombcastVideo = () => {
  console.log('inside setBombcastVideo');
  return {
    type: BOMBCAST_VIDEO_SET
  }
}

export const setBombcastVideos = (page, pageSize) => {
  console.log('inside setBombcastVideos');
  return {
    type: BOMBCAST_VIDEOS_SET,
    page,
    pageSize
  }
}
