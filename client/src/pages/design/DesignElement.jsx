import React, { useState } from 'react';
// Components
import ColorPalette from '../../components/palette/ColorPalette';
import NavOptions from './NavOptions';
// Icons
import QMark from '../../img/questionMark.svg';
import FloppyDisk from '../../img/floppyDisk.svg'
import Bin from '../../img/bin.svg';
import Undo from '../../img/undo.svg'
import PageOptions from '../../components/pageOptions/PageOptions';
import CompenentOptions from '../../components/componentOptions/CompenentOptions';
import FooterOptions from '../../components/footerOptions/FooterOptions';

function DesignElement({ displayElement }) {
  const [fileSaveName, setFileSaveName] = useState('untitled');

  //TODO: user effect change of file name and update design name

  const handleChange = (event) => {
    const { value } = event.target;
    console.log('change', value);
    setFileSaveName(value);
  };

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
                onChange={handleChange}
              />
              <div className='group pl-1'>
                <img
                  src={QMark}
                  className='w-6 cursor-pointer group'
                  alt='information'
                />
                <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-med p-1 text-sm align-middle'>Enter a name to save your design with</div>
              </div>
            </div>
            <nav className='flex'>
              <ul className='flex gap-4 justify-center align-middle'>
                <li className='menu__link flex align-middle'>
                  <img src={FloppyDisk}  className='w-6 pr-1' alt="save" />
                  <p>Save</p>
                </li>
                <li className='menu__link flex align-middle'>
                  <img src={Undo} className='w-6 pr-1' alt="undo" />
                  <p>Undo</p>
                </li>
                <li className='menu__link flex align-middle'>
                  <img src={Bin} className='w-6 pr-1' alt="delete" />
                  <p>Delete</p>
                </li>
              </ul>
            </nav>
          </section>
          <section className='overflow-x-hidden grid grid-rows-one min-h-[calc(100vh-104px)] p-2'>
            <div className='border-2 border-solid border-black rounded'>
              {displayElement === 'nav' && <NavOptions />}
              {displayElement === 'palette' && <ColorPalette />}
              {displayElement === 'pages' && <PageOptions />}
              {displayElement === 'components' && <CompenentOptions />}
              {displayElement === 'footers' && <FooterOptions />}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default DesignElement;
