import React from "react";
import { TSnippet } from "../../../declarations/snippet";
import styled from "styled-components";
import { Grid } from "@mui/material";
import { Typography } from "@mui/joy";
import {
  actionSetCurrentFileRequest,
  actionSetCurrentPathRequest,
} from "../../../redux-modules/actions/actionsOptions";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { TActionType } from "../../../redux-modules/declarations/actionTypes";
import { useSelector } from "react-redux";
import {
  selectorCurrentFile,
  selectorCurrentPath,
} from "../../../redux-modules/selectors/selectorOptions/seletorsFinder";

export interface UIFinderItemProps {
  snippet: TSnippet;
  type: "file" | "path";
  id: string;
  onClick?: ({ id, type }: { id: string; type: "file" | "path" }) => void;
}
export const UIFinderItem = ({
  snippet,
  onClick,
  type,
  id,
}: UIFinderItemProps): JSX.Element => {
  const currentSnippetID = useSelector(selectorCurrentFile);
  const currentSnippetPath = useSelector(selectorCurrentPath);

  const isActive =
    (type === "path" && currentSnippetPath === id) ||
    (type === "file" && currentSnippetID == id);
  const dispatch: Dispatch = useDispatch();

  const handleClick = () => {
    if (type == "file") {
      //@ts-ignore
      dispatch(actionSetCurrentFileRequest(id));
    } else if (type == "path") {
      //@ts-ignore
      dispatch(actionSetCurrentPathRequest(id));
    }
    if (!!onClick) onClick({ id, type });
  };
  return (
    <span onClick={handleClick}>
      <Grid direction={"row"} style={{ width: "100%" }}>
        <Grid
          xs={12}
          justifyContent={"space-between"}
          display={"inline-flex"}
          style={{ width: "100%", height: "40px" }}
        >
          <Typography>{snippet.uid}</Typography>
          <DeleteIcon>X</DeleteIcon>
        </Grid>
        <Grid xs={12}></Grid>
      </Grid>
    </span>
  );
};

const ItemContainer = styled.span`
  width: 100%;
  display: flex;
`;

const DeleteIcon = styled.span`
  width: 15px;
  height: 15px;
  background-color: #fd5f55;
  border: 1px solid #eb564f;
  border-radius: 25px;
  color: #eb564f;
`;
