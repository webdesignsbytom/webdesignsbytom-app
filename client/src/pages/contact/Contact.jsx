import React from 'react';
import Navbar from '../../components/nav/Navbar';

function Contact() {
  return (
    <>
      <div className='bg-white dark:bg-black h-screen lg:overflow-hidden'>
        <Navbar />
        {/* Main */}
        <section className='grid h-[calc(100vh-64px)] lg:grid-rows-reg'></section>
      </div>
    </>
  );
}

export default Contact;
