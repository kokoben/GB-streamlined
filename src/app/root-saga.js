import { 
  watchSetHomeVideo, 
  watchSetHomeVideos, 
  watchSetLatestHomeVideo 
} from '../home/sagas';
import { 
  watchSetFeatureVideo, 
  watchSetFeatureVideos,
} from '../features/sagas';
import { 
  watchSetQuicklookVideo, 
  watchSetQuicklookVideos 
} from '../quicklooks/sagas';
import { 
  watchSetBombcastVideo, 
  watchSetLatestBombcastVideo,
  watchSetBombcastVideos
} from '../bombcasts/sagas';

export default function* rootSaga() {
  yield [
    watchSetHomeVideo(),
    watchSetLatestHomeVideo(),
    watchSetHomeVideos(),
    watchSetFeatureVideo(),
    watchSetFeatureVideos(),
    watchSetQuicklookVideo(),
    watchSetQuicklookVideos(),
    watchSetBombcastVideo(),
    watchSetLatestBombcastVideo(),
    watchSetBombcastVideos(),
  ]
}
