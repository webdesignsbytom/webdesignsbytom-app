import React from 'react';

function Footer() {
  const today = new Date();
  return (
    <footer className='bg-nav-colour grip gap-2 w-full text-sm p-1 text-center '>
      <section className='mx-4 py-2'>
        <div className='flex justify-between '>
          <p>Phone: 075</p>
          <p>Email: tom@webdesignsbytom.com</p>
        </div>
      </section>
      <p className='text-center'>Copyright webdesignsbytom <span className='font-bold'>&copy;</span> {today.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
