import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import About from './About';
import Experience from './Experience';
import Header from './Header';
import PortfolioDisplay from './PortfolioDisplay';
import Services from './Services';
import Footer from '../../components/footer/Footer'

function PortfolioHome() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <PortfolioDisplay />
      <Experience />
      <Services />
      <Footer />
    </div>
  );
}

export default PortfolioHome;
