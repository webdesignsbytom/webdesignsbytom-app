import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import RegisterForm from './RegisterForm';

function Register() {
  return (
    <>
      <div className='bg-white dark:bg-black h-screen'>
        <Navbar />
        {/* Main */}
        <section className='grid h-[calc(100vh-64px)] sm:mx-6'>
          <article className='hidden text-black text-center text-2xl font-extrabold my-2 lg:grid'>
            <h1 className='select-none'>Register</h1>
          </article>
          <div className='max-h-full m-2 lg:grid lg:grid-cols-2 lg:gap-2'>
            {/* Header */}
            <section className='lg:justify-center align-middle'>
              <article className='text-black text-center text-2xl font-extrabold my-2 lg:hidden'>
                <h1 className='select-none py-4'>Register</h1>
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
              <RegisterForm />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
export default Register;
