import React from 'react';

function ReviewItem({ review }) {
  const { value, content, image, createdAt } = review;

  return (
    <article className='flex border-2 border-black border-solid'>
      <h2>{createdAt}</h2>
      <img src={image} alt="Componay logo for review" />
      <h2>{value}</h2>
      <h2>{content}</h2>
    </article>
  );
}

export default ReviewItem;
