import * as api from '../_api/appApi';

// Exported TYPES to be used by reducer
export const TYPES = {
  FEATURE_A_REQUEST: 'FEATURE_A_REQUEST',
  FEATURE_A_REQUEST_SUCCESS: 'FEATURE_A_REQUEST_SUCCESS',
  FEATURE_A_REQUEST_FAIL: 'FEATURE_A_REQUEST_FAIL',

  FEATURE_A_LIST: 'FEATURE_A_LIST',
  FEATURE_A_SELECT: 'FEATURE_A_SELECT',
  FEATURE_A_ADD: 'FEATURE_A_ADD',
  FEATURE_A_UPDATE: 'FEATURE_A_UPDATE',
  FEATURE_A_REMOVE: 'FEATURE_A_REMOVE',
};

// Private action creators/thunks
const request = () => ({ type: TYPES.FEATURE_A_REQUEST });
const success = () => ({ type: TYPES.FEATURE_A_REQUEST_SUCCESS });
const fail = error => ({ type: TYPES.FEATURE_A_REQUEST_FAIL, payload: { error } });

// Exported actionCreators/thunks to be used by containers
export const select = () => id => ({ type: TYPES.FEATURE_A_SELECT, payload: { id } });

export const list = () => async dispatch => {
  dispatch(request());
  try {
    // Should make async api call using axios or fetch
    const data = await api.findAll('featureA');
    dispatch({ type: TYPES.FEATURE_A_LIST, payload: { data } });
    dispatch(success());
  } catch (e) {
    fail(e);
  }
};

export const add = itemToAdd => async dispatch => {
  dispatch(request());
  try {
    const data = await api.insert('featureA', itemToAdd);
    dispatch({ type: TYPES.FEATURE_A_ADD, payload: { data } });
    dispatch(success());
  } catch (e) {
    fail(e);
  }
};

export const update = itemToUpdate => async dispatch => {
  dispatch(request());
  try {
    const data = await api.update('featureA', itemToUpdate);
    dispatch({ type: TYPES.FEATURE_A_ADD, payload: { data } });
    dispatch(success());
  } catch (e) {
    fail(e);
  }
};

export const remove = id => async dispatch => {
  dispatch(request());
  try {
    await api.remove('featureA', id);
    dispatch({ type: TYPES.FEATURE_A_REMOVE, payload: { id } });
    dispatch(success());
  } catch (e) {
    fail(e);
  }
};
