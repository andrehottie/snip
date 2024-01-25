/** @format */

import { TActionType, TAction } from "../actionTypes";
import { TStore } from "../store";

export interface TActionCacheSaveSuccess
  extends TAction<TActionType.cacheSaveSuccess> {
  payload: TStore;
}

export interface TActionCacheSaveFailure
  extends TAction<TActionType.cacheSaveFailure> {}

export interface TActionCacheRemoveSuccess
  extends TAction<TActionType.cacheRemoveSuccess> {}

export interface TActionCacheRemoveFailure
  extends TAction<TActionType.cacheRemoveFailure> {}

export interface TActionFailure<T = TActionType> extends TAction<T> {
  reason: string;
}
