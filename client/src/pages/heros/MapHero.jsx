import React, { useState } from 'react';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';

function MapHero({ increasePageNumber, decreasePageNumber }) {
  const [settingSelect, setSettingSelect] = useState('Dark Mode');
  const [currentBg, setCurrentBg] = useState('white')

  const swapColourMode = (event) => {
    if (currentBg === 'white') {
        setCurrentBg('black')
        return
    }
    if (currentBg === 'black') {
        setCurrentBg('white')
        return
    }
  }

  return (
    <div className={`relative h-screen max-h-screen bg-${currentBg} bg-maps-bg bg-contain`}>
      {' '}
      <section className='absolute top-2 left-2'>
        <h3>Switch Colour Mode</h3>
        <button onClick={swapColourMode} className={'bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full '}>
          {settingSelect}
        </button>
      </section>
      <main>
        <section className='grid justify-center'>
          <article className='text-xs md:text-sm grid text-center justify-center font-outfit font-semibold'>
            <p>This is one of many landing pages i have designed.</p>
            <p>Use the controls below to move through the options.</p>
          </article>
          <section className='flex items-center justify-center gap-8 py-1'>
            <section
              onClick={decreasePageNumber}
              className='rounded-full p-1 lg:p-[2px] cursor-pointer text-black'
            >
              <HiArrowSmLeft className='' size={50} />
            </section>
            <section
              onClick={increasePageNumber}
              className='rounded-full p-1 lg:p-[2px] cursor-pointer text-black'
            >
              <HiArrowSmRight className='' size={50} />
            </section>
          </section>
        </section>
      </main>
    </div>
  );
}

export default MapHero;
