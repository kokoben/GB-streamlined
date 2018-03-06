import * as hActions from './types';

export const setHomeVideo = (id) => {
  console.log('inside setHomeVideo');
  return {
    type: hActions.HOME_VIDEO_SET,
    id,
  };
};

export const setHomeVideos = (page, pageSize) => {
  console.log('inside setHomeVideos');
  return {
    type: hActions.HOME_VIDEOS_SET,
    page,
    pageSize,
  };
};

export const setLatestHomeVideo = () => ({
  type: hActions.LATEST_HOME_VIDEO_SET,
});

export const fetchHomeSearchVideos = keywords => ({
  type: hActions.HOME_SEARCH_FETCH,
  keywords,
});
