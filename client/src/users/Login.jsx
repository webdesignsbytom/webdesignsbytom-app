import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Components
import Navbar from '../components/nav/Navbar';
// Data
import { loginDataTemplate } from './utils/utils';
// Axios
import client from '../utils/client';
// Context
import { UserContext } from '../context/UserContext';

function Login() {
  const { user, setUser } = useContext(UserContext);
  const [rememberMeChecked, setRememberMeChecked] = useState(true);
  const [loginForm, setLoginForm] = useState(loginDataTemplate);
  const [successLoginUser, setSuccessLoginUser] = useState('');
  console.log('login', loginForm);
  console.log('Login User', user);

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

    client
      .post('/login', loginForm, false)
      .then((res) => {
        setSuccessLoginUser(res.data.status);
        console.log('data1', res.data);
        localStorage.setItem(
          process.env.REACT_APP_USER_TOKEN,
          res.data.data.token
        );
        setUser(res.data.data.existingUser);
      })
      .then(() => homePage())

      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <div className='bg-white dark:bg-black '>
        <div>
          {/* Navigation */}
          <Navbar />
          <div className='h-[calc(100%_-_4rem)] overflow-hidden'>
            {/* Titles */}
            <article className='hidden lg:block text-main-colour text-center text-6xl font-extrabold'>
              <h1>webdesignsbytom</h1>
              <div className='font-extrabold text-4xl text-center py-4 md:pb-6'>
                <h2 className='my-4'>login</h2>
              </div>
            </article>
            {/* Main Container */}
            <section className='dark:bg-black grid justify-center'>
              <div className='container px-6 py-6 h-full'>
                <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800 lg:mb-6'>
                  {/* Main Image */}
                  <section className='flex flex-col lg:pl-12 md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
                    <div>
                      <img
                        src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                        className='w-full lg:w-eighty'
                        alt='Phone'
                      />
                    </div>
                  </section>
                  {/* Login Form */}
                  <section className='md:w-8/12 lg:w-5/12 lg:ml-20'>
                    <form onSubmit={handleLogin}>
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
                      <div className='mb-6'>
                        <input
                          type='password'
                          name='password'
                          className='standard__inputs'
                          placeholder='Password'
                          onChange={handleChange}
                        />
                      </div>

                      <div className='flex justify-between items-center mb-6'>
                        <div className='form-group form-check'>
                          <input
                            type='checkbox'
                            className='form-check-input appearance-none h-4 w-4 border border-main-colour rounded-sm bg-white checked:bg-main-colour checked:border-gray-900 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
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
                          className='text-main-colour hover:text-main-colour-med focus:text-main-colour-med active:text-main-colour-dark duration-200 transition ease-in-out'
                        >
                          Forgot password?
                        </Link>
                      </div>

                      {successLoginUser && <p>Success</p>}

                      {/* <!-- Submit button --> */}
                      <div className='mb-2'>
                        <button
                          type='submit'
                          className='submit__button'
                          data-mdb-ripple='true'
                          data-mdb-ripple-color='light'
                        >
                          Sign in
                        </button>
                      </div>

                      <div className='mb-6 text-center'>
                        <Link to='/register'>
                          <p>Not a member? Click <span className='text-hyperlink-blue'>here</span> to register</p>
                        </Link>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
