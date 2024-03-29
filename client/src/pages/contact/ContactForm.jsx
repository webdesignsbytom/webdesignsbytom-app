import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoadingSpinner from '../../components/utils/LoadingSpinner';
// Components
import SmallCountrySelect from '../../users/utils/SmallCountrySelect';
import { statusResults } from '../../users/utils/utils';
import client from '../../utils/axios/client';
// Utils
import { contactFormTemplate } from '../../utils/TemplateUtils';

function ContactForm() {
  const [contactSuccessMessage, setContactSuccessMessage] =
    useState(statusResults);
  const [contactErrorMessage, setContactErrorMessage] = useState(statusResults);
  const [loadingAnimation, setLoadingAnimation] = useState(false);
  const [mainButtonContent, setMainButtonContent] = useState(true);
  const [formData, setFormData] = useState(contactFormTemplate);

  let location = useLocation()

  useEffect(() => {
    if (location.state) {
      setFormData({
        ...formData,
        email: location.state
      })
    }
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'email') {
      setContactErrorMessage({
        status: false,
        message: '',
      });
      setMainButtonContent(true);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMainButtonContent(false);
    setLoadingAnimation(true);

    client
      .post(`/contacts/create`, formData, false)
      .then((res) => {
        console.log('res', res.data);
        setLoadingAnimation(false);
        setContactSuccessMessage({
          status: true,
          message: 'SUCCESS',
        });
      })
      .catch((err) => {
        setLoadingAnimation(false);
        setContactErrorMessage({
          status: true,
          message: err.response.data.data.contact,
        });
        console.error(
          'Unable to send contact message',
          err.response.data.data.contact
        );
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='lg:w-full lg:my-auto dark:text-gray-100 lg:px-2'>
        {/* <!-- Email input --> */}
        <div className='mb-1'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            name='email'
            className='contact__inputs'
            placeholder='Email address'
            onChange={handleChange}
            required
          />
        </div>
        {/* <!-- Phone input --> */}
        <div className='mb-1'>
          <label className='flex justify-between' htmlFor='phone'>
            <p>Phone:</p>
            <p>* optional</p>
          </label>
          <input
            type='tel'
            name='phone'
            className='contact__inputs'
            placeholder='Phone Number'
            onChange={handleChange}
          />
        </div>
        {/* <!-- FirstName input --> */}
        <div className='mb-1'>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            name='firstName'
            className='contact__inputs'
            placeholder='First Name'
            onChange={handleChange}
            required
          />
        </div>
        {/* <!-- LastName input --> */}
        <div className='mb-1'>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            className='contact__inputs'
            placeholder='LastName'
            onChange={handleChange}
            required
          />
        </div>
        {/* Country input */}
        <div className='mb-1'>
          <label htmlFor='country'>Country</label>
          <SmallCountrySelect handleChange={handleChange} />
        </div>

        {/* Message input */}
        <div className='mb-1'>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            id='message'
            className='overflow-y-scroll resize-none scroll-smooth textbox__inputs'
            rows='4'
            onChange={handleChange}
          ></textarea>
        </div>

        {/* <!-- Submit button --> */}
        <div className='my-2'>
          <button
            type='submit'
            className='submit__button'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
          >
            {loadingAnimation ? (
              <div className='flex justify-center'>
                <LoadingSpinner height={'h-5 lg:h-12'} width={'w-5 lg:w-12'} />
              </div>
            ) : (
              mainButtonContent && <span>Contact Tom</span>
            )}
            {contactSuccessMessage.status && (
              <span>{contactSuccessMessage.message}</span>
            )}
            {contactErrorMessage.status && (
              <span>{contactErrorMessage.message}</span>
            )}
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
