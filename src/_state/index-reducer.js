import { combineReducers } from 'redux';

import featA from './featA/reducer';
import featB from './featB/reducer';
import user from './user/reducer';

const reducers = {
  featA,
  featB,
  user,
};
export default combineReducers(reducers);
