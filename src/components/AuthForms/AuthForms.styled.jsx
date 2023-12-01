import { Button, Input, InputLabel } from '@mui/material';
import variables from 'global/Variables';
import styled from 'styled-components';
export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AuthFormCard = styled.div`
  display: block;
  padding: 25px 35px 50px;
  width: 450px;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const SubmitBtn = styled(Button)`
  && {
    border: 1px solid;
    border-color: #1f874785;
    color: ${variables.greenText};
    &:hover,
    :active,
    :focus {
      border-color: rgba(7, 142, 43, 0.5);
      background-color: rgba(7, 142, 43, 0.037);
      box-shadow: rgba(3, 107, 31, 0.5);
    }
  }
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin: 0 0 40px;
  font-size: 24px;
  font-weight: 300;
`;
export const AuthHelperText = styled.p`
  color: rgba(80, 78, 78, 0.76);
`;

export const InputField = styled(Input)`
  && {
    &:after {
      border-bottom: 2px solid ${variables.greenText};
    }
  }
`;

export const Label = styled(InputLabel)`
  &&.Mui-focused {
    color: ${variables.greenText};
  }
`;
