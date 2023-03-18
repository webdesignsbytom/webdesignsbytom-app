import React from 'react';
import SocialBar from '../social/SocialBar';

function Footer() {
  const today = new Date();
  return (
    <footer className='bg-nav-colour grip gap-2 w-full text-sm p-1 text-center mt-4 py-2'>
      <section className='mx-4 py-2'>
        <div className='flex justify-between'>
          <p>Phone: 07541576148</p>
          <p>Email: tom@webdesignsbytom.com</p>
        </div>
      </section>
      <section className='flex justify-center mb-4'>
        <SocialBar
          borders={'border-white dark:border-colour-dark'}
          icons={'text-white dark:text-colour-dark'}
        />
      </section>
      <section className='my-4'>
        <p className='text-center'>
          Copyright webdesignsbytom <span className='font-bold'>&copy;</span>{' '}
          {today.getFullYear()}
        </p>
      </section>
    </footer>
  );
}

export default Footer;
