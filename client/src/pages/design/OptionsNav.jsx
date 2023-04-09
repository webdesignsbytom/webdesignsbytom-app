import React, { useState } from 'react';
// Icons
import BinIcon from '../../assets/svg/bin.svg';

function OptionsNav({ setDisplayElement, savedDesigns, deleteSavedDesign }) {
  const [activeNav, setActiveNav] = useState('nav');

  const setDisplay = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    setDisplayElement(id);
  };

  const setNewOpenDesign = (design) => {
    console.log('xx');
  };

  return (
    <>
      <div className='bg-colour-pale dark:bg-gray-400 grid lg:min-w-[200px] lg:h-[calc(100vh-64px)] lg:fixed lg:left-0 lg:border-r-2 lg:border-solid lg:border-black'>
        <div className='m-2 grid lg:grid-rows-special'>
          <div className='hidden md:grid no__highlights text-main-text text-center m-2'>
            <h2>Design Options</h2>
          </div>
          <nav>
            <ul className='mb-2 no__highlights mt-2'>
              <section className='grid gap-2 grid-cols-3 lg:grid-cols-none'>
                {/* Nav */}
                <li
                  className={
                    activeNav === 'nav'
                      ? 'selected__option__link'
                      : 'account__link'
                  }
                  id='nav'
                  onClick={setDisplay}
                >
                  <button className='lg:pl-2' id='nav'>
                    Nav/Footer
                  </button>
                </li>
                {/* Colour theme */}
                <li
                  className={
                    activeNav === 'palette'
                      ? 'selected__option__link'
                      : 'account__link'
                  }
                  id='palette'
                  onClick={setDisplay}
                >
                  <button className='lg:pl-2' id='palette'>
                    Colour Theme
                  </button>
                </li>
                {/* Pages */}
                <li
                  className={
                    activeNav === 'pages'
                      ? 'selected__option__link'
                      : 'account__link'
                  }
                  id='pages'
                  onClick={setDisplay}
                >
                  <button className='lg:pl-2' id='pages'>
                    Pages
                  </button>
                </li>
                {/* Components */}
                <li
                  className={
                    activeNav === 'components'
                      ? 'selected__option__link'
                      : 'account__link'
                  }
                  id='components'
                  onClick={setDisplay}
                >
                  <button className='lg:pl-2' id='components'>
                    Components
                  </button>
                </li>
                {/* Buttons */}
                <li
                  className={
                    activeNav === 'buttons'
                      ? 'selected__option__link'
                      : 'account__link'
                  }
                  id='buttons'
                  onClick={setDisplay}
                >
                  <button className='lg:pl-2' id='buttons'>
                    Buttons
                  </button>
                </li>
                {/* Stories */}
                <li
                  className={
                    activeNav === 'user-stories'
                      ? 'selected__option__link'
                      : 'account__link'
                  }
                  id='user-stories'
                  onClick={setDisplay}
                >
                  <button className='lg:pl-2' id='user-stories'>
                    User Stories
                  </button>
                </li>
              </section>

              {/* Saves on phone */}
              <section className='mt-2 lg:hidden'>
                <li
                  className={
                    activeNav === 'saves'
                      ? 'selected__option__link'
                      : 'account__link'
                  }
                  id='saves'
                  onClick={setDisplay}
                >
                  <button id='saves' className='lg:pl-2 no__highlights'>
                    Saved Designs
                  </button>
                </li>
              </section>
            </ul>
          </nav>

          <section className='border-2 border-solid border-black rounded hidden lg:grid'>
            <div className='text-main-text text-center m-2 no__highlights'>
              <h2>Saves</h2>
            </div>
            <ul className='p-1'>
              {savedDesigns.length > 0 &&
                savedDesigns.map((design, index) => {
                  console.log('design: ', design);
                  return (
                    <li
                      key={index}
                      onClick={() => setNewOpenDesign(design)}
                      className='text-black no__highlights flex justify-between cursor-pointer hover:text-gray-400'
                    >
                      <article>
                        <h5>{design.name}</h5>
                      </article>
                      <div className='flex'>
                        <img
                          src={BinIcon}
                          onClick={() => deleteSavedDesign(design)}
                          className='w-5 h-5 cursor-pointer transition duration-200 ease-in-out select-none no__highlights focus:scale-125 hover:scale-125 active:scale-125'
                          alt='delete button'
                        />
                      </div>
                    </li>
                  );
                })}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default OptionsNav;
