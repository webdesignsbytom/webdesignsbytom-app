import React from 'react';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../components/utils/LoadingSpinner';

import CountrySelect from '../utils/CountrySelect';
function RegisterForm({
  handleRegister,
  handleChange,
  hiddenEmail,
  fieldType,
  inputStyle,
  showPassword,
  setFieldType,
  setEyeIcon,
  fieldTypeConfirm,
  showConfirmPassword,
  setFieldTypeConfirm,
  setEyeIconConfirm,
  eyeIcon,
  eyeIconConfirm,
  hiddenPass,
  formResponses,
  agreedToTerms,
  checkHandler,
  loadingAnimation
}) {
  return (
    <>
      <form
        onSubmit={handleRegister}
        className='py-4 lg:w-full lg:my-auto lg:px-8'
      >
        {/* <!-- Email input --> */}
        <div>
          <div>
            <input
              type='text'
              name='email'
              className='standard__inputs'
              placeholder='Email address'
              onChange={handleChange}
            />
          </div>
          <p className={hiddenEmail}>
            <span className='text-xs text-black dark:text-red-500 font-medium'>
              Oh, snapp! Some error message.{' '}
            </span>
          </p>
        </div>

        {/* <!-- Password input --> */}
        <div>
          <div className='relative flex z-0'>
            <input
              type={fieldType}
              name='password'
              className={inputStyle}
              placeholder='Password'
              onChange={handleChange}
            />
            <label
              className='px-2 py-1 text-sm text-red-500 font-mono cursor-pointer absolute right-0'
              htmlFor='toggle'
            >
              <img
                onClick={() =>
                  showPassword(fieldType, setFieldType, setEyeIcon)
                }
                src={eyeIcon}
                className='h-6 w-6 my-2 mr-2'
                alt='open eye'
              />
            </label>
          </div>
          <p className='h-4'></p>
        </div>

        {/* <!--Confirm Password input --> */}
        <div>
          <div className='relative flex z-0'>
            <input
              type={fieldTypeConfirm}
              name='confirmPassword'
              className={inputStyle}
              placeholder='Confirm Password'
              onChange={handleChange}
            />
            <label
              className='px-2 py-1 text-sm text-red-500 font-mono cursor-pointer absolute right-0'
              htmlFor='toggle'
            >
              <img
                onClick={() =>
                  showConfirmPassword(
                    fieldTypeConfirm,
                    setFieldTypeConfirm,
                    setEyeIconConfirm
                  )
                }
                src={eyeIconConfirm}
                className='h-6 w-6 my-2 mr-2'
                alt='open eye'
              />
            </label>
          </div>
          <p className={hiddenPass}>
            {formResponses.password === true && (
              <span className='text-xs text-green-500 dark:text-green-700 font-medium'>
                {formResponses.passwordMessage}
              </span>
            )}
            {formResponses.password === false && (
              <span className='text-xs text-red-500 dark:text-red-700 font-medium'>
                {formResponses.passwordError}
              </span>
            )}
          </p>
        </div>

        {/* <!-- FirstName input --> */}
        <div className=''>
          <input
            type='text'
            name='firstName'
            className='standard__inputs'
            placeholder='First Name'
            onChange={handleChange}
          />
          <p className='h-4'></p>
        </div>

        {/* <!-- LastName input --> */}
        <div className=''>
          <input
            type='text'
            name='lastName'
            className='standard__inputs'
            placeholder='Last Name'
            onChange={handleChange}
          />
          <p className='h-4'></p>
        </div>

        {/* <!-- Country input --> */}
        <div className=''>
          <CountrySelect handleChange={handleChange} />
          <p className='h-4'></p>
        </div>

        <div className='form-group form-check ml-1'>
          <input
            type='checkbox'
            className='form-check-input h-4 w-4 border border-main-colour rounded-sm bg-white checked:bg-main-colour checked:border-gray-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            id='agreedToTerms'
            checked={agreedToTerms}
            value={agreedToTerms}
            onChange={checkHandler}
          />
          <label
            className='form-check-label inline-block text-gray-800 dark:text-white'
            htmlFor='agreedToTerms'
          >
            I agree with the{' '}
            <Link
              to='/terms-and-conditions'
              className='text-hyperlink-blue dark:text-hyperlink-blue hover:underline'
            >
              terms and conditions
            </Link>
            .
          </label>
        </div>

        {/* <!-- Submit button --> */}

        <div className=''>
          <p className='h-4'></p>

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
          <p className='h-4'></p>
        </div>

        <div className='text-center'>
          <Link to='/login'>
            <p>
              Already a member? Click{' '}
              <span className='text-hyperlink-blue'>here</span> to login
            </p>
          </Link>
          <p className='h-4'></p>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
