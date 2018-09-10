import initialState from './initialState';
import types from '../constants/actionTypes';

export default function (auth = initialState.auth, {type, payload}) {
  switch (type) {
    case types.LOGOUT:
      return {...auth, isAuth: false}
    case types.LOGIN_SUCCESS:
      return {...auth, isAuth: true, isFetching: false};
    case types.LOGIN_ERROR:
      return {...auth, isFetching: false};
    case types.LOGIN:
      return {...auth, isFetching: true};
    default:
      return auth;
  }
};