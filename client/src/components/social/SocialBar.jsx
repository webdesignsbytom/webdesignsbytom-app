import React from 'react';
// Icons
import Github from '../../img/social/github.svg';
import Twitter from '../../img/social/twitter.svg';
import LinkedIn from '../../img/social/linkedin.svg';
import Instagram from '../../img/social/instagram.svg';

function SocialBar() {
  return (
    <>
      <section className='flex gap-1 border-2 border-white border-solid p-2 space-x-2'>
        <div>
          <a
            href='https://github.com/webdesignbytom'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Github} className='social__link' alt='github' />
          </a>
        </div>
        <div>
          <a
            href='https://twitter.com/webdesignsbytom'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Twitter} className='social__link' alt='twitter' />
          </a>
        </div>
        <div>
          <a
            href='https://www.linkedin.com/in/tom-brockington-b011b8230/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={LinkedIn} className='social__link' alt='linkedIn' />
          </a>
        </div>
        <div>
          <a
            href='https://www.instagram.com/webdesignsbytom/'
            target='_blank'
            rel='noreferrer'
          >
            <img src={Instagram} className='social__link' alt='instagram' />
          </a>
        </div>
      </section>
    </>
  );
}

export default SocialBar;
