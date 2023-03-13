import React from 'react';
// Icons 
import HeartIcon from '../../../img/heart.svg'

function PageItem({ page }) {
  const { id, type, name, desc, price, image } = page;
  
  return (
    <li className='border-2 border-black border-solid p-1 rounded'>
      <article>
      <div className='flex justify-between'>
          <div>
            <h3>{name}</h3>
            <h4 className='text-sm'>{type}</h4>
          </div>
          <div>
            <img className='w-5 cursor-pointer m-1' src={HeartIcon} alt='favorite icon' />
          </div>
        </div>
        <div>
            <img src={image} alt="page example" />
        </div>
        <p>{desc}</p>
        <h5>{price}</h5>
      </article>
    </li>
  );
}

export default PageItem;
