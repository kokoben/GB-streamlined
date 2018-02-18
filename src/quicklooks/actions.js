export const QUICKLOOK_VIDEO_SET = 'QUICKLOOK_VIDEO_SET';
export const QUICKLOOK_VIDEO_SET_SUCCESS = 'QUICKLOOK_VIDEO_SET_SUCCEEDED';
export const QUICKLOOK_VIDEO_SET_FAIL = 'QUICKLOOK_VIDEO_SET_FAIL';
export const QUICKLOOK_VIDEOS_SET = 'QUICKLOOK_VIDEOS_SET';
export const QUICKLOOK_VIDEOS_SET_SUCCESS = 'QUICKLOOK_VIDEOS_SET_SUCCEEDED';
export const QUICKLOOK_VIDEOS_SET_FAIL = 'QUICKLOOK_VIDEOS_SET_FAIL';
export const LATEST_QUICKLOOK_VIDEO_SET = 'LATEST_QUICKLOOK_VIDEO_SET';
export const LATEST_QUICKLOOK_VIDEO_SET_SUCCESS = 'LATEST_QUICKLOOK_VIDEO_SET_SUCCEEDED';
export const LATEST_QUICKLOOK_VIDEO_SET_FAIL = 'LATEST_QUICKLOOK_VIDEO_SET_FAILED';

export const setQuicklookVideo = (id) => {
  console.log('inside setQuicklookVideo');
  return {
    type: QUICKLOOK_VIDEO_SET,
    id
  }
}

export const setQuicklookVideos = (page, pageSize) => {
  console.log('inside setQuicklookVideos');
  return {
    type: QUICKLOOK_VIDEOS_SET,
    page,
    pageSize
  }
}

export const setLatestQuicklookVideo = () => ({
  type: LATEST_QUICKLOOK_VIDEO_SET
})
