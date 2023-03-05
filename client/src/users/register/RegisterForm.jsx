import React from 'react';
import { Link } from 'react-router-dom';

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
}) {
  return (
    <>
      <form onSubmit={handleRegister}>
        {/* <!-- Email input --> */}
        <div className=''>
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
              <span className='text-xs text-black dark:text-red-500 font-medium'>
                {formResponses.passwordMessage}
              </span>
            )}
            {formResponses.password === false && (
              <span className='text-xs text-black dark:text-red-500 font-medium'>
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

        <div className='flex'>
          <input
            type='checkbox'
            name='agreedToTerms'
            className='standard__checkbox'
            id='agreedToTerms'
            checked={agreedToTerms}
            value={agreedToTerms}
            onChange={checkHandler}
          />
          <label
            htmlFor='link-checkbox'
            className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 align-top'
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
            Register
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
