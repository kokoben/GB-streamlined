import { put, call, takeEvery } from 'redux-saga/effects';
import jsonp from 'jsonp-promise';
import {
  BOMBCAST_VIDEO_SET,
  BOMBCAST_VIDEO_SET_SUCCESS,
  BOMBCAST_VIDEO_SET_FAIL,
} from './actions';

const jsonpWrapper = args => {
  const response = jsonp(...args);
  return response.promise;
}

// workers
function* setBombcastVideoAsync() {
  try {
    const jsonpArgs = [
      "https://www.giantbomb.com/api/videos/" +
      "?api_key=816627d452ffb34d20762fd2f3b575dfe906bfd9" +
      "&format=jsonp&json_callback=callback&limit=1&field_list=name," +
      "deck,publish_date,user,embed_player&filter=video_type:23" +
      "&sort=publish_date:desc",
      {param: "json_callback"}
    ]

    const response = yield call(jsonpWrapper, jsonpArgs);
    yield put({type: BOMBCAST_VIDEO_SET_SUCCESS, response: response});
  } catch (e) {
    console.log('bombcast_video_set_failed!');
    yield put({type: BOMBCAST_VIDEO_SET_FAIL, message: e.message});
  }

}

// watchers
export function* watchSetBombcastVideo() {
  yield takeEvery(BOMBCAST_VIDEO_SET, setBombcastVideoAsync);
}
