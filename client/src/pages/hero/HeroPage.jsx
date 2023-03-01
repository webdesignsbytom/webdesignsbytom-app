import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from '../../components/nav/Navbar'
function HeroPage() {
  return (
    <div>
      <Navbar />
      <Link to='/account'>Account</Link>
    </div>
  )
}

export default HeroPage