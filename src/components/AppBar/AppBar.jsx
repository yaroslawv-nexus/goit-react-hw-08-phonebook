import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserNav from 'components/UserNav/UserNav';
import React from 'react';
import { HeaderStyled } from './AppBar.styled';

const AppBar = () => {
  const Logged = false;

  return (
    <HeaderStyled>
      <Navigation />
      {Logged ? <UserNav /> : <AuthNav />}
    </HeaderStyled>
  );
};

export default AppBar;
