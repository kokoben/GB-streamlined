import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import _ from 'lodash';
import Moment from 'moment';
import * as sharedActions from '../actions/types';
import * as hActions from './actions/types';
import { requestHomeVideos } from './api-calls';
import { requestVideo, requestSearchVideos } from '../api-calls';

const jsonpWrapper = (args) => {
  const response = jsonp(...args);
  return response.promise;
};

const params = { param: 'json_callback' };

// workers
function* setHomeVideoAsync(action) {
  try {
    console.log('inside sethomevideoasync');
    console.log('id', action.id);
    const jsonpArgs = [requestVideo(action.id), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: hActions.HOME_VIDEO_SET_SUCCESS, response: response.results });
  } catch (e) {
    console.log('setHomeVideoAsync request failed!');
    yield put({ type: hActions.HOME_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setLatestHomeVideoAsync() {
  try {
    const jsonpArgs = [requestHomeVideos(1), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: hActions.HOME_VIDEO_SET_SUCCESS, response: response.results[0] });
  } catch (e) {
    yield put({ type: hActions.HOME_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setHomeVideosAsync(action) {
  try {
    const jsonpArgs = [requestHomeVideos(action.page), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: hActions.HOME_VIDEOS_SET_SUCCESS, response });
  } catch (e) {
    console.log('setHomeVideosAsync request failed!');
    yield put({ type: hActions.HOME_VIDEOS_SET_FAIL, message: e.message });
  }
}

function* fetchHomeSearchVideosAsync(action) {
  try {
    console.log('inside fetchHomeSearchVideosAsync');
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

    results = results.filter(result =>
      result.video_type === 'Features' ||
      result.video_type === 'Quick Looks' ||
      result.video_type === 'Giant Bombcast');

    results = _.sortBy(results, o => new Moment(o.publish_date)).reverse();
    console.log('filtered response: ', results);

    yield put({
      type: hActions.HOME_SEARCH_FETCH_SUCCESS,
      results,
      page: 1,
    });

    yield put({ type: sharedActions.SEARCH_SPINNER_SET, on: false });
  } catch (e) {
    yield put({ type: hActions.HOME_SEARCH_FETCH_FAIL, message: e.message });
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

export function* watchFetchHomeSearchVideos() {
  console.log('redux-saga is running the hActions.HOME_SEARCH_FETCH action listener');
  yield takeEvery(hActions.HOME_SEARCH_FETCH, fetchHomeSearchVideosAsync);
}
