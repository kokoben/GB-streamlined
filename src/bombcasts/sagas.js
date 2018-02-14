import { put, call, takeEvery } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import {
  BOMBCAST_VIDEO_SET,
  BOMBCAST_VIDEO_SET_SUCCESS,
  BOMBCAST_VIDEO_SET_FAIL,
} from './actions';
import { callBombcastVideo } from './api-calls';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

// workers
function* setBombcastVideoAsync() {
  try {
    const jsonpArgs = [callBombcastVideo, {param: "json_callback"}]
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: BOMBCAST_VIDEO_SET_SUCCESS, response: response});
  } catch (e) {
    console.log('bombcast_video_set_failed!');
    yield put({type: BOMBCAST_VIDEO_SET_FAIL, message: e.message});
  }

}

// watchers
export function* watchSetBombcastVideo() {
  yield takeEvery(BOMBCAST_VIDEO_SET, setBombcastVideoAsync);
}
