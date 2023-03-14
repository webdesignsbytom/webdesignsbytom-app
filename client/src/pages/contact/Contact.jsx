import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ContactForm from './ContactForm';
import Footer from '../../components/footer/Footer';
// Utils
import { contactFormTemplate } from '../../utils/utils';

function Contact() {
  const [formData, setFormData] = useState(contactFormTemplate);

  return (
    <>
      <div className='bg-white dark:bg-black h-screen lg:grid lg:w-full lg:grid-rows-a1a lg:overflow-hidden'>
        <Navbar />
        {/* Main */}
        <main className='grid md:mx-8 lg:h-full lg:grid-cols-2 p-2'>
          {/* Info */}
          <section className='grid h-full items-center my-3'>
            <article className='m-1 bg-main-colour h-min mb-4'>
              <div className='text-center mt-4'>
                <h1 className='text-2xl font-bold'>Contact Me!</h1>
              </div>
              <div className='sm:px-6'>
                <p className='p-2 pb-6 md:mx-6 lg:mx-8'>
                  If you need anything at all, just get in touch. If you need quotes or just to talk through some ideas. I am available to help. Either contact me throught the form provided, or use one the email address or phone number below. Myself or my staff are available to help all week. 
                  <br />
                  If you have designs made through our design tool we can access them and get and up to date view of what site design you have created.
                </p>
              </div>
            </article>
          </section>

          {/* Inputs */}
          <section className='mb-4 lg:mt-6'>
            <ContactForm formData={formData} setFormData={setFormData} />
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Contact;
