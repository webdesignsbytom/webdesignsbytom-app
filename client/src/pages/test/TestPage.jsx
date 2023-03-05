import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';

import { RadioGroup } from '@headlessui/react';

function TestPage() {
  const handleChange = (event) => {
    console.log('SEKEC', event.target);
    const { name } = event.target;
    console.log('name', name);
  };

  return (
    <>
      {/* <form className='grid place-content-center h-screen'>
        <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 peer-checked:bg-blue-500'>
          <div className='flex items-center h-5'>
            <input
              id='helper-radio-4'
              name='helper-radio'
              type='radio'
              value=''
              className='peer hidden'
              onChange={handleChange}
            />
          </div>
          <div className='ml-2 text-sm'>
            <label
              htmlFor='helper-radio-4'
              className='font-medium text-gray-900 dark:text-gray-300'
            >
              <div>Individual</div>
              <p
                id='helper-radio-text-4'
                className='text-xs font-normal text-gray-500 dark:text-gray-300'
              >
                Some helpful instruction goes over here.
              </p>
            </label>
          </div>
        </div>

        <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 peer-checked:bg-blue-500'>
          <div className='flex items-center h-5'>
            <input
              id='helper-radio-5'
              name='helper-radio'
              type='radio'
              value=''
              className='peer hidden'
              onChange={handleChange}
            />
          </div>
          <div className='ml-2 text-sm'>
            <label
              htmlFor='helper-radio-5'
              className='font-medium text-gray-900 dark:text-gray-300'
            >
              <div>Company</div>
              <p
                id='helper-radio-text-5'
                className='text-xs font-normal text-gray-500 dark:text-gray-300'
              >
                Some helpful instruction goes over here.
              </p>
            </label>
          </div>
        </div>

        <div className='flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600 peer-checked:bg-blue-500'>
          <div className='flex items-center h-5'>
            <input
              id='helper-radio-6'
              name='helper-radio'
              type='radio'
              value=''
              className='peer hidden'
              onChange={handleChange}
            />
          </div>
          <div className='ml-2 text-sm'>
            <label
              htmlFor='helper-radio-6'
              className='font-medium text-gray-900 dark:text-gray-300'
            >
              <div>Non profit</div>
              <p
                id='helper-radio-text-6'
                className='text-xs font-normal text-gray-500 dark:text-gray-300'
              >
                Some helpful instruction goes over here.
              </p>
            </label>
          </div>
        </div>
      </form> */}

      <form action='' className='h-screen grid place-content-center'>
        <ul className='grid w-full gap-6 md:grid-cols-3'>
          <li>
            <input
              type='radio'
              id='all-notifications'
              name='hosting'
              value='all-notifications'
              className='hidden peer'
              required
              aria-checked
              defaultChecked
            />
            <label
              htmlFor='all-notifications'
              
              className='inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:border-2 peer-checked:border-solid peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
              <div className='block'>
                <div className='w-full'>All</div>
              </div>
              <svg
                aria-hidden='true'
                className='w-6 h-6 ml-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </label>
          </li>
          <li>
            <input
              type='radio'
              id='seen-notifications'
              name='hosting'
              value='seen-notifications'
              className='hidden peer'
            />
            <label
              htmlFor='seen-notifications'
              className='inline-flex border-2 items-center justify-between w-full p-5 text-gray-500 bg-white border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:border-2 peer-checked:border-solid peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
              <div className='block'>
                <div className='w-full'>Seen</div>
              </div>
              <svg
                aria-hidden='true'
                className='w-6 h-6 ml-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </label>
          </li>
          <li>
            <input
              type='radio'
              id='new-notifications'
              name='hosting'
              value='new-notifications'
              className='hidden peer'
            />
            <label
              htmlFor='new-notifications'
              className='inline-flex border-2 items-center justify-between w-full p-5 text-gray-500 bg-white border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:border-2 peer-checked:border-solid peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700'
            >
              <div className='block'>
                <div className='w-full'>New</div>
              </div>
              <svg
                aria-hidden='true'
                className='w-6 h-6 ml-3'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </label>
          </li>
        </ul>
      </form>
    </>
  );
}
export default TestPage;
