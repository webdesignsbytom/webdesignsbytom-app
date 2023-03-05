import React, { useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Data
import {
  registerDataTemplate,
  registerFormResponses,
} from '../../users/utils/utils';
// Functions
import { showPassword, showConfirmPassword } from '../../utils/PasswordReveal';
// Select
import CountrySelect from '../../users/utils/CountrySelect'; // Validation
import { validPassword } from '../../users/utils/Validation';
import { postRegister } from '../../utils/Fetch';
// Icons
import OpenEye from '../../img/eye.svg';
import { Link, useNavigate } from 'react-router-dom';

function TestPage() {
  const [fieldType, setFieldType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(OpenEye);
  const [fieldTypeConfirm, setFieldTypeConfirm] = useState('password');
  const [eyeIconConfirm, setEyeIconConfirm] = useState(OpenEye);
  const [registerForm, setRegisterForm] = useState(registerDataTemplate);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [successRegisterUser, setSuccessRegisterUser] = useState('');
  const [formResponses, setFormResponses] = useState(registerFormResponses);

  const [hiddenPass, setHiddenPass] = useState('invisible h-4');
  const [hiddenEmail, setHiddenEmail] = useState('invisible h-4');

  const [inputStyle, setInputStyle] = useState('standard__inputs');

  let navigate = useNavigate();

  useEffect(() => {
    if (registerForm.password === registerForm.confirmPassword) {
      if (registerForm.password > 0) {
        setHiddenPass('block');
        setInputStyle('standard__inputs');
        setFormResponses({
          ...formResponses,
          password: true,
        });
      }
    }
    if (
      registerForm.password !== registerForm.confirmPassword &&
      registerForm.confirmPassword > 3
    ) {
      setHiddenPass('block');
      setInputStyle('error__inputs');
      setFormResponses({
        ...formResponses,
        password: false,
      });
    }
  }, [registerForm.password, registerForm.confirmPassword]);

  const login = () => {
    navigate('../login', { replace: true });
  };

  const checkHandler = (event) => {
    setAgreedToTerms(!agreedToTerms);
    setRegisterForm({
      ...registerForm,
      agreedToTerms: !agreedToTerms,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (registerForm.password.length > 8) {
      setFormResponses({
        ...formResponses,
        passwordLengthError: false,
      });
    } else {
      setFormResponses({
        ...formResponses,
        passwordLengthError: true,
      });
    }

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();

    if (registerForm.password !== registerForm.confirmPassword) {
      setFormResponses({
        ...formResponses,
        passwordMatchError: true,
        password: false,
      });
      setHiddenPass('block');
      setInputStyle('error__inputs');
      return;
    }

    const checkPassword = validPassword(registerForm.password);

    if (checkPassword === false) {
      alert('Passwords too short');
      setFormResponses({
        ...formResponses,
        passwordLengthError: true,
      });

      return;
    }

    if (agreedToTerms !== true) {
      alert('Please check to agree to terms and conditons');
      setFormResponses({
        ...formResponses,
        agreedToTermsError: true,
      });
      return;
    }

    setFormResponses({
      passwordMatchError: true,
      passwordLengthError: true,
      agreedToTermsError: true,
    });

    const userData = registerForm;

    postRegister(userData, setSuccessRegisterUser, login);
  };
  return (
    <>
      <div className='bg-white dark:bg-black h-screen overflow-hidden'>
        <Navbar />
        {/* Main */}
        <section className='grid h-[calc(100vh-64px)] grid-rows-1 bg-blue-400'>
          <div className='max-h-full m-2'>
            {/* Header */}
            <article className='text-black text-center text-2xl font-extrabold'>
              <h1 className=''>REGISTER</h1>
            </article>
            {/* Image */}
            <section className='bg-green-400 my-2'>
              <div className='flex justify-center'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                  className='h-24'
                  alt='Phone'
                />
              </div>
            </section>

            {/* Form */}
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
          </div>
        </section>
      </div>
    </>
  );
}
export default TestPage;
