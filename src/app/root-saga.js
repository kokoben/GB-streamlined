import { 
  watchSetHomeVideo, 
  watchSetHomeVideos, 
  watchGetLatestHomeVideoId 
} from '../home/sagas';
import { watchSetFeatureVideo, watchSetFeatureVideos } from '../features/sagas';
import { watchSetQuicklookVideo, watchSetQuicklookVideos } from '../quicklooks/sagas';
import { watchSetBombcastVideo, watchSetBombcastVideos } from '../bombcasts/sagas';

export default function* rootSaga() {
  yield [
    watchSetHomeVideo(),
    watchGetLatestHomeVideoId(),
    watchSetHomeVideos(),
    watchSetFeatureVideo(),
    watchSetFeatureVideos(),
    watchSetQuicklookVideo(),
    watchSetQuicklookVideos(),
    watchSetBombcastVideo(),
    watchSetBombcastVideos(),
  ]
}
