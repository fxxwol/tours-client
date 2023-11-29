import variables from "global/Variables";
import styled from "styled-components";
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const NavDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;
export const HeaderTitle = styled.h1`
  color: ${variables.blackText};
`;
