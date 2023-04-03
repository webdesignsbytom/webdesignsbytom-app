import React, { useContext, useEffect, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Components
import ColourPalette from '../../components/palette/ColourPalette';
import NavOptions from '../../components/options/navOptions/NavOptions';
import PageOptions from '../../components/options/pageOptions/PageOptions';
import CompenentOptions from '../../components/options/componentOptions/CompenentOptions';
import Buttons from '../../components/options/Buttons';
import SavedDesigns from './SavedDesigns';
import UserStories from './UserStories';
import RegisterForm from '../../users/register/RegisterForm';
import client from '../../utils/axios/client';
// Icons
import QuestionMark from '../../assets/svg/questionMark.svg';
// Utils
import { designTemplate, paletteTemplate } from '../../utils/utils';
// React icons
import { BsFolderPlus } from 'react-icons/bs';
import { VscSaveAs } from 'react-icons/vsc';
import { BsFolderMinus } from 'react-icons/bs';

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
  const [colourPaletteObject, setColourPaletteObject] =
    useState(paletteTemplate);
  // Nav Options
  const [navigationStyleOptions, setNavigationStyleOptions] = useState({
    position: false,
    positionType: '',
    menuOptions: [],
  });
  const [savedPages, setSavedPages] = useState([]);
  const [savedComponents, setSavedComponents] = useState([]);

  console.log('fileSaveName', fileSaveName);
  console.log('userStoriesArray', userStoriesArr);
  console.log('colourPaletteObject', colourPaletteObject);
  console.log('navigationStyleOptions', navigationStyleOptions);

  useEffect(() => {
    if (openDesign) {
      setUserStoriesArr(openDesign.userStories);
    }
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
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
          <section className='bg-colour-pale dark:bg-gray-400 p-2 flex justify-between gap-4 border-t-2 border-b-2 border-solid border-black lg:border-b-2 lg:border-t-0 lg:border-solid lg:border-black'>
            <div className='flex ml-1'>
              <input
                className='max-w-[150px] md:max-w-[200px] lg:max-w-[250px] px-1 font-normal text-placeholder-text bg-white dark:bg-black bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-placeholder-text focus:bg-white focus:border-main-colour focus:outline-none'
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
                <div className='hidden absolute z-50 group-hover:grid border-2 border-black border-solid rounded bg-colour-pale p-1 text-sm align-middle max-w-[150px] cursor-pointer'>
                  Enter a name to save your design with
                </div>
              </div>
            </div>

            {/* File Options */}
            <nav className='flex md:mr-2'>
              <ul className='flex gap-4 justify-center align-middle'>
                <li onClick={createNewDesign} className='menu__link'>
                  <div className='grid w-full items-center justify-center'>
                    <BsFolderPlus className='mr-1 mt-1' />
                  </div>
                  <p>New</p>
                </li>
                <li onClick={saveUpdateDesign} className='menu__link'>
                  <div className='grid w-full items-center justify-center'>
                    <VscSaveAs className='mr-1 mt-1' />
                  </div>
                  <p>Save</p>
                </li>
                <li className='menu__link'>
                  <div className='grid w-full items-center justify-center'>
                    <BsFolderMinus className='mr-1 mt-1' />
                  </div>
                  <p>Delete</p>
                </li>
              </ul>
            </nav>
          </section>
          <section className='grid dark:bg-gray-300 grid-rows-one min-h-[calc(100vh-104px)] max-h-[calc(100vh-104px)] p-2'>
            <div className='grid grid-rows-one dark:bg-black h-auto border-2 border-solid border-black rounded overflow-y-scroll'>
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
                  navigationStyleOptions={navigationStyleOptions}
                  setNavigationStyleOptions={setNavigationStyleOptions}
                />
              )}
              {displayElement === 'palette' && (
                <ColourPalette
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                  colourPaletteObject={colourPaletteObject}
                  setColourPaletteObject={setColourPaletteObject}
                />
              )}
              {displayElement === 'pages' && (
                <PageOptions
                  savedPages={savedPages}
                  setSavedPages={setSavedPages}
                  openDesign={openDesign}
                  setOpenDesign={setOpenDesign}
                />
              )}
              {displayElement === 'components' && (
                <CompenentOptions
                  savedComponents={savedComponents}
                  setSavedComponents={setSavedComponents}
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
