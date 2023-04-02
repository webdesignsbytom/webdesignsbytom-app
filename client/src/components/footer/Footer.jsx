import React from 'react';
import { Link } from 'react-router-dom';
// Components
import SocialBar from '../social/SocialBar';
import Logo from '../../assets/img/logos/wdbt-white.svg'

function Footer() {
  const today = new Date();
  return (
    <footer className='bg-footer-colour text-white grip gap-2 w-full text-sm p-1 text-center mt-4 py-2'>
      <section className='mx-4 py-2'>
        <h3 className='text-left'>Contact:</h3>
        <div className='flex justify-between'>
          <p>Phone: 07541576148</p>
          <p>Email: tom@webdesignsbytom.com</p>
        </div>
      </section>
      <section className='flex justify-center my-4'>
        <SocialBar
          background={'bg-footer-colour dark:bg-main-colour'}
              icons={'text-white dark:text-gray-300'}
        />
      </section>
      <section>
        <h4 className='underline'>Site Navigation</h4>
        <section>
          <ul className='flex w-full justify-between px-4 mt-4 mb-6'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/design'>Design</Link>
            </li>
            <li>
              <Link to='/store'>Store</Link>
            </li>
            <li>
              <Link to='/portfolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </section>
      </section>
      <section className='flex w-full lg:hidden justify-center'>
        <img src={Logo} className='w-10' alt="footer logo for web design by tom" />
      </section>
      <section className='my-4'>
        <p className='text-center'>
          Copyright webdesignsbytom <span className='font-bold'>&copy;</span>{' '}
          {today.getFullYear()}
        </p>
      </section>
    </footer>
  );
}

export default Footer;
