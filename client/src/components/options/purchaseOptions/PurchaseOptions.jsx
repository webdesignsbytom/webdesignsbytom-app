import React from 'react';
import { useNavigate } from 'react-router-dom';
// Data
import {
  basicListItems,
  shopListItems,
  fullstackListItems,
} from '../../../utils/utils';
// Icons
import { BsCheck2Circle } from 'react-icons/bs';

function PurchaseOptions() {
  let navigate = useNavigate();

  const startNewProject = (event) => {
    const { id } = event.target
    navigate('/new-project', { replace: true, state: id });
  };

  return (
    <section className='relative w-full h-full'>
      <div className='absolute hidden w-full bg-gray-50 lg:block h-96' />
      <div className='relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        {/* Titles */}
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
            <span className='relative inline-block w-full'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 right-0 z-0 w-32 -mt-8 -m2-2 text-green-600 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='bd1bde-4a23-49f7-bf27-ca140852cf21'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='1' />
                </pattern>
              </defs>
              <rect
                fill='url(#bd1bde-4a23-49f7-bf27-ca140852cf21)'
                width='52'
                height='24'
              />
            </svg>
              <span className='relative'>Affordable</span>
            </span>{' '}
            for everyone
          </h2>
          <p className='text-base text-gray-700 md:text-lg px-2'>
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
                <p className='text-sm font-semibold text-white dark:text-white'>
                  from
                </p>
                <div className='flex items-center justify-center'>
                  <p className='mr-2 text-5xl font-semibold text-white lg:text-6xl'>
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
                onClick={startNewProject}
                id='basic'
                className='inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-600 hover:bg-purple-700 focus:shadow-outline focus:outline-none'
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
                <p className='text-sm font-semibold text-white dark:text-white'>
                  from
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
                id='shop'
                onClick={startNewProject}
                className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md bg-yellow-500 hover:bg-yellow-700 focus:shadow-outline focus:outline-none text-white'
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
                <p className='text-sm font-semibold text-white dark:text-white'>
                  from
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
                id='fullstack'
                onClick={startNewProject}
                className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide transition duration-200 rounded shadow-md bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none text-white'
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
