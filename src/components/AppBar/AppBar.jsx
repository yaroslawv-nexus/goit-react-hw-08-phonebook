import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserNav from 'components/UserNav/UserNav';
import React from 'react';
import { HeaderStyled } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
  const { isLogIn } = useAuth();

  return (
    <HeaderStyled>
      <Navigation />
      {isLogIn ? <UserNav /> : <AuthNav />}
    </HeaderStyled>
  );
};

export default AppBar;
