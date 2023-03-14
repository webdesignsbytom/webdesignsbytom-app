import React from 'react';

function ReviewItem({ review }) {
  const { value, content, image, createdAt } = review;

  return (
    <article className='grid border-2 text-sm lg:text-base border-black border-solid p-1 rounded-sm'>
      <div className='flex justify-between'>
        <h2>{value}</h2>
        <h2>{createdAt}</h2>
      </div>
      <div>
        <img className='w-8 h-8 rounded-full' src={image} alt='Componay logo for review' />
      </div>
      <div>
        <p>{content}</p>
      </div>
    </article>
  );
}

export default ReviewItem;
