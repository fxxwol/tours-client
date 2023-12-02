import variables from "global/Variables";
import styled from "styled-components";
export const CardTitle = styled.h2`
  display: flex;
  width: 100%;
  align-items: start;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 30px;
`;

export const RentalBlock = styled.div`
  padding: 0;
  margin: 0;
`;

export const RentalTitle = styled.p`
  margin-bottom: 10px;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.43;
`;

export const RentalInfo = styled.ul`
  width: 461;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const RentalItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #292828;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;

  & span {
    color: ${variables.accentColor};
    font-size: 12px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: -0.24px;
  }
`;

export const TitleMain = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 9px;
`;

export const Descr = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
`;
