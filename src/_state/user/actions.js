import * as api from '../../_api/appApi';

// Exported TYPES to be used by reducer
export const NS = 'USER'; // action namespace
export const TYPES = {
  REQUEST: `${NS}/REQUEST`,
  REQUEST_SUCCESS: `${NS}/REQUEST_SUCCESS`,
  REQUEST_FAIL: `${NS}/REQUEST_FAIL`,

  LIST: `${NS}/LIST`,
  GET: `${NS}/GET`,
  ADD: `${NS}/ADD`,
  UPDATE: `${NS}/UPDATE`,
  REMOVE: `${NS}/REMOVE`,
};

const API_SLUG = 'user';
// Private action creators/thunks
const request = () => ({ type: TYPES.REQUEST });
const success = () => ({ type: TYPES.REQUEST_SUCCESS });
const fail = error => ({ type: TYPES.REQUEST_FAIL, payload: { error } });

// Exported actionCreators/thunks to be used by containers
export const select = () => id => ({ type: TYPES.SELECT, payload: { id } });

export const get = id => async dispatch => {
  dispatch(request());
  try {
    // Should make async api call using axios or fetch
    const data = await api.findOne(API_SLUG, id);
    dispatch({ type: TYPES.LIST, payload: { data } });
    dispatch(success());
    return { data };
  } catch (e) {
    dispatch(fail(e));
    throw e;
  }
};

export const list = () => async dispatch => {
  dispatch(request());
  try {
    // Should make async api call using axios or fetch
    const data = await api.findAll(API_SLUG);
    dispatch({ type: TYPES.LIST, payload: { data } });
    dispatch(success());
  } catch (e) {
    dispatch(fail(e));
  }
};

export const add = itemToAdd => async dispatch => {
  dispatch(request());
  try {
    const data = await api.insert(API_SLUG, itemToAdd);
    dispatch({ type: TYPES.ADD, payload: { data } });
    dispatch(success());
  } catch (e) {
    dispatch(fail(e));
  }
};

export const update = itemToUpdate => async dispatch => {
  dispatch(request());
  try {
    const data = await api.update(API_SLUG, itemToUpdate);
    dispatch({ type: TYPES.ADD, payload: { data } });
    dispatch(success());
  } catch (e) {
    dispatch(fail(e));
  }
};

export const remove = id => async dispatch => {
  dispatch(request());
  try {
    await api.remove(API_SLUG, id);
    dispatch({ type: TYPES.REMOVE, payload: { id } });
    dispatch(success());
  } catch (e) {
    dispatch(fail(e));
  }
};
