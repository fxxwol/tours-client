import React from 'react';
import { Nav, NavigationLink } from './Navigation.styled';

function Navigation() {
  return (
    <Nav>
      <NavigationLink to="/">Tours</NavigationLink>
      <NavigationLink to="/cart">Cart</NavigationLink>
    </Nav>
  );
}

export default Navigation;
