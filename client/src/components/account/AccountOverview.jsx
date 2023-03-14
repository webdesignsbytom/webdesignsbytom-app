import React, { useContext, useState } from 'react';
// Components
import Profile from '../users/Profile';
import client from '../../utils/client';
// Context
import { UserContext } from '../../context/UserContext';

function AccountOverview() {
  const { user } = useContext(UserContext);
  const [updateAnimation, setUpdateAnimation] = useState(false);
  const [deleteLoadingAnimation, setDeleteLoadingAnimation] = useState(false);
  const [userUpdateForm, setUserUpdateForm] = useState({});

  const handleUpdateUser = (event) => {
    event.preventDefault()
    setUpdateAnimation(true)
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserUpdateForm({
      ...userUpdateForm,
      [name]: value,
    });
  };

  const deleteUser = (event) => {
    event.preventDefault();
    setDeleteLoadingAnimation(true)

    client
      .delete(`/users/delete-user/${user.id}`)
      .then((res) => {
        console.log('res', res.data);
        setDeleteLoadingAnimation(false)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Profile
      handleChange={handleChange}
      handleUpdateUser={handleUpdateUser}
      deleteUser={deleteUser}
      updateAnimation={updateAnimation}
      deleteLoadingAnimation={deleteLoadingAnimation}
    />
  );
}

export default AccountOverview;
