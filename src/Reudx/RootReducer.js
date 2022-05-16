import { combineReducers } from 'redux';
import AppReducer from './Reducers/AppReducer';

const RootReducer = combineReducers({
  App: AppReducer,
});

export default RootReducer;
