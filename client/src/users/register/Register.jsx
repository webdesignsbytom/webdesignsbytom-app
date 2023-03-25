import React from 'react';
import Particles from '../../components/animations/Particles';
// Components
import Navbar from '../../components/nav/Navbar';
import RegisterForm from './RegisterForm';

function Register() {
  return (
    <>
      <div className='bg-white dark:bg-black h-screen lg:grid-rows-reg lg:overflow-hidden'>
        <Navbar />
        <section className='grid grid-rows-2 lg:grid-rows-none lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] lg:grid-cols-2 h-full'>
          {/* Main */}
          <section className='grid relative overflow-hidden py-6 w-full'>
            <section className='border-black border-t-4 border-b-4 border-r-4 border-solid p-1'>
              <Particles />
            </section>

            <section className='absolute grid h-full w-full z-10 justify-center items-center px-10'>
              <div className='bg-transparent-black p-4'>
                <article className='bg-black p-6'>
                  <h1 className='text-white text-3xl text-center mb-5 font-bold'>Register</h1>
                  <h2 className='text-white mx-auto text-center max-w-[50%]'>
                    Join and gain access to design tools and project overview
                    pages for designs in progress
                  </h2>
                </article>
              </div>
            </section>
          </section>
          {/* Form */}
          <section className='grid'>
            <RegisterForm />
          </section>
        </section>
      </div>
    </>
  );
}
export default Register;
