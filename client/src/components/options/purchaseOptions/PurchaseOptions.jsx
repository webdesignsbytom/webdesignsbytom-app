import React from 'react';
// Data
import {
  basicListItems,
  shopListItems,
  fullstackListItems,
} from '../../../utils/utils';
// Icons
import { BsCheck2Circle } from 'react-icons/bs';

function PurchaseOptions() {
  return (
    <section className='relative w-full h-full'>
      <div className='absolute hidden w-full bg-gray-50 lg:block h-96' />
      <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        {/* Titles */}
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block'>
              <svg
                viewBox='0 0 52 24'
                fill='currentColor'
                className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
              >
                <defs>
                  <pattern
                    id='2c67e949-4a23-49f7-bf27-ca140852cf21'
                    x='0'
                    y='0'
                    width='.135'
                    height='.30'
                  >
                    <circle cx='1' cy='1' r='.7' />
                  </pattern>
                </defs>
                <rect
                  fill='url(#2c67e949-4a23-49f7-bf27-ca140852cf21)'
                  width='52'
                  height='24'
                />
              </svg>
              <span className='relative'>Affordable</span>
            </span>{' '}
            for everyone
          </h2>
          <p className='text-base text-gray-700 md:text-lg'>
            High quality web design by Tom and his team. New business price
            breaks available across a range of web products. All sites are pure
            code giving us 100% control over every aspect.
          </p>
        </div>

        <div className='grid max-w-screen-md gap-10 md:grid-cols-3 md:max-w-none sm:mx-auto'>
          {/* First container */}
          <div>
            <div className='p-8 bg-gray-900 rounded'>
              <div className='mb-4 text-center'>
                <p className='text-xl font-medium tracking-wide text-white'>
                  Basic Website
                </p>
                <div className='flex items-center justify-center'>
                  <p className='mr-2 text-3xl font-semibold text-white lg:text-6xl'>
                    £450
                  </p>
                </div>
              </div>
              <ul className='mb-8 space-y-2'>
                {basicListItems.map((item, index) => {
                  return (
                    <li key={index} className='flex items-center'>
                      <article className='mr-3 text-white'>
                        <BsCheck2Circle size={30} />
                      </article>
                      <p className='font-medium text-gray-300'>{item.text}</p>
                    </li>
                  );
                })}
              </ul>
              <button
                type='submit'
                className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-300 hover:bg-purple-700 focus:shadow-outline focus:outline-none'
              >
                Get Now
              </button>
            </div>

            <div className='w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75' />
            <div className='w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50' />
            <div className='w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25' />
          </div>

          {/* Second container */}
          <div>
            <div className='p-8 bg-gray-900 rounded'>
              <div className='mb-4 text-center'>
                <p className='text-xl font-medium tracking-wide text-white'>
                  Online Shop
                </p>
                <div className='flex items-center justify-center'>
                  <p className='mr-2 text-5xl font-semibold text-white lg:text-6xl'>
                    £750
                  </p>
                </div>
              </div>
              <ul className='mb-8 space-y-2'>
              {shopListItems.map((item, index) => {
                  return (
                    <li key={index} className='flex items-center'>
                      <article className='mr-3 text-white'>
                        <BsCheck2Circle size={30} />
                      </article>
                      <p className='font-medium text-gray-300'>{item.text}</p>
                    </li>
                  );
                })}
              </ul>
              <button
                type='submit'
                className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md bg-yellow-400 hover:bg-yellow-700 focus:shadow-outline focus:outline-none'
              >
                Get Now
              </button>
            </div>
            <div className='w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75' />
            <div className='w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50' />
            <div className='w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25' />
          </div>

          {/* Third container */}
          <div>
            <div className='p-8 bg-gray-900 rounded'>
              <div className='mb-4 text-center'>
                <p className='text-xl font-medium tracking-wide text-white'>
                  Fullstack Project
                </p>
                <div className='flex items-center justify-center'>
                  <p className='mr-2 text-5xl font-semibold text-white lg:text-6xl'>
                    £1200
                  </p>
                </div>
              </div>
              <ul className='mb-8 space-y-2'>
              {fullstackListItems.map((item, index) => {
                  return (
                    <li key={index} className='flex items-center'>
                      <article className='mr-3 text-white'>
                        <BsCheck2Circle size={30} />
                      </article>
                      <p className='font-medium text-gray-300'>{item.text}</p>
                    </li>
                  );
                })}
              </ul>
              <button
                type='submit'
                className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md bg-green-400 hover:bg-green-700 focus:shadow-outline focus:outline-none'
              >
                Get Now
              </button>
            </div>
            <div className='w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75' />
            <div className='w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50' />
            <div className='w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PurchaseOptions;
