import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectsOverview({ userProjects }) {
  let navigate = useNavigate();

  const buyProject = () => {
    navigate('/new-project', { replace: true });
  };

  return (
    <section>
      <div className='mb-2 dark:text-gray-100'>
        <h2>Open Projects</h2>
      </div>
      <section className='mb-2'>
        <button
          onClick={buyProject}
          type='submit'
          className='submit__button'
          data-mdb-ripple='true'
          data-mdb-ripple-color='light'
        >
          Start New Project
        </button>
      </section>

      {userProjects.length === 0 && (
        <article className='dark:text-gray-100'>Nothing to display - No Saved Projects</article>
      )}

      {userProjects.length > 0 && (
        <ul className='w-full dark:text-gray-100'>
          {userProjects.map((project, index) => {
            return <li key={index}>{project.name}</li>;
          })}
        </ul>
      )}
    </section>
  );
}

export default ProjectsOverview;
