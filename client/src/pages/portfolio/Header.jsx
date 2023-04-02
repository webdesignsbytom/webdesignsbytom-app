import React from 'react';
import { Link } from 'react-router-dom';
// Components
import SocialBar from '../../components/social/SocialBar';
// PDF
import CV from '../../assets/pdf/TomBrockingtonResume2023.pdf';

function Header() {
  return (
    <header className='grid relative h-[calc(100vh-32px)] lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] justify-center items-center dark:text-white'>
      <section className='text-center mb-10 md:mb-0'>
        <article className='mb-4'>
          <h4 className='font-semibold'>Hello I am</h4>
          <h1 className='text-5xl py-4 font-semibold'>Tom Brockington</h1>
          <h5 className='text-light'>
            FullStack Developer and Electrical Engineer
          </h5>
          <h5 className='text-light'>
            Available to hire for private or full-time dev work
          </h5>
        </article>
        <section className='flex gap-4'>
          <a
            href={CV}
            download
            className='w-full relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
          >
            <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
            <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 '></span>
            <span className='relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
              Download CV
            </span>
          </a>
          <Link
            to='/contact'
            className='w-full relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
          >
            <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-green-600 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
            <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
            <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-green-600 rounded-md opacity-0 group-hover:opacity-100 '></span>
            <span className='relative text-green-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
              Contact Me
            </span>
          </Link>
        </section>
      </section>
      <section className='absolute bottom-10 flex justify-between w-full px-10'>
        <div>
          <SocialBar
            background={'bg-white dark:bg-black'}
            icons={'text-main-colour dark:text-gray-300'}
          />
        </div>
        <div>
          <a
            href='mailto:tom@webdesignsbytom.com'
            rel='noreferrer'
            target='_blank'
            className='text-xs md:text-base'
          >
            tom@webdesignsbytom.com
          </a>
        </div>
      </section>
    </header>
  );
}

export default Header;
