import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import variables from 'global/Variables';

export const NavigationLink = styled(NavLink)`
  color: ${variables.blackText};
  font-size: 20px;
  transition: all 250ms ease-in-out 0ms;
  text-decoration: none;
  font-weight: 600;
  position: relative;
  &:hover {
    transform: scale(1.1);
  }
  &.active {
    &::after {
      position: absolute;
      bottom: -10px;
      content: '';
      display: block;
      width: 100%;
      height: 4px;
      background: ${variables.greenText};
      border-radius: 2px;
    }
  }
`;
