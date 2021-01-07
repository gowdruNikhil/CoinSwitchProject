import { combineReducers } from 'redux';
import getAllCoinsReducer from './reducers.getAllCoins';

const AppReducers = combineReducers({
  getAllCoinsReducer
});

export default AppReducers;
