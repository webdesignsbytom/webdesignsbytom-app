import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import RegisterForm from './RegisterForm';
// Data
import {
  registerDataTemplate,
  registerFormResponses,
} from '../../users/utils/utils';
// Functions
import { showPassword, showConfirmPassword } from '../../utils/PasswordReveal';
// Select
import { validPassword } from '../../users/utils/Validation';
import { postRegister } from '../../utils/Fetch';
// Icons
import OpenEye from '../../img/eye.svg';

function Register() {
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
      <div className='bg-white dark:bg-black h-screen'>
        <Navbar />
        {/* Main */}
        <section className='grid h-[calc(100vh-64px)]'>
          <article className='hidden text-black text-center text-2xl font-extrabold my-2 lg:grid'>
            <h1 className='select-none'>REGISTER</h1>
          </article>
          <div className='max-h-full m-2 lg:grid lg:grid-cols-2 lg:gap-2'>
            {/* Header */}
            <section className='lg:justify-center align-middle'>
              <article className='text-black text-center text-2xl font-extrabold my-2 lg:hidden'>
                <h1 className='select-none py-4'>REGISTER</h1>
              </article>
              {/* Image */}
              <section className='my-2 lg:max-w-xl lg:mx-auto lg:my-8'>
                <div className='flex justify-center'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                    className='h-32 lg:h-auto'
                    alt='Phone'
                  />
                </div>
              </section>
            </section>

            {/* Form */}
            <section className=''>
              <RegisterForm
                handleRegister={handleRegister}
                handleChange={handleChange}
                hiddenEmail={hiddenEmail}
                fieldType={fieldType}
                inputStyle={inputStyle}
                showPassword={showPassword}
                setFieldType={setFieldType}
                setEyeIcon={setEyeIcon}
                fieldTypeConfirm={fieldTypeConfirm}
                showConfirmPassword={showConfirmPassword}
                setFieldTypeConfirm={setFieldTypeConfirm}
                setEyeIconConfirm={setEyeIconConfirm}
                eyeIcon={eyeIcon}
                eyeIconConfirm={eyeIconConfirm}
                hiddenPass={hiddenPass}
                formResponses={formResponses}
                agreedToTerms={agreedToTerms}
                checkHandler={checkHandler}
              />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
export default Register;
