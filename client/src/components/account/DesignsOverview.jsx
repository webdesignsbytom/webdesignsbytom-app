import React  from 'react';
// Spinner
import LoadingSpinner from '../utils/LoadingSpinner';

function DesignsOverview({ userDesigns, designResponse }) {

  return (
    <div>
      <h2>DesignsOverview</h2>

      {designResponse.status === false && (
        <div className='grid grid-rows-1'>
          <LoadingSpinner height={'h-5 lg:h-12'} width={'w-5 lg:w-12'} />
        </div>
      )}

      {(designResponse.status === true &&
        userDesigns.length === 0) && <article>Nothing to display - No Saved Designs</article>}

      {(designResponse.status === true &&
        userDesigns.length > 0) && (
            <ul className='w-full'>
              {userDesigns.map((design, index) => {
                return <li key={index}>{design.name}</li>;
              })}
            </ul>
          )}
    </div>
  );
}

export default DesignsOverview;
