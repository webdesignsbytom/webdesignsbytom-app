import React, { useContext } from 'react';
// Components
import Footer from '../../components/footer/Footer';
import HeroSection from '../../components/hero/HeroSection';
import Navbar from '../../components/nav/Navbar';
import PurchaseOptions from '../../components/options/purchaseOptions/PurchaseOptions';
import PriceTable from '../../components/pricing/PriceTable';
import ReviewsContainer from '../../components/reviews/ReviewsContainer';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function SalesHome() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <div className='w-full'>
      <Navbar />
      {!toggleNavigation && (
        <>
          <HeroSection />
          <PurchaseOptions />
          <PriceTable />
          <ReviewsContainer />
          <Footer />
        </>
      )}
    </div>
  );
}

export default SalesHome;
