import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import variables from 'global/Variables';

export const NavigationLink = styled(NavLink)`
  color: ${variables.blackText};
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  transition: all 250ms ease-in-out 0ms;

  &:hover {
    transform: scale(1.1);
  }
`;
