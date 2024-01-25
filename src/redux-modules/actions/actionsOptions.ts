import { TListStringKey } from "../../declarations/db";
import { TSnippet } from "../../declarations/snippet";
import { TActionType } from "../declarations/actionTypes";
import {
  TActionSetCurrentFileRequest,
  TActionSetCurrentFileSuccess,
  TActionSetCurrentFileFailure,
  TActionSetCurrentPathFailure,
  TActionSetCurrentPathRequest,
  TActionSetCurrentPathSuccess,
} from "../declarations/actions/options";

//SetCurrentFile
export const actionSetCurrentFileRequest = (
  filename: string
): TActionSetCurrentFileRequest => ({
  type: TActionType.setCurrentFileRequest,
  payload: filename,
});

export const actionSetCurrentFileSuccess = (
  payload: string
): TActionSetCurrentFileSuccess => ({
  type: TActionType.setCurrentFileSuccess,
  payload,
});

export const actionSetCurrentFileFailure =
  (): TActionSetCurrentFileFailure => ({
    type: TActionType.setCurrentFileFailure,
  });

//SetCurrentPath
export const actionSetCurrentPathRequest = (
  filename: string
): TActionSetCurrentPathRequest => ({
  type: TActionType.setCurrentPathRequest,
  payload: filename,
});

export const actionSetCurrentPathSuccess = (
  payload: string
): TActionSetCurrentPathSuccess => ({
  type: TActionType.setCurrentPathSuccess,
  payload,
});

export const actionSetCurrentPathFailure =
  (): TActionSetCurrentPathFailure => ({
    type: TActionType.setCurrentPathFailure,
  });
