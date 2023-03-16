import React from 'react';

function Services() {
  return (
    <section
      id='services'
      className='lg:h-screen lg:max-h-screen lg:overflow-hidden bg-red-200 grid lg:grid-rows-reg'
    >
      <section className='text-center mt-8'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </section>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
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
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
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
        <article className='service'>
          <div className='service__head'>
            <h3>Other Skills</h3>
          </div>

          <ul className='service__list'>
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
      </div>
    </section>
  );
}

export default Services;
