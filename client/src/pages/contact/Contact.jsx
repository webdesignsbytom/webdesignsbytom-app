import React, { useContext, useEffect } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Forms
import ContactForm from './ContactForm';
// React icons
import { GiRaven } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';

function Contact() {
  const { toggleNavigation } = useContext(ToggleContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <div className='bg-white dark:bg-black lg:h-screen lg:grid lg:w-full lg:grid-rows-a1a lg:overflow-hidden'>
        <Navbar />
        {/* Main */}
        {!toggleNavigation && (
          <main className='grid mx-4 md:mx-8 lg:h-full lg:grid-cols-2 lg:gap-6 p-2'>
            {/* Info */}
            <section className='grid h-min items-center my-4 lg:my-auto lg:mx-16'>
              <article className='m-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-100 h-min mb-4 p-4 rounded'>
                <div className='text-center mt-4'>
                  <h1 className='text-2xl font-bold'>Contact Me!</h1>
                </div>
                <div className='sm:px-6 md:px-2'>
                  <p className='p-2 md:mx-6 text-center lg:mx-4 leading-5 font-semibold'>
                    If you need anything at all, just get in touch!
                  </p>
                  <p className='p-2 pb-6 md:mx-6 lg:mx-2 leading-5'>
                    If you need quotes or just to talk through some ideas. I am
                    available to help. Either contact me throught the form
                    provided, or use one the email address or phone number
                    below. Myself or my staff are available to help all week.
                    <br />
                    If you have designs made through our design tool we can
                    access them and get and up to date view of what site design
                    you have created.
                  </p>
                </div>
              </article>

              <div className='grid grid-cols-3 items-center mx-1 gap-2'>
                <a
                  href='mailto:tom@webdesignsbytom.com'
                  rel='noreferrer'
                  target='_blank'
                  className='text-xs h-full md:text-base'
                >
                  <article className='grid bg-main-colour border-4 text-white border-purple-700 border-solid rounded-xl text-center px-2 md:px-4 py-4 md:py-8 w-full group cursor-pointer hover:scale-105 hover:text-white hover:outline hover:outline-2 h-full hover:outline-transparent-purple'>
                    <div className='grid justify-center'>
                      <div className='grid justify-center'>
                        <MdEmail />
                      </div>
                      <h4 className='text-sm font-semibold md:text-base'>
                        Email
                      </h4>
                      <h5 className='text-ss md:text-xs break-words overflow-hidden'>
                        tom@webdesignsbytom.com
                      </h5>
                      Send a email
                    </div>
                  </article>
                </a>

                <a
                  href='http:facebook-subdomain'
                  rel='noreferrer'
                  target='_blank'
                  className='text-xs h-full md:text-base'
                >
                  <article className='bg-main-colour rounded-xl border-4 text-white border-yellow-500 border-solid text-center px-2 md:px-4 py-4 md:py-8 w-full group cursor-pointer hover:scale-105 hover:text-white hover:outline hover:outline-2 h-full hover:outline-transparent-yellow'>
                    <div className='grid justify-center'>
                      <div className='grid justify-center'>
                        <GiRaven />
                      </div>
                      <h4 className='text-sm font-semibold md:text-base'>
                        Raven
                      </h4>
                      <h5 className='text-ss md:text-xs'>webdesignsbytom</h5>
                      Send a scroll
                    </div>
                  </article>
                </a>

                <a
                  href='https://api.whatsapp.com/send?phone+447541576148'
                  rel='noreferrer'
                  target='_blank'
                  className='text-xs h-full md:text-base'
                >
                  <article className='bg-main-colour border-4 text-white border-green-700 border-solid rounded-xl text-center px-2 md:px-4 py-4 md:py-8 w-full group cursor-pointer hover:scale-105 hover:text-white hover:outline hover:outline-2 h-full hover:outline-transparent-green'>
                    <div className='grid justify-center'>
                      <div className='grid justify-center'>
                        <ImWhatsapp />
                      </div>
                      <h4 className='text-sm font-semibold md:text-base'>
                        WhatsApp
                      </h4>
                      <h5 className='text-ss md:text-xs'>Chat any time</h5>
                      Send a message
                    </div>
                  </article>
                </a>
              </div>
            </section>

            {/* Inputs */}
            <section className='my-auto'>
              <ContactForm />
            </section>
          </main>
        )}
      </div>
    </>
  );
}

export default Contact;
