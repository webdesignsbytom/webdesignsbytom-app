import React from 'react';
// React icons
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

// Icons
import Github from '../../img/social/github.svg';
import Twitter from '../../img/social/twitter.svg';
import LinkedIn from '../../img/social/linkedin.svg';
import Instagram from '../../img/social/instagram.svg';

function SocialBar() {
  return (
    <>
      <section className='flex gap-1 border-2 border-white border-solid p-2 space-x-2 w-fit'>
        <div>
          <a
            href='https://github.com/webdesignbytom'
            target='_blank'
            rel='noreferrer'
            className='text-white hover:text-colour-dark'
          >
            <BsGithub />
          </a>
        </div>
        <div>
          <a
            href='https://twitter.com/webdesignsbytom'
            target='_blank'
            rel='noreferrer'
            className='text-white hover:text-colour-dark'
          >
            <BsTwitter />
          </a>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/tom-brockington-b011b8230/'
            target='_blank'
            rel='noreferrer'
            className='text-white hover:text-colour-dark'
          >
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a
            href='https://www.instagram.com/webdesignsbytom/'
            target='_blank'
            rel='noreferrer'
            className='text-white hover:text-colour-dark'
          >
            <BsInstagram />
          </a>
        </div>
      </section>
    </>
  );
}

export default SocialBar;
