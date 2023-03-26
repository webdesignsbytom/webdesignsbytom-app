import React from 'react';

function ReviewItem({ review }) {
  const { value, content, image, createdAt, url } = review;

  return (
    <article className='grid bg-white dark:bg-black dark:text-white border-2 text-sm lg:text-base shadow-lg border-black border-solid p-1 rounded'>
      <div className='grid justify-center md:flex md:justify-between'>
        <ul className='flex gap-1 justify-center'>
          {[...Array(value)].map((index) => {
            return (
              <li key={index} className='star'>
                ⭐
              </li>
            );
          })}
        </ul>
        <h4>{createdAt}</h4>
      </div>
      <article className='flex justify-center my-4'>
        <img
          className='w-16 h-16 rounded-full shadow-lg'
          src={image}
          alt='Componay logo for review'
        />
      </article>
      <article className='grid text-center justify-center'>
        <h4 className='text-hyperlink-blue'>
          <a href={url} rel='noreferrer' target='_blank'>
            {url}
          </a>
        </h4>
        <p>{content}</p>
      </article>
    </article>
  );
}

export default ReviewItem;
