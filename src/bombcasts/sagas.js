import { put, call, takeEvery } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import _ from 'lodash';
import Moment from 'moment';
import * as sharedActions from '../actions/types';
import * as bActions from './actions/types';
import { requestVideo, requestSearchVideos } from '../api-calls';
import { requestBombcastVideos } from './api-calls';

const jsonpWrapper = (args) => {
  const response = jsonp(...args);
  return response.promise;
};

const params = { param: 'json_callback' };

// workers
function* setBombcastVideoAsync(action) {
  try {
    const jsonpArgs = [requestVideo(action.id), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: bActions.BOMBCAST_VIDEO_SET_SUCCESS, response: response.results });
  } catch (e) {
    console.log('bombcast_video_set_failed!');
    yield put({ type: bActions.BOMBCAST_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setLatestBombcastVideoAsync() {
  try {
    const jsonpArgs = [requestBombcastVideos(1), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: bActions.BOMBCAST_VIDEO_SET_SUCCESS, response: response.results[0] });
  } catch (e) {
    yield put({ type: bActions.BOMBCAST_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setBombcastVideosAsync(action) {
  try {
    const jsonpArgs = [requestBombcastVideos(action.page), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: bActions.BOMBCAST_VIDEOS_SET_SUCCESS, response });
  } catch (e) {
    console.log('bombcast_videos_set_failed!');
    yield put({ type: bActions.BOMBCAST_VIDEOS_SET_FAIL, message: e.message });
  }
}

function* fetchBombcastSearchVideosAsync(action) {
  try {
    console.log('inside fetchBombcastSearchVideosAsync');
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

    results = results.filter(result => result.video_type === 'Giant Bombcast');
    results = _.sortBy(results, o => new Moment(o.publish_date)).reverse();
    console.log('filtered response: ', results);

    yield put({
      type: bActions.BOMBCAST_SEARCH_FETCH_SUCCESS,
      results,
      page: 1,
    });

    yield put({ type: sharedActions.SEARCH_SPINNER_SET, on: false });
  } catch (e) {
    yield put({ type: bActions.BOMBCAST_SEARCH_FETCH_FAIL, message: e.message });
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

export function* watchFetchBombcastSearchVideos() {
  console.log('redux-saga is running the bActions.BOMBCAST_SEARCH_FETCH action listener');
  yield takeEvery(bActions.BOMBCAST_SEARCH_FETCH, fetchBombcastSearchVideosAsync);
}

