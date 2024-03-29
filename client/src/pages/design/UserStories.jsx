import React, { useEffect, useState } from 'react';
// Icons
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';
import { TiDelete } from 'react-icons/ti';
// Utils
import { userStoryTemplate } from '../../utils/TemplateUtils';
import { statusResults } from '../../users/utils/utils';

function UserStories({
  openDesign,
  setOpenDesign,
  userStoriesArr,
  setUserStoriesArr,
}) {
  const [newUserStoryForm, setNewUserStoryForm] = useState(userStoryTemplate);
  const [errorDisplay, setErrorDisplay] = useState(statusResults);

  useEffect(() => {
    if (openDesign.id) {
      setNewUserStoryForm({
        ...newUserStoryForm,
        designId: openDesign.id,
      });
    }
  }, [userStoriesArr]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setErrorDisplay({ error: '', active: false });

    setNewUserStoryForm({
      ...newUserStoryForm,
      [name]: value,
    });
  };

  const handleCreate = (event) => {
    event.preventDefault();

    if (openDesign.userStories) {
      const found = openDesign.userStories.find(
        (story) => story.content === newUserStoryForm.content
      );
      if (found) {
        return setErrorDisplay({ error: 'Story already exists', active: true });
      }
    }
    if (openDesign.id) {
      setOpenDesign({
        ...openDesign,
        designId: openDesign.id,
      });
    }

    setUserStoriesArr([...userStoriesArr, newUserStoryForm]);
    setOpenDesign({
      ...openDesign,
      userStories: [...userStoriesArr, newUserStoryForm],
    });

    setNewUserStoryForm(userStoryTemplate);
  };
  
  const deleteUserStory = (story, index) => {
    const newStoryArray = userStoriesArr
    newStoryArray.splice(index, 1)

    setOpenDesign({
      ...openDesign,
      userStories: newStoryArray
    })
  };

  return (
    <>
      <main>
        <div className='text-center py-2 dark:text-gray-100'>
          <h1>UserStories</h1>
        </div>
        <section className='mx-2'>
          <div className='flex justify-between mb-2 dark:text-gray-100'>
            <h2>Create New Story:</h2>
            <div className='group flex align-middle h-full pl-1'>
              <HiOutlineQuestionMarkCircle size={20}
                className='cursor-pointer dark:text-gray-100 no__highlights group transition duration-200 ease-in-out hover:scale-125'
                alt='information'
                data-te-animation-init
              />
              <div className='hidden absolute group-hover:block border-2 border-black border-solid rounded bg-colour-med p-1 text-sm align-middle max-w-[250px] lg:w-[500px] right-2 lg:right-12'>
                A good user story is short description of an ability your app
                will require. For Example:
                <p>
                  'I want a user to be able to make, like and comment on posts'
                </p>
                <p>
                  'I want the app to record user events and display them to
                  admins'.
                </p>
              </div>
            </div>
          </div>
          {/* Story form */}
          <form onSubmit={handleCreate}>
            <div className='mb-2'>
              <textarea
                className='w-full rounded border-2 dark:text-gray-100 dark:bg-black dark:focus:bg-black border-slate-400 border-solid'
                name='content'
                id='user-story'
                rows='2'
                onChange={handleChange}
                value={newUserStoryForm.content}
                placeholder='I want to...'
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
                {errorDisplay.active ? (
                  errorDisplay.error
                ) : (
                  <span>Add Story</span>
                )}
              </button>
            </div>
          </form>
        </section>
        <section className='mx-2'>
          <ul>
            {openDesign.userStories && openDesign.userStories.map((story, index) => {
              return (
                <li key={index} className='flex justify-between items-center dark:text-gray-100'>
                  <h3>{story.content}</h3>
                  <span>
                    <TiDelete size={20}
                      onClick={() => deleteUserStory(story, index)}
                      className='w-5 cursor-pointer dark:text-gray-100'
                      alt='delete user story'
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export default UserStories;
