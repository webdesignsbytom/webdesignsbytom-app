import React from 'react';

function UserCard({ user }) {
  const { email, firstName, lastName, country, profileImage } = user;

  return (
    <>
      <section className='grid border-2 border-black border-solid rounded-md sm:grid-cols-reg sm:w-[500px] sm:mx-auto lg:w-full'>
        <div className='flex justify-center p-4 sm:items-center'>
          <img
            className='rounded-full h-32 w-32 shadow-xl border-2 border-slate-200 border-solid object-fill'
            src={profileImage}
            alt='Profile'
          />
        </div>
        <article className='grid justify-left p-4'>
          <div className='flex'>
            <h4>Email: </h4> 
            <p>{email}</p>
          </div>
          <div className='flex'>
            <h4>First Name: </h4>
            <p>{firstName}</p>
          </div>
          <div className='flex'>
            <h4>Last Name: </h4>
            <p>{lastName}</p>
          </div>
          <div className='flex'>
            <h4>Country: </h4>
            <p>{country}</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default UserCard;
