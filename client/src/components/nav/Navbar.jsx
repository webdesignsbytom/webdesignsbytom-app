import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
// Data
import { sampleUserData } from '../../users/utils/utils';
// Icons
import Home from '../../img/home.svg';
import Account from '../../img/account.svg';
import Design from '../../img/design.svg';
import Contact from '../../img/contact.svg';
import Portfolio from '../../img/portfolio.svg';
import Login from '../../img/login.svg';
import Register from '../../img/register.svg';
import Logout from '../../img/logout.svg';

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
            className='inset-y-0 left-0 flex items-center cursor-pointer'
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
                  <Link
                    className='trasition ease-in-out duration-200 hover:text-red-500'
                    to='/'
                  >
                    Home
                  </Link>
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
          <ul className='grid gap-2 mt-2'>
            <li className='phone__nav__li'>
              <Link className='phone__nav__link' to='/'>
                <img src={Home} className='w-6' alt='home' />
                <h3>Home</h3>
              </Link>
            </li>
            <li className='phone__nav__li'>
              <Link to='/account' className='phone__nav__link'>
                <img src={Account} className='w-6' alt='account' />
                <h3>Account</h3>
              </Link>
            </li>
            <li className='phone__nav__li'>
              <Link to='/design' className='phone__nav__link'>
                <img src={Design} className='w-6' alt='design' />
                <h3>Design</h3>
              </Link>
            </li>
            <li className='phone__nav__li'>
              <Link to='/contact' className='phone__nav__link'>
                <img src={Contact} className='w-6' alt='contact' />
                <h3>Contact</h3>
              </Link>
            </li>
            <li className='phone__nav__li'>
              <Link to='/portfolio' className='phone__nav__link'>
              <img src={Portfolio} className='w-6' alt='portfolio' />
                <h3>Portfolio</h3>
              </Link>
            </li>
            <li className='phone__nav__li'>
              <Link to='/login' className='phone__nav__link'>
              <img src={Login} className='w-6' alt='login' />
                <h3>Login</h3>
              </Link>
            </li>
            <li className='phone__nav__li'>
              <Link to='/register' className='phone__nav__link'>
              <img src={Register} className='w-6' alt='register' />
                <h3>Register</h3>
              </Link>
            </li>
            <li className='phone__nav__li'>
              <Link onClick={signOut} className='phone__nav__link'>
              <img src={Logout} className='w-6' alt='logout' />
                <h3>Log out</h3>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
