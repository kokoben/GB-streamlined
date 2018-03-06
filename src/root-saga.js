import {
  watchSetHomeVideo,
  watchSetLatestHomeVideo,
  watchSetHomeVideos,
} from './home/sagas';
import {
  watchSetFeatureVideo,
  watchSetLatestFeatureVideo,
  watchSetFeatureVideos,
  watchFetchFeatureSearchVideos,
} from './features/sagas';
import {
  watchSetQuicklookVideo,
  watchSetLatestQuicklookVideo,
  watchSetQuicklookVideos,
  watchFetchQuicklookSearchVideos,
} from './quicklooks/sagas';
import {
  watchSetBombcastVideo,
  watchSetLatestBombcastVideo,
  watchSetBombcastVideos,
  watchFetchBombcastSearchVideos,
} from './bombcasts/sagas';

export default function* rootSaga() {
  yield [
    watchSetHomeVideo(),
    watchSetLatestHomeVideo(),
    watchSetHomeVideos(),
    watchSetFeatureVideo(),
    watchFetchFeatureSearchVideos(),
    watchSetLatestFeatureVideo(),
    watchSetFeatureVideos(),
    watchSetQuicklookVideo(),
    watchFetchQuicklookSearchVideos(),
    watchSetLatestQuicklookVideo(),
    watchSetQuicklookVideos(),
    watchSetBombcastVideo(),
    watchFetchBombcastSearchVideos(),
    watchSetLatestBombcastVideo(),
    watchSetBombcastVideos(),
  ];
}
