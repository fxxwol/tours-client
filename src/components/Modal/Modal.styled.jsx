import styled from 'styled-components';
import variables from 'global/Variables';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

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

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  max-width: 541px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 24px;
  width: 541px;
  z-index: 100;
  border-radius: 24px;
  max-height: 700px;
  overflow-y: auto;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${variables.greyText};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${variables.greyText};
  }
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

export const ContentContainer = styled.div`
  position: relative;
  padding: 40px 35px;
`;
export const TitleMain = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 9px;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  width: 14px;
  display: block;
  height: 14px;
  border: none;
  cursor: pointer;
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${variables.blackText};
`;

export const TourImg = styled.img`
  display: block;
  width: 100%;
  max-width: 100%;
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 13px;
`;
export const Descr = styled.p`
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
`;
