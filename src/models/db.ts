import { useSelector } from "react-redux";
import { TDBTable, TListStringKey } from "../declarations/db";
import { selectorSnippetList } from "../redux-modules/selectors/selectorsSnippets";

export interface APIResponse {
  status: string;
  data?: unknown;
}

export const generateUniqueUID = (database: TListStringKey<any>): string => {
  function generateRandomString(length: number): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  let isUnique = false;
  let uid: string;

  while (!isUnique) {
    uid = generateRandomString(10);

    const existingDoc = !!database[uid];
    isUnique = !existingDoc;
  }

  return uid;
};
