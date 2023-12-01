import styled from 'styled-components';

export const TourCardContainer = styled.div`
  width: 30%; 
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const TourTitle = styled.h3`
  margin-bottom: 20px;
`;

export const TourDescription = styled.p`
  color: #555;
  margin-bottom: 20px;
`;
export const InfoLabel = styled.span`
  font-weight: bold;
  color: #555;
`;
export const TourInfo = styled.div`
  margin-bottom: 15px;
`;

export const InfoValue = styled.span`
  margin-left: 5px;
  color: #333;
`;
export const ViewDetailsButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #45a049;
  }
`;

