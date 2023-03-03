import React, { useContext } from 'react';
// Context
import { UserContext } from '../../context/UserContext';

function ConfirmPolicies() {
    const { toggleCookiePolicy, setToggleCookiePolicy } = useContext(UserContext)

    const closeCookieBar = () => {
        localStorage.setItem('CookiePolicy', true)
        setToggleCookiePolicy(!toggleCookiePolicy)
    }

  return (
    <>
      <div className='flex h-12 fixed bottom-0 w-full bg-blue-600 gap-4'>
        <div>
          <h2>ConfirmPolicies</h2>
        </div>
        <div className='flex gap-4'>
          <button onClick={closeCookieBar} className='submit__button'>Confirm</button>
          <button onClick={closeCookieBar} className='delete__button'>Decline</button>
        </div>
      </div>
    </>
  );
}

export default ConfirmPolicies;
