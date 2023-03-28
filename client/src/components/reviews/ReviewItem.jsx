import React from 'react';

function ReviewItem({ review }) {
  const { content, image, url } = review;

  return (
    <article className='grid bg-white dark:bg-black dark:text-white border-2 text-sm lg:text-base shadow-lg border-black border-solid p-1 rounded w-full'>
      <div className='grid justify-center md:flex md:justify-between w-full'>
        <div className='flex gap-1 justify-center w-full'>⭐⭐⭐⭐⭐</div>
      </div>
      <article className='flex justify-center my-4'>
        <a href={url} target='_blank' rel='noreferrer'>
          <img
            className='h-20 w-20 rounded-full shadow-lg'
            src={image}
            alt='Componay logo for review'
          />
        </a>
      </article>
      <article className='grid text-center justify-center '>
        <h4 className='text-hyperlink-blue text-ss md:text-base'>
          <a href={url} rel='noreferrer' target='_blank'>
            {url}
          </a>
        </h4>
        <p className='text-xs md:text-base md:leading-5'>{content}</p>
      </article>
    </article>
  );
}

export default ReviewItem;
