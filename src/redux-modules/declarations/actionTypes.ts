export enum TActionType {
  //region Snippets

  snippetListRequest = "[Action] - Snippets List Request",
  snippetListSuccess = "[Action] - Snippets List Success",
  snippetListFailure = "[Action] - Snippets List Failure",

  snippetCreateRequest = "[Action] - Snippets Create Request",
  snippetCreateSuccess = "[Action] - Snippets Create Success",
  snippetCreateFailure = "[Action] - Snippets Create Failure",
  snippetCreateReset = "[Action] - Snippets Create Reset",

  snippetUpdateRequest = "[Action] - Snippets Update Request",
  snippetUpdateSuccess = "[Action] - Snippets Update Success",
  snippetUpdateFailure = "[Action] - Snippets Update Failure",
  snippetUpdateReset = "[Action] - Snippets Update Reset",

  snippetDeleteRequest = "[Action] - Snippets Delete Request",
  snippetDeleteSuccess = "[Action] - Snippets Delete Success",
  snippetDeleteFailure = "[Action] - Snippets Delete Failure",
  snippetDeleteReset = "[Action] - Snippets Delete Reset",

  snippetListLoadingRequest = "[Action] - Loading Snippets List Request",
  snippetListLoadingSuccess = "[Action] - Loading Snippets List Success",
  snippetListLoadingFailure = "[Action] - Loading Snippets List Failure",

  //endregion

  //region Options
  setCurrentFileRequest = "[Action] - Set Current File Request",
  setCurrentFileSuccess = "[Action] - Set Current File Success",
  setCurrentFileFailure = "[Action] - Set Current File Failure",

  setCurrentPathRequest = "[Action] - Set Current Path Request",
  setCurrentPathSuccess = "[Action] - Set Current Path Success",
  setCurrentPathFailure = "[Action] - Set Current Path Failure",
  //endregion Options

  //region Cache
  cacheSaveSuccess = "[Event] - Save to Local Storage Success",
  cacheSaveFailure = "[Event] - Save to Local Storage Failure",
  cacheRemoveSuccess = "[Event] - Remove from Local Storage Success",
  cacheRemoveFailure = "[Event] - Remove from Local Storage Success",
  //endregion Cache

  setMode = "[Action] - Set Mode",

  resetMode = "[Action] - Reset Mode",
  //
}

export interface TAction<T = TActionType> {
  type: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
