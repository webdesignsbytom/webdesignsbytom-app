import React from 'react';
import ColorPalette from '../../components/palette/ColorPalette';
import NavOptions from './NavOptions';
function DesignElement({ displayElement }) {
  return (
    <>
      <main className='bg-green-200 grid'>
        <div className='m-2'>
          {displayElement === 'nav' && <NavOptions />}
          {displayElement === 'palette' && <ColorPalette />}
        </div>
      </main>
    </>
  );
}

export default DesignElement;
