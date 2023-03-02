import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
// Data 
import { sampleUserData } from '../../users/utils/utils';

function Navbar() {
  const { toggleNavigation, setToggleNavigation } = useContext(ToggleContext);
  const { setUser } = useContext(UserContext);

  let navigate = useNavigate();

  const openNavbar = () => {
    console.log('log');
    setToggleNavigation(!toggleNavigation);
  };

  const navigateHome = () => {
    navigate('/account', { replace: true });
  };

  const signOut = (event) => {
    event.preventDefault();

    setUser(sampleUserData);
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);

    navigate('/', { replace: true });

  };

  return (
    <>
      <div className='mx-auto px-2 sm:px-6 lg:px-8 bg-green-400'>
        <div className='flex h-16 items-center justify-between mx-4'>
          <div
            onClick={navigateHome}
            className='inset-y-0 left-0 flex items-center'
            >
            Logo
          </div>
          <section>
              {/* Phone nav bar */}
            <nav onClick={openNavbar} className='md:hidden'>
              <span className='cursor-pointer text-white hover:text-hover-grey'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              </span>
            </nav>

          {/* Main Nav Bar */}
          <nav className='hidden md:flex'>
            <ul className='flex gap-4'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/account'>Account</Link>
                </li>
                <li>
                    <Link to='/design'>Design</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link onClick={signOut}>Sign out</Link>
                </li>
            </ul>
          </nav>
          </section>

        </div>
      </div>

      {toggleNavigation && (
        <div className='absolute bg-green-700 w-full h-screen overflow-hidden'>
          Toogle it
        </div>
      )}
    </>
  );
}

export default Navbar;
