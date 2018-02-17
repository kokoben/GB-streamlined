import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import {
  HOME_VIDEO_SET,
  HOME_VIDEO_SET_SUCCESS,
  HOME_VIDEO_SET_FAIL,
  HOME_VIDEOS_SET,
  HOME_VIDEOS_SET_SUCCESS,
  HOME_VIDEOS_SET_FAIL
} from './actions';
import { requestHomeVideo, requestHomeVideos } from './api-calls';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

// workers
function* setHomeVideoAsync() {
  try {
    const jsonpArgs = [requestHomeVideo, {param: 'json_callback'}];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: HOME_VIDEO_SET_SUCCESS, response: response });
  } catch (e) {
    console.log('setHomeVideoAsync request failed!');
    yield put({type: HOME_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setHomeVideosAsync(action) {
  try {
    const jsonpArgs = [requestHomeVideos(action.page), {param: 'json_callback'}];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: HOME_VIDEOS_SET_SUCCESS, response: response });
  } catch (e) {
    console.log('setHomeVideosAsync request failed!');
    yield put({type: HOME_VIDEOS_SET_FAIL, message: e.message });
  }
}

// watchers
export function* watchSetHomeVideo() {
  console.log('redux-saga is running the HOME_VIDEO_SET action listener');
  yield takeEvery(HOME_VIDEO_SET, setHomeVideoAsync);
}

export function* watchSetHomeVideos() {
  console.log('redux-saga is running the HOME_VIDEOS_SET action listener');
  yield takeEvery(HOME_VIDEOS_SET, setHomeVideosAsync);
}

