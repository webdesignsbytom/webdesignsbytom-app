import React from 'react';

function UserCard({ user }) {
  const { email, firstName, lastName, country, profileImage } = user;
  return (
    <>
      <section className='mx-2 border-2 border-black border-solid rounded-md p-2'>
        <div className='flex justify-center'>
          <img
            className='rounded-full h-32 w-32'
            src={profileImage}
            alt='Profile'
          />
        </div>
        <article>
          <p>{email}</p>
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{country}</p>
        </article>
      </section>
    </>
  );
}

export default UserCard;
