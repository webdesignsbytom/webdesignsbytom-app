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
              <div>
                <svg
                  className='w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
                <span className='sr-only'>Loading...</span>
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
