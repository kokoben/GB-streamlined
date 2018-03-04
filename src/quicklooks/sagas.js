import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import _ from 'lodash';
import Moment from 'moment';
import * as qlActions from './actions/types';
import { requestQuicklookVideos } from './api-calls';
import { requestVideo, requestSearchVideos } from '../api-calls';

const jsonpWrapper = (args) => {
  const response = jsonp(...args);
  return response.promise;
};

const params = { param: 'json_callback' };

// workers
function* setQuicklookVideoAsync(action) {
  try {
    const jsonpArgs = [requestVideo(action.id), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: qlActions.QUICKLOOK_VIDEO_SET_SUCCESS, response: response.results });
  } catch (e) {
    console.log('quicklook_video_set_failed!');
    console.log(e);
    yield put({ type: qlActions.QUICKLOOK_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setLatestQuicklookVideoAsync() {
  try {
    const jsonpArgs = [requestQuicklookVideos(1), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: qlActions.QUICKLOOK_VIDEO_SET_SUCCESS, response: response.results[0] });
  } catch (e) {
    yield put({ type: qlActions.QUICKLOOK_VIDEO_SET_FAIL, message: e.message });
  }
}

function* setQuicklookVideosAsync(action) {
  try {
    const jsonpArgs = [requestQuicklookVideos(action.page), params];
    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({ type: qlActions.QUICKLOOK_VIDEOS_SET_SUCCESS, response });
  } catch (e) {
    console.log('quicklook_videos_set_failed!');
    yield put({ type: qlActions.QUICKLOOK_VIDEOS_SET_FAIL, message: e.message });
  }
}

function* fetchQuicklookSearchVideosAsync(action) {
  try {
    console.log('inside fetchQuicklookSearchVideosAsync');
    // get the entire list of search results, then filter only quicklooks
    // and sort by publish date in descending order.
    let results = [];
    let page = 1;
    let resultsCount = 0;
    let jsonpArgs = [requestSearchVideos(action.keywords, page), params];
    let response = yield call(jsonpWrapper, jsonpArgs);
    console.log('fetch response:', response);

    while (resultsCount < response.number_of_total_results) {
      results = [...results, ...response.results];
      resultsCount += response.number_of_page_results;
      page += 1;
      jsonpArgs = [requestSearchVideos(action.keywords, page), params];
      response = yield call(jsonpWrapper, jsonpArgs);
    }

    console.log('results: ', results);
    results = results.filter(result => result.video_type === 'Quick Looks');
    console.log('filtered results: ', results);
    results = _.sortBy(results, o => new Moment(o.publish_date)).reverse();
    yield put({ type: qlActions.QUICKLOOK_SEARCH_FETCH_SUCCESS, results, page: 1 });
    console.log('filtered results by descending date: ', results);
  } catch (e) {
    yield put({ type: qlActions.QUICKLOOK_SEARCH_FETCH_FAIL, message: e.message });
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
  console.log('redux-saga is running the qlActions.LATEST_QUICKLOOK_VIDEO_SET action listener');
  yield takeEvery(qlActions.LATEST_QUICKLOOK_VIDEO_SET, setLatestQuicklookVideoAsync);
}

export function* watchFetchQuicklookSearchVideos() {
  console.log('redux-saga is running the qlActions.QUICKLOOK_SEARCH_FETCH action listener');
  yield takeEvery(qlActions.QUICKLOOK_SEARCH_FETCH, fetchQuicklookSearchVideosAsync);
}
