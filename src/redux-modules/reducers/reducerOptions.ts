import { TAction, TActionType } from "../declarations/actionTypes";
import {
  TActionSetCurrentFileRequest,
  TActionSetCurrentFileSuccess,
  TActionSetCurrentPathRequest,
} from "../declarations/actions/options";

export type TMode = "offline" | "lan" | "managed";
export interface TOptions {
  mode: TMode;
  currentFile: string | undefined;
  currentPath: string;
}
type Actions = TActionSetCurrentFileRequest | TActionSetCurrentPathRequest;

export const reducerOptions = (
  prevStore: TOptions = {
    mode: "offline",
    currentFile: undefined,
    currentPath: "/",
  },
  action: TAction | Actions
): TOptions => {
  switch (action.type) {
    case TActionType.setCurrentFileRequest:
      return { ...prevStore, currentFile: action.payload };
    case TActionType.setCurrentPathRequest:
      return { ...prevStore, currentPath: action.payload };
    default:
      return prevStore;
  }
};
