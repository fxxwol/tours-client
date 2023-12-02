import styled from "styled-components";

export const OrderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  padding: 15px;
  background-color: #dfdfdf;
  border-radius: 7px;
  height: 90px;
  width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`

export const TourName = styled.button`

`