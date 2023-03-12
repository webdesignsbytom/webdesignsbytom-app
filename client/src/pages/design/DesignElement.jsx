import React, { useState } from 'react';
// Components
import ColorPalette from '../../components/palette/ColorPalette';
import NavOptions from './NavOptions';
// Icons
import QMark from '../../img/questionMark.svg';
import FloppyDisk from '../../img/floppyDisk.svg';
import Bin from '../../img/bin.svg';
import Undo from '../../img/undo.svg';
import NewFile from '../../img/newFile.svg';
// Components
import PageOptions from '../../components/options/pageOptions/PageOptions';
import CompenentOptions from '../../components/options/componentOptions/CompenentOptions';
import FooterOptions from '../../components/options/footerOptions/FooterOptions';
import SavedDesigns from './SavedDesigns';
import UserStories from './UserStories';
import client from '../../utils/client';

function DesignElement({
  displayElement,
  savedDesigns,
  openDesign,
  setOpenDesign,
}) {
  const [fileSaveName, setFileSaveName] = useState('untitled');

  const handleChange = (event) => {
    const { value } = event.target;
    console.log('change', value);
    setFileSaveName(value);
  };

  const saveDesign = (event) => {
    event.preventDefault();
    console.log('SAVING', openDesign);

    client
      .put(`/designs/user/${openDesign.id}`, openDesign)
      .then((res) => {
        console.log('res', res.data);
      })
      .catch((err) => console.error('Unable to get designs', err.response));
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
                placeholder={openDesign.name}
                onChange={handleChange}
              />
              <div className='group flex align-middle h-full pl-1'>
                <img
                  src={QMark}
                  className='w-6 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                  alt='information'
                  data-te-animation-init
                />
                <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-med p-1 text-sm align-middle max-w-[150px]'>
                  Enter a name to save your design with
                </div>
              </div>
            </div>
            <nav className='flex'>
              <ul className='flex gap-4 justify-center align-middle'>
                <li className='menu__link flex align-middle group'>
                  <div className='grid w-full justify-center'>
                    <img
                      src={NewFile}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='new design'
                    />
                  </div>
                  <p>New</p>
                </li>
                <li
                  onClick={saveDesign}
                  className='menu__link flex align-middle group'
                >
                  <div className='grid w-full justify-center'>
                    <img
                      src={FloppyDisk}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='save design'
                    />
                  </div>
                  <p>Save</p>
                </li>
                <li className='menu__link flex align-middle group'>
                  <div className='grid w-full justify-center'>
                    <img
                      src={Undo}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='undo last change'
                    />
                  </div>
                  <p>Undo</p>
                </li>
                <li className='menu__link flex align-middle group'>
                  <div className='grid w-full justify-center'>
                    <img
                      src={Bin}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='delete design'
                    />
                  </div>
                  <p>Delete</p>
                </li>
              </ul>
            </nav>
          </section>
          <section className='overflow-x-hidden grid grid-rows-one min-h-[calc(100vh-104px)] p-2'>
            <div className='border-2 border-solid border-black rounded'>
              {displayElement === 'nav' && (
                <NavOptions
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'palette' && (
                <ColorPalette
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'pages' && (
                <PageOptions
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'components' && (
                <CompenentOptions
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'user-stories' && (
                <UserStories
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'footers' && (
                <FooterOptions
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'saves' && (
                <SavedDesigns
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                  savedDesigns={savedDesigns}
                />
              )}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default DesignElement;
