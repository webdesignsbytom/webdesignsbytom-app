import React from 'react';
import { useEffect, useState } from 'react';
import { sampleUserData } from '../users/utils/utils';

export const UserContext = React.createContext();

const initUserState = sampleUserData;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initUserState);
  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_USER_TOKEN) || ''
  );

  console.log('Context User', user);
  console.log('Context Token', token);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
