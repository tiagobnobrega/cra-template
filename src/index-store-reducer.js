import { combineReducers } from 'redux';

import featureAReducer from './featureA/reducer';

const reducers = {
  featA: featureAReducer,
};
export default combineReducers(reducers);
