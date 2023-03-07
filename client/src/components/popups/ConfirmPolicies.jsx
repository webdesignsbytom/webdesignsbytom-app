import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
// Context
import { UserContext } from '../../context/UserContext';

function ConfirmPolicies() {
  const { toggleCookiePolicy, setToggleCookiePolicy } = useContext(UserContext);

  const closeCookieBar = () => {
    localStorage.setItem('CookiePolicy', true);
    setToggleCookiePolicy(!toggleCookiePolicy);
  };

  return (
    <>
      <section className='fixed bottom-0 border-t-2 border-solid border-black w-full p-2 bg-slate-300 reveal__cookie__policy'>
        <div className='flex gap-2'>
          <article className='flex lg:grid align-middle items-center'>
            <h2>Confirm Privacy Policies</h2>
          </article>
          <div className='flex gap-2'>
            <button onClick={closeCookieBar} className='submit__button'>
              Confirm
            </button>
            <button onClick={closeCookieBar} className='delete__button'>
              Decline
            </button>
          </div>
          <article className='grid text-sm items-center ml-6'>
            <p>
              For infomation on our privacy and <span className='text-bold'>cookies</span> policies, please follow
              the link by clicking{' '}
              <span className='text-hyperlink-blue font-bold cursor-pointer'>
                <Link to='/user-cookie-policy'>
                here
                </Link>
              </span>
              .
            </p>
          </article>
        </div>
      </section>
    </>
  );
}

export default ConfirmPolicies;
