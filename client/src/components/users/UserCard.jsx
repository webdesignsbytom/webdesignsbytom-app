import React from 'react';

function UserCard({ user }) {
  const { email, firstName, lastName, country, profileImage } = user;

  return (
    <>
      <section className='grid border-2 border-black dark:border-gray-400 dark:text-gray-100 border-solid rounded-md sm:grid-cols-reg sm:w-[500px] sm:mx-auto lg:w-full'>
        <section className='flex justify-center p-4 sm:items-center mx-12'>
          <img
            className='rounded-full h-32 w-32 shadow-xl border-2 border-slate-200 border-solid object-fill'
            src={profileImage}
            alt='Profile'
          />
        </section>
        <article className='grid w-full gap-2 mx-auto lg:justify-left p-4 h-min my-auto'>
          <div className='flex justify-between'>
            <h4>Email: </h4> 
            <p className='ml-2'>{email}</p>
          </div>
          <div className='flex justify-between'>
            <h4>First Name: </h4>
            <p className='ml-2'>{firstName}</p>
          </div>
          <div className='flex justify-between'>
            <h4>Last Name: </h4>
            <p className='ml-2'>{lastName}</p>
          </div>
          <div className='flex justify-between '>
            <h4>Country: </h4>
            <p className='ml-2'>{country}</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default UserCard;
