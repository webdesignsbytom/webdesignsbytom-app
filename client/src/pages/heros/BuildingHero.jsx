import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components
import SocialBar from '../../components/social/SocialBar';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
import ArtItem from '../../assets/img/backgrounds/plan-drawing.png';
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
// React icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';
import { MdRoofing } from 'react-icons/md';
import { TbCircuitGround } from 'react-icons/tb';
import { GiBrickWall } from 'react-icons/gi';
import { GiTrowel } from 'react-icons/gi';
// Images
import WhiteLogo from '../../assets/img/logos/wdbt-white.svg';
// Utils
import { sampleUserData } from '../../users/utils/utils';

function BuildingHero({ increasePageNumber, decreasePageNumber }) {
  const { user, setUser } = useContext(UserContext);
  const { toggleNavigation, setToggleNavigation } = useContext(ToggleContext);
  let activeNav = '#'

  let navigate = useNavigate();

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
        <div className='bg-transparent-black w-full relative h-screen min-h-screen lg:h-screen lg:overflow-hidden'>
          {/* Navigation */}

          {/* Phone Nav */}
          <header className='flex px-2 mb-10 pt-4 items-center no__highlights relative z-10 md:hidden w-full justify-between'>
            <section className='text-white pl-1 object-cover'>
              <Link to='/store' className='cursor-pointer'>
                <img
                  src={WhiteLogo}
                  className='w-12'
                  alt='web designs by tom logo'
                />
              </Link>
            </section>

            <nav
              onClick={() => {
                toggleNavbar();
              }}
              className='pr-1'
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
                  className='w-12 h-12 transition duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125'
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
          {/* Large nav */}
          <header className='relative hidden md:flex justify-center p-2 lg:py-4 px-10 z-20'>
          <section className='text-white absolute top-0 left-0 h-full flex items-center pl-8 object-cover'>
              <Link to='/store' className='cursor-pointer'>
                <img
                  src={WhiteLogo}
                  className='w-12'
                  alt='web designs by tom logo'
                />
              </Link>
            </section>
            <section>
              <nav>
                <ul className='flex font-semibold text-2xl gap-4 py-2 px-4'>
                  <li
                    className={
                      activeNav === '#'
                        ? 'text-[#540d1f]'
                        : 'text-[#003847] hover:text-[#002833]'
                    }
                  >
                    <Link to='/'>Home</Link>
                  </li>
                  <li
                    className={
                      activeNav === '/contact'
                        ? 'text-[#540d1f]'
                        : 'text-[#003847] hover:text-[#002833]'
                    }
                  >
                    <Link to='/store'>Store</Link>
                  </li>
                  <li
                    className={
                      activeNav === '/portfolio'
                        ? 'text-[#540d1f]'
                        : 'text-[#003847] hover:text-[#002833]'
                    }
                  >
                    <Link to='/portfolio'>Portfolio</Link>
                  </li>
                  <li
                    className={
                      activeNav === '/contact'
                        ? 'text-[#540d1f]'
                        : 'text-[#003847] hover:text-[#002833]'
                    }
                  >
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </nav>
            </section>
            <section className='absolute hidden top-0 right-0 h-full xl:flex items-center'>
              <article className='mr-10 bg-[#004E5D] py-2 px-4 rounded-full outline outline-[#800020] outline-2'>
                <h5 className='grid font-semibold leading-4'>
                  <span>Phone: 07541 576 148</span>
                  <span>Email: tom@webdesignsbytom.com</span>
                </h5>
              </article>
            </section>
          </header>

          {/* Main */}
          <main className='bg-transparent-black absolute top-0 w-full h-full'>
            <section className='w-full h-full pt-[68px]'>
              <section className='h-full w-full p-4'>
                <div className='h-full w-full outline outline-[#003847] outline-8 p-3'>
                  <div className='relative h-full w-full outline outline-[#800020] outline-4 p-4 flex gap-4'>
                    {/* Section Left */}
                    <section className='text-white bg-[#004E5D] h-full w-full grid grid-rows-reg'>
                      <section className='grid'>

                        <section className='grid grid-cols-2 gap-4 xl:flex lg:justify-center p-2 lg:gap-4 lg:p-4'>
                          <article className='bg-transparent-white w-full outline outline-[#002833] outline-4 cursor-pointer py-2 px-2 rounded-full flex items-center gap-1'>
                            <div className='outline bg-transparent-white-2 outline-[#800020] outline-[3px] rounded-full p-1'>
                              <MdRoofing className='text-[#002833]' size={25} />
                            </div>
                            <h3 className='flex text-xs md:text-base mb-[1px] px-1 font-semibold uppercase text-[#002833]'>
                              Roofing
                            </h3>
                          </article>
                          <article className='bg-transparent-white w-full outline outline-[#002833] outline-4 cursor-pointer py-2 px-2 rounded-full flex items-center gap-1'>
                            <div className='outline bg-transparent-white-2 outline-[#800020] outline-[3px] rounded-full p-1'>
                              <TbCircuitGround
                                className='text-[#002833]'
                                size={25}
                              />
                            </div>
                            <h3 className='flex mb-[1px] px-1 text-xs md:text-base font-semibold uppercase text-[#002833]'>
                              Ground
                            </h3>
                          </article>
                          <article className='bg-transparent-white w-full outline outline-[#002833] outline-4 cursor-pointer py-2 px-2 rounded-full flex items-center gap-1'>
                            <div className='outline bg-transparent-white-2 outline-[#800020] outline-[3px] rounded-full p-1'>
                              <GiBrickWall
                                className='text-[#002833]'
                                size={25}
                              />
                            </div>
                            <h3 className='flex mb-[1px] px-1 text-xs md:text-base font-semibold uppercase text-[#002833]'>
                              Masonary
                            </h3>
                          </article>
                          <article className='bg-transparent-white w-full outline outline-[#002833] outline-4 cursor-pointer py-2 px-2 rounded-full flex items-center gap-1'>
                            <div className='outline bg-transparent-white-2 outline-[#800020] outline-[3px] rounded-full p-1'>
                              <GiTrowel className='text-[#002833]' size={25} />
                            </div>
                            <h3 className='flex mb-[1px] px-1 text-xs md:text-base font-semibold uppercase text-[#002833]'>
                              Plastering
                            </h3>
                          </article>
                        </section>
                        <section className='px-4 flex justify-center'>
                          <article className='text-center md:text-start'>
                            <p>
                              Quality web designer with partners around the
                              world to solve all you web needs.
                            </p>
                            <p>Based in Tavistock, United Kingdom.</p>
                            <p className='hidden md:block'>Excellent customer service.</p>
                          </article>
                        </section>
                      </section>
                      {/* Bottom - left */}
                      <section className='w-full pt-20 md:pt-4'>
                        <div className='object-cover overflow-hidden rotate-45 h-2/3'>
                          <img src={ArtItem} alt='architecture' />
                        </div>
                      </section>
                    </section>
                    {/* Right side */}
                    <section className='hidden md:block relative text-white h-full w-full'>
                      <section className='absolute z-0 h-full w-full bg-[#003847] triangular__shape'></section>
                      <section className='absolute z-10 h-full w-full bg-building-img bg-left-bottom bg-cover'></section>
                    </section>
                    {/* Center text */} 
                    <section className='absolute z-20 w-full md:w-fit text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      <article className='outline mx-2 md:mx-0 bg-transparent-black-2 outline-[#800020] outline-4 p-2'>
                        <section className='h-full text-center w-full outline outline-[#003847] outline-2 py-4 px-6'>
                          <h1 className='text-2xl md:text-5xl font-bold mb-4'>
                            T. Brockington
                          </h1>
                          <h2 className='text-xs md:text-base font-semibold uppercase'>
                            www.webdesignsbytom.com
                          </h2>
                          <h3 className='text-xs md:text-base font-semibold uppercase'>
                            Web developer || Inventor || Engineer
                          </h3>
                          <h4 className='text-xs md:text-base font-semibold'>
                            Available world wide
                          </h4>
                        </section>
                      </article>
                    </section>
                  </div>
                </div>
              </section>
            </section>
          </main>
          {/* Change page */}
          <section className='absolute text-white z-30 bottom-0 w-full grid justify-center mb-4'>
            <section className='flex items-center  justify-center gap-8 py-1'>
              <section
                onClick={decreasePageNumber}
                className='rounded-full p-1 lg:p-[2px] cursor-pointer text-white'
              >
                <HiArrowSmLeft className='' size={50} />
              </section>
              <section
                onClick={increasePageNumber}
                className='rounded-full p-1 lg:p-[2px] cursor-pointer text-white'
              >
                <HiArrowSmRight className='' size={50} />
              </section>
            </section>
            <article className='text-xs md:text-sm grid text-center justify-center font-outfit font-semibold'>
              <p>
                <span>This is one of many landing pages i have designed.</span>
                <span>Use the controls below to move through the options.</span>
              </p>
            </article>
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
                  className='w-12 h-12 transition duration-200 ease-in-out select-none no__highlights focus:scale-125 active:scale-125'
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

export default BuildingHero;
