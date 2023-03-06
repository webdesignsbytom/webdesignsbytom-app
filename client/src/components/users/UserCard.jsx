import React from 'react';

function UserCard({ user }) {
  const { email, firstName, lastName, country, profileImage } = user;

  return (
    <>
      <section className='grid border-2 border-black border-solid rounded-md md:grid-flow-col lg:w-full'>
        <div className='flex justify-center p-4'>
          <img
            className='rounded-full h-32 w-32 shadow-xl border-2 border-slate-200 border-solid object-fill'
            src={profileImage}
            alt='Profile'
          />
        </div>
        <article className='grid justify-center p-4'>
          <div>
            <p>{email}</p>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{country}</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default UserCard;
