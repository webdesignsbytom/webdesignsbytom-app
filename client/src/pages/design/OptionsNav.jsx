import React from 'react';

function OptionsNav({ displayElement, setDisplayElement }) {
  console.log('OPTIONS', displayElement);

  const setDisplay = (event) => {
    const { id } = event.target;
    console.log('setDisplay', id);
    setDisplayElement(id);
  };
  return (
    <>
      <div className='bg-black grid text-alt-text lg:min-w-[200px]'>
        <div className='m-2'>
          <h2>OptionsNav</h2>
          <button id='palette' onClick={setDisplay}>
            Color
          </button>
          <button id='nav' onClick={setDisplay}>
            Nav
          </button>
          <button id='pages' onClick={setDisplay}>
            Pages
          </button>
        </div>
      </div>
    </>
  );
}

export default OptionsNav;
