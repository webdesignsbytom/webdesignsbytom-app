import React from 'react'
import { useEffect, useState } from 'react';
import { sampleUserData } from '../users/utils';

export const UserContext = React.createContext()

const initUserState = sampleUserData

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(initUserState)  
console.log('user', user);
  useEffect(() => {

  }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider> 
      );
}

export default UserContextProvider