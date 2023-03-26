import React, { useContext } from 'react';
import AboutSection from '../../components/about/AboutSection';
import WhyChooseUs from '../../components/about/WhyChooseUs';
// Components
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/nav/Navbar';
import PurchaseOptions from '../../components/options/purchaseOptions/PurchaseOptions';
import PriceTable from '../../components/pricing/PriceTable';
import ReviewsContainer from '../../components/reviews/ReviewsContainer';
import SalesCta from '../../components/utils/SalesCta';
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
          <WhyChooseUs />
          <PurchaseOptions />
          <PriceTable />
          <SalesCta />
          <ReviewsContainer />
          <Footer />
        </>
      )}
    </div>
  );
}

export default SalesHome;
