import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import {
  QUICKLOOK_VIDEO_SET,
  QUICKLOOK_VIDEO_SET_SUCCESS,
  QUICKLOOK_VIDEO_SET_FAIL
} from './actions';
import { callQuicklookVideo } from './api-calls';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

// workers
function* setQuicklookVideoAsync() {
  try {
    const jsonpArgs = [ callQuicklookVideo, {param: 'json_callback'}];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: QUICKLOOK_VIDEO_SET_SUCCESS, response: response});
  } catch (e) {
    console.log('quicklook_video_set_failed!');
    yield put({type: QUICKLOOK_VIDEO_SET_FAIL, message: e.message});
  }

}

// watchers
export function* watchSetQuicklookVideo() {
  console.log('redux-saga is running the QUICKLOOK_VIDEO_SET action listener');
  yield takeEvery(QUICKLOOK_VIDEO_SET, setQuicklookVideoAsync);
}
