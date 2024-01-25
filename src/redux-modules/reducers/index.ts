import { combineReducers } from "redux";
import { reducerSnippets } from "./recuderSnippets";
import { reducerOptions } from "./reducerOptions";

export const reducers = () =>
  combineReducers({
    options: reducerOptions,
    snippets: reducerSnippets,
  });
