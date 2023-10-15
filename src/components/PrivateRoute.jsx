import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogIn, isRefresh } = useAuth();
  const shouldRedirect = !isLogIn && !isRefresh;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
