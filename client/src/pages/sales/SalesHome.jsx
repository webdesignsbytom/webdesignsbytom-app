import React, { useContext } from 'react';
// Components
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/hero/HeroSection';
import Navbar from '../../components/nav/Navbar';
import PriceTable from '../../components/pricing/PriceTable';
import ReviewsContainer from '../../components/reviews/ReviewsContainer';
import { ToggleContext } from '../../context/ToggleContext';

function SalesHome() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <div className='w-full'>
      <Navbar />
      {!toggleNavigation && (
        <>
          <HeroSection />
          <ReviewsContainer />
          <PriceTable />
          <Footer />
        </>
      )}
    </div>
  );
}

export default SalesHome;
