import React from 'react'
import logo from '../assets/logo.jpeg'

function Navbar() {
  return (
    <a href='/'>
      <div className='bg-primary shadow-md sticky top-0 z-50 flex flex-row p-4 justify-center'>

        <img src={logo} alt='logo' className='w-12 h-12 object-cover rounded-md border-2 border-white' style={{ transform: "scaleX(-1)" }} />
        <p className='text-white text-3xl text-center text-bold justify-center px-3'>Project Pal</p>
        <img src={logo} alt='logo' className='w-12 h-12 object-cover rounded-md border-2 border-white' />

      </div>
    </a>
  )
}

export default Navbar