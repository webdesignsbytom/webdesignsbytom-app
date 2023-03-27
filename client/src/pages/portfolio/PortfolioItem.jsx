import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
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
  }, []);

  const returnHome = () => {
    navigate('../', { replace: false });
  };

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
        <div className='bg-nav-colour dark:bg-black w-full flex items-center h-16 px-2 sm:px-6 lg:px-4'>
          <nav className='flex justify-between w-full'>
            <div className='flex'>
              <Link
                className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full items-center'
                onClick={returnHome}
              >
                Return
              </Link>
            </div>
            <div className='flex'>
              <div className=''>
                <Link
                  className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full items-center'
                  onClick={prevPage}
                >
                  Prev
                </Link>
              </div>
              <div className=''>
                <Link
                  className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full items-center'
                  onClick={nextPage}
                >
                  Next
                </Link>
              </div>
            </div>
          </nav>
        </div>
        {/* MAIN PAGE */}
        <main className='grid lg:grid-cols-xo gap-6 p-4 lg:h-[calc(100vh-64px)] lg:max-h-[calc(100vh-64px)] overflow-hidden'>
          <div className=''>
            <div className='text-3xl mb-4 font-bold'>
              <h1>{portfolioItem.title}</h1>
            </div>

            <div className='mb-2'><span className='font-bold'>App Purpose:</span> {portfolioItem.headline}</div>

            <article className=''>{portfolioItem.desc}</article>

            <div className=''>
              <div className=''>
                <div className=''>
                  <h3>Skills Used</h3>
                </div>

                <div className=''>
                  <ul>
                    {portfolioItem.skills.map((skill, index) => {
                      return <li key={index}>{skill}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
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
                  - LAPTOP - <span className='flex text-active-text'>MONITOR</span>
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
