import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Icons
import { HiArrowSmLeft } from 'react-icons/hi';
import { HiArrowSmRight } from 'react-icons/hi';

function NewsletterHero({ increasePageNumber, decreasePageNumber }) {
  const [emailForm, setEmailForm] = useState({ email: '' });
  let navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setEmailForm({
      ...emailForm,
      [name]: value,
    });
  };

  const navigateContact = () => {
    navigate('/contact', { state: emailForm });
  };

  return (
    <div className='relative min-h-screen flex flex-col bg-news-bg bg-cover text-white'>
      <main className='container mx-auto px-6 pt-6 md:pt-16 flex-1 text-center'>
        <section className='flex md:hidden justify-center pb-6 md:pb-0'>
          <Link to='/store' className='mx-3 hover:opacity-80 duration-150'>
            Store
          </Link>{' '}
          |
          <Link to='/portfolio' className='mx-3 hover:opacity-80 duration-150'>
            Portfolio
          </Link>{' '}
          |
          <Link to='/contact' className='mx-3 hover:opacity-80 duration-150'>
            Contact
          </Link>
        </section>
        <h2 className='text-2xl md:text-4xl lg:text-6xl uppercase'>
          Welcome to
        </h2>
        <h1 className='text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8'>
          Web Designs By Tom
        </h1>

        <p className='text-base md:text-lg lg:text-2xl mb-8'>
          A place for you to take control of your website and having it built by
          experts with detail down to the pixel!
        </p>

        <div className='text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full'>
          943,245 imaginary members
        </div>

        <form
          action='https://www.getrevue.co/profile/tyler_potts_/add_subscriber'
          method='post'
          id='revue-form'
          name='revue-form'
          target='_blank'
        >
          <div className='flex flex-col md:flex-row justify-center mb-4'>
            <input
              onChange={handleChange}
              placeholder='Your email address...'
              type='email'
              name='email'
              id='email'
              className='text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0'
            />
            <input
              onClick={navigateContact}
              type='submit'
              value='Contact Me'
              name='member[subscribe]'
              id='member_submit'
              className='bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold box-content uppercase cursor-pointer hover:opacity-75 duration-150 border-solid border-2 border-gray-400'
            />
          </div>

          <div className='opacity-75 italic'>
            These links make the site look more pro{' '}
            <Link
              target='_blank'
              href='https://www.getrevue.co/terms'
              className='hover:opacity-80 duration-150'
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              target='_blank'
              href='https://www.getrevue.co/privacy'
              className='hover:opacity-80 duration-150'
            >
              Privacy Policy
            </Link>
            .
          </div>
        </form>
      </main>

      <footer className='container w-full md:mx-auto'>
        <div className='grid md:grid-cols-3 items-center w-full justify-center md:justify-between'>
          <section className='hidden md:flex items-center'>
            <p className='mb-4 md:mb-0 md:text-xl'>
              Built with 💖 by <Link to='/store'>webdesignsbytom.com</Link>
            </p>
          </section>

          <section className='grid justify-center'>
            <section className='flex items-center justify-center gap-8 py-1'>
              <section
                onClick={decreasePageNumber}
                className='rounded-full p-1 lg:p-[2px] cursor-pointer text-white'
              >
                <HiArrowSmLeft className='' size={50} />
              </section>
              <section
                onClick={increasePageNumber}
                className='rounded-full p-1 lg:p-[2px] cursor-pointer text-white'
              >
                <HiArrowSmRight className='' size={50} />
              </section>
            </section>
            <article className='text-xs md:text-sm grid text-center justify-center font-outfit font-semibold'>
              <p>This is one of many landing pages i have designed.</p>
              <p>Use the controls below to move through the options.</p>
            </article>
          </section>

          <section className='flex md:hidden mb-2 text-center justify-center w-full'>
            <p className='md:text-xl w-full'>
              Built with 💖 by <Link to='/store'>webdesignsbytom.com</Link>
            </p>
          </section>

          <section className='hidden md:flex justify-end'>
            <Link to='/store' className='mx-3 hover:opacity-80 duration-150'>
              Store
            </Link>{' '}
            |
            <Link
              to='/portfolio'
              className='mx-3 hover:opacity-80 duration-150'
            >
              Portfolio
            </Link>{' '}
            |
            <Link to='/contact' className='mx-3 hover:opacity-80 duration-150'>
              Contact
            </Link>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default NewsletterHero;
