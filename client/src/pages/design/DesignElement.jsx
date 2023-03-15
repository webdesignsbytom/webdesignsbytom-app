import React, { useContext, useEffect, useState } from 'react';
// Components
import ColorPalette from '../../components/palette/ColorPalette';
import NavOptions from './NavOptions';
import PageOptions from '../../components/options/pageOptions/PageOptions';
import CompenentOptions from '../../components/options/componentOptions/CompenentOptions';
import Buttons from '../../components/options/Buttons';
import SavedDesigns from './SavedDesigns';
import UserStories from './UserStories';
import RegisterForm from '../../users/register/RegisterForm';
import client from '../../utils/client';
// Context
import { UserContext } from '../../context/UserContext';
// Icons
import QuestionMark from '../../img/questionMark.svg';
import FloppyDisk from '../../img/floppyDisk.svg';
import Bin from '../../img/bin.svg';
import Undo from '../../img/undo.svg';
import NewFile from '../../img/newFile.svg';
// Utils
import { designTemplate, paletteTemplate } from '../../utils/utils';

function DesignElement({
  displayElement,
  setDisplayElement,
  savedDesigns,
  openDesign,
  setOpenDesign,
}) {
  const { user } = useContext(UserContext);
  const [fileSaveName, setFileSaveName] = useState('untitled');
  // User Stories
  const [userStoriesArr, setUserStoriesArr] = useState([]);
  // Colour palette
  const [colourPalette, setColourPalette] = useState(paletteTemplate);

  useEffect(() => {
    if (openDesign) {
      setUserStoriesArr(openDesign.userStories);
    }
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    console.log('XXX change', value);
    setFileSaveName(value);
  };

  const createNewDesign = (event) => {
    event.preventDefault();
    if (user.email.length < 1) {
      return setDisplayElement('register');
    } else {
      let newDesign = designTemplate;
      newDesign.userId = user.id;

      client
        .post(`/designs/create`, newDesign)
        .then((res) => {
          console.log('NEW D res', res.data);
          // setOpenDesign(res.data.data.design);
        })
        .catch((err) => {
          console.error('Unable to create designs', err.response);
          console.error('Unable to create designs', err.response.data.message);
        });
    }
  };

  const saveUpdateDesign = () => {
    console.log('SAve', openDesign);
    if (user.email.length < 1) {
      return setDisplayElement('register');
    }

    client
      .put(`/designs/user/${openDesign.id}`, openDesign, false)
      .then((res) => {
        console.log('SAVE res', res.data);
      })
      .catch((err) => {
        console.error('Unable to save designs', err.response);
        console.error('Unable to save designs', err.response.data.message);
      });
  };

  return (
    <>
      <main className='lg:grid lg:grid-flow-col lg:w-full lg:pl-[200px]'>
        <div>
          <section className='bg-colour-pale p-2 flex justify-between gap-4 border-t-2 border-b-2 border-solid border-black lg:border-b-2 lg:border-t-0 lg:border-solid lg:border-black'>
            <div className='flex ml-1'>
              <input
                className='max-w-[150px] md:max-w-[200px] lg:max-w-[250px] px-1 font-normal text-placeholder-text bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none'
                type='text'
                name='fileName'
                id='fileName'
                placeholder={openDesign.name}
                onChange={handleChange}
              />
              <div className='group flex align-middle h-full pl-1'>
                <img
                  src={QuestionMark}
                  className='w-6 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                  alt='information'
                  data-te-animation-init
                />
                <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
                  Enter a name to save your design with
                </div>
              </div>
            </div>

            {/* File Options */}
            <nav className='flex md:mr-2'>
              <ul className='flex gap-4 justify-center align-middle'>
                <li onClick={createNewDesign} className='menu__link'>
                  <div className='grid w-full items-center justify-center'>
                    <img
                      src={NewFile}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='new design'
                    />
                  </div>
                  <p>New</p>
                </li>
                <li onClick={saveUpdateDesign} className='menu__link'>
                  <div className='grid w-full items-center justify-center'>
                    <img
                      src={FloppyDisk}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='save design'
                    />
                  </div>
                  <p>Save</p>
                </li>
                <li className='menu__link'>
                  <div className='grid w-full items-center justify-center'>
                    <img
                      src={Undo}
                      className='animation__wiggle w-5 md:w-6 lg:pr-1'
                      alt='undo last change'
                    />
                  </div>
                  <p>Undo</p>
                </li>
                <li className='menu__link'>
                  <div className='grid w-full items-center justify-center'>
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
          <section className='grid grid-rows-one min-h-[calc(100vh-104px)] lg:max-h-[calc(100vh-104px)] p-2'>
            <div className='grid grid-rows-one h-auto border-2 border-solid border-black rounded overflow-y-scroll'>
              {/* Register form */}
              {displayElement === 'register' && (
                <section>
                  <h2 className='text-center mt-2 text-2xl font-bold'>
                    To Save Your Design Please Register Now!
                  </h2>
                  <RegisterForm />
                </section>
              )}
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
                  colourPalette={colourPalette}
                  setColourPalette={setColourPalette}
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
                  userStoriesArr={userStoriesArr}
                  setUserStoriesArr={setUserStoriesArr}
                />
              )}
              {displayElement === 'buttons' && (
                <Buttons
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
