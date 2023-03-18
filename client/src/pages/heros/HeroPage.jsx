import React from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
function HeroPage() {
  return (
    <div className='bg-white lg:h-screen dark:bg-black lg:max-h-screen lg:overflow-hidden'>
      <Navbar />
      {/* Main */}
      <section className='grid h-[calc(100vh-170px)] lg:h-full lg:pb-10 items-center justify-center'>
        <div className='w-full min-w-[300px] grid gap-2'>
          <div className='text-2xl text-center'>
            <h1>Web Design By Tom</h1>
          </div>
          <Link to='/developer'>
            <button className='submit__button'>Hire Private</button>
          </Link>
          <Link to='/portfolio'>
            <button className='alt__submit__button'>Hire Dev</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HeroPage;
