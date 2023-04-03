import React, { useEffect, useState } from 'react';
import client from '../../../utils/axios/client';
// Components
import LoadingSpinner from '../../utils/LoadingSpinner';
import ComponentItem from './ComponentItem';

function CompenentOptions({ savedComponents, setSavedComponents }) {
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
