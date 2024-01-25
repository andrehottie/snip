import { Button, ButtonProps } from "@mui/base";
import React from "react";
import styled from "styled-components";

export interface UIButtonProps extends ButtonProps {
  square: boolean;
  dark: boolean;
}

export const UIButton = ({
  square,
  dark,
  ...props
}: UIButtonProps): JSX.Element => {
  return <StyledButton {...props} />;
};

const StyledButton = styled(Button)`
  background-color: #1e1e1e;
  color: #868686;
  border: 0px solid #383838;

  &:hover {
    background-color: #4b4b4b;
  }
  &:active {
    background-color: #1e1e1e;
  }
`;
