import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { latestVideo } from '../home/reducers';

export default combineReducers({
  routing: routerReducer,
  latestVideo
})
