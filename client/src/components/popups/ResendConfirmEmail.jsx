import React from 'react'

function ResendConfirmEmail({ handleResend }) {
  return (
    <>
    <section className='flex fixed bottom-0 h-12 bg-slate-400 w-full px-12 py-2'>
          <h3 className='w-full'>ResendVerificationEmail-</h3> 
          <button onClick={handleResend} className='submit__button'>Resend</button>
        </section>
    </>
  )
}

export default ResendConfirmEmail