import React, { useState } from 'react';
// Pages
import PlanetHero from '../../pages/heros/PlanetHero';

function IndexPage() {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <>
      <PlanetHero />
    </>
  );
}

export default IndexPage;
