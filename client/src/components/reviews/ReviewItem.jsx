import React from 'react';

function ReviewItem({ review }) {
  const { value, content, image, createdAt } = review;

  return (
    <article className='grid border-2 text-sm lg:text-base shadow-lg border-black border-solid p-1 rounded'>
      <div className='grid justify-center md:flex md:justify-between'>
        <ul className='flex gap-1 justify-center'>
          {[...Array(value)].map((index) => {
            return <li key={index} className='star'>⭐</li>;
          })}
        </ul>
        <h4>{createdAt}</h4>
      </div>
      <article className='flex justify-center my-4'>
        <img
          className='w-16 h-16 rounded-full'
          src={image}
          alt='Componay logo for review'
        />
      </article>
      <article>
        <p>{content}</p>
      </article>
    </article>
  );
}

export default ReviewItem;
