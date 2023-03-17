import React from 'react';
// React icons
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';

function SocialBar({ textColour, borderColour, darkTextColour, darkBorderColour }) {
  return (
    <>
      <section className={`flex gap-1 border-2 border-${borderColour} dark:border-${darkBorderColour} border-solid p-2 space-x-2 w-fit`} >
        <div>
          <a
            href='https://github.com/webdesignbytom'
            target='_blank'
            rel='noreferrer'
            className={`text-${textColour} dark:text-${darkTextColour} hover:text-active-text`}
          >
            <BsGithub />
          </a>
        </div>
        <div>
          <a
            href='https://twitter.com/webdesignsbytom'
            target='_blank'
            rel='noreferrer'
            className={`text-${textColour} dark:text-${darkTextColour} hover:text-active-text`}
          >
            <BsTwitter />
          </a>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/tom-brockington-b011b8230/'
            target='_blank'
            rel='noreferrer'
            className={`text-${textColour} dark:text-${darkTextColour} hover:text-active-text`}
          >
            <BsLinkedin />
          </a>
        </div>
        <div>
          <a
            href='https://www.instagram.com/webdesignsbytom/'
            target='_blank'
            rel='noreferrer'
            className={`text-${textColour} dark:text-${darkTextColour} hover:text-active-text`}
          >
            <BsInstagram />
          </a>
        </div>
      </section>
    </>
  );
}

export default SocialBar;
