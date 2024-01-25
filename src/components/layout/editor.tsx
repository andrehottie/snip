import { Editor, EditorProps } from "@monaco-editor/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  selectorCurrentFile,
  selectorCurrentSnippet,
} from "../../redux-modules/selectors/selectorOptions/seletorsFinder";

export interface SnipEditorProps extends EditorProps {
  ref: React.MutableRefObject<any>;
}

export const SnipEditor = ({ ...props }: SnipEditorProps): JSX.Element => {
  const currentFile = useSelector(selectorCurrentFile);
  const currentSnippet = useSelector(selectorCurrentSnippet);

  useEffect(() => {
    console.log("");
  }, []);

  return (
    <>
      <Editor
        options={{ theme: "vs-dark", readOnly: !currentFile }}
        theme="vs-dark"
        {...props}
        height="90vh"
        defaultLanguage="javascript"
        value={currentSnippet?.content}
        loading={<span>Loading :)</span>}
      />
    </>
  );
};
