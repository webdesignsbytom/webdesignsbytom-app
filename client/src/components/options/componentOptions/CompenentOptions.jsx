import React, { useEffect, useState } from 'react';
import client from '../../../utils/client';
import LoadingSpinner from '../../LoadingSpinner';
import ComponentItem from './ComponentItem';

function CompenentOptions() {
  const [allComponents, setAllComponents] = useState([]);
  console.log('allComponents', allComponents);

  useEffect(() => {
    client
      .get(`/components`)
      .then((res) => {
        console.log('res', res.data);
        setAllComponents(res.data.data.components);
      })
      .catch((err) => console.error('Unable to get designs', err.response));
  }, []);
  return (
    <section>
      <ul className='grid lg:grid-cols-3 p-2 gap-2'>
        {allComponents.length < 1 ? (
          <div className='grid grid-rows-1'>
            <LoadingSpinner height={'12'} width={'12'} />
          </div>
        ) : (
          allComponents.map((component, index) => {
            return <ComponentItem component={component} key={index} />;
          })
        )}
      </ul>
    </section>
  );
}

export default CompenentOptions;
