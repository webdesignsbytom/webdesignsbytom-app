import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components
import Navbar from '../components/nav/Navbar';
// Data
import { registerDataTemplate, registerFormResponses } from './utils/utils';
// Functions
import { showPassword, showConfirmPassword } from '../utils/PasswordReveal';
// Select
import CountrySelect from './utils/CountrySelect';
// Validation
import { validPassword } from './utils/Validation';
import { postRegister } from '../utils/Fetch';
// Icons
import OpenEye from '../img/eye.svg';

function Register() {
  const [fieldType, setFieldType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(OpenEye);
  const [fieldTypeConfirm, setFieldTypeConfirm] = useState('password');
  const [eyeIconConfirm, setEyeIconConfirm] = useState(OpenEye);
  const [registerForm, setRegisterForm] = useState(registerDataTemplate);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [successRegisterUser, setSuccessRegisterUser] = useState('');
  const [formResponses, setFormResponses] = useState(registerFormResponses);

  let navigate = useNavigate();

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
      alert('Passwords do not match');
      setFormResponses({
        ...formResponses,
        passwordMatchError: true,
      });
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
      <div className='dark:bg-black h-screen overflow-hidden'>
        <Navbar />
        <article className='hidden lg:block text-main-colour text-center text-6xl font-extrabold'>
          <h1>webdesignsbytom</h1>
          <div className='font-extrabold text-4xl text-center py-4 md:pb-6'>
            <h2 className='my-4'>REGISTER</h2>
          </div>
        </article>

        <section className='grid grid-rows-reg bg-red-500'>
          <div className='my-2 lg:hidden h-min font-extrabold text-xl text-center'>
            <h2>REGISTER</h2>
          </div>
          <div className='container px-6 min-h-full'>
            <div className='flex flex-wrap text-gray-800 lg:mb-6'>
              <div className='flex bg-white w-full h-full flex-col lg:pl-12 md:w-8/12 lg:w-6/12 my-2 md:mb-0'>
                <div>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                    className='h-24 lg:w-eighty'
                    alt='Phone'
                  />
                </div>
              </div>
              <section className='md:w-8/12 lg:w-5/12 lg:ml-20'>
                <form onSubmit={handleRegister}>
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
                        onClick={() =>
                          showPassword(fieldType, setFieldType, setEyeIcon)
                        }
                        src={eyeIcon}
                        className='h-6 w-6 my-2 mr-2'
                        alt='open eye'
                      />
                    </label>
                  </div>

                  {/* <!--Confirm Password input --> */}
                  {/* <!-- Password input --> */}
                  <div className='mb-6 relative flex z-0'>
                    <input
                      type={fieldTypeConfirm}
                      name='confirmPassword'
                      className='standard__inputs'
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

                  {/* <!-- FirstName input --> */}
                  <div className='mb-6'>
                    <input
                      type='text'
                      name='firstName'
                      className='standard__inputs'
                      placeholder='First Name'
                      onChange={handleChange}
                    />
                  </div>

                  {/* <!-- LastName input --> */}
                  <div className='mb-6'>
                    <input
                      type='text'
                      name='lastName'
                      className='standard__inputs'
                      placeholder='Last Name'
                      onChange={handleChange}
                    />
                  </div>

                  {/* <!-- Country input --> */}
                  <div className='mb-4'>
                    <CountrySelect handleChange={handleChange} />
                  </div>

                  <div className='flex h-auto mb-2'>
                    <input
                      type='checkbox'
                      name='agreedToTerms'
                      className='form-check-input border-solid appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-main-colour checked:border-gray-900 focus:outline-none transition duration-200 bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
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

                  {/* Hidden password missing links */}
                  {formResponses.passwordLengthError && (
                    <div>Password too short</div>
                  )}
                  {formResponses.passwordMatchError && (
                    <div>Password doesnt match</div>
                  )}

                  {/* <!-- Submit button --> */}
                  {successRegisterUser ? (
                    <p>{successRegisterUser}</p>
                  ) : (
                    <div className='mb-2'>
                      <button
                        type='submit'
                        className='submit__button'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        Register
                      </button>
                    </div>
                  )}
                  <div className='mb-6 text-center'>
                    <Link to='/login'>
                      <p>
                        Already a member? Click{' '}
                        <span className='text-hyperlink-blue'>here</span> to
                        login
                      </p>
                    </Link>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Register;
