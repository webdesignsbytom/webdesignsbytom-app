import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import DesignElement from './DesignElement';
import OptionsNav from './OptionsNav';
import { UserContext } from '../../context/UserContext';
import client from '../../utils/client';

function Design() {
  const { user } = useContext(UserContext)

  const [displayElement, setDisplayElement] = useState('palette');
  const [savedDesigns, setSavedDesigns] = useState([])

  console.log('DESIGN', user);

  useEffect(() => {
    client
    .get(`/designs/user-designs/${user.id}`)
    .then((res) => {
      console.log('res', res.data)
      setSavedDesigns(res.data.data.designs);
    })
    .catch((err) => console.error('Unable to get unseen notifications', err.response));
  }, [])

  return (
    <div className='max-h-screen overflow-hidden'>
      <Navbar />
      <section className='grid grid-rows-reg lg:grid-rows-none lg:grid-cols-reg min-h-[calc(100vh-64px)]'>
        {/* Side bar */}
        <OptionsNav
          displayElement={displayElement}
          setDisplayElement={setDisplayElement}
        />
        {/* Preview section */}
        <DesignElement displayElement={displayElement} />
      </section>
    </div>
  );
}

export default Design;
