import React from 'react';
// Icons
import BinIcon from '../../assets/svg/bin.svg';

function SavedDesigns({ savedDesigns }) {

  const setNewOpenDesign = (design) => {
    console.log('xx');
  };

  const deleteSavedDesign = (design) => {
    console.log('delte design');
  };

  return (
    <>
      <section className='lg:border-2 lg:border-solid lg:border-black rounded lg:grid'>
        <div className='text-main-text text-center m-2'>
          <h2>Saves</h2>
        </div>
        <section>
          <ul className='p-1'>
            {savedDesigns.length > 0 &&
              savedDesigns.map((design, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => setNewOpenDesign(design)}
                    className='text-black flex no__highlights justify-between cursor-pointer hover:text-gray-400'
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
      </section>
    </>
  );
}

export default SavedDesigns;
