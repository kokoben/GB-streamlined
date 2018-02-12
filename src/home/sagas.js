import { takeEvery, call, put } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

// workers
export function* setHomeVideoAsync() {
  try {
    let jsonpArgs = [
      "https://www.giantbomb.com/api/videos/" +
      "?api_key=816627d452ffb34d20762fd2f3b575dfe906bfd9" +
      "&format=jsonp&json_callback=callback" +
      "&limit=1&field_list=hd_url,name,deck,publish_date,image," +
      "user&filter=video_type:3,video_type8" +
      "&sort=publish_date:desc",
      {param: 'json_callback'}
    ];

    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: 'HOME_VIDEO_SET_SUCCEEDED', response: response });
  } catch(e) {
    console.log('setVideoAsync request failed!');
    console.log(e);
    yield put({type: 'HOME_VIDEO_SET_FAILED', message: e.message });
  }
}

// watchers
export function* watchSetHomeVideo() {
  console.log('redux-saga is running the HOME_VIDEO_SET action listener');
  yield takeEvery('HOME_VIDEO_SET', setHomeVideoAsync);
}

