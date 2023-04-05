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
import { MdRoofing } from 'react-icons/md';
import { TbCircuitGround } from 'react-icons/tb';
import { GiBrickWall } from 'react-icons/gi';
import { GiTrowel } from 'react-icons/gi';
// Utils
import { sampleUserData } from '../../users/utils/utils';

function BuildingHero({ increasePageNumber, decreasePageNumber }) {
  const { user, setUser } = useContext(UserContext);
  const { toggleNavigation, setToggleNavigation } = useContext(ToggleContext);
  const [activeNav, setActiveNav] = useState('#');

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
        <div className='bg-transparent-black w-full relative min-h-screen lg:h-screen lg:overflow-hidden'>
          {/* Navigation */}

          {/* Phone Nav */}
          <header className='flex p-2 items-center bg-blue-400 relative z-10 md:hidden w-full justify-between'>
            <section className='text-white pl-1'>Logo</section>

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
            <section>
              <nav>
                <ul className='flex text-xl gap-4 py-2 px-4'>
                  <li
                    className={
                      activeNav === '#'
                        ? 'text-[#540d1f]'
                        : 'text-[#004E5D] hover:text-[#003847]'
                    }
                  >
                    <Link to='/'>Home</Link>
                  </li>
                  <li
                    className={
                      activeNav === '/contact'
                        ? 'text-[#540d1f]'
                        : 'text-[#004E5D] hover:text-[#003847]'
                    }
                  >
                    <Link to='/store'>Store</Link>
                  </li>
                  <li
                    className={
                      activeNav === '/portfolio'
                        ? 'text-[#540d1f]'
                        : 'text-[#004E5D] hover:text-[#003847]'
                    }
                  >
                    <Link to='/portfolio'>Portfolio</Link>
                  </li>
                  <li
                    className={
                      activeNav === '/contact'
                        ? 'text-[#540d1f]'
                        : 'text-[#004E5D] hover:text-[#003847]'
                    }
                  >
                    <Link to='/contact'>Contact</Link>
                  </li>
                </ul>
              </nav>
            </section>
            <section className='absolute top-0 right-0 h-full flex items-center'>
                <article className='mr-10 bg-[#004E5D] py-2 px-4 rounded-full outline outline-[#800020] outline-2'>
                    <h4 className='font-semibold'>Contact: 07563 456 934</h4>
                </article>
            </section>
          </header>

          {/* Main */}
          <main className='bg-transparent-black absolute top-0 w-full h-full'>
            <section className='w-full h-full pt-[64px]'>
              <section className='h-full w-full p-4'>
                <div className='h-full w-full outline outline-[#003847] outline-8 p-3'>
                  <div className='relative h-full w-full outline outline-[#800020] outline-4 p-4 flex gap-4'>
                    {/* Section Left */}
                    <section className='text-white bg-[#004E5D] h-full w-full grid grid-rows-reg'>
                      <section className='grid'>
                        <section className='flex justify-center gap-4 p-4'>
                          <article className='bg-transparent-white outline outline-[#002833] outline-4 cursor-pointer py-2 px-2 rounded-full flex items-center gap-1'>
                            <div className='outline bg-transparent-white-2 outline-[#800020] outline-[3px] rounded-full p-1'>
                              <MdRoofing className='text-[#002833]' size={25} />
                            </div>
                            <h3 className='flex mb-[1px] px-1 font-semibold uppercase text-[#002833]'>
                              Roofing
                            </h3>
                          </article>
                          <article className='bg-transparent-white outline outline-[#002833] outline-4 cursor-pointer py-2 px-2 rounded-full flex items-center gap-1'>
                            <div className='outline bg-transparent-white-2 outline-[#800020] outline-[3px] rounded-full p-1'>
                              <TbCircuitGround className='text-[#002833]' size={25} />
                            </div>
                            <h3 className='flex mb-[1px] px-1 font-semibold uppercase text-[#002833]'>
                              Ground
                            </h3>
                          </article>
                          <article className='bg-transparent-white outline outline-[#002833] outline-4 cursor-pointer py-2 px-2 rounded-full flex items-center gap-1'>
                            <div className='outline bg-transparent-white-2 outline-[#800020] outline-[3px] rounded-full p-1'>
                              <GiBrickWall className='text-[#002833]' size={25} />
                            </div>
                            <h3 className='flex mb-[1px] px-1 font-semibold uppercase text-[#002833]'>
                              Masonary
                            </h3>
                          </article>
                          <article className='bg-transparent-white outline outline-[#002833] outline-4 cursor-pointer py-2 px-2 rounded-full flex items-center gap-1'>
                            <div className='outline bg-transparent-white-2 outline-[#800020] outline-[3px] rounded-full p-1'>
                              <GiTrowel className='text-[#002833]' size={25} />
                            </div>
                            <h3 className='flex mb-[1px] px-1 font-semibold uppercase text-[#002833]'>
                              Plastering
                            </h3>
                          </article>
                        </section>
                        <section className='px-4 flex justify-center'>
                          <article>
                            <p>
                              Quality building work with 4 generations of
                              expertise with J. Moore Builders.
                            </p>
                            <p>Tavistock based servicing Devon and Cornwall.</p>
                            <p>Excellent customer service.</p>
                          </article>
                        </section>
                      </section>
                      {/* Bottom - left */}
                      <section className='w-full'>
                        <div className='object-cover rotate-45 h-2/3'>
                          <img src={ArtItem} alt='architecture' />
                        </div>
                      </section>
                    </section>
                    <section className='relative text-white h-full w-full'>
                      <section className='absolute z-0 h-full w-full bg-[#003847] triangular__shape'></section>
                      <section className='absolute z-10 h-full w-full bg-building-img bg-left-bottom bg-cover'></section>
                    </section>
                    {/* Center text */}
                    <section className='absolute z-20 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      <article className='outline bg-transparent-black-2 outline-[#800020] outline-4 p-2'>
                        <section className='h-full text-center w-full outline outline-[#003847] outline-2 py-4 px-6'>
                          <h1 className='text-5xl font-bold mb-2'>
                            J. Moore Builders
                          </h1>
                          <h2 className='font-semibold'>Licenced and bonded tradesmen</h2>
                          <h3 className='font-semibold uppercase'>Tavistock - Plymouth - Devon</h3>
                        </section>
                      </article>
                    </section>
                  </div>
                </div>
              </section>
            </section>
          </main>
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
