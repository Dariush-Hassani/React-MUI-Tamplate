import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './RootReducer';

// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store
const store = createStore(
  RootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
