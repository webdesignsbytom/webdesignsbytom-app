import React from 'react';
import { Link } from 'react-router-dom';
// Video
import EarthVideo from '../../assets/video/earthVideo.mp4';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';

const heroLinks = [
  {
    title: `Home`,
    link: '/',
  },
  {
    title: `Design`,
    link: '/design',
  },
  {
    title: `Portfolio`,
    link: '/portfolio',
  },
  {
    title: `Login`,
    link: '/login',
  },
];

function PlanetHero({ increasePageNumber, decreasePageNumber }) {
  return (
    <div className='grid relative bg-black h-[100vh] overflow-hidden w-full'>
      {/* nav */}
      <header className='flex absolute w-full z-20 max-h-12 font-outfit text-white justify-between px-4 py-4'>
        <div>
          <Link to='/'>
            <h3 className='text-xl'>GLXY DESIGN CLSS</h3>
          </Link>
        </div>
        {/* Large nav */}
        <nav className='hidden md:block'>
          <ul className='flex text-white gap-4'>
            {heroLinks.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    className='text-xl font-medium cursor-pointer hover:text-gray-300'
                    to={link.link}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Phone nav */}
        <nav onClick={() => {}} className='md:hidden'>
          <span className='cursor-pointer text-white hover:text-hover-grey'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='w-6 h-6 transition duration-200 ease-in-out select-none focus:scale-125 active:scale-125'
              data-te-animation-init
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
              />
            </svg>
          </span>
        </nav>
      </header>

      {/* Video component */}
      <section className='grid absolute z-0 w-full h-full overflow-hidden lg:bg-cover object-cover'>
        <video className='grid' autoPlay loop muted id='video'>
          <source src={EarthVideo} type='video/mp4' />
        </video>
      </section>

      <section className='text-white grid z-10 absolute h-full w-full justify-center items-center'>
        <section>
          <article>
            <section>
              <h1 className='grid text-6xl  font-semibold font-outfit'>
                <span className='text-left -ml-8'>Web Designs</span> <br />{' '}
                <span className='text-right -mr-8'>By Tom</span>
              </h1>
              <h2 className='font-semibold text-center mt-2'>
                Spacious Web Designs
              </h2>
            </section>

            <section className='my-4'>
              <div className='grid w-full md:flex my-2 gap-2 justify-center font-outfit'>
                <Link to='/developer'>
                  <button className='py-2 px-4 uppercase border-white hover:bg-transparent-white cursor-pointer border-3 border-solid font-medium'>
                    Hire Personal
                  </button>
                </Link>
                <Link to='/portfolio'>
                  <button className='py-2 px-4 hover:bg-transparent-white uppercase border-white cursor-pointer border-3 border-solid font-medium'>
                    Hire Corporate
                  </button>
                </Link>
              </div>
            </section>
          </article>
        </section>

        <section className='absolute flex bottom-0 w-full justify-center'>
          <section className='grid justify-center'>
            <article className='grid text-center justify-center font-outfit text-white font-semibold'>
              <p>This is one of many landing pages i have designed.</p>
              <p>Use the controls below to move through the options.</p>
            </article>
            <section className='flex items-center justify-center gap-4 py-4'>
              <section
                onClick={decreasePageNumber}
                className='bg-black rounded-full p-2 cursor-pointer text-white hover:animate-pulse'
              >
                <HiArrowSmLeft size={50} />
              </section>
              <section>Current</section>
              <section
                onClick={increasePageNumber}
                className='bg-black rounded-full p-2 cursor-pointer text-white hover:animate-pulse'
              >
                <HiArrowSmRight size={50} />
              </section>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default PlanetHero;
