import React from 'react';
// Images
import Avatar from '../../img/TomAvatar.jpg';
import ExperienceIcon from '../../img/home.svg';

function About() {
  return (
    <section
      id='about'
      className='lg:h-screen lg:max-h-screen lg:overflow-hidden bg-red-200 grid lg:grid-rows-reg'
    >
      <section className='text-center mt-8'>
        <h5>Get To Know Me</h5>
        <h2 className='text-2xl'>About Me</h2>
      </section>

      {/* Main */}
      <main className='h-[1fr] bg-blue-400 grid md:grid-cols-reg w-full gap-8 px-8 my-auto py-10'>
        
        <div className='lg:mx-20 object-contain'>
          <img className='w-80 rounded-xl' src={Avatar} alt='me' />
        </div>

        <section className='grid gap-10 w-full lg:px-10'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <article className='bg-main-colour rounded-xl text-center px-4 py-8 w-full'>
              <div className='flex justify-center mb-4'>
                <img
                  src={ExperienceIcon}
                  alt='experience icon'
                  className='w-6'
                />
              </div>
              {/* <FaAward className='about__icon' /> */}
              <h5 className='text-xl mb-2'>Experience</h5>
              <small>Junior Developer</small>
              <br />
              <small>Electrical Engineer</small>
              <br />
              <small>Renewable energy installer</small>
            </article>

            <article className='bg-main-colour rounded-xl text-center px-4 py-8 w-full'>
              <div className='flex justify-center mb-4'>
                <img
                  src={ExperienceIcon}
                  alt='experience icon'
                  className='w-6'
                />
              </div>
              {/* <FaAward className='about__icon' /> */}
              <h5 className='text-xl mb-2'>Services</h5>
              <small>Experienced Product Designer</small>
              <br />
              <small>MERN Stack Design</small>
              <br />
              <small>Advice and information</small>
            </article>

            <article className='bg-main-colour rounded-xl text-center px-4 py-8 w-full'>
              <div className='flex justify-center mb-4'>
                <img
                  src={ExperienceIcon}
                  alt='experience icon'
                  className='w-6'
                />
              </div>
              {/* <FaAward className='about__icon' /> */}
              <h5 className='text-xl mb-2'>Projects</h5>
              <small>My Personal Projects</small>
              <br />
              <small>Web and circuit design</small>
              <br />
              <small>See what I'm building</small>
            </article>
          </div>

          <section className='grid gap-6'>
            <article className='grid gap-10'>
              <p>
                After years of electrical engineering and renewable energy
                installation, I have started developing websites for you! I have
                always worked in a design and engineering capacity, I even built
                the desk I work from. <br /> Completing jobs that have logic
                puzzles or require solving problems has always made me happy. My
                personal projects combine circuits and web design for developing
                products I hope to achieve success with.
              </p>
              <p>
                I am also an artist, carpenter, master scuba diver, syrup maker
                and entrepreneur.
              </p>
            </article>
            <div className='flex gap-6'>
              <button className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'>
                Lets talk!
              </button>
              <button className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full '>
                Show Me Some Skills!
              </button>
            </div>
          </section>
        </section>
      </main>
    </section>
  );
}

export default About;
