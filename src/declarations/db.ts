import { TSnippet } from "./snippet";

export interface TSnippets {
  snippets: TListStringKey<TSnippet>;
  isLoading: boolean;
  errors: boolean | TError;
}

export interface TError {
  message: string;
  status: string;
}

export enum TDBTable {
  SNIPPET = "snippets",
}

export interface TListStringKey<T> {
  [key: string]: T;
}
export interface TEmpty {}
