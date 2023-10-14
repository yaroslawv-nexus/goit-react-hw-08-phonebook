import React from 'react';
import { Link } from 'react-router-dom';
import { AuthDiv } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthDiv>
      <Link to={`/register`}>Register</Link>
      <Link to={`/login`}>Login</Link>
    </AuthDiv>
  );
};

export default AuthNav;
