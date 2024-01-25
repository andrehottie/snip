/** @format */

import { TActionType } from "../declarations/actionTypes";
import {
  TActionCacheSaveSuccess,
  TActionCacheSaveFailure,
  TActionCacheRemoveSuccess,
  TActionCacheRemoveFailure,
} from "../declarations/actions/cache";
import { TStore } from "../declarations/store";

export const actionCacheSaveSuccess = (
  store: TStore
): TActionCacheSaveSuccess => ({
  type: TActionType.cacheSaveSuccess,
  payload: store,
});

export const actionCacheSaveFailure = (): TActionCacheSaveFailure => ({
  type: TActionType.cacheSaveFailure,
});

export const actionCacheRemoveSuccess = (): TActionCacheRemoveSuccess => ({
  type: TActionType.cacheRemoveSuccess,
});

export const actionCacheRemoveFailure = (): TActionCacheRemoveFailure => ({
  type: TActionType.cacheRemoveFailure,
});
