import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middleware = [thunk];

const initialState = {};

const store = createStore(
  initialState,
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
