import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Axios

function EnterNewPassword() {
  const { userId, uniqueString } = useParams();
  console.log('userId', userId);
  console.log('uniqueString', uniqueString);
  const [page, setPage] = useState({
    status: '',
    title: '',
    message: '',
    username: '',
  });
  return (
    <>
      <div>EnterNewPassword</div>
    </>
  );
}

export default EnterNewPassword;
