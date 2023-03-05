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
import Admin from '../../img/admin.svg';
import Developer from '../../img/developer.svg';
import Search from '../../img/search.svg';
import Notification from '../../img/notification.svg';
import Notifications from '../notifications/Notifications';
// Styles
import '../../styles/keyframes.css';
import TestPage from '../../pages/test/TestPage';

function Navbar() {
  const {
    toggleNavigation,
    setToggleNavigation,
    toggleNotifications,
    setToggleNotifications,
    setToggleTests, toggleTests
  } = useContext(ToggleContext);
  const { user, setUser } = useContext(UserContext);

  let navigate = useNavigate();

  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const navigateHome = () => {
    navigate('/', { replace: true });
  };

  const displayNotifications = () => {
    setToggleNotifications(true);
  };

  const displayTest = () => {
    setToggleTests(true);
  };

  const closeNotifications = () => {
    setToggleNotifications(false);
  };

  const closeNavbar = () => {
    setToggleNavigation(false);
  };

  const signOut = (event) => {
    event.preventDefault();

    setToggleNavigation(false);
    setUser(sampleUserData);
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);

    navigate('/', { replace: true });
  };

  return (
    <>
      <div className='h-16 mx-auto px-2 sm:px-6 lg:px-4 bg-green-400'>
        <div className='flex h-16 items-center justify-between px-4'>
          <div
            onClick={() => {
              navigateHome();
              closeNotifications();
              closeNavbar();
            }}
            className='inset-y-0 left-0 flex items-center cursor-pointer'
          >
            Logo
          </div>
          <section>
            {/* Phone nav bar */}
            <nav
              onClick={() => {
                toggleNavbar();
                closeNotifications();
              }}
              className='md:hidden'
            >
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
                  <Link className='nav__link' to='/'>
                    Home
                  </Link>
                </li>
                {user.email && (
                  <li>
                    <Link to='/account' className='nav__link'>
                      Account
                    </Link>
                  </li>
                )}
                <li>
                  <Link to='/design' className='nav__link'>
                    Design
                  </Link>
                </li>
                <li>
                  <Link to='/contact' className='nav__link'>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to='/portfolio' className='nav__link'>
                    Portfolio
                  </Link>
                </li>
                {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
                  <li>
                    <Link to='/admin' className='nav__link'>
                      Admin
                    </Link>
                  </li>
                )}
                {user.role === 'DEVELOPER' && (
                  <li>
                    <Link to='/development' className='nav__link'>
                      Development
                    </Link>
                  </li>
                )}
                {!user.email && (
                  <>
                    <li>
                      <Link to='/login' className='nav__link'>
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to='/register' className='nav__link'>
                        Register
                      </Link>
                    </li>
                  </>
                )}
                {user.email && (
                  <li>
                    <Link onClick={signOut} className='nav__link'>
                      Sign out
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          </section>
        </div>
      </div>

      {/* Phone navigatino */}
      {toggleNavigation && (
        <div className='absolute bg-green-700 w-full h-[calc(100%_-_4rem)] overflow-hidden z-10 md:hidden'>
          <ul className='grid gap-2 mt-2'>
            <li className='phone__nav__li'>
              <Link className='phone__nav__link' to='/' onClick={toggleNavbar}>
                <img src={Home} className='w-8' alt='home' />
                <div>
                  <h3>Home</h3>
                </div>
              </Link>
            </li>
            {user.email && (
              <>
                <li className='phone__nav__li'>
                  <Link
                    to='/account'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Account} className='w-8' alt='account' />
                    <h3>Account</h3>
                  </Link>
                </li>
                <li className='phone__nav__li'>
                  <Link
                    className='phone__nav__link'
                    onClick={() => {
                      toggleNavbar();
                      displayNotifications();
                    }}
                  >
                    <img
                      src={Notification}
                      className='w-8'
                      alt='notNotification'
                    />
                    <h3>Notifications</h3>
                  </Link>
                </li>
                <li className='phone__nav__li'>
                  <Link
                    className='phone__nav__link'
                    onClick={() => {
                      toggleNavbar();
                      displayTest();
                    }}
                  >
                    <img
                      src={Notification}
                      className='w-8'
                      alt='notNotification'
                    />
                    <h3>Test Page</h3>
                  </Link>
                </li>
              </>
            )}
            <li className='phone__nav__li'>
              <Link
                to='/design'
                className='phone__nav__link'
                onClick={toggleNavbar}
              >
                <img src={Design} className='w-8' alt='design' />
                <h3>Design</h3>
              </Link>
            </li>
            <li className='phone__nav__li'>
              <Link
                to='/contact'
                className='phone__nav__link'
                onClick={toggleNavbar}
              >
                <img src={Contact} className='w-8' alt='contact' />
                <h3>Contact</h3>
              </Link>
            </li>
            <li className='phone__nav__li'>
              <Link
                to='/portfolio'
                className='phone__nav__link'
                onClick={toggleNavbar}
              >
                <img src={Portfolio} className='w-8' alt='portfolio' />
                <h3>Portfolio</h3>
              </Link>
            </li>
            {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
              <li className='phone__nav__li'>
                <Link
                  to='/admin'
                  className='phone__nav__link'
                  onClick={toggleNavbar}
                >
                  <img src={Admin} className='w-8' alt='admin' />
                  <h3>Admin</h3>
                </Link>
              </li>
            )}
            {user.role === 'DEVELOPER' && (
              <li className='phone__nav__li'>
                <Link
                  to='/development'
                  className='phone__nav__link'
                  onClick={toggleNavbar}
                >
                  <img src={Developer} className='w-8' alt='development' />
                  <h3>Development</h3>
                </Link>
              </li>
            )}
            {!user.email && (
              <>
                <li className='phone__nav__li'>
                  <Link
                    to='/login'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Login} className='w-8' alt='login' />
                    <h3>Login</h3>
                  </Link>
                </li>
                <li className='phone__nav__li'>
                  <Link
                    to='/register'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Register} className='w-8' alt='register' />
                    <h3>Register</h3>
                  </Link>
                </li>
              </>
            )}
            {user.email && (
              <li className='phone__nav__li'>
                <Link onClick={signOut} className='phone__nav__link'>
                  <img src={Logout} className='w-8' alt='logout' />
                  <h3>Log out</h3>
                </Link>
              </li>
            )}
            <li className='phone__nav__li'>
              <div className='flex'>
                <img src={Search} className='w-8' alt='search' />
                <input
                  type='text'
                  placeholder='Search...'
                  className='w-full pl-2'
                />
              </div>
            </li>
          </ul>
        </div>
      )}

      {toggleNotifications && (
        <div className='reveal__notifications'>
          <Notifications />
        </div>
      )}
      {toggleTests && (
        <div className='reveal__notifications'>
          <TestPage />
        </div>
      )}
    </>
  );
}

export default Navbar;
