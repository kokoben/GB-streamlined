import { put, call, takeEvery } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import * as bActions from './actions/types';
import { requestVideo } from '../api-calls';
import { requestBombcastVideos } from './api-calls';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

const params = {param: 'json_callback'};

// workers
function* setBombcastVideoAsync(action) {
  try {
    const jsonpArgs = [requestVideo(action.id), params]
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: bActions.BOMBCAST_VIDEO_SET_SUCCESS, response: response.results});
  } catch (e) {
    console.log('bombcast_video_set_failed!');
    yield put({type: bActions.BOMBCAST_VIDEO_SET_FAIL, message: e.message});
  }
}

function* setLatestBombcastVideoAsync() {
  try {
    const jsonpArgs = [requestBombcastVideos(1), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: bActions.BOMBCAST_VIDEO_SET_SUCCESS, response: response.results[0]});
  } catch (e) {
    yield put({type: bActions.BOMBCAST_VIDEO_SET_FAIL, message: e.message});
  }
}

function* setBombcastVideosAsync(action) {
  try {
    const jsonpArgs = [requestBombcastVideos(action.page), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: bActions.BOMBCAST_VIDEOS_SET_SUCCESS, response: response});
  } catch (e) {
    console.log('bombcast_videos_set_failed!');
    yield put({type: bActions.BOMBCAST_VIDEOS_SET_FAIL, message: e.message});
  }
}

// watchers
export function* watchSetBombcastVideo() {
  console.log('redux-saga is running the BOMBCAST_VIDEO_SET action listener');
  yield takeEvery(bActions.BOMBCAST_VIDEO_SET, setBombcastVideoAsync);
}

export function* watchSetLatestBombcastVideo() {
  console.log('redux-saga is running the LATEST_BOMBCAST_VIDEOS_SET action listener');
  yield takeEvery(bActions.LATEST_BOMBCAST_VIDEO_SET, setLatestBombcastVideoAsync);
}

export function* watchSetBombcastVideos() {
  console.log('redux-saga is running the BOMBCAST_VIDEOS_SET action listener');
  yield takeEvery(bActions.BOMBCAST_VIDEOS_SET, setBombcastVideosAsync);
}

