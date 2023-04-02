import React, { useContext } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import About from './About';
import Experience from './Experience';
import Header from './Header';
import PortfolioDisplay from './PortfolioDisplay';
import Services from './Services';
import Footer from '../../components/footer/Footer';
import { ToggleContext } from '../../context/ToggleContext';
import PortfolioCta from './PortfolioCta';
import ReviewsContainer from '../../components/reviews/ReviewsContainer';

function PortfolioHome() {
  const {
    toggleNavigation,
    toggleNotifications,
    toggleMessages,
    toggleEvents,
    toggleContacts,
  } = useContext(ToggleContext);

  return (
    <div>
      <Navbar />
      {(!toggleNavigation ||
        !toggleNotifications ||
        !toggleMessages ||
        !toggleEvents ||
        !toggleContacts) && (
        <>
          <Header />
          <About />
          <PortfolioDisplay />
          <Experience />
          <Services />
          <ReviewsContainer />
          <PortfolioCta />
          <Footer />
        </>
      )}
    </div>
  );
}

export default PortfolioHome;
