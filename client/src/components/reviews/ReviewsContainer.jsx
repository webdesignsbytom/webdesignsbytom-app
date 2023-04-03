import React, { useEffect, useState } from 'react';
import client from '../../utils/axios/client';
// Components
import ReviewItem from './ReviewItem';
// Utils
import LoadingSpinner from '../utils/LoadingSpinner';

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
    <section className='bg-main-colour rounded mt-4 mb-10 lg:my-20 mx-4 lg:mx-10 px-1'>
      <div className='flex justify-center text-center text-xl py-1'>
        <h2 className='max-w-lg my-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 right-0 z-0 w-32 -mr-2 -mt-8 text-yellow-500 lg:w-32 lg:-ml-28 lg:-mt-10'
            >
              <defs>
                <pattern
                  id='bd1bde-4a23-49f7-bf27-ca140852cf21'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='1' />
                </pattern>
              </defs>
              <rect
                fill='url(#bd1bde-4a23-49f7-bf27-ca140852cf21)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative'>Reviews and Recommendations</span>
          </span>{' '}
        </h2>
      </div>
      <section className='grid'>
        {allReviews.length < 1 ? (
          <div className='grid grid-rows-1 justify-center my-8 w-full'>
            <LoadingSpinner height={'h-12 lg:h-24'} width={'w-12 lg:w-24'} />
          </div>
        ) : (
          <ul className='grid grid-cols-2 lg:grid-cols-4 gap-2 lg:justify-center my-4 mx-4'>
            {allReviews.map((review, index) => {
              return <ReviewItem key={index} review={review} />;
            })}
          </ul>
        )}
      </section>
    </section>
  );
}

export default ReviewsContainer;
