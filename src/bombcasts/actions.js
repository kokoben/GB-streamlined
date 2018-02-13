export const BOMBCAST_VIDEO_SET = 'BOMBCAST_VIDEO_SET';
export const BOMBCAST_VIDEO_SET_SUCCESS = 'BOMBCAST_VIDEO_SET_SUCCEDED';
export const BOMBCAST_VIDEO_SET_FAIL = 'BOMBCAST_VIDEO_SET_FAIL';

export const setBombcastVideo = () => {
  console.log('inside setBombcastVideo');
  return {
    type: BOMBCAST_VIDEO_SET,
  }
}
