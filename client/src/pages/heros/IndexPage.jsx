import React, { useState } from 'react';
// Pages
import PlanetHero from '../../pages/heros/PlanetHero';
import TimeOfDay from '../../pages/heros/TimeOfDay';
import NewsletterHero from './NewsletterHero';

const pageList = ['NewsletterHero', 'PlanetHero', 'TimeOfDay'];

function IndexPage() {
  const [pageNumber, setPageNumber] = useState(1);

  const increasePageNumber = () => {
    if (pageNumber === pageList.length) {
      setPageNumber(1);
    } else {
      setPageNumber((prev) => prev + 1);
    }
  };

  const decreasePageNumber = () => {
    if (pageNumber === 1) {
      setPageNumber(pageList.length);
    } else {
      setPageNumber((prev) => prev - 1);
    }
  };

  return (
    <>
      {pageNumber === 3 && (
        <NewsletterHero
          increasePageNumber={increasePageNumber}
          decreasePageNumber={decreasePageNumber}
        />
      )}
      {pageNumber === 2 && (
        <PlanetHero
          increasePageNumber={increasePageNumber}
          decreasePageNumber={decreasePageNumber}
        />
      )}
      {pageNumber === 1 && (
        <TimeOfDay
          increasePageNumber={increasePageNumber}
          decreasePageNumber={decreasePageNumber}
        />
      )}
    </>
  );
}

export default IndexPage;
