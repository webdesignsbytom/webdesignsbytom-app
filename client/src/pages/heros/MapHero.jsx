import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
// Components
import SocialBar from '../../components/social/SocialBar';
// SVG Icons
import Home from '../../assets/svg/homeIcon-white.svg';
import Contact from '../../assets/svg/contactIcon-white.svg';
import Design from '../../assets/svg/designIcon-white.svg';
import Login from '../../assets/svg/loginIcon-white.svg';
import Logout from '../../assets/svg/logoutIcon-white.svg';
import Portfolio from '../../assets/svg/portfolioIcon-white.svg';
import Register from '../../assets/svg/registerIcon-white.svg';
import Search from '../../assets/svg/searchIcon-white.svg';
import StoreIcon from '../../assets/svg/storeIcon-white.svg';
// Utils
import { sampleUserData } from '../../users/utils/utils';

function MapHero({ increasePageNumber, decreasePageNumber }) {
  const { toggleNavigation, setToggleNavigation } = useContext(ToggleContext);
  const { user, setUser } = useContext(UserContext);
  const [settingSelect, setSettingSelect] = useState('Light Mode');
  const [currentBg, setCurrentBg] = useState('black');
  const [currentTransBg, setCurrentTransBg] = useState('transparent-black');
  const [currentText, setCurrentText] = useState('white');

  let navigate = useNavigate();

  const swapColourMode = () => {
    if (currentBg === 'white') {
      setCurrentBg('black');
      setCurrentText('white');
      setSettingSelect('Light Mode');
      setCurrentTransBg('transparent-black');
      return;
    }
    if (currentBg === 'black') {
      setCurrentBg('white');
      setCurrentText('black');
      setSettingSelect('Dark Mode');
      setCurrentTransBg('transparent-white');
      return;
    }
  };

  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation);
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
      {!toggleNavigation ? (
        <div
          className={`relative h-screen max-h-screen bg-${currentBg} bg-no-repeat w-full bg-cover bg-[center_right_45%] bg-maps-bg md:bg-center h-full md:bg-contain font-pops`}
        >
          {/* Colour select */}
          <section
            className={`absolute top-2 z-40 left-2 text-${currentText} outline outline-2 outline-${currentText} rounded-lg p-1`}
          >
            <div className='md:p-1'>
              <h3 className='text-xs md:text-sm font-semibold'>
                Switch Colour Mode
              </h3>
            </div>
            <button
              onClick={swapColourMode}
              className={
                'bg-colour-med grid justify-center p-1 md:p-2 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full '
              }
            >
              {settingSelect}
            </button>
          </section>

          {/* Nav */}
          {/* Phone Nav */}
          <header className='absolute md:hidden top-2 right-3 flex w-full justify-end'>
            <nav
              onClick={() => {
                toggleNavbar();
              }}
              className=''
            >
              <span
                className={`cursor-pointer text-${currentText} hover:text-hover-grey`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-12 h-12 transition duration-200 ease-in-out select-none focus:scale-125 active:scale-125'
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
          </header>

          {/* Main */}
          <main
            className={`grid h-full w-full justify-center items-center text-${currentText}`}
          >
            <section>
              <section
                className={`outline outline-4 outline-${currentText} bg-${currentTransBg} text-center  rounded-xl p-4`}
              >
                <h2 className='text-lg font-semibold'>WELCOME TO</h2>
                <h1 className='text-xl font-bold'>WEB DESIGNS BY TOM</h1>
              </section>

              <section className='my-4'>
                <div className='flex my-2 gap-2 justify-center font-outfit'>
                  <Link to='/store'>
                    <button
                      className={`py-2 bg-${currentTransBg} px-4 text-sm md:text-base uppercase border-${currentText} rounded-lg hover:bg-${currentTransBg} cursor-pointer border-4 border-solid font-medium w-full`}
                    >
                      Build Website
                    </button>
                  </Link>
                  <Link to='/portfolio'>
                    <button
                      className={`py-2 bg-${currentTransBg} px-4 text-sm md:text-base uppercase border-${currentText} rounded-lg hover:bg-${currentTransBg} cursor-pointer border-4 border-solid font-medium w-full`}
                    >
                      View Portfolio
                    </button>
                  </Link>
                </div>
              </section>
            </section>
          </main>

          <footer
            className={`grid justify-center text-${currentText} absolute bottom-0 w-full`}
          >
            <section className='flex items-center justify-center gap-8 py-1'>
              <section
                onClick={decreasePageNumber}
                className='rounded-full p-1 lg:p-[2px] cursor-pointer'
              >
                <HiArrowSmLeft className='' size={50} />
              </section>
              <section
                onClick={increasePageNumber}
                className='rounded-full p-1 lg:p-[2px] cursor-pointer'
              >
                <HiArrowSmRight className='' size={50} />
              </section>
            </section>
            <article className='text-xs md:text-sm mb-2 grid text-center justify-center font-semibold'>
              <p>This is one of many landing pages i have designed.</p>
              <p>Use the controls below to move through the options.</p>
            </article>
          </footer>
        </div>
      ) : (
        <div
          className={`relative h-screen max-h-screen bg-${currentBg} w-full`}
        >
          {/* Phone Nav Open */}
          <header className='absolute md:hidden top-2 right-3 flex w-full justify-end'>
            <nav
              onClick={() => {
                toggleNavbar();
              }}
              className=''
            >
              <span
                className={`cursor-pointer text-${currentText} hover:text-hover-grey`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-12 h-12 transition duration-200 ease-in-out select-none focus:scale-125 active:scale-125'
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
          </header>
          {/* List */}
          <section className='pt-16'>
            <ul className='grid gap-2'>
              {/* Home */}
              <li className='phone__nav__li'>
                <Link
                  className='phone__nav__link'
                  to='/'
                  onClick={toggleNavbar}
                >
                  <img src={Home} className='w-8 ml-1' alt='home' />
                  <div className='flex items-center text-xl ml-1'>
                    <h3>Home</h3>
                  </div>
                </Link>
              </li>
              {/* Design */}
              <li className='phone__nav__li'>
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
              <li className='phone__nav__li'>
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
              <li className='phone__nav__li'>
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
              <li className='phone__nav__li'>
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

              {!user.email && (
                <>
                  {/* Login */}
                  <li className='phone__nav__li'>
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
                  <li className='phone__nav__li'>
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
                <li className='phone__nav__li'>
                  <Link onClick={signOut} className='phone__nav__link'>
                    <img src={Logout} className='w-8 ml-1' alt='logout' />
                    <div className='flex items-center text-xl ml-1'>
                      <h3>Log out</h3>
                    </div>
                  </Link>
                </li>
              )}
              {/* Search */}
              <li className='phone__nav__li'>
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
              <div className='my-2 flex justify-center'>
                <SocialBar
                  background={`bg-${currentBg}`}
                  icons={`text-${currentText} dark:text-colour-dark text-3xl`}
                />
              </div>
            </ul>
          </section>
        </div>
      )}
    </>
  );
}

export default MapHero;
