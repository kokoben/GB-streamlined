export const BOMBCAST_VIDEO_SET = 'BOMBCAST_VIDEO_SET';
export const BOMBCAST_VIDEO_SET_SUCCESS = 'BOMBCAST_VIDEO_SET_SUCCEDED';
export const BOMBCAST_VIDEO_SET_FAIL = 'BOMBCAST_VIDEO_SET_FAIL';
export const BOMBCAST_VIDEOS_SET = 'BOMBCAST_VIDEOS_SET';
export const BOMBCAST_VIDEOS_SET_SUCCESS = 'BOMBCAST_VIDEOS_SET_SUCCEEDED';
export const BOMBCAST_VIDEOS_SET_FAIL = 'BOMBCAST_VIDEOS_SET_FAILED';
export const LATEST_BOMBCAST_VIDEO_SET = 'LATEST_BOMBCAST_VIDEO_SET';
export const LATEST_BOMBCAST_VIDEO_SET_SUCCESS ='LATEST_BOMBCAST_VIDEO_SET_SUCCEEDED';
export const LATEST_BOMBCAST_VIDEO_SET_FAIL = 'LATEST_BOMBCAST_VIDEO_SET_FAILED';

export const setBombcastVideo = (id) => {
  console.log('inside setBombcastVideo');
  return {
    type: BOMBCAST_VIDEO_SET,
    id
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

export const setLatestBombcastVideo = () => ({
  type: LATEST_BOMBCAST_VIDEO_SET
})
