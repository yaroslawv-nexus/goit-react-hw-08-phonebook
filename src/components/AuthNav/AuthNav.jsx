import React from 'react';
import { Link } from 'react-router-dom';
import { AuthDiv } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <AuthDiv>
      <Link>Register</Link>
      <Link>Login</Link>
    </AuthDiv>
  );
};

export default AuthNav;
