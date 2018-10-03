import { TYPES } from './actions';

const INITIAL_STATE = {
  collection: [],
  active: null,
  loading: true,
  error: null,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.LIST: {
      return {
        ...state,
        collection: payload.data,
      };
    }
    case TYPES.ADD: {
      return {
        ...state,
        collection: [...state.collection, payload.data],
      };
    }
    case TYPES.SELECT: {
      return {
        ...state,
        collection: [...state.collection, payload.data],
      };
    }
    case TYPES.REMOVE: {
      return {
        ...state,
        collection: state.collection.filter(e => e.id !== payload.id),
      };
    }
    case TYPES.UPDATE: {
      return {
        ...state,
        collection: state.collection.map(e => (e.id === payload.data.id ? payload.data : e)),
      };
    }
    case TYPES.REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case TYPES.REQUEST_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload.e,
      };
    }
    case TYPES.REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
