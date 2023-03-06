import React from 'react';

function OptionsNav({ displayElement, setDisplayElement }) {
  const setDisplay = (event) => {
    const { id } = event.target;
    setDisplayElement(id);
  };
  return (
    <>
      <div className='bg-yellow-100 grid lg:min-w-[200px] lg:h-[calc(100vh-64px)]'>
        <div className='m-2'>
          <div className='text-alt-text'>
            <h2>OptionsNav</h2>
          </div>
          <nav>
            <ul>
              <li className='menu__link'>
                <button id='palette' onClick={setDisplay}>
                  Color
                </button>
              </li>
              <li className='menu__link'>
                <button id='nav' onClick={setDisplay}>
                  Nav
                </button>
              </li>
              <li className='menu__link'>
                <button id='pages' onClick={setDisplay}>
                  Pages
                </button>
              </li>
              <li className='menu__link'>
                <button id='components' onClick={setDisplay}>
                  Components
                </button>
              </li>
              <li className='menu__link'>
                <button id='footer' onClick={setDisplay}>
                  Footer
                </button>
              </li>
            </ul>
          </nav>

          <section>Saves</section>
        </div>
      </div>
    </>
  );
}

export default OptionsNav;
