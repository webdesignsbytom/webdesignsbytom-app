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
    postLogin(loginForm, setSuccessLoginUser, setUser, homePage);
  };
  
  return (
    <>
      <div className='bg-white dark:bg-black h-screen'>
        <Navbar />
        {/* Main */}
        <section className='grid h-[calc(100vh-64px)]'>
          <article className='hidden text-black text-center text-2xl font-extrabold my-2 lg:grid'>
            <h1 className='select-none'>login</h1>
          </article>
          <div className='max-h-full m-2 lg:grid lg:grid-cols-2 lg:gap-2'>
            {/* Header */}
            <section className='lg:justify-center align-middle'>
              <article className='text-black text-center text-2xl font-extrabold my-2 lg:hidden'>
                <h1 className='select-none'>login</h1>
              </article>
              {/* Image */}
              <section className='bg-green-400 my-2 lg:max-w-xl lg:mx-auto lg:my-8'>
                <div className='flex justify-center'>
                  <img
                    src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                    className='lg:h-auto h-52'
                    alt='Phone'
                  />
                </div>
              </section>
            </section>

            {/* Form */}
            <section className=''>
              <LoginForm 
              handleLogin={handleLogin}
              handleChange={handleChange}
              fieldType={fieldType}
              setFieldType={setFieldType}
              showPassword={showPassword}
              eyeIcon={eyeIcon}
              setEyeIcon={setEyeIcon}
                rememberMeChecke={rememberMeChecked}
              setRememberMeChecked={setRememberMeChecked}
              successLoginUser={successLoginUser}
              />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
