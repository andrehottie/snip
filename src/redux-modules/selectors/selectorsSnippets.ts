import { TListStringKey, TSnippets } from "../../declarations/db";
import { TSnippet } from "../../declarations/snippet";
import { TSnippetList } from "../declarations/actions/snippets";
import { TStore } from "../declarations/store";

export const selectorSnippetList = (store: TStore): TSnippetList =>
  !!Object.values(store.snippets.snippets) ? store.snippets.snippets : {};

export const selectorSnippet = (
  store: TStore,
  id: string
): TSnippet | undefined => store.snippets.snippets[id] || undefined;
