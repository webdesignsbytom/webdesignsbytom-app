import React from 'react';
import { useState } from 'react';

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleNotifications, setToggleNotifications] = useState(false);
  const [toggleMessages, setToggleMessages] = useState(false);
  const [toggleTests, setToggleTests] = useState(false);

  return (
    <ToggleContext.Provider
      value={{
        toggleNavigation,
        setToggleNavigation,
        toggleNotifications,
        setToggleNotifications,
        toggleTests,
        setToggleTests,
        toggleMessages,
        setToggleMessages,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
