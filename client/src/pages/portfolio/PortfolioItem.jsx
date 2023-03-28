import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
// Data
import { portfolioData, initialData } from '../../utils/portfolioData';

function PortfolioItem() {
  const navigate = useNavigate();
  const location = useLocation();

  const [portfolioItem, setPortfolioItem] = useState(initialData);

  // Set the item to be displayed
  useEffect(() => {
    console.log('location: ', location);
    if (location.state) {
      setPortfolioItem(location.state);
    } else {
      setPortfolioItem(portfolioData[0]);
    }
  }, [location]);

  const nextPage = () => {
    const currentId = portfolioItem.id;
    const newPageItem = portfolioData[currentId];

    if (currentId === portfolioData.length) {
      location.state = portfolioData[0];
    } else {
      location.state = newPageItem;
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

          <div className='grid grid-rows-a1a bg-green-400'>
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

            <section className='grid bg-red-400'>
              <section className=''>
                <div className=''>
                  <div className=''>
                    <img
                      className='w-10'
                      src={portfolioItem.images[0]}
                      alt='phone display'
                    />
                  </div>
                  <div className=''>
                    <div className=''></div>
                  </div>
                </div>
              </section>

              <section className=''>
                <div className=''>
                  <div className=''>
                    <div className=''>
                      <img
                        className='w-10'
                        src={portfolioItem.images[1]}
                        alt='laptop display'
                      />
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className=''>
                    <div className=''></div>
                    <div className=''></div>
                  </div>
                  <div className=''></div>
                </div>
              </section>

              <section className=''>
                <div className=''>
                  <div className=''>
                    <img
                      className='w-10'
                      src={portfolioItem.images[2]}
                      alt='phone display'
                    />
                  </div>
                  <div className=''>
                    <div className=''></div>
                    <div className=''></div>
                    <div className=''></div>
                    <div className=''></div>
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
          </div>
        </main>
      </div>
    </>
  );
}

export default PortfolioItem;
