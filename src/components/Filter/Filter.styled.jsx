import variables from 'global/Variables';
import styled from 'styled-components';

export const FilterForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
`;

export const SearchButton = styled.button`
  background-color: ${variables.greenText};
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

  &:hover,
  &:focus {
    background-color: ${variables.accentColor};
  }
`;
