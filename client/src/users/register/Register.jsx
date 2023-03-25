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
        <section className='grid lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] grid-cols-2 h-full'>
          {/* Main */}
          <section className='grid overflow-hidden p-2'>
            <section className='border-black border-2 border-solid'>
              <Particles />
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
