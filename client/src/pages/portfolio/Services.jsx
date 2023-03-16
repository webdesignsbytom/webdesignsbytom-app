import React from 'react';

function Services() {
  return (
    <section
      id='experience'
      className='lg:h-[90vh] lg:max-h-screen lg:overflow-hidden grid lg:grid-rows-reg mb-4'
    >
      <section className='text-center mt-8 mb-4'>
        <h5>What I Offer</h5>
        <h2 className='text-2xl'>Services</h2>
      </section>

      <section className='my-auto grid lg:grid-cols-3 gap-8 mx-8'>
        <article className='bg-main-colour rounded-xl text-center p-4 w-full h-min'>
          <div className='mb-4 border-2 border-black border-solid'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className=''>
            <li>
              <p>Wireframe and figma designs using the latest design tools</p>
            </li>
            <li>
              <p>Faster streamlined services</p>
            </li>
            <li>
              <p>User friendly layouts</p>
            </li>
            <li>
              <p>Testing and collecting user experience data</p>
            </li>
            <li>
              <p>
                Colour and style options. Hue matching and pallet building
                tools.{' '}
              </p>
            </li>
            <li>
              <p>Root set styles for speedy changes througout project.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='bg-main-colour rounded-xl text-center px-4 py-8 w-full h-min'>
          <div className=''>
            <h3>Web Development</h3>
          </div>

          <ul className=''>
            <li>
              <p>Fullstack web design and development</p>
            </li>
            <li>
              <p>Database and user services.</p>
            </li>
            <li>
              <p>Game and animation Development.</p>
            </li>
            <li>
              <p>Reactive and mobile friendly or mobile first design</p>
            </li>
            <li>
              <p>Social medias supporting post/sharing dynamic </p>
            </li>
            <li>
              <p>Video, webcam and chat communication services</p>
            </li>
            <li>
              <p>Restful API services</p>
            </li>
          </ul>
        </article>
        <article className='bg-main-colour rounded-xl text-center px-4 py-8 w-full h-min'>
          <div className=''>
            <h3>Other Skills</h3>
          </div>

          <ul className=''>
            <li>
              <p>ISO 9001 documentation and auditing</p>
            </li>
            <li>
              <p>Arduino development</p>
            </li>
            <li>
              <p>Customer relations</p>
            </li>
            <li>
              <p>Teams and Safety management</p>
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Services;
