import {takeLatest} from "redux-saga/effects";
import types from "../constants/actionTypes";
import { loginSaga } from "./loginSagas";

export function* watchLoginSaga() {
  yield takeLatest(types.LOGIN, loginSaga);
}
