import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Data
import { sampleUserData } from '../../users/utils/utils';

const links = [
  { url: '/developer', title: 'Home' },
  { url: '/', title: 'Hero' },
  { url: '/design', title: 'Design' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/login', title: 'Login' },
  { url: '/register', title: 'Register' },
  { url: '/admin', title: 'Admin' },
  { url: '/development', title: 'Developer' },
  { url: '/account', title: 'Account' },
];

function Navbar() {
  const { setUser } = useContext(UserContext);
  const { toggleNavigation, setToggleNavigation } =useContext(ToggleContext);

  const openNavbar = () => {
    console.log('log');
    setToggleNavigation(!toggleNavigation);
  };

  const signOut = (event) => {
    event.preventDefault();

    setUser(sampleUserData);
    localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
  };

  return (
    <>
    {/* Main Container */}
      <div className='flex flex-row h-min justify-between max-w-full px-8 bg-main-colour sm:flex hover:text-slate-50 items-center lg:mb-4'>

        {/* small screen menu */}
        <div className='flex flex-row md:hidden'>
          <section>
            Logo
          </section> 
          <nav>
            <span onClick={openNavbar} className='cursor-pointer text-white hover:text-hover-grey'>
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
        </div>
        {toggleNavigation && 
            <div>
              <div>A</div>
              <div>B</div>
            </div>
          
        }
        {/* Large screen menu */}
        <nav className='hidden flex-row w-full justify-end items-center md:flex'>
          <ul className='flex flex-row items-center'>
            <li>
              <Link
                to='/'
                onClick={signOut}
                className='block px-4 py-2 text-white hover:text-main-colour-dark font-medium text-lg'
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar