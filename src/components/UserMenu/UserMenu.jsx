import { AuthLink } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { UserEmail, UserWrapper } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/authThunk';
import { Btn } from 'global/Button.styled';

function UserMenu() {
  const dispatch = useDispatch();
  const {
    user: { name },
  } = useAuth();
  return (
    <UserWrapper>
      <UserEmail>{name}</UserEmail>
      <Btn>
        <AuthLink onClick={() => dispatch(logout())}>Sign out</AuthLink>
      </Btn>
    </UserWrapper>
  );
}

export default UserMenu;
