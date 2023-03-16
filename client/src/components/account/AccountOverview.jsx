import React, { useContext, useState } from 'react';
// Components
import Profile from '../users/Profile';
// Context
import { UserContext } from '../../context/UserContext';

function AccountOverview() {
  const { user } = useContext(UserContext);

  return <Profile />;
}

export default AccountOverview;
