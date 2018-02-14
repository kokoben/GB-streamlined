import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import {
  HOME_VIDEO_SET,
  HOME_VIDEO_SET_SUCCESS,
  HOME_VIDEO_SET_FAIL
} from './actions';
import { callHomeVideo } from './api-calls';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

// workers
function* setHomeVideoAsync() {
  try {
    const jsonpArgs = [callHomeVideo, {param: 'json_callback'}];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: HOME_VIDEO_SET_SUCCESS, response: response });
  } catch (e) {
    console.log('setVideoAsync request failed!');
    yield put({type: HOME_VIDEO_SET_FAIL, message: e.message });
  }
}

// watchers
export function* watchSetHomeVideo() {
  console.log('redux-saga is running the HOME_VIDEO_SET action listener');
  yield takeEvery(HOME_VIDEO_SET, setHomeVideoAsync);
}

