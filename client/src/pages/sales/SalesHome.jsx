import React from 'react';
import HeroSection from '../../components/hero/HeroSection';
// Components
import Navbar from '../../components/nav/Navbar';
import PriceTable from '../../components/pricing/PriceTable';
import ReviewsContainer from '../../components/reviews/ReviewsContainer';

function SalesHome() {
  return (
    <div className='w-full'>
      <Navbar />
      <HeroSection />
      <ReviewsContainer />
      <PriceTable />
    </div>
  );
}

export default SalesHome;
