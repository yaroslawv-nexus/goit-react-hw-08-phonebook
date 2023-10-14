import AppBar from 'components/AppBar/AppBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import EditContactModal from 'components/EditContactModal/EditContactModal';

const SharedLayout = () => {
  return (
    <Container>
      <AppBar />
      <Outlet />
      <EditContactModal />
    </Container>
  );
};

export default SharedLayout;
