import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/nav/Navbar';
import { SubmitButton } from '../../components/utils/SubmitButtons';
// Context
import { ToggleContext } from '../../context/ToggleContext';
import { statusResults } from '../../users/utils/utils';
// Data
import { projectInitialData } from '../../utils/DataUtils';
import PortfolioCta from '../portfolio/PortfolioCta';

function NewProject() {
  const { toggleNavigation } = useContext(ToggleContext);

  const [newProjectResponseMessage, setNewProjectResponseMessage] =
    useState(statusResults);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  // Form
  const [newProjectForm, setNewProjectForm] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  console.log('navigate', navigate);
  console.log('location', location);

  useEffect(() => {
    setNewProjectForm({
      ...projectInitialData,
      type: location.state,
    });
  }, [location.state]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewProjectForm({
      ...newProjectForm,
      [name]: value,
    });
  };

  return (
    <div className='bg-white dark:bg-black lg:max-h-screen lg:overflow-hidden'>
      <Navbar />
      {!toggleNavigation && (
        <>
          <section className='w-full text-center my-2'>
            <h1 className='text-xl'>Project Overview</h1>
            <p>
              Fill in the form below to send me a basic copy of the site and we
              can save time.
            </p>
            <p>Or just contact me directly</p>
            <PortfolioCta />
          </section>
          <main className='mx-2'>
            <section>
              <form action=''>
                <article className='my-2'>
                  <h3 className='text-xl capitalize'>
                    <span>Type of site:</span>
                    <span> {newProjectForm.type}</span>
                  </h3>
                  <h3 className='text-xl capitalize'>
                    <span>Domain Name:</span>
                    <span> {newProjectForm.domain}</span>
                  </h3>
                  <h3 className='text-xl capitalize'>
                    <span>Number of Pages:</span>
                    <span> {newProjectForm.numPages}</span>
                  </h3>
                  <h3 className='text-xl capitalize'>
                    <span>Owner Name:</span>
                    <span> {newProjectForm.owner}</span>
                  </h3>
                </article>
                {/* <!-- Project Name input --> */}
                <section>
                  <div className=''>
                    <input
                      type='text'
                      name='name'
                      className='standard__inputs'
                      placeholder='Project Name'
                      onChange={handleChange}
                    />
                    <p className='h-4'></p>
                  </div>
                  {/* <!-- Domain input --> */}
                  <div className=''>
                    <input
                      type='text'
                      name='domain'
                      className='standard__inputs'
                      placeholder='Domain Name'
                      onChange={handleChange}
                    />
                    <p className='h-4'></p>
                  </div>
                  {/* <!-- Num Pages input --> */}
                  <div className=''>
                    <input
                      type='number'
                      name='numPages'
                      className='standard__inputs'
                      placeholder='Number of Pages'
                      onChange={handleChange}
                    />
                    <p className='h-4'></p>
                  </div>
                  {/* <!-- Owner Name --> */}
                  <div className=''>
                    <input
                      type='text'
                      name='owner'
                      className='standard__inputs'
                      placeholder='Owner Name'
                      onChange={handleChange}
                    />
                    <p className='h-4'></p>
                  </div>
                  {/* <!-- Owner Name --> */}
                  <div className=''>
                    <input
                      type='data'
                      name='dueDate'
                      className='standard__inputs'
                      placeholder='Due Date'
                      onChange={handleChange}
                    />
                    <p className='h-4'></p>
                  </div>

                  {/* <!-- Submit button --> */}
                  <div className='mt-2'>
                    <div className='mb-2'>
                      <SubmitButton
                        loadingAnimation={loadingAnimation}
                        mainButtonContent={mainButtonContent}
                        responseMessage={newProjectResponseMessage}
                        buttonMessage='Submit Project'
                        spinnerHeight='h-5'
                        spinnerWidth='w-5'
                      />
                    </div>
                  </div>
                </section>
              </form>
            </section>
          </main>
        </>
      )}
    </div>
  );
}

export default NewProject;
