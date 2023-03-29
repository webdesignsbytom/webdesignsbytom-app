import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

function TimeOfDay({ increasePageNumber, decreasePageNumber }) {
  const [buttonOneStyle, setButtonOneStyle] = useState('day__button__one');
  const [buttonTwoStyle, setButtonTwoStyle] = useState('day__button__two');
  const [blurSetting, setBlurSetting] = useState('blur-none');

  useEffect(() => {
    const container = document.getElementById('time__container');
    console.log('container', container);
    // DOM Elements
    const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name');
    // Options
    const showAmPm = true;

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
        container.style.backgroundImage =
          "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/morning-bg.jpg?raw=true')";
        greeting.textContent = 'Good Morning, ';
        setButtonOneStyle('day__button__one');
        setButtonTwoStyle('day__button__two');
      } else if (hour < 18) {
        // Afternoon
        container.style.backgroundImage =
          "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/afternoon-bg.jpg?raw=true')";
        greeting.textContent = 'Good Afternoon, ';
        setButtonOneStyle('afternoon__button__one');
        setButtonTwoStyle('afternoon__button__two');
      } else {
        // Evening
        container.style.backgroundImage =
          "url('https://github.com/webdesignbytom/webdesignsbytom-app/blob/main/client/src/assets/img/night-bg.jpg?raw=true')";
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

  return (
    <div className='grid h-[100vh] w-full'>
      <div
        id='time__container'
        style={{
          backgroundImage: 'url("https://i.ibb.co/3mThcXc/afternoon.jpg")',
        }}
        className='grid relative object-contain bg-cover'
      >
        <section
          className={`grid items-center justify-center w-full ${blurSetting} transition duration-500 ease-in`}
        >
          <section className='absolute px-2 pt-2 md:px-4 md:pt-4 top-0 left-0 w-full flex justify-between'>
            <article>
              <h1 className='font-bold uppercase text-lg md:text-3xl md:text-center'>
                Web Designs By Tom
              </h1>
              <h2 className='text-left text-sm md:text-xl font-semibold'>
                Professional{' '}
                <span className='font-extrabold italic text-white'>modern</span>{' '}
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
          <article className='grid p-1 text-center'>
            <time id='time' className='text-4xl md:text-6xl my-2 font-bold'></time>
            <h1 className='text-2xl'>
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
                  Hire Private
                </button>
              </Link>
              <Link to='/portfolio'>
                <button
                  onMouseEnter={blurEffectStart}
                  onMouseLeave={blurEffectEnd}
                  className={`${buttonTwoStyle}`}
                >
                  Hire Dev
                </button>
              </Link>
            </div>
            <section className='font-semibold px-2 text-sm md:text-base'>
              <p>Available to build high quality web products.</p>
              <p>
                My website boasts{' '}
                <Link to='/design' className='text-hyperlink-blue'>
                  design tools
                </Link>{' '}
                and programming skills to create the perfect website to suit
                your needs.
              </p>
            </section>
          </article>

          <section className='absolute flex bottom-0 w-full justify-center'>
            <section className='grid justify-center'>
              <article className='text-sm sm:text-base grid text-center justify-center font-outfit font-semibold leading-5'>
                <p>This is one of many landing pages i have designed.</p>
                <p>Use the controls below to move through the options.</p>
              </article>
              <section className='flex items-center justify-center gap-8 py-4'>
                <section
                  onClick={decreasePageNumber}
                  className='bg-transparent-black rounded-full p-1 lg:p-[2px] cursor-pointer text-white hover:animate-pulse'
                >
                  <HiArrowSmLeft className='' size={50} />
                </section>
                <section
                  onClick={increasePageNumber}
                  className='bg-transparent-black rounded-full p-1 lg:p-[2px] cursor-pointer text-white hover:animate-pulse'
                >
                  <HiArrowSmRight className='' size={50} />
                </section>
              </section>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}

export default TimeOfDay;
