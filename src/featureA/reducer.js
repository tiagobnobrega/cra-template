import { TYPES } from './actions';

const INITIAL_STATE = {
  collection: [],
  active: null,
  loading: true,
  error: null,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TYPES.FEATURE_A_LIST: {
      return {
        ...state,
        collection: payload.data,
      };
    }
    case TYPES.FEATURE_A_ADD: {
      return {
        ...state,
        collection: [...state.collection, payload.data],
      };
    }
    case TYPES.FEATURE_A_SELECT: {
      return {
        ...state,
        collection: [...state.collection, payload.data],
      };
    }
    case TYPES.FEATURE_A_REMOVE: {
      return {
        ...state,
        collection: state.collection.filter(e => e.id !== payload.id),
      };
    }
    case TYPES.FEATURE_A_UPDATE: {
      return {
        ...state,
        collection: state.collection.map(e => (e.id === payload.data.id ? payload.data : e)),
      };
    }
    case TYPES.FEATURE_A_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case TYPES.FEATURE_A_REQUEST_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload.e,
      };
    }
    case TYPES.FEATURE_A_REQUEST_SUCCESS: {
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
