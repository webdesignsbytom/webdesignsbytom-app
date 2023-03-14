import React from 'react';
import { Link } from 'react-router-dom';
// Spinner
import LoadingSpinner from '../../components/utils/LoadingSpinner'

function LoginForm({
  handleLogin,
  handleChange,
  fieldType,
  setFieldType,
  showPassword,
  eyeIcon,
  setEyeIcon,
  rememberMeChecked,
  setRememberMeChecked,
  successLoginUser,
  loadingAnimation,
}) {
  return (
    <>
      <form
        onSubmit={handleLogin}
        className='py-4 lg:w-full lg:my-auto lg:px-8'
      >
        {/* <!-- Email input --> */}
        <div className='mb-6'>
          <input
            type='text'
            name='email'
            className='standard__inputs'
            placeholder='Email address'
            onChange={handleChange}
          />
        </div>

        {/* <!-- Password input --> */}
        <div className='mb-6 relative flex z-0'>
          <input
            type={fieldType}
            name='password'
            className='standard__inputs'
            placeholder='Password'
            onChange={handleChange}
          />
          <label
            className='px-2 py-1 text-sm text-red-500 font-mono cursor-pointer absolute right-0'
            htmlFor='toggle'
          >
            <img
              onClick={() => showPassword(fieldType, setFieldType, setEyeIcon)}
              src={eyeIcon}
              className='h-6 w-6 my-2 mr-2'
              alt='open eye'
            />
          </label>
        </div>

        <div className='flex justify-between items-center mb-6'>
          <div className='form-group form-check'>
            <input
              type='checkbox'
              className='form-check-input h-4 w-4 border border-main-colour rounded-sm bg-white checked:bg-main-colour checked:border-gray-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
              id='rememberMeChecked'
              checked={rememberMeChecked}
              onChange={() => {
                setRememberMeChecked(!rememberMeChecked);
              }}
            />
            <label
              className='form-check-label inline-block text-gray-800 dark:text-white'
              htmlFor='rememberMeChecked'
            >
              Remember me
            </label>
          </div>
          <Link
            to='/reset-lost-password'
            className='text-hyperlink-blue dark:text-white hover:text-main-colour-med focus:text-main-colour-med active:text-main-colour-dark duration-200 transition ease-in-out'
          >
            Forgot password?
          </Link>
        </div>

        {successLoginUser && <p>Success</p>}

        {/* <!-- Submit button --> */}
        <div className='mb-2'>
          <button
            type='submit'
            className='submit__button'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
          >
            {loadingAnimation ? (
              <div className='grid'>
                <LoadingSpinner height={'5'} width={'5'} />
              </div>
            ) : (
              <span>Sign in</span>
            )}
          </button>
        </div>

        <div className='mb-6 text-center'>
          <Link to='/register'>
            <p>
              Not a member? Click{' '}
              <span className='text-hyperlink-blue'>here</span> to register
            </p>
          </Link>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
