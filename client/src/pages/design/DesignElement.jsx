import React, { useState } from 'react';
// Components
import ColorPalette from '../../components/palette/ColorPalette';
import NavOptions from './NavOptions';
// Icons
import QMark from '../../img/questionMark.svg'

function DesignElement({ displayElement }) {
  const [fileSaveName, setFileSaveName] = useState('untitled');
  console.log('DES ELM display', displayElement);
  return (
    <>
      <main className='lg:grid lg:grid-flow-col lg:w-full lg:pl-[200px]'>
        <div>
          <section className='bg-colour-pale p-2 flex justify-between gap-4 border-t-2 border-b-2 border-solid border-black lg:border-b-2 lg:border-t-0 lg:border-solid lg:border-black'>
            <div className='flex'>
              <input
                className='max-w-[100px] lg:max-w-[200px] px-1 font-normal text-placeholder-text bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none'
                type='text'
                name='fileName'
                id='fileName'
                placeholder={fileSaveName}
              />
              <img src={QMark} className='w-6 cursor-pointer' alt="information" />
            </div>
            <nav>
              <ul className='flex gap-4 justify-center'>
                <li className='menu__link'>
                  <p>Save</p>
                </li>
                <li className='menu__link'>
                  <p>Undo</p>
                </li>
                <li className='menu__link'>
                  <p>Delete</p>
                </li>
              </ul>
            </nav>
          </section>
          <section className='overflow-x-hidden grid grid-rows-one min-h-[calc(100vh-104px)] p-2'>
            <div className='border-2 border-solid border-black rounded'>
              {displayElement === 'nav' && <NavOptions />}
              {displayElement === 'palette' && <ColorPalette />}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default DesignElement;
