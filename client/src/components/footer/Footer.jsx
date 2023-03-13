import React from 'react';

function Footer() {
  const today = new Date();
  return (
    <footer className='bg-nav-colour w-full text-sm p-1'>
      <section className='mx-4'>
        <h3>Contact Us:</h3>
        <div className='flex justify-between '>
          <p>Phone: 075</p>
          <p>Email: tom@webdesignsbytom.com</p>
        </div>
      </section>
      <p className='text-center'>Copyright <span className='font-bold'>&copy;</span> {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
