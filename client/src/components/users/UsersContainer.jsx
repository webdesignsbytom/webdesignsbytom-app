import React from 'react'
import UserItem from './UserItem';

function UsersContainer({ users }) {
    return (
        <>
          <ul>
            {users.map((user, index) => {
              return <UserItem user={user} key={index} />;
            })}
          </ul>
        </>
      );
}

export default UsersContainer