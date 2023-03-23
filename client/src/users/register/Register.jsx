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
        <section className='grid lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] bg-green-400 grid-cols-2 h-full'>
          {/* Main */}
          <section className='bg-blue-300 grid overflow-hidden p-2'>
            <section className='bg-yellow-300'>
              <Particles />
            </section>
          </section>
          {/* Form */}
          <section className='bg-red-300 grid'>
            <RegisterForm />
          </section>
        </section>
      </div>
    </>
  );
}
export default Register;
