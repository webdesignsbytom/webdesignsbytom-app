import React, { useState } from 'react';
import { statusResults } from '../../users/utils/utils';
// Items
import LoadingSpinner from '../utils/LoadingSpinner';
import { SubmitButton } from '../utils/SubmitButtons';

function DesignsOverview({ userDesigns, designResponse }) {
  const [updateAnimation, setUpdateAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  const [updateResponseMessage, setUpdateResponseMessage] =
    useState(statusResults);

  const startNewDesign = () => {
    console.log('design');
  };
  return (
    <section>
      <div className='mb-2'>
        <h2>Designs Overview</h2>
      </div>
      <section className='mb-2'>
        <SubmitButton
          loadingAnimation={updateAnimation}
          mainButtonContent={mainButtonContent}
          responseMessage={updateResponseMessage}
          buttonMessage='Start New Design'
          spinnerHeight='h-5'
          spinnerWidth='w-5'
          action={startNewDesign}
        />
      </section>

      {designResponse.status === false && (
        <div className='grid grid-rows-1'>
          <LoadingSpinner height={'h-5 lg:h-12'} width={'w-5 lg:w-12'} />
        </div>
      )}

      {designResponse.status === true && userDesigns.length === 0 && (
        <article>Nothing to display - No Saved Designs</article>
      )}

      {designResponse.status === true && userDesigns.length > 0 && (
        <ul className='w-full'>
          {userDesigns.map((design, index) => {
            return <li key={index}>{design.name}</li>;
          })}
        </ul>
      )}
    </section>
  );
}

export default DesignsOverview;
