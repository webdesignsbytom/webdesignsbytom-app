import React, { useContext, useState } from 'react';
// Context
import { UserContext } from '../../context/UserContext';
// Icons
import QMark from '../../img/questionMark.svg';

function UserStories() {
  const { user } = useContext(UserContext)
  const [newUserStory, setNewUserStory] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewUserStory({
      ...newUserStory,
      [name]: value,
    });
  };

  const handleCreate = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <main>
        <div className='text-center py-2'>
          <h1>UserStories</h1>
        </div>
        <section className='mx-2'>
          <div className='flex justify-between mb-2'>
            <h2>Create New Story:</h2>
            <div className='group flex align-middle h-full pl-1'>
              <img
                src={QMark}
                className='w-6 cursor-pointer group transition duration-200 ease-in-out hover:scale-125'
                alt='information'
                data-te-animation-init
              />
              <div className='hidden absolute group-hover:grid border-2 border-black border-solid rounded bg-colour-med p-1 text-sm align-middle max-w-[150px]'>
                A good user story is short description of an ability your app
                will require.
                <div>
                  <h5>For Example: </h5>
                  <p>
                    I want a user to be able to make, like and comment on posts
                  </p>
                  <p>
                    I want the app to record user events and display them to
                    admins
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleCreate}>
            <div className='mb-2'>
              <textarea
                className='w-full rounded border-2 border-slate-400 border-solid'
                name='user-story'
                id='user-story'
                rows='2'
                onChange={handleChange}
              ></textarea>
            </div>
            {/* <!-- Submit button --> */}
            <div className='mb-2'>
              <button
                type='submit'
                className='submit__button'
                data-mdb-ripple='true'
                data-mdb-ripple-color='light'
              >
                Sign in
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default UserStories;
