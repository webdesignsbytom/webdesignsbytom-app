import React from 'react';

function SavedDesigns({ savedDesigns }) {

  const loadSave = () => {
    console.log('loading')
  }

  return (
    <>
      <section className='lg:border-2 lg:border-solid lg:border-black rounded lg:grid'>
        <div className='text-main-text text-center m-2'>
          <h2>Saves</h2>
        </div>
        <section>
          <ul>
            {savedDesigns.map((design, index) => {
              return (
                <li onClick={loadSave} key={index} className='border-b-2 border-black border-solid m-2 p-2 cursor-pointer'>
                  <div className='text-black text-center'>{design.name}</div>
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
