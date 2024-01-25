import { put, all, select } from "redux-saga/effects";
import { TSnippet } from "../../declarations/snippet";
import {
  actionSnippetCreateSuccess,
  actionSnippetCreateReset,
  actionSnippetCreateFailure,
  actionSnippetListLoadingRequest,
  actionSnippetListSuccess,
  actionSnippetListLoadingSuccess,
  actionSnippetListFailure,
  actionSnippetListLoadingFailure,
  actionSnippetUpdateSuccess,
  actionSnippetUpdateReset,
  actionSnippetUpdateFailure,
  actionSnippetDeleteSuccess,
  actionSnippetDeleteReset,
  actionSnippetDeleteFailure,
} from "../actions/actionsSnippet";
import {
  TActionSnippetCreateRequest,
  TActionSnippetsListRequest,
  TActionSnippetUpdateRequest,
  TActionSnippetDeleteRequest,
} from "../declarations/actions/snippets";
import { selectorMode } from "../selectors/selectorOptions/selectorsMode";
import { generateUniqueUID } from "../../models/db";
import {
  selectorSnippet,
  selectorSnippetList,
} from "../selectors/selectorsSnippets";
import moment from "moment";
import { TStore } from "../declarations/store";

export function* sagaSnippetCreate(
  action: TActionSnippetCreateRequest
): unknown {
  const mode = yield select(selectorMode);
  if (mode == "offline") {
    // TODO
    // Crea snippet in locale
    console.log("saga", action.payload);
    const now = moment().toISOString();

    const snippetList = yield select(selectorSnippetList);
    const newUID = generateUniqueUID(snippetList);
    if (!!newUID) {
      let newSnippetList = { ...snippetList };
      newSnippetList[`${newUID}`] = {
        ...action.payload,
        uid: newUID,
        created_at: now,
        updated_at: now,
      };
      yield put(actionSnippetCreateSuccess(newSnippetList));
    } else {
      yield put(actionSnippetCreateFailure());
    }
  } else {
    /*
    try {
      const response = yield call(apiSnippetCreate, action.payload);

      yield put(actionSnippetCreateSuccess(response.data.id));
      yield put(actionSnippetCreateReset());
      showNotification("success", "Creato!", "Dispositivo creato con successo");
    } catch (e) {
      yield put(actionSnippetCreateFailure());
      showNotification(
          "error",
          "Oops..",
          //@ts-ignore
          e.response.data.errors
            ? //@ts-ignore
              Object.values(e.response.data.errors).join(`\n`)
            : //@ts-ignore
              e.response.data.message
        );
    }*/
  }
}

export function* sagaSnippetList(action: TActionSnippetsListRequest): unknown {
  try {
    yield put(actionSnippetListLoadingRequest());
    /*
    const response: AxiosResponse<TAPIResponse<TSnippet[]>> = yield call(
      apiSnippetList
    );

    yield put(actionSnippetListSuccess(response.data.data));*/
    yield put(actionSnippetListLoadingSuccess());
  } catch (e) {
    yield put(actionSnippetListFailure());
    yield put(actionSnippetListLoadingFailure());
    /* showNotification(
      "error",
      "Oops..",
      //@ts-ignore
      e.response.data.errors
        ? //@ts-ignore
          Object.values(e.response.data.errors).join(`\n`)
        : //@ts-ignore
          e.response.data.message
    );*/
  }
}

export function* sagaSnippetUpdate(
  action: TActionSnippetUpdateRequest
): unknown {
  const mode = yield select(selectorMode);
  if (mode == "offline") {
    //TODO
    // Aggiorna snippet in locale
    console.log("saga", action.payload);
    const now = moment().toISOString();

    const snippetList = yield select(selectorSnippetList);
    const snippetToUpdate = select((store: TStore) =>
      selectorSnippet(store, action.payload.uid)
    );
    console.log("saga modifica", snippetToUpdate);
    if (!!snippetToUpdate) {
      let newSnippetList = { ...snippetList };
      newSnippetList[`${action.payload.uid}`] = {
        ...action.payload,
        updated_at: now,
        updated_by: "y",
      };
      yield put(actionSnippetUpdateSuccess(newSnippetList));
    } else {
      yield put(actionSnippetUpdateFailure());
    }
  } else {
    /*
try {
    yield call(apiSnippetUpdate, action.payload);

    yield all([
      put(actionSnippetUpdateSuccess()),
      put(actionSnippetUpdateReset()),
    ]);
    showNotification(
      "success",
      "Aggiornato!",
      "Dispositivo modificato con successo"
    );
  } catch (e) {
    yield put(actionSnippetUpdateFailure());
    showNotification(
      "error",
      "Oops..",
      //@ts-ignore
      e.response.data.errors
        ? //@ts-ignore
          Object.values(e.response.data.errors).join(`\n`)
        : //@ts-ignore
          e.response.data.message
    );
  }
*/
  }
}

export function* sagaSnippetDelete(
  action: TActionSnippetDeleteRequest
): unknown {
  const mode = yield select(selectorMode);
  if (mode == "offline") {
    //TODO
    // Elimina snippet in locale
    let snippetList = yield select(selectorSnippetList);
    delete snippetList[action.payload];
    yield put(actionSnippetDeleteSuccess(snippetList));
  } else {
    /*
        try {
    yield call(apiSnippetDelete, action.payload);

    yield all([
      put(actionSnippetDeleteSuccess(action.payload)),
      put(actionSnippetDeleteReset()),
    ]);
    showNotification(
      "success",
      "Eliminato!",
      "Dispositivo eliminato con successo"
    );
  } catch (e) {
    yield put(actionSnippetDeleteFailure());
    showNotification(
      "error",
      "Oops..",
      //@ts-ignore
      e.response.data.errors
        ? //@ts-ignore
          Object.values(e.response.data.errors).join(`\n`)
        : //@ts-ignore
          e.response.data.message
    );
  }
        */
  }
}
