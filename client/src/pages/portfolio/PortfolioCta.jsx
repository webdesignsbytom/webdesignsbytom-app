import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioCta() {

  return (
    <section className='mx-4 mb-10 lg:mx-auto lg:my-10'>
      <h4 className='text-center my-2 font-semibold text-xl dark:text-gray-100'>Any Questions?</h4>
      <div className='flex justify-center my-2'>
        <Link
          to='/contact'
          className='w-full max-w-[250px] relative inline-flex items-center justify-center px-2 h-fit py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
        >
          <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-yellow-500 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
          <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
          <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-yellow-500 rounded-md opacity-0 group-hover:opacity-100 '></span>
          <span className='relative text-yellow-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
            Contact Me
          </span>
        </Link>
      </div>
    </section>
  );
}

export default PortfolioCta;
