import React, { useEffect, useState } from 'react';
import client from '../../../utils/axios/client';
// Components
import LoadingSpinner from '../../utils/LoadingSpinner';
import PageItem from './PageItem';

function PageOptions({
  savedPages,
  setSavedPages,
  favoritePages,
  setFavoritePages,
}) {
  const [allPages, setAllPages] = useState([]);

  useEffect(() => {
    client
      .get(`/pages`)
      .then((res) => {
        console.log('res', res.data);
        setAllPages(res.data.data.pages);
      })
      .catch((err) => console.error('Unable to get pages', err.response));
  }, []);

  return (
    <section>
      <section className='flex gap-2 p-1 border-b-2 border-solid border-main-colour'>
        <button className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'>
          All
        </button>
        <button className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'>
          Added
        </button>
        <button className='bg-main-colour grid justify-center p-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-colour-light hover:shadow-lg focus:bg-colour-med focus:shadow-lg focus:outline-none focus:ring-0 active:bg-colour-dark active:shadow-lg transition duration-150 ease-in-out w-full'>
          Favourites
        </button>
      </section>
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2'>
        {allPages.length < 1 ? (
          <div className='grid grid-rows-1'>
            <LoadingSpinner height={'12'} width={'12'} />
          </div>
        ) : (
          allPages.map((page, index) => {
            return (
              <PageItem
                savedPages={savedPages}
                setSavedPages={setSavedPages}
                favoritePages={favoritePages}
                setFavoritePages={setFavoritePages}
                page={page}
                key={index}
              />
            );
          })
        )}
      </ul>
    </section>
  );
}

export default PageOptions;
