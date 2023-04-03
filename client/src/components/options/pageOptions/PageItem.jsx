import React from 'react';
// Components
import AddFavBar from '../../utils/AddFavBar';

function PageItem({ page }) {
  const { type, name, desc, image } = page;

  return (
    <li className='border-2 dark:text-gray-100 border-black border-solid p-1 rounded'>
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
      </article>
    </li>
  );
}

export default PageItem;
