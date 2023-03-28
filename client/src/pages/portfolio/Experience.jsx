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
      <section className='text-center mt-12 mb-4'>
        <h5 className='font-semibold'>What skills I have</h5>
        <h2 className='text-2xl font-bold'>My Experience and Skills</h2>
      </section>

      <section className='my-auto overflow-hidden grid md:grid-cols-faf gap-4 lg:mx-8 lg:gap-6'>
        <section className='bg-main-colour rounded-xl text-center text-white p-4 w-full h-min'>
          <div className='px-4 py-8 outline-4 outline outline-purple-600 rounded-lg'>
            <div className='mb-6 text-2xl font-semibold'>
              <h3>Frontend Development</h3>
            </div>
            <section className='grid grid-cols-3 md:grid-cols-2 gap-2 lg:gap-6'>
              <article className='flex justify-center py-1 px-2'>
                <div className='grid justify-center lg:grid-cols-item w-fit'>
                  <section className='flex items-center justify-center my-2 lg:pr-4'>
                    <BsFillPatchCheckFill />
                  </section>
                  <section className='h-min'>
                    <h4 className='font-semibold'>HTML5</h4>
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
                    <h4 className='font-semibold'>CSS3</h4>
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
                    <h4 className='font-semibold'>Javascript</h4>
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
                    <h4 className='font-semibold'>React</h4>
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
                    <h4 className='font-semibold'>Tailwind CSS</h4>
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
                    <h4 className='font-semibold'>Typescript</h4>
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
                    <h4 className='font-semibold'>Wordpress/wix</h4>
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
                    <h4 className='font-semibold'>C#</h4>
                    <small className=''>Beginner</small>
                  </section>
                </div>
              </article>
            </section>
          </div>
        </section>

        <section className='bg-main-colour grid rounded-xl text-center p-4 w-full z-0'>
          <div className='outline-4 outline grid outline-yellow-500 rounded-lg w-full f-full'>
            <OrbitAnimation />
          </div>
        </section>

        <section className='bg-main-colour rounded-xl text-center text-white p-4 w-full h-min'>
          <div className='px-4 py-8 outline-4 outline outline-green-600 rounded-lg'>
            <div className='mb-6 text-2xl font-semibold'>
              <h3>Backend Development</h3>
            </div>
            <section className='grid grid-cols-3 md:grid-cols-2 gap-2 lg:gap-6'>
              <article className='flex justify-center py-1 px-2'>
                <div className='grid justify-center lg:grid-cols-reg w-fit'>
                  <section className='flex items-center justify-center my-2 lg:pr-4'>
                    <BsFillPatchCheckFill />
                  </section>
                  <section className='h-min'>
                    <h4 className='font-semibold'>Express</h4>
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
                    <h4 className='font-semibold'>Node.js</h4>
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
                    <h4 className='font-semibold'>MySQL</h4>
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
                    <h4 className='font-semibold'>PostgreSQL</h4>
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
                    <h4 className='font-semibold'>Prisma</h4>
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
                    <h4 className='font-semibold'>MongoDB</h4>
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
                    <h4 className='font-semibold'>PHP</h4>
                    <small className=''>Beginner</small>
                  </section>
                </div>
              </article>
            </section>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Experience;
