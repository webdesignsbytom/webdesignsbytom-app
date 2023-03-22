import React from 'react';
// Icons
import HeartIcon from '../../../assets/img/heart.svg';
import PlusIconReg from '../../../assets/img/plusIconReg.svg';
import AddFavBar from '../../utils/AddFavBar';

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
          <AddFavBar />
        </div>

        <img src={image} alt={`Page ${name} display`} />

        <p>{desc}</p>
        <h5>{price}</h5>
      </article>
    </li>
  );
}

export default PageItem;
