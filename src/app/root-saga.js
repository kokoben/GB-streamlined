import { watchSetHomeVideo } from '../home/sagas';
import { watchSetFeatureVideo } from '../features/sagas';
export default function* rootSaga() {
  yield [
    watchSetHomeVideo(),
    watchSetFeatureVideo(),
  ]
}
