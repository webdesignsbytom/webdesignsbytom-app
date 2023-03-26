import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import RegisterForm from './RegisterForm';
import Particles from '../../components/animations/Particles';
// Context
import { ToggleContext } from '../../context/ToggleContext';

function Register() {
  const { toggleNavigation } = useContext(ToggleContext);

  return (
    <>
      <div className='bg-white dark:bg-black h-screen lg:grid-rows-reg lg:overflow-hidden'>
        <Navbar />
        {!toggleNavigation && (
          <section className='grid grid-rows-2 lg:grid-rows-none lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] lg:grid-cols-2 h-full'>
            {/* Main */}
            <section className='grid relative overflow-hidden px-2 lg:px-0 pt-6 w-full'>
              <section className='border-black border-2 lg:border-l-0 lg:border-t-4 lg:border-b-4 lg:border-r-4 border-solid p-1'>
                <Particles />
              </section>

              <section className='absolute grid h-full w-full z-10 justify-center items-center px-10'>
                <div className='bg-transparent-black p-2 lg:p-4'>
                  <article className='bg-black p-2 lg:p-6'>
                    <h1 className='text-white text-3xl text-center mb-5 font-bold'>
                      Register
                    </h1>
                    <h2 className='text-white mx-auto text-center lg:max-w-[50%]'>
                      Join and gain access to{' '}
                      <span className='text-hyperlink-blue'>
                        <Link to='/design'>design tools</Link>
                      </span>{' '}
                      and project overview pages for designs in progress
                    </h2>
                  </article>
                </div>
              </section>
            </section>
            {/* Form */}
            <section className='grid mx-4'>
              <RegisterForm />
            </section>
          </section>
        )}
      </div>
    </>
  );
}
export default Register;
