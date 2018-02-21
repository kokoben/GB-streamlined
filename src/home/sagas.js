import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import * as hActions from './actions/types';
import { requestHomeVideos } from './api-calls';
import { requestVideo } from '../api-calls';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

const params = {param: 'json_callback'};

// workers
function* setHomeVideoAsync(action) {
  try {
    console.log('inside sethomevideoasync');
    console.log('id', action.id);
    const jsonpArgs = [requestVideo(action.id), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: hActions.HOME_VIDEO_SET_SUCCESS, response: response.results });
  } catch (e) {
    console.log('setHomeVideoAsync request failed!');
    yield put({type: hActions.HOME_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setLatestHomeVideoAsync() {
  try {
    const jsonpArgs = [requestHomeVideos(1), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put ({type: hActions.HOME_VIDEO_SET_SUCCESS, response: response.results[0]});
  } catch (e) {
    yield put({type: hActions.HOME_VIDEO_SET_FAIL, message:e.message})
  }
}

function* setHomeVideosAsync(action) {
  try {
    const jsonpArgs = [requestHomeVideos(action.page), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: hActions.HOME_VIDEOS_SET_SUCCESS, response });
  } catch (e) {
    console.log('setHomeVideosAsync request failed!');
    yield put({type: hActions.HOME_VIDEOS_SET_FAIL, message: e.message });
  }
}

// watchers
export function* watchSetHomeVideo() {
  console.log('redux-saga is running the HOME_VIDEO_SET action listener');
  yield takeEvery(hActions.HOME_VIDEO_SET, setHomeVideoAsync);
}

export function* watchSetHomeVideos() {
  console.log('redux-saga is running the HOME_VIDEOS_SET action listener');
  yield takeEvery(hActions.HOME_VIDEOS_SET, setHomeVideosAsync);
}

export function* watchSetLatestHomeVideo() {
  console.log('redux-saga is running the LATEST_HOME_VIDEO_SET action listener');
  yield takeEvery(hActions.LATEST_HOME_VIDEO_SET, setLatestHomeVideoAsync);
}
