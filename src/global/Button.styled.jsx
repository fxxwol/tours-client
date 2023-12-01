import styled from "styled-components";
import { Button } from "@mui/material";
import variables from "./Variables";

export const Btn = styled(Button)`
  && {
    border: 1px solid;
    border-color: ${variables.blackText};
    text-transform: none;
    padding: 0;
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover,
    &:active,
    &:focus {
      background-color: transparent;
      border-color: rgba(7, 142, 43, 0.5);
      box-shadow: none;
    }
  }
`;
