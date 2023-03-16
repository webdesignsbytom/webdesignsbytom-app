import React from 'react';
import OrbitAnimation from '../../components/utils/OrbitAnimation';
// Styles
import '../../styles/orbitAnimation.css'

function Experience() {
  return (
    <section
      id='experience'
      className='lg:h-[90vh] lg:max-h-screen lg:overflow-hidden grid lg:grid-rows-reg mb-4'
    >
      <section className='text-center mt-8'>
        <h5>What skills I have</h5>
        <h2 className='text-2xl'>My Experience</h2>
      </section>

      <section className='my-auto grid grid-cols-faf lg:mx-8 lg:gap-6'>
        <section className='bg-main-colour rounded-xl text-center px-4 py-8 w-full h-min'>
          <div className='mb-6 text-xl'>
            <h3>Frontend Development</h3>
          </div>
          <div className='grid sm:grid-cols-2 gap-6'>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>HTML</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>CSS</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>Javascript</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>React</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>Tailwind</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>TypeScript</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
          </div>
        </section>

        <section className='bg-main-colour grid h-full rounded-xl text-center px-4 py-8 w-full z-0'>
          <OrbitAnimation /> 
          </section>

        <section className='bg-main-colour rounded-xl text-center px-4 py-8 w-full h-min'>
          <div className='mb-6 text-xl'>
            <h3>Frontend Development</h3>
          </div>
          <div className='grid sm:grid-cols-2 gap-6'>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>Express</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>Node.js</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>MySQL</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>Prisma</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
            <article className=''>
              {/* <BsPatchCheckFill className='-icon' /> */}
              <div>
                <h4>postgresSQL</h4>
                <small className=''>Experienced</small>
              </div>
            </article>
          </div>
        </section>
      </section>
    </section>
  );
}

export default Experience;
