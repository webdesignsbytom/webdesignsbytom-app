import React from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ContactForm from './ContactForm';
// React icons
import { GiRaven } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { ImWhatsapp } from 'react-icons/im';

function Contact() {
  return (
    <>
      <div className='bg-white dark:bg-black h-screen lg:grid lg:w-full lg:grid-rows-a1a lg:overflow-hidden'>
        <Navbar />
        {/* Main */}
        <main className='grid md:mx-8 lg:h-full lg:grid-cols-2 p-2'>
          {/* Info */}
          <section className='grid h-min items-center my-4 md:my-auto lg:mx-20'>
            <article className='m-1 bg-main-colour h-min mb-4 p-4 rounded'>
              <div className='text-center mt-4'>
                <h1 className='text-2xl font-bold'>Contact Me!</h1>
              </div>
              <div className='sm:px-6'>
                <p className='p-2 pb-6 md:mx-6 lg:mx-4'>
                  If you need anything at all, just get in touch. If you need
                  quotes or just to talk through some ideas. I am available to
                  help. Either contact me throught the form provided, or use one
                  the email address or phone number below. Myself or my staff
                  are available to help all week.
                  <br />
                  If you have designs made through our design tool we can access
                  them and get and up to date view of what site design you have
                  created.
                </p>
              </div>
            </article>

            <div className='grid grid-cols-3 mx-1 gap-2'>
              <article className='bg-main-colour rounded-xl text-center px-2 md:px-4 py-4 md:py-8 w-full group hover:bg-blue-400 cursor-pointer hover:scale-105 hover:text-white'>
                <div className='grid justify-center'>
                  <div className='grid justify-center'>
                    <MdEmail />
                  </div>
                  <h4 className='text-sm font-semibold md:text-base'>Email</h4>
                  <h5 className='text-ss md:text-xs'>
                    tom@webdesignsbytom.com
                  </h5>
                  <a
                    href='mailto:tom@webdesignsbytom.com'
                    rel='noreferrer'
                    target='_blank'
                    className='text-xs md:text-base'
                  >
                    Send a email
                  </a>
                </div>
              </article>

              <article className='bg-main-colour rounded-xl text-center px-2 md:px-4 py-4 md:py-8 w-full group hover:bg-blue-400 cursor-pointer hover:scale-105 hover:text-white'>
                <div className='grid justify-center'>
                  <div className='grid justify-center'>
                    <GiRaven />
                  </div>
                  <h4 className='text-sm font-semibold md:text-base'>Raven</h4>
                  <h5 className='text-ss md:text-xs'>webdesignsbytom</h5>
                  <a
                    href='http:facebook-subdomain'
                    rel='noreferrer'
                    target='_blank'
                    className='text-xs md:text-base'
                  >
                    Send a scroll
                  </a>
                </div>
              </article>

              <article className='bg-main-colour rounded-xl text-center px-2 md:px-4 py-4 md:py-8 w-full group hover:bg-blue-400 cursor-pointer hover:scale-105 hover:text-white'>
                <div className='grid justify-center'>
                  <div className='grid justify-center'>
                    <ImWhatsapp />
                  </div>
                  <h4 className='text-sm font-semibold md:text-base'>
                    WhatsApp
                  </h4>
                  <h5 className='text-ss md:text-xs'>Chat any time</h5>
                  <a
                    href='https://api.whatsapp.com/send?phone+447541576148'
                    rel='noreferrer'
                    target='_blank'
                    className='text-xs md:text-base'
                  >
                    Send a message
                  </a>
                </div>
              </article>
            </div>
          </section>

          {/* Inputs */}
          <section className='my-auto'>
            <ContactForm />
          </section>
        </main>
      </div>
    </>
  );
}

export default Contact;
