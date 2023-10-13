import AppBar from 'components/AppBar/AppBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
    </Container>
  );
};

export default SharedLayout;
