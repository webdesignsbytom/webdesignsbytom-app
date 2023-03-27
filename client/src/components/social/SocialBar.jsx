import React from 'react';
// React icons
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

function SocialBar({ borders, icons }) {
  return (
    <>
      <section
        className={`flex bg-gradient-to-r from-purple-700 via-yellow-500 to-green-600 border-solid p-1 space-x-2 w-fit rounded`}
      >
        <div className='bg-gray-900 rounded flex gap-2 w-full h-full py-2 px-4'>
          <div>
            <a
              href='https://github.com/webdesignbytom'
              target='_blank'
              rel='noreferrer'
              className={`${icons} hover:text-active-text`}
            >
              <BsGithub />
            </a>
          </div>
          <div>
            <a
              href='https://twitter.com/webdesignsbytom'
              target='_blank'
              rel='noreferrer'
              className={`${icons} hover:text-active-text`}
            >
              <BsTwitter />
            </a>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/in/tom-brockington-b011b8230/'
              target='_blank'
              rel='noreferrer'
              className={`${icons} hover:text-active-text`}
            >
              <BsLinkedin />
            </a>
          </div>
          <div>
            <a
              href='https://www.instagram.com/webdesignsbytom/'
              target='_blank'
              rel='noreferrer'
              className={`${icons} hover:text-active-text`}
            >
              <BsInstagram />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default SocialBar;
