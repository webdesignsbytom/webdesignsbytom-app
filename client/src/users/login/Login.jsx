import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import LoginForm from './LoginForm';
// Data
import { loginDataTemplate } from '../utils/utils';
import { showPassword } from '../../utils/PasswordReveal';
// Context
import { UserContext } from '../../context/UserContext';
import { postLogin } from '../../utils/Fetch';
import OpenEye from '../../img/eye.svg';

function Login() {
  const { setUser } = useContext(UserContext);
  const [rememberMeChecked, setRememberMeChecked] = useState(true);
  const [loginForm, setLoginForm] = useState(loginDataTemplate);
  const [successLoginUser, setSuccessLoginUser] = useState('');
  const [fieldType, setFieldType] = useState('password');
  const [eyeIcon, setEyeIcon] = useState(OpenEye);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
console.log('loading animation', loadingAnimation);
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
    console.log('CLICK')
    setLoadingAnimation(!loadingAnimation)
    postLogin(loginForm, setSuccessLoginUser, setUser, homePage);
  };

  return (
    <>
      <div className='bg-white dark:bg-black h-screen'>
        <Navbar />
        {/* Main */}
        <section className='grid h-[calc(100vh-64px)] lg:grid-rows-reg'>
          <article className='hidden text-black text-center text-2xl font-extrabold my-2 lg:grid'>
            <h1 className='select-none'>login</h1>
          </article>
          <section className='max-h-full m-2 lg:grid lg:grid-cols-2 lg:gap-2'>
            {/* Header */}
            <section className='lg:flex lg:items-center lg:justify-center align-middle'>
              <article className='text-black text-center text-2xl font-extrabold my-2 lg:hidden'>
                <h1 className='select-none py-4'>login</h1>
              </article>
              {/* Image */}
              <section className='flex items-center my-2 lg:max-w-xl'>
                <div className='flex justify-center lg:mx-auto lg:my-8 lg:px-8'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                    className='lg:h-auto lg:w-full h-52'
                    alt='Phone'
                  />
                </div>
              </section>
            </section>

            {/* Form */}
            <section className='grid w-full'>
              <LoginForm
                handleLogin={handleLogin}
                handleChange={handleChange}
                fieldType={fieldType}
                setFieldType={setFieldType}
                showPassword={showPassword}
                eyeIcon={eyeIcon}
                setEyeIcon={setEyeIcon}
                rememberMeChecked={rememberMeChecked}
                setRememberMeChecked={setRememberMeChecked}
                successLoginUser={successLoginUser}
                loadingAnimation={loadingAnimation}
              />
            </section>
          </section>
        </section>
      </div>
    </>
  );
}

export default Login;
