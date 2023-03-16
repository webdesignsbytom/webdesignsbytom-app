import React from 'react';
import { useNavigate } from 'react-router-dom';
// Utils
import { portfolioData } from '../../utils/portfolioData';

function PortfolioDisplay() {
  const navigate = useNavigate();

  const displayInfo = (item) => {
    console.log('itemsssss', item);
    navigate('/portfolioItem', {
      state: item,
    });
  };

  return (
    <section
      id='portfolio'
      className='lg:h-screen lg:max-h-screen lg:overflow-hidden bg-red-200 grid lg:grid-rows-reg'
    >
      <section className='text-center mt-8'>
        <h5>My Recent Work</h5>
        <h2 className='text-2xl'>Portfolio</h2>
      </section>

      <section className='grid lg:grid-cols-3 gap-8 justify-center md:mx-2 p-4 lg:mx-8 bg-blue-400 my-auto py-10'>
        {portfolioData.map((item, index) => {
          return (
            <article
              className='bg-main-colour rounded-xl text-center p-4 grid gap-2'
              key={index}
            >
              <div className='relative'>
                <img
                  className='w-32'
                  src={item.image}
                  onClick={() => displayInfo(item)}
                  alt='portfolio item'
                />

                <div className='flex absolute top-0'>
                  {item.icons.map((icon, index) => {
                    return (
                      <img className='w-6' key={index} src={icon} alt='icon' />
                    );
                  })}
                </div>
              </div>

              <h3 className=''>{item.title}</h3>
              <div className='flex gap-4'>
                <a
                  href={item.github}
                  className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'
                >
                  Github
                </a>
                <a
                  href={item.demo}
                  className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'
                >
                  Live Demo
                </a>
                <button
                  onClick={() => displayInfo(item)}
                  className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'
                >
                  More Info
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
}

export default PortfolioDisplay;
