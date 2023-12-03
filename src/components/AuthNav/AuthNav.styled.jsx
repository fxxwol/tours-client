import styled from 'styled-components';
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
