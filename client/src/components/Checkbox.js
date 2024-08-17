import React, { useContext } from 'react'
import { currentContext } from '../App'

function Checkbox({ index }) {
    const { data, setData } = useContext(currentContext)

    const handleChange = (e) => {
        const newData = { ...data }
        newData.done[index] = e.target.checked
        setData(newData)
    }
    return (
        <div className='flex flex-row p-4 pl-8 rounded-md border-4 border-gray-400 hover:border-white hover:cursor-pointer bg-slate-900'>
            <input type="checkbox" className='' style={{transform: 'scale(4)'}} checked={data.done[index]} onChange={handleChange}/>
            <div className='ml-8'>
            <label className='text-white text-3xl'>{data.plan[index]}</label>
            </div>
            

        </div>
    )
}

export default Checkbox