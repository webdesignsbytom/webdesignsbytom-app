import React, { useEffect, useState } from 'react';
import client from '../../../utils/client';
// Components
import LoadingSpinner from '../../utils/LoadingSpinner';
import PageItem from './PageItem';

function PageOptions() {
  const [allPages, setAllPages] = useState([]);

  console.log('allPages', allPages);

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
      <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 gap-2'>
        {allPages.length < 1 ? (
          <div className='grid grid-rows-1'>
            <LoadingSpinner height={'12'} width={'12'} />
          </div>
        ) : (
          allPages.map((page, index) => {
            return <PageItem page={page} key={index} />;
          })
        )}
      </ul>
    </section>
  );
}

export default PageOptions;
