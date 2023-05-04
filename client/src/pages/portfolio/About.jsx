import React from 'react';
import { Link } from 'react-router-dom';
// Images
import Avatar from '../../assets/img/portfolio/Tom2.jpg';
// Icons
import { TbReportAnalytics } from 'react-icons/tb';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { AiOutlineProject } from 'react-icons/ai';

function About({ myRef }) {
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <section
      id='about'
      className='lg:min-h-screen grid lg:grid-rows-reg mb-4 pb-20 bg-gray-100 dark:bg-black dark:text-gray-400'
    >
      <section className='text-center mt-8 mb-4'>
        <h5 className='font-semibold'>Get To Know Me</h5>
        <h2 className='text-2xl font-bold'>About Me</h2>
      </section>

      {/* Main */}
      <main className='h-[1fr] grid md:grid-cols-reg w-full gap-8 px-8 my-auto py-10'>
        <div className='lg:mx-12 object-contain'>
          <img className='w-full md:w-80 rounded-xl' src={Avatar} alt='me' />
        </div>

        <section className='grid gap-10 w-full lg:px-10 select-none no__highlights'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 select-none no__highlights'>
            <article className='bg-gray-900 rounded-xl border-4 border-solid border-purple-600 cursor-pointer hover:bg-black hover:text-white text-white hover:outline-4 hover:outline-transparent-purple hover:outline text-center px-4 py-8 w-full select-none no__highlights'>
              <div className='flex justify-center mb-4'>
                <TbReportAnalytics size={35} />
              </div>
              <h5 className='text-xl mb-2'>Experience</h5>
              <small>Software Development</small>
              <br />
              <small>Electrical Engineer</small>
              <br />
              <small>Product Design</small>
            </article>

            <article className='bg-gray-900 rounded-xl border-4 border-solid border-yellow-500 cursor-pointer hover:bg-black hover:text-white text-white hover:outline-4 hover:outline-transparent-yellow hover:outline text-center px-4 py-8 w-full select-none no__highlights'>
              <div className='flex justify-center mb-4'>
                <MdOutlineLocalOffer size={35} />
              </div>
              <h5 className='text-xl mb-2'>Services</h5>
              <small>Multi Stack Design</small>
              <br />
              <small>Experienced Product Designer</small>
              <br />
              <small>Advice and Information</small>
            </article>

            <article onClick={executeScroll} className='bg-gray-900 text-white rounded-xl border-4 border-solid border-green-600 cursor-pointer hover:bg-black hover:text-white hover:outline-4 hover:outline-transparent-green hover:outline text-center px-4 py-8 w-full select-none no__highlights'>
              <div className='flex justify-center mb-4'>
                <AiOutlineProject size={35} />
              </div>
              <h5 className='text-xl mb-2'>Projects</h5>
              <small>My Personal Projects</small>
              <br />
              <small>Web and Circuit Design</small>
              <br />
              <small>See What I'm Building</small>
            </article>
          </div>

          <section className='grid gap-6'>
            <article className='grid gap-10'>
              <p>
                <span className='font-semibold'>Tom Brockington</span> is a
                Software Developer and Electrical Engineer based in Devon. I
                have designed a number of products and websites over many years.
                I have a large skill stack and specialise in Javascript and
                React programming.
                <br /> <br />I enjoy solving computing or electrical problems
                and have a detailed and practical approach to design and error
                testing. I work on A number of projects every year and have
                experience developing and designing applications with different
                skill requirements and commercial goals.
              </p>
              <p>
                I am also an <span className='font-semibold'>artist</span>,{' '}
                <span className='font-semibold'>carpenter</span>,{' '}
                <span className='font-semibold'>master scuba diver</span>,{' '}
                <span className='font-semibold'>syrup maker</span>,{' '}
                <span className='font-semibold'>inventor </span>
                and <span className='font-semibold'>entrepreneur</span>.
              </p>
            </article>
            <section className='flex gap-4 my-2'>
              <Link
                to='/contact'
                className='w-full relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
              >
                <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
                <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
                <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 '></span>
                <span className='relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
                  Lets talk!
                </span>
              </Link>
              <Link
                onClick={executeScroll}
                className='w-full relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
              >
                <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-yellow-500 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
                <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
                <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-yellow-500 rounded-md opacity-0 group-hover:opacity-100 '></span>
                <span className='relative text-yellow-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
                  Show Me Some Skills!
                </span>
              </Link>
            </section>
          </section>
        </section>
      </main>
    </section>
  );
}

export default About;
