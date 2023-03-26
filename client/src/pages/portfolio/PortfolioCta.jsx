import React from 'react';

function PortfolioCta() {
  return (
    <section className='mx-4 lg:mx-auto lg:my-10'>
      <h4 className='text-center my-2 font-semibold text-xl'>Any Questions?</h4>
      <div className='flex justify-center'>
        <button className='bg-white outline outline-2 outline-main-colour grid justify-center py-2 text-main-colour font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full lg:w-[300px]'>
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default PortfolioCta;
