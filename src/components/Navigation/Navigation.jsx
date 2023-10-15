import React from 'react';
import { Link } from 'react-router-dom';
import { NavigStyled } from './Navigation.styled';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const { isLogIn } = useAuth();

  return (
    <NavigStyled>
      <Link to={'/'}>Home</Link>
      {isLogIn && <Link to={`/contacts`}>Contacts</Link>}
    </NavigStyled>
  );
};

export default Navigation;
