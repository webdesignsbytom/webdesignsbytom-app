import React, { useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import ContactForm from './ContactForm';
// Utils
import { contactFormTemplate } from '../../utils/utils';

function Contact() {
  const [formData, setFormData] = useState(contactFormTemplate)
  
  return (
    <>
      <div className='bg-white dark:bg-black h-screen lg:overflow-hidden'>
        <Navbar />

        {/* Main */}
        <main className='grid h-[calc(100vh-64px)] lg:grid-cols-2 p-2'>

          {/* Info */}
          <section className='grid h-full justify-center'>
            <article className='m-1'>
              <div className='text-center my-2'>
                <h1>Contact Me!</h1>
              </div>
              <div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
                quibusdam accusamus impedit reiciendis eius aliquid dolores
                fugiat aliquam nam aut blanditiis assumenda reprehenderit
                exercitationem qui doloremque, libero cum veniam saepe eligendi
                expedita, corporis voluptas officia illum odit! Recusandae
                adipisci debitis, autem vel at dolorum repellendus ab corrupti,
                a non voluptatem?
              </p>
              </div>
            </article>
          </section>

          {/* Inputs */}
          <section className=''>
            <ContactForm formData={formData} setFormData={setFormData} />
          </section>
        </main>
      </div>
    </>
  );
}

export default Contact;
