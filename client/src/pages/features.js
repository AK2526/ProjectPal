import React, { useContext } from 'react'
import { currentContext } from '../App'

function AddFeatures() {
    const { data, setData} = useContext(currentContext)

    return (
        <div className='p-10'>
            <h1 className='text-white text-4xl font-semibold '>Let's think of some features for our project!</h1>

            <h2 className='text-gray-400 text-2xl mt-3 font-semibold'>Your Idea: {data.idea}</h2>

        </div>
    )
}

export default AddFeatures