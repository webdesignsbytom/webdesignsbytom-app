import React from 'react';
import { Link } from 'react-router-dom';

function NewsletterHero() {
  return (
    <div className='min-h-screen flex flex-col bg-news-bg bg-cover text-white'>
      <main className='container mx-auto px-6 pt-16 flex-1 text-center'>
        <h2 className='text-2xl md:text-4xl lg:text-6xl uppercase'>
          Welcome to
        </h2>
        <h1 className='text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8'>
          Web Design By Tom
        </h1>

        <p className='text-base md:text-lg lg:text-2xl mb-8'>
          A place for developers to code in peace without those pesky project
          managers!
        </p>

        <div className='text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full'>
          943,245 members
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
              placeholder='Your email address...'
              type='email'
              name='member[email]'
              id='member_email'
              className='text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none mb-4 md:mb-0'
            />
            <input
              type='submit'
              value='Join Today'
              name='member[subscribe]'
              id='member_submit'
              className='bg-primary md:rounded-tl-none md:rounded-bl-none rounded-full text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer hover:opacity-75 duration-150'
            />
          </div>

          <div className='opacity-75 italic'>
            This doesnt go anywhere but you agree with{' '}
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

      <footer className='container mx-auto p-6'>
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <p className='mb-4 md:mb-0 md:text-xl'>
            Built with 💖 by webdesignsbytom.com
          </p>

          <div className='flex -mx-6'>
            <Link to='/store' className='mx-3 hover:opacity-80 duration-150'>
              About us
            </Link>{' '}
            |
            <Link href='#' className='mx-3 hover:opacity-80 duration-150'>
              Privacy
            </Link>{' '}
            |
            <Link to='/contact' className='mx-3 hover:opacity-80 duration-150'>
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NewsletterHero;