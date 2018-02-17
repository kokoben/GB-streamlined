export const QUICKLOOK_VIDEO_SET = 'QUICKLOOK_VIDEO_SET';
export const QUICKLOOK_VIDEO_SET_SUCCESS = 'QUICKLOOK_VIDEO_SET_SUCCEEDED';
export const QUICKLOOK_VIDEO_SET_FAIL = 'QUICKLOOK_VIDEO_SET_FAIL';
export const QUICKLOOK_VIDEOS_SET = 'QUICKLOOK_VIDEOS_SET';
export const QUICKLOOK_VIDEOS_SET_SUCCESS = 'QUICKLOOK_VIDEOS_SET_SUCCEEDED';
export const QUICKLOOK_VIDEOS_SET_FAIL = 'QUICKLOOK_VIDEOS_SET_FAIL';

export const setQuicklookVideo = () => {
  return {
    type: QUICKLOOK_VIDEO_SET
  }
}

export const setQuicklookVideos = (page, pageSize) => {
  return {
    type: QUICKLOOK_VIDEOS_SET,
    page,
    pageSize
  }
}
