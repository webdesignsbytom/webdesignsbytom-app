import React, { useState } from 'react';
// Icons
import OpenEye from '../../img/eye.svg';
import ClosedEye from '../../img/closedEye.svg';

function TestPage() {
  const [fieldType, setFieldType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(OpenEye);

  const showPassword = () => {
    console.log('pass');
    if (fieldType === 'password') {
      console.log('chang to text');
      setFieldType('text');
      setEyeIcon(ClosedEye);
    }
    if (fieldType === 'text') {
      console.log('chang to password');
      setFieldType('password');
      setEyeIcon(OpenEye);
    }
  };
  return (
    <>
      <form className='p-4 max-w-md mx-auto bg-white border-t-8 border-indigo-700 mt-10 rounded'>
        <h1 className='font-medium text-3xl text-center py-4 text-gray-800'>
          Sign in to App
        </h1>
        <label
          className='font-medium block mb-1 mt-6 text-gray-700'
          htmlFor='username'
        >
          Username or Email
        </label>
        <input
          className='appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono'
          id='username'
          type='text'
          autoComplete='off'
          autoFocus
        />

        <label
          className='font-medium block mb-1 mt-6 text-gray-700'
          htmlFor='password'
        >
          Password
        </label>
        <div className='relative w-full'>
          <div className='absolute inset-y-0 right-0 flex items-center px-2'>
            <input
              className='hidden js-password-toggle'
              id='toggle'
              type='checkbox'
            />
            <label
              onClick={showPassword}
              className='px-2 py-1 text-sm text-red-500 font-mono cursor-pointer'
              htmlFor='toggle'
            >
              <img src={eyeIcon} className='h-4 w-4' alt='open eye' />
            </label>
          </div>
          <input
            className='appearance-none border-2 rounded w-full py-3 px-3 leading-tight border-gray-300 bg-gray-100 focus:outline-none focus:border-indigo-700 focus:bg-white text-gray-700 pr-16 font-mono js-password'
            id='password'
            type={fieldType}
            autoComplete='off'
          />
        </div>

        <button
          className='w-full bg-indigo-700 hover:bg-indigo-900 text-white font-medium py-3 px-4 mt-10 rounded focus:outline-none focus:shadow-outline'
          type='button'
        >
          Sign in
        </button>
      </form>
    </>
  );
}

export default TestPage;
