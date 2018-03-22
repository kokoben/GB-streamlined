import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import _ from 'lodash';
import Moment from 'moment';
import * as sharedActions from '../actions/types';
import * as fActions from './actions/types';
import { requestFeatureVideos } from './api-calls';
import { requestVideo, requestSearchVideos } from '../api-calls';

const jsonpWrapper = (args) => {
  const response = jsonp(...args);
  return response.promise;
};

const params = { param: 'json_callback' };

// workers
function* setFeatureVideoAsync(action) {
  try {
    const jsonpArgs = [requestVideo(action.id), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: fActions.FEATURE_VIDEO_SET_SUCCESS, response: response.results });
  } catch (e) {
    console.log('setFeatureVideoAsync request failed!');
    yield put({ type: fActions.FEATURE_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setLatestFeatureVideoAsync() {
  try {
    const jsonpArgs = [requestFeatureVideos(1), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: fActions.FEATURE_VIDEO_SET_SUCCESS, response: response.results[0] });
  } catch (e) {
    yield put({ type: fActions.FEATURE_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setFeatureVideosAsync(action) {
  try {
    const jsonpArgs = [requestFeatureVideos(action.page), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: fActions.FEATURE_VIDEOS_SET_SUCCESS, response });
  } catch (e) {
    console.log('feature_videos_set_failed!');
    yield put({ type: fActions.FEATURE_VIDEOS_SET_FAIL, message: e.message });
  }
}

function* fetchFeatureSearchVideosAsync(action) {
  try {
    console.log('inside fetchFeatureSearchVideosAsync');
    // get the entire list of search results, then filter only quicklooks
    // and sort by publish date in descending order.
    let results = [];
    let page = 1;
    let resultsCount = 0;
    let jsonpArgs = [requestSearchVideos(action.keywords, page), params];
    let response = yield call(jsonpWrapper, jsonpArgs);

    while (resultsCount < response.number_of_total_results) {
      results = [...results, ...response.results];
      resultsCount += response.number_of_page_results;
      page += 1;
      jsonpArgs = [requestSearchVideos(action.keywords, page), params];
      response = yield call(jsonpWrapper, jsonpArgs);
    }

    results = results.filter(result => result.video_type === 'Features');
    results = _.sortBy(results, o => new Moment(o.publish_date)).reverse();
    console.log('filtered response: ', results);

    yield put({
      type: fActions.FEATURE_SEARCH_FETCH_SUCCESS,
      results,
      page: 1,
    });

    // turn off the loading spinner
    yield put({ type: sharedActions.SEARCH_SPINNER_SET, on: false });
  } catch (e) {
    yield put({ type: fActions.FEATURE_SEARCH_FETCH_FAIL, message: e.message });
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

export function* watchFetchFeatureSearchVideos() {
  console.log('redux-saga is running the fActions.FEATURE_SEARCH_FETCH action listener');
  yield takeEvery(fActions.FEATURE_SEARCH_FETCH, fetchFeatureSearchVideosAsync);
}
