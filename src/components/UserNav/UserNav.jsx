import React from 'react';
import { UserDiv } from './UserNav.styled';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';

const UserNav = () => {
  const dispatch = useDispatch();
  const { name } = useAuth();

  return (
    <UserDiv>
      <p>{name}</p>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </UserDiv>
  );
};

export default UserNav;
