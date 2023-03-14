import React, { useEffect, useState } from 'react';
import client from '../../../utils/client';
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
      .catch((err) => console.error('Unable to get designs', err.response));
  }, []);
  
  return (
    <section>
      <ul className='grid lg:grid-cols-3 p-2 gap-2'>
        {allPages.map((page, index) => {
          return <PageItem page={page} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default PageOptions;
