import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/nav/Navbar';
// Data
import { registerDataTemplate } from './utils';

function Register() {
  const [registerForm, setRegisterForm] = useState(registerDataTemplate);
  console.log('register', registerForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    console.log('xxx');
  }
  return (
    <>
      <div className='bg-white dark:bg-black h-screen'>
        <div className='h-screen grid'>
          <Navbar />
          <article className='hidden lg:block text-main-colour text-center text-6xl font-extrabold'>
            <h1>webdesignsbytom</h1>
            <div className='font-extrabold text-4xl text-center py-4 md:pb-6'>
              <h2 className='my-4'>REGISTER</h2>
            </div>
          </article>
          <section className='dark:bg-black grid justify-center'>
            <div className='container px-6 py-6 h-full'>
              <div className='flex justify-center items-center flex-wrap h-full g-6 text-gray-800 lg:mb-6'>
                <div className='flex flex-col lg:pl-12 md:w-8/12 lg:w-6/12 mb-12 md:mb-0'>
                  <div>
                    <img
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
                      className='w-full lg:w-eighty'
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
                        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
                        placeholder='Email address'
                        onChange={handleChange}
                      />
                    </div>

                    {/* <!-- Password input --> */}
                    <div className='mb-6'>
                      <input
                        type='password'
                        name='password'
                        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
                        placeholder='Password'
                        onChange={handleChange}
                      />
                    </div>

                    {/* <!--Confirm Password input --> */}
                    <div className='mb-6'>
                      <input
                        type='password'
                        name='confirmPassword'
                        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
                        placeholder='Confirm Password'
                        onChange={handleChange}
                      />
                    </div>

                    {/* <!-- FirstName input --> */}
                    <div className='mb-6'>
                      <input
                        type='text'
                        name='firstName'
                        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
                        placeholder='First Name'
                        onChange={handleChange}
                      />
                    </div>

                    {/* <!-- LastName input --> */}
                    <div className='mb-6'>
                      <input
                        type='text'
                        name='lastName'
                        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
                        placeholder='Last Name'
                        onChange={handleChange}
                      />
                    </div>

                    {/* <!-- Country input --> */}
                    <div className='mb-6'>
                      <input
                        type='text'
                        name='country'
                        className='form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-main-colour focus:outline-none'
                        placeholder='Country'
                        onChange={handleChange}
                      />
                    </div>

                    {/* <!-- Submit button --> */}
                    <div className='mb-2'>
                      <button
                        type='submit'
                        className='inline-block px-7 py-3 bg-main-colour text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-med hover:shadow-lg focus:bg-eco-green-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-main-dark active:shadow-lg transition duration-150 ease-in-out w-full'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        Register
                      </button>
                    </div>
                    <div className='mb-6 text-center'>
                      <Link to='/login'>
                        <p>Already a member? Click here to login</p>
                      </Link>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Register;
