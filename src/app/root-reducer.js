import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { homeVideo } from '../home/reducers';
import { featureVideo } from '../features/reducers';
import { quicklookVideo } from '../quicklooks/reducers';
import { bombcastVideo } from '../bombcasts/reducers';

export default combineReducers({
  routing: routerReducer,
  homeVideo,
  featureVideo,
  quicklookVideo,
  bombcastVideo,
})
