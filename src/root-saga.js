import { 
  watchSetHomeVideo, 
  watchSetLatestHomeVideo ,
  watchSetHomeVideos
} from './home/sagas';
import { 
  watchSetFeatureVideo, 
  watchSetLatestFeatureVideo,
  watchSetFeatureVideos,
} from './features/sagas';
import { 
  watchSetQuicklookVideo, 
  watchSetLatestQuicklookVideo,
  watchSetQuicklookVideos 
} from './quicklooks/sagas';
import { 
  watchSetBombcastVideo, 
  watchSetLatestBombcastVideo,
  watchSetBombcastVideos
} from './bombcasts/sagas';

export default function* rootSaga() {
  yield [
    watchSetHomeVideo(),
    watchSetLatestHomeVideo(),
    watchSetHomeVideos(),
    watchSetFeatureVideo(),
    watchSetLatestFeatureVideo(),
    watchSetFeatureVideos(),
    watchSetQuicklookVideo(),
    watchSetLatestQuicklookVideo(),
    watchSetQuicklookVideos(),
    watchSetBombcastVideo(),
    watchSetLatestBombcastVideo(),
    watchSetBombcastVideos(),
  ]
}
