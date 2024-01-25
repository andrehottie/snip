import { TDBTable } from "../declarations/db";
import { TSnippet } from "../declarations/snippet";
import { APIResponse } from "./db";

export interface APIResponseSnippet extends APIResponse {
  data: TSnippet[];
}
export const index = (): APIResponseSnippet => {
  const snippetList = JSON.parse(localStorage.getItem(TDBTable.SNIPPET));

  return {
    status: "ok",
    data: snippetList,
  };
};

export const get = (uid: string) => {
  const snippetList = JSON.parse(localStorage.getItem(TDBTable.SNIPPET));
  // TODO
};

const create = (snippet: TSnippet) => {
  const snippetList = JSON.parse(localStorage.getItem(TDBTable.SNIPPET));
  const newSnippetList = [...snippetList, snippet];
};
