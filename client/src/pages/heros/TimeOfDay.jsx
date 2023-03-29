import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
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
import { sampleUserData } from '../../users/utils/utils';
import { UserContext } from '../../context/UserContext';

function TimeOfDay({ increasePageNumber, decreasePageNumber }) {
  const { toggleNavigation, setToggleNavigation } = useContext(ToggleContext);
  const { user, setUser } = useContext(UserContext);
  // Nav Colours
  const [currentBg, setCurrentBg] = useState('black');
  const [currentTransBg, setCurrentTransBg] = useState('transparent-black');
  const [currentText, setCurrentText] = useState('white');
  // Colours
  const [currentTextColour, setCurrentTextColour] = useState('black');
  // Buttons
  const [buttonOneStyle, setButtonOneStyle] = useState('day__button__one');
  const [buttonTwoStyle, setButtonTwoStyle] = useState('day__button__two');
  const [blurSetting, setBlurSetting] = useState('blur-none');
  // Image
  const [currentImage, setCurrentImage] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const container = document.getElementById('time__container');
    console.log('container', container);
    // DOM Elements
    const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name');
    // Options
    const showAmPm = true;

    console.log('container', container.scrollWidth);
    // Show Time
    function showTime() {
      let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

      // Set AM or PM
      const amPm = hour >= 12 ? 'PM' : 'AM';

      // 12hr Format
      hour = hour % 12 || 12;

      // Output Time
      time.innerHTML = `${hour}<span>:</span>${addZero(
        min
      )}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

      setTimeout(showTime, 1000);
    }

    // Add Zeros
    function addZero(n) {
      return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    // Set Background and Greeting
    function setBgGreet() {
      let today = new Date(),
        hour = today.getHours();

      if (hour < 12) {
        // Morning
        if (container.scrollWidth < 600) {
          container.style.backgroundImage =
            "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/morning-bg-phone.jpg?raw=true')";
          setCurrentImage(
            "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/morning-bg-phone.jpg?raw=true')"
          );
        } else {
          container.style.backgroundImage =
            "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/morning-bg.jpg?raw=true')";
          setCurrentImage(
            "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/morning-bg.jpg?raw=true')"
          );
        }
        greeting.textContent = 'Good Morning, ';
        setButtonOneStyle('day__button__one');
        setButtonTwoStyle('day__button__two');
      } else if (hour < 18) {
        
        // Afternoon
        if (container.scrollWidth < 600) {
          container.style.backgroundImage =
            "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/afternoon-bg-phone.jpg?raw=true')";
          setCurrentImage(
            "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/afternoon-bg-phone.jpg?raw=true')"
          );
        } else {
          container.style.backgroundImage =
            "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/afternoon-bg.jpg?raw=true')";
          setCurrentImage(
            "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/afternoon-bg.jpg?raw=true')"
          );
        }
        greeting.textContent = 'Good Afternoon, ';
        setButtonOneStyle('afternoon__button__one');
        setButtonTwoStyle('afternoon__button__two');
      } else {
        // Evening
        if (container.scrollWidth < 600) {
          container.style.backgroundImage =
            "https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/night-bg-phone.jpg?raw=true')";
          setCurrentImage(
            "https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/night-bg-phone.jpg?raw=true')"
          );
        } else {
          container.style.backgroundImage =
            "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/night-bg.jpg?raw=true')";
          setCurrentImage(
            "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/backgrounds/night-bg.jpg?raw=true')"
          );
        }
        greeting.textContent = 'Good Evening, ';
        container.style.color = 'white';
        setButtonOneStyle('night__button__one');
        setButtonTwoStyle('night__button__two');
      }
    }

    // Get Name
    function getName() {
      if (localStorage.getItem('heroName') === null) {
        name.textContent = 'Enter Name';
      } else {
        name.textContent = localStorage.getItem('heroName');
      }
    }

    // Set Name
    function setName(e) {
      if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('heroName', e.target.innerText);
          name.blur();
        }
      } else {
        localStorage.setItem('heroName', e.target.innerText);
      }
    }

    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);

    // Run
    showTime();
    setBgGreet();
    getName();
  }, []);

  const blurEffectStart = () => {
    setBlurSetting('backdrop-blur-md');
  };

  const blurEffectEnd = () => {
    setBlurSetting('blur-none');
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
        <div className='relative grid h-[100vh] w-full font-pops'>
          {/* Nav */}
          {/* Phone Nav */}
          <header className='absolute z-20 md:hidden top-3 right-4 flex w-full justify-end'>
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
                  className='w-8 h-8 transition duration-200 ease-in-out select-none focus:scale-125 active:scale-125'
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
          <div
            id='time__container'
            style={{
              backgroundImage: currentImage,
            }}
            className='grid relative object-contain bg-cover'
          >
            <section
              className={`grid items-center w-full ${blurSetting} transition duration-500 ease-in`}
            >
              <section className='absolute px-2 pt-2 md:px-4 md:pt-4 top-0 left-0 w-full flex justify-between'>
                <article>
                  <h1 className='font-bold uppercase text-sm md:text-3xl md:text-center'>
                    Web Designs By Tom
                  </h1>
                  <h2 className='text-left text-xs md:text-xl font-semibold'>
                    Professional{' '}
                    <span className='font-extrabold italic text-white'>
                      modern
                    </span>{' '}
                    web design
                  </h2>
                </article>

                {/* SOCIAL */}
                <section className='hidden md:flex items-center'>
                  <section
                    className={`flex outline-white outline-4 outline p-1 space-x-2 w-fit rounded-md`}
                  >
                    <div
                      className={`rounded flex gap-2 text-white w-full h-full p-1 md:py-2 md:px-2`}
                    >
                      <div>
                        <a
                          href='https://github.com/webdesignbytom'
                          target='_blank'
                          rel='noreferrer'
                          className={`hover:text-active-text`}
                        >
                          <BsGithub size={25} />
                        </a>
                      </div>
                      <div>
                        <a
                          href='https://twitter.com/webdesignsbytom'
                          target='_blank'
                          rel='noreferrer'
                          className={`hover:text-active-text`}
                        >
                          <BsTwitter size={25} />
                        </a>
                      </div>
                      <div>
                        <a
                          href='https://www.linkedin.com/in/tom-brockington-b011b8230/'
                          target='_blank'
                          rel='noreferrer'
                          className={`hover:text-active-text`}
                        >
                          <BsLinkedin size={25} />
                        </a>
                      </div>
                      <div>
                        <a
                          href='https://www.instagram.com/webdesignsbytom/'
                          target='_blank'
                          rel='noreferrer'
                          className={`hover:text-active-text`}
                        >
                          <BsInstagram size={25} />
                        </a>
                      </div>
                    </div>
                  </section>
                </section>
              </section>

              {/* TIME */}
              <article className='grid w-full px-2 justify-center items-center text-center'>
                <section className='w-full flex items-center justify-center'>
                  <div
                    className={`outline outline-4 outline-${currentTextColour} bg-transparent-white w-fit p-2 rounded`}
                  >
                    <time
                      id='time'
                      className='text-4xl md:text-6xl my-2 font-bold'
                    ></time>
                  </div>
                </section>
                <h1 className='text-base md:text-2xl my-2 font-semibold'>
                  <span id='greeting'></span>
                  <span id='name' contenteditable='true'></span>
                </h1>

                {/* BUTTONS */}
                <div className='grid py-2 font-poppins w-full md:flex my-2 gap-2 justify-center'>
                  <Link className='' to='/store'>
                    <button
                      onMouseEnter={blurEffectStart}
                      onMouseLeave={blurEffectEnd}
                      className={`${buttonOneStyle}`}
                    >
                      Build Website
                    </button>
                  </Link>
                  <Link to='/portfolio'>
                    <button
                      onMouseEnter={blurEffectStart}
                      onMouseLeave={blurEffectEnd}
                      className={`${buttonTwoStyle}`}
                    >
                      View Portfolio
                    </button>
                  </Link>
                </div>
                <section className='font-semibold px-4 py-2 my-2 w-full bg-transparent-white lg:bg-transparent text-sm md:text-base leading-5'>
                  <p className='leading-4'>
                    Available to build high quality web products.
                  </p>
                  <p className='leading-4'>
                    My website boasts{' '}
                    <Link
                      to='/design'
                      className='text-hyperlink-blue leading-4'
                    >
                      design tools
                    </Link>{' '}
                    and programming skills to create the perfect website to suit
                    your needs.
                  </p>
                </section>
              </article>
            </section>
          </div>
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
            <article className='text-xs mb-16 md:text-sm grid text-center justify-center font-outfit font-semibold'>
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

export default TimeOfDay;
