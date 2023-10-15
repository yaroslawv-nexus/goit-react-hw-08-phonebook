import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogIn } = useAuth();

  return isLogIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
