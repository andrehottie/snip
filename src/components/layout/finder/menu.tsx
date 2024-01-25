import { Grid } from "@mui/material";
import React, { useState } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { CreateSnippetModal } from "../modals/CreateSnippet";
import { TSnippetCreateRequest } from "../../../redux-modules/declarations/actions/snippets";

export interface UIFinderMenuProps {}

export const UIFinderMenu = ({}: UIFinderMenuProps): JSX.Element => {
  const [showCreateSnippet, setShowCreateSnippet] = useState(false);

  const onCreateSnippet = (snippet: TSnippetCreateRequest): void => {
    console.log(onCreateSnippet);
  };
  return (
    <>
      <CreateSnippetModal
        id="crete_snippet_modal"
        open={showCreateSnippet}
        onClose={() => setShowCreateSnippet(false)}
        onConfirm={onCreateSnippet}
      />
      <Grid
        container
        style={{
          width: "100%",
          height: "35px",
          borderBottom: "1px #383838 solid",
          borderTop: "1px #383838 solid",
        }}
      >
        <Grid item>
          <span
            style={{
              color: "#868686",
              display: "inline-flex",
              borderRight: "1px #383838 solid",
              padding: "4px 4px",
            }}
          >
            <ArrowUpwardIcon style={{ width: "26px", height: "26px" }} />
          </span>
        </Grid>
        <Grid item>
          <span
            style={{
              color: "#868686",
              display: "inline-flex",
              borderRight: "1px #383838 solid",
              padding: "4px 4px",
              cursor: "pointer",
            }}
            onClick={() => setShowCreateSnippet(true)}
          >
            <NoteAddIcon style={{ width: "26px", height: "26px" }} />
          </span>
        </Grid>
        <Grid item>
          <span
            style={{
              color: "#868686",
              display: "inline-flex",
              borderRight: "1px #383838 solid",
              padding: "4px 4px",
            }}
          >
            <CreateNewFolderIcon style={{ width: "26px", height: "26px" }} />
          </span>
        </Grid>
      </Grid>
    </>
  );
};
