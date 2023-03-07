import React from 'react';

function OptionsNav({ displayElement, setDisplayElement, savedDesigns }) {
  
  const setDisplay = (event) => {
    const { id } = event.target;
    console.log('ID', id);
    setDisplayElement(id);
  };

  return (
    <>
      <div className='bg-colour-pale grid lg:min-w-[200px] lg:h-[calc(100vh-64px)] lg:fixed lg:left-0 lg:border-r-2 lg:border-solid lg:border-black'>
        <div className='m-2 grid lg:grid-rows-special'>
          <div className='text-main-text text-center m-2'>
            <h2>Design Options</h2>
          </div>
          <nav>
            <ul className='grid gap-2 grid-cols-3 lg:grid-cols-none mb-4 mt-2'>
              <li className='options__link' id='nav' onClick={setDisplay}>
                <button id='nav' onClick={setDisplay}>
                  Nav
                </button>
              </li>
              <li className='options__link' id='palette' onClick={setDisplay}>
                <button id='palette' onClick={setDisplay}>
                  Color
                </button>
              </li>
              <li className='options__link' id='pages' onClick={setDisplay}>
                <button>Pages</button>
              </li>
              <li
                className='options__link'
                id='components'
                onClick={setDisplay}
              >
                <button id='components' onClick={setDisplay}>
                  Components
                </button>
              </li>
              <li className='options__link' id='footers' onClick={setDisplay}>
                <button id='footers' onClick={setDisplay}>
                  Footer
                </button>
              </li>
              <li
                className='options__link lg:hidden'
                id='saves'
                onClick={setDisplay}
              >
                <button id='saves' onClick={setDisplay}>
                  Saves
                </button>
              </li>
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
