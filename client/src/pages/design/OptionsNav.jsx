import React, { useState } from 'react';

function OptionsNav({ displayElement, setDisplayElement, savedDesigns }) {
  const [activeNav, setActiveNav] = useState('nav');

  const setDisplay = (event) => {
    const { id } = event.target;
    setActiveNav(id);
    setDisplayElement(id);
  };

  return (
    <>
      <div className='bg-colour-pale dark:bg-gray-400 grid lg:min-w-[200px] lg:h-[calc(100vh-64px)] lg:fixed lg:left-0 lg:border-r-2 lg:border-solid lg:border-black'>
        <div className='m-2 grid lg:grid-rows-special'>
          <div className='hidden md:grid text-main-text text-center m-2'>
            <h2>Design Options</h2>
          </div>
          <nav>
            <ul className='mb-2 mt-2'>
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
                  <button id='saves' className='lg:pl-2'>
                    Saved Designs
                  </button>
                </li>
              </section>
            </ul>
          </nav>

          <section className='border-2 border-solid border-black rounded hidden lg:grid'>
            <div className='text-main-text text-center m-2'>
              <h2>Saves</h2>
            </div>
            {savedDesigns > 0 &&
              savedDesigns.map((design, index) => {
                return (
                  <>
                    <div key={index} className='text-black'>
                      {design.name}
                    </div>
                  </>
                );
              })}
          </section>
        </div>
      </div>
    </>
  );
}

export default OptionsNav;
