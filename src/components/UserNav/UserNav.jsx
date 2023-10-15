import React from 'react';
import { UserDiv } from './UserNav.styled';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

const UserNav = () => {
  const dispatch = useDispatch();
  const { name } = useAuth();

  return (
    <UserDiv>
      <p>{name}</p>
      <Button variant="outlined" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </UserDiv>
  );
};

export default UserNav;
