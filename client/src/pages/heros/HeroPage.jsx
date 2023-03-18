import React from 'react'
import { Link } from 'react-router-dom'
// Components
import Navbar from '../../components/nav/Navbar'
function HeroPage() {
  return (
    <div className='h-screen grid grid-rows-reg'>
      <Navbar />
      <section className='grid h-full align-middle items-center justify-center'>
        <div className='w-full min-w-[300px] grid gap-2'>
          <Link to='/developer'><button className='submit__button'>Hire Private</button></Link>
          <Link to='/portfolio'><button className='alt__submit__button'>Hire Dev</button></Link>
        </div>
      </section>
    </div>
  )
}

export default HeroPage