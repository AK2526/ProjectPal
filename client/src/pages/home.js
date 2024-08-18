import React from 'react'
import herocover from '../assets/herocover.jpg'
import Button from '../components/Button'

function Home() {
  return (
    <div className='p-10'>
      <div className='flex flex-row space-x-5 justify-evenly'>
        <img src={herocover} alt='hero' className='w-[50%] h-96 object-cover rounded-md'/>
        <div className='flex flex-col justify-evenly'>
        <h1 className='text-white text-6xl'>ARE YOU STUCK??????</h1>
        <h2 className='text-gray-400 text-3xl mt-5'>PROJECT PAL IS HERE TO HELP YOU OUT!!</h2>
        <p className='text-white text-2xl mt-5'>Project Pal is a web app that helps you generate project ideas, create a project plan and even provides you with resources to help you get started on your project.</p>
        <h3 className='text-gray-400 text-2xl mt-5'>Made by Alan K for Ignition Hacks 2024</h3>
        <Button title="Get Started" fn={()=>{window.location.href="/core"}} styles="mt-5"/>
        </div>
      
      </div>
        
    </div>
  )
}

export default Home