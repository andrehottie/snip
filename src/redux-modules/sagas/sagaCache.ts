/** @format */
import { select, put } from "redux-saga/effects";
import { TStore } from "../declarations/store";
import {
  utilityRemoveLocalStorage,
  utilitySaveToLocalStorage,
} from "../../utils";
import {
  actionCacheSaveSuccess,
  actionCacheSaveFailure,
  actionCacheRemoveSuccess,
  actionCacheRemoveFailure,
} from "../actions/actionsCache";
import { selectorReduxStore } from "../selectors/selectorsCache";
import { APP_NAME } from "../configureStore";

export function* sagaCacheSave(): unknown {
  try {
    const store: TStore = yield select(selectorReduxStore);
    utilitySaveToLocalStorage(APP_NAME, store);
    yield put(actionCacheSaveSuccess(store));
  } catch {
    yield put(actionCacheSaveFailure());
  }
}

export function* sagaCacheRemove(): unknown {
  try {
    utilityRemoveLocalStorage(APP_NAME);
    yield put(actionCacheRemoveSuccess());
  } catch {
    yield put(actionCacheRemoveFailure());
  }
}
