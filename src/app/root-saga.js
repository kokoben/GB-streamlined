import { watchSetHomeVideo } from '../home/sagas';
import { watchSetFeatureVideo } from '../features/sagas';
import { watchSetQuicklookVideo } from '../quicklooks/sagas';

export default function* rootSaga() {
  yield [
    watchSetHomeVideo(),
    watchSetFeatureVideo(),
    watchSetQuicklookVideo(),
  ]
}
