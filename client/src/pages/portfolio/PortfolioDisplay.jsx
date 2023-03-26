import React from 'react';
import { useNavigate } from 'react-router-dom';
// Utils
import { portfolioData } from '../../utils/portfolioData';

function PortfolioDisplay() {
  const navigate = useNavigate();

  const displayInfo = (item) => {
    console.log('itemsssss', item);
    navigate(`/portfolio-item/${item.title}`, {
      state: item,
    });
  };

  return (
    <section
      id='portfolio'
      className='grid lg:grid-rows-reg mb-4'
    >
      <section className='text-center mt-8 mb-4'>
        <h5>My Recent Work</h5>
        <h2 className='text-2xl'>Portfolio</h2>
      </section>

      <section className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center md:mx-2 p-4 lg:mx-8 my-auto py-2'>
        {portfolioData.map((item, index) => {
          return (
            <article
              className='bg-main-colour rounded-xl text-center p-4 grid gap-2 hover:outline hover:outline-4 hover:outline-black hover:bg-white cursor-pointer'
              key={index}
            >
              <h3 className='mb-2 text-xl font-semibold'>{item.title}</h3>

              <section className='grid gap-2'>
                <div className='relative'>
                  <img
                    className='w-full border-2 border-black border-solid rounded-xl lg:min-h-[180px] object-fill'
                    src={item.image}
                    onClick={() => displayInfo(item)}
                    alt='portfolio item'
                  />

                  <div className='flex absolute top-2 right-2 py-1 px-2 bg-transparent-white rounded-full'>
                    {item.icons.map((icon, index) => {
                      return (
                        <img
                          className='w-6 max-w-6'
                          key={index}
                          src={icon}
                          alt='icon'
                        />
                      );
                    })}
                  </div>
                </div>

                <div className='flex gap-4 mt-2'>
                  <a
                    href={item.github}
                    target='_blank'
                    rel='noreferrer'
                    className='bg-slate-500 grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-xl transition duration-150 ease-in-out w-full items-center hover:bg-slate-200'
                  >
                    Github
                  </a>
                  <a
                    href={item.demo}
                    target='_blank'
                    rel='noreferrer'
                    className='bg-slate-500 grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-xl transition duration-150 ease-in-out w-full items-center hover:bg-slate-200'
                  >
                    Live Demo
                  </a>
                  <button
                    onClick={() => displayInfo(item)}
                    className='bg-slate-500 grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-xl transition duration-150 ease-in-out w-full items-center hover:bg-slate-200'
                  >
                    More Info
                  </button>
                </div>
              </section>
            </article>
          );
        })}
      </section>
    </section>
  );
}

export default PortfolioDisplay;
