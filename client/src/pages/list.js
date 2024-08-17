import React, { useContext } from 'react'
import { currentContext } from '../App'
import Checkbox from '../components/Checkbox'

function List() {
    const { data, setData} = useContext(currentContext)
    console.log(data)

  return (
    <div className='p-10 flex justify-center'>
        
         <div className='flex flex-col space-y-7 max-w-[70%]'>
         <h1 className='text-white text-6xl font-semibold mb-4 '>Your project plan</h1>
{data.plan.map((a, i) => <Checkbox index={i} key={i}/>)}
    </div>
    </div>
   
  )
}

export default List