import {
  watchSetHomeVideo,
  watchSetLatestHomeVideo,
  watchSetHomeVideos,
  watchFetchHomeSearchVideos,
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
    watchFetchHomeSearchVideos(),
    watchSetFeatureVideo(),
    watchSetLatestFeatureVideo(),
    watchSetFeatureVideos(),
    watchFetchFeatureSearchVideos(),
    watchSetQuicklookVideo(),
    watchSetLatestQuicklookVideo(),
    watchSetQuicklookVideos(),
    watchFetchQuicklookSearchVideos(),
    watchSetBombcastVideo(),
    watchSetLatestBombcastVideo(),
    watchSetBombcastVideos(),
    watchFetchBombcastSearchVideos(),
  ];
}
