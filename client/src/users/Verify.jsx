import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
// Axios
import { postVerifyEmail } from '../utils/Fetch';
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

    postVerifyEmail(userId, uniqueString, setPage, isFetched)
    
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
