import React, { useContext, useEffect, useState } from 'react';
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
import MessageIcon from '../../img/messageIcon.svg';
import Notification from '../../img/notification.svg';
import TestIcon from '../../img/testIcon.svg';
import EventsIcon from '../../img/eventsIcon.svg';
import Search from '../../img/search.svg';
import Github from '../../img/social/github.svg';
import Twitter from '../../img/social/twitter.svg';
import LinkedIn from '../../img/social/linkedin.svg';
import Instagram from '../../img/social/instagram.svg';
// Components
import Notifications from '../notifications/Notifications';
import MessagesComponent from '../messages/MessagesComponent';
// Styles
import '../../styles/keyframes.css';
import TestPage from '../../pages/test/TestPage';
import SocialBar from '../social/SocialBar';
import EventMenu from '../event/EventMenu';

function Navbar() {
  const {
    toggleNavigation,
    setToggleNavigation,
    toggleNotifications,
    setToggleNotifications,
    setToggleTests,
    toggleTests,
    toggleMessages,
    setToggleMessages,
    toggleEvents,
    setToggleEvents,
  } = useContext(ToggleContext);
  const { user, setUser } = useContext(UserContext);
  const [activeNav, setActiveNav] = useState('#');
  const [pageName, setPageName] = useState('home');
  console.log('user.role', user.role);
  useEffect(() => {
    setActiveNav(window.location.pathname);
    setPageName(window.location.pathname.substring(1));
  }, []);

  let navigate = useNavigate();

  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation);
    setToggleNotifications(false);
    setToggleMessages(false);
    setToggleTests(false);
    setToggleEvents(false)
  };

  const navigateHome = () => {
    navigate('/', { replace: true });
  };

  const displayEvents = () => {
    setToggleEvents(true)
    setToggleNotifications(false);
    setToggleNavigation(false);
    setToggleMessages(false);
    setToggleTests(false);
  };

  const displayNotifications = () => {
    setToggleNotifications(true);
    setToggleNavigation(false);
    setToggleMessages(false);
    setToggleTests(false);
    setToggleEvents(false)
  };

  const displayMessages = () => {
    setToggleMessages(true);
    setToggleNavigation(false);
    setToggleNotifications(false);
    setToggleTests(false);
    setToggleEvents(false)
  };

  const displayTest = () => {
    setToggleTests(true);
    setToggleMessages(false);
    setToggleNavigation(false);
    setToggleNotifications(false);
    setToggleEvents(false)
  };

  const closeNotifications = () => {
    setToggleNotifications(false);
  };

  const closeNavbar = () => {
    setToggleNavigation(false);
  };

  const closeMessages = () => {
    setToggleMessages(false);
  };
  const closeEvents = () => {
    setToggleEvents(false);
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
      <div className='h-16 mx-auto px-2 sm:px-6 lg:px-4 bg-nav-colour dark:bg-black'>
        <section className='flex h-16 items-center justify-between px-4'>
          {/* Logo */}
          <div
            onClick={() => {
              navigateHome();
              closeNotifications();
              closeNavbar();
              closeMessages();
              closeEvents();
            }}
            className='inset-y-0 left-0 flex items-center cursor-pointer'
          >
            Logo
          </div>
          <section className='md:hidden'>
            <h3 className='text-sm capitalize text-colour-dark font-bold'>
              {pageName}
            </h3>
          </section>
          <section>
            {/* Phone nav bar */}
            <nav
              onClick={() => {
                toggleNavbar();
                closeNotifications();
                closeMessages();
                closeEvents();
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
                  className='w-6 h-6 transition duration-200 ease-in-out focus:scale-125 active:scale-125'
                  data-te-animation-init
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              </span>
            </nav>

            {/* Large screen - Main Nav Bar */}
            <nav className='hidden md:flex'>
              <ul className='flex gap-4'>
                <li
                  className={activeNav === '/' ? 'selected__link' : 'nav__link'}
                >
                  <Link to='/'>Home</Link>
                </li>

                {user.email && (
                  // Account
                  <li
                    className={
                      activeNav === '/account' ? 'selected__link' : 'nav__link'
                    }
                  >
                    <Link to='/account'>Account</Link>
                  </li>
                )}
                {/* Design */}
                <li
                  className={
                    activeNav === '/design' ? 'selected__link' : 'nav__link'
                  }
                >
                  <Link to='/design'>Design</Link>
                </li>
                {/* Contact */}
                <li
                  className={
                    activeNav === '/contact' ? 'selected__link' : 'nav__link'
                  }
                >
                  <Link to='/contact'>Contact</Link>
                </li>
                {/* Portfolio */}
                <li
                  className={
                    activeNav === '/portfolio' ? 'selected__link' : 'nav__link'
                  }
                >
                  <Link to='/portfolio'>Portfolio</Link>
                </li>

                {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
                  //  Admin
                  <li
                    className={
                      activeNav === '/admin' ? 'selected__link' : 'nav__link'
                    }
                  >
                    <Link to='/admin'>Admin</Link>
                  </li>
                )}
                {user.role === 'DEVELOPER' && (
                  // Developer
                  <li
                    className={
                      activeNav === '/developments'
                        ? 'selected__link'
                        : 'nav__link'
                    }
                  >
                    <Link to='/development'>Development</Link>
                  </li>
                )}

                {!user.email && (
                  <>
                    {/* Login */}
                    <li
                      className={
                        activeNav === '/login' ? 'selected__link' : 'nav__link'
                      }
                    >
                      <Link to='/login'>Login</Link>
                    </li>
                    {/* Register */}
                    <li
                      className={
                        activeNav === '/register'
                          ? 'selected__link'
                          : 'nav__link'
                      }
                    >
                      <Link to='/register'>Register</Link>
                    </li>
                  </>
                )}
                {user.email && (
                  // Sign out
                  <li className='nav__link'>
                    <Link onClick={signOut}>Sign out</Link>
                  </li>
                )}
              </ul>
            </nav>
          </section>
          <div className='hidden md:flex'>
            <SocialBar />
          </div>
        </section>
      </div>

      {/* Phone navigation */}
      {toggleNavigation && (
        <div className='absolute bg-colour-med w-full h-[calc(100%_-_4rem)] overflow-hidden z-10 md:hidden'>
          <ul className='grid gap-2 mt-2'>
            {/* Home */}
            <li className='phone__nav__li'>
              <Link className='phone__nav__link' to='/' onClick={toggleNavbar}>
                <img src={Home} className='w-8' alt='home' />
                <div className='flex items-center text-xl'>
                  <h3>Home</h3>
                </div>
              </Link>
            </li>
            {user.email && (
              <>
                {/* Account */}
                <li className='phone__nav__li'>
                  <Link
                    to='/account'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Account} className='w-8' alt='account' />
                    <div className='flex items-center text-xl'>
                      <h3>Account</h3>
                    </div>
                  </Link>
                </li>
                {/* Notifications */}
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
                    <div className='flex items-center text-xl'>
                      <h3>Notifications</h3>
                    </div>
                  </Link>
                </li>
                {/* Messages */}
                <li className='phone__nav__li'>
                  <Link
                    className='phone__nav__link'
                    onClick={() => {
                      toggleNavbar();
                      displayMessages();
                    }}
                  >
                    <img
                      src={MessageIcon}
                      className='w-8'
                      alt='notNotification'
                    />
                    <div className='flex items-center text-xl'>
                      <h3>Messages</h3>
                    </div>
                  </Link>
                </li>
              </>
            )}
            {/* Design */}
            <li className='phone__nav__li'>
              <Link
                to='/design'
                className='phone__nav__link'
                onClick={toggleNavbar}
              >
                <img src={Design} className='w-8' alt='design' />
                <div className='flex items-center text-xl'>
                  <h3>Design</h3>
                </div>
              </Link>
            </li>
            {/* Contact */}
            <li className='phone__nav__li'>
              <Link
                to='/contact'
                className='phone__nav__link'
                onClick={toggleNavbar}
              >
                <img src={Contact} className='w-8' alt='contact' />
                <div className='flex items-center text-xl'>
                  <h3>Contact</h3>
                </div>
              </Link>
            </li>
            {/* Portfolio */}
            <li className='phone__nav__li'>
              <Link
                to='/portfolio'
                className='phone__nav__link'
                onClick={toggleNavbar}
              >
                <img src={Portfolio} className='w-8' alt='portfolio' />
                <div className='flex items-center text-xl'>
                  <h3>Portfolio</h3>
                </div>
              </Link>
            </li>
            {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
              // Admin
              <li className='phone__nav__li'>
                <Link
                  to='/admin'
                  className='phone__nav__link'
                  onClick={toggleNavbar}
                >
                  <img src={Admin} className='w-8' alt='admin' />
                  <div className='flex items-center text-xl'>
                    <h3>Admin</h3>
                  </div>
                </Link>
              </li>
            )}
            {user.role === 'DEVELOPER' && (
              // Developer
              <>
                <li className='phone__nav__li'>
                  <Link
                    to='/development'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Developer} className='w-8' alt='development' />
                    <div className='flex items-center text-xl'>
                      <h3>Development</h3>
                    </div>
                  </Link>
                </li>
                {/* Events */}
                <li className='phone__nav__li'>
                  <Link
                    className='phone__nav__link'
                    onClick={() => {
                      toggleNavbar();
                      displayEvents();
                    }}
                  >
                    <img
                      src={EventsIcon}
                      className='w-8'
                      alt='notNotification'
                    />
                    <div className='flex items-center text-xl'>
                      <h3>Events</h3>
                    </div>
                  </Link>
                </li>
                {/* Test Page */}
                <li className='phone__nav__li'>
                  <Link
                    className='phone__nav__link'
                    onClick={() => {
                      toggleNavbar();
                      displayTest();
                    }}
                  >
                    <img
                      src={TestIcon}
                      className='w-8'
                      alt='notNotification'
                    />
                    <div className='flex items-center text-xl'>
                      <h3>Test Page</h3>
                    </div>
                  </Link>
                </li>
              </>
            )}
            {!user.email && (
              <>
                {/* Login */}
                <li className='phone__nav__li'>
                  <Link
                    to='/login'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Login} className='w-8' alt='login' />
                    <div className='flex items-center text-xl'>
                      <h3>Login</h3>
                    </div>
                  </Link>
                </li>
                {/* Register */}
                <li className='phone__nav__li'>
                  <Link
                    to='/register'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Register} className='w-8' alt='register' />
                    <div className='flex items-center text-xl'>
                      <h3>Register</h3>
                    </div>
                  </Link>
                </li>
              </>
            )}
            {user.email && (
              // Logout
              <li className='phone__nav__li'>
                <Link onClick={signOut} className='phone__nav__link'>
                  <img src={Logout} className='w-8' alt='logout' />
                  <div className='flex items-center text-xl'>
                    <h3>Log out</h3>
                  </div>
                </Link>
              </li>
            )}
            {/* Search */}
            <li className='phone__nav__li'>
              <div className='flex'>
                <img src={Search} className='w-8' alt='search' />
                <input
                  type='text'
                  placeholder='Search...'
                  className='w-full ml-2 pl-2 rounded text-black'
                />
              </div>
            </li>
            {/* Social links */}
            <li className='phone__nav__li flex justify-center'>
              <section className='flex gap-1 border-2 border-black border-solid p-2 space-x-2'>
                <div>
                  <a
                    href='https://github.com/webdesignbytom'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={Github} className='social__link' alt='github' />
                  </a>
                </div>
                <div>
                  <a
                    href='https://twitter.com/webdesignsbytom'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={Twitter} className='social__link' alt='twitter' />
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.linkedin.com/in/tom-brockington-b011b8230/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={LinkedIn}
                      className='social__link'
                      alt='linkedIn'
                    />
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.instagram.com/webdesignsbytom/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={Instagram}
                      className='social__link'
                      alt='instagram'
                    />
                  </a>
                </div>
              </section>
            </li>
          </ul>
        </div>
      )}

      {toggleNotifications && (
        <div className='reveal__component'>
          <Notifications />
        </div>
      )}
      {toggleMessages && (
        <div className='reveal__component'>
          <MessagesComponent />
        </div>
      )}
      {toggleEvents && (
        <div className='reveal__component'>
          <EventMenu />
        </div>
      )}
      {toggleTests && (
        <div className='reveal__component'>
          <TestPage />
        </div>
      )}
    </>
  );
}

export default Navbar;
