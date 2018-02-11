import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';

const jsonpWrapper = (args) => {
  const response = jsonp(...args);
  return response.promise;
}

// workers
export function* setVideoAsync() {
  try {
    console.log('attempting to set video via api call');
    let jsonpArgs = [
      "https://www.giantbomb.com/api/videos/" +
      "?api_key=816627d452ffb34d20762fd2f3b575dfe906bfd9" +
      "&format=jsonp&json_callback=callback" +
      "&limit=1&field_list=hd_url,name,deck,publish_date,image," +
      "user&filter=video_type:3,video_type8" +
      "&sort=publish_date:desc",
      {param: 'json_callback'}
    ];

    let response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: 'VIDEO_SET_SUCCEEDED', response: response });
  } catch(e) {
    console.log('setVideoAsync request failed!');
    console.log(e);

    yield put({type: 'VIDEO_SET_FAILED', message: e.message });
  }
}

// watchers
export function* watchSetVideo() {
  console.log('redux-saga is running the VIDEO_SET action listener');
  yield takeEvery('VIDEO_SET', setVideoAsync);
}

