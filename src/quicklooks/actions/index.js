import * as qlActions from './types';

export const setQuicklookVideo = id => ({
  type: qlActions.QUICKLOOK_VIDEO_SET,
  id,
});

export const setQuicklookVideos = (page, pageSize) => ({
  type: qlActions.QUICKLOOK_VIDEOS_SET,
  page,
  pageSize,
});

export const setLatestQuicklookVideo = () => ({
  type: qlActions.LATEST_QUICKLOOK_VIDEO_SET,
});

export const fetchQuicklookSearchVideos = (keywords) => {
  console.log('inside fetchQuicklookSearchVideos');
  return {
    type: qlActions.QUICKLOOK_SEARCH_FETCH,
    keywords,
  };
};
