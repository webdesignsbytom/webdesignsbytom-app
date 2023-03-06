import React, { useState } from 'react';
// Components
import ColorPalette from '../../components/palette/ColorPalette';
import NavOptions from './NavOptions';

function DesignElement({ displayElement }) {
    const [fileSaveName, setFileSaveName] = useState('untitled');
  return (
    <>
      <main className='bg-green-200'>
        <div className=''>
          <section className='bg-blue-200 p-2 flex justify-between gap-4'>
            <div>
              <input className='max-w-[100px] lg:max-w-[200px] px-1' type='text' name='fileName' id='fileName' placeholder={fileSaveName} />
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
          <section className='bg-red-200 overflow-x-hidden grid grid-rows-one min-h-[calc(100vh-104px)] p-2'>
            {displayElement === 'nav' && <NavOptions />}
            {displayElement === 'palette' && <ColorPalette />}
          </section>
        </div>
      </main>
    </>
  );
}

export default DesignElement;
