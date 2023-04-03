import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import PortfolioCta from '../portfolio/PortfolioCta';
import { SubmitButton } from '../../components/utils/SubmitButtons';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Data
import { projectInitialData } from '../../utils/DataUtils';
import { statusResults } from '../../users/utils/utils';

function NewProject() {
  const { toggleNavigation } = useContext(ToggleContext);

  const [newProjectResponseMessage, setNewProjectResponseMessage] =
    useState(statusResults);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  // Form
  const [newProjectForm, setNewProjectForm] = useState({});

  const location = useLocation();

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
            <h1 className='text-xl font-semibold my-2'>Project Overview</h1>
            <p>
              Fill in the form below to send me a basic copy of the site and we
              can save time. All categories are optional.
            </p>
            <p className='mt-2'>Or just contact me directly.</p>
            <PortfolioCta />
          </section>
          <main className='mx-2'>
            <section>
              <form className='grid md:grid-cols-2 mx-2 md:mx-8'>
                <article className='my-2'>
                  <div className='text-left font-semibold text-2xl mb-2'>
                    <h2>Website Data</h2>
                  </div>
                  <section className='grid gap-2'>
                    <h3 className='text-xl capitalize'>
                      <span>Type of site:</span>
                      <span> {newProjectForm.type}</span>
                    </h3>
                    <h3 className='text-xl capitalize'>
                      <span>Domain Name:</span>
                      <span> {newProjectForm.domain}</span>
                    </h3>
                    <h3 className='text-xl capitalize'>
                      <span>Owner Name:</span>
                      <span> {newProjectForm.owner}</span>
                    </h3>
                    <h3 className='text-xl capitalize'>
                      <span>Number of Pages:</span>
                      <span> {newProjectForm.numPages}</span>
                    </h3>
                    <h3 className='text-xl capitalize'>
                      <span>Budget:</span>
                      <span> £ {newProjectForm.budget}</span>
                    </h3>
                    <h3 className='text-xl capitalize'>
                      <span>Due Date:</span>
                      <span> {newProjectForm.dueDate}</span>
                    </h3>
                    <h3 className='text-xl capitalize'>
                      <span>Mission Statement:</span>
                      <span> {newProjectForm.missionStatement}</span>
                    </h3>
                  </section>
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
                  <section className='flex w-full'>
                    <div className='w-full'>
                      <input
                        type='text'
                        name='domain'
                        className='standard__inputs'
                        placeholder='Domain Name'
                        onChange={handleChange}
                      />
                      <p className='h-4'></p>
                    </div>
                    {/* <!-- Owner Name --> */}
                    <div className='w-full'>
                      <input
                        type='text'
                        name='owner'
                        className='standard__inputs'
                        placeholder='Owner Name'
                        onChange={handleChange}
                      />
                      <p className='h-4'></p>
                    </div>
                  </section>
                  <section className='flex'>
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
                    {/* <!-- Budget input --> */}
                    <div className=''>
                      <input
                        type='number'
                        name='budget'
                        className='standard__inputs'
                        placeholder='£ Budget'
                        onChange={handleChange}
                      />
                      <p className='h-4'></p>
                    </div>
                    {/* <!-- Due date Name --> */}
                    <div className=''>
                      <input
                        type='date'
                        name='dueDate'
                        className='standard__inputs'
                        placeholder='Due Date'
                        onChange={handleChange}
                      />
                      <p className='h-4'></p>
                    </div>
                  </section>
                  {/* Message input */}
                  <div className='mb-1'>
                    <textarea
                      name='missionStatement'
                      id='missionStatement'
                      placeholder='Mission Statement - define the goals of your website.'
                      className='overflow-y-scroll resize-none scroll-smooth text-xl textbox__inputs'
                      rows='4'
                      onChange={handleChange}
                    ></textarea>
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
