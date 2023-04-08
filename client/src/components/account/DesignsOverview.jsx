import React from 'react';
import { useNavigate } from 'react-router-dom';

function DesignsOverview({ userDesigns }) {
  let navigate = useNavigate();

  const startNewDesign = () => {
    navigate('/design', { replace: true });
  };

  return (
    <section>
      <div className='mb-2 dark:text-gray-100'>
        <h2>Current Website Designs</h2>
      </div>
      <section className='mb-2'>
        <button
          onClick={startNewDesign}
          type='submit'
          className='submit__button'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
        >New Design</button>
      </section>

      {userDesigns.length === 0 && (
        <article className='dark:text-gray-100'>Nothing to display - No Saved Designs</article>
      )}

      {userDesigns.length > 0 && (
        <ul className='w-full dark:text-gray-100'>
          {userDesigns.map((design, index) => {
            return <li key={index}>{design.name}</li>;
          })}
        </ul>
      )}
    </section>
  );
}

export default DesignsOverview;
