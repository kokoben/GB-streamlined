import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import * as qlActions from './actions/types';
import { requestQuicklookVideos } from './api-calls';
import { requestVideo } from '../api-calls';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

const params = {param: 'json_callback'};

// workers
function* setQuicklookVideoAsync(action) {
  try {
    const jsonpArgs = [requestVideo(action.id), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: qlActions.QUICKLOOK_VIDEO_SET_SUCCESS, response: response.results});
  } catch (e) {
    console.log('quicklook_video_set_failed!');
    console.log(e);
    yield put({type: qlActions.QUICKLOOK_VIDEO_SET_FAIL, message: e.message});
  }
}

function* setLatestQuicklookVideoAsync() {
  try {
    const jsonpArgs = [requestQuicklookVideos(1), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put ({type: qlActions.QUICKLOOK_VIDEO_SET_SUCCESS, response: response.results[0]});
  } catch (e) {
    yield put({type: qlActions.QUICKLOOK_VIDEO_SET_FAIL, message: e.message});
  }
}

function* setQuicklookVideosAsync(action) {
  try {
    const jsonpArgs = [requestQuicklookVideos(action.page), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: qlActions.QUICKLOOK_VIDEOS_SET_SUCCESS, response: response});
  } catch (e) {
    console.log('quicklook_videos_set_failed!');
    yield put({type: qlActions.QUICKLOOK_VIDEOS_SET_FAIL, message: e.message});
  }
} 

// watchers
export function* watchSetQuicklookVideo() {
  console.log('redux-saga is running the qlActions.QUICKLOOK_VIDEO_SET action listener');
  yield takeEvery(qlActions.QUICKLOOK_VIDEO_SET, setQuicklookVideoAsync);
}

export function* watchSetQuicklookVideos() {
  console.log('redux-saga is running the qlActions.QUICKLOOK_VIDEOS_SET action listener');
  yield takeEvery(qlActions.QUICKLOOK_VIDEOS_SET, setQuicklookVideosAsync);
}

export function* watchSetLatestQuicklookVideo() {
  console.log('redux-saga is running the LATEST_qlActions.QUICKLOOK_VIDEO_SET action listener');
  yield takeEvery(qlActions.LATEST_QUICKLOOK_VIDEO_SET, setLatestQuicklookVideoAsync);
}
