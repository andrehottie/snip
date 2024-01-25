/** @format */

import { TListStringKey } from "../../../declarations/db";
import { TSnippet } from "../../../declarations/snippet";
import { TAction, TActionType } from "../actionTypes";

export interface TSnippetList extends TListStringKey<TSnippet> {}
export interface TSnippetCreateRequest {
  content: string;
  language: string;
  created_by: string;
  updated_by: string;
  parent_uid?: string;
}
export interface TSnippetUpdateRequest {
  uid: string;
  content: string;
  language: string;
  created_by: string;
  updated_by: string;
  parent_uid?: string;
}

export interface TActionSnippetsListRequest
  extends TAction<TActionType.snippetListRequest> {}
export interface TActionSnippetsListSuccess
  extends TAction<TActionType.snippetListSuccess> {
  payload: TListStringKey<TSnippet>;
}
export interface TActionSnippetsListFailure
  extends TAction<TActionType.snippetListFailure> {}

export interface TActionSnippetsListLoadingRequest
  extends TAction<TActionType.snippetListLoadingRequest> {}
export interface TActionSnippetsListLoadingSuccess
  extends TAction<TActionType.snippetListLoadingSuccess> {}
export interface TActionSnippetsListLoadingFailure
  extends TAction<TActionType.snippetListLoadingFailure> {}

export interface TActionSnippetCreateRequest
  extends TAction<TActionType.snippetCreateRequest> {
  payload: TSnippetCreateRequest;
}
export interface TActionSnippetCreateSuccess
  extends TAction<TActionType.snippetCreateSuccess> {
  payload: TSnippetList;
}
export interface TActionSnippetCreateFailure
  extends TAction<TActionType.snippetCreateFailure> {}
export interface TActionSnippetCreateReset
  extends TAction<TActionType.snippetCreateReset> {}

export interface TActionSnippetUpdateRequest
  extends TAction<TActionType.snippetUpdateRequest> {
  payload: TSnippetUpdateRequest;
}

export interface TActionSnippetUpdateSuccess
  extends TAction<TActionType.snippetUpdateSuccess> {
  payload: TSnippetList;
}

export interface TActionSnippetUpdateFailure
  extends TAction<TActionType.snippetUpdateFailure> {}

export interface TActionSnippetUpdateReset
  extends TAction<TActionType.snippetUpdateReset> {}

export interface TActionSnippetDeleteRequest
  extends TAction<TActionType.snippetDeleteRequest> {
  payload: string;
}

export interface TActionSnippetDeleteSuccess
  extends TAction<TActionType.snippetDeleteSuccess> {
  payload: TListStringKey<TSnippet>;
}

export interface TActionSnippetDeleteFailure
  extends TAction<TActionType.snippetDeleteFailure> {}

export interface TActionSnippetDeleteReset
  extends TAction<TActionType.snippetDeleteReset> {}
