import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// Components
import HeroSwitch from './HeroSwitch';
import SocialBar from '../../components/social/SocialBar';

function TimeOfDay() {
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
            "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
          greeting.textContent = 'Good Morning, ';
          setButtonOneStyle('day__button__one');
          setButtonTwoStyle('day__button__two');
        } else if (hour < 18) {
          // Afternoon
          container.style.backgroundImage =
            "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
          greeting.textContent = 'Good Afternoon, ';
          setButtonOneStyle('afternoon__button__one');
          setButtonTwoStyle('afternoon__button__two');
        } else {
          // Evening
          container.style.backgroundImage =
            "url('https://i.ibb.co/924T2Wv/night.jpg')";
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
      setBlurSetting('backdrop-blur-md')
    }
  
    const blurEffectEnd = () => {
      setBlurSetting('blur-none')
    }
  
    return (
      <div className='grid h-[100vh] w-full'>
        <div
          id='time__container'
          style={{
            backgroundImage: 'url("https://i.ibb.co/3mThcXc/afternoon.jpg")',
          }}
          className='grid relative object-contain bg-cover'
        >
          <section className={`grid items-center justify-center w-full ${blurSetting} transition duration-500 ease-in`}>
            <section className='absolute px-6 pt-6 top-0 left-0 w-full flex justify-between'>
              <div>
                <h1 className='font-bold text-3xl text-center'>
                  Web Designs By Tom
                </h1>
                <h2 className='text-left'>
                  Professional{' '}
                  <span className='font-extrabold italic'>modern</span> web design
                </h2>
              </div>
              <section>
                <SocialBar />
              </section>
            </section>
  
            <article className='grid p-1 text-center'>
              <time id='time' className='text-6xl my-2 font-bold'></time>
              <h1 className='text-2xl'>
                <span id='greeting'></span>
                <span id='name' contenteditable='true'></span>
              </h1>
  
              <div className='grid w-full md:flex my-2 gap-2 justify-center'>
                <Link to='/store'>
                  <button onMouseEnter={blurEffectStart} onMouseLeave={blurEffectEnd} className={`${buttonOneStyle}`}>Hire Private</button>
                </Link>
                <Link to='/portfolio'>
                  <button onMouseEnter={blurEffectStart} onMouseLeave={blurEffectEnd} className={`${buttonTwoStyle}`}>Hire Dev</button>
                </Link>
              </div>
              <section className='font-semibold'>
                <p>Available to build high quality web products.</p>
                <p>
                  My website boasts design tools and modern web features to create
                  the perfect website to suit your needs.
                </p>
              </section>
            </article>
  
            <section className='absolute bottom-0 left-0 grid w-full justify-center'>
              <HeroSwitch />
            </section>
          </section>
        </div>
      </div>
    );
  }

export default TimeOfDay