import styled from 'styled-components';
import { Button } from '@mui/material';
import variables from './Variables';
import { Link } from 'react-router-dom';

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
export const PrimaryButton = styled.button`
  background-color: ${props => props.bcg || variables.greenText};
  color: ${variables.whiteText};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 142.857%;
  width: ${props => props.width || 100}px;
  height: ${props => props.height || 48}px;
  transition: background-color 280ms cubic-bezier(0.075, 0.82, 0.165, 1);
  margin: ${props => props.margin};
  margin-bottom: ${props => props.marginb}px;
  &:hover,
  &:focus {
    background-color: ${props =>
      props.bcg ? '#b03636f2' : variables.accentColor};
  }
`;

export const StyledLink = styled(PrimaryButton).attrs({ as: Link })`
  text-decoration: none;
  cursor: pointer;
`;
