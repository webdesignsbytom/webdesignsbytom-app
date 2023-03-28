import React from 'react';
// Icons

function WhyChooseUs() {
  return (
    <div className='container mb-6 px-6 mx-auto md:my-20'>
      <section className='text-gray-800'>
        <h2 className='text-3xl font-bold mb-12 text-center'>
          Why WebDesignsByTom is so great
        </h2>

        <div className='flex flex-wrap items-center'>
          <section className='grow-0 shrink-0 basis-auto w-full lg:w-5/12 mb-12 lg:mb-0 md:px-6'>
            <div
              className='relative overflow-hidden bg-no-repeat bg-cover rounded-lg shadow-lg'
              data-mdb-ripple='true'
              data-mdb-ripple-color='light'
              style={{ backgroundPosition: '50%' }}
            >
              <img
                src='https://mdbootstrap.com/img/new/textures/full/98.jpg'
                className='w-full max-h-[500px]'
                alt='design classics'
              />
              <div
                className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed'
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              >
                <article className='flex justify-center items-center h-full'>
                  <div className='px-6 py-12 md:px-12 text-white text-center'>
                    <h3 className='text-2xl uppercase font-bold mb-6'>
                      Years of experience delivering quality{' '}
                    </h3>
                    <p style={{ color: 'hsl(210, 12%, 80%)' }}>
                      Personally I have worked for years in the engineering and
                      technology fields and bring a wealth of knowledge, practical thinking
                      and solutions to problems. My goals have always been to
                      produce excellent work that can be used to represent my
                      skills. Teaming up with a number of skilled individuals
                      from around the world only makes this company more useful
                      to you.
                    </p>
                  </div>
                </article>
              </div>
              <div className='relative overflow-hidden bg-no-repeat bg-cover'>
                <div
                  className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'
                  style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                ></div>
              </div>
            </div>
          </section>

          <section className='grow-0 shrink-0 basis-auto w-full lg:w-7/12 md:px-6'>
            <div className='flex mb-6'>
              <div className='shrink-0'>
                <div
                  className='p-4 rounded-md shadow-lg'
                  style={{ backgroundColor: 'hsl(204, 30%, 20%)' }}
                >
                  <svg
                    className='w-5 h-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='grow ml-4'>
                <p className='font-bold mb-1'>
                  Why not use a CMD like Wordpress or Wix.
                </p>
                <p className='text-gray-500'>
                  These site are easier to make. However many people under
                  estimate the time it can take to build multiple pages of
                  content, as well as create a phone version. Style is harder
                  than it looks.
                </p>
              </div>
            </div>

            <div className='flex mb-6'>
              <div className='shrink-0'>
                <div
                  className='p-4 rounded-md shadow-lg'
                  style={{ backgroundColor: 'hsl(204, 30%, 20%)' }}
                >
                  <svg
                    className='w-5 h-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'
                  >
                    <path
                      fill='currentColor'
                      d='M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='grow ml-4'>
                <p className='font-bold mb-1'>Complete Control</p>
                <p className='text-gray-500'>
                  You can save time and money by having a site built for
                  you. Not only that, you can go beyond the 3 or 4 template
                  options from the provider. Any style you think of can be
                  applied. More animation styles are available.
                </p>
              </div>
            </div>

            <div className='flex mb-6'>
              <div className='shrink-0'>
                <div
                  className='p-4 rounded-md shadow-lg'
                  style={{ backgroundColor: 'hsl(204, 30%, 20%)' }}
                >
                  <svg
                    className='w-5 h-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 640 512'
                  >
                    <path
                      fill='currentColor'
                      d='M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zm80-208H416V144h44.1l99.9 99.9V256z'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='grow ml-4'>
                <p className='font-bold mb-1'>Expertise</p>
                <p className='text-gray-500'>
                  There is so much more that goes into making a successful
                  website than you can learn quickly. By using a real web
                  designer you know that everything important will be covered.
                  From registering your website, to security and page speed.
                </p>
              </div>
            </div>

            <div className='flex'>
              <div className='shrink-0'>
                <div
                  className='p-4 rounded-md shadow-lg'
                  style={{ backgroundColor: 'hsl(204, 30%, 20%)' }}
                >
                  <svg
                    className='w-5 h-5 text-white'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 544 512'
                  >
                    <path
                      fill='currentColor'
                      d='M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='grow ml-4'>
                <p className='font-bold mb-1'>Friendly Design Team</p>
                <p className='text-gray-500'>
                  The team has a variety of skills that helps us move quickly to
                  complete projects. We are patient and understanding when it
                  comes to building your web design vision. Not only that
                  but we provide a quick and easy desing tool to help design and
                  keep the team up to date on any changes to a project.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default WhyChooseUs;
