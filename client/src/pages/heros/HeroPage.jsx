import React from 'react'
import { Link } from 'react-router-dom'
// Components
import Navbar from '../../components/nav/Navbar'
function HeroPage() {
  return (
    <div>
      <Navbar />
      <section>
        <div>
          <Link to='/developer'><button className='submit__button'>Hire Private</button></Link>
          <Link to='/portfolio'><button className='submit__button'>Hire Dev</button></Link>
        </div>
      </section>
    </div>
  )
}

export default HeroPage