import * as bActions from './types'

export const setBombcastVideo = id => {
  console.log('inside setBombcastVideo');
  return {
    type: bActions.BOMBCAST_VIDEO_SET,
    id
  }
}

export const setBombcastVideos = (page, pageSize) => {
  console.log('inside setBombcastVideos');
  return {
    type: bActions.BOMBCAST_VIDEOS_SET,
    page,
    pageSize
  }
}

export const setLatestBombcastVideo = () => ({
  type: bActions.LATEST_BOMBCAST_VIDEO_SET
})
