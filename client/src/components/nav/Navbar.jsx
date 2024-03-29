import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
// Data
import { sampleUserData } from '../../users/utils/utils';
// Icons
import Home from '../../assets/svg/homeIcon-white.svg';
import Account from '../../assets/svg/accountIcon-white.svg';
import Admin from '../../assets/svg/adminIcon-white.svg';
import Contact from '../../assets/svg/contactIcon-white.svg';
import Design from '../../assets/svg/designIcon-white.svg';
import Developer from '../../assets/svg/developerIcon-white.svg';
import Login from '../../assets/svg/loginIcon-white.svg';
import Logout from '../../assets/svg/logoutIcon-white.svg';
import MessageIcon from '../../assets/svg/messageIcon-white.svg';
import Notification from '../../assets/svg/notificationIcon-white.svg';
import Portfolio from '../../assets/svg/portfolioIcon-white.svg';
import Register from '../../assets/svg/registerIcon-white.svg';
import TestIcon from '../../assets/svg/testIcon-white.svg';
import EventsIcon from '../../assets/svg/eventsIcon-white.svg';
import Search from '../../assets/svg/searchIcon-white.svg';
import StoreIcon from '../../assets/svg/storeIcon-white.svg';
// Images
import WDBT from '../../assets/img/logos/wdbt-white.svg'
// Components
import NotificationsPhone from '../notifications/NotificationsPhone';
import MessagesPhone from '../messages/MessagesPhone';
import SocialBar from '../social/SocialBar';
import TestPage from '../../pages/test/TestPage';
import EventsPhone from '../events/EventsPhone';
import ContactsPhone from '../contacts/ContactsPhone';
// Styles
import '../../styles/keyframes.css';

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
    toggleContacts,
    setToggleContacts,
  } = useContext(ToggleContext);
  const { user, setUser } = useContext(UserContext);
  const [activeNav, setActiveNav] = useState('#');
  const [pageName, setPageName] = useState('home');

  useEffect(() => {
    setActiveNav(window.location.pathname);
    setPageName(window.location.pathname.substring(1));
  }, []);

  let navigate = useNavigate();

  const navigateHome = () => {
    navigate('/', { replace: true });
  };

  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation);
    setToggleNotifications(false);
    setToggleMessages(false);
    setToggleTests(false);
    setToggleEvents(false);
    setToggleContacts(false);
  };

  const displayEvents = () => {
    setToggleEvents(true);
    setToggleNotifications(false);
    setToggleMessages(false);
    setToggleTests(false);
    setToggleContacts(false);
  };

  const displayNotifications = () => {
    setToggleNotifications(true);
    setToggleMessages(false);
    setToggleTests(false);
    setToggleEvents(false);
    setToggleContacts(false);
  };

  const displayMessages = () => {
    setToggleMessages(true);
    setToggleNotifications(false);
    setToggleTests(false);
    setToggleEvents(false);
    setToggleContacts(false);
  };

  const displayTest = () => {
    setToggleTests(true);
    setToggleMessages(false);
    setToggleNotifications(false);
    setToggleEvents(false);
    setToggleContacts(false);
  };

  const displayContacts = () => {
    setToggleContacts(true);
    setToggleTests(false);
    setToggleMessages(false);
    setToggleNotifications(false);
    setToggleEvents(false);
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

  const closeContacts = () => {
    setToggleContacts(false);
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
      <div className='h-16 mx-auto px-2 sm:px-6 lg:px-4 bg-nav-colour lg:w-full overflow-hidden'>
        <section className='flex relative h-16 items-center justify-between px-4'>
          {/* Logo */}
          <div
            onClick={() => {
              navigateHome();
              closeNotifications();
              closeNavbar();
              closeMessages();
              closeEvents();
              closeContacts();
            }}
            className='inset-y-0 no__highlights left-0 flex items-center cursor-pointer select-none no__highlights'
          >
            <img src={WDBT} className='w-10 select-none' alt="Web design by Tom company logo" />
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
                closeContacts();
              }}
              className='md:hidden no__highlights'
            >
              <span className='cursor-pointer text-white hover:text-hover-grey'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 transition no__highlights duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125'
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
                {/* Store */}
                <li
                  className={
                    activeNav === '/store' ? 'selected__link' : 'nav__link'
                  }
                >
                  <Link to='/store'>Store</Link>
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
            <SocialBar
              background={'bg-nav-colour dark:bg-main-colour'}
              icons={'text-white dark:text-gray-300'}
            />
          </div>
        </section>
      </div>

      {/* Phone navigation */}
      {toggleNavigation && (
        <div className='absolute bg-black w-full min-h-[calc(100%_-_4rem)] overflow-hidden z-20 md:hidden'>
          <ul className='grid gap-2 mt-2'>
            {/* Home */}
            <li className='phone__nav__li no__highlights'>
              <Link className='phone__nav__link' to='/' onClick={toggleNavbar}>
                <img src={Home} className='w-8 ml-1' alt='home' />
                <div className='flex items-center text-xl ml-1'>
                  <h3>Home</h3>
                </div>
              </Link>
            </li>
            {user.email && (
              <>
                {/* Account */}
                <li className='phone__nav__li no__highlights'>
                  <Link
                    to='/account'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Account} className='w-8 ml-1' alt='account' />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Account</h3>
                    </div>
                  </Link>
                </li>
                {/* Notifications */}
                <li className='phone__nav__li no__highlights'>
                  <Link
                    className='phone__nav__link'
                    onClick={() => {
                      toggleNavbar();
                      displayNotifications();
                    }}
                  >
                    <img
                      src={Notification}
                      className='w-8 ml-1'
                      alt='notNotification'
                    />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Notifications</h3>
                    </div>
                  </Link>
                </li>
                {/* Messages */}
                <li className='phone__nav__li no__highlights'>
                  <Link
                    className='phone__nav__link'
                    onClick={() => {
                      toggleNavbar();
                      displayMessages();
                    }}
                  >
                    <img
                      src={MessageIcon}
                      className='w-8 ml-1'
                      alt='notNotification'
                    />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Messages</h3>
                    </div>
                  </Link>
                </li>
              </>
            )}
            {/* Design */}
            <li className='phone__nav__li no__highlights'>
              <Link
                to='/design'
                className='phone__nav__link'
                onClick={toggleNavbar}
              >
                <img src={Design} className='w-8 ml-1' alt='design' />
                <div className='flex items-center text-xl ml-1'>
                  <h3>Design</h3>
                </div>
              </Link>
            </li>
            {/* Store */}
            <li className='phone__nav__li no__highlights'>
              <Link
                to='/store'
                className='phone__nav__link'
                onClick={toggleNavbar}
              >
                <img src={StoreIcon} className='w-8 ml-1' alt='store' />
                <div className='flex items-center text-xl ml-1'>
                  <h3>Store</h3>
                </div>
              </Link>
            </li>
            {/* Contact */}
            <li className='phone__nav__li no__highlights'>
              <Link
                to='/contact'
                className='phone__nav__link'
                onClick={toggleNavbar}
              >
                <img src={Contact} className='w-8 ml-1' alt='contact' />
                <div className='flex items-center text-xl ml-1'>
                  <h3>Contact</h3>
                </div>
              </Link>
            </li>
            {/* Portfolio */}
            <li className='phone__nav__li no__highlights'>
              <Link
                to='/portfolio'
                className='phone__nav__link'
                onClick={toggleNavbar}
              >
                <img src={Portfolio} className='w-8 ml-1' alt='portfolio' />
                <div className='flex items-center text-xl ml-1'>
                  <h3>Portfolio</h3>
                </div>
              </Link>
            </li>
            {(user.role === 'ADMIN' || user.role === 'DEVELOPER') && (
              <>
                {/* Admin */}
                <li className='phone__nav__li no__highlights'>
                  <Link
                    to='/admin'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Admin} className='w-8 ml-1' alt='admin' />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Admin</h3>
                    </div>
                  </Link>
                </li>
                {/* Contacts */}
                <li className='phone__nav__li no__highlights'>
                  <Link
                    className='phone__nav__link'
                    onClick={() => {
                      toggleNavbar();
                      displayContacts();
                    }}
                  >
                    <img
                      src={Contact}
                      className='w-8 ml-1'
                      alt='notNotification'
                    />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Contacts</h3>
                    </div>
                  </Link>
                </li>
              </>
            )}
            {user.role === 'DEVELOPER' && (
              // Developer
              <>
                <li className='phone__nav__li no__highlights'>
                  <Link
                    to='/development'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img
                      src={Developer}
                      className='w-8 ml-1'
                      alt='development'
                    />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Development</h3>
                    </div>
                  </Link>
                </li>
                {/* Events */}
                <li className='phone__nav__li no__highlights'>
                  <Link
                    className='phone__nav__link'
                    onClick={() => {
                      toggleNavbar();
                      displayEvents();
                    }}
                  >
                    <img
                      src={EventsIcon}
                      className='w-8 ml-1'
                      alt='notNotification'
                    />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Events</h3>
                    </div>
                  </Link>
                </li>
                {/* Test Page */}
                <li className='phone__nav__li no__highlights'>
                  <Link
                    className='phone__nav__link'
                    onClick={() => {
                      toggleNavbar();
                      displayTest();
                    }}
                  >
                    <img
                      src={TestIcon}
                      className='w-8 ml-1'
                      alt='notNotification'
                    />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Test Page</h3>
                    </div>
                  </Link>
                </li>
              </>
            )}
            {!user.email && (
              <>
                {/* Login */}
                <li className='phone__nav__li no__highlights'>
                  <Link
                    to='/login'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Login} className='w-8 ml-1' alt='login' />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Login</h3>
                    </div>
                  </Link>
                </li>
                {/* Register */}
                <li className='phone__nav__li no__highlights'>
                  <Link
                    to='/register'
                    className='phone__nav__link'
                    onClick={toggleNavbar}
                  >
                    <img src={Register} className='w-8 ml-1' alt='register' />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Register</h3>
                    </div>
                  </Link>
                </li>
              </>
            )}
            {user.email && (
              // Logout
              <li className='phone__nav__li no__highlights'>
                <Link onClick={signOut} className='phone__nav__link'>
                  <img src={Logout} className='w-8 ml-1' alt='logout' />
                  <div className='flex items-center text-xl ml-1'>
                    <h3>Log out</h3>
                  </div>
                </Link>
              </li>
            )}
            {/* Search */}
            <li className='phone__nav__li no__highlights'>
              <div className='flex'>
                <img src={Search} className='w-8 ml-1' alt='search' />
                <input
                  type='text'
                  placeholder='Search...'
                  className='w-full ml-2 pl-2 rounded text-black'
                />
              </div>
            </li>
            {/* Social links */}
            <div className='my-2 flex justify-center no__highlights'>
              <SocialBar
                background={'bg-black'}
                icons={'text-white dark:text-colour-dark text-3xl'}
              />
            </div>
          </ul>
        </div>
      )}

      {toggleNotifications && (
        <div className='reveal__component'>
          <NotificationsPhone />
        </div>
      )}
      {toggleMessages && (
        <div className='reveal__component'>
          <MessagesPhone />
        </div>
      )}
      {toggleEvents && (
        <div className='reveal__component'>
          <EventsPhone />
        </div>
      )}
      {toggleContacts && (
        <div className='reveal__component'>
          <ContactsPhone />
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
