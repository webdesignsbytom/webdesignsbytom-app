import React from 'react'
import { useState } from 'react';

export const ToggleContext = React.createContext()

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false)  
  const [toggleNotifications, setToggleNotifications] = useState(false)  

    return (
        <ToggleContext.Provider value={{ toggleNavigation, setToggleNavigation, toggleNotifications, setToggleNotifications }}>
          {children}
        </ToggleContext.Provider> 
      );
}

export default ToggleContextProvider