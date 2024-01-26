export interface TEditor {
  content: string;
  currentPath?: string;
  currentLanguage: string;
  paths: string[];
}

export interface TSnippet {
  uid: string;
  title: string;
  content: string;
  language: string;
  created_by: string;
  created_at: string;
  updated_by: string;
  updated_at: string;
  parent_uid?: string;
}

export interface TEditorsBrowser {
  tabs: TEditor[];
  connectionStatus: TConnectionStatus;
}

export type TConnectionStatus = "connected" | "pending" | "disconnected";

export interface TSnip {
  browser: TEditorsBrowser;
  storagePath: string;
}
