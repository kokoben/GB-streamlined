import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import { 
  FEATURE_VIDEO_SET,
  FEATURE_VIDEO_SET_SUCCESS,
  FEATURE_VIDEO_SET_FAIL,
  FEATURE_VIDEOS_SET,
  FEATURE_VIDEOS_SET_SUCCESS,
  FEATURE_VIDEOS_SET_FAIL,
} from './actions';
import { requestFeatureVideo, requestFeatureVideos } from './api-calls';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

const param = {param: 'json_callback'};

// workers
function* setFeatureVideoAsync() {
  try {
    const jsonpArgs = [requestFeatureVideo, {param: 'json_callback'}];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: FEATURE_VIDEO_SET_SUCCESS, response: response});
  } catch (e) {
    console.log('setFeatureVideoAsync request failed!');
    console.log(e);
    yield put({type: FEATURE_VIDEO_SET_FAIL, message: e.message})
  }
}

function* setFeatureVideosAsync(action) {
  try {
    console.log('inside setfeaturevideosasync');
    const jsonpArgs = [requestFeatureVideos(action.page), param];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: FEATURE_VIDEOS_SET_SUCCESS, response: response})
  } catch (e) {
    console.log('feature_videos_set_failed!');
    yield put({type: FEATURE_VIDEOS_SET_FAIL, message: e.message});
  }
}

// watchers
export function* watchSetFeatureVideo() {
  console.log('redux-saga is running the FEATURE_VIDEO_SET action listener');
  yield takeEvery(FEATURE_VIDEO_SET, setFeatureVideoAsync);
}

export function* watchSetFeatureVideos() {
  console.log('redux-saga is running the FEATURE_VIDEOS_SET action listener');
  yield takeEvery(FEATURE_VIDEOS_SET, setFeatureVideosAsync);
}
