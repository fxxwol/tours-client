import React from 'react';
import { AuthLink, AuthWrap } from './AuthNav.styled';
import { Btn } from 'global/Button.styled';

function AuthNav() {
  return (
    <AuthWrap>
      <Btn size="small">
        <AuthLink to="/register">Sign up</AuthLink>
      </Btn>
      <Btn size="small">
        <AuthLink to="/login">Sign in</AuthLink>
      </Btn>
    </AuthWrap>
  );
}

export default AuthNav;
