import React, { useState } from 'react';
// Pages
import PlanetHero from '../../pages/heros/PlanetHero';
import TimeOfDay from '../../pages/heros/TimeOfDay';
import NewsletterHero from './NewsletterHero';

function IndexPage() {
  const [pageNumber, setPageNumber] = useState(1);

  console.log('PAGE: ' + pageNumber)

  const increasePageNumber = () => {
    setPageNumber(prev => prev + 1)
  }

  const decreasePageNumber = () => {
    setPageNumber(prev => prev - 1)
  }

  return (
    <>
      {(pageNumber === 3) && <NewsletterHero increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} />}
      {(pageNumber === 2) && <PlanetHero increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} />}
      {(pageNumber === 1) && <TimeOfDay increasePageNumber={increasePageNumber} decreasePageNumber={decreasePageNumber} />}
    </>
  );
}

export default IndexPage;
