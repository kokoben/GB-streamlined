import { 
  watchSetHomeVideo, 
  watchSetLatestHomeVideo ,
  watchSetHomeVideos
} from '../home/sagas';
import { 
  watchSetFeatureVideo, 
  watchSetFeatureVideos,
} from '../features/sagas';
import { 
  watchSetQuicklookVideo, 
  watchSetLatestQuicklookVideo,
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
    watchSetLatestQuicklookVideo(),
    watchSetQuicklookVideos(),
    watchSetBombcastVideo(),
    watchSetLatestBombcastVideo(),
    watchSetBombcastVideos(),
  ]
}
