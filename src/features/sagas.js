import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import * as fActions from './actions/types';
import { requestFeatureVideos } from './api-calls';
import { requestVideo } from '../api-calls';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

const params = {param: 'json_callback'};

// workers
function* setFeatureVideoAsync(action) {
  try {
    const jsonpArgs = [requestVideo(action.id), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: fActions.FEATURE_VIDEO_SET_SUCCESS, response: response.results});
  } catch (e) {
    console.log('setFeatureVideoAsync request failed!');
    yield put({type: fActions.FEATURE_VIDEO_SET_FAIL, message: e.message})
  }
}

function* setLatestFeatureVideoAsync() {
  try {
    const jsonpArgs = [requestFeatureVideos(1), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: fActions.FEATURE_VIDEO_SET_SUCCESS, response: response.results[0]});
  } catch (e) {
    yield put({type: fActions.FEATURE_VIDEO_SET_FAIL, message: e.message});
  }  
}

function* setFeatureVideosAsync(action) {
  try {
    const jsonpArgs = [requestFeatureVideos(action.page), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: fActions.FEATURE_VIDEOS_SET_SUCCESS, response: response})
  } catch (e) {
    console.log('feature_videos_set_failed!');
    yield put({type: fActions.FEATURE_VIDEOS_SET_FAIL, message: e.message});
  }
}

// watchers
export function* watchSetFeatureVideo() {
  console.log('redux-saga is running the FEATURE_VIDEO_SET action listener');
  yield takeEvery(fActions.FEATURE_VIDEO_SET, setFeatureVideoAsync);
}

export function* watchSetLatestFeatureVideo() {
  console.log('redux-saga is running the LATEST_FEATURE_VIDEO_SET action listener');
  yield takeEvery(fActions.LATEST_FEATURE_VIDEO_SET, setLatestFeatureVideoAsync); 
}

export function* watchSetFeatureVideos() {
  console.log('redux-saga is running the FEATURE_VIDEOS_SET action listener');
  yield takeEvery(fActions.FEATURE_VIDEOS_SET, setFeatureVideosAsync);
}
