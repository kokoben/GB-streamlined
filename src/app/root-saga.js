import { watchSetVideo } from '../home/sagas';
export default function* rootSaga() {
  yield [
    watchSetVideo(),
  ]
}
