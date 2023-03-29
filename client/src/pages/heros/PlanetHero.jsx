import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Video
import EarthVideo from '../../assets/video/earthVideo.mp4';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { UserContext } from '../../context/UserContext';
// Components
import SocialBar from '../../components/social/SocialBar';
// Icons
import Home from '../../assets/svg/homeIcon-white.svg';
import Contact from '../../assets/svg/contactIcon-white.svg';
import Design from '../../assets/svg/designIcon-white.svg';
import Login from '../../assets/svg/loginIcon-white.svg';
import Logout from '../../assets/svg/logoutIcon-white.svg';
import Portfolio from '../../assets/svg/portfolioIcon-white.svg';
import Register from '../../assets/svg/registerIcon-white.svg';
import Search from '../../assets/svg/searchIcon-white.svg';
import StoreIcon from '../../assets/svg/storeIcon-white.svg';
// Data
import { sampleUserData } from '../../users/utils/utils';

const heroLinks = [
  {
    title: `Home`,
    link: '/',
  },
  {
    title: `Design`,
    link: '/design',
  },
  {
    title: `Store`,
    link: '/store',
  },
  {
    title: `Portfolio`,
    link: '/portfolio',
  },
  {
    title: `Login`,
    link: '/login',
  },
];

function PlanetHero({ increasePageNumber, decreasePageNumber }) {
  const { toggleNavigation, setToggleNavigation } = useContext(ToggleContext);
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

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
        <div className='grid relative bg-black h-[100vh] overflow-hidden w-full'>
          {/* nav */}
          <header className='flex absolute w-full z-20 max-h-12 font-outfit text-white justify-between px-4 py-4'>
            <div>
              <Link to='/'>
                <h3 className='md:text-xl'>GLXY DESIGN CLSS</h3>
              </Link>
            </div>
            {/* Large nav */}
            <nav className='hidden md:block'>
              <ul className='flex text-white gap-4'>
                {heroLinks.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className='text-xl font-medium cursor-pointer hover:text-gray-300'
                        to={link.link}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Phone nav */}
            <nav className='md:hidden'>
              <span
                onClick={toggleNavbar}
                className='cursor-pointer text-white hover:text-hover-grey'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 transition duration-200 ease-in-out select-none focus:scale-125 active:scale-125'
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

          {/* Video component */}
          <section className='bg-black max-h-[calc(100%_-_4rem)] -ml-10 lg:-ml-0 grid z-0 w-full md:h-full lg:overflow-hidden lg:bg-cover lg:object-cover'>
            <video
              className='grid absolute min-w-full max-h-full max-w-none lg:min-w-full lg:max-h-full lg:min-h-full xl:max-h-none xl:min-h-full xl:w-full'
              autoPlay
              loop
              muted
              id='video'
            >
              <source src={EarthVideo} type='video/mp4' />
            </video>
          </section>

          <section className='text-white grid z-10 px-2 absolute h-full w-full justify-center items-center'>
            <section>
              <article>
                <section className='bg-transparent-black p-2 md:bg-none md:bg-transparent rounded-tr-2xl rounded-bl-2xl'>
                  <h1 className='grid text-5xl font-semibold font-outfit'>
                    <span className='text-left -ml-4 md:-ml-8'>
                      Web Designs
                    </span>{' '}
                    <span className='text-right -mr-4 md:-mr-8'>By Tom</span>
                  </h1>
                  <h2 className='font-semibold text-center mt-2'>
                    Spacious Web Designs
                  </h2>
                </section>

                <section className='my-4'>
                  <div className='grid w-full md:flex my-2 gap-2 justify-center font-outfit'>
                    <Link to='/store'>
                      <div className='border-white border-solid border-[2px] p-1'>
                        <button className='py-2 px-4 uppercase border-white hover:bg-transparent-white cursor-pointer border-4 border-solid font-medium w-full'>
                          Build Website
                        </button>
                      </div>
                    </Link>
                    <Link to='/portfolio'>
                      <div className='border-white border-solid border-[2px] p-1'>
                        <button className='py-2 px-4 hover:bg-transparent-white uppercase border-white cursor-pointer border-4 border-solid font-medium w-full'>
                          View Portfolio
                        </button>
                      </div>
                    </Link>
                  </div>
                </section>
              </article>
            </section>

            <footer
              className={`grid justify-center mb-10 text-white absolute bottom-0 w-full`}
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
              <article className='text-xs mb-2 md:text-sm grid text-center justify-center font-outfit font-semibold'>
                <p>This is one of many landing pages i have designed.</p>
                <p>Use the controls below to move through the options.</p>
              </article>
            </footer>
          </section>
        </div>
      ) : (
        <div className={`relative h-screen max-h-screen bg-black w-full`}>
          {/* Phone Nav Open */}
          <header className='absolute md:hidden top-2 right-3 flex w-full justify-end'>
            <nav
              onClick={() => {
                toggleNavbar();
              }}
              className=''
            >
              <span
                className={`cursor-pointer text-white hover:text-hover-grey`}
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
                  background={`bg-black`}
                  icons={`text-white dark:text-colour-dark text-3xl`}
                />
              </div>
            </ul>
          </section>
        </div>
      )}
    </>
  );
}

export default PlanetHero;
