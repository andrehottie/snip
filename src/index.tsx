import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Grid from "@mui/system/Unstable_Grid";
import "./style.css";
import { Provider } from "react-redux";
import { configureStore } from "./redux-modules/configureStore";
import { useDispatch } from "react-redux";
import {
  actionSnippetCreateRequest,
  actionSnippetUpdateRequest,
} from "./redux-modules/actions/actionsSnippet";
import { TSnippet } from "./declarations/snippet";
import {
  TActionSnippetCreateRequest,
  TSnippetCreateRequest,
} from "./redux-modules/declarations/actions/snippets";
import { UIButton } from "./components/ui/Button";
import SaveIcon from "@mui/icons-material/Save";
import { UIDivider } from "./components/ui/Divider";
import { useSelector } from "react-redux";
import { selectorSnippetList } from "./redux-modules/selectors/selectorsSnippets";
import { UIFinderItem } from "./components/layout/finder/item";
import { UIFinderMenu } from "./components/layout/finder/menu";
import { Editor } from "@monaco-editor/react";
import { SnipEditor } from "./components/layout/editor";
import { selectorCurrentSnippet } from "./redux-modules/selectors/selectorOptions/seletorsFinder";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const store = configureStore();

const App = () => {
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const snippets = useSelector(selectorSnippetList);
  const currentSnippet = useSelector(selectorCurrentSnippet);

  function handleEditorDidMount(editor: any, monaco: any) {
    editorRef.current = editor;
  }

  const onEditorChange = async (v: string) => {
    console.log(v);
    // TODO
  };

  const onSave = () => {
    if (!!currentSnippet) {
      dispatch(
        //@ts-ignore
        actionSnippetUpdateRequest({
          uid: currentSnippet.uid,
          content: editorRef.current.getValue(),
          language: "js",
          created_by: "x",
          updated_by: "x",
        })
      );
    }

    /*
    dispatch(
      //@ts-ignore
      actionSnippetCreateRequest({
        content: editorRef.current.getValue(),
        language: "js",
        created_by: "x",
        updated_by: "x",
      } as TSnippetCreateRequest)
    );*/
  };

  return (
    <Grid container spacing={2}>
      <Grid className={"browser"} xs={8}>
        <SnipEditor
          onMount={handleEditorDidMount}
          onChange={onEditorChange}
          ref={editorRef}
        />
      </Grid>
      <Grid
        className={"toolbar"}
        xs={1}
        container
        direction={"column"}
        style={{ padding: "15px 0px" }}
      >
        <UIButton
          square
          dark
          style={{
            display: "flex",
            flexDirection: "column",
            height: "60px",
          }}
          onClick={onSave}
        >
          <span>
            <SaveIcon />
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "8px",
              verticalAlign: "middle",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                marginRight: "3px",
                display: "inline-flex",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  marginTop: "-2px",
                  marginRight: "3px",
                }}
              >
                ⌘
              </span>{" "}
              + S
            </span>
            <span
              style={{
                fontSize: "10px",
                marginTop: "0px",
                display: "inline-flex",
              }}
            >
              / Ctrl + S
            </span>
          </span>
        </UIButton>
        <UIDivider />
      </Grid>
      <Grid className={"navigator"} xs={3}>
        <UIFinderMenu />
        {Object.values(snippets).map((s) => (
          <UIFinderItem key={s.uid} snippet={s} id={s.uid} type="file" />
        ))}
        <Grid></Grid>
      </Grid>
    </Grid>
  );
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

// After
const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
