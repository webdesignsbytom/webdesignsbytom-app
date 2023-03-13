import React, { useState } from 'react';
// Components
import SmallCountrySelect from '../../users/utils/SmallCountrySelect';
import client from '../../utils/client';

function ContactForm({ formData, setFormData }) {
  const [contactSuccessMessage, setContactSuccessMessage] = useState({})
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log('VALUE', value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  console.log('formData', formData);
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('formData', formData);
    client
      .post(`/contacts/create`, formData, false)
      .then((res) => {
        setContactSuccessMessage(res.data.data.createdContact);
      })
      .catch((err) => {
        console.error('Unable to send contact message', err);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='lg:w-full lg:my-auto lg:px-8'
      >
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
          <label className='flex justify-between' htmlFor='phone'><p>Phone:</p><p>* optional</p></label>
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
            handleChange={handleChange}
          ></textarea>
        </div>

        {/* <!-- Submit button --> */}
        <div className='mb-1'>
          <button
            type='submit'
            className='submit__button'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
