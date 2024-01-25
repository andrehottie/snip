import { TSnippet } from "../../../declarations/snippet";
import { TStore } from "../../declarations/store";
import { TMode } from "../../reducers/reducerOptions";

export const selectorCurrentFile = (store: TStore): string =>
  store.options.currentFile;
export const selectorCurrentPath = (store: TStore): string =>
  store.options.currentPath;
export const selectorCurrentSnippet = (store: TStore): TSnippet | undefined => {
  const id = store.options.currentFile;
  if (!id) return undefined;
  const currentSnippet = store.snippets.snippets[id];
  return currentSnippet;
};
