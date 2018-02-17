import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import {
  HOME_VIDEO_SET,
  HOME_VIDEO_SET_SUCCESS,
  HOME_VIDEO_SET_FAIL,
  HOME_VIDEOS_SET,
  HOME_VIDEOS_SET_SUCCESS,
  HOME_VIDEOS_SET_FAIL,
  LATEST_HOME_VIDEO_SET,
  LATEST_HOME_VIDEO_SET_SUCCESS,
  LATEST_HOME_VIDEO_SET_FAIL
} from './actions';
import { requestHomeVideo, requestHomeVideos } from './api-calls';

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
    const jsonpArgs = [requestHomeVideo(action.id), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: HOME_VIDEO_SET_SUCCESS, response: response.results });
  } catch (e) {
    console.log('setHomeVideoAsync request failed!');
    yield put({type: HOME_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setHomeVideosAsync(action) {
  try {
    const jsonpArgs = [requestHomeVideos(action.page), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: HOME_VIDEOS_SET_SUCCESS, response });
  } catch (e) {
    console.log('setHomeVideosAsync request failed!');
    yield put({type: HOME_VIDEOS_SET_FAIL, message: e.message });
  }
}

function* setLatestHomeVideoAsync() {
  try {
    console.log('inside getlatesthomevideoidasync');
    const jsonpArgs = [requestHomeVideos(1), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    console.log('response', response);
    yield put ({type: HOME_VIDEO_SET_SUCCESS, response: response.results[0]});
  } catch (e) {
    yield put({type: HOME_VIDEO_SET_FAIL, message:e.message})
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

export function* watchGetLatestHomeVideoId() {
  console.log('redux-saga is running the watchGetLatestHomeVideoId action listener');
  yield takeEvery(LATEST_HOME_VIDEO_SET, setLatestHomeVideoAsync);
}
