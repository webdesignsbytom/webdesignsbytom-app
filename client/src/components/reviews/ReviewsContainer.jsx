import React, { useEffect, useState } from 'react';
import client from '../../utils/client';
import ReviewItem from './ReviewItem';

function ReviewsContainer() {
  const [allReviews, setAllReviews] = useState([]);
  
  useEffect(() => {
    client
      .get(`/reviews`)
      .then((res) => {
        setAllReviews(res.data.data.reviews);
      })
      .catch((err) => {
        console.error('Unable to get notifications', err);
      });
  }, []);

  return (
    <section className='bg-main-colour m-2 px-1'>
      <div>
        <h2>Reviews and Recomendations</h2>
      </div>
      <ul className='w-full grid lg:grid-cols-3 gap-2'>
        {allReviews.map((review, index) => {
          return <ReviewItem key={index} review={review} />;
        })}
      </ul>
    </section>
  );
}

export default ReviewsContainer;
