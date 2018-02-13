const BOMBCAST_VIDEO_SET = 'BOMBCAST_VIDEO_SET';
export const BOMBCAST_VIDEO_SET_SUCCESS = 'BOMBCAST_VIDEO_SET_SUCCEDED';
export const BOMBCAST_VIDEO_SET_FAIL = 'BOMBCAST_VIDEO_SET_FAIL';

const setBombcastVideo = () => {
  return {
    console.log('inside setBombcastVideo');
    type: BOMBCAST_VIDEO_SET,
  }
}
