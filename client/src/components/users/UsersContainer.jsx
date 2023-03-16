import React from 'react'
import UserItem from './UserItem';

function UsersContainer({ users }) {
    return (
        <>
          <ul className='grid grid-rows-one lg:max-h-[500px] h-fit overflow-x-hidden overflow-scroll w-full'>
            {users.map((user, index) => {
              return <UserItem user={user} key={index} />;
            })}
          </ul>
        </>
      );
}

export default UsersContainer