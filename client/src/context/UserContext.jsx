import React from 'react';
import { useEffect, useState } from 'react';
// Data
import { sampleUserData } from '../users/utils/utils';
import LoggedInUser from '../utils/LoggedInUser';
// Axios
import client from '../utils/client';

export const UserContext = React.createContext();

const initUserState = sampleUserData;

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initUserState);
  const [token, setToken] = useState(
    localStorage.getItem(process.env.REACT_APP_USER_TOKEN) || ''
  );

  console.log('Context User', user);

  useEffect(() => {
    const decodedUserData = LoggedInUser()

    if (decodedUserData) {
      const id = decodedUserData.id

      client
      .get(`/users/${id}`)
      .then((res) => {
        console.log('res', res.data);
        setUser(res.data.data.user);
      })
      .catch((err) => {
        console.error(err);
      });
    }
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
