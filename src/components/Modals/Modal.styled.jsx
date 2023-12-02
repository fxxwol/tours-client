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

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  max-width: 541px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 24px;
  width: 541px;
  z-index: 1000;
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

export const ContentContainer = styled.div`
  position: relative;
  padding: 40px 35px;
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

export const InfoWrapper = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 13px;
`;
