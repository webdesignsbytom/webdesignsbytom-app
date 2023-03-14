import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components
import SubmitButton from '../../components/utils/SubmitButton';
// Icons
import OpenEye from '../../img/eye.svg';
// Utils
import { showConfirmPassword, showPassword } from '../../utils/PasswordReveal';
import { registerDataTemplate, registerFormResponses } from '../utils/utils';
import CountrySelect from '../utils/CountrySelect';
// Validation
import { validPassword } from '../../users/utils/Validation';
import { postRegister } from '../../utils/Fetch';

function RegisterForm() {
  const [registerSuccessMessage, setRegisterSuccessMessage] = useState({
    status: false,
    message: '',
  });
  const [registerErrorMessage, setRegisterErrorMessage] = useState({
    status: false,
    message: '',
  });
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
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
        setFormResponses(formResponses => ({
          ...formResponses,
          password: true,
        }));
      }
    }
    if (
      registerForm.password !== registerForm.confirmPassword &&
      registerForm.confirmPassword > 3
    ) {
      setHiddenPass('block');
      setInputStyle('error__inputs');
      setFormResponses(formResponses => ({
        ...formResponses,
        password: false,
      }));
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
    setMainButtonContent(false);
    setLoadingAnimation(true);
    
    if (registerForm.password !== registerForm.confirmPassword) {
      setFormResponses({
        ...formResponses,
        passwordMatchError: true,
        password: false,
      });
      setHiddenPass('block');
      setInputStyle('error__inputs');
      setLoadingAnimation(false)
      return;
    }
    
    const checkPassword = validPassword(registerForm.password);
    
    if (checkPassword === false) {
      alert('Passwords too short');
      setFormResponses({
        ...formResponses,
        passwordLengthError: true,
      });
      setLoadingAnimation(false)
      return;
    }
    
    if (agreedToTerms !== true) {
      alert('Please check to agree to terms and conditons');
      setFormResponses({
        ...formResponses,
        agreedToTermsError: true,
      });
      setLoadingAnimation(false)
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

        <div className='mt-2'>
          <div className='mb-2'>
            <SubmitButton
              loadingAnimation={loadingAnimation}
              mainButtonContent={mainButtonContent}
              successMessage={registerSuccessMessage}
              errorMessage={registerErrorMessage}
              buttonMessage='Sign Up'
              spinnerHeight='h-5'
              spinnerWidth='w-5'
            />
          </div>
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
