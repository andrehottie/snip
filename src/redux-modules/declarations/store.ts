import { TListStringKey, TSnippets } from "../../declarations/db";
import { TSnippet } from "../../declarations/snippet";
import { TOptions } from "../reducers/reducerOptions";

export interface TStore {
  snippets: TSnippets;
  options: TOptions;
}
