import React from 'react';
import CountrySelect from '../../users/utils/CountrySelect';

function ContactForm({ formData, setFormData }) {
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
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className='py-4 lg:w-full lg:my-auto lg:px-8'
      >
        {/* <!-- Email input --> */}
        <div className='mb-2'>
          <label htmlFor='email'>Email:</label>
          <input
            type='text'
            name='email'
            className='standard__inputs'
            placeholder='Email address'
            onChange={handleChange}
          />
        </div>
        {/* <!-- Phone input --> */}
        <div className='mb-2'>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='tel'
            name='phone'
            className='standard__inputs'
            placeholder='Phone address'
            onChange={handleChange}
          />
        </div>
        {/* <!-- FirstName input --> */}
        <div className='mb-2'>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            name='firstName'
            className='standard__inputs'
            placeholder='First Name'
            onChange={handleChange}
            required
          />
        </div>
        {/* <!-- LastName input --> */}
        <div className='mb-2'>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            className='standard__inputs'
            placeholder='LastName'
            onChange={handleChange}
            required
          />
        </div>
        {/* Country input */}
        <div className='mb-2'>
          <label htmlFor='country'>Country</label>
          <CountrySelect handleChange={handleChange} />
        </div>

        {/* Message input */}
        <div className='mb-2 p-1'>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' id='message' className='w-full' rows='10'></textarea>
        </div>
        {/* <!-- Submit button --> */}
        <div className='mb-2'>
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
