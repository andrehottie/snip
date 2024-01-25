/** @format */

import { takeLatest } from "redux-saga/effects";
import { TActionType } from "../declarations/actionTypes";
import { sagaCacheSave } from "../sagas/sagaCache";

export function* watcherCache(): unknown {
  //yield takeLatest(TActionType.loginSuccess, sagaCacheSave);
  yield takeLatest(TActionType.snippetCreateSuccess, sagaCacheSave);
  yield takeLatest(TActionType.snippetUpdateSuccess, sagaCacheSave);
}
