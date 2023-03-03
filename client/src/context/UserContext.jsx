import React from 'react';
import { useEffect, useState } from 'react';
// Data
import { sampleUserData } from '../users/utils/utils';
import LoggedInUser from '../utils/LoggedInUser';
// Fetch
import { getUserById } from '../utils/Fetch';

export const UserContext = React.createContext();

const initUserState = sampleUserData;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initUserState);
  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_USER_TOKEN) || ''
  );

  useEffect(() => {
    const decodedUserData = LoggedInUser()

    if (decodedUserData) {
      const userId = decodedUserData.id
      getUserById(userId, setUser)
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
