import { TSnippets } from "../../declarations/db";
import { TActionType } from "../declarations/actionTypes";
import {
  TActionSnippetCreateFailure,
  TActionSnippetCreateRequest,
  TActionSnippetCreateReset,
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
  TActionSnippetsListRequest,
  TActionSnippetsListSuccess,
} from "../declarations/actions/snippets";

type Actions =
  | TActionSnippetsListRequest
  | TActionSnippetsListSuccess
  | TActionSnippetsListFailure
  | TActionSnippetCreateFailure
  | TActionSnippetCreateRequest
  | TActionSnippetCreateReset
  | TActionSnippetCreateSuccess
  | TActionSnippetUpdateFailure
  | TActionSnippetUpdateRequest
  | TActionSnippetUpdateSuccess
  | TActionSnippetUpdateReset
  | TActionSnippetDeleteRequest
  | TActionSnippetDeleteFailure
  | TActionSnippetDeleteSuccess
  | TActionSnippetDeleteReset;

export const reducerSnippets = (
  prevStore: TSnippets = { snippets: {}, isLoading: false, errors: false },
  action: Actions
): TSnippets => {
  switch (action.type) {
    case TActionType.snippetListRequest:
      return { ...prevStore, isLoading: true };
    case TActionType.snippetListSuccess:
      return { ...prevStore, snippets: action.payload, isLoading: false };
    case TActionType.snippetListFailure:
      return { ...prevStore, isLoading: false };
    case TActionType.snippetDeleteRequest:
      return { ...prevStore, isLoading: true };
    case TActionType.snippetDeleteSuccess:
      return {
        ...prevStore,
        snippets: action.payload,
      };
    case TActionType.snippetDeleteFailure:
      return { ...prevStore, isLoading: false, errors: true };
    case TActionType.snippetDeleteReset:
      return { ...prevStore, isLoading: false, errors: false };
    case TActionType.snippetCreateRequest:
      return { ...prevStore, isLoading: true, errors: false };
    case TActionType.snippetCreateSuccess:
      return {
        ...prevStore,
        snippets: action.payload,
      };
    case TActionType.snippetCreateFailure:
      return { ...prevStore, isLoading: false, errors: true };
    case TActionType.snippetCreateReset:
      return { ...prevStore, isLoading: false, errors: false };
    case TActionType.snippetUpdateRequest:
      return { ...prevStore, isLoading: true, errors: false };
    case TActionType.snippetUpdateSuccess:
      return {
        ...prevStore,
        snippets: action.payload,
      };
    case TActionType.snippetUpdateFailure:
      return { ...prevStore, isLoading: false, errors: true };
    case TActionType.snippetUpdateReset:
      return { ...prevStore, isLoading: false, errors: false };

    default:
      return prevStore;
  }
};
