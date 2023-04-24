import React, { useContext } from 'react';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function TomsHero() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      {!toggleNavigation && (
        <div className='relative grid h-[100vh] w-full font-pops'></div>
      )}
    </>
  );
}

export default TomsHero;
