import React from 'react';
// Icons
import { BsCheck2Circle } from 'react-icons/bs';

function Services() {
  return (
    <section
      id='experience'
      className='lg:h-[90vh] lg:max-h-screen lg:overflow-hidden grid lg:grid-rows-reg mb-20'
    >
      <section className='text-center mt-12 mb-2 dark:text-gray-400'>
        <h5 className='font-semibold'>What I Offer</h5>
        <h2 className='text-2xl font-bold'>Services and Assistance</h2>
      </section>

      <section className='my-auto grid lg:grid-cols-3 gap-8 mx-4 lg:mx-8'>
        {/* Articles */}
        <article className='bg-black dark:bg-gray-500 text-white rounded-xl text-center p-1 w-full h-min'>
          <div className='mb-1 border-4 border-purple-600 bg-main-colour border-solid rounded-lg'>
            <h3 className='p-2 font-semibold text-lg'>UI/UX Design</h3>
          </div>

          <ul className='grid gap-2 p-2 w-full border-4 bg-main-colour rounded-lg border-purple-600 border-solid'>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className=''>
                Wireframe and figma designs using the latest design tools
              </p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className=''>Faster streamlined services</p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2 text-center'>User friendly layouts</p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>
                Testing and collecting user experience data
              </p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>
                Colour and style options. Hue matching and pallet building
                tools.
              </p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>
                Root set styles for speedy changes througout project.
              </p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}
        <article className='bg-black dark:bg-gray-500 rounded-xl text-center p-1 w-full h-min text-white'>
          <div className='mb-1 border-4 border-yellow-500 bg-main-colour border-solid rounded-lg'>
            <h3 className='p-2 font-semibold text-lg'>Web Development</h3>
          </div>

          <ul className='grid gap-2 p-2 w-full border-4 bg-main-colour rounded-lg border-yellow-500 border-solid'>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>Fullstack web design and development</p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>Database and user services.</p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>Game and animation Development.</p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>
                Reactive and mobile friendly or mobile first design
              </p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>
                Social medias supporting post/sharing dynamic{' '}
              </p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>
                Video, webcam and chat communication services
              </p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>Restful API services</p>
            </li>
          </ul>
        </article>

        {/* Other skills */}
        <article className='bg-black dark:bg-gray-500 rounded-xl text-center p-1 w-full h-min text-white'>
          <div className='mb-1 border-4 border-green-600 bg-main-colour border-solid rounded-lg'>
            <h3 className='p-2 font-semibold text-lg'>Other Skills</h3>
          </div>

          <ul className='grid gap-2 p-2 w-full border-4 bg-main-colour border-green-600 border-solid rounded-lg'>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>ISO 9001 documentation and auditing</p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>Arduino development</p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>Circuit design and development</p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>Customer relations</p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>Teams and Safety management</p>
            </li>
            <li className='grid grid-cols-reg w-full gap-2 items-center'>
              <div>
                <BsCheck2Circle size={30} />
              </div>
              <p className='ml-2'>Mechanical maintainance</p>
            </li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Services;
