import styled from 'styled-components';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import variables from 'global/Variables';

export const AuthWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const AuthLink = styled(NavLink)`
  font-family: 'Manrope', sans-serif;
  color: ${variables.blackText};
  font-size: 16px;
  padding: 4px 5px;
  &:hover,
  &:active,
  &:focus {
    color: ${variables.greenText};
  }
`;

export const AuthBtn = styled(Button)`
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
