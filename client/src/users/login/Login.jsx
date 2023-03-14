import React, { useContext } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import LoginForm from './LoginForm';
// Data
// Context
import { UserContext } from '../../context/UserContext';

function Login() {
  const { setUser } = useContext(UserContext);

  return (
    <>
      <div className='bg-white dark:bg-black h-screen'>
        <Navbar />
        {/* Main */}
        <section className='grid h-[calc(100vh-64px)] lg:grid-rows-reg'>
          <article className='hidden text-black text-center text-2xl font-extrabold my-2 lg:grid'>
            <h1 className='select-none'>Login</h1>
          </article>
          <section className='max-h-full m-2 lg:grid lg:grid-cols-2 lg:gap-2'>
            {/* Header */}
            <section className='lg:flex lg:items-center lg:justify-center align-middle'>
              <article className='text-black text-center text-2xl font-extrabold my-2 lg:hidden'>
                <h1 className='select-none py-4'>Login</h1>
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
              <LoginForm setUser={setUser} />
            </section>
          </section>
        </section>
      </div>
    </>
  );
}

export default Login;
