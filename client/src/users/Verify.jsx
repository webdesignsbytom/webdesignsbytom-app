import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Axios
import client from '../utils/client';
// Components
import Navbar from '../components/nav/Navbar';

function Verify() {
  const { userId, uniqueString } = useParams();
  const [page, setPage] = useState({
    status: '',
    title: '',
    message: '',
  });

  useEffect(() => {
    let isFetched = false;

    client
      .get(`/users/verify/${userId}/${uniqueString}`)
      .then((res) => {
        setPage({
          status: res.data.status,
          title: 'Account verified successfully',
          email: res.data.user.email,
        });
      })
      .catch((res) => {
        if (!isFetched) {
          const data = res.response.data;
          setPage({
            status: data.status,
            title: 'An Error Occurred',
            message: data.message,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });

    return () => {
      isFetched = true;
    };
  }, [uniqueString, userId]);

  return (
    <>
      <Navbar />
      <div>Verify</div>
      <main className='submitted'>
        <div className='container'>
          <div className='titles'>
            <h2 className='verify-title'>{page.title}</h2>

            {page.status === 'fail' && (
              <p className='verify-message'>{page.message}</p>
            )}

            {page.status === 'success' && (
              <Link to='/account' replace={true}>
                <p>Click here to visit your personal page</p>
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Verify;
