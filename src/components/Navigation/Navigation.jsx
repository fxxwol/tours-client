import React from 'react';
import { Nav, NavigationLink } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

function Navigation() {
  const {
    user: { role },
  } = useAuth();

  const isAdmin = role === "admin"

  return (
    <Nav>
      <NavigationLink to="/">Tours</NavigationLink>
      {!isAdmin && <NavigationLink to="/cart">Cart</NavigationLink>}
      {isAdmin && 
      <>
      <NavigationLink to="/admin/orders">Orders</NavigationLink>
      </>}
    </Nav>
  );
}

export default Navigation;
