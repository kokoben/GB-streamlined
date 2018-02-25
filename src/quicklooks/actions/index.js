import * as qlActions from './types';

export const setQuicklookVideo = (id) => {
  console.log('inside setQuicklookVideo');
  return {
    type: qlActions.QUICKLOOK_VIDEO_SET,
    id,
  };
};

export const setQuicklookVideos = (page, pageSize) => {
  console.log('inside setQuicklookVideos');
  return {
    type: qlActions.QUICKLOOK_VIDEOS_SET,
    page,
    pageSize,
  };
};

export const setLatestQuicklookVideo = () => ({
  type: qlActions.LATEST_QUICKLOOK_VIDEO_SET,
});
