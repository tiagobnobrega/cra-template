import _keyBy from 'lodash/keyBy';

export const getUsersById = (state) => _keyBy(state && state.user && state.user.collection , 'id');

