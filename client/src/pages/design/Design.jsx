import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import DesignElement from './DesignElement';
import OptionsNav from './OptionsNav';

function Design() {
  const [displayElement, setDisplayElement] = useState('palette');
  console.log('DESIGN', displayElement);
  return (
    <div className='min-h-screen'>
      <Navbar />
      <section className='grid grid-rows-reg lg:grid-rows-none lg:grid-cols-reg min-h-[calc(100vh-64px)]'>
        {/* Side bar */}
        <OptionsNav
          displayElement={displayElement}
          setDisplayElement={setDisplayElement}
        />
        {/* Preview section */}
        <DesignElement displayElement={displayElement} />
      </section>
    </div>
  );
}

export default Design;
