import React from 'react';
// Icons
import HeartIcon from '../../../img/heart.svg';
import PlusIconReg from '../../../img/plusIconReg.svg';

function PageItem({ page }) {
  const { id, type, name, desc, price, image } = page;

  return (
    <li className='border-2 border-black border-solid p-1 rounded'>
      <article>
        <div className='flex justify-between'>
          <div>
            <h3>{name}</h3>
            <h4 className='text-sm'>Type: {type}</h4>
          </div>
          <section className='flex'>
            <div>
              <img
                className='w-5 cursor-pointer m-1'
                src={PlusIconReg}
                alt='favorite icon'
              />
            </div>
            <div>
              <img
                className='w-5 cursor-pointer m-1'
                src={HeartIcon}
                alt='favorite icon'
              />
            </div>
          </section>
        </div>

        <img src={image} alt={`Page ${name} display`} />

        <p>{desc}</p>
        <h5>{price}</h5>
      </article>
    </li>
  );
}

export default PageItem;
