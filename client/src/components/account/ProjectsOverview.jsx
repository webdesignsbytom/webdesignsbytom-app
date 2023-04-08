import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectListItem from '../projects/ProjectListItem';

function ProjectsOverview({ userProjects }) {
  let navigate = useNavigate();

  const buyProject = () => {
    navigate('/new-project', { replace: true });
  };

  const openProject = (project) => {
    console.log('xx');
    navigate(`../user/projects/${project.name}`, { state: project });
  };

  return (
    <section>
      <div className='mb-2 dark:text-gray-100'>
        <h2>Projects</h2>
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

      <section className='px-1'>
        <div className='mb-4'>
          <h3 className='text-xl underline'>Open projects</h3>
        </div>
        {userProjects.length === 0 && (
          <article className='dark:text-gray-100'>
            Nothing to display - No Saved Projects
          </article>
        )}

        {userProjects.length > 0 && (
          <ul className='w-full dark:text-gray-100 outline outline-2 outline-black dark:outline-gray-400 [&>*:nth-child(odd)]:bg-gray-200 [&>*:nth-child(even)]:bg-blue-100'>
            {userProjects.map((project, index) => {
              return (
                <ProjectListItem
                  openProject={openProject}
                  key={index}
                  project={project}
                />
              );
            })}
          </ul>
        )}
      </section>
    </section>
  );
}

export default ProjectsOverview;
