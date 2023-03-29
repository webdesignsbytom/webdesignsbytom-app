import React, { useState } from 'react';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';

function MapHero({ increasePageNumber, decreasePageNumber }) {
  const [settingSelect, setSettingSelect] = useState('Light Mode');
  const [currentBg, setCurrentBg] = useState('black');
  const [currentText, setCurrentText] = useState('white');

  const swapColourMode = () => {
    if (currentBg === 'white') {
      setCurrentBg('black');
      setCurrentText('white');
      setSettingSelect('Light Mode');
      return;
    }
    if (currentBg === 'black') {
      setCurrentBg('white');
      setCurrentText('black');
      setSettingSelect('Dark Mode');
      return;
    }
  };

  return (
    <div
      className={`relative h-screen max-h-screen bg-${currentBg} bg-maps-bg bg-contain`}
    >
      {/* Colour select */}
      <section
        className={`absolute top-2 left-2 text-${currentText} outline outline-2 outline-${currentText} rounded-lg p-1`}
      >
        <div className='p-1'>
          <h3 className='font-semibold'>Switch Colour Mode</h3>
        </div>
        <button
          onClick={swapColourMode}
          className={
            'bg-colour-med grid justify-center p-2 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full '
          }
        >
          {settingSelect}
        </button>
      </section>

      {/* Main */}
      <main className={`grid h-full w-full justify-center items-center text-${currentText}`}>
        <section className={`outline outline-4 outline-${currentText} rounded-xl p-4`}>
            <h2>WELCOME TO</h2>
            <h1>WEBDESIGNSBYTOM</h1>
        </section>
      </main>

      <footer className={`grid justify-center text-${currentText} absolute bottom-0 w-full`}>
        <article className='text-xs md:text-sm grid text-center justify-center font-outfit font-semibold'>
          <p>This is one of many landing pages i have designed.</p>
          <p>Use the controls below to move through the options.</p>
        </article>
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
      </footer>
    </div>
  );
}

export default MapHero;
