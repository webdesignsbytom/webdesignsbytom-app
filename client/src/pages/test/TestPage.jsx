import React, { useEffect, useState } from 'react';

function TestPage() {
  useEffect(() => {
    const container = document.getElementById('time__container');
    console.log('container', container);
    // DOM Elements
    const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      focus = document.getElementById('focus');

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
      } else if (hour < 18) {
        // Afternoon
        container.style.backgroundImage =
          "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon, ';
      } else {
        // Evening
        container.style.backgroundImage =
          "url('https://i.ibb.co/924T2Wv/night.jpg')";
        greeting.textContent = 'Good Evening, ';
        container.style.color = 'white';
      }
    }

    // Get Name
    function getName() {
      if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
      } else {
        name.textContent = localStorage.getItem('name');
      }
    }

    // Set Name
    function setName(e) {
      if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('name', e.target.innerText);
          name.blur();
        }
      } else {
        localStorage.setItem('name', e.target.innerText);
      }
    }

    // Get Focus
    function getFocus() {
      if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
      } else {
        focus.textContent = localStorage.getItem('focus');
      }
    }

    // Set Focus
    function setFocus(e) {
      if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
          localStorage.setItem('focus', e.target.innerText);
          focus.blur();
        }
      } else {
        localStorage.setItem('focus', e.target.innerText);
      }
    }

    name.addEventListener('keypress', setName);
    name.addEventListener('blur', setName);
    focus.addEventListener('keypress', setFocus);
    focus.addEventListener('blur', setFocus);

    // Run
    showTime();
    setBgGreet();
    getName();
    getFocus();
  }, []);

  return (
    <div className='grid h-[100vh] w-full'>
      <div
        id='time__container'
        style={{
          backgroundImage: 'url("https://i.ibb.co/3mThcXc/afternoon.jpg")',
        }}
        className='grid object-contain bg-cover'
      >
        <time id='time'></time>
        <h1>
          <span id='greeting'></span>
          <span id='name' contenteditable='true'></span>
        </h1>

        <h2>What Is Your Focus For Today?</h2>
        <h2 id='focus' contenteditable='true'></h2>
      </div>
    </div>
  );
}

export default TestPage;
