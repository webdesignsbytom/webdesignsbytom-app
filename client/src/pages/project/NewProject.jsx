import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Components
import Navbar from '../../components/nav/Navbar';
import PortfolioCta from '../portfolio/PortfolioCta';
// Context
import { ToggleContext } from '../../context/ToggleContext';
// Data
import { projectInitialData } from '../../utils/DataUtils';
import client from '../../utils/axios/client';
import { UserContext } from '../../context/UserContext';

function NewProject() {
  const { toggleNavigation } = useContext(ToggleContext);
  const { user } = useContext(UserContext);
  // Form
  const [newProjectForm, setNewProjectForm] = useState({});

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    setNewProjectForm({
      ...projectInitialData,
      type: location.state,
      userId: user.id,
    });
  }, [location.state]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewProjectForm({
      ...newProjectForm,
      [name]: value,
    });
  };

  const projectOverviewPage = () => {
    navigate(`/user/projects/${newProjectForm.name}`, { replace: true });
  }

  const startNewProject = (event) => {
    event.preventDefault();
    console.log('start');

    client
      .post(`/projects/create/${newProjectForm.name}`, newProjectForm, false)
      .then((res) => {
        console.log('res', res);
      })
      .then(() => projectOverviewPage())
      .catch((err) => {
        console.error('Unable to start new project', err);
      });
  };

  return (
    <div className='bg-white dark:bg-black min-h-screen dark:text-gray-100 lg:max-h-screen lg:overflow-hidden'>
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
                  <div className='text-center md:text-left font-semibold text-2xl mb-2'>
                    <h2>Website Data</h2>
                  </div>
                  <section className='grid gap-2'>
                    <h3 className='text-base md:text-xl capitalize'>
                      <span>Type of site:</span>
                      <span> {newProjectForm.type}</span>
                    </h3>
                    <h3 className='text-base md:text-xl capitalize'>
                      <span>Project Name:</span>
                      <span> {newProjectForm.name}</span>
                    </h3>
                    <h3 className='text-base md:text-xl capitalize'>
                      <span>Domain Name:</span>
                      <span> {newProjectForm.domain}</span>
                    </h3>
                    <h3 className='text-base md:text-xl capitalize'>
                      <span>Owner Name:</span>
                      <span> {newProjectForm.owner}</span>
                    </h3>
                    <h3 className='text-base md:text-xl capitalize'>
                      <span>Number of Pages:</span>
                      <span> {newProjectForm.numPages}</span>
                    </h3>
                    <h3 className='text-base md:text-xl capitalize'>
                      <span>Budget:</span>
                      <span> £ {newProjectForm.budget}</span>
                    </h3>
                    <h3 className='text-base md:text-xl capitalize'>
                      <span>Due Date:</span>
                      <span> {newProjectForm.dueDate}</span>
                    </h3>
                    <h3 className='text-base md:text-xl grid capitalize w-full max-w-full'>
                      <span>Mission Statement:</span>
                      <span className='max-w-full break-words overflow-x-hidden'>
                        {newProjectForm.missionStatement}
                      </span>
                    </h3>
                  </section>
                </article>
                {/* <!-- Project Name input --> */}
                <section>
                  <section className='grid md:flex'>
                    <div className='w-full'>
                      <input
                        type='text'
                        name='name'
                        className='standard__inputs'
                        placeholder='Project Name'
                        onChange={handleChange}
                        required
                      />
                      <p className='h-4'></p>
                    </div>
                    <div className='w-full'>
                      <select id='type' name='type' onChange={handleChange} className='standard__inputs'>
                        <option defaultValue>Choose a type</option>
                        <option value='BASIC'>BASIC</option>
                        <option value='SHOP'>SHOP</option>
                        <option value='FULLSTACK'>FULLSTACK</option>
                        <option value='OTHER'>OTHER</option>
                        <option value='CUSTOM'>CUSTOM</option>
                        <option value='PAGE'>PAGE</option>
                      </select>
                      <p className='h-4'></p>
                    </div>
                  </section>
                  {/* <!-- Domain input --> */}
                  <section className='md:flex w-full'>
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
                  <section className='grid lg:flex'>
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
                  <div className='mb-1 w-full max-w-full'>
                    <textarea
                      name='missionStatement'
                      id='missionStatement'
                      placeholder='Mission Statement - define the goals of your website.'
                      className='overflow-y-scroll max-w-full break-words overflow-x-hidden text resize-none scroll-smooth text-xl textbox__inputs'
                      rows='4'
                      onChange={handleChange}
                    ></textarea>
                  </div>
                  {/* <!-- Submit button --> */}
                  <div className='mt-2'>
                    <div className='mb-2'>
                      <button
                        onClick={startNewProject}
                        type='submit'
                        className='submit__button'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        Submit Project
                      </button>
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
