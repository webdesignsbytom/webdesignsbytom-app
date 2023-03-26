import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components
import { SubmitButton } from '../../components/utils/SubmitButtons';
// Utils
import { showPassword } from '../../users/utils/PasswordReveal';
import { loginDataTemplate, statusResults } from '../utils/utils';
// Fetch
import { postLogin } from '../../utils/Fetch';
// Icons
import OpenEye from '../../assets/img/eye.svg';

function LoginForm({ setUser }) {
  const [loginResponseMessage, setLoginResponseMessage] =
    useState(statusResults);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  const [rememberMeChecked, setRememberMeChecked] = useState(true);
  const [loginForm, setLoginForm] = useState(loginDataTemplate);
  const [successLoginUser, setSuccessLoginUser] = useState('');
  const [fieldType, setFieldType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(OpenEye);

  let navigate = useNavigate();

  const homePage = () => {
    navigate('/account', { replace: true });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('login');
    setLoadingAnimation(!loadingAnimation);
    //
    postLogin(loginForm, setSuccessLoginUser, setUser, homePage);
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
        className='pb-2 lg:mt-10 lg:w-full lg:my-auto lg:px-8'
      >
        <h2 className='text-xl py-2'>Login here</h2>

        {/* <!-- Email input --> */}
        <div className='mb-6'>
          <input
            type='text'
            name='email'
            className='standard__inputs'
            placeholder='Email address'
            onChange={handleChange}
            required
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
            required
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
          <SubmitButton
            loadingAnimation={loadingAnimation}
            mainButtonContent={mainButtonContent}
            responseMessage={loginResponseMessage}
            buttonMessage='Login'
            spinnerHeight='h-5'
            spinnerWidth='w-5'
          />
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
