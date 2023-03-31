import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
// Data
import { portfolioData, initialData } from '../../utils/portfolioData';

function PortfolioItem() {
  const navigate = useNavigate();
  const location = useLocation();

  const [portfolioItem, setPortfolioItem] = useState(initialData);

  console.log('navigate', navigate);
  console.log('location: ', location);

  // Set the item to be displayed
  useEffect(() => {
    if (location.state) {
      setPortfolioItem(location.state);
    } else {
      setPortfolioItem(portfolioData[0]);
    }
  }, [location.state]);

  const nextPage = () => {
    const currentId = portfolioItem.id;
    const newPageItem = portfolioData[currentId];

    if (currentId === portfolioData.length) {
      setPortfolioItem(portfolioData[0]);
    } else {
      setPortfolioItem(newPageItem);
    }
  };

  const prevPage = () => {
    const currentId = portfolioItem.id;
    const newPageItem = portfolioData[currentId];

    if (currentId === portfolioData.length) {
      setPortfolioItem(portfolioData[0]);
    } else {
      setPortfolioItem(newPageItem);
    }
  };

  return (
    <>
      <div className='bg-white dark:bg-black lg:max-h-screen lg:overflow-hidden'>
        {/* Nav */}
        <section className='bg-nav-colour dark:bg-black w-full flex items-center h-16 px-2 sm:px-6 lg:px-4'>
          <nav className='flex justify-between w-full'>
            <div className='flex items-center'>
              <Link
                to='/portfolio'
                className='w-full relative inline-flex items-center justify-center px-2 h-fit py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
              >
                <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
                <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
                <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 '></span>
                <span className='relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
                  Return
                </span>
              </Link>
            </div>
            <section className='flex items-center gap-4'>
              <Link
                onClick={prevPage}
                className='w-full relative inline-flex items-center justify-center px-2 h-fit py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
              >
                <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-yellow-500 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
                <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
                <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-yellow-500 rounded-md opacity-0 group-hover:opacity-100 '></span>
                <span className='relative text-yellow-500 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
                  Back
                </span>
              </Link>
              <Link
                onClick={nextPage}
                className='w-full relative inline-flex items-center justify-center px-2 h-fit py-1 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group'
              >
                <span className='absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-green-600 rounded-md group-hover:mt-0 group-hover:ml-0'></span>
                <span className='absolute inset-0 w-full h-full bg-gray-900 rounded-md '></span>
                <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-green-600 rounded-md opacity-0 group-hover:opacity-100 '></span>
                <span className='relative text-green-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white'>
                  Next
                </span>
              </Link>
            </section>
          </nav>
        </section>
        {/* MAIN PAGE */}
        <main className='grid lg:grid-cols-xo gap-6 p-4 lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] overflow-hidden'>
          <div className=''>
            <div className='text-3xl mb-4 font-bold'>
              <h1>{portfolioItem.title}</h1>
            </div>

            <div className='mb-2'>
              <span className='font-bold'>App Purpose:</span>{' '}
              {portfolioItem.headline}
            </div>

            <article className=''>{portfolioItem.desc}</article>

            <section className='outline-2 outline-black outline rounded p-1 w-fit'>
              <div className=''>
                <div className='text-center text-xl font-semibold mb-2'>
                  <h3>Skills Used</h3>
                </div>

                <article className='outline-2 outline-black outline rounded p-1 w-fit'>
                  <ul className='p-1'>
                    {portfolioItem.skills.map((skill, index) => {
                      return <li key={index}>{skill}</li>;
                    })}
                  </ul>
                </article>
              </div>
            </section>
          </div>

          {/* Right side - image container */}
          <section className='grid relative grid-rows-a1a bg-green-400'>
            <div className='flex justify-end h-fit'>
              <ul className='flex bg-main-colour rounded-full w-fit items-center m-1 py-1 px-4'>
                {portfolioItem.icons.map((icon, index) => {
                  return (
                    <li key={index} className=''>
                      <img className='w-8' src={icon} alt='icon' />
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* PHONE */}
            <section className='grid bg-red-400'>
              {/* <section className='grid absolute items-center justify-center'>
                <div className='relative bg-white grid h-[160px] w-[88px] rounded-lg p-1 border-2 border-solid border-black'>
                  <div className='bg-white overflow-hidden rounded-lg border-2 border-solid border-black'>
                    <img
                      className='h-full'
                      src={portfolioItem.images[0]}
                      alt='phone display'
                    />
                  </div>
                  <div className='grid items-center justify-center absolute w-full bottom-0 pb-2'>
                    <div className='h-[15px] w-[15px] border-2 border-solid border-black rounded-full'></div>
                  </div>
                </div>
              </section> */}

              {/* LAPTOP */}
              {/* <section className='grid grid-rows-ten-one h-fit justify-center items-center absolute'>
                <div className='grid items-center justify-center'>
                  <div className='grid p-1 pt-3 bg-black rounded-tr-lg rounded-tl-lg border-2 border-solid border-gray-600 h-[180px] w-[300px] '>
                    <div className='border-2 border-solid border-gray-600 overflow-hidden bg-black'>
                      <img
                        className='h-full w-full'
                        src={portfolioItem.images[1]}
                        alt='laptop display'
                      />
                    </div>
                  </div>
                </div>
                <div className='grid min-h-[15px] items-center grid-cols-reg pl-8 rounded-tl-sm rounded-tr-sm rounded-bl-lg rounded-br-lg bg-black w-[330px] border-2 border-solid border-gray-600'>
                  <div className='grid grid-flow-col gap-2'>
                    <div className='h-[10px] w-[10px] border-2 border-solid border-gray-600 rounded-full bg-black'></div>
                    <div className='h-[10px] w-[10px] border-2 border-solid border-gray-600 rounded-full bg-black'></div>
                  </div>
                </div>
              </section> */}

              
{/* .monitor__container {



.responsive__images__container {
  display: grid;
  padding: 1rem;
} */}
              {/* MONITOR */}
              <section className='grid grid-rows-aa absolute'>
                <div className='grid w-[400px] h-[290px] pt-2 pr-2 pl-2 grid-rows-rev bg-black rounded-lg border-2 border-solid border-gray-600'>
                  <div className='bg-black rounded border-2 overflow-hidden border-solid border-gray-600'>
                    <img
                      className='w-full h-full'
                      src={portfolioItem.images[2]}
                      alt='phone display'
                    />
                  </div>
                  <div className='grid grid-flow-col items-center py-1 pr-4 gap-2 justify-end'>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                    <div className='border-2 border-solid border-gray-600 rounded-full bg-white h-[10px] w-[10px]'></div>
                  </div>
                </div>
              </section>
            </section>

            <div className='flex justify-between items-end'>
              <div className=''>
                <h6 className='flex'>
                  PHONE - <span className='flex text-active-text'>TABLET</span>{' '}
                  - LAPTOP -{' '}
                  <span className='flex text-active-text'>MONITOR</span>
                </h6>
                <h3>Fully Responsive Design</h3>
              </div>
              <div className='flex'>
                <a
                  target='_blank'
                  className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full items-center'
                  rel='noreferrer'
                  href={portfolioItem.liveSite}
                >
                  LIVE SITE
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default PortfolioItem;
