import React from 'react';

function SavedDesigns({ savedDesigns }) {
  return (
    <>
      <section className='border-2 border-solid border-black rounded lg:grid'>
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
    </>
  );
}

export default SavedDesigns;
