import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { homeVideo, homeVideos } from '../home/reducers';
import { featureVideo, featureVideos } from '../features/reducers';
import { quicklookVideo, quicklookVideos } from '../quicklooks/reducers';
import { bombcastVideo, bombcastVideos } from '../bombcasts/reducers';

export default combineReducers({
  routing: routerReducer,
  homeVideo,
  homeVideos,
  featureVideo,
  featureVideos,
  quicklookVideo,
  quicklookVideos,
  bombcastVideo,
  bombcastVideos,
})
