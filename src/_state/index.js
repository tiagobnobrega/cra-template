import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory as createHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './index-reducer';

// Create history object
export const history = createHistory();
// define initial state
const initialState = {};
// define enhancers
const enhancers = [];
// define middleware array
const middleware = [routerMiddleware(history), thunk];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const index = createStore(connectRouter(history)(rootReducer), initialState, composedEnhancers);

export default index;
