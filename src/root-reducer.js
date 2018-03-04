import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import SharedReducers from './reducers';
import HomeReducers from './home/reducers';
import FeatureReducers from './features/reducers';
import QuicklookReducers from './quicklooks/reducers';
import BombcastReducers from './bombcasts/reducers';

export default combineReducers({
  routing: routerReducer,
  shared: SharedReducers,
  home: HomeReducers,
  quicklooks: QuicklookReducers,
  bombcasts: BombcastReducers,
  features: FeatureReducers,
});
