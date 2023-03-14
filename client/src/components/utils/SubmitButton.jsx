import React from 'react'
import LoadingSpinner from './LoadingSpinner'

function SubmitButton({ loadingAnimation ,mainButtonContent, successMessage, errorMessage, buttonMessage, spinnerHeight, spinnerWidth }) {
  return (
    <button
    type='submit'
    className='submit__button'
    data-mdb-ripple='true'
    data-mdb-ripple-color='light'
  >
    {loadingAnimation ? (
      <div className='grid'>
        <LoadingSpinner height={spinnerHeight} width={spinnerWidth} />
      </div>
    ) : (
      mainButtonContent && <span>{buttonMessage}</span>
    )}
    {successMessage.status && (
      <span>{successMessage.message}</span>
    )}
    {errorMessage.status && (
      <span>{errorMessage.message}</span>
    )}
  </button>
  )
}

export default SubmitButton