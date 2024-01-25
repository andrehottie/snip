/** @format */

import { takeLatest } from "redux-saga/effects";
import { TActionType } from "../declarations/actionTypes";
import {
  sagaSnippetCreate,
  sagaSnippetList,
  sagaSnippetDelete,
  sagaSnippetUpdate,
} from "../sagas/sagaSnippets";

export function* watcherSnippets(): unknown {
  yield takeLatest(TActionType.snippetCreateRequest, sagaSnippetCreate);
  yield takeLatest(TActionType.snippetListRequest, sagaSnippetList);
  yield takeLatest(TActionType.snippetDeleteRequest, sagaSnippetDelete);
  yield takeLatest(TActionType.snippetUpdateRequest, sagaSnippetUpdate);
}
