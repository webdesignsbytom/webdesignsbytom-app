import React, { useEffect, useState } from 'react';
import client from '../../utils/client';
import LoadingSpinner from '../utils/LoadingSpinner';
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
      <div className='text-center text-xl py-1'>
        <h2>Reviews and Recomendations</h2>
      </div>
      <section className='grid'>
        {allReviews.length < 1 ? (
          <div className='grid grid-rows-1 justify-center my-8 w-full'>
            <LoadingSpinner height={'h-12 lg:h-24'} width={'w-12 lg:w-24'} />
          </div>
        ) : (
          <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:justify-center'>
            {allReviews.map((review, index) => {
              if (index < 3) {
                return <ReviewItem key={index} review={review} />;
              } else {
                return
              }
            })}
          </ul>
        )}
      </section>
    </section>
  );
}

export default ReviewsContainer;
