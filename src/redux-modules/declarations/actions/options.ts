import { TAction, TActionType } from "../actionTypes";

export interface TActionSetCurrentFileRequest
  extends TAction<TActionType.setCurrentFileRequest> {
  payload: string;
}
export interface TActionSetCurrentFileSuccess
  extends TAction<TActionType.setCurrentFileSuccess> {
  payload: string;
}
export interface TActionSetCurrentFileFailure
  extends TAction<TActionType.setCurrentFileFailure> {}

export interface TActionSetCurrentPathRequest
  extends TAction<TActionType.setCurrentPathRequest> {
  payload: string;
}
export interface TActionSetCurrentPathSuccess
  extends TAction<TActionType.setCurrentPathSuccess> {
  payload: string;
}
export interface TActionSetCurrentPathFailure
  extends TAction<TActionType.setCurrentPathFailure> {}
