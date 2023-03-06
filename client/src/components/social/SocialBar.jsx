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
          <img src={Github} className='social__link' alt='github' />
        </div>
        <div>
          <img src={Twitter} className='social__link' alt='twitter' />
        </div>
        <div>
          <img src={LinkedIn} className='social__link' alt='linkedIn' />
        </div>
        <div>
          <img src={Instagram} className='social__link' alt='instagram' />
        </div>
      </section>
    </>
  );
}

export default SocialBar;
