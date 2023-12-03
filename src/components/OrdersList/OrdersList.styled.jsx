import styled from 'styled-components';

export const MainTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  border: 1px solid #dddddd;
  background-color: #f2f2f2;
  text-align: center;
  padding: 8px;
`;

export const Td = styled.td`
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
`;

export const DetailsRow = styled.tr`
  display: none;

  &.details-visible {
    display: table-row;
    background-color: #f9f9f9;
    padding: 10px;
  }
`;

export const ToggleButton = styled.button`
  background-color: #3498db;
  color: #ffffff;
  border: none;
  padding: 8px;
  cursor: pointer;
`;
