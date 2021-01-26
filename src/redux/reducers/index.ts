import { combineReducers } from 'redux';
import userReducer from 'redux/reducers/userReducer';
import ratingReducer from './ratingReducer';

export default combineReducers({
  userReducer: userReducer,
  ratingReducer: ratingReducer,
});
