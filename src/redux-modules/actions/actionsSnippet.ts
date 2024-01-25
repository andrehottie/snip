import { TListStringKey } from "../../declarations/db";
import { TSnippet } from "../../declarations/snippet";
import { TAction, TActionType } from "../declarations/actionTypes";
import {
  TActionSnippetCreateFailure,
  TActionSnippetCreateRequest,
  TActionSnippetCreateSuccess,
  TActionSnippetDeleteFailure,
  TActionSnippetDeleteRequest,
  TActionSnippetDeleteReset,
  TActionSnippetDeleteSuccess,
  TActionSnippetUpdateFailure,
  TActionSnippetUpdateRequest,
  TActionSnippetUpdateReset,
  TActionSnippetUpdateSuccess,
  TActionSnippetsListFailure,
  TActionSnippetsListLoadingFailure,
  TActionSnippetsListLoadingRequest,
  TActionSnippetsListLoadingSuccess,
  TActionSnippetsListRequest,
  TActionSnippetsListSuccess,
  TSnippetCreateRequest,
  TSnippetList,
  TSnippetUpdateRequest,
} from "../declarations/actions/snippets";

//List
export const actionSnippetListRequest = (): TActionSnippetsListRequest => ({
  type: TActionType.snippetListRequest,
});

export const actionSnippetListSuccess = (
  payload: TListStringKey<TSnippet>
): TActionSnippetsListSuccess => ({
  type: TActionType.snippetListSuccess,
  payload,
});

export const actionSnippetListFailure = (): TActionSnippetsListFailure => ({
  type: TActionType.snippetListFailure,
});

//---
//Loading

export const actionSnippetListLoadingRequest =
  (): TActionSnippetsListLoadingRequest => ({
    type: TActionType.snippetListLoadingRequest,
  });

export const actionSnippetListLoadingSuccess =
  (): TActionSnippetsListLoadingSuccess => ({
    type: TActionType.snippetListLoadingSuccess,
  });

export const actionSnippetListLoadingFailure =
  (): TActionSnippetsListLoadingFailure => ({
    type: TActionType.snippetListLoadingFailure,
  });

// ---

//Create
export const actionSnippetCreateRequest = (
  payload: TSnippetCreateRequest
): TActionSnippetCreateRequest => ({
  type: TActionType.snippetCreateRequest,
  payload,
});

export const actionSnippetCreateSuccess = (
  payload: TSnippetList
): TActionSnippetCreateSuccess => ({
  type: TActionType.snippetCreateSuccess,
  payload,
});
export const actionSnippetCreateFailure = (): TActionSnippetCreateFailure => ({
  type: TActionType.snippetCreateFailure,
});
export const actionSnippetCreateReset = (): TAction => ({
  type: TActionType.snippetCreateReset,
});
// ---
// Update
export const actionSnippetUpdateRequest = (
  payload: TSnippetUpdateRequest
): TActionSnippetUpdateRequest => ({
  type: TActionType.snippetUpdateRequest,
  payload,
});

export const actionSnippetUpdateSuccess = (
  payload: TSnippetList
): TActionSnippetUpdateSuccess => ({
  type: TActionType.snippetUpdateSuccess,
  payload,
});

export const actionSnippetUpdateFailure = (): TActionSnippetUpdateFailure => ({
  type: TActionType.snippetUpdateFailure,
});

export const actionSnippetUpdateReset = (): TActionSnippetUpdateReset => ({
  type: TActionType.snippetUpdateReset,
});

// ---
// Delete
export const actionSnippetDeleteRequest = (
  payload: string
): TActionSnippetDeleteRequest => ({
  type: TActionType.snippetDeleteRequest,
  payload,
});

export const actionSnippetDeleteSuccess = (
  payload: TListStringKey<TSnippet>
): TActionSnippetDeleteSuccess => ({
  type: TActionType.snippetDeleteSuccess,
  payload,
});

export const actionSnippetDeleteFailure = (): TActionSnippetDeleteFailure => ({
  type: TActionType.snippetDeleteFailure,
});

export const actionSnippetDeleteReset = (): TActionSnippetDeleteReset => ({
  type: TActionType.snippetDeleteReset,
});

// ---
