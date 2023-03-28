import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/nav/Navbar';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Data
import { projectInitialData } from '../../utils/DataUtils';

function NewProject() {
  const { toggleNavigation } = useContext(ToggleContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [projectSetUpFormData, setProjectSetUpFormData] =
    useState(projectInitialData);

  console.log('navigate', navigate);
  console.log('location', location);
  console.log('projectSetUpFormData', projectSetUpFormData);

  useEffect(() => {
    setProjectSetUpFormData({
      ...projectInitialData,
      type: location.state,
    });
  }, [location.state]);

  return (
    <div className='bg-white dark:bg-black lg:max-h-screen lg:overflow-hidden'>
      <Navbar />
      {!toggleNavigation && (
        <>
          <section>
            <h1>Project Overview</h1>
          </section>
          <main>
            <section>
              <h3 className='text-xl capitalize'>
                <span>Type of site:</span>
                <span> {projectSetUpFormData.type}</span>
              </h3>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default NewProject;
