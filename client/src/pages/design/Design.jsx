import React, { useContext, useEffect, useState } from 'react';
// Components
import Navbar from '../../components/nav/Navbar';
import DesignElement from './DesignElement';
import OptionsNav from './OptionsNav';
// Context
import { UserContext } from '../../context/UserContext';
import { ToggleContext } from '../../context/ToggleContext';
// Data
import client from '../../utils/axios/client';
// Utils
import { designTemplate } from '../../utils/TemplateUtils';

function Design() {
  const { user } = useContext(UserContext);
  const { toggleNavigation } = useContext(ToggleContext);

  const [displayElement, setDisplayElement] = useState('nav');
  const [savedDesigns, setSavedDesigns] = useState([]);
  const [openDesign, setOpenDesign] = useState(designTemplate);

  useEffect(() => {
    if (user.id) {
      client
        .get(`/designs/user-designs/${user.id}`)
        .then((res) => {
          if (res.data.data.designs.length === 0) {
            return;
          } else {
            setSavedDesigns(res.data.data.designs);
            setOpenDesign(res.data.data.designs[0]);
          }
        })
        .catch((err) => console.error('Unable to get designs x', err.response));
    }
  }, [user.id]);

  const deleteSavedDesign = (design) => {
    console.log('delte design', design.id);
    client
      .delete(`/designs/${user.id}/delete/${design.id}`)
      .then((res) => {
        setSavedDesigns(res.data.data.newDesigns);
        alert(`Deleted design ${design.name}`);
      })
      .catch((err) => {
        console.error('Unable to delete design', err);
      });
  };

  const deleteOpenDesign = (openDesign) => {
    console.log('delte design', openDesign.id);
    client
      .delete(`/designs/${user.id}/delete/${openDesign.id}`)
      .then((res) => {
        setSavedDesigns(res.data.data.newDesigns);
        alert(`Deleted design ${openDesign.name}`);
      })
      .catch((err) => {
        console.error('Unable to delete design', err);
      });
  };

  return (
    <div className='min-h-screen lg:left-0 overflow-hidden lg:overflow-hidden lg:max-h-screen'>
      <Navbar />
      {!toggleNavigation && (
        <section className='grid grid-rows-reg lg:grid-rows-none lg:grid-cols-one min-h-[calc(100vh-64px)] lg:border-t-2 lg:border-solid lg:border-black'>
          {/* Side bar */}
          <OptionsNav
            displayElement={displayElement}
            setDisplayElement={setDisplayElement}
            savedDesigns={savedDesigns}
            openDesign={openDesign}
            setOpenDesign={setOpenDesign}
            deleteSavedDesign={deleteSavedDesign}
          />
          {/* Preview section */}
          <DesignElement
            displayElement={displayElement}
            setDisplayElement={setDisplayElement}
            savedDesigns={savedDesigns}
            openDesign={openDesign}
            setSavedDesigns={setSavedDesigns}
            setOpenDesign={setOpenDesign}
            deleteSavedDesign={deleteSavedDesign}
            deleteOpenDesign={deleteOpenDesign}
          />
        </section>
      )}
    </div>
  );
}

export default Design;
