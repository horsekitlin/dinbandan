import initialState from './initialState';
import types from '../constants/actionTypes';

export default function (auth = initialState.routes, {type, payload}) {
  switch (type) {
    default:
      return auth;
  }
};