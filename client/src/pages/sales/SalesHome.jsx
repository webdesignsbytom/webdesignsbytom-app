import React, { useContext } from 'react';
import AboutSection from '../../components/about/AboutSection';
// Components
import Footer from '../../components/footer/Footer';
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
          <AboutSection />
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
