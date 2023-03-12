import React from 'react';

function OptionsNav({ displayElement, setDisplayElement, savedDesigns }) {
  const setDisplay = (event) => {
    const { id } = event.target;
    setDisplayElement(id);
  };

  return (
    <>
      <div className='bg-colour-pale grid lg:min-w-[200px] lg:h-[calc(100vh-64px)] lg:fixed lg:left-0 lg:border-r-2 lg:border-solid lg:border-black'>
        <div className='m-2 grid lg:grid-rows-special'>
          <div className='hidden md:grid text-main-text text-center m-2'>
            <h2>Design Options</h2>
          </div>
          <nav>
            <ul className='mb-2 mt-2'>
              <section className='grid gap-2 grid-cols-3 lg:grid-cols-none'>
                <li className='options__link' id='nav' onClick={setDisplay}>
                  <button className='pl-2'>Navigation</button>
                </li>
                <li className='options__link' id='palette' onClick={setDisplay}>
                  <button className='pl-2'>Colour Theme</button>
                </li>
                <li className='options__link' id='pages' onClick={setDisplay}>
                  <button className='pl-2'>Pages</button>
                </li>
                <li
                  className='options__link'
                  id='components'
                  onClick={setDisplay}
                >
                  <button className='pl-2'>Components</button>
                </li>
                <li className='options__link' id='footers' onClick={setDisplay}>
                  <button className='pl-2'>Footers</button>
                </li>
                <li
                  className='options__link'
                  id='user-stories'
                  onClick={setDisplay}
                >
                  <button className='pl-2'>User Stories</button>
                </li>
              </section>

              {/* Saves on phone */}
              <section className='mt-2'>
                <li
                  className='options__link lg:hidden'
                  id='saves'
                  onClick={setDisplay}
                >
                  <button className='pl-2'>Saved Designs</button>
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
                    <div className='text-black'>{design.name}</div>
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
