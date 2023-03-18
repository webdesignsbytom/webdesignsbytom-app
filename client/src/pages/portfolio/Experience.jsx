import React from 'react';
import OrbitAnimation from '../../components/utils/OrbitAnimation';
// Styles
import '../../styles/orbitAnimation.css';
// React icons
import { BsFillPatchCheckFill } from 'react-icons/bs';

function Experience() {
  return (
    <section
      id='experience'
      className='lg:h-[90vh] lg:max-h-screen lg:overflow-hidden grid lg:grid-rows-reg mb-4 mx-2'
    >
      <section className='text-center mt-8 mb-4'>
        <h5>What skills I have</h5>
        <h2 className='text-2xl'>My Experience</h2>
      </section>

      <section className='my-auto overflow-hidden grid md:grid-cols-faf gap-4 lg:mx-8 lg:gap-6'>
        <section className='bg-main-colour rounded-xl text-center px-4 py-8 w-full h-min'>
          <div className='mb-6 text-xl'>
            <h3>Frontend Development</h3>
          </div>
          <div className='grid grid-cols-3 md:grid-cols-2 gap-2 lg:gap-6'>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-item w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>HTML5</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-item w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>CSS3</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-item w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>Javascript</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-item w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>React</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-item w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>Tailwind CSS</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-item w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>Typescript</h4>
                  <small className=''>Beginner</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-item w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>Wordpress/wix</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-item w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>C#</h4>
                  <small className=''>Beginner</small>
                </section>
              </div>
            </article>
          </div>
        </section>

        <section className='bg-main-colour grid rounded-xl text-center px-4 py-8 w-full z-0'>
          <OrbitAnimation />
        </section>

        <section className='bg-main-colour rounded-xl text-center px-4 py-8 w-full h-min'>
          <div className='mb-6 text-xl'>
            <h3>Backend Development</h3>
          </div>
          <div className='grid grid-cols-3 md:grid-cols-2 gap-2 lg:gap-6'>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-reg w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>Express</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-reg w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>Node.js</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-reg w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>MySQL</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-reg w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>PostgresSQL</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-reg w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>Prisma</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-reg w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>MongoDB</h4>
                  <small className=''>Experienced</small>
                </section>
              </div>
            </article>
            <article className='flex justify-center py-1 px-2'>
              <div className='grid justify-center lg:grid-cols-reg w-fit'>
                <section className='flex items-center justify-center my-2 lg:pr-4'>
                  <BsFillPatchCheckFill />
                </section>
                <section className='h-min'>
                  <h4>PHP</h4>
                  <small className=''>Beginner</small>
                </section>
              </div>
            </article>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Experience;
